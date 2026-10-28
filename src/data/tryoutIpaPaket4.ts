import { Question } from '../types';

/**
 * Bank Soal Try Out TKA SMP Resmi - IPA Paket 4 (ipa_p4)
 * 25 Soal CBT Komprehensif:
 * - Soal 1-10: Pilihan Ganda Tunggal (Single Choice)
 * - Soal 11-20: Pilihan Ganda Kompleks (Pilih 2 Jawaban Benar)
 * - Soal 21-25: Benar / Salah (True / False)
 * Dilengkapi Evaluasi Kunci Jawaban & Pembahasan Mendalam (Langkah Step-by-Step Ramah Siswa)
 */
export const TRYOUT_IPA_PAKET_4: Question[] = [
  // ==========================================
  // BAGIAN I: PILIHAN GANDA TUNGGAL (SOAL 1 - 10)
  // ==========================================

  // --- Soal 1: Pemuaian Bimetal ---
  {
    id: 401,
    question: `Sebuah bimetal terdiri dari logam tembaga (koefisien muai panjang 1,7 × 10⁻⁵/°C) dan besi (koefisien muai panjang 1,2 × 10⁻⁵/°C). Jika bimetal tersebut dipanaskan, maka peristiwa yang akan terjadi adalah...`,
    questionType: 'single',
    options: [
      'Bimetal tetap lurus karena pemuaian kedua logam seimbang.',
      'Bimetal melengkung ke arah besi karena besi memuai lebih panjang.',
      'Bimetal melengkung ke arah tembaga karena besi memuai lebih pendek.',
      'Bimetal melengkung ke arah besi karena tembaga memuai lebih panjang.',
    ],
    correctAnswer: 3, // D
    isHots: false,
    explanation: `Konsep Dasar Pemuaian Bimetal Step-by-Step:

1. Apa itu Bimetal?
   Bimetal adalah dua keping logam berbeda jenis yang direkatkan atau dikeling menjadi satu lempeng utuh.

2. Membaca Koefisien Muai Panjang (α):
   - Tembaga: α = 1,7 × 10⁻⁵/°C (Nilai lebih BESAR) ➜ Memuai lebih cepat dan memanjang lebih banyak saat dipanaskan.
   - Besi: α = 1,2 × 10⁻⁵/°C (Nilai lebih KECIL) ➜ Memuai lebih lambat dan memanjang lebih sedikit saat dipanaskan.

3. Mengapa Melengkung ke Arah Besi?
   - Karena kedua keping menempel rapat, keping tembaga yang menjadi lebih panjang akan mendesak dan "melingkupi" keping besi yang lebih pendek.
   - Analogi mudah: Bayangkan dua orang bergandengan tangan sambil berlari. Orang di sisi luar melangkah lebih panjang dan cepat, sehingga laju mereka berbelok melengkung ke arah orang yang melangkah pendek.
   - Jadi, bimetal saat DIPANASKAN selalu melengkung ke arah logam yang koefisien muainya LEBIH KECIL (yaitu ke arah BESI, karena tembaga memuai lebih panjang).

Jawaban yang paling tepat adalah Opsi D.`,
  },

  // --- Soal 2: Hukum II Newton ---
  {
    id: 402,
    question: `Sebuah mobil mainan bermassa 2 kg ditarik dengan gaya sebesar 10 N di atas permukaan lantai yang licin tanpa gesekan. Percepatan yang dialami oleh mobil mainan tersebut adalah...`,
    questionType: 'single',
    options: [
      '2 m/s²',
      '5 m/s²',
      '10 m/s²',
      '20 m/s²',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Perhitungan Hukum II Newton Step-by-Step:

1. Data yang Diketahui:
   - Massa benda (m) = 2 kg
   - Gaya penarik (F) = 10 N (Newton)
   - Permukaan licin (gaya gesek diabaikan)

2. Rumus Hukum II Newton:
   F = m × a
   Maka untuk mencari percepatan (a):
   a = F / m

3. Masukkan Nilai Angka:
   a = 10 N / 2 kg = 5 m/s²

4. Artinya Apa?
   Setiap detik berlalu, kecepatan mobil mainan tersebut bertambah kencang sebesar 5 meter per detik (m/s).

Jawaban yang paling tepat adalah Opsi B (5 m/s²).`,
  },

  // --- Soal 3: Rantai Makanan & Ekosistem ---
  {
    id: 403,
    question: `Perhatikan rantai makanan berikut:
Fitoplankton ➜ Zooplankton ➜ Ikan Kecil ➜ Ikan Besar

Jika populasi ikan kecil mengalami penurunan drastis akibat pencemaran air, dampak langsung yang akan terjadi pada ekosistem tersebut adalah...`,
    questionType: 'single',
    options: [
      'Populasi zooplankton menurun dan populasi ikan besar meningkat.',
      'Populasi zooplankton meningkat dan populasi ikan besar menurun.',
      'Populasi fitoplankton meningkat dan populasi ikan besar meningkat.',
      'Populasi zooplankton meningkat dan populasi fitoplankton meningkat.',
    ],
    correctAnswer: 1, // B
    isHots: true,
    explanation: `Analisis Efek Domino Jaring-Jaring Makanan Step-by-Step:

1. Urutan Rantai Makanan:
   Fitoplankton (Produsen) ➜ Zooplankton (Konsumen I) ➜ Ikan Kecil (Konsumen II) ➜ Ikan Besar (Konsumen III / Puncak).

2. Apa Peran Ikan Kecil?
   - Ikan kecil adalah PEMANGSA bagi zooplankton.
   - Ikan kecil adalah MAKANAN bagi ikan besar.

3. Jika Ikan Kecil Mati Massal (Populasi Anjlok Drastis):
   - Dampak ke Mangsanya (Zooplankton):
     Karena pemangsanya (ikan kecil) habis berkurang banyak, zooplankton hidup aman dan leluasa berkembang biak tanpa ada yang memakannya. Akibatnya populasi ZOOPLANKTON AKAN MENINGKAT.
   - Dampak ke Predatornya (Ikan Besar):
     Ikan besar kehilangan sumber makanan utamanya (ikan kecil). Akibatnya ikan besar kelaparan dan populasinya AKAN MENURUN drastis.

Jawaban yang paling tepat adalah Opsi B (Populasi zooplankton meningkat dan populasi ikan besar menurun).`,
  },

  // --- Soal 4: Organel Sel (Mitokondria) ---
  {
    id: 404,
    question: `Organel sel yang berfungsi sebagai tempat respirasi seluler untuk menghasilkan energi (ATP) adalah...`,
    questionType: 'single',
    options: [
      'Lisosom',
      'Kloroplas',
      'Mitokondria',
      'Badan Golgi',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Mengenal Fungsi Organel Sel Utama Step-by-Step:

1. Mitokondria ("The Powerhouse of the Cell"):
   - Tempat berlangsungnya respirasi aerob seluler.
   - Di sini glukosa dari makanan dibakar bersama oksigen untuk menghasilkan molekul energi siap pakai yang disebut ATP (Adenosin Trifosfat).
   - Sel otot dan sel jantung memiliki ribuan mitokondria karena memerlukan energi gerak yang amat besar.

2. Mengapa Opsi Lain Bukan Tempat Respirasi Energi?
   - Lisosom: Berisi enzim pencernaan untuk mencerna zat sisa atau memecah benda asing (penghancur intraseluler).
   - Kloroplas: Tempat terjadinya FOTOSINTESIS pada sel tumbuhan menggunakan klorofil (membuat glukosa dari sinar matahari).
   - Badan Golgi: Tempat memodifikasi, mengemas, dan menyortir protein untuk disekresikan keluar sel.

Jawaban yang paling tepat adalah Opsi C (Mitokondria).`,
  },

  // --- Soal 5: Pesawat Sederhana (Tuas / Pengungkit) ---
  {
    id: 405,
    question: `Seseorang menggunakan tuas pengungkit jenis pertama untuk mengangkat sebuah batu seberat 600 N. Jika panjang lengan beban adalah 50 cm dan panjang lengan kuasa adalah 150 cm, gaya kuasa minimal yang diperlukan untuk mengangkat batu tersebut adalah...`,
    questionType: 'single',
    options: [
      '200 N',
      '300 N',
      '400 N',
      '1.800 N',
    ],
    correctAnswer: 0, // A
    isHots: false,
    explanation: `Perhitungan Keseimbangan Tuas Step-by-Step:

1. Data yang Diketahui:
   - Berat beban (w) = 600 N
   - Panjang lengan beban (lb) = 50 cm
   - Panjang lengan kuasa (lk) = 150 cm

2. Rumus Prinsip Tuas / Pengungkit:
   w × lb = F × lk
   Di mana F adalah gaya kuasa yang kita cari.

3. Hitung Nilai Gaya Kuasa (F):
   600 N × 50 cm = F × 150 cm
   30.000 = 150 × F
   F = 30.000 / 150 = 200 N

4. Kesimpulan:
   Dengan bantuan tuas yang lengan kuasanya lebih panjang (150 cm dibanding 50 cm, keuntungan mekanis = 3), batu seberat 600 N dapat diangkat hanya dengan tenaga dorong/tekan sebesar 200 N!

Jawaban yang paling tepat adalah Opsi A (200 N).`,
  },

  // --- Soal 6: Tekanan Hidrostatis ---
  {
    id: 406,
    question: `Sebuah kapal selam berada pada kedalaman 50 meter di bawah permukaan laut. Jika massa jenis air laut adalah 1.030 kg/m³ dan percepatan gravitasi bumi 10 m/s², tekanan hidrostatis yang dialami kapal selam tersebut adalah...`,
    questionType: 'single',
    options: [
      '51.500 N/m²',
      '103.000 N/m²',
      '515.000 N/m²',
      '1.030.000 N/m²',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Perhitungan Tekanan Hidrostatis Step-by-Step:

1. Data yang Diketahui:
   - Kedalaman (h) = 50 meter
   - Massa jenis zat cair (ρ) = 1.030 kg/m³
   - Percepatan gravitasi (g) = 10 m/s²

2. Rumus Tekanan Hidrostatis:
   Ph = ρ × g × h

3. Hitung Hasilnya:
   Ph = 1.030 × 10 × 50
   Ph = 10.300 × 50
   Ph = 515.000 N/m² (atau Pascal / Pa)

4. Logika Konsep:
   Semakin dalam kapal selam menyelam, semakin berat beban kolom air di atasnya, sehingga tekanan hidrostatis yang menekan lambung kapal semakin besar. Pada kedalaman 50 meter, tekanannya mencapai 515.000 N/m² (setara dengan menopang beban 51 ton di tiap meter perseginya!).

Jawaban yang paling tepat adalah Opsi C (515.000 N/m²).`,
  },

  // --- Soal 7: Gelombang Mekanik (Cepat Rambat) ---
  {
    id: 407,
    question: `Sebuah gelombang merambat pada seutas tali dengan frekuensi 10 Hz. Jika jarak antara dua bukit gelombang yang berdekatan adalah 2 meter, cepat rambat gelombang tersebut adalah...`,
    questionType: 'single',
    options: [
      '5 m/s',
      '10 m/s',
      '20 m/s',
      '40 m/s',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Perhitungan Cepat Rambat Gelombang Step-by-Step:

1. Memahami Arti "Jarak Dua Bukit Berdekatan":
   Pada gelombang transversal, jarak antara dua puncak (bukit) gelombang yang berdekatan persis sama dengan satu panjang gelombang penuh (λ = lambda).
   Jadi: λ = 2 meter.

2. Data yang Diketahui:
   - Panjang gelombang (λ) = 2 meter
   - Frekuensi gelombang (f) = 10 Hz (artinya terjadi 10 gelombang dalam satu detik)

3. Rumus Cepat Rambat Gelombang (v):
   v = λ × f

4. Masukkan Angka:
   v = 2 m × 10 Hz = 20 m/s

Jawaban yang paling tepat adalah Opsi C (20 m/s).`,
  },

  // --- Soal 8: Hukum Coulomb ---
  {
    id: 408,
    question: `Dua buah muatan listrik masing-masing sebesar +2 µC dan +4 µC terpisah pada jarak 3 cm di udara. Jika konstanta Coulomb k = 9 × 10⁹ N·m²/C², besar gaya tolak-menolak antara kedua muatan tersebut adalah...`,
    questionType: 'single',
    options: [
      '8 N',
      '80 N',
      '240 N',
      '800 N',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Perhitungan Hukum Coulomb Step-by-Step:

1. Konversi Satuan ke Standar Internasional (SI):
   - q₁ = +2 µC = 2 × 10⁻⁶ C
   - q₂ = +4 µC = 4 × 10⁻⁶ C
   - Jarak (r) = 3 cm = 0,03 m = 3 × 10⁻² m
   - Jarak kuadrat (r²) = (3 × 10⁻²)² = 9 × 10⁻⁴ m²
   - Konstanta (k) = 9 × 10⁹ N·m²/C²

2. Rumus Hukum Coulomb:
   F = k × (q₁ × q₂) / r²

3. Masukkan Nilai Angka:
   F = (9 × 10⁹) × [(2 × 10⁻⁶) × (4 × 10⁻⁶)] / (9 × 10⁻⁴)
   F = (9 × 10⁹) × [8 × 10⁻¹²] / (9 × 10⁻⁴)
   Perhatikan angka 9 di pembilang dan penyebut saling mencoret:
   F = 8 × (10⁹ × 10⁻¹² / 10⁻⁴)
   F = 8 × (10⁻³ / 10⁻⁴)
   F = 8 × 10¹ = 80 N

4. Sifat Gaya:
   Karena kedua muatan bertanda sama (sama-sama positif), kedua muatan tolak-menolak sebesar 80 Newton.

Jawaban yang paling tepat adalah Opsi B (80 N).`,
  },

  // --- Soal 9: Rangkaian Paralel & Hukum Ohm ---
  {
    id: 409,
    question: `Perhatikan rangkaian listrik sederhana berikut! Tiga buah hambatan masing-masing sebesar 2 Ω, 3 Ω, dan 6 Ω dirangkai secara paralel, kemudian dihubungkan dengan sumber tegangan 12 Volt. Kuat arus utama yang mengalir dalam rangkaian tersebut adalah...`,
    questionType: 'single',
    options: [
      '1 A',
      '4 A',
      '12 A',
      '24 A',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Langkah Penyelesaian Rangkaian Listrik Step-by-Step:

Langkah 1: Hitung Hambatan Pengganti Paralel (Rp)
Rumus paralel:
1/Rp = 1/R₁ + 1/R₂ + 1/R₃
1/Rp = 1/2 + 1/3 + 1/6

Samakan penyebutnya menjadi 6:
1/Rp = 3/6 + 2/6 + 1/6
1/Rp = (3 + 2 + 1) / 6 = 6/6 = 1
Maka: Rp = 1 Ω

Langkah 2: Hitung Kuat Arus Total (I) dengan Hukum Ohm
Rumus: I = V / Rp
- Tegangan baterai (V) = 12 Volt
- Hambatan total (Rp) = 1 Ω
I = 12 Volt / 1 Ω = 12 Ampere (A)

Jawaban yang paling tepat adalah Opsi C (12 A).`,
  },

  // --- Soal 10: Gaya Lorentz ---
  {
    id: 410,
    question: `Sebuah kawat penghantar sepanjang 2 meter berada tegak lurus dalam medan magnet homogen sebesar 0,5 Tesla. Jika kawat tersebut dialiri arus listrik sebesar 4 Ampere, besar gaya Lorentz yang dialami oleh kawat adalah...`,
    questionType: 'single',
    options: [
      '1 N',
      '2 N',
      '4 N',
      '8 N',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Perhitungan Gaya Lorentz Step-by-Step:

1. Data yang Diketahui:
   - Panjang kawat (L) = 2 meter
   - Medan magnet (B) = 0,5 Tesla
   - Kuat arus listrik (I) = 4 Ampere
   - Posisi tegak lurus: sudut θ = 90° ➜ sin 90° = 1

2. Rumus Gaya Lorentz pada Kawat Berarus:
   F = B × I × L × sin θ

3. Masukkan Nilai Angka:
   F = 0,5 T × 4 A × 2 m × 1
   F = 2 × 2 = 4 Newton (N)

Jawaban yang paling tepat adalah Opsi C (4 N).`,
  },

  // ==========================================
  // BAGIAN II: PILIHAN GANDA KOMPLEKS (SOAL 11 - 20)
  // ==========================================

  // --- Soal 11: Campuran Homogen (Larutan) ---
  {
    id: 411,
    question: `Udara bersih, air sirup, dan kuningan merupakan contoh materi di sekitar kita. Pernyataan berikut yang benar mengenai sifat campuran homogen (larutan) adalah... (Pilihlah DUA jawaban yang paling tepat!)`,
    questionType: 'complex',
    options: [
      'Komponen penyusunnya dapat dibedakan secara kasat mata tanpa alat bantu.',
      'Memiliki komposisi zat penyusun yang serba sama di setiap bagiannya.',
      'Zat terlarut dan pelarutnya tidak dapat dipisahkan dengan penyaringan biasa.',
      'Selalu menghasilkan endapan jika didiamkan dalam waktu yang lama.',
    ],
    correctAnswers: [1, 2], // B dan C
    isHots: false,
    explanation: `Ciri-Ciri Campuran Homogen (Larutan) Step-by-Step:

1. Pengertian Campuran Homogen:
   Campuran homogen adalah campuran dua zat atau lebih di mana partikel-partikel penyusunnya tersebar secara merata sempurna (serba sama) di seluruh bagian (Pernyataan B BENAR). Contoh: saat kamu minum sirup manis, rasa manis di sendok pertama sama persis dengan rasa manis di sendok terakhir karena komposisinya serba sama!

2. Mengapa Tidak Bisa Disaring dengan Kertas Saring Biasa?
   Ukuran partikel zat terlarut pada campuran homogen sangatlah renik (tingkat molekul, kurang dari 1 nanometer). Akibatnya, partikel tersebut lolos menembus pori-pori kertas saring biasa tanpa meninggalkan endapan residu (Pernyataan C BENAR).

3. Mengapa Pilihan Lain Salah?
   - Opsi A Salah: Campuran homogen TIDAK BISA dibedakan batas antar-komponennya dengan mata biasa. Jika masih bisa dibedakan (misal air bercampur pasir), itu adalah campuran HETEROGEN.
   - Opsi D Salah: Campuran homogen bersifat stabil dan TIDAK AKAN mengendap meskipun didiamkan berhari-hari.

Dua jawaban yang benar adalah Opsi B dan C.`,
  },

  // --- Soal 12: Karakteristik Planet Luar (Jovian) ---
  {
    id: 412,
    question: `Planet-planet di tata surya dikelompokkan menjadi planet dalam dan planet luar berdasarkan batas sabuk asteroid. Karakteristik yang tepat mengenai kelompok planet luar (Yupiter, Saturnus, Uranus, Neptunus) adalah... (Pilihlah DUA jawaban yang paling tepat!)`,
    questionType: 'complex',
    options: [
      'Memiliki ukuran tubuh yang relatif kecil dan padat berbatu.',
      'Sebagian besar komponen penyusunnya terdiri dari gas hidrogen dan helium.',
      'Memiliki waktu revolusi yang jauh lebih lambat dibanding bumi.',
      'Tidak memiliki sistem cincin di sekeliling planetnya.',
    ],
    correctAnswers: [1, 2], // B dan C
    isHots: false,
    explanation: `Ciri Khas Planet Luar (Planet Gas Raksasa / Jovian):

1. Terdiri dari Gas (Gas Giants):
   Planet luar (Yupiter, Saturnus, Uranus, Neptunus) tidak memiliki permukaan tanah padat seperti bumi, melainkan tersusun atas gas hidrogen, helium, dan metana cair-padat bersuhu dingin beku (Pernyataan B BENAR).

2. Periode Revolusi Sangat Lambat (Tahun Sangat Panjang):
   Karena jarak orbitnya yang amat sangat jauh dari Matahari, lintasan orbitnya sangat panjang dan kecepatan orbitnya lebih pelan.
   - Bumi mengelilingi matahari butuh 1 tahun.
   - Yupiter butuh 12 tahun bumi, dan Neptunus butuh 165 tahun bumi untuk 1 kali putaran revolusi (Pernyataan C BENAR).

3. Mengapa Opsi Lain Salah?
   - Opsi A Salah: Planet luar berukuran RAKSASA (bukan kecil). Planet kecil padat berbatu adalah planet dalam (Merkurius, Venus, Bumi, Mars).
   - Opsi D Salah: Semua planet luar MEMILIKI CINCIN (paling megah Saturnus, tetapi Yupiter, Uranus, dan Neptunus juga memiliki cincin debu gas tipis).

Dua jawaban yang benar adalah Opsi B dan C.`,
  },

  // --- Soal 13: Sistem Reproduksi Pria (Cairan Semen) ---
  {
    id: 413,
    question: `Organ reproduksi pria memiliki berbagai saluran dan kelenjar yang mendukung proses spermatogenesis dan ejakulasi. Dua organ berikut yang berfungsi menghasilkan cairan semen pelindung dan pemberi nutrisi bagi sperma adalah... (Pilihlah DUA jawaban yang paling tepat!)`,
    questionType: 'complex',
    options: [
      'Vesikula seminalis',
      'Epididimis',
      'Kelenjar prostat',
      'Testis',
    ],
    correctAnswers: [0, 2], // A dan C
    isHots: false,
    explanation: `Fungsi Kelenjar Aksesoris Reproduksi Pria Step-by-Step:

1. Kelenjar yang Menghasilkan Cairan Semen (Air Mani):
   - Vesikula Seminalis (Kantung Mani): Menghasilkan cairan kental kekuningan kaya akan gula fruktosa yang berfungsi sebagai "bekal makanan/nutrisi berenergi" bagi sel sperma agar mampu berenang lincah (Pilihan A BENAR).
   - Kelenjar Prostat: Menghasilkan cairan putih keabuan bersifat basa/alkalis yang berfungsi menetralkan asam pada saluran uretra pria dan vagina wanita, sehingga sperma terlindungi dan tidak mati terbunuh keasaman (Pilihan C BENAR).

2. Apa Fungsi Organ Lainnya?
   - Testis: Berfungsi sebagai pabrik utama pembuat sel sperma dan hormon testosteron.
   - Epididimis: Saluran berkelok-kelok tempat pematangan dan penyimpanan sementara sel sperma hingga matang sempurna dan punya ekor gerak.

Dua jawaban yang benar adalah Opsi A dan C.`,
  },

  // --- Soal 14: Persilangan Monohibrid Dominan Penuh (F2) ---
  {
    id: 414,
    question: `Persilangan monohibrid dominan penuh antara tanaman mawar merah (MM) dengan mawar putih (mm) menghasilkan keturunan F1 mawar merah (Mm). Jika F1 disilangkan sesamanya, pernyataan yang benar mengenai keturunan F2 adalah... (Pilihlah DUA jawaban yang paling tepat!)`,
    questionType: 'complex',
    options: [
      'Rasio fenotip F2 adalah 3 merah : 1 putih.',
      'Rasio genotip F2 adalah 1 MM : 2 Mm : 1 mm.',
      'Semua keturunan F2 akan berwarna merah.',
      'Rasio fenotip F2 adalah 1 merah : 2 merah muda : 1 putih.',
    ],
    correctAnswers: [0, 1], // A dan B
    isHots: false,
    explanation: `Papan Catur Persilangan F1 × F1 (Mm × Mm) Step-by-Step:

1. Gamet Induk: M dan m dari masing-masing parental.

2. Hasil Kotak Punnett Keturunan F2:
   ---------------------------------
   | Gamet |      M      |      m      |
   ---------------------------------
   |   M   |   MM (Merah)|   Mm (Merah)|
   ---------------------------------
   |   m   |   Mm (Merah)|   mm (Putih)|
   ---------------------------------

3. Evaluasi Rasio:
   - Rasio Genotip F2:
     1 MM : 2 Mm : 1 mm (Pernyataan B BENAR).
   - Rasio Fenotip F2 (karena M dominan penuh terhadap m):
     * Berwarna Merah = MM (1) + Mm (2) = 3 bagian
     * Berwarna Putih = mm (1) = 1 bagian
     Rasio Fenotip = 3 Merah : 1 Putih (Pernyataan A BENAR).
   - Rasio 1:2:1 pada fenotip (merah muda) hanya terjadi jika sifatnya intermediet/kodominan, bukan dominan penuh.

Dua jawaban yang benar adalah Opsi A dan B.`,
  },

  // --- Soal 15: Gas Rumah Kaca & Pemanasan Global ---
  {
    id: 415,
    question: `Aktivitas manusia seperti pembakaran bahan bakar fosil dan penggundulan hutan memicu terjadinya pemanasan global. Gas-gas berikut yang berperan langsung sebagai gas rumah kaca penyebab utama fenomena tersebut adalah... (Pilihlah DUA jawaban yang paling tepat!)`,
    questionType: 'complex',
    options: [
      'Karbon dioksida (CO₂)',
      'Oksigen (O₂)',
      'Metana (CH₄)',
      'Nitrogen (N₂)',
    ],
    correctAnswers: [0, 2], // A dan C
    isHots: false,
    explanation: `Mengenal Gas Rumah Kaca (Greenhouse Gases) Step-by-Step:

1. Gas Rumah Kaca Utama:
   - Karbon dioksida (CO₂): Berasal dari emisi knalpot kendaraan, asap PLTU batu bara, kebakaran dan penggundulan hutan. Gas inilah penyumbang terbesar efek rumah kaca global (Pilihan A BENAR).
   - Metana (CH₄): Berasal dari pembusukan kotoran ternak sapi, lahan persawahan basah, dan tumpukan sampah TPA. Gas metana memiliki daya tangkap panas radiasi 25 kali lebih kuat dari CO₂ (Pilihan C BENAR).
   - Uap air (H₂O) dan Dinitrogen oksida (N₂O).

2. Mengapa Oksigen dan Nitrogen Bukan Gas Rumah Kaca?
   Nitrogen (N₂, 78%) dan Oksigen (O₂, 21%) adalah gas molekul dwiatom sederhana yang tembus pandang terhadap radiasi inframerah, sehingga tidak memerangkap panas matahari di atmosfer.

Dua jawaban yang benar adalah Opsi A dan C.`,
  },

  // --- Soal 16: Rekayasa Arus Listrik (Hukum Ohm) ---
  {
    id: 416,
    question: `Perhatikan rangkaian listrik yang terdiri dari hambatan dalam baterai. Untuk memperkecil hambatan total dan memperbesar arus listrik yang mengalir pada rangkaian utama, langkah yang dapat dilakukan adalah... (Pilihlah DUA jawaban yang paling tepat!)`,
    questionType: 'complex',
    options: [
      'Menyusun beberapa hambatan luar secara paralel.',
      'Menyusun beberapa hambatan luar secara seri.',
      'Menambah jumlah baterai yang disusun secara seri.',
      'Mengurangi jumlah baterai yang disusun secara seri.',
    ],
    correctAnswers: [0, 2], // A dan C
    isHots: true,
    explanation: `Analisis Cara Memperbesar Arus Listrik Step-by-Step:

1. Rumus Dasar Hukum Ohm:
   I = V / R_total
   Untuk membuat arus (I) menjadi lebih besar, ada dua jalur strategi:
   - Strategi 1: Memperkecil Hambatan (R)
   - Strategi 2: Memperbesar Tegangan (V)

2. Memperkecil Hambatan Luar:
   - Jika resistor disusun SERI: Hambatan total justru MAKIN BESAR ($R_s = R_1 + R_2$).
   - Jika resistor disusun PARALEL: Hambatan total akan MENJADI LEBIH KECIL dari nilai resistor terkecilnya! Maka menyusun hambatan secara paralel memperkecil hambatan dan mendongkrak arus (Pernyataan A BENAR).

3. Memperbesar Tegangan (Beda Potensial):
   - Baterai yang disusun SERI akan menjumlahkan tegangannya ($V_{total} = V_1 + V_2 + ...$).
   - Tegangan makin tinggi ➜ Arus listrik yang didorong mengalir makin deras dan besar (Pernyataan C BENAR).

Dua jawaban yang benar adalah Opsi A dan C.`,
  },

  // --- Soal 17: Fluida Statis (Archimedes & Tekanan Hidrostatis) ---
  {
    id: 417,
    question: `Tekanan zat cair dipengaruhi oleh beberapa faktor fisis. Berdasarkan konsep Hukum Archimedes dan Tekanan Hidrostatis, pernyataan yang benar adalah... (Pilihlah DUA jawaban yang paling tepat!)`,
    questionType: 'complex',
    options: [
      'Gaya apung ke atas sebanding dengan volume zat cair yang dipindahkan oleh benda.',
      'Tekanan hidrostatis di dasar wadah bergantung pada bentuk wadah tersebut.',
      'Tekanan hidrostatis akan semakin besar seiring bertambahnya kedalaman zat cair.',
      'Benda akan melayang jika massa jenis benda lebih besar daripada massa jenis zat cair.',
    ],
    correctAnswers: [0, 2], // A dan C
    isHots: false,
    explanation: `Memahami Hukum Archimedes dan Tekanan Hidrostatis Step-by-Step:

1. Bunyi Hukum Archimedes:
   "Gaya apung ke atas (Fa) yang dialami benda yang tercelup sama dengan berat zat cair yang dipindahkan."
   Fa = ρ_cair × g × V_tercelup
   Semakin besar volume bagian benda yang tenggelam memindahkan air, semakin besar pula gaya apung ke atas yang menopangnya (Pernyataan A BENAR).

2. Tekanan Hidrostatis:
   Ph = ρ × g × h
   Nilai tekanan hidrostatis hanya bergantung pada massa jenis zat cair (ρ), gravitasi (g), dan kedalaman (h).
   - Semakin dalam suatu titik dari permukaan (h bertambah), tekanan hidrostatisnya PASTI SEMAKIN BESAR (Pernyataan C BENAR).
   - Tekanan hidrostatis TIDAK BERGANTUNG pada bentuk atau luas penampang wadah (Pernyataan B SALAH).
   - Benda akan TENGGELAM (bukan melayang) jika massa jenisnya lebih besar dari zat cair (Pernyataan D SALAH).

Dua jawaban yang benar adalah Opsi A dan C.`,
  },

  // --- Soal 18: Prinsip Kerja Pesawat Sederhana ---
  {
    id: 418,
    question: `Pesawat sederhana digunakan untuk mempermudah pekerjaan manusia. Pernyataan yang benar mengenai prinsip kerja pesawat sederhana adalah... (Pilihlah DUA jawaban yang paling tepat!)`,
    questionType: 'complex',
    options: [
      'Bidang miring memperkecil gaya yang diperlukan dengan cara memperpanjang lintasan.',
      'Katrol tetap berfungsi untuk memperbesar gaya kuasa hingga dua kali lipat.',
      'Pengungkit jenis kedua meletakkan titik beban di antara titik tumpu dan titik kuasa.',
      'Keuntungan mekanis katrol bergerak bernilai sama dengan satu.',
    ],
    correctAnswers: [0, 2], // A dan C
    isHots: false,
    explanation: `Prinsip Kerja Pesawat Sederhana Step-by-Step:

1. Bidang Miring:
   - Keuntungan mekanis KM = s / h.
   - Dengan membuat papan lintasan miring lebih panjang (s membesar), gaya dorong yang dibutuhkan menjadi jauh lebih kecil. Gaya diperkecil dengan kompromi menempuh jarak yang lebih jauh (Pernyataan A BENAR).

2. Pengungkit Jenis Kedua (Beban di Tengah):
   - Susunan titiknya: Titik Tumpu ➜ Beban ➜ Kuasa.
   - Contoh nyata: Gerobak roda satu (dorong semen), alat pemotong kertas, pembuka tutup botol (Pernyataan C BENAR).

3. Mengapa Pilihan B dan D Salah?
   - Katrol Tetap: Keuntungan mekanisnya adalah 1 (KM = 1). Fungsinya HANYA mengubah arah gaya (menarik ke bawah lebih gampang daripada mengangkat ke atas), bukan memperbesar gaya kuasa.
   - Katrol Bergerak: Memiliki keuntungan mekanis 2 (KM = 2), bukan 1.

Dua jawaban yang benar adalah Opsi A dan C.`,
  },

  // --- Soal 19: Karakteristik Gelombang Bunyi ---
  {
    id: 419,
    question: `Gelombang bunyi merupakan gelombang longitudinal yang memerlukan medium untuk merambat. Pernyataan yang benar mengenai karakteristik gelombang bunyi adalah... (Pilihlah DUA jawaban yang paling tepat!)`,
    questionType: 'complex',
    options: [
      'Bunyi merambat paling cepat pada medium zat padat dibanding zat cair dan gas.',
      'Tinggi rendahnya nada bunyi ditentukan oleh amplitudo gelombang.',
      'Kuat lemahnya bunyi yang terdengar ditentukan oleh frekuensi gelombang.',
      'Bunyi tidak dapat merambat di dalam ruang hampa udara (vakum).',
    ],
    correctAnswers: [0, 3], // A dan D
    isHots: false,
    explanation: `Karakteristik Gelombang Bunyi Step-by-Step:

1. Kecepatan Rambat Bunyi pada Medium:
   - Bunyi merambat melalui getaran tumbukan antar-partikel.
   - Pada ZAT PADAT, partikel-partikel tersusun sangat rapat dan terikat kuat, sehingga getaran bunyi diteruskan paling cepat (misal pada rel kereta api baja ~5.000 m/s).
   - Di air ~1.500 m/s, dan di udara gas paling lambat ~340 m/s (Pernyataan A BENAR).

2. Bunyi Wajib Memiliki Medium Perantara (Gelombang Mekanik):
   - Karena butuh partikel medium untuk merambat, bunyi SAMA SEKALI TIDAK BISA MERAMBAT di ruang hampa udara / antariksa vakum (Pernyataan D BENAR). Astronaut di luar angkasa harus memakai gelombang radio untuk saling berbicara.

3. Miskonsepsi Nada vs Kekuatan Bunyi:
   - Tinggi-rendahnya NADA ditentukan oleh FREKUENSI (makin tinggi frekuensi, makin melengking nadanya).
   - Kuat-lemahnya BUNYI (keras/pelan suara) ditentukan oleh AMPLITUDO (makin besar simpangan gelombang, suara makin keras menggelegar).
   - Pilihan B dan C terbalik definisinya.

Dua jawaban yang benar adalah Opsi A dan D.`,
  },

  // --- Soal 20: Perbedaan Sel Hewan vs Sel Tumbuhan ---
  {
    id: 420,
    question: `Sel hewan dan sel tumbuhan memiliki beberapa perbedaan struktur organel yang spesifik sesuai dengan fungsinya. Organel yang hanya dimiliki oleh sel tumbuhan dan tidak dimiliki oleh sel hewan adalah... (Pilihlah DUA jawaban yang paling tepat!)`,
    questionType: 'complex',
    options: [
      'Dinding sel',
      'Sentriol',
      'Kloroplas',
      'Lisosom',
    ],
    correctAnswers: [0, 2], // A dan C
    isHots: false,
    explanation: `Organel Eksklusif Sel Tumbuhan Step-by-Step:

1. Dua Organel Khas Sel Tumbuhan:
   - Dinding Sel: Lapisan luar kaku tersusun atas serat selulosa tebal. Fungsinya memberi bentuk sel tetap kokoh, melindungi isi sel, dan memungkinkan pohon berdiri tegak menjulang (Pilihan A BENAR).
   - Kloroplas (Plastida): Pabrik pembuat makanan berwarna hijau yang mengandung pigmen klorofil untuk menangkap cahaya matahari dalam proses fotosintesis (Pilihan C BENAR).

2. Organel yang Dimiliki Sel Hewan (Bukan Tumbuhan):
   - Sentriol: Membantu proses pembelahan sel pada hewan.
   - Lisosom: Berisi enzim pencerna zat sisa pada hewan.

Dua jawaban yang benar adalah Opsi A dan C.`,
  },

  // ==========================================
  // BAGIAN III: BENAR / SALAH (SOAL 21 - 25)
  // ==========================================

  // --- Soal 21: Persilangan Dihibrid Heterozigot ---
  {
    id: 421,
    question: `Pernyataan:
Pada persilangan dihibrid antara tanaman ercis berbiji bulat kuning (BbKk) yang disilangkan sesamanya, peluang munculnya keturunan dengan fenotip biji keriput hijau adalah sebesar 1/16.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Persilangan Dihibrid Mendel (BbKk × BbKk) Step-by-Step:

1. Induk Heterozigot Ganda (BbKk × BbKk):
   - Sifat B (Bulat) dominan terhadap b (keriput).
   - Sifat K (Kuning) dominan terhadap k (hijau).

2. Rasio Fenotip Klasik Hukum Mendel II (Total 16 Kotak):
   - 9 bagian ➜ Bulat Kuning (B_K_)
   - 3 bagian ➜ Bulat Hijau (B_kk)
   - 3 bagian ➜ Keriput Kuning (bbK_)
   - 1 bagian ➜ Keriput Hijau (bbkk)

3. Menghitung Peluang Biji Keriput Hijau:
   Fenotip keriput hijau hanya muncul jika genotipnya homozigot resesif murni untuk kedua sifat (bbkk).
   Dari total 16 kombinasi kotak keturunan, hanya ada tepat 1 kotak yang bergenotip bbkk.
   Maka peluangnya adalah 1/16 (atau 6,25%).

Kesimpulan: Pernyataan pada soal 100% tepat dan akurat. Jawaban yang benar adalah BENAR.`,
  },

  // --- Soal 22: Bioteknologi Pembuatan Tempe ---
  {
    id: 422,
    question: `Pernyataan:
Pembuatan tempe memanfaatkan mikroorganisme berupa bakteri Lactobacillus bulgaricus melalui proses fermentasi asam laktat.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 1, // SALAH
    isHots: false,
    explanation: `Meluruskan Pasangan Mikroorganisme Produk Bioteknologi:

1. Pembuatan Tempe yang Sebenarnya:
   - Tempe dibuat dari kacang kedelai yang difermentasi oleh MIKROORGANISME JAMUR (KAPANG), bukan bakteri!
   - Spesies jamur tempe adalah Rhizopus oryzae atau Rhizopus oligosporus.
   - Jamur ini menumbuhkan benang-benang halus putih (hifa/miselium) yang mengikat butiran kedelai menjadi padat dan kompak.

2. Lalu Siapa Lactobacillus bulgaricus?
   Lactobacillus bulgaricus adalah spesies BAKTERI asam laktat yang digunakan untuk memfermentasi susu segar menjadi YOGHURT dan KEJU, bukan untuk membuat tempe!

Kesimpulan: Pernyataan bahwa pembuatan tempe memakai bakteri Lactobacillus bulgaricus adalah SALAH.`,
  },

  // --- Soal 23: Sifat Kutub Magnet yang Dipotong ---
  {
    id: 423,
    question: `Pernyataan:
Jika sebuah magnet batang dipotong menjadi dua bagian, maka masing-masing potongan magnet tersebut hanya akan memiliki satu kutub saja (monopol).

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 1, // SALAH
    isHots: false,
    explanation: `Konsep Kemagnetan Elementer Step-by-Step:

1. Apakah Monopol Magnet Bisa Ada di Alam?
   TIDAK! Sampai saat ini, tidak pernah ada magnet yang hanya memiliki satu kutub saja (monopol magnet tidak ada di dunia nyata).

2. Apa yang Terjadi Jika Magnet Batang Dipotong Menjadi Dua?
   - Magnet tersusun atas jutaan magnet elementer mikroskopis yang berjajar rapi searah (Kutub Utara mengarah ke depan, Kutub Selatan mengarah ke belakang).
   - Ketika magnet dipotong tepat di bagian tengahnya, patahan tersebut akan secara otomatis membentuk KUTUB UTARA DAN KUTUB SELATAN YANG BARU!
   - Setiap potongan patahan menjadi sebuah magnet batang utuh yang baru, lengkap dengan Kutub Utara dan Kutub Selatan.
   - Sekalipun kamu potong menjadi 1.000 bagian kecil-kecil hingga sebesar debu, setiap butir debu magnet tersebut TETAP MEMILIKI DUA KUTUB (Dipol: Utara dan Selatan)!

Kesimpulan: Pernyataan bahwa potongan magnet hanya memiliki satu kutub adalah KELIRU. Jawaban yang tepat adalah SALAH.`,
  },

  // --- Soal 24: Enzim Pencernaan di Rongga Mulut ---
  {
    id: 424,
    question: `Pernyataan:
Enzim amilase (ptialin) yang terdapat di dalam rongga mulut berfungsi untuk mengubah amilum (karbohidrat) menjadi maltosa atau glukosa.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Fungsi Enzim Ptialin / Amilase Step-by-Step:

1. Asal Enzim:
   Kelenjar saliva (air ludah) di dalam rongga mulut kita menghasilkan getah ludah yang mengandung enzim ptialin (dikenal juga sebagai alfa-amilase saliva).

2. Cara Kerja Kimiawi:
   - Makanan pokok kita (nasi, roti, kentang, jagung) mengandung zat tepung kompleks yang bernama amilum.
   - Saat kita mengunyah makanan, enzim ptialin memutus rantai polisakarida amilum yang panjang dan mengubahnya menjadi disakarida yang lebih sederhana yaitu maltosa dan molekul glukosa.

3. Pembuktian Nyata:
   Coba kunyah nasi putih tawar secara perlahan-lahan di dalam mulut selama 1-2 menit tanpa menelannya. Lama-kelamaan nasi yang awalnya hambar akan terasa manis legit di lidah. Rasa manis itu muncul karena amilum telah berhasil dirombak oleh enzim ptialin menjadi molekul gula maltosa!

Kesimpulan: Pernyataan pada soal sepenuhnya BENAR. Jawaban yang tepat adalah BENAR.`,
  },

  // --- Soal 25: Perpindahan Kalor Secara Konveksi ---
  {
    id: 425,
    question: `Pernyataan:
Air yang mendidih di dalam panci mengalami perpindahan kalor secara konveksi, di mana partikel-partikel air yang panas bergerak naik dan partikel air yang dingin bergerak turun.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Mekanisme Konveksi pada Zat Cair Step-by-Step:

1. Pengertian Konveksi (Aliran):
   Konveksi adalah proses perpindahan energi panas (kalor) yang DISERTAI DENGAN PERPINDAHAN FISIK PARTIKEL-PARTIKEL MEDIUMNYA. Konveksi terutama terjadi pada zat fluida (cairan dan gas).

2. Mengapa Air Panas Bergerak Naik?
   - Saat panci dipanaskan di atas kompor, lapisan air paling bawah menerima panas terlebih dahulu.
   - Partikel air bawah yang panas akan MEMUAI, sehingga volumenya membesar dan MASSA JENISNYA MENJADI LEBIH KECIL (lebih ringan).
   - Karena lebih ringan, air panas bergerak mengapung naik ke atas permukaan panci.

3. Mengapa Air Dingin Bergerak Turun?
   - Air di permukaan yang suhunya lebih dingin memiliki massa jenis yang LEBIH BESAR (lebih berat).
   - Air dingin ini akan tenggelam meluncur turun ke dasar panci untuk menggantikan posisi air panas tadi.
   - Sirkulasi melingkar ini membentuk ARUS KONVEKSI terus-menerus hingga seluruh air di dalam panci mendidih merata pada suhu 100°C!

Kesimpulan: Pernyataan pada soal merincikan konsep arus konveksi dengan sangat tepat. Jawaban yang benar adalah BENAR.`,
  },
];
