import { Question } from '../types';

export const SOAL_ASLI_TKA_MATH_PART2: Question[] = [
  // ==========================================
  // SOAL 16: Garis AB dan PQ berpotongan
  // ==========================================
  {
    id: 2716,
    image: '/images/soal_asli_tka_math/soalaslitka_math_q16.PNG',
    images: ["/images/soal_asli_tka_math/soalaslitka_math_q16.PNG"],
    imageCaption: 'Ilustrasi Stimulus Soal 16: Garis AB dan PQ yang Berpotongan',
    question: `Garis AB dan garis PQ berpotongan di titik Q seperti gambar berikut. Nilai x yang tepat adalah ....`,
    options: [
      '15°',
      '24°',
      '69°',
      '96°'
    ],
    correctAnswer: 1,
    isHots: false,
    explanation: `<b>Kunci Jawaban: 24°</b><br><br>
<b>Sudut Garis Berpotongan</b><br>
<b>Konsep Dasar:</b> Garis AB adalah garis lurus. Sebuah garis lurus memiliki total sudut pasti sebesar 180°.<br>
<b>Buat Persamaan:</b> Jika sudut di sebelah kiri adalah 72° dan di sebelah kanan adalah (4x + 12)°, maka penjumlahan keduanya wajib mencapai 180°.<br>
72 + 4x + 12 = 180<br>
4x + 84 = 180<br>
4x = 180 - 84<br>
4x = 96<br>
<b>Jawaban Akhir:</b> Nilai x adalah 96 &divide; 4 = <b>24°</b>.`
  },

  // ==========================================
  // SOAL 17: Nilai b pada gambar sudut
  // ==========================================
  {
    id: 2717,
    image: '/images/soal_asli_tka_math/soalaslitka_math_q17.PNG',
    images: ["/images/soal_asli_tka_math/soalaslitka_math_q17.PNG"],
    imageCaption: 'Ilustrasi Stimulus Soal 17: Hubungan Antarsudut (Nilai b)',
    question: `Perhatikan gambar berikut ini!<br>
Berdasarkan gambar tersebut, berapa nilai b?`,
    options: [
      '46',
      '68',
      '112',
      '134'
    ],
    correctAnswer: 0,
    isHots: false,
    explanation: `<b>Kunci Jawaban: A. 46</b><br><br>
<b>Sudut Sejajar dan Segitiga</b><br>
<b>Pahami Bentuk Geometri:</b> Garis sejajar p dan q dipotong oleh garis lurus dari atas (membentuk sudut 68° dan sisi segitiga). Ini menciptakan dua segitiga yang "sebangun" (segitiga besar dan segitiga kecil di pojok kiri atas).<br><br>
<b>Analisis Sudut:</b> Sudut 46° terletak di perpotongan garis q. Karena garis p dan q itu sejajar (arah panahnya sama), maka sudut di lokasi yang sama persis pada perpotongan garis p juga bernilai 46° (disebut sudut sehadap).<br><br>
<b>Jawaban Akhir:</b> Sudut b menempati posisi yang sama persis (sehadap) dengan sudut 46° di sepanjang garis miring segitiga. Oleh karena itu, nilai b adalah <b>46</b>.`
  },

  // ==========================================
  // SOAL 18: Jaring-jaring Prisma Segitiga
  // ==========================================
  {
    id: 2718,
    image: '/images/soal_asli_tka_math/soalaslitka_math_q18.PNG',
    images: ["/images/soal_asli_tka_math/soalaslitka_math_q18.PNG"],
    imageCaption: 'Ilustrasi Stimulus Soal 18: Jaring-jaring Prisma Segitiga',
    question: `Perhatikan gambar jaring-jaring prisma segitiga berikut.<br>
Sisi tutup pada prisma tersebut adalah sisi ABC. Rusuk AC pada sisi tutup akan berhimpit dengan salah satu rusuk pada sisi tegak prisma nomor ....`,
    options: [
      '1',
      '2',
      '3',
      '4'
    ],
    correctAnswer: 2,
    isHots: false,
    explanation: `<b>Kunci Jawaban: C. 3</b><br><br>
<b>Jaring-jaring Prisma Segitiga</b><br>
<b>Lipat Jaring-jaring Secara Imajiner:</b> Bayangkan segitiga cokelat (tengah) sebagai alas prisma yang diletakkan di lantai.<br>
Persegi panjang merah muda (1), biru tua (3), dan hijau (4) akan dilipat berdiri tegak ke atas (90 derajat) membentuk dinding-dinding prisma.<br><br>
<b>Posisi Tutup:</b> Segitiga oranye ABC (tutupnya) menempel pada dinding nomor 1. Saat dinding 1 sudah berdiri, segitiga ABC akan dilipat rebah sebagai atap (posisinya akan sama persis dengan segitiga cokelat di bawahnya).<br><br>
<b>Mencocokkan Rusuk:</b><br>
&bull; Rusuk AB menjadi engsel pada dinding nomor 1.<br>
&bull; Rusuk BC yang di atas akan mendarat menempel ke sisi hijau (nomor 4).<br>
&bull; Rusuk AC yang berada di bawah panjangnya akan berhimpit tepat ke sisi dinding biru tua (nomor 3).<br><br>
<b>Jawaban Akhir:</b> Rusuk AC akan berhimpit dengan sisi tegak prisma nomor <b>3</b>.`
  },

  // ==========================================
  // SOAL 19: Pagar Tangga Pak Anton
  // ==========================================
  {
    id: 2719,
    image: '/images/soal_asli_tka_math/soalaslitka_math_q19.PNG',
    images: ["/images/soal_asli_tka_math/soalaslitka_math_q19.PNG"],
    imageCaption: 'Ilustrasi Stimulus Soal 19: Pagar Tangga Pak Anton',
    question: `Pak Anton baru saja membangun rumah. Ada beberapa bagian dalam rumahnya yang belum terpasang. Salah satunya adalah pagar tangga. Pagar tangga berfungsi untuk pegangan saat naik maupun turun tangga. Berikut adalah gambar tangga Pak Anton.<br><br>
Gambar garis putus-putus merupakan rancangan pagar tangga. Setiap anak tangga memiliki tinggi yang sama yaitu 25 cm.<br><br>
Suatu hari, Pak Anton ke toko untuk membeli bahan pagar tangga. Tersedia 4 jenis bahan pagar tangga yakni:<br>
&bull; pagar bahan kayu jati sepanjang 6 meter<br>
&bull; pagar bahan kayu meranti sepanjang 4 meter<br>
&bull; pagar bahan besi sepanjang 5,5 meter<br>
&bull; pagar bahan aluminium sepanjang 4,5 meter.<br><br>
Jenis bahan apa yang harus dipilih Pak Anton agar cukup untuk membuat pagar tangga dan memiliki sisa paling sedikit?`,
    options: [
      'Pagar kayu jati',
      'Pagar kayu meranti',
      'Pagar besi',
      'Pagar alumunium'
    ],
    correctAnswer: 3,
    isHots: true,
    explanation: `<b>Kunci Jawaban: D. Pagar Alumunium</b><br><br>
<b>Pagar Tangga (Teorema Pythagoras)</b><br>
<b>Cari Panjang Tangga Miring:</b> Total panjang bagian bawah tangga adalah 150 cm. Total tinggi tangga adalah 6 anak tangga &times; 25 cm = 150 cm. Kita mencari garis miringnya (pagar) menggunakan rumus Pythagoras:<br>
Panjang miring = &radic;(150<sup>2</sup> + 150<sup>2</sup>) = &radic;(22.500 + 22.500) = &radic;45.000<br>
Hasil perkiraan &radic;45.000 adalah sekitar 212,13 cm (atau 2,12 meter).<br><br>
<b>Hitung Total Bahan:</b> Gambar menunjukkan ada dua sisi pagar tangga (kiri dan kanan yang ditandai garis putus-putus). Total panjang bahan yang dibutuhkan adalah 2 &times; 2,12 meter = 4,24 meter.<br><br>
<b>Pilih Bahan yang Pas:</b> Pak Anton butuh 4,24 meter.<br>
&bull; Kayu meranti (4 m): Kurang (tidak cukup).<br>
&bull; Besi (5,5 m): sisa 1,26 m.<br>
&bull; Kayu jati (6 m): sisa 1,76 m.<br>
&bull; Aluminium (4,5 m): sisa 0,26 m. Ini adalah sisa yang paling sedikit (paling pas) dan tidak kurang.<br><br>
<b>Jawaban Akhir:</b> Pilihan yang tepat adalah <b>Pagar alumunium</b>.`
  },

  // ==========================================
  // SOAL 20: Translasi Segitiga Kongruen
  // ==========================================
  {
    id: 2720,
    image: '/images/soal_asli_tka_math/soalaslitka_math_q20.PNG',
    images: ["/images/soal_asli_tka_math/soalaslitka_math_q20.PNG"],
    imageCaption: 'Ilustrasi Stimulus Soal 20: Translasi Segitiga Kongruen',
    question: `Perhatikan dua segititga kongruen pada koordinat kartesius berikut.<br>
Diketahui titik Q = titik K. Segitiga PQR akan ditranslasikan oleh T = (–4, –2). Bayangan segitiga PQR dan segitiga KLM akan saling ....`,
    options: [
      'tegak lurus',
      'berpotongan',
      'sejajar',
      'berhimpit'
    ],
    correctAnswer: 2,
    isHots: false,
    explanation: `<b>Kunci Jawaban: C. Sejajar</b><br><br>
<b>Translasi Segitiga</b><br>
<b>Cek Titik Asli:</b> Berdasarkan sumbu koordinat, posisi Segitiga PQR adalah P(-6,9), Q(0,7), dan R(-3,4). Posisi Segitiga KLM adalah K(0,7), L(6,5), dan M(3,2).<br><br>
<b>Buktikan Kesamaan Garis:</b> Jika dihitung, arah kemiringan (gradien) dari sisi PQ sama persis dengan sisi KL. Sisi PR sama persis dengan KM, dan sisi QR sama persis dengan LM. Ini membuktikan bahwa bentuk dasar Segitiga PQR dan KLM sebenarnya memiliki posisi yang sejajar sejak awal.<br><br>
<b>Efek Translasi:</b> Translasi (pergeseran) layaknya kita menggeser stiker di atas kertas; arah kemiringannya tidak ikut berputar. Jadi, ketika PQR digeser ke koordinat baru (P'Q'R'), bayangan tersebut garis-garis tepinya akan tetap searah dan sejajar dengan segitiga KLM.`
  },

  // ==========================================
  // SOAL 21: Hubungan Luas Juring Lingkaran
  // ==========================================
  {
    id: 2721,
    image: '/images/soal_asli_tka_math/soalaslitka_math_q21.PNG',
    images: ["/images/soal_asli_tka_math/soalaslitka_math_q21.PNG"],
    imageCaption: 'Ilustrasi Stimulus Soal 21: Hubungan Luas Juring Lingkaran',
    question: `Perhatikan gambar juring pada lingkaran di bawah ini!<br>
Manakah pernyataan yang benar di bawah ini terkait luas juring A, B, dan C?`,
    options: [
      'Luas juring B dua kali dari luas juring C',
      'Luas juring C setengah dari luas juring A',
      'Luas juring A tiga kali dari luas juring B',
      'Luas juring B dua kali dari luas juring A'
    ],
    correctAnswer: 1,
    isHots: false,
    explanation: `<b>Kunci Jawaban: B. Luas juring C setengah dari luas juring A</b><br><br>
<b>Luas Juring Lingkaran</b><br>
<b>Pahami Hubungan Sudut dan Luas:</b> Pada potongan kue (juring lingkaran), semakin besar sudut ujungnya, semakin luas pula potongan tersebut. Besaran luas juring berbanding lurus (sebanding) dengan besaran sudutnya.<br><br>
<b>Analisis Data:</b><br>
&bull; Juring B bersudut siku-siku = 90&deg;.<br>
&bull; Juring A bersudut = 70&deg;.<br>
&bull; Juring C bersudut = 35&deg;.<br><br>
<b>Bandingkan:</b> Jika kita melihat angka A (70&deg;) dan C (35&deg;), sangat jelas terlihat bahwa angka 35&deg; adalah setengah dari angka 70&deg;.<br><br>
<b>Jawaban Akhir:</b> Pernyataan yang benar adalah <b>Luas juring C setengah dari luas juring A</b>.`
  },

  // ==========================================
  // SOAL 22: Kesebangunan Persegi Panjang
  // ==========================================
  {
    id: 2722,
    image: '/images/soal_asli_tka_math/soalaslitka_math_q22.PNG',
    images: ["/images/soal_asli_tka_math/soalaslitka_math_q22.PNG"],
    imageCaption: 'Ilustrasi Stimulus Soal 22: Kesebangunan Persegi Panjang',
    question: `Perhatikan dua persegi panjang berikut.<br>
Diketahui luas persegi panjang yang lebih besar adalah 320 cm² dan kedua persegi panjang tersebut sebangun. Berapakah keliling persegi panjang yang lebih kecil?`,
    options: [
      '9 cm',
      '18 cm',
      '20 cm',
      '72 cm'
    ],
    correctAnswer: 1,
    isHots: true,
    explanation: `<b>Kunci Jawaban: 18 cm</b><br><br>
<b>Keliling Persegi Panjang Sebangun</b><br>
<b>Cari Skala Kesebangunan:</b> Sebangun artinya memiliki bentuk yang sama dengan ukuran berbeda (seperti gambar yang di-zoom). Bandingkan tinggi kedua persegi panjang. Tinggi besar (20 cm) berbanding tinggi kecil (5 cm). Artinya, bangun yang besar ukurannya 4 kali lipat dari yang kecil (20 &divide; 5 = 4).<br><br>
<b>Cari Lebar Bangun Besar:</b> Luas bangun besar adalah 320 cm&sup2;. Lebarnya adalah Luas dibagi tinggi = 320 &divide; 20 = 16 cm.<br><br>
<b>Cari Ukuran Bangun Kecil:</b> Karena bangun besar 4x lipat lebih panjang, maka lebar bangun kecil adalah 16 cm &divide; 4 = 4 cm. Sekarang kita tahu bangun kecil ukurannya 5 &times; 4 cm.<br><br>
<b>Hitung Keliling Bangun Kecil:</b> Keliling = Tambahkan seluruh pinggirannya. 5 + 4 + 5 + 4 = <b>18 cm</b>.<br><br>
<b>Jawaban Akhir:</b> Keliling persegi panjang yang lebih kecil adalah <b>18 cm</b>.`
  },

  // ==========================================
  // SOAL 23: Pemasok Minyak Goreng Curah Pak Dodi (Pernyataan)
  // ==========================================
  {
    id: 2723,
    image: '/images/soal_asli_tka_math/soalaslitka_math_q23.PNG',
    images: ["/images/soal_asli_tka_math/soalaslitka_math_q23.PNG"],
    imageCaption: 'Ilustrasi Stimulus Soal 23: Pemasok Minyak Goreng Curah Pak Dodi',
    question: `Pak Dodi adalah pemasok minyak goreng curah di Pasar Maju. Minyak goreng curah adalah minyak goreng tanpa kemasan khusus dan tidak memiliki label atau merek. Terdapat dua jenis minyak goreng curah yang dijual Pak Dodi yakni jenis A dan jenis B. Masing-masing jenis minyak goreng dimasukkan dalam tangki berikut.<br><br>
Minyak jenis B pada tangki yang berisi penuh akan dikemas di botol dan di jeriken. Sebanyak 300 botol berukuran 2 liter sudah diisi minyak curah jenis B dari tangki tersebut. Sisa minyak akan dikemas ke dalam jeriken berukuran 5 liter. Bagaimana perbandingan banyak kemasan botol dan jeriken?<br><br>
<b>Pilihlah semua jawaban benar! Jawaban benar lebih dari satu.</b>`,
    questionType: 'complex',
    options: [
      'Jumlah kemasan botol lebih banyak dari pada jeriken.',
      'Total kemasan botol dan jeriken yang terisi adalah 532.',
      'Sisa minyak di tangki cukup untuk mengisi 1 kemasan botol.',
      'Banyak kemasan jeriken yang terisi minyak adalah 332.'
    ],
    correctAnswers: [0, 1],
    correctAnswer: 0,
    isHots: true,
    explanation: `<b>Kunci Jawaban: A dan B</b><br><br>
<b>Minyak Goreng Curah (Volume &amp; Perbandingan)</b><br>
<b>Pahami Konsep Volume:</b> Untuk tahu seberapa banyak minyak di dalam tangki, kita harus menghitung volumenya seperti menghitung isi kolam air. Rumusnya adalah Panjang &times; Lebar &times; Tinggi. Ingat, 1 dm<sup>3</sup> itu sama persis dengan 1 liter. Jadi, ubah dulu semua ukuran meter (m) menjadi desimeter (dm) dengan mengalikannya dengan 10.<br><br>
<b>Hitung Isi Tangki B:</b> Ukuran Tangki B adalah 8 dm &times; 2,2 m &times; 1 m. Jika diubah ke desimeter, menjadi 8 &times; 22 &times; 10 = <b>1.760 liter</b> minyak.<br><br>
<b>Pembagian ke Botol:</b> Minyak ini dimasukkan ke dalam 300 botol yang masing-masing isinya 2 liter. Minyak yang terpakai adalah 300 &times; 2 = <b>600 liter</b>.<br><br>
<b>Sisa untuk Jeriken:</b> Sisa minyak di tangki B adalah 1.760 - 600 = <b>1.160 liter</b>. Karena 1 jeriken muat 5 liter, maka jeriken yang terisi adalah 1.160 &divide; 5 = <b>232 jeriken</b>.<br><br>
<b>Cek Pilihan Jawaban:</b><br>
&bull; <b>Jumlah botol (300) lebih banyak daripada jeriken (232):</b> (Benar)<br>
&bull; <b>Total semua wadah yang terisi adalah 300 + 232 = 532 kemasan:</b> (Benar)<br>
&bull; <b>Sisa minyak di tangki cukup untuk mengisi 1 kemasan botol:</b> Sisa minyak habis tak bersisa pas di angka 232, tidak ada sisa untuk 1 botol pun. (Salah)<br>
&bull; <b>Banyak jeriken yang terisi minyak adalah 332:</b> Yang terisi adalah 232 jeriken, bukan 332. (Salah)`
  },

  // ==========================================
  // SOAL 24: Pak Angga & Bu Susi (Muatan Jeriken Minyak)
  // ==========================================
  {
    id: 2724,
    image: '/images/soal_asli_tka_math/soalaslitka_math_q24.PNG',
    images: ["/images/soal_asli_tka_math/soalaslitka_math_q24.PNG"],
    imageCaption: 'Ilustrasi Stimulus Soal 24: Muatan Jeriken Minyak Pak Angga & Bu Susi',
    question: `Hari ini di toko Pak Dodi kedatangan dua pelanggan minyak curah yakni Pak Angga dan Bu Susi. Pak Angga dan Bu Susi membawa jeriken untuk wadah minyak dalam jumlah banyak. Jeriken minyak Pak Angga berukuran 25 liter, jeriken minyak milik Bu Susi berukuran 30 liter. Pak Dodi memiliki persediaan 1 tangki minyak jenis A dan 1 tangki minyak Jenis B. Pak Angga dan Bu Susi membeli seluruh minyak tersebut sehingga tidak ada lagi sisa minyak di tangki. Seluruh jeriken yang dibawa berisi penuh dan masing-masing mendapatkan kedua jenis minyak. Bagaimana kemungkinan perbandingan banyaknya jeriken Pak Angga dan Bu Susi?<br><br>
Tentukan mungkin atau tidak mungkin setiap pernyataan berikut! Klik pada kolom yang sesuai.<br><br>
<div class="overflow-x-auto my-3">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-700 rounded-lg">
    <thead class="bg-slate-800 text-slate-200">
      <tr>
        <th class="p-2 border-r border-slate-700">Pernyataan</th>
        <th class="p-2 text-center border-r border-slate-700">Mungkin</th>
        <th class="p-2 text-center">Tidak Mungkin</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-800 text-slate-300">
      <tr><td class="p-2 border-r border-slate-700">Bu Susi membawa 32 jeriken minyak jenis A.</td><td class="p-2 text-center border-r border-slate-700">( )</td><td class="p-2 text-center">( )</td></tr>
      <tr><td class="p-2 border-r border-slate-700">Pak Angga membawa 24 jeriken minyak jenis A dan 44 jeriken minyak jenis B.</td><td class="p-2 text-center border-r border-slate-700">( )</td><td class="p-2 text-center">( )</td></tr>
      <tr><td class="p-2 border-r border-slate-700">Bu Susi membawa 21 jeriken minyak jenis A.</td><td class="p-2 text-center border-r border-slate-700">( )</td><td class="p-2 text-center">( )</td></tr>
    </tbody>
  </table>
</div>`,
    options: [
      'Pernyataan 1: Tidak Mungkin, Pernyataan 2: Tidak Mungkin, Pernyataan 3: Mungkin',
      'Pernyataan 1: Mungkin, Pernyataan 2: Tidak Mungkin, Pernyataan 3: Mungkin',
      'Pernyataan 1: Tidak Mungkin, Pernyataan 2: Mungkin, Pernyataan 3: Tidak Mungkin',
      'Pernyataan 1: Mungkin, Pernyataan 2: Mungkin, Pernyataan 3: Tidak Mungkin'
    ],
    correctAnswer: 2,
    isHots: true,
    explanation: `<b>Kunci Jawaban: C. Tidak mungkin, mungkin, tidak mungkin</b><br><br>
<b>Minyak Goreng Curah (Kemungkinan Pembagian)</b><br>
Mari kita hitung total modal minyak Pak Dodi:<br>
&bull; <b>Tangki A:</b> 6 dm &times; 20 dm &times; 8 dm = <b>960 liter</b>.<br>
&bull; <b>Tangki B:</b> 8 dm &times; 22 dm &times; 10 dm = <b>1.760 liter</b>.<br><br>
<b>Aturan Main:</b> Semua jeriken harus penuh, tidak boleh ada sisa minyak di tangki, dan Pak Angga maupun Bu Susi wajib mendapatkan kedua jenis minyak (A dan B).<br><br>
&bull; <b>Analisis 1:</b> Jika Bu Susi membawa 32 jeriken A (ukuran 30L), berarti dia mengambil 32 &times; 30 = 960 liter minyak A. Ini sama dengan menghabiskan seluruh isi Tangki A sendirian! Akibatnya, Pak Angga tidak kebagian minyak A sama sekali (melanggar aturan). &rarr; <b>Tidak Mungkin</b>.<br><br>
&bull; <b>Analisis 2:</b> Pak Angga mengambil 24 jeriken A (24 &times; 25 = 600 L) dan 44 jeriken B (44 &times; 25 = 1.100 L). Sisa minyak untuk Bu Susi adalah 360 L minyak A dan 660 L minyak B. Apakah sisa ini bisa dibagi rata ke jeriken 30L milik Bu Susi? Ya! 360 &divide; 30 = 12 jeriken, dan 660 &divide; 30 = 22 jeriken. Keduanya kebagian adil. &rarr; <b>Mungkin</b>.<br><br>
&bull; <b>Analisis 3:</b> Bu Susi mengambil 21 jeriken A (21 &times; 30 = 630 L). Sisa minyak A adalah 960 - 630 = 330 L. Bisakah sisa 330 L ini dimasukkan ke jeriken 25L milik Pak Angga sampai penuh? Tidak bisa, karena 330 &divide; 25 hasilnya berkoma (13,2 jeriken), ada yang tidak penuh. &rarr; <b>Tidak Mungkin</b>.`
  },

  // ==========================================
  // SOAL 25: Produksi Karet dan Kelapa
  // ==========================================
  {
    id: 2725,
    image: '/images/soal_asli_tka_math/soalaslitka_math_q25.PNG',
    images: ["/images/soal_asli_tka_math/soalaslitka_math_q25.PNG"],
    imageCaption: 'Ilustrasi Stimulus Soal 25: Produksi Karet dan Kelapa',
    question: `Karet dan kelapa sangat penting bagi banyak industri di dunia karena menghasilkan berbagai macam produk seperti ban, sarung tangan, minyak kelapa, dan santan. Indonesia merupakan salah satu negara penghasil karet dan kelapa terbesar di dunia.<br><br>
Berdasarkan data di atas, diagram garis manakah yang menunjukkan penyajian data dari total hasil produksi karet dan kelapa di Indonesia ?`,
    options: [
      '<img src="/images/soal_asli_tka_math_q25/soalaslitka_math_q25_a.PNG" alt="Opsi A" class="w-full max-w-sm sm:max-w-md h-auto rounded-lg shadow-xs bg-white p-1 border border-slate-200 pointer-events-none" />',
      '<img src="/images/soal_asli_tka_math_q25/soalaslitka_math_q25_b.PNG" alt="Opsi B" class="w-full max-w-sm sm:max-w-md h-auto rounded-lg shadow-xs bg-white p-1 border border-slate-200 pointer-events-none" />',
      '<img src="/images/soal_asli_tka_math_q25/soalaslitka_math_q25_c.PNG" alt="Opsi C" class="w-full max-w-sm sm:max-w-md h-auto rounded-lg shadow-xs bg-white p-1 border border-slate-200 pointer-events-none" />',
      '<img src="/images/soal_asli_tka_math_q25/soalaslitka_math_q25_d.PNG" alt="Opsi D" class="w-full max-w-sm sm:max-w-md h-auto rounded-lg shadow-xs bg-white p-1 border border-slate-200 pointer-events-none" />'
    ],
    correctAnswer: 0,
    isHots: false,
    explanation: `<b>Kunci Jawaban: A</b><br><br>
Berikut adalah tabel total produksi karet dan kelapa :<br>
<div class="overflow-x-auto my-3">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-200 rounded-lg overflow-hidden">
    <thead class="bg-slate-100 text-slate-800 font-semibold">
      <tr>
        <th class="p-2.5 border-b border-r border-slate-200">Tahun</th>
        <th class="p-2.5 text-right border-b border-r border-slate-200">Karet (juta ton)</th>
        <th class="p-2.5 text-right border-b border-r border-slate-200">Kelapa (juta ton)</th>
        <th class="p-2.5 text-right border-b border-slate-200 bg-indigo-50/70 text-indigo-950 font-bold">Total Produksi (juta ton)</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 text-slate-700 font-mono">
      <tr class="hover:bg-slate-50"><td class="p-2 border-r border-slate-200 font-sans font-medium">2018</td><td class="p-2 text-right border-r border-slate-200">3,68</td><td class="p-2 text-right border-r border-slate-200">2,83</td><td class="p-2 text-right bg-indigo-50/30 font-bold text-indigo-900">6,51</td></tr>
      <tr class="hover:bg-slate-50"><td class="p-2 border-r border-slate-200 font-sans font-medium">2019</td><td class="p-2 text-right border-r border-slate-200">3,50</td><td class="p-2 text-right border-r border-slate-200">2,83</td><td class="p-2 text-right bg-indigo-50/30 font-bold text-indigo-900">6,33</td></tr>
      <tr class="hover:bg-slate-50"><td class="p-2 border-r border-slate-200 font-sans font-medium">2020</td><td class="p-2 text-right border-r border-slate-200">3,30</td><td class="p-2 text-right border-r border-slate-200">2,81</td><td class="p-2 text-right bg-indigo-50/30 font-bold text-indigo-900">6,11</td></tr>
      <tr class="hover:bg-slate-50"><td class="p-2 border-r border-slate-200 font-sans font-medium">2021</td><td class="p-2 text-right border-r border-slate-200">3,12</td><td class="p-2 text-right border-r border-slate-200">2,85</td><td class="p-2 text-right bg-indigo-50/30 font-bold text-indigo-900">5,97</td></tr>
      <tr class="hover:bg-slate-50"><td class="p-2 border-r border-slate-200 font-sans font-medium">2022</td><td class="p-2 text-right border-r border-slate-200">2,95</td><td class="p-2 text-right border-r border-slate-200">2,86</td><td class="p-2 text-right bg-indigo-50/30 font-bold text-indigo-900">5,81</td></tr>
      <tr class="hover:bg-slate-50"><td class="p-2 border-r border-slate-200 font-sans font-medium">2023</td><td class="p-2 text-right border-r border-slate-200">2,75</td><td class="p-2 text-right border-r border-slate-200">2,90</td><td class="p-2 text-right bg-indigo-50/30 font-bold text-indigo-900">5,65</td></tr>
      <tr class="hover:bg-slate-50"><td class="p-2 border-r border-slate-200 font-sans font-medium">2024</td><td class="p-2 text-right border-r border-slate-200">2,60</td><td class="p-2 text-right border-r border-slate-200">2,89</td><td class="p-2 text-right bg-indigo-50/30 font-bold text-indigo-900">5,49</td></tr>
    </tbody>
  </table>
</div>
Berdasarkan perhitungan total produksi di atas, diagram garis pada <b>opsi A</b> menyajikan tren total produksi gabungan karet dan kelapa yang mengalami tren penurunan konsisten dari tahun 2018 (6,51 juta ton) hingga 2024 (5,49 juta ton).`
  },

  // ==========================================
  // SOAL 26: Waktu Bermain Game Tory (Modus)
  // ==========================================
  {
    id: 2726,
    image: '/images/soal_asli_tka_math/soalaslitka_math_q26.PNG',
    images: ["/images/soal_asli_tka_math/soalaslitka_math_q26.PNG"],
    imageCaption: 'Ilustrasi Stimulus Soal 26: Waktu Bermain Game Tory',
    question: `Tory suka sekali bermain game online. Dia selalu mengabaikan batasan waktu dalam bermain game online. Belakangan ini Tory sering merasa gelisah dan mudah marah apabila tidak diijinkan bermain. Dia juga sering merasakan sakit mata dan pusing. Dokter mengatakan bahwa Tory telah kecanduan bermain game online. Tory harus berusaha perlahan-lahan mengontrol waktu bermainnya. Dokter mengatakan bahwa batas waktu maksimal Tory diperbolehkan bermain adalah 7 jam dalam satu minggu.<br><br>
Selama 12 minggu, waktu bermain game Tory terus dipantau oleh kedua orang tuanya dan dilaporkan ke dokter.<br><br>
Dalam 12 minggu terakhir, Tory paling sering menghabiskan waktu untuk bermain game online setiap minggunya yaitu selama ... .`,
    options: [
      '10 jam',
      '14 jam',
      '20 jam',
      '22 jam'
    ],
    correctAnswer: 1,
    isHots: false,
    explanation: `<b>Kunci Jawaban: B. 14 jam</b><br><br>
<b>Modus Durasi Bermain Game</b><br>
<b>Konsep Modus:</b> Dalam matematika, "modus" bukan gaya-gayaan, melainkan mencari angka mana yang paling sering muncul atau yang temannya paling banyak.<br><br>
<b>Hitung Bersama:</b> Mari kita data jumlah jam Tory dari grafik balok:<br>
&bull; 22 jam muncul 1 kali.<br>
&bull; 20 jam muncul 2 kali (Minggu ke-2 &amp; ke-4).<br>
&bull; 18 jam muncul 1 kali.<br>
&bull; 16 jam muncul 1 kali.<br>
&bull; <b>14 jam muncul 4 kali</b> (Minggu ke-5, ke-7, ke-8, ke-11).<br>
&bull; 12 jam muncul 2 kali.<br>
&bull; 10 jam muncul 1 kali.<br><br>
<b>Jawaban Akhir:</b> Waktu yang paling sering dihabiskan Tory adalah <b>14 jam</b>.`
  },

  // ==========================================
  // SOAL 27: Fase Penyembuhan Tory
  // ==========================================
  {
    id: 2727,
    image: '/images/soal_asli_tka_math/soalaslitka_math_q27.1.PNG',
    images: ["/images/soal_asli_tka_math/soalaslitka_math_q27.1.PNG", "/images/soal_asli_tka_math/soalaslitka_math_q27.2.PNG"],
    imageCaption: 'Ilustrasi Stimulus Soal 27: Gambar 1 & Gambar 2 (Fase Penyembuhan Tory)',
    question: `Tory suka sekali bermain game online. Dia selalu mengabaikan batasan waktu dalam bermain game online. Belakangan ini Tory sering merasa gelisah dan mudah marah apabila tidak diijinkan bermain. Dia juga sering merasakan sakit mata dan pusing. Dokter mengatakan bahwa Tory telah kecanduan bermain game online. Tory harus berusaha perlahan-lahan mengontrol waktu bermainnya. Dokter mengatakan bahwa batas waktu maksimal Tory diperbolehkan bermain adalah 7 jam dalam satu minggu.<br><br>
Selama 12 minggu, waktu bermain game Tory terus dipantau oleh kedua orang tuanya dan dilaporkan ke dokter.<br><br>
Dokter dan orangtua Tory memahami bahwa tidak mudah menghilangkan kecanduan bermain game online, namun mereka ingin terus memantau bagaimana perkembangan Tory. Dokter membuat skema sebagai berikut:<br>
Dokter memantau dan membandingkan rata-rata jam bermain game online setiap 4 minggu dan menyebutnya sebagai fase.<br>
Fase pertama membandingkan rata-rata jam bermain pada 4 minggu pertama dengan rata-rata jam bermain pada 4 minggu kedua. Fase kedua membandingkan rata-rata jam bermain pada 4 minggu kedua dengan rata-rata jam bermain pada 4 minggu ketiga. Fase akhir membandingkan rata-rata jam bermain pada 4 minggu ketiga dengan batas waktu maksimal yang disarankan.<br><br>
Hal tersebut dilakukan untuk melihat perkembangan kebiasaan Tory dalam bermain game online. Apakah yang terjadi pada Tory selama fase penyembuhan?<br><br>
<b>Pilihlah semua jawaban yang benar! Jawaban benar lebih dari satu.</b>`,
    questionType: 'complex',
    options: [
      'Fase pertama berkurang 5,5 jam.',
      'Fase kedua berkurang 2,25 jam.',
      'Fase akhir berkurang 5,25 jam.',
      'Fase penyembuhan berkurang 8 jam.'
    ],
    correctAnswers: [0, 3],
    correctAnswer: 0,
    isHots: true,
    explanation: `<b>Kunci Jawaban: Pernyataan 1 dan 4 benar</b><br><br>
<b>Fase Penyembuhan Bermain Game</b><br>
<b>Cari Rata-rata Setiap Fase:</b> Rata-rata dihitung dengan menjumlahkan semuanya lalu dibagi jumlah minggunya (4 minggu).<br>
&bull; <b>4 Minggu Pertama:</b> (22 + 20 + 18 + 20) &divide; 4 = 80 &divide; 4 = <b>20 jam</b>.<br>
&bull; <b>4 Minggu Kedua:</b> (14 + 16 + 14 + 14) &divide; 4 = 58 &divide; 4 = <b>14,5 jam</b>.<br>
&bull; <b>4 Minggu Ketiga:</b> (12 + 10 + 14 + 12) &divide; 4 = 48 &divide; 4 = <b>12 jam</b>.<br><br>
<b>Evaluasi Penurunan Waktu:</b><br>
&bull; <b>Fase pertama berkurang (Benar):</b> Dari 20 jam turun ke 14,5 jam. Pengurangannya adalah 20 - 14,5 = <b>5,5 jam</b>.<br>
&bull; <b>Fase kedua berkurang (Salah):</b> Dari 14,5 turun ke 12. Pengurangannya hanya 2,5 jam (bukan 2,25).<br>
&bull; <b>Fase akhir berkurang (Salah):</b> Dari 12 jam target ke 7 jam. Pengurangannya adalah 5 jam (bukan 5,25).<br>
&bull; <b>Fase penyembuhan berkurang (Benar):</b> Sesuai skema gambar, ini membandingkan rata-rata 4 minggu pertama (20 jam) dengan 4 minggu ketiga (12 jam). Penurunannya adalah 20 - 12 = <b>8 jam</b>.`
  },

  // ==========================================
  // SOAL 28: Kotak Misteri Boneka Labubu
  // ==========================================
  {
    id: 2728,
    image: '/images/soal_asli_tka_math/soalaslitka_math_q28.PNG',
    images: ["/images/soal_asli_tka_math/soalaslitka_math_q28.PNG"],
    imageCaption: 'Ilustrasi Stimulus Soal 28: Kotak Misteri Boneka Labubu',
    question: `Suatu paket terdiri dari 20 kotak misteri. Kotak misteri tersebut berisi patung figur karakter yang bernama Saka dan Kirana. Berikut ini banyak paket figur karakter yang tersedia dalam satu paket.<br><br>
Riana mengambil 3 kotak misteri secara acak dari dalam paket tersebut dan ternyata ia mendapatkan 1 buah Saka dan 2 buah Kirana. Kemudian, Santi akan mengambil 1 kotak misteri. Berapakah peluang Santi mendapatkan Saka?`,
    options: [
      '7/20',
      '8/20',
      '8/17',
      '7/17'
    ],
    correctAnswer: 3,
    isHots: true,
    explanation: `<b>Kunci Jawaban: D. 7/17</b><br><br>
<b>Peluang Kotak Misteri</b><br>
<b>Hitung Sisa Kotak:</b> Awalnya ada 20 kotak (8 Saka, 12 Kirana). Riana mengambil 3 kotak yang ternyata isinya 1 Saka dan 2 Kirana.<br>
&bull; Sisa kotak keseluruhan = 20 - 3 = <b>17 kotak</b>.<br>
&bull; Sisa patung Saka di dalam = 8 - 1 = <b>7 buah</b>.<br><br>
<b>Konsep Peluang:</b> Peluang itu membandingkan "apa yang kita harapkan" (Saka) dengan "semua kemungkinan yang ada" (sisa kotak).<br><br>
<b>Jawaban Akhir:</b> Peluang Santi mendapatkan Saka adalah <b>7/17</b>.`
  },

  // ==========================================
  // SOAL 29: Kertas Soal Ujian Gulung
  // ==========================================
  {
    id: 2729,
    image: '/images/soal_asli_tka_math/soalaslitka_math_q29.PNG',
    images: ["/images/soal_asli_tka_math/soalaslitka_math_q29.PNG"],
    imageCaption: 'Ilustrasi Stimulus Soal 29: Kertas Soal Ujian Gulung',
    question: `Seorang guru menyiapkan sejumlah kertas soal ujian yang digulung dan dimasukkan ke dalam sebuah kotak. Setiap kertas berisi kode soal A, B, atau C. Diketahui bahwa jumlah kertas berkode A lebih sedikit daripada kertas berkode B. Guru kemudian mengambil 3 kertas dengan kode yang sama dari dalam kotak. Setelah pengambilan, jumlah seluruh kertas yang tersisa di dalam kotak menjadi 28 lembar dan jumlah kertas berkode B lebih banyak daripada kertas berkode C. Jika kemudian diambil satu kertas secara acak dari kotak tersebut, diketahui bahwa peluang terambilnya kertas berkode C yaitu 2/7.<br><br>
Berdasarkan informasi tersebut, berapakah kemungkinan jumlah kertas soal ujian kode B mula-mula?<br><br>
<b>Pilihlah semua jawaban benar! Jawaban benar lebih dari satu.</b>`,
    questionType: 'complex',
    options: [
      '10 lembar',
      '11 lembar',
      '12 lembar',
      '14 lembar'
    ],
    correctAnswers: [1, 2, 3],
    correctAnswer: 1,
    isHots: true,
    explanation: `<b>Kunci Jawaban: 11, 12, dan 14 lembar</b><br><br>
<b>Misteri Kertas Ujian</b><br>
Mari kita bekerja mundur layaknya seorang detektif menggunakan petunjuk yang ada.<br><br>
&bull; <b>Petunjuk 1 (Akhir):</b> Saat ini, peluang terambilnya kertas C adalah 2/7 dari total 28 lembar sisa. Artinya, jumlah kertas C saat ini adalah (2/7) &times; 28 = <b>8 lembar</b>.<br>
&bull; <b>Petunjuk 2 (Sisa A &amp; B):</b> Jika total ada 28 lembar dan C ada 8 lembar, maka sisa gabungan kertas A + B saat ini adalah 28 - 8 = <b>20 lembar</b>.<br>
&bull; <b>Petunjuk 3 (Syarat Kekuatan):</b> Diketahui saat ini kertas B &gt; C (artinya B harus lebih besar dari 8). Dan pada kondisi awal (sebelum diambil guru), kertas A &lt; B.<br><br>
<b>Mari Kita Uji Pilihan Jawaban:</b> Guru telah mengambil 3 kertas berkode SAMA (bisa 3 lembar A, 3 lembar B, atau 3 lembar C). Kita cari mana modal awal B yang paling masuk akal:<br><br>
&bull; <b>Uji 11 Lembar:</b> Jika B awal 11, dan guru mengambil 3 kertas C, maka B saat ini tetap 11. Syarat B &gt; C (11 &gt; 8) terpenuhi! Karena A + B saat ini 20, maka A = 9. Modal awal A juga 9. Syarat awal A &lt; B (9 &lt; 11) terpenuhi. (<b>11 Bisa!</b>)<br><br>
&bull; <b>Uji 12 Lembar:</b> Jika B awal 12, dan guru mengambil 3 kertas C, B saat ini tetap 12. Syarat B &gt; C (12 &gt; 8) terpenuhi! Karena A + B saat ini 20, maka A = 8. Modal awal A = 8. Syarat awal A &lt; B (8 &lt; 12) terpenuhi. (<b>12 Bisa!</b>)<br><br>
&bull; <b>Uji 14 Lembar:</b> Jika B awal 14, dan guru mengambil 3 kertas C, B saat ini tetap 14. Syarat B &gt; C (14 &gt; 8) terpenuhi! Karena A + B saat ini 20, maka A = 6. Modal awal A = 6. Syarat awal A &lt; B (6 &lt; 14) terpenuhi. (<b>14 Bisa!</b>)<br><br>
&bull; <i>Catatan:</i> Pilihan 10 lembar tidak mungkin. Sebab jika B awal 10, nilai B saat ini (maksimal 10) akan membuat jumlah A menjadi 10 juga. Ini melanggar syarat awal A &lt; B (karena 10 tidak lebih kecil dari 10).<br><br>
<b>Jawaban Akhir:</b> Jumlah yang mungkin adalah <b>11 lembar, 12 lembar, dan 14 lembar</b>.`
  },

  // ==========================================
  // SOAL 30: Mesin Tetas Telur Pak Rahmat
  // ==========================================
  {
    id: 2730,
    image: '/images/soal_asli_tka_math/soalaslitka_math_q30.PNG',
    images: ["/images/soal_asli_tka_math/soalaslitka_math_q30.PNG"],
    imageCaption: 'Ilustrasi Stimulus Soal 30: Mesin Tetas Telur Pak Rahmat',
    question: `Mesin tetas telur adalah sebuah alat yang digunakan untuk membantu proses penetasan telur. Cara kerja alat atau mesin ini adalah melakukan proses pengeraman tanpa induk dengan menggunakan sebuah lampu pijar. Mesin ini dilengkapi dengan motor yang berfungsi untuk meratakan proses pemanasan telur agar telur dapat menetas secara maksimal. Mesin ini umumnya hanya bisa digunakan untuk menetaskan telur unggas seperti telur ayam, puyuh, bebek, dan entok. Penetasan berlangsung selama 18 hari terhitung dari awal masuknya telur kedalam mesin tetas. Dilakukan pengamatan terhadap beberapa telur puyuh dengan usia yang berbeda-beda. Berikut rincian usia telur di mesin tetas tersebut saat ini.<br><br>
<div class="overflow-x-auto my-3">
  <table class="w-full text-xs sm:text-sm text-left border border-slate-700 rounded-lg">
    <thead class="bg-slate-800 text-slate-200">
      <tr>
        <th class="p-2 border-r border-slate-700">Usia Telur di Dalam Mesin</th>
        <th class="p-2 text-right">Banyak Telur</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-800 text-slate-300 font-mono">
      <tr><td class="p-2 border-r border-slate-700">2 hari</td><td class="p-2 text-right">20</td></tr>
      <tr><td class="p-2 border-r border-slate-700">4 hari</td><td class="p-2 text-right">35</td></tr>
      <tr><td class="p-2 border-r border-slate-700">6 hari</td><td class="p-2 text-right">30</td></tr>
      <tr><td class="p-2 border-r border-slate-700">8 hari</td><td class="p-2 text-right">15</td></tr>
    </tbody>
  </table>
</div>
Diketahui telur-telur tersebut diletakkan secara acak di dalam mesin. Jika dilakukan pengamatan khusus pada satu telur yang dipilih secara acak, berapakah peluang telur tersebut akan menetas dalam 10 hari ke depan?`,
    options: [
      '3/20',
      '1/15',
      '1/10',
      '1/8'
    ],
    correctAnswer: 0,
    isHots: true,
    explanation: `<b>Kunci Jawaban: A. 3/20</b><br><br>
<b>Mesin Tetas Telur</b><br>
<b>Pahami Syarat Waktu:</b> Seekor burung puyuh butuh waktu pengeraman total selama 18 hari untuk bisa menetas.<br><br>
<b>Hitung Mundur:</b> Kita mencari telur yang "diprediksi menetas dalam 10 hari ke depan". Artinya, jika 10 hari lagi dia keluar, telur itu pastinya sudah berada di dalam mesin selama minimal 8 hari dari sekarang (18 hari total - 10 sisa hari = <b>8 hari</b>).<br><br>
<b>Kumpulkan Data:</b><br>
&bull; Berapa banyak telur yang usianya sudah mencapai 8 hari? Ada <b>15 telur</b>.<br>
&bull; Berapa total semua telur yang ada di dalam kotak mesin? 20 + 35 + 30 + 15 = <b>100 telur</b>.<br><br>
<b>Buat Pecahan Peluang:</b> Peluang terpilihnya telur tersebut adalah 15 berbanding 100 (15/100). Sederhanakan pecahan dengan membagi pembilang dan penyebut dengan angka 5:<br>
15 &divide; 5 / 100 &divide; 5 = <b>3/20</b>.<br><br>
<b>Jawaban Akhir:</b> Peluangnya adalah <b>3/20</b>.`
  }
];
