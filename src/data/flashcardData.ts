import { SubjectId } from '../types';

export interface FlashcardItem {
  id: string;
  subjectId: SubjectId;
  topicTitle: string;
  frontText: string;
  backTitle: string;
  backText: string;
  keyPoints?: string[];
}

export const FLASHCARD_DATA: Record<SubjectId, FlashcardItem[]> = {
  math: [
    {
      id: 'math-1',
      subjectId: 'math',
      topicTitle: 'Bilangan & Operasi Hitung',
      frontText: 'Bagaimana urutan prioritas operasi hitung campuran (KABATAKU)?',
      backTitle: 'Prioritas Operasi Hitung',
      backText: 'Kurung () ➔ Pangkat/Akar ➔ Kali & Bagi (sejajar, dari kiri ke kanan) ➔ Tambah & Kurang (sejajar, dari kiri ke kanan).',
      keyPoints: [
        'Perkalian dengan bilangan negatif: (-) × (-) = (+)',
        'Pembagian negatif dengan positif: (-) ÷ (+) = (-)'
      ]
    },
    {
      id: 'math-2',
      subjectId: 'math',
      topicTitle: 'Aljabar & Persamaan Linear',
      frontText: 'Apakah rumus penyelesaian Persamaan Linear Satu Variabel (PLSV)?',
      backTitle: 'Penyelesaian PLSV',
      backText: 'Kelompokkan suku ber-variabel di ruas kiri dan konstanta di ruas kanan, lalu operasikan secara adil pada kedua ruas.',
      keyPoints: [
        'Contoh: 3x - 5 = 16 ➔ 3x = 21 ➔ x = 7',
        'Ingat: Pindah ruas mengubah tanda (+ jadi -, × jadi ÷)'
      ]
    },
    {
      id: 'math-3',
      subjectId: 'math',
      topicTitle: 'Geometri - Teorema Pythagoras',
      frontText: 'Sebutkan rumus Teorema Pythagoras dan contoh Tripel Pythagoras populer!',
      backTitle: 'Teorema Pythagoras',
      backText: 'Pada segitiga siku-siku: c² = a² + b² (dengan c adalah sisi miring / hipotenusa).',
      keyPoints: [
        'Tripel Pythagoras dasar: (3, 4, 5)',
        'Tripel Pythagoras dasar: (5, 12, 13)',
        'Tripel Pythagoras dasar: (7, 24, 25)',
        'Tripel Pythagoras dasar: (8, 15, 17)'
      ]
    },
    {
      id: 'math-4',
      subjectId: 'math',
      topicTitle: 'Geometri - Bangun Datar & Ruang',
      frontText: 'Sebutkan rumus Luas Persegi Panjang, Segitiga, dan Lingkaran!',
      backTitle: 'Rumus Luas Bangun Datar',
      backText: '• Persegi Panjang: L = p × l\n• Segitiga: L = ½ × a × t\n• Lingkaran: L = π × r² (π = 22/7 atau 3.14)',
      keyPoints: [
        'Keliling Persegi Panjang = 2 × (p + l)',
        'Keliling Lingkaran = 2 × π × r atau π × d'
      ]
    },
    {
      id: 'math-5',
      subjectId: 'math',
      topicTitle: 'Statistika - Ukuran Pemusatan Data',
      frontText: 'Apa perbedaan antara Mean, Median, dan Modus?',
      backTitle: 'Mean, Median, & Modus',
      backText: '• Mean: Rata-rata hitung (Total Nilai ÷ Banyak Data)\n• Median: Nilai tengah setelah data diurutkan dari terkecil\n• Modus: Nilai yang paling sering muncul (frekuensi terbanyak)',
      keyPoints: [
        'Jika jumlah data genap, Median = Rata-rata 2 data di tengah',
        'Data bisa memiliki lebih dari 1 modus (Bimodal)'
      ]
    },
    {
      id: 'math-6',
      subjectId: 'math',
      topicTitle: 'Aritmetika Sosial - Untung & Rugi',
      frontText: 'Bagaimana rumus menghitung Persentase Untung dan Persentase Rugi?',
      backTitle: 'Persentase Untung & Rugi',
      backText: '• Untung = Harga Jual - Harga Beli (jika Jual > Beli)\n• % Untung = (Untung ÷ Harga Beli) × 100%\n• % Rugi = (Rugi ÷ Harga Beli) × 100%',
      keyPoints: [
        'Persentase selalu dihitung terhadap Harga Beli (HB)',
        'Diskon dihitung terhadap Harga Coret/Harga Awal'
      ]
    }
  ],
  indo: [
    {
      id: 'indo-1',
      subjectId: 'indo',
      topicTitle: 'Gagasan Utama & Paragraf',
      frontText: 'Apa perbedaan Paragraf Deduktif, Induktif, dan Campuran?',
      backTitle: 'Jenis Paragraf berdasarkan Letak Kalimat Utama',
      backText: '• Deduktif: Kalimat utama di AWAL paragraf.\n• Induktif: Kalimat utama di AKHIR paragraf (biasanya diawali kata kesimpulan: "oleh karena itu", "dengan demikian").\n• Campuran: Kalimat utama di AWAL dan ditegaskan kembali di AKHIR.',
      keyPoints: [
        'Gagasan utama terkandung di dalam Kalimat Utama',
        'Kalimat penjelas berfungsi menguraikan gagasan utama'
      ]
    },
    {
      id: 'indo-2',
      subjectId: 'indo',
      topicTitle: 'Kata Baku & Ejaan (PUEBI)',
      frontText: 'Manakah penulisan kata baku yang tepat menurut KBBI?',
      backTitle: 'Daftar Kata Baku TKA SMP',
      backText: '• Apotek (bukan apotik)\n• Aktivitas (bukan aktipitas)\n• Praktik (bukan praktek)\n• Izin (bukan ijin)\n• Analisis (bukan analisa)\n• Kualitas (bukan kwalitas)',
      keyPoints: [
        'Kata serapan berakhiran -ic/iety menjadi -ik/-itas',
        'Huruf "f" digunakan untuk istilah baku seperti efektif, kreatif'
      ]
    },
    {
      id: 'indo-3',
      subjectId: 'indo',
      topicTitle: 'Kalimat Efektif',
      frontText: 'Ciri-ciri Kalimat Efektif dalam Bahasa Indonesia?',
      backTitle: 'Ciri Utama Kalimat Efektif',
      backText: '1. Memiliki Subjek dan Predikat yang jelas.\n2. Hemat kata (tidak pleonatis/mubazir).\n3. Paralelisme (kesetaraan bentuk kata).\n4. Tidak bermakna ganda (tidak ambigu).',
      keyPoints: [
        'Salah: "Bagi semua siswa-siswa wajib hadir..." (Pleonatis)',
        'Benar: "Semua siswa wajib hadir di aula."'
      ]
    },
    {
      id: 'indo-4',
      subjectId: 'indo',
      topicTitle: 'Gaya Bahasa & Majas',
      frontText: 'Sebutkan contoh Majas Personifikasi, Metafora, dan Hiperbola!',
      backTitle: 'Majas Populer TKA SMP',
      backText: '• Personifikasi: Menginsankan benda mati. (Contoh: "Pena itu menari-nari di atas kertas.")\n• Metafora: Ungkapan kiasan langsung. (Contoh: "Dia adalah anak emas Pak Guru.")\n• Hiperbola: Mengungkapkan secara berlebihan. (Contoh: "Suaranya menggelegar membelah angkasa.")',
      keyPoints: [
        'Majas Asosiasi/Simile menggunakan kata pembanding: seperti, laksana, bagai'
      ]
    },
    {
      id: 'indo-5',
      subjectId: 'indo',
      topicTitle: 'Jenis Teks & Strukturnya',
      frontText: 'Apa perbedaan Teks Eksplanasi dan Teks Persuasi?',
      backTitle: 'Teks Eksplanasi vs Persuasi',
      backText: '• Teks Eksplanasi: Menjelaskan proses "mengapa" dan "bagaimana" suatu fenomena alam/sosial terjadi berdasarkan sebab-akibat.\n• Teks Persuasi: Berisi ajakan, bujukan, atau imbauan agar pembaca melakukan sesuatu.',
      keyPoints: [
        'Struktur Teks Eksplanasi: Pernyataan Umum ➔ Deretan Penjelas ➔ Interpretasi',
        'Kata kunci Persuasi: marilah, ayo, hendaknya, disarankan'
      ]
    }
  ],
  eng: [
    {
      id: 'eng-1',
      subjectId: 'eng',
      topicTitle: 'Grammar - Tenses Comparison',
      frontText: 'When do we use Simple Present vs Simple Past Tense?',
      backTitle: 'Simple Present vs Simple Past Tense',
      backText: '• Simple Present Tense: Routines, habits, general facts. (Pattern: S + V1/V-es). Time signals: every day, always, usually.\n• Simple Past Tense: Completed actions in the past. (Pattern: S + V2). Time signals: yesterday, last night, 2 days ago.',
      keyPoints: [
        'Example Present: "She goes to school every day."',
        'Example Past: "She went to school yesterday."'
      ]
    },
    {
      id: 'eng-2',
      subjectId: 'eng',
      topicTitle: 'Grammar - Passive Voice',
      frontText: 'How do you form Passive Voice in English?',
      backTitle: 'Passive Voice Formula',
      backText: 'Subject + Be (am/is/are/was/were) + Verb 3 (Past Participle) [+ by Agent].',
      keyPoints: [
        'Active: "The teacher explains the lesson."',
        'Passive: "The lesson is explained by the teacher."',
        'Focus shifts from the doer to the receiver of the action.'
      ]
    },
    {
      id: 'eng-3',
      subjectId: 'eng',
      topicTitle: 'Reading Strategies',
      frontText: 'How to quickly find the "Main Idea" of an English passage?',
      backTitle: 'Finding the Main Idea',
      backText: '1. Read the first and last sentences of each paragraph.\n2. Look for repeated keywords or terms.\n3. Ask: "What is the author mostly telling us about this topic?"',
      keyPoints: [
        'Skimming: Reading quickly for general understanding.',
        'Scanning: Searching for specific details (dates, names, numbers).'
      ]
    },
    {
      id: 'eng-4',
      subjectId: 'eng',
      topicTitle: 'Vocabulary & Synonyms',
      frontText: 'Common TKA English Vocabulary & High-Frequency Synonyms',
      backTitle: 'Key Synonyms for TKA SMP',
      backText: '• Essential = Crucial / Important\n• Increase = Rise / Gain / Grow\n• Reduce = Decrease / Lower / Diminish\n• Purchase = Buy\n• Annual = Yearly',
      keyPoints: [
        'Antonym of "Increase" = "Decrease"',
        'Antonym of "Essential" = "Optional / Unnecessary"'
      ]
    },
    {
      id: 'eng-5',
      subjectId: 'eng',
      topicTitle: 'Conjunctions & Connectors',
      frontText: 'What are the functions of "However", "Although", and "Therefore"?',
      backTitle: 'Conjunction Functions',
      backText: '• Contrast (Pertentangan): However, Although, But, In contrast.\n• Cause & Effect (Sebab-Akibat): Therefore, As a result, Consequently, Because.',
      keyPoints: [
        '"Although it rained, we went out." (Contrast)',
        '"It rained heavily; therefore, the match was cancelled." (Effect)'
      ]
    }
  ],
  ipa: [
    {
      id: 'ipa-1',
      subjectId: 'ipa',
      topicTitle: 'Besaran & Satuan SI',
      frontText: 'Sebutkan 7 Besaran Pokok dan Satuan Internasionalnya (SI)!',
      backTitle: '7 Besaran Pokok SI',
      backText: '1. Panjang ➔ Meter (m)\n2. Massa ➔ Kilogram (kg)\n3. Waktu ➔ Sekon/Detik (s)\n4. Suhu ➔ Kelvin (K)\n5. Kuat Arus ➔ Ampere (A)\n6. Intensitas Cahaya ➔ Candela (cd)\n7. Jumlah Zat ➔ Mol (mol)',
      keyPoints: [
        'Suhu SI adalah KELVIN (bukan Celcius)',
        'Besaran Turunan contohnya: Luas (m²), Kecepatan (m/s), Gaya (Newton)'
      ]
    },
    {
      id: 'ipa-2',
      subjectId: 'ipa',
      topicTitle: 'Fisika - Hukum Newton',
      frontText: 'Jelaskan Hukum I, II, dan III Newton tentang Gerak!',
      backTitle: 'Hukum-Hukum Newton',
      backText: '• Hukum I Newton (Inersia/Kelembaman): Benda cenderung mempertahankan keadaannya jika ΣF = 0.\n• Hukum II Newton: F = m × a (Percepatan sebanding dengan gaya dan berbanding terbalik dengan massa).\n• Hukum III Newton (Aksi-Reaksi): F_aksi = -F_reaksi.',
      keyPoints: [
        'Contoh Hukum I: Badan terdorong ke depan saat mobil direm mendadak',
        'Contoh Hukum III: Burung mengepakkan sayap ke bawah, udara mendorong burung ke atas'
      ]
    },
    {
      id: 'ipa-3',
      subjectId: 'ipa',
      topicTitle: 'Biologi - Organ Pencernaan Manusia',
      frontText: 'Sebutkan organ pencernaan dan enzim penting di Lambung dan Pankreas!',
      backTitle: 'Enzim Pencernaan Penting',
      backText: '• Lambung: HCl (membunuh kuman), Pepsin (memecah protein ➔ pepton), Renin (mengendapkan kasein susu).\n• Pankreas: Amilase (karbohidrat ➔ glukosa), Lipase (lemak ➔ asam lemak & gliserol), Tripsin (pepton ➔ asam amino).',
      keyPoints: [
        'Pencernaan mekanis: Mulut & Lambung',
        'Penyerapan sari-sari makanan terjadi di Usus Halus (Ileum)'
      ]
    },
    {
      id: 'ipa-4',
      subjectId: 'ipa',
      topicTitle: 'Fisika - Kalor & Perubahan Wujud',
      frontText: 'Apa rumus menghitung Kalor (Q) dan perubahan wujud zat?',
      backTitle: 'Rumus Kalor',
      backText: '• Kalor Perubahan Suhu: Q = m × c × ΔT\n(m = massa, c = kalor jenis, ΔT = T_akhir - T_awal)\n• Kalor Perubahan Wujud (Mencair/Mendidih): Q = m × L atau Q = m × U',
      keyPoints: [
        'Mencair, Membeku, Menguap, Mengembun, Menyublim, Mengkristal',
        'Menyublim: Padat menjadi Gas (contoh: Kapur barus)'
      ]
    },
    {
      id: 'ipa-5',
      subjectId: 'ipa',
      topicTitle: 'Fisika - Listrik Dinamis (Hukum Ohm)',
      frontText: 'Apa rumus Hukum Ohm dan bagaimana sifat Rangkaian Seri vs Paralel?',
      backTitle: 'Hukum Ohm & Rangkaian Listrik',
      backText: '• Hukum Ohm: V = I × R (Voltase = Arus × Hambatan)\n• Rangkaian Seri: Arus (I) sama, R_total = R1 + R2 + R3\n• Rangkaian Paralel: Tegangan (V) sama, 1/R_total = 1/R1 + 1/R2 + 1/R3',
      keyPoints: [
        'Hambatan paralel selalu lebih kecil dari hambatan terkecil penyusunnya',
        'Lampu rumah tangga dirangkai Paralel agar jika satu mati, yang lain tetap menyala'
      ]
    }
  ]
};
