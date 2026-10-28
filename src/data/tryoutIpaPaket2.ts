import { Question } from '../types';

/**
 * Bank Soal Try Out TKA SMP Resmi - IPA Paket 2 (ipa_p2)
 * 25 Soal CBT Model Benar / Salah (True / False) Komprehensif
 * Dilengkapi Evaluasi Kunci Jawaban & Pembahasan Mendalam (Langkah Step-by-Step Ramah Siswa)
 */
export const TRYOUT_IPA_PAKET_2: Question[] = [
  // --- Soal 1: Perubahan Kimia (Perkaratan Besi) ---
  {
    id: 201,
    question: `Pernyataan:
Perkaratan pada besi merupakan contoh perubahan kimia karena menghasilkan zat baru yang sifat kimianya berbeda dari zat asalnya dan tidak dapat dengan mudah dikembalikan ke bentuk semula.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Konsep Dasar Perubahan Kimia vs Fisika:

1. Cara Mengetahui Perubahan Kimia:
   Sebuah peristiwa digolongkan sebagai perubahan kimia jika memenuhi 3 syarat utama:
   - Terbentuk zat baru yang susunan molekulnya berbeda.
   - Sifat zat yang baru berbeda jauh dari zat asalnya.
   - Bersifat permanen (irreversible / tidak bisa kembali ke bentuk asal dengan cara fisik sederhana).

2. Bedah Peristiwa Perkaratan Besi:
   - Besi mula-mula adalah logam murni (Fe) yang mengilap, kuat, dan menghantarkan listrik dengan baik.
   - Ketika terkena air hujan (H₂O) dan udara beroksigen (O₂), besi mengalami reaksi oksidasi lambat membentuk senyawa baru bernama karat besi (Fe₂O₃·xH₂O).
   - Karat besi ini rapuh, berwarna cokelat kemerahan, kusam, dan mudah hancur menjadi bubuk. Karat ini tidak dapat disulap kembali menjadi lempeng besi utuh hanya dengan dicuci atau dipanaskan biasa.

3. Kesimpulan:
   Pernyataan pada soal sepenuhnya TEPAT dan SESUAI dengan prinsip ilmu kimia.
   Oleh karena itu, jawaban yang benar adalah BENAR.`,
  },

  // --- Soal 2: Anomali Air ---
  {
    id: 202,
    question: `Pernyataan:
Ketika air murni dipanaskan dari suhu 0°C hingga mencapai 4°C, volumenya akan mengalami pemuaian (bertambah besar). Fenomena unik ini dikenal sebagai anomali air.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 1, // SALAH
    isHots: false,
    explanation: `Memahami Konsep "Anomali Air" (Sifat Aneh Air):

1. Aturan Umum Benda di Alam Semesta:
   Secara umum, semua zat di alam jika DIPANASKAN akan MEMUAI (volumenya membesar) dan jika DIDINGINKAN akan MENYUSUT (volumenya mengecil).

2. Keistimewaan Air (Suhu 0°C sampai 4°C):
   - Air memiliki sifat khusus dan "melawan arus" yang disebut Anomali Air.
   - Ketika air dingin bersuhu 0°C dipanaskan naik ke 4°C, air TIDAK MEMUAI, melainkan JUSTRU MENYUSUT (volumenya mengecil/berkurang)!
   - Pada suhu tepat 4°C, volume air berada pada titik PALING KECIL (minimum), yang artinya massa jenis (kerapatan) air mencapai titik MAKSIMUM (paling padat).
   - Baru setelah suhunya melewati 4°C (misal 5°C, 10°C, dst.), air akan memuai secara normal seperti zat cair lainnya.

3. Mengapa Pernyataan Soal Salah?
   Pernyataan pada soal menyatakan bahwa dari 0°C ke 4°C air "mengalami pemuaian (bertambah besar)", padahal faktanya air MENYUSUT (volumenya mengecil).

4. Manfaat Anomali Air bagi Kehidupan:
   Karena air pada 4°C paling padat dan berat, air bersuhu 4°C akan tenggelam ke dasar danau di musim dingin. Akibatnya, danau di kutub hanya membeku di permukaan atasnya saja, sementara bagian dasarnya tetap berupa air cair bersuhu 4°C sehingga ikan dan tumbuhan air tetap bisa bertahan hidup di bawah lapisan es!

Kesimpulan: Pernyataan tersebut KELIRU. Jawaban yang tepat adalah SALAH.`,
  },

  // --- Soal 3: Hukum I Newton (Kelembaman) ---
  {
    id: 203,
    question: `Pernyataan:
Berdasarkan Hukum I Newton, jika resultan gaya yang bekerja pada suatu benda sama dengan nol, maka benda yang awalnya bergerak lurus beraturan akan langsung berhenti seketika.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 1, // SALAH
    isHots: false,
    explanation: `Konsep Dasar Hukum I Newton (Hukum Kelembaman / Inersia):

1. Bunyi Asli Hukum I Newton:
   "Jika resultan gaya yang bekerja pada suatu benda sama dengan nol (ΣF = 0), maka:
   - Benda yang awalnya DIAM akan TETAP DIAM.
   - Benda yang awalnya BERGERAK LURUS BERATURAN (GLB) akan TETAP BERGERAK LURUS BERATURAN dengan kecepatan tetap/konstan!"

2. Mengapa Benda yang Bergerak Tidak Berhenti?
   - Setiap benda memiliki sifat inersia (kelembaman), yaitu sifat alami benda yang "mempertahankan keadaannya".
   - Jika tidak ada gaya gesek atau gaya dorong lain yang mengganggunya (ΣF = 0), benda yang sedang meluncur tidak punya alasan untuk berhenti. Ia akan terus meluncur lurus selamanya dengan kecepatan yang sama persis!
   - Contoh nyata: Wahana antariksa Voyager yang meluncur di ruang hampa antariksa tidak perlu menyalakan mesin terus-menerus, ia tetap melesat maju dengan kecepatan stabil karena tidak ada gaya gesekan udara.

3. Letak Kesalahan Pernyataan:
   Soal menyatakan benda "akan langsung berhenti seketika". Benda hanya akan berhenti jika ada gaya luar (seperti rem atau gesekan lantai) yang menahannya. Jika resultan gaya nol, benda TIDAK BERHENTI, melainkan tetap melaju dengan kecepatan konstan.

Kesimpulan: Pernyataan tersebut KELIRU. Jawaban yang tepat adalah SALAH.`,
  },

  // --- Soal 4: Klasifikasi Fungi (Jamur) ---
  {
    id: 204,
    question: `Pernyataan:
Jamur (Fungi) dikelompokkan ke dalam kerajaan tumbuhan (Plantae) karena jamur memiliki dinding sel dan tidak memiliki kemampuan untuk berpindah tempat secara aktif.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 1, // SALAH
    isHots: false,
    explanation: `Sistem Klasifikasi 5 Kingdom Whittaker:

1. Mengapa Dulu Jamur Dikira Tumbuhan?
   Pada zaman dahulu, orang mengira jamur adalah tumbuhan karena tubuhnya menempel di tanah/kayu dan tidak bisa berjalan ke sana kemari. Namun, ilmu biologi modern MEMISAHKAN jamur ke dalam kerajaannya sendiri, yaitu Kingdom Fungi.

2. Alasan Utama Fungi DIPISAHKAN dari Plantae:
   - Jamur TIDAK MEMILIKI KLOROFIL: Jamur tidak bisa berfotosintesis untuk membuat makanannya sendiri. Jamur bersifat heterotrof (saprofit/parasit), yaitu menyerap nutrisi dari sisa makhluk hidup lain yang membusuk. Sebaliknya, semua tumbuhan sejati bersifat autotrof (punya klorofil dan bisa fotosintesis).
   - Bahan Dinding Sel Berbeda: Dinding sel jamur tersusun atas zat KITIN (senyawa keras yang sama seperti pada kulit udang dan kepiting), sedangkan dinding sel tumbuhan tersusun atas SELULOSA.
   - Penyimpanan Cadangan Makanan: Jamur menyimpan cadangan makanan dalam bentuk glikogen (seperti hewan), bukan pati/amilum seperti tumbuhan.

3. Kesimpulan:
   Jamur BUKAN bagian dari Kingdom Plantae, melainkan memiliki kingdom tersendiri yaitu Kingdom Fungi.
   Oleh karena itu, pernyataan tersebut adalah SALAH.`,
  },

  // --- Soal 5: Biomagnifikasi dalam Ekosistem ---
  {
    id: 205,
    question: `Pernyataan:
Dalam suatu rantai makanan di ekosistem yang tercemar, akumulasi bahan pencemar berbahaya (seperti logam berat) akan memiliki konsentrasi paling tinggi pada organisme yang menduduki tingkat trofik terendah (produsen).

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 1, // SALAH
    isHots: false,
    explanation: `Konsep Biomagnifikasi (Pemekatan Hayati) Step-by-Step:

1. Apa itu Logam Berat dan Pestisida Sintetis?
   Bahan pencemar berbahaya seperti merkuri (raksa), timbal, dan pestisida DDT bersifat non-biodegradable (tidak bisa diuraikan oleh bakteri dan tidak bisa dikeluarkan melalui kencing/keringat hewan). Akibatnya racun ini menumpuk permanen di dalam jaringan lemak tubuh makhluk hidup.

2. Alur Pelipatgandaan Racun pada Rantai Makanan:
   - Produsen (Fitoplankton / Rumput air): Menyerap racun dalam jumlah sangat kecil dari air, misalnya 0,01 ppm (tingkat terendah).
   - Konsumen I (Zooplankton / Ikan kecil): Memakan ribuan fitoplankton setiap hari, sehingga racun menumpuk menjadi 2 ppm.
   - Konsumen II (Ikan sedang): Memakan ratusan ikan kecil, sehingga kadar racun berlipat ganda menjadi 20 ppm.
   - Konsumen Puncak (Burung elang laut / Manusia): Memakan banyak ikan sedang, sehingga kadar racun melonjak dahsyat hingga 200 ppm!

3. Letak Kesalahan Pernyataan Soal:
   Pernyataan soal menyebut racun paling tinggi pada "tingkat trofik terendah (produsen)".
   Padahal fakta biologisnya:
   - Konsentrasi racun PALING RENDAH ada pada tingkat trofik terendah (produsen).
   - Konsentrasi racun PALING TINGGI (paling pekat) justru berada pada TINGKAT TROFIK TERTINGGI (konsumen puncak).

Kesimpulan: Pernyataan tersebut KELIRU. Jawaban yang tepat adalah SALAH.`,
  },

  // --- Soal 6: Pasang Perbani (Neap Tide) ---
  {
    id: 206,
    question: `Pernyataan:
Pasang surut air laut yang menghasilkan perbedaan tinggi air laut minimum (pasang perbani/neap tide) terjadi saat posisi Bulan, Bumi, dan Matahari membentuk sudut tegak lurus (90°).

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Mengenal Dua Jenis Pasang Surut Air Laut:

1. Pasang Purnama (Spring Tide) — Pasang Maksimum:
   - Terjadi saat posisi Matahari, Bumi, dan Bulan berada dalam SATU GARIS LURUS (sudut 180°).
   - Waktu terjadinya: Saat fase Bulan Baru dan Bulan Purnama.
   - Dampak: Gaya gravitasi Bulan dan Matahari saling memperkuat, menghasilkan pasang naik tertinggi dan surut terendah (perbedaan pasang maksimum).

2. Pasang Perbani (Neap Tide) — Pasang Minimum:
   - Terjadi saat posisi Bulan, Bumi, dan Matahari saling TEGAK LURUS membentuk sudut siku-siku 90°.
   - Waktu terjadinya: Saat fase Bulan kuartir pertama (fase setengah terang) dan kuartir ketiga/akhir.
   - Mengapa Pasang Minimum? Gaya gravitasi tarikan Bulan dan tarikan Matahari saling berlawanan arah tegak lurus, sehingga saling melemahkan gaya pasang satu sama lain.
   - Dampak: Air laut pasang tidak terlalu tinggi, dan saat surut air tidak terlalu rendah (selisih tinggi air laut paling kecil/minimum).

3. Kesimpulan:
   Pernyataan pada soal sepenuhnya TEPAT dan ILMIAH.
   Jawaban yang benar adalah BENAR.`,
  },

  // --- Soal 7: Fungsi Mitokondria ---
  {
    id: 207,
    question: `Pernyataan:
Mitokondria merupakan organel sel yang berfungsi sebagai tempat berlangsungnya respirasi seluler untuk menghasilkan energi dalam bentuk ATP yang digunakan untuk aktivitas sel.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Peran Vital Mitokondria dalam Sel:

1. Julukan Khas:
   Mitokondria dijuluki sebagai "The Powerhouse of the Cell" (Pabrik Pembangkit Energi Sel).

2. Proses Respirasi Seluler:
   - Di dalam mitokondria terjadi pembakaran sari makanan (terutama molekul glukosa) dengan bantuan oksigen yang kita hirup saat bernapas.
   - Reaksi kimia respirasi seluler:
     C₆H₁₂O₆ (Glukosa) + 6 O₂ (Oksigen) ➜ 6 CO₂ + 6 H₂O + ENERGI (ATP).
   - Energi yang dihasilkan disimpan dalam bentuk molekul berenergi tinggi yang disebut ATP (Adenosina Trifosfat).

3. Kegunaan Energi ATP:
   Molekul ATP inilah "baterai" yang digunakan oleh seluruh sel tubuh manusia dan hewan untuk membelah sel, memompa jantung, menggerakkan otot saat berjalan, berpikir, dan mempertahankan suhu tubuh. Sel otot dan sel jantung memiliki ribuan mitokondria karena memerlukan energi paling banyak.

Kesimpulan: Pernyataan pada soal 100% BENAR. Jawaban yang tepat adalah BENAR.`,
  },

  // --- Soal 8: Hukum Pascal ---
  {
    id: 208,
    question: `Pernyataan:
Berdasarkan Hukum Pascal, tekanan yang diberikan pada zat cair di dalam ruang tertutup akan diteruskan oleh zat cair tersebut ke segala arah dengan besar yang sama.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Konsep Dasar Hukum Pascal:

1. Penemu & Bunyi Hukum Pascal:
   Prinsip ini ditemukan oleh ilmuwan Prancis bernama Blaise Pascal:
   "Tekanan yang diberikan pada zat cair di dalam suatu wadah tertutup akan diteruskan oleh zat cair tersebut ke segala arah dengan nilai sama besar tanpa berkurang sedikit pun."

2. Rumus Matematis Hukum Pascal:
   P₁ = P₂
   F₁ / A₁ = F₂ / A₂
   - F = Gaya tekan (Newton)
   - A = Luas penampang pipa (m²)

3. Penerapan Hebat di Kehidupan Sehari-hari:
   - Dongkrak Hidrolik di tempat cuci mobil: Hanya dengan menekan tuas kecil berkekuatan tangan manusia (penampang pipa sempit), tekanan diteruskan ke pipa besar di bawah mobil sehingga mampu mengangkat mobil seberat 2 ton dengan enteng!
   - Rem Hidrolik pada motor dan mobil: Injakan ringan kaki pengemudi pada pedal rem diteruskan oleh minyak rem untuk menjepit piringan cakram roda berputar kencang.

Kesimpulan: Kalimat pada soal adalah bunyi resmi dari Hukum Pascal. Jawaban yang benar adalah BENAR.`,
  },

  // --- Soal 9: Enzim Amilase (Ptialin) ---
  {
    id: 209,
    question: `Pernyataan:
Enzim amilase (ptialin) yang diproduksi oleh kelenjar ludah di dalam rongga mulut berfungsi untuk memecah protein menjadi asam amino secara kimiawi.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 1, // SALAH
    isHots: false,
    explanation: `Memahami Fungsi Enzim di Mulut Step-by-Step:

1. Apa Fungsi Enzim Ptialin (Amilase)?
   - Amilase berasal dari kata "amilum" (zat tepung / karbohidrat).
   - Kelenjar ludah di mulut memproduksi enzim amilase (ptialin) yang bertugas memecah karbohidrat kompleks (amilum/tepung) menjadi molekul gula sederhana (maltosa dan glukosa).
   - Bukti nyata sederhana: Jika kamu mengunyah nasi putih tawar lama-lama di dalam mulut tanpa lauk, lama-kelamaan nasi tersebut akan terasa manis. Rasa manis itu muncul karena zat tepung nasi telah dipecah oleh enzim ptialin menjadi molekul gula!

2. Siapa yang Memecah Protein?
   - Protein TIDAK dicerna di dalam mulut.
   - Enzim yang mencerna protein adalah:
     * Pepsin (di lambung): Memecah protein menjadi pepton.
     * Tripsin (dihasilkan pankreas, bekerja di usus halus): Memecah pepton menjadi asam amino.
     * Peptidase (di usus halus): Menyelesaikan pemecahan menjadi asam amino murni.

3. Letak Kesalahan Pernyataan:
   Soal menyatakan amilase berfungsi memecah "protein menjadi asam amino", padahal amilase mencerna zat tepung/amilum menjadi gula.

Kesimpulan: Pernyataan tersebut KELIRU. Jawaban yang tepat adalah SALAH.`,
  },

  // --- Soal 10: Konsep Usaha dalam Fisika ---
  {
    id: 210,
    question: `Pernyataan:
Seseorang yang mendorong tembok beton yang kokoh hingga kelelahan dan berkeringat dikatakan tidak melakukan usaha (W = 0) secara fisika karena tembok tersebut tidak mengalami perpindahan posisi sama sekali.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Beda "Usaha" Sehari-hari vs "Usaha" dalam Fisika:

1. Bahasa Sehari-hari vs Bahasa Fisika:
   - Dalam percakapan sehari-hari, kita menganggap "usaha" adalah jerih payah, lelah, dan keluar keringat.
   - Namun dalam ILMU FISIKA, definisi usaha (Work / W) sangat ketat dan mengikat secara matematis!

2. Rumus Usaha dalam Fisika:
   W = F × s
   - W = Usaha (Joule)
   - F = Gaya dorong atau tarik (Newton)
   - s = Perpindahan posisi benda (meter)

3. Syarat Wajib Terjadinya Usaha:
   Agar ada nilai usaha (W > 0), benda WAJIB MENGALAMI PERPINDAHAN TEMPAT (s > 0).
   - Pada kasus mendorong tembok beton:
     Gaya dorong seseorang sangat besar (misal F = 500 N), tetapi tembok sama sekali tidak bergeser atau bergeming (s = 0 meter).
   - Hitungan Fisika:
     W = 500 N × 0 m = 0 Joule!

4. Kesimpulan Fisika:
   Meskipun orang tersebut mengeluarkan energi biologis dari ototnya hingga lelah berpeluh, secara fisika ia TIDAK MELAKUKAN USAHA (W = 0) karena perpindahan s = 0.

Kesimpulan: Pernyataan pada soal sepenuhnya BENAR. Jawaban yang tepat adalah BENAR.`,
  },

  // --- Soal 11: Karakteristik Gelombang Bunyi ---
  {
    id: 211,
    question: `Pernyataan:
Gelombang bunyi dikategorikan sebagai gelombang transversal karena arah rambat gelombangnya tegak lurus terhadap arah getaran medium perantaranya.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 1, // SALAH
    isHots: false,
    explanation: `Klasifikasi Gelombang Berdasarkan Arah Rambat dan Arah Getar:

1. Gelombang Transversal:
   - Arah rambatnya TEGAK LURUS (90°) dengan arah getarnya.
   - Berbentuk bukit dan lembah gelombang.
   - Contoh: Gelombang cahaya, gelombang permukaan air, gelombang tali yang digerakkan naik-turun.

2. Gelombang Longitudinal:
   - Arah rambatnya SEJAJAR (searah) dengan arah getarnya.
   - Berbentuk rangkaian RAPATAN dan RENGGANGAN molekul medium.
   - Contoh utama: GELOMBANG BUNYI di udara dan gelombang pada pegas/slinky yang ditekan-dorong.

3. Bagaimana Bunyi Merambat di Udara?
   - Saat pita suara kita bergetar atau membran speaker bergetar maju-mundur, partikel udara di depannya akan ikut terdorong maju-mundur (bergetar searah rambatan bunyi).
   - Getaran ini memampatkan udara (rapatan) dan meregangkan udara (renggangan) hingga mencapai gendang telinga pendengar.
   - Karena arah getarannya sejajar arah rambat, gelombang bunyi adalah GELOMBANG LONGITUDINAL, bukan transversal!

Kesimpulan: Pernyataan bahwa bunyi adalah gelombang transversal adalah KELIRU. Jawaban yang tepat adalah SALAH.`,
  },

  // --- Soal 12: Senyawa vs Campuran (Air Sirup) ---
  {
    id: 212,
    question: `Pernyataan:
Air sirup manis merupakan contoh dari senyawa kimia karena terdiri atas air, gula, dan pewarna makanan yang telah menyatu secara merata (homogen).

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 1, // SALAH
    isHots: false,
    explanation: `Perbedaan Zat Tunggal (Senyawa) vs Campuran:

1. Apa itu Senyawa Kimia?
   - Senyawa terbentuk dari gabungan dua atau lebih unsur kimia melalui REAKSI KIMIA dengan perbandingan massa tertentu dan tetap.
   - Sifat zat asalnya hilang total dan berganti menjadi zat baru.
   - Contoh senyawa: Air murni (H₂O), Garam dapur (NaCl), Gas karbon dioksida (CO₂).

2. Apa itu Campuran (Larutan Homogen)?
   - Campuran terbentuk dari penggabungan dua zat atau lebih TANPA melalui reaksi kimia.
   - Masing-masing zat penyusunnya MASIH MEMPERTAHANKAN SIFAT ASLINYA.
   - Perbandingan komponennya bebas (tidak perlu takaran molekuler pas).
   - Dapat dipisahkan kembali melalui proses fisika sederhana (seperti penguapan/evaporasi atau penyulingan).

3. Mengapa Air Sirup Bukan Senyawa?
   - Air sirup manis adalah CAMPURAN HOMOGEN (disebut juga Larutan).
   - Air tetap berwujud air, gula tetap membawa rasa manisnya, dan pewarna tetap berwarna merah/hijau tanpa membentuk ikatan molekul senyawa baru.
   - Jika air sirup dipanaskan dan diuapkan airnya sampai kering, kristal gula akan tertinggal kembali di dasar wadah!

Kesimpulan: Air sirup adalah campuran homogen (larutan), bukan senyawa. Pernyataan tersebut SALAH.`,
  },

  // --- Soal 13: Lapisan Litosfer Bumi ---
  {
    id: 213,
    question: `Pernyataan:
Litosfer merupakan lapisan terluar bumi yang terdiri atas kerak bumi dan bagian atas mantel bumi yang bersifat kaku, padat, dan berbentuk lempengan.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Memahami Lapisan Litosfer Bumi:

1. Asal Kata Litosfer:
   Berasal dari bahasa Yunani:
   - "Lithos" artinya batu / batuan.
   - "Sphaira" artinya bulatan / lapisan.
   Jadi, Litosfer secara harfiah adalah lapisan batuan padat yang menyelimuti bola Bumi.

2. Komponen Penyusun Litosfer:
   Litosfer memiliki ketebalan sekitar 100 km dan tersusun atas dua bagian yang menyatu:
   - Kerak bumi (crust): Baik kerak benua maupun kerak samudra.
   - Bagian paling atas dari mantel bumi (uppermost mantle): Bagian mantel yang dingin, padat, dan kaku.

3. Karakteristik Litosfer:
   - Bersifat kaku, padat, dan getas (mudah patah jika tertekan gaya kuat).
   - Lapisan litosfer ini tidak menyatu utuh seperti cangkang telur mulus, melainkan terpecah-pecah menjadi potongan-potongan raksasa yang disebut LEMPENG TEKTONIK (seperti lempeng Indo-Australia, Pasifik, Eurasia).
   - Lempeng-lempeng litosfer ini mengapung dan bergerak perlahan di atas lapisan astenosfer yang bersifat plastis dan panas.

Kesimpulan: Pernyataan pada soal tepat dan sesuai dengan ilmu geologi kebumian. Jawaban yang benar adalah BENAR.`,
  },

  // --- Soal 14: Tempat Terjadinya Fertilisasi ---
  {
    id: 214,
    question: `Pernyataan:
Proses fertilisasi atau pembuahan sel telur (ovum) oleh sel sperma pada sistem reproduksi manusia secara normal terjadi di dalam uterus (rahim).

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 1, // SALAH
    isHots: false,
    explanation: `Jalur Sistem Reproduksi Wanita Step-by-Step:

1. Tempat Pembuahan (Fertilisasi):
   - Fertilisasi adalah peleburan antara sel telur (ovum) dan sel sperma untuk membentuk zigot.
   - Tempat berlangsungnya fertilisasi secara normal adalah di dalam TUBA FALLOPI (saluran telur / oviduk), tepatnya di sepertiga bagian atas saluran tuba fallopi!

2. Lalu Apa Fungsi Uterus (Rahim)?
   - Uterus (rahim) BUKAN tempat bertemunya sel sperma dan sel telur.
   - Uterus adalah tempat IMPLANTASI (menempelnya zigot/embrio pada dinding endometrium) serta tempat bertumbuh dan berkembangnya janin selama masa kehamilan 9 bulan hingga siap dilahirkan.

3. Ringkasan Jalur Perjalanan:
   - Ovarium (Indung Telur): Tempat memproduksi sel telur (ovulasi).
   - Tuba Fallopi (Oviduk): Tempat FERTILISASI (pembuahan).
   - Uterus (Rahim): Tempat TUMBUH EMBRIO / JANIN.

Kesimpulan: Fertilisasi terjadi di tuba fallopi, bukan di uterus. Maka pernyataan tersebut adalah SALAH.`,
  },

  // --- Soal 15: Hukum Pewarisan Sifat Mendel (Monohibrid) ---
  {
    id: 215,
    question: `Pernyataan:
Jika tanaman kacang ercis berbiji bulat heterozigot (Bb) disilangkan dengan sesamanya (Bb), maka persentase keturunan yang memiliki fenotipe biji keriput (homozigot resesif bb) adalah sebesar 25%.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Perhitungan Persilangan Monohibrid Heterozigot Step-by-Step:

1. Induk yang Disilangkan:
   - Tanaman jantan berbiji bulat heterozigot (Bb)
   - Tanaman betina berbiji bulat heterozigot (Bb)
   - B = alel dominan sifat bulat
   - b = alel resesif sifat keriput

2. Gamet yang Dihasilkan:
   Masing-masing induk menghasilkan dua jenis gamet: B dan b (probabilitas masing-masing 50%).

3. Buat Papan Catur Persilangan (Punnett Square):
   -----------------------------------------
   | Gamet |        B        |        b        |
   -----------------------------------------
   |   B   |   BB (Bulat)    |   Bb (Bulat)    |
   -----------------------------------------
   |   b   |   Bb (Bulat)    |   bb (Keriput)  |
   -----------------------------------------

4. Analisis Genotipe dan Fenotipe Keturunan:
   - Total ada 4 kemungkinan kotak keturunan:
     * 1 kotak BB (Bulat) ➜ 1/4 × 100% = 25%
     * 2 kotak Bb (Bulat) ➜ 2/4 × 100% = 50%
     * 1 kotak bb (Keriput) ➜ 1/4 × 100% = 25%

5. Persentase Fenotipe Biji Keriput (bb):
   Keturunan yang berwujud keriput hanya yang bergenotipe bb murni.
   Persentasenya = 1 dari 4 bagian = 1/4 × 100% = 25%!

Kesimpulan: Pernyataan pada soal tepat secara matematis dan genetis. Jawaban yang benar adalah BENAR.`,
  },

  // --- Soal 16: Listrik Statis (Penggaris dan Rambut) ---
  {
    id: 216,
    question: `Pernyataan:
Ketika sebuah penggaris plastik digosokkan berulang kali pada rambut yang kering, penggaris tersebut menjadi bermuatan negatif karena elektron dari rambut berpindah menuju penggaris plastik.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Konsep Perpindahan Elektron pada Listrik Statis:

1. Sifat Bahan Menurut Deret Tribolistrik:
   - Rambut manusia yang kering memiliki sifat cenderung MUDAH MELEPAS ELEKTRON.
   - Plastik (seperti penggaris mika/plastik) memiliki sifat cenderung MUDAH MENERIK DAN MENERIMA ELEKTRON.

2. Apa yang Terjadi Saat Digosokkan?
   - Terjadi gesekan mekanik yang menyebabkan elektron-elektron bebas pada permukaan rambut terlepas.
   - Elektron-elektron dari rambut tersebut melompat dan berpindah menempel pada permukaan penggaris plastik.
   - Akibatnya:
     * Penggaris plastik KEDATANGAN / KELEBIHAN ELEKTRON ➜ Menjadi bermuatan LISTRIK NEGATIF.
     * Rambut manusia KEHILANGAN / KEKURANGAN ELEKTRON ➜ Menjadi bermuatan LISTRIK POSITIF.

3. Bukti Eksperimen Nyata:
   Penggaris plastik yang bermuatan negatif ini jika didekatkan ke serpihan kertas kecil-kecil yang netral, akan mampu menarik serpihan kertas tersebut menempel padanya karena induksi muatan listrik!

Kesimpulan: Pernyataan pada soal sepenuhnya BENAR. Jawaban yang tepat adalah BENAR.`,
  },

  // --- Soal 17: Rangkaian Listrik Paralel Rumah Tangga ---
  {
    id: 217,
    question: `Pernyataan:
Pada instalasi listrik rumah tangga yang disusun secara paralel, jika salah satu lampu padam atau rusak, maka lampu-lampu lainnya di ruangan lain juga akan otomatis ikut padam.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 1, // SALAH
    isHots: false,
    explanation: `Karakteristik Rangkaian Seri vs Paralel:

1. Rangkaian Seri (Satu Jalur Tunggal):
   - Arus listrik hanya punya satu kabel jalur tunggal yang dilewati berurutan.
   - Jika ada satu lampu yang putus atau dimatikan, seluruh aliran arus listrik terputus total.
   - Akibatnya: Semua lampu lain di rangkaian seri ikut padam! (Contoh: lampu hias pohon natal jadul).

2. Rangkaian Paralel (Bercabang Mandiri):
   - Setiap beban/lampu terpasang pada CABANG JALURNYA SENDIRI-SENDIRI yang terhubung langsung ke sumber tegangan PLN.
   - Jika lampu di kamar tidur putus atau dimatikan sakelarnya, arus pada cabang lampu ruang tamu, dapur, dan kamar mandi TIDAK TERPUTUS dan TETAP MENGALIR LANCAR.
   - Akibatnya: Lampu di ruangan lain TETAP MENYALA dengan terang benderang.

3. Mengapa Rumah Kita Memakai Rangkaian Paralel?
   Bayangkan jika rumah memakai rangkaian seri: saat lampu teras mati di siang hari, seluruh kulkas, TV, dan lampu kamar akan ikut mati padam! Oleh sebab itulah semua instalasi rumah wajib dirangkai secara paralel.

Kesimpulan: Pernyataan bahwa lampu lain ikut padam pada rangkaian paralel adalah KELIRU. Jawaban yang tepat adalah SALAH.`,
  },

  // --- Soal 18: Karakteristik Medan Magnet Batang ---
  {
    id: 218,
    question: `Pernyataan:
Bagian dari sebuah magnet batang yang memiliki gaya tarik atau gaya tolak magnetik paling kuat terletak pada bagian tengah-tengah magnet tersebut.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 1, // SALAH
    isHots: false,
    explanation: `Letak Kekuatan Medan Magnet pada Magnet Batang:

1. Percobaan Sederhana dengan Serbuk Besi:
   - Jika sebuah magnet batang ditaburi serbuk pasir besi halus di sekelilingnya, serbuk besi akan berkumpul paling banyak, paling lebat, dan paling menumpuk di KEDUA UJUNG MAGNET.
   - Sebaliknya, di bagian tengah-tengah magnet hampir tidak ada serbuk besi yang menempel!

2. Mengapa Demikian?
   - Garis-garis gaya magnet (medan magnet) keluar memancar dari Kutub Utara dan melengkung masuk kembali ke Kutub Selatan.
   - Kerapatan garis gaya magnet paling rapat dan padat terkonsentrasi di KUTUB-KUTUB MAGNET (ujung-ujung magnet). Kerapatan garis gaya magnet menunjukkan besarnya kekuatan gaya magnet.
   - Oleh sebab itu:
     * Gaya magnet PALING KUAT berada di kedua ujungnya (Kutub Utara dan Kutub Selatan).
     * Bagian tengah magnet adalah daerah netral yang memiliki gaya magnet PALING LEMAH (hampir tidak ada gaya tarik).

3. Letak Kesalahan Pernyataan:
   Soal menyatakan gaya magnet paling kuat terletak pada "bagian tengah-tengah magnet", padahal bagian tengah adalah daerah netral yang paling lemah.

Kesimpulan: Pernyataan tersebut KELIRU. Jawaban yang tepat adalah SALAH.`,
  },

  // --- Soal 19: Bioteknologi Konvensional vs Modern ---
  {
    id: 219,
    question: `Pernyataan:
Pembuatan tempe dengan memanfaatkan jamur Rhizopus oryzae merupakan contoh penerapan bioteknologi modern karena melibatkan proses rekayasa genetika tingkat tinggi.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 1, // SALAH
    isHots: false,
    explanation: `Perbedaan Bioteknologi Konvensional vs Modern:

1. Bioteknologi Konvensional (Tradisional):
   - Ciri khas: Memanfaatkan mikroorganisme (jamur atau bakteri) secara ALAMI dan LANGSUNG melalui proses fermentasi.
   - Tidak ada pengubahan susunan DNA atau rekayasa genetika di laboratorium canggih.
   - Peralatan dan metodenya sederhana, telah diwariskan turun-temurun sejak ribuan tahun lalu oleh nenek moyang.
   - Contoh produk: TEMPE (jamur Rhizopus oryzae), Tape (Saccharomyces cerevisiae), Kecap (Aspergillus wentii), Yoghurt (Lactobacillus bulgaricus), Keju.

2. Bioteknologi Modern:
   - Ciri khas: Melibatkan REKAYASA GENETIKA (penyisipan gen, manipulasi DNA rekombinan, fusi sel, kloning) menggunakan teknologi steril dan mikroskop canggih di laboratorium.
   - Contoh produk: Tanaman transgenik tahan hama (kapas Bt, jagung Bt), insulin sintetis manusia untuk penderita diabetes yang dibuat dengan bantuan bakteri E. coli rekayasa genetik, kloning domba Dolly.

3. Kesimpulan Kasus Pembuatan Tempe:
   Pembuatan tempe adalah contoh klasik bioteknologi KONVENSIONAL, bukan modern, dan sama sekali tidak melibatkan rekayasa genetika tingkat tinggi.

Kesimpulan: Pernyataan pada soal adalah SALAH.`,
  },

  // --- Soal 20: Hukum Ohm ---
  {
    id: 220,
    question: `Pernyataan:
Menurut Hukum Ohm, kuat arus listrik yang mengalir melalui suatu penghantar berbanding lurus dengan beda potensial (tegangan) dan berbanding terbalik dengan hambatan penghantar tersebut.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Konsep & Rumus Hukum Ohm Step-by-Step:

1. Siapa Penemu Hukum Ohm?
   Dirumuskan oleh fisikawan asal Jerman bernama Georg Simon Ohm.

2. Rumus Matematis Hukum Ohm:
   I = V / R
   - I = Kuat arus listrik (satuan Ampere / A)
   - V = Beda potensial / tegangan listrik (satuan Volt / V)
   - R = Hambatan kawat penghantar (satuan Ohm / Ω)

3. Analisis Hubungan Proporsional:
   - Kuat Arus (I) terhadap Beda Potensial (V):
     Karena V berada di posisi pembilang (atas), maka I BERBANDING LURUS dengan V. Jika tegangan baterai diperbesar (misal dari 1,5V jadi 9V), arus listrik yang mengalir akan semakin deras dan lampu menyala lebih terang.
   - Kuat Arus (I) terhadap Hambatan (R):
     Karena R berada di posisi penyebut (bawah), maka I BERBANDING TERBALIK dengan R. Semakin besar nilai hambatan kawat penghantar, arus listrik yang mampu mengalir akan semakin terhambat (mengecil).

4. Kesimpulan:
   Pernyataan pada soal merupakan definisi dan bunyi Hukum Ohm yang sangat akurat.
   Oleh karena itu, jawaban yang benar adalah BENAR.`,
  },

  // --- Soal 21: Variabel Tekanan Hidrostatis ---
  {
    id: 221,
    question: `Pernyataan:
Tekanan hidrostatis yang dialami oleh seorang penyelam di dalam air laut hanya dipengaruhi oleh kedalaman posisi penyelam dan massa jenis air laut, serta tidak dipengaruhi oleh luas permukaan tubuh penyelam tersebut.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Faktor-Faktor yang Memengaruhi Tekanan Hidrostatis:

1. Rumus Resmi Tekanan Hidrostatis:
   Ph = ρ × g × h
   - Ph = Tekanan hidrostatis (N/m² atau Pascal)
   - ρ (rho) = Massa jenis zat cair (kg/m³)
   - g = Percepatan gravitasi bumi (m/s²)
   - h = Kedalaman titik ukur dari permukaan air (meter)

2. Variabel Apa Saja yang Berpengaruh?
   Hanya ada 3 faktor:
   - Massa jenis zat cair (ρ): Menyelam di laut asin lebih menekan daripada di kolam renang tawar.
   - Percepatan gravitasi (g): Nilainya konstan di permukaan bumi (~9,8 atau 10 m/s²).
   - Kedalaman (h): Semakin dalam menyelam ke dasar, tekanan semakin besar.

3. Apakah Luas Permukaan Tubuh / Bentuk Benda Berpengaruh?
   SAMA SEKALI TIDAK!
   - Tekanan hidrostatis adalah besaran intensif (tekanan per satuan luas pada kedalaman tertentu).
   - Baik orang berbadan gemuk besar, anak kecil berbadan kurus, jarum tipis, maupun kapal selam raksasa, jika berada pada KEDALAMAN (h) YANG SAMA di laut yang sama, maka tekanan hidrostatis per meter persegi yang mereka rasakan adalah SAMA PERSIS!

Kesimpulan: Pernyataan pada soal sepenuhnya BENAR. Jawaban yang tepat adalah BENAR.`,
  },

  // --- Soal 22: Fungsi Hormon Progesteron ---
  {
    id: 222,
    question: `Pernyataan:
Hormon progesteron pada sistem reproduksi wanita diproduksi oleh korpus luteum dan berfungsi untuk menebalkan serta menjaga dinding rahim (endometrium) agar siap menerima implantasi sel telur yang telah dibuahi.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Siklus Hormon Reproduksi Wanita Step-by-Step:

1. Asal Usul Korpus Luteum:
   - Di ovarium, sel telur berkembang di dalam kantung kecil yang disebut folikel.
   - Saat sel telur matang dan keluar (peristiwa ovulasi), kantung sisa folikel yang ditinggalkan berubah wujud menjadi badan kuning yang disebut KORPUS LUTEUM.

2. Peran Hormon Progesteron:
   - Korpus luteum mulai memproduksi hormon PROGESTERON dalam jumlah besar.
   - Progesteron bertindak sebagai "mandor pembuat kasur empuk": hormon ini merangsang pembuluh darah dan jaringan dinding rahim (endometrium) tumbuh menebal, berpori, dan kaya nutrisi.
   - Tujuannya adalah mempersiapkan dinding rahim agar siap menjadi "sarang" yang nyaman tempat menempelnya (implantasi) zigot jika terjadi pembuahan.

3. Apa yang Terjadi Jika Tidak Ada Pembuahan?
   Jika sel telur tidak dibuahi sperma, korpus luteum akan menyusut dan mati. Akibatnya kadar hormon progesteron anjlok drastis. Dinding rahim yang sudah tebal tidak ada yang menopang lagi, lalu meluruh bersama darah keluar tubuh, peristiwa inilah yang disebut MENSTRUASI.

Kesimpulan: Pernyataan pada soal 100% BENAR sesuai konsep biologi reproduksi. Jawaban yang tepat adalah BENAR.`,
  },

  // --- Soal 23: Definisi Genotipe Homozigot vs Heterozigot ---
  {
    id: 223,
    question: `Pernyataan:
Genotipe heterozigot sempurna ditunjukkan oleh pasangan alel yang terdiri atas dua gen dominan yang identik, misalnya dituliskan dengan simbol huruf MM atau TT.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 1, // SALAH
    isHots: false,
    explanation: `Membedakan Istilah Homozigot dan Heterozigot:

1. Arti Kata:
   - "Homo" artinya SAMA / SEJENIS / IDENTIK.
   - "Hetero" artinya BERBEDA / BERLAWANAN.

2. Konsep Pasangan Gen (Alel):
   - Pasangan alel yang terdiri dari dua gen identik (sama persis) disebut HOMOZIGOT:
     * MM atau TT ➜ Disebut Homozigot Dominan (dua-duanya huruf kapital dominan).
     * mm atau tt ➜ Disebut Homozigot Resesif (dua-duanya huruf kecil resesif).
   - Pasangan alel yang terdiri dari dua gen yang berbeda (satu dominan digabung satu resesif) disebut HETEROZIGOT:
     * Mm atau Tt ➜ Disebut Heterozigot (terdiri atas gen M dominan dan gen m resesif).

3. Letak Kesalahan Pernyataan:
   Soal menyatakan bahwa genotipe heterozigot terdiri atas dua gen yang identik seperti MM atau TT.
   Padahal MM dan TT adalah contoh HOMOZIGOT DOMINAN, bukan heterozigot.

Kesimpulan: Pernyataan tersebut KELIRU. Jawaban yang tepat adalah SALAH.`,
  },

  // --- Soal 24: Sudut Deklinasi vs Inklinasi ---
  {
    id: 224,
    question: `Pernyataan:
Sudut deklinasi adalah sudut yang dibentuk oleh jarum kompas dengan bidang horizontal permukaan bumi.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 1, // SALAH
    isHots: false,
    explanation: `Perbedaan Sudut Deklinasi dan Sudut Inklinasi pada Jarum Kompas:

1. Mengapa Jarum Kompas Menyimpang?
   Bumi adalah magnet raksasa. Namun, kutub magnet Bumi tidak tepat berimpit dengan kutub geografis (poros bumi). Hal ini menimbulkan dua jenis sudut penyimpangan:

2. Sudut Deklinasi:
   - Adalah sudut penyimpangan antara ARAH UTARA-SELATAN JARUM KOMPAS terhadap ARAH UTARA-SELATAN GEOGRAFIS BUMI yang sebenarnya.
   - Bayangkan jika kamu melihat peta dari atas: jarum kompas agak serong sedikit ke kiri atau ke kanan dari kutub utara sejati bumi. Sudut serong mendatar ini disebut Sudut Deklinasi.

3. Sudut Inklinasi:
   - Adalah sudut kemiringan yang dibentuk oleh JARUM KOMPAS TERHADAP BIDANG DATAR (HORIZONTAL) permukaan bumi.
   - Jarum kompas ternyata tidak melayang sejajar datar sempurna dengan tanah. Di dekat kutub bumi, jarum kompas menukik tajam ke bawah tanah. Sudut kemiringan menukik ke bawah atau mendongak ke atas inilah yang disebut Sudut Inklinasi!

4. Letak Kesalahan Pernyataan:
   Soal mendefinisikan sudut antara jarum kompas dengan "bidang horizontal" sebagai sudut deklinasi, padahal definisi tersebut adalah milik SUDUT INKLINASI.

Kesimpulan: Pernyataan tersebut KELIRU. Jawaban yang tepat adalah SALAH.`,
  },

  // --- Soal 25: Hakikat Efek Rumah Kaca & Pemanasan Global ---
  {
    id: 225,
    question: `Pernyataan:
Efek rumah kaca pada dasarnya merupakan proses alami yang penting untuk menjaga suhu bumi tetap hangat dan layak huni, namun aktivitas manusia yang berlebihan dapat meningkatkan konsentrasi gas rumah kaca secara ekstrem sehingga memicu pemanasan global.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Meluruskan Miskonsepsi Seputar "Efek Rumah Kaca":

1. Apakah Efek Rumah Kaca Aslinya Jahat?
   TIDAK! Efek rumah kaca (Greenhouse Effect) adalah anugerah alami yang sangat penting bagi bumi:
   - Gas-gas di atmosfer (seperti uap air H₂O, karbon dioksida CO₂, dan metana CH₄) secara alami memerangkap sebagian radiasi panas sinar inframerah matahari agar tidak langsung lepas kabur ke luar angkasa di malam hari.
   - Berkat efek rumah kaca alami ini, suhu rata-rata permukaan bumi stabil hangat sekitar 15°C (nyaman untuk hidup manusia, hewan, dan tumbuhan).
   - Tanpa adanya efek rumah kaca alami, suhu rata-rata bumi akan membeku ekstrem hingga minus 18°C (-18°C), seluruh lautan akan membeku menjadi balok es padat dan kehidupan tidak akan pernah bisa eksis!

2. Lalu Mengapa Sekarang Menjadi Masalah Besar?
   - Yang berbahaya adalah EFEK RUMAH KACA BERLEBIHAN akibat ulah manusia.
   - Pembakaran batu bara di PLTU, bensin/solar pada jutaan kendaraan bermotor, penebangan hutan secara liar, dan limbah pabrik melepaskan miliaran ton gas CO₂ ke atmosfer.
   - Lapisan gas rumah kaca menjadi terlalu tebal, memerangkap terlalu banyak panas bumi, dan memicu kenaikan suhu bumi secara global (Pemanasan Global / Global Warming).
   - Akibat pemanasan global: es kutub mencair, permukaan air laut naik menenggelamkan pulau kecil, dan terjadi perubahan iklim serta cuaca ekstrem.

3. Kesimpulan:
   Pernyataan pada soal merangkum hakikat efek rumah kaca alami dan dampaknya jika berlebihan secara objektif, ilmiah, dan tepat.
   Oleh karena itu, jawaban yang benar adalah BENAR.`,
  },
];
