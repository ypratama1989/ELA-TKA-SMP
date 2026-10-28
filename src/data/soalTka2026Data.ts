import { Question, SubjectId } from '../types';
import { SOAL_ASLI_TKA_MATH_30 } from './soalAsliTkaMathData';

export interface Tka2026SubjectPackage {
  id: string;
  subjectId: SubjectId;
  name: string;
  title: string;
  subtitle: string;
  badge: string;
  year: string;
  totalQuestions: number;
  durationMinutes: number;
  passingScore: number;
  difficulty: string;
  description: string;
  kisiKisi: string[];
  questions: Question[];
}

export const TKA_INDO_IMAGES = {
  stimulus1: {
    image: '/images/soal_asli_tka_indo/soalaslitka_indo_q1.PNG',
    images: ['/images/soal_asli_tka_indo/soalaslitka_indo_q1.PNG'],
    imageCaption: 'Ilustrasi Stimulus 1: Robot Pengantar Makanan'
  },
  stimulus2: {
    image: '/images/soal_asli_tka_indo/soalaslitka_indo_q4.PNG',
    images: ['/images/soal_asli_tka_indo/soalaslitka_indo_q4.PNG'],
    imageCaption: 'Ilustrasi Stimulus 2: Minuman Fermentasi SCOBY (Kombucha)'
  },
  stimulus3: {
    image: '/images/soal_asli_tka_indo/soalaslitka_indo_q7.PNG',
    images: ['/images/soal_asli_tka_indo/soalaslitka_indo_q7.PNG'],
    imageCaption: 'Ilustrasi Stimulus 3: Puisi Senja di Pesisir'
  },
  stimulus4: {
    image: '/images/soal_asli_tka_indo/soalaslitka_indo_q10.PNG',
    images: ['/images/soal_asli_tka_indo/soalaslitka_indo_q10.PNG'],
    imageCaption: 'Ilustrasi Stimulus 4: Uji Biodegradasi Plastik Konvensional dan Bioplastik'
  },
  stimulus5: {
    image: '/images/soal_asli_tka_indo/soalaslitka_indo_q13.1.PNG',
    images: [
      '/images/soal_asli_tka_indo/soalaslitka_indo_q13.1.PNG',
      '/images/soal_asli_tka_indo/soalaslitka_indo_q13.2.PNG'
    ],
    imageCaption: 'Ilustrasi Stimulus 5: Gambar 1 & Gambar 2 (Konsumsi Bertanggung Jawab: Kualitas atau Kuantitas?)'
  },
  stimulus6: {
    image: '/images/soal_asli_tka_indo/soalaslitka_indo_q16.PNG',
    images: ['/images/soal_asli_tka_indo/soalaslitka_indo_q16.PNG'],
    imageCaption: 'Ilustrasi Stimulus 6: Brosur Kawasan Konservasi Laut di Indonesia'
  },
  stimulus7: {
    image: '/images/soal_asli_tka_indo/soalaslitka_indo_q19.1.PNG',
    images: [
      '/images/soal_asli_tka_indo/soalaslitka_indo_q19.1.PNG',
      '/images/soal_asli_tka_indo/soalaslitka_indo_q19.2.PNG',
      '/images/soal_asli_tka_indo/soalaslitka_indo_q19.3.PNG'
    ],
    imageCaption: 'Ilustrasi Stimulus 7: Gambar 1, Gambar 2, dan Gambar 3 (Kisah Ketupat Lebaran Keluarga Bu Dini)'
  },
  stimulus8: {
    image: '/images/soal_asli_tka_indo/soalaslitka_indo_q22.PNG',
    images: ['/images/soal_asli_tka_indo/soalaslitka_indo_q22.PNG'],
    imageCaption: 'Ilustrasi Stimulus 8: Lobi, Si Lebah Hutan Pekerja'
  },
  stimulus9: {
    image: '/images/soal_asli_tka_indo/soalaslitka_indo_q25.PNG',
    images: ['/images/soal_asli_tka_indo/soalaslitka_indo_q25.PNG'],
    imageCaption: 'Ilustrasi Stimulus 9: Cerita Rakyat Batu Penyu di Pulau Kei Kecil'
  },
  stimulus10: {
    image: '/images/soal_asli_tka_indo/soalaslitka_indo_q28.PNG',
    images: ['/images/soal_asli_tka_indo/soalaslitka_indo_q28.PNG'],
    imageCaption: 'Ilustrasi Stimulus 10: Cerpen Budaya Tradisi Lilifuk di Pulau Timor'
  }
};

export const SOAL_TKA_2026_INDO: Question[] = [
  {
    id: 2601,
    ...TKA_INDO_IMAGES.stimulus1,
    question: `[STIMULUS 1: ROBOT PENGANTAR MAKANAN]
Teks Bacaan:
Robot pengantar makanan kini menjadi pemandangan menarik di berbagai restoran dan hotel di dunia. Di restoran Dona Alicia, Kuba, robot pelayan mulai digunakan sejak awal 2025 dan berhasil menarik perhatian banyak pengunjung. Di Tiongkok, hotel-hotel di Beijing juga memanfaatkan robot bernama RUN saat Olimpiade Musim Dingin 2022 untuk mengantar makanan tanpa kontak langsung. Sementara itu, di Amerika Serikat, robot menjadi solusi andalan saat musim dingin karena bisa bekerja meskipun jalanan bersalju. Kota Dubai pun tak ketinggalan, dengan menghadirkan robot pengantar di kawasan Sustainable City sejak 2024.

Penggunaan robot ini dinilai lebih efisien, higienis, dan praktis. Selain menghemat waktu, robot juga membantu mengurangi interaksi langsung antara petugas dan pelanggan, yang sangat penting selama masa pandemi. Robot-robot ini bekerja dengan sistem navigasi otonom, yaitu kemampuan gerak mandiri tanpa dikendalikan manusia. Mereka dilengkapi sensor LiDAR, yaitu sistem pemindaian laser atau pendeteksi rintangan sekitar. Seluruh pergerakan robot diawasi oleh Fleet Management System, yaitu sistem pemantau dari jarak jauh. Makanan yang dibawa robot disimpan dalam kompartemen aman sehingga tetap bersih dan terjaga sampai pelanggan membukanya.

Gagasan tentang robot sudah muncul sejak abad ke-20. Salah satu tokoh penting dalam pengembangan robot modern adalah Joseph Engelberger, insinyur asal Amerika yang menciptakan robot industri pertama, Unimate, pada tahun 1961.

Proses pembuatan robot umumnya dimulai dari tahap perancangan desain, lalu dilanjutkan dengan perakitan komponen mekanik dan elektronik. Setelah itu, dipasang sistem sensor dan pemrograman agar robot dapat berpikir dan bergerak. Terakhir, robot diuji coba untuk memastikan semua fungsinya berjalan dengan baik dan aman digunakan.

Glosarium:
Kompartemen: wadah atau bagian terpisah untuk menyimpan benda.

[PERTANYAAN NO. 1]
Berdasarkan teks bacaan di atas, apa yang dimaksud dengan istilah sensor LiDAR pada teknologi robot pengantar makanan?
(1) Sistem pemindaian laser.
(2) Pemantau dari jarak jauh.
(3) Pendeteksi rintangan sekitar.
(4) Kemampuan gerak mandiri.

Pernyataan yang benar mengenai arti sensor LiDAR adalah...`,
    options: [
      `A. (1) dan (3)`,
      `B. (1) dan (2)`,
      `C. (2) dan (4)`,
      `D. (3) dan (4)`,
    ],
    correctAnswer: 0,
    isHots: false,
    explanation: `<b>Kunci Jawaban: A. (1) dan (3)</b><br><br><b>Langkah Penelusuran Teks (Step-by-Step):</b><br>1. Perhatikan paragraf kedua kalimat keempat:<br><i>"Mereka dilengkapi sensor LiDAR, yaitu sistem pemindaian laser atau pendeteksi rintangan sekitar."</i><br>2. Kata <i>"yaitu"</i> adalah konjungsi penjelas definisi. Teks secara tegas mengartikan sensor LiDAR sebagai <b>(1) sistem pemindaian laser</b> dan <b>(3) pendeteksi rintangan sekitar</b>.<br><br><b>Mengapa opsi lain keliru?</b><br>&bull; Pernyataan (2) "Pemantau dari jarak jauh" adalah arti dari <i>Fleet Management System</i>.<br>&bull; Pernyataan (4) "Kemampuan gerak mandiri" adalah arti dari <i>sistem navigasi otonom</i>.<br><br><b>Konsep Dasar yang Perlu Diingat:</b><br>LiDAR singkatan dari <i>Light Detection and Ranging</i>. Cara kerjanya ibarat mata pemandu bagi robot yang menembakkan berkas sinar laser tak kasat mata untuk mengukur jarak meja, dinding, atau orang di sekitarnya sehingga robot tidak menabrak.`
  },
  {
    id: 2602,
    ...TKA_INDO_IMAGES.stimulus1,
    question: `[STIMULUS 1: ROBOT PENGANTAR MAKANAN]
Teks Bacaan:
Robot pengantar makanan kini menjadi pemandangan menarik di berbagai restoran dan hotel di dunia. Di restoran Dona Alicia, Kuba, robot pelayan mulai digunakan sejak awal 2025 dan berhasil menarik perhatian banyak pengunjung. Di Tiongkok, hotel-hotel di Beijing juga memanfaatkan robot bernama RUN saat Olimpiade Musim Dingin 2022 untuk mengantar makanan tanpa kontak langsung. Sementara itu, di Amerika Serikat, robot menjadi solusi andalan saat musim dingin karena bisa bekerja meskipun jalanan bersalju. Kota Dubai pun tak ketinggalan, dengan menghadirkan robot pengantar di kawasan Sustainable City sejak 2024.

Penggunaan robot ini dinilai lebih efisien, higienis, dan praktis. Selain menghemat waktu, robot juga membantu mengurangi interaksi langsung antara petugas dan pelanggan, yang sangat penting selama masa pandemi. Robot-robot ini bekerja dengan sistem navigasi otonom, yaitu kemampuan gerak mandiri tanpa dikendalikan manusia. Mereka dilengkapi sensor LiDAR, yaitu sistem pemindaian laser atau pendeteksi rintangan sekitar. Seluruh pergerakan robot diawasi oleh Fleet Management System, yaitu sistem pemantau dari jarak jauh. Makanan yang dibawa robot disimpan dalam kompartemen aman sehingga tetap bersih dan terjaga sampai pelanggan membukanya.

Gagasan tentang robot sudah muncul sejak abad ke-20. Salah satu tokoh penting dalam pengembangan robot modern adalah Joseph Engelberger, insinyur asal Amerika yang menciptakan robot industri pertama, Unimate, pada tahun 1961.

Proses pembuatan robot umumnya dimulai dari tahap perancangan desain, lalu dilanjutkan dengan perakitan komponen mekanik dan elektronik. Setelah itu, dipasang sistem sensor dan pemrograman agar robot dapat berpikir dan bergerak. Terakhir, robot diuji coba untuk memastikan semua fungsinya berjalan dengan baik dan aman digunakan.

Glosarium:
Kompartemen: wadah atau bagian terpisah untuk menyimpan benda.

[PERTANYAAN NO. 2]
Berdasarkan paragraf terakhir, bagaimanakah urutan kronologis yang tepat dalam proses pembuatan robot pengantar makanan?`,
    options: [
      `A. Perancangan desain -> Pemasangan sistem sensor dan pemrograman -> Perakitan komponen mekanik dan elektronik -> Uji coba`,
      `B. Perancangan desain -> Perakitan komponen mekanik dan elektronik -> Pemasangan sistem sensor dan pemrograman -> Uji coba`,
      `C. Perancangan desain -> Perakitan komponen elektronik -> Pemasangan sistem mekanik dan pemrograman -> Uji coba`,
      `D. Pemasangan sistem sensor dan pemrograman -> Perancangan desain -> Perakitan komponen mekanik -> Uji coba`,
    ],
    correctAnswer: 1,
    isHots: false,
    explanation: `<b>Kunci Jawaban: B. Perancangan desain -> Perakitan komponen mekanik dan elektronik -> Pemasangan sistem sensor dan pemrograman -> Uji coba</b><br><br><b>Langkah Penelusuran Paragraf Terakhir (Step-by-Step):</b><br>Mari kita baca urutan pembuatan robot pada kalimat teks secara runtut:<br>1. <b>Tahap 1:</b> <i>"dimulai dari tahap perancangan desain"</i> (menggambar rancangan bodi & fungsi robot).<br>2. <b>Tahap 2:</b> <i>"dilanjutkan dengan perakitan komponen mekanik dan elektronik"</i> (memasang kerangka, roda, motor penggerak, kabel, dan baterai).<br>3. <b>Tahap 3:</b> <i>"dipasang sistem sensor dan pemrograman agar robot dapat berpikir dan bergerak"</i> (memasukkan chip otak dan kode kecerdasan robot).<br>4. <b>Tahap 4:</b> <i>"Terakhir, robot diuji coba untuk memastikan semua fungsinya berjalan dengan baik dan aman digunakan."</i><br><br>Urutan ini sangat logis: dari perencanaan sketsa (desain) &rarr; perakitan fisik &rarr; pemasangan otak/sensor &rarr; pengetesan (uji coba).`
  },
  {
    id: 2603,
    ...TKA_INDO_IMAGES.stimulus1,
    question: `[STIMULUS 1: ROBOT PENGANTAR MAKANAN]
Teks Bacaan:
Robot pengantar makanan kini menjadi pemandangan menarik di berbagai restoran dan hotel di dunia. Di restoran Dona Alicia, Kuba, robot pelayan mulai digunakan sejak awal 2025 dan berhasil menarik perhatian banyak pengunjung. Di Tiongkok, hotel-hotel di Beijing juga memanfaatkan robot bernama RUN saat Olimpiade Musim Dingin 2022 untuk mengantar makanan tanpa kontak langsung. Sementara itu, di Amerika Serikat, robot menjadi solusi andalan saat musim dingin karena bisa bekerja meskipun jalanan bersalju. Kota Dubai pun tak ketinggalan, dengan menghadirkan robot pengantar di kawasan Sustainable City sejak 2024.

Penggunaan robot ini dinilai lebih efisien, higienis, dan praktis. Selain menghemat waktu, robot juga membantu mengurangi interaksi langsung antara petugas dan pelanggan, yang sangat penting selama masa pandemi. Robot-robot ini bekerja dengan sistem navigasi otonom, yaitu kemampuan gerak mandiri tanpa dikendalikan manusia. Mereka dilengkapi sensor LiDAR, yaitu sistem pemindaian laser atau pendeteksi rintangan sekitar. Seluruh pergerakan robot diawasi oleh Fleet Management System, yaitu sistem pemantau dari jarak jauh. Makanan yang dibawa robot disimpan dalam kompartemen aman sehingga tetap bersih dan terjaga sampai pelanggan membukanya.

Gagasan tentang robot sudah muncul sejak abad ke-20. Salah satu tokoh penting dalam pengembangan robot modern adalah Joseph Engelberger, insinyur asal Amerika yang menciptakan robot industri pertama, Unimate, pada tahun 1961.

Proses pembuatan robot umumnya dimulai dari tahap perancangan desain, lalu dilanjutkan dengan perakitan komponen mekanik dan elektronik. Setelah itu, dipasang sistem sensor dan pemrograman agar robot dapat berpikir dan bergerak. Terakhir, robot diuji coba untuk memastikan semua fungsinya berjalan dengan baik dan aman digunakan.

Glosarium:
Kompartemen: wadah atau bagian terpisah untuk menyimpan benda.

[PERTANYAAN NO. 3]
Nadin dan Ami membaca berita mengenai robot pengantar makanan tersebut. Mereka sepakat bahwa berita itu informatif dan mudah dipahami.
Mengapa teks berita itu dapat dipahami oleh Nadin dan Ami?

Cermatilah pernyataan berikut:
(1) Terdapat penjelasan makna untuk setiap istilah asing yang disebutkan dalam teks.
(2) Kalimat-kalimat dalam teks menggunakan istilah yang cukup familiar dalam obrolan sehari-hari.
(3) Teks disertai dengan keterangan atau glosarium tentang istilah khusus yang digunakan.

Kombinasi penilaian Tepat atau Tidak Tepat yang benar berturut-turut adalah...`,
    options: [
      `A. (1) Tepat, (2) Tepat, (3) Tepat`,
      `B. (1) Tidak Tepat, (2) Tepat, (3) Tidak Tepat`,
      `C. (1) Tepat, (2) Tidak Tepat, (3) Tepat`,
      `D. (1) Tidak Tepat, (2) Tidak Tepat, (3) Tepat`,
    ],
    correctAnswer: 2,
    isHots: true,
    explanation: `<b>Kunci Jawaban: C. (1) Tepat, (2) Tidak Tepat, (3) Tepat</b><br><br><b>Analisis Kritis Setiap Pernyataan (Step-by-Step):</b><br>&bull; <b>Pernyataan (1) - TEPAT:</b> Penulis secara konsisten memberikan definisi langsung di samping istilah asing yang dicantumkan (contohnya istilah <i>otonom</i> dijelaskan maknanya gerak mandiri, <i>LiDAR</i> dijelaskan pemindaian laser, dan <i>Fleet Management System</i> dijelaskan pemantau jarak jauh). Hal inilah yang membuat pembaca cepat paham.<br>&bull; <b>Pernyataan (2) - TIDAK TEPAT:</b> Kata "familiar" artinya kata yang akrab atau lazim digunakan anak-anak dalam percakapan sehari-hari. Istilah seperti <i>LiDAR</i>, <i>otonom</i>, dan <i>kompartemen</i> adalah istilah teknik tinggi yang <b>bukan</b> istilah santai sehari-hari.<br>&bull; <b>Pernyataan (3) - TEPAT:</b> Pada akhir teks secara nyata disediakan bagian glosarium untuk menjelaskan istilah khusus seperti kata <i>kompartemen</i>.`
  },
  {
    id: 2604,
    ...TKA_INDO_IMAGES.stimulus2,
    question: `[STIMULUS 2: MINUMAN FERMENTASI SCOBY (KOMBUCHA)]
Teks Bacaan:
SCOBY (Symbiotic Culture of Bacteria and Yeast) adalah kultur mikroba (koloni bakteri baik dan ragi yang hidup saling menguntungkan) yang digunakan dalam proses fermentasi pembuatan minuman kombucha. Minuman kombucha ini sangat bermanfaat bagi tubuh manusia untuk menguatkan sistem imunitas dan menjadi sumber prebiotik yang tinggi bagi kesehatan usus.

Alat dan Bahan:
• Panci perebus
• Toples kaca transparan
• Kain kasa penutup
• Karet gelang pengikat
• Teh hitam atau teh hijau sebanyak 2 sendok makan
• Gula pasir sebanyak 1/4 cangkir
• Air mendidih sebanyak 4 cangkir
• Minuman kombucha siap pakai sebanyak 1/2 cangkir (sebagai starter alami yang membantu fermentasi teh menjadi minuman segar berkarbonasi)

Keterangan:
Starter kombucha adalah cairan kultur campuran bakteri dan ragi matang yang kaya nutrisi.

[PERTANYAAN NO. 4]
Berdasarkan teks petunjuk pembuatan SCOBY di atas, apa sajakah khasiat atau manfaat minuman fermentasi kombucha bagi kesehatan tubuh manusia?
(1) Menguatkan sistem imunitas tubuh.
(2) Menjadi sumber prebiotik yang tinggi.
(3) Membantu proses fermentasi teh.
(4) Memungkinkan sirkulasi udara mengalir.

Manfaat bagi kesehatan tubuh yang benar ditunjukkan oleh nomor...`,
    options: [
      `A. (1) dan (3)`,
      `B. (2) dan (4)`,
      `C. (3) dan (4)`,
      `D. (1) dan (2)`,
    ],
    correctAnswer: 3,
    isHots: false,
    explanation: `<b>Kunci Jawaban: D. (1) dan (2)</b><br><br><b>Langkah Penelusuran Fakta Teks (Step-by-Step):</b><br>1. Perhatikan paragraf pertama kalimat kedua:<br><i>"Kombucha bermanfaat untuk menguatkan sistem imunitas dan sumber prebiotik yang tinggi."</i><br>2. Dua manfaat bagi tubuh manusia yang disebutkan secara eksplisit adalah: <b>(1) menguatkan sistem kekebalan (imunitas)</b> dan <b>(2) sumber prebiotik</b> untuk kesehatan sistem pencernaan usus.<br><br><b>Mengapa opsi (3) dan (4) keliru?</b><br>&bull; Pernyataan (3) "membantu proses fermentasi" adalah fungsi kerja dari bibit ragi/starter SCOBY, bukan manfaat kesehatan yang dirasakan oleh tubuh manusia.<br>&bull; Pernyataan (4) "memungkinkan udara mengalir" adalah fungsi fisik dari penutup kain kasa pada toples.`
  },
  {
    id: 2605,
    ...TKA_INDO_IMAGES.stimulus2,
    question: `[STIMULUS 2: MINUMAN FERMENTASI SCOBY (KOMBUCHA)]
Teks Bacaan:
SCOBY (Symbiotic Culture of Bacteria and Yeast) adalah kultur mikroba (koloni bakteri baik dan ragi yang hidup saling menguntungkan) yang digunakan dalam proses fermentasi pembuatan minuman kombucha. Minuman kombucha ini sangat bermanfaat bagi tubuh manusia untuk menguatkan sistem imunitas dan menjadi sumber prebiotik yang tinggi bagi kesehatan usus.

Alat dan Bahan:
• Panci perebus
• Toples kaca transparan
• Kain kasa penutup
• Karet gelang pengikat
• Teh hitam atau teh hijau sebanyak 2 sendok makan
• Gula pasir sebanyak 1/4 cangkir
• Air mendidih sebanyak 4 cangkir
• Minuman kombucha siap pakai sebanyak 1/2 cangkir (sebagai starter alami yang membantu fermentasi teh menjadi minuman segar berkarbonasi)

Keterangan:
Starter kombucha adalah cairan kultur campuran bakteri dan ragi matang yang kaya nutrisi.

[PERTANYAAN NO. 5]
Dalam proses pembuatan SCOBY, mengapa toples kaca ditutup menggunakan kain kasa dan diikat karet gelang, bukan ditutup rapat menggunakan penutup toples kaca yang kedap udara?`,
    options: [
      `A. Supaya sirkulasi udara tetap terjaga untuk respirasi mikroba`,
      `B. Demi menjaga toples agar suhunya selalu panas mendidih`,
      `C. Agar toples bisa tertutup dengan sangat rapat dan kedap gas`,
      `D. Untuk mempertahankan tekstur SCOBY agar mengeras seperti batu`,
    ],
    correctAnswer: 0,
    isHots: false,
    explanation: `<b>Kunci Jawaban: A. Supaya sirkulasi udara tetap terjaga untuk respirasi mikroba</b><br><br><b>Pengingat Konsep Sains Sederhana:</b><br>Bakteri baik dan ragi (yeast) di dalam SCOBY adalah makhluk hidup renik (mikroorganisme). Sama seperti manusia, mereka butuh bernapas (respirasi aerobik) dengan menyerap oksigen dari udara untuk memproses gula menjadi nutrisi kombucha.<br><br>Kain kasa memiliki ribuan pori-pori jaring berlubang halus. Fungsinya:<br>1. Membiarkan udara segar keluar-masuk secara bebas (sirkulasi udara tetap terjaga).<br>2. Menjadi penyaring fisik agar debu, lalat buah, atau semut tidak bisa masuk mengotori toples.<br><br>Jika toples ditutup dengan tutup rapat kedap udara, mikroba akan kehabisan oksigen dan fermentasi akan mati/gagal.`
  },
  {
    id: 2606,
    ...TKA_INDO_IMAGES.stimulus2,
    question: `[STIMULUS 2: MINUMAN FERMENTASI SCOBY (KOMBUCHA)]
Teks Bacaan:
SCOBY (Symbiotic Culture of Bacteria and Yeast) adalah kultur mikroba (koloni bakteri baik dan ragi yang hidup saling menguntungkan) yang digunakan dalam proses fermentasi pembuatan minuman kombucha. Minuman kombucha ini sangat bermanfaat bagi tubuh manusia untuk menguatkan sistem imunitas dan menjadi sumber prebiotik yang tinggi bagi kesehatan usus.

Alat dan Bahan:
• Panci perebus
• Toples kaca transparan
• Kain kasa penutup
• Karet gelang pengikat
• Teh hitam atau teh hijau sebanyak 2 sendok makan
• Gula pasir sebanyak 1/4 cangkir
• Air mendidih sebanyak 4 cangkir
• Minuman kombucha siap pakai sebanyak 1/2 cangkir (sebagai starter alami yang membantu fermentasi teh menjadi minuman segar berkarbonasi)

Keterangan:
Starter kombucha adalah cairan kultur campuran bakteri dan ragi matang yang kaya nutrisi.

[PERTANYAAN NO. 6]
Apa yang akan terjadi jika toples berisi larutan teh dan SCOBY tersebut tidak disimpan di tempat yang hangat (misalnya ditaruh di dalam lemari es yang sangat dingin) saat percobaan berlangsung?`,
    options: [
      `A. SCOBY tetap terbentuk sempurna karena suhu dingin memicu pembelahan bakteri`,
      `B. SCOBY akan mengandung lebih banyak gula karena proses fermentasi tidak pernah berlangsung optimal`,
      `C. SCOBY terbentuk jauh lebih cepat karena udara dingin mengawetkan teh`,
      `D. SCOBY akan langsung terbakar dan meletup mengeluarkan gas asam`,
    ],
    correctAnswer: 1,
    isHots: true,
    explanation: `<b>Kunci Jawaban: B. SCOBY akan mengandung lebih banyak gula karena proses fermentasi tidak pernah berlangsung optimal</b><br><br><b>Penalaran Logis Langkah demi Langkah (Sains Mudah Dipahami):</b><br>1. Mikroba pembuat kombucha (bakteri dan ragi) sangat aktif bekerja membelah diri pada suhu ruang yang hangat (antara 24&deg;C - 29&deg;C).<br>2. Tugas utama mikroba selama fermentasi adalah: <i>"memakan"</i> gula pasir yang kita masukkan, lalu mengubahnya menjadi asam organik dan gelembung gas segar.<br>3. Jika toples ditaruh di tempat yang sangat dingin, mikroorganisme tersebut akan menjadi tidak aktif (dorman/tertidur pulas).<br>4. Karena mikrobanya tidak aktif bekerja, mereka tidak memakan gula yang ada di dalam toples.<br>5. Akibatnya, kandungan gula pasir tetap utuh, rasa teh tetap manis pekat, dan lapisan kultur SCOBY baru gagal terbentuk.`
  },
  {
    id: 2607,
    ...TKA_INDO_IMAGES.stimulus3,
    question: `[STIMULUS 3: PUISI SENJA DI PESISIR]
Teks Puisi:
Di hamparan waktu yang kian redup,
surya berlalu membawa senja,
terdengar sayup suara kalong melintas di pucuk kelapa,
berganti gemuruh suara bedug membelah hening.

Kenangan lama berloncatan di semak-semak rindu,
merayap di dada yang pasrah bertabur doa,
belajar dari alam yang senantiasa ikhlas,
meski masa lalu tak selalu seindah yang digariskan.

[PERTANYAAN NO. 7]
Berdasarkan puisi tersebut, manakah kosakata atau frasa yang paling tepat menggambarkan suasana petang (menjelang malam)?
(1) Hamparan waktu
(2) Suara kalong
(3) Surya berlalu
(4) Suara bedug

Pasangan frasa yang paling tepat sebagai penanda suasana petang adalah...`,
    options: [
      `A. (1) dan (2)`,
      `B. (2) dan (3)`,
      `C. (3) dan (4)`,
      `D. (1), (3), dan (4)`,
    ],
    correctAnswer: 2,
    isHots: false,
    explanation: `<b>Kunci Jawaban: C. (3) dan (4)</b><br><br><b>Bedah Kosakata Puisi (Step-by-Step):</b><br>&bull; Kata <i>petang</i> adalah waktu sore menjelang malam ketika matahari mulai terbenam hingga waktu maghrib tiba.<br>&bull; Frasa <b>"Surya berlalu"</b> (Nomor 3): Kata <i>surya</i> artinya matahari. <i>Surya berlalu</i> bermakna matahari tenggelam ke ufuk barat, penanda pasti datangnya waktu petang/senja.<br>&bull; Frasa <b>"Suara bedug"</b> (Nomor 4): Di Nusantara, tabuhan bedug yang membelah keheningan senja identik sebagai pertanda masuknya azan ibadah salat Maghrib (waktu petang).<br><br>Sedangkan <i>"hamparan waktu"</i> adalah ungkapan kiasan umum tentang perjalanan hidup, dan suara kalong adalah suara kelelawar malam yang melintas.`
  },
  {
    id: 2608,
    ...TKA_INDO_IMAGES.stimulus3,
    question: `[STIMULUS 3: PUISI SENJA DI PESISIR]
Teks Puisi:
Di hamparan waktu yang kian redup,
surya berlalu membawa senja,
terdengar sayup suara kalong melintas di pucuk kelapa,
berganti gemuruh suara bedug membelah hening.

Kenangan lama berloncatan di semak-semak rindu,
merayap di dada yang pasrah bertabur doa,
belajar dari alam yang senantiasa ikhlas,
meski masa lalu tak selalu seindah yang digariskan.

[PERTANYAAN NO. 8]
Apa sajakah pesan moral dan perenungan yang ingin disampaikan penyair melalui puisi tersebut?

Cermatilah pernyataan berikut:
(1) Alam menyimpan kenangan yang senantiasa dapat dijadikan pelajaran hidup.
(2) Ketulusan dan keikhlasan dalam hidup tetap berharga meskipun masa lalu tidak berjalan sesuai harapan.
(3) Manusia dapat merenungi makna kehidupannya melalui suara dan fenomena alam di sekitarnya.

Penilaian Benar atau Salah untuk ketiga pernyataan tersebut berturut-turut adalah...`,
    options: [
      `A. (1) Benar, (2) Benar, (3) Benar`,
      `B. (1) Benar, (2) Salah, (3) Benar`,
      `C. (1) Salah, (2) Benar, (3) Benar`,
      `D. (1) Benar, (2) Benar, (3) Salah`,
    ],
    correctAnswer: 0,
    isHots: true,
    explanation: `<b>Kunci Jawaban: A. (1) Benar, (2) Benar, (3) Benar</b><br><br><b>Analisis Amanat Puisi Bait demi Bait:</b><br>&bull; <b>Pernyataan (1) - BENAR:</b> Puisi menyebut <i>"belajar dari alam yang senantiasa ikhlas"</i>. Hal ini membuktikan bahwa fenomena alam adalah guru kehidupan tempat manusia memetik hikmah dan pelajaran.<br>&bull; <b>Pernyataan (2) - BENAR:</b> Baris <i>"meski masa lalu tak selalu seindah yang digariskan"</i> mengajarkan sikap lapang dada dan ikhlas menerima kenyataan hidup tanpa rasa putus asa.<br>&bull; <b>Pernyataan (3) - BENAR:</b> Pergantian senja, suara kalong, dan dentum suara bedug dijadikan media perenungan (kontemplasi) oleh manusia dalam keheningan doa.`
  },
  {
    id: 2609,
    ...TKA_INDO_IMAGES.stimulus3,
    question: `[STIMULUS 3: PUISI SENJA DI PESISIR]
Teks Puisi:
Di hamparan waktu yang kian redup,
surya berlalu membawa senja,
terdengar sayup suara kalong melintas di pucuk kelapa,
berganti gemuruh suara bedug membelah hening.

Kenangan lama berloncatan di semak-semak rindu,
merayap di dada yang pasrah bertabur doa,
belajar dari alam yang senantiasa ikhlas,
meski masa lalu tak selalu seindah yang digariskan.

[PERTANYAAN NO. 9]
Cermatilah larik puisi berikut: "Berloncatan di semak-semak rindu".
Bagaimanakah penafsiran makna majas metafora yang paling tepat pada larik tersebut?

Cermatilah pernyataan berikut:
(1) Rasa rindu yang muncul dan hilang begitu saja secara tiba-tiba tanpa menentu.
(2) Rasa rindu yang bergejolak tidak tenang tetapi tetap terasa indah layaknya taman bunga.
(3) Rasa rindu yang membawa kehancuran dan keputusasaan mendalam yang merusak akal sehat.

Penilaian Tepat atau Tidak Tepat untuk ketiga pernyataan tersebut berturut-turut adalah...`,
    options: [
      `A. (1) Tidak Tepat, (2) Tepat, (3) Tidak Tepat`,
      `B. (1) Tepat, (2) Tepat, (3) Tidak Tepat`,
      `C. (1) Tepat, (2) Tidak Tepat, (3) Tidak Tepat`,
      `D. (1) Tidak Tepat, (2) Tidak Tepat, (3) Tepat`,
    ],
    correctAnswer: 2,
    isHots: true,
    explanation: `<b>Kunci Jawaban: C. (1) Tepat, (2) Tidak Tepat, (3) Tidak Tepat</b><br><br><b>Memahami Makna Kiasan (Metafora):</b><br>&bull; Kata <i>"berloncatan"</i> mengacu pada gerakan melompat lincah dari satu tempat ke tempat lain secara acak dan cepat (ibarat belalang yang melompat di balik rimbun semak).<br>&bull; Ketika disandingkan dengan kata <i>"rindu"</i>, gambaran ini melukiskan perasaan rindu yang tidak menetap: ingatan masa lalu tiba-tiba muncul seketika di pikiran, lalu menghilang lagi seiring lamunan.<br>&bull; Oleh sebab itu, pernyataan (1) sangat <b>TEPAT</b>.<br>&bull; Pernyataan (2) dan (3) <b>TIDAK TEPAT</b> karena larik puisi tersebut tidak membicarakan keindahan taman bunga maupun keputusasaan ekstrem yang merusak jiwa.`
  },
  {
    id: 2610,
    ...TKA_INDO_IMAGES.stimulus4,
    question: `[STIMULUS 4: UJI BIODEGRADASI PLASTIK KONVENSIONAL DAN BIOPLASTIK]
Teks Informasi & Prosedur:
Pencemaran sampah plastik merupakan salah satu persoalan lingkungan paling mendesak di bumi. Untuk membuktikan keunggulan plastik ramah lingkungan, dilakukan eksperimen uji biodegradasi (tingkat keteruraian material oleh alam) antara plastik konvensional dan bioplastik.

Prosedur Pengujian:
1. Siapkan lembaran plastik konvensional berbahan polietilen (polyethylene) dan bioplastik berbahan dasar pati singkong alami, masing-masing dipotong berukuran 5 cm x 5 cm.
2. Timbang massa awal kedua sampel dengan timbangan digital analitis dan catat beratnya.
3. Masukkan sampel ke dalam dua wadah: satu gelas berisi air murni (pH netral), dan satu gelas berisi larutan asam cuka encer.
4. Diamkan kedua sampel selama 7 hari di tempat yang teduh.
5. Setelah 7 hari, angkat sampel, keringkan, dan timbang kembali massa akhirnya.

Hasil Pengujian:
Massa bioplastik mengalami penurunan drastis saat direndam larutan asam cuka dan strukturnya mulai hancur terurai secara biologis. Sebaliknya, plastik konvensional berbahan polietilen tidak mengalami pengurangan massa sedikit pun karena rantai polimer sintetisnya tidak dapat diputus oleh larutan asam maupun air.

[PERTANYAAN NO. 10]
Setelah membaca teks prosedur uji biodegradasi tersebut, Nake, Elvina, dan Ratna menyampaikan komentar sebagai berikut:
• Nake: "Menurutku petunjuk kegiatan dalam teks mudah dimengerti. Penulis menggunakan kalimat perintah yang sederhana."
• Elvina: "Betul, Nake. Apalagi tampilan teks juga sangat menarik. Aku sangat suka dengan pilihan warna infografiknya."
• Ratna: "Menurutku, setiap pernyataan dalam teks juga jelas, termasuk rincian waktu penelitian, misalnya 'setelah 7 hari'."

Pendapat siapakah yang paling sesuai untuk menilai aspek kebahasaan teks prosedur tersebut?

Cermatilah pernyataan berikut:
(1) Elvina, karena alasan yang diungkapkan mencerminkan tingkat estetika bahasa.
(2) Nake, karena pernyataan yang disampaikan merujuk pada efektivitas bahasa teks.
(3) Ratna, karena argumen yang disampaikan merujuk pada keunggulan kalimat rincian.

Kombinasi penilaian Sesuai atau Tidak Sesuai berturut-turut adalah...`,
    options: [
      `A. (1) Sesuai, (2) Sesuai, (3) Sesuai`,
      `B. (1) Tidak Sesuai, (2) Sesuai, (3) Sesuai`,
      `C. (1) Sesuai, (2) Tidak Sesuai, (3) Sesuai`,
      `D. (1) Tidak Sesuai, (2) Sesuai, (3) Tidak Sesuai`,
    ],
    correctAnswer: 1,
    isHots: true,
    explanation: `<b>Kunci Jawaban: B. (1) Tidak Sesuai, (2) Sesuai, (3) Sesuai</b><br><br><b>Bedah Komentar Tokoh (Fokus pada Aspek Kebahasaan):</b><br>&bull; <b>Pernyataan (1) - TIDAK SESUAI:</b> Elvina mengomentari "pilihan warna infografik". Warna dan gambar adalah elemen visual/grafis, <b>bukan</b> aspek kebahasaan (teks/kata-kata). Jadi menilai estetika bahasa dari warna gambar adalah tidak sesuai.<br>&bull; <b>Pernyataan (2) - SESUAI:</b> Nake mengomentari "kalimat perintah yang sederhana". Kalimat imperatif (perintah) yang jelas adalah ciri utama kaidah bahasa teks prosedur agar pembaca bisa mempraktikkan langkah secara efektif tanpa bingung.<br>&bull; <b>Pernyataan (3) - SESUAI:</b> Ratna menyoroti "rincian waktu: setelah 7 hari". Penggunaan kata keterangan waktu dan ukuran yang presisi (rincian) membuat teks ilmiah menjadi akurat dan terukur.`
  },
  {
    id: 2611,
    ...TKA_INDO_IMAGES.stimulus4,
    question: `[STIMULUS 4: UJI BIODEGRADASI PLASTIK KONVENSIONAL DAN BIOPLASTIK]
Teks Informasi & Prosedur:
Pencemaran sampah plastik merupakan salah satu persoalan lingkungan paling mendesak di bumi. Untuk membuktikan keunggulan plastik ramah lingkungan, dilakukan eksperimen uji biodegradasi (tingkat keteruraian material oleh alam) antara plastik konvensional dan bioplastik.

Prosedur Pengujian:
1. Siapkan lembaran plastik konvensional berbahan polietilen (polyethylene) dan bioplastik berbahan dasar pati singkong alami, masing-masing dipotong berukuran 5 cm x 5 cm.
2. Timbang massa awal kedua sampel dengan timbangan digital analitis dan catat beratnya.
3. Masukkan sampel ke dalam dua wadah: satu gelas berisi air murni (pH netral), dan satu gelas berisi larutan asam cuka encer.
4. Diamkan kedua sampel selama 7 hari di tempat yang teduh.
5. Setelah 7 hari, angkat sampel, keringkan, dan timbang kembali massa akhirnya.

Hasil Pengujian:
Massa bioplastik mengalami penurunan drastis saat direndam larutan asam cuka dan strukturnya mulai hancur terurai secara biologis. Sebaliknya, plastik konvensional berbahan polietilen tidak mengalami pengurangan massa sedikit pun karena rantai polimer sintetisnya tidak dapat diputus oleh larutan asam maupun air.

[PERTANYAAN NO. 11]
Berdasarkan hasil uji biodegradasi pada teks tersebut, mengapa bioplastik dinyatakan jauh lebih ramah lingkungan dibandingkan plastik konvensional?

Cermatilah pernyataan berikut:
(1) Massa bioplastik mengalami penurunan lebih cepat saat direndam dalam larutan asam cuka.
(2) Bahan dasar bioplastik mudah terurai secara alami, terutama saat berada dalam lingkungan asam.
(3) Keberadaan material polyethylene di dalam bioplastik membuat proses penguraian menjadi lebih cepat.

Penilaian Benar atau Salah untuk ketiga pernyataan tersebut berturut-turut adalah...`,
    options: [
      `A. (1) Benar, (2) Salah, (3) Benar`,
      `B. (1) Salah, (2) Benar, (3) Salah`,
      `C. (1) Benar, (2) Benar, (3) Salah`,
      `D. (1) Benar, (2) Benar, (3) Benar`,
    ],
    correctAnswer: 2,
    isHots: false,
    explanation: `<b>Kunci Jawaban: C. (1) Benar, (2) Benar, (3) Salah</b><br><br><b>Pembahasan Sains & Bahasa (Step-by-Step):</b><br>&bull; <b>Pernyataan (1) - BENAR:</b> Eksperimen membuktikan massa bioplastik berkurang secara signifikan karena sebagian materinya mulai hancur terurai.<br>&bull; <b>Pernyataan (2) - BENAR:</b> Bahan pati alami mudah bereaksi dan dicerna oleh mikroorganisme dalam suasana asam cuka.<br>&bull; <b>Pernyataan (3) - SALAH (Awas Jebakan!):</b> <i>Polyethylene</i> adalah nama bahan kimia minyak bumi pembuat plastik biasa (konvensional). Bahan polietilen inilah yang membuat plastik konvensional <b>sangat sulit terurai</b> selama puluhan bahkan ratusan tahun. Bioplastik asli dibuat dari pati alami (singkong/jagung), bukan polietilen!`
  },
  {
    id: 2612,
    ...TKA_INDO_IMAGES.stimulus4,
    question: `[STIMULUS 4: UJI BIODEGRADASI PLASTIK KONVENSIONAL DAN BIOPLASTIK]
Teks Informasi & Prosedur:
Pencemaran sampah plastik merupakan salah satu persoalan lingkungan paling mendesak di bumi. Untuk membuktikan keunggulan plastik ramah lingkungan, dilakukan eksperimen uji biodegradasi (tingkat keteruraian material oleh alam) antara plastik konvensional dan bioplastik.

Prosedur Pengujian:
1. Siapkan lembaran plastik konvensional berbahan polietilen (polyethylene) dan bioplastik berbahan dasar pati singkong alami, masing-masing dipotong berukuran 5 cm x 5 cm.
2. Timbang massa awal kedua sampel dengan timbangan digital analitis dan catat beratnya.
3. Masukkan sampel ke dalam dua wadah: satu gelas berisi air murni (pH netral), dan satu gelas berisi larutan asam cuka encer.
4. Diamkan kedua sampel selama 7 hari di tempat yang teduh.
5. Setelah 7 hari, angkat sampel, keringkan, dan timbang kembali massa akhirnya.

Hasil Pengujian:
Massa bioplastik mengalami penurunan drastis saat direndam larutan asam cuka dan strukturnya mulai hancur terurai secara biologis. Sebaliknya, plastik konvensional berbahan polietilen tidak mengalami pengurangan massa sedikit pun karena rantai polimer sintetisnya tidak dapat diputus oleh larutan asam maupun air.

[PERTANYAAN NO. 12]
Mengapa penulis menyampaikan informasi mengenai prosedur dan hasil uji biodegradasi plastik konvensional dan bioplastik tersebut kepada pembaca?`,
    options: [
      `A. Memaparkan panduan resep membuat bioplastik sendiri dari tepung kanji di dapur rumah`,
      `B. Membandingkan tingkat kelarutan dan penguraian plastik konvensional dan bioplastik melalui media larutan`,
      `C. Menganalisis bahaya tumpahan larutan asam cuka terhadap perabotan kaca laboratorium`,
      `D. Menginstruksikan pembaca untuk menimbun seluruh kantong plastik di pekarangan sekolah`,
    ],
    correctAnswer: 1,
    isHots: false,
    explanation: `<b>Kunci Jawaban: B. Membandingkan tingkat kelarutan dan penguraian plastik konvensional dan bioplastik melalui media larutan</b><br><br><b>Tujuan Komunikatif Teks Eksplanasi/Prosedur Ilmiah:</b><br>Teks tersebut menyajikan pengujian komparatif (perbandingan) antara dua sampel material yang diberi perlakuan sama (direndam air biasa dan larutan cuka selama 7 hari).<br>Tujuan pokok penulis adalah membuktikan secara nyata dan objektif kepada pembaca bahwa bioplastik dapat terurai (biodegradable) oleh lingkungan larutan, sedangkan plastik biasa tidak terurai sama sekali.`
  },
  {
    id: 2613,
    ...TKA_INDO_IMAGES.stimulus5,
    question: `[STIMULUS 5: KONSUMSI BERTANGGUNG JAWAB (KUALITAS ATAU KUANTITAS?)]
Teks Bacaan:
Saat membeli kaos kaki, kalian akan memilih yang mana?
Apakah kaos kaki yang kualitasnya bagus, kainnya tebal dan lembut, harganya mahal, tetapi hanya dapat satu pasang?
Atau kaos kaki yang kualitasnya biasa saja, harganya sangat murah, dan langsung dapat lima pasang sekaligus? Ayo, kalian pilih kualitas atau kuantitas?

Saat kalian membeli barang dengan cermat, kalian sebenarnya sedang menerapkan prinsip konsumsi dan produksi yang bertanggung jawab. Pada dasarnya ada pepatah mengatakan: "ada harga, ada rupa". Semakin bagus kualitas sebuah barang, biasanya semakin tinggi pula harganya. Namun, barang tersebut akan awet, nyaman, dan tahan lama saat dipakai. Pada akhirnya, kalian justru akan menghemat pengeluaran bulanan karena tidak perlu bolak-balik membeli kaos kaki baru. Uangnya bisa ditabung untuk keperluan lain yang lebih bermanfaat.

Coba bandingkan dengan membeli kaos kaki murah yang kualitasnya jelek hanya karena dapat banyak. Baru dipakai berlari sebentar, kaos kakinya sudah melar dan sobek berlubang. Kelima pasang kaos kaki itu cepat rusak dan akhirnya dibuang ke tempat sampah. Kaos kaki murah ini justru berubah menjadi tumpukan sampah kain yang mencemari lingkungan dan bumi kita.

Oleh karena itu, sebaiknya kalian membeli barang berkualitas baik meskipun jumlahnya sedikit asalkan bisa digunakan dalam jangka waktu lama. Belilah barang yang benar-benar kalian butuhkan, jangan membeli hanya karena lapar mata atau sekadar murah!

[PERTANYAAN NO. 13]
Berdasarkan wacana tentang konsumsi bertanggung jawab saat membeli kaos kaki, mengapa terdapat perbedaan keputusan berbelanja antara anak yang memilih kuantitas dan anak yang memilih kualitas?

Cermatilah pernyataan berikut:
(1) Anak perempuan menyadari bahwa dirinya masih memiliki banyak kaos kaki yang masih bagus di lemari rumahnya.
(2) Anak laki-laki merasa senang karena dapat menabung uangnya untuk membeli keperluan lain.
(3) Anak laki-laki tetap merasa puas meskipun memiliki sedikit kaos kaki dengan kualitas biasa.

Penilaian Benar atau Salah untuk ketiga pernyataan tersebut berturut-turut adalah...`,
    options: [
      `A. (1) Benar, (2) Salah, (3) Salah`,
      `B. (1) Salah, (2) Benar, (3) Salah`,
      `C. (1) Salah, (2) Salah, (3) Benar`,
      `D. (1) Salah, (2) Salah, (3) Salah`,
    ],
    correctAnswer: 3,
    isHots: true,
    explanation: `<b>Kunci Jawaban: D. (1) Salah, (2) Salah, (3) Salah</b><br><br><b>Analisis Fakta Teks (Ketelitian Membaca):</b><br>&bull; <b>Pernyataan (1) - SALAH:</b> Teks tidak pernah membahas kondisi lemari di rumah sang anak perempuan. Teks membahas pilihan pertimbangan saat membeli barang di toko (kualitas vs kuantitas).<br>&bull; <b>Pernyataan (2) - SALAH:</b> Menurut bacaan, orang yang membeli barang murah yang cepat rusak justru <b>tidak bisa menabung</b> karena harus bolak-balik mengeluarkan uang membeli pengganti. Yang bisa menabung adalah pembeli barang berkualitas yang awet.<br>&bull; <b>Pernyataan (3) - SALAH:</b> Anak laki-laki yang mengejar kuantitas justru mendapatkan kaos kaki dalam jumlah <b>BANYAK</b> (lima pasang), bukan sedikit! Jadi pernyataan bahwa ia memiliki sedikit kaos kaki bertolak belakang dengan isi teks.<br><br>Karena ketiganya tidak sesuai dengan isi teks, maka penilaian yang benar adalah Salah, Salah, Salah.`
  },
  {
    id: 2614,
    ...TKA_INDO_IMAGES.stimulus5,
    question: `[STIMULUS 5: KONSUMSI BERTANGGUNG JAWAB (KUALITAS ATAU KUANTITAS?)]
Teks Bacaan:
Saat membeli kaos kaki, kalian akan memilih yang mana?
Apakah kaos kaki yang kualitasnya bagus, kainnya tebal dan lembut, harganya mahal, tetapi hanya dapat satu pasang?
Atau kaos kaki yang kualitasnya biasa saja, harganya sangat murah, dan langsung dapat lima pasang sekaligus? Ayo, kalian pilih kualitas atau kuantitas?

Saat kalian membeli barang dengan cermat, kalian sebenarnya sedang menerapkan prinsip konsumsi dan produksi yang bertanggung jawab. Pada dasarnya ada pepatah mengatakan: "ada harga, ada rupa". Semakin bagus kualitas sebuah barang, biasanya semakin tinggi pula harganya. Namun, barang tersebut akan awet, nyaman, dan tahan lama saat dipakai. Pada akhirnya, kalian justru akan menghemat pengeluaran bulanan karena tidak perlu bolak-balik membeli kaos kaki baru. Uangnya bisa ditabung untuk keperluan lain yang lebih bermanfaat.

Coba bandingkan dengan membeli kaos kaki murah yang kualitasnya jelek hanya karena dapat banyak. Baru dipakai berlari sebentar, kaos kakinya sudah melar dan sobek berlubang. Kelima pasang kaos kaki itu cepat rusak dan akhirnya dibuang ke tempat sampah. Kaos kaki murah ini justru berubah menjadi tumpukan sampah kain yang mencemari lingkungan dan bumi kita.

Oleh karena itu, sebaiknya kalian membeli barang berkualitas baik meskipun jumlahnya sedikit asalkan bisa digunakan dalam jangka waktu lama. Belilah barang yang benar-benar kalian butuhkan, jangan membeli hanya karena lapar mata atau sekadar murah!

[PERTANYAAN NO. 14]
Bagaimanakah perbedaan mendasar dari kedua sikap anak pada ilustrasi bacaan tersebut saat memutuskan membeli kaos kaki di toko?`,
    options: [
      `A. Anak laki-laki membeli kaos kaki dalam jumlah (kuantitas) lebih banyak meski cepat rusak`,
      `B. Anak perempuan memilih kaos kaki yang paling murah agar uang tabungannya cepat habis`,
      `C. Anak laki-laki terbukti memiliki pengeluaran belanja yang jauh lebih hemat dalam jangka panjang`,
      `D. Anak perempuan membeli lima pasang kaos kaki tipis sekaligus tanpa memeriksa jahitan`,
    ],
    correctAnswer: 0,
    isHots: false,
    explanation: `<b>Kunci Jawaban: A. Anak laki-laki membeli kaos kaki dalam jumlah (kuantitas) lebih banyak meski cepat rusak</b><br><br><b>Penjelasan Karakteristik Pilihan:</b><br>Bacaan membandingkan dua kutub pertimbangan belanja:<br>1. <b>Kuantitas (Anak Laki-Laki):</b> Memilih opsi murah meriah karena tergiur mendapatkan jumlah banyak (langsung dapat 5 pasang kaos kaki) meskipun bahannya tipis dan cepat berlubang.<br>2. <b>Kualitas (Anak Perempuan):</b> Memilih opsi mutu bahan unggul (hanya dapat 1 pasang tetapi tebal, nyaman, dan tahan bertahun-tahun).<br><br>Maka perbedaan yang paling tepat adalah anak laki-laki membeli dalam kuantitas/jumlah yang lebih banyak.`
  },
  {
    id: 2615,
    ...TKA_INDO_IMAGES.stimulus5,
    question: `[STIMULUS 5: KONSUMSI BERTANGGUNG JAWAB (KUALITAS ATAU KUANTITAS?)]
Teks Bacaan:
Saat membeli kaos kaki, kalian akan memilih yang mana?
Apakah kaos kaki yang kualitasnya bagus, kainnya tebal dan lembut, harganya mahal, tetapi hanya dapat satu pasang?
Atau kaos kaki yang kualitasnya biasa saja, harganya sangat murah, dan langsung dapat lima pasang sekaligus? Ayo, kalian pilih kualitas atau kuantitas?

Saat kalian membeli barang dengan cermat, kalian sebenarnya sedang menerapkan prinsip konsumsi dan produksi yang bertanggung jawab. Pada dasarnya ada pepatah mengatakan: "ada harga, ada rupa". Semakin bagus kualitas sebuah barang, biasanya semakin tinggi pula harganya. Namun, barang tersebut akan awet, nyaman, dan tahan lama saat dipakai. Pada akhirnya, kalian justru akan menghemat pengeluaran bulanan karena tidak perlu bolak-balik membeli kaos kaki baru. Uangnya bisa ditabung untuk keperluan lain yang lebih bermanfaat.

Coba bandingkan dengan membeli kaos kaki murah yang kualitasnya jelek hanya karena dapat banyak. Baru dipakai berlari sebentar, kaos kakinya sudah melar dan sobek berlubang. Kelima pasang kaos kaki itu cepat rusak dan akhirnya dibuang ke tempat sampah. Kaos kaki murah ini justru berubah menjadi tumpukan sampah kain yang mencemari lingkungan dan bumi kita.

Oleh karena itu, sebaiknya kalian membeli barang berkualitas baik meskipun jumlahnya sedikit asalkan bisa digunakan dalam jangka waktu lama. Belilah barang yang benar-benar kalian butuhkan, jangan membeli hanya karena lapar mata atau sekadar murah!

[PERTANYAAN NO. 15]
Berdasarkan bacaan tersebut, apakah manfaat ekonomi (manfaat finansial/keuangan) yang nyata jika kita membiasakan diri membeli barang yang bermutu tinggi?`,
    options: [
      `A. Meningkatkan gengsi pribadi di depan teman-teman pergaulan`,
      `B. Menghemat total pengeluaran uang karena barang awet dan tidak perlu terus-menerus membeli pengganti`,
      `C. Mengurangi tumpukan sampah kain di tempat pembuangan akhir (TPA)`,
      `D. Memudahkan kita saat mencuci pakaian karena bahannya tidak luntur`,
    ],
    correctAnswer: 1,
    isHots: false,
    explanation: `<b>Kunci Jawaban: B. Menghemat total pengeluaran uang karena barang awet dan tidak perlu terus-menerus membeli pengganti</b><br><br><b>Perhatikan Kata Kunci Soal (Manfaat Ekonomi):</b><br>Ekonomi berhubungan dengan pengelolaan keuangan/uang.<br>&bull; Teks menjelaskan: barang bermutu memang terasa mahal di awal, namun karena tahan bertahun-tahun, kita tidak perlu sering membeli barang baru. Uang kita jadi aman dan bisa ditabung untuk keperluan lain.<br>&bull; Opsi C ("mengurangi sampah kain") adalah <b>manfaat lingkungan (ekologi)</b>, bukan manfaat ekonomi.<br>&bull; Opsi A ("gengsi") bertentangan dengan pesan hidup hemat dan bijaksana yang diajarkan dalam bacaan.`
  },
  {
    id: 2616,
    ...TKA_INDO_IMAGES.stimulus6,
    question: `[STIMULUS 6: BROSUR KAWASAN KONSERVASI LAUT DI INDONESIA]
Teks Brosur:
Indonesia dianugerahi kekayaan laut yang luar biasa dan diakui dunia sebagai pusat Segitiga Terumbu Karang Dunia (Coral Triangle). Untuk melindungi habitat laut dari ancaman penangkapan ikan berlebih (overfishing), bom ikan, dan pencemaran, Kementerian Kelautan dan Perikanan (KKP) RI menetapkan ratusan Kawasan Konservasi Perairan di seluruh nusantara.

Brosur ini memuat peta persebaran titik lokasi kawasan konservasi laut dari Sabang hingga Merauke, yang mencakup:
1. Taman Nasional Perairan (misalnya Laut Sawu dan Kepulauan Anambas)
2. Suaka Pesisir dan Suaka Pulau Kecil
3. Kawasan Konservasi Maritim

Pencantuman peta wilayah Indonesia dalam brosur ini bertujuan memberikan gambaran nyata kepada masyarakat tentang persebaran bentang konservasi nasional. Perlindungan ini sangat vital demi menjaga keberlanjutan stok sumber daya ikan, melindungi terumbu karang dan penyu langka, serta menjamin masa depan pangan nelayan Indonesia. Mari bersama menjaga laut kita: jangan buang sampah ke pantai dan tolak perusakan karang!

[PERTANYAAN NO. 16]
Mengapa penyusun brosur menyertakan gambar peta Indonesia dalam materi publikasi mengenai kawasan konservasi laut tersebut?

Cermatilah pernyataan berikut:
(1) Menegaskan kepada pembaca bahwa kawasan konservasi yang dibahas berada di dalam wilayah kedaulatan Indonesia.
(2) Membantu pembaca memahami persebaran titik lokasi kawasan konservasi yang tersebar di berbagai daerah kepulauan.
(3) Menunjukkan secara visual letak geografis kawasan konservasi laut yang diinformasikan dalam brosur.

Penilaian Benar atau Salah untuk ketiga pernyataan tersebut berturut-turut adalah...`,
    options: [
      `A. (1) Benar, (2) Benar, (3) Benar`,
      `B. (1) Benar, (2) Salah, (3) Benar`,
      `C. (1) Salah, (2) Benar, (3) Benar`,
      `D. (1) Benar, (2) Benar, (3) Salah`,
    ],
    correctAnswer: 0,
    isHots: false,
    explanation: `<b>Kunci Jawaban: A. (1) Benar, (2) Benar, (3) Benar</b><br><br><b>Fungsi Gambar Peta dalam Brosur Edukasi:</b><br>&bull; <b>Pernyataan (1) - BENAR:</b> Peta membuktikan secara yuridis dan geografis bahwa seluruh kawasan lindung tersebut berada di wilayah NKRI.<br>&bull; <b>Pernyataan (2) - BENAR:</b> Sebagai negara kepulauan yang luas, peta mempermudah pembaca melihat bagaimana kawasan konservasi tersebar merata dari wilayah barat, tengah, hingga timur.<br>&bull; <b>Pernyataan (3) - BENAR:</b> Visualisasi peta memandu pembaca menghubungkan nama kawasan konservasi (seperti Raja Ampat, Sawu) dengan posisi letak fisiknya di peta perairan nusantara.`
  },
  {
    id: 2617,
    ...TKA_INDO_IMAGES.stimulus6,
    question: `[STIMULUS 6: BROSUR KAWASAN KONSERVASI LAUT DI INDONESIA]
Teks Brosur:
Indonesia dianugerahi kekayaan laut yang luar biasa dan diakui dunia sebagai pusat Segitiga Terumbu Karang Dunia (Coral Triangle). Untuk melindungi habitat laut dari ancaman penangkapan ikan berlebih (overfishing), bom ikan, dan pencemaran, Kementerian Kelautan dan Perikanan (KKP) RI menetapkan ratusan Kawasan Konservasi Perairan di seluruh nusantara.

Brosur ini memuat peta persebaran titik lokasi kawasan konservasi laut dari Sabang hingga Merauke, yang mencakup:
1. Taman Nasional Perairan (misalnya Laut Sawu dan Kepulauan Anambas)
2. Suaka Pesisir dan Suaka Pulau Kecil
3. Kawasan Konservasi Maritim

Pencantuman peta wilayah Indonesia dalam brosur ini bertujuan memberikan gambaran nyata kepada masyarakat tentang persebaran bentang konservasi nasional. Perlindungan ini sangat vital demi menjaga keberlanjutan stok sumber daya ikan, melindungi terumbu karang dan penyu langka, serta menjamin masa depan pangan nelayan Indonesia. Mari bersama menjaga laut kita: jangan buang sampah ke pantai dan tolak perusakan karang!

[PERTANYAAN NO. 17]
Berdasarkan informasi dalam brosur, mengapa perlindungan terhadap Kawasan Konservasi Perairan/Maritim mutlak diperlukan bagi bangsa Indonesia?`,
    options: [
      `A. Demi menjaga keberlanjutan sumber daya ikan dan ekosistem laut yang terancam punah`,
      `B. Agar perairan Indonesia dapat dikeruk pasirnya untuk dijual ke perusahaan luar negeri`,
      `C. Supaya kapal nelayan asing diizinkan menangkap ikan secara bebas tanpa pengawasan`,
      `D. Untuk melarang seluruh warga pesisir berlayar dan menikmati keindahan pantai`,
    ],
    correctAnswer: 0,
    isHots: false,
    explanation: `<b>Kunci Jawaban: A. Demi menjaga keberlanjutan sumber daya ikan dan ekosistem laut yang terancam punah</b><br><br><b>Konsep Keberlanjutan Ekosistem (Sustainability):</b><br>Ikan dan terumbu karang dapat habis bila dieksploitasi berlebihan. Kawasan Konservasi Laut berfungsi sebagai suaka (tempat perlindungan) agar indukan ikan dapat bertelur dan terumbu karang tumbuh aman.<br>Jika rumah ikan terlindungi, stok ikan di laut lepas akan terus melimpah sehingga generasi nelayan di masa depan tetap bisa memanen ikan.`
  },
  {
    id: 2618,
    ...TKA_INDO_IMAGES.stimulus6,
    question: `[STIMULUS 6: BROSUR KAWASAN KONSERVASI LAUT DI INDONESIA]
Teks Brosur:
Indonesia dianugerahi kekayaan laut yang luar biasa dan diakui dunia sebagai pusat Segitiga Terumbu Karang Dunia (Coral Triangle). Untuk melindungi habitat laut dari ancaman penangkapan ikan berlebih (overfishing), bom ikan, dan pencemaran, Kementerian Kelautan dan Perikanan (KKP) RI menetapkan ratusan Kawasan Konservasi Perairan di seluruh nusantara.

Brosur ini memuat peta persebaran titik lokasi kawasan konservasi laut dari Sabang hingga Merauke, yang mencakup:
1. Taman Nasional Perairan (misalnya Laut Sawu dan Kepulauan Anambas)
2. Suaka Pesisir dan Suaka Pulau Kecil
3. Kawasan Konservasi Maritim

Pencantuman peta wilayah Indonesia dalam brosur ini bertujuan memberikan gambaran nyata kepada masyarakat tentang persebaran bentang konservasi nasional. Perlindungan ini sangat vital demi menjaga keberlanjutan stok sumber daya ikan, melindungi terumbu karang dan penyu langka, serta menjamin masa depan pangan nelayan Indonesia. Mari bersama menjaga laut kita: jangan buang sampah ke pantai dan tolak perusakan karang!

[PERTANYAAN NO. 18]
Apakah tujuan utama dari penerbitan brosur Kawasan Konservasi Laut tersebut oleh Kementerian Kelautan dan Perikanan?
(1) Memberi tahu pembaca tentang daftar tarif sewa perahu nelayan di pulau terpencil.
(2) Memberikan informasi mengenai upaya dan komitmen pemerintah dalam mengelola laut.
(3) Menyebutkan nama-nama pejabat kementerian yang memenangkan piagam penghargaan.
(4) Mendorong dan mengajak masyarakat pembaca untuk ikut berperan aktif dalam melestarikan laut.

Tujuan utama yang tepat ditunjukkan oleh nomor...`,
    options: [
      `A. (1) dan (3)`,
      `B. (1) dan (2)`,
      `C. (3) dan (4)`,
      `D. (2) dan (4)`,
    ],
    correctAnswer: 3,
    isHots: false,
    explanation: `<b>Kunci Jawaban: D. (2) dan (4)</b><br><br><b>Menganalisis Tujuan Teks Brosur Layanan Masyarakat:</b><br>Sebuah brosur dari kementerian pemerintah memiliki dua sasaran utama:<br>1. <b>Tujuan Informatif (Nomor 2):</b> Menyampaikan kepada masyarakat tentang apa saja langkah dan program perlindungan wilayah laut yang telah dijalankan oleh pemerintah.<br>2. <b>Tujuan Persuasif (Nomor 4):</b> Mengajak masyarakat dan wisatawan untuk turut bertanggung jawab menjaga kebersihan pantai, tidak membuang sampah plastik, serta tidak merusak terumbu karang.<br><br>Pernyataan (1) dan (3) tidak relevan dengan esensi brosur konservasi.`
  },
  {
    id: 2619,
    ...TKA_INDO_IMAGES.stimulus7,
    question: `[STIMULUS 7: KISAH KETUPAT LEBARAN KELUARGA BU DINI]
Teks Cerpen:
Pada suatu pagi di hari terakhir bulan Ramadan, Bu Dini pulang dari pasar dengan membawa seikat janur kelapa muda berwarna hijau kekuningan.
"Daun apa itu yang Bunda bawa?" tanya Zainal penasaran.
"Ini daun kelapa muda, biasa disebut janur, Nak," jawab Bu Dini ramah.
Fitri, adik Zainal, menghampiri dan bertanya gembira, "Untuk apa janur itu, Bunda?"
"Kita akan membuat anyaman ketupat untuk perayaan Lebaran besok," jelas Bu Dini.
"Hore! Besok kita sudah merayakan hari raya Lebaran ya, Bunda?" seru Zainal.
"Iya, sekarang ayo bantu Bunda menganyam janur dan membuat ketupat bersama!" ajak Bu Dini. Mereka bertiga pun dengan penuh sukacita menganyam selongsong ketupat dan mengisinya dengan beras.

Keesokan paginya, hari Lebaran yang dinantikan pun tiba. Pak Hasan, Bu Dini, Zainal, dan Fitri berkumpul di meja makan usai salat Id. Di meja telah tersaji ketupat empuk yang harum lengkap dengan sayur opor ayam hangat.
"Sebelum kita menyantap makan bersama, Bunda minta tolong Kak Zainal sebentar ya," kata Bu Dini.
"Minta tolong apa, Bunda?"
"Tolong antarkan rantang berisi ketupat dan opor ayam ini ke rumah tetangga kita: Bu Tuti, Pak Ridwan, dan juga Pak Christian di ujung jalan."
Zainal sempat tertegun heran, lalu bertanya polos, "Baik, Bunda. Tapi kenapa Pak Christian juga diberi? Bukankah Pak Christian beragama Kristen dan tidak merayakan hari raya Lebaran?"
Mendengar itu, Pak Hasan tersenyum bijak lalu merangkul pundak Zainal, "Anakku, hidangan ketupat dan indahnya silaturahmi itu bukan hanya untuk kita yang beragama Islam saja. Berbagi makanan kepada tetangga adalah wujud toleransi dan kasih sayang persaudaraan antarmanusia tanpa memandang perbedaan keyakinan."
"Jadi semua orang boleh makan dan menikmati ketupat ya, Ayah?" tanya Zainal dengan mata berbinar.
"Tentu saja boleh, Nak. Berbuat baik itu untuk siapa saja," jawab Pak Hasan lembut.
Dengan senyum terkembang, Zainal pun bergegas riang mengantarkan ketupat hangat kepada para tetangganya.

[PERTANYAAN NO. 19]
Berdasarkan cerita tersebut, mengapa Zainal dan Fitri segera memegang daun kelapa (janur) bersama Ibu pada bagian awal cerita?
(1) Menunjukkan sikap antusias mereka yang ingin membantu Ibu membuat ketupat.
(2) Membuktikan kesiapan mereka untuk belajar menganyam ketupat bersama-sama.
(3) Memberitahu Ibu bahwa esok hari adalah jadwal liburan tamasya ke pantai.
(4) Menunjukkan bahwa harga janur kelapa di pasar mengalami kenaikan drastis.

Alasan tindakan tokoh yang tepat ditunjukkan oleh nomor...`,
    options: [
      `A. (1) dan (2)`,
      `B. (1) dan (3)`,
      `C. (2) dan (4)`,
      `D. (3) dan (4)`,
    ],
    correctAnswer: 0,
    isHots: false,
    explanation: `<b>Kunci Jawaban: A. (1) dan (2)</b><br><br><b>Menilai Perilaku Tokoh dalam Cerita:</b><br>Saat Bu Dini mengajak: <i>"sekarang ayo bantu Bunda membuat ketupat bersama!"</i>, Zainal dan Fitri langsung mengambil janur daun kelapa.<br>Tindakan memegang janur tersebut melambangkan:<br>&bull; (1) Kepatuhan dan antusiasme anak-anak untuk meringankan tugas sang ibu.<br>&bull; (2) Kesiapan mereka belajar ketrampilan tradisional membuat anyaman ketupat menyambut datangnya hari raya.<br><br>Pernyataan (3) dan (4) sama sekali tidak terdapat dalam isi percakapan cerita.`
  },
  {
    id: 2620,
    ...TKA_INDO_IMAGES.stimulus7,
    question: `[STIMULUS 7: KISAH KETUPAT LEBARAN KELUARGA BU DINI]
Teks Cerpen:
Pada suatu pagi di hari terakhir bulan Ramadan, Bu Dini pulang dari pasar dengan membawa seikat janur kelapa muda berwarna hijau kekuningan.
"Daun apa itu yang Bunda bawa?" tanya Zainal penasaran.
"Ini daun kelapa muda, biasa disebut janur, Nak," jawab Bu Dini ramah.
Fitri, adik Zainal, menghampiri dan bertanya gembira, "Untuk apa janur itu, Bunda?"
"Kita akan membuat anyaman ketupat untuk perayaan Lebaran besok," jelas Bu Dini.
"Hore! Besok kita sudah merayakan hari raya Lebaran ya, Bunda?" seru Zainal.
"Iya, sekarang ayo bantu Bunda menganyam janur dan membuat ketupat bersama!" ajak Bu Dini. Mereka bertiga pun dengan penuh sukacita menganyam selongsong ketupat dan mengisinya dengan beras.

Keesokan paginya, hari Lebaran yang dinantikan pun tiba. Pak Hasan, Bu Dini, Zainal, dan Fitri berkumpul di meja makan usai salat Id. Di meja telah tersaji ketupat empuk yang harum lengkap dengan sayur opor ayam hangat.
"Sebelum kita menyantap makan bersama, Bunda minta tolong Kak Zainal sebentar ya," kata Bu Dini.
"Minta tolong apa, Bunda?"
"Tolong antarkan rantang berisi ketupat dan opor ayam ini ke rumah tetangga kita: Bu Tuti, Pak Ridwan, dan juga Pak Christian di ujung jalan."
Zainal sempat tertegun heran, lalu bertanya polos, "Baik, Bunda. Tapi kenapa Pak Christian juga diberi? Bukankah Pak Christian beragama Kristen dan tidak merayakan hari raya Lebaran?"
Mendengar itu, Pak Hasan tersenyum bijak lalu merangkul pundak Zainal, "Anakku, hidangan ketupat dan indahnya silaturahmi itu bukan hanya untuk kita yang beragama Islam saja. Berbagi makanan kepada tetangga adalah wujud toleransi dan kasih sayang persaudaraan antarmanusia tanpa memandang perbedaan keyakinan."
"Jadi semua orang boleh makan dan menikmati ketupat ya, Ayah?" tanya Zainal dengan mata berbinar.
"Tentu saja boleh, Nak. Berbuat baik itu untuk siapa saja," jawab Pak Hasan lembut.
Dengan senyum terkembang, Zainal pun bergegas riang mengantarkan ketupat hangat kepada para tetangganya.

[PERTANYAAN NO. 20]
Mengapa Bu Dini sengaja membuat ketupat tepat di hari terakhir bulan Ramadan menjelang hari raya Idul Fitri?
(1) Karena ketupat merupakan hidangan kuliner tradisional yang khas saat merayakan hari raya Lebaran.
(2) Sengaja disiapkan sehari sebelumnya agar matang sempurna untuk disajikan pada pagi hari raya Lebaran.
(3) Karena ada aturan tertulis bahwa ketupat merupakan syarat mutlak agar salat Id dinyatakan sah.
(4) Karena daun janur kelapa akan segera beracun jika tidak dimasak dalam waktu sehari.

Alasan yang paling masuk akal dan sesuai dengan nilai tradisi pada bacaan ditunjukkan oleh nomor...`,
    options: [
      `A. (2) dan (3)`,
      `B. (1) dan (4)`,
      `C. (1) dan (2)`,
      `D. (3) dan (4)`,
    ],
    correctAnswer: 2,
    isHots: false,
    explanation: `<b>Kunci Jawaban: C. (1) dan (2)</b><br><br><b>Konteks Budaya & Tradisi Lebaran:</b><br>&bull; Ketupat adalah simbol kuliner khas hari raya Idul Fitri di Indonesia (Nomor 1).<br>&bull; Proses merebus beras di dalam bungkusan janur membutuhkan waktu pematangan yang cukup lama (berjam-jam). Oleh karena itu, keluarga di Indonesia selalu memasaknya pada hari terakhir puasa agar keesokan paginya usai salat Id, ketupat sudah pulen dan siap dihidangkan hangat (Nomor 2).<br>&bull; Ketupat bukanlah syarat sah salat (Nomor 3 salah), dan janur juga tidak beracun (Nomor 4 salah).`
  },
  {
    id: 2621,
    ...TKA_INDO_IMAGES.stimulus7,
    question: `[STIMULUS 7: KISAH KETUPAT LEBARAN KELUARGA BU DINI]
Teks Cerpen:
Pada suatu pagi di hari terakhir bulan Ramadan, Bu Dini pulang dari pasar dengan membawa seikat janur kelapa muda berwarna hijau kekuningan.
"Daun apa itu yang Bunda bawa?" tanya Zainal penasaran.
"Ini daun kelapa muda, biasa disebut janur, Nak," jawab Bu Dini ramah.
Fitri, adik Zainal, menghampiri dan bertanya gembira, "Untuk apa janur itu, Bunda?"
"Kita akan membuat anyaman ketupat untuk perayaan Lebaran besok," jelas Bu Dini.
"Hore! Besok kita sudah merayakan hari raya Lebaran ya, Bunda?" seru Zainal.
"Iya, sekarang ayo bantu Bunda menganyam janur dan membuat ketupat bersama!" ajak Bu Dini. Mereka bertiga pun dengan penuh sukacita menganyam selongsong ketupat dan mengisinya dengan beras.

Keesokan paginya, hari Lebaran yang dinantikan pun tiba. Pak Hasan, Bu Dini, Zainal, dan Fitri berkumpul di meja makan usai salat Id. Di meja telah tersaji ketupat empuk yang harum lengkap dengan sayur opor ayam hangat.
"Sebelum kita menyantap makan bersama, Bunda minta tolong Kak Zainal sebentar ya," kata Bu Dini.
"Minta tolong apa, Bunda?"
"Tolong antarkan rantang berisi ketupat dan opor ayam ini ke rumah tetangga kita: Bu Tuti, Pak Ridwan, dan juga Pak Christian di ujung jalan."
Zainal sempat tertegun heran, lalu bertanya polos, "Baik, Bunda. Tapi kenapa Pak Christian juga diberi? Bukankah Pak Christian beragama Kristen dan tidak merayakan hari raya Lebaran?"
Mendengar itu, Pak Hasan tersenyum bijak lalu merangkul pundak Zainal, "Anakku, hidangan ketupat dan indahnya silaturahmi itu bukan hanya untuk kita yang beragama Islam saja. Berbagi makanan kepada tetangga adalah wujud toleransi dan kasih sayang persaudaraan antarmanusia tanpa memandang perbedaan keyakinan."
"Jadi semua orang boleh makan dan menikmati ketupat ya, Ayah?" tanya Zainal dengan mata berbinar.
"Tentu saja boleh, Nak. Berbuat baik itu untuk siapa saja," jawab Pak Hasan lembut.
Dengan senyum terkembang, Zainal pun bergegas riang mengantarkan ketupat hangat kepada para tetangganya.

[PERTANYAAN NO. 21]
Nasihat dan pemahaman penting apakah yang dipahami oleh Zainal setelah mendengarkan penjelasan ayahnya tentang membagikan ketupat kepada tetangga?`,
    options: [
      `A. Bahwa hidangan ketupat Lebaran dan kebahagiaan berbagi boleh dinikmati oleh siapa saja tanpa membedakan agama`,
      `B. Bahwa membuat ketupat di rumah sangat melelahkan sehingga lebih baik membeli jadi di warung`,
      `C. Bahwa warga yang berbeda keyakinan dilarang mencicipi masakan opor ayam`,
      `D. Bahwa hidangan Lebaran hanya boleh dimakan oleh keluarga sedarah saja`,
    ],
    correctAnswer: 0,
    isHots: false,
    explanation: `<b>Kunci Jawaban: A. Bahwa hidangan ketupat Lebaran dan kebahagiaan berbagi boleh dinikmati oleh siapa saja tanpa membedakan agama</b><br><br><b>Pesan Moral & Sikap Toleransi:</b><br>Zainal awalnya mengira hidangan Lebaran hanya boleh dinikmati umat Islam karena Pak Christian beragama Kristen. Ayah dengan bijaksana menjelaskan bahwa berbagi makanan adalah wujud kasih sayang kemanusiaan dalam hidup bertetangga.<br>Zainal pun memahami bahwa kebaikan, silaturahmi, dan berkah makanan boleh dirasakan oleh semua tetangga tanpa memandang latar belakang agamanya.`
  },
  {
    id: 2622,
    ...TKA_INDO_IMAGES.stimulus8,
    question: `[STIMULUS 8: LOBI, SI LEBAH HUTAN PEKERJA]
Teks Fabel:
Namaku Lobi, seekor lebah hutan dari keluarga lebah madu Apis dorsata. Koloniku tinggal di dahan pohon tinggi di tengah belantara hutan tropis. Di sarang tempat tinggalku, hidup bersama 60 hingga 70 ribu ekor lebah. Meski jumlah kami sangat banyak dan padat, tatanan hidup kami sangat rapi, disiplin, dan teratur.

"Hei, Lobi! Kau ini lebah pekerja, lekas bangun dan jangan bermalas-malasan terus!" seru Tawi, sahabatku sesama lebah pengumpul nektar.
"Aduh Tawi, alangkah enaknya menjadi Kuina, ratu koloni kita. Dia tidak perlu repot terbang jauh mencari makan. Tubuhnya besar sekali, hampir 3 kali berat tubuhku," gumamku iri membayangkan kemewahan sang ratu.

"Hus, apa-apaan kau ini, Lobi?" tegur Tawi bijaksana. "Kuina itu pemimpin tertinggi yang harus selalu kita hormati dan jaga keselamatannya. Ratu mengemban tugas raksasa yang sangat berat! Demi kelangsungan hidup koloni kita, ia harus bertelur sekitar 1.500 hingga 2.000 butir telur setiap hari tanpa henti."
"Iya juga sih... Tapi mengapa umur sang ratu bisa sangat panjang sedangkan kita cepat sekali mati?" tanyaku penasaran.
"Tentu saja karena Ratu Kuina selalu memakan royal jelly sepanjang hayatnya! Berbeda dengan kita lebah pekerja yang hanya mencicipi royal jelly selama tiga hari saat masih berupa larva kecil. Itulah sebabnya Ratu bisa hidup sampai 3 hingga 5 tahun, sedangkan umur kita hanya berkisar 40 hari saja."

Tawi lalu mengepakkan sayapnya yang kecil namun tangguh. Tubuhnya ramping berwarna kecokelatan dengan ekor yang dilengkapi sengat berduri. Sengat kokoh itulah senjata yang kami gunakan untuk mempertahankan sarang dari bahaya musuh atau pengganggu.

"Kawan-kawan, kabar gembira! Ada kebun bunga liar yang sedang mekar di dekat telaga!" teriak Bee dan Polly, lebah pencari jejak.
"Ayo Lobi, sekarang saatnya kita bekerja!" ajak Tawi bersemangat.
Kami pun beramai-ramai terbang ke kebun bunga, menghisap setiap tetes nektar manis menggunakan alat hisap kami, menyimpannya di kantong madu di kaki, lalu membawanya pulang ke sarang hingga menguap menjadi madu kental yang harum. Kami mondar-mandir hingga puluhan ribu kali demi menghasilkan madu terbaik. Sungguh kehidupan koloni yang penuh pengabdian!

[PERTANYAAN NO. 22]
Setelah membaca teks fabel tentang kehidupan lebah hutan tersebut, bagaimanakah tindakan yang paling tepat dan bijak ketika kamu melihat sarang lebah madu di alam terbuka?

Cermatilah pernyataan berikut:
(1) Ketika melihat seekor lebah berukuran paling besar di sarang, lebah itu harus ditangkap dan dibuang jauh-jauh agar tidak mengganggu lebah-lebah kecil.
(2) Harus berhati-hati dan menjaga jarak aman saat berada di dekat sarang lebah, karena lebah pekerja memiliki sengat berduri untuk membela diri.
(3) Menanam aneka tumbuhan berbunga di pekarangan agar dapat menjadi sumber makanan nektar alami bagi lebah.

Penilaian Benar atau Salah untuk ketiga pernyataan tersebut berturut-turut adalah...`,
    options: [
      `A. (1) Benar, (2) Benar, (3) Salah`,
      `B. (1) Salah, (2) Salah, (3) Benar`,
      `C. (1) Salah, (2) Benar, (3) Benar`,
      `D. (1) Benar, (2) Salah, (3) Benar`,
    ],
    correctAnswer: 2,
    isHots: true,
    explanation: `<b>Kunci Jawaban: C. (1) Salah, (2) Benar, (3) Benar</b><br><br><b>Analisis Fakta Cerita & Pelestarian Alam:</b><br>&bull; <b>Pernyataan (1) - SALAH:</b> Lebah yang paling besar adalah Sang Ratu. Ratu adalah satu-satunya lebah yang menghasilkan ribuan telur demi kelangsungan hidup koloni. Jika ratu dibuang, seluruh koloni puluhan ribu lebah akan punah!<br>&bull; <b>Pernyataan (2) - BENAR:</b> Lebah pekerja dilengkapi sengat berduri untuk mempertahankan sarangnya dari pengganggu. Mengusik sarang lebah sangat berbahaya karena mereka akan menyengat serentak.<br>&bull; <b>Pernyataan (3) - BENAR:</b> Bunga yang bermekaran adalah sumber nektar utama bagi lebah untuk menghasilkan madu sekaligus membantu penyerbukan tanaman.`
  },
  {
    id: 2623,
    ...TKA_INDO_IMAGES.stimulus8,
    question: `[STIMULUS 8: LOBI, SI LEBAH HUTAN PEKERJA]
Teks Fabel:
Namaku Lobi, seekor lebah hutan dari keluarga lebah madu Apis dorsata. Koloniku tinggal di dahan pohon tinggi di tengah belantara hutan tropis. Di sarang tempat tinggalku, hidup bersama 60 hingga 70 ribu ekor lebah. Meski jumlah kami sangat banyak dan padat, tatanan hidup kami sangat rapi, disiplin, dan teratur.

"Hei, Lobi! Kau ini lebah pekerja, lekas bangun dan jangan bermalas-malasan terus!" seru Tawi, sahabatku sesama lebah pengumpul nektar.
"Aduh Tawi, alangkah enaknya menjadi Kuina, ratu koloni kita. Dia tidak perlu repot terbang jauh mencari makan. Tubuhnya besar sekali, hampir 3 kali berat tubuhku," gumamku iri membayangkan kemewahan sang ratu.

"Hus, apa-apaan kau ini, Lobi?" tegur Tawi bijaksana. "Kuina itu pemimpin tertinggi yang harus selalu kita hormati dan jaga keselamatannya. Ratu mengemban tugas raksasa yang sangat berat! Demi kelangsungan hidup koloni kita, ia harus bertelur sekitar 1.500 hingga 2.000 butir telur setiap hari tanpa henti."
"Iya juga sih... Tapi mengapa umur sang ratu bisa sangat panjang sedangkan kita cepat sekali mati?" tanyaku penasaran.
"Tentu saja karena Ratu Kuina selalu memakan royal jelly sepanjang hayatnya! Berbeda dengan kita lebah pekerja yang hanya mencicipi royal jelly selama tiga hari saat masih berupa larva kecil. Itulah sebabnya Ratu bisa hidup sampai 3 hingga 5 tahun, sedangkan umur kita hanya berkisar 40 hari saja."

Tawi lalu mengepakkan sayapnya yang kecil namun tangguh. Tubuhnya ramping berwarna kecokelatan dengan ekor yang dilengkapi sengat berduri. Sengat kokoh itulah senjata yang kami gunakan untuk mempertahankan sarang dari bahaya musuh atau pengganggu.

"Kawan-kawan, kabar gembira! Ada kebun bunga liar yang sedang mekar di dekat telaga!" teriak Bee dan Polly, lebah pencari jejak.
"Ayo Lobi, sekarang saatnya kita bekerja!" ajak Tawi bersemangat.
Kami pun beramai-ramai terbang ke kebun bunga, menghisap setiap tetes nektar manis menggunakan alat hisap kami, menyimpannya di kantong madu di kaki, lalu membawanya pulang ke sarang hingga menguap menjadi madu kental yang harum. Kami mondar-mandir hingga puluhan ribu kali demi menghasilkan madu terbaik. Sungguh kehidupan koloni yang penuh pengabdian!

[PERTANYAAN NO. 23]
Bagaimanakah perbandingan karakter atau sifat tokoh lebah yang digambarkan di dalam teks fabel tersebut?

Cermatilah pernyataan berikut:
(1) Lebah Tawi merupakan sosok yang rajin bekerja, sedangkan Lebah Lobi sempat bermalas-malasan dan mengeluh.
(2) Lebah Tawi memiliki tubuh yang gemuk berwibawa, sedangkan Lebah Lobi memiliki tubuh sangat ramping.
(3) Lebah Tawi berwawasan bijaksana mengenai peran koloni, sedangkan Lebah Lobi sempat merasa cemburu terhadap tugas sang Ratu.

Penilaian Benar atau Salah untuk ketiga pernyataan tersebut berturut-turut adalah...`,
    options: [
      `A. (1) Benar, (2) Salah, (3) Benar`,
      `B. (1) Benar, (2) Benar, (3) Salah`,
      `C. (1) Salah, (2) Benar, (3) Benar`,
      `D. (1) Salah, (2) Salah, (3) Benar`,
    ],
    correctAnswer: 0,
    isHots: false,
    explanation: `<b>Kunci Jawaban: A. (1) Benar, (2) Salah, (3) Benar</b><br><br><b>Analisis Watak & Deskripsi Fisik Tokoh:</b><br>&bull; <b>Pernyataan (1) - BENAR:</b> Tawi menegur Lobi: <i>"Kau ini lebah pekerja, jangan bermalas-malasan terus!"</i>, membuktikan Tawi rajin dan Lobi sempat malas.<br>&bull; <b>Pernyataan (2) - SALAH:</b> Teks menjelaskan bahwa tubuh Tawi adalah <i>"ramping berwarna kecokelatan"</i>. Tokoh yang bertubuh gemuk besar adalah sang Ratu Kuina, bukan Tawi.<br>&bull; <b>Pernyataan (3) - BENAR:</b> Lobi iri pada ukuran tubuh ratu dan mengira ratu hidup enak tanpa kerja, sedangkan Tawi dengan bijaksana menerangkan beratnya tugas ratu bertelur hingga 2.000 butir per hari.`
  },
  {
    id: 2624,
    ...TKA_INDO_IMAGES.stimulus8,
    question: `[STIMULUS 8: LOBI, SI LEBAH HUTAN PEKERJA]
Teks Fabel:
Namaku Lobi, seekor lebah hutan dari keluarga lebah madu Apis dorsata. Koloniku tinggal di dahan pohon tinggi di tengah belantara hutan tropis. Di sarang tempat tinggalku, hidup bersama 60 hingga 70 ribu ekor lebah. Meski jumlah kami sangat banyak dan padat, tatanan hidup kami sangat rapi, disiplin, dan teratur.

"Hei, Lobi! Kau ini lebah pekerja, lekas bangun dan jangan bermalas-malasan terus!" seru Tawi, sahabatku sesama lebah pengumpul nektar.
"Aduh Tawi, alangkah enaknya menjadi Kuina, ratu koloni kita. Dia tidak perlu repot terbang jauh mencari makan. Tubuhnya besar sekali, hampir 3 kali berat tubuhku," gumamku iri membayangkan kemewahan sang ratu.

"Hus, apa-apaan kau ini, Lobi?" tegur Tawi bijaksana. "Kuina itu pemimpin tertinggi yang harus selalu kita hormati dan jaga keselamatannya. Ratu mengemban tugas raksasa yang sangat berat! Demi kelangsungan hidup koloni kita, ia harus bertelur sekitar 1.500 hingga 2.000 butir telur setiap hari tanpa henti."
"Iya juga sih... Tapi mengapa umur sang ratu bisa sangat panjang sedangkan kita cepat sekali mati?" tanyaku penasaran.
"Tentu saja karena Ratu Kuina selalu memakan royal jelly sepanjang hayatnya! Berbeda dengan kita lebah pekerja yang hanya mencicipi royal jelly selama tiga hari saat masih berupa larva kecil. Itulah sebabnya Ratu bisa hidup sampai 3 hingga 5 tahun, sedangkan umur kita hanya berkisar 40 hari saja."

Tawi lalu mengepakkan sayapnya yang kecil namun tangguh. Tubuhnya ramping berwarna kecokelatan dengan ekor yang dilengkapi sengat berduri. Sengat kokoh itulah senjata yang kami gunakan untuk mempertahankan sarang dari bahaya musuh atau pengganggu.

"Kawan-kawan, kabar gembira! Ada kebun bunga liar yang sedang mekar di dekat telaga!" teriak Bee dan Polly, lebah pencari jejak.
"Ayo Lobi, sekarang saatnya kita bekerja!" ajak Tawi bersemangat.
Kami pun beramai-ramai terbang ke kebun bunga, menghisap setiap tetes nektar manis menggunakan alat hisap kami, menyimpannya di kantong madu di kaki, lalu membawanya pulang ke sarang hingga menguap menjadi madu kental yang harum. Kami mondar-mandir hingga puluhan ribu kali demi menghasilkan madu terbaik. Sungguh kehidupan koloni yang penuh pengabdian!

[PERTANYAAN NO. 24]
Apakah yang selanjutnya dilakukan oleh Lobi setelah ia memahami tugas mulia lebah pekerja dan mendengar kabar tentang ladang bunga yang mekar?
(1) Lobi mencalonkan diri untuk menggantikan Kuina memimpin sarang sebagai ratu lebah.
(2) Lobi kembali bersemangat dan terbang mengumpulkan nektar bersama Tawi dan lebah pekerja lainnya.
(3) Lobi tetap bertugas menghisap nektar bunga dan memindahkannya ke sel sarang madu.
(4) Lobi mengonsumsi seluruh simpanan royal jelly agar dapat hidup berumur panjang hingga 5 tahun.

Tindakan nyata yang dilakukan oleh tokoh Lobi ditunjukkan oleh nomor...`,
    options: [
      `A. (1) dan (4)`,
      `B. (1) dan (2)`,
      `C. (2) dan (3)`,
      `D. (3) dan (4)`,
    ],
    correctAnswer: 2,
    isHots: false,
    explanation: `<b>Kunci Jawaban: C. (2) dan (3)</b><br><br><b>Alur Akhir Cerita (Penyelesaian):</b><br>Di akhir fabel, setelah mendengar kabar dari Bee dan Polly, Lobi tidak lagi bermalas-malasan. Ia bangkit bersama Tawi dan kawan-kawan lebah pekerja terbang menuju kebun bunga.<br>Mereka menghisap nektar dari bunga yang sedang mekar lalu membawanya pulang ke sarang untuk diproses menjadi madu (pernyataan 2 dan 3).<br>Lobi sadar perannya adalah lebah pekerja alami, bukan ratu penghasil telur (pernyataan 1 dan 4 mustahil dilakukan lebah pekerja).`
  },
  {
    id: 2625,
    ...TKA_INDO_IMAGES.stimulus9,
    question: `[STIMULUS 9: BATU PENYU DI PULAU KEI KECIL]
Teks Cerita Rakyat:
Dahulu kala di pesisir Pulau Kei Kecil, hiduplah seorang Nenek sebatang kara. Walaupun hidup seorang diri, Nenek adalah sosok yang sangat rajin dan bersahaja. Setiap hari sejak pagi buta, Nenek menanami kebun kecilnya dengan aneka sayur dan umbi-umbian.
Masyarakat di kampung pesisir itu sebagian besar bekerja sebagai nelayan. Suatu hari, para lelaki kampung hendak melaut menangkap ikan. Seluruh kaum wanita di kampung sibuk mempersiapkan bekal untuk suami dan anak-anak mereka. Tak terkecuali si Nenek yang berhati mulia; ia turut memasak dan membungkuskan bekal dengan tulus meski tidak ada satu pun anggota keluarganya yang ikut melaut.

Selang beberapa waktu, perahu-perahu nelayan kembali ke pantai membawa tangkapan ikan yang sangat banyak. Di antara hasil tangkapan itu, terdapat seekor penyu raksasa yang sangat memukau. Atas saran kepala kampung, penyu itu disembelih untuk dibagikan secara adil kepada seluruh warga. Nenek pun ikut berdiri mengantre. Namun malang, warga yang bersikap kikir dan memandang rendah Nenek hanya memberinya sedikit potongan sisa tulang-belulang tanpa daging sedikit pun. Nenek diperlakukan bagaikan sehelai daun kering yang tak dianggap dalam pesta pembagian tersebut.

Hati Nenek tersayat pilu atas perlakuan tidak adil tersebut. Dengan langkah gontai dan perasaan sedih mendalam, Nenek berjalan menyendiri ke tepi pantai. Air matanya menetes jatuh membasahi pasir putih pantai. Tiba-tiba terjadi keajaiban: tanah kampung yang tadinya datar terangkat naik membentuk sebuah gundukan tanah bukit yang tinggi dan kokoh, dengan bentuk cembung persis menyerupai cangkang tempurung penyu!

Nenek tertegun menyaksikannya. Seiring berlalunya waktu, Nenek mulai menanami gundukan tanah cangkang penyu itu seperti kebiasaannya berkebun. Suatu hari, keajaiban kedua terjadi: di antara ranting dan dedaunan pohon yang ditanam Nenek, bermunculan buah emas murni yang berkilau disinari mentari!
Tadinya Nenek sempat ingin merahasiakan pohon emas tersebut. Namun, nurani Nenek tidak tega melihat warganya yang kekurangan. Nenek memanggil seluruh penduduk kampung dan membagikan buah emas itu kepada seluruh warga sama rata. Menyaksikan kebaikan hati Nenek yang membalas kejahatan dengan emas, warga kampung tertunduk malu, menyesali dosa mereka, dan memohon maaf dengan tulus kepada Nenek.

[PERTANYAAN NO. 25]
Berdasarkan alur sebab-akibat cerita rakyat Batu Penyu, apa yang kemungkinan besar akan terjadi seandainya warga kampung sejak awal memperlakukan Nenek dengan adil dan penuh kasih sayang saat pembagian hasil laut?

Cermatilah pernyataan berikut:
(1) Warga kampung tidak akan pernah melihat fenomena bukit cangkang penyu dan pohon emas berkilau.
(2) Nenek tidak akan merasa sakit hati, bersedih, dan menangis sendirian di tepi pantai.
(3) Nenek tidak akan mau melakukan aktivitas bercocok tanam dan berkebun lagi selamanya.

Penilaian Benar atau Salah untuk ketiga pernyataan tersebut berturut-turut adalah...`,
    options: [
      `A. (1) Benar, (2) Benar, (3) Salah`,
      `B. (1) Benar, (2) Salah, (3) Benar`,
      `C. (1) Salah, (2) Benar, (3) Salah`,
      `D. (1) Benar, (2) Benar, (3) Benar`,
    ],
    correctAnswer: 0,
    isHots: true,
    explanation: `<b>Kunci Jawaban: A. (1) Benar, (2) Benar, (3) Salah</b><br><br><b>Penalaran Hubungan Sebab-Akibat Cerita:</b><br>&bull; <b>Pernyataan (1) - BENAR:</b> Gundukan tanah cangkang penyu dan pohon berbuah emas tercipta karena mukjizat air mata kesedihan nenek yang terzalimi oleh warga. Jika warga bersikap adil, nenek tidak menangis dan keajaiban bukit penyu emas tersebut tidak akan pernah muncul.<br>&bull; <b>Pernyataan (2) - BENAR:</b> Nenek merasa sakit hati dan menangis murni karena dicurangi dan hanya diberi sisa tulang-belulang tanpa daging.<br>&bull; <b>Pernyataan (3) - SALAH:</b> Teks menjelaskan di paragraf 1: <i>"Setiap hari Nenek itu menanam apa saja di kebunnya..."</i>. Menanam adalah kebiasaan rutin dan hobi nenek sejak dahulu kala, bukan akibat dari perlakuan warga.`
  },
  {
    id: 2626,
    ...TKA_INDO_IMAGES.stimulus9,
    question: `[STIMULUS 9: BATU PENYU DI PULAU KEI KECIL]
Teks Cerita Rakyat:
Dahulu kala di pesisir Pulau Kei Kecil, hiduplah seorang Nenek sebatang kara. Walaupun hidup seorang diri, Nenek adalah sosok yang sangat rajin dan bersahaja. Setiap hari sejak pagi buta, Nenek menanami kebun kecilnya dengan aneka sayur dan umbi-umbian.
Masyarakat di kampung pesisir itu sebagian besar bekerja sebagai nelayan. Suatu hari, para lelaki kampung hendak melaut menangkap ikan. Seluruh kaum wanita di kampung sibuk mempersiapkan bekal untuk suami dan anak-anak mereka. Tak terkecuali si Nenek yang berhati mulia; ia turut memasak dan membungkuskan bekal dengan tulus meski tidak ada satu pun anggota keluarganya yang ikut melaut.

Selang beberapa waktu, perahu-perahu nelayan kembali ke pantai membawa tangkapan ikan yang sangat banyak. Di antara hasil tangkapan itu, terdapat seekor penyu raksasa yang sangat memukau. Atas saran kepala kampung, penyu itu disembelih untuk dibagikan secara adil kepada seluruh warga. Nenek pun ikut berdiri mengantre. Namun malang, warga yang bersikap kikir dan memandang rendah Nenek hanya memberinya sedikit potongan sisa tulang-belulang tanpa daging sedikit pun. Nenek diperlakukan bagaikan sehelai daun kering yang tak dianggap dalam pesta pembagian tersebut.

Hati Nenek tersayat pilu atas perlakuan tidak adil tersebut. Dengan langkah gontai dan perasaan sedih mendalam, Nenek berjalan menyendiri ke tepi pantai. Air matanya menetes jatuh membasahi pasir putih pantai. Tiba-tiba terjadi keajaiban: tanah kampung yang tadinya datar terangkat naik membentuk sebuah gundukan tanah bukit yang tinggi dan kokoh, dengan bentuk cembung persis menyerupai cangkang tempurung penyu!

Nenek tertegun menyaksikannya. Seiring berlalunya waktu, Nenek mulai menanami gundukan tanah cangkang penyu itu seperti kebiasaannya berkebun. Suatu hari, keajaiban kedua terjadi: di antara ranting dan dedaunan pohon yang ditanam Nenek, bermunculan buah emas murni yang berkilau disinari mentari!
Tadinya Nenek sempat ingin merahasiakan pohon emas tersebut. Namun, nurani Nenek tidak tega melihat warganya yang kekurangan. Nenek memanggil seluruh penduduk kampung dan membagikan buah emas itu kepada seluruh warga sama rata. Menyaksikan kebaikan hati Nenek yang membalas kejahatan dengan emas, warga kampung tertunduk malu, menyesali dosa mereka, dan memohon maaf dengan tulus kepada Nenek.

[PERTANYAAN NO. 26]
Setelah menyimak cerita Batu Penyu, Dini berpendapat bahwa ia sangat kagum pada kebesaran hati Nenek yang tetap membagikan emas kepada warga yang dahulu pernah meremehkannya. Fira dan Dafa pun sepakat dengan Dini.
Alasan manakah yang paling tepat untuk memperkuat kesepakatan mereka terhadap budi pekerti Nenek?

Cermatilah pernyataan berikut:
(1) Dini menyukai keputusan nenek karena nenek membalas dendam dengan cara memperlakukan warga seburuk warga memperlakukan dirinya.
(2) Dini setuju dengan tindakan mulia nenek yang merasa tidak tega dan tidak egois menikmati pohon emas sendirian.
(3) Dini merasa kagum sebab perilaku luhur nenek yang membalas kejahatan dengan kebaikan sejati adalah teladan moral yang patut dicontoh.

Penilaian Benar atau Salah untuk ketiga pernyataan tersebut berturut-turut adalah...`,
    options: [
      `A. (1) Benar, (2) Benar, (3) Salah`,
      `B. (1) Salah, (2) Benar, (3) Benar`,
      `C. (1) Benar, (2) Salah, (3) Benar`,
      `D. (1) Salah, (2) Salah, (3) Benar`,
    ],
    correctAnswer: 1,
    isHots: true,
    explanation: `<b>Kunci Jawaban: B. (1) Salah, (2) Benar, (3) Benar</b><br><br><b>Evaluasi Nilai Karakter Tokoh:</b><br>&bull; <b>Pernyataan (1) - SALAH:</b> Nenek sama sekali tidak membalas dendam! Jika membalas dendam, nenek akan menyembunyikan emasnya dan membiarkan warga hidup miskin. Nenek justru berjiwa pemaaf.<br>&bull; <b>Pernyataan (2) - BENAR:</b> Teks menyebutkan: <i>"Namun, Nenek tidak tega. Ia membaginya ke seluruh warga kampung sama rata."</i> Ini menunjukkan rasa empati dan ketidakegoisan nenek.<br>&bull; <b>Pernyataan (3) - BENAR:</b> Nenek mengamalkan pepatah luhur "membalas air tuba dengan air susu", yakni membalas perbuatan buruk orang lain dengan kebaikan agung yang meluluhkan hati warga.`
  },
  {
    id: 2627,
    ...TKA_INDO_IMAGES.stimulus9,
    question: `[STIMULUS 9: BATU PENYU DI PULAU KEI KECIL]
Teks Cerita Rakyat:
Dahulu kala di pesisir Pulau Kei Kecil, hiduplah seorang Nenek sebatang kara. Walaupun hidup seorang diri, Nenek adalah sosok yang sangat rajin dan bersahaja. Setiap hari sejak pagi buta, Nenek menanami kebun kecilnya dengan aneka sayur dan umbi-umbian.
Masyarakat di kampung pesisir itu sebagian besar bekerja sebagai nelayan. Suatu hari, para lelaki kampung hendak melaut menangkap ikan. Seluruh kaum wanita di kampung sibuk mempersiapkan bekal untuk suami dan anak-anak mereka. Tak terkecuali si Nenek yang berhati mulia; ia turut memasak dan membungkuskan bekal dengan tulus meski tidak ada satu pun anggota keluarganya yang ikut melaut.

Selang beberapa waktu, perahu-perahu nelayan kembali ke pantai membawa tangkapan ikan yang sangat banyak. Di antara hasil tangkapan itu, terdapat seekor penyu raksasa yang sangat memukau. Atas saran kepala kampung, penyu itu disembelih untuk dibagikan secara adil kepada seluruh warga. Nenek pun ikut berdiri mengantre. Namun malang, warga yang bersikap kikir dan memandang rendah Nenek hanya memberinya sedikit potongan sisa tulang-belulang tanpa daging sedikit pun. Nenek diperlakukan bagaikan sehelai daun kering yang tak dianggap dalam pesta pembagian tersebut.

Hati Nenek tersayat pilu atas perlakuan tidak adil tersebut. Dengan langkah gontai dan perasaan sedih mendalam, Nenek berjalan menyendiri ke tepi pantai. Air matanya menetes jatuh membasahi pasir putih pantai. Tiba-tiba terjadi keajaiban: tanah kampung yang tadinya datar terangkat naik membentuk sebuah gundukan tanah bukit yang tinggi dan kokoh, dengan bentuk cembung persis menyerupai cangkang tempurung penyu!

Nenek tertegun menyaksikannya. Seiring berlalunya waktu, Nenek mulai menanami gundukan tanah cangkang penyu itu seperti kebiasaannya berkebun. Suatu hari, keajaiban kedua terjadi: di antara ranting dan dedaunan pohon yang ditanam Nenek, bermunculan buah emas murni yang berkilau disinari mentari!
Tadinya Nenek sempat ingin merahasiakan pohon emas tersebut. Namun, nurani Nenek tidak tega melihat warganya yang kekurangan. Nenek memanggil seluruh penduduk kampung dan membagikan buah emas itu kepada seluruh warga sama rata. Menyaksikan kebaikan hati Nenek yang membalas kejahatan dengan emas, warga kampung tertunduk malu, menyesali dosa mereka, dan memohon maaf dengan tulus kepada Nenek.

[PERTANYAAN NO. 27]
Bagaimanakah urutan kronologis kejadian gaib yang dialami Nenek hingga akhirnya ia menemukan pohon berbuah emas di kebunnya?`,
    options: [
      `A. Nenek sakit hati -> Muncul gundukan penyu -> Nenek menangis di bukit -> Muncul emas berkilau`,
      `B. Air mata nenek terjatuh -> Muncul gundukan tanah cangkang penyu -> Nenek menanami gundukan -> Muncul emas berkilau`,
      `C. Air mata nenek terjatuh -> Muncul gundukan tanah -> Nenek menanami gundukan -> Muncul penyu emas berenang`,
      `D. Nenek menanam di bukit -> Air mata nenek terjatuh -> Muncul cangkang penyu -> Nenek membagikan emas`,
    ],
    correctAnswer: 1,
    isHots: false,
    explanation: `<b>Kunci Jawaban: B. Air mata nenek terjatuh -> Muncul gundukan tanah cangkang penyu -> Nenek menanami gundukan -> Muncul emas berkilau</b><br><br><b>Urutan Kronologis Berdasarkan Teks:</b><br>1. <b>Kejadian 1:</b> Nenek sedih berjalan ke pantai dan <i>"Air matanya pun terjatuh"</i> membasahi pasir.<br>2. <b>Kejadian 2:</b> Seketika itu juga tanah kampung naik menjadi <i>"gundukan tanah yang tinggi... berbentuk mirip cangkang penyu"</i>.<br>3. <b>Kejadian 3:</b> Seiring berjalannya waktu, <i>"Nenek menanami gundukan tanah tersebut"</i> dengan aneka tanaman.<br>4. <b>Kejadian 4:</b> Dari tanaman yang dirawat nenek tersebut barulah <i>"Muncul emas berkilauan di antara dedaunannya"</i>.`
  },
  {
    id: 2628,
    ...TKA_INDO_IMAGES.stimulus10,
    question: `[STIMULUS 10: TRADISI LILIFUK DI PULAU TIMOR]
Teks Cerpen Budaya:
Pagi itu, Damang, ketua adat di desa kami, kembali menegaskan di hadapan warga bahwa siapa pun yang melanggar aturan sakral Lilifuk akan dijatuhi denda adat berat berupa hewan ternak sapi, sejumlah uang, dan berkarung-karung beras. Sebagai masyarakat nelayan di Pulau Timor, tradisi Lilifuk melarang keras penangkapan ikan di luar waktu yang ditentukan. Kami hanya diperbolehkan memanen ikan pada bulan Juni dan Desember. Melanggar kesepakatan adat ini berarti mendatangkan aib besar dan rasa malu, seakan memutus pertalian darah suci Lilifuk.

Aku dan Seno adalah sahabat karib sesama nelayan muda yang sedang berdebar menantikan datangnya Saun Ta'et, yakni upacara adat pembukaan laut untuk menangkap ikan bersama. Menjelang hari panen, ketua adat memimpin ritual di bibir pantai dan mempersembahkan sesaji syukur kepada penguasa alam Lilifuk. Kami berdiri khidmat menghormati laut yang hendak dibuka, menjaga amanah leluhur untuk hidup selaras dengan alam.

Malam harinya, aku berjalan menyisir pantai bersama adikku, Ading. Hembusan angin laut terasa menyejukkan dada. Namun mendadak di tengah gelapnya lautan lepas, aku melihat kilatan cahaya lentera di atas sebuah perahu nelayan. Perahu itu bersiap menebarkan sesuatu ke dalam air. Padahal ritual Saun Ta'et baru akan dilaksanakan esok pagi, dan laut masih berstatus larangan tangkap!
Melihat kejanggalan itu, aku segera berlari kencang menuju kediaman ketua adat dan membangunkan warga desa untuk bersama-sama mencegat perahu tersebut.

Perahu itu berhasil kami kepung dan nelayan di atasnya ditangkap. Betapa hancur hatiku saat melihat bahwa pelaku di atas perahu itu ternyata sahabat karibku sendiri, Seno! Di perahunya, warga menemukan beberapa botol bom ikan rakitan yang mematikan.
"Kami menemukan bom di perahumu! Apa yang hendak kau lakukan pada laut kita, Seno?!" bentak ketua adat.
"Aku ingin pergi dari pulau terkutuk ini!" teriak Seno tanpa rasa sesal. "Aku sudah muak hidup serba kekurangan di sini! Aku berniat mengebom ikan sebanyak-banyaknya malam ini sebagai bekal modal hidupku di kota!"
Seno tahu persis bahwa ledakan bom ikan akan meluluhlantakkan terumbu karang yang butuh puluhan tahun untuk tumbuh kembali. Rasa iri dan keserakahan telah membutakan nuraninya hingga tega mengkhianati desanya sendiri.

Setelah malam kelam itu, Seno diseret ke balai adat untuk diadili. Sejak saat itu, aku tidak pernah lagi berjumpa dengannya. Aku tahu keluarganya yang miskin mustahil sanggup membayar denda puluhan ternak dan beras yang diputuskan dewan adat. Bila ia masih memiliki rasa malu, aku yakin Seno telah pergi meninggalkan pulau ini untuk selamanya dalam penyesalan.

[PERTANYAAN NO. 28]
Berdasarkan isi cerita, hal positif apakah yang seharusnya tetap dinikmati oleh Seno seandainya ia mampu menahan diri dan patuh pada aturan adat Lilifuk?
(1) Masih bisa mengikuti suka cita upacara Saun Ta'et (panen ikan bersama) yang dirayakan keesokan harinya.
(2) Tetap dihormati sebagai nelayan warga Pulau Timor dan tetap menjalin tali persahabatan erat bersama tokoh Aku.
(3) Tetap menjadi bagian dari masyarakat adat yang hidup selaras dengan kelestarian alam laut Lilifuk.
(4) Boleh bebas menangkap ikan kapan saja setiap hari tanpa perlu menunggu bulan panen.

Nasib baik yang akan dinikmati Seno jika ia patuh ditunjukkan oleh nomor...`,
    options: [
      `A. (1) dan (4)`,
      `B. (2) dan (4)`,
      `C. (1), (2), dan (3)`,
      `D. (1), (3), dan (4)`,
    ],
    correctAnswer: 2,
    isHots: false,
    explanation: `<b>Kunci Jawaban: C. (1), (2), dan (3)</b><br><br><b>Penalaran Konsekuensi Tokoh:</b><br>Jika Seno tidak tergiur keserakahan dan taat pada aturan adat Lilifuk:<br>&bull; Ia akan ikut merayakan upacara Saun Ta'et esok harinya bersama warga (Nomor 1 benar).<br>&bull; Ia tidak akan ditangkap sebagai penjahat, sehingga persahabatannya dengan tokoh Aku tetap utuh (Nomor 2 benar).<br>&bull; Kehormatannya sebagai pemuda adat Pulau Timor tetap terjaga (Nomor 3 benar).<br><br>&bull; Pernyataan (4) <b>SALAH</b> karena aturan tradisi Lilifuk justru melarang keras menangkap ikan sembarangan setiap hari. Ikan hanya boleh dipanen pada bulan Juni dan Desember agar populasinya tidak punah.`
  },
  {
    id: 2629,
    ...TKA_INDO_IMAGES.stimulus10,
    question: `[STIMULUS 10: TRADISI LILIFUK DI PULAU TIMOR]
Teks Cerpen Budaya:
Pagi itu, Damang, ketua adat di desa kami, kembali menegaskan di hadapan warga bahwa siapa pun yang melanggar aturan sakral Lilifuk akan dijatuhi denda adat berat berupa hewan ternak sapi, sejumlah uang, dan berkarung-karung beras. Sebagai masyarakat nelayan di Pulau Timor, tradisi Lilifuk melarang keras penangkapan ikan di luar waktu yang ditentukan. Kami hanya diperbolehkan memanen ikan pada bulan Juni dan Desember. Melanggar kesepakatan adat ini berarti mendatangkan aib besar dan rasa malu, seakan memutus pertalian darah suci Lilifuk.

Aku dan Seno adalah sahabat karib sesama nelayan muda yang sedang berdebar menantikan datangnya Saun Ta'et, yakni upacara adat pembukaan laut untuk menangkap ikan bersama. Menjelang hari panen, ketua adat memimpin ritual di bibir pantai dan mempersembahkan sesaji syukur kepada penguasa alam Lilifuk. Kami berdiri khidmat menghormati laut yang hendak dibuka, menjaga amanah leluhur untuk hidup selaras dengan alam.

Malam harinya, aku berjalan menyisir pantai bersama adikku, Ading. Hembusan angin laut terasa menyejukkan dada. Namun mendadak di tengah gelapnya lautan lepas, aku melihat kilatan cahaya lentera di atas sebuah perahu nelayan. Perahu itu bersiap menebarkan sesuatu ke dalam air. Padahal ritual Saun Ta'et baru akan dilaksanakan esok pagi, dan laut masih berstatus larangan tangkap!
Melihat kejanggalan itu, aku segera berlari kencang menuju kediaman ketua adat dan membangunkan warga desa untuk bersama-sama mencegat perahu tersebut.

Perahu itu berhasil kami kepung dan nelayan di atasnya ditangkap. Betapa hancur hatiku saat melihat bahwa pelaku di atas perahu itu ternyata sahabat karibku sendiri, Seno! Di perahunya, warga menemukan beberapa botol bom ikan rakitan yang mematikan.
"Kami menemukan bom di perahumu! Apa yang hendak kau lakukan pada laut kita, Seno?!" bentak ketua adat.
"Aku ingin pergi dari pulau terkutuk ini!" teriak Seno tanpa rasa sesal. "Aku sudah muak hidup serba kekurangan di sini! Aku berniat mengebom ikan sebanyak-banyaknya malam ini sebagai bekal modal hidupku di kota!"
Seno tahu persis bahwa ledakan bom ikan akan meluluhlantakkan terumbu karang yang butuh puluhan tahun untuk tumbuh kembali. Rasa iri dan keserakahan telah membutakan nuraninya hingga tega mengkhianati desanya sendiri.

Setelah malam kelam itu, Seno diseret ke balai adat untuk diadili. Sejak saat itu, aku tidak pernah lagi berjumpa dengannya. Aku tahu keluarganya yang miskin mustahil sanggup membayar denda puluhan ternak dan beras yang diputuskan dewan adat. Bila ia masih memiliki rasa malu, aku yakin Seno telah pergi meninggalkan pulau ini untuk selamanya dalam penyesalan.

[PERTANYAAN NO. 29]
Bagaimanakah kenyataan pahit yang dialami oleh tokoh Seno setelah perbuatannya tertangkap basah oleh warga desa dan ketua adat?

Cermatilah pernyataan berikut:
(1) Seno melunasi seluruh denda ternak sapi, perak, dan beras yang dijatuhkan oleh ketua adat.
(2) Seno tidak pernah lagi dijumpai atau bertemu kembali dengan sahabatnya, tokoh Aku.
(3) Seno berhasil membawa kabur banyak ikan hasil tangkapan bom sebagai bekal hidup di kota.

Penilaian Benar atau Salah untuk ketiga pernyataan tersebut berturut-turut adalah...`,
    options: [
      `A. (1) Benar, (2) Benar, (3) Salah`,
      `B. (1) Salah, (2) Benar, (3) Salah`,
      `C. (1) Salah, (2) Salah, (3) Benar`,
      `D. (1) Benar, (2) Salah, (3) Benar`,
    ],
    correctAnswer: 1,
    isHots: false,
    explanation: `<b>Kunci Jawaban: B. (1) Salah, (2) Benar, (3) Salah</b><br><br><b>Pemeriksaan Fakta Paragraf Terakhir (Step-by-Step):</b><br>&bull; <b>Pernyataan (1) - SALAH:</b> Tokoh Aku secara jelas menulis: <i>"Aku pun tahu bahwa dia tidak akan sanggup membayar denda."</i> Keluarganya yang miskin mustahil mampu menyediakan puluhan sapi dan karung beras.<br>&bull; <b>Pernyataan (2) - BENAR:</b> Tokoh Aku menulis: <i>"Setelah Seno ditangkap, aku tidak pernah bertemu lagi dengannya."</i> Persahabatan mereka terputus selamanya.<br>&bull; <b>Pernyataan (3) - SALAH:</b> Seno ditangkap oleh warga <b>sebelum</b> sempat meledakkan bom dan sebelum mengambil ikan. Jadi ia tidak membawa kabur ikan sedikit pun, melainkan diseret ke daratan untuk diadili.`
  },
  {
    id: 2630,
    ...TKA_INDO_IMAGES.stimulus10,
    question: `[STIMULUS 10: TRADISI LILIFUK DI PULAU TIMOR]
Teks Cerpen Budaya:
Pagi itu, Damang, ketua adat di desa kami, kembali menegaskan di hadapan warga bahwa siapa pun yang melanggar aturan sakral Lilifuk akan dijatuhi denda adat berat berupa hewan ternak sapi, sejumlah uang, dan berkarung-karung beras. Sebagai masyarakat nelayan di Pulau Timor, tradisi Lilifuk melarang keras penangkapan ikan di luar waktu yang ditentukan. Kami hanya diperbolehkan memanen ikan pada bulan Juni dan Desember. Melanggar kesepakatan adat ini berarti mendatangkan aib besar dan rasa malu, seakan memutus pertalian darah suci Lilifuk.

Aku dan Seno adalah sahabat karib sesama nelayan muda yang sedang berdebar menantikan datangnya Saun Ta'et, yakni upacara adat pembukaan laut untuk menangkap ikan bersama. Menjelang hari panen, ketua adat memimpin ritual di bibir pantai dan mempersembahkan sesaji syukur kepada penguasa alam Lilifuk. Kami berdiri khidmat menghormati laut yang hendak dibuka, menjaga amanah leluhur untuk hidup selaras dengan alam.

Malam harinya, aku berjalan menyisir pantai bersama adikku, Ading. Hembusan angin laut terasa menyejukkan dada. Namun mendadak di tengah gelapnya lautan lepas, aku melihat kilatan cahaya lentera di atas sebuah perahu nelayan. Perahu itu bersiap menebarkan sesuatu ke dalam air. Padahal ritual Saun Ta'et baru akan dilaksanakan esok pagi, dan laut masih berstatus larangan tangkap!
Melihat kejanggalan itu, aku segera berlari kencang menuju kediaman ketua adat dan membangunkan warga desa untuk bersama-sama mencegat perahu tersebut.

Perahu itu berhasil kami kepung dan nelayan di atasnya ditangkap. Betapa hancur hatiku saat melihat bahwa pelaku di atas perahu itu ternyata sahabat karibku sendiri, Seno! Di perahunya, warga menemukan beberapa botol bom ikan rakitan yang mematikan.
"Kami menemukan bom di perahumu! Apa yang hendak kau lakukan pada laut kita, Seno?!" bentak ketua adat.
"Aku ingin pergi dari pulau terkutuk ini!" teriak Seno tanpa rasa sesal. "Aku sudah muak hidup serba kekurangan di sini! Aku berniat mengebom ikan sebanyak-banyaknya malam ini sebagai bekal modal hidupku di kota!"
Seno tahu persis bahwa ledakan bom ikan akan meluluhlantakkan terumbu karang yang butuh puluhan tahun untuk tumbuh kembali. Rasa iri dan keserakahan telah membutakan nuraninya hingga tega mengkhianati desanya sendiri.

Setelah malam kelam itu, Seno diseret ke balai adat untuk diadili. Sejak saat itu, aku tidak pernah lagi berjumpa dengannya. Aku tahu keluarganya yang miskin mustahil sanggup membayar denda puluhan ternak dan beras yang diputuskan dewan adat. Bila ia masih memiliki rasa malu, aku yakin Seno telah pergi meninggalkan pulau ini untuk selamanya dalam penyesalan.

[PERTANYAAN NO. 30]
Pesan moral dan pelajaran hidup terpenting apakah yang dapat dipetik dari tragedi peristiwa yang menimpa Seno dalam cerita tersebut?`,
    options: [
      `A. Sifat serakah dan jalan pintas yang merusak alam akan membawa kehancuran pada diri sendiri dan memutuskan tali persahabatan`,
      `B. Kebebasan berpendapat dan bertindak harus dilakukan meskipun merusak fasilitas milik umum`,
      `C. Hubungan persahabatan harus dibela mati-matian meskipun sahabat kita merusak ekosistem lingkungan`,
      `D. Tradisi leluhur masa lampau sudah kuno sehingga wajar bila dilanggar oleh generasi muda`,
    ],
    correctAnswer: 0,
    isHots: false,
    explanation: `<b>Kunci Jawaban: A. Sifat serakah dan jalan pintas yang merusak alam akan membawa kehancuran pada diri sendiri dan memutuskan tali persahabatan</b><br><br><b>Amanat Moral Cerita:</b><br>Kisah Seno adalah peringatan keras tentang bahaya keserakahan dan iri hati.<br>Karena ingin cepat kaya dan keluar dari kemiskinan dengan cara haram (mengebom karang), Seno justru:<br>1. Menghancurkan habitat terumbu karang yang menjadi sumber kehidupan desanya.<br>2. Kehilangan masa depannya, kehilangan sahabat terbaiknya (tokoh Aku), menanggung rasa malu, dan diasingkan dari tanah kelahirannya.<br><br>Pelajaran berharganya: Menjaga kejujuran, menghormati aturan bersama, dan merawat alam adalah syarat mutlak terciptanya hidup yang berkah dan damai.`
  },
];

export const SOAL_TKA_2026_MATH: Question[] = SOAL_ASLI_TKA_MATH_30;

export const TKA_2026_PACKAGES: Record<'indo' | 'math', Tka2026SubjectPackage> = {
  indo: {
    id: 'tka2026-indo',
    subjectId: 'indo',
    name: 'Bahasa Indonesia',
    title: 'Naskah Asli TKA SMP 2026 - Bahasa Indonesia',
    subtitle: 'Literasi Membaca, Analisis Wacana Kritis, Kebahasaan & Sastra',
    badge: 'Soal Asli TKA 2026',
    year: '2026',
    totalQuestions: SOAL_TKA_2026_INDO.length,
    durationMinutes: 60,
    passingScore: 85,
    difficulty: 'Standar Ujian Resmi (Sedang - HOTS)',
    description: 'Kumpulan naskah dan arsip soal asli ujian TKA SMP 2026 mata pelajaran Bahasa Indonesia. Memuat teks sastra, teks informasi kontemporer, kaidah kebahasaan PUEBI, dan penalaran wacana logis dengan pembahasan kunci komprehensif.',
    kisiKisi: [
      'Menemukan & Menyimpulkan Informasi Tersurat/Tersirat',
      'Memaknai Kosakata, Istilah Ilmiah, & Ungkapan Wacana',
      'Menganalisis Gagasan Pokok, Ide Pendukung, & Hubungan Kausalitas',
      'Struktur & Kebahasaan Teks Deskripsi, Prosedur, & Eksposisi',
      'Kaidah Kalimat Efektif, PUEBI, dan Konjungsi Intrakalimat/Antarkalimat',
      'Unsur Intrinsik Karya Sastra (Cerpen, Fabel, Puisi Kontemporer)',
      'Teks Tanggapan Kritis, Ulasan Buku, dan Pidato Persuasif'
    ],
    questions: SOAL_TKA_2026_INDO
  },
  math: {
    id: 'tka2026-math',
    subjectId: 'math',
    name: 'Matematika',
    title: 'Naskah Asli TKA SMP 2026 - Matematika',
    subtitle: 'Numerasi Terapan, Aljabar, Geometri Ruang, & Statistika',
    badge: 'Soal Asli TKA 2026',
    year: '2026',
    totalQuestions: SOAL_TKA_2026_MATH.length,
    durationMinutes: 60,
    passingScore: 85,
    difficulty: 'Standar Ujian Resmi (Sedang - HOTS)',
    description: 'Kumpulan naskah dan arsip soal asli ujian TKA SMP 2026 mata pelajaran Matematika. Menguji pemecahan masalah kontekstual, penalaran numerasi tingkat tinggi, barisan bilangan, aljabar linear, geometri bangun gabungan, dan statistika probabilitas.',
    kisiKisi: [
      'Operasi Bilangan Bulat, Pecahan, & Skala Kontekstual',
      'Pola Barisan & Deret Aritmatika / Geometri Terapan',
      'Aritmatika Sosial (Bunga Tunggal, Diskon Ganda, Untung/Rugi)',
      'Operasi Aljabar, Persamaan Linear Satu & Dua Variabel (SPLDV)',
      'Relasi, Fungsi Linear, dan Persamaan Garis Lurus',
      'Teorema Pythagoras, Sudut Pusat & Keliling, dan Luas Juring Lingkaran',
      'Bangun Ruang Sisi Lengkung & Bangun Datar Gabungan',
      'Statistika (Rata-rata Gabungan, Kuartil) & Teori Peluang Kejadian'
    ],
    questions: SOAL_TKA_2026_MATH
  }
};
