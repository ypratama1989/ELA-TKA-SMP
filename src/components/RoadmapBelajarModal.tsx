import React, { useState } from 'react';
import { 
  X, 
  Compass, 
  CheckCircle2, 
  Target, 
  BookOpen, 
  Sparkles, 
  Clock, 
  Flame, 
  Trophy, 
  Brain, 
  Layers, 
  Play, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Calendar,
  ChevronRight
} from 'lucide-react';
import { SubjectId } from '../types';

interface RoadmapBelajarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (view: string, subjectId?: SubjectId) => void;
  onOpenSoalTka?: () => void;
  onOpenSoalUpdate?: () => void;
}

interface RoadmapPhase {
  step: number;
  title: string;
  badge: string;
  tagline: string;
  targetOutcome: string;
  description: string;
  featureUtilized: string;
  actionButton?: {
    label: string;
    onClick: () => void;
  };
  tips: string[];
}

export const RoadmapBelajarModal: React.FC<RoadmapBelajarModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenSoalTka,
  onOpenSoalUpdate,
}) => {
  const [activeTab, setActiveTab] = useState<'strategy' | 'schedule' | 'mindset'>('strategy');

  if (!isOpen) return null;

  const phases: RoadmapPhase[] = [
    {
      step: 1,
      title: 'Pemetaan Diagnostik Awal',
      badge: 'Fase 1',
      tagline: 'Kenali titik awal dan kelemahan dasarmu',
      targetOutcome: 'Mengetahui peta kelemahan awal di 4 mata pelajaran utama.',
      description: 'Lakukan Tes Diagnostik (Pre-TKA) sebelum mempelajari seluruh materi. Tes ini memberi potret riil topik mana yang sudah kamu kuasai dan topik mana yang memerlukan perhatian ekstra.',
      featureUtilized: 'Fitur: Tes Diagnostik / Pre-TKA (Matematika, B. Indonesia, B. Inggris, IPA)',
      actionButton: onNavigate ? {
        label: 'Mulai Tes Diagnostik',
        onClick: () => {
          onClose();
          onNavigate('diagnostic');
        }
      } : undefined,
      tips: [
        'Kerjakan dengan jujur tanpa melihat catatan agar diagnosa akurat.',
        'Catat topik yang salah untuk menjadi prioritas remedial pada Fase 2.'
      ]
    },
    {
      step: 2,
      title: 'Penguasaan Konsep & Modul Materi',
      badge: 'Fase 2',
      tagline: 'Kuasai 71 materi esensial secara terstruktur',
      targetOutcome: 'Memahami konsep dasar, teorema, rumus, dan logika bahasa.',
      description: 'Masuk ke Modul Materi per mata pelajaran. Pelajari 71 topik materi yang dilengkapi ringkasan visual, contoh soal aplikatif, dan penjelasan konsep mendalam. Manfaatkan fitur unduh materi agar dapat dipelajari secara offline di mana saja.',
      featureUtilized: 'Fitur: Modul Belajar (71 Topik), Ringkasan Materi Teks/PDF, Simpan Offline',
      actionButton: onNavigate ? {
        label: 'Buka Modul Belajar',
        onClick: () => {
          onClose();
          onNavigate('subject', 'math');
        }
      } : undefined,
      tips: [
        'Fokus pada 1-2 topik per hari secara konsisten.',
        'Gunakan tombol Unduh Ringkasan Materi untuk belajar tanpa koneksi internet.'
      ]
    },
    {
      step: 3,
      title: 'Pematangan Cepat dengan Flashcard',
      badge: 'Fase 3',
      tagline: 'Perkuat memori jangka panjang lewat kartu konsep',
      targetOutcome: 'Hafal rumus matematika, kaidah ejaan, istilah sains, & kosakata esensial.',
      description: 'Gunakan fitur Flashcard interaktif secara berkala. Teknik spaced repetition (pengulangan berjeda) ini melatih daya ingat cepat tanpa merasa jenuh, sangat cocok dilakukan saat senggang 10-15 menit sehari.',
      featureUtilized: 'Fitur: Flashcard Digital Interaktif per Mata Pelajaran',
      actionButton: onNavigate ? {
        label: 'Latihan Flashcard',
        onClick: () => {
          onClose();
          onNavigate('flashcard', 'indo');
        }
      } : undefined,
      tips: [
        'Balik kartu untuk menebak jawaban sebelum melihat kunci.',
        'Ulangi setidaknya 2 putaran sampai kartu dikuasai dengan lancar.'
      ]
    },
    {
      step: 4,
      title: 'Uji Pemahaman per Bab (Kuis Topik)',
      badge: 'Fase 4',
      tagline: 'Tembus batas kelulusan KKM 85% tiap bab',
      targetOutcome: 'Membuktikan pemahaman konsep sebelum melangkah ke simulasi try out.',
      description: 'Uji tiap materi yang telah dipelajari dengan Kuis Topik. Setiap kuis memiliki batas kelulusan 85%. Jika belum tuntas, baca pembahasan langkah-demi-langkah yang disediakan secara gratis dan ulangi kuis hingga lulus.',
      featureUtilized: 'Fitur: Kuis Topik per Bab & Pembahasan Mendalam',
      tips: [
        'Jangan sekadar menghafal opsi; pahami logika penyelesaian di kotak pembahasan.',
        'Pantau status centang hijau pada daftar materi di halaman mata pelajaran.'
      ]
    },
    {
      step: 5,
      title: 'Simulasi Ujian Realistis (48 Paket Try Out CBT)',
      badge: 'Fase 5',
      tagline: 'Latih ketahanan mental, akurasi, dan manajemen waktu',
      targetOutcome: 'Membiasakan diri dengan atmosfer Asesmen Nasional & CBT nyata.',
      description: 'Ikuti 48 Paket Try Out CBT yang tersebar di 4 mata pelajaran (masing-masing 12 paket). Kerjakan dengan timer waktu nyata, navigasi nomor soal interaktif, dan ragam jenis soal (pilihan ganda tunggal, kompleks, menjodohkan). Latihan ini melatih stamina konsentrasi.',
      featureUtilized: 'Fitur: 48 Paket Try Out CBT, Timer Real-time, Analisis Skor Otomatis',
      tips: [
        'Alokasikan waktu maksimal 1-1.5 menit per butir soal.',
        'Tinjau review hasil ujian setelah selesai untuk menganalisis jawaban salah.'
      ]
    },
    {
      step: 6,
      title: 'Eksplorasi Soal Mutakhir & Naskah Asli 2026',
      badge: 'Fase 6',
      tagline: 'Uji kesiapan akhir dengan standar soal termutakhir',
      targetOutcome: 'Kesiapan 100% menghadapi model soal prediksi & tipe asesmen terbaru.',
      description: 'Jelajahi modul Soal Asli TKA 2026 dan Bank Soal Update. Modul ini menyajikan tipe soal HOTS (Higher Order Thinking Skills) dan studi kasus berbasis stimulus nyata yang paling mutakhir.',
      featureUtilized: 'Fitur: Simulasi Soal Asli TKA 2026 & Paket Bank Soal Update',
      actionButton: onOpenSoalTka ? {
        label: 'Buka Soal Asli TKA 2026',
        onClick: () => {
          onClose();
          onOpenSoalTka();
        }
      } : undefined,
      tips: [
        'Cermati stimulus teks panjang dan grafik data dengan teliti.',
        'Latih penalaran kritis dan eliminasi pilihan opsi yang mengecoh.'
      ]
    },
    {
      step: 7,
      title: 'Evaluasi Radar Analitik & Raih Lencana Champion',
      badge: 'Fase 7',
      tagline: 'Pantau grafik kesiapan dan raih gelar tertinggi',
      targetOutcome: 'Mencapai kesiapan penuh di atas 85% & meraih Diamond Champion.',
      description: 'Cek grafik radar kesiapan belajar dan riwayat terpadu di Dashboard. Ikuti rekomendasi belajar cerdas yang secara otomatis mengidentifikasi topik terlemahmu. Selesaikan seluruh target untuk meraih gelar prestisius TKA Champion Badge.',
      featureUtilized: 'Fitur: Radar Kompetensi, Rekomendasi Belajar Pintar, TKA Champion Badge',
      tips: [
        'Gunakan tombol "Ambil Remedial" pada kartu rekomendasi belajar jika nilai masih rendah.',
        'Simpan cadangan data belajarmu (.edufillah) di menu Pengaturan agar progres tidak hilang.'
      ]
    }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-3xl max-w-4xl w-full flex flex-col shadow-2xl border border-slate-200 text-slate-800 my-auto max-h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal */}
        <div className="px-5 sm:px-8 py-5 border-b border-slate-200 flex items-center justify-between gap-3 bg-gradient-to-r from-violet-700 via-purple-700 to-indigo-800 text-white shadow-md">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/20 backdrop-blur-xs text-amber-300 flex items-center justify-center font-bold shrink-0 border border-white/30 shadow-inner">
              <Compass className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-xl font-black tracking-tight text-white">
                  Road Map &amp; Strategi Belajar TKA SMP
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-amber-400 text-slate-950 tracking-wider">
                  Kurikulum Terpadu
                </span>
              </div>
              <p className="text-xs sm:text-sm text-violet-100 mt-0.5 font-medium">
                Panduan langkah demi langkah memaksimalkan seluruh fitur aplikasi Edufillah
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition shrink-0 border border-white/20"
            title="Tutup Road Map"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-5 sm:px-8 pt-4 pb-2 bg-slate-50 border-b border-slate-200 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('strategy')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition flex items-center gap-2 shrink-0 ${
              activeTab === 'strategy'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-900/20'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>7 Tahapan Roadmap</span>
          </button>

          <button
            onClick={() => setActiveTab('schedule')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition flex items-center gap-2 shrink-0 ${
              activeTab === 'schedule'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-900/20'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Rekomendasi Jadwal Harian</span>
          </button>

          <button
            onClick={() => setActiveTab('mindset')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition flex items-center gap-2 shrink-0 ${
              activeTab === 'mindset'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-900/20'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Brain className="w-4 h-4" />
            <span>Tips Ketahanan Mental CBT</span>
          </button>
        </div>

        {/* Modal Content Scrollable */}
        <div className="p-4 sm:p-7 overflow-y-auto space-y-5">
          {/* TAB 1: STRATEGI ROADMAP 7 FASE */}
          {activeTab === 'strategy' && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-violet-50 via-indigo-50 to-purple-50 p-4 rounded-2xl border border-violet-200/80 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-violet-600 text-white shrink-0 mt-0.5">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900">
                    Alur Belajar Sistematis &amp; Teruji
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Setiap fitur di Edufillah dirancang saling mendukung. Jangan langsung terburu-buru mengerjakan seluruh try out tanpa memahami konsep materi dasar. Ikuti 7 fase terstruktur berikut untuk menjamin lompatan skor maksimal.
                  </p>
                </div>
              </div>

              {/* Timeline Cards */}
              <div className="space-y-4 pt-1">
                {phases.map((p) => (
                  <div 
                    key={p.step}
                    className="p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-violet-300 hover:shadow-md transition bg-white space-y-3 relative overflow-hidden group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-xl bg-violet-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs">
                          {p.step}
                        </span>
                        <div>
                          <span className="text-[10px] font-black uppercase text-violet-700 bg-violet-100 px-2 py-0.5 rounded-md">
                            {p.badge}
                          </span>
                          <h4 className="text-sm sm:text-base font-black text-slate-900 mt-0.5">
                            {p.title}
                          </h4>
                        </div>
                      </div>

                      <div className="text-xs font-semibold text-slate-500 italic">
                        &quot;{p.tagline}&quot;
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {p.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                        <span className="font-bold text-slate-900 block mb-0.5">Target Capaian:</span>
                        <span className="text-slate-600">{p.targetOutcome}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-violet-50/70 border border-violet-100">
                        <span className="font-bold text-violet-900 block mb-0.5">Fitur Terpakai:</span>
                        <span className="text-violet-700 font-medium">{p.featureUtilized}</span>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                      <div className="space-y-1">
                        {p.tips.map((t, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-slate-600 text-[11px]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{t}</span>
                          </div>
                        ))}
                      </div>

                      {p.actionButton && (
                        <button
                          type="button"
                          onClick={p.actionButton.onClick}
                          className="self-start sm:self-auto px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-black text-xs transition flex items-center gap-1.5 shadow-xs shrink-0 active:scale-95"
                        >
                          <span>{p.actionButton.label}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: JADWAL HARIAN */}
          {activeTab === 'schedule' && (
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-black text-amber-900">
                    Ritme Belajar Mikro (Micro-Learning 45 - 60 Menit/Hari)
                  </h4>
                  <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                    Lebih baik belajar 45 menit setiap hari dengan fokus penuh dibanding maraton 6 jam hanya di akhir pekan. Jadwal di bawah ini dirancang optimal agar materi tersimpan kuat di memori jangka panjang.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl border border-slate-200 bg-white space-y-2">
                  <div className="flex items-center gap-2 text-violet-700 font-bold text-xs">
                    <span className="w-2 h-2 rounded-full bg-violet-600" />
                    Sesi Pagi / Siang (20 Menit)
                  </div>
                  <h5 className="font-black text-sm text-slate-900">Pendalaman Konsep &amp; Flashcard</h5>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>Baca 1 bab Modul Materi (Matematika atau IPA).</li>
                    <li>Ulangi 1 set Flashcard untuk mengunci rumus dan kosakata.</li>
                    <li>Unduh catatan jika berencana belajar tanpa internet.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 bg-white space-y-2">
                  <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs">
                    <span className="w-2 h-2 rounded-full bg-indigo-600" />
                    Sesi Sore / Malam (30 - 45 Menit)
                  </div>
                  <h5 className="font-black text-sm text-slate-900">Eksekusi Kuis &amp; Simulasi Try Out</h5>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>Kerjakan 1 Kuis Topik bab yang telah dipelajari pagi hari.</li>
                    <li>Setiap 2 hari sekali, ambil 1 Paket Try Out CBT lengkap.</li>
                    <li>Evaluasi butir soal salah langsung melalui kotak pembahasan.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 bg-white space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    Akhir Pekan (Sabtu / Minggu)
                  </div>
                  <h5 className="font-black text-sm text-slate-900">Review Radar &amp; Remedial Topik Lemah</h5>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>Buka kartu rekomendasi belajar di Dashboard.</li>
                    <li>Ambil sesi remedial untuk topik dengan skor di bawah 80%.</li>
                    <li>Uji paket Soal Asli TKA 2026 sebagai tolak ukur kesiapan.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 bg-white space-y-2">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-xs">
                    <span className="w-2 h-2 rounded-full bg-amber-600" />
                    Pencadangan Data
                  </div>
                  <h5 className="font-black text-sm text-slate-900">Amankan Nilai &amp; Lencana Anda</h5>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>Buka menu Pengaturan &gt; Cadangkan Data (.edufillah).</li>
                    <li>Simpan berkas cadangan di Google Drive atau memori HP.</li>
                    <li>Data dapat dipulihkan kapan saja jika berganti perangkat.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MINDSET & TIPS CBT */}
          {activeTab === 'mindset' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-1">
                <h4 className="text-sm font-black flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Strategi Taktis Menghadapi Asesmen Berbasis Komputer
                </h4>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Banyak siswa cerdas kehilangan nilai bukan karena tidak tahu konsep, melainkan karena kehabisan waktu atau panik saat menemukan soal bertipe stimulus panjang.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl border border-slate-200 bg-white">
                  <span className="text-xs font-black text-violet-700 block mb-1">
                    1. Teknik Baca Pertanyaan Terlebih Dahulu (Reverse Reading)
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Untuk soal Bahasa Indonesia atau Bahasa Inggris dengan teks panjang, baca kalimat pertanyaan terlebih dahulu. Dengan begitu, saat membaca teks Anda sudah tahu kata kunci spesifik yang dicari.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl border border-slate-200 bg-white">
                  <span className="text-xs font-black text-violet-700 block mb-1">
                    2. Jangan Terjebak di Satu Nomor (Aturan 90 Detik)
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Jika dalam 90 detik Anda belum menemukan jalan penyelesaian di soal Matematika/IPA, beri jawaban sementara, lalu tandai dan lanjutkan ke nomor berikutnya. Selesaikan semua nomor mudah lebih dahulu.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl border border-slate-200 bg-white">
                  <span className="text-xs font-black text-violet-700 block mb-1">
                    3. Waspadai Bentuk Pilihan Ganda Kompleks
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Pada soal pilihan ganda kompleks (memilih lebih dari satu opsi benar), verifikasi tiap opsi secara independen. Anggap tiap pilihan sebagai pernyataan benar atau salah tersendiri.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl border border-slate-200 bg-white">
                  <span className="text-xs font-black text-violet-700 block mb-1">
                    4. Pembahasan Bukan Sekadar Kunci, Melainkan Sumber Ilmu
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Di aplikasi Edufillah, setiap butir soal dilengkapi pembahasan terperinci. Membaca pembahasan nomor yang salah adalah momen di mana lompatan pemahaman terbesar terjadi.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-8 py-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>Target: Kelulusan 100% Topik &amp; Raih Diamond Champion</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-black text-xs transition shadow-md shadow-violet-900/20"
          >
            Pahami &amp; Mulai Belajar
          </button>
        </div>
      </div>
    </div>
  );
};
