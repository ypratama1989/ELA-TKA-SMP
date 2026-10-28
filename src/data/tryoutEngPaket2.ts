import { Question } from '../types';

/**
 * Bank Soal Try Out TKA SMP Resmi - Bahasa Inggris Paket 2 (eng_p2)
 * 25 Soal CBT Model Benar / Salah (True/False) Terverifikasi dengan Pembahasan Langkah Demi Langkah (Step-by-Step)
 */
export const TRYOUT_ENG_PAKET_2: Question[] = [
  // --- Konteks 1: Descriptive Text (Soal 1 & 2) ---
  {
    id: 326,
    question: `Read the text below to answer questions 1 and 2.

"I have a pet cat named Snowy. She has white, fluffy fur and beautiful blue eyes. She is very playful and loves sleeping on my lap."

Pernyataan:
Snowy has black and dirty fur.`,
    options: ['Benar', 'Salah'],
    correctAnswer: 1, // Salah
    isHots: false,
    explanation: `Langkah Pembuktian Informasi Teks:

1. Baca Pernyataan Soal:
   Pernyataan menyatakan: "Snowy has black and dirty fur" (Snowy memiliki bulu berwarna hitam dan kotor).

2. Lacak Kalimat di Dalam Teks:
   Di kalimat kedua teks tertulis secara jelas dan nyata:
   "She has white, fluffy fur and beautiful blue eyes."
   (Dia memiliki bulu yang berwarna putih, lembut/lebat, dan mata biru yang indah).

3. Bandingkan Fakta:
   - Teks menyebutkan: bulunya putih (white) dan lembut/bersih (fluffy).
   - Pernyataan menyebutkan: hitam (black) dan kotor (dirty).
   Keduanya sangat bertolak belakang (berlawanan 180 derajat).

Kesimpulan: Pernyataan tersebut SALAH.`,
  },
  {
    id: 327,
    question: `Read the text below to answer questions 1 and 2.

"I have a pet cat named Snowy. She has white, fluffy fur and beautiful blue eyes. She is very playful and loves sleeping on my lap."

Pernyataan:
The main purpose of the text is to describe the writer's pet cat in detail.`,
    options: ['Benar', 'Salah'],
    correctAnswer: 0, // Benar
    isHots: false,
    explanation: `Langkah Menentukan Tujuan Teks (Social Function / Purpose):

1. Kenali Jenis Teksnya:
   Teks di atas adalah Teks Deskripsi (Descriptive Text). Teks ini tidak menceritakan dongeng khayalan atau cara memasak sesuatu, melainkan fokus menggambarkan ciri fisik dan tingkah laku dari satu hewan peliharaan tertentu milik penulis, yaitu kucing bernama Snowy.

2. Ciri Khas Tujuan Teks Deskripsi:
   Tujuan utama teks deskripsi selalu dirumuskan dengan:
   "To describe [nama objek] in detail" (Untuk menggambarkan/mendeskripsikan objek secara rinci).

3. Cocokkan dengan Pernyataan:
   Pernyataan berbunyi: "The main purpose of the text is to describe the writer's pet cat in detail" (Tujuan utama teks adalah mendeskripsikan kucing peliharaan penulis secara rinci).
   Pernyataan ini tepat dan sesuai dengan kaidah kebahasaan.

Kesimpulan: Pernyataan tersebut BENAR.`,
  },

  // --- Konteks 2: Procedure Text (Soal 3 & 4) ---
  {
    id: 328,
    question: `Read the text below to answer questions 3 and 4.

How to Make Warm Tea
1. First, boil some water in a kettle.
2. Second, put a tea bag into a cup.
3. Next, pour the hot water into the cup.
4. Finally, add some sugar, stir it well, and the tea is ready to serve.

Pernyataan:
The first step to make warm tea is adding sugar into the cup.`,
    options: ['Benar', 'Salah'],
    correctAnswer: 1, // Salah
    isHots: false,
    explanation: `Langkah Analisis Urutan Teks Prosedur:

1. Perhatikan Kata Urutan (Sequence Words):
   Teks prosedur menggunakan kata penghubung urutan waktu:
   - "First" = Pertama
   - "Second" = Kedua
   - "Next" = Selanjutnya / Kemudian
   - "Finally" = Terakhir

2. Cari Langkah Pertama (First Step):
   Langkah nomor 1 tertulis:
   "1. First, boil some water in a kettle."
   (Pertama, rebuslah air di dalam teko).

3. Lihat Kapan Gula Ditambahkan:
   Menambahkan gula ada di langkah paling akhir (langkah 4):
   "4. Finally, add some sugar, stir it well..."

4. Kesimpulan:
   Langkah pertama adalah merebus air, bukan memasukkan gula. Menambahkan gula adalah langkah terakhir. Maka pernyataan tersebut SALAH.`,
  },
  {
    id: 329,
    question: `Read the text below to answer questions 3 and 4.

How to Make Warm Tea
1. First, boil some water in a kettle.
2. Second, put a tea bag into a cup.
3. Next, pour the hot water into the cup.
4. Finally, add some sugar, stir it well, and the tea is ready to serve.

Pernyataan:
We need hot water to brew the tea bag before adding sugar.`,
    options: ['Benar', 'Salah'],
    correctAnswer: 0, // Benar
    isHots: false,
    explanation: `Langkah Pembuktian Logika Kronologis:

1. Pahami Arti Kalimat Pernyataan:
   "We need hot water to brew the tea bag before adding sugar."
   (Kita membutuhkan air panas untuk menyeduh kantong teh sebelum menambahkan gula).

2. Cek Urutan Kejadian pada Teks:
   - Langkah 1: Air direbus hingga panas (hot water).
   - Langkah 2: Kantong teh ditaruh di cangkir.
   - Langkah 3: Menuangkan air panas ke cangkir untuk menyeduh teh (pour the hot water).
   - Langkah 4: Baru setelah itu gula dimasukkan (add some sugar).

3. Analisis:
   Penyeduhan kantong teh menggunakan air panas (langkah 3) memang dilakukan terlebih dahulu SEBELUM gula ditambahkan (langkah 4).

Kesimpulan: Pernyataan tersebut BENAR.`,
  },

  // --- Konteks 3: Date & Time (Soal 5) ---
  {
    id: 330,
    question: `Pernyataan:
If Indonesia celebrates its Independence Day on August 17th, it means the celebration is held in the eighth month of the year.`,
    options: ['Benar', 'Salah'],
    correctAnswer: 0, // Benar
    isHots: false,
    explanation: `Konsep Kalender dan Urutan Nama Bulan:

1. Mari Hitung Urutan 12 Bulan dalam Satu Tahun:
   1. January (Bulan ke-1)
   2. February (Bulan ke-2)
   3. March (Bulan ke-3)
   4. April (Bulan ke-4)
   5. May (Bulan ke-5)
   6. June (Bulan ke-6)
   7. July (Bulan ke-7)
   8. August (Bulan ke-8)
   9. September (Bulan ke-9)
   10. October (Bulan ke-10)
   11. November (Bulan ke-11)
   12. December (Bulan ke-12)

2. Evaluasi Pernyataan:
   Hari Kemerdekaan Indonesia diperingati pada tanggal 17 Agustus (August 17th). Karena bulan Agustus (August) berada tepat pada urutan ke-8 (the eighth month), maka pernyataan bahwa perayaannya diadakan di bulan kedelapan adalah sepenuhnya benar.

Kesimpulan: Pernyataan tersebut BENAR.`,
  },

  // --- Konteks 4: Suggestion & Permission (Soal 6 & 7) ---
  {
    id: 331,
    question: `Read the dialogue below to answer questions 6 and 7.

A: "I have a terrible headache."
B: "You should see a doctor. And anyway, may I borrow your pen to write down the doctor's address?"
A: "Sure, go ahead."

Pernyataan:
The phrase "You should see a doctor" is used by B to give a suggestion to A.`,
    options: ['Benar', 'Salah'],
    correctAnswer: 0, // Benar
    isHots: false,
    explanation: `Konsep Ungkapan Memberi Saran (Giving Suggestion):

1. Rumus dan Ciri Kata Kunci "Should":
   Kata modal "should" berarti "sebaiknya" atau "seharusnya".
   Pola: "You should + Verb 1" adalah cara baku dalam bahasa Inggris untuk memberikan saran atau anjuran (advice/suggestion) ketika seseorang sedang mengalami suatu masalah.

2. Konteks Percakapan:
   Si A mengeluh kepalanya sakit parah ("terrible headache").
   Lalu B merespons: "You should see a doctor" (Sebaiknya kamu pergi periksa ke dokter).

3. Analisis:
   Ucapan B jelas merupakan anjuran/saran yang baik dan solutif agar A segera sembuh.

Kesimpulan: Pernyataan tersebut BENAR.`,
  },
  {
    id: 332,
    question: `Read the dialogue below to answer questions 6 and 7.

A: "I have a terrible headache."
B: "You should see a doctor. And anyway, may I borrow your pen to write down the doctor's address?"
A: "Sure, go ahead."

Pernyataan:
The phrase "may I borrow your pen" shows that B is asking for A's permission.`,
    options: ['Benar', 'Salah'],
    correctAnswer: 0, // Benar
    isHots: false,
    explanation: `Konsep Meminta Izin (Asking for Permission):

1. Rumus Baku Meminta Izin yang Sopan:
   Pola: "May I + Verb 1...?" artinya "Bolehkah saya...?".
   Ini adalah ungkapan standar bahasa Inggris yang sangat santun untuk meminta izin (asking for permission) sebelum menggunakan barang milik orang lain.

2. Konteks Kalimat:
   B ingin menulis alamat dokter dan meminjam pulpen milik A dengan berkata: "May I borrow your pen...?" (Bolehkah saya meminjam pulpenmu?).
   Lalu A memberikan izin dengan menjawab: "Sure, go ahead" (Tentu, silakan).

3. Analisis:
   Frasa "may I borrow your pen" memang tepat merupakan wujud ekspresi meminta izin kepada lawan bicara.

Kesimpulan: Pernyataan tersebut BENAR.`,
  },

  // --- Konteks 5: Present Tenses & Continuous Tenses (Soal 8 & 9) ---
  {
    id: 333,
    question: `Read the sentence below to answer questions 8 and 9.

"Look! The children are playing football in the yard right now. They usually play there every Sunday afternoon."

Pernyataan:
The phrase "are playing" is an example of the Present Continuous Tense because the action is happening right now.`,
    options: ['Benar', 'Salah'],
    correctAnswer: 0, // Benar
    isHots: false,
    explanation: `Konsep Tata Bahasa Present Continuous Tense:

1. Rumus Present Continuous Tense:
   Subject + to be (is/am/are) + Verb-ing.
   - Subjek: "The children" (anak-anak = banyak orang / jamak).
   - To be: "are".
   - Verb-ing: "playing".
   Maka terbentuklah frasa: "are playing".

2. Keterangan Waktu & Peristiwa:
   Terdapat kata seru "Look!" (Lihatlah!) dan penanda waktu "right now" (saat ini juga). Ini menandakan bahwa kegiatan bermain sepak bola tersebut sedang berlangsung tepat di depan mata saat kalimat diucapkan.

3. Kesimpulan:
   Frasa "are playing" adalah contoh sahih dari Present Continuous Tense yang menyatakan tindakan yang sedang terjadi sekarang.

Kesimpulan: Pernyataan tersebut BENAR.`,
  },
  {
    id: 334,
    question: `Read the sentence below to answer questions 8 and 9.

"Look! The children are playing football in the yard right now. They usually play there every Sunday afternoon."

Pernyataan:
The word "usually" indicates that playing football in the yard is a temporary activity that only happens today.`,
    options: ['Benar', 'Salah'],
    correctAnswer: 1, // Salah
    isHots: false,
    explanation: `Konsep Adverb of Frequency (Kata Keterangan Frekuensi):

1. Arti dan Makna Kata "Usually":
   Kata "usually" artinya "biasanya". Kata ini tergolong Adverb of Frequency yang digunakan dalam Simple Present Tense untuk menyatakan kebiasaan rutin yang sering berulang-ulang dari waktu ke waktu.

2. Bukti pada Kalimat:
   "They usually play there every Sunday afternoon."
   (Mereka biasanya bermain di sana setiap hari Minggu sore).
   Kata "every Sunday" (setiap hari Minggu) menegaskan bahwa ini adalah rutinitas mingguan yang permanen/berulang, BUKAN kegiatan sementara yang hanya terjadi hari ini saja.

3. Penilaian Pernyataan:
   Pernyataan yang menyebutkan bahwa "usually" menandakan aktivitas sementara yang hanya terjadi hari ini ("temporary activity that only happens today") adalah salah kaprah.

Kesimpulan: Pernyataan tersebut SALAH.`,
  },

  // --- Konteks 6: Asking & Giving Direction (Soal 10) ---
  {
    id: 335,
    question: `Read the instruction below to answer question 10.

"Go straight along this street, then turn left at the T-junction. The library is on your right, next to the bank."

Pernyataan:
Based on the direction, the library is located right beside the bank.`,
    options: ['Benar', 'Salah'],
    correctAnswer: 0, // Benar
    isHots: false,
    explanation: `Konsep Kosakata Petunjuk Arah & Posisi (Preposition of Place):

1. Pahami Frasa Kunci pada Petunjuk:
   "The library is on your right, next to the bank."
   (Perpustakaan berada di sebelah kananmu, di samping/sebelah bank).

2. Memahami Arti Frasa "Next to":
   - "next to" artinya berdampingan, bersisian, atau tepat di sebelah.
   - Frasa "right beside" juga artinya tepat di samping atau berdampingan.
   - Jadi, "next to the bank" sama persis maknanya dengan "located right beside the bank".

Kesimpulan: Pernyataan tersebut BENAR.`,
  },

  // --- Konteks 7: Past Tenses & Recount Text (Soal 11 & 12) ---
  {
    id: 336,
    question: `Read the text below to answer questions 11 and 12.

"Last week, my family and I went to Parangtritis Beach. We arrived there at 4 PM. We took many pictures and enjoyed the beautiful sunset before going home."

Pernyataan:
The text above is a Recount text because it retells a series of past events experienced by the writer.`,
    options: ['Benar', 'Salah'],
    correctAnswer: 0, // Benar
    isHots: false,
    explanation: `Konsep Ciri Khas Teks Recount (Recount Text):

1. Definisi Teks Recount:
   Recount Text adalah jenis teks dalam bahasa Inggris yang berfungsi menceritakan kembali peristiwa, pengalaman pribadi, atau kegiatan yang terjadi di masa lampau secara berurutan/kronologis (retells past events).

2. Ciri Kebahasaan pada Teks:
   - Memakai penanda waktu lampau: "Last week" (minggu lalu).
   - Memakai kata kerja bentuk lampau (Verb 2): *went* (pergi), *arrived* (tiba), *took* (mengambil gambar), *enjoyed* (menikmati).
   - Menceritakan pengalaman nyata liburan penulis bersama keluarga ke Pantai Parangtritis.

Kesimpulan: Karena teks tersebut menceritakan kembali rangkaian peristiwa masa lalu yang dialami penulis, maka jenisnya tepat adalah Recount Text. Pernyataan tersebut BENAR.`,
  },
  {
    id: 337,
    question: `Read the text below to answer questions 11 and 12.

"Last week, my family and I went to Parangtritis Beach. We arrived there at 4 PM. We took many pictures and enjoyed the beautiful sunset before going home."

Pernyataan:
The family arrived at the beach in the morning.`,
    options: ['Benar', 'Salah'],
    correctAnswer: 1, // Salah
    isHots: false,
    explanation: `Konsep Membaca Format Jam AM dan PM:

1. Pahami Format AM dan PM:
   - **AM (Ante Meridiem):** Dimulai dari pukul 00.00 tengah malam sampai 11.59 siang (pagi hari).
   - **PM (Post Meridiem):** Dimulai dari pukul 12.00 siang sampai 23.59 malam (siang, sore, malam).
   - Jadi, "4 PM" artinya pukul 4 sore (16.00), sedangkan pagi hari adalah "4 AM" (jam 4 subuh).

2. Bukti dalam Teks:
   Teks menyatakan: "We arrived there at 4 PM" (Kami tiba di sana pukul 4 sore). Selain itu, mereka langsung menikmati pemandangan matahari terbenam (sunset) yang hanya terjadi di waktu sore hari.

3. Kesimpulan:
   Keluarga tersebut tiba di sore hari, bukan di pagi hari (morning). Maka pernyataan tersebut SALAH.`,
  },

  // --- Konteks 8: Narrative Text (Soal 13 & 14) ---
  {
    id: 338,
    question: `Read the text below to answer questions 13 and 14.

"Once upon a time, in a small village, lived an old woman named Mbok Srini. She wanted a child, so she prayed to a giant named Buto Ijo. He gave her a golden cucumber seed."

Pernyataan:
The main character, Mbok Srini, received a golden cucumber seed from a giant.`,
    options: ['Benar', 'Salah'],
    correctAnswer: 0, // Benar
    isHots: false,
    explanation: `Langkah Verifikasi Fakta Dongeng:

1. Lacak Kalimat di Dalam Teks:
   - Kalimat kedua: "...she prayed to a giant named Buto Ijo" (dia memohon kepada raksasa bernama Buto Ijo).
   - Kalimat ketiga: "He gave her a golden cucumber seed" (Raksasa itu memberinya sebutir biji mentimun emas).

2. Analisis Pernyataan:
   Pernyataan berbunyi bahwa tokoh utama, Mbok Srini, menerima biji timun emas dari raksasa. Hal ini selaras 100% dengan kalimat teks.

Kesimpulan: Pernyataan tersebut BENAR.`,
  },
  {
    id: 339,
    question: `Read the text below to answer questions 13 and 14.

"Once upon a time, in a small village, lived an old woman named Mbok Srini. She wanted a child, so she prayed to a giant named Buto Ijo. He gave her a golden cucumber seed."

Pernyataan:
Narrative texts, like the story of Mbok Srini above, dominantly use the Simple Present Tense to describe past events.`,
    options: ['Benar', 'Salah'],
    correctAnswer: 1, // Salah
    isHots: false,
    explanation: `Konsep Kaidah Tenses pada Teks Naratif (Narrative Text):

1. Aturan Dasar Teks Naratif:
   Teks naratif adalah cerita khayalan, legenda, dongeng, atau fabel yang terjadi di masa lalu. Oleh karena itu, kaidah kebahasaan utamanya WAJIB menggunakan **Simple Past Tense** (kata kerja bentuk lampau/Verb 2), BUKAN Simple Present Tense!

2. Bukti Kata Kerja pada Teks:
   Perhatikan semua kata kerja yang digunakan dalam teks di atas:
   - "lived" (tinggal - Verb 2)
   - "wanted" (menginginkan - Verb 2)
   - "prayed" (berdoa - Verb 2)
   - "gave" (memberikan - Verb 2)
   Semua kata kerja di atas adalah bentuk lampau (Past Tense).

3. Kesimpulan:
   Menyebutkan bahwa teks naratif secara dominan memakai Simple Present Tense adalah keliru. Seharusnya dominan memakai Simple Past Tense. Maka pernyataan tersebut SALAH.`,
  },

  // --- Konteks 9: Determination / Future Plans (Soal 15) ---
  {
    id: 340,
    question: `Pernyataan:
In the sentence "I am going to visit my grandmother in Bandung next weekend," the speaker uses "am going to" because the plan has already been made and prepared.`,
    options: ['Benar', 'Salah'],
    correctAnswer: 0, // Benar
    isHots: false,
    explanation: `Konsep Perbedaan "Will" vs "Be Going To":

1. Kapan Menggunakan "Will"?
   "Will" digunakan untuk keputusan spontan yang dibuat mendadak saat berbicara (misal: "The phone is ringing. I will answer it").

2. Kapan Menggunakan "Be Going To"?
   "Be going to" (am/is/are going to + Verb 1) digunakan untuk niat, rencana, atau tekad yang sudah dipikirkan, dirancang, dan dipersiapkan sebelum pembicaraan terjadi (prior plan / planned intention).

3. Analisis Kalimat:
   "I am going to visit my grandmother in Bandung next weekend."
   Rencana mengunjungi nenek di Bandung akhir pekan depan adalah rencana terstruktur yang sudah dipersiapkan sebelumnya. Maka penggunaan "am going to" di kalimat ini sangat tepat untuk rencana yang sudah dibuat.

Kesimpulan: Pernyataan tersebut BENAR.`,
  },

  // --- Konteks 10: Invitation & Greeting Card (Soal 16) ---
  {
    id: 341,
    question: `Read the text below to answer question 16.

"Dear Rian,
Please come to my 15th birthday party this Saturday at 4 PM at my house.
Best, Alika"

Pernyataan:
The text above is a greeting card sent to congratulate Rian on his graduation.`,
    options: ['Benar', 'Salah'],
    correctAnswer: 1, // Salah
    isHots: false,
    explanation: `Konsep Membedakan Invitation Card dengan Greeting Card:

1. Pahami Maksud Teks Alika:
   - "Please come to my 15th birthday party..." (Tolong datang ke pesta ulang tahunku yang ke-15...).
   - Ada keterangan waktu dan tempat: "this Saturday at 4 PM at my house".
   - Teks ini bertujuan mengundang seseorang untuk menghadiri acara. Jenis teks ini adalah **Kartu Undangan (Invitation Card / Letter)**.

2. Evaluasi Pernyataan:
   Pernyataan menyebutkan teks di atas adalah kartu ucapan selamat (*greeting card*) untuk memberi selamat atas kelulusan Rian (*congratulate on his graduation*). Ini salah besar, karena tidak ada ucapan kelulusan, melainkan ajakan datang ke pesta ulang tahun.

Kesimpulan: Pernyataan tersebut SALAH.`,
  },

  // --- Konteks 11: Short Functional Text (Notice) (Soal 17) ---
  {
    id: 342,
    question: `Read the text below to answer question 17.

"NOTICE: KEEP THE DOOR CLOSED AT ALL TIMES"

Pernyataan:
The notice means that people are allowed to leave the door open whenever they want.`,
    options: ['Benar', 'Salah'],
    correctAnswer: 1, // Salah
    isHots: false,
    explanation: `Konsep Memahami Teks Peringatan/Pemberitahuan (Notice):

1. Terjemahkan Teks Pemberitahuan:
   "NOTICE: KEEP THE DOOR CLOSED AT ALL TIMES"
   - "Keep the door closed" = Jagalah agar pintu tetap tertutup.
   - "At all times" = Setiap saat / sepanjang waktu / selalu.
   Artinya: Pintu tersebut harus senantiasa ditutup rapat setiap saat.

2. Evaluasi Pernyataan:
   Pernyataan menyatakan: orang-orang diperbolehkan membiarkan pintu terbuka kapan pun mereka mau (*allowed to leave the door open whenever they want*).
   Hal ini jelas bertentangan total dengan instruksi pada tanda peringatan.

Kesimpulan: Pernyataan tersebut SALAH.`,
  },

  // --- Konteks 12: Report Text (Soal 18 & 19) ---
  {
    id: 343,
    question: `Read the text below to answer questions 18 and 19.

"Platypuses are semi-aquatic mammals endemic to eastern Australia. They have a duck-like bill, a beaver-like tail, and otter-like feet."

Pernyataan:
Unlike descriptive texts, a Report text describes a subject in general/scientific terms rather than a specific individual pet.`,
    options: ['Benar', 'Salah'],
    correctAnswer: 0, // Benar
    isHots: false,
    explanation: `Konsep Perbedaan Mendasar Report Text vs Descriptive Text:

1. Memahami Teks Deskriptif (Descriptive Text):
   Descriptive Text mendeskripsikan satu objek khusus/spesifik yang bersifat individual. Contohnya: "My cat, Snowy" (kucing milik saya secara khusus, bulunya putih, suka tidur di pangkuan saya).

2. Memahami Teks Laporan (Report Text):
   Report Text mendeskripsikan suatu hal, fenomena alam, atau spesies hewan secara UMUM dan ILMIAH berdasarkan hasil observasi/penelitian sistematik. Contohnya teks di atas: "Platypuses are semi-aquatic mammals..." (membahas platipus sebagai keseluruhan spesies mamalia di dunia, bukan hewan peliharaan tertentu).

3. Evaluasi Kalimat Pernyataan:
   "Unlike descriptive texts, a Report text describes a subject in general/scientific terms rather than a specific individual pet."
   (Berbeda dengan teks deskriptif, teks Report mendeskripsikan subjek secara umum/ilmiah dan bukan hewan peliharaan individu yang spesifik).
   Pernyataan ini adalah definisi ilmiah yang tepat dan benar 100%.

Kesimpulan: Pernyataan tersebut BENAR.`,
  },
  {
    id: 344,
    question: `Read the text below to answer questions 18 and 19.

"Platypuses are semi-aquatic mammals endemic to eastern Australia. They have a duck-like bill, a beaver-like tail, and otter-like feet."

Pernyataan:
According to the text, platypuses have physical characteristics similar to ducks, beavers, and otters.`,
    options: ['Benar', 'Salah'],
    correctAnswer: 0, // Benar
    isHots: false,
    explanation: `Langkah Pembuktian Kemiripan Ciri Fisik:

1. Perhatikan Kata Akhiran "-like" dalam Teks:
   Dalam bahasa Inggris, penambahan akhiran "-like" pada kata benda berarti "mirip seperti" (*similar to*).
   - "duck-like bill" = paruh mirip bebek (*duck*).
   - "beaver-like tail" = ekor mirip berang-berang (*beaver*).
   - "otter-like feet" = kaki berselaput mirip berang-berang air (*otter*).

2. Evaluasi Pernyataan:
   Pernyataan menyebutkan platipus memiliki karakteristik fisik yang mirip dengan bebek, beaver, dan berang-berang air (*otters*). Ini sama persis dengan yang dipaparkan dalam teks.

Kesimpulan: Pernyataan tersebut BENAR.`,
  },

  // --- Konteks 13: Passive Voice (Soal 20) ---
  {
    id: 345,
    question: `Pernyataan:
The sentence "The classroom is cleaned by the students every morning" is a correct form of Passive Voice in the Simple Present Tense.`,
    options: ['Benar', 'Salah'],
    correctAnswer: 0, // Benar
    isHots: false,
    explanation: `Konsep Kalimat Pasif (Passive Voice) Simple Present:

1. Rumus Baku Kalimat Pasif Simple Present:
   Subject + to be (is / am / are) + Verb 3 (Past Participle) + by Object.

2. Bedah Kalimat pada Soal:
   - Subjek: "The classroom" (ruang kelas = kata benda tunggal).
   - To be untuk subjek tunggal: "is".
   - Verb 3 dari clean: "cleaned" (clean - cleaned - cleaned).
   - Pelaku tindakan: "by the students" (oleh para murid).
   - Keterangan waktu rutin: "every morning" (setiap pagi).

3. Makna Kalimat:
   "Ruang kelas dibersihkan oleh para murid setiap pagi."
   Struktur tata bahasa to be "is" bertemu dengan Verb 3 "cleaned" sudah memenuhi seluruh kaidah kalimat pasif Simple Present dengan tepat tanpa ada kesalahan satu pun.

Kesimpulan: Pernyataan tersebut BENAR.`,
  },

  // --- Konteks 14: Present Perfect Tense (Soal 21) ---
  {
    id: 346,
    question: `Pernyataan:
In the sentence "She has lived in Jakarta for five years," the use of Present Perfect Tense means she started living in Jakarta in the past and still lives there now.`,
    options: ['Benar', 'Salah'],
    correctAnswer: 0, // Benar
    isHots: false,
    explanation: `Konsep Fungsi Present Perfect Tense dengan Durasi "For":

1. Rumus Present Perfect Tense:
   Subject + have/has + Verb 3.
   "She has lived..." (has + lived).

2. Makna Penggunaan Kata "For" (Durasi Waktu):
   Dalam tata bahasa bahasa Inggris, ketika Present Perfect Tense digabungkan dengan keterangan waktu durasi (seperti *for five years* = selama lima tahun), fungsinya adalah:
   Menyatakan perbuatan atau kondisi yang **dimulai di masa lampau (5 tahun lalu), terus berlangsung sampai sekarang, dan saat ini dia masih tinggal di Jakarta**.

3. Perbandingan dengan Simple Past:
   - Jika kalimatnya: "She lived in Jakarta for five years", artinya dia sekarang sudah TIDAK tinggal di Jakarta lagi.
   - Karena memakai "has lived", artinya sampai hari ini dia MASIH berdomisili di Jakarta.

Kesimpulan: Pernyataan tersebut BENAR.`,
  },

  // --- Konteks 15: Conjunction (Soal 22) ---
  {
    id: 347,
    question: `Pernyataan:
In the sentence "He didn't go to school because he was sick," the conjunction "because" is used to show a contrast or opposition between two ideas.`,
    options: ['Benar', 'Salah'],
    correctAnswer: 1, // Salah
    isHots: false,
    explanation: `Konsep Fungsi Kata Penghubung (Conjunction):

1. Arti dan Fungsi Kata "Because":
   Kata "because" artinya "karena".
   Kata ini berfungsi untuk menyatakan **hubungan sebab-akibat (cause and effect / reason)**, bukan hubungan pertentangan!
   - Sebab: dia sakit (*he was sick*).
   - Akibat: dia tidak berangkat ke sekolah (*he didn't go to school*).

2. Apa Kata Hubung yang Menyatakan Pertentangan (Contrast)?
   Kata hubung yang menyatakan pertentangan antara dua gagasan adalah kata seperti: *although*, *even though*, *however*, atau *but* (contoh: "Although he was sick, he still went to school").

3. Kesimpulan:
   Pernyataan yang menyatakan bahwa "because" digunakan untuk menunjukkan pertentangan (*contrast or opposition*) adalah salah.

Kesimpulan: Pernyataan tersebut SALAH.`,
  },

  // --- Konteks 16: If Clause (Conditional Sentence) (Soal 23) ---
  {
    id: 348,
    question: `Pernyataan:
In the sentence "If it rains tomorrow, we will cancel the picnic," the If Clause represents a real possibility in the future (Conditional Type 1).`,
    options: ['Benar', 'Salah'],
    correctAnswer: 0, // Benar
    isHots: false,
    explanation: `Konsep Kalimat Pengandaian Tipe 1 (Conditional Sentence Type 1):

1. Rumus Baku Conditional Type 1:
   If + Simple Present (Subject + Verb 1/s/es), Subject + will + Verb 1.

2. Cek Struktur Kalimat pada Soal:
   - Klausa If: "If it rains tomorrow" (memakai Verb 1: *rains*).
   - Klausa Utama: "we will cancel the picnic" (memakai modal: *will cancel*).

3. Makna dan Fungsi Tipe 1:
   Conditional Type 1 digunakan untuk mengandaikan kejadian yang **sangat mungkin dan nyata bisa terjadi di masa depan (real possibility in the future)**. Jika besok hari hujan lebat, maka piknik benar-benar akan dibatalkan.

Kesimpulan: Pernyataan tersebut BENAR.`,
  },

  // --- Konteks 17: Continuous Tenses (Past Continuous) (Soal 24) ---
  {
    id: 349,
    question: `Pernyataan:
In the sentence "While my mother was cooking, I was studying English," both actions were happening at the same time in the past.`,
    options: ['Benar', 'Salah'],
    correctAnswer: 0, // Benar
    isHots: false,
    explanation: `Konsep Kejadian Bersamaan di Masa Lampau (Past Continuous with While):

1. Struktur Kalimat:
   - Aksi 1: "my mother was cooking" (Ibu sedang memasak).
   - Aksi 2: "I was studying English" (Saya sedang belajar bahasa Inggris).
   Kedua aksi menggunakan Past Continuous Tense (was + Verb-ing).

2. Fungsi Kata Penghubung "While":
   Kata "While" berarti "sementara / ketika". Ketika dua klausa Past Continuous dihubungkan dengan kata "While", hal ini menunjukkan bahwa **kedua aktivitas tersebut sedang berlangsung secara serentak / bersamaan pada waktu yang sama di masa lampau (parallel simultaneous actions)**.
   Sambil Ibu sibuk memasak di dapur, pada waktu yang bersamaan penulis sedang belajar di kamarnya.

Kesimpulan: Pernyataan tersebut BENAR.`,
  },

  // --- Konteks 18: Instruction / Order (Soal 25) ---
  {
    id: 350,
    question: `Pernyataan:
When a teacher says, "Open your book to page 45 and do exercise B!", the teacher is giving an instruction or order to the students.`,
    options: ['Benar', 'Salah'],
    correctAnswer: 0, // Benar
    isHots: false,
    explanation: `Konsep Kalimat Perintah / Instruksi (Imperative Sentence):

1. Ciri Kalimat Imperatif (Imperative Sentence):
   Kalimat yang diawali langsung dengan kata kerja bentuk pertama (Bare Infinitive / Verb 1) tanpa subjek di depannya, seperti:
   - "Open your book..." (Buka bukumu...)
   - "Do exercise B!" (Kerjakan latihan B!)
   Kalimat seperti ini secara kaidah tata bahasa bahasa Inggris disebut kalimat imperatif (*imperative*).

2. Fungsi Ungkapan:
   Fungsi utama kalimat imperatif dari seorang guru di dalam kelas adalah memberikan instruksi, arahan tugas, atau perintah resmi kepada para murid (*giving an instruction or order*).

Kesimpulan: Guru tersebut memang sedang memberikan instruksi atau perintah kepada siswa-siswanya. Maka pernyataan tersebut BENAR.`,
  },
];
