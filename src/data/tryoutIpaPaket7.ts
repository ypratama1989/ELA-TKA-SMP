import { Question } from '../types';

/**
 * Bank Soal Try Out TKA SMP Resmi - IPA Paket 7 (ipa_p7)
 * 25 Soal CBT Komprehensif Berdasarkan Kisi-Kisi Resmi:
 * - Soal Pilihan Ganda Standar (Single Choice): 1, 4, 7, 10, 13, 16, 18, 19, 22, 24
 * - Soal Pilihan Ganda Kompleks (Multi-Select): 2, 5, 8, 11, 14, 17, 20, 21, 23, 25
 * - Soal Benar / Salah (True / False): 3, 6, 9, 12, 15
 * Dilengkapi Evaluasi Kunci Jawaban & Pembahasan Mendalam Step-by-Step Ramah Siswa
 */
export const TRYOUT_IPA_PAKET_7: Question[] = [
  // ==========================================
  // STIMULUS 1: Demam "Es Kul-Kul" di TikTok
  // ==========================================

  // --- Soal 1: Mekanisme Pembekuan Cokelat ---
  {
    id: 701,
    question: `**Stimulus 1: Demam "Es Kul-Kul" di TikTok**
Belakangan ini, FYP (For You Page) TikTok dipenuhi oleh tren pembuatan "Es Kul-Kul", yaitu buah-buahan segar seperti stroberi, pisang, atau anggur yang ditusuk, dibekukan, lalu dicelupkan ke dalam lelehan cokelat hangat. Ketika buah beku yang sangat dingin bersentuhan dengan cokelat cair hangat, dalam hitungan detik cokelat tersebut langsung membeku membentuk lapisan crispy yang padat dan berkilau. 
Seorang content creator mencatat bahwa suhu buah beku adalah -10°C, sedangkan suhu lelehan cokelat adalah 45°C. Ketika dicelupkan, terjadi transfer energi termal yang sangat cepat sehingga suhu akhir sistem sesaat berada di bawah titik beku cokelat (28°C).

Berdasarkan fenomena pembuatan Es Kul-Kul pada Stimulus 1, mengapa lapisan cokelat cair dapat langsung membeku dengan cepat saat bersentuhan dengan buah beku?`,
    image: '/images/tryout/ipa_p7_q1.PNG',
    imageCaption: 'Stimulus 1: Demam "Es Kul-Kul" di TikTok',
    questionType: 'single',
    options: [
      'Cokelat cair melepaskan kalor ke buah beku, menyebabkan suhu cokelat turun drastis di bawah titik bekunya.',
      'Buah beku menyerap kalor dari lingkungan sekitar sehingga membekukan cokelat secara radiasi.',
      'Terjadi reaksi kimia antara air di permukaan buah dengan lemak cokelat yang menghasilkan zat padat baru.',
      'Suhu dingin dari buah beku mengalir ke cokelat cair dan memusnahkan energi panas yang ada pada cokelat.',
    ],
    correctAnswer: 0, // A
    isHots: false,
    explanation: `Konsep Perpindahan Kalor pada Es Kul-Kul Step-by-Step:

1. Konsep Dasar Kalor:
   - Kalor selalu mengalir secara alami dari benda bersuhu lebih tinggi (panas) menuju benda bersuhu lebih rendah (dingin).
   - Ingat: Rasa "dingin" bukanlah zat atau energi yang mengalir, melainkan kondisi saat suatu benda kehilangan kalor!

2. Apa yang Terjadi Saat Buah Dicelupkan?
   - Cokelat cair bersuhu 45°C (tinggi).
   - Buah beku bersuhu -10°C (sangat rendah).
   - Karena ada perbedaan suhu yang mencolok (ΔT = 55°C), kalor dari cokelat cair langsung disedot keluar dan berpindah cepat ke dalam buah beku (berdasarkan Asas Black).

3. Mengapa Cokelat Menjadi Keras/Beku?
   - Karena melepaskan kalor dalam jumlah besar dalam waktu singkat, suhu lelehan cokelat langsung anjlok dari 45°C hingga di bawah 28°C (titik beku lemak cokelat).
   - Saat suhu turun di bawah titik bekunya, molekul lemak cokelat merapat dan membeku menjadi lapisan padat yang renyah (crispy).

Jawaban yang paling tepat adalah Opsi A.`,
  },

  // --- Soal 2: Kondisi Sel Buah dan Perubahan Zat ---
  {
    id: 702,
    question: `Sambil menikmati Es Kul-Kul, para remaja juga membahas tentang bagaimana sel-sel buah yang dibekukan tetap mempertahankan strukturnya agar tidak hancur saat mencair (thawing).

Pilihlah pernyataan-pernyataan ilmiah yang benar terkait perubahan zat dan kondisi seluler buah pada proses pembekuan Es Kul-Kul! (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Pembekuan air di dalam sel buah menyebabkan volume air menyusut sehingga dinding sel tumbuhan yang kaku akan mengkerut dan pecah.',
      'Proses pembekuan cepat (flash freezing) mencegah terbentuknya kristal es berukuran besar yang dapat merusak membran sel buah.',
      'Perubahan wujud cokelat dari cair menjadi padat merupakan perubahan fisika karena tidak menghasilkan zat baru dan dapat dilelehkan kembali.',
      'Saat cokelat membeku di atas permukaan buah, terjadi penurunan entropi (keteraturan partikel meningkat) pada molekul-molekul lemak cokelat.',
    ],
    correctAnswers: [1, 2, 3], // Pernyataan 2, 3, dan 4
    isHots: false,
    explanation: `Analisis Pernyataan Ilmiah Pembuatan Es Kul-Kul Step-by-Step:

1. Pernyataan 1 [SALAH]:
   Air memiliki sifat istimewa bernama anomali air. Ketika air membeku menjadi es, volumenya justru MEMUAI (membesar), bukan menyusut! Kristal es tajam yang membesar inilah yang bisa menusuk dan merusak dinding sel bila dibekukan secara perlahan.

2. Pernyataan 2 [BENAR]:
   Jika buah dibekukan sangat cepat (flash freezing), air membeku seketika menjadi kristal-kristal es mikro yang berukuran sangat kecil dan halus. Kristal halus ini tidak menusuk membran dan dinding sel buah, sehingga saat buah mencair kembali (thawing), buah tetap segar dan tidak lembek berair.

3. Pernyataan 3 [BENAR]:
   Cokelat yang membeku hanyalah perubahan wujud dari cair ke padat (perubahan fisika). Cokelat padat tersebut tidak menghasilkan zat kimia baru dan jika dipanaskan kembali akan mencair lagi menjadi cokelat leleh seperti semula (reversibel).

4. Pernyataan 4 [BENAR]:
   Entropi adalah ukuran ketidakteraturan molekul. Pada zat cair, molekul bergerak bebas dan acak (entropi tinggi). Saat membeku menjadi padat, molekul tersusun rapat dan teratur, sehingga derajat ketidakteraturan berkurang (terjadi penurunan entropi).

Jawaban yang benar adalah Pernyataan 2, 3, dan 4.`,
  },

  // --- Soal 3: Arah Aliran Kalor Es Kul-Kul ---
  {
    id: 703,
    question: `Berdasarkan konsep suhu, kalor, dan biologi sel pada pembuatan Es Kul-Kul (Stimulus 1), tentukan apakah pernyataan berikut BENAR atau SALAH!

Pernyataan:
"Ketika buah stroberi beku dimasukkan ke dalam cokelat cair, kalor mengalir dari buah stroberi ke cokelat cair karena stroberi memiliki kapasitas kalor spesifik yang lebih besar."`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 1, // SALAH
    isHots: false,
    explanation: `Memahami Arah Aliran Kalor Step-by-Step:

1. Aturan Emas Termodinamika:
   Kalor HANYA bisa mengalir secara spontan dari benda yang bersuhu LEBIH TINGGI menuju benda yang bersuhu LEBIH RENDAH. Arah aliran kalor ditentukan sepenuhnya oleh perbedaan suhu (gradien suhu), BUKAN oleh kapasitas kalor!

2. Siapa yang Lebih Panas?
   - Cokelat cair bersuhu +45°C (suhu tinggi).
   - Stroberi beku bersuhu -10°C (suhu rendah).
   - Maka, kalor PASTI mengalir dari cokelat cair MENUJU stroberi beku, bukan sebaliknya!

3. Kesimpulan:
   Pernyataan yang menyebutkan bahwa kalor mengalir dari stroberi beku ke cokelat cair adalah pernyataan yang salah secara fisis.

Jawaban yang tepat adalah SALAH.`,
  },

  // ==========================================
  // STIMULUS 2: Tren Otopet Listrik (E-Scooter) di Area Urban
  // ==========================================

  // --- Soal 4: Gaya Bersih Otopet Listrik ---
  {
    id: 704,
    question: `**Stimulus 2: Tren Otopet Listrik (E-Scooter) di Area Urban**
Generasi Z sangat menyukai kepraktisan. Di berbagai sudut kota, penyewaan otopet listrik (e-scooter) menjadi sarana transportasi favorit. Otopet ini menggunakan motor listrik bertenaga baterai litium-ion yang menggerakkan roda.
Seorang pelajar mengendarai otopet listrik bermassa total (otopet + pengendara) 80 kg. Ia bergerak dari keadaan diam, melintasi jalan mendatar yang mulus dengan percepatan konstan hingga mencapai kecepatan 6 m/s dalam waktu 3 detik. Setelah itu, ia mempertahankan kecepatannya sebelum akhirnya mengerem mendadak karena ada kucing menyeberang.

Berdasarkan Stimulus 2, berapakah besar gaya bersih (gaya dorong mesin dikurangi gaya gesek) yang bekerja pada otopet listrik tersebut selama 3 detik pertama?`,
    image: '/images/tryout/ipa_p7_q4.PNG',
    imageCaption: 'Stimulus 2: Tren Otopet Listrik (E-Scooter) di Area Urban',
    questionType: 'single',
    options: [
      '80 Newton',
      '160 Newton',
      '240 Newton',
      '480 Newton',
    ],
    correctAnswer: 1, // B (160 N)
    isHots: false,
    explanation: `Perhitungan Gaya Bersih Step-by-Step:

Langkah 1: Catat Besaran yang Diketahui
- Massa total (m) = 80 kg
- Kecepatan mula-mula dari diam (v₀) = 0 m/s
- Kecepatan akhir (v_t) = 6 m/s
- Waktu tempuh (t) = 3 detik

Langkah 2: Menghitung Percepatan (a)
Percepatan adalah pertambahan kecepatan tiap detik:
Rumus: a = (v_t - v₀) / t
a = (6 m/s - 0 m/s) / 3 s
a = 2 m/s².

Langkah 3: Menghitung Gaya Bersih (F_bersih) Berdasarkan Hukum II Newton
Rumus: F_bersih = m × a
F_bersih = 80 kg × 2 m/s²
F_bersih = 160 Newton.

Jawaban yang paling tepat adalah Opsi B (160 Newton).`,
  },

  // --- Soal 5: Usaha dan Perubahan Energi Otopet Listrik ---
  {
    id: 705,
    question: `Berdasarkan perjalanan otopet listrik pada Stimulus 2, lakukan analisis perubahan energi dan usaha yang terjadi.

Manakah dari pernyataan berikut yang tepat? (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Usaha yang dilakukan oleh motor listrik untuk mempercepat otopet dari diam hingga 6 m/s adalah sebesar 1.440 Joule.',
      'Ketika otopet bergerak dengan kecepatan konstan 6 m/s, usaha total yang bekerja pada otopet bernilai nol.',
      'Saat dilakukan pengereman mendadak, energi kinetik otopet hilang sepenuhnya dari alam semesta.',
      'Daya rata-rata yang dikeluarkan oleh motor listrik selama 3 detik pertama adalah 480 Watt.',
    ],
    correctAnswers: [0, 1, 3], // Pernyataan 1, 2, dan 4
    isHots: false,
    explanation: `Analisis Usaha dan Energi Otopet Step-by-Step:

1. Pernyataan 1 [BENAR]:
   Teorema Usaha-Energi Kinetik menyatakan usaha total sama dengan perubahan energi kinetik:
   W = ΔEk = ½ × m × (v_t² - v₀²)
   W = ½ × 80 kg × (6² - 0²)
   W = 40 × 36 = 1.440 Joule.

2. Pernyataan 2 [BENAR]:
   Saat melaju dengan kecepatan konstan (6 m/s), tidak ada perubahan kecepatan (a = 0), sehingga gaya bersih yang bekerja adalah nol (ΣF = 0). Akibatnya usaha total (W_total = ΣF × s) bernilai nol.

3. Pernyataan 3 [SALAH]:
   Berdasarkan Hukum Kekekalan Energi, energi TIDAK DAPAT DIMUSNAHKAN atau hilang dari alam semesta. Saat rem ditekan, energi kinetik otopet berubah bentuk menjadi energi kalor (panas) akibat gesekan kampas rem pada piringan roda dan gesekan ban dengan aspal.

4. Pernyataan 4 [BENAR]:
   Daya (Power) adalah kecepatan melakukan usaha tiap satuan detik:
   Rumus: P = W / t
   P = 1.440 Joule / 3 detik = 480 Watt.

Jawaban yang benar adalah Pernyataan 1, 2, dan 4.`,
  },

  // --- Soal 6: Hukum Ohm pada Motor Otopet Listrik ---
  {
    id: 706,
    question: `Berdasarkan konsep kelistrikan dinamis pada baterai otopet listrik (Stimulus 2), tentukan apakah pernyataan berikut BENAR atau SALAH!

Pernyataan:
"Jika baterai otopet listrik memiliki tegangan 36 V dan mengalirkan arus sebesar 10 A ke motor listrik, maka hambatan dalam sistem motor tersebut adalah 3,6 Ω sesuai dengan Hukum Ohm."`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Perhitungan Hukum Ohm Step-by-Step:

1. Rumus Dasar Hukum Ohm:
   Tegangan (V) = Kuat Arus (I) × Hambatan (R)
   Dapat diubah menjadi: R = V / I

2. Masukkan Angka yang Diketahui:
   - Tegangan baterai (V) = 36 Volt
   - Arus listrik yang mengalir (I) = 10 Ampere
   - Hambatan motor listrik (R) = 36 V / 10 A = 3,6 Ω (Ohm).

3. Kesimpulan:
   Pernyataan bahwa hambatan dalam sistem motor adalah 3,6 Ω adalah sepenuhnya BENAR.

Jawaban yang tepat adalah BENAR.`,
  },

  // ==========================================
  // STIMULUS 3: Konser Coldplay dan Gelang LED "Xyloband"
  // ==========================================

  // --- Soal 7: Panjang Gelombang Sinyal Radio RF ---
  {
    id: 707,
    question: `**Stimulus 3: Konser Coldplay dan Gelang LED "Xyloband"**
Konser Coldplay terkenal dengan penggunaan gelang LED bernama Xyloband yang dibagikan kepada penonton. Gelang ini dapat menyala secara sinkron memancarkan berbagai warna cahaya sesuai dengan ketukan lagu. Gelang ini dikendalikan menggunakan pemancar gelombang radio (RF) dari panggung utama yang bekerja pada frekuensi 868 MHz.
Gelombang radio yang dipancarkan dari panggung untuk mengontrol gelang Xyloband merambat di udara dengan kecepatan 3 × 10⁸ m/s. Jika frekuensi gelombang tersebut adalah 868 MHz (8,68 × 10⁸ Hz), berapakah panjang gelombang dari sinyal kontrol tersebut?`,
    image: '/images/tryout/ipa_p7_q7.PNG',
    imageCaption: 'Stimulus 3: Konser Coldplay dan Gelang LED "Xyloband"',
    questionType: 'single',
    options: [
      'Sekitar 0,345 meter',
      'Sekitar 2,89 meter',
      'Sekitar 3,45 meter',
      'Sekitar 28,9 meter',
    ],
    correctAnswer: 0, // A (0,345 m)
    isHots: false,
    explanation: `Perhitungan Panjang Gelombang Radio Step-by-Step:

Langkah 1: Tuliskan Data yang Diketahui
- Cepat rambat gelombang elektromagnetik (c) = 3 × 10⁸ m/s
- Frekuensi pemancar (f) = 868 MHz = 868 × 10⁶ Hz = 8,68 × 10⁸ Hz

Langkah 2: Gunakan Rumus Dasar Cepat Rambat Gelombang
Hubungan kecepatan (c), panjang gelombang (λ), dan frekuensi (f):
c = λ × f
Maka rumus panjang gelombang: λ = c / f

Langkah 3: Lakukan Pembagian
λ = (3 × 10⁸ m/s) / (8,68 × 10⁸ Hz)
Perhatikan bahwa pengali 10⁸ di atas dan di bawah saling menghilangkan:
λ = 3 / 8,68
λ ≈ 0,3456 meter atau sekitar 0,345 meter (34,5 cm).

Jawaban yang paling tepat adalah Opsi A (Sekitar 0,345 meter).`,
  },

  // --- Soal 8: Sifat Cahaya dan Gelombang Elektromagnetik ---
  {
    id: 708,
    question: `Cahaya warna-warni yang dipancarkan oleh LED pada gelang Xyloband merupakan gelombang elektromagnetik yang dapat dilihat oleh mata manusia.

Pilihlah pernyataan yang benar mengenai sifat cahaya dan gelombang elektromagnetik pada konser tersebut! (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Cahaya merah memiliki frekuensi yang lebih tinggi dibandingkan cahaya biru.',
      'Gelombang radio pemancar Xyloband tidak memerlukan medium materi untuk merambat dari panggung ke gelang penonton.',
      'Cahaya yang dipancarkan LED mengalami pembiasan saat melewati penutup plastik transparan gelang, mengubah frekuensi cahayanya.',
      'Warna-warni cahaya yang tampak terjadi karena perbedaan panjang gelombang masing-masing warna dalam spektrum cahaya tampak.',
    ],
    correctAnswers: [1, 3], // Pernyataan 2 dan 4
    isHots: false,
    explanation: `Analisis Sifat Gelombang Elektromagnetik Step-by-Step:

1. Pernyataan 1 [SALAH]:
   Ingat urutan spektrum pelangi ME-JI-KU-HI-BI-NI-U:
   - Cahaya merah memiliki panjang gelombang paling panjang (λ terbesar), sehingga frekuensinya PALING RENDAH.
   - Cahaya biru/ungu memiliki panjang gelombang pendek dan frekuensinya JAUH LEBIH TINGGI daripada cahaya merah.

2. Pernyataan 2 [BENAR]:
   Gelombang radio termasuk dalam keluarga gelombang elektromagnetik (sama seperti cahaya). Salah satu ciri utamanya adalah DAPAT MERAMBAT DI RUANG HAMPA tanpa membutuhkan partikel zat perantara (medium materi).

3. Pernyataan 3 [SALAH]:
   Ketika gelombang cahaya mengalami pembiasan saat menembus bahan kaca atau plastik transparan, kecepatan dan panjang gelombangnya memang berubah, tetapi FREKUENSI gelombang selalu bersifat KEKAL/TETAP (tidak berubah).

4. Pernyataan 4 [BENAR]:
   Setiap warna cahaya memiliki rentang panjang gelombang spesifik di mata manusia, misalnya merah (~700 nm), hijau (~530 nm), dan biru (~470 nm). Perbedaan panjang gelombang inilah yang membedakan sensasi warna pada retina mata kita.

Jawaban yang benar adalah Pernyataan 2 dan 4.`,
  },

  // --- Soal 9: Listrik Statis pada Plastik Gelang ---
  {
    id: 709,
    question: `Berdasarkan konsep kemagnetan dan kelistrikan statis pada gelang konser (Stimulus 3), tentukan apakah pernyataan berikut BENAR atau SALAH!

Pernyataan:
"Jika plastik pelindung gelang digosokkan ke baju wol penonton, plastik tersebut akan bermuatan negatif karena elektron dari wol berpindah ke plastik, menunjukkan fenomena listrik statis."`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Konsep Listrik Statis dan Deret Tribolistrik Step-by-Step:

1. Cara Benda Menjadi Bermuatan:
   Semua benda awalnya netral (jumlah proton positif = jumlah elektron negatif). Ketika dua benda digosokkan, hanya partikel ELEKTRON (yang berada di kulit luar atom) yang dapat berpindah tempat. Proton di dalam inti atom tidak pernah berpindah.

2. Kain Wol vs Bahan Plastik:
   Berdasarkan deret sifat listrik bahan (Deret Tribolistrik):
   - Kain wol memiliki sifat sangat mudah MELEPASKAN elektron.
   - Plastik memiliki sifat sangat kuat MENARIK elektron.

3. Apa Akibatnya Saat Digosok?
   Elektron dari kain wol meloncat pindah ke permukaan plastik. Akibatnya:
   - Plastik kelebihan elektron ➜ menjadi bermuatan NEGATIF.
   - Kain wol kekurangan elektron ➜ menjadi bermuatan POSITIF.

Kesimpulan: Pernyataan pada soal 100% BENAR.
Jawaban yang tepat adalah BENAR.`,
  },

  // ==========================================
  // STIMULUS 4: Tren "Oat Milk Latte" dan Pola Hidup Vegan Gen Z
  // ==========================================

  // --- Soal 10: Taksonomi Tanaman Gandum (Oat) ---
  {
    id: 710,
    question: `**Stimulus 4: Tren "Oat Milk Latte" dan Pola Hidup Vegan Gen Z**
Banyak Gen Z beralih ke gaya hidup vegan atau mengonsumsi susu nabati seperti oat milk (susu gandum) demi kesehatan dan mengurangi jejak karbon (carbon footprint). Gandum (Avena sativa) diproses secara mekanis dan enzimatis untuk mengekstrak kandungan gizinya menjadi cairan menyerupai susu.

Dalam klasifikasi makhluk hidup, tanaman gandum (Avena sativa) yang digunakan sebagai bahan dasar oat milk dikelompokkan ke dalam kingdom Plantae. Manakah karakteristik berikut yang paling tepat mendefinisikan posisi taksonomi gandum?`,
    image: '/images/tryout/ipa_p7_q10.PNG',
    imageCaption: 'Stimulus 4: Tren "Oat Milk Latte" dan Pola Hidup Vegan Gen Z',
    questionType: 'single',
    options: [
      'Angiospermae, Monokotil, karena memiliki biji berkeping satu dan tulang daun sejajar.',
      'Gymnospermae, karena bijinya tidak terlindungi oleh daun buah (carpella).',
      'Angiospermae, Dikotil, karena memiliki sistem perakaran tunggang yang kokoh.',
      'Bryophyta, karena belum memiliki pembuluh angkut sejati (xilem dan floem).',
    ],
    correctAnswer: 0, // A
    isHots: false,
    explanation: `Karakteristik Taksonomi Tanaman Gandum (Oat) Step-by-Step:

1. Tumbuhan Berbiji Tertutup (Angiospermae):
   Gandum (Avena sativa) tergolong famili rumput-rumputan (Poaceae/Gramineae). Gandum memiliki bunga sejati dan bijinya berkembang di dalam bakal buah tertutup (Angiospermae), bukan berbiji terbuka seperti melinjo/pinus (Gymnospermae).

2. Kelas Monokotil (Berkeping Satu):
   Ciri khas fisik tanaman gandum:
   - Biji hanya memiliki satu keping lembaga (kotiledon tunggal).
   - Tulang daun berbentuk lurus sejajar memanjang seperti pita.
   - Sistem perakaran berupa akar serabut (bukan akar tunggang).
   - Batang beruas-ruas dengan berkas pembuluh pengangkut xilem dan floem yang tersebar acak.

3. Mengapa Pilihan Lain Salah?
   - Opsi B salah: Gymnospermae adalah tanaman berbiji terbuka seperti pinus dan melinjo.
   - Opsi C salah: Dikotil memiliki biji berkeping dua dan berakar tunggang.
   - Opsi D salah: Bryophyta adalah tumbuhan lumut sederhana yang belum berpembuluh.

Jawaban yang paling tepat adalah Opsi A.`,
  },

  // --- Soal 11: Efisiensi Energi Ekosistem Konsumsi Oat Milk ---
  {
    id: 711,
    question: `Ditinjau dari aspek ekologi dan aliran energi dalam ekosistem (Stimulus 4), mengapa konsumsi oat milk oleh manusia dinilai lebih efisien secara energi dibandingkan mengonsumsi susu sapi? (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Manusia yang mengonsumsi oat milk bertindak sebagai konsumen tingkat I, sehingga mendapatkan transfer energi yang lebih besar langsung dari produsen.',
      'Sapi bertindak sebagai produsen sekunder yang memusnahkan sebagian besar energi matahari sebelum sampai ke manusia.',
      'Berdasarkan hukum efisiensi ekologi, hanya sekitar 10% energi yang ditransfer dari satu trofik ke trofik berikutnya; memotong jalur trofik sapi menghemat energi ekosistem.',
      'Tanaman gandum melakukan fotosintesis yang menghasilkan energi kimia, sedangkan sapi tidak menghasilkan energi melainkan hanya membuang energi melalui respirasi.',
    ],
    correctAnswers: [0, 2], // Pernyataan 1 dan 3
    isHots: false,
    explanation: `Analisis Efisiensi Aliran Energi Ekologi Step-by-Step:

1. Membandingkan Dua Rantai Makanan:
   - Rantai 1 (Konsumsi Oat Milk): Tanaman Gandum (Produsen) ➜ Manusia (Konsumen I).
   - Rantai 2 (Konsumsi Susu Sapi): Tanaman Rumput (Produsen) ➜ Sapi (Konsumen I) ➜ Manusia (Konsumen II).

2. Pernyataan 1 [BENAR]:
   Ketika manusia meminum oat milk secara langsung, manusia bertindak sebagai Konsumen Primer (Tingkat I). Posisi yang lebih dekat dengan produsen memastikan manusia menyerap kuota energi kimia yang jauh lebih besar dan langsung.

3. Mengapa Pernyataan 2 Salah?
   Sapi adalah hewan herbivora (hewan pemakan tumbuhan) sehingga sapi berperan sebagai KONSUMEN PRIMER, bukan "produsen sekunder". Istilah produsen hanya disematkan untuk organisme autotrof yang berfotosintesis.

4. Pernyataan 3 [BENAR]:
   Berdasarkan Hukum Efisiensi Ekologi 10% (Hukum Lindeman), rata-rata hanya 10% energi dari suatu tingkatan trofik yang berhasil diubah menjadi biomassa dan diteruskan ke tingkatan di atasnya. Sekitar 90% energi terbuang sebagai panas tubuh hewan, kotoran, dan energi bergerak. Dengan memotong trofik sapi, kita menghemat energi dan lahan pertanian hingga 10 kali lipat!

5. Mengapa Pernyataan 4 Salah?
   Sapi juga membentuk energi kimia di dalam daging dan susunya (bukan tidak menghasilkan energi sama sekali).

Jawaban yang benar adalah Pernyataan 1 dan 3.`,
  },

  // --- Soal 12: Pencernaan Kimiawi Amilum di Mulut ---
  {
    id: 712,
    question: `Berdasarkan sistem pencernaan manusia saat mencerna kandungan karbohidrat kompleks (amilum) yang terdapat di dalam oat milk (Stimulus 4), tentukan apakah pernyataan berikut BENAR atau SALAH!

Pernyataan:
"Pencernaan kimiawi amilum dari oat milk dimulai di rongga mulut dengan bantuan enzim amilase (ptialin) yang memecah amilum menjadi maltosa."`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Proses Pencernaan Karbohidrat di Mulut Step-by-Step:

1. Dua Macam Pencernaan di Rongga Mulut:
   - Pencernaan Mekanis: Dilakukan oleh gigi dan lidah untuk mengunyah makanan menjadi butiran kecil.
   - Pencernaan Kimiawi: Dilakukan oleh enzim pencernaan di dalam air ludah (saliva).

2. Kerja Enzim Amilase (Ptialin):
   - Kelenjar ludah menghasilkan air liur yang mengandung enzim ptialin (amilase saliva).
   - Enzim ptialin bekerja pada kondisi pH netral (sekitar pH 6,8-7,0) untuk memotong rantai panjang karbohidrat polisakarida (amilum/pati) menjadi molekul disakarida yang lebih sederhana, yaitu maltosa.
   - Itulah sebabnya jika kita mengunyah nasi atau gandum tanpa lauk lama-lama di mulut, rasanya akan terasa manis di lidah!

Kesimpulan: Pernyataan pada soal sepenuhnya BENAR.
Jawaban yang tepat adalah BENAR.`,
  },

  // ==========================================
  // STIMULUS 5: Skincare "Hydrating Serum" dan Tekanan Osmosis
  // ==========================================

  // --- Soal 13: Konsep Osmosis pada Serum Kulit ---
  {
    id: 713,
    question: `**Stimulus 5: Skincare "Hydrating Serum" dan Tekanan Osmosis**
Tren penggunaan produk perawatan kulit (skincare) sangat masif di kalangan Gen Z. Salah satu produk paling populer adalah hydrating serum yang mengandung Hyaluronic Acid (HA) atau gliserin. Serum ini bekerja dengan cara menarik molekul air dari lingkungan luar atau dari lapisan kulit dalam (dermis) menuju ke lapisan terluar kulit (epidermis) agar kulit tampak kenyal (plump) dan terhidrasi.
Secara biologis dan fisik, perpindahan air ini melibatkan prinsip transpor membran sel dan tekanan zat cair.

Ketika seseorang menggunakan serum yang sangat pekat (hipertonis) pada kulit yang kering, molekul air di dalam sel-sel kulit cenderung akan bergerak keluar menuju lapisan serum. Proses perpindahan molekul air melintasi membran sel semipermeabel ini disebut....`,
    image: '/images/tryout/ipa_p7_q13.PNG',
    imageCaption: 'Stimulus 5: Skincare "Hydrating Serum" dan Tekanan Osmosis',
    questionType: 'single',
    options: [
      'Difusi terfasilitasi',
      'Osmosis',
      'Transpor aktif',
      'Endositosis',
    ],
    correctAnswer: 1, // B (Osmosis)
    isHots: false,
    explanation: `Memahami Transpor Membran Sel Step-by-Step:

1. Pengertian Osmosis:
   Osmosis adalah perpindahan KHUSUS molekul zat pelarut (yaitu air) dari larutan yang lebih encer / konsentrasi airnya tinggi (hipotonis) menuju ke larutan yang lebih pekat / konsentrasi airnya rendah (hipertonis) melalui membran yang bersifat semipermeabel (hanya bisa dilewati air).

2. Apa yang Terjadi pada Kulit?
   - Bagian dalam sel kulit mengandung banyak cairan air (encer/hipotonis).
   - Di permukaan kulit ditempelkan serum dengan konsentrasi zat terlarut yang sangat tinggi (pekat/hipertonis).
   - Membran sel kulit bertindak sebagai saringan semipermeabel alami.
   - Molekul air di dalam sel akan tersedot keluar melintasi membran menuju cairan serum pekat tersebut. Peristiwa ini adalah contoh nyata peristiwa OSMOSIS.

3. Mengapa Pilihan Lain Salah?
   - Difusi terfasilitasi: Perpindahan zat terlarut (seperti glukosa/ion) dibantu saluran protein.
   - Transpor aktif: Perpindahan zat yang melawan gradien konsentrasi menggunakan energi ATP sel.
   - Endositosis: Proses sel menelan partikel besar dengan melipat membran membentuk kantong vakuola.

Jawaban yang paling tepat adalah Opsi B (Osmosis).`,
  },

  // --- Soal 14: Klasifikasi Kimiawi Campuran Serum Kosmetik ---
  {
    id: 714,
    question: `Formula serum yang mengandung air, gliserin, asam hialuronat, dan pengawet yang tercampur secara merata tanpa ada endapan dikategorikan secara kimiawi.

Manakah pernyataan yang benar? (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Serum tersebut merupakan campuran homogen (larutan) karena fase terdispersi dan pendispersinya tidak dapat dibedakan lagi secara kasat mata.',
      'Asam hialuronat dalam serum bertindak sebagai senyawa murni yang tidak dapat diuraikan lagi menjadi unsur-unsurnya melalui reaksi kimia biasa.',
      'Air (H₂O) di dalam serum bertindak sebagai pelarut universal yang merupakan sebuah senyawa, terdiri dari unsur hidrogen dan oksigen.',
      'Jika serum dikocok dan membentuk lapisan keruh yang memisah setelah didiamkan lama, maka sediaan tersebut telah berubah menjadi suspensi kasar.',
    ],
    correctAnswers: [0, 2], // Pernyataan 1 dan 3
    isHots: false,
    explanation: `Analisis Klasifikasi Materi Kimia Serum Step-by-Step:

1. Pernyataan 1 [BENAR]:
   Serum kosmetik yang jernih dan stabil merupakan campuran homogen (larutan sejati). Partikel zat aktif (gliserin, asam hialuronat) terlarut sempurna dalam air sehingga tidak ada bidang batas yang terlihat oleh mata, tidak keruh, dan tidak mengendap di dasar botol.

2. Mengapa Pernyataan 2 Salah?
   "Zat murni yang tidak dapat diuraikan lagi menjadi zat lain melalui reaksi kimia biasa" adalah definisi dari UNSUR (seperti Besi, Emas, Oksigen). Asam hialuronat adalah SENYAWA polimer organik kompleks yang tersusun atas gabungan unsur Karbon, Hidrogen, Oksigen, dan Nitrogen. Oleh karena itu, asam hialuronat BISA diuraikan kembali melalui reaksi kimia.

3. Pernyataan 3 [BENAR]:
   Air murni (H₂O) adalah sebuah senyawa kimia murni yang tersusun atas dua unsur gas (Hidrogen dan Oksigen) yang terikat secara kovalen dalam perbandingan massa tetap. Di dalam serum, air berperan sebagai zat pelarut utama.

4. Mengapa Pernyataan 4 Salah?
   Jika formula kosmetik berbasis cairan dan minyak memisah menjadi dua lapisan cairan, sistem tersebut merupakan emulsi tidak stabil atau koloid yang pecah (koagulasi fase cair-cair), bukan suspensi kasar padat-cair.

Jawaban yang benar adalah Pernyataan 1 dan 3.`,
  },

  // --- Soal 15: Regenerasi Sel Kulit Tubuh ---
  {
    id: 715,
    question: `Berdasarkan konsep regenerasi sel kulit manusia (Stimulus 5), tentukan apakah pernyataan berikut BENAR atau SALAH!

Pernyataan:
"Sel-sel kulit pada lapisan epidermis terus mengalami regenerasi melalui proses pembelahan sel secara meiosis untuk menghasilkan sel anak yang identik dengan sel induk guna mengganti sel kulit yang mati."`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 1, // SALAH
    isHots: false,
    explanation: `Membedakan Mitosis vs Meiosis Step-by-Step:

1. Kunci Utama Perbedaan Pembelahan Sel:
   - MITOSIS (Terjadi pada SEL TUBUH / Somatis):
     Bertujuan untuk pertumbuhan, perbaikan jaringan rusak, dan regenerasi sel yang mati (seperti kulit, rambut, kuku). Pembelahan ini menghasilkan 2 sel anak yang persis IDENTIK dengan induknya (diploid, 2n).
   - MEIOSIS (Terjadi pada SEL KELAMIN / Gamet):
     Hanya terjadi di testis (pembentukan sperma) dan ovarium (pembentukan sel telur). Bertujuan mengurangi separuh jumlah kromosom (haploid, n) untuk persiapan fertilisasi.

2. Analisis Pernyataan Soal:
   Kulit adalah sel tubuh (sel somatis). Regenerasi kulit yang mengelupas diperbarui setiap 28 hari melalui proses pembelahan MITOSIS, BUKAN meiosis!

Kesimpulan: Pernyataan tersebut SALAH.
Jawaban yang tepat adalah SALAH.`,
  },

  // ==========================================
  // STIMULUS 6: "Climate Strike" dan Dampak Pemanasan Global
  // ==========================================

  // --- Soal 16: Mekanisme Efek Rumah Kaca ---
  {
    id: 716,
    question: `**Stimulus 6: "Climate Strike" dan Dampak Pemanasan Global**
Gerakan Climate Strike yang dipelopori oleh aktivis muda menunjukkan kepedulian tinggi Gen Z terhadap masa depan bumi. Peningkatan konsentrasi gas rumah kaca (seperti CO₂ dan CH₄) di atmosfer akibat aktivitas industri dan pembakaran bahan bakar fosil menyebabkan peningkatan suhu rata-rata global.
Dampak nyata dari fenomena ini adalah mencairnya es di kutub, kenaikan permukaan air laut, serta cuaca ekstrem.

Mekanisme efek rumah kaca yang menyebabkan pemanasan global pada atmosfer bumi analog dengan proses fisis berikut, yaitu....`,
    image: '/images/tryout/ipa_p7_q16.PNG',
    imageCaption: 'Stimulus 6: "Climate Strike" dan Dampak Pemanasan Global',
    questionType: 'single',
    options: [
      'Atmosfer menahan radiasi sinar ultraviolet matahari agar tidak masuk ke permukaan bumi.',
      'Gas rumah kaca menyerap radiasi inframerah (panas) yang dipantulkan bumi dan memancarkannya kembali ke segala arah, menahan panas di atmosfer.',
      'Lapisan ozon yang bocor membiarkan seluruh energi panas matahari langsung menyentuh kerak bumi tanpa hambatan.',
      'Bumi memantulkan seluruh cahaya tampak kembali ke luar angkasa sehingga suhu bumi menjadi dingin di malam hari.',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Mekanisme Efek Rumah Kaca Step-by-Step:

1. Cahaya Matahari Masuk ke Bumi:
   Sinar matahari memancarkan energi gelombang pendek (termasuk cahaya tampak) menembus atmosfer dan menghangatkan daratan serta lautan bumi.

2. Bumi Memancarkan Kembali Kalor:
   Permukaan bumi yang hangat memancarkan kembali energi panas tersebut ke angkasa dalam bentuk radiasi gelombang panjang, yaitu Sinar Inframerah.

3. Gas Rumah Kaca Bekerja Seperti Selimut Kaca:
   Gas rumah kaca di atmosfer (seperti CO₂, CH₄, uap air) memiliki sifat unik:
   - Tembus terhadap cahaya tampak,
   - Namun MENYERAP gelombang inframerah yang hendak kabur ke luar angkasa, lalu memantulkan dan memancarkannya kembali ke permukaan bumi.

4. Akibat Penumpukan Gas Rumah Kaca:
   Panas terperangkap di lapisan troposfer sehingga suhu rata-rata bumi naik perlahan. Fenomena ini persis seperti rumah kaca tanaman kaca atau mobil yang diparkir di bawah terik matahari.

Jawaban yang paling tepat adalah Opsi B.`,
  },

  // --- Soal 17: Tanaman Transgenik Toleran Kekeringan ---
  {
    id: 717,
    question: `Dalam upaya menghadapi krisis pangan akibat perubahan iklim (Stimulus 6), bioteknologi modern digunakan untuk merakit tanaman transgenik yang toleran terhadap kekeringan.

Manakah pernyataan berikut yang tepat mengenai pewarisan sifat dan bioteknologi ini? (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Pembuatan tanaman transgenik dilakukan dengan menyisipkan gen asing yang mengode sifat toleran kekeringan ke dalam DNA tanaman target.',
      'Sifat toleran kekeringan yang disisipkan tidak akan diwariskan ke generasi berikutnya karena bukan merupakan sifat alami tanaman tersebut.',
      'Rekayasa genetika ini memanfaatkan prinsip rekombinasi DNA menggunakan vektor seperti bakteri Agrobacterium tumefaciens.',
      'Penggunaan tanaman transgenik secara monokultur dalam skala besar dapat meningkatkan keanekaragaman hayati di ekosistem pertanian.',
    ],
    correctAnswers: [0, 2], // Pernyataan 1 dan 3
    isHots: false,
    explanation: `Prinsip Tanaman Transgenik dan Rekayasa Genetika Step-by-Step:

1. Pernyataan 1 [BENAR]:
   Definisi tanaman transgenik adalah tanaman yang genom DNA aslinya telah disisipkan satu atau beberapa potongan gen asing (transgen) dari spesies lain (misalnya gen tahan kering dari tanaman gurun atau bakteri) agar memiliki sifat unggul baru.

2. Mengapa Pernyataan 2 Salah?
   Begitu gen asing berhasil disisipkan dan menyatu ke dalam untaian kromosom inti sel tanaman, gen tersebut akan ikut digandakan (replikasi) saat pembelahan sel. Saat tanaman berbunga dan berbuah, sifat unggul ini AKAN DIWARISKAN secara permanen ke biji keturunan berikutnya!

3. Pernyataan 3 [BENAR]:
   Bakteri tanah Agrobacterium tumefaciens adalah salah satu vektor (kendaraan pengangkut) biologis paling populer. Bakteri ini memiliki plasmid khusus (Ti plasmid) yang dapat membawa potongan gen target masuk menembus dinding sel dan mengintegrasikannya ke kromosom tanaman inang.

4. Mengapa Pernyataan 4 Salah?
   Menanam varietas tanaman seragam dalam skala raksasa (monokultur) justru MENURUNKAN keanekaragaman hayati (biodiversitas), karena menyingkirkan varietas bibit lokal dan membuat ekosistem rentan terserang hama spesifik.

Jawaban yang benar adalah Pernyataan 1 dan 3.`,
  },

  // --- Soal 18: Dinamika Lempeng Tektonik Bumi ---
  {
    id: 718,
    question: `Pemanasan global juga mempengaruhi dinamika struktur bumi. Meningkatnya suhu global memicu pencairan gletser yang mengurangi beban massa di atas lempeng tektonik tertentu, memicu penyesuaian isostatik. Kerak bumi sendiri terdiri dari lempeng-lempeng tektonik yang terus bergerak di atas lapisan mantel.

Teori yang menjelaskan pergerakan lempeng-lempeng ini akibat adanya arus konveksi di lapisan mantel bumi adalah....`,
    questionType: 'single',
    options: [
      'Teori Kontraksi',
      'Teori Tektonik Lempeng (Plate Tectonics)',
      'Teori Apungan Benua (Continental Drift)',
      'Teori Geosinklin',
    ],
    correctAnswer: 1, // B (Teori Tektonik Lempeng)
    isHots: false,
    explanation: `Memahami Teori Geologi Pembentukan Bumi Step-by-Step:

1. Teori Tektonik Lempeng (Plate Tectonics Theory):
   Teori modern yang dicetuskan pada akhir dekade 1960-an ini menyempurnakan teori-teori sebelumnya. Teori ini menyatakan bahwa lapisan terluar bumi yang padat (litosfer) terpecah menjadi belasan lempeng kaku besar yang mengapung di atas lapisan mantel astenosfer yang panas dan liat. Gerakan lempeng digerakkan oleh ARUS KONVEKSI panas magma dari inti bumi.

2. Mengapa Pilihan Lain Kurang Tepat?
   - Teori Kontraksi (Descartes): Teori kuno yang menyatakan bumi mendingin dan menyusut sehingga permukaannya berkerut seperti kulit apel kering.
   - Teori Apungan Benua (Continental Drift - Alfred Wegener): Menyatakan benua dulunya satu (Pangaea) lalu bergeser pecah, namun Wegener belum bisa menjelaskan mekanisme fisis apa yang mampu menggerakkan benua seberat itu (belum menemukan arus konveksi).
   - Teori Geosinklin: Konsep lama tentang cekungan pengendapan batuan sedimen.

Jawaban yang paling tepat adalah Opsi B (Teori Tektonik Lempeng).`,
  },

  // ==========================================
  // STIMULUS 7: Tren "Thrifting" dan Ancaman Mikroplastik
  // ==========================================

  // --- Soal 19: Biomagnifikasi Mikroplastik Laut ---
  {
    id: 719,
    question: `**Stimulus 7: Tren "Thrifting" dan Ancaman Mikroplastik**
Tren membeli pakaian bekas layak pakai (thrifting) sangat populer di kalangan Gen Z. Namun, mayoritas pakaian modern terbuat dari bahan sintetis seperti poliester, nilon, dan akrilik yang merupakan polimer plastik. Saat pakaian sintetis dicuci, jutaan serat plastik mikroskopis (mikroplastik, < 5 mm) terlepas dan hanyut ke laut, lalu masuk ke dalam rantai makanan laut.

Berdasarkan jaring-jaring makanan di ekosistem laut, mikroplastik yang terkonsumsi oleh organisme kecil akan mengalami proses akumulasi konsentrasi zat beracun yang semakin meningkat pada tingkatan trofik yang lebih tinggi. Fenomena akumulasi zat pencemar ini dikenal dengan istilah....`,
    image: '/images/tryout/ipa_p7_q19.PNG',
    imageCaption: 'Stimulus 7: Tren "Thrifting" dan Ancaman Mikroplastik',
    questionType: 'single',
    options: [
      'Eutrofikasi',
      'Bioremediasi',
      'Biomagnifikasi (Bioakumulasi)',
      'Spesiasi',
    ],
    correctAnswer: 2, // C (Biomagnifikasi)
    isHots: false,
    explanation: `Konsep Biomagnifikasi Pencemaran Laut Step-by-Step:

1. Pengertian Biomagnifikasi (Pemekatan Hayati):
   Biomagnifikasi adalah proses pelipatgandaan konsentrasi zat beracun atau partikel asing (seperti mikroplastik, logam berat merkuri, racun DDT) di dalam jaringan tubuh makhluk hidup pada setiap tingkatan trofik rantai makanan.

2. Mengapa Makin ke Atas Makin Pekat?
   - Mikroplastik dimakan oleh zooplankton dalam jumlah sedikit.
   - Ikan kecil memakan ribuan zooplankton tercemar (mikroplastik terkumpul di perut ikan kecil).
   - Ikan besar memakan ratusan ikan kecil.
   - Manusia atau paus pembunuh memakan ikan besar.
   - Karena mikroplastik tidak bisa dicerna atau dikeluarkan oleh ginjal, partikel racun menumpuk semakin pekat di puncak rantai makanan!

3. Istilah Lain yang Harus Dihindari:
   - Eutrofikasi: Ledakan alga di perairan akibat penumpukan pupuk fosfat/nitrat.
   - Bioremediasi: Pemanfaatan bakteri pengurai untuk membersihkan tumpahan polusi minyak.
   - Spesiasi: Pembentukan spesies baru dalam proses evolusi.

Jawaban yang paling tepat adalah Opsi C (Biomagnifikasi).`,
  },

  // --- Soal 20: Struktur Kimia Poliester ---
  {
    id: 720,
    question: `Poliester merupakan polimer sintetis yang banyak digunakan dalam industri tekstil cepat (fast fashion).

Ditinjau dari struktur kimia zat, manakah pernyataan yang benar mengenai serat poliester? (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Poliester dikategorikan sebagai senyawa, bukan unsur atau campuran, karena terbentuk dari penggabungan kimia beberapa unsur dengan perbandingan tetap.',
      'Serat poliester merupakan campuran heterogen karena terdiri dari molekul-molekul yang dapat dipisahkan secara penyaringan fisik sederhana.',
      'Unit penyusun poliester (monomer) berikatan secara kovalen membentuk rantai panjang yang stabil dan sulit diuraikan oleh mikroorganisme (non-biodegradable).',
      'Poliester murni memiliki sifat fisika berupa titik leleh yang sangat rendah sehingga mudah hancur saat dicuci dengan air dingin.',
    ],
    correctAnswers: [0, 2], // Pernyataan 1 dan 3
    isHots: false,
    explanation: `Analisis Kimia Polimer Poliester Step-by-Step:

1. Pernyataan 1 [BENAR]:
   Poliester (seperti Polyethylene Terephthalate / PET) adalah SENYAWA makromolekul polimer. Poliester terbentuk melalui ikatan kimia antar unsur Karbon (C), Hidrogen (H), dan Oksigen (O) dengan perbandingan komposisi massa yang pasti dan tetap.

2. Mengapa Pernyataan 2 Salah?
   Serat poliester bukan campuran heterogen yang terpisah-pisah, melainkan materi homogen berbahan polimer murni. Komponen kimianya tidak bisa dipisahkan dengan saringan kertas atau penyaring fisik biasa.

3. Pernyataan 3 [BENAR]:
   Monomer asam tereftalat dan etilen glikol terhubung melalui ikatan kovalen ester (-COO-) yang sangat kuat membentuk rantai panjang. Karena ikatannya sangat stabil dan bukan berasal dari alam, enzim bakteri pengurai tidak dapat mencernanya, sehingga serat ini tidak mudah lapuk (non-biodegradable) dan mencemari alam hingga ratusan tahun.

4. Mengapa Pernyataan 4 Salah?
   Poliester memiliki titik leleh yang cukup tinggi (sekitar 250°C - 260°C). Mencuci dengan air dingin atau air panas biasa sama sekali tidak merusak atau melelehkan serat poliester.

Jawaban yang benar adalah Pernyataan 1 dan 3.`,
  },

  // --- Soal 21: Tekanan Hidrostatis Mikroplastik di Laut ---
  {
    id: 721,
    question: `Mikroplastik yang tenggelam di laut dalam akan mengalami tekanan hidrostatis yang sangat besar.

Manakah pernyataan fisika yang benar mengenai tekanan zat cair pada mikroplastik di laut? (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Semakin dalam mikroplastik tenggelam, semakin besar tekanan hidrostatis yang dialaminya.',
      'Tekanan hidrostatis pada kedalaman 100 meter di bawah permukaan laut bernilai sama dengan tekanan di permukaan laut.',
      'Massa jenis air laut yang lebih besar daripada air tawar menyebabkan tekanan hidrostatis pada kedalaman yang sama di laut lebih besar dibanding di danau air tawar.',
      'Bentuk dan ukuran mikroplastik mempengaruhi besarnya tekanan hidrostatis yang dialami partikel tersebut pada kedalaman tertentu.',
    ],
    correctAnswers: [0, 2], // Pernyataan 1 dan 3
    isHots: false,
    explanation: `Faktor-Faktor Tekanan Hidrostatis Zat Cair Step-by-Step:

1. Rumus Tekanan Hidrostatis:
   P_h = ρ × g × h
   Keterangan:
   - ρ = massa jenis zat cair
   - g = percepatan gravitasi bumi
   - h = kedalaman diukur dari permukaan air

2. Pernyataan 1 [BENAR]:
   Sesuai rumus P_h = ρ × g × h, nilai tekanan berbanding lurus dengan kedalaman (h). Semakin jauh partikel mikroplastik tenggelam mendekati dasar laut, tumpukan beban air di atasnya semakin berat sehingga tekanannya semakin raksasa.

3. Mengapa Pernyataan 2 Salah?
   Di permukaan laut, tekanan hidrostatis bernilai nol (h = 0). Pada kedalaman 100 meter di laut, tekanan bertambah sebesar ~1.000.000 Pascal (sekitar 10 kali lipat tekanan udara atmosfer), sehingga nilainya jelas jauh lebih besar, bukan sama!

4. Pernyataan 3 [BENAR]:
   Air laut mengandung garam terlarut sehingga massa jenisnya lebih rapat (ρ_laut ≈ 1.030 kg/m³) dibanding air tawar (ρ_tawar ≈ 1.000 kg/m³). Pada kedalaman yang sama (misal sama-sama 50 meter), tekanan hidrostatis di laut pasti lebih besar dibanding di danau tawar.

5. Mengapa Pernyataan 4 Salah?
   Perhatikan rumus P_h = ρ × g × h! Rumus tersebut HANYA bergantung pada massa jenis fluida (ρ), gravitasi (g), dan kedalaman (h). Bentuk benda (bulat, pipih, kotak) maupun ukuran benda sama sekali TIDAK MEMPENGARUHI besarnya tekanan hidrostatis.

Jawaban yang benar adalah Pernyataan 1 dan 3.`,
  },

  // ==========================================
  // STIMULUS 8: Konser K-Pop, Lightstick, dan Sistem Suara
  // ==========================================

  // --- Soal 22: Fenomena Resonansi Bunyi Bass ---
  {
    id: 722,
    question: `**Stimulus 8: Konser K-Pop, Lightstick, dan Sistem Suara**
Konser musik K-Pop identik dengan penggunaan lightstick resmi yang dapat berubah warna secara otomatis mengikuti ketukan lagu melalui koneksi Bluetooth. Selain visual yang megah, kualitas audio yang menggelegar dari sistem suara (sound system) panggung berdaya tinggi juga menjadi kunci utama keseruan konser. Sistem suara menghasilkan gelombang bunyi dengan intensitas tinggi yang merambat melalui udara medium ke telinga penonton.

Saat konser berlangsung, seorang penonton merasakan dadanya ikut bergetar ketika mendengar suara bas yang sangat keras dari speaker panggung. Fenomena ikut bergetarnya suatu benda akibat getaran benda lain karena memiliki frekuensi alamiah yang sama disebut....`,
    image: '/images/tryout/ipa_p7_q22.PNG',
    imageCaption: 'Stimulus 8: Konser K-Pop, Lightstick, dan Sistem Suara',
    questionType: 'single',
    options: [
      'Refleksi',
      'Resonansi',
      'Interferensi',
      'Difraksi',
    ],
    correctAnswer: 1, // B (Resonansi)
    isHots: false,
    explanation: `Memahami Fenomena Resonansi Bunyi Step-by-Step:

1. Konsep Resonansi:
   Resonansi adalah peristiwa IKUT BERGETARNYA suatu benda ketika ada benda lain di dekatnya yang sedang bergetar, dengan syarat MUTLAK kedua benda tersebut memiliki frekuensi alamiah yang sama atau kelipatan bulatnya.

2. Mengapa Rongga Dada Bergetar Saat Mendengar Suara Bass?
   - Speaker panggung memompa gelombang bunyi frekuensi rendah (bass, sekitar 20 - 60 Hz) dengan daya dorong udara yang sangat kuat.
   - Rongga dada manusia memiliki frekuensi getar alami yang cocok dengan rentang frekuensi bass tersebut.
   - Gelombang suara bass yang menghantam tubuh membuat rongga dada penonton ikut bergetar secara resonansi, menghasilkan sensasi "deg-degan" yang nyata di dada.

3. Membedakan Istilah Gelombang Lainnya:
   - Refleksi: Pemantulan gelombang saat membentur dinding penghalang (gema/gaung).
   - Interferensi: Perpaduan dua gelombang yang saling menguatkan atau melemahkan.
   - Difraksi: Pembelokan gelombang saat melewati celah sempit.

Jawaban yang paling tepat adalah Opsi B (Resonansi).`,
  },

  // --- Soal 23: Analisis Sirkuit Arus Searah Lightstick ---
  {
    id: 723,
    question: `Lightstick menggunakan baterai yang mengalirkan arus searah (DC) untuk menyalakan lampu LED dan mengoperasikan modul Bluetooth. Jika sirkuit lightstick bekerja pada tegangan 4,5 V dan total hambatan dalam sirkuit adalah 15 Ω, manakah analisis kelistrikan dinamis yang benar? (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Kuat arus listrik yang mengalir dalam sirkuit lightstick adalah 0,3 Ampere.',
      'Energi listrik yang dihabiskan oleh lightstick jika dinyalakan selama 10 menit adalah 810 Joule.',
      'Jika hambatan sirkuit dinaikkan menjadi dua kali lipat sedangkan tegangan tetap, maka kuat arus listrik akan menjadi 0,6 Ampere.',
      'Daya listrik yang diserap oleh sirkuit lightstick tersebut adalah 1,35 Watt.',
    ],
    correctAnswers: [0, 1, 3], // Pernyataan 1, 2, dan 4
    isHots: false,
    explanation: `Perhitungan Sirkuit Listrik Lightstick Step-by-Step:

Langkah 1: Hitung Kuat Arus Listrik (I)
- Tegangan (V) = 4,5 Volt
- Hambatan (R) = 15 Ω
Rumus Hukum Ohm: I = V / R
I = 4,5 V / 15 Ω = 0,3 Ampere (Pernyataan 1 BENAR).

Langkah 2: Hitung Daya Listrik (P)
Daya menunjukkan laju penyerapan energi tiap detik:
Rumus Daya: P = V × I
P = 4,5 Volt × 0,3 Ampere = 1,35 Watt (Pernyataan 4 BENAR).

Langkah 3: Hitung Energi Listrik Selama 10 Menit (W)
Konversi waktu ke satuan detik SI:
t = 10 menit = 10 × 60 detik = 600 detik.
Rumus Energi: W = P × t (atau W = V × I × t)
W = 1,35 Watt × 600 detik = 810 Joule (Pernyataan 2 BENAR).

Langkah 4: Analisis Mengapa Pernyataan 3 Salah:
Jika hambatan (R) dilipatgandakan menjadi 2 kali lipat (15 Ω ➜ 30 Ω):
I_baru = V / R_baru = 4,5 / 30 = 0,15 Ampere (arusnya menjadi SETENGAHNYA, bukan melonjak menjadi 0,6 Ampere!).

Jawaban yang benar adalah Pernyataan 1, 2, dan 4.`,
  },

  // --- Soal 24: Induksi Elektromagnetik pada Sensor Getar ---
  {
    id: 724,
    question: `Di dalam sensor getar lightstick, terdapat magnet silinder kecil yang bergerak bebas melewati kumparan kawat halus saat gelang digoyang-goyangkan. Gerakan magnet ini menghasilkan arus listrik kecil yang dideteksi oleh mikrokontroler sebagai input ketukan.

Prinsip fisika yang mendasari timbulnya arus listrik akibat gerakan magnet di dalam kumparan ini adalah....`,
    questionType: 'single',
    options: [
      'Gaya Lorentz',
      'Induksi Elektromagnetik',
      'Efek Oersted',
      'Deklinasi Magnetik',
    ],
    correctAnswer: 1, // B (Induksi Elektromagnetik)
    isHots: false,
    explanation: `Konsep Induksi Elektromagnetik Step-by-Step:

1. Apa itu Induksi Elektromagnetik?
   Induksi elektromagnetik adalah peristiwa timbulnya beda potensial (Gaya Gerak Listrik / GGL induksi) pada ujung-ujung kumparan kawat akibat adanya perubahan jumlah garis gaya magnet (fluks magnetik) yang melingkupi kumparan tersebut.

2. Mengapa Gerakan Magnet Menghasilkan Arus?
   - Saat magnet silinder bergerak maju-mundur menembus kumparan, kutub magnet mendekat dan menjauh.
   - Garis gaya magnet yang menembus lingkaran kawat terus bertambah dan berkurang secara bolak-balik.
   - Perubahan fluks magnetik ini mendorong elektron-elektron bebas di dalam kawat bergerak mengalir, menghasilkan arus listrik kecil (arus induksi). Penemuan fenomenal ini dicetuskan oleh Michael Faraday.

3. Membedakan Istilah Magnet Lainnya:
   - Gaya Lorentz: Gaya dorong/tarik yang dialami kawat berarus listrik saat berada di dalam medan magnet.
   - Efek Oersted: Arus listrik menghasilkan medan magnet di sekeliling kawat (kebalikan dari Faraday).
   - Deklinasi Magnetik: Sudut penyimpangan antara kutub magnet jarum kompas dengan kutub utara geografis bumi.

Jawaban yang paling tepat adalah Opsi B (Induksi Elektromagnetik).`,
  },

  // ==========================================
  // STIMULUS 9: Tes DNA Silsilah (DNA Ancestry Test) yang Viral
  // ==========================================

  // --- Soal 25: Pewarisan Materi Genetik Manusia ---
  {
    id: 725,
    question: `**Stimulus 9: Tes DNA Silsilah (DNA Ancestry Test) yang Viral**
Banyak konten kreator Gen Z di YouTube membuat video reaksi saat membuka hasil "DNA Ancestry Test" dari layanan komersial. Dengan hanya mengirimkan sampel air liur, mereka dapat mengetahui persentase asal-usul etnis nenek moyang mereka hingga ribuan tahun ke belakang dengan menganalisis DNA mitokondria dan kromosom Y.

Seorang remaja laki-laki mendapatkan hasil tes DNA yang menunjukkan bahwa ia memiliki penanda genetik langka pada kromosom Y-nya yang persis sama dengan populasi di Asia Timur. Berdasarkan prinsip pewarisan sifat manusia, manakah pernyataan yang benar mengenai pewarisan materi genetik tersebut? (Pilihlah dua atau lebih jawaban yang benar!)`,
    image: '/images/tryout/ipa_p7_q25.PNG',
    imageCaption: 'Stimulus 9: Tes DNA Silsilah (DNA Ancestry Test) yang Viral',
    questionType: 'complex',
    options: [
      'Remaja tersebut pasti mewarisi kromosom Y tersebut langsung dari garis keturunan ayahnya (ayah, kakek dari pihak ayah, dan seterusnya).',
      'Kromosom Y dapat diwariskan dari garis keturunan ibu jika terjadi mutasi genetik dominan pada sel telur.',
      'DNA mitokondria yang dianalisis dalam tes tersebut diwariskan secara eksklusif dari ibu kepada seluruh anak-anaknya (laki-laki maupun perempuan).',
      'Kromosom tubuh (autosom) tidak berperan dalam menentukan asal-usul etnis karena jumlahnya selalu berubah setiap generasi.',
    ],
    correctAnswers: [0, 2], // Pernyataan 1 dan 3
    isHots: false,
    explanation: `Konsep Pewarisan Materi Genetik Manusia Step-by-Step:

1. Pewarisan Kromosom Seks (Gonosom):
   - Pasangan kromosom seks wanita adalah XX, sedangkan pria adalah XY.
   - Seorang anak laki-laki mewarisi kromosom X dari sel telur ibu dan kromosom Y dari sperma ayah.
   - Kromosom Y HANYA ada pada laki-laki dan diwariskan secara murni turun-temurun dari ayah ➜ anak laki-laki ➜ cucu laki-laki (jalur patrilineal tanpa bercampur DNA ibu). Jadi Pernyataan 1 BENAR.

2. Mengapa Pernyataan 2 Salah?
   Ibu memiliki kromosom XX dan tidak memiliki kromosom Y sama sekali di seluruh sel tubuhnya. Sel telur tidak mungkin membawa kromosom Y dalam kondisi apa pun.

3. Pewarisan DNA Mitokondria (mtDNA) [BENAR - Pernyataan 3]:
   - Di dalam sel telur ibu terdapat ribuan organel mitokondria yang memiliki DNA sendiri (mtDNA).
   - Saat pembuahan, hanya kepala sperma (yang berisi inti DNA) yang masuk ke sel telur; ekor sperma (yang membawa mitokondria ayah) putus dan ditinggalkan di luar.
   - Seluruh mitokondria pada janin 100% berasal dari sel telur IBU. Oleh karena itu, mtDNA diwariskan secara eksklusif dari ibu kepada SEMUA anak-anaknya, baik anak laki-laki maupun perempuan (jalur matrilineal).

4. Mengapa Pernyataan 4 Salah?
   Kromosom tubuh (autosom) manusia normal selalu berjumlah tetap 22 pasang (44 buah) pada setiap generasi. Autosom justru membawa sebagian besar informasi genetik penanda etnis dan ciri fisik manusia.

Jawaban yang benar adalah Pernyataan 1 dan 3.`,
  },
];
