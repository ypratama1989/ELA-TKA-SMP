import { Question } from '../types';

export const SOAL_ASLI_TKA_MATH_PART1: Question[] = [
  // ==========================================
  // SOAL 1: Operasi Bilangan Berpangkat
  // ==========================================
  {
    id: 2701,
    question: `Hasil dari operasi bilangan berpangkat berikut adalah...<br><br>
<div class="p-3 bg-slate-900/60 rounded-xl border border-slate-700/60 text-center my-2 text-base sm:text-lg font-mono text-amber-300">
  <span class="inline-flex flex-col text-center align-middle mx-1">
    <span class="border-b border-amber-300/80 px-2 pb-0.5">7<sup>3</sup> &times; 7<sup>-4</sup></span>
    <span class="pt-0.5">7<sup>2</sup></span>
  </span>
</div>`,
    options: [
      '7<sup>-9</sup>',
      '7<sup>-6</sup>',
      '7<sup>-3</sup>',
      '7'
    ],
    correctAnswer: 2,
    isHots: false,
    explanation: `<b>Kunci Jawaban: C. 7<sup>-3</sup></b><br><br>
<b>Penjelasan Super Sederhana &amp; Runtut (Step-by-Step):</b><br>
Bayangkan bilangan berpangkat seperti menghitung jumlah tabungan langkah.<br><br>
<b>Langkah 1: Selesaikan Bagian Atas (Pembilang) Dulu!</b><br>
Aturan perkalian bilangan berpangkat dengan angka dasar yang sama (di sini angkanya sama-sama 7):<br>
<i>Jika dikalikan, angka pangkatnya cukup DIJUMLAHKAN.</i><br>
&bull; 7<sup>3</sup> &times; 7<sup>-4</sup> = 7<sup>3 + (-4)</sup><br>
&bull; 3 ditambah (-4) sama saja dengan 3 dikurangi 4 = <b>-1</b>.<br>
Maka hasil atasnya adalah <b>7<sup>-1</sup></b>.<br><br>
<b>Langkah 2: Lakukan Pembagian dengan Bagian Bawah (Penyebut)!</b><br>
Aturan pembagian bilangan berpangkat:<br>
<i>Jika dibagi, angka pangkat atas DIKURANGI angka pangkat bawah.</i><br>
&bull; 7<sup>-1</sup> &divide; 7<sup>2</sup> = 7<sup>(-1) - 2</sup><br>
&bull; Punya hutang 1 (-1), lalu hutang lagi 2 (-2), maka hutang menjadi <b>-3</b>.<br>
Hasil akhirnya adalah <b>7<sup>-3</sup></b>.<br><br>
<b>Konsep Dasar yang Perlu Diingat:</b><br>
&bull; a<sup>m</sup> &times; a<sup>n</sup> = a<sup>m + n</sup><br>
&bull; a<sup>m</sup> / a<sup>n</sup> = a<sup>m - n</sup>`
  },

  // ==========================================
  // SOAL 2: Layanan Film Berbayar (Persentase Kenaikan Pengguna)
  // ==========================================
  {
    id: 2702,
    image: '/images/soal_asli_tka_math/soalaslitka_math_q2.PNG',
    images: ["/images/soal_asli_tka_math/soalaslitka_math_q2.PNG"],
    imageCaption: 'Ilustrasi Stimulus Soal 2: Layanan Film Berbayar',
    question: `<b>[STIMULUS: LAYANAN FILM BERBAYAR]</b><br>
Saat ini ada banyak aplikasi yang menyediakan layanan film berbayar. Dengan membayar biaya berlangganan bulanan, setiap orang bisa menikmati berbagai film. Berikut data jumlah pengguna awal sebelum adanya promo:<br><br>
<div class="overflow-x-auto my-2">
  <table class="w-full text-xs text-left border-collapse border border-slate-700 bg-slate-900/60 rounded-xl overflow-hidden">
    <thead>
      <tr class="bg-indigo-950/60 text-indigo-200 border-b border-slate-700">
        <th class="p-2 border-r border-slate-700">Aplikasi</th>
        <th class="p-2 border-r border-slate-700">Jumlah Pengguna Awal</th>
        <th class="p-2">Biaya Langganan Normal</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-800 text-slate-200">
      <tr><td class="p-2 font-bold text-amber-300 border-r border-slate-700">Aplikasi M</td><td class="p-2 border-r border-slate-700">2,2 juta orang</td><td class="p-2">Rp120.000,00 / bulan</td></tr>
      <tr><td class="p-2 font-bold text-emerald-300 border-r border-slate-700">Aplikasi Y</td><td class="p-2 border-r border-slate-700">4,2 juta orang</td><td class="p-2">Rp39.000,00 / bulan</td></tr>
      <tr><td class="p-2 font-bold text-sky-300 border-r border-slate-700">Aplikasi W</td><td class="p-2 border-r border-slate-700">4,0 juta orang</td><td class="p-2">Rp33.000,00 / bulan</td></tr>
      <tr><td class="p-2 font-bold text-purple-300 border-r border-slate-700">Aplikasi D</td><td class="p-2 border-r border-slate-700">3,9 juta orang</td><td class="p-2">Rp119.000,00 / bulan</td></tr>
    </tbody>
  </table>
</div>
Setelah diadakan promo menarik, setiap aplikasi mendapatkan persentase kenaikan jumlah pengguna sebagai berikut:<br>
&bull; Aplikasi M meningkat 50%<br>
&bull; Aplikasi Y meningkat 10%<br>
&bull; Aplikasi W meningkat 10%<br>
&bull; Aplikasi D meningkat 20%<br><br>
<b>Pertanyaan:</b><br>
Rara akan memilih berlangganan aplikasi yang memiliki <b>jumlah pengguna lebih dari 4,5 juta orang</b> setelah masa promo. Aplikasi apa saja yang mungkin dipilih Rara?<br>
<i>(Pilihlah semua pilihan jawaban yang benar! Jawaban benar lebih dari satu)</i>`,
    questionType: 'complex',
    options: [
      'Aplikasi M',
      'Aplikasi Y',
      'Aplikasi W',
      'Aplikasi D'
    ],
    correctAnswers: [1, 3],
    isHots: true,
    explanation: `<b>Kunci Jawaban: Aplikasi Y dan Aplikasi D</b><br><br>
<b>Cara Menghitung Kenaikan Pengguna Step-by-Step:</b><br>
Target Rara: Pengguna baru harus <b>LEBIH DARI 4,5 JUTA</b> (&gt; 4,5). Mari kita hitung satu per satu:<br><br>
1. <b>Aplikasi M:</b><br>
&bull; Awal: 2,2 juta<br>
&bull; Kenaikan 50%: 50% &times; 2,2 = 1,1 juta orang tambahan.<br>
&bull; Total Akhir = 2,2 + 1,1 = <b>3,3 juta</b>. (Kurang dari 4,5 juta &rarr; TIDAK DIPILIH)<br><br>
2. <b>Aplikasi Y:</b><br>
&bull; Awal: 4,2 juta<br>
&bull; Kenaikan 10%: 10% &times; 4,2 = 0,42 juta orang tambahan.<br>
&bull; Total Akhir = 4,2 + 0,42 = <b>4,62 juta</b>. (4,62 &gt; 4,5 juta &rarr; <b>DIPILIH RARA!</b>)<br><br>
3. <b>Aplikasi W:</b><br>
&bull; Awal: 4,0 juta<br>
&bull; Kenaikan 10%: 10% &times; 4,0 = 0,4 juta orang tambahan.<br>
&bull; Total Akhir = 4,0 + 0,4 = <b>4,4 juta</b>. (Kurang dari 4,5 juta &rarr; TIDAK DIPILIH)<br><br>
4. <b>Aplikasi D:</b><br>
&bull; Awal: 3,9 juta<br>
&bull; Kenaikan 20%: 20% &times; 3,9 = 0,78 juta orang tambahan.<br>
&bull; Total Akhir = 3,9 + 0,78 = <b>4,68 juta</b>. (4,68 &gt; 4,5 juta &rarr; <b>DIPILIH RARA!</b>)<br><br>
Maka dua aplikasi yang penggunanya tembus di atas 4,5 juta adalah <b>Aplikasi Y dan Aplikasi D</b>.`
  },

  // ==========================================
  // SOAL 3: Logika Diskon & Kombinasi Aplikasi
  // ==========================================
  {
    id: 2703,
    image: '/images/soal_asli_tka_math/soalaslitka_math_q3.PNG',
    images: ["/images/soal_asli_tka_math/soalaslitka_math_q3.PNG"],
    imageCaption: 'Ilustrasi Stimulus Soal 3: Logika Diskon & Kombinasi Aplikasi',
    question: `<b>[STIMULUS: LAYANAN FILM BERBAYAR]</b><br>
Daftar harga langganan normal per bulan:<br>
&bull; Aplikasi M = Rp120.000,00<br>
&bull; Aplikasi Y = Rp39.000,00<br>
&bull; Aplikasi W = Rp33.000,00<br>
&bull; Aplikasi D = Rp119.000,00<br><br>
Saat ini Freya dan Denis masing-masing berlangganan satu aplikasi yang <b>berbeda</b>.<br>
Pada bulan ini, <b>salah satu aplikasi sedang memberikan potongan harga (diskon) sebesar 40%</b> (artinya pelanggan hanya perlu membayar 60% dari harga aslinya).<br>
Diketahui syarat berikut:<br>
1. Jumlah total pembayaran Freya dan Denis pada bulan tersebut <b>tidak lebih dari Rp140.000,00 dan tidak kurang dari Rp130.000,00</b> (berada di rentang Rp130.000 s.d. Rp140.000).<br>
2. <b>Denis berlangganan aplikasi dengan harga yang LEBIH MAHAL daripada Freya.</b><br><br>
Tentukan status kebenaran dari setiap pernyataan berikut:<br>
(1) Denis berlangganan aplikasi yang memberikan potongan harga.<br>
(2) Freya berlangganan aplikasi Y.<br>
(3) Denis berlangganan aplikasi M.`,
    options: [
      'A. (1) Tidak Mungkin, (2) Tidak Mungkin, (3) Mungkin',
      'B. (1) Mungkin, (2) Tidak Mungkin, (3) Mungkin',
      'C. (1) Tidak Mungkin, (2) Mungkin, (3) Tidak Mungkin',
      'D. (1) Mungkin, (2) Mungkin, (3) Tidak Mungkin'
    ],
    correctAnswer: 0,
    isHots: true,
    explanation: `<b>Kunci Jawaban: A. (1) Tidak Mungkin, (2) Tidak Mungkin, (3) Mungkin</b><br><br>
<b>Langkah Penyelidikan Logika (Step-by-Step Detektif):</b><br>
1. <b>Hitung Harga Jika Mendapat Diskon 40% (Bayar 60%):</b><br>
&bull; Aplikasi M diskon: 60% &times; 120.000 = Rp72.000<br>
&bull; Aplikasi Y diskon: 60% &times; 39.000 = Rp23.400<br>
&bull; Aplikasi W diskon: 60% &times; 33.000 = Rp19.800<br>
&bull; Aplikasi D diskon: 60% &times; 119.000 = Rp71.400<br><br>
2. <b>Cari Pasangan (1 Harga Normal + 1 Harga Diskon) yang Totalnya Rp130.000 - Rp140.000:</b><br>
&bull; Pasangan W (diskon Rp19.800) + M (normal Rp120.000) = <b>Rp139.800</b> (Cocok di rentang 130rb - 140rb!)<br>
&bull; Pasangan W (diskon Rp19.800) + D (normal Rp119.000) = <b>Rp138.800</b> (Cocok di rentang 130rb - 140rb!)<br>
Kombinasi lain tidak ada yang masuk dalam rentang ini (contoh: Y diskon + M normal = 143.400 &rarr; kelebihan).<br><br>
3. <b>Tentukan Siapa yang Membayar Lebih Mahal:</b><br>
Soal menyatakan: <i>"Denis berlangganan aplikasi yang lebih mahal daripada Freya."</i><br>
&bull; Denis PASTI membayar harga normal yang mahal (Aplikasi M seharga Rp120.000 atau Aplikasi D seharga Rp119.000).<br>
&bull; Freya PASTI membayar harga diskon yang murah (Aplikasi W seharga Rp19.800).<br><br>
4. <b>Uji Setiap Pernyataan:</b><br>
&bull; <b>Pernyataan (1):</b> Denis berlangganan aplikasi yang memberi diskon &rarr; <b>TIDAK MUNGKIN</b>, karena yang dapat diskon selalu Freya.<br>
&bull; <b>Pernyataan (2):</b> Freya berlangganan aplikasi Y &rarr; <b>TIDAK MUNGKIN</b>, karena Freya pasti berlangganan aplikasi W.<br>
&bull; <b>Pernyataan (3):</b> Denis berlangganan aplikasi M &rarr; <b>MUNGKIN</b>, karena Denis bisa berlangganan M atau D.`
  },

  // ==========================================
  // SOAL 4: Uji Kandungan Vitamin C
  // ==========================================
  {
    id: 2704,
    question: `Buah merupakan salah satu sumber vitamin C yang penting untuk menjaga daya tahan tubuh.<br>
Tim peneliti ingin menguji kandungan vitamin C pada empat buah dengan ukuran dan kandungan air yang beragam.<br><br>
Berikut disajikan data ukuran dan kandungan air keempat buah tersebut:<br>
<div class="overflow-x-auto my-2">
  <table class="w-full text-xs text-left border-collapse border border-slate-700 bg-slate-900/60 rounded-xl overflow-hidden">
    <thead>
      <tr class="bg-indigo-950/60 text-indigo-200 border-b border-slate-700">
        <th class="p-2 border-r border-slate-700">Nama Buah</th>
        <th class="p-2 border-r border-slate-700">Berat (gr)</th>
        <th class="p-2">Kandungan Air (mL)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-800 text-slate-200">
      <tr><td class="p-2 font-bold text-amber-300 border-r border-slate-700">Buah A</td><td class="p-2 border-r border-slate-700">118,4</td><td class="p-2">96,3</td></tr>
      <tr><td class="p-2 font-bold text-emerald-300 border-r border-slate-700">Buah B</td><td class="p-2 border-r border-slate-700">130,7</td><td class="p-2">150</td></tr>
      <tr><td class="p-2 font-bold text-sky-300 border-r border-slate-700">Buah C</td><td class="p-2 border-r border-slate-700">130,55</td><td class="p-2">140</td></tr>
      <tr><td class="p-2 font-bold text-purple-300 border-r border-slate-700">Buah D</td><td class="p-2 border-r border-slate-700">96,255</td><td class="p-2">118,15</td></tr>
    </tbody>
  </table>
</div>
Karena keterbatasan waktu pengujian, pada hari pertama hanya ada satu buah yang akan diteliti terlebih dahulu.<br>
Syarat buah yang akan diteliti pertama adalah: <b>memiliki berat terbesar DAN kandungan air paling banyak</b>.<br><br>
Buah yang akan diteliti pertama adalah...`,
    options: [
      'Buah A',
      'Buah B',
      'Buah C',
      'Buah D'
    ],
    correctAnswer: 1,
    isHots: false,
    explanation: `<b>Kunci Jawaban: B. Buah B</b><br><br>
<b>Langkah Penelusuran Sangat Mudah (Step-by-Step):</b><br>
Soal memberikan 2 syarat wajib sekaligus:<br><br>
1. <b>Syarat 1: Berat Terbesar</b><br>
Mari urutkan berat buah dari yang paling berat ke yang paling ringan:<br>
&bull; Buah B = 130,70 gram (Paling berat!)<br>
&bull; Buah C = 130,55 gram (Ingat: 130,7 = 130,70 lebih berat daripada 130,55)<br>
&bull; Buah A = 118,40 gram<br>
&bull; Buah D = 96,255 gram<br>
Juara berat terbesar adalah: <b>Buah B</b>.<br><br>
2. <b>Syarat 2: Kandungan Air Paling Banyak</b><br>
Mari urutkan volume air dari yang terbanyak:<br>
&bull; Buah B = 150 mL (Paling banyak!)<br>
&bull; Buah C = 140 mL<br>
&bull; Buah D = 118,15 mL<br>
&bull; Buah A = 96,3 mL<br>
Juara air terbanyak adalah: <b>Buah B</b>.<br><br>
Karena Buah B memenuhi kedua syarat juara sekaligus, maka buah yang pertama kali diteliti adalah <b>Buah B</b>.`
  },

  // ==========================================
  // SOAL 5: Suhu Penyimpanan Makanan FDA
  // ==========================================
  {
    id: 2705,
    image: '/images/soal_asli_tka_math/soalaslitka_math_q5.PNG',
    images: ["/images/soal_asli_tka_math/soalaslitka_math_q5.PNG"],
    imageCaption: 'Ilustrasi Stimulus Soal 5: Suhu Penyimpanan Makanan FDA',
    question: `Pada beberapa jenis makanan, suhu penyimpanan yang terlalu tinggi dapat menyebabkan makanan cepat basi dan memicu pertumbuhan bakteri.<br><br>
Departemen Pertanian Amerika Serikat (FDA) merekomendasikan suhu penyimpanan di dalam lemari pendingin/freezer sebagai berikut:<br>
&bull; <b>Daging Unggas:</b> disimpan pada suhu <b>-19 &deg;C</b><br>
&bull; <b>Daging Merah:</b> disimpan pada suhu <b>-18 &deg;C</b><br><br>
<i>Catatan: Daging unggas adalah daging yang berasal dari bangsa burung/unggas ternak seperti ayam, bebek, kalkun, merpati. Daging merah adalah daging dari mamalia seperti sapi, kambing, dan domba.</i><br><br>
<b>Pertanyaan:</b><br>
Berdasarkan rekomendasi standar FDA tersebut, berapa suhu lemari pendingin yang direkomendasikan untuk menyimpan <b>daging ayam</b>?`,
    options: [
      '18 derajat di bawah 0 &deg;C',
      '18 derajat di atas 0 &deg;C',
      '19 derajat di bawah 0 &deg;C',
      '19 derajat di atas 0 &deg;C'
    ],
    correctAnswer: 2,
    isHots: false,
    explanation: `<b>Kunci Jawaban: C. 19 derajat di bawah 0 &deg;C</b><br><br>
<b>Langkah Pemahaman Logis (Step-by-Step):</b><br>
1. <b>Kenali Jenis Dagingnya:</b><br>
Ayam adalah jenis unggas (burung ternak). Maka daging ayam masuk ke dalam kategori <b>Daging Unggas</b>.<br><br>
2. <b>Cari Aturan Suhu untuk Daging Unggas:</b><br>
Pada panduan FDA, suhu untuk daging unggas adalah <b>-19 &deg;C</b>.<br><br>
3. <b>Membaca Tanda Negatif (-) pada Suhu:</b><br>
Dalam termometer:<br>
&bull; Angka positif (+) artinya suhu berada <b>di atas 0 &deg;C</b> (makin ke atas makin hangat/panas).<br>
&bull; Angka negatif (-) artinya suhu berada <b>di bawah 0 &deg;C</b> (makin ke bawah makin beku/sangat dingin).<br><br>
Maka suhu <b>-19 &deg;C</b> dibaca tepat sebagai <b>19 derajat di bawah 0 &deg;C</b>.`
  },

  // ==========================================
  // SOAL 6: Unsur-unsur Aljabar
  // ==========================================
  {
    id: 2706,
    question: `Diketahui bentuk aljabar berikut ini:<br>
<div class="p-3 bg-slate-900/60 rounded-xl border border-slate-700/60 text-center my-2 text-base font-mono text-amber-300">
  2ab - b<sup>2</sup> + 3a<sup>2</sup>b + ab<sup>2</sup> - 5
</div>
Perhatikan tiga pernyataan berikut:<br>
(1) Terdapat 2 variabel yaitu a dan b.<br>
(2) Konstanta pada bentuk aljabar tersebut adalah 5.<br>
(3) Bilangan 2, -1, 3, dan 1 merupakan koefisien.<br><br>
Manakah status kebenaran (Benar/Salah) yang tepat untuk pernyataan (1), (2), dan (3)?`,
    options: [
      'A. (1) Benar, (2) Salah, (3) Benar',
      'B. (1) Benar, (2) Benar, (3) Salah',
      'C. (1) Salah, (2) Benar, (3) Benar',
      'D. (1) Salah, (2) Salah, (3) Benar'
    ],
    correctAnswer: 0,
    isHots: false,
    explanation: `<b>Kunci Jawaban: A. (1) Benar, (2) Salah, (3) Benar</b><br><br>
<b>Mari Kita Bedah Istilah Aljabar dengan Bahasa Sangat Gampang:</b><br><br>
1. <b>Apa itu Variabel? (Huruf Simbol)</b><br>
Variabel adalah lambang pengganti bilangan yang biasanya ditulis dengan huruf kecil. Pada bentuk aljabar di atas, huruf yang digunakan hanya huruf <b>a</b> dan <b>b</b>. Meskipun ada pangkat (seperti a<sup>2</sup> atau b<sup>2</sup>), jenis variabel dasarnya tetap hanya 2, yaitu a dan b.<br>
&rarr; <b>Pernyataan (1) BENAR.</b><br><br>
2. <b>Apa itu Konstanta? (Angka Jomblo/Sendirian Tanpa Huruf)</b><br>
Konstanta adalah suku yang berupa bilangan murni tanpa ditemani variabel (huruf). Di ujung kanan ada angka -5. Tanda minus di depannya WAJIB ikut dihitung! Jadi konstantanya adalah <b>-5</b>, BUKAN 5 positif.<br>
&rarr; <b>Pernyataan (2) SALAH.</b><br><br>
3. <b>Apa itu Koefisien? (Angka Pengali yang Menempel di Depan Huruf)</b><br>
Mari kita lihat angka di depan tiap suku:<br>
&bull; Pada suku 2ab &rarr; koefisiennya adalah <b>2</b>.<br>
&bull; Pada suku -b<sup>2</sup> &rarr; angka 1 tidak ditulis, tetapi ada tanda minus, jadi koefisiennya adalah <b>-1</b>.<br>
&bull; Pada suku +3a<sup>2</sup>b &rarr; koefisiennya adalah <b>3</b>.<br>
&bull; Pada suku +ab<sup>2</sup> &rarr; angka 1 di depan tidak ditulis, jadi koefisiennya adalah <b>1</b>.<br>
Jadi bilangan 2, -1, 3, dan 1 memang benar koefisien.<br>
&rarr; <b>Pernyataan (3) BENAR.</b>`
  },

  // ==========================================
  // SOAL 7: Kalimat Matematika Harga Barang
  // ==========================================
  {
    id: 2707,
    image: '/images/soal_asli_tka_math/soalaslitka_math_q7.PNG',
    images: ["/images/soal_asli_tka_math/soalaslitka_math_q7.PNG"],
    imageCaption: 'Ilustrasi Stimulus Soal 7: Kalimat Matematika Harga Barang',
    question: `Rino, Tiko, dan Bayu pergi ke toko buku bersama-sama untuk membeli buku tulis dan pulpen keperluan sekolah.<br>
Catatan pembelian masing-masing anak:<br>
&bull; <b>Rino:</b> membeli 4 buku tulis dan 3 pulpen.<br>
&bull; <b>Tiko:</b> membeli 2 kali lipat dari banyak barang yang dibeli Rino.<br>
&bull; <b>Bayu:</b> membeli 3 kali lipat dari banyak barang yang dibeli Rino.<br><br>
Apabila harga 1 buku tulis disimbolkan dengan <b>x</b> dan harga 1 pulpen disimbolkan dengan <b>y</b>, bagaimanakah bentuk aljabar yang menyatakan <b>total harga seluruh barang yang harus dibayar oleh ketiga anak tersebut</b>?`,
    options: [
      '24x + 18y',
      '20x + 15y',
      '12x + 9y',
      '4x + 3y'
    ],
    correctAnswer: 0,
    isHots: false,
    explanation: `<b>Kunci Jawaban: A. 24x + 18y</b><br><br>
<b>Langkah Perhitungan Cepat &amp; Jelas:</b><br>
Misalkan:<br>
x = harga 1 buku tulis<br>
y = harga 1 pulpen<br><br>
1. <b>Belanjaan Rino:</b><br>
4 buku + 3 pulpen = <b>4x + 3y</b><br><br>
2. <b>Belanjaan Tiko (2 kali lipat Rino):</b><br>
2 &times; (4x + 3y) = (2 &times; 4x) + (2 &times; 3y) = <b>8x + 6y</b><br><br>
3. <b>Belanjaan Bayu (3 kali lipat Rino):</b><br>
3 &times; (4x + 3y) = (3 &times; 4x) + (3 &times; 3y) = <b>12x + 9y</b><br><br>
4. <b>Jumlahkan Total Belanjaan Ketiganya:</b><br>
Jumlahkan suku sejenis (buku dengan buku, pulpen dengan pulpen):<br>
&bull; Total buku (x) = 4x + 8x + 12x = <b>24x</b><br>
&bull; Total pulpen (y) = 3y + 6y + 9y = <b>18y</b><br><br>
Maka bentuk aljabar totalnya adalah <b>24x + 18y</b>.`
  },

  // ==========================================
  // SOAL 8: Konsep Fungsi (Pemetaan)
  // ==========================================
  {
    id: 2708,
    image: '/images/soal_asli_tka_math/soalaslitka_math_q8.PNG',
    images: ["/images/soal_asli_tka_math/soalaslitka_math_q8.PNG"],
    imageCaption: 'Ilustrasi Stimulus Soal 8: Konsep Fungsi (Pemetaan)',
    question: `Perhatikan diagram panah berikut ini.<br>
Apakah diagram 1, diagram 2, dan diagram 3 merupakan fungsi?<br>
Tentukan fungsi atau bukan fungsi pada setiap diagram berikut!<br><br>
<div class="overflow-x-auto my-2">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-700 rounded-lg">
    <thead class="bg-slate-800 text-slate-200">
      <tr>
        <th class="p-2 border-r border-slate-700">Pernyataan</th>
        <th class="p-2 text-center border-r border-slate-700">Fungsi</th>
        <th class="p-2 text-center">Bukan Fungsi</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-800 text-slate-300">
      <tr><td class="p-2 border-r border-slate-700 font-medium">Diagram 1</td><td class="p-2 text-center border-r border-slate-700">( )</td><td class="p-2 text-center">( )</td></tr>
      <tr><td class="p-2 border-r border-slate-700 font-medium">Diagram 2</td><td class="p-2 text-center border-r border-slate-700">( )</td><td class="p-2 text-center">( )</td></tr>
      <tr><td class="p-2 border-r border-slate-700 font-medium">Diagram 3</td><td class="p-2 text-center border-r border-slate-700">( )</td><td class="p-2 text-center">( )</td></tr>
    </tbody>
  </table>
</div>`,
    options: [
      'Diagram 1: Fungsi, Diagram 2: Bukan Fungsi, Diagram 3: Fungsi',
      'Diagram 1: Fungsi, Diagram 2: Fungsi, Diagram 3: Bukan Fungsi',
      'Diagram 1: Bukan Fungsi, Diagram 2: Fungsi, Diagram 3: Bukan Fungsi',
      'Diagram 1: Bukan Fungsi, Diagram 2: Bukan Fungsi, Diagram 3: Fungsi'
    ],
    correctAnswer: 3,
    isHots: false,
    explanation: `<b>Kunci Jawaban: (D) Diagram 1: Bukan Fungsi, Diagram 2: Bukan Fungsi, Diagram 3: Fungsi</b><br><br>
Aturan emas sebuah Diagram Fungsi (Pemetaan) adalah: Semua angka di kubu kiri (A) WAJIB menembakkan tepat SATU anak panah ke kanan (B). Tidak boleh ada yang tidak memanah, dan tidak boleh ada yang memanah dua kali.<br><br>
&bull; <b>Diagram 1 (Bukan Fungsi):</b> Angka 9 tidak memiliki pasangan.<br>
&bull; <b>Diagram 2 (Bukan Fungsi):</b> Angka 13 menembak dua kali (ke r dan s).<br>
&bull; <b>Diagram 3 (Fungsi):</b> Angka 5, 9, 13, 17 masing-masing hanya menembakkan 1 anak panah.`
  },

  // ==========================================
  // SOAL 9: Rumus Fungsi Tarif Kuota
  // ==========================================
  {
    id: 2709,
    image: '/images/soal_asli_tka_math/soalaslitka_math_q9.PNG',
    images: ["/images/soal_asli_tka_math/soalaslitka_math_q9.PNG"],
    imageCaption: 'Ilustrasi Stimulus Soal 9: Rumus Fungsi Tarif Kuota',
    question: `Naura menggunakan operator seluler "Nusantara Mobile". Terdapat beberapa pilihan paket kuota internet yang dapat dipilih oleh pelanggannya. Naura menuliskan pilihan paket kuota yang tersedia dan harganya dalam bentuk himpunan pasangan berurutan.<br><br>
Catatan tersebut ditulis dalam bentuk (paket kuota internet dalam gigabyte (GB), harga dalam rupiah). Sebagai contoh, (5, 14.000) memiliki arti bahwa paket kuota internet 5 GB dikenakan harga sebesar Rp14.000,00. Jika x adalah paket kuota internet dalam GB, rumus fungsi f(x) yang menyatakan harga paket kuota internet adalah ....`,
    options: [
      'f(x) = 2.000x + 4.000',
      'f(x) = 2.000x + 1.000',
      'f(x) = 1.800x + 9.000',
      'f(x) = 1.800x + 5.000'
    ],
    correctAnswer: 3,
    isHots: false,
    explanation: `<b>Kunci Jawaban: f(x) = 1.800x + 5.000</b><br><br>
<b>Langkah Penentuan Rumus Fungsi:</b><br>
Misalkan rumus fungsi berbentuk linear: f(x) = ax + b<br>
1. Untuk x = 5 GB &rarr; f(5) = 5a + b = 14.000<br>
2. Untuk x = 10 GB &rarr; f(10) = 10a + b = 23.000<br><br>
Kurangkan kedua persamaan:<br>
(10a + b) - (5a + b) = 23.000 - 14.000<br>
5a = 9.000<br>
a = 1.800<br><br>
Substitusi nilai a ke persamaan pertama:<br>
5(1.800) + b = 14.000<br>
9.000 + b = 14.000<br>
b = 14.000 - 9.000 = 5.000<br><br>
Maka rumus fungsi harga kuota adalah: <b>f(x) = 1.800x + 5.000</b>.`
  },

  // ==========================================
  // SOAL 10: Tagihan Air PDAM
  // ==========================================
  {
    id: 2710,
    image: '/images/soal_asli_tka_math/soalaslitka_math_q10.PNG',
    images: ["/images/soal_asli_tka_math/soalaslitka_math_q10.PNG"],
    imageCaption: 'Ilustrasi Stimulus Soal 10: Tagihan Air PDAM',
    question: `Pembayaran air PDAM setiap rumah bergantung pada banyaknya pemakaian air bulanan.<br>
Diketahui ketentuan biaya pelanggan baru:<br>
&bull; Biaya pemasangan awal meteran baru adalah <b>Rp800.000,00</b>.<br>
&bull; Pada grafik pemakaian air, titik awal berada di Rp800.000 (pemakaian 0 m<sup>3</sup>). Ketika pemakaian air bertambah 10 m<sup>3</sup>, total tagihan naik menjadi Rp820.000,00.<br><br>
Seorang pelanggan baru menghabiskan total biaya sebesar <b>Rp920.000,00</b> dalam 1 bulan pemakaian pertama termasuk biaya pemasangan baru.<br><br>
Perhatikan tiga pernyataan berikut:<br>
(1) Jumlah pemakaian air orang tersebut mencapai 60 m<sup>3</sup>.<br>
(2) Orang tersebut akan menghabiskan biaya sebesar Rp120.000,00 jika tanpa biaya pemasangan baru.<br>
(3) Tarif tagihan dapat mencapai Rp1.000.000,00 jika pemakaian air kurang dari 90 m<sup>3</sup> dengan pemasangan baru.<br><br>
Manakah status kebenaran (Benar/Salah) yang tepat untuk pernyataan (1), (2), dan (3)?`,
    options: [
      'A. (1) Benar, (2) Benar, (3) Salah',
      'B. (1) Benar, (2) Salah, (3) Benar',
      'C. (1) Salah, (2) Benar, (3) Salah',
      'D. (1) Benar, (2) Benar, (3) Benar'
    ],
    correctAnswer: 0,
    isHots: true,
    explanation: `<b>Kunci Jawaban: A. (1) Benar, (2) Benar, (3) Salah</b><br><br>
<b>Langkah Penyelidikan Angka Step-by-Step:</b><br><br>
1. <b>Cari Tarif Pemakaian Air per 1 m<sup>3</sup>:</b><br>
Untuk pemakaian 10 m<sup>3</sup>, tagihan naik dari Rp800.000 ke Rp820.000 (selisih Rp20.000).<br>
Maka tarif air per 1 m<sup>3</sup> = 20.000 &divide; 10 = <b>Rp2.000,00 per m<sup>3</sup></b>.<br><br>
2. <b>Analisis Tagihan Rp920.000:</b><br>
Total tagihan = Biaya pasang awal + Biaya pemakaian air<br>
Rp920.000 = Rp800.000 + Biaya air<br>
Biaya air murni saja = 920.000 - 800.000 = <b>Rp120.000,00</b>.<br>
&rarr; <b>Pernyataan (2) BENAR.</b><br><br>
Berapa volume air yang dipakai?<br>
Volume = 120.000 &divide; 2.000 = <b>60 m<sup>3</sup></b>.<br>
&rarr; <b>Pernyataan (1) BENAR.</b><br><br>
3. <b>Uji Pernyataan (3): Apakah bisa tembus 1 juta jika air kurang dari 90 m<sup>3</sup>?</b><br>
Jika memakai air maksimal tepat 90 m<sup>3</sup>:<br>
Total biaya = 800.000 + (90 &times; 2.000) = 800.000 + 180.000 = <b>Rp980.000,00</b>.<br>
Rp980.000 ini masih di bawah 1 juta! Untuk bisa mencapai 1 juta, pemakaian air harus minimal 100 m<sup>3</sup>.<br>
Jadi jika pemakaian kurang dari 90 m<sup>3</sup>, tagihan TIDAK MUNGKIN mencapai 1 juta.<br>
&rarr; <b>Pernyataan (3) SALAH.</b>`
  },

  // ==========================================
  // SOAL 11: Koordinat Pekarangan Pohon Mangga
  // ==========================================
  {
    id: 2711,
    image: '/images/soal_asli_tka_math/soalaslitka_math_q11.PNG',
    images: ["/images/soal_asli_tka_math/soalaslitka_math_q11.PNG"],
    imageCaption: 'Ilustrasi Stimulus Soal 11: Koordinat Pekarangan Pohon Mangga',
    question: `Ayunda memanfaatkan lahan pekarangannya dengan sistem koordinat Kartesius yang dibagi menjadi empat wilayah.<br><br>
<b>Aturan Penanaman:</b><br>
Berdasarkan pertimbangan sinar matahari dan kesuburan tanah, Ayunda <b>HANYA boleh menanam pohon mangga di Lokasi 1, Lokasi 3, dan Lokasi 4</b> pada petak lahan yang masih kosong (belum ada tanaman lain). <b>Lokasi 2 sama sekali TIDAK BOLEH ditanami pohon mangga</b>.<br><br>
Tentukan apakah koordinat berikut <b>"Bisa ditanami pohon mangga"</b> atau <b>"Tidak bisa ditanami pohon mangga"</b>:<br>
(1) Titik (9, -2)<br>
(2) Titik (-2, 9)<br>
(3) Titik (-9, -9)`,
    options: [
      'A. (1) Bisa ditanami, (2) Tidak bisa ditanami, (3) Bisa ditanami',
      'B. (1) Bisa ditanami, (2) Bisa ditanami, (3) Tidak bisa ditanami',
      'C. (1) Tidak bisa ditanami, (2) Bisa ditanami, (3) Tidak bisa ditanami',
      'D. (1) Tidak bisa ditanami, (2) Tidak bisa ditanami, (3) Bisa ditanami'
    ],
    correctAnswer: 0,
    isHots: false,
    explanation: `<b>Kunci Jawaban: A. (1) Bisa ditanami, (2) Tidak bisa ditanami, (3) Bisa ditanami</b><br><br>
<b>Panduan Membaca Koordinat Kartesius (x, y):</b><br>
&bull; Nilai x: Positif = Kanan, Negatif = Kiri.<br>
&bull; Nilai y: Positif = Atas, Negatif = Bawah.<br><br>
1. <b>Titik (9, -2):</b><br>
x = 9 (kanan), y = -2 (bawah). Berada di area Kanan Bawah = <b>Lokasi 4</b>.<br>
Karena Lokasi 4 diperbolehkan dan petaknya kosong, maka &rarr; <b>Bisa ditanami pohon mangga</b>.<br><br>
2. <b>Titik (-2, 9):</b><br>
x = -2 (kiri), y = 9 (atas). Berada di area Kiri Atas = <b>Lokasi 2</b>.<br>
Aturan dengan tegas melarang penanaman di Lokasi 2. Maka &rarr; <b>Tidak bisa ditanami pohon mangga</b>.<br><br>
3. <b>Titik (-9, -9):</b><br>
x = -9 (kiri), y = -9 (bawah). Berada di area Kiri Bawah = <b>Lokasi 3</b>.<br>
Lokasi 3 diperbolehkan dan lahannya kosong, maka &rarr; <b>Bisa ditanami pohon mangga</b>.`
  },

  // ==========================================
  // SOAL 12: Pertidaksamaan Linear Satu Variabel
  // ==========================================
  {
    id: 2712,
    image: '/images/soal_asli_tka_math/soalaslitka_math_q12.PNG',
    images: ["/images/soal_asli_tka_math/soalaslitka_math_q12.PNG"],
    imageCaption: 'Ilustrasi Stimulus Soal 12: Pertidaksamaan Linear Satu Variabel',
    question: `Diketahui pertidaksamaan sebagai berikut.<br>
<div class="p-3 bg-slate-900/60 rounded-xl border border-slate-700/60 text-center my-2 text-base sm:text-lg font-mono text-amber-300">
  3x + 17 &le; 7 - 2x
</div>
Manakah garis bilangan yang menunjukkan himpunan penyelesaian dari pertidaksamaan tersebut?`,
    options: [
      'Garis bilangan dengan bulatan penuh (hitam) di angka -2 dan panah mengarah ke kiri (x &le; -2)',
      'Garis bilangan dengan bulatan kosong (putih) di angka -2 dan panah mengarah ke kiri (x &lt; -2)',
      'Garis bilangan dengan bulatan penuh (hitam) di angka -2 dan panah mengarah ke kanan (x &ge; -2)',
      'Garis bilangan dengan bulatan penuh (hitam) di angka 2 dan panah mengarah ke kiri (x &le; 2)'
    ],
    correctAnswer: 0,
    isHots: false,
    explanation: `<b>Kunci Jawaban: Garis bilangan dengan bulatan penuh di angka -2 dan panah mengarah ke kiri (x &le; -2)</b><br><br>
<b>Langkah Menyelesaikan Pertidaksamaan:</b><br>
3x + 17 &le; 7 - 2x<br><br>
1. Pindahkan suku bervariabel ke ruas kiri:<br>
3x + 2x + 17 &le; 7<br>
5x + 17 &le; 7<br><br>
2. Pindahkan konstanta ke ruas kanan:<br>
5x &le; 7 - 17<br>
5x &le; -10<br><br>
3. Selesaikan nilai x:<br>
x &le; -10 / 5<br>
<b>x &le; -2</b><br><br>
Pada garis bilangan:<br>
&bull; Karena tanda pertidaksamaan mengandung tanda sama dengan (&le;), titik pada nilai -2 digambar dengan <b>bulatan penuh</b>.<br>
&bull; Karena tanda kurang dari (&le;), daerah penyelesaian membentang <b>ke arah kiri</b>.`
  },

  // ==========================================
  // SOAL 13: SPLDV Jajanan Tradisional
  // ==========================================
  {
    id: 2713,
    image: '/images/soal_asli_tka_math/soalaslitka_math_q13.PNG',
    images: ["/images/soal_asli_tka_math/soalaslitka_math_q13.PNG"],
    imageCaption: 'Ilustrasi Stimulus Soal 13: SPLDV Jajanan Tradisional',
    question: `Di sebuah bazar makanan tradisional, kue putu mayang dan kue pancong dijual dalam kemasan kotak.<br><br>
Berapakah harga yang harus dibayar jika seseorang membeli <b>3 kotak kue putu mayang dan 1 kotak kue pancong</b>?`,
    options: [
      'Rp10.000,00',
      'Rp14.000,00',
      'Rp44.000,00',
      'Rp52.000,00'
    ],
    correctAnswer: 2,
    isHots: true,
    explanation: `<b>Kunci Jawaban: C. Rp44.000,00</b><br><br>
<b>Langkah Penyelesaian Sistem Persamaan (Metode Eliminasi &amp; Substitusi):</b><br>
Misalkan:<br>
x = harga 1 kotak kue putu mayang<br>
y = harga 1 kotak kue pancong<br><br>
Model matematikanya:<br>
(1) 3x + 2y = 58.000<br>
(2) 2x + 3y = 62.000<br><br>
1. <b>Samakan koefisien y untuk menemukan harga x:</b><br>
Kalikan persamaan (1) dengan 3 dan persamaan (2) dengan 2:<br>
(3x + 2y = 58.000) &times; 3 &rarr; 9x + 6y = 174.000<br>
(2x + 3y = 62.000) &times; 2 &rarr; 4x + 6y = 124.000<br>
------------------------------------------------ - (kurangkan)<br>
5x = 50.000<br>
<b>x = Rp10.000,00</b> (Harga 1 kotak Putu Mayang = Rp10.000)<br><br>
2. <b>Cari harga y (Kue Pancong):</b><br>
Masukkan x = 10.000 ke persamaan (1):<br>
3(10.000) + 2y = 58.000<br>
30.000 + 2y = 58.000<br>
2y = 58.000 - 30.000 = 28.000<br>
<b>y = Rp14.000,00</b> (Harga 1 kotak Kue Pancong = Rp14.000)<br><br>
3. <b>Hitung Pertanyaan Soal (3 Putu Mayang + 1 Pancong):</b><br>
3x + 1y = 3(Rp10.000) + 1(Rp14.000)<br>
= Rp30.000 + Rp14.000 = <b>Rp44.000,00</b>.`
  },

  // ==========================================
  // SOAL 14: Pola Barisan Susunan Batu Bata
  // ==========================================
  {
    id: 2714,
    image: '/images/soal_asli_tka_math/soalaslitka_math_q14.PNG',
    images: ["/images/soal_asli_tka_math/soalaslitka_math_q14.PNG"],
    imageCaption: 'Ilustrasi Stimulus Soal 14: Pola Barisan Susunan Batu Bata',
    question: `Di suatu kompleks perumahan, pagar rumah disusun bertingkat menggunakan dua jenis batu bata: batu bata berbentuk segitiga dan batu bata berbentuk persegi panjang.<br><br>
Jika ingin dibuat pagar dengan susunan setinggi <b>10 tingkat</b>, berapakah <b>jumlah total batu bata (gabungan segitiga dan persegi panjang) yang ada HANYA pada tingkat ke-10</b>?`,
    options: [
      '10 batu bata',
      '11 batu bata',
      '20 batu bata',
      '21 batu bata'
    ],
    correctAnswer: 3,
    isHots: false,
    explanation: `<b>Kunci Jawaban: D. 21 batu bata</b><br><br>
<b>Mari Temukan Polanya Secara Sangat Jelas:</b><br>
Lihat keteraturan pada tiap nomor tingkat:<br>
&bull; <b>Batu bata segitiga:</b> banyaknya selalu SAMA PERSIS dengan nomor tingkatnya.<br>
  Tingkat 1 = 1 segitiga<br>
  Tingkat 2 = 2 segitiga<br>
  Tingkat 3 = 3 segitiga<br>
  Maka pada <b>Tingkat 10 = 10 segitiga</b>.<br><br>
&bull; <b>Batu bata persegi panjang:</b> banyaknya selalu LEBIH 1 dari nomor tingkatnya.<br>
  Tingkat 1 = 2 persegi panjang (1 + 1)<br>
  Tingkat 2 = 3 persegi panjang (2 + 1)<br>
  Tingkat 3 = 4 persegi panjang (3 + 1)<br>
  Maka pada <b>Tingkat 10 = 11 persegi panjang</b> (10 + 1).<br><br>
<b>Total batu bata pada tingkat ke-10:</b><br>
Jumlah = 10 (segitiga) + 11 (persegi panjang) = <b>21 batu bata</b>.<br><br>
<i>(Atau menggunakan rumus deret barisan aritmatika: 3, 5, 7, ... dengan beda b = 2 &rarr; U<sub>10</sub> = 3 + 9(2) = 3 + 18 = 21).</i>`
  },

  // ==========================================
  // SOAL 15: Ketersediaan Bahan Pagar (Deret Aritmatika)
  // ==========================================
  {
    id: 2715,
    image: '/images/soal_asli_tka_math/soalaslitka_math_q15.PNG',
    images: ["/images/soal_asli_tka_math/soalaslitka_math_q15.PNG"],
    imageCaption: 'Ilustrasi Stimulus Soal 15: Ketersediaan Bahan Pagar (Deret Aritmatika)',
    question: `Berdasarkan pola susunan pagar batu bata (segitiga dan persegi panjang) pada stimulus sebelumnya:<br>
Akan dibangun <b>DUA pagar yang sama persis</b>, di mana masing-masing pagar memiliki <b>9 tingkat susunan</b>.<br><br>
Saat ini di gudang hanya tersedia persediaan bahan:<br>
&bull; 60 buah batu bata segitiga<br>
&bull; 80 buah batu bata persegi panjang<br><br>
Perhatikan tiga pernyataan berikut mengenai kecukupan bahan:<br>
(1) Diperlukan tambahan 15 batu bata segitiga.<br>
(2) Diperlukan tambahan 28 batu bata persegi panjang.<br>
(3) Diperlukan tambahan total sebanyak 43 batu bata baik segitiga maupun persegi panjang.<br><br>
Manakah status kebenaran (Benar/Salah) yang tepat untuk pernyataan (1), (2), dan (3)?`,
    options: [
      'A. (1) Salah, (2) Benar, (3) Salah',
      'B. (1) Benar, (2) Benar, (3) Salah',
      'C. (1) Salah, (2) Salah, (3) Benar',
      'D. (1) Benar, (2) Salah, (3) Benar'
    ],
    correctAnswer: 0,
    isHots: true,
    explanation: `<b>Kunci Jawaban: A. (1) Salah, (2) Benar, (3) Salah</b><br><br>
<b>Langkah Perhitungan Teliti Step-by-Step:</b><br><br>
1. <b>Hitung Kebutuhan untuk 1 Buah Pagar (9 Tingkat):</b><br>
&bull; Bata Segitiga (Tingkat 1 s.d. 9):<br>
  1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = <b>45 buah</b>.<br>
&bull; Bata Persegi Panjang (Tingkat 1 s.d. 9):<br>
  2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = <b>54 buah</b>.<br><br>
2. <b>Hitung Kebutuhan untuk DUA Pagar (Kalikan 2):</b><br>
&bull; Total Segitiga yang dibutuhkan = 2 &times; 45 = <b>90 buah</b>.<br>
&bull; Total Persegi Panjang yang dibutuhkan = 2 &times; 54 = <b>108 buah</b>.<br><br>
3. <b>Bandingkan dengan Persediaan di Gudang:</b><br>
&bull; <b>Kekurangan Segitiga:</b><br>
  Dibutuhkan 90 buah, persediaan hanya 60 buah.<br>
  Kekurangan = 90 - 60 = <b>30 buah</b>.<br>
  <i>Pernyataan (1) menyatakan butuh tambahan 15 buah &rarr; <b>SALAH</b> (seharusnya 30).</i><br><br>
&bull; <b>Kekurangan Persegi Panjang:</b><br>
  Dibutuhkan 108 buah, persediaan hanya 80 buah.<br>
  Kekurangan = 108 - 80 = <b>28 buah</b>.<br>
  <i>Pernyataan (2) menyatakan butuh tambahan 28 buah &rarr; <b>BENAR</b>.</i><br><br>
&bull; <b>Kekurangan Total Seluruh Bata:</b><br>
  Kekurangan total = 30 + 28 = <b>58 buah</b>.<br>
  <i>Pernyataan (3) menyatakan butuh tambahan 43 buah &rarr; <b>SALAH</b> (seharusnya 58).</i>`
  }
];
