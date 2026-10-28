import { Question } from '../types';

/**
 * Bank Soal Try Out TKA SMP Resmi - Bahasa Inggris Paket 5 (eng_p5)
 * 25 Soal CBT Komprehensif Berdasarkan Kisi-Kisi AKM & Kurikulum Merdeka:
 * - Soal 1 - 10: Pilihan Ganda Standar (Single Choice)
 * - Soal 11 - 20: Pilihan Ganda Kompleks (Multi-Select AKM)
 * - Soal 21 - 25: Benar / Salah (True/False AKM)
 * Dilengkapi Pembahasan Langkah Demi Langkah (Step-by-Step) yang mendalam dan mudah dipahami siswa.
 */
export const TRYOUT_ENG_PAKET_5: Question[] = [
  // ==========================================
  // I. PILIHAN GANDA STANDAR (SOAL 1 - 10)
  // ==========================================

  // --- Stimulus 1: Descriptive Text (Soal 1 - 3) ---
  {
    id: 401,
    question: `Read the text below to answer the question!

Tanjung Puting National Park is an internationally famous ecotourism destination, which is located in the southwest of Central Kalimantan peninsula. Visitors from foreign countries come to this park because of its amazing nature. This is called a park, but it is not like any park that you have seen in your city. This is a real jungle, which is home to the most incredible animal in the world: orangutans. 
The park is home to about 6,000 orangutans. It also protects other fauna like proboscis monkeys and gibbons. To see orangutans, we should go to Camp Leakey, which is located in the heart of the park. Camp Leakey is a rehabilitation site for orphaned orangutans and a research center established in 1971.

What is the writer's primary purpose in writing the text?`,
    questionType: 'single',
    options: [
      'A. To persuade readers to protect endangered orangutans.',
      'B. To describe Tanjung Puting National Park as an ecotourism destination.',
      'C. To explain how to reach Camp Leakey in Central Kalimantan.',
      'D. To compare city parks with national parks in Indonesia.',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Langkah Menentukan Tujuan Utama Penulis (Primary Purpose):

1. Kenali Jenis Teks:
   Teks ini menggambarkan satu tempat khusus, yaitu Taman Nasional Tanjung Puting (Tanjung Puting National Park), mulai dari lokasinya di Kalimantan Tengah, keindahan alam hutannya yang masih asli, populasi orangutan yang dilindungi, hingga pusat penelitian Camp Leakey. Teks yang menggambarkan ciri-ciri suatu objek/tempat secara spesifik disebut Descriptive Text.

2. Pahami Tujuan Komunikatif Teks Deskripsi:
   Tujuan utama teks deskriptif adalah untuk mendeskripsikan atau menggambarkan suatu objek tertentu kepada pembaca ("To describe...").

3. Evaluasi Pilihan:
   - Pilihan A salah karena teks ini informatif deskriptif, bukan teks persuasif kampanye perlindungan satwa.
   - Pilihan B sangat tepat: "To describe Tanjung Puting National Park as an ecotourism destination" (Mendeskripsikan Taman Nasional Tanjung Puting sebagai destinasi ekowisata).
   - Pilihan C salah karena teks tidak memberikan instruksi rute perjalanan menuju Camp Leakey.
   - Pilihan D salah karena perbandingan dengan taman kota hanyalah kalimat kiasan pembanding di paragraf 1, bukan tujuan utama penulisan teks.

Jawaban yang Tepat: B.`,
  },
  {
    id: 402,
    question: `Read the text about Tanjung Puting National Park.
Which of the following sentences uses the Simple Present Tense correctly based on the text?`,
    questionType: 'single',
    options: [
      'A. Tanjung Puting National Park located in Central Kalimantan.',
      'B. Foreign visitors came to the park to see city parks. ',
      'C. The park protects various fauna, including proboscis monkeys.',
      'D. Camp Leakey is locate in the southwest of the peninsula.',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Langkah Analisis Kaidah Simple Present Tense:

1. Rumus Dasar Simple Present Tense (Verbal):
   - Jika Subjek Tunggal (He / She / It / The park) -> Kata kerja dasar ditambah akhiran -s atau -es (Verb 1 + s/es).
   - Contoh: "The park protects..." (Taman tersebut melindungi...).

2. Uji Masing-Masing Kalimat:
   - Pilihan A: "Tanjung Puting National Park located..." -> SALAH secara gramatikal karena kata "located" adalah kata sifat/participle yang kehilangan kata kerja bantu/to be. Seharusnya: "Tanjung Puting National Park IS located...".
   - Pilihan B: "Foreign visitors came..." -> SALAH karena "came" adalah bentuk lampau (Verb 2 - Past Tense), bukan Present Tense.
   - Pilihan C: "The park protects various fauna, including proboscis monkeys." -> BENAR. Subjek tunggal ("The park") dipadukan secara tepat dengan kata kerja Verb 1 + s ("protects"). Maknanya juga sesuai dengan fakta pada teks.
   - Pilihan D: "Camp Leakey is locate..." -> SALAH karena setelah to be "is" tidak boleh diikuti kata kerja bentuk dasar "locate". Bentuk pasif yang benar adalah "is located".

Jawaban yang Tepat: C.`,
  },
  {
    id: 403,
    question: `Based on the text about Tanjung Puting National Park, what can be inferred about Camp Leakey?`,
    questionType: 'single',
    options: [
      'A. It is a modern city park with artificial facilities.',
      'B. It is the main location within the jungle to observe orangutans.',
      'C. It is located outside the Tanjung Puting National Park area.',
      'D. It is easily accessible without entering the real jungle.',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Langkah Menarik Kesimpulan Tersirat (Inference):

1. Baca Kalimat yang Membahas Camp Leakey pada Teks:
   "To see orangutans, we should go to Camp Leakey, which is located in the heart of the park. Camp Leakey is a rehabilitation site for orphaned orangutans and a research center established in 1971."
   (Untuk melihat orangutan, kita harus pergi ke Camp Leakey, yang terletak di jantung/tengah-tengah taman nasional. Camp Leakey adalah lokasi rehabilitasi bagi bayi orangutan yatim piatu dan pusat penelitian yang didirikan pada tahun 1971).

2. Tarik Kesimpulan Logis:
   Karena teks menyatakan "To see orangutans, we should go to Camp Leakey", ini berarti jika pengunjung ingin mengamati dan melihat orangutan secara langsung, Camp Leakey adalah lokasi sentral/utama di dalam hutan untuk melakukan observasi tersebut (*the main location within the jungle to observe orangutans*).

3. Mengapa Pilihan Lain Salah:
   - Pilihan A dan D salah karena tempat ini berada di pedalaman hutan rimba asli (*in the heart of the park*), bukan taman kota buatan yang modern dan mudah diakses tanpa masuk hutan.
   - Pilihan C salah karena Camp Leakey berada di dalam kawasan taman nasional (*in the heart of the park*), bukan di luar (*outside*).

Jawaban yang Tepat: B.`,
  },

  // --- Stimulus 2: Procedure Text (Soal 4 - 6) ---
  {
    id: 404,
    question: `Read the text below to answer the question!

Creating a secure password is essential to protect your personal data online. Follow these simple steps:
1. First, think of a memorable phrase or sentence, such as "I love playing football on Sundays."
2. Next, take the first letter of each word: "Ilpfos".
3. Then, replace some letters with numbers or symbols. For example, change 'I' to '1', and 's' to '$'. It becomes "1lpfo$".
4. After that, add at least one uppercase letter and one lowercase letter if you haven't already.
5. Finally, make sure it is at least 8 characters long. Do not use common words, sequential numbers, or your birthdate.

Why does the author suggest using the first letter of each word from a phrase?`,
    questionType: 'single',
    options: [
      'A. To make the password shorter and easier to type.',
      'B. To create a random-looking but easily remembered combination.',
      'C. To avoid using any uppercase letters or special symbols.',
      'D. To ensure the password is exactly eight characters long.',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Langkah Menemukan Alasan Logis Penulis:

1. Perhatikan Konsep Membuat Kata Sandi yang Aman:
   Kata sandi yang aman adalah kata sandi yang sulit ditebak oleh orang lain atau program peretas, namun mudah diingat oleh pemilik akun.

2. Hubungkan Kalimat 1 dan 2 pada Langkah Teks:
   - Langkah 1 menyarankan memikirkan kalimat yang berkesan bagi diri kita (*memorable phrase*).
   - Langkah 2 menyarankan mengambil huruf depan dari setiap kata (*take the first letter of each word*).
   Hasilnya: Bagi orang asing, deretan huruf tersebut terlihat seperti kombinasi acak tanpa arti yang mustahil ditebak. Namun bagi si pemilik akun, susunan itu sangat mudah diingat karena memiliki jembatan keledai dari kalimat yang disukai.

3. Kesimpulan:
   Tujuan saran tersebut adalah membuat kombinasi yang tampak acak bagi orang luar namun mudah diingat oleh si pembuat (*To create a random-looking but easily remembered combination*).

Jawaban yang Tepat: B.`,
  },
  {
    id: 405,
    question: `"Finally, make sure it is at least 8 characters long."
The word "Finally" in the sentence is used to...`,
    questionType: 'single',
    options: [
      'A. show the contrast between two steps.',
      'B. indicate the cause and effect of the process.',
      'C. signal the last step in a sequence of instructions.',
      'D. introduce an alternative option for the user.',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Konsep Kata Penghubung Urutan (Sequence Adverbs / Conjunctions):

1. Pahami Urutan Penanda Waktu pada Teks Prosedur:
   - Langkah 1: First (Pertama)
   - Langkah 2: Next (Selanjutnya)
   - Langkah 3: Then (Kemudian)
   - Langkah 4: After that (Setelah itu)
   - Langkah 5: Finally (Akhirnya / Terakhir)

2. Fungsi Kata "Finally":
   Kata "Finally" selalu diletakkan pada langkah paling akhir dalam suatu panduan atau prosedur untuk memberi sinyal penutup bahwa rangkaian instruksi telah selesai (*signal the last step in a sequence of instructions*).

3. Mengapa Pilihan Lain Salah:
   - Pilihan A salah karena kata pertentangan adalah *however, but, although*.
   - Pilihan B salah karena kata sebab-akibat adalah *because, therefore, as a result*.
   - Pilihan D salah karena opsi alternatif menggunakan kata *or, alternatively*.

Jawaban yang Tepat: C.`,
  },
  {
    id: 406,
    question: `What should you avoid when creating a secure password according to the text?`,
    questionType: 'single',
    options: [
      'A. Using a combination of letters, numbers, and symbols.',
      'B. Using your birthdate or common sequential numbers.',
      'C. Making the password longer than eight characters.',
      'D. Starting the password with an uppercase letter.',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Langkah Mencari Larangan pada Teks:

1. Lacak Kata Larangan ("avoid / do not"):
   Perhatikan kalimat terakhir pada langkah ke-5:
   "Do not use common words, sequential numbers, or your birthdate."
   (Jangan gunakan kata-kata pasaran/umum, angka yang berurutan seperti 12345, atau tanggal lahirmu).

2. Hubungkan dengan Pertanyaan:
   Kata "avoid" bermakna "menghindari". Hal yang dianjurkan untuk dihindari saat membuat kata sandi adalah menggunakan tanggal lahir atau angka berurutan (*Using your birthdate or common sequential numbers*).

3. Mengapa Pilihan Lain Salah:
   - Pilihan A, C, dan D justru merupakan hal yang sangat dianjurkan agar kata sandi kuat dan aman (panjang minimal 8 karakter, ada kombinasi huruf besar-kecil, angka, dan simbol).

Jawaban yang Tepat: B.`,
  },

  // --- Stimulus 3: Formal Invitation (Soal 7 - 9) ---
  {
    id: 407,
    question: `Read the invitation below to answer the question!

You are cordially invited to attend
The 15th Graduation Ceremony of SMP Harapan Bangsa
Day/Date : Saturday, June 15th, 2024
Time : 08:00 AM – 11:30 AM
Venue : Grand Ballroom, Merdeka Hotel, Jl. Sudirman No. 45
Dress Code: Formal attire (Batik or Suit)
*Please RSVP by June 5th, 2024 to Mrs. Linda (0812-3456-7890)*

Based on the invitation, what is the main purpose of the event?`,
    questionType: 'single',
    options: [
      'A. To celebrate the anniversary of SMP Harapan Bangsa.',
      'B. To hold a formal meeting at the Grand Ballroom.',
      'C. To celebrate the graduation of SMP Harapan Bangsa students.',
      'D. To invite Mrs. Linda to a formal batik exhibition.',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Langkah Menentukan Tujuan Acara (Purpose of the Event):

1. Baca Judul Acara pada Undangan:
   "The 15th Graduation Ceremony of SMP Harapan Bangsa"
   (Upacara Wisuda / Kelulusan Ke-15 SMP Harapan Bangsa).

2. Pahami Inti Acara:
   Kata kunci utama adalah "Graduation Ceremony" (Upacara Kelulusan). Jadi, acara ini diselenggarakan khusus untuk merayakan kelulusan siswa-siswi SMP Harapan Bangsa (*To celebrate the graduation of SMP Harapan Bangsa students*).

3. Mengapa Pilihan Lain Salah:
   - Pilihan A salah karena ini bukan perayaan ulang tahun sekolah (*anniversary*).
   - Pilihan B salah karena ini bukan rapat dinas formal.
   - Pilihan D salah karena Ibu Linda adalah narahubung panitia (*contact person RSVP*), bukan orang yang diundang ke pameran batik.

Jawaban yang Tepat: C.`,
  },
  {
    id: 408,
    question: `Based on the invitation, if a guest wants to attend the ceremony, when is the latest date they should confirm their attendance?`,
    questionType: 'single',
    options: [
      'A. On June 15th, 2024.',
      'B. Before or on June 5th, 2024.',
      'C. Exactly at 08:00 AM on Saturday.',
      'D. Ten days after the graduation ceremony.',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Langkah Menemukan Batas Akhir Konfirmasi Kehadiran:

1. Perhatikan Baris Terakhir Undangan:
   "*Please RSVP by June 5th, 2024 to Mrs. Linda...*"

2. Pahami Arti Frasa Waktu "by + tanggal":
   - RSVP (*Répondez s'il vous plaît*) berarti konfirmasi kehadiran.
   - Kata depan "by" dalam penunjuk waktu berarti "paling lambat pada atau sebelum" (*before or on*).
   Jadi, "by June 5th, 2024" berarti tamu undangan harus mengonfirmasi kehadirannya paling lambat pada tanggal 5 Juni 2024 atau sebelum tanggal tersebut (*Before or on June 5th, 2024*).

3. Mengapa Pilihan Lain Salah:
   - Tanggal 15 Juni 2024 adalah hari pelaksanaan wisuda, sehingga sudah terlambat jika baru konfirmasi pada hari H.

Jawaban yang Tepat: B.`,
  },
  {
    id: 409,
    question: `Which of the following is a polite suggestion for a guest attending this event?`,
    questionType: 'single',
    options: [
      'A. You should wear casual t-shirts and sandals to feel comfortable.',
      'B. You must contact Mrs. Linda after June 15th to get your seat.',
      'C. You had better wear formal batik or a suit to respect the dress code.',
      'D. You don\'t need to RSVP if you are coming with your classmates.',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Langkah Memberikan Saran yang Santun dan Sesuai Konteks:

1. Cek Aturan Busana pada Undangan:
   "Dress Code: Formal attire (Batik or Suit)"
   (Aturan Berpakaian: Busana formal, yaitu Batik atau Setelan Jas).

2. Evaluasi Bentuk Saran (*Suggestion*):
   - Pola "You had better + Verb 1" (Sebaiknya Anda...) digunakan untuk memberikan saran yang bijak agar tidak mengalami masalah atau rasa canggung saat menghadiri acara.
   - Pilihan C: "You had better wear formal batik or a suit to respect the dress code" (Sebaiknya Anda mengenakan batik formal atau setelan jas untuk menghormati aturan berpakaian) adalah saran yang sangat santun, tepat, dan relevan dengan isi undangan.

3. Mengapa Pilihan Lain Salah:
   - Pilihan A menyarankan kaos santai dan sandal, yang melanggar aturan formal.
   - Pilihan B salah waktu (setelah 15 Juni acara sudah selesai).
   - Pilihan D menyarankan tidak perlu RSVP, padahal konfirmasi wajib dilakukan untuk pengaturan tempat duduk.

Jawaban yang Tepat: C.`,
  },

  // --- Stimulus 4: Asking & Giving Directions (Soal 10) ---
  {
    id: 410,
    question: `Read the dialogue below to answer the question!

Rian: Excuse me, I am looking for the National Library. Could you tell me how to get there?
Santi: Sure! From this intersection, you should walk straight down Merdeka Street for about 200 meters. When you see a traditional market on your left, turn right onto Diponegoro Street. The library is just opposite the city park, next to the post office.
Rian: Is it far? Should I take public transport?
Santi: No, it's quite close. I suggest you walk because the traffic is very congested right now. But make sure you use the pedestrian path.
Rian: Thank you so much for your help!
Santi: You're welcome.

Where is the National Library located?`,
    questionType: 'single',
    options: [
      'A. Opposite the traditional market, next to the city park.',
      'B. On Merdeka Street, right next to the traditional market.',
      'C. On Diponegoro Street, opposite the city park and next to the post office.',
      'D. At the intersection of Merdeka Street and Diponegoro Street.',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Langkah Menentukan Lokasi Gedung Berdasarkan Petunjuk Arah:

1. Ikuti Panduan Arah yang Disampaikan Santi:
   - Dari perempatan, jalan lurus di Jalan Merdeka sejauh 200 meter.
   - Ketika melihat pasar tradisional di sebelah kiri, belok kanan ke Jalan Diponegoro ("turn right onto Diponegoro Street").
   - Kalimat kunci penentu lokasi perpustakaan:
     "The library is just opposite the city park, next to the post office."
     (Perpustakaan berada tepat di seberang taman kota, di samping kantor pos).

2. Rangkum Posisi Perpustakaan Nasional:
   - Terletak di Jalan Diponegoro.
   - Berseberangan dengan taman kota (*opposite the city park*).
   - Bersebelahan dengan kantor pos (*next to the post office*).

3. Cocokkan dengan Pilihan Jawaban:
   Pilihan C menyatakan: "On Diponegoro Street, opposite the city park and next to the post office". Ini sesuai 100% dengan teks percakapan.

Jawaban yang Tepat: C.`,
  },

  // ==========================================
  // II. PILIHAN GANDA KOMPLEKS (SOAL 11 - 20)
  // ==========================================

  // --- Stimulus 4 Lanjutan: Dialogue (Soal 11 & 12) ---
  {
    id: 411,
    question: `Based on the dialogue between Rian and Santi, which of the following suggestions did Santi give to Rian? (Pilihlah DUA jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'A. Rian should take public transport to save time.',
      'B. Rian should walk because of the heavy traffic.',
      'C. Rian must cross the traditional market to find the library.',
      'D. Rian should use the pedestrian path while walking.',
    ],
    correctAnswers: [1, 3], // B and D
    isHots: false,
    explanation: `Langkah Menemukan Saran-Saran Santi (Suggestions):

1. Lacak Kata "Suggest / Should / Make sure":
   Perhatikan ucapan Santi di akhir percakapan:
   "I suggest you walk because the traffic is very congested right now. But make sure you use the pedestrian path."
   (Saya sarankan kamu berjalan kaki saja karena lalu lintas sedang sangat macet saat ini. Namun pastikan kamu menggunakan jalur pejalan kaki/trotoar).

2. Verifikasi Opsi Jawaban:
   - Opsi B: "Rian should walk because of the heavy traffic" (Rian sebaiknya berjalan kaki karena kemacetan parah). Kata "very congested" bersinonim dengan "heavy traffic". Opsi ini BENAR.
   - Opsi D: "Rian should use the pedestrian path while walking" (Rian sebaiknya menggunakan trotoar/jalur pejalan kaki saat berjalan kaki). Ini sesuai dengan instruksi "make sure you use the pedestrian path". Opsi ini BENAR.
   - Opsi A salah karena Santi justru menyarankan tidak perlu naik kendaraan umum.
   - Opsi C salah karena pasar hanya patokan belok kanan, bukan harus menyeberangi pasar.

Jawaban yang Tepat: B dan D.`,
  },
  {
    id: 412,
    question: `Based on the dialogue, which statements about the directions are correct? (Pilihlah DUA jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'A. The traditional market is located on the left side of Merdeka Street.',
      'B. Rian needs to turn left onto Diponegoro Street after the market.',
      'C. The post office is located next to the National Library.',
      'D. The National Library is 200 meters before the traditional market.',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: false,
    explanation: `Langkah Pengujian Fakta Arah dan Letak Bangunan:

1. Uji Pernyataan A:
   Santi mengatakan: "When you see a traditional market on your left..." (Ketika kamu melihat pasar tradisional di sebelah kirimu...).
   Berarti pasar tradisional memang berada di sisi kiri Jalan Merdeka. Pernyataan A BENAR.

2. Uji Pernyataan B:
   Santi mengatakan: "...turn right onto Diponegoro Street" (belok KANAN ke Jalan Diponegoro).
   Pernyataan B salah karena menyebutkan belok kiri (*turn left*).

3. Uji Pernyataan C:
   Santi mengatakan: "The library is just opposite the city park, next to the post office" (Perpustakaan di sebelah kantor pos).
   Berarti kantor pos memang berdampingan dengan perpustakaan. Pernyataan C BENAR.

4. Uji Pernyataan D:
   Jarak 200 meter adalah panjang jalan dari perempatan menuju pasar, bukan jarak perpustakaan sebelum pasar. Pernyataan D SALAH.

Jawaban yang Tepat: A dan C.`,
  },

  // --- Stimulus 5: Recount Text (Soal 13 - 15) ---
  {
    id: 413,
    question: `Read the text below to answer the question!

Last Wednesday, my class visited the Science and Technology Museum. We gathered at school at 7:00 AM and boarded the bus. During the trip, we sang songs and shared snacks.
When we arrived, a tour guide welcomed us and explained the museum rules. First, we visited the Space Exploration gallery. We saw replicas of rockets and even touched a real meteorite. After that, we went to the Physics Lab where we conducted simple electricity experiments. It was amazing to see how static electricity could make our hair stand up!
At noon, we had lunch in the museum garden. Before we went home, we bought some souvenirs. Although we were exhausted, we felt extremely happy because we learned many scientific concepts in a fun way.

Which activities did the students do during their visit to the museum? (Pilihlah DUA jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'A. They touched a real meteorite in the Space Exploration gallery.',
      'B. They built a small replica of a rocket to bring home.',
      'C. They conducted electricity experiments in the Physics Lab.',
      'D. They had lunch inside the Space Exploration gallery.',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: false,
    explanation: `Langkah Melacak Aktivitas Kunjungan Siswa:

1. Lacak Aktivitas di Paragraf 2:
   - "First, we visited the Space Exploration gallery. We saw replicas of rockets and even touched a real meteorite."
     (Mereka melihat replika roket dan bahkan menyentuh meteorit asli).
     -> Opsi A: "They touched a real meteorite in the Space Exploration gallery" (BENAR).
     -> Opsi B salah karena mereka hanya melihat replika roket (*saw replicas*), bukan membuatnya untuk dibawa pulang (*built a replica*).

   - "After that, we went to the Physics Lab where we conducted simple electricity experiments."
     (Setelah itu, kami pergi ke Lab Fisika di mana kami melakukan eksperimen listrik sederhana).
     -> Opsi C: "They conducted electricity experiments in the Physics Lab" (BENAR).

2. Lacak Aktivitas Makan Siang di Paragraf 3:
   - "At noon, we had lunch in the museum garden."
     Mereka makan siang di taman museum (*museum garden*), bukan di dalam galeri luar angkasa. Maka Opsi D salah.

Jawaban yang Tepat: A dan C.`,
  },
  {
    id: 414,
    question: `Which of the following verbs from the text are in the Past Tense form? (Pilihlah DUA jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'A. Gathered',
      'B. Explained',
      'C. Conduct',
      'D. Learn',
    ],
    correctAnswers: [0, 1], // A and B
    isHots: false,
    explanation: `Konsep Bentuk Kata Kerja Lampau (Past Tense / Verb 2):

1. Definisi Regular Past Tense (Kata Kerja Beraturan Bentuk Lampau):
   Kata kerja bentuk lampau beraturan dibentuk dengan menambahkan akhiran -ed atau -d pada kata kerja bentuk dasar (Verb 1).

2. Analisis Opsi Pilihan:
   - Gathered: Bentuk Past Tense (Verb 2) dari kata kerja dasar "gather" (berkumpul). Berakhiran -ed. (BENAR - Pilihan A).
   - Explained: Bentuk Past Tense (Verb 2) dari kata kerja dasar "explain" (menjelaskan). Berakhiran -ed. (BENAR - Pilihan B).
   - Conduct: Ini adalah bentuk kata kerja dasar (Verb 1 / Bare Infinitive). Bentuk lampaunya adalah "conducted". (Salah).
   - Learn: Ini adalah bentuk kata kerja dasar (Verb 1 / Bare Infinitive). Bentuk lampaunya adalah "learned" atau "learnt". (Salah).

Jawaban yang Tepat: A dan B.`,
  },
  {
    id: 415,
    question: `Based on the text, why did the students feel happy despite being exhausted? (Pilihlah DUA jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'A. They received free souvenirs from the museum guide.',
      'B. They learned various scientific concepts in an enjoyable way.',
      'C. They spent the whole day singing songs on the bus.',
      'D. They had an exciting and interactive learning experience.',
    ],
    correctAnswers: [1, 3], // B and D
    isHots: false,
    explanation: `Langkah Menemukan Alasan Rasa Bahagia Siswa:

1. Baca Kalimat Terakhir Teks:
   "Although we were exhausted, we felt extremely happy because we learned many scientific concepts in a fun way."
   (Meskipun kami sangat lelah, kami merasa amat sangat bahagia karena kami mempelajari banyak konsep sains dengan cara yang menyenangkan).

2. Analisis Makna dan Parafrasa yang Setara:
   - "learned many scientific concepts in a fun way" semakna persis dengan opsi B: "They learned various scientific concepts in an enjoyable way" (Mereka belajar konsep sains dengan cara yang menyenangkan). Opsi B BENAR.
   - Pengalaman mencoba listrik statis membuat rambut berdiri dan menyentuh batu meteorit asli adalah pengalaman belajar yang seru dan interaktif. Ini selaras dengan opsi D: "They had an exciting and interactive learning experience". Opsi D BENAR.

3. Mengapa Opsi Lain Salah:
   - Opsi A salah karena suvenir dibeli oleh siswa sendiri (*we bought some souvenirs*), bukan dibagikan gratis.
   - Opsi C salah karena bernyanyi di bus hanya dilakukan selama perjalanan berangkat, bukan sepanjang hari.

Jawaban yang Tepat: B dan D.`,
  },

  // --- Stimulus 6: Narrative Text (Soal 16 - 18) ---
  {
    id: 416,
    question: `Read the story below to answer the question!

One hot day, an ant was searching for some water. After walking around for some time, she came to a spring. To reach the spring, she had to climb up a blade of grass. While making her way up, she slipped and fell into the water.
She could have drowned if a dove up a nearby tree had not seen her. Seeing that the ant was in trouble, the dove quickly plucked off a leaf and dropped it into the water near the struggling ant. The ant moved towards the leaf and climbed up there. Soon, it carried her safely to dry ground.
Just at that time, a hunter nearby was throwing out his net towards the dove, hoping to trap it. Guessing what he was about to do, the ant quickly bit him on the heel. Feeling the pain, the hunter dropped his net. The dove was quick to fly away to safety.

Why did the dove drop a leaf into the water? (Pilihlah DUA jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'A. To help the ant climb out of the water and save her from drowning.',
      'B. To show the hunter where the ant was hiding.',
      'C. Because the dove wanted to play with the ant.',
      'D. Because the dove saw that the ant was in danger.',
    ],
    correctAnswers: [0, 3], // A and D
    isHots: false,
    explanation: `Langkah Menemukan Alasan Burung Merpati Menolong Semut:

1. Perhatikan Paragraf 2 Kalimat 1 dan 2:
   "Seeing that the ant was in trouble, the dove quickly plucked off a leaf and dropped it into the water near the struggling ant."
   (Melihat bahwa semut sedang dalam kesulitan/bahaya, burung merpati dengan cepat memetik sehelai daun dan menjatuhkannya ke air di dekat semut yang sedang meronta).
   -> Alasan 1: Merpati melihat semut sedang dalam bahaya/tenggelam (*the dove saw that the ant was in danger*). Opsi D BENAR.

2. Perhatikan Kelanjutan Kalimat:
   "The ant moved towards the leaf and climbed up there. Soon, it carried her safely to dry ground."
   (Semut menuju daun dan memanjat ke atasnya, lalu terbawa ke daratan kering dengan selamat).
   -> Alasan 2: Merpati ingin membantu semut keluar dari air dan menyelamatkannya agar tidak tenggelam (*To help the ant climb out of the water and save her from drowning*). Opsi A BENAR.

3. Opsi B dan C sama sekali tidak relevan dengan cerita fabel ini.

Jawaban yang Tepat: A dan D.`,
  },
  {
    id: 417,
    question: `What moral lessons can we learn from the story? (Pilihlah DUA jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'A. One good turn deserves another (good deeds are rewarded).',
      'B. We should always be careful when climbing grass near water.',
      'C. Helping others in need will bring safety and help back to us.',
      'D. Do not trust strangers who offer help in difficult times.',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: false,
    explanation: `Konsep Pesan Moral Fabel (Moral Values):

1. Pahami Alur Perbuatan Saling Menolong Tokoh:
   - Awalnya burung merpati menolong semut yang hampir mati tenggelam.
   - Tak lama kemudian, semut membalas kebaikan itu dengan menggigit tumit pemburu agar burung merpati tidak tertangkap jaring dan selamat.

2. Rumuskan Pesan Moral yang Berlaku Secara Universal:
   - Peribahasa terkenal: "One good turn deserves another" (Satu perbuatan baik pantas dibalas dengan kebaikan serupa / kebaikan akan berbuah kebaikan). Pilihan A BENAR.
   - Kebaikan yang kita berikan kepada orang lain yang membutuhkan kelak akan mendatangkan pertolongan kembali kepada diri kita di saat kita sendiri membutuhkannya (*Helping others in need will bring safety and help back to us*). Pilihan C BENAR.

3. Opsi D bertentangan total dengan semangat saling percaya dan tolong-menolong dalam cerita.

Jawaban yang Tepat: A dan C.`,
  },
  {
    id: 418,
    question: `Which of the following actions were taken by the ant to save the dove? (Pilihlah DUA jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'A. The ant bit the hunter\'s heel to distract him.',
      'B. The ant warned the dove by shouting loudly.',
      'C. The ant caused the hunter to drop his net.',
      'D. The ant hid the dove\'s nest under the leaves.',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: false,
    explanation: `Langkah Memverifikasi Aksi Semut dalam Menyelamatkan Merpati:

1. Baca Paragraf 3:
   "...the ant quickly bit him on the heel. Feeling the pain, the hunter dropped his net. The dove was quick to fly away to safety."
   (Semut segera menggigit tumit pemburu. Merasakan rasa sakit gigitan itu, pemburu menjatuhkan jaringnya. Merpati pun bergegas terbang ke tempat yang aman).

2. Analisis Pilihan:
   - Aksi 1: Semut menggigit tumit si pemburu (*The ant bit the hunter's heel*). Pilihan A BENAR.
   - Aksi 2: Gigitan semut membuat pemburu menjatuhkan jaringnya (*The ant caused the hunter to drop his net*), sehingga burung merpati tidak jadi terperangkap. Pilihan C BENAR.
   - Semut tidak berteriak (B) dan tidak menyembunyikan sarang burung (D).

Jawaban yang Tepat: A dan C.`,
  },

  // --- Stimulus 7: Report Text (Soal 19 & 20) ---
  {
    id: 419,
    question: `Read the text below to answer the question!

A tsunami is a series of giant ocean waves caused by an underwater earthquake, landslide, or volcanic eruption. Most tsunamis are generated by tectonic earthquakes along plate boundaries.
When an earthquake occurs beneath the ocean, the water above the deformed area is displaced from its equilibrium position. Waves are formed as the displaced water mass, which acts under the influence of gravity, attempts to regain its equilibrium.
In the deep ocean, tsunami waves can travel at speeds of over 800 kilometers per hour. However, their height is often less than one meter, making them almost undetectable. As the waves approach the shallow water of the coast, their speed decreases, but their height increases dramatically, reaching up to 30 meters or more, causing massive destruction to coastal areas.

Based on the text, what causes a tsunami to happen? (Pilihlah DUA jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'A. Strong wind blowing across the surface of the deep ocean.',
      'B. Underwater earthquakes along tectonic plate boundaries.',
      'C. Volcanic eruptions or landslides occurring under the ocean.',
      'D. Extreme high tides during a full moon phase.',
    ],
    correctAnswers: [1, 2], // B and C
    isHots: false,
    explanation: `Langkah Menemukan Faktor Pemicu Tsunami pada Teks:

1. Perhatikan Paragraf 1:
   "A tsunami is a series of giant ocean waves caused by an underwater earthquake, landslide, or volcanic eruption. Most tsunamis are generated by tectonic earthquakes along plate boundaries."

2. Ekstraksi Penyebab Ilmiah Tsunami:
   - Gempa bumi di dasar laut di sepanjang batas lempeng tektonik (*Underwater earthquakes along tectonic plate boundaries*). Pilihan B BENAR.
   - Letusan gunung api atau tanah longsor di bawah laut (*Volcanic eruptions or landslides occurring under the ocean*). Pilihan C BENAR.

3. Mengapa Pilihan A dan D Salah:
   - Gelombang ombak biasa dipicu oleh angin permukaan laut (A), bukan tsunami.
   - Pasang surut air laut dipicu oleh gravitasi bulan (D), bukan tsunami.

Jawaban yang Tepat: B dan C.`,
  },
  {
    id: 420,
    question: `Which of the following sentences from the text are written in the Passive Voice? (Pilihlah DUA jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'A. "Most tsunamis are generated by tectonic earthquakes..."',
      'B. "...the water above the deformed area is displaced..."',
      'C. "In the deep ocean, tsunami waves can travel at speeds..."',
      'D. "...their height increases dramatically, reaching up to 30 meters..."',
    ],
    correctAnswers: [0, 1], // A and B
    isHots: false,
    explanation: `Konsep Kalimat Pasif (Passive Voice):

1. Rumus Utama Kalimat Pasif:
   Subject + to be (is / am / are / was / were / been) + Verb 3 (Past Participle).

2. Uji Masing-Masing Kalimat:
   - Kalimat A: "Most tsunamis ARE GENERATED by tectonic earthquakes..."
     Pola: to be "are" + Verb 3 "generated". Artinya: "Sebagian besar tsunami DIBANGKITKAN oleh gempa tektonik". Ini kalimat pasif (BENAR - Pilihan A).
   - Kalimat B: "...the water above the deformed area IS DISPLACED..."
     Pola: to be "is" + Verb 3 "displaced". Artinya: "air di atas area yang berubah bentuk DIPINDAHKAN dari posisi seimbangnya". Ini kalimat pasif (BENAR - Pilihan B).
   - Kalimat C: "...tsunami waves can travel..."
     Pola: Modal "can" + kata kerja aktif dasar "travel" (dapat merambat/berjalan). Ini kalimat aktif.
   - Kalimat D: "...their height increases dramatically..."
     Pola: Subjek + kata kerja aktif Present "increases" (meningkat). Ini kalimat aktif.

Jawaban yang Tepat: A dan B.`,
  },

  // ==========================================
  // III. BENAR / SALAH (SOAL 21 - 25)
  // ==========================================

  // --- Stimulus 7 Lanjutan: Report Text (Soal 21) ---
  {
    id: 421,
    question: `Pernyataan:
Tsunami waves are highly visible and extremely high when they are still in the deep ocean.`,
    questionType: 'single',
    options: ['Benar', 'Salah'],
    correctAnswer: 1, // Salah
    isHots: false,
    explanation: `Langkah Memverifikasi Fakta Sains Gelombang Tsunami:

1. Baca Paragraf 3 Kalimat 1 dan 2 pada Teks:
   "In the deep ocean, tsunami waves can travel at speeds of over 800 kilometers per hour. However, their height is often less than one meter, making them almost undetectable."
   (Di laut dalam, gelombang tsunami dapat melaju dengan kecepatan lebih dari 800 km/jam. Namun demikian, tingginya sering kali kurang dari satu meter, sehingga hampir tidak terdeteksi oleh mata/kapal).

2. Analisis Pernyataan:
   Pernyataan soal mengklaim: "Tsunami waves are highly visible and extremely high when they are still in the deep ocean" (Gelombang tsunami sangat terlihat jelas dan sangat tinggi ketika masih berada di laut dalam).
   Klaim ini bertentangan 100% dengan teks, karena di laut lepas tinggi gelombangnya kurang dari 1 meter dan hampir mustahil terdeteksi (*almost undetectable*). Gelombang baru memuncak tinggi (hingga 30 meter) saat mendekati pesisir pantai yang dangkal.

Kesimpulan: Pernyataan tersebut bernilai SALAH.`,
  },

  // --- Stimulus 8: Announcement (Soal 22 - 24) ---
  {
    id: 422,
    question: `Read the announcement below to answer the question!

ANNOUNCEMENT
To all students of SMP Nusantara,
Our school library will be closed for renovation from October 12th to October 18th, 2024.
If you need to borrow books for your assignments, you must borrow them before October 11th.
Please note that all borrowed books must be returned on time. If you return books late, you will be fined.
Thank you for your cooperation.
Library Committee

Pernyataan:
If a student wants to borrow books for their assignments, they can still do so on October 14th, 2024.`,
    questionType: 'single',
    options: ['Benar', 'Salah'],
    correctAnswer: 1, // Salah
    isHots: false,
    explanation: `Langkah Pembuktian Jadwal Peminjaman Buku Perpustakaan:

1. Cek Periode Penutupan Perpustakaan:
   "Our school library will be closed for renovation from October 12th to October 18th, 2024."
   (Perpustakaan sekolah akan ditutup untuk renovasi dari tanggal 12 Oktober sampai 18 Oktober 2024).

2. Cek Aturan Peminjaman:
   "If you need to borrow books... you must borrow them before October 11th."
   (Jika kamu perlu meminjam buku... kamu wajib meminjamnya sebelum tanggal 11 Oktober).

3. Evaluasi Tanggal 14 Oktober 2024:
   Tanggal 14 Oktober berada tepat di tengah-tengah masa penutupan renovasi perpustakaan (12 - 18 Oktober). Oleh karena itu, perpustakaan tutup total dan siswa tidak bisa meminjam buku pada tanggal tersebut.

Kesimpulan: Pernyataan tersebut bernilai SALAH.`,
  },
  {
    id: 423,
    question: `Pernyataan:
Students will face a financial penalty (fine) if they do not return the borrowed books on time.`,
    questionType: 'single',
    options: ['Benar', 'Salah'],
    correctAnswer: 0, // Benar
    isHots: false,
    explanation: `Langkah Memahami Istilah Denda (Fine):

1. Baca Kalimat Ketiga pada Pengumuman:
   "If you return books late, you will be fined."
   (Jika kamu terlambat mengembalikan buku, kamu akan didenda).

2. Arti Kata "Fined / Penalty":
   Kata "fined" berasal dari kata benda "fine", yang bermakna denda uang sebagai hukuman atas pelanggaran waktu (*financial penalty*).

3. Kesimpulan:
   Siswa yang tidak mengembalikan buku tepat waktu memang akan dikenakan sanksi denda finansial.

Kesimpulan: Pernyataan tersebut bernilai BENAR.`,
  },
  {
    id: 424,
    question: `Pernyataan:
The school library is undergoing renovation for exactly one week (7 days).`,
    questionType: 'single',
    options: ['Benar', 'Salah'],
    correctAnswer: 0, // Benar
    isHots: false,
    explanation: `Langkah Menghitung Durasi Waktu Renovasi:

1. Perhatikan Rentang Tanggal Renovasi:
   "...from October 12th to October 18th, 2024."

2. Hitung Jumlah Hari (Termasuk Tanggal Mulai dan Selesai):
   - Hari ke-1: 12 Oktober
   - Hari ke-2: 13 Oktober
   - Hari ke-3: 14 Oktober
   - Hari ke-4: 15 Oktober
   - Hari ke-5: 16 Oktober
   - Hari ke-6: 17 Oktober
   - Hari ke-7: 18 Oktober
   Total durasi renovasi adalah tepat 7 hari. Dalam kalender waktu, 7 hari setara dengan tepat satu pekan/minggu (*exactly one week*).

Kesimpulan: Pernyataan tersebut bernilai BENAR.`,
  },

  // --- Stimulus 9: Greeting Card (Soal 25) ---
  {
    id: 425,
    question: `Read the greeting card below to answer the question!

Dear Amanda,
Congratulations on winning the National English Debate Championship!
Your hard work, determination, and sleepless nights have finally paid off. 
We are incredibly proud of your achievement. Keep shining and never stop chasing your dreams!
With love,
Your Classmates of Class 9B

Pernyataan:
The classmates sent the card to Amanda because they want to express their pride and congratulate her on winning a national debate competition.`,
    questionType: 'single',
    options: ['Benar', 'Salah'],
    correctAnswer: 0, // Benar
    isHots: false,
    explanation: `Langkah Memahami Maksud Kartu Ucapan (Congratulation Card):

1. Analisis Kalimat Pembuka dan Penutup Kartu:
   - "Congratulations on winning the National English Debate Championship!" (Selamat atas kemenangan dalam Kejuaraan Debat Bahasa Inggris Tingkat Nasional!).
   - "We are incredibly proud of your achievement." (Kami sangat luar biasa bangga atas pencapaian prestasimu).
   - Pengirim: "Your Classmates of Class 9B" (Teman-teman sekelasmu di kelas 9B).

2. Evaluasi Pernyataan:
   Pernyataan menyatakan bahwa teman sekelas mengirim kartu ucapan tersebut kepada Amanda untuk menyampaikan rasa bangga mereka dan memberi ucapan selamat atas kemenangannya dalam lomba debat nasional (*express their pride and congratulate her on winning a national debate competition*). Pernyataan ini sangat tepat dan sesuai 100% dengan tujuan teks.

Kesimpulan: Pernyataan tersebut bernilai BENAR.`,
  },
];
