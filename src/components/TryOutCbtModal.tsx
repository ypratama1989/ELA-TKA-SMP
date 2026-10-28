import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  XCircle, 
  Award, 
  RotateCcw, 
  ArrowLeft,
  LayoutGrid, 
  Flag, 
  Maximize2, 
  Minimize2, 
  AlertTriangle,
  ZoomIn,
  Eye,
  Check,
  HelpCircle,
  Sparkles,
  Flame,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { QuizConfig, Question } from '../types';
import { SUBJECT_NAMES } from '../data/quizData';
import { recordTryOutScore } from '../lib/firebase';
import { useModalBackHandler } from '../hooks/useModalBackHandler';

interface TryOutCbtModalProps {
  uid: string;
  config: QuizConfig;
  onClose: () => void;
  onQuizCompleted: () => void;
}

export const TryOutCbtModal: React.FC<TryOutCbtModalProps> = ({
  uid,
  config,
  onClose,
  onQuizCompleted,
}) => {
  const totalQuestions = config.questions.length;
  const initialDurationMinutes = config.durationMinutes || 75;
  const initialSeconds = initialDurationMinutes * 60; // 75 minutes = 4500 seconds

  // State Management
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | number[]>>({});
  const [doubtSet, setDoubtSet] = useState<Set<number>>(new Set());
  const [timeLeft, setTimeLeft] = useState<number>(initialSeconds);
  const [isTimeUp, setIsTimeUp] = useState(false);
  
  // UI & View state
  const [showNavGrid, setShowNavGrid] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  // Sync sub-modals with mobile/tablet back button
  useModalBackHandler(showSubmitModal, () => setShowSubmitModal(false), 'cbtSubmitModal');
  useModalBackHandler(showNavGrid, () => setShowNavGrid(false), 'cbtNavGrid');
  useModalBackHandler(!!zoomedImage, () => setZoomedImage(null), 'cbtZoomedImage');

  // Result & Review State
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scoreResult, setScoreResult] = useState<{
    scorePct: number;
    correctCount: number;
    incorrectCount: number;
    unansweredCount: number;
    timeSpentSeconds: number;
  } | null>(null);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong' | 'correct'>('all');

  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Fallback if questions are empty (e.g. Paket 9-12)
  if (totalQuestions === 0) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 animate-in fade-in duration-150">
        <div className="bg-[#2E235C] border-2 border-amber-500/60 text-white rounded-3xl p-6 sm:p-7 max-w-sm w-full shadow-2xl text-center space-y-4 animate-in zoom-in-95 duration-200">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 mx-auto flex items-center justify-center shadow-lg shadow-amber-500/10">
            <Clock className="w-7 h-7 animate-pulse" />
          </div>

          <div>
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 inline-block mb-2">
              {config.title}
            </span>
            <h3 className="text-lg font-black text-white">
              Soal Belum Tersedia
            </h3>
            <p className="text-xs text-white/80 mt-2 leading-relaxed font-medium">
              Paket Try Out ini saat ini masih dalam proses penyusunan dan akan diisi di kemudian hari.
            </p>
          </div>

          <div className="p-3 bg-amber-950/40 border border-amber-500/30 rounded-2xl text-left text-[11px] text-amber-200/90 font-medium">
            💡 <strong>Saran:</strong> Silakan pilih Paket Try Out 1 s.d. 8 yang sudah tersedia lengkap.
          </div>

          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 rounded-xl bg-violet-600 hover:bg-violet-500 active:scale-98 text-white text-xs font-black transition shadow-md shadow-violet-900/40"
          >
            Kembali ke Mapel
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = config.questions[currentIdx] || config.questions[0];
  const subjectName = SUBJECT_NAMES[config.subjectId] || 'Mata Pelajaran';

  // Question Type Helpers
  const isComplexQuestion = (q: Question) => {
    return q.questionType === 'complex' || (Array.isArray(q.correctAnswers) && q.correctAnswers.length > 1);
  };

  const isTrueFalseQuestion = (q: Question) => {
    return q.questionType === 'true_false' || (
      q.options.length === 2 && 
      q.options[0]?.toLowerCase().includes('benar') &&
      q.options[1]?.toLowerCase().includes('salah')
    );
  };

  const checkIfAnswerCorrect = (q: Question, userAns: number | number[] | undefined) => {
    if (userAns === undefined) return false;
    if (isComplexQuestion(q)) {
      if (!Array.isArray(userAns)) return false;
      const target = (q.correctAnswers || []).slice().sort();
      const actual = userAns.slice().sort();
      if (target.length !== actual.length) return false;
      return target.every((val, i) => val === actual[i]);
    }
    return userAns === q.correctAnswer;
  };

  // Countdown Timer
  useEffect(() => {
    if (isCompleted) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          setIsTimeUp(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isCompleted]);

  // Handle Timeout Auto-submit
  useEffect(() => {
    if (isTimeUp && !isCompleted && !isSubmitting) {
      handleFinalSubmit(true);
    }
  }, [isTimeUp]);

  // Keyboard Shortcuts for CBT (A, B, C, D, Left, Right, Flag)
  useEffect(() => {
    if (isCompleted || showSubmitModal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is in an input field
      if (['input', 'textarea'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) return;

      const key = e.key.toUpperCase();
      const optionCount = currentQuestion.options.length;

      if (isTrueFalseQuestion(currentQuestion)) {
        if (key === 'B' || key === '1' || key === 'A') handleSelectAnswer(0); // Benar
        else if (key === 'S' || key === '2') handleSelectAnswer(1); // Salah
      } else {
        if (key === 'A' && optionCount >= 1) handleSelectAnswer(0);
        else if (key === 'B' && optionCount >= 2) handleSelectAnswer(1);
        else if (key === 'C' && optionCount >= 3) handleSelectAnswer(2);
        else if (key === 'D' && optionCount >= 4) handleSelectAnswer(3);
        else if (key === 'E' && optionCount >= 5) handleSelectAnswer(4);
        else if (key === '1' && optionCount >= 1) handleSelectAnswer(0);
        else if (key === '2' && optionCount >= 2) handleSelectAnswer(1);
        else if (key === '3' && optionCount >= 3) handleSelectAnswer(2);
        else if (key === '4' && optionCount >= 4) handleSelectAnswer(3);
      }

      if (key === 'R') toggleDoubt(currentIdx);
      else if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        if (currentIdx < totalQuestions - 1) setCurrentIdx((prev) => prev + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (currentIdx > 0) setCurrentIdx((prev) => prev - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIdx, currentQuestion, isCompleted, showSubmitModal, totalQuestions]);

  // Select Answer (Single or Complex Multi-Select)
  const handleSelectAnswer = (optionIdx: number) => {
    if (isCompleted) return;

    if (isComplexQuestion(currentQuestion)) {
      setAnswers((prev) => {
        const existing = Array.isArray(prev[currentIdx]) ? [...(prev[currentIdx] as number[])] : [];
        const idxInArray = existing.indexOf(optionIdx);
        let updated: number[];
        if (idxInArray > -1) {
          updated = existing.filter((item) => item !== optionIdx);
        } else {
          updated = [...existing, optionIdx].sort((a, b) => a - b);
        }

        if (updated.length === 0) {
          const next = { ...prev };
          delete next[currentIdx];
          return next;
        }

        return {
          ...prev,
          [currentIdx]: updated,
        };
      });
    } else {
      setAnswers((prev) => ({
        ...prev,
        [currentIdx]: optionIdx,
      }));
    }
  };

  // Toggle Doubt State for Question
  const toggleDoubt = (index: number) => {
    setDoubtSet((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  // Format Time (HH:MM:SS or MM:SS)
  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) {
      return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate Statistics
  const answeredCount = Object.keys(answers).length;
  const doubtCount = doubtSet.size;
  const unansweredCount = totalQuestions - answeredCount;

  // Final Submit Handler
  const handleFinalSubmit = async (forcedByTimeout = false) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    if (timerRef.current) clearInterval(timerRef.current);

    let correct = 0;
    config.questions.forEach((q, idx) => {
      if (checkIfAnswerCorrect(q, answers[idx])) {
        correct++;
      }
    });

    const scorePct = totalQuestions > 0 ? Math.round((correct / totalQuestions) * 100) : 0;
    const timeSpent = initialSeconds - timeLeft;

    setScoreResult({
      scorePct,
      correctCount: correct,
      incorrectCount: answeredCount - correct,
      unansweredCount,
      timeSpentSeconds: timeSpent,
    });

    // Record score to Firebase
    try {
      if (uid && config.paketId) {
        await recordTryOutScore(uid, config.subjectId, config.paketId, scorePct);
      }
      onQuizCompleted();
    } catch (err) {
      console.error('Gagal mencatat skor Try Out:', err);
    }

    // Celebration Confetti
    if (scorePct >= (config.passThreshold || 85)) {
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch (e) {
        // Safe fallback
      }
    }

    setIsSubmitting(false);
    setShowSubmitModal(false);
    setIsCompleted(true);
  };

  // Toggle Fullscreen in DOM
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Font size classes
  const fontClasses = {
    normal: {
      question: 'text-sm sm:text-base leading-relaxed',
      option: 'text-xs sm:text-sm',
    },
    large: {
      question: 'text-base sm:text-lg leading-relaxed',
      option: 'text-sm sm:text-base',
    },
    xlarge: {
      question: 'text-lg sm:text-xl leading-relaxed',
      option: 'text-base sm:text-lg',
    },
  }[fontSize];

  // ==========================================
  // VIEW: POST-EXAM COMPREHENSIVE REVIEW (PEMBAHASAN)
  // ==========================================
  if (isCompleted && scoreResult) {
    const passed = scoreResult.scorePct >= (config.passThreshold || 85);
    
    // Filter questions for review
    const filteredQuestions = config.questions
      .map((q, idx) => {
        const userAns = answers[idx];
        const isCorrect = checkIfAnswerCorrect(q, userAns);
        const isUnanswered = userAns === undefined || (Array.isArray(userAns) && userAns.length === 0);
        return {
          q,
          idx,
          userAns,
          isCorrect,
          isUnanswered,
        };
      })
      .filter((item) => {
        if (reviewFilter === 'wrong') return !item.isCorrect;
        if (reviewFilter === 'correct') return item.isCorrect;
        return true;
      });

    return (
      <div 
        ref={containerRef}
        className="fixed inset-0 z-50 flex flex-col bg-slate-50 text-slate-800 font-sans overflow-hidden"
      >
        {/* Top Sticky Header */}
        <header className="h-16 px-4 sm:px-6 bg-white/95 backdrop-blur-md border-b border-slate-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 -ml-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              title="Kembali ke Mapel"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                Hasil &amp; Pembahasan: {config.title}
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-500">
                {subjectName} &bull; {totalQuestions} Butir Soal &bull; Waktu: {Math.floor(scoreResult.timeSpentSeconds / 60)}m {scoreResult.timeSpentSeconds % 60}s
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition-all"
          >
            Tutup &amp; Selesai
          </button>
        </header>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 max-w-5xl w-full mx-auto space-y-6">
          {/* Summary Score Card */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex flex-col items-center justify-center font-black text-2xl sm:text-3xl border shadow-xs ${
                  passed 
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                    : 'bg-rose-50 text-rose-700 border-rose-200'
                }`}>
                  <span>{scoreResult.scorePct}</span>
                  <span className="text-[10px] font-bold tracking-wider text-slate-500">SKOR CBT</span>
                </div>

                <div>
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold mb-1.5 border ${
                    passed 
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                      : 'bg-rose-50 text-rose-700 border-rose-200'
                  }`}>
                    {passed ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                    <span>{passed ? 'TUNTAS (SKOR ≥ 85)' : 'BELUM TUNTAS (SKOR < 85)'}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {passed ? 'Luar Biasa! Skor Anda Memenuhi KKM (≥85)' : 'Skor Belum Tuntas (<85). Evaluasi & Ulangi!'}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 max-w-md">
                    Batas tuntas kelulusan adalah 85. Skor di bawah 85 dianggap belum tuntas. Nilai tersimpan ke riwayat akun dan grafik kesiapan TKA.
                  </p>
                </div>
              </div>

              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 w-full md:w-auto">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center min-w-[90px]">
                  <span className="text-xs text-emerald-700 font-semibold block mb-0.5">Benar</span>
                  <span className="text-lg sm:text-xl font-bold text-slate-900">{scoreResult.correctCount}</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center min-w-[90px]">
                  <span className="text-xs text-rose-700 font-semibold block mb-0.5">Salah</span>
                  <span className="text-lg sm:text-xl font-bold text-slate-900">{scoreResult.incorrectCount}</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center min-w-[90px]">
                  <span className="text-xs text-slate-500 font-semibold block mb-0.5">Kosong</span>
                  <span className="text-lg sm:text-xl font-bold text-slate-900">{scoreResult.unansweredCount}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Bar & Header Pembahasan */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Pembahasan Lengkap Per Nomor Soal
              </h4>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
              <button
                onClick={() => setReviewFilter('all')}
                className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                  reviewFilter === 'all' 
                    ? 'bg-white text-indigo-700 shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Semua ({totalQuestions})
              </button>
              <button
                onClick={() => setReviewFilter('wrong')}
                className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                  reviewFilter === 'wrong' 
                    ? 'bg-rose-600 text-white shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Salah ({scoreResult.incorrectCount + scoreResult.unansweredCount})
              </button>
              <button
                onClick={() => setReviewFilter('correct')}
                className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                  reviewFilter === 'correct' 
                    ? 'bg-emerald-600 text-white shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Benar ({scoreResult.correctCount})
              </button>
            </div>
          </div>

          {/* Review Question Cards */}
          <div className="space-y-4 pb-8">
            {filteredQuestions.map(({ q, idx, userAns, isCorrect, isUnanswered }) => {
              const alphabet = ['A', 'B', 'C', 'D', 'E'];
              return (
                <div 
                  key={q.id || idx}
                  className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs hover:border-slate-300 transition-all space-y-4"
                >
                  {/* Card Header: Number, Question Type, HOTS Badge & Status */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-indigo-700 px-2.5 py-1 rounded-lg bg-indigo-50 border border-indigo-200">
                        Soal #{idx + 1}
                      </span>
                      {isComplexQuestion(q) ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-lg">
                          Pilihan Ganda Kompleks
                        </span>
                      ) : isTrueFalseQuestion(q) ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-lg">
                          Benar / Salah
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-lg">
                          Pilihan Ganda
                        </span>
                      )}
                      {q.isHots && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-lg">
                          <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> HOTS (Penalaran Tinggi)
                        </span>
                      )}
                    </div>

                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                      isCorrect 
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                        : isUnanswered
                        ? 'bg-slate-100 text-slate-600 border-slate-200'
                        : 'bg-rose-50 text-rose-700 border-rose-200'
                    }`}>
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" /> Jawaban Anda Benar
                        </>
                      ) : isUnanswered ? (
                        <>
                          <HelpCircle className="w-3.5 h-3.5" /> Tidak Dijawab
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3.5 h-3.5" /> Jawaban Anda Salah
                        </>
                      )}
                    </span>
                  </div>

                  {/* SVG Illustration / Media if available */}
                  {((q.images && q.images.length > 0) || q.image) && (
                    <div className="my-3 flex flex-col items-center">
                      {q.images && q.images.length > 1 ? (
                        <div className={`grid grid-cols-1 ${q.images.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'} gap-3 max-w-3xl w-full`}>
                          {q.images.map((imgSrc, imgIdx) => (
                            <div key={imgIdx} className="relative group bg-slate-50 rounded-xl p-2.5 border border-slate-200 flex flex-col items-center justify-center overflow-hidden">
                              <span className="text-[10px] font-semibold text-slate-500 mb-1 self-start px-1.5 py-0.5 bg-slate-200/60 rounded">
                                Gambar {imgIdx + 1}
                              </span>
                              <img 
                                src={imgSrc} 
                                alt={`Ilustrasi Soal ${idx + 1} - Gambar ${imgIdx + 1}`}
                                className="max-h-48 w-auto object-contain cursor-pointer transition-transform group-hover:scale-105"
                                referrerPolicy="no-referrer"
                                onClick={() => setZoomedImage(imgSrc)}
                              />
                              <button
                                onClick={() => setZoomedImage(imgSrc)}
                                className="absolute bottom-2 right-2 bg-white/90 hover:bg-white text-slate-700 p-1.5 rounded-lg border border-slate-200 text-xs flex items-center gap-1 shadow-xs transition-opacity"
                              >
                                <ZoomIn className="w-3.5 h-3.5" />
                                <span>Perbesar</span>
                              </button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="relative group max-w-md w-full bg-slate-50 rounded-xl p-3 border border-slate-200 flex items-center justify-center overflow-hidden">
                          <img 
                            src={q.image || (q.images && q.images[0])} 
                            alt={`Ilustrasi Soal ${idx + 1}`}
                            className="max-h-60 w-auto object-contain cursor-pointer transition-transform group-hover:scale-105"
                            referrerPolicy="no-referrer"
                            onClick={() => setZoomedImage(q.image || (q.images && q.images[0]) || null)}
                          />
                          <button
                            onClick={() => setZoomedImage(q.image || (q.images && q.images[0]) || null)}
                            className="absolute bottom-2 right-2 bg-white/90 hover:bg-white text-slate-700 p-1.5 rounded-lg border border-slate-200 text-xs flex items-center gap-1 shadow-xs transition-opacity"
                          >
                            <ZoomIn className="w-3.5 h-3.5" />
                            <span>Perbesar</span>
                          </button>
                        </div>
                      )}
                      {q.imageCaption && (
                        <p className="text-[11px] text-slate-500 mt-1.5 italic text-center">
                          {q.imageCaption}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Question Prompt */}
                  <p 
                    className="text-sm sm:text-base text-slate-900 font-medium whitespace-pre-line leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: q.question }}
                  />

                  {/* Option Choices Status */}
                  <div className="space-y-2 pt-1">
                    {q.options.length === 0 ? (
                      <div className="p-3 rounded-xl border border-dashed border-amber-300 bg-amber-50 text-amber-900 text-xs italic">
                        Opsi pilihan jawaban nomor ini berupa berkas gambar ilustrasi dan disediakan ruang kosong untuk diunggah kemudian.
                      </div>
                    ) : (
                      q.options.map((opt, optIdx) => {
                      const isComplex = isComplexQuestion(q);
                      const targetAnswers = isComplex 
                        ? (q.correctAnswers || []) 
                        : (q.correctAnswer !== undefined ? [q.correctAnswer] : []);
                      const chosenAnswers = Array.isArray(userAns) 
                        ? userAns 
                        : (userAns !== undefined ? [userAns] : []);

                      const isThisCorrect = targetAnswers.includes(optIdx);
                      const isThisChosen = chosenAnswers.includes(optIdx);

                      let badgeBorder = 'border-slate-200 bg-slate-50 text-slate-700';
                      let letterColor = 'bg-slate-200 text-slate-700';

                      if (isThisCorrect) {
                        badgeBorder = 'border-emerald-300 bg-emerald-50 text-emerald-900';
                        letterColor = 'bg-emerald-600 text-white font-bold';
                      } else if (isThisChosen && !isThisCorrect) {
                        badgeBorder = 'border-rose-300 bg-rose-50 text-rose-900';
                        letterColor = 'bg-rose-600 text-white font-bold';
                      }

                      return (
                        <div
                          key={optIdx}
                          className={`flex items-start gap-3 p-3 rounded-xl border text-xs sm:text-sm transition-all ${badgeBorder}`}
                        >
                          <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs shrink-0 ${letterColor}`}>
                            {alphabet[optIdx]}
                          </span>
                          <span 
                            className="flex-1 pt-0.5 leading-snug"
                            dangerouslySetInnerHTML={{ __html: opt }}
                          />
                          
                          {isThisCorrect && !isThisChosen && (
                            <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1 bg-emerald-100 px-2 py-0.5 rounded-md shrink-0">
                              <Check className="w-3 h-3" /> Kunci Jawaban
                            </span>
                          )}
                          {isThisCorrect && isThisChosen && (
                            <span className="text-[11px] font-bold text-emerald-800 flex items-center gap-1 bg-emerald-100 px-2 py-0.5 rounded-md shrink-0">
                              <Check className="w-3 h-3" /> Jawaban Anda (Tepat)
                            </span>
                          )}
                          {isThisChosen && !isThisCorrect && (
                            <span className="text-[11px] font-bold text-rose-700 flex items-center gap-1 bg-rose-100 px-2 py-0.5 rounded-md shrink-0">
                              <X className="w-3 h-3" /> Jawaban Anda (Keliru)
                            </span>
                          )}
                        </div>
                      );
                    }))}
                  </div>

                  {/* Pembahasan Box */}
                  <div className="mt-3 bg-indigo-50/70 border border-indigo-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800 space-y-1.5">
                    <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Pembahasan &amp; Kunci:</span>
                    </div>
                    <p 
                      className="text-slate-700 leading-relaxed whitespace-pre-line"
                      dangerouslySetInnerHTML={{ __html: q.explanation || 'Pembahasan terperinci mengacu pada prinsip dasar dan silabus TKA SMP.' }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW: ACTIVE CBT EXAM RUNNER
  // ==========================================
  return (
    <div 
      ref={containerRef}
      className={`fixed inset-0 z-50 flex flex-col bg-slate-100 text-slate-800 font-sans select-none overflow-hidden ${
        isFullscreen ? 'p-0' : ''
      }`}
    >
      {/* 1. TOP CBT NAVIGATION BAR */}
      <header className="h-14 sm:h-16 px-3 sm:px-6 bg-white border-b border-slate-200 flex items-center justify-between shrink-0 shadow-xs z-20">
        {/* Left: Subject & Exam Title */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 shrink-0 font-bold text-xs">
            CBT
          </div>
          <div>
            <h1 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1">
              {config.title}
            </h1>
            <p className="text-[10px] sm:text-[11px] text-slate-500">
              {subjectName} &bull; Soal <span className="text-indigo-600 font-bold">{currentIdx + 1}</span> dari {totalQuestions}
            </p>
          </div>
        </div>

        {/* Center: Live Timer Widget */}
        <div className="flex items-center gap-2">
          <div className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-xl border font-mono font-bold text-xs sm:text-sm transition-all shadow-xs ${
            timeLeft < 300 
              ? 'bg-rose-50 border-rose-300 text-rose-700 animate-pulse' 
              : timeLeft < 900
              ? 'bg-amber-50 border-amber-300 text-amber-800'
              : 'bg-indigo-50 border-indigo-200 text-indigo-700'
          }`}>
            <Clock className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${timeLeft < 300 ? 'text-rose-600' : 'text-indigo-600'}`} />
            <span>{formatTime(timeLeft)}</span>
          </div>
        </div>

        {/* Right: Controls (Font, Grid Palette, Fullscreen, Selesai) */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Font Size Adjuster */}
          <div className="hidden md:flex items-center bg-slate-100 rounded-xl p-0.5 border border-slate-200 text-xs">
            <button
              onClick={() => setFontSize('normal')}
              className={`px-2 py-1 rounded-lg ${fontSize === 'normal' ? 'bg-white text-indigo-700 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
              title="Ukuran Font Normal"
            >
              A
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`px-2 py-1 rounded-lg font-bold ${fontSize === 'large' ? 'bg-white text-indigo-700 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
              title="Ukuran Font Besar"
            >
              A+
            </button>
            <button
              onClick={() => setFontSize('xlarge')}
              className={`px-2 py-1 rounded-lg font-extrabold ${fontSize === 'xlarge' ? 'bg-white text-indigo-700 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
              title="Ukuran Font Ekstra Besar"
            >
              A++
            </button>
          </div>

          {/* Toggle Fullscreen */}
          <button
            onClick={handleToggleFullscreen}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-all hidden sm:flex"
            title={isFullscreen ? 'Keluar Layar Penuh' : 'Layar Penuh'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Toggle Daftar Soal / Palette */}
          <button
            onClick={() => setShowNavGrid(!showNavGrid)}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
              showNavGrid
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Daftar Soal</span>
            <span className="bg-white px-1.5 py-0.2 rounded-md text-[10px] text-slate-700 ml-0.5 border border-slate-200/60">
              {answeredCount}/{totalQuestions}
            </span>
          </button>

          {/* Selesai / Submit Button */}
          <button
            onClick={() => setShowSubmitModal(true)}
            className="px-3 sm:px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-all"
          >
            Selesai
          </button>
        </div>
      </header>

      {/* 2. MAIN BODY (QUESTION VIEWPORT + SIDEBAR PALETTE) */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Center: Question & Options Viewport */}
        <div className="flex-1 flex flex-col overflow-y-auto p-3 sm:p-6 lg:p-8">
          <div className="max-w-3xl w-full mx-auto flex-1 flex flex-col justify-between space-y-6">
            
            {/* Question Card Box */}
            <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-xs space-y-5">
              
              {/* Question Index Badge, Question Type, HOTS Indicator & Status */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs sm:text-sm font-bold">
                    Soal Nomor {currentIdx + 1}
                  </span>
                  {isComplexQuestion(currentQuestion) ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-lg">
                      Pilihan Ganda Kompleks (Bisa pilih &gt; 1)
                    </span>
                  ) : isTrueFalseQuestion(currentQuestion) ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-lg">
                      Benar / Salah
                    </span>
                  ) : null}
                  {currentQuestion.isHots && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-lg">
                      <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> HOTS
                    </span>
                  )}
                  {doubtSet.has(currentIdx) && (
                    <span className="px-2.5 py-0.5 rounded-lg bg-amber-50 text-amber-800 border border-amber-300 text-[11px] font-semibold flex items-center gap-1">
                      <Flag className="w-3 h-3 fill-amber-500 text-amber-500" /> Ragu-ragu
                    </span>
                  )}
                </div>

                <span className="text-[11px] sm:text-xs text-slate-500">
                  {answers[currentIdx] !== undefined && (!Array.isArray(answers[currentIdx]) || (answers[currentIdx] as number[]).length > 0)
                    ? 'Sudah Terjawab' 
                    : 'Belum Dijawab'}
                </span>
              </div>

              {/* Optional SVG / Image Illustration */}
              {((currentQuestion.images && currentQuestion.images.length > 0) || currentQuestion.image) && (
                <div className="my-2 flex flex-col items-center">
                  {currentQuestion.images && currentQuestion.images.length > 1 ? (
                    <div className={`grid grid-cols-1 ${currentQuestion.images.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'} gap-3 max-w-3xl w-full`}>
                      {currentQuestion.images.map((imgSrc, imgIdx) => (
                        <div key={imgIdx} className="relative group bg-slate-50 rounded-2xl p-3 border border-slate-200 flex flex-col items-center justify-center overflow-hidden">
                          <span className="text-[10px] font-semibold text-slate-500 mb-1 self-start px-2 py-0.5 bg-slate-200/60 rounded">
                            Gambar {imgIdx + 1}
                          </span>
                          <img
                            src={imgSrc}
                            alt={`Ilustrasi Soal Nomor ${currentIdx + 1} - Gambar ${imgIdx + 1}`}
                            className="max-h-52 w-auto object-contain cursor-pointer transition-transform duration-200 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                            onClick={() => setZoomedImage(imgSrc)}
                          />
                          <button
                            onClick={() => setZoomedImage(imgSrc)}
                            className="absolute bottom-2 right-2 bg-white/90 hover:bg-white text-slate-700 p-1.5 rounded-lg border border-slate-200 text-xs flex items-center gap-1 shadow-xs"
                          >
                            <ZoomIn className="w-3.5 h-3.5" />
                            <span className="text-[11px]">Perbesar</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="relative group max-w-lg w-full bg-slate-50 rounded-2xl p-4 border border-slate-200 flex items-center justify-center overflow-hidden">
                      <img
                        src={currentQuestion.image || (currentQuestion.images && currentQuestion.images[0])}
                        alt={`Ilustrasi Soal Nomor ${currentIdx + 1}`}
                        className="max-h-64 w-auto object-contain cursor-pointer transition-transform duration-200 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        onClick={() => setZoomedImage(currentQuestion.image || (currentQuestion.images && currentQuestion.images[0]) || null)}
                      />
                      <button
                        onClick={() => setZoomedImage(currentQuestion.image || (currentQuestion.images && currentQuestion.images[0]) || null)}
                        className="absolute bottom-2.5 right-2.5 bg-white/90 hover:bg-white text-slate-700 p-1.5 rounded-lg border border-slate-200 text-xs flex items-center gap-1 shadow-xs"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Perbesar Gambar</span>
                      </button>
                    </div>
                  )}
                  {currentQuestion.imageCaption && (
                    <p className="text-xs text-slate-500 mt-1.5 italic text-center">
                      {currentQuestion.imageCaption}
                    </p>
                  )}
                </div>
              )}

              {/* Question Text */}
              <div 
                className={`text-slate-900 font-medium whitespace-pre-line ${fontClasses.question}`}
                dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
              />

              {/* Options List */}
              <div className="space-y-3 pt-2">
                {currentQuestion.options.length === 0 ? (
                  <div className="p-4 rounded-xl border border-dashed border-amber-300 bg-amber-50/80 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-amber-950">Opsi Pilihan Jawaban Kosong</p>
                      <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                        Opsi pilihan jawaban untuk butir nomor ini berupa gambar ilustrasi dan disediakan ruang kosong untuk diunggah kemudian. Kamu dapat menandai ragu-ragu atau langsung melanjutkan ke butir soal berikutnya.
                      </p>
                    </div>
                  </div>
                ) : (
                  currentQuestion.options.map((option, optIdx) => {
                  const alphabet = ['A', 'B', 'C', 'D', 'E'];
                  const isComplex = isComplexQuestion(currentQuestion);
                  const isSelected = isComplex
                    ? (Array.isArray(answers[currentIdx]) && (answers[currentIdx] as number[]).includes(optIdx))
                    : answers[currentIdx] === optIdx;

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectAnswer(optIdx)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border transition-all flex items-start gap-3.5 group cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-50/90 border-indigo-500 shadow-xs ring-1 ring-indigo-400 text-slate-900'
                          : 'bg-slate-50/60 border-slate-200 hover:border-slate-300 hover:bg-slate-100/70 text-slate-700'
                      }`}
                    >
                      <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 transition-all ${
                        isSelected
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'bg-slate-200 text-slate-700 group-hover:bg-slate-300 group-hover:text-slate-900'
                      }`}>
                        {alphabet[optIdx]}
                      </span>

                      <span 
                        className={`flex-1 pt-1 ${fontClasses.option} ${isSelected ? 'text-slate-900 font-bold' : 'text-slate-700'}`}
                        dangerouslySetInnerHTML={{ __html: option }}
                      />

                      <div className={`w-5 h-5 ${isComplex ? 'rounded-md' : 'rounded-full'} border flex items-center justify-center mt-1 shrink-0 transition-all ${
                        isSelected ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300'
                      }`}>
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                }))}
              </div>
            </div>

            {/* Bottom Action Controls (Prev, Doubt, Next) */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-3 sm:p-4 flex items-center justify-between gap-2 sm:gap-4 shadow-xs shrink-0">
              {/* Prev Button */}
              <button
                onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
                disabled={currentIdx === 0}
                className="flex items-center gap-1.5 px-3 sm:px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-xs sm:text-sm font-semibold transition-all border border-slate-200"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Sebelumnya</span>
              </button>

              {/* Ragu-Ragu Toggle Button */}
              <button
                onClick={() => toggleDoubt(currentIdx)}
                className={`flex items-center gap-2 px-3.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                  doubtSet.has(currentIdx)
                    ? 'bg-amber-400 text-amber-950 border-amber-500 shadow-xs'
                    : 'bg-amber-50 hover:bg-amber-100 text-amber-800 border-amber-200'
                }`}
              >
                <Flag className={`w-4 h-4 ${doubtSet.has(currentIdx) ? 'fill-amber-950 text-amber-950' : 'fill-amber-500 text-amber-500'}`} />
                <span>{doubtSet.has(currentIdx) ? 'Ragu-ragu (Aktif)' : 'Ragu-ragu'}</span>
              </button>

              {/* Next / Selesai Button */}
              {currentIdx < totalQuestions - 1 ? (
                <button
                  onClick={() => setCurrentIdx((prev) => Math.min(totalQuestions - 1, prev + 1))}
                  className="flex items-center gap-1.5 px-3 sm:px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs"
                >
                  <span className="hidden sm:inline">Selanjutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setShowSubmitModal(true)}
                  className="flex items-center gap-1.5 px-4 sm:px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-all shadow-xs"
                >
                  <span>Selesai Ujian</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Right Drawer / Sidebar: Question Grid Palette */}
        {showNavGrid && (
          <aside className="w-72 sm:w-80 bg-white border-l border-slate-200 flex flex-col justify-between shrink-0 z-30 shadow-xl animate-fade-in absolute sm:relative inset-y-0 right-0">
            {/* Palette Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <LayoutGrid className="w-4 h-4 text-indigo-600" />
                  <span>Navigasi Nomor Soal</span>
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Klik nomor untuk langsung berpindah soal
                </p>
              </div>

              <button
                onClick={() => setShowNavGrid(false)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 sm:hidden"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Grid of Numbers */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="grid grid-cols-5 gap-2.5">
                {config.questions.map((_, idx) => {
                  const isCurrent = currentIdx === idx;
                  const isAnswered = answers[idx] !== undefined;
                  const isDoubt = doubtSet.has(idx);

                  let bgClass = 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900';
                  if (isDoubt) {
                    bgClass = 'bg-amber-50 text-amber-800 border-amber-300 font-bold';
                  } else if (isAnswered) {
                    bgClass = 'bg-emerald-50 text-emerald-800 border-emerald-300 font-bold';
                  }

                  if (isCurrent) {
                    bgClass += ' ring-2 ring-indigo-500 font-black shadow-xs';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setCurrentIdx(idx);
                        if (window.innerWidth < 640) setShowNavGrid(false);
                      }}
                      className={`h-10 rounded-xl border flex flex-col items-center justify-center text-xs relative transition-all ${bgClass}`}
                    >
                      <span>{idx + 1}</span>
                      {isDoubt && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 absolute bottom-1" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Legend & Summary Info */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/80 space-y-3 text-xs">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Keterangan Status:
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="flex items-center gap-2 text-emerald-700 font-medium">
                  <span className="w-3 h-3 rounded-md bg-emerald-100 border border-emerald-300 shrink-0" />
                  <span>Dijawab ({answeredCount})</span>
                </div>
                <div className="flex items-center gap-2 text-amber-700 font-medium">
                  <span className="w-3 h-3 rounded-md bg-amber-100 border border-amber-300 shrink-0" />
                  <span>Ragu-ragu ({doubtCount})</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <span className="w-3 h-3 rounded-md bg-slate-100 border border-slate-300 shrink-0" />
                  <span>Kosong ({unansweredCount})</span>
                </div>
                <div className="flex items-center gap-2 text-indigo-700 font-medium">
                  <span className="w-3 h-3 rounded-md bg-white border border-indigo-500 ring-1 ring-indigo-500 shrink-0" />
                  <span>Sedang Dibuka</span>
                </div>
              </div>

              <button
                onClick={() => setShowSubmitModal(true)}
                className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-all"
              >
                Kumpulkan Ujian Sekarang
              </button>
            </div>
          </aside>
        )}
      </div>

      {/* 3. CONFIRMATION SUBMIT MODAL */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-md w-full p-6 space-y-5 shadow-2xl">
            <div className="flex items-center gap-3 text-slate-900 border-b border-slate-100 pb-3">
              <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
              <h3 className="text-base font-bold text-slate-900">Konfirmasi Pengumpulan Try Out</h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600">
              Apakah Anda yakin ingin mengakhiri dan mengumpulkan jawaban ujian <strong>{config.title}</strong>?
            </p>

            {/* Summary Stat Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Total Soal:</span>
                <span className="font-bold text-slate-900">{totalQuestions} Butir</span>
              </div>
              <div className="flex justify-between text-emerald-700">
                <span>Soal Sudah Dijawab:</span>
                <span className="font-bold">{answeredCount} Soal</span>
              </div>
              <div className="flex justify-between text-amber-700">
                <span>Soal Ragu-ragu:</span>
                <span className="font-bold">{doubtCount} Soal</span>
              </div>
              <div className="flex justify-between text-rose-700">
                <span>Soal Belum Dijawab:</span>
                <span className="font-bold">{unansweredCount} Soal</span>
              </div>
              <div className="flex justify-between text-indigo-700 pt-2 border-t border-slate-200">
                <span>Sisa Waktu Ujian:</span>
                <span className="font-bold font-mono">{formatTime(timeLeft)}</span>
              </div>
            </div>

            {doubtCount > 0 && (
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-xs flex items-center gap-2">
                <Flag className="w-4 h-4 fill-amber-500 text-amber-500 shrink-0" />
                <span>Perhatian: Masih ada {doubtCount} soal yang ditandai ragu-ragu.</span>
              </div>
            )}

            {unansweredCount > 0 && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Masih ada {unansweredCount} soal yang belum Anda jawab.</span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                onClick={() => setShowSubmitModal(false)}
                disabled={isSubmitting}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all border border-slate-200"
              >
                Periksa Lagi
              </button>
              <button
                onClick={() => handleFinalSubmit(false)}
                disabled={isSubmitting}
                className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-all flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Menyimpan...</span>
                  </>
                ) : (
                  <span>Ya, Kumpulkan Jawaban</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. IMAGE ZOOM MODAL */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative max-w-3xl max-h-[85vh] bg-white border border-slate-200 p-4 rounded-3xl shadow-2xl flex flex-col items-center">
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-3 right-3 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={zoomedImage}
              alt="Zoomed Illustration"
              className="max-h-[75vh] w-auto object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
            <p className="text-xs text-slate-500 mt-2">Klik di luar gambar untuk menutup</p>
          </div>
        </div>
      )}
    </div>
  );
};
