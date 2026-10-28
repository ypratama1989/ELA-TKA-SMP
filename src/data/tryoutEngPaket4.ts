import { Question } from '../types';

/**
 * Bank Soal Try Out TKA SMP Resmi - Bahasa Inggris Paket 4 (eng_p4)
 * 25 Soal CBT Komprehensif:
 * - Soal 1-10: Pilihan Ganda Standar (Single Choice)
 * - Soal 11-20: Pilihan Ganda Kompleks (Multi-Select AKM)
 * - Soal 21-25: Benar / Salah (True/False AKM)
 * Dilengkapi Pembahasan Langkah Demi Langkah (Step-by-Step)
 */
export const TRYOUT_ENG_PAKET_4: Question[] = [
  // ==========================================
  // I. PILIHAN GANDA STANDAR (SOAL 1 - 10)
  // ==========================================

  // --- Konteks 1: Procedure Text (Soal 1 & 2) ---
  {
    id: 376,
    question: `Read the text below to answer questions 1 and 2.

How to Clean a Blender
1. Pour warm water into the blender pitcher until it is half full.
2. Add a few drops of liquid dish soap.
3. Secure the lid on the blender and place the pitcher on the base.
4. Turn on the blender and let it run on high speed for about 30 seconds.
5. Pour out the soapy water and rinse the pitcher thoroughly with clean warm water.
6. Wipe the base of the blender with a damp cloth. Do not submerge the base in water.

What is the main purpose of the text?`,
    questionType: 'single',
    options: [
      'A. To describe the parts of a modern blender.',
      'B. To explain how to operate a blender safely.',
      'C. To provide instructions on how to clean a blender.',
      'D. To persuade the readers to buy a new blender.',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Langkah Menentukan Tujuan Teks (Purpose of the Text):

1. Perhatikan Judul Teks:
   Judul teks berbunyi: "How to Clean a Blender" (Cara Membersihkan Blender).
   Teks yang diawali dengan kata "How to..." dan memuat langkah-langkah berurutan (1, 2, 3...) adalah Teks Prosedur (Procedure Text).

2. Kenali Tujuan Komunikatif Teks Prosedur:
   Tujuan utama teks prosedur adalah memandu pembaca langkah demi langkah tentang cara melakukan atau membuat sesuatu ("to provide instructions / to show how to do something").

3. Analisis Pilihan:
   - Pilihan A salah karena teks tidak mendeskripsikan anatomi blender.
   - Pilihan B salah karena teks tidak membahas cara mengoperasikan blender untuk membuat jus/makanan, melainkan cara membersihkannya.
   - Pilihan C tepat: "To provide instructions on how to clean a blender" (Memberikan petunjuk tentang cara membersihkan blender).
   - Pilihan D salah karena ini bukan iklan untuk merayu pembaca membeli blender baru.

Jawaban yang Tepat: C.`,
  },
  {
    id: 377,
    question: `Read the text below to answer questions 1 and 2.

How to Clean a Blender
1. Pour warm water into the blender pitcher until it is half full.
2. Add a few drops of liquid dish soap.
3. Secure the lid on the blender and place the pitcher on the base.
4. Turn on the blender and let it run on high speed for about 30 seconds.
5. Pour out the soapy water and rinse the pitcher thoroughly with clean warm water.
6. Wipe the base of the blender with a damp cloth. Do not submerge the base in water.

Why should we NOT submerge the blender base in water?`,
    questionType: 'single',
    options: [
      'A. Because it will make the blender pitcher dirty.',
      'B. Because the base contains electrical components that can be damaged.',
      'C. Because warm water is better than cold water for cleaning.',
      'D. Because the liquid dish soap will not work properly.',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Langkah Pembuktian Alasan Logis Keamanan Alat Listrik:

1. Baca Kalimat pada Langkah ke-6:
   "Wipe the base of the blender with a damp cloth. Do not submerge the base in water."
   (Usap bagian dasar/mesin blender dengan kain lembap. Jangan merendam bagian dasar tersebut ke dalam air).

2. Pahami Logika Komponen Elektronik:
   Bagian dasar blender (*the base*) adalah tempat mesin dinamo dan kabel kelistrikan berada. Jika mesin beraliran listrik terendam air (*submerge in water*), air akan menyebabkan korsleting listrik dan merusak mesin secara permanen (*electrical components that can be damaged*).

3. Kesimpulan:
   Alasan kita tidak boleh merendam dudukan/mesin blender ke dalam air adalah karena dudukan tersebut memuat komponen kelistrikan yang rentan rusak terkena air.

Jawaban yang Tepat: B.`,
  },

  // --- Konteks 2: Recount Text (Soal 3 & 4) ---
  {
    id: 378,
    question: `Read the text below to answer questions 3 and 4.

Last week, my school held a sports day. All students participated in various competitions, such as football, running, and tug-of-war. I joined the 100-meter sprint. I had practiced hard for weeks, but I felt very nervous when I stood at the starting line. When the whistle blew, I ran as fast as I could. I managed to overtake my friends and finished in second place. Although I didn't win the gold medal, I felt extremely proud of my achievement. It was an unforgettable experience.

What is the main idea of the paragraph?`,
    questionType: 'single',
    options: [
      'A. The writer\'s preparation for the running competition.',
      'B. The writer\'s experience participating in a school sports day.',
      'C. The reasons why the writer\'s school held a sports competition.',
      'D. The description of various sports competitions at school.',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Langkah Menemukan Ide Pokok Paragraf (Main Idea):

1. Baca Kalimat Pertama dan Terakhir:
   - Kalimat awal: "Last week, my school held a sports day... I joined the 100-meter sprint." (Minggu lalu sekolahku mengadakan hari olahraga... Aku ikut lomba lari cepat 100 meter).
   - Kalimat akhir: "...It was an unforgettable experience." (Itu adalah pengalaman yang tak terlupakan).

2. Rangkum Keseluruhan Isi Teks:
   Paragraf menceritakan seluruh alur pengalaman pribadi penulis sejak mengikuti lomba lari, perasaan gugupnya, perjuangannya berlari cepat menyalip kawan-kawannya, hingga perasaannya yang sangat bangga meraih juara kedua.

3. Evaluasi Pilihan:
   - Pilihan A hanya mencakup sebagian kecil (persiapan saja).
   - Pilihan B merangkum keseluruhan peristiwa: pengalaman penulis berpartisipasi dalam hari olahraga sekolah (*The writer's experience participating in a school sports day*).
   - Pilihan C dan D tidak sesuai karena teks berfokus pada cerita pengalaman diri sendiri, bukan alasan sekolah atau rincian cabang olahraga lain.

Jawaban yang Tepat: B.`,
  },
  {
    id: 379,
    question: `Read the text below to answer questions 3 and 4.

Last week, my school held a sports day. All students participated in various competitions, such as football, running, and tug-of-war. I joined the 100-meter sprint. I had practiced hard for weeks, but I felt very nervous when I stood at the starting line. When the whistle blew, I ran as fast as I could. I managed to overtake my friends and finished in second place. Although I didn't win the gold medal, I felt extremely proud of my achievement. It was an unforgettable experience.

"Although I didn't win the gold medal, I felt extremely proud..."
The underlined word is closest in meaning to...`,
    questionType: 'single',
    options: [
      'A. highly',
      'B. slightly',
      'C. rarely',
      'D. poorly',
    ],
    correctAnswer: 0, // A
    isHots: false,
    explanation: `Langkah Menentukan Persamaan Kata (Synonym):

1. Arti Kata "Extremely":
   Kata "extremely" berasal dari kata sifat "extreme" yang berarti "sangat luar biasa" atau "amat sangat".
   Dalam kalimat: "I felt extremely proud" (Aku merasa amat sangat bangga).

2. Cek Makna Opsi Pilihan:
   - A. highly = sangat / amat tinggi (Sinonim yang paling tepat untuk intensitas perasaan).
   - B. slightly = sedikit / agak (Kebalikannya).
   - C. rarely = jarang / hampir tidak pernah.
   - D. poorly = dengan buruk / kurang baik.

3. Kesimpulan:
   Kata yang memiliki arti paling dekat dengan "extremely" adalah "highly".

Jawaban yang Tepat: A.`,
  },

  // --- Konteks 3: Asking & Giving Direction (Soal 5) ---
  {
    id: 380,
    question: `Read the dialogue below to answer question 5.

Rian: Excuse me, could you tell me how to get to the nearest post office?
Santi: Sure. Go straight down this street until you reach the T-junction. Then, turn left onto Merdeka Street. The post office is on your right, next to the bank.
Rian: Thank you very much!

Based on the dialogue, where is the post office located?`,
    questionType: 'single',
    options: [
      'A. On the left side of Merdeka Street, opposite the bank.',
      'B. At the T-junction, before turning left.',
      'C. On the right side of Merdeka Street, beside the bank.',
      'D. Straight down the street, before the T-junction.',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Langkah Melacak Petunjuk Lokasi Arah:

1. Perhatikan Rute yang Diucapkan Santi:
   - "Go straight down this street until you reach the T-junction." (Lurus terus sampai pertigaan).
   - "Then, turn left onto Merdeka Street." (Lalu belok kiri masuk ke Jalan Merdeka).
   - "The post office is on your right, next to the bank." (Kantor pos ada di sebelah kananmu, di sebelah/samping bank).

2. Cocokkan Posisi Akhir:
   - Kantor pos berada di Jalan Merdeka sisi kanan (*on the right side of Merdeka Street*).
   - Letaknya tepat di samping gedung bank (*next to the bank* = *beside the bank*).

3. Evaluasi Pilihan:
   Pilihan C menyatakan: "On the right side of Merdeka Street, beside the bank". Ini sama persis dengan instruksi Santi.

Jawaban yang Tepat: C.`,
  },

  // --- Konteks 4: Formal Invitation (Soal 6 & 7) ---
  {
    id: 381,
    question: `Read the text below to answer questions 6 and 7.

To: All Grade 9 Students

You are cordially invited to attend the Graduation Ceremony of SMP Harapan Bangsa.
* Day/Date: Saturday, June 15th, 2024
* Time: 08:00 AM – 11:30 AM
* Venue: School Main Hall
* Dress Code: Traditional Indonesian Attire (Batik/Kebaya)

Please RSVP by June 10th, 2024, to Mrs. Indah (0812-3456-789).

What is the writer's intention in writing the text?`,
    questionType: 'single',
    options: [
      'A. To inform students about the school rules during graduation.',
      'B. To invite Grade 9 students to their graduation ceremony.',
      'C. To ask students to buy traditional Indonesian attire.',
      'D. To announce the winner of the best student award.',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Langkah Menentukan Maksud/Tujuan Penulis (Writer's Intention):

1. Cari Kalimat Kunci Teks:
   Di baris pembuka tertulis:
   "You are cordially invited to attend the Graduation Ceremony..."
   (Anda dengan hormat diundang untuk menghadiri Upacara Kelulusan...).

2. Pahami Fungsi Sosial Teks:
   Teks ini adalah Surat Undangan Resmi (Formal Invitation). Maksud utama pengirim menulis teks ini adalah mengundang para siswa kelas 9 untuk hadir ke wisuda kelulusan mereka ("To invite Grade 9 students to their graduation ceremony").

Jawaban yang Tepat: B.`,
  },
  {
    id: 382,
    question: `Read the text below to answer questions 6 and 7.

To: All Grade 9 Students

You are cordially invited to attend the Graduation Ceremony of SMP Harapan Bangsa.
* Day/Date: Saturday, June 15th, 2024
* Time: 08:00 AM – 11:30 AM
* Venue: School Main Hall
* Dress Code: Traditional Indonesian Attire (Batik/Kebaya)

Please RSVP by June 10th, 2024, to Mrs. Indah (0812-3456-789).

What must a student do if they want to attend the event?`,
    questionType: 'single',
    options: [
      'A. Contact Mrs. Indah before June 10th, 2024.',
      'B. Wear formal western suits or dresses.',
      'C. Arrive at the school hall after 11:30 AM.',
      'D. Bring their parents to the stage.',
    ],
    correctAnswer: 0, // A
    isHots: false,
    explanation: `Langkah Menemukan Syarat Kehadiran (RSVP):

1. Arti Singkatan RSVP:
   RSVP berasal dari bahasa Prancis (*Répondez s'il vous plaît*) yang artinya "Harap konfirmasi kehadiran Anda".

2. Cek Petunjuk RSVP pada Undangan:
   "Please RSVP by June 10th, 2024, to Mrs. Indah (0812-3456-789)."
   Kata "by June 10th" artinya paling lambat tanggal 10 Juni 2024. Jadi setiap siswa yang ingin hadir wajib mengonfirmasi kehadirannya kepada Ibu Indah sebelum atau paling lambat tanggal 10 Juni 2024 (*Contact Mrs. Indah before June 10th, 2024*).

3. Mengapa Pilihan Lain Salah:
   - Pilihan B salah karena pakaiannya baju tradisional Indonesia (Batik/Kebaya), bukan setelan jas barat.
   - Pilihan C salah karena jam 11:30 AM acara sudah selesai.

Jawaban yang Tepat: A.`,
  },

  // --- Konteks 5: Report Text & Passive Voice (Soal 8 & 9) ---
  {
    id: 383,
    question: `Read the text below to answer questions 8 and 9.

Platypuses are semi-aquatic mammals endemic to eastern Australia. They are unique because they lay eggs instead of giving birth to live young, making them monotremes. A platypus has a duck-like bill, a beaver-like tail, and webbed feet. Its body is covered with dense, waterproof fur that keeps it warm in cold water. They use their tails to store fat reserves and their webbed feet for swimming efficiently.

Why are platypuses considered unique mammals?`,
    questionType: 'single',
    options: [
      'A. They live both on land and in water.',
      'B. They have dense and waterproof fur.',
      'C. They lay eggs rather than giving birth.',
      'D. They are only found in eastern Australia.',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Langkah Menemukan Fakta Keunikan Mamalia:

1. Lacak Kata "Unique" pada Teks:
   Perhatikan kalimat kedua:
   "They are unique because they lay eggs instead of giving birth to live young, making them monotremes."
   (Mereka unik karena mereka bertelur alih-alih melahirkan anak, yang menjadikan mereka tergolong mamalia monotremata).

2. Konsep Biologi Dasar:
   Hampir seluruh mamalia di dunia berkembang biak dengan cara melahirkan (*giving birth / vivipar*). Platipus sangat unik dan istimewa karena sebagai mamalia yang menyusui, ia justru berkembang biak dengan cara bertelur (*lay eggs*).

Jawaban yang Tepat: C.`,
  },
  {
    id: 384,
    question: `Read the text below to answer questions 8 and 9.

Platypuses are semi-aquatic mammals endemic to eastern Australia. They are unique because they lay eggs instead of giving birth to live young, making them monotremes. A platypus has a duck-like bill, a beaver-like tail, and webbed feet. Its body is covered with dense, waterproof fur that keeps it warm in cold water. They use their tails to store fat reserves and their webbed feet for swimming efficiently.

"Its body is covered with dense, waterproof fur..."
The passive sentence above can be transformed into active voice as...`,
    questionType: 'single',
    options: [
      'A. Dense, waterproof fur covers its body.',
      'B. Dense, waterproof fur is covering its body.',
      'C. Dense, waterproof fur covered its body.',
      'D. Dense, waterproof fur has covered its body.',
    ],
    correctAnswer: 0, // A
    isHots: false,
    explanation: `Langkah Mengubah Kalimat Pasif ke Aktif (Passive to Active Voice):

1. Analisis Kalimat Pasif Asli:
   "Its body (Objek penderita) + is covered (to be 'is' + Verb 3) + with dense, waterproof fur (Pelaku/Agen)."
   Tenses kalimat ini adalah Simple Present Tense (karena to be yang dipakai adalah "is").

2. Aturan Mengubah ke Kalimat Aktif Simple Present:
   - Pelaku menjadi Subjek baru: "Dense, waterproof fur" (Bulu tebal kedap air = kata benda tunggal).
   - Kata kerja menjadi Verb 1 + s/es: "covers".
   - Objek diletakkan di belakang: "its body".

3. Susunan Kalimat Aktif yang Tepat:
   "Dense, waterproof fur covers its body."

4. Mengapa Pilihan Lain Salah:
   - Pilihan B memakai bentuk Continuous ("is covering").
   - Pilihan C memakai bentuk lampau Verb 2 ("covered").
   - Pilihan D memakai bentuk Perfect ("has covered").

Jawaban yang Tepat: A.`,
  },

  // --- Konteks 6: Instruction / Order (Soal 10) ---
  {
    id: 385,
    question: `Teacher: Your classroom is very dirty and messy, students. ...
Students: Yes, Sir. We will clean it up right away.

Which phrase best completes the teacher's instruction?`,
    questionType: 'single',
    options: [
      'A. You may go home now.',
      'B. Please sweep the floor and arrange the desks.',
      'C. You should study harder for the exam.',
      'D. Don\'t forget to bring your textbooks.',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Langkah Menganalisis Konteks Percakapan Logis:

1. Perhatikan Masalah yang Diungkapkan Guru:
   Guru melihat kondisi kelas: "Your classroom is very dirty and messy" (Ruang kelas kalian sangat kotor dan berantakan).

2. Perhatikan Tanggapan Murid:
   Para murid merespons patuh: "Yes, Sir. We will clean it up right away" (Baik, Pak. Kami akan segera membersihkannya sekarang juga).

3. Cari Instruksi yang Berhubungan dengan Membersihkan Ruangan:
   - Pilihan B: "Please sweep the floor and arrange the desks" (Tolong sapu lantainya dan rapikan meja-mejanya). Ini instruksi yang sangat nyambung dan tepat dengan keluhan kelas kotor serta jawaban murid yang hendak bersih-bersih.
   - Pilihan A, C, dan D tidak ada sangkut pautnya dengan membersihkan kelas yang kotor.

Jawaban yang Tepat: B.`,
  },

  // ==========================================
  // II. PILIHAN GANDA KOMPLEKS (SOAL 11 - 20)
  // ==========================================

  // --- Konteks 7: Narrative Text (Soal 11 & 12) ---
  {
    id: 386,
    question: `Read the text below to answer questions 11 and 12.

The Legend of Prambanan Temple
Once upon a time, there was a beautiful princess named Rara Jonggrang. A powerful prince named Bandung Bondowoso fell in love with her and wanted to marry her. Rara Jonggrang did not want to marry him, so she gave him an impossible condition: he had to build a thousand temples in one night.

With the help of genies, Bandung Bondowoso almost completed the task. Seeing this, Rara Jonggrang ordered the villagers to pound rice and burn straw to make the roosters crow, signaling that dawn had broken. The genies fled, thinking it was morning. Bandung Bondowoso was furious when he found out he was tricked. He cursed Rara Jonggrang into stone, becoming the thousandth statue in the temple.

Which of the following statements are TRUE according to the story? (Select all correct answers)`,
    questionType: 'complex',
    options: [
      'A. Rara Jonggrang sincerely loved Bandung Bondowoso.',
      'B. Bandung Bondowoso used supernatural help to build the temples.',
      'C. The roosters crowed because they saw the actual sunrise.',
      'D. Rara Jonggrang was turned into a stone statue as a curse.',
    ],
    correctAnswers: [1, 3], // B and D
    isHots: false,
    explanation: `Langkah Pengujian Fakta Cerita Rakyat Prambanan:

1. Uji Pernyataan A:
   "Rara Jonggrang sincerely loved Bandung Bondowoso" (Rara Jonggrang tulus mencintai Bandung Bondowoso).
   Teks menyatakan: "Rara Jonggrang did not want to marry him" (Ia tidak mau menikah dengannya). Jadi pernyataan A SALAH.

2. Uji Pernyataan B:
   "Bandung Bondowoso used supernatural help to build the temples" (Bandung Bondowoso menggunakan bantuan makhluk gaib untuk membangun candi).
   Teks menyatakan: "With the help of genies..." (Dengan bantuan para jin). Jin adalah makhluk gaib/supranatural. Jadi pernyataan B BENAR.

3. Uji Pernyataan C:
   "The roosters crowed because they saw the actual sunrise" (Ayam jantan berkokok karena melihat matahari terbit sungguhan).
   Ayam berkokok karena tertipu suara tumbukan padi dan cahaya api dari jerami yang dibakar warga, bukan karena matahari terbit asli. Jadi pernyataan C SALAH.

4. Uji Pernyataan D:
   "Rara Jonggrang was turned into a stone statue as a curse" (Rara Jonggrang berubah menjadi patung batu akibat kutukan).
   Teks menyatakan: "He cursed Rara Jonggrang into stone...". Jadi pernyataan D BENAR.

Jawaban yang Tepat: B dan D.`,
  },
  {
    id: 387,
    question: `Read the text below to answer questions 11 and 12.

The Legend of Prambanan Temple
Once upon a time, there was a beautiful princess named Rara Jonggrang. A powerful prince named Bandung Bondowoso fell in love with her and wanted to marry her. Rara Jonggrang did not want to marry him, so she gave him an impossible condition: he had to build a thousand temples in one night.

With the help of genies, Bandung Bondowoso almost completed the task. Seeing this, Rara Jonggrang ordered the villagers to pound rice and burn straw to make the roosters crow, signaling that dawn had broken. The genies fled, thinking it was morning. Bandung Bondowoso was furious when he found out he was tricked. He cursed Rara Jonggrang into stone, becoming the thousandth statue in the temple.

What moral values can we learn from the story? (Select all correct answers)`,
    questionType: 'complex',
    options: [
      'A. Cheating and dishonesty will bring bad consequences.',
      'B. We must always force others to love us.',
      'C. Anger and revenge can lead to destruction.',
      'D. Hard work is not important if we have magic.',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: false,
    explanation: `Langkah Menggali Pesan Moral (Moral Values):

1. Analisis Perbuatan Rara Jonggrang:
   Rara Jonggrang bertindak curang dan tidak jujur dengan membakar jerami untuk menipu jin dan menggagalkan perjanjian. Akibat kelicikannya itu, ia dikutuk menjadi patung batu selamanya.
   -> Nilai moral: Kecurangan dan ketidakjujuran akan mendatangkan akibat buruk (*Cheating and dishonesty will bring bad consequences*). Pilihan A BENAR.

2. Analisis Perbuatan Bandung Bondowoso:
   Ketika tahu dirinya ditipu, Bandung Bondowoso melampiaskan amarah dan dendamnya secara destruktif dengan mengutuk sang putri.
   -> Nilai moral: Kemarahan dan dendam yang tak terkendali membawa kehancuran (*Anger and revenge can lead to destruction*). Pilihan C BENAR.

3. Mengapa B dan D Salah:
   Memaksa orang lain mencintai kita (B) dan menganggap kerja keras tidak penting jika ada sihir (D) adalah sikap yang tercela, bukan pesan moral kebajikan.

Jawaban yang Tepat: A dan C.`,
  },

  // --- Konteks 8: Announcement (Soal 13 & 14) ---
  {
    id: 388,
    question: `Read the text below to answer questions 13 and 14.

To: All Members of the English Club

Please be informed that our weekly meeting will be rescheduled.
* Original Schedule: Thursday, Oct 12th at 2 PM.
* New Schedule: Friday, Oct 13th at 1:30 PM.
* Activity: Preparing for the upcoming storytelling competition.

If you cannot attend the meeting, please notify the chairperson immediately.

Which of the following information matches the announcement? (Select all correct answers)`,
    questionType: 'complex',
    options: [
      'A. The meeting is rescheduled to a day later than the original plan.',
      'B. The meeting will start thirty minutes earlier than the original time.',
      'C. The main agenda of the meeting is preparing for a storytelling contest.',
      'D. Members do not need to confirm if they cannot attend.',
    ],
    correctAnswers: [0, 1, 2], // A, B, and C
    isHots: false,
    explanation: `Langkah Pembuktian Rincian Pengumuman Jadwal Baru:

1. Analisis Hari (Original: Thursday 12th -> New: Friday 13th):
   Jadwal dipindahkan dari hari Kamis ke hari Jumat (mundur 1 hari).
   -> Pilihan A: "The meeting is rescheduled to a day later than the original plan" (BENAR).

2. Analisis Jam Mulai (Original: 2 PM / 14.00 -> New: 1:30 PM / 13.30):
   Jadwal baru dimulai pukul 13.30, yaitu 30 menit lebih awal daripada jadwal lama yang dimulai pukul 14.00.
   -> Pilihan B: "The meeting will start thirty minutes earlier than the original time" (BENAR).

3. Analisis Agenda Kegiatan:
   Kegiatan tertulis: "Preparing for the upcoming storytelling competition" (Persiapan lomba bercerita).
   -> Pilihan C: "The main agenda... is preparing for a storytelling contest" (BENAR).

4. Analisis Pilihan D:
   Kalimat terakhir berbunyi: "please notify the chairperson immediately" (harap segera beri tahu ketua). Jadi anggota wajib mengabari, bukan tidak perlu. Pilihan D SALAH.

Jawaban yang Tepat: A, B, dan C.`,
  },
  {
    id: 389,
    question: `Which conjunctions can correctly complete this sentence?
"The meeting was rescheduled ... the school hall was being renovated on Thursday." (Select all correct answers)`,
    questionType: 'complex',
    options: [
      'A. because',
      'B. although',
      'C. since',
      'D. so that',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: false,
    explanation: `Konsep Kata Hubung Alasan/Sebab (Conjunction of Cause and Reason):

1. Analisis Hubungan Antar-Klausa:
   - Klausa Utama: "The meeting was rescheduled" (Pertemuan diubah jadwalnya = Akibat).
   - Klausa Kedua: "the school hall was being renovated on Thursday" (Aula sekolah sedang direnovasi pada hari Kamis = Sebab/Alasan).

2. Memilih Kata Hubung yang Tepat:
   Kita memerlukan konjungsi yang bermakna "karena" atau "berhubung":
   - "because" = karena (BENAR - Pilihan A).
   - "since" = karena / berhubung (Dalam bahasa Inggris resmi, *since* juga berfungsi menyatakan alasan penyebab, sinonim dari *because*. BENAR - Pilihan C).

3. Mengapa Pilihan Lain Salah:
   - "although" berarti "meskipun" (menyatakan pertentangan).
   - "so that" berarti "agar / supaya" (menyatakan tujuan).

Jawaban yang Tepat: A dan C.`,
  },

  // --- Konteks 9: Present Perfect Tense (Soal 15) ---
  {
    id: 390,
    question: `Read the following sentences. Which sentences use the Present Perfect Tense correctly? (Select all correct answers)`,
    questionType: 'complex',
    options: [
      'A. I have lived in this city since I was five years old.',
      'B. She has went to the market to buy some vegetables.',
      'C. They have finished their English project just now.',
      'D. We have already seen that movie twice.',
    ],
    correctAnswers: [0, 2, 3], // A, C, and D
    isHots: false,
    explanation: `Aturan Gramatikal Present Perfect Tense:

1. Rumus Baku Wajib:
   Subject + have/has + Verb 3 (Past Participle).

2. Uji Masing-Masing Kalimat:
   - Kalimat A: "I have lived in this city since I was five years old."
     Subjek I + have + Verb 3 "lived". Penggunaan penanda "since" tepat. Struktur tata bahasanya BENAR.
   - Kalimat B: "She has went..."
     Salah fatal! Kata "went" adalah Verb 2. Bentuk Verb 3 dari *go* adalah *gone* (go - went - gone). Seharusnya "She has gone". Kalimat ini SALAH.
   - Kalimat C: "They have finished their English project just now."
     Subjek They + have + Verb 3 "finished". Struktur tata bahasanya BENAR.
   - Kalimat D: "We have already seen that movie twice."
     Subjek We + have + Verb 3 "seen" (see - saw - seen). Struktur tata bahasanya BENAR.

Jawaban yang Tepat: A, C, dan D.`,
  },

  // --- Konteks 10: Prohibition & Obligation (Soal 16) ---
  {
    id: 391,
    question: `Read the following instructions about safety in the laboratory.
* Do not eat or drink in the laboratory.
* Wear safety goggles during experiments.
* Wash your hands thoroughly after handling chemicals.

Which statements express prohibition or obligation correctly based on the rules? (Select all correct answers)`,
    questionType: 'complex',
    options: [
      'A. Students must wear safety goggles during experiments.',
      'B. Students are allowed to eat snacks in the laboratory.',
      'C. Students should not drink anything while in the lab.',
      'D. Students do not have to wash their hands after the experiment.',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: false,
    explanation: `Konsep Kewajiban (Obligation) dan Larangan (Prohibition):

1. Aturan 1: "Do not eat or drink in the laboratory"
   - Ini adalah larangan mutlak (Prohibition).
   - Opsi C menyatakan: "Students should not drink anything while in the lab" (Murid tidak boleh minum apa pun selama di lab). Ini sesuai dengan aturan. BENAR.
   - Opsi B menyatakan murid diizinkan makan camilan (*allowed to eat*). Ini melanggar aturan (SALAH).

2. Aturan 2: "Wear safety goggles during experiments"
   - Ini adalah kewajiban mutlak (Obligation).
   - Opsi A menyatakan: "Students must wear safety goggles during experiments" (Murid wajib memakai kacamata pelindung). Kata "must" menyatakan kewajiban resmi. BENAR.

3. Aturan 3: "Wash your hands thoroughly..."
   - Mencuci tangan adalah kewajiban setelah memegang bahan kimia.
   - Opsi D menyatakan murid tidak perlu mencuci tangan (*do not have to wash*). Ini salah besar (SALAH).

Jawaban yang Tepat: A dan C.`,
  },

  // --- Konteks 11: Conditional Sentences (Soal 17) ---
  {
    id: 392,
    question: `Read the conditional sentences below. Which sentences are grammatically correct If Clause Type 1 (expressing real future possibilities)? (Select all correct answers)`,
    questionType: 'complex',
    options: [
      'A. If it rains tomorrow, we will cancel the picnic.',
      'B. If I have enough money, I would buy a new laptop.',
      'C. If she studies hard, she will pass the examination.',
      'D. If they come early, they can get the front seats.',
    ],
    correctAnswers: [0, 2, 3], // A, C, and D
    isHots: false,
    explanation: `Konsep Rumus Conditional Sentence Type 1:

1. Rumus Standar Type 1:
   If + Simple Present (Verb 1 / s / es), Subject + will / can + Verb 1.
   Digunakan untuk menyatakan kejadian yang nyata dan sangat mungkin terjadi di masa depan.

2. Uji Masing-Masing Kalimat:
   - Kalimat A: "If it rains tomorrow, we will cancel the picnic."
     Klausa If memakai Verb 1 ("rains") dan klausa hasil memakai "will cancel". Pasangannya tepat. (BENAR - Pilihan A).
   - Kalimat B: "If I have enough money, I would buy..."
     Salah memasangkan "have" (Present) dengan "would" (Past Future). Seharusnya "will buy". (SALAH).
   - Kalimat C: "If she studies hard, she will pass the examination."
     Klausa If memakai Verb-es ("studies") dan klausa hasil memakai "will pass". Pasangannya tepat. (BENAR - Pilihan C).
   - Kalimat D: "If they come early, they can get the front seats."
     Klausa If memakai Verb 1 ("come") dan klausa hasil memakai modal Present "can get". Penggunaan modal "can" pada Type 1 untuk menunjukkan kemampuan/kemungkinan masa depan adalah sah dan baku dalam tata bahasa Inggris. (BENAR - Pilihan D).

Jawaban yang Tepat: A, C, dan D.`,
  },

  // --- Konteks 12: Report Text (Soal 18) ---
  {
    id: 393,
    question: `Read the following text about "Jasmine".

Jasmine is an evergreen climbing shrub. It is famous for its sweet fragrance. The flowers are usually white or yellow. Jasmine is widely used in making perfumes, cosmetics, and herbal teas.

Which of the following are the characteristics of Jasmine mentioned in the text? (Select all correct answers)`,
    questionType: 'complex',
    options: [
      'A. It is a climbing shrub.',
      'B. It has a very strong, sweet scent.',
      'C. It only produces red flowers.',
      'D. It can be used as an ingredient for herbal tea.',
    ],
    correctAnswers: [0, 1, 3], // A, B, and D
    isHots: false,
    explanation: `Langkah Mencocokkan Ciri-Ciri Bunga Melati (Jasmine) dari Teks:

1. Cek Kalimat Pertama:
   "Jasmine is an evergreen climbing shrub" (Melati adalah tanaman semak merambat hijau abadi).
   -> Pilihan A BENAR.

2. Cek Kalimat Kedua:
   "It is famous for its sweet fragrance" (Terkenal dengan aromanya yang harum manis).
   Kata "fragrance" bersinonim dengan "scent" (aroma/wangi).
   -> Pilihan B BENAR.

3. Cek Kalimat Ketiga:
   "The flowers are usually white or yellow" (Bunganya biasanya putih atau kuning).
   Pilihan C menyatakan bunganya hanya berwarna merah (*only produces red flowers*), sehingga salah.

4. Cek Kalimat Keempat:
   "Jasmine is widely used in making perfumes, cosmetics, and herbal teas."
   -> Pilihan D BENAR.

Jawaban yang Tepat: A, B, dan D.`,
  },

  // --- Konteks 13: Passive Voice (Soal 19) ---
  {
    id: 394,
    question: `Which of the following sentences are written in the Passive Voice? (Select all correct answers)`,
    questionType: 'complex',
    options: [
      'A. The delicious cake was baked by my mother this morning.',
      'B. The students are writing an essay about their holidays.',
      'C. Thousands of visitors are attracted by the beauty of Bali every year.',
      'D. He has repaired his broken bicycle in the garage.',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: false,
    explanation: `Ciri Khas Kalimat Pasif (Passive Voice):

1. Rumus Mutlak Kalimat Pasif:
   Subject + to be (is/am/are/was/were/been) + Verb 3 (Past Participle) + (by Agent).
   Maknanya adalah subjek "dikenai pekerjaan" (di- atau ter-).

2. Uji Masing-Masing Kalimat:
   - Kalimat A: "The delicious cake was baked by my mother..."
     Ada to be lampau "was" + Verb 3 "baked" + "by my mother". Artinya: Kue lezat dipanggang oleh ibuku. Ini adalah kalimat pasif (BENAR - Pilihan A).
   - Kalimat B: "The students are writing an essay..."
     Ada to be "are" bertemu Verb-ing "writing". Ini kalimat aktif Present Continuous (Murid-murid sedang menulis). Bukan pasif.
   - Kalimat C: "Thousands of visitors are attracted by the beauty of Bali..."
     Ada to be "are" + Verb 3 "attracted" + "by...". Artinya: Ribuan pengunjung terpikat oleh keindahan Bali. Ini adalah kalimat pasif (BENAR - Pilihan C).
   - Kalimat D: "He has repaired his broken bicycle..."
     Ini kalimat aktif Present Perfect (Dia telah memperbaiki sepedanya). Bentuk pasifnya adalah "His broken bicycle has been repaired by him".

Jawaban yang Tepat: A dan C.`,
  },

  // --- Konteks 14: Giving Suggestions (Soal 20) ---
  {
    id: 395,
    question: `Read the dialogue below.

Ami: I have a terrible headache.
Budi: You should take some medicine and get some rest.

Which of the following expressions can also be used to give a suggestion to Ami? (Select all correct answers)`,
    questionType: 'complex',
    options: [
      'A. Why don\'t you see a doctor?',
      'B. You must go to school right now.',
      'C. How about drinking some warm water?',
      'D. I don\'t think you need any help.',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: false,
    explanation: `Konsep Pola Ungkapan Memberi Saran (Giving Suggestions):

1. Cara Baku Memberi Saran dalam Bahasa Inggris:
   - Pola 1: "Why don't you + Verb 1...?" (Mengapa kamu tidak periksa ke dokter saja?). Ini adalah saran yang santun dan penuh perhatian. (BENAR - Pilihan A).
   - Pola 2: "How about + Verb-ing...?" (Bagaimana kalau minum air hangat?). Ini adalah tawaran/anjuran solusi yang baik. (BENAR - Pilihan C).

2. Mengapa Pilihan Lain Salah:
   - Pilihan B: "You must go to school right now" adalah kalimat perintah/kewajiban yang memaksa (*obligation*), bukan saran yang berempati kepada orang yang sedang sakit kepala.
   - Pilihan D: "I don't think you need any help" bernada acuh tak acuh dan meremehkan sakitnya.

Jawaban yang Tepat: A dan C.`,
  },

  // ==========================================
  // III. BENAR / SALAH (SOAL 21 - 25)
  // ==========================================

  // --- Konteks 15: Present Continuous Passive (Soal 21) ---
  {
    id: 396,
    question: `Pernyataan:
Dalam kalimat "The classroom is being cleaned by the students right now", bentuk kata kerja yang digunakan adalah Present Continuous Passive.`,
    questionType: 'single',
    options: ['Benar', 'Salah'],
    correctAnswer: 0, // Benar
    isHots: false,
    explanation: `Konsep Bedah Tenses Present Continuous Bentuk Pasif:

1. Rumus Pasif Present Continuous:
   Subject + to be (is / am / are) + being + Verb 3 (Past Participle).

2. Analisis Kalimat pada Soal:
   - Subjek tunggal: "The classroom"
   - To be: "is"
   - Penanda Continuous pasif: "being"
   - Verb 3: "cleaned"
   - Penanda waktu: "right now" (sedang terjadi saat ini).

3. Arti Kalimat:
   "Ruang kelas SEDANG DIBERSIHKAN oleh para murid saat ini juga."
   Bentuk kata kerja "is being cleaned" memang merupakan bentuk baku dan sahih dari Present Continuous Passive.

Kesimpulan: Pernyataan tersebut BENAR.`,
  },

  // --- Konteks 16: Conditional Sentence Analysis (Soal 22) ---
  {
    id: 397,
    question: `Pernyataan:
Kalimat "If I won the lottery, I will buy a big house" adalah contoh kalimat If Clause Type 1 yang secara tata bahasa sudah tepat.`,
    questionType: 'single',
    options: ['Benar', 'Salah'],
    correctAnswer: 1, // Salah
    isHots: false,
    explanation: `Langkah Pembuktian Kesalahan Pasangan Tenses:

1. Rumus Conditional Sentence Type 1:
   If + Simple Present (Verb 1 / s / es), Subject + will + Verb 1.
   Contoh yang benar: "If I WIN the lottery, I will buy a big house."

2. Bedah Kalimat pada Soal:
   "If I WON the lottery, I WILL buy a big house."
   - Kata "won" adalah bentuk lampau (Verb 2 - Past).
   - Kata "will buy" adalah bentuk Present Future.
   - Terjadi pencampuran tenses yang rusak antara Type 2 (won) dan Type 1 (will). Jika memakai "won", maka klausa hasilnya wajib memakai "would buy" (Type 2).

Kesimpulan: Kalimat tersebut salah secara tata bahasa. Pernyataan bernilai SALAH.`,
  },

  // --- Konteks 17: Report Text vs Descriptive Text (Soal 23) ---
  {
    id: 398,
    question: `Pernyataan:
Teks Report bertujuan untuk mendeskripsikan suatu objek secara khusus dan spesifik (misalnya: kucing peliharaan saya yang bernama Snowy).`,
    questionType: 'single',
    options: ['Benar', 'Salah'],
    correctAnswer: 1, // Salah
    isHots: false,
    explanation: `Konsep Perbedaan Mendasar Report Text dan Descriptive Text:

1. Teks Deskriptif (Descriptive Text):
   Bertujuan mendeskripsikan objek KHUSUS, SPESIFIK, dan individual tertentu. Contoh: Kucing peliharaan saya bernama Snowy, Menara Eiffel, Candi Borobudur.

2. Teks Laporan (Report Text):
   Bertujuan mendeskripsikan objek, fenomena alam, atau spesies makhluk hidup secara UMUM (in general) dan ILMIAH berdasarkan klasifikasi sains. Contoh: Spesies kucing secara umum (Cats are carnivorous mammals), Mamalia Platipus, Tsunami.

3. Evaluasi Pernyataan:
   Pernyataan membalik definisi kedua jenis teks tersebut. Mendeskripsikan kucing khusus bernama Snowy adalah tugas Teks Deskriptif, bukan Report Text.

Kesimpulan: Pernyataan tersebut SALAH.`,
  },

  // --- Konteks 18: Present Perfect Continuous Tense (Soal 24) ---
  {
    id: 399,
    question: `Pernyataan:
Pada kalimat "She has been teaching English for ten years", tenses yang digunakan menunjukkan tindakan yang dimulai di masa lalu dan masih berlangsung sampai sekarang.`,
    questionType: 'single',
    options: ['Benar', 'Salah'],
    correctAnswer: 0, // Benar
    isHots: false,
    explanation: `Konsep Tenses Present Perfect Continuous:

1. Rumus Present Perfect Continuous:
   Subject + have/has + been + Verb-ing.
   Pada kalimat: "She has been teaching English for ten years."

2. Fungsi Sosial dan Makna Tata Bahasa:
   Tenses ini digunakan khusus untuk menekankan kesinambungan suatu perbuatan (durasi waktu) yang:
   - Dimulai pada 10 tahun yang lalu di masa lampau (*started in the past*).
   - Masih terus dilakukan dan berlangsung sampai hari ini saat kalimat diucapkan (*still continuing now*).
   - Besar kemungkinan masih akan terus berlanjut ke masa depan.

Kesimpulan: Pernyataan tersebut BENAR.`,
  },

  // --- Konteks 19: Conjunction of Purpose (Soal 25) ---
  {
    id: 400,
    question: `Pernyataan:
Kata hubung (conjunction) "in order to" diikuti oleh kata kerja bentuk pertama (verb 1) untuk menunjukkan tujuan/maksud (purpose).`,
    questionType: 'single',
    options: ['Benar', 'Salah'],
    correctAnswer: 0, // Benar
    isHots: false,
    explanation: `Konsep Aturan Gramatikal Kata Hubung Tujuan "In Order To":

1. Rumus Baku "In order to":
   "... in order to + Bare Infinitive (Verb 1)"
   Contoh:
   - "He studied hard in order to PASS the exam." (Benar: pass adalah Verb 1).
   - Tidak boleh diikuti klausa subjek atau Verb-ing (salah jika: *in order to he passed* atau *in order to passing*).

2. Fungsi Bahasa:
   Frasa "in order to" memiliki arti "untuk / demi / agar", yang berfungsi untuk menunjukkan maksud atau tujuan (*showing purpose*).

Kesimpulan: Aturan yang dinyatakan pada soal sudah tepat 100%. Pernyataan bernilai BENAR.`,
  },
];
