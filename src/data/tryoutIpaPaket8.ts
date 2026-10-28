import { Question } from '../types';

/**
 * Bank Soal Try Out TKA SMP Resmi - IPA Paket 8 (ipa_p8)
 * 25 Soal CBT Komprehensif Berdasarkan Kisi-Kisi Resmi:
 * - Soal Pilihan Ganda Kompleks (Multi-Select): 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
 * - Soal Pilihan Ganda Standar (Single Choice): 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
 * - Soal Benar / Salah (True / False): 21, 22, 23, 24, 25
 * Dilengkapi Evaluasi Kunci Jawaban & Pembahasan Mendalam Step-by-Step Ramah Siswa
 */
export const TRYOUT_IPA_PAKET_8: Question[] = [
  // ==========================================
  // STIMULUS 1: Krisis Kenaikan Permukaan Air Laut Global
  // ==========================================

  // --- Soal 1: Pemuaian Termal dan Ekologi Laut ---
  {
    id: 801,
    question: `**Stimulus 1: Krisis Kenaikan Permukaan Air Laut Global**
Pemanasan global telah memicu kenaikan suhu rata-rata atmosfer bumi secara signifikan. Salah satu dampak paling nyata adalah kenaikan permukaan air laut global yang mengancam kota-kota pesisir di seluruh dunia, termasuk Jakarta. Fenomena ini tidak hanya disebabkan oleh mencairnya es di kutub, tetapi juga oleh fenomena fisika yang dikenal sebagai pemuaian termal air laut. Ketika suhu air laut meningkat, volume air laut bertambah karena jarak antar molekul air merenggang. Selain itu, perubahan iklim ini mengganggu keseimbangan ekosistem laut, memicu pemutihan terumbu karang (coral bleaching), dan mengancam keanekaragaman hayati laut.

Berdasarkan Stimulus 1, jika suhu rata-rata permukaan air laut global terus meningkat secara konstan, manakah dari pernyataan berikut yang memprediksi konsekuensi fisika dan ekologi secara akurat? (Pilihlah dua atau lebih jawaban yang benar!)`,
    image: '/images/tryout/ipa_p8_q1.PNG',
    imageCaption: 'Stimulus 1: Krisis Kenaikan Permukaan Air Laut Global',
    questionType: 'complex',
    options: [
      'Laju pemuaian volume air laut akan meningkat sebanding dengan kenaikan suhu rata-rata air laut.',
      'Densitas (massa jenis) air laut di permukaan akan meningkat akibat peningkatan suhu air laut.',
      'Terumbu karang mengalami pemutihan karena hilangnya alga simbiotik (Zooxanthellae) akibat stres termal.',
      'Tekanan hidrostatis pada dasar laut dalam akan menurun secara drastis karena air laut memuai ke atas.',
    ],
    correctAnswers: [0, 2], // Pernyataan A dan C
    isHots: false,
    explanation: `Analisis Konsekuensi Pemuaian dan Ekologi Laut Step-by-Step:

1. Analisis Opsi A [BENAR]:
   - Rumus pemuaian volume zat cair adalah:
     ΔV = V₀ × β × ΔT
     (Perubahan volume = volume awal × koefisien muai volume × perubahan suhu).
   - Semakin besar kenaikan suhu air laut (ΔT), semakin besar pula pemuaian volumenya (ΔV). Jadi, laju pemuaian volume air laut berbanding lurus (sebanding) dengan kenaikan suhu.

2. Mengapa Opsi B Salah?
   - Rumus massa jenis (densitas) adalah:
     ρ = m / V
     (Massa jenis = massa / volume).
   - Ketika air laut memuai karena panas, volumenya (V) bertambah besar sementara massa airnya (m) tetap.
   - Karena pembaginya (volume) makin besar, massa jenis (ρ) air laut di permukaan justru MENURUN (menjadi lebih ringan), BUKAN meningkat!

3. Analisis Opsi C [BENAR]:
   - Terumbu karang hidup bersimbiosis mutualisme dengan alga mikroskopis bernama Zooxanthellae yang tinggal di dalam jaringannya. Alga ini memberi makan dan warna-warni indah pada karang.
   - Ketika suhu air laut naik melewati batas toleransi (stres termal), karang tertekan dan terpaksa memuntahkan alga tersebut. Tanpa alga, karang kehilangan warna aslinya dan menjadi putih pucat (coral bleaching), serta terancam mati kelaparan.

4. Mengapa Opsi D Salah?
   - Tekanan hidrostatis di dasar laut bergantung pada kedalaman kolom air dan gravitasi (P = ρ × g × h).
   - Pemuaian air laut ke atas menambah ketinggian permukaan laut, ditambah aliran air lelehan es kutub dari daratan. Massa air di atas dasar laut tidak hilang, sehingga tekanan hidrostatis di dasar laut tidak menurun drastis.

Jawaban yang benar adalah Opsi A dan C.`,
  },

  // --- Soal 2: Mitigasi Kenaikan Air Laut Pesisir ---
  {
    id: 802,
    question: `Sebuah tim ilmuwan ingin merancang model mitigasi untuk mengurangi dampak pemuaian termal dan kenaikan permukaan air laut di wilayah pesisir (Stimulus 1).

Langkah rekayasa teknologi dan ekologi manakah yang paling efektif dan berkelanjutan untuk diterapkan? (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Membangun tanggul laut raksasa di sepanjang garis pantai disertai pompa air berkapasitas tinggi secara terus-menerus.',
      'Melakukan restorasi hutan mangrove secara masif untuk meredam energi gelombang dan menstabilkan sedimen pantai.',
      'Mengembangkan teknologi artificial coral reefs (terumbu karang buatan) yang tahan terhadap fluktuasi suhu ekstrem.',
      'Mengalirkan sebagian air laut ke wilayah gurun pasir yang luas menggunakan saluran pipa bawah tanah berskala raksasa.',
    ],
    correctAnswers: [1, 2], // Pernyataan B dan C
    isHots: false,
    explanation: `Analisis Solusi Mitigasi Pesisir yang Berkelanjutan Step-by-Step:

1. Mengapa Opsi A Kurang Tepat / Tidak Berkelanjutan?
   - Membangun tanggul beton raksasa dan menyalakan pompa air bertenaga listrik raksasa secara non-stop membutuhkan biaya perawatan yang luar biasa mahal, mengonsumsi energi fosil tinggi, serta berisiko jebol jika muka laut terus bertambah tinggi. Ini bukan solusi ekologis jangka panjang.

2. Analisis Opsi B [BENAR]:
   - Hutan bakau (mangrove) adalah benteng alami terhebat pesisir!
   - Akar tunjang dan napas mangrove yang kokoh dan rapat berfungsi memecah energi ombak badai, menahan abrasi pasir pantai, mempercepat pengendapan lumpur (sedimen), dan sekaligus menjadi penyerap gas karbon dioksida (blue carbon) yang sangat efisien.

3. Analisis Opsi C [BENAR]:
   - Terumbu karang buatan (artificial coral reefs) yang tahan suhu panas membantu merehabilitasi ekosistem dasar laut yang rusak. Karang buatan ini bertindak sebagai pemecah gelombang alami di bawah permukaan laut sebelum gelombang menghantam bibir pantai.

4. Mengapa Opsi D Salah?
   - Mengalirkan air laut asin ke gurun pasir dengan pipa raksasa ribuan kilometer sangat tidak masuk akal secara biaya ekonomi dan termodinamika. Selain itu, merembesnya air laut asin ke tanah gurun justru akan mencemari cadangan air tanah tawar gurun.

Jawaban yang benar adalah Opsi B dan C.`,
  },

  // --- Soal 3: Termodinamika Peleburan Es Kutub ---
  {
    id: 803,
    question: `Hubungan antara kalor, suhu, dan perubahan wujud zat pada fenomena mencairnya es kutub sangat krusial. Ketika bongkahan es raksasa di kutub menyerap kalor dari radiasi matahari hingga mencair seluruhnya menjadi air, manakah pernyataan yang benar mengenai proses termodinamika tersebut? (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Selama proses peleburan es menjadi air, suhu es dan air campuran tetap berada pada 0°C hingga seluruh es mencair.',
      'Kalor yang diserap oleh es selama proses peleburan digunakan sepenuhnya untuk meningkatkan energi kinetik molekul air.',
      'Kalor laten peleburan es bekerja untuk memutuskan ikatan hidrogen antar molekul air dalam kisi kristal es.',
      'Kapasitas kalor air dalam wujud cair lebih kecil daripada kapasitas kalor air dalam wujud es padat.',
    ],
    correctAnswers: [0, 2], // Pernyataan A dan C
    isHots: false,
    explanation: `Konsep Kalor dan Perubahan Wujud Zat Step-by-Step:

1. Analisis Opsi A [BENAR]:
   - Salah satu hukum dasar termodinamika zat murni: saat terjadi perubahan wujud (fase zat), SUHU TIDAK AKAN BERUBAH (konstan) sampai seluruh wujud selesai bertransformasi!
   - Ketika es sedang mencair pada tekanan 1 atmosfer, suhu campuran es dan air akan tetap terkunci pada 0°C sampai bongkahan es terakhir benar-benar meleleh menjadi air.

2. Mengapa Opsi B Salah?
   - Suhu adalah ukuran rata-rata ENERGI KINETIK getaran molekul. Karena suhu es selama mencair tetap 0°C, energi kinetik molekulnya TIDAK BERTAMBAH.
   - Kalor lebur yang diserap bukan untuk mempercepat getaran molekul, melainkan untuk mengubah ENERGI POTENSIAL ikatan antarmolekul.

3. Analisis Opsi C [BENAR]:
   - Pada es padat, molekul-molekul air terkunci rapat dalam kisi kristal heksagonal oleh ikatan hidrogen.
   - Kalor laten peleburan (Q = m × L) diserap untuk memutuskan sebagian ikatan hidrogen kaku tersebut sehingga molekul air dapat meluncur bebas dalam wujud cair.

4. Mengapa Opsi D Salah?
   - Kalor jenis air cair (c_air ≈ 4.184 J/kg°C) bernilai DUA KALI LIPAT lebih besar dibandingkan kalor jenis es padat (c_es ≈ 2.100 J/kg°C). Jadi, air cair memiliki kapasitas kalor yang jauh lebih besar daripada es.

Jawaban yang benar adalah Opsi A dan C.`,
  },

  // ==========================================
  // STIMULUS 2: Revolusi Kendaraan Listrik dan Efisiensi Energi
  // ==========================================

  // --- Soal 4: Prinsip Pengereman Regeneratif ---
  {
    id: 804,
    question: `**Stimulus 2: Revolusi Kendaraan Listrik dan Efisiensi Energi**
Dalam upaya menekan emisi gas rumah kaca, dunia sedang bertransisi dari kendaraan berbahan bakar fosil menuju kendaraan listrik (Electric Vehicles/EV). Komponen kunci dari EV adalah baterai Lithium-ion yang menyuplai arus searah (DC) ke motor listrik untuk menghasilkan gerak. Efisiensi energi menjadi fokus utama pabrikan otomotif. Untuk memaksimalkan jarak tempuh, kendaraan listrik modern dilengkapi dengan sistem Regenerative Braking (pengereman regeneratif). Saat pengemudi melepas pedal gas atau menginjak pedal rem, motor listrik berputar terbalik dan bertindak sebagai generator, mengubah energi kinetik kendaraan kembali menjadi energi listrik untuk mengisi ulang baterai.

Berdasarkan prinsip kerja kendaraan listrik pada Stimulus 2, analisis manakah yang benar mengenai transformasi energi dan gaya yang terjadi saat sistem Regenerative Braking aktif? (Pilihlah dua atau lebih jawaban yang benar!)`,
    image: '/images/tryout/ipa_p8_q4.PNG',
    imageCaption: 'Stimulus 2: Revolusi Kendaraan Listrik dan Efisiensi Energi',
    questionType: 'complex',
    options: [
      'Energi kinetik kendaraan diubah menjadi energi listrik melalui induksi elektromagnetik pada motor yang beralih fungsi menjadi generator.',
      'Gaya gesek mekanis antara kampas rem dan piringan cakram adalah satu-satunya gaya yang menghentikan laju kendaraan.',
      'Arus listrik induksi yang dihasilkan mengalir kembali ke baterai, mengubah energi listrik menjadi energi kimia tersimpan.',
      'Hukum Kekekalan Energi tidak berlaku pada sistem ini karena ada energi yang hilang sepenuhnya menjadi panas tak terukur.',
    ],
    correctAnswers: [0, 2], // Pernyataan A dan C
    isHots: false,
    explanation: `Konsep Pengereman Regeneratif Step-by-Step:

1. Analisis Opsi A [BENAR]:
   - Motor listrik dan generator memiliki susunan komponen yang sama (kumparan kawat dan magnet).
   - Ketika pedal rem diinjak atau pedal gas dilepas, putaran roda mobil memaksa poros motor berputar. Motor pun beralih fungsi menjadi GENERATOR.
   - Sesuai Hukum Induksi Elektromagnetik Faraday, putaran kumparan di dalam medan magnet memotong garis gaya magnet dan menghasilkan arus listrik induksi. Energi kinetik gerak mobil berhasil diubah menjadi energi listrik!

2. Mengapa Opsi B Salah?
   - Pada mobil listrik, perlambatan mobil dibantu oleh GAYA HAMBAT ELEKTROMAGNETIK dari generator (gaya tolak balik Lorentz), bukan hanya dari gesekan kampas rem mekanis saja.

3. Analisis Opsi C [BENAR]:
   - Arus listrik induksi yang diproduksi generator dialirkan masuk kembali ke sel-sel baterai litium-ion (proses pengisian daya / charging).
   - Di dalam baterai, energi listrik memicu reaksi elektrokimia balik sehingga energi listrik disimpan kembali dalam bentuk ENERGI KIMIA potensial.

4. Mengapa Opsi D Salah?
   - Hukum Kekekalan Energi BERLAKU MUTLAK di alam semesta. Energi tidak pernah musnah atau hilang lenyap; energi kinetik mobil terbagi menjadi energi listrik yang disimpan di baterai dan sebagian kecil menjadi energi kalor (panas gesekan ban dan udara).

Jawaban yang benar adalah Opsi A dan C.`,
  },

  // --- Soal 5: Perhitungan Kuantitatif Pengereman Mobil Listrik ---
  {
    id: 805,
    question: `Sebuah mobil listrik bermassa 1.500 kg bergerak dengan kecepatan konstan 20 m/s (Stimulus 2). Ketika sistem pengereman regeneratif diaktifkan, mobil melambat hingga berhenti dalam waktu 5 sekon. Jika efisiensi konversi energi sistem regeneratif tersebut adalah 60%, manakah pernyataan kuantitatif berikut yang benar? (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Energi kinetik awal mobil sebelum pengereman adalah sebesar 300 kJ.',
      'Energi listrik yang berhasil dikembalikan dan disimpan ke dalam baterai adalah sebesar 180 kJ.',
      'Perlambatan rata-rata yang dialami oleh mobil listrik tersebut adalah sebesar 4 m/s².',
      'Daya rata-rata yang diserap oleh sistem regeneratif selama pengereman adalah 120 kW.',
    ],
    correctAnswers: [0, 1, 2], // Pernyataan A, B, dan C Benar
    isHots: false,
    explanation: `Perhitungan Kuantitatif Pengereman Step-by-Step:

Data yang Diketahui:
- Massa mobil (m) = 1.500 kg
- Kecepatan awal (v₀) = 20 m/s
- Kecepatan akhir setelah berhenti (v_t) = 0 m/s
- Waktu pengereman (t) = 5 sekon
- Efisiensi regeneratif (η) = 60% = 0,60

Langkah 1: Menghitung Energi Kinetik Awal (Ek_awal)
Rumus: Ek = ½ × m × v₀²
Ek = ½ × 1.500 kg × (20 m/s)²
Ek = 750 × 400 = 300.000 Joule = 300 kJ.
(Pernyataan A BENAR).

Langkah 2: Menghitung Energi Listrik yang Tersimpan ke Baterai (E_listrik)
Energi listrik = Efisiensi × Ek_awal
E_listrik = 60% × 300 kJ
E_listrik = 0,60 × 300 kJ = 180 kJ.
(Pernyataan B BENAR).

Langkah 3: Menghitung Perlambatan Mobil (a)
Rumus: a = (v_t - v₀) / t
a = (0 - 20 m/s) / 5 s = -4 m/s².
Tanda minus artinya mobil mengalami perlambatan. Besar perlambatannya adalah 4 m/s².
(Pernyataan C BENAR).

Langkah 4: Menghitung Daya Rata-Rata Regeneratif (P)
Rumus Daya: P = Energi listrik / waktu
P = 180 kJ / 5 s = 36 kW.
(Pernyataan D SALAH, karena tertulis 120 kW, padahal nilai sebenarnya adalah 36 kW).

Jawaban yang benar adalah Pernyataan A, B, dan C.`,
  },

  // --- Soal 6: Superkapasitor Berbasis Grafena ---
  {
    id: 806,
    question: `Untuk meningkatkan kapasitas penyimpanan energi dan kecepatan pengisian daya baterai EV, para ilmuwan mengembangkan superkapasitor berbasis grafena. Grafena merupakan material karbon setebal satu atom yang memiliki konduktivitas listrik sangat tinggi.

Manakah pernyataan yang benar mengenai karakteristik kelistrikan dan struktur bahan ini? (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Hambatan jenis (resistivitas) grafena sangat kecil sehingga memungkinkan elektron mengalir dengan hambatan minimal.',
      'Grafena menyimpan energi listrik murni dalam bentuk medan elektrostatik tanpa melibatkan reaksi kimia reduksi-oksidasi.',
      'Penggunaan grafena meningkatkan akumulasi muatan listrik statis pada permukaan elektroda karena luas permukaannya yang sangat besar.',
      'Grafena merupakan senyawa organik kompleks yang tersusun atas rantai atom karbon, hidrogen, dan oksigen yang berikatan kovalen.',
    ],
    correctAnswers: [0, 1], // Pernyataan A dan B
    isHots: false,
    explanation: `Karakteristik Kelistrikan Grafena Step-by-Step:

1. Analisis Opsi A [BENAR]:
   - Grafena adalah lembaran atom karbon murni dua dimensi setebal satu atom yang tersusun dalam kisi sarang lebah (honeycomb).
   - Grafena memiliki hambatan jenis (resistivitas) yang luar biasa kecil (sekitar 10⁻⁸ Ω·m), menjadikannya salah satu konduktor listrik dan panas terbaik di dunia sehingga elektron dapat melesat tanpa terhambat.

2. Analisis Opsi B [BENAR]:
   - Superkapasitor bekerja dengan prinsip lapisan ganda listrik (Electric Double Layer Capacitor / EDLC).
   - Muatan listrik disimpan secara fisik murni melalui medan elektrostatik di permukaan elektroda tanpa adanya reaksi kimia bolak-balik (reduksi-oksidasi) seperti baterai konvensional. Itulah mengapa superkapasitor dapat diisi daya penuh hanya dalam hitungan detik!

3. Mengapa Opsi C Salah?
   - Superkapasitor bekerja dalam rangkaian tertutup arus listrik dinamis (kapasitif), bukan muatan listrik statis liar.

4. Mengapa Opsi D Salah?
   - Grafena BUKAN senyawa organik kompleks yang tersusun dari karbon, hidrogen, dan oksigen. Grafena adalah UNSUR TUNGGAL (alotrop karbon murni), sama seperti intan dan grafit.

Jawaban yang benar adalah Opsi A dan B.`,
  },

  // ==========================================
  // STIMULUS 3: Rekayasa Genetika dan Ketahanan Pangan Global
  // ==========================================

  // --- Soal 7: Rekayasa Genetika Golden Rice ---
  {
    id: 807,
    question: `**Stimulus 3: Rekayasa Genetika dan Ketahanan Pangan Global**
Pertumbuhan populasi global yang pesat diiringi dengan perubahan iklim ekstrem mengancam ketahanan pangan dunia. Salah satu solusi bioteknologi modern adalah pengembangan tanaman transgenik (Genetically Modified Organisms/GMO). Contoh suksesnya adalah Golden Rice, varietas padi yang direkayasa secara genetik untuk mengekspresikan beta-karoten (pro-vitamin A) pada endosperma (beras) yang biasanya tidak mengandung senyawa tersebut. Gen penyandi beta-karoten diambil dari tanaman narsis (daffodil) dan bakteri Erwinia uredovora, kemudian disisipkan ke dalam genom padi menggunakan vektor bakteri Agrobacterium tumefaciens. Langkah ini diharapkan dapat mengatasi masalah defisiensi vitamin A kronis di negara-negara berkembang.

Berdasarkan Stimulus 3, manakah pernyataan yang menjelaskan mekanisme ilmiah dan dampak dari pembuatan tanaman transgenik Golden Rice secara tepat? (Pilihlah dua atau lebih jawaban yang benar!)`,
    image: '/images/tryout/ipa_p8_q7.PNG',
    imageCaption: 'Stimulus 3: Rekayasa Genetika dan Ketahanan Pangan Global',
    questionType: 'complex',
    options: [
      'Penyisipan gen asing ke dalam genom padi mengubah urutan nukleotida DNA tanaman penerima sehingga menghasilkan protein baru (enzim pembentuk beta-karoten).',
      'Sifat baru yang diperoleh Golden Rice tidak dapat diwariskan ke generasi berikutnya karena modifikasi hanya terjadi pada tingkat sel somatik.',
      'Penggunaan Agrobacterium tumefaciens bertujuan sebagai vektor alami untuk mentransfer segmen DNA target ke dalam sel inang padi.',
      'Rekayasa genetika pada Golden Rice dikategorikan sebagai bioteknologi konvensional karena masih menggunakan bantuan bakteri hidup.',
    ],
    correctAnswers: [0, 2], // Pernyataan A dan C
    isHots: false,
    explanation: `Mekanisme Bioteknologi Modern Golden Rice Step-by-Step:

1. Analisis Opsi A [BENAR]:
   - DNA adalah cetak biru kehidupan yang tersusun atas basa nukleotida.
   - Ketika gen penyandi beta-karoten dari tanaman narsis dan bakteri Erwinia disisipkan ke DNA padi, sel padi membaca kode genetik baru tersebut melalui proses transkripsi dan translasi, lalu memproduksi enzim-enzim biosintesis beta-karoten di dalam biji beras.

2. Mengapa Opsi B Salah?
   - Modifikasi DNA dilakukan pada sel embrionik padi yang kemudian ditumbuhkan menjadi tanaman padi utuh dewasa.
   - Sifat baru ini menyatu dalam kromosom dan sel kelamin (gamet) tanaman, sehingga sifat bulir kuning keemasan kaya vitamin A AKAN DIWARISKAN ke generasi berikutnya melalui biji hasil panen.

3. Analisis Opsi C [BENAR]:
   - Bakteri Agrobacterium tumefaciens memiliki plasmid khusus (Ti plasmid / Tumor-inducing plasmid).
   - Ilmuwan memotong gen penyebab penyakit pada bakteri tersebut dan menggantinya dengan gen beta-karoten. Bakteri ini kemudian berfungsi seperti "kurir biologis" (vektor alami) yang mengantarkan gen target masuk menembus inti sel padi.

4. Mengapa Opsi D Salah?
   - Bioteknologi konvensional hanya memanfaatkan mikroorganisme secara langsung tanpa mengubah DNA (seperti pembuatan tempe, yoghurt, kecap). Pemotongan dan penyambungan DNA (rekombinasi gen) tergolong BIOTEKNOLOGI MODERN.

Jawaban yang benar adalah Opsi A dan C.`,
  },

  // --- Soal 8: Persilangan Dihibrid Padi Transgenik ---
  {
    id: 808,
    question: `Seorang petani menyilangkan tanaman padi transgenik homozigot berbulir kuning-kaya vitamin A (KK) dan berumur genjah/cepat panen (GG) dengan varietas padi lokal homozigot berbulir putih-miskin vitamin A (kk) dan berumur dalam/lambat panen (gg). Jika sifat bulir kuning (K) dominan terhadap bulir putih (k) dan umur genjah (G) dominan terhadap umur dalam (g), manakah prediksi hasil persilangan yang benar? (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Seluruh keturunan generasi pertama (F1) akan memiliki fenotipe bulir kuning dan berumur genjah dengan genotipe KkGg.',
      'Jika F1 disilangkan sesamanya, rasio fenotipe F2 yang diperoleh adalah 9 (kuning genjah) : 3 (kuning dalam) : 3 (putih genjah) : 1 (putih dalam).',
      'Persentase tanaman F2 yang memiliki sifat unggul homozigot sempurna (KKGG) untuk dijadikan bibit unggul murni adalah sebesar 25%.',
      'Jumlah kombinasi gamet yang terbentuk dari individu F1 (KkGg) saat pembelahan meiosis adalah sebanyak 2 macam gamet.',
    ],
    correctAnswers: [0, 1], // Pernyataan A dan B
    isHots: false,
    explanation: `Analisis Persilangan Dihibrid Mendel Step-by-Step:

Langkah 1: Persilangan Induk (Parental 1 / P1)
- Induk 1 (Kuning Genjah Homozigot): KKGG ➜ Gamet: KG
- Induk 2 (Putih Dalam Homozigot): kkgg ➜ Gamet: kg
- Keturunan F1: Penggabungan gamet KG dan kg menghasilkan 100% genotipe KkGg.
- Karena K dominan atas k dan G dominan atas g, seluruh F1 berfenotipe BULIR KUNING DAN BERUMUR GENJAH (100%).
(Pernyataan A BENAR).

Langkah 2: Menentukan Gamet F1 (KkGg)
- Rumus jumlah macam gamet = 2ⁿ (n = jumlah pasangan heterozigot).
- Karena ada 2 pasang heterozigot (Kk dan Gg), maka n = 2.
- Jumlah macam gamet = 2² = 4 macam gamet, yaitu: KG, Kg, kG, dan kg.
(Pernyataan D SALAH, karena tertulis 2 macam).

Langkah 3: Persilangan Sesama F1 (KkGg × KkGg) Menghasilkan F2
Berdasarkan Hukum Asortasi Bebas Mendel (Papan Catur Punnett 16 kotak):
- 9 Kuning Genjah (K_G_)
- 3 Kuning Dalam (K_gg)
- 3 Putih Genjah (kkG_)
- 1 Putih Dalam (kkgg)
Rasio fenotipe F2 adalah 9 : 3 : 3 : 1.
(Pernyataan B BENAR).

Langkah 4: Menghitung Peluang Homozigot Sempurna (KKGG)
- Dari total 16 kotak kombinasi F2, genotipe KKGG murni HANYA ADA 1 KOTAK (kotak paling pertama).
- Peluang = 1 / 16 × 100% = 6,25% (BUKAN 25%!).
(Pernyataan C SALAH).

Jawaban yang benar adalah Pernyataan A dan B.`,
  },

  // --- Soal 9: Dampak Ekologis Tanaman Transgenik ---
  {
    id: 809,
    question: `Meskipun bioteknologi modern menawarkan solusi ketahanan pangan (Stimulus 3), terdapat kekhawatiran global terkait dampak ekologis dari pelepasan tanaman transgenik ke lingkungan bebas.

Manakah dari risiko ekologis berikut yang paling relevan dan didukung oleh kajian ilmiah? (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Terjadinya aliran gen (gene flow) secara tidak sengaja melalui penyerbukan silang dari tanaman transgenik ke kerabat liar (wild relatives) di sekitarnya.',
      'Penurunan keanekaragaman hayati (biodiversitas) akibat dominasi monokultur tanaman transgenik yang mendesak varietas lokal.',
      'Munculnya hama super (superpests) atau gulma super (superweeds) yang resisten terhadap pestisida atau herbisida akibat seleksi alam yang dipercepat.',
      'Peningkatan laju mutasi spontan pada seluruh organisme tanah akibat paparan langsung dari akar tanaman transgenik.',
    ],
    correctAnswers: [0, 1, 2], // Pernyataan A, B, dan C
    isHots: false,
    explanation: `Analisis Risiko Ekologis Tanaman Transgenik Step-by-Step:

1. Analisis Opsi A [BENAR]:
   - Angin dan serangga penyerbuk dapat menerbangkan serbuk sari tanaman transgenik ke tanaman liar kerabat dekatnya di luar kebun (gene flow).
   - Jika gulma liar menerima gen tahan herbisida atau gen tahan hama, gulma tersebut akan menjadi gulma liar yang kebal dan mustahil dibasmi.

2. Analisis Opsi B [BENAR]:
   - Petani cenderung hanya menanam satu varietas unggul transgenik dalam jumlah jutaan hektar (monokultur).
   - Akibatnya, varietas padi atau jagung lokal tradisional ditinggalkan dan punah, sehingga keanekaragaman plasma nutfah hayati bumi merosot tajam.

3. Analisis Opsi C [BENAR]:
   - Jika tanaman transgenik terus-menerus memproduksi racun pembunuh hama (misalnya racun Bt), serangga hama akan mengalami tekanan seleksi alam yang intensif.
   - Individu serangga yang memiliki mutasi kebal alami akan bertahan hidup dan berkembang biak melahirkan koloni hama super (superpests) yang tidak mempan lagi terhadap racun tersebut.

4. Mengapa Opsi D Salah?
   - Tanaman transgenik tidak memancarkan radiasi radioaktif pengion yang dapat meningkatkan laju mutasi spontan pada seluruh organisme tanah. Pernyataan ini mitos dan tidak didukung bukti ilmiah.

Jawaban yang benar adalah Opsi A, B, dan C.`,
  },

  // ==========================================
  // STIMULUS 4: Ancaman Mikroplastik di Ekosistem Laut
  // ==========================================

  // --- Soal 10: Dampak Seluler dan Ekosistem Mikroplastik ---
  {
    id: 810,
    question: `**Stimulus 4: Ancaman Mikroplastik di Ekosistem Laut**
Polusi plastik telah mencapai tingkat yang sangat mengkhawatirkan. Plastik yang terbuang ke lingkungan mengalami degradasi fisik akibat radiasi ultraviolet matahari dan hempasan gelombang laut menjadi partikel-partikel kecil berukuran kurang dari 5 mm yang disebut mikroplastik. Mikroplastik ini dengan mudah tertelan oleh organisme planktonik dan hewan penyaring (filter feeders) seperti kerang. Melalui rantai makanan, mikroplastik beserta racun kimia yang diserapnya (seperti logam berat dan polutan organik persisten) berpindah ke tingkat trofik yang lebih tinggi, termasuk ikan predator, dan akhirnya menumpuk di tubuh manusia yang mengonsumsinya. Proses akumulasi zat beracun di sepanjang rantai makanan ini dikenal sebagai biomagnifikasi.

Berdasarkan Stimulus 4, analisis manakah yang paling tepat mengenai dampak mikroplastik pada tingkat seluler dan ekosistem laut? (Pilihlah dua atau lebih jawaban yang benar!)`,
    image: '/images/tryout/ipa_p8_q10.PNG',
    imageCaption: 'Stimulus 4: Ancaman Mikroplastik di Ekosistem Laut',
    questionType: 'complex',
    options: [
      'Konsentrasi mikroplastik dan polutan kimia tertinggi akan ditemukan pada organisme yang menduduki tingkat trofik puncak (konsumen akhir).',
      'Mikroplastik yang masuk ke dalam sel hewan dapat mengganggu fungsi organel sel, seperti lisosom, karena akumulasi partikel asing yang tidak dapat dicerna.',
      'Organisme produsen (fitoplankton) bebas dari dampak mikroplastik karena mereka tidak memiliki sistem pencernaan aktif untuk menelan partikel.',
      'Biomagnifikasi menyebabkan transfer energi antar tingkat trofik menjadi lebih efisien karena adanya tambahan senyawa karbon dari plastik.',
    ],
    correctAnswers: [0, 1], // Pernyataan A dan B
    isHots: false,
    explanation: `Dampak Mikroplastik Seluler dan Ekologis Step-by-Step:

1. Analisis Opsi A [BENAR]:
   - Sesuai prinsip BIOMAGNIFIKASI: racun dan mikroplastik tidak dapat diuraikan oleh enzim pencernaan dan tidak dapat dikeluarkan oleh ginjal.
   - Konsumen tingkat satu memakan ribuan plankton, konsumen tingkat dua memakan ratusan konsumen satu, dan seterusnya.
   - Akibatnya, pemekatan konsentrasi racun tertinggi selalu menumpuk di tubuh KONSUMEN PUNCAK (seperti ikan tuna besar, hiu, burung pemakan ikan, dan manusia).

2. Analisis Opsi B [BENAR]:
   - Nanoplastik yang sangat kecil dapat menembus membran sel melalui proses endositosis.
   - Partikel ini akan ditangkap oleh organel LISOSOM (kantong enzim pencerna sel). Karena lisosom tidak memiliki enzim yang sanggup mengurai plastik sintetis, partikel menumpuk, menyebabkan stres oksidatif, dan merusak membran lisosom sehingga enzim tumpah merusak sel itu sendiri.

3. Mengapa Opsi C Salah?
   - Fitoplankton TIDAK BEBAS dari bahaya mikroplastik! Mikroplastik dapat menempel pada permukaan dinding sel fitoplankton, menghalangi penyerapan sinar matahari untuk fotosintesis, dan merusak dinding selnya.

4. Mengapa Opsi D Salah?
   - Mikroplastik bukanlah sumber nutrisi biologis yang dapat diubah menjadi ATP. Plastik justru meracuni organisme dan tidak meningkatkan efisiensi transfer energi (hukum transfer energi tetap sekitar 10%).

Jawaban yang benar adalah Opsi A dan B.`,
  },

  // --- Soal 11: Klasifikasi Diatom ---
  {
    id: 811,
    question: `Seorang peneliti mengamati sampel air laut dan menemukan organisme mikroskopis dengan ciri-ciri: bersel tunggal (uniseluler), memiliki dinding sel dari silika dengan bentuk tubuh simetris seperti kotak (diatom), dan mampu berfotosintesis.

Dalam sistem klasifikasi lima kingdom, organisme tersebut termasuk ke dalam kelompok....`,
    questionType: 'single',
    options: [
      'Monera',
      'Protista',
      'Fungi',
      'Plantae',
    ],
    correctAnswer: 1, // B (Protista)
    isHots: false,
    explanation: `Klasifikasi Makhluk Hidup Kingdom Protista Step-by-Step:

1. Mengenal Diatom (Bacillariophyta):
   - Diatom adalah fitoplankton bersel satu (uniseluler) yang hidup melayang di perairan laut maupun tawar.
   - Ciri khas unik diatom adalah memiliki cangkang/dinding sel keras dari zat kersik (silika atau SiO₂) berbentuk simetris indah mirip kotak cawan petri bertutup (frustul).

2. Mengapa Termasuk Kingdom Protista?
   - Diatom memiliki membran inti sel sejati (eukariotik), sehingga BUKAN anggota Kingdom Monera (bakteri bersifat prokariotik tanpa membran inti).
   - Walaupun mampu berfotosintesis (memiliki klorofil), tubuh diatom masih sangat sederhana dan belum memiliki diferensiasi jaringan akar, batang, atau daun sejati, sehingga tidak dimasukkan ke dalam Kingdom Plantae.
   - Dalam sistem 5 kingdom Whittaker, alga uniseluler seperti diatom dikelompokkan ke dalam KINGDOM PROTISTA (subkelompok Protista mirip tumbuhan / Algae).

Jawaban yang paling tepat adalah Opsi B (Protista).`,
  },

  // --- Soal 12: Penyerapan Nutrisi dan Mikroplastik pada Usus Halus ---
  {
    id: 812,
    question: `Mikroplastik yang masuk ke dalam tubuh manusia melalui sistem pencernaan dapat menembus dinding usus halus dan masuk ke aliran darah (Stimulus 4).

Bagian dari sistem pencernaan manusia yang berfungsi utama melakukan penyerapan nutrisi (dan secara tidak sengaja dapat menyerap mikroplastik ukuran nano) beserta struktur khususnya adalah....`,
    questionType: 'single',
    options: [
      'Duodenum, memiliki kelenjar pencernaan yang menghasilkan enzim lipase untuk mendegradasi plastik.',
      'Ileum, memiliki vili (jonjot usus) yang memperluas permukaan penyerapan sehingga mempermudah difusi partikel mikro.',
      'Kolon, memiliki bakteri Escherichia coli yang mampu memfermentasi mikroplastik menjadi asam lemak rantai pendek.',
      'Ventrikulus, memiliki asam klorida (HCl) pekat yang mampu melarutkan seluruh partikel mikroplastik sebelum diserap.',
    ],
    correctAnswer: 1, // B (Ileum dengan vili)
    isHots: false,
    explanation: `Struktur dan Fungsi Penyerapan Usus Halus Step-by-Step:

1. Pembagian Usus Halus (Intestinum Tenue):
   - Usus Dua Belas Jari (Duodenum): Tempat muara getah empedu dan pankreas untuk pencernaan kimiawi utama.
   - Usus Kosong (Jejunum): Tempat lanjutan pencernaan dan awal penyerapan.
   - Usus Penyerapan (Ileum): Bagian terpanjang usus halus yang fungsi utamanya adalah MENYERAP sari-sari makanan ke dalam pembuluh darah dan limfa.

2. Struktur Khusus Vili (Jonjot Usus):
   - Permukaan dalam ileum berlipat-lipat membentuk jutaan tonjolan seperti beludru yang disebut VILI (jonjot usus), yang di permukaannya terdapat mikrovili.
   - Vili memperluas area penyerapan hingga ratusan meter persegi dan dinding epitelnya sangat tipis serta kaya kapiler darah.
   - Sayangnya, partikel nanoplastik yang berukuran sangat renik dapat menyelinap melalui celah sel epitel vili ini dan langsung masuk ke peredaran darah tubuh!

3. Mengapa Pilihan Lain Salah?
   - Enzim manusia (lipase), asam lambung (HCl), maupun bakteri usus besar (E. coli) TIDAK BISA mengurai atau mendegradasi rantai polimer plastik sintetis.

Jawaban yang paling tepat adalah Opsi B.`,
  },

  // ==========================================
  // STIMULUS 5: Eksplorasi Palung Mariana dan Tekanan Hidrostatis
  // ==========================================

  // --- Soal 13: Perhitungan Tekanan Hidrostatis Palung Mariana ---
  {
    id: 813,
    question: `**Stimulus 5: Eksplorasi Palung Mariana dan Tekanan Hidrostatis**
Palung Mariana adalah bagian terdalam dari lautan bumi, dengan kedalaman mencapai hampir 11.000 meter. Eksplorasi ke wilayah ini memerlukan kapal selam khusus yang dirancang untuk menahan tekanan hidrostatis ekstrem. Pada kedalaman tersebut, tekanan air laut mencapai lebih dari 1.000 kali tekanan atmosfer di permukaan bumi.

Jika massa jenis air laut rata-rata adalah 1.030 kg/m³ dan percepatan gravitasi adalah 9,8 m/s², berapakah perkiraan tekanan hidrostatis total yang dialami oleh kapal selam eksplorasi saat berada di kedalaman 10.000 meter di bawah permukaan laut?`,
    image: '/images/tryout/ipa_p8_q13.PNG',
    imageCaption: 'Stimulus 5: Eksplorasi Palung Mariana dan Tekanan Hidrostatis',
    questionType: 'single',
    options: [
      '1,0094 × 10⁵ Pascal',
      '1,0094 × 10⁷ Pascal',
      '1,0094 × 10⁸ Pascal',
      '1,0094 × 10⁹ Pascal',
    ],
    correctAnswer: 2, // C (1,0094 × 10⁸ Pa)
    isHots: false,
    explanation: `Perhitungan Tekanan Hidrostatis Step-by-Step:

Langkah 1: Tuliskan Besaran dalam Satuan Standar Internasional (SI)
- Massa jenis air laut (ρ) = 1.030 kg/m³
- Percepatan gravitasi (g) = 9,8 m/s²
- Kedalaman posisi kapal selam (h) = 10.000 meter

Langkah 2: Gunakan Rumus Tekanan Hidrostatis
Rumus: P_h = ρ × g × h

Langkah 3: Masukkan Angka dan Hitung
P_h = 1.030 × 9,8 × 10.000
P_h = 10.094 × 10.000
P_h = 100.940.000 Pascal.

Langkah 4: Ubah ke Bentuk Notasi Ilmiah (Baku)
Geser koma desimal ke kiri sebanyak 8 tempat:
100.940.000 = 1,0094 × 10⁸ Pascal.
(Tekanan ini setara dengan beban sekitar 1.000 kilogram yang menekan setiap 1 sentimeter persegi permukaan kapal!).

Jawaban yang paling tepat adalah Opsi C (1,0094 × 10⁸ Pascal).`,
  },

  // --- Soal 14: Hukum Pascal Lengan Robotik Bawah Laut ---
  {
    id: 814,
    question: `Untuk meneliti sampel organisme dari Palung Mariana (Stimulus 5), para ilmuwan menggunakan lengan robotik pada kapal selam yang bekerja berdasarkan prinsip hukum Pascal.

Jika piston kecil pada sistem hidrolik lengan robot tersebut memiliki luas penampang 5 cm² dan diberi gaya sebesar 100 N, berapakah gaya yang dihasilkan pada piston besar yang memiliki luas penampang 100 cm² untuk menjepit sampel?`,
    questionType: 'single',
    options: [
      '500 Newton',
      '1.000 Newton',
      '2.000 Newton',
      '4.000 Newton',
    ],
    correctAnswer: 2, // C (2.000 N)
    isHots: false,
    explanation: `Perhitungan Hukum Pascal Step-by-Step:

1. Bunyi Hukum Pascal:
   "Tekanan yang diberikan pada zat cair di dalam ruang tertutup akan diteruskan ke segala arah dengan sama besar."
   Rumus: P₁ = P₂
   F₁ / A₁ = F₂ / A₂

2. Data yang Diketahui:
   - Luas penampang piston kecil (A₁) = 5 cm²
   - Gaya dorong pada piston kecil (F₁) = 100 Newton
   - Luas penampang piston besar (A₂) = 100 cm²
   - Gaya jepit pada piston besar (F₂) = ... ?

3. Masukkan ke Rumus:
   100 N / 5 cm² = F₂ / 100 cm²
   20 = F₂ / 100
   F₂ = 20 × 100
   F₂ = 2.000 Newton.

Dengan memberi gaya dorong hanya 100 N pada piston kecil, sistem hidrolik melipatgandakan gaya menjadi 2.000 N pada piston besar!

Jawaban yang paling tepat adalah Opsi C (2.000 Newton).`,
  },

  // --- Soal 15: Adaptasi Ikan Laut Dalam Snailfish ---
  {
    id: 815,
    question: `Ikan laut dalam (snailfish) yang hidup di Palung Mariana tidak memiliki kantung udara (swim bladder) seperti ikan pada umumnya.

Analisis biologi-fisika yang paling tepat mengenai hilangnya organ kantung udara ini sebagai bentuk adaptasi terhadap tekanan ekstrem adalah....`,
    questionType: 'single',
    options: [
      'Kantung udara yang berisi gas akan mengalami penyusutan volume secara drastis akibat tekanan hidrostatis tinggi, yang dapat meremukkan organ dalam tubuh ikan.',
      'Ketiadaan kantung udara mempermudah ikan untuk berenang cepat ke permukaan laut guna mencari mangsa pada malam hari.',
      'Tanpa kantung udara, massa jenis tubuh ikan menjadi jauh lebih besar daripada air laut sekelilingnya sehingga mereka dapat melayang tanpa energi.',
      'Kantung udara digantikan fungsinya oleh paru-paru sederhana yang mampu menyimpan oksigen dalam bentuk cair di bawah tekanan tinggi.',
    ],
    correctAnswer: 0, // A
    isHots: false,
    explanation: `Adaptasi Biologis Ikan Laut Dalam Step-by-Step:

1. Sifat Fisis Gas vs Zat Cair/Padat:
   - Gas bersifat sangat mudah dimampatkan (kompresibel). Berdasarkan Hukum Boyle, jika tekanan luar meningkat 1.000 kali lipat, volume gas akan menciut menyusut drastis hingga 1/1.000 kali ukuran aslinya.
   - Cairan dan lemak tubuh bersifat tidak dapat dimampatkan (inkompresibel).

2. Apa yang Terjadi Jika Ikan Palung Punya Kantung Udara?
   - Kantung renang ikan di perairan dangkal berisi gas oksigen/nitrogen untuk mengatur gaya apung.
   - Jika ikan laut dalam memiliki kantung berisi gas, tekanan hidrostatis 100 juta Pascal di dasar palung akan langsung memampatkan gas tersebut dengan sangat kuat dan meremukkan seluruh organ dalam tubuh ikan hingga hancur seketika!

3. Solusi Evolusi Ikan Snailfish:
   - Ikan laut dalam menghilangkan rongga kantung udara gas sama sekali.
   - Tubuh mereka didominasi oleh cairan, gelatin, dan lipid (lemak cair) yang bertekanan internal sama dengan tekanan air laut di luar, sehingga tubuh mereka tetap utuh dan fleksibel di bawah tekanan mahadasyat.

Jawaban yang paling tepat adalah Opsi A.`,
  },

  // ==========================================
  // STIMULUS 6: Mitigasi Bencana Gempa Bumi dan Gelombang Seismik
  // ==========================================

  // --- Soal 16: Jarak Episentrum Gempa Bumi ---
  {
    id: 816,
    question: `**Stimulus 6: Mitigasi Bencana Gempa Bumi dan Gelombang Seismik**
Indonesia terletak di pertemuan tiga lempeng tektonik aktif dunia: Lempeng Indo-Australia, Lempeng Eurasia, dan Lempeng Pasifik. Ketika lempeng tektonik bergeser atau patah secara tiba-tiba, energi dilepaskan dalam bentuk gelombang seismik yang merambat melalui medium bumi.

Sebuah stasiun seismograf mencatat kedatangan Gelombang P pada pukul 08.15.00 WIB dan Gelombang S pada pukul 08.18.30 WIB. Jika cepat rambat rata-rata Gelombang P di kerak bumi adalah 6 km/s dan Gelombang S adalah 3,5 km/s, berapakah perkiraan jarak episentrum (pusat gempa) dari stasiun seismograf tersebut?`,
    image: '/images/tryout/ipa_p8_q16.PNG',
    imageCaption: 'Stimulus 6: Mitigasi Bencana Gempa Bumi dan Gelombang Seismik',
    questionType: 'single',
    options: [
      '1.470 km',
      '1.764 km',
      '2.205 km',
      '2.940 km',
    ],
    correctAnswer: 1, // B (1.764 km)
    isHots: false,
    explanation: `Perhitungan Jarak Episentrum Seismik Step-by-Step:

Langkah 1: Menghitung Selisih Waktu Tiba Gelombang (Δt)
- Waktu tiba Gelombang Primer (P) = 08.15.00 WIB
- Waktu tiba Gelombang Sekunder (S) = 08.18.30 WIB
- Selisih waktu (t_s - t_p) = 3 menit 30 detik = (3 × 60) + 30 = 210 sekon.

Langkah 2: Menghubungkan Jarak (d) dengan Cepat Rambat Gelombang
- Waktu tempuh Gelombang S: t_s = d / v_s
- Waktu tempuh Gelombang P: t_p = d / v_p
- Selisih waktu:
  Δt = (d / v_s) - (d / v_p)
  Δt = d × [(1 / v_s) - (1 / v_p)]

Langkah 3: Masukkan Data Kecepatan (v_p = 6 km/s dan v_s = 3,5 km/s)
210 = d × [(1 / 3,5) - (1 / 6)]
Samakan penyebut (3,5 × 6 = 21):
1 / 3,5 = 6 / 21
1 / 6 = 3,5 / 21
(1 / 3,5) - (1 / 6) = (6 - 3,5) / 21 = 2,5 / 21

210 = d × (2,5 / 21)

Langkah 4: Hitung Nilai Jarak d
d = (210 × 21) / 2,5
d = 4.410 / 2,5
d = 1.764 km.

Jawaban yang paling tepat adalah Opsi B (1.764 km).`,
  },

  // --- Soal 17: Pembiasan Gelombang Seismik Interior Bumi ---
  {
    id: 817,
    question: `Saat gelombang seismik merambat dari lapisan mantel bumi yang padat dan elastis menuju ke lapisan luar bumi yang memiliki kerapatan (densitas) lebih rendah, fenomena fisika gelombang yang akan terjadi pada gelombang tersebut adalah....`,
    questionType: 'single',
    options: [
      'Frekuensi gelombang akan meningkat tajam, sementara cepat rambat gelombang tetap konstan.',
      'Cepat rambat gelombang akan menurun, dan arah rambat gelombang akan mengalami pembiasan (refraksi).',
      'Gelombang S akan merambat lebih cepat daripada gelombang P karena kerapatan medium yang menurun.',
      'Gelombang akan mengalami pemantulan sempurna (refleksi total) sehingga tidak ada energi yang mencapai permukaan.',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Perilaku Gelombang Seismik Melewati Lapisan Bumi Step-by-Step:

1. Hubungan Cepat Rambat dan Karakteristik Batuan:
   - Kecepatan gelombang seismik bergantung pada modulus elastisitas (kekakuan) dan kerapatan batuan.
   - Lapisan mantel bumi bagian dalam sangat kaku dan tertekan kuat sehingga gelombang merambat sangat cepat.
   - Saat mendekati kerak bumi terluar, batuan lebih renggang dan kurang elastis, sehingga cepat rambat gelombang seismik MENURUN.

2. Hukum Pembiasan Gelombang (Refraksi):
   - Ketika suatu gelombang merambat miring melintasi batas dua lapisan yang berbeda kecepatannya, gelombang akan mengalami PEMBIASAN (pembelokan arah rambat).
   - Pembelokan ini mengikuti Hukum Snellius: perubahan cepat rambat selalu disertai perubahan arah rambat dan panjang gelombang.

3. Mengapa Frekuensi Tidak Berubah?
   - Frekuensi gelombang selalu KEKAL/TETAP karena frekuensi ditentukan oleh sumber getaran gempa di patahan lempeng, bukan oleh jenis batuan yang dilaluinya.

Jawaban yang paling tepat adalah Opsi B.`,
  },

  // --- Soal 18: Karakteristik Inti Luar Bumi Berdasarkan Gelombang S ---
  {
    id: 818,
    question: `Struktur interior bumi terdiri dari kerak, mantel, inti luar, dan inti dalam. Gelombang Sekunder (S-wave) diketahui tidak dapat merambat melalui lapisan inti luar bumi.

Fakta fisis ini membuktikan bahwa karakteristik material penyusun lapisan inti luar bumi adalah....`,
    questionType: 'single',
    options: [
      'Berwujud padat sangat rapat dengan kandungan besi dan nikel murni.',
      'Berwujud cair atau fluida karena gelombang transversal tidak dapat merambat pada medium fluida.',
      'Berupa gas bertekanan tinggi yang mengalami ionisasi ekstrem.',
      'Memiliki nilai elastisitas (modulus geser) yang tak terhingga.',
    ],
    correctAnswer: 1, // B (Berwujud cair/fluida)
    isHots: false,
    explanation: `Membuktikan Fase Inti Luar Bumi Melalui Gelombang S Step-by-Step:

1. Jenis-Jenis Gelombang Gempa Tubuh:
   - Gelombang Primer (Gelombang P): Gelombang longitudinal (rapatan dan renggangan). Dapat merambat melalui SEMUA jenis medium (padat, cair, maupun gas).
   - Gelombang Sekunder (Gelombang S): Gelombang transversal (gerak partikel tegak lurus arah rambat, seperti tali yang digoyangkan ke atas dan bawah).

2. Syarat Perambatan Gelombang Transversal:
   - Untuk dapat merambatkan gelombang geser (transversal), partikel medium harus saling terikat kuat dan memiliki ketahanan terhadap gaya geser (memiliki modulus geser / shear modulus).
   - Pada zat cair dan gas (fluida), molekul dapat meluncur bebas satu sama lain dan tidak memiliki modulus geser (modulus geser = 0). Oleh karena itu, gelombang S TIDAK PERNAH BISA MERAMBAT DI DALAM ZAT CAIR ATAU FLUIDA!

3. Penemuan Zona Bayangan S (S-Wave Shadow Zone):
   - Detektor seismograf di seluruh dunia mencatat bahwa gelombang S lenyap dan tidak pernah tembus melintasi lapisan inti luar bumi.
   - Fakta fisis ini menjadi bukti ilmiah tak terbantahkan bahwa INTI LUAR BUMI BERWUJUD CAIR (besi dan nikel cair panas membara).

Jawaban yang paling tepat adalah Opsi B.`,
  },

  // ==========================================
  // STIMULUS 7: Cuaca Antariksa dan Badai Geomagnetik
  // ==========================================

  // --- Soal 19: Pembelokan Partikel Angin Surya oleh Gaya Lorentz ---
  {
    id: 819,
    question: `**Stimulus 7: Cuaca Antariksa dan Badai Geomagnetik**
Matahari secara konstan memancarkan aliran partikel bermuatan (terutama proton dan elektron) yang disebut angin surya (solar wind). Ketika plasma bermuatan ini mencapai bumi, terjadi interaksi kuat dengan medan magnet bumi (magnetosfer).

Mengapa partikel bermuatan dari angin surya yang mendekati bumi dibelokkan oleh medan magnet bumi dan diarahkan menuju wilayah kutub? Penjelasan fisika yang paling tepat adalah....`,
    image: '/images/tryout/ipa_p8_q19.PNG',
    imageCaption: 'Stimulus 7: Cuaca Antariksa dan Badai Geomagnetik',
    questionType: 'single',
    options: [
      'Partikel bermuatan mengalami gaya gravitasi kutub yang jauh lebih kuat daripada gaya gravitasi di wilayah khatulistiwa.',
      'Partikel bermuatan yang bergerak memotong garis gaya medan magnet bumi akan mengalami Gaya Lorentz yang arahnya tegak lurus terhadap arah gerakan dan arah medan magnet.',
      'Medan magnet bumi bertindak sebagai isolator termal yang membekukan partikel bermuatan sehingga jatuh bebas di kutub.',
      'Partikel bermuatan mengalami gaya elektrostatik Coulomb yang menarik mereka langsung ke inti magnet bumi di kutub utara geografis.',
    ],
    correctAnswer: 1, // B (Gaya Lorentz)
    isHots: false,
    explanation: `Konsep Gaya Lorentz pada Magnetosfer Bumi Step-by-Step:

1. Prinsip Gaya Lorentz:
   - Ketika sebuah partikel bermuatan listrik (muatan q, seperti proton atau elektron) bergerak dengan kecepatan (v) memasuki daerah yang memiliki medan magnet (B), partikel tersebut akan merasakan gaya magnetik yang disebut GAYA LORENTZ.
   - Rumus Vektor: F = q × (v × B)

2. Arah Gaya Lorentz (Aturan Tangan Kanan):
   - Arah gaya Lorentz selalu tegak lurus terhadap arah gerak partikel dan tegak lurus terhadap arah medan magnet.
   - Karena gayanya selalu tegak lurus arah laju, gaya ini tidak mengubah kelajuan partikel, melainkan MEMBELOKKAN lintasannya menjadi gerakan melingkar atau spiral.

3. Mengapa Partikel Mengarah ke Kutub?
   - Garis-garis medan magnet bumi keluar dari kutub selatan dan melengkung masuk kembali memusat di kutub utara.
   - Gaya Lorentz memandu partikel bermuatan berputar spiral menyusuri garis medan magnet ini hingga masuk ke atmosfer di kawasan kutub utara dan kutub selatan, memicu fenomena cahaya Aurora yang menakjubkan.

Jawaban yang paling tepat adalah Opsi B.`,
  },

  // --- Soal 20: Dampak Negatif Badai Geomagnetik pada Jaringan Listrik ---
  {
    id: 820,
    question: `Dampak negatif yang paling signifikan dari badai geomagnetik kuat terhadap peradaban modern manusia di bumi yang sangat bergantung pada teknologi (Stimulus 7) adalah....`,
    questionType: 'single',
    options: [
      'Terjadinya pemanasan global instan yang menaikkan suhu permukaan bumi hingga puluhan derajat Celsius.',
      'Kerusakan masif pada jaringan transmisi listrik tegangan tinggi akibat induksi arus searah (GIC) yang merusak transformator utama.',
      'Terhentinya rotasi bumi untuk sementara waktu akibat torsi magnetik yang berlawanan arah.',
      'Hilangnya gaya gravitasi bumi secara lokal di daerah kutub sehingga benda-benda melayang ke angkasa.',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Dampak Badai Geomagnetik pada Teknologi Step-by-Step:

1. Fenomena Induksi Faraday Skala Benua:
   - Saat badai matahari (Coronal Mass Ejection) menghantam bumi, medan magnet bumi bergetar dan berfluktuasi secara hebat dalam waktu singkat (perubahan fluks magnetik ΔΦ/Δt).
   - Berdasarkan Hukum Induksi Elektromagnetik Faraday, perubahan medan magnet ini menghasilkan arus induksi listrik di dalam konduktor logam apa pun yang membentang di permukaan bumi.

2. Geomagnetically Induced Currents (GIC):
   - Kabel transmisi listrik tegangan tinggi dan pipa gas bawah tanah yang membentang ratusan kilometer bertindak seperti kumparan raksasa penangkap induksi.
   - Timbullah arus searah kuasi-statis (GIC) berkekuatan ratusan Ampere yang mengalir masuk ke gardu-gardu induk listrik.
   - Arus ini menjenuhkan inti besi transformator (trafo) raksasa, menimbulkan panas berlebih ekstrem, melelehkan kumparan tembaga trafo, dan memicu ledakan serta padamnya listrik total (blackout) di satu negara seperti peristiwa badai matahari Quebec tahun 1989.

Jawaban yang paling tepat adalah Opsi B.`,
  },

  // ==========================================
  // STIMULUS 7 & 8: Geofisika & Kimia Tanah Pertanian
  // ==========================================

  // --- Soal 21: Kutub Magnet Bumi dan Aurora Borealis ---
  {
    id: 821,
    question: `Berdasarkan konsep cuaca antariksa dan medan geomagnetik bumi (Stimulus 7), tentukan apakah pernyataan berikut BENAR atau SALAH!

Pernyataan:
"Aurora Borealis hanya dapat terlihat di wilayah sekitar kutub utara bumi karena kutub magnet selatan bumi secara fisik terletak di dekat kutub utara geografis bumi, sehingga menarik partikel bermuatan positif (proton) lebih kuat ke wilayah tersebut."`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Konsep Kemagnetan Bumi dan Aurora Step-by-Step:

1. Hubungan Kutub Geografis dan Kutub Magnet Bumi:
   - Kutub Utara Geografis bumi (tempat berputarnya poros bumi di Arktik) secara magnetik merupakan KUTUB SELATAN MAGNET BUMI!
   - Buktinya: Jarum kompas kutub utara selalu tertarik menunjuk ke arah utara bumi (karena kutub utara magnet selalu tertarik ke kutub selatan magnet lawannya).

2. Munculnya Cahaya Aurora Borealis:
   - Karena kutub selatan magnet bumi berada di dekat kutub utara geografis, garis-garis gaya magnet bumi memusat dan masuk ke dalam bumi di wilayah Arktik ini.
   - Partikel plasma bermuatan dari angin surya dipandu oleh garis medan magnet ini menuju kutub utara, bertabrakan dengan atom oksigen dan nitrogen atmosfer pada ketinggian 100-300 km, memancarkan tirai cahaya hijau dan merah spektakuler yang dinamakan Aurora Borealis (Cahaya Utara).

Kesimpulan: Pernyataan pada soal sepenuhnya BENAR secara ilmiah.
Jawaban yang tepat adalah BENAR.`,
  },

  // --- Soal 22: Klasifikasi Kimiawi Kalsium Karbonat ---
  {
    id: 822,
    question: `**Stimulus 8: Pertanian Cerdas dan Kimia Tanah**
Dalam sistem pertanian cerdas (smart agriculture), pemantauan kondisi kimia tanah sangat penting. Untuk menetralkan tanah asam, petani biasanya melakukan pengapuran menggunakan senyawa kalsium karbonat (CaCO₃) atau kalsium hidroksida (Ca(OH)₂).

Berdasarkan Stimulus 8, tentukan apakah pernyataan berikut BENAR atau SALAH!

Pernyataan:
"Kalsium karbonat (CaCO₃) yang digunakan untuk pengapuran tanah dikategorikan sebagai campuran heterogen karena terdiri dari unsur kalsium, karbon, dan oksigen yang bergabung secara fisika."`,
    image: '/images/tryout/ipa_p8_q22.PNG',
    imageCaption: 'Stimulus 8: Pertanian Cerdas dan Kimia Tanah',
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 1, // SALAH
    isHots: false,
    explanation: `Memahami Klasifikasi Unsur, Senyawa, dan Campuran Step-by-Step:

1. Perbedaan Mendasar Senyawa vs Campuran:
   - Senyawa: Zat tunggal murni yang tersusun atas dua atau lebih unsur kimia berbeda yang BERGABUNG MELALUI REAKSI KIMIA (ikatan kimia) dengan perbandingan massa yang tetap dan pasti. Sifat senyawa berbeda total dari sifat unsur pembentuknya.
   - Campuran: Gabungan dua atau lebih zat berbeda yang BERCAMPUR SECARA FISIKA tanpa ikatan kimia dan perbandingannya bebas (misalnya air kopi, tanah, pasir campur kerikil).

2. Analisis Kalsium Karbonat (CaCO₃):
   - CaCO₃ memiliki rumus kimia baku yang terdiri dari 1 atom Kalsium (Ca), 1 atom Karbon (C), dan 3 atom Oksigen (O) yang saling berikatan ionik dan kovalen.
   - CaCO₃ adalah SENYAWA KIMIA MURNI (zat tunggal), BUKAN campuran heterogen!

Kesimpulan: Pernyataan tersebut SALAH.
Jawaban yang tepat adalah SALAH.`,
  },

  // --- Soal 23: Osmosis Akar pada Tanah Asam Pekat ---
  {
    id: 823,
    question: `Berdasarkan proses penyerapan air dan sifat keasaman tanah (Stimulus 8), tentukan apakah pernyataan berikut BENAR atau SALAH!

Pernyataan:
"Pada tanah dengan pH sangat rendah (asam), penyerapan air oleh akar tanaman melalui proses osmosis akan terhambat karena konsentrasi ion hidrogen (H⁺) yang tinggi di luar sel akar membuat lingkungan tanah menjadi hipertonis dibandingkan cairan di dalam sel rambut akar."`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Konsep Tekanan Osmosis pada Tanah Asam Step-by-Step:

1. Syarat Normal Masuknya Air ke Rambut Akar:
   - Normalnya, cairan di dalam sel rambut akar lebih pekat (banyak zat gula/mineral terlarut) dibanding air tanah di sekelilingnya.
   - Lingkungan sel akar bersifat hipertonis dan tanah bersifat hipotonis (encer), sehingga molekul air dari tanah dengan mudah meresap masuk menembus membran sel rambut akar secara osmosis spontan.

2. Apa yang Terjadi pada Tanah Sangat Asam (pH Rendah)?
   - Tanah yang sangat masam (pH < 5,0) dipenuhi oleh kelimpahan ion H⁺ dan ion logam terlarut (seperti Al³⁺ dan Fe²⁺).
   - Konsentrasi partikel terlarut di luar akar melonjak drastis, mengubah lingkungan larutan tanah menjadi HIPERTONIS (sangat pekat).
   - Akibatnya, air tanah sulit masuk ke dalam sel akar. Pada kasus ekstrem, air di dalam sel akar justru bisa tersedot keluar ke tanah (plasmolisis), membuat tanaman layu dan mati kekeringan meskipun tanahnya basah!

Kesimpulan: Pernyataan pada soal sepenuhnya BENAR.
Jawaban yang tepat adalah BENAR.`,
  },

  // --- Soal 24: Dampak Pupuk Kimia Berlebih dan Eutrofikasi ---
  {
    id: 824,
    question: `Berdasarkan pengelolaan kesuburan tanah dan keseimbangan lingkungan perairan (Stimulus 8), tentukan apakah pernyataan berikut BENAR atau SALAH!

Pernyataan:
"Penggunaan pupuk kimia buatan secara berlebihan dan terus-menerus tanpa diimbangi pupuk organik dapat merusak struktur tanah, membunuh mikroorganisme tanah yang bermanfaat, dan menyebabkan eutrofikasi di perairan sekitarnya."`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Dampak Pupuk Kimia Berlebihan Step-by-Step:

1. Dampak pada Struktur dan Biologi Tanah:
   - Pupuk kimia buatan anorganik (seperti urea, ZA, NPK) mengandung garam-garam sintetis berkonsentrasi tinggi.
   - Penggunaan tanpa kompos organik secara bertahun-tahun akan membuat tanah kehilangan humus, memadat keras seperti semen, asam, dan membunuh cacing serta bakteri pengurai tanah yang bermanfaat.

2. Dampak Eutrofikasi di Sungai dan Danau:
   - Sisa pupuk fosfat dan nitrat yang tidak terserap tanaman akan terbilas air hujan menuju sungai, danau, atau waduk.
   - Penumpukan nutrisi pupuk ini memicu fenomena EUTROFIKASI, yaitu ledakan pertumbuhan gulma air dan alga (algal bloom) yang menutupi seluruh permukaan air.
   - Ketika alga mati dan membusuk, bakteri pembusuk menguras seluruh oksigen terlarut (DO turun drastis), menyebabkan ikan dan biota air mati massal karena kehabisan napas.

Kesimpulan: Pernyataan pada soal 100% BENAR.
Jawaban yang tepat adalah BENAR.`,
  },

  // ==========================================
  // STIMULUS 9: Gangguan Endokrin akibat Polusi Zat Kimia
  // ==========================================

  // --- Soal 25: Pengaruh EDCs terhadap Sistem Reproduksi ---
  {
    id: 825,
    question: `**Stimulus 9: Gangguan Endokrin akibat Polusi Zat Kimia**
Banyak zat kimia sintetis seperti Bisphenol A (BPA) pada plastik dan phthalates terdeteksi mencemari lingkungan dan rantai makanan. Zat-zat ini dikenal sebagai Endocrine Disrupting Chemicals (EDCs) atau pengganggu hormon karena memiliki struktur molekul yang sangat mirip dengan hormon alami (seperti estrogen dan testosteron).

Berdasarkan Stimulus 9, tentukan apakah pernyataan berikut BENAR atau SALAH!

Pernyataan:
"EDCs mengganggu sistem reproduksi pria dengan cara menghambat proses spermatogenesis di dalam tubulus seminiferus testis melalui gangguan umpan balik hormonal pada kelenjar hipofisis yang menghasilkan LH dan FSH."`,
    image: '/images/tryout/ipa_p8_q25.PNG',
    imageCaption: 'Stimulus 9: Gangguan Endokrin akibat Polusi Zat Kimia',
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Fisiologi Sistem Hormon Reproduksi dan EDCs Step-by-Step:

1. Cara Kerja Poros Hormon Reproduksi Pria (Poros Hipotalamus-Hipofisis-Testis):
   - Kelenjar Hipofisis Anterior di dasar otak memproduksi dua hormon kunci:
     * LH (Luteinizing Hormone): Merangsang sel Leydig di testis untuk memproduksi hormon testosteron.
     * FSH (Follicle Stimulating Hormone): Merangsang sel Sertoli di tubulus seminiferus testis untuk memelihara dan memicu pembentukan sperma (spermatogenesis).

2. Bagaimana EDCs (seperti BPA) Mengacaukan Sistem Ini?
   - Molekul EDCs meniru hormon estrogen wanita atau memblokir reseptor androgen pria.
   - Otak (hipofisis) terkecoh dan mengira kadar hormon seks sudah terlampau tinggi, sehingga menurunkan sekresi hormon LH dan FSH (umpan balik negatif palsu).
   - Tanpa stimulasi FSH dan LH yang cukup, pembentukan sperma di dalam tubulus seminiferus testis terhenti atau mengalami kecacatan parah, menyebabkan penurunan kualitas sperma dan infertilitas.

Kesimpulan: Pernyataan pada soal sepenuhnya BENAR.
Jawaban yang tepat adalah BENAR.`,
  },
];
