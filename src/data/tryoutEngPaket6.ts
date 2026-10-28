import { Question } from '../types';

/**
 * Bank Soal Try Out TKA SMP Resmi - Bahasa Inggris Paket 6 (eng_p6)
 * 25 Soal CBT Komprehensif Berdasarkan Kisi-Kisi AKM & Kurikulum Merdeka:
 * - Stimulus 1 (Soal 1 - 3): Report / Descriptive - SMP Hijau Lestari (Eco-School)
 * - Stimulus 2 (Soal 4 - 6): Historical Recount - The Historic Moment of the Youth Pledge
 * - Stimulus 3 (Soal 7 - 9): Transactional Dialogue - Finding the New Public Library
 * - Stimulus 4 (Soal 10 - 12): Modern Narrative - The Modern Echo of Malin Kundang
 * - Stimulus 5 (Soal 13 - 15): Scientific Report - How Photovoltaic Cells Work
 * - Stimulus 6 (Soal 16 - 18): Functional Invitation - Graduation Ceremony SMP Tunas Bangsa
 * - Stimulus 7 (Soal 19 - 21): Conversational Grammar - Preparing for the Final Exam (Conditional Sentences)
 * - Stimulus 8 (Soal 22 - 24): News / Biographic Recount - Sarah's Outstanding Achievement
 * - Stimulus 9 (Soal 25): Procedural Notice / Digital Safety - Two-Factor Authentication (2FA)
 * 
 * Dilengkapi Pembahasan Edukatif Step-by-Step yang mendalam, ramah pemula, dan mudah dipahami siswa tingkat SD/SMP.
 */

export const TRYOUT_ENG_PAKET_6: Question[] = [
  // ==========================================
  // STIMULUS 1: SMP Hijau Lestari (Soal 1 - 3)
  // ==========================================

  // --- Soal 1: Pilihan Ganda Standar ---
  {
    id: 426,
    question: `Read the text below carefully to answer the following questions!

SMP Hijau Lestari: A Model of Modern Eco-School
SMP Hijau Lestari is designed as a modern eco-friendly school that integrates environmental sustainability into its daily operations. The school building is constructed with sustainable materials that minimize heat absorption, reducing the need for air conditioning. 
On the rooftop, twenty solar panels are installed to generate clean electricity, which covers approximately 40% of the school's daily energy consumption. Below the ground, a rainwater harvesting system is integrated to collect and filter rainwater. This water is then reused for watering the school garden and flushing toilets. Furthermore, the school canteen strictly implements a zero-plastic policy. Students are required to bring their own reusable tumblers and lunchboxes. Organic waste from the canteen is processed into compost in the school’s green lab, while non-organic waste is sorted and sent to a local recycling center. Through these initiatives, SMP Hijau Lestari not only reduces its carbon footprint but also educates students to become responsible global citizens.

Based on the text, what is the primary purpose of the rainwater harvesting system at SMP Hijau Lestari?`,
    image: '/images/tryout/eng_p6_q1.PNG',
    imageCaption: 'Text Stimulus 1: SMP Hijau Lestari (Eco-School)',
    questionType: 'single',
    options: [
      "A. To generate clean electricity for the school's daily operations.",
      "B. To reduce the school's reliance on the local recycling center.",
      "C. To supply water for gardening and sanitation purposes.",
      "D. To prevent the school building from absorbing too much heat.",
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Panduan Memahami Soal & Menemukan Jawaban:

1. Arti Pertanyaan:
   "Based on the text, what is the primary purpose of the rainwater harvesting system at SMP Hijau Lestari?"
   Artinya: Berdasarkan teks, apakah tujuan utama dari sistem penampungan/pemanenan air hujan (rainwater harvesting system) di SMP Hijau Lestari?

2. Cari Kata Kunci di Dalam Teks (Direct Quote):
   Perhatikan kalimat pada pertengahan paragraf:
   "Below the ground, a rainwater harvesting system is integrated to collect and filter rainwater. This water is then reused for watering the school garden and flushing toilets."
   (Di bawah tanah, sistem pemanenan air hujan dipasang untuk mengumpulkan dan menyaring air hujan. Air ini kemudian digunakan kembali untuk MENYIRAM KEBUN SEKOLAH dan MENYIRAM TOILET).

3. Memahami Kosakata (Vocabulary Builder):
   - "watering the school garden" = menyiram kebun sekolah -> semakna dengan "gardening" (kegiatan berkebun).
   - "flushing toilets" = menyiram toilet -> semakna dengan "sanitation purposes" (tujuan sanitasi/kebersihan).

4. Mengapa Pilihan Lain Salah?
   - Pilihan A salah: Menghasilkan listrik bersih ("generate clean electricity") adalah fungsi dari 20 panel surya di atap (solar panels), bukan sistem air hujan.
   - Pilihan B salah: Mengurangi ketergantungan pada pusat daur ulang tidak sesuai, karena sampah anorganik justru tetap disortir dan dikirim ke pusat daur ulang lokal.
   - Pilihan D salah: Mencegah gedung menyerap panas berlebih adalah fungsi dari bahan bangunan ramah lingkungan ("sustainable materials that minimize heat absorption"), bukan fungsi air hujan.

Jawaban yang Paling Tepat: C.`,
  },

  // --- Soal 2: Pilihan Ganda Kompleks ---
  {
    id: 427,
    question: `Read the text about SMP Hijau Lestari again.

Which of the following actions are actively taken by the school community to support the zero-waste and green energy initiatives? (Select TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. Students purchase single-use plastic bottles from the canteen.',
      'B. The school utilizes solar energy to power a portion of its electricity needs.',
      'C. Organic waste is converted into compost within the school’s green lab.',
      'D. Rainwater is processed into clean drinking water for the students.',
    ],
    correctAnswers: [1, 2], // B and C
    isHots: true,
    explanation: `Langkah Penyelesaian Soal Pilihan Ganda Kompleks (Pilih DUA Jawaban Benar):

1. Pahami Maksud Soal:
   Kita diminta mencari 2 tindakan nyata yang dilakukan oleh warga sekolah SMP Hijau Lestari untuk mendukung program bebas sampah (zero-waste) dan energi hijau ramah lingkungan (green energy).

2. Analisis Setiap Pilihan Berdasarkan Fakta Teks:
   - Pilihan A: "Students purchase single-use plastic bottles from the canteen." (Siswa membeli botol plastik sekali pakai di kantin).
     -> SALAH BESAR. Teks menyatakan: "canteen strictly implements a zero-plastic policy. Students are required to bring their own reusable tumblers and lunchboxes." Kantin melarang plastik sekali pakai dan siswa wajib bawa botol minum (tumbler) sendiri dari rumah.
   - Pilihan B: "The school utilizes solar energy to power a portion of its electricity needs." (Sekolah memanfaatkan energi matahari untuk menyuplai sebagian kebutuhan listriknya).
     -> BENAR (Centang Pilihan B). Bukti teks: "twenty solar panels are installed to generate clean electricity, which covers approximately 40% of the school's daily energy consumption." (40% adalah sebagian / a portion dari total listrik).
   - Pilihan C: "Organic waste is converted into compost within the school’s green lab." (Sampah organik diubah menjadi pupuk kompos di laboratorium hijau sekolah).
     -> BENAR (Centang Pilihan C). Bukti teks: "Organic waste from the canteen is processed into compost in the school’s green lab."
   - Pilihan D: "Rainwater is processed into clean drinking water for the students." (Air hujan diolah menjadi air minum bersih untuk siswa).
     -> SALAH. Air hujan hanya dipakai untuk menyiram tanaman dan menyiram kloset toilet, bukan untuk diminum siswa.

Jawaban yang Tepat: B dan C.`,
  },

  // --- Soal 3: Benar / Salah ---
  {
    id: 428,
    question: `Read the statements below regarding SMP Hijau Lestari:
(1) The school building requires constant air conditioning because of its sustainable materials.
(2) More than half of the school's electricity is supplied by the rooftop solar panels.
(3) The zero-plastic policy in the canteen requires students to bring their own food and drink containers.

Which of the following represents the correct truth values (Benar / Salah) for statements (1), (2), and (3) in order?`,
    questionType: 'single',
    options: [
      'A. (1) False, (2) False, (3) True',
      'B. (1) False, (2) True, (3) False',
      'C. (1) True, (2) False, (3) True',
      'D. (1) True, (2) True, (3) False',
    ],
    correctAnswer: 0, // A: False, False, True
    isHots: true,
    explanation: `Mari Kita Periksa Kebenaran Masing-Masing Pernyataan Satu per Satu:

1. Uji Pernyataan (1):
   "The school building requires constant air conditioning because of its sustainable materials."
   (Gedung sekolah membutuhkan pendingin ruangan/AC terus-menerus karena bahan bangunannya yang berkelanjutan).
   -> Analisis Teks: Teks tertulis: "...materials that minimize heat absorption, REDUCING THE NEED for air conditioning." (Material tersebut meminimalkan penyerapan panas, sehingga MENGURANGI kebutuhan AC, bukan membutuhkan AC terus-menerus).
   -> Nilai Pernyataan (1) adalah FALSE (Salah).

2. Uji Pernyataan (2):
   "More than half of the school's electricity is supplied by the rooftop solar panels."
   (Lebih dari separuh kebutuhan listrik sekolah disuplai oleh panel surya di atap).
   -> Analisis Matematika & Teks: Teks menyebutkan panel surya menyuplai "approximately 40%". Angka 40% itu KURANG dari separuh (50%), bukan "more than half".
   -> Nilai Pernyataan (2) adalah FALSE (Salah).

3. Uji Pernyataan (3):
   "The zero-plastic policy in the canteen requires students to bring their own food and drink containers."
   (Kebijakan bebas plastik di kantin mengharuskan siswa membawa wadah makan dan minum sendiri).
   -> Analisis Teks: Teks menyebutkan: "Students are required to bring their own reusable tumblers (botol minum) and lunchboxes (kotak makan siang)." Ini 100% cocok.
   -> Nilai Pernyataan (3) adalah TRUE (Benar).

Maka urutan nilai kebenarannya adalah: (1) False, (2) False, (3) True.
Jawaban yang Tepat: A.`,
  },

  // ==========================================
  // STIMULUS 2: Sumpah Pemuda (Soal 4 - 6)
  // ==========================================

  // --- Soal 4: Pilihan Ganda Standar ---
  {
    id: 429,
    question: `Read the historical recount text below carefully to answer the following questions!

The Historic Moment of the Youth Pledge (Sumpah Pemuda)
On October 27–28, 1928, the Second Youth Congress was held in Batavia (now Jakarta) by the Association of Indonesian Students (PPPI). Young representatives from various regional organizations, such as Jong Java, Jong Sumatra, Jong Batak, and Jong Islamieten Bond, gathered with a shared determination to unite the nation.
On the first day, the congress was held in the Katholieke Jongenlingen Bond building. The speakers discussed the importance of strengthening national unity through education and culture. On the second day, October 28, the congress moved to the Oost-Java Bioscoop building, where the historical resolution was formulated. Before the congress ended, Wage Rudolf Supratman played the instrumental version of "Indonesia Raya" on his violin. The melody deeply moved the audience. Finally, the congress closed with the reading of the Youth Pledge, which declared one homeland, one nation, and one language: Indonesia. This event laid the foundation for Indonesia's national consciousness and ultimate independence.

What can be inferred about the atmosphere of the Second Youth Congress when "Indonesia Raya" was played?`,
    image: '/images/tryout/eng_p6_q4.PNG',
    imageCaption: 'Text Stimulus 2: The Historic Moment of the Youth Pledge',
    questionType: 'single',
    options: [
      'A. The audience felt indifferent because it was played without lyrics.',
      'B. The melody created a solemn and emotionally powerful atmosphere among the participants.',
      'C. The participants protested because the song was played before the pledge was read.',
      'D. The atmosphere became tense because the colonial police tried to stop the performance.',
    ],
    correctAnswer: 1, // B
    isHots: true,
    explanation: `Langkah Menarik Kesimpulan Suasana (Inference on Atmosphere):

1. Pahami Makna Pertanyaan:
   "What can be inferred about the atmosphere... when 'Indonesia Raya' was played?"
   Artinya: Apa yang dapat disimpulkan tentang suasana Kongres Pemuda II saat lagu "Indonesia Raya" dimainkan?

2. Bukti Kalimat Kunci dalam Teks:
   "Before the congress ended, Wage Rudolf Supratman played the instrumental version of 'Indonesia Raya' on his violin. The melody deeply moved the audience."
   (Sebelum kongres berakhir, W.R. Supratman memainkan versi instrumental "Indonesia Raya" dengan biolanya. Melodi tersebut SANGAT MENYENTUH HATI para hadirin/peserta).

3. Memahami Makna Frasa "Deeply Moved the Audience":
   - Kata "moved" di sini bukan berarti bergerak jalan kaki, melainkan "terharu/tersentuh perasaannya secara mendalam".
   - Suasana di mana hadirin tersentuh mendalam oleh lagu kebangsaan mencerminkan suasana yang khidmat, agung, penuh haru, dan penuh kekuatan emosional persatuan ("solemn and emotionally powerful atmosphere").

4. Mengapa Opsi Lain Salah?
   - Opsi A salah: Kata "indifferent" berarti acuh tak acuh / tidak peduli. Justru para peserta sangat terharu.
   - Opsi C salah: Tidak ada peserta yang memprotes lagu tersebut.
   - Opsi D salah: Teks sama sekali tidak menceritakan polisi kolonial menghentikan penampilan.

Jawaban yang Tepat: B.`,
  },

  // --- Soal 5: Pilihan Ganda Kompleks ---
  {
    id: 430,
    question: `Read the text about the Youth Pledge again.

Which of the following grammatical structures or facts from the text are correct? (Select TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. The text uses past tenses because it describes a completed historical event.',
      'B. The Second Youth Congress took place in a single building over two days.',
      'C. "Jong Java" and "Jong Sumatra" were among the organizations that participated in the congress.',
      'D. W.R. Supratman sang the lyrics of "Indonesia Raya" loudly to inspire the youth.',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: false,
    explanation: `Langkah Menganalisis Ciri Tata Bahasa & Fakta Sejarah:

1. Analisis Ciri Kebahasaan (Teks Recount Sejarah):
   - Pilihan A: "The text uses past tenses because it describes a completed historical event."
     -> BENAR (Centang Pilihan A). Teks recount sejarah bertujuan menceritakan peristiwa masa lampau yang sudah tuntas terjadi. Oleh sebab itu, seluruh kata kerja utamanya berbentuk Past Tense (V2 / was / were), seperti: "was held", "gathered", "discussed", "moved", "played", "closed", "declared", "laid".

2. Analisis Fakta-Fakta Berdasarkan Teks:
   - Pilihan B: "The Second Youth Congress took place in a single building over two days."
     -> SALAH. Kongres diadakan di DUA gedung berbeda: Hari pertama di gedung Katholieke Jongenlingen Bond, dan hari kedua pindah ke gedung Oost-Java Bioscoop ("the congress moved to the Oost-Java Bioscoop building").
   - Pilihan C: '"Jong Java" and "Jong Sumatra" were among the organizations that participated in the congress.'
     -> BENAR (Centang Pilihan C). Teks secara gamblang menyebutkan: "...regional organizations, such as Jong Java, Jong Sumatra, Jong Batak, and Jong Islamieten Bond...".
   - Pilihan D: "W.R. Supratman sang the lyrics of 'Indonesia Raya' loudly to inspire the youth."
     -> SALAH. Teks secara spesifik menyatakan W.R. Supratman memainkan versi instrumental dengan biola ("played the instrumental version... on his violin"), bukan menyanyikan liriknya dengan suara keras.

Jawaban yang Tepat: A dan C.`,
  },

  // --- Soal 6: Benar / Salah ---
  {
    id: 431,
    question: `Read the following statements about the Second Youth Congress:
(1) The main goal of the Second Youth Congress was to strengthen regional differences among youth organizations.
(2) The historical resolution of the Youth Pledge was formulated on the second day of the congress.
(3) The Katholieke Jongenlingen Bond building was the venue where the congress ended.

Which of the following represents the correct truth values (Benar / Salah) for statements (1), (2), and (3) in order?`,
    questionType: 'single',
    options: [
      'A. (1) False, (2) True, (3) False',
      'B. (1) False, (2) False, (3) True',
      'C. (1) True, (2) True, (3) False',
      'D. (1) True, (2) False, (3) True',
    ],
    correctAnswer: 0, // A: False, True, False
    isHots: true,
    explanation: `Pemeriksaan Logika Pernyataan Berdasarkan Fakta Teks:

1. Pernyataan (1):
   "The main goal... was to strengthen regional differences among youth organizations."
   (Tujuan utama Kongres Pemuda II adalah untuk memperkuat perbedaan kedaerahan di antara organisasi pemuda).
   -> Analisis Teks: Teks menyatakan mereka berkumpul dengan "a shared determination to unite the nation" (tekad bersama untuk MENYATUKAN bangsa, bukan memperkuat perbedaan kedaerahan).
   -> Nilai: FALSE (Salah).

2. Pernyataan (2):
   "The historical resolution of the Youth Pledge was formulated on the second day of the congress."
   (Resolusi bersejarah Sumpah Pemuda dirumuskan pada hari kedua kongres).
   -> Analisis Teks: "On the second day, October 28... where the historical resolution was formulated." Ini persis sesuai dengan teks.
   -> Nilai: TRUE (Benar).

3. Pernyataan (3):
   "The Katholieke Jongenlingen Bond building was the venue where the congress ended."
   (Gedung Katholieke Jongenlingen Bond adalah lokasi di mana kongres berakhir).
   -> Analisis Teks: Gedung Katholieke Jongenlingen Bond dipakai pada HARI PERTAMA ("On the first day..."). Kongres berakhir ("closed with the reading of the Youth Pledge") di gedung kedua, yaitu Oost-Java Bioscoop.
   -> Nilai: FALSE (Salah).

Urutan nilai kebenaran: (1) False, (2) True, (3) False.
Jawaban yang Tepat: A.`,
  },

  // ==========================================
  // STIMULUS 3: Finding the Public Library (Soal 7 - 9)
  // ==========================================

  // --- Soal 7: Pilihan Ganda Standar ---
  {
    id: 432,
    question: `Read the dialogue below carefully to answer the following questions!

Finding the New Public Library
(Rian and Maya are standing near a bus stop, looking at a smartphone map.)
Rian: Maya, I think we are lost. The map says the new public library is nearby, but I don't see any big building here.
Maya: Let me see. Ah, you should have turned left at the previous intersection. We have walked too far north.
Rian: Oh, no! What should we do now? Should we take an online taxi?
Maya: I don't think that's necessary. If we walk back to the intersection and turn right, it will only take about five minutes. But first, may I use your phone to double-check the street view? My phone's battery is running low.
Rian: Sure, go ahead. Here it is.
Maya: Thanks. Look, once we turn right at the intersection, we must walk past the post office. The library is right next to it, opposite the city park.
Rian: Excellent! Let's go there right away before it gets dark.

Based on Maya's instructions, where is the new public library located?`,
    image: '/images/tryout/eng_p6_q7.PNG',
    imageCaption: 'Text Stimulus 3: Finding the New Public Library',
    questionType: 'single',
    options: [
      'A. Opposite the post office and next to the city park.',
      'B. Next to the post office and opposite the city park.',
      'C. At the previous intersection before the post office.',
      'D. North of the bus stop where they are currently standing.',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Langkah Mencari Posisi / Lokasi Tempat Berdasarkan Preposisi:

1. Temukan Ucapan Maya Mengenai Petunjuk Arah:
   Maya mengatakan:
   "Look, once we turn right at the intersection, we must walk past the post office. The library is right next to it, opposite the city park."

2. Terjemahkan Frasa Kunci Secara Harfiah:
   - "walk past the post office" = berjalan melewati kantor pos.
   - "right next to it" = tepat di SEBELAH kantor pos (kata ganti 'it' merujuk ke kantor pos).
   - "opposite the city park" = BERSEBERANGAN dengan taman kota (berada di seberang jalan dari taman kota).

3. Evaluasi Pilihan Jawaban:
   - Pilihan A terbalik preposisinya: Dikatakan di seberang kantor pos dan di sebelah taman (salah).
   - Pilihan B tepat sempurna: "Next to the post office and opposite the city park" (Di sebelah kantor pos dan di seberang taman kota).
   - Pilihan C salah: Perpustakaan bukan berada di persimpangan jalan.
   - Pilihan D salah: Mereka berjalan terlalu jauh ke utara dari bus stop, sedangkan perpustakaan berada ke arah sebaliknya setelah berbelok di persimpangan.

Jawaban yang Tepat: B.`,
  },

  // --- Soal 8: Pilihan Ganda Kompleks ---
  {
    id: 433,
    question: `Read the dialogue between Rian and Maya again.

Which of the following expressions from the dialogue represent "giving a suggestion" or "asking for permission"? (Select TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. "I think we are lost."',
      'B. "I don\'t think that\'s necessary."',
      'C. "May I use your phone to double-check the street view?"',
      'D. "You should have turned left at the previous intersection."',
    ],
    correctAnswers: [2, 3], // C and D
    isHots: true,
    explanation: `Konsep Ungkapan Bahasa Inggris (Language Functions):

1. Ungkapan "Asking for Permission" (Meminta Izin):
   - Pola baku meminta izin dengan sopan: "May I + Verb 1...?" atau "Could I / Can I...?"
   - Kalimat C: "May I use your phone to double-check the street view?" (Bolehkah saya memakai ponselmu...?).
   - Ini adalah bentuk murni dari asking for permission (BENAR - Centang C).

2. Ungkapan "Giving a Suggestion / Advice" (Memberikan Saran atau Evaluasi Tindakan):
   - Pola baku memberi saran menggunakan modal auxiliary: "should" atau "should have + Verb 3" (saran tindakan yang semestinya dilakukan).
   - Kalimat D: "You should have turned left at the previous intersection." (Kamu seharusnya tadi belok kiri di persimpangan sebelumnya).
   - Ini adalah saran dan koreksi tindakan navigasi (BENAR - Centang D).

3. Mengapa Opsi A dan B Bukan Jawaban yang Diminta?
   - Opsi A: "I think we are lost" adalah ungkapan menyatakan opini atau pengamatan situasi (stating an opinion / expressing observation), bukan meminta izin atau memberi saran.
   - Opsi B: "I don't think that's necessary" adalah ungkapan ketidaksetujuan secara halus terhadap usulan naik taksi online (expressing polite disagreement).

Jawaban yang Tepat: C dan D.`,
  },

  // --- Soal 9: Benar / Salah ---
  {
    id: 434,
    question: `Read the following statements based on the dialogue between Rian and Maya:
(1) Maya and Rian need to order an online taxi because the library is too far to walk.
(2) Maya asks for Rian's permission to use his phone because her own phone is low on battery.
(3) The library is situated next to the city park.

Which of the following represents the correct truth values (Benar / Salah) for statements (1), (2), and (3) in order?`,
    questionType: 'single',
    options: [
      'A. (1) False, (2) True, (3) False',
      'B. (1) False, (2) False, (3) True',
      'C. (1) True, (2) True, (3) False',
      'D. (1) False, (2) True, (3) True',
    ],
    correctAnswer: 0, // A: False, True, False
    isHots: true,
    explanation: `Analisis Fakta Dialog:

1. Pernyataan (1):
   "Maya and Rian need to order an online taxi because the library is too far to walk."
   (Maya dan Rian perlu memesan taksi online karena perpustakaan terlalu jauh untuk jalan kaki).
   -> Analisis Teks: Saat Rian mengusulkan naik taksi, Maya menjawab: "I don't think that's necessary. If we walk back to the intersection and turn right, it will only take about five minutes." Jadi mereka TIDAK perlu naik taksi karena jalan kaki hanya 5 menit.
   -> Nilai: FALSE (Salah).

2. Pernyataan (2):
   "Maya asks for Rian's permission to use his phone because her own phone is low on battery."
   (Maya meminta izin memakai ponsel Rian karena baterai ponselnya sendiri hampir habis).
   -> Analisis Teks: Maya berkata: "may I use your phone to double-check the street view? My phone's battery is running low." Ini sesuai fakta teks.
   -> Nilai: TRUE (Benar).

3. Pernyataan (3):
   "The library is situated next to the city park."
   (Perpustakaan terletak di sebelah taman kota).
   -> Analisis Teks: Perpustakaan terletak di SEBELAH KANTOR POS ("right next to it [post office]"), dan BERSEBERANGAN dengan taman kota ("opposite the city park"). "Next to" (berdampingan) berbeda arti dengan "opposite" (berseberangan).
   -> Nilai: FALSE (Salah).

Urutan nilai kebenaran: (1) False, (2) True, (3) False.
Jawaban yang Tepat: A.`,
  },

  // ==========================================
  // STIMULUS 4: The Modern Echo of Malin Kundang (Soal 10 - 12)
  // ==========================================

  // --- Soal 10: Pilihan Ganda Standar ---
  {
    id: 435,
    question: `Read the narrative text below carefully to answer the following questions!

The Modern Echo of Malin Kundang
In a bustling modern port city, Malin worked tirelessly as a software engineer. He had left his small fishing village years ago, promising his mother that he would return once he achieved success. Over the years, his determination paid off; he became the CEO of a leading tech startup. 
One day, his company launched a massive charity program in his hometown. Malin arrived at the harbor in a luxurious yacht, accompanied by media reporters and business partners. Among the crowd of onlookers stood an old, frail woman in worn-out clothes—his mother. She ran toward him, calling his name with tears of joy. 
Malin, fearing that his wealthy business partners would look down on him if they knew his humble origins, stepped back. "Who are you? I do not know this beggar," he cold-heartedly said to the reporters. His mother fell to her knees, heartbroken. Instead of cursing him to stone, she whispered, "May your success bring you the peace you have stolen from your own heart." As Malin sailed away, a sudden system crash wiped out his entire company's database, leaving him bankrupt overnight. He realized that his pride had turned his achievements into worthless dust.

What is the main difference between this modern adaptation and the traditional legend of Malin Kundang?`,
    image: '/images/tryout/eng_p6_q10.PNG',
    imageCaption: 'Text Stimulus 4: The Modern Echo of Malin Kundang',
    questionType: 'single',
    options: [
      'A. Malin did not leave his village to seek wealth.',
      'B. The mother did not curse Malin to become a physical stone.',
      'C. Malin\'s business partners accepted his mother warmly.',
      'D. Malin returned to his village as a poor software engineer.',
    ],
    correctAnswer: 1, // B
    isHots: true,
    explanation: `Perbandingan Cerita Adaptasi Modern vs Cerita Rakyat Tradisional:

1. Cerita Rakyat Tradisional Malin Kundang:
   Dalam legenda tradisional Minangkabau yang kita kenal sejak kecil, ketika Malin mendurhakai ibunya, sang ibu berdoa dan mengutuk Malin beserta kapalnya menjadi BATU FISIK karang di tepi pantai.

2. Adaptasi Modern pada Teks Ini:
   Perhatikan kalimat pada paragraf ketiga:
   "Instead of cursing him to stone, she whispered, 'May your success bring you the peace you have stolen from your own heart.' As Malin sailed away, a sudden system crash wiped out his entire company's database, leaving him bankrupt overnight."
   (Alih-alih mengutuknya menjadi batu, sang ibu berbisik mendoakan kedamaian hatinya. Lalu terjadi kegagalan sistem komputer/database yang membuat perusahaannya bangkrut seketika).

3. Kesimpulan Perbedaan Utama:
   Ibunya tidak mengutuk Malin menjadi batu secara fisik ("The mother did not curse Malin to become a physical stone"). Kehancuran Malin dalam versi modern berwujud kebangkrutan bisnis teknologi dan hilangnya kedamaian batin akibat kesombongannya.

4. Mengapa Pilihan Lain Salah?
   - Pilihan A salah: Malin tetap merantau meninggalkan desanya untuk meraih sukses.
   - Pilihan C salah: Rekan bisnis Malin tidak sempat mengenal ibunya karena Malin keburu mengusir ibunya.
   - Pilihan D salah: Malin pulang bukan sebagai pemuda miskin, melainkan sebagai CEO kaya raya yang menaiki kapal pesiar mewah (*luxurious yacht*).

Jawaban yang Tepat: B.`,
  },

  // --- Soal 11: Pilihan Ganda Kompleks ---
  {
    id: 436,
    question: `Read the story of modern Malin Kundang again.

Based on the text, which of the following statements reflect the moral lessons of the story? (Select TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. Professional success is meaningless if one abandons moral integrity and family.',
      'B. Pride and arrogance can lead to a sudden and devastating downfall.',
      'C. Parents should always curse their children if they are disobedient.',
      'D. Wealth is the only measure of a person\'s true value in modern society.',
    ],
    correctAnswers: [0, 1], // A and B
    isHots: true,
    explanation: `Langkah Menemukan Nilai Moral / Amanat Cerita (Moral Values):

1. Konsep Dasar Pesan Moral:
   Pesan moral adalah pelajaran budi pekerti luhur yang ingin disampaikan pengarang kepada pembaca agar tidak mengulangi kesalahan fatal tokoh dalam cerita.

2. Evaluasi Setiap Pilihan:
   - Pilihan A: "Professional success is meaningless if one abandons moral integrity and family." (Kesuksesan karier/profesional tidak ada artinya jika seseorang membuang integritas moral dan keluarganya/ibunya).
     -> SANGAT TEPAT (Centang Pilihan A). Kalimat penutup cerita: "He realized that his pride had turned his achievements into worthless dust." (Prestasinya berubah menjadi debu tak berharga).
   - Pilihan B: "Pride and arrogance can lead to a sudden and devastating downfall." (Kesombongan dan keangkuhan dapat menyebabkan kehancuran yang tiba-tiba dan fatal).
     -> SANGAT TEPAT (Centang Pilihan B). Akibat menyombongkan diri dan menyebut ibunya pengemis, database perusahaannya langsung hancur seketika dan ia jatuh bangkrut.
   - Pilihan C: "Parents should always curse their children if they are disobedient." (Orang tua harus selalu mengutuk anaknya jika membangkang).
     -> SALAH. Ini bukan nilai kebajikan. Teks justru memperlihatkan ibu yang tidak mengutuk menjadi batu, melainkan bersedih dan berbisik doa.
   - Pilihan D: "Wealth is the only measure of a person's true value in modern society." (Kekayaan adalah satu-satunya ukuran nilai diri manusia).
     -> SALAH. Ini ajaran materialistis yang justru dikritik keras oleh cerita ini.

Jawaban yang Tepat: A dan B.`,
  },

  // --- Soal 12: Benar / Salah ---
  {
    id: 437,
    question: `Read the following statements about the modern Malin Kundang story:
(1) Malin denied knowing his mother because he was ashamed of her appearance in front of his business partners.
(2) The mother prayed for Malin's physical destruction by turning his yacht into stone.
(3) Malin's company went bankrupt due to a sudden system crash after he rejected his mother.

Which of the following represents the correct truth values (Benar / Salah) for statements (1), (2), and (3) in order?`,
    questionType: 'single',
    options: [
      'A. (1) True, (2) False, (3) True',
      'B. (1) True, (2) True, (3) False',
      'C. (1) False, (2) False, (3) True',
      'D. (1) False, (2) True, (3) False',
    ],
    correctAnswer: 0, // A: True, False, True
    isHots: true,
    explanation: `Analisis Kebenaran Pernyataan Berdasarkan Cerita:

1. Pernyataan (1):
   "Malin denied knowing his mother because he was ashamed of her appearance in front of his business partners."
   (Malin tidak mengakui ibunya karena malu akan penampilan ibunya di hadapan para mitra bisnisnya).
   -> Analisis Teks: Teks paragraf 3 menyatakan: "Malin, fearing that his wealthy business partners would look down on him if they knew his humble origins, stepped back. 'Who are you? I do not know this beggar'..." Jadi alasan Malin mengusir ibunya memang murni karena gengsi dan malu di depan rekan bisnisnya.
   -> Nilai: TRUE (Benar).

2. Pernyataan (2):
   "The mother prayed for Malin's physical destruction by turning his yacht into stone."
   (Sang ibu berdoa memohon kehancuran fisik Malin dengan mengubah kapal pesiarnya menjadi batu).
   -> Analisis Teks: Teks secara tegas menulis: "Instead of cursing him to stone, she whispered, 'May your success bring you the peace you have stolen from your own heart.'" Ibu tidak berdoa agar kapal pesiar menjadi batu.
   -> Nilai: FALSE (Salah).

3. Pernyataan (3):
   "Malin's company went bankrupt due to a sudden system crash after he rejected his mother."
   (Perusahaan Malin bangkrut akibat kerusakan sistem mendadak setelah ia menolak ibunya).
   -> Analisis Teks: Kalimat teks: "...a sudden system crash wiped out his entire company's database, leaving him bankrupt overnight."
   -> Nilai: TRUE (Benar).

Urutan nilai kebenaran: (1) True, (2) False, (3) True.
Jawaban yang Tepat: A.`,
  },

  // ==========================================
  // STIMULUS 5: How Photovoltaic Cells Work (Soal 13 - 15)
  // ==========================================

  // --- Soal 13: Pilihan Ganda Standar ---
  {
    id: 438,
    question: `Read the scientific report text below carefully to answer the following questions!

How Photovoltaic Cells Work
Solar energy is harvested using photovoltaic (PV) cells, which are commonly known as solar panels. These cells are made of semiconductor materials, primarily silicon. When sunlight strikes the surface of the PV cell, photons (light particles) are absorbed by the silicon atoms. 
This absorption process causes electrons to be knocked loose from their atoms, allowing them to flow freely. Due to the internal electrical field of the cell, these free electrons are forced to move in a specific direction, creating an electrical current. This direct current (DC) is then captured and conducted through metal contacts. 
To make this electricity usable for household appliances, the DC electricity is sent to an inverter, where it is converted into alternating current (AC). Finally, the AC electricity is distributed to the electrical grid or used directly in homes. Because no moving parts are involved in this process, solar panels can operate quietly and require minimal maintenance over their lifespan of 25 to 30 years.

Why is the passive voice frequently used in this report text?`,
    image: '/images/tryout/eng_p6_q13.PNG',
    imageCaption: 'Text Stimulus 5: How Photovoltaic Cells Work',
    questionType: 'single',
    options: [
      'A. To emphasize the historical background of solar panel inventors.',
      'B. To focus on the scientific processes and actions rather than the person performing them.',
      'C. To express the writer\'s personal feelings about renewable energy.',
      'D. To make the text sound like a fictional narrative story.',
    ],
    correctAnswer: 1, // B
    isHots: true,
    explanation: `Konsep Tata Bahasa: Fungsi Kalimat Pasif dalam Teks Ilmiah (Passive Voice in Scientific Reports):

1. Apa itu Passive Voice?
   Kalimat pasif adalah kalimat di mana Subjek menerima perlakuan/tindakan (kata kerjanya berawalan "di-" dalam bahasa Indonesia), dirumuskan dengan:
   Subject + to be (is / am / are / was / were) + Verb 3 (Past Participle).
   Contoh dalam teks: "Solar energy is harvested..." (Energi matahari dipanen...), "photons are absorbed..." (foton-foton diserap...), "is converted into alternating current..." (diubah menjadi arus bolak-balik...).

2. Mengapa Teks Laporan Sains Menggunakan Kalimat Pasif?
   Dalam sains, fokus utama pembahasan adalah PROSES ALAMIAH ATAU REAKSI ILMIAH itu sendiri ("what happens"), bukan siapa orang yang melakukannya ("who did it").
   Siapa orang yang menyerap foton atau siapa orang yang mengalirkan elektron tidaklah relevan, melainkan bagaimana fenomena fisika dan kelistrikan tersebut terjadi.

3. Evaluasi Pilihan:
   - Pilihan A salah: Teks tidak menceritakan sejarah para penemu panel surya.
   - Pilihan B tepat sempurna: "To focus on the scientific processes and actions rather than the person performing them" (Untuk berfokus pada proses dan tindakan ilmiah daripada orang yang melakukannya).
   - Pilihan C salah: Kalimat pasif justru bersifat objektif dan bebas dari perasaan pribadi penulis.
   - Pilihan D salah: Teks ini adalah laporan fakta ilmiah (factual report), bukan fiksi dongeng.

Jawaban yang Tepat: B.`,
  },

  // --- Soal 14: Pilihan Ganda Kompleks ---
  {
    id: 439,
    question: `Read the text about Photovoltaic Cells again.

Which of the following sentences from the text are written in the Passive Voice? (Select TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. "Solar energy is harvested using photovoltaic (PV) cells..."',
      'B. "...photons (light particles) are absorbed by the silicon atoms."',
      'C. "Sunlight strikes the surface of the photovoltaic cell during daytime."',
      'D. "Solar panels can operate quietly and require minimal maintenance."',
    ],
    correctAnswers: [0, 1], // A and B
    isHots: false,
    explanation: `Panduan Cara Mengenali Kalimat Pasif (Passive Voice) vs Kalimat Aktif:

1. Rumus Emas Kalimat Pasif:
   Ada [To Be: is/am/are/was/were/been] + [Kata Kerja Bentuk Ke-3 / Verb 3].

2. Bedah Struktur Masing-Masing Pilihan:
   - Kalimat A: "Solar energy IS HARVESTED using photovoltaic (PV) cells..."
     * Ada To Be: "is"
     * Ada Verb 3: "harvested" (dipanen)
     * Artinya: Energi surya DIPANEN menggunakan sel fotovoltaik.
     -> Ini adalah KALIMAT PASIF (BENAR - Centang A).
   
   - Kalimat B: "...photons (light particles) ARE ABSORBED by the silicon atoms."
     * Ada To Be: "are"
     * Ada Verb 3: "absorbed" (diserap)
     * Ada penanda pelaku: "by the silicon atoms" (oleh atom silikon)
     * Artinya: Foton-foton DISERAP oleh atom silikon.
     -> Ini adalah KALIMAT PASIF (BENAR - Centang B).

   - Kalimat C: "Sunlight strikes the surface of the photovoltaic cell during daytime."
     * Pola: Subject ("Sunlight") + Verb 1 berakhiran -s ("strikes" / menyinari/menabrak).
     * Artinya: Cahaya matahari menabrak permukaan sel fotovoltaik.
     -> Ini adalah KALIMAT AKTIF (Active Voice).

   - Kalimat D: "Solar panels can operate quietly and require minimal maintenance."
     * Pola: Modal ("can") + Verb 1 dasar ("operate" / beroperasi) dan Verb 1 ("require" / membutuhkan).
     * Artinya: Panel surya dapat beroperasi secara hening dan membutuhkan sedikit perawatan.
     -> Ini adalah KALIMAT AKTIF (Active Voice).

Jawaban yang Tepat: A dan B.`,
  },

  // --- Soal 15: Benar / Salah ---
  {
    id: 440,
    question: `Read the following statements regarding the operation of photovoltaic cells:
(1) The inverter is used to convert alternating current (AC) into direct current (DC).
(2) Silicon is the primary semiconductor material used in photovoltaic cells.
(3) Solar panels require high maintenance because they contain many moving parts.

Which of the following represents the correct truth values (Benar / Salah) for statements (1), (2), and (3) in order?`,
    questionType: 'single',
    options: [
      'A. (1) False, (2) True, (3) False',
      'B. (1) False, (2) False, (3) True',
      'C. (1) True, (2) True, (3) False',
      'D. (1) True, (2) False, (3) True',
    ],
    correctAnswer: 0, // A: False, True, False
    isHots: true,
    explanation: `Pemeriksaan Kebenaran Konsep Sains dalam Teks:

1. Pernyataan (1):
   "The inverter is used to convert alternating current (AC) into direct current (DC)."
   (Inverter digunakan untuk mengubah arus bolak-balik (AC) menjadi arus searah (DC)).
   -> Cek Kalimat Teks: "To make this electricity usable... the DC electricity is sent to an inverter, where it is converted into alternating current (AC)." Panel surya menghasilkan DC, lalu inverter mengubah DC MENJADI AC (bukan AC ke DC). Jadi pernyataannya terbalik.
   -> Nilai: FALSE (Salah).

2. Pernyataan (2):
   "Silicon is the primary semiconductor material used in photovoltaic cells."
   (Silikon adalah bahan semikonduktor utama yang digunakan dalam sel fotovoltaik).
   -> Cek Kalimat Teks: "These cells are made of semiconductor materials, PRIMARILY SILICON." Kata "primarily" bersinonim dengan "utama/terutama".
   -> Nilai: TRUE (Benar).

3. Pernyataan (3):
   "Solar panels require high maintenance because they contain many moving parts."
   (Panel surya membutuhkan perawatan tinggi karena memiliki banyak bagian yang bergerak).
   -> Cek Kalimat Teks: "Because NO MOVING PARTS are involved in this process, solar panels can operate quietly and require MINIMAL MAINTENANCE..." Panel surya tidak punya bagian yang bergerak dan perawatannya sangat minim (minimal maintenance), bukan high maintenance.
   -> Nilai: FALSE (Salah).

Urutan nilai kebenaran: (1) False, (2) True, (3) False.
Jawaban yang Tepat: A.`,
  },

  // ==========================================
  // STIMULUS 6: SMP Tunas Bangsa Invitation (Soal 16 - 18)
  // ==========================================

  // --- Soal 16: Pilihan Ganda Standar ---
  {
    id: 441,
    question: `Read the invitation card below carefully to answer the following questions!

============================================================
SMP TUNAS BANGSA INVITATION
============================================================
Dear Parents/Guardians of Grade 9 Students,
We cordially invite you to attend the 25th Graduation Ceremony 
of SMP Tunas Bangsa.
Date : Saturday, June 15, 2024
Time : 08:00 AM – 11:30 AM
Venue : Grand Ballroom, Hotel Mulia, Jakarta
Dress Code:
- Parents : Formal Batik or National Attire
- Students : School Uniform (Batik) with Graduation Toga
*Note: Due to limited seating, only two guests per student 
are allowed inside the hall. Please RSVP by June 10, 2024, 
via the school website link: www.smptunasbangsa.sch.id/rsvp.
============================================================

What is the primary restriction mentioned in the invitation for the graduation ceremony?`,
    image: '/images/tryout/eng_p6_q16.PNG',
    imageCaption: 'Text Stimulus 6: SMP Tunas Bangsa Invitation',
    questionType: 'single',
    options: [
      'A. Students are not allowed to wear the graduation toga.',
      'B. Only two family members per student can enter the graduation hall.',
      'C. Parents must register on the day of the event at the hotel lobby.',
      'D. The ceremony is only open to parents who wear formal suits.',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Panduan Membaca Teks Undangan Fungsional (Invitation Text):

1. Pahami Arti Kata "Restriction" pada Soal:
   - "Restriction" berarti batasan atau pembatasan aturan yang diberlakukan bagi para undangan.

2. Cari Bagian Catatan Penting (*Note):
   Perhatikan bagian bawah teks undangan:
   "*Note: Due to limited seating, only two guests per student are allowed inside the hall."
   (Catatan: Karena keterbatasan tempat duduk, HANYA DUA ORANG TAMU per siswa yang diizinkan masuk ke dalam aula).

3. Evaluasi Pilihan Jawaban:
   - Pilihan A salah: Siswa justru diminta memakai toga wisuda ("with Graduation Toga").
   - Pilihan B sangat tepat: "Only two family members per student can enter the graduation hall" (Hanya dua anggota keluarga/tamu per siswa yang boleh masuk aula).
   - Pilihan C salah: Konfirmasi kehadiran (RSVP) wajib dilakukan sebelum tanggal 10 Juni lewat situs web, bukan saat hari H di lobi hotel.
   - Pilihan D salah: Orang tua diminta memakai Batik formal atau pakaian nasional, bukan setelan jas barat (formal suits).

Jawaban yang Tepat: B.`,
  },

  // --- Soal 17: Pilihan Ganda Kompleks ---
  {
    id: 442,
    question: `Read the graduation invitation card again.

Which of the following statements are correct based on the invitation? (Select TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. The graduation ceremony will take place in the school\'s main hall.',
      'B. Parents are expected to wear either formal Batik or national attire.',
      'C. Confirmation of attendance (RSVP) must be submitted on or before June 10, 2024.',
      'D. The event is scheduled to last for exactly five hours.',
    ],
    correctAnswers: [1, 2], // B and C
    isHots: false,
    explanation: `Langkah Memverifikasi Fakta Rincian Undangan:

1. Analisis Setiap Pilihan:
   - Pilihan A: "The graduation ceremony will take place in the school's main hall."
     -> SALAH. Baris "Venue" tertulis: "Grand Ballroom, Hotel Mulia, Jakarta", bukan di aula sekolah.
   - Pilihan B: "Parents are expected to wear either formal Batik or national attire."
     -> BENAR (Centang Pilihan B). Baris "Dress Code" menyebutkan: "Parents : Formal Batik or National Attire".
   - Pilihan C: "Confirmation of attendance (RSVP) must be submitted on or before June 10, 2024."
     -> BENAR (Centang Pilihan C). Teks menuliskan: "Please RSVP by June 10, 2024". Kata "by June 10" dalam bahasa Inggris berarti paling lambat tanggal 10 Juni 2024.
   - Pilihan D: "The event is scheduled to last for exactly five hours."
     -> SALAH. Waktu acara adalah: "08:00 AM – 11:30 AM". Dari jam 08.00 pagi sampai 11.30 siang berdurasi tepat 3,5 jam (3 jam 30 menit), bukan 5 jam.

Jawaban yang Tepat: B dan C.`,
  },

  // --- Soal 18: Pilihan Ganda Standar ---
  {
    id: 443,
    question: `What should a parent do if they want to attend the ceremony but it is already June 12, 2024, and they have not registered?`,
    questionType: 'single',
    options: [
      'A. They can still attend because registration is optional.',
      'B. They should contact the school immediately as the RSVP deadline has passed.',
      'C. They can register directly at Hotel Mulia on the day of the event.',
      'D. They should ask their child to fill out the form on the graduation day.',
    ],
    correctAnswer: 1, // B
    isHots: true,
    explanation: `Logika Prosedural & Pemecahan Masalah (Problem Solving):

1. Analisis Batas Waktu (Deadline):
   Undangan menyatakan dengan tegas: "Please RSVP by June 10, 2024". RSVP (Répondez s'il vous plaît) adalah konfirmasi kehadiran resmi untuk menghitung kuota kursi dan konsumsi.

2. Situasi Masalah:
   Sekarang sudah tanggal 12 Juni 2024, yang artinya batas akhir (deadline) pendaftaran sudah lewat dua hari (overdue). Karena tempat duduk terbatas ("Due to limited seating"), pihak penyelenggara kemungkinan besar sudah menutup sistem pendaftaran daring dan mengunci jumlah kursi.

3. Tindakan Terbaik yang Sopan dan Tepat:
   Orang tua tersebut tidak boleh langsung datang tanpa kejelasan. Tindakan yang paling logis adalah segera menghubungi pihak sekolah secara langsung untuk mengonfirmasi apakah masih ada kursi kosong yang tersedia akibat pembatalan tamu lain ("They should contact the school immediately as the RSVP deadline has passed").

4. Mengapa Pilihan Lain Salah?
   - A salah: Pendaftaran RSVP bersifat penting demi kepastian kursi, bukan opsional sembarangan.
   - C & D salah: Tidak ada layanan pendaftaran di tempat (on the spot) pada hari H karena tempat duduk di ballroom hotel sangat dibatasi.

Jawaban yang Tepat: B.`,
  },

  // ==========================================
  // STIMULUS 7: Final Exam Preparation (Soal 19 - 21)
  // ==========================================

  // --- Soal 19: Pilihan Ganda Kompleks ---
  {
    id: 444,
    question: `Read the dialogue below carefully to answer the following questions!

Preparing for the Final Exam
(Dina and Leo are studying together in the library.)
Dina: Leo, have you prepared for the English exam tomorrow? If we don't pass this exam, we won't be able to join the study tour next month.
Leo: I have read some chapters, but I am still confused about conditional sentences and conjunctions. Although I studied all night yesterday, I still don't understand when to use 'unless' and 'if clause'.
Dina: Don't worry. 'Unless' means 'if... not'. For example: "You won't pass the exam unless you study hard," which means "You won't pass the exam if you do not study hard."
Leo: Ah, I see! So, if I practice more questions now, I will understand it better, right?
Dina: Exactly! And remember, we should manage our time well because the exam has a strict time limit.
Leo: Thanks, Dina. If you didn't help me, I would definitely fail this exam.
Dina: Come on, let's do our best so that we can go on the study tour together!

Based on the dialogue, which of the following conditional sentences are grammatically correct and match the context? (Select TWO correct answers)`,
    image: '/images/tryout/eng_p6_q19.PNG',
    imageCaption: 'Text Stimulus 7: Preparing for the Final Exam',
    questionType: 'complex',
    options: [
      'A. If Dina and Leo do not pass the exam, they will not join the study tour.',
      'B. Leo would fail the exam if Dina did not help him.',
      'C. Unless Leo practices more questions, he will understand the lesson easily.',
      'D. If Dina had not helped Leo, he will pass the exam easily.',
    ],
    correctAnswers: [0, 1], // A and B
    isHots: true,
    explanation: `Bedah Tata Bahasa: Rumus Conditional Sentences (Kalimat Pengandaian):

1. Kalimat A: "If Dina and Leo do not pass the exam, they will not join the study tour."
   - Pola: Conditional Type 1 (Kemungkinan nyata di masa depan)
     Rumus: "If + Simple Present (do not pass), Subject + will not + Verb 1 (will not join)".
   - Makna Konteks: Dina mengatakan jika mereka tidak lulus ujian, mereka tidak bisa ikut karyawisata ("If we don't pass this exam, we won't be able to join the study tour"). Tata bahasa dan maknanya 100% BENAR (Centang A).

2. Kalimat B: "Leo would fail the exam if Dina did not help him."
   - Pola: Conditional Type 2 (Pengandaian situasi saat ini yang berlawanan dengan fakta)
     Rumus: "Subject + would + Verb 1 (would fail), if + Simple Past (did not help)".
   - Makna Konteks: Faktanya Dina saat ini sedang membantu Leo di perpustakaan. Leo berandai: "Jika kamu tidak membantuku, aku pasti akan gagal ujian ini" (sesuai kalimat Leo: "If you didn't help me, I would definitely fail this exam"). Tata bahasa dan maknanya 100% BENAR (Centang B).

3. Kalimat C: "Unless Leo practices more questions, he will understand the lesson easily."
   - Perhatikan arti "Unless": Unless = If... not (Jika tidak).
   - Jika diterjemahkan: "Jika Leo TIDAK berlatih lebih banyak soal, dia AKAN memahami pelajaran dengan mudah." Maknanya menjadi rancu dan terbalik secara logika (SALAH).

4. Kalimat D: "If Dina had not helped Leo, he will pass the exam easily."
   - Campuran rumus yang salah (had not helped = Type 3 masa lampau, digabung dengan will pass = Type 1). Selain itu maknanya menyatakan Leo akan mudah lulus jika tidak dibantu, padahal faktanya ia butuh bantuan Dina (SALAH).

Jawaban yang Tepat: A dan B.`,
  },

  // --- Soal 20: Pilihan Ganda Standar ---
  {
    id: 445,
    question: `What does Leo mean when he says, "Although I studied all night yesterday, I still don't understand..."?`,
    questionType: 'single',
    options: [
      'A. He didn\'t study last night because he already understood the lesson.',
      'B. He understood the lesson easily because he studied all night.',
      'C. Despite spending the whole night studying, he still found the material confusing.',
      'D. He plans to study all night tonight so that he can understand the lesson.',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Konsep Kata Hubung Pertentangan / Konsesi (Conjunction of Concession):

1. Arti Kata "Although":
   - "Although" berarti "Meskipun / Walaupun".
   - Fungsinya adalah menghubungkan dua klausa yang bertentangan (kontras). Di satu sisi ada usaha keras yang dilakukan, namun di sisi lain hasilnya di luar harapan.

2. Bedah Kalimat Leo:
   "Although I studied all night yesterday, I still don't understand when to use 'unless' and 'if clause'."
   Artinya: Meskipun saya sudah belajar semalam suntuk kemarin, saya masih belum paham kapan menggunakan kata 'unless' dan 'if clause'.

3. Padanan Frasa "Despite" (Sinonim):
   - "Despite spending the whole night studying, he still found the material confusing."
   (Meskipun menghabiskan sepanjang malam untuk belajar, dia masih merasa materi tersebut membingungkan).
   Ini adalah parafrasa yang paling tepat untuk kalimat Leo.

4. Mengapa Pilihan Lain Salah?
   - Pilihan A salah: Leo jelas belajar semalam suntuk, bukan tidak belajar.
   - Pilihan B salah: Leo belum paham, bukan paham dengan mudah.
   - Pilihan D salah: Kalimat Leo merujuk pada apa yang sudah ia lakukan kemarin malam ("yesterday"), bukan rencana nanti malam.

Jawaban yang Tepat: C.`,
  },

  // --- Soal 21: Pilihan Ganda Kompleks ---
  {
    id: 446,
    question: `Read the dialogue between Dina and Leo again.

Which of the following statements are true about the characters' situations? (Select TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. Dina is helping Leo to understand grammar topics for the upcoming exam.',
      'B. The study tour is open to all students regardless of their exam results.',
      'C. Leo is already an expert in conditional sentences before studying with Dina.',
      'D. Dina uses an example sentence with \'unless\' to explain its meaning to Leo.',
    ],
    correctAnswers: [0, 3], // A and D
    isHots: false,
    explanation: `Langkah Memeriksa Kebenaran Fakta Tokoh dalam Dialog:

1. Evaluasi Setiap Pilihan:
   - Pilihan A: "Dina is helping Leo to understand grammar topics for the upcoming exam." (Dina membantu Leo memahami topik tata bahasa untuk ujian yang akan datang).
     -> BENAR (Centang Pilihan A). Mereka belajar bersama di perpustakaan dan Dina menjelaskan materi conditional sentences serta conjunctions yang belum dipahami Leo.
   - Pilihan B: "The study tour is open to all students regardless of their exam results." (Karyawisata terbuka untuk semua siswa tanpa memandang hasil ujian).
     -> SALAH. Dina mengatakan: "If we don't pass this exam, we won't be able to join the study tour next month." Jadi karyawisata ada syaratnya, yaitu harus lulus ujian ini dulu.
   - Pilihan C: "Leo is already an expert in conditional sentences before studying with Dina." (Leo sudah sangat ahli dalam kalimat pengandaian sebelum belajar bersama Dina).
     -> SALAH BESAR. Leo sendiri mengaku bingung: "I am still confused about conditional sentences...".
   - Pilihan D: "Dina uses an example sentence with 'unless' to explain its meaning to Leo." (Dina menggunakan contoh kalimat yang memuat kata 'unless' untuk menjelaskan maknanya kepada Leo).
     -> BENAR (Centang Pilihan D). Dina memberikan contoh nyata: "For example: 'You won't pass the exam unless you study hard,' which means 'You won't pass the exam if you do not study hard.'"

Jawaban yang Tepat: A dan D.`,
  },

  // ==========================================
  // STIMULUS 8: Sarah's Achievement (Soal 22 - 24)
  // ==========================================

  // --- Soal 22: Pilihan Ganda Standar ---
  {
    id: 447,
    question: `Read the text below carefully to answer the following questions!

Sarah's Outstanding Achievement
Sarah, a 9th-grade student of MTs Madani, has just won the gold medal at the National Science Olympiad. She has been preparing for this competition for the last six months. During this period, she has spent countless hours reading scientific journals and conducting experiments in the school laboratory.
Currently, Sarah is working on a new environmental project. She is developing a biodegradable plastic made from cassava starch. "I have been researching this material since last year," Sarah said during an interview. "We are currently testing its durability under different weather conditions." Her science teacher, Mr. Rahman, praised her determination. He stated that Sarah has always been a highly motivated student who never gives up easily. If she successfully completes this project, her work will be exhibited at the ASEAN Youth Science Fair next semester.

Which of the following sentences from the text indicates an action that started in the past and is still continuing up to the present?`,
    image: '/images/tryout/eng_p6_q22.PNG',
    imageCaption: 'Text Stimulus 8: Sarah\'s Outstanding Achievement',
    questionType: 'single',
    options: [
      'A. "Sarah, a 9th-grade student of MTs Madani, has just won the gold medal..."',
      'B. "She has been preparing for this competition for the last six months."',
      'C. "If she successfully completes this project, her work will be exhibited..."',
      'D. "Sarah is working on a new environmental project."',
    ],
    correctAnswer: 1, // B
    isHots: true,
    explanation: `Konsep Tata Bahasa: Present Perfect Continuous Tense:

1. Rumus Present Perfect Continuous Tense:
   Subject + have/has + been + Verb-ing + (for / since + keterangan waktu).

2. Fungsi Sosial dan Makna:
   Tenses ini digunakan khusus untuk menyatakan suatu tindakan atau proses yang:
   - Telah DIMULAI pada masa lampau (6 bulan yang lalu),
   - Masih TERUS BERLANGSUNG sampai detik ini (pada saat pembicara berbicara), dan
   - Menekankan lamanya proses/durasi waktu tindakan tersebut.

3. Bedah Kalimat B:
   "She HAS BEEN PREPARING for this competition for the last six months."
   (Dia telah mempersiapkan diri untuk kompetisi ini selama enam bulan terakhir).
   Bentuk "has been preparing" memenuhi ciri khas aksi yang berlanjut dari masa lampau hingga sekarang.

4. Mengapa Pilihan Lain Bukan Jawaban yang Tepat?
   - Pilihan A: "has just won" adalah Present Perfect Simple yang menyatakan peristiwa yang baru saja selesai terjadi (just completed action), bukan aksi yang masih terus berlangsung.
   - Pilihan C: Merupakan kalimat pengandaian masa depan (Conditional Type 1), bukan aksi masa lalu yang masih berlanjut.
   - Pilihan D: "is working" adalah Present Continuous Tense yang menyatakan tindakan yang sedang terjadi saat ini saja, tanpa keterangan rentang waktu yang dimulai di masa lampau.

Jawaban yang Tepat: B.`,
  },

  // --- Soal 23: Pilihan Ganda Kompleks ---
  {
    id: 448,
    question: `Read the text about Sarah's achievement again.

Based on the text, what is Sarah currently doing as part of her scientific endeavors? (Select TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. She is preparing for the National Science Olympiad which will be held next month.',
      'B. She is developing and testing a biodegradable plastic made from cassava starch.',
      'C. She is conducting experiments to test the durability of her new material.',
      'D. She is participating in the ASEAN Youth Science Fair in another country.',
    ],
    correctAnswers: [1, 2], // B and C
    isHots: false,
    explanation: `Langkah Mengidentifikasi Aktivitas Sarah Saat Ini (Current Activities):

1. Cari Kata Kunci "Currently" pada Paragraf 2 Teks:
   - "Currently, Sarah is working on a new environmental project. She is developing a biodegradable plastic made from cassava starch."
     -> Sarah sedang mengembangkan plastik ramah lingkungan yang terbuat dari pati singkong (BENAR - Centang Pilihan B).
   - Sarah mengatakan: "We are currently testing its durability under different weather conditions."
     -> Sarah dan timnya sedang melakukan uji coba daya tahan bahan barunya di bawah berbagai kondisi cuaca (BENAR - Centang Pilihan C).

2. Mengapa Opsi A dan D Salah?
   - Opsi A salah: Sarah SUDAH memenangkan medali emas Olimpiade Sains Nasional ("has just won the gold medal"), bukan baru akan ikut bulan depan.
   - Opsi D salah: Pameran ASEAN Youth Science Fair baru berupa peluang di semester depan jika penelitiannya sukses ("If she successfully completes this project, her work will be exhibited... next semester"), bukan sedang diikuti saat ini.

Jawaban yang Tepat: B dan C.`,
  },

  // --- Soal 24: Pilihan Ganda Kompleks ---
  {
    id: 449,
    question: `Read the text about Sarah again.

Which of the following statements about Sarah's character and achievements are supported by the text? (Select TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. Sarah has shown great determination and a strong work ethic in her studies.',
      'B. Sarah won the gold medal without any preparation or prior research.',
      'C. Mr. Rahman believes that Sarah is a student who easily gives up when facing difficulties.',
      'D. Sarah\'s biodegradable plastic project has the potential to be exhibited internationally.',
    ],
    correctAnswers: [0, 3], // A and D
    isHots: true,
    explanation: `Analisis Karakter & Prestasi Tokoh:

1. Evaluasi Setiap Pilihan:
   - Pilihan A: "Sarah has shown great determination and a strong work ethic in her studies." (Sarah telah menunjukkan tekad yang luar biasa dan etos kerja yang kuat dalam belajarnya).
     -> SANGAT BENAR (Centang Pilihan A). Bukti teks: Sarah menghabiskan waktu tanpa henti membaca jurnal ilmiah dan melakukan eksperimen lab ("spent countless hours reading scientific journals and conducting experiments"). Gurunya juga memuji determinasi tingginya.
   - Pilihan B: "Sarah won the gold medal without any preparation or prior research." (Sarah memenangkan medali emas tanpa persiapan atau penelitian sebelumnya).
     -> SALAH BESAR. Sarah mempersiapkan diri intensif selama 6 bulan terakhir ("preparing for this competition for the last six months").
   - Pilihan C: "Mr. Rahman believes that Sarah is a student who easily gives up when facing difficulties." (Pak Rahman percaya bahwa Sarah adalah siswa yang mudah menyerah ketika menghadapi kesulitan).
     -> SALAH. Pak Rahman justru mengatakan Sarah adalah siswa yang TIDAK PERNAH mudah menyerah ("never gives up easily").
   - Pilihan D: "Sarah's biodegradable plastic project has the potential to be exhibited internationally." (Proyek plastik ramah lingkungan Sarah berpotensi untuk dipamerkan di tingkat internasional).
     -> SANGAT BENAR (Centang Pilihan D). Jika sukses, karyanya akan dipamerkan di ASEAN Youth Science Fair (ajang pameran sains pemuda tingkat regional se-Asia Tenggara/internasional).

Jawaban yang Tepat: A dan D.`,
  },

  // ==========================================
  // STIMULUS 9: Two-Factor Authentication (Soal 25)
  // ==========================================

  // --- Soal 25: Pilihan Ganda Standar ---
  {
    id: 450,
    question: `Read the digital safety guide below carefully to answer the question!

Securing Your Social Media Account with Two-Factor Authentication (2FA)
Two-Factor Authentication (2FA) is an essential security feature that adds an extra layer of protection to your online accounts. Follow these simple steps to enable it:
1. Open your social media application and navigate to Settings & Privacy.
2. Select Security or Account Security.
3. Tap on Two-Factor Authentication and choose your preferred backup method (Authenticator App or Text Message/SMS).
4. If you choose SMS, enter your active phone number. A 6-digit verification code will be sent to your phone.
5. Enter the received code into the app to confirm and activate 2FA.
6. Save the provided backup codes in a secure place. You will need these codes if you lose access to your phone.
*Warning: Never share your 2FA verification codes or backup codes with anyone, including people claiming to be customer service representatives.*

What is the critical warning provided at the end of the guide, and why is it important?`,
    image: '/images/tryout/eng_p6_q25.PNG',
    imageCaption: 'Text Stimulus 9: Two-Factor Authentication (2FA)',
    questionType: 'single',
    options: [
      'A. To save backup codes on the phone so that they can be easily copied.',
      'B. To never share verification codes with anyone to prevent unauthorized access to the account.',
      'C. To turn off 2FA when traveling abroad to avoid SMS charges.',
      'D. To change the phone number frequently so that hackers cannot track it.',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Panduan Memahami Teks Prosedur Keamanan Digital (Digital Literacy & Safety):

1. Perhatikan Bagian Peringatan Kritis (*Warning):
   Teks bagian akhir memuat peringatan berbunyi:
   "*Warning: Never share your 2FA verification codes or backup codes with anyone, including people claiming to be customer service representatives.*"
   (Peringatan: JANGAN PERNAH membagikan kode verifikasi 2FA atau kode cadanganmu kepada siapa pun, termasuk orang-orang yang mengaku sebagai petugas layanan pelanggan / customer service).

2. Mengapa Larangan Ini Sangat Krusial?
   Kode verifikasi 2FA (Two-Factor Authentication) dan kode cadangan (backup codes) adalah kunci pertahanan terakhir akun digital kita. Jika kode tersebut diberikan kepada pihak lain atau penipu (scammer/hacker), mereka dapat langsung mengambil alih akun kita secara tidak sah ("unauthorized access").

3. Evaluasi Pilihan Jawaban:
   - Pilihan A salah: Menyimpan kode di ponsel yang mudah disalin justru berisiko bocor saat ponsel diretas atau hilang.
   - Pilihan B sangat tepat: "To never share verification codes with anyone to prevent unauthorized access to the account" (Jangan pernah membagikan kode verifikasi kepada siapa pun demi mencegah akses tanpa izin ke dalam akun).
   - Pilihan C salah: Teks sama sekali tidak menyarankan mematikan 2FA saat ke luar negeri.
   - Pilihan D salah: Teks tidak menyarankan sering berganti nomor ponsel.

Jawaban yang Tepat: B.`,
  },
];
