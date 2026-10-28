import { Question } from '../types';

/**
 * Bank Soal Try Out TKA SMP Resmi - Bahasa Inggris Paket 8 (eng_p8)
 * 25 Soal CBT Komprehensif Berdasarkan Kisi-Kisi AKM & Kurikulum Merdeka:
 * - Stimulus 1 (Soal 1 - 3): Procedure Text - How to Install a Simple Solar Power System at Home
 * - Stimulus 2 (Soal 4 - 6): Formal Invitation - 2024 Green Generation Youth Summit
 * - Stimulus 3 (Soal 7 - 9): Narrative / Recount - Maya’s Green Revolution
 * - Stimulus 4 (Soal 10 - 12): Direction / Map Reading - Navigating the New Green Eco-Park
 * - Stimulus 5 (Soal 13 - 15): Discussion / Exposition - The Rise of AI in Modern Classrooms
 * - Stimulus 6 (Soal 16 - 18): Poster / Public Notice - YOUR MENTAL HEALTH MATTERS!
 * - Stimulus 7 (Soal 19 - 21): Procedure Text - DIY: How to Make a Zero-Waste Compost Bin
 * - Stimulus 8 (Soal 22 - 24): Historical Recount - The Birth of the World Wide Web
 * - Stimulus 9 (Soal 25): Dialog / Future Planning - Career Goals in Computer Science
 * 
 * Dilengkapi Pembahasan Edukatif Step-by-Step yang mendalam, ramah pemula, dan mudah dipahami siswa tingkat SD/SMP.
 */

export const TRYOUT_ENG_PAKET_8: Question[] = [
  // ==========================================
  // STIMULUS 1: Simple Solar Power System (Soal 1 - 3)
  // ==========================================

  // --- Soal 1: Pilihan Ganda Standar ---
  {
    id: 476,
    question: `Read the procedure text below carefully to answer the following questions!

How to Install a Simple Solar Power System at Home
As global temperatures rise, transitioning to renewable energy has become a crucial step for households. Installing a simple off-grid solar power system can significantly reduce your carbon footprint. Here is how you can set up a basic system:
1. Calculate Your Power Needs: Determine the total wattage of the appliances you plan to power. This helps in choosing the right size of solar panels and batteries.
2. Mount the Solar Panels: Place the solar panels on your roof or an open area. Ensure they are angled towards the sun (facing south if you are in the Northern Hemisphere, or north if in the Southern Hemisphere) to maximize sunlight absorption.
3. Connect to the Charge Controller: Run the wires from the solar panels to the charge controller. The charge controller must be connected to the battery first before you connect the solar panels to prevent damage.
4. Wire the Battery Bank: Connect the charge controller to your deep-cycle battery. This battery stores the electricity generated during the day.
5. Install the Inverter: Connect the inverter to the battery. The inverter converts Direct Current (DC) electricity from the battery into Alternating Current (AC), which is used by most household appliances.

Based on the text, what is the most critical sequence that must be followed during the wiring process to avoid damaging the equipment?`,
    image: '/images/tryout/eng_p8_q1.PNG',
    imageCaption: 'Text Stimulus 1: How to Install a Simple Solar Power System at Home',
    questionType: 'single',
    options: [
      'A. The solar panels must be mounted on the roof before calculating the total wattage.',
      'B. The inverter must be connected directly to the solar panels before wiring the battery.',
      'C. The charge controller must be connected to the battery before connecting it to the solar panels.',
      'D. The DC electricity must be converted to AC electricity before connecting to the charge controller.',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Panduan Memahami Soal & Menemukan Jawaban:

1. Arti Pertanyaan:
   "Based on the text, what is the most critical sequence that must be followed during the wiring process to avoid damaging the equipment?"
   (Berdasarkan teks, apa urutan paling kritis yang wajib diikuti selama proses pengkabelan untuk menghindari kerusakan alat?)

2. Cari Bukti Langsung di Dalam Teks (Direct Evidence):
   Perhatikan Langkah 3 (Step 3):
   "The charge controller must be connected to the battery first before you connect the solar panels to prevent damage."
   (Pengontrol pengisian daya [charge controller] harus dihubungkan ke baterai terlebih dahulu SEBELUM menghubungkan panel surya untuk mencegah kerusakan).

3. Alasan Logis Sederhana:
   Charge controller membutuhkan daya dan pembacaan voltase dari baterai terlebih dahulu agar sistem otomatiskannya mengenali berapa tegangan sistem (12V atau 24V). Jika panel surya dialirkan langsung tanpa terhubung ke baterai, arus tegangan tinggi dari panas matahari bisa langsung membakar sirkuit chip charge controller tersebut.

4. Mengapa Pilihan Lain Salah?
   - Pilihan A salah: Menghitung watt dilakukan sebelum membeli/memasang, namun ini bukan langkah perakitan kabel untuk mencegah kerusakan alat listrik.
   - Pilihan B salah: Inverter tidak boleh dihubungkan langsung ke panel surya; inverter harus dihubungkan ke baterai.
   - Pilihan D salah: Listrik DC diubah menjadi AC oleh inverter di ujung akhir sistem baterai, bukan sebelum charge controller.

Jawaban yang Paling Tepat: C.`,
  },

  // --- Soal 2: Pilihan Ganda Standar ---
  {
    id: 477,
    question: `"The inverter converts Direct Current (DC) electricity from the battery into Alternating Current (AC)..."

Which of the following is the correct passive voice form of the sentence above?`,
    questionType: 'single',
    options: [
      'A. Direct Current (DC) electricity from the battery is converted into Alternating Current (AC) by the inverter.',
      'B. Direct Current (DC) electricity from the battery was converted into Alternating Current (AC) by the inverter.',
      'C. Alternating Current (AC) is being converted into Direct Current (DC) by the inverter from the battery.',
      'D. Alternating Current (AC) has been converted from the battery into Direct Current (DC) by the inverter.',
    ],
    correctAnswer: 0, // A
    isHots: true,
    explanation: `Bedah Tata Bahasa: Mengubah Kalimat Aktif Menjadi Pasif (Passive Voice):

1. Analisis Unsur Kalimat Aktif:
   - Subjek (Pelaku): "The inverter" (Inverter - tunggal)
   - Kata Kerja (Verb): "converts" (Bentuk Simple Present Tense / Verb 1 + s)
   - Objek (Penderita): "Direct Current (DC) electricity from the battery"
   - Keterangan Tambahan: "into Alternating Current (AC)"

2. Rumus Baku Simple Present Passive Voice:
   Objek + is / am / are + Verb 3 (Past Participle) + by + Subjek

3. Terapkan Langkah Demi Langkah:
   - Objek pindah ke depan: "Direct Current (DC) electricity from the battery" (listrik adalah kata benda tak dapat dihitung / singular, jadi gunakan "is").
   - Ubah kata kerja menjadi Verb 3: "converts" -> "is converted".
   - Masukkan sisa keterangan & pelaku: "into Alternating Current (AC) by the inverter."
   - Kalimat lengkap: "Direct Current (DC) electricity from the battery IS CONVERTED into Alternating Current (AC) by the inverter."

4. Mengapa Opsi Lain Salah?
   - Opsi B salah: Menggunakan "was converted" (Simple Past), padahal kalimat aslinya fakta umum masa kini (*converts*).
   - Opsi C salah: Membalik arah arus listrik (AC diubah ke DC, padahal aslinya DC ke AC) dan menggunakan "is being converted" (Present Continuous).
   - Opsi D salah: Menggunakan rumus Present Perfect ("has been converted") dan membalik objeknya.

Jawaban yang Paling Tepat: A.`,
  },

  // --- Soal 3: Pilihan Ganda Standar ---
  {
    id: 478,
    question: `If a homeowner lives in Indonesia (which lies on the equator) and wants to install solar panels, what is the best suggestion based on the principles in the text?`,
    questionType: 'single',
    options: [
      'A. They should mount the panels facing strictly south to avoid excessive heat.',
      'B. They should angle the panels flat or slightly tilted to capture overhead sunlight throughout the year.',
      'C. They must connect the inverter directly to the panels because batteries do not work near the equator.',
      'D. They should only run the system during the rainy season when the temperature is cooler.',
    ],
    correctAnswer: 1, // B
    isHots: true,
    explanation: `Penerapan Konsep Geografi & Logika Prinsip Teks (Penerapan pada Konteks Nyata):

1. Pahami Prinsip pada Teks (Langkah 2):
   "Ensure they are angled towards the sun (facing south if you are in the Northern Hemisphere, or north if in the Southern Hemisphere) to maximize sunlight absorption."
   (Pastikan panel dimiringkan mengarah ke posisi matahari: menghadap ke selatan jika Anda berada di Belahan Bumi Utara, atau menghadap utara jika di Belahan Bumi Selatan, guna memaksimalkan penyerapan sinar matahari).

2. Hubungkan dengan Posisi Indonesia:
   - Indonesia dilintasi garis khatulistiwa (*equator* / zero latitude).
   - Di khatulistiwa, posisi matahari sepanjang tahun melintas tepat di atas kepala (*overhead sunlight*).
   - Oleh karena itu, sudut kemiringan yang paling optimal di wilayah tropis khatulistiwa adalah mendatar (*flat*) atau sedikit miring (*slightly tilted* sekitar 5°–15° agar air hujan dapat mengalir membersihkan debu).

3. Mengapa Opsi Lain Salah?
   - Opsi A salah: Menghadap condong penuh ke selatan hanya berlaku untuk negara-negara di Belahan Bumi Utara (seperti Eropa atau Amerika).
   - Opsi C salah: Baterai tetap bekerja dengan sangat baik di daerah khatulistiwa, dan inverter tidak boleh disambung langsung tanpa baterai.
   - Opsi D salah: Panel surya justru menghasilkan energi listrik paling maksimal saat musim kemarau dengan sinar matahari yang berlimpah, bukan musim hujan.

Jawaban yang Paling Tepat: B.`,
  },

  // ==========================================
  // STIMULUS 2: Green Generation Youth Summit (Soal 4 - 6)
  // ==========================================

  // --- Soal 4: Pilihan Ganda Standar ---
  {
    id: 479,
    question: `Read the invitation below carefully to answer the following questions!

To: All Junior High School Student Leaders
Subject: Invitation to the 2024 Green Generation Youth Summit
Dear Future Leaders,
We are facing unprecedented climate challenges. If we do not act now, our future environment will be irreversibly damaged. Therefore, we cordially invite you to represent your school at the "Green Generation Youth Summit."
Date: Saturday, November 18, 2024
Time: 08:30 AM – 03:00 PM
Venue: Global Eco-Center Hall, Jakarta
Theme: "Eco-Innovation: Small Steps, Big Impact"
Keynote Speaker: Dr. Sarah Jenkins (Environmental Scientist)
If you wish to attend, please register via the link (bit.ly/GreenGen2024) before November 10, 2024. Seats are limited to 100 participants. Each school may send up to two delegates.
Let us collaborate and draft our school-level climate action plan!
Warm regards,
The Organizing Committee

What is the primary objective of the "Green Generation Youth Summit"?`,
    image: '/images/tryout/eng_p8_q4.PNG',
    imageCaption: 'Text Stimulus 2: 2024 Green Generation Youth Summit Invitation',
    questionType: 'single',
    options: [
      'A. To select the best environmental scientist in Jakarta.',
      'B. To train students on how to build an eco-center hall.',
      'C. To gather student leaders to collaborate on school-level climate action plans.',
      'D. To promote commercial eco-friendly products to junior high schools.',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Menemukan Tujuan Utama Acara (Primary Objective of the Event):

1. Baca Kalimat Undangan & Ajakan Terakhir:
   - Kalimat Pembuka: "Therefore, we cordially invite you to represent your school at the Green Generation Youth Summit." (Ditujukan kepada *All Junior High School Student Leaders*).
   - Kalimat Penutup: "Let us collaborate and draft our school-level climate action plan!" (Mari kita berkolaborasi dan menyusun rencana aksi iklim di tingkat sekolah kita!).

2. Sintesis Tujuan:
   Tujuan utama diselenggarakannya KTT pemuda ini adalah mengumpulkan para pemimpin siswa (*student leaders*) dari berbagai SMP untuk bersama-sama berkolaborasi merumuskan rencana aksi iklim di sekolah masing-masing.

3. Mengapa Opsi Lain Salah?
   - Opsi A salah: Dr. Sarah Jenkins adalah pembicara tamu (*keynote speaker*), bukan untuk memilih ilmuwan terbaik.
   - Opsi B salah: Tempat acaranya adalah Eco-Center Hall, bukan melatih siswa membangun gedung tersebut.
   - Opsi D salah: Acara ini adalah konferensi aksi lingkungan siswa nirlaba, bukan ajang promosi produk dagang komersial.

Jawaban yang Paling Tepat: C.`,
  },

  // --- Soal 5: Pilihan Ganda Standar ---
  {
    id: 480,
    question: `Analyze the conditional situation in the invitation: 

"If we do not act now, our future environment will be irreversibly damaged."

What does this sentence imply?`,
    questionType: 'single',
    options: [
      'A. The environment is already completely destroyed and cannot be saved.',
      'B. Immediate action is necessary to prevent permanent damage to the environment.',
      'C. Future environmental damage is inevitable regardless of our current actions.',
      'D. Acting now will guarantee that no environmental changes will ever happen.',
    ],
    correctAnswer: 1, // B
    isHots: true,
    explanation: `Makna Tersirat Kalimat Pengandaian Tipe 1 (Conditional Sentence Type 1):

1. Arti Harfiah Kalimat:
   "If we do not act now, our future environment will be irreversibly damaged."
   (Jika kita tidak bertindak sekarang, lingkungan masa depan kita akan rusak secara permanen / tak bisa dipulihkan kembali).

2. Analisis Makna Implikasi (Implied Meaning):
   - Kata "irreversibly" artinya tidak bisa dikembalikan seperti semula (permanen).
   - Kalimat ini menyatakan bahwa bumi masih memiliki kesempatan untuk diselamatkan asalkan kita bertindak hari ini (*act now*).
   - Oleh sebab itu, kalimat ini menyiratkan pesan mendesak: tindakan nyata yang cepat dan segera (*immediate action*) mutlak diperlukan untuk mencegah kehancuran permanen lingkungan.

3. Mengapa Pilihan Lain Salah?
   - Pilihan A salah: Lingkungan belum hancur total; masih ada kesempatan jika bertindak saat ini.
   - Pilihan C salah: Mengatakan kerusakan tak terhindarkan terlepas dari apapun yang kita lakukan (*inevitable*) bertolak belakang dengan inti kalimat.
   - Pilihan D salah: Teks tidak menjamin tidak akan ada perubahan apapun, melainkan mencegah kerusakan parah permanen.

Jawaban yang Paling Tepat: B.`,
  },

  // --- Soal 6: Pilihan Ganda Standar ---
  {
    id: 481,
    question: `"Each school may send up to two delegates. ________, seats are limited to 100 participants, so early registration is highly recommended."

Which conjunction best fills the blank to connect the sentences logically?`,
    questionType: 'single',
    options: [
      'A. Although',
      'B. However',
      'C. Furthermore',
      'D. Instead',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Analisis Kata Hubung Transisi Kalimat (Conjunctive Adverbs):

1. Analisis Informasi Kalimat 1 dan Kalimat 2:
   - Kalimat 1: "Each school may send up to two delegates." (Tiap sekolah boleh mengirim hingga 2 orang delegasi - aturan batasan peserta).
   - Kalimat 2: "...seats are limited to 100 participants, so early registration is highly recommended." (kursi dibatasi hanya 100 peserta, sehingga pendaftaran awal sangat disarankan - penambahan aturan pembatasan kedua yang searah).

2. Memilih Kata Hubung yang Tepat:
   - Kedua kalimat saling mendukung dan menambahkan informasi pembatasan pendaftaran.
   - Kata hubung yang menyatakan penambahan ide searah (*additive / reinforcement*) adalah "Furthermore" (Selain itu / Lagipula).

3. Mengapa Pilihan Lain Salah?
   - "Although" (Meskipun): adalah konjungsi subordinatif yang menghubungkan anak kalimat dan induk kalimat dalam satu kalimat, tidak berdiri sendiri di awal kalimat diikuti koma seperti di atas.
   - "However" (Namun): digunakan untuk menyatakan pertentangan (*contrast*). Di sini tidak ada hal yang bertentangan; keduanya merupakan informasi pembatasan kuota peserta.
   - "Instead" (Malahan/Sebagai gantinya): digunakan saat menggantikan pilihan pertama dengan pilihan lain.

Jawaban yang Paling Tepat: C.`,
  },

  // ==========================================
  // STIMULUS 3: Maya’s Green Revolution (Soal 7 - 9)
  // ==========================================

  // --- Soal 7: Pilihan Ganda Standar ---
  {
    id: 482,
    question: `Read the story below carefully to answer the following questions!

Maya’s Green Revolution
Last year, Maya noticed that her school generated a massive amount of plastic waste every single day. Most students threw their plastic bottles into regular trash bins, which eventually ended up in landfills. Maya decided that she had to do something.
First, she discussed her concerns with the school principal. After obtaining permission, she formed a small group called "The Eco-Warriors." They placed separate recycling bins across the school yard. Every Friday afternoon, they collected, sorted, and weighed the plastic bottles. 
By the end of the semester, they had successfully recycled over 500 kilograms of plastic. They also partnered with a local recycling company that turned the waste into eco-bricks. Maya’s determination proved that youth-led initiatives can create real, tangible changes in their community.

What triggered Maya to start "The Eco-Warriors" initiative?`,
    image: '/images/tryout/eng_p8_q7.PNG',
    imageCaption: 'Text Stimulus 3: Maya’s Green Revolution',
    questionType: 'single',
    options: [
      'A. She wanted to win a national school competition.',
      'B. She was concerned about the massive amount of plastic waste in her school.',
      'C. The school principal ordered her to clean up the school yard.',
      'D. A local recycling company offered her a job.',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Menemukan Faktor Pemicu (Cause / Trigger):

1. Arti Pertanyaan:
   "What triggered Maya to start The Eco-Warriors initiative?"
   (Apa yang memicu Maya memulai inisiatif kelompok 'The Eco-Warriors'?)

2. Temukan di Paragraf Pertama Teks:
   "Last year, Maya noticed that her school generated a massive amount of plastic waste every single day. Most students threw their plastic bottles into regular trash bins, which eventually ended up in landfills. Maya decided that she had to do something."
   (Tahun lalu, Maya menyadari bahwa sekolahnya menghasilkan sampah plastik dalam jumlah yang sangat besar setiap harinya... Maya memutuskan bahwa ia harus berbuat sesuatu).

3. Kesimpulan:
   Maya tergerak karena rasa keprihatinannya melihat timbunan sampah plastik botol yang dibuang sembarangan hingga mencemari tempat pembuangan akhir.

Jawaban yang Paling Tepat: B.`,
  },

  // --- Soal 8: Pilihan Ganda Standar ---
  {
    id: 483,
    question: `"After obtaining permission, she formed a small group..."

Which of the following sentences uses the past tense correctly to describe Maya's past action?`,
    questionType: 'single',
    options: [
      'A. Maya is discussing the plan with the principal when she got the idea.',
      'B. Maya had already started the project before she asks for the principal\'s permission.',
      'C. Maya successfully convinced the principal to support her recycling program.',
      'D. Maya has formed the group because she wanted to clean the school.',
    ],
    correctAnswer: 2, // C
    isHots: true,
    explanation: `Analisis Ketepatan Tata Bahasa Bentuk Lampau (Past Tense Consistency):

1. Aturan Cerita Recount / Past Events:
   Menceritakan peristiwa masa lampau harus menggunakan bentuk kata kerja lampau (Verb 2) secara konsisten dan runtut.

2. Bedah Opsi Satu per Satu:
   - Opsi C: "Maya successfully CONVINCED (Verb 2) the principal to support her recycling program."
     * Pola: Subject (Maya) + Adverb (successfully) + Verb 2 (convinced) + Object (the principal) + to-infinitive (to support...).
     * Kalimat ini gramatikalnya 100% tepat, logis, dan konsisten dengan alur cerita (Maya berhasil meyakinkan kepala sekolah).
     * Nilai: BENAR.

   - Opsi A salah: "is discussing" adalah Present Continuous Tense, tidak cocok digabung dengan "got" (lampau). Seharusnya "was discussing".
   - Opsi B salah: "asks" adalah Present Simple, bertabrakan dengan "had already started" (Past Perfect). Seharusnya "before she asked".
   - Opsi D salah: "has formed" adalah Present Perfect Tense, padahal peristiwa pembentukan kelompok sudah terjadi dan selesai tahun lalu (*last year*), sehingga seharusnya menggunakan Simple Past murni "formed".

Jawaban yang Paling Tepat: C.`,
  },

  // --- Soal 9: Pilihan Ganda Standar ---
  {
    id: 484,
    question: `Based on Maya's story, if you want to create a slogan that represents her determination and the moral of the story, which of the following is the most appropriate?`,
    questionType: 'single',
    options: [
      'A. "Wait for others to change before you start your own journey."',
      'B. "Big changes start with small actions and strong determination."',
      'C. "Recycling is the only way to become famous at school."',
      'D. "Always ask for rewards when you clean your environment."',
    ],
    correctAnswer: 1, // B
    isHots: true,
    explanation: `Menyimpulkan Nilai Moral & Slogan Karakter (Moral Value & Slogan):

1. Perhatikan Inti Perjuangan Maya:
   - Maya hanya seorang siswi biasa yang memulai aksi kecil: memilah botol plastik setiap Jumat bersama sekelompok kecil teman (*small actions*).
   - Berkat tekad yang kuat (*strong determination*), aksinya berhasil mengumpulkan 500 kg sampah plastik dan mengubahnya menjadi bahan berguna (eco-bricks) bagi masyarakat (*big changes*).
   - Kalimat penutup teks: "Maya’s determination proved that youth-led initiatives can create real, tangible changes in their community."

2. Menilai Makna Slogan:
   Slogan "Big changes start with small actions and strong determination" (Perubahan besar berawal dari tindakan kecil dan tekad yang kuat) mencerminkan 100% amanat dan semangat cerita Maya.

3. Mengapa Opsi Lain Keliru?
   - Opsi A keliru: Maya tidak menunggu orang lain bergerak, ia berinisiatif lebih dulu.
   - Opsi C keliru: Tujuannya bukan untuk menjadi terkenal (*famous*).
   - Opsi D keliru: Maya menjaga lingkungan dengan tulus, bukan meminta imbalan (*rewards*).

Jawaban yang Paling Tepat: B.`,
  },

  // ==========================================
  // STIMULUS 4: Navigating the New Green Eco-Park (Soal 10 - 12)
  // ==========================================

  // --- Soal 10: Pilihan Ganda Standar ---
  {
    id: 485,
    question: `Read the map description and directions below carefully to answer the following questions!

Navigating the New Green Eco-Park
Welcome to the Green Eco-Park! To help visitors navigate this eco-friendly facility, please follow these directions starting from the Main Entrance:
* To reach the Solar Pavilion, walk straight from the Main Entrance, pass the Central Fountain, and turn left. The pavilion is right next to the Organic Cafeteria.
* If you want to visit the Compost Demonstration Area, go straight from the Main Entrance, turn right at the Central Fountain, and walk past the Butterfly Garden. It is located at the far east corner.
* The Seedling Nursery is situated directly opposite the Solar Pavilion, across the main paved pathway.

A visitor is currently at the Solar Pavilion and wants to go to the Seedling Nursery. According to the directions, what should they do?`,
    image: '/images/tryout/eng_p8_q10.PNG',
    imageCaption: 'Text Stimulus 4: Navigating the New Green Eco-Park',
    questionType: 'single',
    options: [
      'A. Walk past the Butterfly Garden to the far east corner.',
      'B. Go back to the Main Entrance and turn right.',
      'C. Just cross the main paved pathway directly opposite the pavilion.',
      'D. Walk straight, pass the Central Fountain, and turn left.',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Panduan Membaca Peta & Navigasi Lokasi:

1. Identifikasi Posisi Pengunjung Saat Ini:
   Pengunjung sedang berdiri di Solar Pavilion (Paviliun Tenaga Surya).

2. Cari Petunjuk Menuju "Seedling Nursery":
   Lihat poin ketiga petunjuk teks:
   "The Seedling Nursery is situated directly opposite the Solar Pavilion, across the main paved pathway."
   (Tempat Pembibitan Tanaman terletak tepat di seberang Solar Pavilion, melintasi jalan setapak beraspal utama).

3. Tindakan yang Harus Dilakukan:
   Pengunjung tidak perlu berjalan jauh atau memutar balik; mereka hanya perlu menyeberangi jalan setapak utama tepat di depan paviliun (*Just cross the main paved pathway directly opposite the pavilion*).

Jawaban yang Paling Tepat: C.`,
  },

  // --- Soal 11: Pilihan Ganda Kompleks ---
  {
    id: 486,
    question: `Based on the directions provided in "Navigating the New Green Eco-Park", which of the following statements are correct regarding the layout of the park? (Select TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. The Organic Cafeteria is located near the Solar Pavilion.',
      'B. The Compost Demonstration Area is located on the west side of the park.',
      'C. To reach the Compost Demonstration Area, one must pass the Butterfly Garden.',
      'D. The Central Fountain is located outside the Main Entrance before entering the park.',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: false,
    explanation: `Verifikasi Fakta Denah Taman (Layout Analysis):

1. Periksa Opsi A:
   "The Organic Cafeteria is located near the Solar Pavilion."
   - Bukti Teks: "The pavilion is right next to the Organic Cafeteria." (Paviliun berada tepat di sebelah Kafetaria Organik).
   - "right next to" artinya tepat bersebelahan/dekat (*near*).
   -> BENAR (Pilih A).

2. Periksa Opsi B:
   "The Compost Demonstration Area is located on the west side of the park."
   - Bukti Teks: "It is located at the far east corner." (Terletak di sudut ujung TIMUR, bukan barat).
   -> SALAH.

3. Periksa Opsi C:
   "To reach the Compost Demonstration Area, one must pass the Butterfly Garden."
   - Bukti Teks: "...turn right at the Central Fountain, and walk past the Butterfly Garden."
   -> BENAR (Pilih C).

4. Periksa Opsi D:
   "The Central Fountain is located outside the Main Entrance before entering the park."
   - Bukti Teks: "walk straight from the Main Entrance, pass the Central Fountain..." (Masuk dulu dari pintu utama, baru melewati air mancur di dalam taman, bukan di luar).
   -> SALAH.

Jawaban yang Tepat: A dan C.`,
  },

  // --- Soal 12: Pilihan Ganda Kompleks ---
  {
    id: 487,
    question: `Imagine the park management wants to add new signs for visitors. Which of the following instructions are accurate based on the text? (Select TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. "To see butterflies, turn right after the Central Fountain."',
      'B. "The Solar Pavilion is located directly opposite the Organic Cafeteria."',
      'C. "If you are at the Central Fountain, walk straight and turn left to find the Solar Pavilion."',
      'D. "The Seedling Nursery is located at the far east corner of the park."',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: true,
    explanation: `Analisis Akurasi Petunjuk Rambu (Signboard Instructions):

1. Analisis Opsi A:
   "To see butterflies, turn right after the Central Fountain."
   - Bukti Teks: Saat belok kanan di Air Mancur Tengah, pengunjung akan melewati Butterfly Garden ("turn right at the Central Fountain, and walk past the Butterfly Garden").
   - Jadi jika ingin melihat kupu-kupu, instruksi belok kanan setelah air mancur adalah akurat.
   -> BENAR (Pilih A).

2. Analisis Opsi B:
   "The Solar Pavilion is located directly opposite the Organic Cafeteria."
   - Bukti Teks: Solar Pavilion berada "right next to" (bersebelahan di sampingnya), bukan "directly opposite" (berseberangan). Yang berseberangan adalah Seedling Nursery.
   -> SALAH.

3. Analisis Opsi C:
   "If you are at the Central Fountain, walk straight and turn left to find the Solar Pavilion."
   - Bukti Teks: Dari Air Mancur Tengah, jalan lurus lalu belok kiri akan membawa kita ke Solar Pavilion ("pass the Central Fountain, and turn left. The pavilion is right next to...").
   -> BENAR (Pilih C).

4. Analisis Opsi D:
   "The Seedling Nursery is located at the far east corner of the park."
   - Bukti Teks: Yang berada di ujung timur adalah Compost Demonstration Area.
   -> SALAH.

Jawaban yang Tepat: A dan C.`,
  },

  // ==========================================
  // STIMULUS 5: The Rise of AI in Modern Classrooms (Soal 13 - 15)
  // ==========================================

  // --- Soal 13: Pilihan Ganda Kompleks ---
  {
    id: 488,
    question: `Read the discussion text below carefully to answer the following questions!

The Rise of AI in Modern Classrooms
Artificial Intelligence (AI) has rapidly transformed the educational landscape. Today, many schools are integrating AI-powered tools to personalize learning. These systems analyze students' learning habits and adapt lessons to their individual pace.
However, the rapid adoption of AI has sparked intense debates. Supporters argue that AI provides instant feedback and helps teachers manage administrative tasks. On the other hand, critics worry that over-reliance on AI might reduce critical thinking skills and human interaction. Educators suggest that AI should be used as a supportive tool rather than a replacement for human teachers. If students use AI wisely, they can enhance their research skills without losing their analytical abilities.

According to the text, what are the dual perspectives regarding the use of AI in classrooms? (Select TWO correct answers)`,
    image: '/images/tryout/eng_p8_q13.PNG',
    imageCaption: 'Text Stimulus 5: The Rise of AI in Modern Classrooms',
    questionType: 'complex',
    options: [
      'A. It helps teachers by handling administrative tasks and providing instant feedback.',
      'B. It completely replaces the need for human teachers in modern schools.',
      'C. It might hinder students\' critical thinking skills if they rely on it too much.',
      'D. It guarantees that all students will get perfect grades in their exams.',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: false,
    explanation: `Menemukan Dua Sudut Pandang yang Berbeda (Dual Perspectives - Pro & Kontra):

1. Sudut Pandang Pendukung (Supporters / Pro):
   "Supporters argue that AI provides instant feedback and helps teachers manage administrative tasks."
   (Pendukung berpendapat bahwa AI memberikan umpan balik instan dan membantu guru mengelola tugas-tugas administratif).
   -> Ini cocok persis dengan Opsi A (BENAR).

2. Sudut Pandang Pengkritik (Critics / Kontra):
   "On the other hand, critics worry that over-reliance on AI might reduce critical thinking skills and human interaction."
   (Di sisi lain, para pengkritik khawatir bahwa ketergantungan berlebihan pada AI dapat mengurangi keterampilan berpikir kritis dan interaksi antarmanusia).
   -> Ini cocok persis dengan Opsi C (BENAR).

3. Mengapa Opsi B dan D Salah?
   - Opsi B salah: Para pendidik menegaskan AI adalah alat pendukung (*supportive tool*), bukan pengganti guru (*not a replacement*).
   - Opsi D salah: Teks tidak pernah menyatakan AI menjamin semua siswa mendapat nilai sempurna.

Jawaban yang Tepat: A dan C.`,
  },

  // --- Soal 14: Pilihan Ganda Kompleks ---
  {
    id: 489,
    question: `Which of the following sentences correctly use the Present Perfect Tense or Passive Voice to describe the situation in the text? (Select TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. Artificial Intelligence has transformed the educational landscape.',
      'B. AI-powered tools are being integrated by many schools to personalize learning.',
      'C. Critics have worry about the loss of human interaction in schools.',
      'D. Lessons are adapt by AI systems to students\' individual pace.',
    ],
    correctAnswers: [0, 1], // A and B
    isHots: true,
    explanation: `Analisis Tata Bahasa: Present Perfect Tense & Passive Voice:

1. Analisis Opsi A:
   "Artificial Intelligence has transformed the educational landscape."
   - Pola: Subject (AI) + has + Verb 3 (transformed) + Object.
   - Ini adalah bentuk Present Perfect Tense yang benar 100% dan dikutip langsung dari kalimat pertama teks.
   -> BENAR (Pilih A).

2. Analisis Opsi B:
   "AI-powered tools are being integrated by many schools to personalize learning."
   - Pola: Subject (tools) + are being + Verb 3 (integrated) + by Agent.
   - Ini adalah bentuk Present Continuous Passive Voice yang benar 100%, menggambarkan tindakan yang saat ini sedang berlangsung dilakukan oleh banyak sekolah.
   -> BENAR (Pilih B).

3. Mengapa Opsi C dan D Secara Tata Bahasa Salah?
   - Opsi C salah: Setelah kata bantu "have", kata kerja wajib berupa Verb 3 ("worried"), bukan bentuk dasar "worry" ("have worry" adalah salah).
   - Opsi D salah: Kalimat pasif membutuhkan to be + Verb 3 ("are adapted"), bukan "are adapt" ("adapt" masih bentuk dasar Verb 1).

Jawaban yang Tepat: A dan B.`,
  },

  // --- Soal 15: Pilihan Ganda Kompleks ---
  {
    id: 490,
    question: `Based on the suggestions in the text, what are the best guidelines for students using AI? (Select TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. Use AI to write entire essays without doing any personal research.',
      'B. Treat AI as a supportive assistant to help find resources and clarify concepts.',
      'C. Avoid using AI completely because it has no benefits for education.',
      'D. Combine AI tools with critical thinking to analyze and verify the information provided.',
    ],
    correctAnswers: [1, 3], // B and D
    isHots: true,
    explanation: `Pedoman Bijak Menggunakan AI bagi Siswa (Wise Guidelines):

1. Teliti Saran Penulis pada Kalimat Terakhir Teks:
   "Educators suggest that AI should be used as a supportive tool rather than a replacement for human teachers. If students use AI wisely, they can enhance their research skills without losing their analytical abilities."
   (Pendidik menyarankan agar AI digunakan sebagai alat bantu pendukung, bukan pengganti. Jika siswa menggunakan AI secara bijak, mereka dapat meningkatkan kemampuan riset tanpa kehilangan kemampuan analisis).

2. Evaluasi Opsi Terbaik:
   - Opsi B: Memperlakukan AI sebagai asisten pendukung untuk membantu mencari bahan referensi dan memperjelas konsep rumit (Sangat Tepat - Pilih B).
   - Opsi D: Menggabungkan alat AI dengan daya pikir kritis untuk menelaah dan memverifikasi kebenaran informasi yang diberikan sistem (Sangat Tepat - Pilih D).

3. Mengapa Opsi A dan C Tidak Tepat?
   - Opsi A salah: Menyuruh AI menulis seluruh esai tanpa riset sendiri adalah bentuk kecurangan akademik yang mematikan kemampuan berpikir.
   - Opsi C salah: Menolak AI sama sekali adalah tindakan ekstrem yang merugikan, karena AI terbukti memiliki banyak manfaat jika digunakan secara bijak.

Jawaban yang Tepat: B dan D.`,
  },

  // ==========================================
  // STIMULUS 6: YOUR MENTAL HEALTH MATTERS! (Soal 16 - 18)
  // ==========================================

  // --- Soal 16: Pilihan Ganda Kompleks ---
  {
    id: 491,
    question: `Read the school poster below carefully to answer the following questions!

YOUR MENTAL HEALTH MATTERS!
International Mental Health Day - Oct 10
Are you feeling overwhelmed with schoolwork? 
You are not alone. We are all in this together!
What we are doing this week:
- Peer Counseling Sessions (Every afternoon at the library)
- "Express Yourself" Art Exhibition (In the main hall)
- Mindful Meditation Classes (Friday morning at the gym)
Remember: 
"It is okay not to be okay. Asking for help is a sign of strength, not weakness."
If you need someone to talk to, our school counselors are always ready to listen.

What activities are being organized by the school to support students' mental health during this week? (Select TWO correct answers)`,
    image: '/images/tryout/eng_p8_q16.PNG',
    imageCaption: 'Text Stimulus 6: Poster "YOUR MENTAL HEALTH MATTERS!"',
    questionType: 'complex',
    options: [
      'A. Professional medical surgeries for stressed students.',
      'B. Peer Counseling Sessions held at the school library.',
      'C. Mindful Meditation Classes in the school gym on Friday morning.',
      'D. Outdoor camping and hiking trips to the mountains.',
    ],
    correctAnswers: [1, 2], // B and C
    isHots: false,
    explanation: `Menemukan Kegiatan Resmi Sekolah pada Poster:

1. Cek Poin Kegiatan ("What we are doing this week"):
   - Poin 1: "Peer Counseling Sessions (Every afternoon at the library)" -> Sesi Konseling Teman Sebaya di perpustakaan sekolah setiap sore (Cocok dengan Opsi B - BENAR).
   - Poin 2: "'Express Yourself' Art Exhibition (In the main hall)" -> Pameran seni di aula utama.
   - Poin 3: "Mindful Meditation Classes (Friday morning at the gym)" -> Kelas Meditasi Penuh Kesadaran di gedung olahraga sekolah pada Jumat pagi (Cocok dengan Opsi C - BENAR).

2. Mengapa Opsi Lain Tidak Ada di Poster?
   - Opsi A salah: Operasi medis (*surgeries*) adalah prosedur rumah sakit, bukan kegiatan sekolah untuk stres.
   - Opsi D salah: Berkemah atau naik gunung tidak tercantum dalam poster kegiatan minggu ini.

Jawaban yang Tepat: B dan C.`,
  },

  // --- Soal 17: Pilihan Ganda Kompleks ---
  {
    id: 492,
    question: `Based on the poster, which of the following statements represent the correct message about mental health? (Select TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. Asking for help is a brave action that shows strength.',
      'B. Students must solve all their academic problems completely alone.',
      'C. Feeling overwhelmed by schoolwork is a common experience, and support is available.',
      'D. School counselors only accept students who have serious discipline issues.',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: true,
    explanation: `Pesan Kunci & Makna Edukasi Poster (Key Messages):

1. Analisis Kutipan Pengingat (*Remember*):
   "It is okay not to be okay. Asking for help is a sign of strength, not weakness."
   (Tidak apa-apa jika sedang merasa tidak baik-baik saja. Meminta bantuan adalah tanda kekuatan dan keberanian, bukan tanda kelemahan).
   -> Ini membuktikan bahwa meminta pertolongan adalah tindakan berani yang menunjukkan kekuatan (Opsi A BENAR).

2. Analisis Kalimat Pembuka Poster:
   "Are you feeling overwhelmed with schoolwork? You are not alone. We are all in this together!"
   (Apakah kamu merasa kewalahan dengan tugas sekolah? Kamu tidak sendirian. Kita semua menghadapinya bersama!).
   -> Ini membuktikan bahwa merasa tertekan oleh beban sekolah adalah hal wajar yang pernah dirasakan siswa lain, dan bantuan selalu tersedia (Opsi C BENAR).

3. Mengapa Opsi B dan D Salah?
   - Opsi B salah: Siswa diajak untuk tidak memendam masalah sendiri (*You are not alone*).
   - Opsi D salah: Guru BK / konselor sekolah siap mendengarkan siapa pun yang butuh teman bicara ("ready to listen"), bukan hanya siswa yang melanggar tata tertib.

Jawaban yang Tepat: A dan C.`,
  },

  // --- Soal 18: Pilihan Ganda Kompleks ---
  {
    id: 493,
    question: `If a student wants to support a friend who is currently feeling stressed, what actions align with the spirit of the poster? (Select TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. Tell them to ignore their feelings and just study harder.',
      'B. Accompany them to the library for a Peer Counseling Session.',
      'C. Listen to them kindly and suggest talking to a school counselor.',
      'D. Share their secrets with everyone at school to get attention.',
    ],
    correctAnswers: [1, 2], // B and C
    isHots: true,
    explanation: `Sikap Empati dan Tindakan Nyata Sesuai Pesan Poster:

1. Semangat Positif dari Poster:
   Poster mengajarkan kepedulian, kebersamaan (*We are all in this together*), keterbukaan, dan pemanfaatan fasilitas konseling yang disediakan sekolah.

2. Pilihan Tindakan yang Tepat:
   - Opsi B: Menemani teman yang tertekan untuk pergi ke perpustakaan mengikuti sesi konseling sebaya (*Peer Counseling Session*) (Tindakan sangat suportif - Pilih B).
   - Opsi C: Mendengarkan curahan hatinya dengan ramah serta menyarankan untuk berkonsultasi dengan konselor sekolah yang selalu siap mendengar (Tindakan sangat bijak - Pilih C).

3. Mengapa Opsi A dan D Bertolak Belakang?
   - Opsi A salah: Menyuruh mengabaikan perasaan (*ignore feelings*) adalah bentuk penolakan empati yang bisa memperparah stres teman.
   - Opsi D salah: Menyebarkan rahasia teman ke orang lain adalah pelanggaran privasi dan tindakan tercela.

Jawaban yang Tepat: B dan C.`,
  },

  // ==========================================
  // STIMULUS 7: DIY Zero-Waste Compost Bin (Soal 19 - 21)
  // ==========================================

  // --- Soal 19: Pilihan Ganda Kompleks ---
  {
    id: 494,
    question: `Read the instructions below carefully to answer the following questions!

DIY: How to Make a Zero-Waste Compost Bin
Making your own compost is an excellent way to recycle organic kitchen waste. Follow these steps:
1. Prepare the Bin: Take a large plastic bucket and drill small holes around the sides and bottom for aeration and drainage.
2. Add the Brown Layer: Place dry leaves, shredded cardboard, or sawdust at the bottom. This provides carbon.
3. Add the Green Layer: Put your kitchen waste (fruit peels, vegetable scraps, coffee grounds) on top of the brown layer. This provides nitrogen.
4. Moisten the Compost: Sprinkle some water over the layers. It should be damp, like a wrung-out sponge, but not soggy.
5. Turn Regularly: Mix the compost once a week using a shovel to introduce oxygen, which speeds up the decomposition process.

What materials are classified as the "Green Layer" and what do they provide to the compost? (Select TWO correct answers)`,
    image: '/images/tryout/eng_p8_q19.PNG',
    imageCaption: 'Text Stimulus 7: DIY: How to Make a Zero-Waste Compost Bin',
    questionType: 'complex',
    options: [
      'A. Shredded cardboard, which provides carbon.',
      'B. Fruit peels and vegetable scraps, which provide nitrogen.',
      'C. Coffee grounds, which provide nitrogen.',
      'D. Dry leaves and sawdust, which provide carbon.',
    ],
    correctAnswers: [1, 2], // B and C
    isHots: false,
    explanation: `Klasifikasi Bahan Kompos (Green Layer vs Brown Layer):

1. Baca Langkah 3 (Step 3 - Add the Green Layer):
   "Put your kitchen waste (fruit peels, vegetable scraps, coffee grounds) on top of the brown layer. This provides nitrogen."
   (Masukkan sampah dapur Anda [kulit buah, sisa sayuran, ampas kopi] di atas lapisan cokelat. Lapisan ini menyediakan nitrogen).

2. Periksa Pilihan yang Ditanyakan:
   Pertanyaan meminta bahan yang tergolong "Green Layer" dan unsur yang disumbangkannya:
   - Opsi B: Kulit buah dan sisa sayuran (fruit peels and vegetable scraps) yang menyediakan nitrogen (BENAR - Centang B).
   - Opsi C: Ampas kopi (coffee grounds) yang menyediakan nitrogen (BENAR - Centang C).

3. Mengapa Opsi A dan D Bukan Jawabannya?
   Kardus sobek, daun kering, dan serbuk gergaji adalah bagian dari "Brown Layer" (lapisan cokelat) yang menyediakan karbon, bukan Green Layer.

Jawaban yang Tepat: B dan C.`,
  },

  // --- Soal 20: Pilihan Ganda Kompleks ---
  {
    id: 495,
    question: `Why are holes drilled in the plastic bucket, and why must the compost be turned weekly? (Select TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. To allow excess water to drain and let air circulate.',
      'B. To make the compost bin look more attractive.',
      'C. To introduce oxygen which accelerates the decomposition process.',
      'D. To prevent insects from entering the compost bin.',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: false,
    explanation: `Tujuan Teknis Pembuatan Kompos (Technical Purposes):

1. Mengapa Ember Plastik Diberi Lubang-Lubang Kecil?
   Lihat Langkah 1: "...drill small holes around the sides and bottom for aeration and drainage."
   - "aeration" = sirkulasi udara (*let air circulate*).
   - "drainage" = pembuangan kelebihan air (*allow excess water to drain*).
   -> Opsi A BENAR (Centang A).

2. Mengapa Kompos Harus Diaduk/Dibalik Setiap Minggu?
   Lihat Langkah 5: "Mix the compost once a week using a shovel to introduce oxygen, which speeds up the decomposition process."
   - Mengaduk kompos berguna untuk memasukkan gas oksigen yang dibutuhkan bakteri pembusuk agar proses penguraian berlangsung lebih cepat.
   -> Opsi C BENAR (Centang C).

3. Mengapa Opsi B dan D Salah?
   - Opsi B salah: Melubangi ember bukan untuk hiasan agar tampak menarik.
   - Opsi D salah: Lubang justru membuka jalan, sehingga tujuan utamanya adalah sirkulasi udara dan air, bukan menghalangi serangga.

Jawaban yang Tepat: A dan C.`,
  },

  // --- Soal 21: Benar / Salah ---
  {
    id: 496,
    question: `Read the statement below based on the DIY compost guide:

Statement:
"Water should be poured generously until the compost is completely soaked and soggy to speed up the process."

Determine whether the statement above is TRUE (Benar) or FALSE (Salah)!`,
    questionType: 'true_false',
    options: ['Benar (True)', 'Salah (False)'],
    correctAnswer: 1, // Salah (False)
    isHots: false,
    explanation: `Pemeriksaan Fakta Tingkat Kelembapan Kompos:

1. Periksa Langkah 4 pada Teks:
   "Moisten the Compost: Sprinkle some water over the layers. It should be damp, like a wrung-out sponge, but not soggy."
   (Lembapkan Kompos: Percikkan sedikit air di atas lapisan. Kompos harus lembap seperti spons yang diperas, TETAPI TIDAK BOLEH BASAH BECEK / SOGGY).

2. Alasan Sains:
   Jika kompos terlalu basah kuyup (*completely soaked and soggy*), kantung udara di dalam ember akan tertutup air. Akibatnya, bakteri aerobik (yang butuh oksigen) akan mati, dan proses penguraian akan membusuk secara anaerobik yang menimbulkan bau busuk menyengat dan merusak kompos.

3. Kesimpulan:
   Pernyataan yang menyatakan air harus disiram melimpah hingga basah kuyup adalah SALAH (FALSE).

Jawaban yang Tepat: Salah (False).`,
  },

  // ==========================================
  // STIMULUS 8: The Birth of the World Wide Web (Soal 22 - 24)
  // ==========================================

  // --- Soal 22: Benar / Salah ---
  {
    id: 497,
    question: `Read the historical recount text below carefully to answer the following questions!

The Birth of the World Wide Web
In 1989, a British scientist named Tim Berners-Lee invented the World Wide Web (WWW) while working at CERN. He originally developed it to meet the demand for automated information-sharing among scientists in universities and institutes around the world.
On August 6, 1991, the world's first website went live. It was dedicated to information about the World Wide Web project itself. By 1993, CERN made the source code of the WWW available to the public for free. This decision changed the world forever, allowing the internet to grow into the global communication network we use today.

Statement:
"Tim Berners-Lee originally invented the World Wide Web to help scientists around the world share information automatically."

Determine whether the statement above is TRUE (Benar) or FALSE (Salah)!`,
    image: '/images/tryout/eng_p8_q22.PNG',
    imageCaption: 'Text Stimulus 8: The Birth of the World Wide Web',
    questionType: 'true_false',
    options: ['Benar (True)', 'Salah (False)'],
    correctAnswer: 0, // Benar (True)
    isHots: false,
    explanation: `Verifikasi Fakta Sejarah Penemuan WWW:

1. Bukti Teks Langsung (Direct Citation):
   Perhatikan kalimat kedua paragraf pertama:
   "He originally developed it to meet the demand for automated information-sharing among scientists in universities and institutes around the world."
   (Ia pada awalnya mengembangkannya untuk memenuhi kebutuhan berbagi informasi secara otomatis di antara para ilmuwan di berbagai universitas dan lembaga di seluruh dunia).

2. Kesimpulan:
   Pernyataan pada soal memiliki makna yang identik dengan teks asli, sehingga bernilai BENAR (TRUE).

Jawaban yang Tepat: Benar (True).`,
  },

  // --- Soal 23: Benar / Salah ---
  {
    id: 498,
    question: `Read the statement below based on the text:

Statement:
"The first website in the world went live in the year 1989."

Determine whether the statement above is TRUE (Benar) or FALSE (Salah)!`,
    questionType: 'true_false',
    options: ['Benar (True)', 'Salah (False)'],
    correctAnswer: 1, // Salah (False)
    isHots: false,
    explanation: `Pembedaan Kronologi Tahun Penting (Timeline Distinction):

1. Cek Tahun pada Teks:
   - Tahun 1989: Tim Berners-Lee menemukan konsep World Wide Web ("In 1989, a British scientist named Tim Berners-Lee invented the World Wide Web...").
   - Tanggal 6 Agustus 1991: Situs web pertama di dunia mulai mengudara / aktif di internet ("On August 6, 1991, the world's first website went live").

2. Kesimpulan:
   Situs web pertama mengudara pada tahun 1991, bukan tahun 1989. Maka pernyataan di atas bernilai SALAH (FALSE).

Jawaban yang Tepat: Salah (False).`,
  },

  // --- Soal 24: Benar / Salah ---
  {
    id: 499,
    question: `Read the statement below based on the text:

Statement:
"The internet became a global network because CERN kept the source code of the WWW secret and sold it to private companies."

Determine whether the statement above is TRUE (Benar) or FALSE (Salah)!`,
    questionType: 'true_false',
    options: ['Benar (True)', 'Salah (False)'],
    correctAnswer: 1, // Salah (False)
    isHots: false,
    explanation: `Pemeriksaan Fakta Keputusan CERN:

1. Bukti Teks Paragraf Kedua:
   "By 1993, CERN made the source code of the WWW available to the public for free. This decision changed the world forever, allowing the internet to grow into the global communication network we use today."
   (Menjelang tahun 1993, CERN menyediakan kode sumber WWW kepada publik secara GRATIS. Keputusan inilah yang mengubah dunia selamanya, memungkinkan internet tumbuh menjadi jaringan komunikasi global yang kita gunakan hari ini).

2. Kontras dengan Pernyataan Soal:
   Pernyataan soal menyebutkan bahwa CERN "merahasiakan kodenya dan menjualnya ke perusahaan swasta" (*kept the source code secret and sold it*), padahal faktanya CERN membagikannya secara gratis (*for free*) kepada siapa saja.

3. Kesimpulan:
   Pernyataan pada soal bertolak belakang dengan fakta sejarah dalam teks, sehingga bernilai SALAH (FALSE).

Jawaban yang Tepat: Salah (False).`,
  },

  // ==========================================
  // STIMULUS 9: Dialog Rian dan Siti (Soal 25)
  // ==========================================

  // --- Soal 25: Benar / Salah ---
  {
    id: 500,
    question: `Read the dialogue below carefully to answer the question!

Rian: "I have decided that I want to study computer science in college. I want to build AI systems that can help doctors diagnose diseases."
Siti: "That is an amazing goal, Rian! If you want to achieve that, you should start learning programming languages like Python now."
Rian: "Yes, I am currently taking an online coding course. I have already completed the basic modules."
Siti: "Keep going! Your determination will surely pay off in the future."

Statement:
"Siti suggests that Rian should wait until he enters college before he starts learning any programming languages."

Determine whether the statement above is TRUE (Benar) or FALSE (Salah)!`,
    image: '/images/tryout/eng_p8_q25.PNG',
    imageCaption: 'Text Stimulus 9: Dialog Rian dan Siti (Career Goals in AI)',
    questionType: 'true_false',
    options: ['Benar (True)', 'Salah (False)'],
    correctAnswer: 1, // Salah (False)
    isHots: false,
    explanation: `Analisis Saran Siti dalam Dialog:

1. Perhatikan Ucapan Siti:
   "If you want to achieve that, you should start learning programming languages like Python NOW."
   (Jika kamu ingin meraih cita-cita itu, kamu sebaiknya mulai belajar bahasa pemrograman seperti Python SEKARANG).

2. Bandingkan dengan Pernyataan Soal:
   Pernyataan soal menyatakan bahwa Siti menyarankan Rian untuk "menunggu sampai kuliah" (*wait until he enters college*), padahal Siti secara tegas menyuruhnya mulai belajar saat ini juga (*now*).

3. Kesimpulan:
   Pernyataan tersebut bertentangan dengan isi nasihat Siti, sehingga bernilai SALAH (FALSE).

Jawaban yang Tepat: Salah (False).`,
  },
];
