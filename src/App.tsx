import React, { useState, useEffect, useRef } from 'react';
import { UserProfile, SubjectId, QuizConfig, LicenseSession } from './types';
import { getActiveProfileFromLocalStorage } from './lib/firebase';
import { 
  getLocalLicenseSession, 
  isLicenseActive, 
  logoutLicense, 
  getActiveOrGuestProfile,
  verifyCurrentSession 
} from './services/authLicenseService';

// Components
import { LoginModal } from './components/LoginModal';
import { OnboardingModal } from './components/OnboardingModal';
import { Navbar } from './components/Navbar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { DashboardView } from './components/DashboardView';
import { DiagnosticTestView } from './components/DiagnosticTestView';
import { SubjectDetailView } from './components/SubjectDetailView';
import { FlashcardView } from './components/FlashcardView';
import { LogoutModal } from './components/LogoutModal';
import { HelpCSModal } from './components/HelpCSModal';
import { SettingsModal } from './components/SettingsModal';
import { AppUpdateModal } from './components/AppUpdateModal';
import { QuizRunnerModal } from './components/QuizRunnerModal';
import { TryOutCbtModal } from './components/TryOutCbtModal';
import { SoalUpdateModal } from './components/SoalUpdateModal';
import { RoadmapBelajarModal } from './components/RoadmapBelajarModal';
import { UserGuideModal } from './components/UserGuideModal';
import { SoalTka2026Modal } from './components/SoalTka2026Modal';
import { OfflineIndicator } from './components/OfflineIndicator';
import { FloatingUpdateBar } from './components/FloatingUpdateBar';
import { subscribeToAppUpdates } from './services/appUpdateService';
import { preloadAllOfflineModules } from './services/offlineHtmlService';
import { 
  checkAndConsumeProgrammaticBack, 
  popTopModal, 
  hasOpenModals, 
  handleDashboardExitAttempt 
} from './services/backNavigation';
import { useModalBackHandler } from './hooks/useModalBackHandler';

export default function App() {
  // License & Profile State (Mode Tamu jika belum login)
  const [licenseSession, setLicenseSession] = useState<LicenseSession | null>(() => getLocalLicenseSession());
  const isLoggedIn = !!licenseSession && isLicenseActive();
  const [userProfile, setUserProfile] = useState<UserProfile>(() => getActiveOrGuestProfile());

  // View state
  const [currentView, setCurrentView] = useState<'dashboard' | 'pre_tka' | 'diagnostic' | 'subject' | 'flashcard'>('dashboard');
  const [selectedSubject, setSelectedSubject] = useState<SubjectId>('math');

  // Modals state
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginFeatureNotice, setLoginFeatureNotice] = useState<string | null>(null);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAppUpdateOpen, setIsAppUpdateOpen] = useState(false);
  const [isSoalUpdateModalOpen, setIsSoalUpdateModalOpen] = useState(false);
  const [isRoadmapModalOpen, setIsRoadmapModalOpen] = useState(false);
  const [isUserGuideModalOpen, setIsUserGuideModalOpen] = useState(false);
  const [isSoalTkaModalOpen, setIsSoalTkaModalOpen] = useState(false);
  const [isFloatingUpdateOpen, setIsFloatingUpdateOpen] = useState(false);
  const [activeQuizConfig, setActiveQuizConfig] = useState<QuizConfig | null>(null);

  const promptLogin = (featureName?: string) => {
    setLoginFeatureNotice(featureName || null);
    setIsLoginModalOpen(true);
  };

  // Floating Toast State for Double-Back-to-Exit on Mobile / Tablet
  const [exitToastMessage, setExitToastMessage] = useState<string | null>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showExitToast = (msg: string) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setExitToastMessage(msg);
    toastTimeoutRef.current = setTimeout(() => {
      setExitToastMessage(null);
    }, 2500);
  };

  // Register App-level modals with Back Button navigation
  useModalBackHandler(isLoginModalOpen, () => setIsLoginModalOpen(false), 'loginModal');
  useModalBackHandler(!!activeQuizConfig, () => setActiveQuizConfig(null), 'activeQuizModal');
  useModalBackHandler(isSettingsOpen, () => setIsSettingsOpen(false), 'settingsModal');
  useModalBackHandler(isAppUpdateOpen, () => setIsAppUpdateOpen(false), 'appUpdateModal');
  useModalBackHandler(isHelpOpen, () => setIsHelpOpen(false), 'helpModal');
  useModalBackHandler(isLogoutOpen, () => setIsLogoutOpen(false), 'logoutModal');
  useModalBackHandler(isOnboardingOpen, () => setIsOnboardingOpen(false), 'onboardingModal');
  useModalBackHandler(isSoalUpdateModalOpen, () => setIsSoalUpdateModalOpen(false), 'soalUpdateModal');
  useModalBackHandler(isRoadmapModalOpen, () => setIsRoadmapModalOpen(false), 'roadmapModal');
  useModalBackHandler(isUserGuideModalOpen, () => setIsUserGuideModalOpen(false), 'userGuideModal');
  useModalBackHandler(isSoalTkaModalOpen, () => setIsSoalTkaModalOpen(false), 'soalTkaModal');

  // Keep ref of current view for popstate handler
  const currentViewRef = useRef(currentView);
  currentViewRef.current = currentView;

  // Initialize history and listen for device Back button (popstate)
  useEffect(() => {
    // 1. Initial State Setup
    const hash = window.location.hash;
    let initView: 'dashboard' | 'pre_tka' | 'diagnostic' | 'subject' | 'flashcard' = 'dashboard';
    let initSub: SubjectId = 'math';

    if (hash.startsWith('#subject-')) {
      const sub = hash.replace('#subject-', '') as SubjectId;
      if (['math', 'indo', 'eng', 'ipa'].includes(sub)) {
        initView = 'subject';
        initSub = sub;
      }
    } else if (hash === '#diagnostic' || hash === '#pre_tka') {
      initView = 'diagnostic';
    } else if (hash === '#flashcard') {
      initView = 'flashcard';
    }

    // Jika belum login dan mengakses fitur yang terkunci penuh untuk tamu (misal: flashcard)
    if (!isLicenseActive() && initView === 'flashcard') {
      initView = 'dashboard';
    }

    setCurrentView(initView);
    setSelectedSubject(initSub);

    // 1. Heartbeat sesi berkala ke Google Apps Script (setiap 15 menit)
    const HEARTBEAT_INTERVAL_MS = 15 * 60 * 1000;
    const runPassiveSessionCheck = async (notifyOnKick = false) => {
      const current = getLocalLicenseSession();
      if (!current || !current.isLoggedIn || !current.email) return;

      const { isValid, reason } = await verifyCurrentSession();
      const updated = getLocalLicenseSession();
      setLicenseSession(updated);

      if (!isValid) {
        setUserProfile(getActiveOrGuestProfile());
        if (notifyOnKick) {
          if (reason === 'device_locked') {
            setExitToastMessage('⚠️ Akun aktif di perangkat lain. Akses dialihkan ke Mode Tamu.');
          } else if (reason === 'expired') {
            setExitToastMessage('⚠️ Masa aktif lisensi telah habis. Akses dialihkan ke Mode Tamu.');
          } else {
            setExitToastMessage('ℹ️ Sesi lisensi telah berakhir. Akses dialihkan ke Mode Tamu.');
          }
          setTimeout(() => setExitToastMessage(null), 6000);
        }
      }
    };

    // Pengecekan saat aplikasi pertama kali dimuat
    runPassiveSessionCheck(false);

    // Heartbeat berkala setiap 15 menit
    const heartbeatInterval = setInterval(() => {
      runPassiveSessionCheck(true);
    }, HEARTBEAT_INTERVAL_MS);

    // Cek ulang saat tab browser kembali aktif / dilihat
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        runPassiveSessionCheck(true);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Pasang pendengar otomatis update Service Worker / PWA (Floating Update Bar)
    const unsubscribeUpdates = subscribeToAppUpdates(() => {
      setIsFloatingUpdateOpen(true);
    });

    // Ensure root & guard entries exist in browser history to prevent abrupt exit on mobile
    try {
      window.history.replaceState(
        { type: 'view', view: initView, subjectId: initSub, isRoot: true },
        '',
        window.location.pathname + (window.location.hash || '#dashboard')
      );
      window.history.pushState(
        { type: 'view', view: initView, subjectId: initSub, isGuard: true },
        '',
        window.location.pathname + (window.location.hash || '#dashboard')
      );
    } catch (e) {
      console.debug('History init state skipped:', e);
    }

    // 2. Window PopState (Tombol Back HP / Tablet / Browser)
    const handlePopState = (event: PopStateEvent) => {
      // Jika popstate ini dipicu oleh penutupan modal via klik tombol UI, abaikan
      if (checkAndConsumeProgrammaticBack()) {
        return;
      }

      // Prioritas 1: Jika ada modal terbuka (quiz CBT, video, badge, CS, dll), tutup modal terlebih dahulu
      if (popTopModal()) {
        return;
      }

      // Prioritas 2: Jika pengguna sedang di halaman sub-view (Mapel, Diagnostic, Flashcard)
      if (currentViewRef.current !== 'dashboard') {
        const state = event.state;
        if (state && state.type === 'view' && state.view) {
          setCurrentView(state.view);
          if (state.subjectId) {
            setSelectedSubject(state.subjectId);
          }
        } else {
          // Default: kembali ke dashboard jika tidak ada state spesifik
          setCurrentView('dashboard');
        }
        return;
      }

      // Prioritas 3: Pengguna sedang berada di root Dashboard
      // Cegah keluar aplikasi secara tak sengaja di HP/tablet dengan double-back confirmation
      const allowExit = handleDashboardExitAttempt((msg) => {
        showExitToast(msg);
      });

      if (!allowExit) {
        // App ditahan agar tidak langsung menutup / keluar dari aplikasi
        event.preventDefault?.();
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      clearInterval(heartbeatInterval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      unsubscribeUpdates();
      window.removeEventListener('popstate', handlePopState);
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    };
  }, []);

  // Load initial user profile state from LocalStorage
  useEffect(() => {
    const savedLocalProfile = getActiveProfileFromLocalStorage();
    if (savedLocalProfile) {
      setUserProfile(savedLocalProfile);
      if (!savedLocalProfile.displayName) {
        setIsOnboardingOpen(true);
      }
    }

    // Preload all offline learning modules (quizzes, flashcards, diagnostic tests) into IndexedDB & CacheStorage
    const preloadTimer = setTimeout(() => {
      preloadAllOfflineModules().catch((err) => {
        console.debug('Background offline preload status:', err);
      });
    }, 1500);

    return () => {
      clearTimeout(preloadTimer);
    };
  }, []);

  const refreshProfile = async () => {
    if (userProfile?.uid) {
      const updated = getActiveProfileFromLocalStorage(userProfile.uid);
      if (updated) {
        setUserProfile(updated);
      }
    }
  };

  const handleLicenseLoginSuccess = (session: LicenseSession) => {
    setLicenseSession(session);
    const updated = getActiveOrGuestProfile();
    setUserProfile(updated);
    setIsLoginModalOpen(false);
    setLoginFeatureNotice(null);
  };

  const handleSaveDisplayName = (name: string) => {
    if (userProfile) {
      setUserProfile({
        ...userProfile,
        displayName: name,
      });
    }
    setIsOnboardingOpen(false);
  };

  const handleConfirmLogout = async () => {
    await logoutLicense();
    setIsLogoutOpen(false);
    setLicenseSession(null);
    setUserProfile(getActiveOrGuestProfile());
    setCurrentView('dashboard');
  };

  const handleStartQuiz = (config: QuizConfig) => {
    if (!isLoggedIn && !config.isGuestAllowed) {
      promptLogin('Latihan Soal & Try Out CBT');
      return;
    }
    setActiveQuizConfig(config);
  };

  const handleNavigate = (view: string, subjectId?: SubjectId) => {
    // Kunci fitur yang tidak terbuka untuk mode tamu
    if (!isLoggedIn && view === 'flashcard') {
      promptLogin('Flashcard TKA');
      return;
    }

    let targetHash = '#dashboard';
    let targetView: 'dashboard' | 'pre_tka' | 'diagnostic' | 'subject' | 'flashcard' = 'dashboard';
    let targetSub: SubjectId = selectedSubject;

    if (view === 'subject' && subjectId) {
      targetSub = subjectId;
      targetView = 'subject';
      targetHash = `#subject-${subjectId}`;
      setSelectedSubject(subjectId);
      setCurrentView('subject');
    } else if (view === 'diagnostic' || view === 'pre_tka') {
      if (subjectId) {
        targetSub = subjectId;
        setSelectedSubject(subjectId);
      }
      targetView = 'diagnostic';
      targetHash = '#diagnostic';
      setCurrentView('diagnostic');
    } else if (view === 'flashcard') {
      if (subjectId) {
        targetSub = subjectId;
        setSelectedSubject(subjectId);
      }
      targetView = 'flashcard';
      targetHash = '#flashcard';
      setCurrentView('flashcard');
    } else {
      targetView = 'dashboard';
      targetHash = '#dashboard';
      setCurrentView('dashboard');
    }

    try {
      window.history.pushState(
        { type: 'view', view: targetView, subjectId: targetSub, timestamp: Date.now() },
        '',
        window.location.pathname + targetHash
      );
    } catch (e) {
      console.debug('History pushState error:', e);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FD] text-slate-800 flex flex-col font-sans selection:bg-violet-200 selection:text-violet-900">
      {/* Top Navbar */}
      <Navbar
        userProfile={userProfile}
        currentView={currentView}
        isLoggedIn={isLoggedIn}
        licenseSession={licenseSession}
        onNavigateHome={() => handleNavigate('dashboard')}
        onOpenLogin={() => promptLogin()}
        onOpenLogout={() => setIsLogoutOpen(true)}
        onOpenHelp={() => setIsHelpOpen(true)}
        onOpenProfile={() => {
          if (!isLoggedIn) {
            promptLogin('Profil Siswa');
          } else {
            setIsOnboardingOpen(true);
          }
        }}
        onOpenSettings={() => {
          if (!isLoggedIn) {
            promptLogin('Pengaturan Akun');
          } else {
            setIsSettingsOpen(true);
          }
        }}
        onOpenAppUpdate={() => setIsAppUpdateOpen(true)}
        onOpenSoalUpdate={() => {
          if (!isLoggedIn) {
            promptLogin('Soal Update Terbaru');
          } else {
            setIsSoalUpdateModalOpen(true);
          }
        }}
        onOpenRoadmap={() => setIsRoadmapModalOpen(true)}
        onOpenUserGuide={() => setIsUserGuideModalOpen(true)}
      />

      {/* Main View Container with safe bottom padding for Mobile Bottom Navigation */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 pt-3 sm:pt-6 pb-28 md:pb-10">
        {currentView === 'dashboard' && (
          <DashboardView
            userProfile={userProfile}
            isLoggedIn={isLoggedIn}
            licenseSession={licenseSession}
            onNavigate={handleNavigate}
            onStartQuiz={handleStartQuiz}
            onOpenSettings={() => {
              if (!isLoggedIn) {
                promptLogin('Pengaturan Akun');
              } else {
                setIsSettingsOpen(true);
              }
            }}
            onRequireLogin={(featureName) => promptLogin(featureName)}
            onOpenSoalTka={() => {
              setIsSoalTkaModalOpen(true);
            }}
          />
        )}

        {(currentView === 'diagnostic' || currentView === 'pre_tka') && (
          <DiagnosticTestView
            userProfile={userProfile}
            initialSubject={selectedSubject}
            onStartQuiz={handleStartQuiz}
            onBack={() => handleNavigate('dashboard')}
            isLoggedIn={isLoggedIn}
            onRequireLogin={(featureName) => promptLogin(featureName)}
          />
        )}

        {currentView === 'subject' && (
          <SubjectDetailView
            subjectId={selectedSubject}
            userProfile={userProfile}
            onStartQuiz={handleStartQuiz}
            onRefreshProfile={refreshProfile}
            onBack={() => handleNavigate('dashboard')}
            isLoggedIn={isLoggedIn}
            onRequireLogin={(featureName) => promptLogin(featureName)}
          />
        )}

        {currentView === 'flashcard' && (
          <FlashcardView
            userProfile={userProfile}
            initialSubject={selectedSubject}
            onBack={() => handleNavigate('dashboard')}
          />
        )}
      </main>

      {/* Modals */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLicenseLoginSuccess}
        featureName={loginFeatureNotice}
      />
      <OnboardingModal
        uid={userProfile.uid}
        initialName={userProfile.displayName}
        isOpen={isOnboardingOpen}
        onSaveName={handleSaveDisplayName}
      />

      <LogoutModal
        isOpen={isLogoutOpen}
        onClose={() => setIsLogoutOpen(false)}
        onConfirmLogout={handleConfirmLogout}
      />

      <HelpCSModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        userProfile={userProfile}
        onProfileUpdated={(updated) => setUserProfile(updated)}
      />

      <AppUpdateModal
        isOpen={isAppUpdateOpen}
        onClose={() => setIsAppUpdateOpen(false)}
      />

      <SoalUpdateModal
        isOpen={isSoalUpdateModalOpen}
        onClose={() => setIsSoalUpdateModalOpen(false)}
        onStartQuiz={handleStartQuiz}
      />

      <RoadmapBelajarModal
        isOpen={isRoadmapModalOpen}
        onClose={() => setIsRoadmapModalOpen(false)}
        onNavigate={(view, sub) => {
          handleNavigate(view, sub);
        }}
        onOpenSoalTka={() => {
          setIsSoalTkaModalOpen(true);
        }}
        onOpenSoalUpdate={() => {
          if (!isLoggedIn) {
            promptLogin('Soal Update Terbaru');
          } else {
            setIsSoalUpdateModalOpen(true);
          }
        }}
      />

      <UserGuideModal
        isOpen={isUserGuideModalOpen}
        onClose={() => setIsUserGuideModalOpen(false)}
        onNavigate={(view, sub) => {
          handleNavigate(view, sub);
        }}
        onOpenSoalTka={() => {
          setIsSoalTkaModalOpen(true);
        }}
        onOpenSoalUpdate={() => {
          if (!isLoggedIn) {
            promptLogin('Soal Update Terbaru');
          } else {
            setIsSoalUpdateModalOpen(true);
          }
        }}
        onOpenSettings={() => {
          if (!isLoggedIn) {
            promptLogin('Pengaturan Akun');
          } else {
            setIsSettingsOpen(true);
          }
        }}
      />

      <SoalTka2026Modal
        isOpen={isSoalTkaModalOpen}
        onClose={() => setIsSoalTkaModalOpen(false)}
        userProfile={userProfile}
        onNavigate={handleNavigate}
        onStartQuiz={handleStartQuiz}
      />

      {activeQuizConfig && activeQuizConfig.type === 'tryout' ? (
        <TryOutCbtModal
          uid={userProfile.uid}
          config={activeQuizConfig}
          onClose={() => setActiveQuizConfig(null)}
          onQuizCompleted={refreshProfile}
        />
      ) : activeQuizConfig ? (
        <QuizRunnerModal
          uid={userProfile.uid}
          config={activeQuizConfig}
          onClose={() => setActiveQuizConfig(null)}
          onQuizCompleted={refreshProfile}
        />
      ) : null}

      <OfflineIndicator />

      {/* Floating Auto-Update Bar (Mobile & Desktop Friendly, Tanpa Reset Data Siswa) */}
      <FloatingUpdateBar
        isOpen={isFloatingUpdateOpen}
        onClose={() => setIsFloatingUpdateOpen(false)}
      />

      {/* Persistent Native Mobile Bottom Navigation Bar (< md) */}
      <MobileBottomNav
        currentView={currentView}
        selectedSubject={selectedSubject}
        userProfile={userProfile}
        isLoggedIn={isLoggedIn}
        licenseSession={licenseSession}
        onNavigate={handleNavigate}
        onOpenSettings={() => {
          if (!isLoggedIn) {
            promptLogin('Pengaturan Akun');
          } else {
            setIsSettingsOpen(true);
          }
        }}
        onOpenHelp={() => setIsHelpOpen(true)}
        onOpenAppUpdate={() => setIsAppUpdateOpen(true)}
        onOpenSoalUpdate={() => {
          if (!isLoggedIn) {
            promptLogin('Soal Update Terbaru');
          } else {
            setIsSoalUpdateModalOpen(true);
          }
        }}
        onOpenRoadmap={() => setIsRoadmapModalOpen(true)}
        onOpenUserGuide={() => setIsUserGuideModalOpen(true)}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        onOpenLogout={() => setIsLogoutOpen(true)}
      />

      {/* Floating Exit Toast Notification for Mobile / Tablet */}
      {exitToastMessage && (
        <div className="fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 bg-slate-900/95 text-white text-xs sm:text-sm font-semibold rounded-full shadow-2xl border border-slate-700/80 backdrop-blur-md flex items-center gap-2.5 max-w-[90vw] animate-in fade-in slide-in-from-bottom-3 duration-200">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping shrink-0" />
          <span className="truncate">{exitToastMessage}</span>
        </div>
      )}
    </div>
  );
}
