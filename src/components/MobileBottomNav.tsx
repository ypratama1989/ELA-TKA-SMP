import React, { useState } from 'react';
import { 
  Home, 
  BookOpen, 
  Compass, 
  Sparkles, 
  User, 
  X, 
  ChevronRight, 
  Calculator, 
  BookMarked, 
  Languages, 
  Atom, 
  Settings, 
  HelpCircle, 
  RefreshCw, 
  LogOut, 
  LogIn, 
  Clock, 
  Award,
  BookCheck,
  FileQuestion,
  ShieldCheck
} from 'lucide-react';
import { SubjectId, UserProfile, LicenseSession } from '../types';
import { getRemainingActiveInfo } from '../services/authLicenseService';

interface MobileBottomNavProps {
  currentView: 'dashboard' | 'pre_tka' | 'diagnostic' | 'subject' | 'flashcard';
  selectedSubject: SubjectId;
  userProfile: UserProfile;
  isLoggedIn?: boolean;
  licenseSession?: LicenseSession | null;
  onNavigate: (view: 'dashboard' | 'pre_tka' | 'diagnostic' | 'subject' | 'flashcard', subjectId?: SubjectId) => void;
  onOpenSettings: () => void;
  onOpenHelp: () => void;
  onOpenAppUpdate?: () => void;
  onOpenSoalUpdate: () => void;
  onOpenRoadmap: () => void;
  onOpenUserGuide: () => void;
  onOpenLogin?: () => void;
  onOpenLogout: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentView,
  selectedSubject,
  userProfile,
  isLoggedIn = false,
  licenseSession = null,
  onNavigate,
  onOpenSettings,
  onOpenHelp,
  onOpenAppUpdate,
  onOpenSoalUpdate,
  onOpenRoadmap,
  onOpenUserGuide,
  onOpenLogin,
  onOpenLogout,
}) => {
  const [isSubjectSheetOpen, setIsSubjectSheetOpen] = useState(false);
  const [isMenuSheetOpen, setIsMenuSheetOpen] = useState(false);

  const licenseInfo = getRemainingActiveInfo(licenseSession);

  const subjects = [
    {
      id: 'math' as SubjectId,
      name: 'Matematika',
      code: 'MTK',
      icon: Calculator,
      color: 'from-amber-500 to-amber-600',
      bgLight: 'bg-amber-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-800',
      iconBg: 'bg-amber-100 text-amber-700',
      desc: 'Aljabar, Bilangan, Geometri & Peluang'
    },
    {
      id: 'indo' as SubjectId,
      name: 'B. Indonesia',
      code: 'IND',
      icon: BookMarked,
      color: 'from-orange-500 to-orange-600',
      bgLight: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-800',
      iconBg: 'bg-orange-100 text-orange-700',
      desc: 'Literasi Teks, Kebahasaan & Ringkasan'
    },
    {
      id: 'eng' as SubjectId,
      name: 'B. Inggris',
      code: 'ENG',
      icon: Languages,
      color: 'from-sky-500 to-sky-600',
      bgLight: 'bg-sky-50',
      borderColor: 'border-sky-200',
      textColor: 'text-sky-800',
      iconBg: 'bg-sky-100 text-sky-700',
      desc: 'Reading Comprehension & Grammar'
    },
    {
      id: 'ipa' as SubjectId,
      name: 'Ilmu Pengetahuan Alam',
      code: 'IPA',
      icon: Atom,
      color: 'from-purple-500 to-violet-600',
      bgLight: 'bg-violet-50',
      borderColor: 'border-violet-200',
      textColor: 'text-violet-800',
      iconBg: 'bg-violet-100 text-violet-700',
      desc: 'Fisika, Biologi & Kimia Terpadu'
    },
  ];

  const handleSelectSubject = (id: SubjectId) => {
    setIsSubjectSheetOpen(false);
    onNavigate('subject', id);
  };

  return (
    <>
      {/* ===================================================================
          1. FIXED NATIVE BOTTOM NAVIGATION BAR (Mobile & Tablet < md)
      =================================================================== */}
      <nav 
        aria-label="Navigasi Utama Mobile"
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/90 shadow-[0_-8px_24px_rgba(15,23,42,0.08)] select-none"
        style={{ paddingBottom: 'max(0.35rem, env(safe-area-inset-bottom, 0px))' }}
      >
        <div className="max-w-md mx-auto grid grid-cols-5 px-1 py-1.5 items-center">
          
          {/* Tab 1: Beranda */}
          <button
            onClick={() => {
              setIsSubjectSheetOpen(false);
              setIsMenuSheetOpen(false);
              onNavigate('dashboard');
            }}
            className={`flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all duration-150 active:scale-90 cursor-pointer ${
              currentView === 'dashboard' && !isSubjectSheetOpen && !isMenuSheetOpen
                ? 'text-[#7C3AED]'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <div className={`relative p-1 rounded-xl transition-colors ${
              currentView === 'dashboard' && !isSubjectSheetOpen && !isMenuSheetOpen
                ? 'bg-violet-100 text-[#7C3AED]'
                : ''
            }`}>
              <Home className="w-5 h-5" />
            </div>
            <span className={`text-[10px] tracking-tight mt-0.5 ${
              currentView === 'dashboard' && !isSubjectSheetOpen && !isMenuSheetOpen
                ? 'font-black text-[#7C3AED]'
                : 'font-semibold text-slate-500'
            }`}>
              Beranda
            </span>
          </button>

          {/* Tab 2: Mapel (Buka Bottom Sheet Mapel) */}
          <button
            onClick={() => {
              setIsMenuSheetOpen(false);
              setIsSubjectSheetOpen(prev => !prev);
            }}
            className={`flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all duration-150 active:scale-90 cursor-pointer ${
              (currentView === 'subject' || isSubjectSheetOpen)
                ? 'text-[#7C3AED]'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <div className={`relative p-1 rounded-xl transition-colors ${
              (currentView === 'subject' || isSubjectSheetOpen)
                ? 'bg-violet-100 text-[#7C3AED]'
                : ''
            }`}>
              <BookOpen className="w-5 h-5" />
              {currentView === 'subject' && (
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-amber-400 border border-white" />
              )}
            </div>
            <span className={`text-[10px] tracking-tight mt-0.5 ${
              (currentView === 'subject' || isSubjectSheetOpen)
                ? 'font-black text-[#7C3AED]'
                : 'font-semibold text-slate-500'
            }`}>
              Mapel
            </span>
          </button>

          {/* Tab 3: Diagnostik */}
          <button
            onClick={() => {
              setIsSubjectSheetOpen(false);
              setIsMenuSheetOpen(false);
              onNavigate('diagnostic');
            }}
            className={`flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all duration-150 active:scale-90 cursor-pointer ${
              (currentView === 'diagnostic' || currentView === 'pre_tka') && !isSubjectSheetOpen && !isMenuSheetOpen
                ? 'text-[#7C3AED]'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <div className={`relative p-1 rounded-xl transition-colors ${
              (currentView === 'diagnostic' || currentView === 'pre_tka') && !isSubjectSheetOpen && !isMenuSheetOpen
                ? 'bg-violet-100 text-[#7C3AED]'
                : ''
            }`}>
              <Compass className="w-5 h-5" />
            </div>
            <span className={`text-[10px] tracking-tight mt-0.5 ${
              (currentView === 'diagnostic' || currentView === 'pre_tka') && !isSubjectSheetOpen && !isMenuSheetOpen
                ? 'font-black text-[#7C3AED]'
                : 'font-semibold text-slate-500'
            }`}>
              Diagnostik
            </span>
          </button>

          {/* Tab 4: Flashcard */}
          <button
            onClick={() => {
              setIsSubjectSheetOpen(false);
              setIsMenuSheetOpen(false);
              onNavigate('flashcard');
            }}
            className={`flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all duration-150 active:scale-90 cursor-pointer ${
              currentView === 'flashcard' && !isSubjectSheetOpen && !isMenuSheetOpen
                ? 'text-[#7C3AED]'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <div className={`relative p-1 rounded-xl transition-colors ${
              currentView === 'flashcard' && !isSubjectSheetOpen && !isMenuSheetOpen
                ? 'bg-violet-100 text-[#7C3AED]'
                : ''
            }`}>
              <Sparkles className="w-5 h-5" />
            </div>
            <span className={`text-[10px] tracking-tight mt-0.5 ${
              currentView === 'flashcard' && !isSubjectSheetOpen && !isMenuSheetOpen
                ? 'font-black text-[#7C3AED]'
                : 'font-semibold text-slate-500'
            }`}>
              Flashcard
            </span>
          </button>

          {/* Tab 5: Akun / Menu */}
          <button
            onClick={() => {
              setIsSubjectSheetOpen(false);
              setIsMenuSheetOpen(prev => !prev);
            }}
            className={`flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all duration-150 active:scale-90 cursor-pointer ${
              isMenuSheetOpen
                ? 'text-[#7C3AED]'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <div className={`relative p-1 rounded-xl transition-colors ${
              isMenuSheetOpen
                ? 'bg-violet-100 text-[#7C3AED]'
                : ''
            }`}>
              <User className="w-5 h-5" />
              {/* Status Indicator */}
              <span className={`absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full border border-white ${
                isLoggedIn ? 'bg-emerald-500' : 'bg-amber-400'
              }`} />
            </div>
            <span className={`text-[10px] tracking-tight mt-0.5 ${
              isMenuSheetOpen
                ? 'font-black text-[#7C3AED]'
                : 'font-semibold text-slate-500'
            }`}>
              Akun
            </span>
          </button>

        </div>
      </nav>

      {/* ===================================================================
          2. NATIVE BOTTOM SHEET: PEMILIH MATA PELAJARAN (MAPEL)
      =================================================================== */}
      {isSubjectSheetOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-end animate-in fade-in duration-200">
          {/* Backdrop blur */}
          <div 
            onClick={() => setIsSubjectSheetOpen(false)}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
          />

          {/* Sheet Modal */}
          <div 
            className="relative z-10 bg-white rounded-t-3xl shadow-2xl border-t border-slate-200/90 max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom-6 duration-200"
            style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom, 0px))' }}
          >
            {/* Grab handle */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-12 h-1.5 bg-slate-300 rounded-full" />
            </div>

            {/* Header */}
            <div className="px-5 py-3 flex items-center justify-between border-b border-slate-100">
              <div>
                <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#7C3AED]" />
                  Pilih Mata Pelajaran
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Modul materi, kuis topik, video &amp; simulasi Try Out
                </p>
              </div>
              <button
                onClick={() => setIsSubjectSheetOpen(false)}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Subject List */}
            <div className="p-4 space-y-2.5">
              {subjects.map((subj) => {
                const IconComponent = subj.icon;
                const isCurrent = currentView === 'subject' && selectedSubject === subj.id;

                return (
                  <button
                    key={subj.id}
                    onClick={() => handleSelectSubject(subj.id)}
                    className={`w-full p-3.5 rounded-2xl border-2 flex items-center justify-between gap-3 text-left transition transform active:scale-98 cursor-pointer ${
                      isCurrent
                        ? `${subj.bgLight} ${subj.borderColor} shadow-sm ring-2 ring-violet-500/20`
                        : 'bg-white hover:bg-slate-50 border-slate-200 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-black shrink-0 ${subj.iconBg}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-black text-sm text-slate-900 truncate">
                            {subj.name}
                          </h4>
                          {isCurrent && (
                            <span className="text-[9px] uppercase font-black px-2 py-0.5 rounded-full bg-[#7C3AED] text-white">
                              Aktif
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 font-medium truncate mt-0.5">
                          {subj.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0 text-slate-400">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================
          3. NATIVE BOTTOM SHEET: AKUN & MENU APLIKASI
      =================================================================== */}
      {isMenuSheetOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-end animate-in fade-in duration-200">
          {/* Backdrop blur */}
          <div 
            onClick={() => setIsMenuSheetOpen(false)}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
          />

          {/* Sheet Modal */}
          <div 
            className="relative z-10 bg-white rounded-t-3xl shadow-2xl border-t border-slate-200/90 max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom-6 duration-200"
            style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom, 0px))' }}
          >
            {/* Grab handle */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-12 h-1.5 bg-slate-300 rounded-full" />
            </div>

            {/* Profile Card in Sheet */}
            <div className="p-4 mx-4 mt-2 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-700 text-white shadow-md">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center font-black text-lg text-white shrink-0 shadow-inner">
                    {userProfile.displayName ? userProfile.displayName.charAt(0).toUpperCase() : 'S'}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-black text-sm text-white truncate">
                      {userProfile.displayName || 'Siswa Berprestasi'}
                    </h3>
                    <p className="text-[11px] text-violet-200 truncate">
                      {isLoggedIn && licenseSession?.email ? licenseSession.email : 'Mode Tamu (Pratinjau)'}
                    </p>
                    <div className="mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-black tracking-wide text-amber-300">
                      <Clock className="w-2.5 h-2.5" />
                      <span>{licenseInfo.badgeLabel}</span>
                    </div>
                  </div>
                </div>

                {!isLoggedIn ? (
                  <button
                    onClick={() => {
                      setIsMenuSheetOpen(false);
                      onOpenLogin?.();
                    }}
                    className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black shrink-0 transition active:scale-95 shadow-sm cursor-pointer"
                  >
                    Masuk
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setIsMenuSheetOpen(false);
                      onOpenLogout();
                    }}
                    className="p-2 rounded-xl bg-white/15 hover:bg-rose-500/80 text-white transition active:scale-95 shrink-0 cursor-pointer"
                    title="Keluar Akun"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Quick Actions List in Sheet */}
            <div className="p-4 space-y-1">
              {/* 1. Pengaturan Profil & Nama */}
              <button
                onClick={() => {
                  setIsMenuSheetOpen(false);
                  onOpenSettings();
                }}
                className="w-full px-4 py-3 rounded-xl flex items-center justify-between text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-100 text-violet-700 flex items-center justify-center">
                    <Settings className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-black text-slate-800">Pengaturan Akun &amp; Profil</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              {/* 2. Roadmap Belajar */}
              <button
                onClick={() => {
                  setIsMenuSheetOpen(false);
                  onOpenRoadmap();
                }}
                className="w-full px-4 py-3 rounded-xl flex items-center justify-between text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                    <BookCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-black text-slate-800">Roadmap Belajar TKA</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              {/* 3. Panduan Penggunaan Siswa */}
              <button
                onClick={() => {
                  setIsMenuSheetOpen(false);
                  onOpenUserGuide();
                }}
                className="w-full px-4 py-3 rounded-xl flex items-center justify-between text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
                    <FileQuestion className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-black text-slate-800">Panduan Penggunaan Siswa</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              {/* 4. Soal Update Terbaru */}
              <button
                onClick={() => {
                  setIsMenuSheetOpen(false);
                  onOpenSoalUpdate();
                }}
                className="w-full px-4 py-3 rounded-xl flex items-center justify-between text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-black text-slate-800">Soal Update Terbaru</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              {/* 5. Update Aplikasi */}
              {onOpenAppUpdate && (
                <button
                  onClick={() => {
                    setIsMenuSheetOpen(false);
                    onOpenAppUpdate();
                  }}
                  className="w-full px-4 py-3 rounded-xl flex items-center justify-between text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center">
                      <RefreshCw className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-black text-slate-800">Periksa Pembaruan Aplikasi</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              )}

              {/* 6. Bantuan Customer Service */}
              <button
                onClick={() => {
                  setIsMenuSheetOpen(false);
                  onOpenHelp();
                }}
                className="w-full px-4 py-3 rounded-xl flex items-center justify-between text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-black text-slate-800">Bantuan &amp; Customer Service</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Footer info in Sheet */}
            <div className="px-5 pt-3 pb-2 border-t border-slate-100 text-center">
              <p className="text-[10px] text-slate-400 font-bold">
                Edufillah Learning App &bull; Versi 2.4.0 (TKA SMP Terpadu)
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
