import React, { useState } from 'react';
import { 
  X, 
  FileSpreadsheet, 
  BookMarked, 
  Calculator, 
  Play, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  ShieldCheck,
  Award,
  ListOrdered
} from 'lucide-react';
import { SubjectId, UserProfile, QuizConfig } from '../types';
import { TKA_2026_PACKAGES } from '../data/soalTka2026Data';

interface SoalTka2026ModalProps {
  isOpen: boolean;
  onClose: () => void;
  userProfile?: UserProfile;
  onNavigate?: (view: string, subjectId?: SubjectId) => void;
  onStartQuiz?: (config: QuizConfig) => void;
}

export const SoalTka2026Modal: React.FC<SoalTka2026ModalProps> = ({
  isOpen,
  onClose,
  onStartQuiz,
}) => {
  const [activeSubjectId, setActiveSubjectId] = useState<'indo' | 'math'>('indo');

  if (!isOpen) return null;

  const currentPackage = TKA_2026_PACKAGES[activeSubjectId];

  const handleStartCbt = () => {
    if (!onStartQuiz) return;
    const config: QuizConfig = {
      type: 'tryout',
      title: `${currentPackage.title}`,
      subjectId: currentPackage.subjectId,
      questions: currentPackage.questions,
      durationMinutes: currentPackage.durationMinutes,
      passThreshold: currentPackage.passingScore,
      isGuestAllowed: true,
    };
    onClose();
    onStartQuiz(config);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div 
        className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl max-w-3xl w-full p-4 sm:p-6 shadow-2xl relative space-y-4 sm:space-y-5 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-800 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-violet-600 to-indigo-600 text-white rounded-2xl shadow-md shadow-violet-900/30">
              <FileSpreadsheet className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-xl font-black text-white tracking-tight">
                  Soal Asli TKA 2026
                </h3>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Naskah Resmi
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 font-medium">
                Pilih mata pelajaran untuk mengikuti simulasi CBT naskah asli edisi 2026
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition"
            title="Tutup Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2 Mata Pelajaran Switcher Tabs */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 flex-shrink-0">
          {/* Tab 1: Bahasa Indonesia */}
          <button
            type="button"
            onClick={() => setActiveSubjectId('indo')}
            className={`p-3 sm:p-4 rounded-2xl border text-left transition flex items-center justify-between relative ${
              activeSubjectId === 'indo'
                ? 'bg-gradient-to-r from-orange-950/40 via-amber-950/20 to-slate-900 border-orange-500/80 shadow-lg shadow-orange-950/30'
                : 'bg-slate-950/50 border-slate-800/80 hover:bg-slate-800/40 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-black ${
                activeSubjectId === 'indo'
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-600/30'
                  : 'bg-slate-800 text-slate-400'
              }`}>
                <BookMarked className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className={`text-xs sm:text-sm font-black ${
                    activeSubjectId === 'indo' ? 'text-white' : 'text-slate-300'
                  }`}>
                    Bahasa Indonesia
                  </span>
                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30">
                    {TKA_2026_PACKAGES.indo.questions.length} Soal
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                  Literasi Membaca &amp; Wacana Kritis
                </p>
              </div>
            </div>
            {activeSubjectId === 'indo' && (
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse hidden sm:block" />
            )}
          </button>

          {/* Tab 2: Matematika */}
          <button
            type="button"
            onClick={() => setActiveSubjectId('math')}
            className={`p-3 sm:p-4 rounded-2xl border text-left transition flex items-center justify-between relative ${
              activeSubjectId === 'math'
                ? 'bg-gradient-to-r from-amber-950/40 via-yellow-950/20 to-slate-900 border-amber-500/80 shadow-lg shadow-amber-950/30'
                : 'bg-slate-950/50 border-slate-800/80 hover:bg-slate-800/40 text-slate-400 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-black ${
                activeSubjectId === 'math'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30'
                  : 'bg-slate-800 text-slate-400'
              }`}>
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className={`text-xs sm:text-sm font-black ${
                    activeSubjectId === 'math' ? 'text-white' : 'text-slate-300'
                  }`}>
                    Matematika
                  </span>
                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {TKA_2026_PACKAGES.math.questions.length} Soal
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                  Numerasi &amp; Penalaran Terapan
                </p>
              </div>
            </div>
            {activeSubjectId === 'math' && (
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse hidden sm:block" />
            )}
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-4 custom-scrollbar">
          {/* Main Subject Information Card */}
          <div className={`p-4 sm:p-5 rounded-2xl sm:rounded-3xl border ${
            activeSubjectId === 'indo'
              ? 'bg-gradient-to-b from-orange-950/30 to-slate-900/90 border-orange-500/30'
              : 'bg-gradient-to-b from-amber-950/30 to-slate-900/90 border-amber-500/30'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-2 max-w-xl">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full ${
                    activeSubjectId === 'indo'
                      ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                      : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  }`}>
                    {currentPackage.badge}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    Durasi {currentPackage.durationMinutes} Menit
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Batas Tuntas Skor &ge; {currentPackage.passingScore}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-black text-white">
                  {currentPackage.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {currentPackage.description}
                </p>
              </div>

              {/* Action Button: Hanya Mulai Simulasi CBT */}
              <div className="flex flex-col gap-2 shrink-0 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleStartCbt}
                  className={`w-full py-3 px-6 rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-lg active:scale-98 ${
                    activeSubjectId === 'indo'
                      ? 'bg-orange-600 hover:bg-orange-500 text-white shadow-orange-900/40'
                      : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-900/40'
                  }`}
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Mulai Simulasi CBT</span>
                </button>
              </div>
            </div>

            {/* Kisi-kisi kompetensi utama */}
            <div className="mt-4 pt-3 border-t border-slate-800/80">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Cakupan Kisi-Kisi Ujian TKA 2026:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentPackage.kisiKisi.map((kisi, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-medium px-2 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/60 flex items-center gap-1"
                  >
                    <span className="w-1 h-1 rounded-full bg-violet-400" />
                    {kisi}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Ketentuan & Mekanisme Pengerjaan CBT */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-violet-400">
                <ListOrdered className="w-4 h-4" />
                <span className="text-xs font-bold text-slate-200">Format Ujian Asli</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Tersedia {currentPackage.questions.length} butir soal pilihan ganda standar asesmen nasional dengan navigasi soal interaktif.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-bold text-slate-200">Timer &amp; Penilaian</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Pengerjaan dibatasi waktu {currentPackage.durationMinutes} menit dengan sistem otomatis kumpul jawaban saat waktu berakhir.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-amber-400">
                <Award className="w-4 h-4" />
                <span className="text-xs font-bold text-slate-200">Kunci &amp; Pembahasan</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Ulasan komprehensif, analisis jawaban benar-salah, serta skor akhir disajikan lengkap setelah simulasi selesai.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 flex-shrink-0">
          <div className="text-[11px] text-slate-500 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Standar Soal CBT Asli TKA SMP 2026 &bull; Kemendikbudristek</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition"
            >
              Tutup
            </button>
            <button
              onClick={handleStartCbt}
              className={`px-5 py-2 rounded-xl font-black text-xs transition flex items-center gap-1.5 shadow-md ${
                activeSubjectId === 'indo'
                  ? 'bg-orange-600 hover:bg-orange-500 text-white'
                  : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
              }`}
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Simulasi CBT {currentPackage.name}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

