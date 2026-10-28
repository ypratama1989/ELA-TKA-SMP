import React, { useState } from 'react';
import { 
  X, 
  BookOpen, 
  Search, 
  BarChart2, 
  Layers, 
  FileSpreadsheet, 
  Sparkles, 
  Trophy, 
  Download, 
  Settings, 
  HelpCircle, 
  CheckCircle2, 
  ArrowRight,
  Brain,
  Clock,
  ShieldCheck,
  Zap,
  Smartphone,
  Check
} from 'lucide-react';
import { SubjectId } from '../types';

interface UserGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (view: string, subjectId?: SubjectId) => void;
  onOpenSoalTka?: () => void;
  onOpenSoalUpdate?: () => void;
  onOpenSettings?: () => void;
}

interface FeatureItem {
  id: string;
  category: 'core' | 'cbt' | 'tools';
  title: string;
  icon: React.ReactNode;
  tag: string;
  summary: string;
  details: string[];
  actionLabel?: string;
  onAction?: () => void;
}

export const UserGuideModal: React.FC<UserGuideModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenSoalTka,
  onOpenSoalUpdate,
  onOpenSettings,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'core' | 'cbt' | 'tools'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const features: FeatureItem[] = [
    {
      id: 'dashboard',
      category: 'core',
      title: 'Dashboard Analitik & Kesiapan Real-Time',
      icon: <BarChart2 className="w-5 h-5 text-violet-600" />,
      tag: 'Utama',
      summary: 'Pusat komando dan pemantauan perkembangan belajar siswa secara akurat.',
      details: [
        'Kartu Kesiapan Keseluruhan: Menampilkan persentase akumulasi penguasaan 71 topik materi dan 48 paket Try Out CBT.',
        'Grafik Radar Kompetensi: Memvisualisasikan kekuatan & kelemahan di 4 mata pelajaran (Matematika, B. Indonesia, B. Inggris, IPA Terpadu).',
        'Rekomendasi Belajar Cerdas: Otomatis mendeteksi topik dengan skor rendah dan memberikan shortcut remedial langsung.',
        'Riwayat Latihan Terpadu: Rekap seluruh kuis dan try out yang telah dikerjakan lengkap dengan skor dan tanggal pengerjaan.'
      ]
    },
    {
      id: 'modul-materi',
      category: 'core',
      title: 'Modul Belajar Terpadu (71 Topik Materi)',
      icon: <Layers className="w-5 h-5 text-indigo-600" />,
      tag: 'Materi',
      summary: 'Materi esensial lengkap dengan ringkasan visual, rumus praktis, dan contoh soal.',
      details: [
        'Terbagi ke dalam 4 Mapel Utama: Matematika (22 Topik), Bahasa Indonesia (16 Topik), Bahasa Inggris (15 Topik), dan IPA Terpadu (18 Topik).',
        'Penjelasan Konsep Ramah Siswa: Disusun dengan bahasa yang mudah dicerna disertai analogi konkret.',
        'Indikator Centang Tuntas: Menandai topik yang sudah diselesaikan dan mencapai KKM 85%.',
        'Unduh Ringkasan Materi: Simpan teks rangkuman materi lengkap ke memori perangkat untuk dibaca sewaktu-waktu.'
      ],
      actionLabel: 'Buka Modul Belajar',
      onAction: onNavigate ? () => { onClose(); onNavigate('subject', 'math'); } : undefined
    },
    {
      id: 'kuis-topik',
      category: 'core',
      title: 'Kuis Topik per Bab & Pembahasan Mendalam',
      icon: <Zap className="w-5 h-5 text-amber-600" />,
      tag: 'Latihan Bab',
      summary: 'Latihan soal terfokus untuk setiap bab materi dengan batas kelulusan standar 85%.',
      details: [
        'Tiap materi memiliki kuis latihan spesifik untuk menguji pemahaman konsep secara langsung.',
        'Kunci Jawaban & Pembahasan Lengkap: Ulasan langkah demi langkah gratis agar siswa mengerti alasan di balik jawaban yang benar.',
        'Mendukung Pengulangan Tanpa Batas: Siswa dapat mengulang kuis kapan saja hingga mencapai skor maksimal.'
      ]
    },
    {
      id: 'flashcard',
      category: 'core',
      title: 'Flashcard Hafalan Cepat & Rumus Kilat',
      icon: <Brain className="w-5 h-5 text-pink-600" />,
      tag: 'Spaced Repetition',
      summary: 'Kartu bolak-balik interaktif untuk mengunci rumus, definisi, dan kaidah penting.',
      details: [
        'Dirancang khusus untuk melatih memori cepat (retrieval practice) tanpa kelelahan kognitif.',
        'Interaksi Flip Kartu: Ketuk kartu untuk membalik antara pertanyaan/konsep dan kunci jawaban.',
        'Tersedia untuk seluruh mata pelajaran: Rumus Matematika/Fisika, Kosakata Bahasa Inggris, Kaidah PUEBI, dan Istilah Biologi.'
      ],
      actionLabel: 'Buka Flashcard',
      onAction: onNavigate ? () => { onClose(); onNavigate('flashcard', 'indo'); } : undefined
    },
    {
      id: 'tryout-cbt',
      category: 'cbt',
      title: '48 Paket Try Out CBT Standar Asesmen Nasional',
      icon: <FileSpreadsheet className="w-5 h-5 text-emerald-600" />,
      tag: 'Simulasi Ujian',
      summary: 'Simulasi ujian berbasis komputer dengan atmosfer, timer, dan jenis soal autentik.',
      details: [
        'Total 48 Paket Soal: Tersebar di Matematika, Bahasa Indonesia, Bahasa Inggris, dan IPA Terpadu (masing-masing 12 paket).',
        'Timer Otomatis & Auto-Submit: Pengerjaan dibatasi waktu layaknya ujian sungguhan.',
        'Navigasi Nomor Soal Fleksibel: Lompat antar nomor soal, tandai soal ragu-ragu, dan periksa status jawaban.',
        'Ragam Tipe Soal Terkini: Pilihan Ganda Tunggal, Pilihan Ganda Kompleks (pilih lebih dari satu opsi benar), dan Menjodohkan.'
      ]
    },
    {
      id: 'soal-tka-2026',
      category: 'cbt',
      title: 'Simulasi Soal Asli TKA SMP 2026',
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      tag: 'Naskah Asli',
      summary: 'Simulasi naskah autentik asesmen TKA 2026 untuk Bahasa Indonesia dan Matematika.',
      details: [
        'Paket Soal Asli Terverifikasi: Berisi paket soal resmi terstandar dengan bobot stimulus HOTS.',
        'Fokus Pengerjaan CBT Utuh: Pengalaman ujian murni dengan timer dan skor analitis di akhir sesi.',
        'Tersedia tombol pintas langsung di header dashboard untuk kemudahan akses cepat.'
      ],
      actionLabel: 'Buka Soal TKA 2026',
      onAction: onOpenSoalTka ? () => { onClose(); onOpenSoalTka(); } : undefined
    },
    {
      id: 'soal-update',
      category: 'cbt',
      title: 'Bank Soal Update & Kisi-Kisi Terbaru',
      icon: <Clock className="w-5 h-5 text-teal-600" />,
      tag: 'Update Berkala',
      summary: 'Kumpulan paket soal tambahan yang diperbarui berkala mengikuti perkembangan kurikulum.',
      details: [
        'Paket latihan prediktif dengan variasi konteks kehidupan nyata (literasi & numerasi terapan).',
        'Dapat dikerjakan langsung sebagai latihan CBT mandiri.',
        'Dilengkapi label tingkat kesulitan dan tag mata pelajaran.'
      ],
      actionLabel: 'Buka Soal Update',
      onAction: onOpenSoalUpdate ? () => { onClose(); onOpenSoalUpdate(); } : undefined
    },
    {
      id: 'tka-champion',
      category: 'tools',
      title: 'Lencana TKA Champion & Gelar Kehormatan',
      icon: <Trophy className="w-5 h-5 text-amber-500" />,
      tag: 'Gamifikasi',
      summary: 'Sistem penghargaan pencapaian belajar berjenjang untuk menjaga motivasi siswa.',
      details: [
        '5 Tingkatan Prestasi: Bronze Starter, Silver Explorer, Gold Scholar, Platinum Master, hingga Diamond Grandmaster.',
        'Naik peringkat secara otomatis seiring bertambahnya materi yang tuntas dan skor try out yang tinggi.',
        'Dapat dibagikan sebagai bukti kesiapan sebelum menghadapi asesmen sesungguhnya.'
      ]
    },
    {
      id: 'pwa-offline',
      category: 'tools',
      title: 'PWA Offline Mode & Pasang Aplikasi',
      icon: <Smartphone className="w-5 h-5 text-blue-600" />,
      tag: 'Offline Ready',
      summary: 'Gunakan aplikasi mandiri tanpa kuota internet di HP (Android/iOS) maupun Komputer.',
      details: [
        'Instalasi Mudah: Ketuk tombol "Pasang Aplikasi" di header atau login untuk menambahkan ke layar utama ponsel/laptop.',
        'Sistem Penyimpanan Cerdas: Seluruh modul materi, kuis, dan try out tersimpan di memori perangkat melalui IndexedDB.',
        'Tetap Berfungsi Penuh saat Jaringan Terputus: Siswa dapat membaca materi dan berlatih soal di mana saja.'
      ]
    },
    {
      id: 'backup-settings',
      category: 'tools',
      title: 'Pengaturan, Cadangan Data Belajar (.edufillah)',
      icon: <Settings className="w-5 h-5 text-slate-700" />,
      tag: 'Keamanan Data',
      summary: 'Amankan seluruh riwayat nilai, progres belajar, dan lencana ke dalam berkas cadangan.',
      details: [
        'Pencadangan Berkas Mandiri: Simpan data belajar berformat .edufillah ke penyimpanan lokal atau cloud.',
        'Pemulihan Sekali Klik: Pulihkan seluruh nilai belajar saat mengganti handphone atau komputer baru.',
        'Ubah Nama Panggilan Siswa & Reset Progres: Pengaturan identitas dan opsi mulai ulang dari awal jika diinginkan.'
      ],
      actionLabel: 'Buka Pengaturan',
      onAction: onOpenSettings ? () => { onClose(); onOpenSettings(); } : undefined
    },
    {
      id: 'help-cs',
      category: 'tools',
      title: 'Pusat Bantuan & WhatsApp Customer Service',
      icon: <HelpCircle className="w-5 h-5 text-emerald-600" />,
      tag: 'Dukungan Resmi',
      summary: 'Layanan pelanggan siap membantu kendala akses, login, atau penggunaan aplikasi.',
      details: [
        'Dukungan Langsung WhatsApp: Terhubung secara resmi dengan CS Edufillah di +62 831-6950-9332.',
        'Jam Pelayanan CS: Hanya Hari Kerja (Senin - Jumat), pukul 10.00 - 17.00 WIB (Sabtu, Minggu & Libur Nasional Tutup).',
        'Dapat diakses kapan saja melalui ikon Bantuan di bilah navigasi atas atau laman login.'
      ]
    }
  ];

  const filteredFeatures = features.filter((f) => {
    const matchesCategory = selectedCategory === 'all' || f.category === selectedCategory;
    if (!matchesCategory) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      f.title.toLowerCase().includes(q) ||
      f.summary.toLowerCase().includes(q) ||
      f.tag.toLowerCase().includes(q) ||
      f.details.some(d => d.toLowerCase().includes(q))
    );
  });

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-3xl max-w-4xl w-full flex flex-col shadow-2xl border border-slate-200 text-slate-800 my-auto max-h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 sm:px-8 py-5 border-b border-slate-200 flex items-center justify-between gap-3 bg-gradient-to-r from-cyan-700 via-teal-700 to-indigo-800 text-white shadow-md">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/20 backdrop-blur-xs text-cyan-200 flex items-center justify-center font-bold shrink-0 border border-white/30 shadow-inner">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-xl font-black tracking-tight text-white">
                  User Guide: Panduan Fitur Lengkap
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-cyan-300 text-slate-950 tracking-wider">
                  Edufillah App
                </span>
              </div>
              <p className="text-xs sm:text-sm text-cyan-100 mt-0.5 font-medium">
                Penjelasan komprehensif seluruh fitur, modul latihan, dan teknologi aplikasi
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition shrink-0 border border-white/20"
            title="Tutup User Guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Bar & Search */}
        <div className="px-5 sm:px-8 py-3.5 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto scrollbar-none pb-1 sm:pb-0">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Semua Fitur ({features.length})
            </button>
            <button
              onClick={() => setSelectedCategory('core')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition shrink-0 ${
                selectedCategory === 'core'
                  ? 'bg-violet-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Materi &amp; Kuis
            </button>
            <button
              onClick={() => setSelectedCategory('cbt')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition shrink-0 ${
                selectedCategory === 'cbt'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Simulasi CBT
            </button>
            <button
              onClick={() => setSelectedCategory('tools')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition shrink-0 ${
                selectedCategory === 'tools'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Alat &amp; Sistem
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari fitur aplikasi..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-300 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Feature List Scrollable */}
        <div className="p-4 sm:p-7 overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredFeatures.map((feat) => (
              <div
                key={feat.id}
                className="p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-cyan-300 hover:shadow-md transition bg-white flex flex-col justify-between space-y-3 text-left"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="p-2 rounded-xl bg-slate-100 border border-slate-200/80">
                      {feat.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                      {feat.tag}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-black text-slate-900">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">
                    {feat.summary}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5">
                    {feat.details.map((det, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                        <span>{det}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {feat.actionLabel && feat.onAction && (
                  <div className="pt-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={feat.onAction}
                      className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs transition flex items-center justify-center gap-1.5 active:scale-95 shadow-xs"
                    >
                      <span>{feat.actionLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-300" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFeatures.length === 0 && (
            <div className="p-10 text-center bg-slate-50 rounded-2xl border border-slate-200 text-slate-500 text-xs">
              Tidak ada fitur yang cocok dengan pencarian &quot;{searchQuery}&quot;.
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-8 py-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Edufillah Learning App &bull; Solusi Terpadu Sukses TKA SMP</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs transition shadow-sm"
          >
            Tutup Panduan
          </button>
        </div>
      </div>
    </div>
  );
};
