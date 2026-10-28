import { Question } from '../types';

/**
 * Bank Soal Try Out TKA SMP Resmi - IPA Paket 1 (ipa_p1)
 * 25 Soal CBT Komprehensif dengan Evaluasi Kunci Jawaban & Pembahasan Mendalam (Langkah Step-by-Step Ramah Siswa)
 */
export const TRYOUT_IPA_PAKET_1: Question[] = [
  // --- Soal 1: Perubahan Fisika vs Perubahan Kimia ---
  {
    id: 101,
    question: `Perhatikan beberapa fenomena berikut!
(1) Es batu yang mencair saat diletakkan di ruang terbuka.
(2) Besi pagar yang berkarat karena terkena air hujan.
(3) Pembuatan tape singkong menggunakan ragi.
(4) Air laut yang menguap membentuk kristal garam.

Fenomena yang menunjukkan terjadinya perubahan kimia ditunjukkan oleh nomor ....`,
    questionType: 'single',
    options: [
      '(1) dan (2)',
      '(1) dan (4)',
      '(2) dan (3)',
      '(3) dan (4)',
    ],
    correctAnswer: 2, // C: (2) dan (3)
    isHots: false,
    explanation: `Konsep Dasar Super Sederhana (Perubahan Fisika vs Kimia):

1. Apa Bedanya?
   - Perubahan Fisika: Bendanya cuma ganti wujud atau bentuk fisik (misalnya dari es padat mencair jadi air), zat aslinya TETAP SAMA (tetap molekul air H₂O), dan BISA KEMBALI ke bentuk semula. TIDAK menghasilkan zat baru!
   - Perubahan Kimia: Terjadi reaksi kimia yang menghasilkan ZAT BARU dengan sifat yang benar-benar berbeda dari zat asal, dan TIDAK BISA kembali lagi dengan cara biasa (bersifat permanen). Biasanya ditandai dengan perubahan warna, bau/rasa, timbul gas, atau terbentuk endapan.

2. Mari Kita Uji Satu per Satu Fenomena:
   - (1) Es batu mencair: Ini hanya perubahan wujud dari padat ke cair karena panas ruang. Air lelehan es bisa dimasukkan lagi ke freezer dan membeku menjadi es batu kembali. Tidak ada zat baru yang terbentuk. ➜ Ini PERUBAHAN FISIKA.
   - (2) Besi pagar berkarat: Besi murni (Fe) bereaksi dengan oksigen di udara (O₂) dan air hujan (H₂O) membentuk senyawa baru bernama karat besi (Fe₂O₃·xH₂O). Karat rapuh, berwarna cokelat kemerahan, dan besinya tidak bisa begitu saja berubah kembali jadi besi mulus. ➜ Ini PERUBAHAN KIMIA.
   - (3) Pembuatan tape singkong: Singkong mentah difermentasi oleh ragi (mikroorganisme) sehingga zat pati/karbohidrat dirombak menjadi zat baru berupa alkohol (etanol), gas karbon dioksida (CO₂), dan gula sederhana yang manis beraroma khas. Tape tidak bisa dikembalikan menjadi singkong mentah. ➜ Ini PERUBAHAN KIMIA.
   - (4) Air laut menguap membentuk kristal garam: Ini hanya peristiwa penguapan air (evaporasi). Butiran garam dapur (NaCl) sebenarnya sudah ada di dalam air laut sejak awal, hanya saja tersembunyi karena larut. Begitu airnya menguap terkena sinar matahari, butiran garam tertinggal. ➜ Ini PERUBAHAN FISIKA.

3. Kesimpulan:
   Fenomena yang merupakan perubahan kimia adalah nomor (2) dan (3).
   Maka pilihan jawaban yang paling tepat adalah Opsi C.`,
  },

  // --- Soal 2: Pemuaian Bimetal ---
  {
    id: 102,
    question: `Ketika sebuah bimetal yang terdiri dari keping tembaga (koefisien muai panjang 1,7 × 10⁻⁵/°C) dan keping besi (koefisien muai panjang 1,2 × 10⁻⁵/°C) dipanaskan, bimetal tersebut akan melengkung. Arah lengkungan bimetal yang benar adalah ....`,
    questionType: 'single',
    options: [
      'melengkung ke arah besi karena besi memuai lebih cepat',
      'melengkung ke arah tembaga karena tembaga memuai lebih lambat',
      'melengkung ke arah besi karena besi memiliki koefisien muai lebih kecil',
      'melengkung ke arah tembaga karena tembaga memiliki koefisien muai lebih besar',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Konsep Dasar Pemuaian Bimetal:

1. Apa itu Bimetal?
   Kata "bi" berarti dua, "metal" berarti logam. Bimetal adalah dua keping logam berbeda jenis yang direkatkan rapat menjadi satu lempeng.

2. Memahami Arti Koefisien Muai Panjang (α):
   Anggap koefisien muai panjang sebagai "tingkat pertambahan panjang saat dipanaskan":
   - Tembaga (α = 1,7 × 10⁻⁵/°C) ➜ Angkanya LEBIH BESAR. Artinya tembaga bertambah panjang LEBIH BANYAK dan LEBIH CEPAT saat kena panas.
   - Besi (α = 1,2 × 10⁻⁵/°C) ➜ Angkanya LEBIH KECIL. Artinya besi bertambah panjang LEBIH SEDIKIT dan LEBIH LAMBAT saat dipanaskan.

3. Rumus Rahasia Melengkungnya Bimetal:
   - Jika DIPANASKAN: Bimetal akan melengkung ke arah logam yang koefisien muainya LEBIH KECIL (logam yang lambat bertambah panjang akan terdorong dan "dipeluk" oleh logam yang lebih panjang).
   - Karena tembaga memuai lebih panjang daripada besi, keping tembaga akan mendesak besi dari sisi luar, sehingga bimetal melengkung ke arah besi!
   - (Catatan tambahan: Sebaliknya jika DIDINGINKAN, bimetal akan melengkung ke arah logam yang koefisien muainya lebih besar).

4. Mengapa Pilihan Lain Salah?
   - Opsi A salah alasan: Besi memuai lebih lambat, bukan lebih cepat.
   - Opsi B salah arah dan alasan: Bimetal melengkung ke arah besi, dan tembaga memuai lebih cepat.
   - Opsi D salah arah: Bukan melengkung ke arah tembaga.

Kesimpulan: Bimetal akan melengkung ke arah besi karena besi memiliki koefisien muai lebih kecil. Pilihan yang tepat adalah Opsi C.`,
  },

  // --- Soal 3: Hukum I Newton (Kelembaman / Inersia) ---
  {
    id: 103,
    question: `Sebuah bus sekolah bergerak dengan kecepatan tetap di jalan raya yang lurus. Tiba-tiba sopir bus menginjak rem secara mendadak karena ada kucing menyeberang. Akibatnya, para siswa di dalam bus terdorong ke arah depan. Peristiwa ini merupakan penerapan dari ....`,
    questionType: 'single',
    options: [
      'Hukum I Newton tentang kelembaman',
      'Hukum II Newton tentang percepatan',
      'Hukum III Newton tentang aksi-reaksi',
      'Hukum gravitasi universal',
    ],
    correctAnswer: 0, // A
    isHots: false,
    explanation: `Konsep Dasar Hukum Gerak Newton:

1. Mengenal Sifat "Kelembaman" (Inersia):
   Setiap benda di alam semesta memiliki sifat "malas" atau mempertahankan keadaan awalnya:
   - Benda yang sedang diam ingin tetap diam.
   - Benda yang sedang bergerak maju ingin TETAP BERGERAK MAJU ke depan dengan kecepatan konstan, kecuali jika ada gaya luar yang memaksanya berubah.
   Konsep ini tertuang dalam Hukum I Newton (ΣF = 0).

2. Apa yang Sebenarnya Terjadi di Dalam Bus?
   - Saat bus melaju stabil ke depan, tubuh semua penumpang di dalamnya juga ikut melesat maju bersama bus.
   - Ketika sopir menginjak rem secara mendadak, rem hanya menghentikan roda dan bodi bus.
   - Tubuh para siswa yang tidak terikat sabuk pengaman masih "ingin terus bergerak maju" sesuai kecepatan semula. Akibatnya, tubuh terlempar atau terdorong ke depan!
   - (Contoh serupa: Saat bus diam tiba-tiba tancap gas mendadak, tubuh kita akan terdorong ke belakang karena tubuh mempertahankan posisi diamnya).

3. Mengapa Bukan Pilihan Lain?
   - Hukum II Newton (F = m · a): Menjelaskan percepatan benda yang berbanding lurus dengan gaya dorong/tarik dan berbanding terbalik dengan massa benda (misal: mendorong gerobak bermuatan ringan lebih cepat dibanding yang berat).
   - Hukum III Newton (F aksi = -F reaksi): Menjelaskan pasangan gaya timbal balik dua benda (misal: kaki menghentak lantai ke belakang saat melompat).
   - Hukum Gravitasi Universal: Menjelaskan gaya tarik-menarik antar dua massa di jagat raya.

Kesimpulan: Peristiwa terdorong ke depan saat pengereman mendadak adalah manifestasi Hukum I Newton tentang kelembaman. Pilihan yang tepat adalah Opsi A.`,
  },

  // --- Soal 4: Klasifikasi Tumbuhan (Bryophyta) ---
  {
    id: 104,
    question: `Seorang siswa menemukan tumbuhan dengan ciri-ciri: tidak memiliki pembuluh angkut, tidak memiliki akar, batang, dan daun sejati, serta berkembang biak dengan spora. Berdasarkan ciri-ciri tersebut, tumbuhan ini dapat dikelompokkan ke dalam kelompok ....`,
    questionType: 'single',
    options: [
      'Pteridophyta (Tumbuhan Paku)',
      'Bryophyta (Tumbuhan Lumut)',
      'Gymnospermae (Tumbuhan Berbiji Terbuka)',
      'Angiospermae (Tumbuhan Berbiji Tertutup)',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Klasifikasi Kerajaan Tumbuhan (Plantae) Step-by-Step:

1. Bedah 3 Ciri Kunci pada Soal:
   - "Tidak memiliki pembuluh angkut" ➜ Bersifat non-vaskular (tidak punya pipa xilem dan floem untuk mengangkut air dan makanan).
   - "Tidak memiliki akar, batang, dan daun sejati" ➜ Tubuhnya masih berupa talus. Akarnya belum sejati, hanya berupa serabut penempel sederhana yang disebut rizoid.
   - "Berkembang biak dengan spora" ➜ Mengalami pergiliran keturunan (metagenesis) antara fase gametofit dan sporofit.

2. Cek Karakteristik Masing-Masing Kelompok:
   - Bryophyta (Tumbuhan Lumut): Merupakan tumbuhan peralihan antara thallophyta dan kormophyta. TIDAK PUNYA pembuluh angkut, TIDAK PUNYA akar/batang/daun sejati (punya rizoid), dan berkembang biak dengan spora. Ciri-ciri ini 100% PERSIS dengan soal!
   - Pteridophyta (Tumbuhan Paku): SUDAH memiliki pembuluh angkut (vaskular), SUDAH memiliki akar, batang, dan daun sejati (kormus), serta daun mudanya menggulung. (Jadi opsi A salah).
   - Gymnospermae (Tumbuhan Berbiji Terbuka): Tumbuhan tingkat tinggi berpembuluh yang berkembang biak dengan BIJI terbuka pada strobilus (misal pinus, melinjo). (Opsi C salah).
   - Angiospermae (Tumbuhan Berbiji Tertutup): Tumbuhan tingkat tinggi berpembuluh dengan bunga dan biji tertutup daging buah (misal mangga, padi). (Opsi D salah).

Kesimpulan: Tumbuhan dengan ciri di atas adalah Bryophyta (Tumbuhan Lumut). Pilihan yang benar adalah Opsi B.`,
  },

  // --- Soal 5: Dinamika Rantai Makanan Sawah ---
  {
    id: 105,
    question: `Di dalam sebuah ekosistem sawah, terdapat populasi padi, belalang, katak, dan ular. Jika populasi katak mengalami penurunan drastis akibat perburuan liar, dampak langsung yang akan terjadi pada ekosistem tersebut adalah ....`,
    questionType: 'single',
    options: [
      'populasi padi meningkat pesat',
      'populasi belalang menurun drastis',
      'populasi ular akan meningkat tajam',
      'populasi belalang meningkat sehingga merusak padi',
    ],
    correctAnswer: 3, // D
    isHots: false,
    explanation: `Analisis Aliran Rantai Makanan Step-by-Step:

1. Susun Rantai Makanan Sawah Sesuai Soal:
   Padi (Produsen) ➜ Belalang (Konsumen I / Herbivor) ➜ Katak (Konsumen II / Karnivor) ➜ Ular (Konsumen III / Predator Puncak).

2. Perhatikan Hubungan Mangsa dan Pemangsa:
   - Makanan katak adalah belalang. Jadi katak bertindak sebagai pengendali alami agar jumlah belalang tidak meledak.
   - Makanan ular adalah katak.
   - Makanan belalang adalah daun tanaman padi.

3. Apa yang Terjadi Jika Katak Diburu dan Habis?
   - Populasi Belalang: Karena "musuh alami"-nya (katak) hilang, belalang bisa berkembang biak dengan bebas tanpa ada yang memakannya. Akibatnya, populasi belalang MELONJAK TINGGI (meningkat drastis).
   - Populasi Padi: Ribuan belalang yang kelaparan akan memakan habis rumpun padi milik petani, sehingga tanaman padi hancur/rusak parah dan gagal panen.
   - Populasi Ular: Karena katak habis, ular kehilangan sumber makanan utamanya. Seiring waktu, populasi ular akan menurun (bukan meningkat).

4. Evaluasi Pilihan Jawaban:
   - Opsi A ("padi meningkat"): Salah, padi justru ludes dimakan belalang.
   - Opsi B ("belalang menurun"): Salah, belalang justru berkembang biak bebas.
   - Opsi C ("ular meningkat"): Salah, ular kelaparan karena katak punah.
   - Opsi D ("belalang meningkat sehingga merusak padi"): BENAR dan sangat logis!

Kesimpulan: Pilihan yang paling tepat adalah Opsi D.`,
  },

  // --- Soal 6: Rotasi vs Revolusi Bumi ---
  {
    id: 106,
    question: `Fenomena alam berupa terjadinya siang dan malam, serta gerak semu harian matahari disebabkan oleh ....`,
    questionType: 'single',
    options: [
      'revolusi Bumi mengelilingi Matahari',
      'rotasi Bumi pada porosnya',
      'revolusi Bulan mengelilingi Bumi',
      'kemiringan sumbu Bumi terhadap bidang ekliptika',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Konsep Dasar Astronomi Bumi:

1. Bedakan Kata "Rotasi" dan "Revolusi":
   - Rotasi Bumi = Perputaran Bumi pada poros/sumbunya sendiri (seperti bola basket atau gasing yang berputar di tempat). Waktu tempuhnya sekitar 24 jam (1 hari).
   - Revolusi Bumi = Perjalanan Bumi mengelilingi Matahari pada lintasan orbitnya. Waktu tempuhnya sekitar 365,25 hari (1 tahun).

2. Akibat Rotasi Bumi (Kejadian Harian):
   - Terjadinya siang dan malam: Bagian Bumi yang menghadap Matahari mendapat sinar (siang), sementara bagian belakangnya gelap (malam).
   - Gerak semu harian Matahari: Matahari seolah-olah terbit di ufuk timur dan tenggelam di ufuk barat setiap hari, padahal Matahari diam dan Buminya yang berputar dari barat ke timur.
   - Perbedaan waktu di berbagai garis bujur (misal pembagian zona waktu WIB, WITA, WIT di Indonesia).
   - Pembelokan arah angin dan arus laut (efek Coriolis).

3. Akibat Revolusi Bumi (Kejadian Tahunan):
   - Pergantian 4 musim di wilayah subtropis (musim semi, panas, gugur, dingin).
   - Perubahan lamanya waktu siang dan malam di berbagai belahan dunia sepanjang tahun.
   - Gerak semu tahunan Matahari (posisi Matahari tampak bergeser antara 23,5° LU dan 23,5° LS).
   - Terlihatnya rasi bintang yang berbeda-beda setiap bulan.

Kesimpulan: Peristiwa siang-malam dan gerak semu harian Matahari terjadi akibat rotasi Bumi pada porosnya. Pilihan yang tepat adalah Opsi B.`,
  },

  // --- Soal 7: Organel Sel dan Respirasi Seluler ---
  {
    id: 107,
    question: `Perhatikan gambar sel berikut!
Organel sel yang berfungsi sebagai tempat respirasi seluler untuk menghasilkan energi (ATP) ditunjukkan oleh ....`,
    image: '/images/tryout/sel_mitokondria.svg',
    imageCaption: 'Gambar: Diagram organel sel eukariotik dengan berbagai struktur fungsional internal.',
    questionType: 'single',
    options: [
      'Nukleus',
      'Mitokondria',
      'Ribosom',
      'Kloroplas',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Mengenal Organel Sel dan Fungsinya (Julukan Mudah Diingat):

1. Mitokondria — "Pabrik Listrik / Powerhouse of the Cell":
   - Bentuknya seperti sosis lonjong dengan membran ganda berlekuk-lekuk di bagian dalamnya (krista).
   - Fungsi utamanya adalah tempat berlangsungnya respirasi seluler, yaitu membakar zat sari makanan (glukosa) menggunakan oksigen untuk menghasilkan molekul berenergi tinggi yang disebut ATP (Adenosina Trifosfat). Energi inilah yang dipakai oleh tubuh kita untuk beraktivitas, bernapas, dan bergerak.

2. Mari Kenali Fungsi Organel Lainnya agar Tidak Tertukar:
   - Nukleus (Inti Sel): Berfungsi sebagai "Pusat Kendali / Kantor Pusat" sel yang mengatur seluruh aktivitas kehidupan sel dan menyimpan materi genetik/DNA.
   - Ribosom: Berfungsi sebagai "Pabrik Protein", tempat dirakitnya asam amino menjadi protein tubuh.
   - Kloroplas: Hanya ditemukan pada sel tumbuhan, berfungsi sebagai tempat fotosintesis untuk membuat makanan sendiri dengan memanfaatkan klorofil dan cahaya matahari.

Kesimpulan: Organel penghasil energi (ATP) melalui respirasi seluler adalah Mitokondria. Pilihan yang benar adalah Opsi B.`,
  },

  // --- Soal 8: Tekanan Hidrostatis ---
  {
    id: 108,
    question: `Seorang penyelam berada pada kedalaman 15 meter di bawah permukaan air laut. Jika massa jenis air laut adalah 1.030 kg/m³ dan percepatan gravitasi bumi 10 m/s², pernyataan yang benar mengenai tekanan hidrostatis yang dialami penyelam adalah ....`,
    questionType: 'single',
    options: [
      'tekanan hidrostatis akan berkurang jika penyelam menyelam lebih dalam',
      'tekanan hidrostatis sebanding dengan kedalaman posisi penyelam',
      'tekanan hidrostatis tidak dipengaruhi oleh massa jenis zat cair',
      'tekanan hidrostatis bernilai sama di setiap kedalaman laut',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Konsep & Rumus Tekanan Hidrostatis Step-by-Step:

1. Apa itu Tekanan Hidrostatis (Ph)?
   Tekanan hidrostatis adalah tekanan yang dirasakan oleh benda di dalam air yang disebabkan oleh berat kolom air di atasnya yang menekan ke bawah.

2. Rumus Tekanan Hidrostatis:
   Ph = ρ × g × h
   - ρ (rho) = massa jenis zat cair (air laut = 1.030 kg/m³)
   - g = percepatan gravitasi (10 m/s²)
   - h = kedalaman diukur dari permukaan air (15 meter)

3. Mari Kita Hitung Nilainya:
   Ph = 1.030 × 10 × 15 = 154.500 Pascal (N/m²).

4. Mengapa Tekanan Sebanding dengan Kedalaman?
   - Pada rumus Ph = ρ · g · h, variabel kedalaman (h) terletak di posisi pembilang (perkalian langsung sejajar).
   - Artinya, Ph berbanding lurus (sebanding) dengan kedalaman (h).
   - Semakin dalam seseorang menyelam (nilai h makin besar), semakin tebal dan berat air yang menindihnya dari atas, sehingga tekanan hidrostatis yang menekan gendang telinga dan tubuh penyelam MAKIN BESAR.

5. Analisis Pilihan Jawaban:
   - Opsi A salah: Justru bertambah besar jika menyelam lebih dalam.
   - Opsi B BENAR: Tekanan hidrostatis berbanding lurus/sebanding dengan kedalaman posisi penyelam.
   - Opsi C salah: Sangat dipengaruhi oleh massa jenis air (air laut yang lebih padat memberi tekanan lebih besar dari air tawar).
   - Opsi D salah: Tekanan hidrostatis berbeda di setiap tingkat kedalaman.

Kesimpulan: Pilihan yang tepat adalah Opsi B.`,
  },

  // --- Soal 9: Enzim Saluran Pencernaan Lambung ---
  {
    id: 109,
    question: `Pada saluran pencernaan manusia, makanan yang masuk ke lambung akan mengalami pencernaan kimiawi. Enzim yang berfungsi untuk mengubah protein menjadi pepton di dalam lambung adalah ....`,
    questionType: 'single',
    options: [
      'Amilase',
      'Tripsin',
      'Pepsin',
      'Lipase',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Cara Mudah Mengingat Enzim di Saluran Pencernaan:

1. Jembatan Keledai Getah Lambung (H-P-R):
   Dinding lambung memproduksi getah lambung yang mengandung tiga zat utama:
   - H = Asam Klorida (HCl): Asam kuat untuk mematikan kuman penyakit pada makanan serta menciptakan lingkungan asam agar pepsinogen aktif menjadi pepsin.
   - P = Pepsin: Enzim yang memecah ikatan protein kasar menjadi senyawa pepton yang lebih sederhana.
   - R = Renin: Enzim yang mengendapkan kasein (protein susu) dari air susu.

2. Mengapa Bukan Enzim Lain?
   - Amilase (Ptialin): Berfungsi mengubah amilum (zat tepung / karbohidrat) menjadi maltosa (gula sederhana). Bekerja di mulut dan usus halus.
   - Tripsin: Berfungsi mencerna protein/pepton menjadi asam amino, tetapi enzim ini dihasilkan oleh PANKREAS dan bekerja di dalam USUS HALUS (bukan di lambung).
   - Lipase: Berfungsi memecah lemak menjadi asam lemak dan gliserol di dalam usus halus.

Kesimpulan: Enzim di lambung yang mengubah protein menjadi pepton adalah Pepsin. Pilihan yang benar adalah Opsi C.`,
  },

  // --- Soal 10: Keuntungan Mekanis Bidang Miring ---
  {
    id: 110,
    question: `Seorang pekerja menggunakan bidang miring sepanjang 4 meter untuk menaikkan sebuah kotak seberat 800 N ke atas truk yang tingginya 1 meter. Keuntungan mekanis dari penggunaan bidang miring tersebut adalah ....`,
    questionType: 'single',
    options: [
      '1',
      '2',
      '4',
      '8',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Perhitungan Keuntungan Mekanis (KM) Bidang Miring Step-by-Step:

1. Apa itu Keuntungan Mekanis (KM)?
   Keuntungan mekanis adalah angka pengali yang menunjukkan berapa kali lipat pekerjaan kita dipermudah oleh pesawat sederhana. Semakin besar nilai KM, gaya dorong yang kita butuhkan akan semakin ringan!

2. Data yang Diketahui dari Soal:
   - Panjang bidang miring (s) = 4 meter
   - Ketinggian truk (h) = 1 meter
   - Berat kotak beban (W) = 800 Newton

3. Rumus Keuntungan Mekanis Bidang Miring:
   KM = s / h
   - s = panjang lintasan miring
   - h = tinggi bidang miring

4. Masukkan Angkanya:
   KM = 4 meter / 1 meter
   KM = 4

5. Pembuktian Ringannya Tenaga:
   Tanpa bidang miring, pekerja harus mengangkat beban seberat 800 N secara langsung.
   Dengan bidang miring yang memiliki KM = 4, gaya dorong (F) yang dikeluarkan cukup:
   F = W / KM = 800 N / 4 = 200 Newton saja (4 kali lebih ringan!).

Kesimpulan: Keuntungan mekanis dari bidang miring tersebut adalah 4. Pilihan yang tepat adalah Opsi C.`,
  },

  // --- Soal 11: Pemantulan Bunyi (Kedalaman Laut) ---
  {
    id: 111,
    question: `Sebuah kapal memancarkan gelombang bunyi ke dasar laut untuk mengukur kedalamannya. Jika bunyi pantul diterima kembali oleh kapal setelah 4 sekon dan cepat rambat bunyi di air laut adalah 1.400 m/s, maka kedalaman laut tersebut adalah ....`,
    questionType: 'single',
    options: [
      '700 meter',
      '1.400 meter',
      '2.800 meter',
      '5.600 meter',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Perhitungan Kedalaman Laut dengan Gelombang Bunyi Pantul:

1. Jebakan Umum yang Wajib Dihindari!
   Gelombang bunyi yang dipancarkan sonar kapal menempuh perjalanan BOLAK-BALIK (pergi dan pulang):
   - Perjalanan 1: Dari kapal turun ke dasar laut (jarak d)
   - Perjalanan 2: Memantul dari dasar laut naik kembali ke kapal (jarak d)
   Total jarak yang ditempuh bunyi adalah 2 × d. Maka, untuk mencari kedalaman laut yang sebenarnya (d), hasil kali cepat rambat dan waktu WAJIB DIBAGI 2!

2. Data yang Diketahui:
   - Waktu tempuh bolak-balik (t) = 4 sekon
   - Cepat rambat bunyi di air laut (v) = 1.400 m/s

3. Rumus Kedalaman Laut (d):
   d = (v × t) / 2

4. Langkah Perhitungan:
   d = (1.400 × 4) / 2
   d = 5.600 / 2
   d = 2.800 meter

5. Logika Cek Cepat:
   Dalam 1 sekon bunyi menempuh 1.400 meter.
   Karena waktu total 4 sekon untuk bolak-balik, waktu untuk sekali jalan dari atas ke dasar laut hanyalah separuhnya, yaitu 2 sekon.
   Maka kedalaman = 1.400 m/s × 2 sekon = 2.800 meter.

Kesimpulan: Kedalaman laut tersebut adalah 2.800 meter. Pilihan yang tepat adalah Opsi C.`,
  },

  // --- Soal 12: Pemisahan Campuran (Kristalisasi) ---
  {
    id: 112,
    question: `Metode pemisahan campuran yang paling tepat digunakan untuk memperoleh garam dapur yang bersih dari air laut adalah ....`,
    questionType: 'single',
    options: [
      'Filtrasi',
      'Kristalisasi (Evaporasi)',
      'Kromatografi',
      'Sublimasi',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Konsep Pemisahan Campuran Homogen:

1. Memahami Sifat Air Laut:
   Air laut adalah campuran homogen (larutan) antara zat padat terlarut (garam NaCl) dan zat pelarut cair (air). Partikel garam terlarut berukuran sangat kecil (tingkat molekul) dan menyatu sempurna dengan air.

2. Mengapa Menggunakan Kristalisasi (Evaporasi)?
   - Garam dan air memiliki titik didih yang sangat jauh berbeda. Air mendidih dan menguap pada suhu 100°C, sedangkan garam dapur baru mendidih pada suhu lebih dari 1.400°C.
   - Petani garam mengalirkan air laut ke petak-petak tambak garam terbuka di bawah terik sinar matahari.
   - Air perlahan-lahan menguap (evaporasi) ke udara sampai habis.
   - Molekul garam yang tertinggal akan saling mengikat dan mengendap membentuk butiran padat kristal garam dapur yang murni (proses kristalisasi).

3. Mengapa Pilihan Lain Tidak Tepat?
   - Filtrasi (Penyaringan): Hanya bisa memisahkan padatan yang tidak larut dari cairan (misal memisahkan pasir dari air). Jika air garam disaring, garam tetap lolos melewati pori kertas saring.
   - Kromatografi: Metode pemisahan zat warna berdasarkan perbedaan kecepatan merambat pada zat penyerap (misal menguji zat pewarna makanan/tinta spidol).
   - Sublimasi: Pemisahan campuran padat yang salah satu komponennya bisa menyublim (berubah langsung dari padat menjadi gas), seperti kapur barus kotor dengan pasir.

Kesimpulan: Metode pemisahan yang paling tepat untuk memperoleh garam dari air laut adalah Kristalisasi (Evaporasi). Pilihan yang benar adalah Opsi B.`,
  },

  // --- Soal 13: Lapisan Bumi (Kerak Bumi) ---
  {
    id: 113,
    question: `Lapisan bumi yang paling luar, bersifat padat, keras, dan menjadi tempat tinggal bagi seluruh makhluk hidup adalah ....`,
    questionType: 'single',
    options: [
      'Kerak bumi',
      'Mantel bumi',
      'Inti luar bumi',
      'Inti dalam bumi',
    ],
    correctAnswer: 0, // A
    isHots: false,
    explanation: `Struktur Lapisan Bumi (Analogi Telur Rebus):

1. Lapisan Bumi dari Luar ke Dalam:
   - Cangkang Telur ➜ Kerak Bumi (Crust):
     Lapisan terluar Bumi yang dingin, kaku, padat, dan relatif paling tipis (ketebalan 5 - 70 km). Terdiri dari kerak benua (daratan) dan kerak samudra (dasar laut). Di lapisan inilah tanah tempat tumbuhnya tanaman, gedung-gedung, dan seluruh makhluk hidup berpijak dan beraktivitas.
   - Putih Telur ➜ Mantel Bumi (Mantle):
     Lapisan tebal di bawah kerak dengan kedalaman hingga 2.900 km. Terdiri dari batuan silikat yang sangat panas dan kental semi-cair (magma) yang terus bergolak menghasilkan arus konveksi (penyebab lempeng tektonik bergerak).
   - Kuning Telur Bagian Luar ➜ Inti Luar (Outer Core):
     Lapisan setebal 2.200 km yang tersusun atas cairan logam besi dan nikel yang berpijar cair dengan suhu mencapai 4.000°C - 5.000°C. Pergerakan cairan logam ini menciptakan medan magnet Bumi.
   - Pusat Kuning Telur ➜ Inti Dalam (Inner Core):
     Pusat Bumi berupa bola padat padat besi-nikel dengan suhu luar biasa panas (seperti permukaan matahari, ~5.400°C), tetapi tetap padat karena tekanan gravitasi yang luar biasa dahsyat.

Kesimpulan: Lapisan terluar yang padat, keras, dan menjadi rumah makhluk hidup adalah Kerak bumi. Pilihan yang tepat adalah Opsi A.`,
  },

  // --- Soal 14: Pembelahan Sel (Meiosis) ---
  {
    id: 114,
    question: `Proses pembelahan sel yang menghasilkan empat sel anakan yang masing-masing memiliki setengah dari jumlah kromosom sel induk (haploid) disebut ....`,
    questionType: 'single',
    options: [
      'Mitosis',
      'Amitosis',
      'Meiosis',
      'Fragmentasi',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Perbedaan Pembelahan Sel Mitosis vs Meiosis Step-by-Step:

1. Pembelahan Mitosis (Sel Tubuh / Somatik):
   - Tujuan: Untuk pertumbuhan badan, regenerasi sel yang rusak, dan penyembuhan luka.
   - Jumlah sel anakan: Menghasilkan 2 sel anakan.
   - Jumlah kromosom: SAMA PERSIS dengan induknya, yaitu bersifat diploid (2n).

2. Pembelahan Meiosis (Sel Kelamin / Gamet):
   - Tujuan: Untuk pembentukan sel kelamin (sel sperma pada laki-laki dan sel telur pada perempuan).
   - Jumlah sel anakan: Mengalami dua kali pembelahan berurutan sehingga menghasilkan 4 SEL ANAKAN.
   - Jumlah kromosom: Berkurang menjadi SETENGAH DARI JUMLAH KROMOSOM INDUK, yaitu bersifat haploid (n). Oleh sebab itu, meiosis disebut juga "pembelahan reduksi".

3. Mengapa Meiosis Harus Menghasilkan Setengah Kromosom (Haploid)?
   - Manusia normal memiliki 46 kromosom (2n).
   - Saat pembuahan terjadi, sel sperma (23 kromosom / n) akan melebur dengan sel telur (23 kromosom / n).
   - Hasilnya, janin bayi yang terbentuk akan kembali memiliki kromosom utuh: 23 + 23 = 46 kromosom (2n)!
   - Bayangkan jika tidak mengalami reduksi, kromosom anak akan berlipat ganda terus-menerus dan menjadi cacat genetik.

4. Istilah Lainnya:
   - Amitosis: Pembelahan biner spontan langsung pada bakteri tanpa melalui fase-fase pembelahan.
   - Fragmentasi: Perkembangbiakan aseksual dengan memotong bagian tubuh (misal pada cacing Planaria).

Kesimpulan: Pembelahan yang menghasilkan 4 sel anakan haploid (n) adalah Meiosis. Pilihan yang benar adalah Opsi C.`,
  },

  // --- Soal 15: Hukum Mendel I (Persilangan Monohibrid) ---
  {
    id: 115,
    question: `Persilangan antara tanaman kacang ercis berbiji bulat (BB) dengan kacang ercis berbiji keriput (bb) menghasilkan keturunan pertama (F₁) berbiji bulat seluruhnya. Jika F₁ disilangkan sesamanya, perbandingan fenotipe pada keturunan kedua (F₂) adalah ....`,
    questionType: 'single',
    options: [
      '1 Bulat : 3 Keriput',
      '3 Bulat : 1 Keriput',
      '1 Bulat : 1 Keriput',
      '9 Bulat : 3 Keriput',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Langkah Persilangan Monohibrid Dominan Penuh Step-by-Step:

1. Tahap Induk Pertama (Parental / P₁):
   - Induk jantan berbiji bulat (genotipe BB) disilangkan dengan induk betina berbiji keriput (genotipe bb).
   - Gamet yang dibentuk: Induk BB menghasilkan gamet B, induk bb menghasilkan gamet b.

2. Tahap Keturunan Pertama (Filial 1 / F₁):
   - Penggabungan gamet: B + b ➜ Bb.
   - Karena gen B (bulat) bersifat dominan penuh menutupi gen b (keriput), maka 100% keturunan F₁ berwujud biji BULAT dengan genotipe Bb (heterozigot).

3. Tahap Persilangan Sesama F₁ (P₂ = F₁ × F₁):
   - Bb × Bb
   - Gamet masing-masing induk: B dan b.

4. Buat Papan Catur / Kotak Punnett Keturunan Kedua (F₂):
   -----------------------------------
   | Gamet |      B      |      b      |
   -----------------------------------
   |   B   |   BB (Bulat)|  Bb (Bulat) |
   -----------------------------------
   |   b   |   Bb (Bulat)| bb (Keriput)|
   -----------------------------------

5. Hitung Hasilnya:
   - Perbandingan Genotipe: 1 BB : 2 Bb : 1 bb.
   - Perbandingan Fenotipe (tampilan fisik yang terlihat mata):
     * Biji Bulat: BB (1) + Bb (2) = 3 bagian
     * Biji Keriput: bb (1) = 1 bagian
   - Rasio Fenotipe F₂ = 3 Bulat : 1 Keriput.

Kesimpulan: Perbandingan fenotipe F₂ adalah 3 Bulat : 1 Keriput. Pilihan yang tepat adalah Opsi B.`,
  },

  // --- Soal 16: Bioteknologi Konvensional (Mikroorganisme Tempe) ---
  {
    id: 116,
    question: `Pembuatan tempe merupakan salah satu contoh penerapan bioteknologi konvensional. Mikroorganisme yang berperan penting dalam proses fermentasi kedelai menjadi tempe adalah ....`,
    questionType: 'single',
    options: [
      'Saccharomyces cerevisiae',
      'Lactobacillus bulgaricus',
      'Rhizopus oryzae',
      'Acetobacter aceti',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Penerapan Bioteknologi Pangan Tradisional:

1. Cara Tempe Dibuat:
   - Kedelai yang telah direbus dan dikupas kulitnya ditaburi ragi tempe.
   - Ragi tempe mengandung spora jamur kapang bernama Rhizopus oryzae (dan Rhizopus oligosporus).
   - Jamur Rhizopus akan tumbuh membentuk benang-benang putih halus yang disebut miselium/hifa. Benang-benang inilah yang mengikat butiran kedelai menjadi satu lempeng tempe yang padat dan mengubah protein kedelai menjadi asam amino yang mudah diserap tubuh.

2. Daftar Mikroorganisme Penting Lainnya (Wajib Dihafal):
   - Rhizopus oryzae: Jamur pembuat TEMPE.
   - Saccharomyces cerevisiae: Ragi jamur uniseluler pembuat ROTI (supaya mengembang empuk) dan TAPE singkong/ketan.
   - Lactobacillus bulgaricus (bersama Streptococcus thermophilus): Bakteri asam laktat untuk fermentasi susu menjadi YOGURT.
   - Acetobacter aceti: Bakteri yang mengubah alkohol menjadi ASAM CUKA (asam asetat).

Kesimpulan: Mikroorganisme pembuat tempe adalah Rhizopus oryzae. Pilihan yang benar adalah Opsi C.`,
  },

  // --- Soal 17: Listrik Statis (Perpindahan Muatan) ---
  {
    id: 117,
    question: `Ketika sebuah penggaris plastik digosokkan pada kain wol kering, penggaris tersebut menjadi bermuatan listrik negatif. Hal ini terjadi karena ....`,
    questionType: 'single',
    options: [
      'proton berpindah dari kain wol ke penggaris plastik',
      'elektron berpindah dari kain wol ke penggaris plastik',
      'proton berpindah dari penggaris plastik ke kain wol',
      'elektron berpindah dari penggaris plastik ke kain wol',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Aturan Emas Kelistrikan Statis:

1. Siapa yang Boleh Bergerak/Berpindah?
   - Di dalam atom terdapat Proton (muatan positif), Neutron (netral), dan Elektron (muatan negatif).
   - Proton dan neutron terkunci sangat kuat di dalam inti atom (nukleus) dan TIDAK PERNAH BISA BERPINDAH saat benda digosok!
   - Hanya ELEKTRON yang berada di orbit terluar atom yang sangat ringan dan MUDAH BERPINDAH dari satu benda ke benda lain.
   - Tips Cepat: Coret langsung opsi yang menyebut proton berpindah (Opsi A dan C otomatis SALAH)!

2. Hukum Muatan Akibat Perpindahan Elektron:
   - Benda yang KEDATANGAN / MENERIMA elektron ➜ Kelebihan muatan negatif ➜ Menjadi BERMUATAN NEGATIF.
   - Benda yang KEHILANGAN / MELEPAS elektron ➜ Kekurangan muatan negatif (kelebihan proton) ➜ Menjadi BERMUATAN POSITIF.

3. Konteks Penggaris Plastik dan Kain Wol:
   - Penggaris plastik menjadi BERMUATAN NEGATIF.
   - Ini membuktikan bahwa penggaris plastik telah MENERIMA elektron yang berpindah dari kain wol.
   - Akibatnya, kain wol yang ditinggalkan oleh elektronnya menjadi bermuatan positif.

Kesimpulan: Penggaris plastik menjadi bermuatan negatif karena elektron berpindah dari kain wol ke penggaris plastik. Pilihan yang benar adalah Opsi B.`,
  },

  // --- Soal 18: Rangkaian Listrik Paralel ---
  {
    id: 118,
    question: `Tiga buah hambatan masing-masing bernilai 2 Ω, 3 Ω, dan 6 Ω dirangkai secara paralel. Hambatan pengganti (total) dari rangkaian tersebut adalah ....`,
    questionType: 'single',
    options: [
      '1 Ω',
      '2 Ω',
      '3 Ω',
      '11 Ω',
    ],
    correctAnswer: 0, // A
    isHots: false,
    explanation: `Perhitungan Hambatan Paralel (Rp) Step-by-Step:

1. Karakteristik Penting Rangkaian Paralel:
   Pada rangkaian paralel, arus listrik memiliki banyak cabang jalan alternatif. Akibatnya, hambatan total pengganti (Rp) selalu LEBIH KECIL dari nilai hambatan terkecil yang ada di rangkaian.
   Di soal ini hambatannya 2 Ω, 3 Ω, dan 6 Ω. Hambatan terkecil adalah 2 Ω, maka jawabannya pasti di bawah 2 Ω (kita sudah bisa menebak pasti 1 Ω!).

2. Rumus Hambatan Pengganti Paralel:
   1/Rp = 1/R₁ + 1/R₂ + 1/R₃

3. Langkah Menghitung:
   1/Rp = 1/2 + 1/3 + 1/6

   - Samakan penyebut pecahan menjadi angka 6:
   1/Rp = 3/6 + 2/6 + 1/6

   - Jumlahkan pembilangnya:
   1/Rp = (3 + 2 + 1) / 6
   1/Rp = 6/6
   1/Rp = 1

   - Balik nilainya untuk mencari Rp:
   Rp = 6 / 6 = 1 Ω

4. Mengapa Pilihan D (11 Ω) Salah?
   Nilai 11 Ω diperoleh jika dirangkai secara SERI (tinggal dijumlahkan: 2 + 3 + 6 = 11 Ω). Karena yang diminta adalah PARALEL, maka yang benar adalah 1 Ω.

Kesimpulan: Hambatan pengganti paralel dari ketiga resistor tersebut adalah 1 Ω. Pilihan yang tepat adalah Opsi A.`,
  },

  // --- Soal 19: Kemagnetan (Pembuatan Magnet dengan Menggosok) ---
  {
    id: 119,
    question: `Sebuah paku besi dapat dijadikan magnet dengan cara digosok menggunakan magnet permanen secara berulang-ulang. Cara menggosok yang benar agar paku tersebut menjadi magnet yang kuat adalah ....`,
    questionType: 'single',
    options: [
      'digosok secara bolak-balik dengan kutub magnet yang bergantian',
      'digosok secara searah menggunakan satu kutub magnet saja',
      'digosok secara acak menggunakan kedua kutub magnet secara bersamaan',
      'digosok secara perlahan tanpa menyentuh permukaan paku',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Konsep Dasar Pembuatan Magnet dengan Menggosok:

1. Mengapa Paku Besi Aslinya Bukan Magnet?
   Di dalam paku besi biasa, terdapat jutaan partikel magnetik super kecil yang disebut "magnet elementer".
   Pada besi yang belum jadi magnet, arah hadap magnet-magnet elementer ini tidak beraturan (acak-acakan ke segala arah: ada yang menghadap kiri, kanan, atas, bawah), sehingga sifat kemagnetannya saling meniadakan.

2. Bagaimana Cara Menjadikannya Magnet?
   - Kuncinya adalah menertibkan susunan magnet elementer agar semuanya SEJAJAR dan MENGHADAP KE ARAH YANG SAMA.
   - Caranya: Kita harus menggosok paku besi tersebut secara SEARAH (satu arah) berulang-ulang dari satu ujung ke ujung lainnya dengan menggunakan SATU KUTUB magnet permanen saja (misalnya kutub utara saja).
   - Setelah sampai di ujung, angkat magnet, lalu ulangi gosokan dari titik awal lagi.

3. Mengapa Cara Lain Gagal?
   - Menggosok bolak-balik (maju-mundur) atau acak justru akan mengacak-acak kembali magnet elementer yang sudah mulai tertata, sehingga paku tidak akan pernah menjadi magnet!
   - Menggosok tanpa menyentuh paku tidak akan mampu menarik dan menyelaraskan susunan magnet elementer di dalam logam besi.

Kesimpulan: Cara menggosok yang benar adalah digosok secara searah menggunakan satu kutub magnet saja. Pilihan yang tepat adalah Opsi B.`,
  },

  // --- Soal 20: Sifat Partikel Wujud Zat (Gas) ---
  {
    id: 120,
    question: `Perbedaan utama antara partikel zat padat, zat cair, dan zat gas terletak pada jarak dan gaya tarik antarpartikelnya. Karakteristik partikel zat gas yang benar adalah ....`,
    questionType: 'single',
    options: [
      'letaknya sangat rapat dan gaya tarik antarpartikel sangat kuat',
      'letaknya agak renggang dan gaya tarik antarpartikel lemah',
      'letaknya sangat renggang dan gaya tarik antarpartikel sangat lemah',
      'letaknya tidak teratur dan gaya tarik antarpartikel sangat kuat',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Tabel Karakteristik Tiga Wujud Zat Step-by-Step:

1. Zat Padat (Contoh: Balok Kayu, Besi, Es Batu):
   - Jarak antarpartikel: Sangat rapat dan teratur rapi.
   - Gaya tarik antarpartikel: Sangat kuat (mengikat kuat).
   - Gerak partikel: Tidak bebas bergerak, hanya bergetar di tempat.
   - Sifat: Bentuk dan volumenya selalu tetap.

2. Zat Cair (Contoh: Air, Minyak Goreng, Sirup):
   - Jarak antarpartikel: Agak renggang dan susunannya kurang teratur.
   - Gaya tarik antarpartikel: Agak lemah (masih mampu menahan cairan bersama).
   - Gerak partikel: Cukup bebas bergerak dan dapat berpindah/bergeser.
   - Sifat: Volumenya tetap, tetapi bentuknya selalu berubah menyesuaikan bentuk wadahnya.

3. Zat Gas (Contoh: Udara di Dalam Balon, Asap, Uap Air):
   - Jarak antarpartikel: SANGAT BERJAUHAN (sangat renggang).
   - Gaya tarik antarpartikel: SANGAT LEMAH (hampir tidak ada gaya tarik).
   - Gerak partikel: Bergerak sangat bebas, acak, dan cepat ke segala arah menabrak dinding wadah.
   - Sifat: Bentuk dan volumenya selalu berubah memenuhi seluruh ruang wadahnya.

Kesimpulan: Karakteristik partikel zat gas yang benar adalah letaknya sangat renggang dan gaya tarik antarpartikel sangat lemah. Pilihan yang tepat adalah Opsi C.`,
  },

  // --- Soal 21: Gangguan Sistem Pencernaan (Gastritis) ---
  {
    id: 121,
    question: `Seseorang mengalami gejala nyeri pada ulu hati, mual, dan kembung akibat peningkatan produksi asam lambung (HCl) yang berlebihan. Gangguan pada sistem pencernaan ini dikenal dengan istilah ....`,
    questionType: 'single',
    options: [
      'Konstipasi',
      'Diare',
      'Gastritis (Maag)',
      'Apenditis',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Pembahasan Penyakit & Gangguan Sistem Pencernaan:

1. Gastritis (Maag):
   - Definisi: Peradangan atau iritasi pada lapisan mukosa (dinding) lambung.
   - Penyebab: Produksi asam lambung (asam klorida / HCl) yang berlebihan, pola makan tidak teratur, stres pikiran, makanan pedas/asam, atau infeksi bakteri Helicobacter pylori.
   - Gejala khas: Nyeri perih melilit di ulu hati, perut kembung begah, mual, hingga muntah.

2. Mari Pelajari Istilah Penyakit Lainnya:
   - Konstipasi (Sembelit): Kondisi susah buang air besar karena feses mengeras dan kering. Terjadi karena usus besar menyerap air secara berlebihan akibat kurang makan serat atau kurang minum air.
   - Diare: Gangguan buang air besar yang encer/cair dan sering. Terjadi karena infeksi bakteri/racun yang menyebabkan dinding usus teriritasi sehingga gerakan peristaltik meningkat dan air tidak sempat diserap.
   - Apendisitis (Radang Usus Buntu): Peradangan parah pada umbai cacing (apendiks) akibat tersumbat kotoran yang mengeras dan terinfeksi bakteri, menimbulkan rasa sakit hebat di perut kanan bawah.

Kesimpulan: Gangguan akibat kelebihan asam lambung dengan gejala nyeri ulu hati dan mual adalah Gastritis (Maag). Pilihan yang benar adalah Opsi C.`,
  },

  // --- Soal 22: Energi Listrik (Wh) ---
  {
    id: 122,
    question: `Sebuah lampu pijar bertuliskan 220V/40W dihubungkan pada sumber tegangan yang sesuai selama 2 jam. Energi listrik yang digunakan oleh lampu tersebut adalah ....`,
    questionType: 'single',
    options: [
      '80 Wh',
      '288 Wh',
      '440 Wh',
      '880 Wh',
    ],
    correctAnswer: 0, // A
    isHots: false,
    explanation: `Perhitungan Energi Listrik Step-by-Step:

1. Membaca Label Lampu:
   - "220V / 40W" artinya jika lampu dipasang pada tegangan listrik PLN 220 Volt, lampu akan menyerap daya listrik (P) sebesar 40 Watt.
   - Daya listrik (P) = 40 Watt
   - Lama pemakaian waktu (t) = 2 jam (hours / h)

2. Rumus Energi Listrik:
   W = P × t
   - P = Daya dalam satuan Watt (W)
   - t = Waktu dalam satuan jam (hour / h)
   - W = Energi dalam satuan Watt-hour (Wh)

3. Langkah Menghitung:
   W = 40 Watt × 2 jam
   W = 80 Wh

4. Catatan Tambahan (Konversi ke Joule jika Ditanyakan):
   Jika soal menanyakan satuan standar internasional (Joule):
   1 jam = 3.600 detik
   W = 40 W × (2 × 3.600 s) = 40 × 7.200 = 288.000 Joule = 288 kJ.
   Karena seluruh opsi jawaban menggunakan satuan "Wh", maka jawabannya langsung 80 Wh.

Kesimpulan: Energi listrik yang digunakan oleh lampu tersebut adalah 80 Wh. Pilihan yang tepat adalah Opsi A.`,
  },

  // --- Soal 23: Istilah Genetika (Fenotipe vs Genotipe) ---
  {
    id: 123,
    question: `Dalam genetika, sifat atau karakteristik yang tampak secara fisik pada suatu organisme (seperti warna bunga merah atau bentuk biji bulat) disebut ....`,
    questionType: 'single',
    options: [
      'Genotipe',
      'Fenotipe',
      'Homozigot',
      'Heterozigot',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Istilah Penting Genetika & Pewarisan Sifat:

1. Tips Mengingat "Fenotipe" vs "Genotipe":
   - FENOTIPE (ingat huruf F = "FISIK"): Sifat lahiriah organisme yang DAPAT DIAMATI langsung oleh pancaindra, seperti bentuk biji bulat/keriput, warna bunga merah/putih, rasa buah manis/asam, warna kulit, bentuk rambut lurus/keriting, atau tinggi badan.
   - GENOTIPE (ingat huruf G = "GEN"): Susunan atau komposisi gen yang menentukan sifat dan TIDAK DAPAT DILIHAT langsung. Genotipe dituliskan dengan simbol huruf berpasangan, seperti BB, Bb, atau bb.

2. Istilah Pasangan Gen Lainnya:
   - Homozigot: Pasangan gen yang memiliki alel yang SAMA/IDENTIK.
     * Homozigot Dominan: BB, MM
     * Homozigot Resesif: bb, mm
   - Heterozigot: Pasangan gen yang memiliki alel yang BERBEDA/TIDAK SAMA, misalnya Bb atau Mm.

Kesimpulan: Sifat yang tampak secara fisik dan dapat diamati disebut Fenotipe. Pilihan yang benar adalah Opsi B.`,
  },

  // --- Soal 24: Ekologi Lingkungan (Biomagnifikasi) ---
  {
    id: 124,
    question: `Pembuangan limbah industri yang mengandung logam berat langsung ke sungai tanpa diolah terlebih dahulu dapat mengakibatkan terjadinya peristiwa biomagnifikasi, yaitu ....`,
    questionType: 'single',
    options: [
      'penurunan kadar oksigen terlarut di dalam air secara drastis',
      'peningkatan populasi tanaman air seperti enceng gondok secara cepat',
      'akumulasi zat pencemar yang semakin meningkat pada tingkatan trofik yang lebih tinggi',
      'pengendapan bahan organik di dasar sungai yang menyebabkan pendangkalan',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Memahami Konsep Biomagnifikasi (Pemekatan Hayati):

1. Apa Arti Kata Biomagnifikasi?
   - "Bio" artinya makhluk hidup, "Magnifikasi" artinya perbesaran atau pelipatgandaan.
   - Jadi biomagnifikasi adalah peristiwa pelipatgandaan kadar racun kimia di dalam tubuh makhluk hidup.

2. Bagaimana Peristiwa Ini Terjadi?
   - Logam berat beracun (seperti merkuri/raksa, timbal, kadmium) atau pestisida sintetis (DDT) adalah zat yang TIDAK BISA DIURAIKAN dan TIDAK DAPAT DIKELUARKAN oleh metabolisme tubuh.
   - Logam berat di sungai diserap plankton dalam kadar sangat kecil (misal 1 ppm).
   - Satu ikan kecil memakan ribuan plankton, sehingga kadar racun di tubuh ikan kecil berlipat ganda (misal jadi 50 ppm).
   - Satu ikan besar memakan puluhan ikan kecil, sehingga kadar racun makin pekat (misal jadi 500 ppm).
   - Manusia atau burung pemangsa puncak memakan ikan-ikan besar tersebut. Akibatnya, pemangsa di TINGKATAN TROFIK TERTINGGI akan menimbun konsentrasi racun yang paling dahsyat dan mematikan!

3. Mengapa Opsi Lain Bukan Biomagnifikasi?
   - Opsi A dan B adalah dampak dari fenomena Eutrofikasi (peledakan tanaman eceng gondok akibat limbah pupuk fosfat/nitrogen yang memicu kematian biota air karena kehabisan oksigen).
   - Opsi D adalah peristiwa sedimentasi atau pendangkalan sungai alami.

Kesimpulan: Biomagnifikasi adalah akumulasi zat pencemar yang konsentrasinya semakin meningkat pada tingkatan trofik yang lebih tinggi. Pilihan yang tepat adalah Opsi C.`,
  },

  // --- Soal 25: Gelombang Transversal vs Longitudinal ---
  {
    id: 125,
    question: `Perhatikan ciri-ciri gelombang berikut!
(1) Arah rambatnya tegak lurus dengan arah getarnya.
(2) Terdiri dari rapatan dan renggangan.
(3) Contohnya adalah gelombang cahaya.
(4) Contohnya adalah gelombang bunyi di udara.

Karakteristik yang tepat untuk gelombang transversal ditunjukkan oleh nomor ....`,
    questionType: 'single',
    options: [
      '(1) dan (3)',
      '(1) dan (4)',
      '(2) dan (3)',
      '(2) dan (4)',
    ],
    correctAnswer: 0, // A: (1) dan (3)
    isHots: false,
    explanation: `Perbedaan Gelombang Transversal dan Longitudinal Step-by-Step:

1. Gelombang Transversal:
   - Arah getar dan rambat: Arah rambatnya TEGAK LURUS (membentuk sudut 90°) terhadap arah getarnya (getaran naik-turun, rambatan maju ke depan).
   - Bentuk gelombang: Memiliki bukit gelombang (puncak) dan lembah gelombang.
   - Contoh nyata: Gelombang cahaya, gelombang pada tali yang dihentak ke atas-bawah, gelombang permukaan air laut, dan gelombang elektromagnetik (radio, mikro, sinar-X).
   - Berdasarkan data soal: Ciri nomor (1) dan (3) adalah sifat Gelombang Transversal.

2. Gelombang Longitudinal:
   - Arah getar dan rambat: Arah rambatnya SEJAJAR (searah) dengan arah getarnya (getaran maju-mundur searah rambatan).
   - Bentuk gelombang: Terdiri atas susunan rapatan dan renggangan.
   - Contoh nyata: Gelombang bunyi (suara manusia atau musik di udara) dan gelombang pada pegas / slinky yang didorong-tarik.
   - Berdasarkan data soal: Ciri nomor (2) dan (4) adalah sifat Gelombang Longitudinal.

3. Kesimpulan:
   Ciri-ciri yang tepat untuk gelombang transversal adalah nomor (1) dan (3).
   Maka pilihan jawaban yang paling tepat adalah Opsi A.`,
  },
];
