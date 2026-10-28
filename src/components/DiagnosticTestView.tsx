import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  BookMarked,
  Languages,
  Atom,
  ArrowLeft,
  Compass,
  ExternalLink,
  RotateCw,
  Maximize2,
  Minimize2,
  CheckCircle2,
  Clock,
  Sparkles,
  Info,
  Lock
} from 'lucide-react';
import { UserProfile, QuizConfig, SubjectId } from '../types';
import { loadOfflineHtml } from '../services/offlineHtmlService';

interface DiagnosticTestViewProps {
  userProfile?: UserProfile;
  initialSubject?: SubjectId;
  isLoggedIn?: boolean;
  onRequireLogin?: (featureName: string) => void;
  onStartQuiz?: (config: QuizConfig) => void;
  onBack: () => void;
}

interface SubjectItem {
  id: SubjectId;
  title: string;
  fullName: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  activeBg: string;
  inactiveBg: string;
  badgeBg: string;
  borderColor: string;
  link: string; // Tautan ke file HTML diagnostic test
  description: string;
}

export const DiagnosticTestView: React.FC<DiagnosticTestViewProps> = ({ 
  initialSubject = 'math',
  isLoggedIn = false,
  onRequireLogin,
  onBack 
}) => {
  // Jika tamu, default langsung ke Bahasa Indonesia (satu-satunya yang terbuka untuk tamu)
  const defaultSubject = !isLoggedIn ? 'indo' : initialSubject;
  const [activeSubject, setActiveSubject] = useState<SubjectId>(defaultSubject);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [iframeKey, setIframeKey] = useState<number>(Date.now());
  const [isLoadingIframe, setIsLoadingIframe] = useState<boolean>(true);
  const [htmlContent, setHtmlContent] = useState<string | null>(null);

  // Konfigurasi 4 Mata Pelajaran Diagnostic Test
  const subjects: SubjectItem[] = [
    {
      id: 'math',
      title: 'Matematika',
      fullName: 'TKA Matematika SMP Diagnostic Test',
      icon: Calculator,
      color: 'text-white',
      activeBg: 'bg-[#06B6D4] border-2 border-[#0891B2] text-white shadow-lg',
      inactiveBg: 'bg-[#382B6D] border-2 border-[#5B4AA8] text-white hover:border-[#06B6D4] shadow-xs',
      badgeBg: 'bg-[#06B6D4] text-white border-white/20',
      borderColor: 'border-[#06B6D4]',
      link: '/diagnostic_test/tka_matematika_smp_diagnostic_test.html',
      description: '60 Soal • 24 Kompetensi • Bilangan, Aljabar, Geometri, Data & Peluang',
    },
    {
      id: 'indo',
      title: 'B. Indonesia',
      fullName: 'TKA Bahasa Indonesia SMP Diagnostic Test',
      icon: BookMarked,
      color: 'text-white',
      activeBg: 'bg-[#10B981] border-2 border-[#059669] text-white shadow-lg',
      inactiveBg: 'bg-[#382B6D] border-2 border-[#5B4AA8] text-white hover:border-[#10B981] shadow-xs',
      badgeBg: 'bg-[#10B981] text-white border-white/20',
      borderColor: 'border-[#10B981]',
      link: '/diagnostic_test/tka_bahasa_indonesia_smp_diagnostic_test.html',
      description: '60 Soal • 12 Stimulus • 11 Kompetensi Membaca & Menulis',
    },
    {
      id: 'eng',
      title: 'B. Inggris',
      fullName: 'TKA Bahasa Inggris SMP Diagnostic Test',
      icon: Languages,
      color: 'text-white',
      activeBg: 'bg-[#F97316] border-2 border-[#EA580C] text-white shadow-lg',
      inactiveBg: 'bg-[#382B6D] border-2 border-[#5B4AA8] text-white hover:border-[#F97316] shadow-xs',
      badgeBg: 'bg-[#F97316] text-white border-white/20',
      borderColor: 'border-[#F97316]',
      link: '/diagnostic_test/tka_bahasa_inggris_smp_diagnostic_test.html',
      description: '60 Soal • 18 Kompetensi • Text Comprehension, Functional & Grammar',
    },
    {
      id: 'ipa',
      title: 'IPA',
      fullName: 'TKA IPA SMP Diagnostic Test',
      icon: Atom,
      color: 'text-white',
      activeBg: 'bg-[#8B5CF6] border-2 border-[#7C3AED] text-white shadow-lg',
      inactiveBg: 'bg-[#382B6D] border-2 border-[#5B4AA8] text-white hover:border-[#8B5CF6] shadow-xs',
      badgeBg: 'bg-[#8B5CF6] text-white border-white/20',
      borderColor: 'border-[#8B5CF6]',
      link: '/diagnostic_test/tka_ipa_smp_diagnostic_test.html',
      description: '60 Soal • 18 Kompetensi • Matter, Physics, Life Science & Earth Space',
    },
  ];

  const currentSubject = subjects.find(s => s.id === activeSubject) || subjects[0];
  const hasActiveLink = Boolean(currentSubject.link && currentSubject.link.trim() !== '');

  useEffect(() => {
    let isMounted = true;
    setIsLoadingIframe(true);

    if (currentSubject.link) {
      loadOfflineHtml(currentSubject.link)
        .then((content) => {
          if (isMounted) {
            setHtmlContent(content);
            setIsLoadingIframe(false);
          }
        })
        .catch(() => {
          if (isMounted) {
            setIsLoadingIframe(false);
          }
        });
    } else {
      setHtmlContent(null);
      setIsLoadingIframe(false);
    }

    return () => {
      isMounted = false;
    };
  }, [activeSubject, iframeKey, currentSubject.link]);

  const handleSelectSubject = (subjId: SubjectId) => {
    if (!isLoggedIn && subjId !== 'indo') {
      const subjName = subjects.find(s => s.id === subjId)?.title || subjId;
      onRequireLogin?.(`Diagnostic Test ${subjName}`);
      return;
    }
    if (subjId === activeSubject) return;
    setActiveSubject(subjId);
    setIsLoadingIframe(true);
    setIframeKey(Date.now());
  };

  const handleReload = () => {
    setIsLoadingIframe(true);
    setIframeKey(Date.now());
  };

  const handleOpenNewTab = () => {
    if (currentSubject.link) {
      window.open(encodeURI(currentSubject.link), '_blank', 'noopener,noreferrer');
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`space-y-4 sm:space-y-6 pb-12 font-sans max-w-6xl mx-auto animate-fade-in ${
      isFullscreen ? 'fixed inset-0 z-50 bg-[#4A3B8C] p-2 sm:p-4 overflow-y-auto max-w-none' : ''
    }`}>
      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 bg-[#382B6D] p-3.5 sm:p-5 rounded-3xl border-2 border-[#5B4AA8] shadow-lg text-white">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <button
            onClick={isFullscreen ? toggleFullscreen : onBack}
            className="p-2 sm:p-2.5 bg-[#4A3B8C] hover:bg-[#5B4AA8] text-white rounded-xl transition flex items-center justify-center border border-[#6B56C4] shadow-xs shrink-0 min-w-[38px] min-h-[38px] sm:min-w-[44px] sm:min-h-[44px]"
            title={isFullscreen ? 'Keluar Layar Penuh' : 'Kembali ke Beranda'}
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
          
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-white bg-[#06B6D4] px-2.5 py-0.5 rounded-full inline-flex items-center gap-1 shadow-xs">
                <Compass className="w-3 h-3 shrink-0" /> Diagnostic Test TKA
              </span>
            </div>
            <h1 className="text-sm sm:text-xl md:text-2xl font-black text-white mt-1 truncate">
              {currentSubject.fullName}
            </h1>
          </div>
        </div>

        {/* Toolbar actions (if has active test link) */}
        {hasActiveLink && (
          <div className="flex items-center gap-1.5 sm:gap-2 self-stretch sm:self-auto justify-end pt-1 sm:pt-0 border-t border-[#5B4AA8]/50 sm:border-t-0">
            <button
              onClick={handleReload}
              className="flex-1 sm:flex-initial px-2.5 sm:px-3.5 py-2 bg-[#4A3B8C] hover:bg-[#5B4AA8] text-white text-[11px] sm:text-xs font-black rounded-xl transition border border-[#6B56C4] flex items-center justify-center gap-1.5 shadow-xs min-h-[38px]"
              title="Muat Ulang Tes"
            >
              <RotateCw className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>Reset</span>
            </button>

            <button
              onClick={handleOpenNewTab}
              className="flex-1 sm:flex-initial px-2.5 sm:px-3.5 py-2 bg-[#4A3B8C] hover:bg-[#5B4AA8] text-white text-[11px] sm:text-xs font-black rounded-xl transition border border-[#6B56C4] flex items-center justify-center gap-1.5 shadow-xs min-h-[38px]"
              title="Buka di Tab Baru"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>Tab Baru</span>
            </button>

            <button
              onClick={toggleFullscreen}
              className="flex-1 sm:flex-initial px-2.5 sm:px-3.5 py-2 text-[11px] sm:text-xs font-black rounded-xl transition border border-[#6B56C4] bg-[#06B6D4] hover:bg-[#0891B2] text-white flex items-center justify-center gap-1.5 shadow-xs min-h-[38px]"
              title={isFullscreen ? 'Perkecil Layar' : 'Layar Penuh'}
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5 text-white" /> : <Maximize2 className="w-3.5 h-3.5 text-white" />}
              <span>{isFullscreen ? 'Kecilkan' : 'Full Screen'}</span>
            </button>
          </div>
        )}
      </div>

      {/* Header Quote Banner / Guest Mode Banner (when not fullscreen) */}
      {!isFullscreen && (
        <>
          {!isLoggedIn && (
            <div className="bg-amber-500/15 border border-amber-500/30 rounded-2xl p-3.5 sm:p-4 text-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md backdrop-blur-xs">
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 shrink-0 mt-0.5 sm:mt-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-amber-100">
                    Mode Pratinjau (Tamu): Diagnostic Test Bahasa Indonesia Terbuka Bebas
                  </p>
                  <p className="text-[11px] sm:text-xs text-amber-300/80 mt-0.5 leading-relaxed">
                    Kamu dapat mengerjakan 60 Soal Diagnostic Test Bahasa Indonesia secara lengkap. Diagnostic Test Matematika, B. Inggris, dan IPA dapat diakses setelah masuk akun.
                  </p>
                </div>
              </div>
              {onRequireLogin && (
                <button
                  onClick={() => onRequireLogin('Diagnostic Test 4 Mapel')}
                  className="px-3.5 py-1.5 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 text-slate-950 font-black rounded-xl text-xs transition shrink-0 cursor-pointer shadow-sm self-end sm:self-center"
                >
                  Masuk Akun
                </button>
              )}
            </div>
          )}

          <div className="bg-[#382B6D] rounded-2xl p-3.5 sm:p-5 text-white shadow-lg border-2 border-[#5B4AA8] flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#06B6D4] text-white shrink-0 hidden sm:flex border border-white/20">
              <Sparkles className="w-4 h-4" />
            </div>
            <p className="text-white text-xs sm:text-sm md:text-base font-bold leading-relaxed">
              &ldquo;Temukan kompetensi yang sudah kuat dan materi yang perlu diprioritaskan sebelum TKA.&rdquo;
            </p>
          </div>
        </>
      )}

      {/* SUBJECT BUTTONS GRID */}
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
          {subjects.map((subj) => {
            const IconComponent = subj.icon;
            const isSelected = activeSubject === subj.id;
            const hasLink = Boolean(subj.link && subj.link.trim() !== '');
            const isLocked = !isLoggedIn && subj.id !== 'indo';

            return (
              <button
                key={subj.id}
                onClick={() => handleSelectSubject(subj.id)}
                className={`p-3.5 sm:p-4 rounded-2xl transition-all flex flex-col justify-between text-left relative overflow-hidden group min-h-[95px] sm:min-h-[110px] active:scale-[0.98] ${
                  isSelected ? subj.activeBg : subj.inactiveBg
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-[#4A3B8C] text-white group-hover:bg-[#5B4AA8]'
                  }`}>
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>

                  {isLocked ? (
                    <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40">
                      <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      Terkunci
                    </span>
                  ) : !isLoggedIn && subj.id === 'indo' ? (
                    <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/40">
                      <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      Terbuka
                    </span>
                  ) : hasLink ? (
                    <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded-full bg-white/20 text-white border border-white/30">
                      <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      Tersedia
                    </span>
                  ) : (
                    <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-white/70 border border-white/20">
                      Segera
                    </span>
                  )}
                </div>

                <div className="w-full">
                  <h3 className="font-black text-xs sm:text-sm md:text-base tracking-tight truncate text-white">
                    {subj.title}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] truncate mt-0.5 text-white/90 font-medium">
                    {isLocked ? 'Masuk untuk membuka' : hasLink ? 'Klik untuk tes' : 'Dalam persiapan'}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* EMBEDDED DIAGNOSTIC TEST PLAYER / PLACEHOLDER */}
      <div className="bg-[#382B6D] rounded-3xl border-2 border-[#5B4AA8] shadow-xl overflow-hidden relative">
        {/* Info Header Bar */}
        <div className="bg-[#2E235C] px-3.5 py-2.5 sm:px-5 sm:py-3 border-b-2 border-[#52419B] flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-white font-bold min-w-0">
            <span className={`px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider text-[10px] sm:text-xs border shrink-0 ${currentSubject.badgeBg}`}>
              {currentSubject.title}
            </span>
            <span className="text-white/80 text-[11px] sm:text-xs truncate max-w-[200px] sm:max-w-md">
              {currentSubject.description}
            </span>
          </div>

          {hasActiveLink && (
            <button
              onClick={handleOpenNewTab}
              className="text-[#06B6D4] hover:text-cyan-200 font-black flex items-center gap-1 text-[11px] sm:text-xs shrink-0 py-1 px-2 rounded-lg hover:bg-white/10 transition"
            >
              <span className="hidden xs:inline">Buka Layar Penuh</span>
              <span className="xs:hidden">Tab Baru</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Viewport Container */}
        {hasActiveLink ? (
          <div className="relative w-full h-[68vh] min-h-[480px] sm:min-h-[640px] md:min-h-[750px] max-h-[1050px] bg-white">
            {isLoadingIframe && (
              <div className="absolute inset-0 z-10 bg-[#382B6D]/95 backdrop-blur-xs flex flex-col items-center justify-center gap-3 text-white">
                <div className="w-8 h-8 sm:w-11 sm:h-11 border-4 border-[#06B6D4]/30 border-t-[#06B6D4] rounded-full animate-spin" />
                <p className="text-xs sm:text-sm font-black tracking-wide text-white px-4 text-center">
                  Memuat Diagnostic Test {currentSubject.title}...
                </p>
              </div>
            )}

            <iframe
              key={`${activeSubject}-${iframeKey}`}
              srcDoc={htmlContent || undefined}
              src={!htmlContent ? encodeURI(currentSubject.link) : undefined}
              title={`Diagnostic Test ${currentSubject.title}`}
              className="w-full h-full border-0 bg-white"
              onLoad={() => setIsLoadingIframe(false)}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>
        ) : (
          <div className="p-6 sm:p-14 text-center flex flex-col items-center justify-center gap-3 min-h-[300px] sm:min-h-[360px] bg-[#2E235C] text-white">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#382B6D] border-2 border-[#5B4AA8] flex items-center justify-center text-white shadow-xs">
              <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-[#F97316]" />
            </div>
            <h3 className="text-sm sm:text-lg font-black text-white">
              Diagnostic Test {currentSubject.title} Sedang Dipersiapkan
            </h3>
            <p className="text-white/80 text-xs sm:text-sm max-w-md leading-relaxed px-2">
              Modul asesmen diagnostik untuk mata pelajaran ini akan segera aktif begitu file HTML terunggah. Silakan pilih <strong className="text-white">Matematika</strong> atau <strong className="text-white">B. Indonesia</strong> untuk memulai tes yang sudah siap.
            </p>
          </div>
        )}

        {/* Bottom Helper Bar */}
        {hasActiveLink && (
          <div className="bg-[#2E235C] px-3.5 py-2.5 sm:px-5 sm:py-3 border-t-2 border-[#52419B] flex items-center justify-between gap-2 text-xs text-white/80">
            <div className="flex items-center gap-1.5 text-white/90 text-[11px] sm:text-xs min-w-0 truncate">
              <Info className="w-3.5 h-3.5 text-[#06B6D4] shrink-0" />
              <span className="hidden sm:inline">Tes tersimpan otomatis. Hasil evaluasi dan peta prioritas kompetensi tampil setelah tes selesai.</span>
              <span className="sm:hidden truncate">Diagnostic Test Terpadu</span>
            </div>

            <button
              onClick={handleOpenNewTab}
              className="text-[#06B6D4] hover:text-cyan-200 font-black flex items-center gap-1 shrink-0 underline text-[11px] sm:text-xs"
            >
              Buka Tab Baru <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
