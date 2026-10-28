import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  CheckCircle2, 
  XCircle, 
  Award, 
  RotateCcw, 
  Check, 
  ArrowRight, 
  HelpCircle
} from 'lucide-react';
import { QuizConfig } from '../types';
import { 
  recordPreTkaScore, 
  recordTopicScore, 
  recordTryOutScore 
} from '../lib/firebase';

interface QuizRunnerModalProps {
  uid: string;
  config: QuizConfig | null;
  onClose: () => void;
  onQuizCompleted: () => void;
}

export const QuizRunnerModal: React.FC<QuizRunnerModalProps> = ({
  uid,
  config,
  onClose,
  onQuizCompleted,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [isPassed, setIsPassed] = useState(false);
  const [saving, setSaving] = useState(false);

  if (!config) return null;

  const currentQ = config.questions[currentIndex];
  const totalQ = config.questions.length;

  const handleSelectOption = (optionIndex: number) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionIndex,
    }));
  };

  const handleNext = () => {
    if (currentIndex < totalQ - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    // Calculate correct count
    let correctCount = 0;
    config.questions.forEach((q, i) => {
      if (userAnswers[i] === q.correctAnswer) {
        correctCount++;
      }
    });

    const scorePct = Math.round((correctCount / totalQ) * 100);
    const passed = scorePct >= config.passThreshold;

    setFinalScore(scorePct);
    setIsPassed(passed);
    setIsSubmitted(true);
    setSaving(true);

    // Trigger confetti if passed
    if (passed) {
      try {
        confetti({
          particleCount: 90,
          spread: 60,
          origin: { y: 0.6 },
        });
      } catch (e) {
        console.warn('Confetti effect unavailable:', e);
      }
    }

    // Record score to Firestore
    try {
      if (uid) {
        if (config.type === 'pre_tka' || config.type === 'diagnostic') {
          await recordPreTkaScore(uid, config.diagnosticCategoryId || config.preTkaCategoryId || config.subjectId, scorePct, passed);
        } else if (config.type === 'topic' && config.topicId) {
          await recordTopicScore(uid, config.topicId, scorePct, passed);
        } else if (config.type === 'tryout' && config.paketId) {
          await recordTryOutScore(uid, config.subjectId, config.paketId, scorePct);
        }
      }
      onQuizCompleted();
    } catch (err) {
      console.error('Failed to record score in Firestore:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setUserAnswers({});
    setIsSubmitted(false);
    setFinalScore(0);
    setIsPassed(false);
  };

  const answeredCount = Object.keys(userAnswers).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in font-sans">
      <div className="bg-slate-900 rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[96vh] sm:max-h-[90vh] flex flex-col shadow-2xl border border-slate-800 overflow-hidden relative text-slate-100">
        {/* Modal Top Navigation Header */}
        <div className="px-4 py-3 sm:px-6 sm:py-4 bg-slate-950 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="min-w-0 pr-2">
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              {config.type === 'diagnostic' || config.type === 'pre_tka' ? 'Diagnostic Test' : config.type === 'topic' ? 'Kuis Topik' : 'Try Out Paket'}
            </span>
            <h3 className="text-xs sm:text-base font-bold text-white mt-0.5 truncate max-w-[240px] sm:max-w-md">
              {config.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition shrink-0"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-3.5 sm:p-6 overflow-y-auto flex-1 space-y-4 sm:space-y-6">
          {!isSubmitted ? (
            <>
              {/* Question Navigation & Progress Bar */}
              <div>
                <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-400 font-semibold mb-1.5 sm:mb-2">
                  <span>
                    Soal <strong className="text-indigo-400 font-bold">{currentIndex + 1}</strong> dari {totalQ}
                  </span>
                  <span>
                    Terjawab: {answeredCount}/{totalQ}
                  </span>
                </div>

                <div className="w-full h-1.5 sm:h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="h-full bg-indigo-500 transition-all duration-300 rounded-full"
                    style={{ width: `${((currentIndex + 1) / totalQ) * 100}%` }}
                  />
                </div>
              </div>

              {/* Image Illustration if available */}
              {((currentQ.images && currentQ.images.length > 0) || currentQ.image) && (
                <div className="flex flex-col items-center">
                  {currentQ.images && currentQ.images.length > 1 ? (
                    <div className={`grid grid-cols-1 ${currentQ.images.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'} gap-2 w-full`}>
                      {currentQ.images.map((imgSrc, imgIdx) => (
                        <div key={imgIdx} className="bg-slate-950 rounded-xl p-2 border border-slate-800 flex flex-col items-center justify-center">
                          <span className="text-[10px] text-slate-400 mb-1 self-start">Gambar {imgIdx + 1}</span>
                          <img src={imgSrc} alt={`Gambar ${imgIdx + 1}`} className="max-h-44 w-auto object-contain rounded" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-slate-950 rounded-xl p-2 border border-slate-800 flex items-center justify-center">
                      <img src={currentQ.image || (currentQ.images && currentQ.images[0])} alt="Ilustrasi" className="max-h-56 w-auto object-contain rounded" />
                    </div>
                  )}
                  {currentQ.imageCaption && (
                    <p className="text-[11px] text-slate-400 mt-1 italic text-center">{currentQ.imageCaption}</p>
                  )}
                </div>
              )}

              {/* Question Text */}
              <div 
                className="bg-slate-950 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-800 text-slate-100 text-xs sm:text-base font-medium leading-relaxed"
                dangerouslySetInnerHTML={{ __html: currentQ.question }}
              />

              {/* Options */}
              <div className="space-y-2 sm:space-y-3">
                {currentQ.options.map((opt, optIdx) => {
                  const isSelected = userAnswers[currentIndex] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(optIdx)}
                      className={`w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left text-xs sm:text-sm font-medium flex items-start gap-2.5 sm:gap-3 transition min-h-[44px] ${
                        isSelected
                          ? 'border-indigo-500 bg-indigo-500/20 text-indigo-200 ring-2 ring-indigo-500/30'
                          : 'border-slate-800 bg-slate-950 hover:bg-slate-850 text-slate-200'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border flex items-center justify-center shrink-0 mt-0.5 text-[10px] sm:text-xs font-bold transition ${
                          isSelected
                            ? 'bg-indigo-500 text-white border-indigo-500'
                            : 'border-slate-700 text-slate-400 bg-slate-900'
                        }`}
                      >
                        {String.fromCharCode(65 + optIdx)}
                      </div>
                      <span className="leading-snug" dangerouslySetInnerHTML={{ __html: opt }} />
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            /* Results & Answer Review View */
            <div className="space-y-4 sm:space-y-6">
              {/* Result Summary Card */}
              <div
                className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl text-center shadow-lg border ${
                  isPassed
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                    : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                }`}
              >
                <div className="inline-flex p-2.5 sm:p-3 rounded-2xl mb-1.5 sm:mb-2 bg-slate-900 shadow-md border border-slate-800">
                  {isPassed ? (
                    <Award className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" />
                  ) : (
                    <XCircle className="w-8 h-8 sm:w-10 sm:h-10 text-rose-400" />
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-black">
                  {isPassed ? 'SELAMAT! ANDA TUNTAS (SKOR ≥ 85)' : 'BELUM TUNTAS (SKOR < 85)'}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 font-medium">
                  Batas Nilai Tuntas: &ge; 85 (Skor di bawah 85 dianggap belum tuntas)
                </p>

                <div className="my-2.5 sm:my-4 text-3xl sm:text-4xl font-extrabold text-white">
                  {finalScore} <span className="text-xs sm:text-sm text-slate-400 font-normal">/ 100</span>
                </div>

                {saving && (
                  <p className="text-[11px] sm:text-xs text-indigo-400 font-medium animate-pulse">
                    Menyimpan hasil ke Firestore database...
                  </p>
                )}
              </div>

              {/* Detailed Explanation Review */}
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-100 mb-2.5 sm:mb-3 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-indigo-400" /> Pembahasan Jawaban:
                </h4>

                <div className="space-y-3 sm:space-y-4">
                  {config.questions.map((q, idx) => {
                    const uAns = userAnswers[idx];
                    const isCorrect = uAns === q.correctAnswer;

                    return (
                      <div
                        key={q.id}
                        className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border text-xs sm:text-sm space-y-1.5 sm:space-y-2 ${
                          isCorrect ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-rose-500/10 border-rose-500/30'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 font-bold text-slate-100">
                          <span dangerouslySetInnerHTML={{ __html: `Soal ${idx + 1}: ${q.question}` }} />
                          {isCorrect ? (
                            <span className="text-emerald-400 flex items-center gap-1 shrink-0 font-bold text-xs">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Benar
                            </span>
                          ) : (
                            <span className="text-rose-400 flex items-center gap-1 shrink-0 font-bold text-xs">
                              <XCircle className="w-3.5 h-3.5" /> Salah
                            </span>
                          )}
                        </div>

                        <div className="text-slate-300 text-xs">
                          <div>
                            Jawaban Anda:{' '}
                            <strong className={isCorrect ? 'text-emerald-400' : 'text-rose-400'}>
                              {uAns !== undefined ? (
                                <span dangerouslySetInnerHTML={{ __html: `${String.fromCharCode(65 + uAns)}. ${q.options[uAns]}` }} />
                              ) : (
                                'Tidak dijawab'
                              )}
                            </strong>
                          </div>
                          {!isCorrect && (
                            <div>
                              Jawaban Benar:{' '}
                              <strong className="text-emerald-400">
                                <span dangerouslySetInnerHTML={{ __html: `${String.fromCharCode(65 + q.correctAnswer)}. ${q.options[q.correctAnswer]}` }} />
                              </strong>
                            </div>
                          )}
                        </div>

                        <div className="p-2.5 sm:p-3 bg-slate-950 rounded-xl border border-slate-800 text-slate-300 leading-relaxed text-[11px] sm:text-xs">
                          <strong className="text-slate-100 block mb-1">Penjelasan:</strong>
                          <div dangerouslySetInnerHTML={{ __html: q.explanation }} className="space-y-1" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-3 sm:p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between shrink-0">
          {!isSubmitted ? (
            <>
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 font-medium text-xs hover:bg-slate-800 disabled:opacity-40 min-h-[40px]"
              >
                Sebelumnya
              </button>

              {currentIndex < totalQ - 1 ? (
                <button
                  onClick={handleNext}
                  className="px-4 py-2.5 sm:px-5 sm:py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl text-xs flex items-center gap-1 shadow-sm transition min-h-[40px]"
                >
                  <span>Selanjutnya</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={answeredCount < totalQ}
                  className="px-4 py-2.5 sm:px-6 sm:py-2.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center gap-1 shadow-md transition disabled:opacity-50 min-h-[40px]"
                >
                  <Check className="w-4 h-4" />
                  <span>Selesai &amp; Kirim</span>
                </button>
              )}
            </>
          ) : (
            <div className="flex items-center gap-2 sm:gap-3 w-full">
              <button
                onClick={handleRestart}
                className="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 transition min-h-[40px]"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Coba Lagi
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md transition min-h-[40px]"
              >
                Kembali ke Modul
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
