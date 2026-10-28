import React, { useState, useEffect, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  RotateCw, 
  ExternalLink, 
  Maximize2, 
  Minimize2, 
  CheckCircle2, 
  XCircle, 
  Award, 
  ArrowLeft,
  Info,
  Check,
  Network
} from 'lucide-react';
import { TopicInfo } from '../types';
import { recordTopicScore } from '../lib/firebase';
import { IPA_MIND_MAP_LINKS } from '../data/mindMapData';
import { loadOfflineHtml } from '../services/offlineHtmlService';

interface IpaTopicQuizModalProps {
  uid: string;
  topic: TopicInfo;
  topicIndex: number; // 1 to 18
  lastScore?: number;
  initialStatus?: 'Passed' | 'Failed';
  onClose: () => void;
  onQuizCompleted: () => void;
}

export const IpaTopicQuizModal: React.FC<IpaTopicQuizModalProps> = ({
  uid,
  topic,
  topicIndex,
  lastScore,
  initialStatus,
  onClose,
  onQuizCompleted,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(Date.now());
  const [isLoading, setIsLoading] = useState(true);
  const [currentScore, setCurrentScore] = useState<number | null>(lastScore ?? null);
  const [isPassed, setIsPassed] = useState<boolean>(initialStatus === 'Passed');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

  const lastSavedScoreRef = useRef<number | null>(lastScore ?? null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const fileUrl = `/IPA/ipa_${topicIndex}.html`;
  const [htmlContent, setHtmlContent] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    loadOfflineHtml(fileUrl)
      .then((content) => {
        if (isMounted) {
          setHtmlContent(content);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [fileUrl, iframeKey]);

  // Function to save score safely and update UI
  const handleScoreCaptured = useCallback(async (score: number) => {
    if (typeof score !== 'number' || isNaN(score)) return;

    const roundedScore = Math.round(score);
    if (lastSavedScoreRef.current === roundedScore) return;
    lastSavedScoreRef.current = roundedScore;

    const passed = roundedScore >= 85;

    setCurrentScore(roundedScore);
    setIsPassed(passed);
    setSaveStatus('saving');

    if (passed) {
      try {
        confetti({
          particleCount: 75,
          spread: 60,
          origin: { y: 0.6 },
        });
      } catch (e) {
        console.warn('Confetti error:', e);
      }
    }

    try {
      await recordTopicScore(uid, topic.id, roundedScore, passed);
      setSaveStatus('saved');
      onQuizCompleted();
    } catch (err) {
      console.error('Gagal mencatat skor:', err);
      setSaveStatus('idle');
    }
  }, [uid, topic.id, onQuizCompleted]);

  // Read score directly from iframe DOM if accessible
  const checkIframeDOMScore = useCallback(() => {
    try {
      const iframeDoc = iframeRef.current?.contentDocument || iframeRef.current?.contentWindow?.document;
      if (!iframeDoc) return;

      const scoreIds = ['final-score', 'score-display', 'scoreDisplay', 'score', 'final-score-val'];
      for (const id of scoreIds) {
        const el = iframeDoc.getElementById(id);
        if (el) {
          const text = (el.innerText || el.textContent || '').trim();
          const match = text.match(/\d+(\.\d+)?/);
          if (match) {
            const num = parseFloat(match[0]);
            
            const resultArea = 
              iframeDoc.getElementById('result-area') || 
              iframeDoc.getElementById('score-container') || 
              iframeDoc.getElementById('resultArea') ||
              iframeDoc.getElementById('score-display');
              
            const isResultVisible = resultArea 
              ? (window.getComputedStyle(resultArea).display !== 'none' && !resultArea.classList.contains('hidden')) 
              : true;

            if (!isNaN(num) && isResultVisible) {
              handleScoreCaptured(num);
              return;
            }
          }
        }
      }
    } catch (e) {
      // Cross-origin restriction fallback
    }
  }, [handleScoreCaptured]);

  // Listen to postMessage from iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!event.data) return;
      if (
        event.data.type === 'IPA_QUIZ_SUBMITTED' ||
        event.data.type === 'QUIZ_SUBMITTED' ||
        event.data.type === 'SCORE_RECORDED' ||
        event.data.type === 'QUIZ_RESULT' ||
        event.data.score !== undefined
      ) {
        const score = typeof event.data.score === 'number' ? event.data.score : parseFloat(event.data.score);
        if (!isNaN(score)) {
          handleScoreCaptured(score);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [handleScoreCaptured]);

  // Periodic DOM poll for iframe score detection (backup guarantee)
  useEffect(() => {
    const interval = setInterval(() => {
      checkIframeDOMScore();
    }, 600);

    return () => clearInterval(interval);
  }, [checkIframeDOMScore]);

  const handleReload = () => {
    setIsLoading(true);
    setIframeKey(Date.now());
  };

  const handleOpenNewTab = () => {
    window.open(fileUrl, '_blank', 'noopener,noreferrer');
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
    try {
      const iframeDoc = iframeRef.current?.contentDocument || iframeRef.current?.contentWindow?.document;
      if (iframeDoc) {
        // Observe score elements directly via MutationObserver for instantaneous sync
        const scoreIds = ['final-score', 'score-display', 'scoreDisplay', 'score', 'final-score-val'];
        scoreIds.forEach(id => {
          const el = iframeDoc.getElementById(id);
          if (el) {
            const observer = new MutationObserver(() => {
              const text = (el.innerText || el.textContent || '').trim();
              const match = text.match(/\d+(\.\d+)?/);
              if (match) {
                const num = parseFloat(match[0]);
                if (!isNaN(num)) {
                  handleScoreCaptured(num);
                }
              }
            });
            observer.observe(el, { childList: true, characterData: true, subtree: true });
          }
        });

        // Inject listener to form submit or checkAnswers button for immediate postMessage
        const submitBtns = iframeDoc.querySelectorAll('button[type="button"], button[type="submit"], #btn-check, #submit-btn, #btn-submit, button[onclick*="checkAnswers"], button[onclick*="check"]');
        submitBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            setTimeout(checkIframeDOMScore, 200);
            setTimeout(checkIframeDOMScore, 500);
            setTimeout(checkIframeDOMScore, 1000);
            setTimeout(checkIframeDOMScore, 1800);
          });
        });

        const form = iframeDoc.getElementById('quizForm') || iframeDoc.getElementById('quiz-form') || iframeDoc.querySelector('form');
        if (form) {
          form.addEventListener('submit', () => {
            setTimeout(checkIframeDOMScore, 200);
            setTimeout(checkIframeDOMScore, 500);
            setTimeout(checkIframeDOMScore, 1000);
          });
        }
      }
    } catch (err) {
      // ignore cross-origin if any
    }
    setTimeout(checkIframeDOMScore, 400);
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in font-sans ${isFullscreen ? 'p-0' : ''}`}>
      <div 
        className={`bg-slate-900 rounded-2xl sm:rounded-3xl w-full flex flex-col shadow-2xl border border-slate-800 overflow-hidden relative text-slate-100 transition-all ${
          isFullscreen 
            ? 'h-screen max-h-screen rounded-none border-none' 
            : 'max-w-6xl h-[94vh] max-h-[95vh]'
        }`}
      >
        {/* Top Navbar Header */}
        <div className="px-3 sm:px-5 py-2.5 sm:py-3.5 bg-slate-950 flex items-center justify-between border-b border-slate-800 gap-2 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <button
              onClick={onClose}
              className="p-2 sm:p-2 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-slate-300 rounded-xl transition flex items-center justify-center border border-slate-700 shrink-0 min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px]"
              title="Kembali ke Daftar Topik IPA"
            >
              <ArrowLeft className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </button>
            
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
                  IPA &bull; Topik {topicIndex}
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold text-slate-400 bg-slate-900 px-2 py-0.5 rounded-full border border-slate-800 hidden xs:inline">
                  Batas: &ge; 85%
                </span>
              </div>
              <h2 className="text-xs sm:text-base font-bold text-white mt-0.5 truncate max-w-[200px] sm:max-w-md md:max-w-xl">
                {topic.title}
              </h2>
            </div>
          </div>

          {/* Controls & Score Badge */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Live Score Pill */}
            {currentScore !== null && (
              <div className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-xl text-xs font-bold border shadow-xs ${
                isPassed 
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' 
                  : 'bg-rose-500/20 text-rose-300 border-rose-500/30'
              }`}>
                {isPassed ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <XCircle className="w-3.5 h-3.5 text-rose-400" />}
                <span className="text-[11px] sm:text-xs">{currentScore}%</span>
              </div>
            )}

            {IPA_MIND_MAP_LINKS[topicIndex] && (
              <a
                href={IPA_MIND_MAP_LINKS[topicIndex]}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:px-2.5 sm:py-1.5 bg-purple-600/20 hover:bg-purple-600/30 active:bg-purple-600/40 text-purple-300 hover:text-purple-200 border border-purple-500/30 hover:border-purple-500/50 text-xs font-semibold rounded-xl transition flex items-center justify-center gap-1 shadow-sm min-w-[34px] min-h-[34px] sm:min-w-0"
                title="Buka Peta Konsep Topik Ini di Google Notebook"
              >
                <Network className="w-3.5 h-3.5 text-purple-400" />
                <span className="hidden sm:inline">Peta Konsep</span>
              </a>
            )}

            <button
              onClick={handleReload}
              className="p-1.5 sm:px-2.5 sm:py-1.5 bg-slate-800/90 hover:bg-slate-700 active:bg-slate-600 text-slate-200 text-xs font-semibold rounded-xl transition border border-slate-700 flex items-center justify-center gap-1 shadow-sm min-w-[34px] min-h-[34px] sm:min-w-0"
              title="Muat Ulang Soal"
            >
              <RotateCw className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden md:inline">Reset</span>
            </button>

            <button
              onClick={handleOpenNewTab}
              className="p-1.5 sm:px-2.5 sm:py-1.5 bg-slate-800/90 hover:bg-slate-700 active:bg-slate-600 text-slate-200 text-xs font-semibold rounded-xl transition border border-slate-700 flex items-center justify-center gap-1 shadow-sm min-w-[34px] min-h-[34px] sm:min-w-0"
              title="Buka Soal di Tab Baru"
            >
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden md:inline">Tab Baru</span>
            </button>

            <button
              onClick={toggleFullscreen}
              className={`p-1.5 sm:px-2.5 sm:py-1.5 text-xs font-semibold rounded-xl transition border flex items-center justify-center gap-1 shadow-sm min-w-[34px] min-h-[34px] sm:min-w-0 ${
                isFullscreen 
                  ? 'bg-purple-600 text-white border-purple-500' 
                  : 'bg-slate-800/90 hover:bg-slate-700 active:bg-slate-600 text-slate-200 border-slate-700'
              }`}
              title={isFullscreen ? 'Keluar Layar Penuh' : 'Layar Penuh'}
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              <span className="hidden md:inline">{isFullscreen ? 'Kecilkan' : 'Full'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 text-slate-400 hover:text-white rounded-xl hover:bg-rose-500/20 hover:text-rose-300 transition min-w-[34px] min-h-[34px] flex items-center justify-center"
              title="Tutup Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-slate-950/90 px-3.5 py-2 sm:px-5 sm:py-2.5 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-2 min-w-0">
            <Info className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span className="text-[11px] sm:text-xs text-slate-300 truncate">
              <strong>Tampilan 1 Halaman:</strong> Kerjakan semua soal lalu klik <strong>"Periksa Jawaban"</strong>. Skor <strong>langsung otomatis tersimpan</strong> tanpa perlu klik simpan manual.
            </span>
          </div>

          {saveStatus === 'saved' && (
            <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1 shrink-0 bg-emerald-500/10 px-2 py-0.5 rounded-lg border border-emerald-500/20">
              <Check className="w-3 h-3" /> Nilai Tersimpan
            </span>
          )}
        </div>

        {/* Main Iframe Quiz Viewport */}
        <div className="relative flex-1 bg-white overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 z-20 bg-slate-950/90 backdrop-blur-xs flex flex-col items-center justify-center gap-2.5 text-slate-300">
              <div className="w-8 h-8 sm:w-10 sm:h-10 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
              <p className="text-xs font-semibold tracking-wide">
                Memuat Soal IPA Topik {topicIndex} ({topic.title})...
              </p>
            </div>
          )}

          <iframe
            key={iframeKey}
            ref={iframeRef}
            srcDoc={htmlContent || undefined}
            src={!htmlContent ? fileUrl : undefined}
            title={`Kuis IPA Topik ${topicIndex}: ${topic.title}`}
            className="w-full h-full border-0 bg-white"
            onLoad={() => {
              setIsLoading(false);
              // Trigger score check after load
              setTimeout(checkIframeDOMScore, 500);
            }}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>

        {/* Bottom Footer Action Bar */}
        <div className="px-3.5 py-2.5 sm:px-5 sm:py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs shrink-0">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-[11px] sm:text-xs">
              File: <code className="text-purple-300 font-mono">ipa_{topicIndex}.html</code>
            </span>
            {currentScore !== null && (
              <span className="text-[11px] text-slate-300 font-medium">
                &bull; Skor saat ini: <strong className={isPassed ? 'text-emerald-400' : 'text-rose-400'}>{currentScore}%</strong> ({isPassed ? 'Passed' : 'Failed'})
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                checkIframeDOMScore();
                onClose();
              }}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 active:bg-slate-900 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition border border-slate-700 shadow-md"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Daftar Topik</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
