import { Question } from '../types';

/**
 * Bank Soal Try Out TKA SMP Resmi - IPA Paket 3 (ipa_p3)
 * 25 Soal CBT Pilihan Ganda Kompleks (Pilih 2 Pernyataan yang Benar)
 * Dilengkapi Evaluasi Kunci Jawaban & Pembahasan Mendalam (Langkah Step-by-Step Ramah Siswa)
 */
export const TRYOUT_IPA_PAKET_3: Question[] = [
  // --- Soal 1: Zat dan Perubahannya ---
  {
    id: 301,
    question: `Perhatikan beberapa peristiwa perubahan zat berikut!
1) Beras ditumbuk menjadi tepung.
2) Singkong difermentasi menjadi tapai.
3) Air laut menguap menjadi garam.
4) Besi berkarat akibat udara lembap.

Manakah dua pernyataan berikut yang benar mengenai jenis perubahan zat di atas? (Pilihlah dua jawaban yang benar)`,
    questionType: 'complex',
    options: [
      'Peristiwa 1) dan 3) merupakan perubahan fisika karena tidak menghasilkan zat baru.',
      'Peristiwa 2) dan 4) merupakan perubahan kimia karena terbentuk zat baru yang sifatnya berbeda.',
      'Peristiwa 1) dan 2) merupakan perubahan fisika karena hanya terjadi perubahan wujud.',
      'Peristiwa 3) dan 4) merupakan perubahan kimia karena melibatkan reaksi dengan oksigen.',
    ],
    correctAnswers: [0, 1], // A dan B
    isHots: false,
    explanation: `Konsep Dasar Perubahan Fisika vs Perubahan Kimia Step-by-Step:

1. Cara Membedakannya Secara Sangat Mudah:
   - Perubahan Fisika: Zat aslinya TIDAK BERUBAH menjadi zat lain. Hanya bentuk, ukuran, atau wujudnya saja yang berubah. Tidak timbul zat baru!
   - Perubahan Kimia: Terjadi reaksi kimia yang menghasilkan ZAT BARU dengan sifat molekul yang berbeda total dari zat asalnya dan tidak dapat dikembalikan lagi.

2. Uji Masing-Masing Peristiwa:
   - 1) Beras ditumbuk jadi tepung: Beras hanya pecah menjadi butiran tepung yang sangat halus. Senyawa di dalamnya tetaplah karbohidrat beras murni. ➜ Ini PERUBAHAN FISIKA.
   - 2) Singkong jadi tapai: Ragi memecah karbohidrat singkong menjadi senyawa baru berupa alkohol (etanol), asam, dan glukosa beraroma tajam. Tapai tidak bisa diubah balik jadi singkong mentah. ➜ Ini PERUBAHAN KIMIA.
   - 3) Air laut menguap jadi garam: Air menguap ke udara karena panas matahari dan menyisakan kristal garam dapur (NaCl) yang memang sudah ada sejak awal di dalam air. Tidak terbentuk zat baru. ➜ Ini PERUBAHAN FISIKA.
   - 4) Besi berkarat: Besi (Fe) bereaksi dengan oksigen dan air membentuk senyawa baru yaitu karat besi (Fe₂O₃·xH₂O) yang rapuh kemerahan. ➜ Ini PERUBAHAN KIMIA.

3. Kesimpulan:
   - Pernyataan A BENAR (Peristiwa 1 dan 3 adalah perubahan fisika).
   - Pernyataan B BENAR (Peristiwa 2 dan 4 adalah perubahan kimia).

Dua jawaban yang benar adalah Opsi A dan B.`,
  },

  // --- Soal 2: Suhu, Kalor, dan Pemuaian ---
  {
    id: 302,
    question: `Sebuah bimetal yang terdiri dari logam tembaga (koefisien muai panjang 1,7 × 10⁻⁵/°C) dan besi (koefisien muai panjang 1,2 × 10⁻⁵/°C) dipanaskan bersamaan. Manakah dua pernyataan yang benar mengenai peristiwa pemuaian tersebut? (Pilihlah dua jawaban yang benar)`,
    questionType: 'complex',
    options: [
      'Bimetal akan melengkung ke arah logam besi karena besi memuai lebih lambat.',
      'Bimetal akan melengkung ke arah logam tembaga karena tembaga memuai lebih cepat.',
      'Logam dengan koefisien muai lebih besar akan mengalami pertambahan panjang yang lebih besar.',
      'Logam besi akan memanjang lebih cepat daripada logam tembaga saat dipanaskan.',
    ],
    correctAnswers: [0, 2], // A dan C
    isHots: false,
    explanation: `Konsep Pemuaian Bimetal Step-by-Step:

1. Arti Koefisien Muai Panjang (α):
   - Tembaga: α = 1,7 × 10⁻⁵/°C ➜ Angkanya LEBIH BESAR. Artinya tembaga bertambah panjang lebih banyak dan lebih cepat saat dipanaskan.
   - Besi: α = 1,2 × 10⁻⁵/°C ➜ Angkanya LEBIH KECIL. Artinya besi bertambah panjang lebih sedikit dan lebih lambat saat dipanaskan.

2. Hukum Bimetal Saat Dipanaskan:
   - Karena kedua keping logam menempel rapat, keping tembaga yang memanjang lebih pesat akan mendesak dan "memeluk" keping besi yang lebih pendek.
   - Akibatnya, bimetal akan melengkung ke arah logam yang memiliki koefisien muai lebih kecil (yaitu ke arah BESI).

3. Evaluasi Pilihan:
   - Pernyataan A BENAR: Bimetal melengkung ke arah besi karena besi memuai lebih lambat (koefisien lebih kecil).
   - Pernyataan B SALAH: Bukan melengkung ke arah tembaga.
   - Pernyataan C BENAR: Logam dengan koefisien muai lebih besar (tembaga) memang mengalami pertambahan panjang yang lebih besar ($\Delta L = L_0 \cdot \alpha \cdot \Delta T$).
   - Pernyataan D SALAH: Besi justru memanjang lebih lambat dari tembaga.

Dua jawaban yang benar adalah Opsi A dan C.`,
  },

  // --- Soal 3: Gerak dan Gaya (Hukum Newton) ---
  {
    id: 303,
    question: `Sebuah mobil mainan bergerak di atas permukaan lantai yang kasar kemudian melambat hingga akhirnya berhenti. Manakah dua pernyataan yang benar mengenai gaya-gaya yang bekerja pada mobil tersebut berdasarkan Hukum Newton? (Pilihlah dua jawaban yang benar)`,
    questionType: 'complex',
    options: [
      'Mobil berhenti karena adanya gaya gesek yang arahnya berlawanan dengan arah gerak mobil.',
      'Gaya normal yang bekerja pada mobil besarnya selalu lebih kecil daripada gaya berat mobil.',
      'Sesuai Hukum I Newton, mobil cenderung mempertahankan geraknya jika tidak ada gaya luar.',
      'Sesuai Hukum III Newton, gaya gesek lantai pada roda tidak memiliki gaya aksi-reaksi.',
    ],
    correctAnswers: [0, 2], // A dan C
    isHots: false,
    explanation: `Analisis Gaya dan Hukum Newton Step-by-Step:

1. Mengapa Mobil Mainan Bisa Melambat dan Berhenti?
   - Saat mobil meluncur di atas lantai kasar, permukaan ban bersentuhan dengan lantai.
   - Timbul gaya gesek kinetik antara ban dan lantai yang arahnya BERLAWANAN dengan arah gerak mobil. Gaya inilah yang memperlambat laju mobil hingga akhirnya berhenti (Pernyataan A BENAR).

2. Memahami Hukum I Newton (Kelembaman):
   - Setiap benda memiliki sifat malas/kelembaman (inersia), yaitu kecenderungan alami untuk mempertahankan keadaannya.
   - Jika tidak ada gaya luar yang mengganggunya (misal di ruang hampa tanpa gesekan), benda yang sedang bergerak akan terus meluncur lurus selamanya dengan kecepatan tetap (Pernyataan C BENAR).

3. Mengapa Pilihan Lain Salah?
   - Opsi B Salah: Pada bidang datar horizontal tanpa gaya angkat/tekan tambahan, gaya normal sama besar dengan gaya berat mobil ($N = W$).
   - Opsi D Salah: Setiap gaya di alam semesta selalu memiliki pasangan gaya aksi-reaksi sesuai Hukum III Newton.

Dua jawaban yang benar adalah Opsi A dan C.`,
  },

  // --- Soal 4: Klasifikasi Makhluk Hidup (Protista Ciliata) ---
  {
    id: 304,
    question: `Seorang siswa mengamati organisme mikroskopis dari air kolam menggunakan mikroskop. Ia menemukan organisme bersel tunggal, memiliki membran inti (eukariotik), dan bergerak aktif menggunakan rambut getar (silia). Manakah dua pernyataan yang benar mengenai klasifikasi organisme tersebut? (Pilihlah dua jawaban yang benar)`,
    questionType: 'complex',
    options: [
      'Organisme tersebut termasuk ke dalam kingdom Protista.',
      'Organisme tersebut dikelompokkan ke dalam kelompok Monera karena bersel tunggal.',
      'Organisme tersebut merupakan salah satu jenis protozoa, yaitu Ciliata.',
      'Organisme tersebut termasuk dalam kelompok fungi mikroskopis.',
    ],
    correctAnswers: [0, 2], // A dan C
    isHots: false,
    explanation: `Mengenal Kingdom Protista dan Protozoa Step-by-Step:

1. Ciri Utama pada Soal:
   - Bersel tunggal (uniseluler).
   - Memiliki membran inti (eukariotik) ➜ Ini kunci mutlak! Semua makhluk hidup uniseluler yang membran intinya jelas (eukariotik) masuk ke dalam KINGDOM PROTISTA (Pernyataan A BENAR).
   - Jika belum memiliki membran inti (prokariotik), barulah digolongkan ke Kingdom Monera (bakteri). Jadi Opsi B SALAH.

2. Alat Gerak Rambut Getar (Silia):
   - Protista mirip hewan (Protozoa) dikelompokkan berdasarkan alat geraknya:
     * Rhizopoda: Menggunakan kaki semu (pseudopodia), misal Amoeba.
     * Flagellata: Menggunakan bulu cambuk (flagel), misal Euglena.
     * Ciliata (Ciliophora): Menggunakan rambut getar (silia), misal Paramecium caudatum (Pernyataan C BENAR).
     * Sporozoa: Tidak memiliki alat gerak khusus, misal Plasmodium.

Dua jawaban yang benar adalah Opsi A dan C.`,
  },

  // --- Soal 5: Ekologi (Eutrofikasi) ---
  {
    id: 305,
    question: `Aktivitas pertanian yang menggunakan pupuk kimia secara berlebihan dapat menyebabkan sisa pupuk terbawa aliran air menuju danau. Hal ini memicu terjadinya eutrofikasi. Manakah dua dampak langsung yang akan terjadi pada ekosistem danau tersebut? (Pilihlah dua jawaban yang benar)`,
    questionType: 'complex',
    options: [
      'Terjadi ledakan pertumbuhan eceng gondok dan alga di permukaan air.',
      'Kadar oksigen terlarut (DO) di dalam air akan meningkat drastis.',
      'Penetrasi cahaya matahari ke dalam air terhalang sehingga tumbuhan air mati.',
      'Populasi ikan di dalam danau akan meningkat karena ketersediaan makanan melimpah.',
    ],
    correctAnswers: [0, 2], // A dan C
    isHots: false,
    explanation: `Rantai Peristiwa Eutrofikasi di Perairan Step-by-Step:

1. Apa itu Eutrofikasi?
   Eutrofikasi adalah peristiwa penimbunan nutrisi berlebih (terutama senyawa fosfat dan nitrat dari pupuk pertanian dan detergen) ke badan air danau/waduk.

2. Tahapan Dampak Eutrofikasi:
   - Tahap 1: Nutrisi melimpah menyebabkan tanaman gulma air seperti eceng gondok dan alga tumbuh meledak tak terkendali (*blooming algae*) menutupi seluruh permukaan danau (Pernyataan A BENAR).
   - Tahap 2: Lapisan tebal eceng gondok dan alga di permukaan menghalangi sinar matahari masuk menembus ke kedalaman air. Akibatnya, tanaman air di dasar danau tidak bisa berfotosintesis dan mati massal (Pernyataan C BENAR).
   - Tahap 3: Jutaan tanaman dan alga yang mati dibusukkan oleh bakteri pengurai aerob. Bakteri ini menyedot habis oksigen di dalam air, sehingga kadar oksigen terlarut (Dissolved Oxygen / DO) ANJLOK DRASTIS mendekati nol.
   - Tahap 4: Ikan-ikan dan biota air mati lemas massal karena kekurangan oksigen (bukan meningkat!).

Dua jawaban yang benar adalah Opsi A dan C.`,
  },

  // --- Soal 6: Bumi dan Tata Surya (Revolusi Bumi) ---
  {
    id: 306,
    question: `Bumi melakukan dua gerakan sekaligus, yaitu rotasi dan revolusi. Manakah dua fenomena alam berikut yang disebabkan oleh gerakan revolusi Bumi mengelilingi Matahari? (Pilihlah dua jawaban yang benar)`,
    questionType: 'complex',
    options: [
      'Terjadinya perbedaan waktu di berbagai belahan bumi.',
      'Terjadinya pergantian musim di belahan bumi utara dan selatan.',
      'Perubahan semu tahunan matahari di mana matahari seolah bergeser ke utara dan selatan.',
      'Pembelokan arah angin global (efek Coriolis).',
    ],
    correctAnswers: [1, 2], // B dan C
    isHots: false,
    explanation: `Membedakan Akibat Rotasi vs Revolusi Bumi:

1. Akibat ROTASI Bumi (Bumi berputar pada porosnya, siklus 24 jam):
   - Terjadinya siang dan malam.
   - Gerak semu HARIAN matahari (terbit di timur, tenggelam di barat).
   - Perbedaan waktu di belahan bumi (misal WIB, WITA, WIT) ➜ Pilihan A adalah akibat rotasi.
   - Pembelokan arah angin dan arus laut (efek Coriolis) ➜ Pilihan D adalah akibat rotasi.

2. Akibat REVOLUSI Bumi (Bumi mengelilingi Matahari dengan sumbu miring 23,5°, siklus 1 tahun):
   - Terjadinya pergantian 4 musim di belahan bumi utara dan selatan (musim semi, panas, gugur, dingin) ➜ Pernyataan B BENAR.
   - Gerak semu TAHUNAN matahari, di mana matahari seolah-olah bergeser antara 23,5° LU dan 23,5° LS ➜ Pernyataan C BENAR.
   - Perubahan lamanya waktu siang dan malam di wilayah subtropis sepanjang tahun.
   - Terlihatnya rasi bintang yang berbeda setiap bulan.

Dua jawaban yang benar adalah Opsi B dan C.`,
  },

  // --- Soal 7: Struktur Sel Tumbuhan vs Hewan ---
  {
    id: 307,
    question: `Sel tumbuhan dan sel hewan memiliki beberapa perbedaan struktur organel yang mendukung fungsinya masing-masing. Manakah dua pernyataan yang benar mengenai perbedaan organel sel tersebut? (Pilihlah dua jawaban yang benar)`,
    questionType: 'complex',
    options: [
      'Sel tumbuhan memiliki dinding sel dan kloroplas yang tidak dimiliki oleh sel hewan.',
      'Sel hewan memiliki vakuola berukuran sangat besar yang mendominasi volume sel.',
      'Sel hewan memiliki lisosom dan sentrosom yang umumnya tidak ditemukan pada sel tumbuhan.',
      'Sel tumbuhan mengandalkan mitokondria sebagai satu-satunya tempat menghasilkan energi.',
    ],
    correctAnswers: [0, 2], // A dan C
    isHots: false,
    explanation: `Tabel Perbedaan Sel Tumbuhan dan Sel Hewan Step-by-Step:

1. Organel Khas Sel Tumbuhan:
   - Dinding Sel: Terbuat dari selulosa, membuat batang tumbuhan kaku dan kokoh. Sel hewan tidak punya dinding sel sehingga bentuk sel hewan lentur.
   - Kloroplas (Plastida): Berisi klorofil untuk fotosintesis. Sel hewan tidak punya kloroplas (Pernyataan A BENAR).
   - Vakuola: Berukuran sangat besar dan tunggal (vakuola sentral) yang mendominasi volume sel tumbuhan. Sebaliknya, sel hewan vakuolanya sangat kecil atau bahkan tidak ada (Pernyataan B SALAH).

2. Organel Khas Sel Hewan:
   - Sentrosom / Sentriol: Berperan memandu benang spindel saat pembelahan sel hewan.
   - Lisosom: Berisi enzim hidrolitik untuk mencerna zat sisa atau benda asing di dalam sel hewan (Pernyataan C BENAR).

3. Catatan Mitokondria:
   Sel tumbuhan memiliki mitokondria DAN kloroplas untuk urusan energi, jadi mitokondria bukan "satu-satunya" (Pernyataan D SALAH).

Dua jawaban yang benar adalah Opsi A dan C.`,
  },

  // --- Soal 8: Tekanan Zat (Tekanan Hidrostatis) ---
  {
    id: 308,
    question: `Seorang penyelam menyelam di laut pada kedalaman 15 meter di bawah permukaan air. Manakah dua faktor yang memengaruhi besarnya tekanan hidrostatis yang dialami oleh penyelam tersebut? (Pilihlah dua jawaban yang benar)`,
    questionType: 'complex',
    options: [
      'Luas permukaan tubuh penyelam yang bersentuhan dengan air.',
      'Massa jenis zat cair (air laut) di tempat penyelaman.',
      'Percepatan gravitasi bumi di lokasi tersebut.',
      'Gaya apung yang mendorong tubuh penyelam ke atas.',
    ],
    correctAnswers: [1, 2], // B dan C
    isHots: false,
    explanation: `Konsep & Rumus Tekanan Hidrostatis Step-by-Step:

1. Rumus Tekanan Hidrostatis:
   Ph = ρ × g × h
   - Ph = Tekanan hidrostatis (Pascal atau N/m²)
   - ρ (rho) = Massa jenis zat cair (kg/m³) ➜ Pernyataan B BENAR
   - g = Percepatan gravitasi bumi (m/s²) ➜ Pernyataan C BENAR
   - h = Kedalaman titik ukur dari permukaan zat cair (meter)

2. Mengapa Luas Permukaan Tubuh Tidak Memengaruhi?
   Tekanan hidrostatis adalah besaran intensif (gaya tekan per satu meter persegi). Baik penyelam bertubuh gemuk, kurus, ikan paus, maupun jarum pentul, jika berada di kedalaman (h) 15 meter yang sama di laut yang sama, tekanan hidrostatis yang dialaminya SAMA BESAR (Pernyataan A SALAH).

3. Gaya Apung:
   Gaya apung berkaitan dengan Hukum Archimedes (volume air yang dipindahkan), bukan faktor pembentuk nilai tekanan hidrostatis zat cair (Pernyataan D SALAH).

Dua jawaban yang benar adalah Opsi B dan C.`,
  },

  // --- Soal 9: Sistem Pencernaan (Zat Kimia di Lambung) ---
  {
    id: 309,
    question: `Lambung merupakan organ pencernaan yang melakukan pencernaan secara mekanis dan kimiawi. Manakah dua zat kimia/enzim berikut yang diproduksi di lambung beserta fungsi yang benar? (Pilihlah dua jawaban yang benar)`,
    questionType: 'complex',
    options: [
      'Asam Klorida (HCl) berfungsi untuk membunuh kuman yang masuk bersama makanan.',
      'Enzim Pepsin berfungsi mengubah protein menjadi pepton.',
      'Enzim Amilase berfungsi mengubah amilum menjadi glukosa.',
      'Enzim Lipase berfungsi mengemulsi lemak menjadi asam lemak.',
    ],
    correctAnswers: [0, 1], // A dan B
    isHots: false,
    explanation: `Getah Lambung dan Fungsinya Step-by-Step:

1. Tiga Komponen Utama Getah Lambung (H-P-R):
   - Asam Klorida (HCl): Bersifat sangat asam (pH 1-2). Berfungsi membunuh bakteri/kuman patogen pada makanan serta mengaktifkan pepsinogen menjadi enzim pepsin aktif (Pernyataan A BENAR).
   - Enzim Pepsin: Berfungsi memotong ikatan protein rantai panjang menjadi untaian pepton yang lebih pendek (Pernyataan B BENAR).
   - Enzim Renin: Berfungsi mengendapkan kasein (protein susu).

2. Di Mana Enzim Lainnya Bekerja?
   - Amilase: Diproduksi di kelenjar ludah rongga mulut (ptialin) dan getah pankreas (bekerja di usus halus), bukan di lambung (Pernyataan C SALAH).
   - Lipase: Diproduksi oleh pankreas untuk memecah lemak di usus halus. Zat yang mengemulsi lemak adalah cairan empedu dari hati (Pernyataan D SALAH).

Dua jawaban yang benar adalah Opsi A dan B.`,
  },

  // --- Soal 10: Pesawat Sederhana (Bidang Miring) ---
  {
    id: 310,
    question: `Seorang pekerja menggunakan bidang miring sepanjang 4 meter untuk menaikkan sebuah peti seberat 800 N ke atas truk yang tingginya 1 meter. Manakah dua pernyataan yang benar mengenai aktivitas tersebut? (Pilihlah dua jawaban yang benar)`,
    questionType: 'complex',
    options: [
      'Keuntungan mekanis penggunaan bidang miring tersebut adalah 4.',
      'Gaya dorong minimal yang diperlukan untuk menaikkan peti adalah 200 N.',
      'Usaha yang dilakukan pekerja menjadi lebih kecil dibanding mengangkat langsung secara vertikal.',
      'Keuntungan mekanis bidang miring akan bertambah jika panjang papan diperpendek.',
    ],
    correctAnswers: [0, 1], // A dan B
    isHots: false,
    explanation: `Perhitungan Bidang Miring Step-by-Step:

1. Data Soal:
   - Panjang bidang miring (s) = 4 m
   - Ketinggian truk (h) = 1 m
   - Berat beban (W) = 800 N

2. Keuntungan Mekanis (KM):
   KM = s / h = 4 m / 1 m = 4 (Pernyataan A BENAR).

3. Gaya Dorong Minimal (F):
   KM = W / F
   F = W / KM = 800 N / 4 = 200 N (Pernyataan B BENAR).

4. Miskonsepsi Penting Soal "Usaha":
   - Pesawat sederhana HANYA meringankan gaya (dari 800 N menjadi 200 N), tetapi TIDAK MENGURANGI TOTAL USAHA (W)!
   - Usaha angkat vertikal: W = 800 N × 1 m = 800 Joule.
   - Usaha lewat bidang miring: W = 200 N × 4 m = 800 Joule.
   - Nilai usahanya TETAP SAMA (Pernyataan C SALAH).
   - Jika papan diperpendek (s mengecil), KM justru berkurang dan dorongan makin berat (Pernyataan D SALAH).

Dua jawaban yang benar adalah Opsi A dan B.`,
  },

  // --- Soal 11: Getaran dan Gelombang (Cepat Rambat & Periode) ---
  {
    id: 311,
    question: `Sebuah gelombang transversal merambat pada seutas tali dengan frekuensi 5 Hz dan panjang gelombang 2 meter. Manakah dua pernyataan yang benar mengenai gelombang tersebut? (Pilihlah dua jawaban yang benar)`,
    questionType: 'complex',
    options: [
      'Periode gelombang tersebut adalah 0,2 sekon.',
      'Cepat rambat gelombang pada tali tersebut adalah 10 m/s.',
      'Gelombang tersebut memerlukan waktu 5 sekon untuk menempuh jarak 1 meter.',
      'Jika frekuensi gelombang diperbesar, maka panjang gelombangnya juga akan bertambah besar.',
    ],
    correctAnswers: [0, 1], // A dan B
    isHots: false,
    explanation: `Perhitungan Gelombang Tali Step-by-Step:

1. Data Soal:
   - Frekuensi (f) = 5 Hz
   - Panjang gelombang (λ) = 2 meter

2. Hitung Periode (T):
   T = 1 / f = 1 / 5 = 0,2 sekon (Pernyataan A BENAR).

3. Hitung Cepat Rambat Gelombang (v):
   v = λ × f = 2 m × 5 Hz = 10 m/s (Pernyataan B BENAR).

4. Mengapa Pilihan Lain Salah?
   - Opsi C Salah: Untuk menempuh jarak 1 meter dengan kecepatan 10 m/s, waktu yang diperlukan adalah t = s / v = 1 / 10 = 0,1 sekon (bukan 5 sekon).
   - Opsi D Salah: Pada medium yang sama, kecepatan gelombang konstan ($v = \lambda \cdot f$). Jika frekuensi diperbesar, panjang gelombang ($\lambda$) justru MEMENDEK/MENGEJIL (berbanding terbalik).

Dua jawaban yang benar adalah Opsi A dan B.`,
  },

  // --- Soal 12: Unsur, Senyawa, dan Campuran ---
  {
    id: 312,
    question: `Di dapur terdapat berbagai macam zat seperti garam dapur (NaCl), air (H₂O), udara, dan sirop. Manakah dua pengelompokan zat berikut yang benar? (Pilihlah dua jawaban yang benar)`,
    questionType: 'complex',
    options: [
      'Garam dapur dan air dikelompokkan sebagai senyawa karena terdiri dari dua unsur atau lebih yang bergabung secara kimia.',
      'Udara dan sirop dikelompokkan sebagai campuran karena komponen penyusunnya masih mempertahankan sifat aslinya.',
      'Garam dapur dikelompokkan sebagai unsur karena tidak dapat dibagi lagi secara reaksi kimia biasa.',
      'Udara dikelompokkan sebagai senyawa homogen karena partikelnya tidak dapat dibedakan lagi.',
    ],
    correctAnswers: [0, 1], // A dan B
    isHots: false,
    explanation: `Membedakan Unsur, Senyawa, dan Campuran Step-by-Step:

1. Senyawa Kimia (Garam & Air):
   - Garam dapur (NaCl) tersusun dari unsur Natrium (Na) dan Klorin (Cl) yang terikat secara kimiawi dengan perbandingan tetap.
   - Air (H₂O) tersusun dari unsur Hidrogen (H) dan Oksigen (O).
   - Keduanya adalah SENYAWA (Pernyataan A BENAR).

2. Campuran (Udara & Sirop):
   - Udara adalah campuran homogen berbagai macam gas (Nitrogen 78%, Oksigen 21%, Argon, CO₂) yang tidak saling bereaksi kimia. Masing-masing gas tetap mempertahankan sifat aslinya.
   - Sirop adalah campuran homogen antara air, gula, dan perisa/pewarna.
   - Keduanya adalah CAMPURAN (Pernyataan B BENAR).

3. Letak Kesalahan Opsi Lain:
   - Garam dapur bukan unsur murni, melainkan senyawa (Opsi C Salah).
   - Udara adalah campuran, bukan senyawa (Opsi D Salah).

Dua jawaban yang benar adalah Opsi A dan B.`,
  },

  // --- Soal 13: Karakteristik Lapisan Bumi ---
  {
    id: 313,
    question: `Bumi terdiri dari beberapa lapisan dengan karakteristik yang berbeda-beda. Manakah dua pernyataan yang benar mengenai karakteristik lapisan bumi? (Pilihlah dua jawaban yang benar)`,
    questionType: 'complex',
    options: [
      'Kerak bumi merupakan lapisan terluar yang paling tipis dan bersifat padat serta keras.',
      'Inti luar bumi tersusun atas besi dan nikel cair yang menyebabkan bumi memiliki medan magnet.',
      'Mantel bumi merupakan lapisan terdalam yang memiliki suhu paling tinggi mendekati suhu matahari.',
      'Inti dalam bumi bersifat cair karena suhunya yang sangat panas melebihi titik lebur besi.',
    ],
    correctAnswers: [0, 1], // A dan B
    isHots: false,
    explanation: `Struktur Lapisan Bumi Step-by-Step:

1. Kerak Bumi (Crust):
   Lapisan batuan padat terluar tempat kita berpijak. Ketebalannya hanya 5-70 km (paling tipis dibanding lapisan bumi lainnya) ➜ Pernyataan A BENAR.

2. Inti Luar Bumi (Outer Core):
   Tersusun atas logam besi dan nikel yang berpijar cair bersuhu 4.000°C - 5.000°C. Pergolakan cairan logam konduktif ini menciptakan efek dinamo yang membangkitkan MEDAN MAGNET BUMI ➜ Pernyataan B BENAR.

3. Inti Dalam Bumi (Inner Core):
   Pusat terdalam bumi bersuhu ekstrim (~5.400°C), tetapi BERUJUD BOLA PADAT (bukan cair) karena tekanan gravitasi bumi yang luar biasa padat menekan atom-atom besi sehingga tidak bisa mencair (Pernyataan D Salah).

4. Mantel Bumi:
   Berada di antara kerak dan inti (bukan lapisan terdalam) ➜ Pernyataan C Salah.

Dua jawaban yang benar adalah Opsi A dan B.`,
  },

  // --- Soal 14: Organ Sistem Reproduksi Wanita ---
  {
    id: 314,
    question: `Sistem reproduksi wanita terdiri dari organ dalam dan organ luar yang bekerja secara sinergis. Manakah dua organ reproduksi wanita berikut yang dipasangkan dengan fungsinya secara benar? (Pilihlah dua jawaban yang benar)`,
    questionType: 'complex',
    options: [
      'Ovarium berfungsi sebagai tempat pembentukan sel telur (ovum) dan hormon estrogen.',
      'Tuba fallopi (oviduk) berfungsi sebagai tempat perkembangan dan pertumbuhan janin.',
      'Uterus (rahim) berfungsi sebagai tempat terjadinya fertilisasi (pembuahan).',
      'Vagina berfungsi sebagai saluran keluarnya bayi saat kelahiran normal dan saluran darah menstruasi.',
    ],
    correctAnswers: [0, 3], // A dan D
    isHots: false,
    explanation: `Pasangan Organ Reproduksi Wanita dan Fungsinya:

1. Ovarium (Indung Telur):
   Organ berbentuk bulat telur di kiri dan kanan rahim yang memproduksi sel telur (oogenesis) serta memproduksi hormon kewanitaan (estrogen dan progesteron) ➜ Pernyataan A BENAR.

2. Tuba Fallopi (Saluran Telur / Oviduk):
   Saluran tempat bertemunya sel sperma dan sel telur, yaitu tempat terjadinya FERTILISASI (pembuahan), bukan tempat tumbuh janin (Pernyataan B SALAH).

3. Uterus (Rahim):
   Organ berotot tebal tempat menempelnya (implantasi) embrio serta tempat PERKEMBANGAN DAN PERTUMBUHAN JANIN selama masa kehamilan, bukan tempat fertilisasi (Pernyataan C SALAH).

4. Vagina:
   Saluran elastis penghubung leher rahim ke luar tubuh yang berfungsi sebagai saluran persalinan alami (keluarnya bayi) dan jalur aliran darah menstruasi ➜ Pernyataan D BENAR.

Dua jawaban yang benar adalah Opsi A dan D.`,
  },

  // --- Soal 15: Hukum Pewarisan Sifat Mendel (Monohibrid F2) ---
  {
    id: 315,
    question: `Persilangan antara tanaman kacang ercis berbiji bulat (BB) dengan tanaman kacang ercis berbiji keriput (bb) menghasilkan keturunan F1 yang semuanya berbiji bulat (Bb). Jika F1 disilangkan sesamanya, manakah dua pernyataan yang benar mengenai keturunan F2? (Pilihlah dua jawaban yang benar)`,
    questionType: 'complex',
    options: [
      'Rasio fenotip F2 antara biji bulat dan biji keriput adalah 3 : 1.',
      'Persentase tanaman F2 yang bergenotip homozigot dominan (BB) adalah 50%.',
      'Rasio genotip F2 yang terbentuk adalah BB : Bb : bb = 1 : 2 : 1.',
      'Semua tanaman F2 yang berbiji bulat memiliki genotip yang sama yaitu Bb.',
    ],
    correctAnswers: [0, 2], // A dan C
    isHots: false,
    explanation: `Persilangan Monohibrid F1 × F1 (Bb × Bb) Step-by-Step:

1. Diagram Punnett Keturunan Kedua (F2):
   - Gamet jantan: B dan b
   - Gamet betina: B dan b
   - Hasil Kotak:
     * 1 kotak BB (Bulat)
     * 2 kotak Bb (Bulat)
     * 1 kotak bb (Keriput)

2. Analisis Rasio Genotip F2:
   - BB : Bb : bb = 1 : 2 : 1 (Pernyataan C BENAR).
   - Persentase BB (homozigot dominan) = 1/4 × 100% = 25% (bukan 50%, jadi Pernyataan B SALAH).

3. Analisis Rasio Fenotip F2:
   - Biji Bulat: BB (1) + Bb (2) = 3 bagian
   - Biji Keriput: bb (1) = 1 bagian
   - Rasio Fenotip = 3 Bulat : 1 Keriput (Pernyataan A BENAR).
   - Tanaman berbiji bulat memiliki dua jenis genotip berbeda: BB dan Bb, jadi tidak seragam hanya Bb (Pernyataan D SALAH).

Dua jawaban yang benar adalah Opsi A dan C.`,
  },

  // --- Soal 16: Mikroorganisme Bioteknologi Konvensional ---
  {
    id: 316,
    question: `Bioteknologi konvensional memanfaatkan mikroorganisme secara langsung melalui proses fermentasi. Manakah dua produk bioteknologi berikut yang dipasangkan dengan mikroorganisme yang tepat? (Pilihlah dua jawaban yang benar)`,
    questionType: 'complex',
    options: [
      'Tempe memanfaatkan aktivitas jamur Rhizopus oryzae.',
      'Yoghurt memanfaatkan aktivitas bakteri Saccharomyces cerevisiae.',
      'Keju memanfaatkan aktivitas bakteri Lactobacillus bulgaricus.',
      'Kecap memanfaatkan aktivitas bakteri Acetobacter aceti.',
    ],
    correctAnswers: [0, 2], // A dan C
    isHots: false,
    explanation: `Daftar Pasangan Produk Fermentasi & Mikroorganismenya:

1. Tempe:
   Difermentasi menggunakan jamur kapang Rhizopus oryzae dan Rhizopus oligosporus yang membentuk jaring miselium putih mengikat kedelai ➜ Pernyataan A BENAR.

2. Keju:
   Dibuat dari fermentasi susu oleh bakteri asam laktat seperti Lactobacillus bulgaricus dan Streptococcus thermophilus untuk mengentalkan kasein susu ➜ Pernyataan C BENAR.

3. Mengapa Pilihan Lain Salah?
   - Yoghurt: Menggunakan bakteri asam laktat Lactobacillus bulgaricus dan Streptococcus thermophilus. Saccharomyces cerevisiae adalah ragi/khamir untuk membuat tape dan roti mengembang.
   - Kecap: Memanfaatkan kapang jamur Aspergillus wentii atau Aspergillus oryzae. Acetobacter aceti adalah bakteri untuk membuat asam cuka.

Dua jawaban yang benar adalah Opsi A dan C.`,
  },

  // --- Soal 17: Listrik Statis (Penggaris & Serpihan Kertas) ---
  {
    id: 317,
    question: `Sebuah penggaris plastik digosokkan pada kain wol kering selama beberapa saat, kemudian didekatkan pada serpihan kertas kecil. Manakah dua penjelasan yang benar mengenai fenomena listrik statis tersebut? (Pilihlah dua jawaban yang benar)`,
    questionType: 'complex',
    options: [
      'Penggaris plastik menjadi bermuatan negatif karena elektron berpindah dari kain wol ke penggaris.',
      'Kain wol menjadi bermuatan negatif karena menerima proton dari penggaris plastik.',
      'Serpihan kertas dapat tertarik karena terjadi induksi muatan listrik pada kertas.',
      'Penggaris plastik bermuatan positif sehingga menarik elektron yang ada pada kertas.',
    ],
    correctAnswers: [0, 2], // A dan C
    isHots: false,
    explanation: `Perpindahan Muatan pada Penggaris Plastik Step-by-Step:

1. Mengapa Penggaris Plastik Bermuatan Negatif?
   - Berdasarkan deret tribolistrik, kain wol mudah melepaskan elektronnya, sedangkan penggaris plastik cenderung menarik dan menerima elektron.
   - Saat digosokkan, elektron berpindah dari kain wol menuju penggaris plastik.
   - Akibatnya, penggaris plastik kelebihan elektron sehingga menjadi BERMUATAN LISTRIK NEGATIF (Pernyataan A BENAR).
   - Proton tidak pernah bisa berpindah karena terikat kuat di inti atom (Pernyataan B & D SALAH).

2. Mengapa Serpihan Kertas Netral Bisa Tertarik?
   - Terjadi fenomena INDUKSI LISTRIK: Saat penggaris bermuatan negatif didekatkan ke kertas, elektron pada kertas tertolak menjauh ke sisi bawah kertas.
   - Sisi atas kertas yang dekat penggaris menjadi bermuatan positif sehingga tertarik kuat ke arah penggaris plastik (Pernyataan C BENAR).

Dua jawaban yang benar adalah Opsi A dan C.`,
  },

  // --- Soal 18: Listrik Dinamis (Hukum Ohm) ---
  {
    id: 318,
    question: `Sebuah rangkaian listrik tertutup terdiri dari hambatan R = 6 Ω yang dihubungkan dengan sumber tegangan V = 12 Volt. Jika hambatan dalam baterai diabaikan, manakah dua pernyataan yang benar berdasarkan Hukum Ohm? (Pilihlah dua jawaban yang benar)`,
    questionType: 'complex',
    options: [
      'Kuat arus listrik yang mengalir pada rangkaian tersebut adalah 2 Ampere.',
      'Jika nilai hambatan dinaikkan menjadi 12 Ω, kuat arus listrik akan menjadi 4 Ampere.',
      'Kuat arus listrik berbanding lurus dengan tegangan dan berbanding terbalik dengan hambatan.',
      'Energi listrik yang dihasilkan akan semakin kecil jika kuat arus yang mengalir semakin besar.',
    ],
    correctAnswers: [0, 2], // A dan C
    isHots: false,
    explanation: `Perhitungan dan Konsep Hukum Ohm Step-by-Step:

1. Hitung Kuat Arus Awal (I):
   Rumus Hukum Ohm:
   I = V / R
   I = 12 Volt / 6 Ω = 2 Ampere (Pernyataan A BENAR).

2. Karakteristik Hukum Ohm:
   - Kuat arus (I) berbanding lurus dengan beda potensial/tegangan (V).
   - Kuat arus (I) berbanding terbalik dengan hambatan (R) (Pernyataan C BENAR).

3. Mengapa Pilihan B dan D Salah?
   - Opsi B Salah: Jika hambatan dinaikkan menjadi 12 Ω, arusnya mengecil: I = 12 / 12 = 1 Ampere (bukan 4 A).
   - Opsi D Salah: Energi listrik W = V · I · t, artinya energi berbanding lurus dengan arus (semakin besar arus, energi listrik semakin besar).

Dua jawaban yang benar adalah Opsi A dan C.`,
  },

  // --- Soal 19: Kemagnetan (Pembuatan Elektromagnetik) ---
  {
    id: 319,
    question: `Sebuah paku besi dililiti kawat berisolasi kemudian kedua ujung kawat dihubungkan dengan kutub-kutub baterai. Manakah dua pernyataan yang benar mengenai pembuatan magnet tersebut? (Pilihlah dua jawaban yang benar)`,
    questionType: 'complex',
    options: [
      'Metode pembuatan magnet tersebut dinamakan metode elektromagnetik.',
      'Sifat kemagnetan paku besi tersebut bersifat permanen meskipun arus listrik diputus.',
      'Kutub magnet yang terbentuk pada ujung paku bergantung pada arah lilitan kawat dan arah arus listrik.',
      'Paku besi tersebut tidak dapat menarik benda logam lain karena dilapisi kawat isolasi.',
    ],
    correctAnswers: [0, 2], // A dan C
    isHots: false,
    explanation: `Prinsip Elektromagnetik Step-by-Step:

1. Apa itu Elektromagnetik?
   Metode membuat magnet sementara dengan cara mengalirkan arus listrik searah (DC) melalui kumparan kawat yang melilit inti besi lunak/paku dinamakan METODE ELEKTROMAGNETIK (Pernyataan A BENAR).

2. Menentukan Kutub Magnet (Kaidah Tangan Kanan):
   Kutub utara dan selatan magnet pada ujung paku ditentukan oleh arah aliran arus listrik dan arah lilitan kawat menggunakan kaidah genggaman tangan kanan: empat jari mengikuti arah arus listrik, dan ibu jari menunjuk ke arah KUTUB UTARA (Pernyataan C BENAR).

3. Mengapa Pilihan B dan D Salah?
   - Sifat kemagnetan paku besi lunak bersifat SEMENTARA (hanya jadi magnet saat ada arus listrik; jika sakelar diputus, sifat magnetnya langsung hilang) ➜ Pernyataan B SALAH.
   - Ujung paku tetap memancarkan medan magnet kuat sehingga mampu menarik klip kertas logam dengan mudah (Pernyataan D SALAH).

Dua jawaban yang benar adalah Opsi A dan C.`,
  },

  // --- Soal 20: Metode Pemisahan Campuran ---
  {
    id: 320,
    question: `Metode pemisahan campuran digunakan untuk mendapatkan zat murni dari suatu campuran. Manakah dua pernyataan yang benar mengenai metode pemisahan campuran berikut? (Pilihlah dua jawaban yang benar)`,
    questionType: 'complex',
    options: [
      'Filtrasi digunakan untuk memisahkan campuran berdasarkan perbedaan ukuran partikel zat penyusunnya.',
      'Distilasi (penyulingan) digunakan untuk memisahkan campuran berdasarkan perbedaan titik didih zat.',
      'Kromatografi digunakan untuk memisahkan zat warna berdasarkan perbedaan kelarutan dalam pelarut dan perbedaan massa jenis.',
      'Evaporasi (penguapan) hanya dapat digunakan untuk memisahkan campuran heterogen cair-cair.',
    ],
    correctAnswers: [0, 1], // A dan B
    isHots: false,
    explanation: `Metode Dasar Pemisahan Campuran Step-by-Step:

1. Filtrasi (Penyaringan):
   Didasarkan pada PERBEDAAN UKURAN PARTIKEL antara zat padat yang tidak larut dengan cairan (misal memisahkan pasir dari air kotor). Partikel kecil lolos sebagai filtrat, partikel besar tertinggal sebagai residu (Pernyataan A BENAR).

2. Distilasi (Penyulingan):
   Didasarkan pada PERBEDAAN TITIK DIDIH antara dua atau lebih zat cair (misal memisahkan alkohol dari air, atau memurnikan minyak bumi) (Pernyataan B BENAR).

3. Mengapa Pilihan C dan D Salah?
   - Kromatografi: Didasarkan pada perbedaan kecepatan merambat antara partikel zat terlarut pada fase diam (kertas) terbawa oleh fase gerak (pelarut), bukan perbedaan massa jenis (Pernyataan C SALAH).
   - Evaporasi: Digunakan untuk memisahkan campuran HOMOGEN antara padatan terlarut dengan cairan (misal menguapkan air laut untuk mendapatkan garam kristal), bukan campuran heterogen cair-cair (Pernyataan D SALAH).

Dua jawaban yang benar adalah Opsi A dan B.`,
  },

  // --- Soal 21: Interaksi Makhluk Hidup (Simbiosis & Predasi) ---
  {
    id: 321,
    question: `Dalam sebuah ekosistem kebun, terdapat interaksi antara tanaman jeruk dengan kutu daun, serta burung pipit dengan ulat pohon. Manakah dua pernyataan yang benar mengenai bentuk interaksi tersebut? (Pilihlah dua jawaban yang benar)`,
    questionType: 'complex',
    options: [
      'Hubungan antara tanaman jeruk dengan kutu daun adalah simbiosis parasitisme karena kutu daun merugikan tanaman jeruk.',
      'Hubungan antara burung pipit dengan ulat pohon adalah simbiosis komensalisme karena burung untung dan ulat tidak rugi.',
      'Hubungan antara tanaman jeruk dengan kutu daun adalah simbiosis mutualisme karena keduanya saling menguntungkan.',
      'Hubungan antara burung pipit dengan ulat pohon merupakan bentuk interaksi predasi.',
    ],
    correctAnswers: [0, 3], // A dan D
    isHots: false,
    explanation: `Analisis Interaksi Antar Makhluk Hidup Step-by-Step:

1. Interaksi Tanaman Jeruk dan Kutu Daun:
   - Kutu daun menghisap getah manis tanaman jeruk untuk makanannya (kutu daun diuntungkan).
   - Tanaman jeruk kehilangan nutrisi penting, daunnya menguning, layu, dan kerdil (tanaman jeruk sangat dirugikan).
   - Hubungan satu pihak untung dan pihak lain rugi adalah SIMBIOSIS PARASITISME (Pernyataan A BENAR, C SALAH).

2. Interaksi Burung Pipit dan Ulat Pohon:
   - Burung pipit memburu, menangkap, membunuh, dan memakan ulat pohon.
   - Hubungan memangsa dan dimangsa ini disebut INTERAKSI PREDASI, di mana burung pipit bertindak sebagai predator dan ulat bertindak sebagai mangsa (Pernyataan D BENAR).
   - Ini bukan komensalisme karena ulat jelas mati dimakan (Pernyataan B SALAH).

Dua jawaban yang benar adalah Opsi A dan D.`,
  },

  // --- Soal 22: Gangguan Sistem Pencernaan Manusia ---
  {
    id: 322,
    question: `Gaya hidup dan pola makan yang tidak sehat dapat memicu gangguan pada sistem pencernaan manusia. Manakah dua pernyataan yang benar mengenai gangguan pencernaan berikut? (Pilihlah dua jawaban yang benar)`,
    questionType: 'complex',
    options: [
      'Konstipasi (sembelit) terjadi karena penyerapan air yang berlebihan pada sisa makanan di usus besar.',
      'Maag (gastritis) disebabkan oleh infeksi bakteri pada usus halus yang menghambat penyerapan sari makanan.',
      'Diare terjadi karena usus besar kurang menyerap air sehingga feses yang dikeluarkan menjadi encer.',
      'Apenditis adalah gangguan akibat peradangan pada kantung empedu karena pengendapan kolesterol.',
    ],
    correctAnswers: [0, 2], // A dan C
    isHots: false,
    explanation: `Memahami Penyakit Saluran Cerna Step-by-Step:

1. Konstipasi (Sembelit):
   Terjadi saat sisa makanan bergerak terlalu lambat di usus besar sehingga air diserap SECARA BERLEBIHAN. Akibatnya feses menjadi sangat keras, kering, dan sulit buang air besar (Pernyataan A BENAR).

2. Diare:
   Terjadi karena iritasi dinding usus akibat racun kuman/bakteri, menyebabkan gerakan peristaltik meningkat tajam dan usus besar KURANG MENYERAP AIR. Akibatnya feses keluar dalam keadaan cair/encer (Pernyataan C BENAR).

3. Letak Kesalahan Pilihan Lain:
   - Maag (gastritis): Adalah peradangan pada lapisan mukosa DINDING LAMBUNG akibat kelebihan asam lambung (HCl), bukan pada usus halus (Pernyataan B SALAH).
   - Apendisitis: Adalah peradangan pada usus buntu (umbai cacing / apendiks), bukan pada kantung empedu (Pernyataan D SALAH).

Dua jawaban yang benar adalah Opsi A dan C.`,
  },

  // --- Soal 23: Getaran Bandul Sederhana ---
  {
    id: 323,
    question: `Sebuah bandul sederhana berayun bolak-balik melalui titik A-B-C-B-A sebanyak 20 kali dalam waktu 10 sekon. Manakah dua pernyataan yang benar mengenai getaran bandul tersebut? (Pilihlah dua jawaban yang benar)`,
    questionType: 'complex',
    options: [
      'Frekuensi getaran bandul tersebut adalah 2 Hz.',
      'Periode getaran bandul tersebut adalah 0,5 sekon.',
      'Satu getaran penuh didefinisikan sebagai gerakan bandul dari titik A ke titik B lalu ke titik C.',
      'Periode getaran berbanding lurus dengan jumlah getaran yang terjadi.',
    ],
    correctAnswers: [0, 1], // A dan B
    isHots: false,
    explanation: `Perhitungan Getaran Bandul Step-by-Step:

1. Data yang Diketahui:
   - Jumlah getaran (n) = 20 getaran
   - Waktu tempuh (t) = 10 sekon

2. Menghitung Frekuensi (f):
   Frekuensi adalah banyaknya getaran yang terjadi dalam 1 sekon:
   f = n / t = 20 / 10 = 2 Hz (Pernyataan A BENAR).

3. Menghitung Periode (T):
   Periode adalah waktu yang dibutuhkan untuk melakukan 1 kali getaran penuh:
   T = t / n = 10 / 20 = 0,5 sekon (Pernyataan B BENAR).

4. Mengapa Pilihan C dan D Salah?
   - Satu getaran penuh adalah gerak bolak-balik sampai kembali ke titik mula: A ➜ B ➜ C ➜ B ➜ A. Gerakan A ➜ B ➜ C hanyalah 1/2 getaran (Opsi C SALAH).
   - Periode berbanding terbalik dengan frekuensi (T = 1/f) dan berbanding terbalik dengan n untuk waktu tertentu (Opsi D SALAH).

Dua jawaban yang benar adalah Opsi A dan B.`,
  },

  // --- Soal 24: Listrik Statis (Induksi pada Elektroskop) ---
  {
    id: 324,
    question: `Sebuah elektroskop netral didekatkan dengan benda bermuatan negatif pada bagian kepalanya tanpa menyentuhnya. Manakah dua fenomena yang akan terjadi pada elektroskop tersebut? (Pilihlah dua jawaban yang benar)`,
    questionType: 'complex',
    options: [
      'Kepala elektroskop akan bermuatan positif karena elektron berpindah menuju daun elektroskop.',
      'Daun-daun elektroskop akan menguncup karena kedua daun bermuatan netral.',
      'Daun-daun elektroskop akan mekar karena kedua daun bermuatan negatif dan saling menolak.',
      'Proton mengalir dari daun elektroskop menuju kepala elektroskop sehingga daun bermuatan negatif.',
    ],
    correctAnswers: [0, 2], // A dan C
    isHots: false,
    explanation: `Prinsip Kerja Elektroskop Step-by-Step:

1. Kondisi Mula-Mula:
   Elektroskop bersifat netral, daun-daun emas di bagian bawah dalam keadaan menguncup tertutup rapat.

2. Saat Benda Bermuatan Negatif Didekatkan ke Kepala Elektroskop (Tanpa Menyentuh):
   - Muatan negatif pada benda akan TOLAK-MENOLAK dengan elektron-elektron yang ada di kepala elektroskop.
   - Elektron bebas di kepala elektroskop terdorong kabur mengalir ke bawah menuju batang logam dan kedua lembar daun elektroskop.
   - Akibatnya:
     * Kepala elektroskop kehilangan elektron sehingga menjadi BERMUATAN POSITIF (Pernyataan A BENAR).
     * Kedua lembar daun elektroskop kedatangan limpahan elektron sehingga sama-sama BERMUATAN NEGATIF.

3. Mengapa Daun Elektroskop Mekar?
   - Karena kedua lembar daun bermuatan sejenis (sama-sama negatif), terjadi gaya tolak-menolak listrik statis yang kuat di antara kedua daun.
   - Akibat gaya tolak tersebut, kedua daun elektroskop saling menjauh dan TERBUKA MEKAR (Pernyataan C BENAR).
   - Proton tidak pernah berpindah/mengalir dalam konduksi listrik statis (Pernyataan D SALAH).

Dua jawaban yang benar adalah Opsi A dan C.`,
  },

  // --- Soal 25: Pewarisan Sifat (Kromosom dan Gen) ---
  {
    id: 325,
    question: `Materi genetik yang bertanggung jawab dalam pewarisan sifat dari orang tua kepada keturunannya adalah DNA dan RNA yang terorganisasi dalam kromosom. Manakah dua pernyataan yang benar mengenai materi genetik tersebut? (Pilihlah dua jawaban yang benar)`,
    questionType: 'complex',
    options: [
      'Gen merupakan unit terkecil materi genetik yang terletak di dalam lokus kromosom.',
      'Sel tubuh (somatis) manusia memiliki jumlah kromosom yang bersifat haploid (n).',
      'Sel kelamin (gamet) manusia memiliki jumlah kromosom yang bersifat diploid (2n).',
      'Kromosom tubuh (autosom) menentukan sifat-sifat tubuh tetapi tidak menentukan jenis kelamin.',
    ],
    correctAnswers: [0, 3], // A dan D
    isHots: false,
    explanation: `Konsep Dasar Kromosom dan Gen Step-by-Step:

1. Gen dan Lokus:
   - Gen adalah substansi hereditas terkecil penyimpan informasi genetik (seperti warna mata, bentuk rambut, golongan darah).
   - Gen tersusun dari sepenggal rantai DNA dan berderet teratur di dalam ruangan khusus pada kromosom yang disebut LOKUS (Pernyataan A BENAR).

2. Kromosom Autosom vs Gonosom:
   - Autosom (Kromosom Tubuh): Mengatur sifat morfologi fisik tubuh (misal warna kulit, tinggi badan, bentuk hidung) dan TIDAK MENENTUKAN JENIS KELAMIN (Pernyataan D BENAR).
   - Gonosom (Kromosom Kelamin): Menentukan jenis kelamin individu (XX untuk perempuan, XY untuk laki-laki).

3. Mengapa Pilihan B dan C Tertukar/Salah?
   - Sel Tubuh (Somatis): Memiliki kromosom berpasangan, bersifat DIPLOID (2n = 46 buah kromosom).
   - Sel Kelamin (Gamet): Mengalami pembelahan reduksi (meiosis) sehingga hanya memiliki separuh kromosom induk, bersifat HAPLOID (n = 23 buah kromosom).

Dua jawaban yang benar adalah Opsi A dan D.`,
  },
];
