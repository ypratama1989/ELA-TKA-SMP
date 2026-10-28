import { Question } from '../types';

/**
 * Bank Soal Try Out TKA SMP Resmi - IPA Paket 5 (ipa_p5)
 * 25 Soal CBT Komprehensif:
 * - Soal 1-8: Pilihan Ganda Standar (Single Choice)
 * - Soal 9-20: Pilihan Ganda Kompleks (Pilihan 2 atau lebih jawaban benar)
 * - Soal 21-25: Benar / Salah (True / False)
 * Dilengkapi Evaluasi Kunci Jawaban & Pembahasan Mendalam (Step-by-Step Ramah Siswa)
 */
export const TRYOUT_IPA_PAKET_5: Question[] = [
  // ==========================================
  // BAGIAN I: PILIHAN GANDA STANDAR (SOAL 1 - 8)
  // ==========================================

  // --- Soal 1: Uji Sifat Asam Basa dengan Kertas Lakmus ---
  {
    id: 501,
    question: `Perhatikan tabel hasil pengujian sifat larutan berikut!

| Larutan | Perubahan Lakmus Merah | Perubahan Lakmus Biru |
|:---:|:---:|:---:|
| P | Merah | Merah |
| Q | Biru | Biru |
| R | Merah | Biru |
| S | Merah | Merah |

Berdasarkan data di atas, larutan yang bersifat asam adalah....`,
    questionType: 'single',
    options: [
      'P dan Q',
      'P dan S',
      'Q dan R',
      'R dan S',
    ],
    correctAnswer: 1, // B (P dan S)
    isHots: false,
    explanation: `Konsep Dasar Kertas Lakmus Step-by-Step:

1. Jembatan Keledai Kertas Lakmus:
   - Ingat kata: ASAM ➜ ujungnya berbunyi "M" ➜ Memerahkan lakmus (Semua lakmus berubah jadi MERAH).
   - Ingat kata: BASA ➜ diawali huruf "B" ➜ Membirukan lakmus (Semua lakmus berubah jadi BIRU).
   - NETRAL ➜ Santai, tidak mengubah warna kertas lakmus apa pun (Merah tetap merah, biru tetap biru).

2. Uji Masing-Masing Larutan pada Tabel:
   - Larutan P: Lakmus merah tetap MERAH, lakmus biru berubah jadi MERAH. Karena kedua lakmus berwarna MERAH, maka Larutan P adalah ASAM.
   - Larutan Q: Lakmus merah jadi BIRU, lakmus biru tetap BIRU. Kedua lakmus jadi BIRU, maka Larutan Q adalah BASA.
   - Larutan R: Lakmus merah tetap MERAH, lakmus biru tetap BIRU. Warnanya tidak ada yang berubah, maka Larutan R adalah NETRAL (contohnya air murni atau garam dapur).
   - Larutan S: Lakmus merah tetap MERAH, lakmus biru berubah jadi MERAH. Karena keduanya berwarna MERAH, maka Larutan S adalah ASAM.

3. Kesimpulan:
   Larutan yang bersifat asam adalah larutan P dan S.

Jawaban yang paling tepat adalah Opsi B (P dan S).`,
  },

  // --- Soal 2: Pemuaian Bimetal ---
  {
    id: 502,
    question: `Sebuah bimetal yang terdiri dari logam tembaga (koefisien muai panjang 1,7 × 10⁻⁵/°C) dan besi (koefisien muai panjang 1,2 × 10⁻⁵/°C) dipanaskan secara merata. Pernyataan yang benar mengenai arah kelengkungan bimetal tersebut adalah....`,
    questionType: 'single',
    options: [
      'Bimetal melengkung ke arah besi karena besi memuai lebih panjang',
      'Bimetal melengkung ke arah tembaga karena tembaga memuai lebih panjang',
      'Bimetal melengkung ke arah besi karena tembaga memuai lebih panjang daripada besi',
      'Bimetal tetap lurus karena kedua logam mengalami kenaikan suhu yang sama',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Konsep Lengkungan Bimetal Step-by-Step:

1. Arti Angka Koefisien Muai Panjang (α):
   - Tembaga = 1,7 × 10⁻⁵/°C (Lebih BESAR) ➜ Sifatnya sangat sensitif pada panas, memuai lebih panjang.
   - Besi = 1,2 × 10⁻⁵/°C (Lebih KECIL) ➜ Memuai lebih sedikit (lebih pendek daripada tembaga).

2. Kenapa Harus Melengkung?
   Karena keping tembaga dan besi direkatkan menyatu, keping tembaga yang memanjang lebih banyak akan "mendorong" keping besi yang lebih pendek.
   - Sisi yang lebih panjang (tembaga) akan berada di sisi luar lengkungan.
   - Sisi yang lebih pendek (besi) akan berada di sisi dalam lengkungan.
   - Artinya: Bimetal akan MELENGKUNG KE ARAH BESI karena tembaga memuai lebih panjang daripada besi.

3. Catatan Rumus Praktis:
   - Bimetal jika DIPANASKAN ➜ Melengkung ke arah logam yang koefisien muainya LEBIH KECIL (yaitu besi).
   - Bimetal jika DIDINGINKAN ➜ Melengkung ke arah logam yang koefisien muainya LEBIH BESAR.

Jawaban yang paling tepat adalah Opsi C.`,
  },

  // --- Soal 3: Hukum II Newton (Gaya Gesek) ---
  {
    id: 503,
    question: `Seseorang mendorong sebuah lemari bermassa 50 kg dengan gaya sebesar 200 N di atas lantai yang memiliki gaya gesek sebesar 50 N. Percepatan yang dialami oleh lemari tersebut adalah....`,
    questionType: 'single',
    options: [
      '1,0 m/s²',
      '2,0 m/s²',
      '3,0 m/s²',
      '4,0 m/s²',
    ],
    correctAnswer: 2, // C (3,0 m/s²)
    isHots: false,
    explanation: `Langkah Perhitungan Gerak Lemari Step-by-Step:

1. Catat Angka yang Diketahui:
   - Massa lemari (m) = 50 kg
   - Gaya dorong orang (F) = 200 N (arah ke depan)
   - Gaya gesek lantai (f_gesek) = 50 N (arah melawan dorongan/ke belakang)

2. Hitung Gaya Bersih / Resultan Gaya (ΣF):
   Gaya gesek selalu menghambat gerakan, jadi gaya dorong dikurangi gaya gesek:
   ΣF = F_dorong - f_gesek
   ΣF = 200 N - 50 N = 150 N

3. Hitung Percepatan (a) dengan Hukum II Newton:
   Rumus: a = ΣF / m
   a = 150 N / 50 kg = 3,0 m/s²

4. Artinya:
   Lemari tersebut meluncur makin cepat dengan tambahan kecepatan 3 meter per detik setiap detiknya.

Jawaban yang paling tepat adalah Opsi C (3,0 m/s²).`,
  },

  // --- Soal 4: Tekanan Hidrostatis Penyelam ---
  {
    id: 504,
    question: `Seorang penyelam berada pada kedalaman 15 meter di bawah permukaan air laut. Jika massa jenis air laut adalah 1.030 kg/m³ dan percepatan gravitasi bumi 10 m/s², maka tekanan hidrostatis yang dialami oleh penyelam tersebut adalah....`,
    questionType: 'single',
    options: [
      '15.450 N/m²',
      '103.000 N/m²',
      '154.500 N/m²',
      '1.545.000 N/m²',
    ],
    correctAnswer: 2, // C (154.500 N/m²)
    isHots: false,
    explanation: `Perhitungan Tekanan Hidrostatis Step-by-Step:

1. Data yang Diketahui:
   - Kedalaman penyelam dari permukaan (h) = 15 meter
   - Massa jenis zat cair / air laut (ρ) = 1.030 kg/m³
   - Percepatan gravitasi bumi (g) = 10 m/s²

2. Rumus Tekanan Hidrostatis (Ph):
   Ph = ρ × g × h

3. Masukkan Angka ke Rumus:
   Ph = 1.030 × 10 × 15
   Ph = 10.300 × 15
   Ph = 154.500 N/m² (atau Pascal / Pa)

4. Logika Konsep:
   Makin dalam penyelam turun ke dasar laut, semakin banyak volume air laut yang berada di atas kepalanya yang menekan tubuhnya. Pada kedalaman 15 meter, penyelam menerima tekanan sebesar 154.500 N/m².

Jawaban yang paling tepat adalah Opsi C (154.500 N/m²).`,
  },

  // --- Soal 5: Enzim Pencernaan Mulut ---
  {
    id: 505,
    question: `Di dalam rongga mulut terjadi pencernaan makanan secara mekanik dan kimiawi. Enzim yang berfungsi mengubah amilum menjadi maltosa di dalam mulut beserta kelenjar penghasilnya yang benar adalah....`,
    questionType: 'single',
    options: [
      'Enzim pepsin oleh kelenjar lambung',
      'Enzim amilase (ptialin) oleh kelenjar ludah',
      'Enzim lipase oleh kelenjar pankreas',
      'Enzim tripsin oleh kelenjar dinding usus',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Pencernaan Kimiawi di Rongga Mulut Step-by-Step:

1. Apa yang Terjadi di Mulut?
   - Pencernaan Mekanik: Dilakukan oleh gigi yang mengunyah dan lidah yang membolak-balikkan makanan hingga hancur menjadi butiran halus.
   - Pencernaan Kimiawi: Dilakukan oleh kelenjar saliva (kelenjar air ludah) yang menghasilkan getah ludah berisi enzim AMILASE (disebut juga enzim PTIALIN).

2. Tugas Enzim Ptialin / Amilase:
   Enzim amilase memecah zat tepung karbohidrat rantai panjang (amilum) menjadi gula disakarida yang lebih sederhana (maltosa).
   Inilah sebabnya jika kamu mengunyah nasi putih lama-lama di dalam mulut, nasi akan terasa manis legit!

3. Mengapa Opsi Lain Salah?
   - Enzim pepsin: Dihasilkan oleh lambung untuk memecah protein menjadi pepton.
   - Enzim lipase: Dihasilkan pankreas untuk mencerna lemak menjadi asam lemak dan gliserol.
   - Enzim tripsin: Dihasilkan pankreas (bekerja di usus halus) untuk memecah pepton menjadi asam amino.

Jawaban yang paling tepat adalah Opsi B.`,
  },

  // --- Soal 6: Energi Mekanik & Kinetik Jatuh Bebas ---
  {
    id: 506,
    question: `Sebuah benda bermassa 2 kg jatuh bebas dari ketinggian 20 meter di atas tanah. Jika percepatan gravitasi bumi 10 m/s², energi kinetik benda saat berada pada ketinggian 5 meter dari atas tanah adalah....`,
    questionType: 'single',
    options: [
      '100 Joule',
      '200 Joule',
      '300 Joule',
      '400 Joule',
    ],
    correctAnswer: 2, // C (300 Joule)
    isHots: false,
    explanation: `Hukum Kekekalan Energi Mekanik Step-by-Step:

1. Posisi 1 (Titik Awal: Ketinggian h₁ = 20 m):
   Benda jatuh bebas, artinya saat mula-mula dijatuhkan kecepatannya nol (v₁ = 0), sehingga energi kinetiknya nol (EK₁ = 0).
   Seluruh energi benda berupa Energi Potensial (EP₁):
   EP₁ = m × g × h₁
   EP₁ = 2 kg × 10 m/s² × 20 m = 400 Joule.
   Energi Mekanik Total (EM) = EP₁ + EK₁ = 400 J + 0 = 400 Joule (Energi ini KEKAL / tidak pernah hilang).

2. Posisi 2 (Ketinggian h₂ = 5 m di atas tanah):
   Hitung Energi Potensial yang tersisa di ketinggian 5 meter:
   EP₂ = m × g × h₂
   EP₂ = 2 kg × 10 m/s² × 5 m = 100 Joule.

3. Hitung Energi Kinetik pada Ketinggian 5 meter (EK₂):
   Karena Energi Mekanik Total selalu tetap (400 Joule):
   EM = EP₂ + EK₂
   400 Joule = 100 Joule + EK₂
   EK₂ = 400 Joule - 100 Joule = 300 Joule!

4. Logika Mudah:
   Energi potensial yang "hilang" karena benda turun setinggi 15 meter (dari 20 m ke 5 m) semuanya telah berubah menjadi kecepatan gerak / Energi Kinetik:
   EK = m × g × Δh = 2 × 10 × (20 - 5) = 2 × 10 × 15 = 300 Joule.

Jawaban yang paling tepat adalah Opsi C (300 Joule).`,
  },

  // --- Soal 7: Gaya Coulomb Antar-Muatan ---
  {
    id: 507,
    question: `Dua buah muatan listrik masing-masing sebesar +2 µC dan +5 µC terpisah pada jarak 3 cm. Jika konstanta Coulomb k = 9 × 10⁹ N·m²/C², besar gaya tolak-menolak antara kedua muatan tersebut adalah....`,
    questionType: 'single',
    options: [
      '10 N',
      '30 N',
      '100 N',
      '300 N',
    ],
    correctAnswer: 2, // C (100 N)
    isHots: false,
    explanation: `Perhitungan Gaya Coulomb Step-by-Step:

1. Ubah Satuan ke Standar Internasional (SI):
   - Muatan 1 (q₁) = +2 µC = 2 × 10⁻⁶ C
   - Muatan 2 (q₂) = +5 µC = 5 × 10⁻⁶ C
   - Jarak (r) = 3 cm = 0,03 m = 3 × 10⁻² m
   - Kuadrat jarak (r²) = (3 × 10⁻²)² = 9 × 10⁻⁴ m²
   - Konstanta Coulomb (k) = 9 × 10⁹ N·m²/C²

2. Rumus Hukum Coulomb:
   F = k × (q₁ × q₂) / r²

3. Masukkan Angka:
   F = (9 × 10⁹) × [(2 × 10⁻⁶) × (5 × 10⁻⁶)] / (9 × 10⁻⁴)
   F = (9 × 10⁹) × [10 × 10⁻¹²] / (9 × 10⁻⁴)
   Perhatikan angka 9 di atas dan di bawah saling membagi (habis menjadi 1):
   F = 10 × (10⁹ × 10⁻¹² / 10⁻⁴)
   F = 10 × (10⁻³ / 10⁻⁴)
   F = 10 × 10¹ = 100 Newton (N)

Jawaban yang paling tepat adalah Opsi C (100 N).`,
  },

  // --- Soal 8: Rangkaian Listrik Paralel & Hukum Ohm ---
  {
    id: 508,
    question: `Perhatikan rangkaian listrik berikut!
Jika tiga buah hambatan masing-masing bernilai 2 Ω, 3 Ω, dan 6 Ω dirangkai secara paralel, kemudian dihubungkan dengan sumber tegangan sebesar 12 Volt, kuat arus utama yang mengalir dalam rangkaian tersebut adalah....`,
    questionType: 'single',
    options: [
      '1 Ampere',
      '4 Ampere',
      '12 Ampere',
      '24 Ampere',
    ],
    correctAnswer: 2, // C (12 Ampere)
    isHots: false,
    explanation: `Langkah Menghitung Arus Listrik Rangkaian Step-by-Step:

Langkah 1: Menghitung Hambatan Pengganti Paralel (Rp)
Rumus untuk rangkaian paralel:
1/Rp = 1/R₁ + 1/R₂ + 1/R₃
1/Rp = 1/2 + 1/3 + 1/6

Samakan penyebut pecahan menjadi 6:
1/Rp = 3/6 + 2/6 + 1/6
1/Rp = (3 + 2 + 1) / 6 = 6/6 = 1
Maka: Rp = 1 / 1 = 1 Ω

Langkah 2: Menghitung Kuat Arus Utama (I) Menggunakan Hukum Ohm
Rumus Hukum Ohm:
I = V / Rp
- Tegangan listrik (V) = 12 Volt
- Hambatan total paralel (Rp) = 1 Ω
I = 12 Volt / 1 Ω = 12 Ampere

Jadi, arus listrik utama yang mengalir dari baterai adalah sebesar 12 Ampere.

Jawaban yang paling tepat adalah Opsi C (12 Ampere).`,
  },

  // ==========================================
  // BAGIAN II: PILIHAN GANDA KOMPLEKS (SOAL 9 - 20)
  // ==========================================

  // --- Soal 9: Tumbuhan Berbiji Tertutup (Angiospermae) ---
  {
    id: 509,
    question: `Kelompok tumbuhan berikut yang termasuk ke dalam kelompok tumbuhan berbiji tertutup (Angiospermae) adalah.... (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Mangga (Mangifera indica)',
      'Pinus (Pinus merkusii)',
      'Padi (Oryza sativa)',
      'Pakis haji (Cycas rumphii)',
    ],
    correctAnswers: [0, 2], // Mangga & Padi
    isHots: false,
    explanation: `Klasifikasi Tumbuhan Berbiji Step-by-Step:

1. Apa itu Angiospermae (Tumbuhan Berbiji Tertutup)?
   Tumbuhan yang bijinya terlindungi oleh bakal buah (daging buah) dan memiliki bunga sejati sebagai alat reproduksi. Terbagi menjadi tumbuhan berkeping satu (monokotil) dan berkeping dua (dikotil).
   - Mangga (Mangifera indica): Tumbuhan dikotil berkambium yang bijinya dibungkus daging buah manis ➜ ANGIOSPERMAE (Pilihan 1 BENAR).
   - Padi (Oryza sativa): Tumbuhan monokotil berbiji tertutup penghasil beras makanan pokok ➜ ANGIOSPERMAE (Pilihan 3 BENAR).

2. Mengapa Pilihan Lain Bukan Angiospermae?
   - Pinus (Pinus merkusii): Termasuk Gymnospermae (tumbuhan berbiji terbuka), bijinya tidak dibungkus buah melainkan menempel pada strobilus/runjung cemara.
   - Pakis haji (Cycas rumphii): Juga termasuk Gymnospermae (berbiji terbuka) dengan strobilus jantan dan betina.

Jawaban yang benar adalah Mangga dan Padi (Opsi 1 dan 3).`,
  },

  // --- Soal 10: Dampak Negatif Aktivitas Manusia pada Ekosistem ---
  {
    id: 510,
    question: `Aktivitas manusia berikut ini yang dapat mengganggu keseimbangan ekosistem dan menyebabkan penurunan keanekaragaman hayati adalah.... (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Alih fungsi lahan hutan menjadi area perkebunan monokultur',
      'Penerapan sistem tumpang sari pada lahan pertanian',
      'Penggunaan pestisida kimia secara berlebihan dan terus-menerus',
      'Pembuatan taman kota dan jalur hijau di area pemukiman',
    ],
    correctAnswers: [0, 2], // Pilihan 1 dan 3
    isHots: false,
    explanation: `Analisis Dampak Lingkungan Step-by-Step:

1. Aktivitas yang Merusak Lingkungan:
   - Alih fungsi hutan menjadi perkebunan monokultur (hanya satu jenis tanaman, misal sawit): Menghilangkan ribuan spesies pohon liar asli, memusnahkan rantai makanan, dan mengusir satwa liar endemik dari habitatnya (Pilihan 1 BENAR merusak).
   - Penggunaan pestisida berlebihan: Racun kimia membunuh serangga penyerbuk (lebah/kupu-kupu), cacing penyubur tanah, dan mencemari air sungai sehingga ikan-ikan mati (Pilihan 3 BENAR merusak).

2. Aktivitas yang Ramah Lingkungan:
   - Tumpang sari: Menanam aneka macam tanaman berdampingan untuk menyuburkan tanah dan menekan hama secara alami.
   - Taman kota & jalur hijau: Memperbanyak area resapan air dan menyaring polusi udara perkotaan.

Jawaban yang benar adalah Alih fungsi lahan hutan... dan Penggunaan pestisida kimia... (Opsi 1 dan 3).`,
  },

  // --- Soal 11: Karakteristik Planet Luar (Jovian) ---
  {
    id: 511,
    question: `Karakteristik planet-planet di tata surya bervariasi. Pernyataan berikut yang benar mengenai karakteristik planet luar (Jupiter, Saturnus, Uranus, Neptunus) adalah.... (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Memiliki cincin yang mengelilingi planet',
      'Sebagian besar permukaannya tersusun atas batuan padat',
      'Memiliki jumlah satelit alami yang relatif banyak',
      'Memiliki atmosfer yang sangat tipis atau hampir tidak ada',
    ],
    correctAnswers: [0, 2], // Pilihan 1 dan 3
    isHots: false,
    explanation: `Mengenal Karakteristik Planet Luar (Gas Raksasa / Jovian):

1. Ciri Utama Planet Luar:
   - Memiliki Cincin Planet: Seluruh planet luar (Jupiter, Saturnus, Uranus, Neptunus) memiliki sistem cincin di sekeliling khatulistiwanya, dengan cincin Saturnus yang paling spektakuler (Pernyataan 1 BENAR).
   - Memiliki Banyak Satelit Alami (Bulan): Karena massanya sangat besar dan gravitasi penariknya sangat kuat, planet luar mengikat puluhan satelit (misalnya Jupiter dan Saturnus masing-masing punya lebih dari 80-140 bulan satelit!) (Pernyataan 3 BENAR).

2. Mengapa Pilihan Lain Salah?
   - Planet luar TIDAK BERBATU PADAT di permukaannya; mereka adalah bola gas dan es cair raksasa (Gas Giants).
   - Atmosfer planet luar SANGAT TEBAL dan pekat berisi gas hidrogen, helium, dan metana (bukan tipis).

Jawaban yang benar adalah Memiliki cincin... dan Memiliki jumlah satelit alami yang relatif banyak (Opsi 1 dan 3).`,
  },

  // --- Soal 12: Perbedaan Organel Sel Hewan & Tumbuhan ---
  {
    id: 512,
    question: `Sel hewan dan sel tumbuhan memiliki beberapa perbedaan struktur organel yang spesifik. Organel sel berikut yang hanya dimiliki oleh sel tumbuhan dan tidak dimiliki oleh sel hewan adalah.... (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Dinding sel',
      'Mitokondria',
      'Kloroplas',
      'Lisosom',
    ],
    correctAnswers: [0, 2], // Dinding sel & Kloroplas
    isHots: false,
    explanation: `Organel Khas Sel Tumbuhan Step-by-Step:

1. Organel Eksklusif Sel Tumbuhan:
   - Dinding Sel: Lapisan selulosa kaku di luar membran sel. Fungsinya menjaga bentuk sel agar tetap kokoh dan melindungi sel (tumbuhan tidak bisa bergerak lari seperti hewan, sehingga butuh perisai dinding kaku) (Pilihan 1 BENAR).
   - Kloroplas (Plastida): Pabrik hijau berisi klorofil yang menangkap sinar matahari untuk memasak makanannya sendiri lewat fotosintesis (Pilihan 3 BENAR).

2. Organel Lainnya:
   - Mitokondria: Dimiliki oleh KEDUA sel (baik hewan maupun tumbuhan) untuk bernapas dan menghasilkan energi ATP.
   - Lisosom: Berisi enzim pencerna intraseluler, umumnya hanya dimiliki oleh sel hewan.

Jawaban yang benar adalah Dinding sel dan Kloroplas (Opsi 1 dan 3).`,
  },

  // --- Soal 13: Pemanfaatan Gelombang Elektromagnetik ---
  {
    id: 513,
    question: `Gelombang elektromagnetik memiliki berbagai manfaat dalam kehidupan sehari-hari. Pemanfaatan gelombang elektromagnetik yang benar di bawah ini adalah.... (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Sinar-X digunakan untuk rontgen dan mendeteksi keretakan logam',
      'Sinar inframerah digunakan untuk sterilisasi alat-alat medis',
      'Gelombang mikro digunakan pada alat pemanggang (microwave) dan radar',
      'Sinar ultraviolet digunakan untuk mendeteksi keaslian uang kertas',
    ],
    correctAnswers: [0, 2, 3], // Pilihan 1, 3, dan 4
    isHots: false,
    explanation: `Pemanfaatan Spektrum Gelombang Elektromagnetik Step-by-Step:

1. Pemanfaatan yang Tepat:
   - Sinar-X (Rontgen): Memiliki daya tembus tinggi untuk memotret struktur tulang dalam tubuh medis dan memeriksa keretakan sambungan logam baja pada pesawat (Pilihan 1 BENAR).
   - Gelombang Mikro (Microwave): Menggetarkan molekul air dalam makanan sehingga cepat panas matang, serta digunakan oleh stasiun radar pemandu lalu lintas udara (Pilihan 3 BENAR).
   - Sinar Ultraviolet (UV): Memancarkan cahaya fluoresensi pada tanda air benang pengaman uang rupiah untuk mendeteksi uang palsu (Pilihan 4 BENAR).

2. Mengapa Pilihan 2 Salah?
   Sinar inframerah digunakan untuk sensor remote control TV atau terapi penghangat otot. Sterilisasi alat medis dan ruang operasi rumah sakit dilakukan menggunakan Sinar Ultraviolet (UV) atau radiasi Sinar Gamma (yang berenergi sangat tinggi pembunuh bakteri).

Jawaban yang benar adalah Sinar-X..., Gelombang mikro..., dan Sinar ultraviolet... (Opsi 1, 3, dan 4).`,
  },

  // --- Soal 14: Campuran Homogen ---
  {
    id: 514,
    question: `Di antara zat-zat di bawah ini, manakah yang dikelompokkan ke dalam kategori campuran homogen? (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Larutan garam dapur dalam air',
      'Campuran pasir dengan air',
      'Udara bersih di atmosfer',
      'Campuran minyak dengan air',
    ],
    correctAnswers: [0, 2], // Pilihan 1 dan 3
    isHots: false,
    explanation: `Membedakan Campuran Homogen vs Heterogen Step-by-Step:

1. Pengertian Campuran Homogen (Larutan):
   Campuran dua atau lebih zat yang partikelnya saling melarut sempurna dan tersebar merata, sehingga tidak tampak batas bidang pemisah antara zat pelarut dan zat terlarutnya.
   - Larutan garam dalam air: Butiran garam larut sempurna dalam air bening dan tidak ada endapan (Pilihan 1 BENAR).
   - Udara bersih: Campuran gas nitrogen, oksigen, dan gas mulia yang bercampur rata tanpa bisa dibedakan secara kasat mata (Pilihan 3 BENAR).

2. Mengapa Pilihan Lain Heterogen?
   - Campuran pasir dengan air: Butiran pasir mengendap di dasar air dan terlihat jelas batasnya (Campuran Heterogen).
   - Campuran minyak dengan air: Minyak mengapung di atas air dan tidak pernah menyatu karena perbedaan kepolaran dan massa jenis (Campuran Heterogen).

Jawaban yang benar adalah Larutan garam dapur dalam air dan Udara bersih di atmosfer (Opsi 1 dan 3).`,
  },

  // --- Soal 15: Lapisan Struktur Bumi ---
  {
    id: 515,
    question: `Lapisan bumi terdiri dari beberapa bagian dengan karakteristik yang berbeda. Pernyataan yang benar mengenai struktur lapisan bumi adalah.... (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Kerak bumi merupakan lapisan terluar yang paling tipis dan bersifat padat',
      'Inti luar bumi tersusun atas besi dan nikel cair yang bersuhu sangat tinggi',
      'Mantel bumi merupakan lapisan paling dingin dan tidak memiliki aktivitas magma',
      'Inti dalam bumi bersifat cair akibat tekanan yang sangat rendah',
    ],
    correctAnswers: [0, 1], // Pilihan 1 dan 2
    isHots: false,
    explanation: `Karakteristik Lapisan Bumi Step-by-Step:

1. Lapisan-Lapisan Bumi dari Luar ke Dalam:
   - Kerak Bumi (Crust): Lapisan kulit terluar tempat tinggal makhluk hidup, ketebalannya hanya 5-70 km (paling tipis dibanding lapisan lainnya) dan berupa batuan padat beku (Pernyataan 1 BENAR).
   - Mantel Bumi (Mantle): Lapisan batuan panas semi-cair kental (magma) yang terus bergolak karena arus konveksi panas.
   - Inti Luar (Outer Core): Lapisan logam besi dan nikel dalam bentuk CAIR membara bersuhu ~4.000°C. Pergerakan cairan besi nikel ini menghasilkan medan magnet bumi (Pernyataan 2 BENAR).
   - Inti Dalam (Inner Core): Bola logam padat yang sangat panas (~5.000-6.000°C) namun tetap PADAT karena tekanan gravitasi bumi yang amat sangat dahsyat (bukan tekanan rendah).

Jawaban yang benar adalah Kerak bumi merupakan... dan Inti luar bumi tersusun... (Opsi 1 dan 2).`,
  },

  // --- Soal 16: Organ Reproduksi Pria (Sperma & Testosteron) ---
  {
    id: 516,
    question: `Organ reproduksi pria memiliki fungsi yang sangat spesifik dalam proses spermatogenesis dan hormonal. Organ berikut yang berperan langsung dalam memproduksi sperma dan hormon testosteron adalah.... (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Epididimis',
      'Testis',
      'Vas deferens',
      'Tubulus seminiferus',
    ],
    correctAnswers: [1, 3], // Testis & Tubulus seminiferus
    isHots: false,
    explanation: `Fungsi Organ Reproduksi Pria Step-by-Step:

1. Pabrik Pembentukan Sperma:
   - Testis: Kelenjar kelamin utama pria yang berada di dalam kantung skrotum. Testis berfungsi ganda: menghasilkan jutaan sel sperma dan memproduksi hormon kelamin pria yaitu testosteron (Pilihan 2 BENAR).
   - Tubulus Seminiferus: Saluran-saluran halus berkelok-kelok yang terletak di DALAM testis. Di dinding tubulus seminiferus inilah proses pembelahan sel induk sperma (spermatogenesis) berlangsung secara nyata (Pilihan 4 BENAR).

2. Apa Fungsi Saluran Lainnya?
   - Epididimis: Saluran penampung di atas testis tempat sperma disimpan sementara untuk mematangkan ekor dan gerakannya.
   - Vas Deferens: Pipa saluran panjang yang mengalirkan sperma matang dari epididimis menuju uretra saat ejakulasi.

Jawaban yang benar adalah Testis dan Tubulus seminiferus (Opsi 2 dan 4).`,
  },

  // --- Soal 17: Bioteknologi Modern vs Konvensional ---
  {
    id: 517,
    question: `Bioteknologi modern memanfaatkan rekayasa genetika untuk menghasilkan produk yang bermanfaat. Contoh produk bioteknologi modern di bidang pangan dan pertanian yang benar adalah.... (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Tanaman transgenik tahan hama (Bt-cotton)',
      'Tempe hasil fermentasi jamur Rhizopus oryzae',
      'Tomat Flavr Savr yang tidak mudah membusuk',
      'Yogurt hasil fermentasi bakteri Lactobacillus bulgaricus',
    ],
    correctAnswers: [0, 2], // Bt-cotton & Tomat Flavr Savr
    isHots: false,
    explanation: `Membedakan Bioteknologi Modern vs Konvensional Step-by-Step:

1. Apa itu Bioteknologi Modern?
   Bioteknologi yang menggunakan teknik REKAYASA GENETIKA (DNA rekombinan, penyisipan gen asing) di laboratorium canggih untuk mengubah sifat makhluk hidup.
   - Tanaman Transgenik Bt-Cotton: Tanaman kapas yang disisipi gen bakteri Bacillus thuringiensis sehingga kebal terhadap serangan ulat hama (Pilihan 1 BENAR).
   - Tomat Flavr Savr: Tomat yang gen pematangannya dimodifikasi sehingga kulit buahnya tetap segar, tebal, dan tidak gampang membusuk saat dikirim jarak jauh (Pilihan 3 BENAR).

2. Mengapa Tempe dan Yogurt Bukan Modern?
   Tempe dan Yogurt adalah bioteknologi KONVENSIONAL (tradisional) karena hanya mengandalkan proses fermentasi alami mikroorganisme utuh tanpa mengubah susunan DNA/genetikanya.

Jawaban yang benar adalah Tanaman transgenik... dan Tomat Flavr Savr... (Opsi 1 dan 3).`,
  },

  // --- Soal 18: Karakteristik Potongan Magnet ---
  {
    id: 518,
    question: `Sebuah magnet batang dipotong menjadi tiga bagian yang sama panjang. Pernyataan yang benar mengenai potongan-potongan magnet tersebut adalah.... (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Setiap potongan magnet akan memiliki kutub utara dan kutub selatan sendiri',
      'Potongan bagian tengah hanya memiliki satu jenis kutub saja',
      'Sifat kemagnetan pada potongan-potongan tersebut tidak hilang',
      'Gaya magnet paling kuat tetap berada di bagian ujung-ujung potongan',
    ],
    correctAnswers: [0, 2, 3], // Pilihan 1, 3, dan 4
    isHots: false,
    explanation: `Sifat Magnet yang Dipotong Step-by-Step:

1. Apa yang Terjadi pada Magnet Elementer?
   Di dalam magnet batang, ada jutaan partikel magnet mini (magnet elementer) yang tersusun rapi searah dari kutub selatan ke kutub utara.
   - Ketika magnet dipotong menjadi 3 bagian, susunan magnet elementer di dalamnya TIDAK RUSAK, sehingga sifat kemagnetannya tetap ada dan tidak hilang (Pernyataan 3 BENAR).
   - Pada setiap potongan (termasuk potongan tengah), ujung depan tetap menjadi Kutub Utara dan ujung belakang menjadi Kutub Selatan (Pernyataan 1 BENAR).
   - Di mana gaya tarik paling kuat? Pada setiap potongan magnet baru tersebut, garis-garis gaya magnet tetap paling rapat di bagian ujung-ujungnya (Pernyataan 4 BENAR).

2. Mengapa Pernyataan 2 Salah?
   Di alam semesta, TIDAK ADA monopool magnet (magnet yang hanya punya satu kutub saja). Semua magnet pasti selalu memiliki sepasang kutub: Utara dan Selatan.

Jawaban yang benar adalah Pernyataan 1, 3, dan 4.`,
  },

  // --- Soal 19: Faktor-Faktor Tekanan Hidrostatis ---
  {
    id: 519,
    question: `Tekanan zat cair (hidrostatis) dipengaruhi oleh beberapa faktor fisis. Faktor-faktor yang memengaruhi besarnya tekanan hidrostatis pada suatu benda di dalam zat cair adalah.... (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Massa jenis zat cair',
      'Luas permukaan benda',
      'Kedalaman benda dari permukaan zat cair',
      'Bentuk wadah zat cair',
    ],
    correctAnswers: [0, 2], // Pilihan 1 dan 3
    isHots: false,
    explanation: `Faktor Tekanan Hidrostatis Step-by-Step:

1. Rumus Tekanan Hidrostatis:
   Ph = ρ × g × h
   Dari rumus fisika ini, faktor yang berpengaruh langsung adalah:
   - ρ (Massa jenis zat cair): Menyelam di air raksa jauh lebih berat menekan daripada menyelam di air tawar biasa (Pilihan 1 BENAR).
   - g (Percepatan gravitasi bumi): Gaya tarik bumi ke bawah.
   - h (Kedalaman dari permukaan air): Makin dalam menyelam ke bawah, tekanan hidrostatis pasti makin besar (Pilihan 3 BENAR).

2. Apa yang TIDAK Memengaruhi Tekanan Hidrostatis?
   - Luas permukaan benda: Tidak berpengaruh karena tekanan hidrostatis dihitung per satuan luas bidang.
   - Bentuk wadah zat cair: Bentuk tabung, gelas melengkung, atau kolam kotak tidak memengaruhi tekanan selama kedalaman airnya sama (Hukum Utama Hidrostatis).

Jawaban yang benar adalah Massa jenis zat cair dan Kedalaman benda... (Opsi 1 dan 3).`,
  },

  // --- Soal 20: Penghematan Energi Listrik Rumah Tangga ---
  {
    id: 520,
    question: `Upaya yang dapat dilakukan untuk menghemat penggunaan energi listrik di lingkungan rumah tangga adalah.... (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Mengganti lampu pijar dengan lampu LED yang dayanya lebih rendah',
      'Membiarkan pengisi daya (charger) gawai tetap terpasang di stopkontak saat tidak digunakan',
      'Mematikan peralatan elektronik secara total (bukan mode standby) saat selesai digunakan',
      'Menggunakan mesin cuci setiap hari meskipun pakaian yang dicuci hanya sedikit',
    ],
    correctAnswers: [0, 2], // Pilihan 1 dan 3
    isHots: false,
    explanation: `Langkah Bijak Penghematan Listrik Step-by-Step:

1. Cara Efektif Menghemat Listrik:
   - Memakai Lampu LED: Lampu LED membutuhkan daya listrik (Watt) yang jauh lebih kecil tetapi menghasilkan cahaya yang jauh lebih terang dibanding lampu pijar kawat wolfram kuno (Pilihan 1 BENAR).
   - Mematikan Alat Elektronik Secara Total: Televisi atau komputer dalam mode "standby" masih terus menyedot arus listrik bocor (phantom power/vampire power). Mematikan tombol sakelar utama atau mencabut kabelnya akan menghentikan pemborosan ini (Pilihan 3 BENAR).

2. Perilaku Boros yang Harus Dihindari:
   - Membiarkan charger HP menancap di stopkontak: Trafo di dalam charger tetap mengalirkan arus listrik kecil dan membuang energi panas secara cuma-cuma.
   - Mencuci baju sedikit-sedikit tiap hari: Motor listrik mesin cuci menyedot daya start awal yang besar; lebih hemat jika mencuci pakaian sekaligus sesuai kapasitas maksimalnya.

Jawaban yang benar adalah Mengganti lampu pijar... dan Mematikan peralatan elektronik secara total... (Opsi 1 dan 3).`,
  },

  // ==========================================
  // BAGIAN III: BENAR / SALAH (SOAL 21 - 25)
  // ==========================================

  // --- Soal 21: Persilangan Monohibrid Mendel F1 ---
  {
    id: 521,
    question: `Pernyataan:
Pada persilangan monohibrid dominan penuh antara tanaman kacang ercis berbiji bulat (BB) dengan berbiji keriput (bb), seluruh keturunan pertama (F1) akan memiliki fenotipe berbiji bulat dengan genotipe Bb.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Persilangan Monohibrid Mendel Step-by-Step:

1. Induk Parental (P1):
   - Tanaman 1: Berbiji Bulat ➜ Genotipe BB ➜ Menghasilkan gamet B.
   - Tanaman 2: Berbiji Keriput ➜ Genotipe bb ➜ Menghasilkan gamet b.

2. Peleburan Gamet Menghasilkan Keturunan Pertama (F1):
   Gamet B bertemu dengan gamet b ➜ Menghasilkan genotipe Bb (100%).

3. Menentukan Sifat yang Tampak (Fenotipe):
   Karena sifat bulat (alel B) bersifat DOMINAN PENUH terhadap sifat keriput (alel b), maka alel b tertutupi.
   Semua tanaman F1 (100%) memiliki biji bulat.

Kesimpulan: Pernyataan pada soal sepenuhnya BENAR. Jawaban yang tepat adalah BENAR.`,
  },

  // --- Soal 22: Mikroorganisme Pembuatan Kecap ---
  {
    id: 522,
    question: `Pernyataan:
Pembuatan kecap menggunakan bantuan mikroorganisme berupa bakteri Saccharomyces cerevisiae melalui proses fermentasi alkohol.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 1, // SALAH
    isHots: false,
    explanation: `Fakta Bioteknologi Pembuatan Kecap:

1. Mikroorganisme Pembuat Kecap:
   - Kecap dibuat dari biji kedelai hitam yang difermentasi oleh JAMUR (KAPANG) khusus bernama Aspergillus wentii atau Aspergillus oryzae, lalu direndam dalam larutan garam pekat.
   - Jamur Aspergillus inilah yang merombak protein kedelai menjadi asam amino gurih lezat khas kecap.

2. Lalu Apa Peran Saccharomyces cerevisiae?
   Saccharomyces cerevisiae adalah spesies KHAMIR (RAGI jamur bersel satu) yang dipakai untuk membuat TAPE, ROTI, dan fermentasi alkohol pada minuman anggur/bir.

Kesimpulan: Pernyataan bahwa kecap dibuat memakai bakteri Saccharomyces cerevisiae melalui fermentasi alkohol adalah SALAH. Jawaban yang tepat adalah SALAH.`,
  },

  // --- Soal 23: Muatan Listrik Statis Penggaris Rambut ---
  {
    id: 523,
    question: `Pernyataan:
Ketika sebuah penggaris plastik digosokkan pada rambut kering, penggaris tersebut menjadi bermuatan negatif karena elektron dari rambut berpindah ke penggaris plastik.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Perpindahan Muatan Listrik Statis Step-by-Step:

1. Siapa yang Berpindah?
   Dalam atom, proton (muatan positif) terikat kuat di inti atom dan TIDAK DAPAT BERGERAK. Satu-satunya partikel yang bisa berpindah saat digosok adalah ELEKTRON (muatan negatif).

2. Urutan Daya Tarik Elektron (Deret Tribolistrik):
   - Rambut kering memiliki sifat mudah melepaskan elektron.
   - Plastik mika memiliki sifat kuat menarik dan menangkap elektron.

3. Apa yang Terjadi Saat Digosok?
   Elektron dari rambut kering terlepas lalu meloncat menempel ke penggaris plastik.
   - Penggaris plastik kelebihan muatan elektron ➜ Menjadi bermuatan NEGATIF.
   - Rambut kehilangan elektron ➜ Menjadi bermuatan POSITIF.

Kesimpulan: Pernyataan di atas 100% tepat secara ilmiah. Jawaban yang benar adalah BENAR.`,
  },

  // --- Soal 24: Sudut Deklinasi vs Inklinasi ---
  {
    id: 524,
    question: `Pernyataan:
Sudut deklinasi adalah sudut yang terbentuk antara arah jarum kompas dengan bidang mendatar (horizontal) bumi.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 1, // SALAH
    isHots: false,
    explanation: `Membedakan Sudut Deklinasi vs Sudut Inklinasi:

1. Pengertian Sudut Deklinasi:
   Sudut penyimpangan antara arah jarum kompas (Kutub Utara Magnet Bumi) dengan ARAH UTARA-SELATAN GEOGRAFIS BUMI yang sebenarnya. Jarum kompas tidak tepat menunjuk ke kutub utara geografis karena kutub magnet bumi letaknya sedikit bergeser.

2. Pengertian Sudut Inklinasi:
   Sudut kemiringan yang terbentuk antara jarum kompas dengan BIDANG MENDATAR (HORIZONTAL) permukaan bumi. Di daerah khatulistiwa sudut inklinasinya kecil, sedangkan di kutub jarum kompas akan menukik tegak lurus.

3. Mengapa Pernyataan di Soal Salah?
   Pernyataan pada soal mendefinisikan sudut antara jarum kompas dengan bidang horizontal bumi, padahal itu adalah definisi SUDUT INKLINASI, bukan sudut deklinasi!

Kesimpulan: Definisi pada pernyataan tertukar. Jawaban yang tepat adalah SALAH.`,
  },

  // --- Soal 25: Aliran Energi vs Siklus Materi ---
  {
    id: 525,
    question: `Pernyataan:
Di dalam ekosistem, aliran energi berlangsung secara siklis (berputar kembali ke produsen), sedangkan materi mengalir secara searah dari produsen ke konsumen lalu hilang ke lingkungan.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 1, // SALAH
    isHots: true,
    explanation: `Konsep Aliran Energi dan Daur Materi dalam Ekosistem:

1. Aliran Energi Berlangsung SEARAH (Satu Arah):
   - Energi datang dari Matahari ➜ ditangkap Tumbuhan (Produsen) lewat fotosintesis ➜ dimakan Hewan Herbivora (Konsumen I) ➜ dimakan Karnivora (Konsumen II).
   - Pada setiap tingkatan trofik, sebagian besar energi (~90%) terbuang ke lingkungan dalam bentuk panas dan aktivitas gerak.
   - Energi TIDAK PERNAH berputar kembali ke Matahari atau produsen (Aliran Energi bersifat NON-SIKLIS / Satu Arah).

2. Aliran Materi Berlangsung SIKLIS (Daur / Berputar):
   - Unsur-unsur kimia (Karbon, Nitrogen, Air, Fosfor) yang ada di tubuh makhluk hidup akan diuraikan oleh bakteri dan jamur dekomposer saat makhluk hidup mati.
   - Zat hara tanah hasil penguraian ini kemudian diserap kembali oleh akar tumbuhan untuk tumbuh (Materi bersirkulasi terus-menerus dalam SIKLUS BIOGEOKIMIA).

3. Mengapa Pernyataan di Soal Salah?
   Pernyataan di soal terbalik total: menyatakan energi bersifat siklis dan materi mengalir searah.

Kesimpulan: Pernyataan tersebut keliru. Jawaban yang tepat adalah SALAH.`,
  },
];
