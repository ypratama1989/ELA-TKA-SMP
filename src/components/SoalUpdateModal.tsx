import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Clock, 
  BookOpen, 
  Play, 
  HelpCircle, 
  ChevronRight, 
  Award, 
  Filter,
  CheckCircle2,
  FileText,
  Flame,
  Info
} from 'lucide-react';
import { SubjectId, QuizConfig } from '../types';
import { UPDATED_QUESTION_PACKAGES, UpdatedQuestionPackage } from '../data/updatedQuestionsData';
import { SUBJECT_NAMES } from '../data/quizData';

interface SoalUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartQuiz?: (config: QuizConfig) => void;
}

export const SoalUpdateModal: React.FC<SoalUpdateModalProps> = ({
  isOpen,
  onClose,
  onStartQuiz,
}) => {
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<'all' | SubjectId>('all');
  const [expandedPackageId, setExpandedPackageId] = useState<string | null>(null);

  if (!isOpen) return null;

  const filteredPackages = UPDATED_QUESTION_PACKAGES.filter((pkg) => {
    if (selectedSubjectFilter === 'all') return true;
    return pkg.subjectId === selectedSubjectFilter || pkg.subjectId === 'all';
  });

  const handleStartCbt = (pkg: UpdatedQuestionPackage) => {
    if (!onStartQuiz) return;
    const subId: SubjectId = pkg.subjectId === 'all' ? 'math' : pkg.subjectId;
    const config: QuizConfig = {
      type: 'tryout',
      title: pkg.title,
      subjectId: subId,
      durationMinutes: pkg.durationMinutes || 45,
      passThreshold: 85,
      questions: pkg.questions,
    };
    onClose();
    onStartQuiz(config);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-3xl max-w-4xl w-full flex flex-col shadow-2xl border border-slate-200 text-slate-800 my-auto max-h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 sm:px-8 py-5 border-b border-slate-200 flex items-center justify-between gap-3 bg-gradient-to-r from-emerald-600 via-teal-700 to-indigo-800 text-white shadow-md">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/20 backdrop-blur-xs text-amber-300 flex items-center justify-center font-bold shrink-0 border border-white/30 shadow-inner">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-lg sm:text-2xl font-black text-white leading-tight">
                  Soal Update &amp; Kisi-Kisi Terbaru
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-900 text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-xs">
                  Edisi 2026
                </span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-100 font-medium mt-0.5 truncate">
                Latihan bank soal teranyar, prediksi kisi-kisi HOTS, dan simulasi CBT interaktif
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-2xl transition shrink-0"
            title="Tutup Modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Filter Navigation Bar */}
        <div className="px-5 sm:px-8 py-3 bg-slate-50 border-b border-slate-200 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-xs font-bold text-slate-500 shrink-0 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Mapel:
          </span>

          <button
            type="button"
            onClick={() => setSelectedSubjectFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition shrink-0 ${
              selectedSubjectFilter === 'all'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            Semua Mapel ({UPDATED_QUESTION_PACKAGES.length})
          </button>

          {(['math', 'indo', 'eng', 'ipa'] as SubjectId[]).map((subId) => {
            const count = UPDATED_QUESTION_PACKAGES.filter(p => p.subjectId === subId).length;
            return (
              <button
                key={subId}
                type="button"
                onClick={() => setSelectedSubjectFilter(subId)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition shrink-0 flex items-center gap-1.5 ${
                  selectedSubjectFilter === subId
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <span>{SUBJECT_NAMES[subId]}</span>
                {count > 0 && (
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-black ${
                    selectedSubjectFilter === subId ? 'bg-white/30 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Modal Body: Package Cards */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto max-h-[65vh] space-y-4 bg-slate-100/50">
          {UPDATED_QUESTION_PACKAGES.length === 0 ? (
            <div className="py-16 px-6 text-center bg-white rounded-3xl border-2 border-dashed border-slate-200 shadow-xs flex flex-col items-center justify-center my-2">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3.5 border border-emerald-100">
                <Sparkles className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-800 tracking-tight">
                belum ada soal update
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1.5 max-w-sm leading-relaxed">
                Bank soal pembaruan dan kisi-kisi terbaru akan segera ditambahkan di sini saat rilis berikutnya.
              </p>
            </div>
          ) : (
            <>
              {/* Admin / Guru Instruction Note */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-start gap-3 shadow-xs">
                <Info className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div className="text-xs text-emerald-900 leading-relaxed">
                  <p className="font-bold mb-0.5">Pusat Pembaruan Soal Belajar</p>
                  <p className="text-emerald-800">
                    Koleksi soal di halaman ini diperbarui secara berkala mengikuti standar kisi-kisi resmi TKA SMP. Anda dapat langsung menguji kesiapan dengan mode CBT berwaktu atau meninjau pembahasannya.
                  </p>
                </div>
              </div>

              {filteredPackages.length === 0 && (
                <div className="p-8 text-center bg-white rounded-2xl border border-slate-200">
                  <Sparkles className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                  <p className="text-sm font-bold text-slate-700">Belum ada paket update untuk kategori ini</p>
                  <p className="text-xs text-slate-400 mt-1">Pilih mata pelajaran lain atau tampilkan semua paket</p>
                </div>
              )}
            </>
          )}

          {UPDATED_QUESTION_PACKAGES.length > 0 && filteredPackages.map((pkg) => {
              const isExpanded = expandedPackageId === pkg.id;

              return (
                <div 
                  key={pkg.id} 
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition overflow-hidden"
                >
                  <div className="p-4 sm:p-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-black border border-emerald-300 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          {pkg.badge}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-bold">
                          {pkg.subjectName}
                        </span>
                        <span className="text-[11px] text-slate-400 font-medium">
                          Rilis: {pkg.releaseDate}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {pkg.durationMinutes} Menit
                        </span>
                        <span className="flex items-center gap-1">
                          <FileText className="w-3.5 h-3.5 text-slate-400" />
                          {pkg.questions.length} Butir Soal
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200 font-bold text-[10px]">
                          {pkg.difficulty}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                      {pkg.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {pkg.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => setExpandedPackageId(isExpanded ? null : pkg.id)}
                        className="text-xs font-bold text-slate-600 hover:text-emerald-700 py-1.5 px-3 rounded-xl hover:bg-slate-100 transition flex items-center gap-1"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{isExpanded ? 'Tutup Pratinjau Soal' : 'Lihat Ringkasan Soal & Kunci'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleStartCbt(pkg)}
                        className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 active:scale-95 text-white text-xs font-black rounded-xl shadow-md transition flex items-center gap-2 border border-emerald-400/40"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Mulai Kerjakan (CBT)</span>
                      </button>
                    </div>
                  </div>

                  {/* Expandable Preview Section */}
                  {isExpanded && (
                    <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-5 space-y-4">
                      <h4 className="text-xs font-black uppercase text-slate-500 tracking-wider">
                        Daftar Soal &amp; Pembahasan ({pkg.questions.length} Soal)
                      </h4>

                      {pkg.questions.map((q, idx) => (
                        <div key={q.id || idx} className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs shadow-2xs space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <span className="font-bold text-slate-800">
                              Nomor {idx + 1}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full font-bold">
                              Kunci: {q.correctAnswer !== undefined ? ['A', 'B', 'C', 'D'][q.correctAnswer] : '-'}
                            </span>
                          </div>

                          <div 
                            className="text-slate-700 leading-relaxed font-medium text-xs sm:text-sm"
                            dangerouslySetInnerHTML={{ __html: q.question }}
                          />

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                            {q.options.map((opt, oIdx) => (
                              <div 
                                key={oIdx} 
                                className={`p-2 rounded-lg text-[11px] font-medium border ${
                                  oIdx === q.correctAnswer 
                                    ? 'bg-emerald-50 text-emerald-900 border-emerald-300 font-bold' 
                                    : 'bg-slate-50 text-slate-600 border-slate-200'
                                }`}
                              >
                                <span dangerouslySetInnerHTML={{ __html: opt }} />
                              </div>
                            ))}
                          </div>

                          {q.explanation && (
                            <div className="mt-2 p-2.5 rounded-lg bg-indigo-50/70 border border-indigo-100 text-indigo-950 text-[11px] leading-relaxed">
                              <span className="font-bold text-indigo-700 block mb-0.5">Pembahasan:</span>
                              <div dangerouslySetInnerHTML={{ __html: q.explanation }} />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-8 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5 text-[11px]">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Skor kuis tersimpan di riwayat latihan belajar kamu</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold transition text-xs"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
