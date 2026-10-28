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
  ArrowLeft,
  Check,
  BookOpen
} from 'lucide-react';
import { TopicInfo } from '../types';
import { recordTopicScore } from '../lib/firebase';
import { loadOfflineHtml } from '../services/offlineHtmlService';

interface IndoTopicQuizModalProps {
  uid: string;
  topic: TopicInfo;
  topicIndex: number; // 1 to 11+
  lastScore?: number;
  initialStatus?: 'Passed' | 'Failed';
  onClose: () => void;
  onQuizCompleted: () => void;
}

export const IndoTopicQuizModal: React.FC<IndoTopicQuizModalProps> = ({
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
  // Standard path in public directory
  const fileUrl = `/bahasa_indonesia/bindo_${topicIndex}.html`;
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

  // Function to save score safely and update UI & persistence
  const handleScoreCaptured = useCallback(async (score: number) => {
    if (typeof score !== 'number' || isNaN(score)) return;

    const roundedScore = Math.min(100, Math.max(0, Math.round(score)));
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

  // Read score directly from iframe DOM if accessible (same-origin)
  const checkIframeDOMScore = useCallback(() => {
    try {
      const iframeDoc = iframeRef.current?.contentDocument || iframeRef.current?.contentWindow?.document;
      if (!iframeDoc) return;

      const resultArea = iframeDoc.getElementById('result-area') || iframeDoc.querySelector('.result-box') || iframeDoc.querySelector('#resultArea');
      const isResultVisible = resultArea && !resultArea.classList.contains('hidden') && !resultArea.classList.contains('hidden-box');

      if (isResultVisible) {
        const scoreIds = ['final-score', 'score-display', 'scoreDisplay', 'score', 'final-score-val'];
        for (const id of scoreIds) {
          const el = iframeDoc.getElementById(id);
          if (el) {
            const text = (el.innerText || el.textContent || '').trim();
            const num = parseFloat(text);
            if (!isNaN(num) && text !== '') {
              // Wait until counter stabilizes or capture
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
      try {
        if (!event.data) return;
        
        let data = event.data;
        if (typeof data === 'string') {
          try {
            data = JSON.parse(data);
          } catch {
            return;
          }
        }

        if (data.type === 'QUIZ_SUBMITTED' || data.type === 'SCORE_RECORDED' || data.type === 'QUIZ_RESULT' || data.score !== undefined) {
          const score = typeof data.score === 'number' ? data.score : parseFloat(data.score);
          if (!isNaN(score)) {
            handleScoreCaptured(score);
          }
        }
      } catch (err) {
        console.warn('Error handling iframe message:', err);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [handleScoreCaptured]);

  // Polling check on iframe DOM for score updates
  useEffect(() => {
    const interval = setInterval(() => {
      checkIframeDOMScore();
    }, 1500);
    return () => clearInterval(interval);
  }, [checkIframeDOMScore]);

  // Handle iframe load
  const handleIframeLoad = () => {
    setIsLoading(false);

    // Inject listener inside iframe to detect 'btn-check' clicks and wait for counter animation to finish
    try {
      const iframeDoc = iframeRef.current?.contentDocument || iframeRef.current?.contentWindow?.document;
      if (iframeDoc) {
        const checkBtn = iframeDoc.getElementById('btn-check') || iframeDoc.querySelector('button[type="button"]');
        if (checkBtn) {
          checkBtn.addEventListener('click', () => {
            // Check after 1.2s and 1.8s when score animation completes
            setTimeout(() => {
              checkIframeDOMScore();
            }, 1200);
            setTimeout(() => {
              checkIframeDOMScore();
            }, 1800);
          });
        }
      }
    } catch {
      // Ignore cross-origin error
    }
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey(Date.now());
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in font-sans">
      <div 
        className={`bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          isFullscreen 
            ? 'w-full h-full max-w-none rounded-none border-none' 
            : 'w-full max-w-5xl h-[92vh]'
        }`}
      >
        {/* Header Bar */}
        <div className="bg-slate-950/95 px-3 sm:px-6 py-2.5 sm:py-3.5 border-b border-slate-800 flex items-center justify-between gap-2 sm:gap-3 flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <button
              onClick={onClose}
              className="p-2 sm:p-2 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-slate-300 rounded-xl transition flex items-center justify-center border border-slate-700 shrink-0 min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px]"
              title="Kembali ke Daftar Topik"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider border border-emerald-500/20">
                  B. Indonesia • Topik {topicIndex}
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold text-slate-400 bg-slate-900 px-2 py-0.5 rounded-full border border-slate-800 hidden xs:inline">
                  Batas: &ge;85%
                </span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white truncate max-w-[200px] sm:max-w-md md:max-w-xl mt-0.5">
                {topic.title}
              </h3>
            </div>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            {/* Score & Status Badge */}
            {currentScore !== null && (
              <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 bg-slate-800/90 rounded-xl border border-slate-700 text-xs font-bold shadow-xs">
                <span className="text-slate-400 text-[10px] hidden xs:inline">Skor:</span>
                <span className={`${isPassed ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {currentScore}%
                </span>
                {isPassed ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <XCircle className="w-3.5 h-3.5 text-rose-400" />
                )}
              </div>
            )}

            {/* Reload Iframe */}
            <button
              onClick={handleRefresh}
              className="p-1.5 sm:px-2.5 sm:py-1.5 bg-slate-800/90 hover:bg-slate-700 active:bg-slate-600 text-slate-200 text-xs font-semibold rounded-xl transition border border-slate-700 flex items-center justify-center gap-1 shadow-sm min-w-[34px] min-h-[34px] sm:min-w-0"
              title="Muat Ulang Soal"
            >
              <RotateCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-emerald-400' : 'text-slate-400'}`} />
              <span className="hidden md:inline">Reset</span>
            </button>

            {/* Toggle Fullscreen */}
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1.5 sm:px-2.5 sm:py-1.5 bg-slate-800/90 hover:bg-slate-700 active:bg-slate-600 text-slate-200 text-xs font-semibold rounded-xl transition border border-slate-700 flex items-center justify-center gap-1 shadow-sm min-w-[34px] min-h-[34px] sm:min-w-0"
              title={isFullscreen ? 'Keluar Layar Penuh' : 'Layar Penuh'}
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5 text-slate-400" /> : <Maximize2 className="w-3.5 h-3.5 text-slate-400" />}
              <span className="hidden md:inline">{isFullscreen ? 'Kecilkan' : 'Full'}</span>
            </button>

            {/* Open in new tab link */}
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:px-2.5 sm:py-1.5 bg-slate-800/90 hover:bg-slate-700 active:bg-slate-600 text-slate-200 text-xs font-semibold rounded-xl transition border border-slate-700 flex items-center justify-center gap-1 shadow-sm min-w-[34px] min-h-[34px] sm:min-w-0"
              title="Buka File di Tab Baru"
            >
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden md:inline">Tab Baru</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 text-slate-400 hover:text-white hover:bg-rose-500/20 hover:text-rose-300 rounded-xl transition min-w-[34px] min-h-[34px] flex items-center justify-center"
              title="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Informative Sub-header Banner */}
        <div className="bg-emerald-950/40 px-4 py-2 border-b border-emerald-900/30 flex items-center justify-between text-xs text-emerald-200">
          <div className="flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            <span className="text-[11px]">
              Kuis Interaktif Bahasa Indonesia <strong>bindo_{topicIndex}.html</strong>. Seluruh soal tampil dalam 1 halaman. Selesaikan dan klik tombol <strong>Periksa Jawaban</strong> di bagian bawah untuk menyimpan skor otomatis.
            </span>
          </div>
          {saveStatus === 'saved' && (
            <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              <Check className="w-3 h-3" /> Nilai Tersimpan
            </span>
          )}
        </div>

        {/* Iframe View Container */}
        <div className="relative flex-1 bg-gray-100 overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center gap-3 z-10">
              <div className="w-10 h-10 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
              <p className="text-slate-300 text-xs font-medium animate-pulse">
                Memuat Soal Kuis Topik {topicIndex}...
              </p>
            </div>
          )}

          <iframe
            key={iframeKey}
            ref={iframeRef}
            srcDoc={htmlContent || undefined}
            src={!htmlContent ? fileUrl : undefined}
            title={`Kuis Bahasa Indonesia Topik ${topicIndex}`}
            className="w-full h-full border-0"
            onLoad={handleIframeLoad}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      </div>
    </div>
  );
};
