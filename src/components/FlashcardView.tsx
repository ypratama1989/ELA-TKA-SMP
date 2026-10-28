import React, { useState, useRef, useEffect } from 'react';
import { 
  Calculator, 
  BookMarked, 
  Languages, 
  Atom, 
  ArrowLeft, 
  RotateCw, 
  ExternalLink,
  Layers, 
  BrainCircuit, 
  Maximize2, 
  Minimize2,
  Info
} from 'lucide-react';
import { SubjectId, UserProfile } from '../types';
import { loadOfflineHtml } from '../services/offlineHtmlService';

interface FlashcardViewProps {
  userProfile: UserProfile;
  initialSubject?: SubjectId;
  onBack: () => void;
}

interface FlashcardSubjectConfig {
  id: SubjectId;
  name: string;
  fileName: string;
  fileUrl: string;
  icon: React.ElementType;
  activeBg: string;
  badgeBg: string;
  borderColor: string;
  description: string;
  accentColor: string;
}

const FLASHCARD_SUBJECTS: Record<SubjectId, FlashcardSubjectConfig> = {
  indo: {
    id: 'indo',
    name: 'Bahasa Indonesia',
    fileName: 'flashcard_tka_bahasa_indonesia.html',
    fileUrl: '/flashcard_tka_bahasa_indonesia.html',
    icon: BookMarked,
    activeBg: 'bg-[#10B981] border-2 border-[#059669] text-white shadow-lg',
    badgeBg: 'bg-[#10B981] text-white border-white/20',
    borderColor: 'border-[#10B981]',
    description: 'Flashcard 11 Topik Esensial Bahasa Indonesia SMP',
    accentColor: '#10B981',
  },
  eng: {
    id: 'eng',
    name: 'Bahasa Inggris',
    fileName: 'flashcard_tka_bahasa_inggris.html',
    fileUrl: '/flashcard_tka_bahasa_inggris.html',
    icon: Languages,
    activeBg: 'bg-[#F97316] border-2 border-[#EA580C] text-white shadow-lg',
    badgeBg: 'bg-[#F97316] text-white border-white/20',
    borderColor: 'border-[#F97316]',
    description: '100 Flashcards TKA English SMP',
    accentColor: '#F97316',
  },
  ipa: {
    id: 'ipa',
    name: 'IPA',
    fileName: 'flashcard_tka_ipa_smp.html',
    fileUrl: '/flashcard_tka_ipa_smp.html',
    icon: Atom,
    activeBg: 'bg-[#8B5CF6] border-2 border-[#7C3AED] text-white shadow-lg',
    badgeBg: 'bg-[#8B5CF6] text-white border-white/20',
    borderColor: 'border-[#8B5CF6]',
    description: '100 Flashcards TKA IPA SMP',
    accentColor: '#8B5CF6',
  },
  math: {
    id: 'math',
    name: 'Matematika',
    fileName: 'flashcard_tka_matematika_smp.html',
    fileUrl: '/flashcard_tka_matematika_smp.html',
    icon: Calculator,
    activeBg: 'bg-[#06B6D4] border-2 border-[#0891B2] text-white shadow-lg',
    badgeBg: 'bg-[#06B6D4] text-white border-white/20',
    borderColor: 'border-[#06B6D4]',
    description: '100 Flashcards TKA Matematika SMP',
    accentColor: '#06B6D4',
  },
};

const SUBJECT_KEYS: SubjectId[] = ['math', 'indo', 'eng', 'ipa'];

export const FlashcardView: React.FC<FlashcardViewProps> = ({
  userProfile,
  initialSubject = 'math',
  onBack,
}) => {
  const [activeSubject, setActiveSubject] = useState<SubjectId>(initialSubject);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [reloadCount, setReloadCount] = useState<number>(0);
  const [isLoadingIframe, setIsLoadingIframe] = useState<boolean>(true);
  const [subjectHtmlMap, setSubjectHtmlMap] = useState<Partial<Record<SubjectId, string>>>({});
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const activeConf = FLASHCARD_SUBJECTS[activeSubject] || FLASHCARD_SUBJECTS.math;

  // Sync if initialSubject prop changes from parent
  useEffect(() => {
    if (initialSubject && initialSubject !== activeSubject && FLASHCARD_SUBJECTS[initialSubject]) {
      setActiveSubject(initialSubject);
      setIsLoadingIframe(true);
    }
  }, [initialSubject]);

  // Load offline HTML strictly for the active subject
  useEffect(() => {
    let isMounted = true;
    const targetSubject = activeSubject;
    const conf = FLASHCARD_SUBJECTS[targetSubject];
    if (!conf) return;

    // If already cached in component state for this exact subject, ready immediately
    if (subjectHtmlMap[targetSubject]) {
      setIsLoadingIframe(false);
      return;
    }

    setIsLoadingIframe(true);

    loadOfflineHtml(conf.fileUrl)
      .then((content) => {
        if (isMounted) {
          setSubjectHtmlMap((prev) => ({
            ...prev,
            [targetSubject]: content,
          }));
          setIsLoadingIframe(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setIsLoadingIframe(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [activeSubject, reloadCount]);

  const handleSubjectChange = (sId: SubjectId) => {
    if (sId === activeSubject) return;
    setActiveSubject(sId);
    setIsLoadingIframe(true);
  };

  const handleReload = () => {
    setIsLoadingIframe(true);
    setReloadCount((prev) => prev + 1);
  };

  const handleOpenNewTab = () => {
    window.open(activeConf.fileUrl, '_blank', 'noopener,noreferrer');
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`space-y-4 sm:space-y-6 pb-12 animate-fade-in ${isFullscreen ? 'fixed inset-0 z-50 bg-[#4A3B8C] p-2 sm:p-4 overflow-y-auto' : ''}`}>
      {/* Top Header Card */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 bg-[#382B6D] p-3.5 sm:p-5 rounded-3xl border-2 border-[#5B4AA8] shadow-lg text-white">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <button
            onClick={isFullscreen ? toggleFullscreen : onBack}
            className="p-2 sm:p-2.5 bg-[#4A3B8C] hover:bg-[#5B4AA8] text-white rounded-xl transition flex items-center justify-center border border-[#6B56C4] shadow-xs shrink-0 min-w-[38px] min-h-[38px] sm:min-w-[44px] sm:min-h-[44px]"
            title={isFullscreen ? 'Keluar Layar Penuh' : 'Kembali'}
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-white bg-[#06B6D4] px-2.5 py-0.5 rounded-full inline-flex items-center gap-1 shadow-xs">
                <BrainCircuit className="w-3 h-3 shrink-0" /> Flashcard Interaktif
              </span>
            </div>
            <h1 className="text-sm sm:text-xl md:text-2xl font-black text-white mt-1 truncate">
              {activeConf.name}
            </h1>
          </div>
        </div>

        {/* Toolbar actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 self-stretch sm:self-auto justify-end pt-1 sm:pt-0 border-t border-[#5B4AA8]/50 sm:border-t-0">
          <button
            onClick={handleReload}
            className="flex-1 sm:flex-initial px-2.5 sm:px-3.5 py-2 bg-[#4A3B8C] hover:bg-[#5B4AA8] text-white text-[11px] sm:text-xs font-black rounded-xl transition border border-[#6B56C4] flex items-center justify-center gap-1.5 shadow-xs min-h-[38px]"
            title="Muat Ulang / Acak Kartu"
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
            title={isFullscreen ? 'Perkecil' : 'Layar Penuh'}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5 text-white" /> : <Maximize2 className="w-3.5 h-3.5 text-white" />}
            <span>{isFullscreen ? 'Kecilkan' : 'Full Screen'}</span>
          </button>
        </div>
      </div>

      {/* Subject Selection Buttons */}
      <div className="bg-[#382B6D] p-3.5 sm:p-4 rounded-3xl border-2 border-[#5B4AA8] shadow-md">
        <div className="flex items-center justify-between mb-2.5 sm:mb-3">
          <label className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-white flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#06B6D4]" /> Pilih Mata Pelajaran:
          </label>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
          {SUBJECT_KEYS.map((sId) => {
            const conf = FLASHCARD_SUBJECTS[sId];
            const Icon = conf.icon;
            const isSelected = activeSubject === sId;

            return (
              <button
                key={sId}
                onClick={() => handleSubjectChange(sId)}
                className={`p-3 sm:p-3.5 md:p-4 rounded-2xl font-black text-xs sm:text-sm flex items-center justify-between gap-2 transition text-left border-2 relative overflow-hidden group min-h-[60px] sm:min-h-[72px] active:scale-[0.98] ${
                  isSelected
                    ? conf.activeBg
                    : 'bg-[#2E235C] border-[#52419B] text-white hover:border-[#06B6D4] hover:bg-[#342866]'
                }`}
              >
                <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                  <div className={`p-2 rounded-xl shrink-0 ${isSelected ? 'bg-white/20' : 'bg-[#382B6D]'}`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-black truncate block text-xs sm:text-sm text-white">{conf.name}</span>
                    <span className={`text-[10px] block truncate font-bold ${isSelected ? 'text-white/90' : 'text-white/70'}`}>100 Kartu</span>
                  </div>
                </div>
                {isSelected && (
                  <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Embedded Interactive HTML Flashcard Player */}
      <div className="bg-[#382B6D] rounded-3xl border-2 border-[#5B4AA8] shadow-2xl overflow-hidden relative">
        {/* Info Bar */}
        <div className="bg-[#2E235C] px-3.5 py-2.5 sm:px-5 sm:py-3 border-b-2 border-[#52419B] flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-white font-bold min-w-0">
            <span className={`px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider text-[10px] sm:text-xs border shrink-0 ${activeConf.badgeBg}`}>
              {activeConf.name}
            </span>
            <span className="text-white/80 text-[11px] sm:text-xs truncate max-w-[200px] sm:max-w-md">
              {activeConf.description}
            </span>
          </div>

          <button
            onClick={handleOpenNewTab}
            className="text-[#06B6D4] hover:text-cyan-200 font-black flex items-center gap-1 text-[11px] sm:text-xs shrink-0 py-1 px-2 rounded-lg hover:bg-white/10 transition"
          >
            <span className="hidden xs:inline">Buka Layar Penuh</span>
            <span className="xs:hidden">Tab Baru</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>

        {/* Iframe Viewport Container */}
        <div className="relative w-full h-[68vh] min-h-[480px] sm:min-h-[640px] md:min-h-[750px] max-h-[950px] bg-white">
          {isLoadingIframe && (
            <div className="absolute inset-0 z-10 bg-[#382B6D]/95 backdrop-blur-xs flex flex-col items-center justify-center gap-2.5 text-white">
              <div className="w-8 h-8 sm:w-10 sm:h-10 border-4 border-[#06B6D4]/30 border-t-[#06B6D4] rounded-full animate-spin" />
              <p className="text-xs sm:text-sm font-black tracking-wide px-4 text-center text-white">
                Memuat Flashcard {activeConf.name}...
              </p>
            </div>
          )}

          {(() => {
            const currentHtml = subjectHtmlMap[activeSubject];
            return (
              <iframe
                key={`flashcard-${activeSubject}-${reloadCount}`}
                ref={iframeRef}
                srcDoc={currentHtml || undefined}
                src={!currentHtml ? activeConf.fileUrl : undefined}
                title={`Flashcard ${activeConf.name}`}
                className="w-full h-full border-0 bg-white"
                onLoad={() => setIsLoadingIframe(false)}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            );
          })()}
        </div>

        {/* Bottom Helper Bar */}
        <div className="bg-[#2E235C] px-3.5 py-2.5 sm:px-5 sm:py-3 border-t-2 border-[#52419B] flex items-center justify-between gap-2 text-xs text-white/80">
          <div className="flex items-center gap-1.5 text-white/90 text-[11px] sm:text-xs min-w-0 truncate">
            <Info className="w-3.5 h-3.5 text-[#06B6D4] shrink-0" />
            <span className="hidden sm:inline">Navigasi: Gunakan tombol Sebelumnya/Selanjutnya atau keyboard panah Kiri/Kanan &amp; Spasi.</span>
            <span className="sm:hidden truncate">Modul Flashcard Terpadu</span>
          </div>

          <button
            onClick={handleOpenNewTab}
            className="text-[#06B6D4] hover:text-cyan-200 font-black flex items-center gap-1 shrink-0 underline text-[11px] sm:text-xs"
          >
            Tab Terpisah <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
