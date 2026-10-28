import { DiagnosticCategory, SubjectId } from "../types";
import { PRE_TKA_CATEGORIES as MATH_PRE_TKA_CATEGORIES } from "./preTkaCategoriesData";

// =========================================================================
// DIAGNOSTIC TEST DATA FONDASI 4 MATA PELAJARAN (TKA SMP)
// MATEMATIKA, BAHASA INDONESIA, BAHASA INGGRIS, IPA
// =========================================================================

// 1. MATEMATIKA (4 Kategori Fondasi Lengkap - 100 Soal)
export const MATH_DIAGNOSTIC_CATEGORIES: DiagnosticCategory[] = MATH_PRE_TKA_CATEGORIES.map(cat => ({
  ...cat,
  subjectId: 'math' as SubjectId,
}));

// 2. BAHASA INDONESIA (4 Kategori Fondasi Lengkap)
export const INDO_DIAGNOSTIC_CATEGORIES: DiagnosticCategory[] = [
  {
    id: "indo_diag_1",
    subjectId: "indo",
    title: "Pemahaman Bacaan & Ide Pokok Paragraf",
    shortTitle: "Ide Pokok & Bacaan",
    badge: "15 Soal Diagnostik",
    description: "Evaluasi kemampuan menemukan gagasan utama, kalimat utama, fakta vs opini, dan simpulan teks.",
    questions: [
      {
        id: 2001,
        question: "Gagasan yang menjadi dasar pengembangan sebuah paragraf disebut...",
        options: ["Kalimat penjelas", "Ide pokok atau gagasan utama", "Judul paragraf", "Kata kunci"],
        correctAnswer: 1,
        explanation: "<b>Jawaban Benar: Ide pokok atau gagasan utama</b><br><br>Ide pokok (gagasan utama) adalah ide/gagasan yang menjadi pokok pengembangan paragraf. Ide pokok ini tertuang dalam kalimat utama dan diperjelas oleh beberapa kalimat penjelas.",
      },
      {
        id: 2002,
        question: "Paragraf yang memiliki kalimat utama di awal paragraf disebut paragraf...",
        options: ["Induktif", "Deduktif", "Campuran", "Naratif"],
        correctAnswer: 1,
        explanation: "<b>Jawaban Benar: Deduktif</b><br><br>Cara mengingat mudah:<br>&bull; <b>Deduktif:</b> <u>D</u>i awal (kalimat utama di awal lalu diikuti kalimat penjelas).<br>&bull; <b>Induktif:</b> Di akh<u>i</u>r (penjelasan di awal, kesimpulan/kalimat utama di akhir).",
      },
      {
        id: 2003,
        question: "Bacalah kutipan berikut: <i>'Hutan mangrove memiliki fungsi fisik yang sangat penting. Akar-akar pohon mangrove yang kokoh mampu menahan gempuran ombak laut. Hal ini efektif mencegah terjadinya abrasi pantai.'</i> Kalimat utama paragraf tersebut adalah...",
        options: [
          "Hutan mangrove memiliki fungsi fisik yang sangat penting.",
          "Akar-akar pohon mangrove yang kokoh mampu menahan gempuran ombak laut.",
          "Hal ini efektif mencegah terjadinya abrasi pantai.",
          "Semua pohon di laut memiliki akar yang kokoh."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Hutan mangrove memiliki fungsi fisik yang sangat penting.</b><br><br>Kalimat pertama menyatakan pernyataan umum tentang fungsi fisik mangrove, yang kemudian dijelaskan lebih rinci pada kalimat kedua dan ketiga (bagaimana akarnya menahan ombak dan mencegah abrasi).",
      },
      {
        id: 2004,
        question: "Pernyataan yang memuat informasi yang dapat dibuktikan kebenarannya secara nyata dan objektif disebut...",
        options: ["Opini", "Fakta", "Asumsi", "Prediksi"],
        correctAnswer: 1,
        explanation: "<b>Jawaban Benar: Fakta</b><br><br><b>Fakta</b> adalah hal atau peristiwa yang benar-benar ada atau terjadi dan dapat dibuktikan kebenarannya dengan data/angka nyata. Sedangkan <b>Opini</b> adalah pendapat, tanggapan, atau pemikiran subjektif seseorang.",
      },
      {
        id: 2005,
        question: "Manakah di antara kalimat berikut yang merupakan sebuah FAKTA?",
        options: [
          "Belajar matematika di pagi hari terasa sangat menyenangkan.",
          "Gunung Bromo berada di wilayah Provinsi Jawa Timur.",
          "Buku cerita petualangan itu pasti disukai semua anak.",
          "Masakan di kantin sekolah rasanya sangat lezat."
        ],
        correctAnswer: 1,
        explanation: "<b>Jawaban Benar: Gunung Bromo berada di wilayah Provinsi Jawa Timur.</b><br><br>Letak geografis Gunung Bromo adalah fakta nyata yang dapat diverifikasi secara geografis. Kalimat lainnya mengandung kata sifat subjektif ('menyenangkan', 'pasti disukai', 'sangat lezat') yang merupakan opini.",
      },
      {
        id: 2006,
        question: "Rumusan akhir dari uraian suatu teks yang ditarik berdasarkan gagasan-gagasan yang ada disebut...",
        options: ["Latar belakang", "Simpulan", "Amanat", "Sinopsis"],
        correctAnswer: 1,
        explanation: "<b>Jawaban Benar: Simpulan</b><br><br><b>Simpulan</b> adalah ikhtisar akhir atau intisari pemikiran yang dirumuskan setelah membaca dan memahami keseluruhan isi teks secara menyeluruh.",
      },
      {
        id: 2007,
        question: "Pesan moral atau nasihat positif yang ingin disampaikan oleh penulis melalui cerita kepada pembaca disebut...",
        options: ["Tema", "Alur", "Amanat", "Latar"],
        correctAnswer: 2,
        explanation: "<b>Jawaban Benar: Amanat</b><br><br><b>Amanat</b> adalah pesan moral atau nilai keteladanan yang disisipkan oleh pengarang dalam karya sastra agar dapat dipetik oleh pembaca.",
      },
      {
        id: 2008,
        question: "Perbedaan utama antara informasi tersurat dan tersirat adalah...",
        options: [
          "Tersurat tertulis langsung di teks, sedangkan tersirat harus disimpulkan sendiri.",
          "Tersurat berupa pendapat, sedangkan tersirat berupa angka pasti.",
          "Tersurat hanya ada di puisi, sedangkan tersirat hanya ada di berita.",
          "Tersurat tidak dapat dibuktikan, sedangkan tersirat pasti benar."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Tersurat tertulis langsung di teks, sedangkan tersirat harus disimpulkan sendiri.</b><br><br><b>Tersurat</b> (eksplisit) = kata-katanya tertulis jelas dan langsung dibaca di teks. <b>Tersirat</b> (implisit) = maknanya tersembunyi di balik konteks bacaan sehingga perlu penalaran pembaca.",
      },
      {
        id: 2009,
        question: "Sudut pandang pengarang yang menggunakan kata ganti 'aku' atau 'saya' dalam cerita fiksi disebut sudut pandang...",
        options: ["Orang pertama pelaku utama", "Orang ketiga serbatahu", "Orang kedua", "Orang ketiga pengamat"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Orang pertama pelaku utama</b><br><br>Penggunaan kata ganti orang pertama ('aku'/'saya') menunjukkan tokoh menceritakan pengalamannya sendiri sebagai tokoh/pelaku utama.",
      },
      {
        id: 2010,
        question: "Urutan peristiwa atau jalannya cerita dari awal sampai akhir dalam sebuah karya narasi disebut...",
        options: ["Latar", "Tokoh", "Alur atau Plot", "Sudut pandang"],
        correctAnswer: 2,
        explanation: "<b>Jawaban Benar: Alur atau Plot</b><br><br><b>Alur (plot)</b> adalah rangkaian jalinan peristiwa yang memiliki hubungan sebab-akibat yang membangun jalannya cerita dari awal, konflik, klimaks, hingga penyelesaian.",
      },
      {
        id: 2011,
        question: "Kutipan teks: <i>'Jika kita tidak membuang sampah pada tempatnya, saluran air akan tersumbat dan memicu banjir saat musim hujan tiba.'</i> Hubungan antarkalimat tersebut menyatakan hubungan...",
        options: ["Sebab-akibat", "Pertentangan", "Pilihan", "Pengurutan waktu"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Sebab-akibat</b><br><br>Klausa 'membuang sampah sembarangan' merupakan sebab (kondisi pemicu), dan 'saluran tersumbat memicu banjir' adalah akibat logis yang ditimbulkan.",
      },
      {
        id: 2012,
        question: "Bagian teks eksposisi yang memuat pengenalan isu, masalah, atau pandangan umum penulis disebut...",
        options: ["Tesis", "Rangkaian argumen", "Penegasan ulang", "Koda"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Tesis</b><br><br>Struktur teks eksposisi terdiri atas: 1. <b>Tesis</b> (pengenalan isu/pandangan umum), 2. <b>Rangkaian Argumen</b> (fakta dan bukti pendukung), 3. <b>Penegasan Ulang</b> (perumusan kembali simpulan).",
      },
      {
        id: 2013,
        question: "Kalimat berikut yang menggunakan konjungsi kausalitas (sebab) adalah...",
        options: [
          "Rani rajin belajar, sehingga ia berhasil meraih juara pertama.",
          "Ayah membaca koran sambil meminum teh hangat di beranda.",
          "Kamu boleh memilih tas warna biru atau warna hitam.",
          "Meskipun hari hujan lebat, Andi tetap berangkat ke sekolah."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Rani rajin belajar, sehingga ia berhasil meraih juara pertama.</b><br><br>Kata penghubung <b>sehingga</b>, <b>karena</b>, <b>sebab</b>, dan <b>oleh karena itu</b> merupakan konjungsi kausalitas.",
      },
      {
        id: 2014,
        question: "Ringkasan yang menyajikan kembali karangan panjang dalam bentuk singkat dan efektif tanpa mengubah sudut pandang pengarang disebut...",
        options: ["Rangkuman / Ringkasan", "Resensi", "Kritik", "Makalah"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Rangkuman / Ringkasan</b><br><br>Ringkasan adalah penyajian singkat dari karangan asli dengan tetap mempertahankan urutan isi dan sudut pandang pengarang aslinya.",
      },
      {
        id: 2015,
        question: "Teks yang bertujuan memberikan petunjuk atau panduan langkah-langkah dalam melakukan sesuatu secara berurutan adalah teks...",
        options: ["Prosedur", "Laporan hasil observasi", "Deskripsi", "Eksemplum"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Prosedur</b><br><br><b>Teks prosedur</b> berisi tahapan/langkah-langkah terstruktur untuk memandu seseorang membuat atau mengoperasikan sesuatu.",
      },
    ],
  },
  {
    id: "indo_diag_2",
    subjectId: "indo",
    title: "Kaidah EBI, Tanda Baca & Huruf Kapital",
    shortTitle: "EBI & Huruf Kapital",
    badge: "15 Soal Diagnostik",
    description: "Evaluasi penguasaan penulisan huruf kapital, tanda baca koma, titik dua, kata baku, dan kata serapan sesuai EYD/EBI.",
    questions: [
      {
        id: 2016,
        question: "Penulisan huruf kapital pada nama geografi yang benar adalah...",
        options: [
          "Kami menyeberangi Selat Sunda pada malam hari.",
          "Kami menyeberangi selat Sunda pada malam hari.",
          "Kami menyeberangi Selat sunda pada malam hari.",
          "Kami menyeberangi selat sunda pada malam hari."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Kami menyeberangi Selat Sunda pada malam hari.</b><br><br>Huruf kapital dipakai sebagai huruf pertama nama geografi jika diikuti nama diri geografinya (contoh: <i>Selat Sunda</i>, <i>Sungai Musi</i>, <i>Gunung Semeru</i>).",
      },
      {
        id: 2017,
        question: "Manakah penulisan gelar akademik yang benar sesuai kaidah EBI?",
        options: ["Dr. Ir. Bagas Pratama, M.Pd.", "Dr, Ir, Bagas Pratama M.Pd", "DR. IR. Bagas Pratama, M,Pd.", "Dr. Ir. Bagas Pratama. M.Pd."],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Dr. Ir. Bagas Pratama, M.Pd.</b><br><br>Gelar depan diakhiri titik (<i>Dr.</i>, <i>Ir.</i>). Nama diri dipisahkan dari gelar belakang dengan tanda koma (,), dan singkatan gelar belakang dipisahkan titik di tiap unsurnya (<i>M.Pd.</i>).",
      },
      {
        id: 2018,
        question: "Penulisan kata gabung serangkai yang benar adalah...",
        options: ["Pascasarjana", "Pasca sarjana", "Pasca-sarjana", "Paska sarjana"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Pascasarjana</b><br><br>Bentuk terikat seperti <i>pasca-</i>, <i>antar-</i>, <i>sub-</i>, <i>tuna-</i>, <i>non-</i>, <i>panca-</i> ditulis <b>serangkai</b> dengan kata yang mengikutinya (contoh: <i>pascasarjana</i>, <i>antarkota</i>, <i>tunawicara</i>).",
      },
      {
        id: 2019,
        question: "Kata baku yang tepat di bawah ini adalah...",
        options: ["Aktivitas, izin, jadwal", "Aktifitas, ijin, jadual", "Aktivitas, ijin, jadwal", "Aktifitas, izin, jadual"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Aktivitas, izin, jadwal</b><br><br>Bentuk baku menurut KBBI:<br>&bull; <i>Aktivitas</i> (bukan aktifitas)<br>&bull; <i>Izin</i> (bukan ijin)<br>&bull; <i>Jadwal</i> (bukan jadual)",
      },
      {
        id: 2020,
        question: "Tanda titik dua (:) tepat digunakan pada kalimat...",
        options: [
          "Ibu membeli perlengkapan dapur: wajan, panci, dan spatula.",
          "Ibu membeli: wajan, panci, dan spatula di pasar.",
          "Ibu membeli wajan: panci dan spatula.",
          "Ibu membeli, wajan: panci, dan spatula."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Ibu membeli perlengkapan dapur: wajan, panci, dan spatula.</b><br><br>Tanda titik dua digunakan pada akhir pernyataan lengkap yang diikuti rincian pemerian (setelah frasa pengantar lengkap seperti 'perlengkapan dapur').",
      },
      {
        id: 2021,
        question: "Penggunaan tanda koma (,) yang tepat pada kalimat majemuk bertingkat adalah...",
        options: [
          "Karena hari hujan, pertandingan sepak bola ditunda.",
          "Pertandingan sepak bola ditunda, karena hari hujan.",
          "Karena, hari hujan pertandingan sepak bola ditunda.",
          "Pertandingan, sepak bola ditunda karena hari hujan."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Karena hari hujan, pertandingan sepak bola ditunda.</b><br><br>Jika anak kalimat mendahului induk kalimat (diawali kata hubung di depan), maka anak kalimat dipisahkan dengan tanda koma. Jika induk kalimat di depan, tidak perlu tanda koma.",
      },
      {
        id: 2022,
        question: "Manakah kalimat langsung dengan tanda baca petik ganda yang benar?",
        options: [
          "Budi berkata, \"Saya akan datang tepat waktu.\"",
          "Budi berkata: \"Saya akan datang tepat waktu\".",
          "\"Saya akan datang tepat waktu\"! kata Budi.",
          "Budi berkata \"Saya akan datang tepat waktu.\""
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Budi berkata, \"Saya akan datang tepat waktu.\"</b><br><br>Tanda petik mengapit kalimat langsung, diawali tanda koma sebelum petik buka, dan tanda titik penutup kalimat berada <b>di dalam</b> tanda petik penutup.",
      },
      {
        id: 2023,
        question: "Penulisan partikel '-pun' yang ditulis terpisah dari kata dasarnya adalah...",
        options: [
          "Meskipun hari terik, dia tetap bekerja.",
          "Jika kamu tidak pergi, aku pun tidak akan pergi.",
          "Walaupun lelah, dia tetap tersenyum.",
          "Sungguhpun demikian, kita harus tetap waspada."
        ],
        correctAnswer: 1,
        explanation: "<b>Jawaban Benar: Jika kamu tidak pergi, aku pun tidak akan pergi.</b><br><br>Partikel <i>pun</i> yang bermakna 'juga' ditulis <b>terpisah</b> (<i>aku pun</i>, <i>makan pun</i>). Sedangkan yang merupakan kata penghubung lazim ditulis serangkai (<i>meskipun</i>, <i>walaupun</i>, <i>sungguhpun</i>, <i>adapun</i>).",
      },
      {
        id: 2024,
        question: "Bentuk baku dari kata serapan bahasa asing yang benar adalah...",
        options: ["Kualitas, analisis, risiko", "Kwalitas, analisa, resiko", "Kwalitas, analisis, resiko", "Kualitas, analisa, risiko"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Kualitas, analisis, risiko</b><br><br>Baku menurut KBBI: <i>kualitas</i> (quality), <i>analisis</i> (analysis), <i>risiko</i> (risk).",
      },
      {
        id: 2025,
        question: "Penulisan bilangan dan angka yang benar menurut EBI adalah...",
        options: [
          "Sebanyak 15 orang siswa mengikuti olimpiade sains.",
          "15 orang siswa mengikuti olimpiade sains.",
          "Sebanyak lima belas orang siswa mengikuti olimpiade sains.",
          "Sebanyak 15 siswa-siswa mengikuti olimpiade sains."
        ],
        correctAnswer: 2,
        explanation: "<b>Jawaban Benar: Sebanyak lima belas orang siswa mengikuti olimpiade sains.</b><br><br>Bilangan dalam teks yang dapat dinyatakan dengan satu atau dua kata ditulis dengan huruf (<i>lima belas</i>). Selain itu, angka tidak boleh diletakkan di awal kalimat (hindari mengawali kalimat dengan angka '15').",
      },
      {
        id: 2026,
        question: "Kata ulang yang bermakna 'saling' adalah...",
        options: ["Pukul-memukul", "Rumah-rumah", "Kupu-kupu", "Berlari-lari"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Pukul-memukul</b><br><br>Bentuk ulang resiprokal seperti <i>pukul-memukul</i>, <i>tolong-menolong</i>, <i>salam-salaman</i> bermakna 'saling melakukan perbuatan'.",
      },
      {
        id: 2027,
        question: "Penulisan kata depan 'di' yang benar menunjukkan tempat adalah...",
        options: [
          "Buku itu diletakkan di atas meja.",
          "Buku itu diletakkan diatas meja.",
          "Buku itu di letakkan di atas meja.",
          "Buku itu dilepaskan di-atas meja."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Buku itu diletakkan di atas meja.</b><br><br>Kata depan <b>di</b> penunjuk tempat (<i>di atas</i>, <i>di sekolah</i>, <i>di rumah</i>) ditulis <b>terpisah</b>. Awalan <b>di-</b> pembentuk kata kerja pasif (<i>diletakkan</i>, <i>dibaca</i>) ditulis <b>serangkai</b>.",
      },
      {
        id: 2028,
        question: "Manakah kalimat berikut yang menggunakan tanda hubung (-) secara benar?",
        options: [
          "Peringatan HUT ke-81 Republik Indonesia berlangsung khidmat.",
          "Peringatan HUT ke 81 Republik Indonesia berlangsung khidmat.",
          "Peringatan HUT ke - 81 Republik Indonesia berlangsung khidmat.",
          "Peringatan HUT ke81 Republik Indonesia berlangsung khidmat."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Peringatan HUT ke-81 Republik Indonesia berlangsung khidmat.</b><br><br>Tanda hubung (-) digunakan untuk merangkaikan awalan <i>ke-</i> dengan angka (contoh: <i>ke-81</i>, <i>abad ke-21</i>).",
      },
      {
        id: 2029,
        question: "Penulisan singkatan nama orang dan gelar yang tepat adalah...",
        options: ["A.H. Nasution", "AH. Nasution", "A. H. Nasution", "AH Nasution"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: A.H. Nasution</b><br><br>Singkatan nama orang, gelar, sapaan, atau jabatan diikuti dengan tanda titik pada setiap unsur singkatan tersebut tanpa spasi ganda (<i>A.H. Nasution</i>).",
      },
      {
        id: 2030,
        question: "Kalimat yang menggunakan tanda kurung () dengan benar adalah...",
        options: [
          "WHO (World Health Organization) mengeluarkan pedoman gizi baru.",
          "WHO World Health Organization (mengeluarkan) pedoman gizi baru.",
          "(WHO World Health Organization) mengeluarkan pedoman gizi baru.",
          "WHO World Health Organization mengeluarkan (pedoman gizi baru)."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: WHO (World Health Organization) mengeluarkan pedoman gizi baru.</b><br><br>Tanda kurung digunakan untuk mengapit keterangan, penjelasan tambahan, atau kepanjangan dari sebuah singkatan/istilah.",
      },
    ],
  },
  {
    id: "indo_diag_3",
    subjectId: "indo",
    title: "Struktur Kalimat Efektif & Tata Bahasa",
    shortTitle: "Kalimat Efektif & Tata Bahasa",
    badge: "15 Soal Diagnostik",
    description: "Evaluasi kehematan kata, kelogisan kalimat, kepaduan subjek-predikat, dan keparalelan bentuk.",
    questions: [
      {
        id: 2031,
        question: "Ciri utama dari kalimat efektif adalah...",
        options: [
          "Memiliki susunan subjek dan predikat yang jelas serta hemat kata.",
          "Menggunakan kata-kata yang sulit dan berbelit-belit.",
          "Memuat sebanyak mungkin kata majemuk.",
          "Tidak memiliki predikat agar lebih singkat."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Memiliki susunan subjek dan predikat yang jelas serta hemat kata.</b><br><br>Kalimat efektif adalah kalimat yang mampu menyampaikan gagasan secara tepat, jelas, logis, memiliki kelengkapan struktur (minimal S-P), dan tidak bertele-tele (hemat kata).",
      },
      {
        id: 2032,
        question: "Kalimat yang mengalami pemborosan kata (pleonasme) adalah...",
        options: [
          "Para hadirin sekalian dipersilakan berdiri.",
          "Hadirin dipersilakan berdiri.",
          "Para tamu dipersilakan duduk.",
          "Bapak dan Ibu dipersilakan masuk."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Para hadirin sekalian dipersilakan berdiri.</b><br><br>Kata <i>para</i>, <i>hadirin</i>, dan <i>sekalian</i> sama-sama bermakna jamak (banyak). Penggunaan ketiganya sekaligus merupakan pemborosan kata yang tidak efektif.",
      },
      {
        id: 2033,
        question: "Perbaikan kalimat rancu <i>'Kepada Bapak Kepala Sekolah, waktu dan tempat kami persilakan'</i> menjadi kalimat efektif yang benar adalah...",
        options: [
          "Bapak Kepala Sekolah kami persilakan menyampaikan sambutan.",
          "Waktu dan tempat dipersilakan untuk Kepala Sekolah.",
          "Kepada Kepala Sekolah waktu dipersilakan.",
          "Tempat dan waktu silakan Bapak Kepala Sekolah."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Bapak Kepala Sekolah kami persilakan menyampaikan sambutan.</b><br><br>Yang dipersilakan berbicara adalah orangnya (Bapak Kepala Sekolah), bukan benda mati ('waktu dan tempat'). Maka kalimat yang logis adalah menyapa orangnya langsung.",
      },
      {
        id: 2034,
        question: "Kalimat yang memenuhi asas keparalelan (kesejajaran bentuk) adalah...",
        options: [
          "Kegiatan itu meliputi pendaftaran peserta, pengelompokan regu, dan pelaksanaan lomba.",
          "Kegiatan itu meliputi pendaftaran peserta, mengelompokkan regu, dan lomba dilaksanakan.",
          "Kegiatan itu mendaftar peserta, pengelompokan regu, dan pelaksanaan lomba.",
          "Kegiatan itu mendaftarkan peserta, kelompokan regu, dan dilaksanakan lomba."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Kegiatan itu meliputi pendaftaran peserta, pengelompokan regu, dan pelaksanaan lomba.</b><br><br>Kesejajaran bentuk menuntut seluruh unsur rincian memakai imbuhan yang seragam, yaitu semuanya nomina berimbuhan <i>pe-an</i> (<i>pendaftaran</i>, <i>pengelompokan</i>, <i>pelaksanaan</i>).",
      },
      {
        id: 2035,
        question: "Manakah kalimat yang memiliki pola Subjek - Predikat - Objek - Keterangan (S-P-O-K)?",
        options: [
          "Ayah (S) menanam (P) pohon mangga (O) di kebun belakang (K).",
          "Adik menangis tersedu-sedu di kamar.",
          "Ibu sedang memasak sup lezat.",
          "Mereka berdiskusi tentang tugas sekolah."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Ayah menanam pohon mangga di kebun belakang.</b><br><br>Analisis jabatan:<br>&bull; <i>Ayah</i> = Subjek (S)<br>&bull; <i>menanam</i> = Predikat (P)<br>&bull; <i>pohon mangga</i> = Objek (O)<br>&bull; <i>di kebun belakang</i> = Keterangan tempat (K).",
      },
      {
        id: 2036,
        question: "Kalimat pasif ditandai oleh...",
        options: [
          "Subjek dikenai tindakan dan predikat biasanya berawalan di- atau ter-.",
          "Subjek selalu melakukan perbuatan dan predikat berawalan me-.",
          "Kalimat yang tidak boleh memiliki objek.",
          "Kalimat yang selalu berbentuk pertanyaan."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Subjek dikenai tindakan dan predikat biasanya berawalan di- atau ter-.</b><br><br>Pada kalimat pasif (contoh: <i>Buku dibaca oleh Andi</i>), subjek kalimat (<i>Buku</i>) adalah pihak yang dikenai pekerjaan oleh predikat berimbuhan <i>di-</i>.",
      },
      {
        id: 2037,
        question: "Perubahan kalimat aktif <i>'Reno mencuci sepeda motor di halaman'</i> menjadi kalimat pasif yang tepat adalah...",
        options: [
          "Sepeda motor dicuci oleh Reno di halaman.",
          "Di halaman Reno mencuci sepeda motornya.",
          "Reno dicuci sepeda motornya di halaman.",
          "Sepeda motor Reno dicuci mencuci di halaman."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Sepeda motor dicuci oleh Reno di halaman.</b><br><br>Objek (<i>sepeda motor</i>) berpindah menjadi subjek di depan, dan predikat aktif <i>mencuci</i> berubah menjadi pasif <i>dicuci</i>.",
      },
      {
        id: 2038,
        question: "Kata penghubung (konjungsi) intrakalimat yang menyatakan pertentangan adalah...",
        options: ["tetapi, melainkan, sedangkan", "dan, serta, lagi pula", "karena, sebab, oleh karena itu", "sehingga, sampai-sampai"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: tetapi, melainkan, sedangkan</b><br><br>Konjungsi pertentangan intrakalimat menghubungkan dua klausa yang berlawanan maknanya (<i>tetapi</i> untuk klausa berlawanan, <i>melainkan</i> setelah kata ingkar 'bukan').",
      },
      {
        id: 2039,
        question: "Kalimat yang tidak efektif karena subjeknya ganda (bertingkat) adalah...",
        options: [
          "Soal itu saya kurang memahaminya.",
          "Saya kurang memahami soal itu.",
          "Soal itu sulit dipahami.",
          "Guru menerangkan soal itu dengan jelas."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Soal itu saya kurang memahaminya.</b><br><br>Kalimat tersebut tidak terstruktur karena menempatkan 'soal itu' di depan tanpa fungsi yang jelas kemudian diikuti 'saya' dan akhiran '-nya' yang berulang. Bentuk efektifnya: <i>Saya kurang memahami soal itu</i>.",
      },
      {
        id: 2040,
        question: "Kalimat majemuk setara penggabungan ditandai dengan konjungsi...",
        options: ["Dan, serta", "Tetapi, namun", "Atau", "Supaya, agar"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Dan, serta</b><br><br>Konjungsi koordinatif penggabungan/penjumlahan menggunakan kata <i>dan</i> serta <i>serta</i>.",
      },
      {
        id: 2041,
        question: "Makna imbuhan <i>meN-kan</i> pada kalimat <i>'Kakak membelikan adik buku cerita'</i> adalah...",
        options: ["Melakukan untuk orang lain (benefaktif)", "Menuju ke suatu tempat", "Menyebabkan jadi", "Menganggap sebagai"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Melakukan untuk orang lain (benefaktif)</b><br><br>Kata <i>membelikan</i> berarti 'membeli sesuatu demi kepentingan orang lain (adik)'.",
      },
      {
        id: 2042,
        question: "Kalimat berikut yang mengandung kata bermakna konotatif (makna kias) adalah...",
        options: [
          "Pencuri itu akhirnya dibawa ke meja hijau untuk diadili.",
          "Meja makan di ruang tengah dicat warna hijau.",
          "Ibu membeli sayuran hijau segar di pasar pagi.",
          "Pohon di depan rumah berdaun hijau rimbun."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Pencuri itu akhirnya dibawa ke meja hijau untuk diadili.</b><br><br>Ungkapan <b>meja hijau</b> adalah makna kiasan (konotatif) yang berarti 'pengadilan'. Kalimat lainnya menggunakan kata hijau dengan makna lugas (denotatif).",
      },
      {
        id: 2043,
        question: "Antonim (lawan kata) dari kata <i>'Optimistis'</i> adalah...",
        options: ["Pesimistis", "Realistis", "Dinamis", "Progresif"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Pesimistis</b><br><br><i>Optimistis</i> berarti berpengharapan baik/yakin akan masa depan yang cerah, lawan katanya adalah <i>pesimistis</i> (mudah putus asa/berpandangan suram).",
      },
      {
        id: 2044,
        question: "Sinonim (persamaan kata) dari kata <i>'Komprehensif'</i> adalah...",
        options: ["Menyeluruh dan luas", "Sangat singkat", "Terpisah-pisah", "Sementara waktu"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Menyeluruh dan luas</b><br><br><i>Komprehensif</i> bermakna bersifat mampu menangkap banyak hal secara menyeluruh, luas, dan lengkap.",
      },
      {
        id: 2045,
        question: "Peribahasa <i>'Air beriak tanda tak dalam'</i> memiliki makna...",
        options: [
          "Orang yang banyak bicara dan menyombongkan diri biasanya ilmunya sedikit.",
          "Orang yang pendiam biasanya sangat pandai.",
          "Air yang tenang pasti berbahaya.",
          "Jangan bermain di sungai yang arusnya deras."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Orang yang banyak bicara dan menyombongkan diri biasanya ilmunya sedikit.</b><br><br>Peribahasa ini mengibaratkan orang yang suka pamer atau banyak omong biasanya memiliki pengetahuan yang dangkal.",
      },
    ],
  },
];

// 3. BAHASA INGGRIS (4 Kategori Fondasi Lengkap)
export const ENG_DIAGNOSTIC_CATEGORIES: DiagnosticCategory[] = [
  {
    id: "eng_diag_1",
    subjectId: "eng",
    title: "Reading Comprehension & Text Purpose",
    shortTitle: "Reading & Text Purpose",
    badge: "15 Soal Diagnostik",
    description: "Evaluasi kemampuan menangkap ide pokok teks, tujuan komunikatif (purpose), informasi rinci, dan rujukan kata (reference).",
    questions: [
      {
        id: 3001,
        question: "What is the main purpose of a <b>Descriptive Text</b>?",
        options: [
          "To describe a particular person, place, or thing in detail.",
          "To entertain the reader with an imaginative story.",
          "To tell the steps on how to make something.",
          "To persuade the reader to buy a product."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: To describe a particular person, place, or thing in detail.</b><br><br>Tujuan komunikatif dari <i>Descriptive Text</i> adalah menggambarkan objek khusus (orang, tempat, atau benda) secara detail dan spesifik.",
      },
      {
        id: 3002,
        question: "What is the generic structure of a <b>Recount Text</b>?",
        options: [
          "Orientation - Events - Re-orientation",
          "Orientation - Complication - Resolution",
          "Goal - Materials - Steps",
          "Identification - Description"
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Orientation - Events - Re-orientation</b><br><br><i>Recount Text</i> (menceritakan pengalaman masa lalu) tersusun atas:<br>1. <b>Orientation:</b> Pengenalan tokoh, waktu, tempat.<br>2. <b>Events:</b> Urutan peristiwa kronologis.<br>3. <b>Re-orientation:</b> Kesimpulan/komentar penutup.",
      },
      {
        id: 3003,
        question: "Read the text: <i>'Last Sunday, my family and I visited Parangtritis Beach. We arrived at 9 AM and enjoyed the sea breeze. In the afternoon, we built sandcastles.'</i> The text is mainly about...",
        options: [
          "The writer's holiday at Parangtritis Beach.",
          "How to build sandcastles properly.",
          "The history of Parangtritis Beach.",
          "A description of sea breeze."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: The writer's holiday at Parangtritis Beach.</b><br><br>Teks tersebut menceritakan pengalaman liburan penulis bersama keluarga di Pantai Parangtritis pada hari Minggu lalu.",
      },
      {
        id: 3004,
        question: "In a <b>Narrative Text</b>, the part where the problem in the story reaches its climax and gets resolved is called...",
        options: ["Resolution", "Orientation", "Complication", "Identification"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Resolution</b><br><br>Struktur <i>Narrative Text</i>:<br>&bull; <i>Orientation:</i> Pengenalan karakter.<br>&bull; <i>Complication:</i> Munculnya masalah/konflik.<br>&bull; <b><i>Resolution:</i></b> Penyelesaian masalah/resolusi.",
      },
      {
        id: 3005,
        question: "Read sentence: <i>'Sarah loves reading mystery novels. <u>She</u> borrows three books from the library every week.'</i> The underlined word '<u>She</u>' refers to...",
        options: ["Sarah", "The library", "Mystery novels", "The writer"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Sarah</b><br><br>Kata ganti orang ketiga tunggal perempuan 'She' pada kalimat kedua menggantikan subjek 'Sarah' pada kalimat pertama.",
      },
      {
        id: 3006,
        question: "What is the primary communicative purpose of a <b>Procedure Text</b>?",
        options: [
          "To explain how something is made or done through a sequence of actions/steps.",
          "To describe funny memories.",
          "To report scientific facts about animals.",
          "To retell fairy tales."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: To explain how something is made or done through a sequence of actions/steps.</b><br><br><i>Procedure Text</i> (resep, panduan manual) bertujuan memberikan instruksi langkah demi langkah cara membuat atau melakukan sesuatu.",
      },
      {
        id: 3007,
        question: "Which of the following phrases is an <b>imperative sentence</b> (command) commonly found in recipe steps?",
        options: [
          "Stir the mixture gently until smooth.",
          "I am stirring the mixture right now.",
          "She stirred the sugar yesterday.",
          "Do you want to stir the tea?"
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Stir the mixture gently until smooth.</b><br><br>Kalimat perintah (imperative) diawali dengan kata kerja bentuk pertama (Verb 1) seperti <i>Stir</i>, <i>Cut</i>, <i>Pour</i>, <i>Add</i>.",
      },
      {
        id: 3008,
        question: "A text that presents information about something as a result of systematic observation and scientific analysis is a...",
        options: ["Report Text", "Narrative Text", "Advertisement", "Greeting Card"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Report Text</b><br><br><i>Report Text</i> mendeskripsikan fenomena alam, hewan, tumbuhan, atau benda secara umum berdasarkan hasil observasi ilmiah.",
      },
      {
        id: 3009,
        question: "What is the synonym of the word <b>'huge'</b> in: <i>'Elephants are <u>huge</u> mammals living in grasslands.'</i>?",
        options: ["Enormous / Very big", "Tiny / Small", "Fast", "Dangerous"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Enormous / Very big</b><br><br><i>Huge</i> berarti sangat besar, bersinonim dengan <i>enormous</i>, <i>gigantic</i>, atau <i>very large</i>.",
      },
      {
        id: 3010,
        question: "What is the antonym (opposite meaning) of <b>'ancient'</b> in: <i>'The museum displays <u>ancient</u> artifacts.'</i>?",
        options: ["Modern / Contemporary", "Old", "Historical", "Valuable"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Modern / Contemporary</b><br><br><i>Ancient</i> artinya kuno/purbakala, lawan katanya adalah <i>modern</i> atau <i>contemporary</i> (kekinian).",
      },
      {
        id: 3011,
        question: "Read the notice: <b>'NO LITTERING. FINE UP TO $100'</b>. Where do you usually find this notice?",
        options: [
          "In public parks, streets, or schools.",
          "Inside a washing machine.",
          "On an airplane ticket.",
          "Inside a dictionary."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: In public parks, streets, or schools.</b><br><br>Pemberitahuan larangan membuang sampah sembarangan (no littering) biasanya dipasang di area fasilitas umum seperti taman, jalan, dan sekolah.",
      },
      {
        id: 3012,
        question: "In the story 'The Tortoise and The Hare', what is the main moral lesson of the fable?",
        options: [
          "Slow and steady wins the race; never underestimate others.",
          "Fast runners will always win without practicing.",
          "Sleeping during a race is healthy.",
          "Never run in the morning."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Slow and steady wins the race; never underestimate others.</b><br><br>Pesan moral fabel Kura-kura dan Kelinci adalah ketekunan dan kerendahan hati mengalahkan kesombongan.",
      },
      {
        id: 3013,
        question: "Read the short invitation: <i>'Please join us to celebrate Kevin's 14th Birthday on Saturday, May 10th at 4 PM.'</i> How old will Kevin be?",
        options: ["14 years old", "10 years old", "4 years old", "15 years old"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: 14 years old</b><br><br>Teks kartu undangan secara jelas menyatakan 'celebrate Kevin's 14th Birthday'.",
      },
      {
        id: 3014,
        question: "What type of text usually uses transitional adverbs like <i>'First, Then, After that, Next, Finally'</i>?",
        options: ["Procedure Text / Recount Text", "Descriptive Text", "Greeting Card", "Short Message"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Procedure Text / Recount Text</b><br><br>Kata urutan waktu (sequence markers) digunakan untuk menunjukkan kronologi tahapan atau peristiwa.",
      },
      {
        id: 3015,
        question: "If a text begins with <i>'Once upon a time in a faraway kingdom...'</i>, the text is most likely a...",
        options: ["Fairy tale / Narrative text", "Scientific report", "Cooking recipe", "Formal announcement"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Fairy tale / Narrative text</b><br><br>Frasa pembuka <i>'Once upon a time...'</i> (pada zaman dahulu kala) adalah ciri khas pembuka cerita dongeng/narasi.",
      },
    ],
  },
  {
    id: "eng_diag_2",
    subjectId: "eng",
    title: "Basic Grammar, Tenses & Agreement",
    shortTitle: "Grammar & Tenses Basics",
    badge: "15 Soal Diagnostik",
    description: "Evaluasi penguasaan Simple Present, Simple Past, Present Continuous, Modals, dan Subject-Verb Agreement.",
    questions: [
      {
        id: 3016,
        question: "The sun always ________ in the east every morning.",
        options: ["rises", "rise", "rose", "rising"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: rises</b><br><br>Fakta ilmiah / rutinitas menggunakan <b>Simple Present Tense</b>. Subjek tunggal orang ketiga (<i>The sun</i> = it) membutuhkan kata kerja berakhiran -s/-es (<i>rises</i>).",
      },
      {
        id: 3017,
        question: "Yesterday, my brother and I ________ to the cinema to watch a movie.",
        options: ["went", "go", "goes", "gone"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: went</b><br><br>Keterangan waktu lampau (<i>Yesterday</i>) menuntut penggunaan <b>Simple Past Tense (Verb 2)</b>. Bentuk V2 dari <i>go</i> adalah <i>went</i>.",
      },
      {
        id: 3018,
        question: "Listen! The baby ________ soundly in the bedroom.",
        options: ["is sleeping", "sleeps", "slept", "was slept"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: is sleeping</b><br><br>Kata seru <i>'Listen!'</i> atau <i>'Look!'</i> menandakan kegiatan sedang berlangsung saat ini (<b>Present Continuous Tense</b>: is/am/are + V-ing).",
      },
      {
        id: 3019,
        question: "My father ________ coffee every day, but today he is drinking orange juice.",
        options: ["drinks", "drink", "drank", "is drinking"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: drinks</b><br><br>Klausa pertama menunjukkan kebiasaan harian (<i>every day</i>), maka gunakan Simple Present Tense: <i>My father drinks</i>.",
      },
      {
        id: 3020,
        question: "She ________ not come to school two days ago because she was sick.",
        options: ["did", "does", "do", "is"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: did</b><br><br>Bentuk kalimat negatif lampau (<i>two days ago</i>) menggunakan rumus <b>did + not + Verb 1</b>.",
      },
      {
        id: 3021,
        question: "They ________ football in the field every Sunday afternoon.",
        options: ["play", "plays", "played", "playing"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: play</b><br><br>Subjek jamak <i>They</i> pada Simple Present Tense menggunakan kata kerja dasar tanpa akhiran -s (<i>play</i>).",
      },
      {
        id: 3022,
        question: "What is the comparative form of the adjective <b>'good'</b>?",
        options: ["Better", "Gooder", "Best", "More good"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Better</b><br><br>Tingkat perbandingan tak beraturan (irregular comparison):<br>&bull; Positive: <i>Good</i><br>&bull; Comparative: <b><i>Better</i></b> (lebih baik)<br>&bull; Superlative: <i>Best</i> (terbaik)",
      },
      {
        id: 3023,
        question: "Mount Everest is the ________ mountain in the world.",
        options: ["highest", "higher", "most high", "high"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: highest</b><br><br>Bentuk superlatif (paling tinggi) untuk kata sifat bersuku kata satu (<i>high</i>) adalah menambahkan awalan <i>the</i> dan akhiran <i>-est</i> (<i>the highest</i>).",
      },
      {
        id: 3024,
        question: "You ________ wash your hands before eating to avoid germs.",
        options: ["must / should", "may not", "must not", "would not"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: must / should</b><br><br>Modal <i>must</i> atau <i>should</i> menyatakan anjuran kuat atau keharusan positif demi menjaga kesehatan.",
      },
      {
        id: 3025,
        question: "There ________ five students waiting in front of the teacher's room right now.",
        options: ["are", "is", "was", "be"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: are</b><br><br>Subjeknya adalah jamak (<i>five students</i>), maka kata bantu yang tepat adalah <i>are</i>.",
      },
      {
        id: 3026,
        question: "Rian: 'What are you doing, Kevin?'<br>Kevin: 'I ________ my English homework.'",
        options: ["am doing", "do", "did", "was done"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: am doing</b><br><br>Pertanyaan dalam bentuk Present Continuous (<i>What are you doing?</i>) dijawab dengan struktur yang sama: <i>I am doing...</i>",
      },
      {
        id: 3027,
        question: "Which sentence is grammatically <b>CORRECT</b>?",
        options: [
          "Neither Anton nor his friends were present at the meeting.",
          "She don't like eating spicy food.",
          "He go to Jakarta last week.",
          "They was happy with the test result."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Neither Anton nor his friends were present at the meeting.</b><br><br>Aturan 'neither ... nor ...' kata kerjanya mengikuti subjek terdekat (<i>his friends</i> = jamak, maka memakai <i>were</i>). Opsi lain salah tata bahasa.",
      },
      {
        id: 3028,
        question: "The passive form of <i>'J.K. Rowling wrote Harry Potter'</i> is...",
        options: [
          "Harry Potter was written by J.K. Rowling.",
          "Harry Potter is written by J.K. Rowling.",
          "Harry Potter was wrote by J.K. Rowling.",
          "Harry Potter has written by J.K. Rowling."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Harry Potter was written by J.K. Rowling.</b><br><br>Kalimat lampau (<i>wrote</i>) jika diubah ke bentuk pasif menggunakan rumus: <b>was/were + Verb 3 (written)</b>.",
      },
      {
        id: 3029,
        question: "If it rains tomorrow, we ________ at home.",
        options: ["will stay", "stayed", "would stayed", "have stayed"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: will stay</b><br><br>Conditional Sentence Type 1 (pengandaian masa depan nyata): <b>If + Simple Present, Subject + will + Verb 1</b>.",
      },
      {
        id: 3030,
        question: "Choose the correct question tag: <i>'You can swim very well, ________?'</i>",
        options: ["can't you", "can you", "don't you", "aren't you"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: can't you</b><br><br>Kalimat pernyataan positif bermodal <i>can</i> diikuti dengan question tag negatif: <i>can't you?</i>",
      },
    ],
  },
];

// 4. IPA (ILMU PENGETAHUAN ALAM) (4 Kategori Fondasi Lengkap)
export const IPA_DIAGNOSTIC_CATEGORIES: DiagnosticCategory[] = [
  {
    id: "ipa_diag_1",
    subjectId: "ipa",
    title: "Pengukuran, Besaran, Satuan & Wujud Zat",
    shortTitle: "Besaran, Satuan & Zat",
    badge: "15 Soal Diagnostik",
    description: "Evaluasi konsep besaran pokok vs turunan, satuan internasional (SI), alat ukur, serta sifat dan perubahan wujud zat.",
    questions: [
      {
        id: 4001,
        question: "Kelompok besaran di bawah ini yang semuanya merupakan <b>Besaran Pokok</b> dalam Sistem Internasional (SI) adalah...",
        options: [
          "Panjang, massa, waktu, dan suhu",
          "Kecepatan, gaya, energi, dan volume",
          "Massa, berat, luas, dan percepatan",
          "Kuat arus, tegangan, daya, dan usaha"
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Panjang, massa, waktu, dan suhu</b><br><br>7 Besaran Pokok SI (cara hafal: <b>JIWA SMP</b>):<br>1. <b>J</b>umlah zat (mol)<br>2. <b>I</b>ntensitas cahaya (kandela)<br>3. <b>W</b>aktu (sekon)<br>4. <b>A</b>rus listrik (ampere)<br>5. <b>S</b>uhu (kelvin)<br>6. <b>M</b>assa (kilogram)<br>7. <b>P</b>anjang (meter).",
      },
      {
        id: 4002,
        question: "Satuan standar internasional (SI) untuk besaran <b>Suhu</b> adalah...",
        options: ["Kelvin (K)", "Celcius (°C)", "Fahrenheit (°F)", "Reamur (°R)"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Kelvin (K)</b><br><br>Satuan baku internasional untuk besaran suhu menurut SI adalah <b>Kelvin</b> (tanpa simbol derajat).",
      },
      {
        id: 4003,
        question: "Alat ukur yang memiliki tingkat ketelitian mencapai 0,01 mm dan cocok untuk mengukur diameter kawat tipis adalah...",
        options: ["Mikrometer sekrup", "Jangka sorong", "Mistar ukur", "Meteran gulung"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Mikrometer sekrup</b><br><br>Tingkat ketelitian alat ukur panjang:<br>&bull; Mistar: 1 mm (0,1 cm)<br>&bull; Jangka sorong: 0,1 mm (0,01 cm)<br>&bull; <b>Mikrometer sekrup:</b> 0,01 mm (0,001 cm).",
      },
      {
        id: 4004,
        question: "Peristiwa perubahan wujud zat dari <b>gas langsung menjadi padat</b> disebut...",
        options: ["Mengkristal / Deposisi", "Menyublim", "Mengembun", "Membeku"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Mengkristal / Deposisi</b><br><br>Perubahan wujud:<br>&bull; Padat &rarr; Gas: Menyublim (contoh: kapur barus).<br>&bull; <b>Gas &rarr; Padat: Mengkristal / Deposisi</b> (contoh: terbentuknya salju/jelaga).",
      },
      {
        id: 4005,
        question: "Ciri partikel pada zat berwujud <b>padat</b> adalah...",
        options: [
          "Bentuk dan volume tetap, susunan partikel sangat rapat dan teratur.",
          "Bentuk berubah mengikuti wadah, volume tetap.",
          "Bentuk dan volume selalu berubah-ubah, jarak antarpartikel sangat renggang.",
          "Partikel dapat bergerak bebas meninggalkan kelompoknya."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Bentuk dan volume tetap, susunan partikel sangat rapat dan teratur.</b><br><br>Zat padat memiliki gaya tarik antarpartikel yang sangat kuat sehingga susunan partikelnya rapat, teratur, serta memiliki bentuk dan volume yang tetap.",
      },
      {
        id: 4006,
        question: "Massa jenis (&rho;) suatu benda yang memiliki massa 240 gram dan volume 30 cm³ adalah...",
        options: ["8 g/cm³", "7,2 g/cm³", "270 g/cm³", "0,125 g/cm³"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: 8 g/cm³</b><br><br>Rumus massa jenis: <b>&rho; = m / V</b><br>&rho; = 240 gram / 30 cm³ = <b>8 g/cm³</b>.",
      },
      {
        id: 4007,
        question: "Peristiwa di bawah ini yang merupakan contoh <b>Perubahan Kimia</b> adalah...",
        options: [
          "Pagar besi yang berkarat karena terkena hujan dan udara.",
          "Es batu yang mencair menjadi air.",
          "Kertas yang digunting menjadi potongan kecil.",
          "Garam dapur yang larut di dalam air."
        ],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Pagar besi yang berkarat karena terkena hujan dan udara.</b><br><br><b>Perubahan kimia</b> menghasilkan zat baru yang sifatnya berbeda dan tidak dapat kembali ke bentuk semula (contoh: perkaratan besi, pembusukan buah, pembakaran kayu).",
      },
      {
        id: 4008,
        question: "Metode pemisahan campuran yang didasarkan pada perbedaan titik didih komponen zat penyusunnya disebut...",
        options: ["Distilasi (Penyulingan)", "Filtrasi (Penyaringan)", "Kromatografi", "Sublimasi"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Distilasi (Penyulingan)</b><br><br><b>Distilasi</b> memisahkan zat cair dari campurannya berdasarkan perbedaan titik didih (contoh: penyulingan minyak bumi, pemurnian air).",
      },
      {
        id: 4009,
        question: "Larutan yang mengubah warna kertas lakmus merah menjadi biru dan memiliki pH &gt; 7 bersifat...",
        options: ["Basa", "Asam", "Netral", "Garam murni"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Basa</b><br><br>Sifat larutan:<br>&bull; <b>Asam:</b> Memerahkan lakmus biru, pH &lt; 7, rasa masam.<br>&bull; <b>Basa:</b> Membirukan lakmus merah, pH &gt; 7, rasa pahit dan licin di kulit.",
      },
      {
        id: 4010,
        question: "Lambang unsur kimia untuk <b>Besi</b> dan <b>Emas</b> berturut-turut adalah...",
        options: ["Fe dan Au", "Be dan Em", "Fe dan Ag", "B dan Au"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Fe dan Au</b><br><br>Lambang unsur berdasarkan nama ilmiah Latin:<br>&bull; Besi = <i>Ferrum</i> (<b>Fe</b>)<br>&bull; Emas = <i>Aurum</i> (<b>Au</b>)<br>&bull; Perak = <i>Argentum</i> (Ag).",
      },
      {
        id: 4011,
        question: "Molekul air dengan rumus kimia <b>H₂O</b> termasuk ke dalam kelompok...",
        options: ["Molekul senyawa", "Molekul unsur", "Atom tunggal", "Campuran heterogen"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Molekul senyawa</b><br><br>H₂O terbentuk dari gabungan dua jenis atom yang berbeda (Hidrogen dan Oksigen) secara kimia, sehingga disebut <b>molekul senyawa</b>.",
      },
      {
        id: 4012,
        question: "Sebuah termometer Celcius menunjukkan angka 40°C. Jika diukur menggunakan termometer Reamur, suhu tersebut setara dengan...",
        options: ["32°R", "50°R", "72°R", "104°R"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: 32°R</b><br><br>Perbandingan skala Celcius (C) : Reamur (R) = 5 : 4.<br>R = (4/5) × C = (4/5) × 40 = <b>32°R</b>.",
      },
      {
        id: 4013,
        question: "Perpindahan kalor yang disertai dengan perpindahan partikel-partikel zat perantaranya (seperti saat air mendidih) disebut...",
        options: ["Konveksi", "Konduksi", "Radiasi", "Evaporasi"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Konveksi</b><br><br>Macam perpindahan kalor:<br>&bull; <i>Konduksi:</i> Tanpa perpindahan zat (contoh: sendok panas di kopi).<br>&bull; <b><i>Konveksi:</i> Disertai perpindahan zat</b> (contoh: sirkulasi air mendidih, angin darat & laut).<br>&bull; <i>Radiasi:</i> Melalui pancaran tanpa medium (contoh: panas matahari).",
      },
      {
        id: 4014,
        question: "Zat yang ditambahkan ke dalam makanan untuk memberi rasa manis tanpa meningkatkan kadar kalori secara drastis disebut pemanis buatan, contohnya adalah...",
        options: ["Sakarin dan Aspartam", "Monosodium Glutamat (MSG)", "Tartrazin dan Karamel", "Natrium Benzoat"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Sakarin dan Aspartam</b><br><br>Sakarin, aspartam, siklamat, dan sukralosa adalah contoh pemanis sintetis (buatan).",
      },
      {
        id: 4015,
        question: "Kandungan zat adiktif utama di dalam rokok yang menyebabkan ketergantungan dan kecanduan adalah...",
        options: ["Nikotin", "Tar", "Karbon monoksida", "Kafein"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Nikotin</b><br><br><b>Nikotin</b> adalah senyawa alkaloid stimulan pada daun tembakau yang menyebabkan efek adiksi/kecanduan kuat pada perokok.",
      },
    ],
  },
  {
    id: "ipa_diag_2",
    subjectId: "ipa",
    title: "Ciri Makhluk Hidup, Sel & Ekosistem",
    shortTitle: "Makhluk Hidup & Ekosistem",
    badge: "15 Soal Diagnostik",
    description: "Evaluasi pemahaman ciri kehidupan, organisasi kehidupan (sel, jaringan, organ), interaksi rantai makanan, dan pencemaran lingkungan.",
    questions: [
      {
        id: 4016,
        question: "Unit struktural dan fungsional terkecil penyusun tubuh makhluk hidup disebut...",
        options: ["Sel", "Jaringan", "Organ", "Sistem organ"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Sel</b><br><br>Urutan hierarki organisasi kehidupan:<br><b>Sel</b> &rarr; <b>Jaringan</b> &rarr; <b>Organ</b> &rarr; <b>Sistem Organ</b> &rarr; <b>Organisme (Individu)</b>.",
      },
      {
        id: 4017,
        question: "Organel sel yang berfungsi sebagai tempat berlangsungnya respirasi sel dan menghasilkan energi (ATP) adalah...",
        options: ["Mitokondria", "Ribosom", "Kloroplas", "Badan Golgi"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Mitokondria</b><br><br><b>Mitokondria</b> dijuluki sebagai 'the powerhouse of cell' karena menjadi pusat respirasi aerob penghasil energi utama bagi sel.",
      },
      {
        id: 4018,
        question: "Organel sel yang HANYA ditemukan pada sel tumbuhan dan TIDAK ada pada sel hewan adalah...",
        options: ["Dinding sel dan Kloroplas", "Membran sel dan Inti sel", "Mitokondria dan Ribosom", "Lisosom dan Sentrosom"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Dinding sel dan Kloroplas</b><br><br>Sel tumbuhan memiliki <b>dinding sel</b> (memberi bentuk kaku) dan <b>kloroplas</b> (tempat fotosintesis) yang tidak dimiliki sel hewan.",
      },
      {
        id: 4019,
        question: "Jaringan tumbuhan yang bertugas mengangkut air dan mineral dari akar ke seluruh daun adalah...",
        options: ["Xilem (Pembuluh kayu)", "Floem (Pembuluh tapis)", "Epidermis", "Kambium"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Xilem (Pembuluh kayu)</b><br><br>Fungsi berkas pengangkut:<br>&bull; <b>Xilem:</b> Mengangkut air & hara dari tanah/akar ke daun.<br>&bull; <b>Floem:</b> Mengedarkan hasil fotosintesis dari daun ke seluruh tubuh tumbuhan.",
      },
      {
        id: 4020,
        question: "Pola interaksi simbiosis antara lebah madu dengan bunga tanaman merupakan contoh simbiosis...",
        options: ["Mutualisme", "Komensalisme", "Parasitisme", "Predasi"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Mutualisme</b><br><br><b>Simbiosis mutualisme</b> saling menguntungkan: Lebah mendapat nektar makanan, dan bunga terbantu proses penyerbukannya.",
      },
      {
        id: 4021,
        question: "Perhatikan rantai makanan berikut: <i>Padi &rarr; Belalang &rarr; Katak &rarr; Ular &rarr; Elang</i>. Organisme yang bertindak sebagai <b>Konsumen Tingkat II (Konsumen Sekunder)</b> adalah...",
        options: ["Katak", "Belalang", "Ular", "Elang"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Katak</b><br><br>Urutan trofik:<br>&bull; Padi = Produsen<br>&bull; Belalang = Konsumen I (Herbivora)<br>&bull; <b>Katak = Konsumen II (Karnivora pemakan belalang)</b><br>&bull; Ular = Konsumen III<br>&bull; Elang = Konsumen Puncak.",
      },
      {
        id: 4022,
        question: "Organisme yang berperan menguraikan sisa-sisa makhluk hidup yang telah mati menjadi unsur hara tanah adalah...",
        options: ["Dekomposer (Bakteri dan Jamur pengurai)", "Produsen", "Herbivora", "Karnivora"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Dekomposer (Bakteri dan Jamur pengurai)</b><br><br><b>Dekomposer (pengurai)</b> mendaur ulang materi organik dari bangkai dan sisa organisme mati kembali ke ekosistem tanah.",
      },
      {
        id: 4023,
        question: "Gas rumah kaca utama yang peningkatan kadarnya di atmosfer memicu pemanasan global (global warming) adalah...",
        options: ["Karbon dioksida (CO₂)", "Oksigen (O₂)", "Nitrogen (N₂)", "Argon (Ar)"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Karbon dioksida (CO₂)</b><br><br>Emisi gas CO₂ dari pembakaran bahan bakar fosil dan penggundulan hutan memerangkap panas radiasi inframerah di bumi.",
      },
      {
        id: 4024,
        question: "Proses fotosintesis pada tumbuhan hijau menghasilkan zat berupa...",
        options: ["Glukosa (karbohidrat) dan Oksigen (O₂)", "Karbon dioksida dan Air", "Energi panas dan Nitrogen", "Klorofil dan Karbon monoksida"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Glukosa (karbohidrat) dan Oksigen (O₂)</b><br><br>Reaksi fotosintesis:<br>6 CO₂ + 6 H₂O + Cahaya Matahari &rarr; <b>C₆H₁₂O₆ (Glukosa) + 6 O₂ (Oksigen)</b>.",
      },
      {
        id: 4025,
        question: "Sendi pada tubuh manusia yang memungkinkan gerakan ke segala arah (contoh: antara tulang lengan atas dan gelang bahu) disebut...",
        options: ["Sendi peluru", "Sendi engsel", "Sendi putar", "Sendi pelana"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Sendi peluru</b><br><br>Macam sendi gerak:<br>&bull; <b>Sendi peluru:</b> Gerak ke segala arah (bahu, panggul).<br>&bull; <i>Sendi engsel:</i> Gerak satu arah (siku, lutut).<br>&bull; <i>Sendi putar:</i> Gerak memutar (tulang leher dan tengkorak).",
      },
      {
        id: 4026,
        question: "Enzim yang dihasilkan di lambung untuk mengubah protein menjadi pepton adalah...",
        options: ["Pepsin", "Amilase / Ptialin", "Lipase", "Tripsin"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Pepsin</b><br><br>Getah lambung mengandung:<br>&bull; HCl (Asam klorida): membunuh kuman & mengaktifkan pepsinogen.<br>&bull; <b>Pepsin:</b> memecah protein menjadi pepton.<br>&bull; Renin: mengendapkan kasein susu.",
      },
      {
        id: 4027,
        question: "Organ pernapasan tempat terjadinya proses pertukaran gas Oksigen (O₂) dengan Karbon dioksida (CO₂) secara difusi adalah...",
        options: ["Alveolus", "Bronkus", "Trakea", "Laring"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Alveolus</b><br><br><b>Alveolus</b> adalah gelembung-gelembung halus berdinding tipis dan kaya kapiler darah di dalam paru-paru tempat difusi gas respirasi.",
      },
      {
        id: 4028,
        question: "Ruang jantung yang berfungsi memompa darah kaya oksigen ke seluruh tubuh adalah...",
        options: ["Bilik kiri (Ventrikel kiri)", "Serambi kiri", "Bilik kanan", "Serambi kanan"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Bilik kiri (Ventrikel kiri)</b><br><br>Bilik kiri memiliki dinding otot paling tebal dan kuat karena bertugas memompa darah bersih bertekanan tinggi ke seluruh organ tubuh.",
      },
      {
        id: 4029,
        question: "Hukum I Newton yang menyatakan bahwa benda akan mempertahankan keadaan diam atau bergeraknya jika resultan gaya sama dengan nol dikenal sebagai hukum...",
        options: ["Kelembaman atau Inersia", "Aksi-Reaksi", "Kekekalan Energi", "Gravitasi Universal"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: Kelembaman atau Inersia</b><br><br>Hukum I Newton (&Sigma;F = 0) menjelaskan sifat <b>kelembaman (inersia)</b> benda yang cenderung mempertahankan keadaannya.",
      },
      {
        id: 4030,
        question: "Usaha (W) yang dilakukan untuk mendorong benda dengan gaya 50 N sejauh 4 meter adalah...",
        options: ["200 Joule", "12,5 Joule", "54 Joule", "46 Joule"],
        correctAnswer: 0,
        explanation: "<b>Jawaban Benar: 200 Joule</b><br><br>Rumus Usaha: <b>W = F × s</b><br>W = 50 N × 4 m = <b>200 Joule</b>.",
      },
    ],
  },
];

// Mapping helper by subject
export const DIAGNOSTIC_CATEGORIES_BY_SUBJECT: Record<SubjectId, DiagnosticCategory[]> = {
  math: MATH_DIAGNOSTIC_CATEGORIES,
  indo: INDO_DIAGNOSTIC_CATEGORIES,
  eng: ENG_DIAGNOSTIC_CATEGORIES,
  ipa: IPA_DIAGNOSTIC_CATEGORIES,
};
