import { Question } from '../types';

/**
 * Bank Soal Try Out TKA SMP Resmi - Bahasa Inggris Paket 7 (eng_p7)
 * 25 Soal CBT Komprehensif Berdasarkan Kisi-Kisi AKM & Kurikulum Merdeka:
 * - Stimulus 1 (Soal 1 - 3): Report / Exposition - The "Doomscrolling" Phenomenon
 * - Stimulus 2 (Soal 4 - 6): Procedure Text - How to Make Viral Strawberry Tanghulu (Glass Fruit)
 * - Stimulus 3 (Soal 7 - 9): Social Media Chat - Concert Besties (Transactional Dialogue & Directions)
 * - Stimulus 4 (Soal 10 - 12): Personal Recount - My First Time at Indo-Play Con!
 * - Stimulus 5 (Soal 13 - 15): Invitation Notice - Luna's Y2K Bash! (Passive Voice & Event Analysis)
 * - Stimulus 6 (Soal 16 - 18): Narrative / Speculative Fiction - The Story of Aria: The AI Who Wanted to Feel
 * - Stimulus 7 (Soal 19 - 21): Information Report - The Rise of VTubers
 * - Stimulus 8 (Soal 22 - 25): Infographic / Digital Safety Notice - Stay Safe Online: Avoid Phishing Scams!
 * 
 * Dilengkapi Pembahasan Edukatif Step-by-Step yang mendalam, ramah pemula, dan mudah dipahami siswa tingkat SD/SMP.
 */

export const TRYOUT_ENG_PAKET_7: Question[] = [
  // ==========================================
  // STIMULUS 1: The "Doomscrolling" Phenomenon (Soal 1 - 3)
  // ==========================================

  // --- Soal 1: Pilihan Ganda Standar ---
  {
    id: 451,
    question: `Read the text below carefully to answer the following questions!

The "Doomscrolling" Phenomenon
Have you ever found yourself scrolling through TikTok or Instagram Reels at 2 AM, unable to stop even though the news and videos are depressing? This habit is called "doomscrolling." Gen Z is particularly prone to this because social media algorithms are designed to keep users engaged by feeding them highly personalized content. 
Psychologists suggest that while staying informed is good, constant exposure to negative content triggers the brain's "fight or flight" response, leading to high anxiety. To combat this, some creators are making "hope-scrolling" content—videos dedicated to positive news, calming aesthetics, and mental health reminders. If we do not manage our screen time, our attention spans will continue to shrink, and our sleep quality will deteriorate.

Based on the text, what is the primary reason why Gen Z is highly susceptible to doomscrolling?`,
    image: '/images/tryout/eng_p7_q1.PNG',
    imageCaption: 'Text Stimulus 1: The "Doomscrolling" Phenomenon',
    questionType: 'single',
    options: [
      'A. They prefer negative news over positive and calming aesthetics.',
      'B. Social media algorithms are specifically tailored to keep them hooked.',
      'C. They need to stay awake until 2 AM to finish their school assignments.',
      'D. Psychologists encourage them to trigger their "fight or flight" response.',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Panduan Memahami Soal & Menemukan Jawaban:

1. Arti Pertanyaan:
   "Based on the text, what is the primary reason why Gen Z is highly susceptible to doomscrolling?"
   (Berdasarkan teks, apa alasan utama mengapa Generasi Z sangat rentan terhadap kebiasaan doomscrolling?)

2. Cari Kata Kunci di Dalam Teks (Direct Quote):
   Perhatikan kalimat ketiga pada paragraf pertama:
   "Gen Z is particularly prone to this because social media algorithms are designed to keep users engaged by feeding them highly personalized content."
   - "prone to" = rentan/mudah terpengaruh (semakna dengan "susceptible to").
   - "keep users engaged" = membuat pengguna terus terpaku/ketagihan (semakna dengan "keep them hooked").
   - "personalized content" = konten yang disesuaikan secara khusus (semakna dengan "specifically tailored").

3. Mengapa Pilihan Lain Salah?
   - Pilihan A salah: Gen Z tidak sengaja lebih menyukai berita buruk; mereka terjebak oleh algoritma yang terus menyodorkan video tanpa henti.
   - Pilihan C salah: Teks menyebutkan jam 2 pagi sebagai contoh waktu bermain HP, bukan karena terpaksa mengerjakan tugas sekolah.
   - Pilihan D salah: Para psikolog justru memperingatkan bahaya stres dan cemas akibat respon "fight or flight", bukan menganjurkannya.

Jawaban yang Paling Tepat: B.`,
  },

  // --- Soal 2: Pilihan Ganda Standar ---
  {
    id: 452,
    question: `"If we do not manage our screen time, our attention spans will continue to shrink..."

What can we evaluate from the use of the conditional sentence above?`,
    questionType: 'single',
    options: [
      'A. It expresses a scientific fact that is always true in any circumstance.',
      'B. It shows a past regret about social media addiction that cannot be changed.',
      'C. It warns about a highly probable future consequence if the habit is not controlled.',
      'D. It gives a polite permission to the readers to scroll through social media at night.',
    ],
    correctAnswer: 2, // C
    isHots: true,
    explanation: `Bedah Tata Bahasa: Conditional Sentence Type 1 (Kalimat Pengandaian Tipe 1):

1. Bentuk Kalimat pada Teks:
   - Klausa 'If': "If we do not manage our screen time" (Simple Present Tense).
   - Klausa Utama: "our attention spans will continue to shrink" (Simple Future: will + Verb 1).

2. Fungsi Komunikatif Conditional Type 1:
   Pola ini digunakan untuk membicarakan situasi nyata di masa kini atau masa depan yang memiliki konsekuensi sangat logis dan berpeluang besar terjadi (*highly probable future consequence*).
   Dalam konteks ini, penulis memberikan sebuah PERINGATAN (*warning*) kepada pembaca: jika kita tidak membatasi waktu menatap layar gadget (*screen time*), maka rentang konsentrasi kita akan menyusut dan kualitas tidur akan memburuk di masa depan.

3. Mengapa Pilihan Lain Salah?
   - Pilihan A salah: Hukum sains mutlak (seperti air mendidih pada suhu 100°C) menggunakan Conditional Type 0 (If + Present, Present), bukan Tipe 1 dengan 'will'.
   - Pilihan B salah: Penyesalan masa lalu yang tidak dapat diubah menggunakan Conditional Type 3 (If + Past Perfect, would have + V3).
   - Pilihan D salah: Kalimat ini bukan memberikan izin (*permission*), melainkan peringatan bahaya.

Jawaban yang Paling Tepat: C.`,
  },

  // --- Soal 3: Pilihan Ganda Standar ---
  {
    id: 453,
    question: `Which of the following conjunctions best fits the blank to show a contrast in this sentence?

"Many teens are aware that doomscrolling causes anxiety; ________, they still find it difficult to close their apps."`,
    questionType: 'single',
    options: [
      'A. therefore',
      'B. furthermore',
      'C. however',
      'D. because',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Konsep Kata Hubung Pertentangan (Conjunction of Contrast):

1. Analisis Hubungan Makna Antar-Kalimat:
   - Bagian 1: "Many teens are aware that doomscrolling causes anxiety" (Banyak remaja SADAR bahwa doomscrolling menyebabkan kecemasan - ini adalah kesadaran positif).
   - Bagian 2: "they still find it difficult to close their apps" (mereka TETAP merasa sulit menutup aplikasinya - ini adalah tindakan yang bertolak belakang).

2. Memilih Kata Hubung yang Tepat:
   Karena kalimat kedua bertolak belakang/berlawanan dengan kesadaran pada kalimat pertama, kita membutuhkan kata hubung pertentangan (*contrast*), yaitu "however" (namun / akan tetapi).
   Secara tanda baca bahasa Inggris, kata "however" di tengah dua kalimat independen diawali titik koma (;) dan diakhiri tanda koma (,):
   "; however, ..."

3. Arti Pilihan Lain:
   - "therefore" = oleh karena itu (menunjukkan hubungan sebab-akibat/hasil).
   - "furthermore" = selain itu / lagipula (menunjukkan penambahan informasi searah).
   - "because" = karena (menunjukkan alasan langsung dan tidak diawali tanda titik koma seperti kata keterangan transisi).

Jawaban yang Paling Tepat: C.`,
  },

  // ==========================================
  // STIMULUS 2: Strawberry Tanghulu (Soal 4 - 6)
  // ==========================================

  // --- Soal 4: Pilihan Ganda Standar ---
  {
    id: 454,
    question: `Read the procedure text below carefully to answer the following questions!

How to Make Viral Strawberry Tanghulu (Glass Fruit)
Tanghulu is a traditional Chinese snack that has recently gone viral on TikTok. It consists of skewered fruits covered in a hard, crunchy sugar shell. Here is how you can make it at home:
Ingredients:
- 10 fresh strawberries (washed and completely dried)
- 2 cups of granulated sugar
- 1 cup of water
- Ice water bath (ice cubes and water in a bowl)
Steps:
1. Skewer the dried strawberries onto wooden skewers (about 2-3 per stick).
2. In a saucepan, mix the sugar and water. Do not stir the mixture once it starts heating, as stirring will cause the sugar to crystallize and ruin the glassy texture.
3. Heat the mixture over medium-high heat until it reaches 150°C (300°F). If you don't have a thermometer, wait until the syrup turns a light golden color and bubbles slow down.
4. Carefully dip and roll each strawberry skewer into the hot syrup, ensuring a thin, even coat.
5. Immediately plunge the coated strawberries into the ice water bath for 5 seconds to harden the sugar instantly.
6. Serve immediately and enjoy the crunch!

Why is stirring the sugar and water mixture during the heating process strictly prohibited?`,
    image: '/images/tryout/eng_p7_q4.PNG',
    imageCaption: 'Text Stimulus 2: How to Make Viral Strawberry Tanghulu',
    questionType: 'single',
    options: [
      'A. It will make the strawberries taste sour instead of sweet.',
      'B. It prevents the sugar from melting and heating up properly.',
      'C. It causes crystallization, which ruins the desired glassy texture.',
      'D. It makes the syrup turn dark brown and burn too quickly.',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Langkah Menemukan Alasan pada Teks Prosedur:

1. Perhatikan Kata Kunci Soal:
   "Why is stirring... strictly prohibited?" (Mengapa mengaduk larutan gula saat dipanaskan sangat dilarang?)

2. Temukan Langkah Terkait di Teks:
   Lihat Langkah Nomor 2:
   "In a saucepan, mix the sugar and water. Do not stir the mixture once it starts heating, as stirring will cause the sugar to crystallize and ruin the glassy texture."
   (Di dalam panci, campur gula dan air. Jangan mengaduk campuran saat mulai memanas, karena MENGADUK AKAN MENYEBABKAN GULA MENKRISTAL DAN MERUSAK TEKSTUR KACA).

3. Penjelasan Sains Sederhana:
   Saat gula meleleh, mengaduk dengan sendok akan memasukkan udara dan memicu molekul gula membentuk butiran kristal kasar kembali (seperti pasir basah), sehingga lapisan luar buah tidak akan bening mengkilap seperti kaca (*glassy*).

Jawaban yang Paling Tepat: C.`,
  },

  // --- Soal 5: Pilihan Ganda Standar ---
  {
    id: 455,
    question: `What would most likely happen if you skipped Step 5 (plunging the strawberries into the ice water bath)?`,
    questionType: 'single',
    options: [
      'A. The sugar coating would remain sticky and soft rather than becoming crunchy.',
      'B. The strawberries would lose their red color and turn completely white.',
      'C. The wooden skewers would catch fire due to the extreme heat of the syrup.',
      'D. The sugar shell would become too thick and impossible to bite.',
    ],
    correctAnswer: 0, // A
    isHots: true,
    explanation: `Analisis Hubungan Sebab-Akibat Prosedural (Cause and Effect):

1. Baca Langkah 5 dengan Teliti:
   "Immediately plunge the coated strawberries into the ice water bath for 5 seconds to harden the sugar instantly."
   (Segera celupkan stroberi yang sudah berbalut sirup ke dalam air es selama 5 detik untuk MENGERASKAN GULA SECARA INSTAN).

2. Apa yang Terjadi Jika Langkah 5 Ini Dilewati (*skipped*)?
   - Fungsi utama air es adalah memberikan kejutan suhu dingin (*thermal shock*) seketika pada lelehan sirup gula bersuhu 150°C.
   - Dengan dingin mendadak, cairan gula membeku menjadi lapisan permen kaca keras yang renyah (*crunchy*).
   - Jika TIDAK dimasukkan ke air es, gula panas akan mendingin sangat lambat pada suhu ruangan. Air dari pori-pori buah stroberi akan keluar dan diserap oleh sirup, sehingga lapisannya tetap lembek, liat, dan lengket (*sticky and soft*), bukannya renyah garing.

Jawaban yang Paling Tepat: A.`,
  },

  // --- Soal 6: Pilihan Ganda Standar ---
  {
    id: 456,
    question: `Which of the following sentences contains a correct instruction using negative imperative form based on the text?`,
    questionType: 'single',
    options: [
      'A. You must stir the sugar mixture constantly.',
      'B. Do not use wet strawberries for the skewers.',
      'C. Please heat the ice water bath before dipping.',
      'D. You should not eat the Tanghulu immediately.',
    ],
    correctAnswer: 1, // B
    isHots: true,
    explanation: `Konsep Kalimat Perintah Negatif (Negative Imperative):

1. Rumus Bentuk Negative Imperative:
   "Do not / Don't + Kata Kerja Bentuk Dasar (Verb 1)"
   Ciri khas kalimat imperatif: Tidak menggunakan kata ganti subjek seperti "You", melainkan langsung diawali kata kerja larangan "Do not".

2. Cek Kesesuaian Fakta Resep pada Teks:
   - Pada bahan (*Ingredients*): "10 fresh strawberries (washed and completely dried)".
     Stroberi harus benar-benar kering! Jika basah oleh air, sirup gula panas tidak akan bisa menempel dan akan tergelincir lepas.
   - Maka kalimat instruksi: "Do not use wet strawberries for the skewers" (Jangan gunakan stroberi yang basah untuk tusukan) adalah kalimat negative imperative yang 100% tepat secara tata bahasa dan instruksi resep.

3. Mengapa Pilihan Lain Salah?
   - Pilihan A salah: Menggunakan "You must" (bukan imperatif murni) dan isinya salah karena mengaduk justru dilarang.
   - Pilihan C salah: Ini imperatif positif, dan air es tidak boleh dipanaskan.
   - Pilihan D salah: Menggunakan "You should not" (saran), dan tanghulu justru disarankan segera dinikmati (*Serve immediately*).

Jawaban yang Paling Tepat: B.`,
  },

  // ==========================================
  // STIMULUS 3: Concert Besties (Soal 7 - 9)
  // ==========================================

  // --- Soal 7: Pilihan Ganda Standar ---
  {
    id: 457,
    question: `Read the social media chat below carefully to answer the following questions!

Chat Room: "Concert Besties"
Rara: Guys! The ticket sales for the K-Pop concert start tomorrow at 2 PM! We need a strategy.
Dika: I suggest we use different devices. I will be using my laptop, and you guys should use your phones. 
Seli: Good idea. But wait, where is the venue again? Is it at the Grand Arena?
Rara: Yes! If you are coming from the train station, just walk straight past the main intersection, turn left on Hallyu Street, and the Grand Arena is right next to the digital library. You can't miss it.
Dika: Perfect. By the way, have you guys paid the booking fee to Seli? She bought our pre-sale vouchers yesterday.
Seli: Rara has sent her payment, but Dika, you haven't transferred yours yet! 
Dika: Oh, sorry! I'll transfer it right now.

Based on Rara's direction, how can Seli reach the Grand Arena from the train station?`,
    image: '/images/tryout/eng_p7_q7.PNG',
    imageCaption: 'Text Stimulus 3: Chat Room "Concert Besties"',
    questionType: 'single',
    options: [
      'A. Walk straight, turn right at the intersection, and find it behind the train station.',
      'B. Walk straight past the intersection, turn left on Hallyu Street, and look next to the digital library.',
      'C. Turn left immediately at the station, walk past the library, and find it at the intersection.',
      'D. Take a train to Hallyu Street, turn left, and enter the digital library.',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Panduan Membaca Petunjuk Arah (Giving Directions):

1. Cari Kalimat Rara Mengenai Petunjuk Arah:
   "If you are coming from the train station, just walk straight past the main intersection, turn left on Hallyu Street, and the Grand Arena is right next to the digital library."

2. Urutan Langkah Navigasi:
   - Langkah 1: Jalan lurus melewati perempatan utama (*walk straight past the main intersection*).
   - Langkah 2: Belok kiri ke Jalan Hallyu (*turn left on Hallyu Street*).
   - Langkah 3: Grand Arena berada tepat di sebelah perpustakaan digital (*right next to the digital library*).

3. Pencocokan dengan Opsi:
   Opsi B merangkum ketiga langkah ini secara tepat dan akurat tanpa ada arah yang terbalik.

Jawaban yang Paling Tepat: B.`,
  },

  // --- Soal 8: Pilihan Ganda Standar ---
  {
    id: 458,
    question: `What suggestion does Dika offer to increase their chances of getting the concert tickets?`,
    questionType: 'single',
    options: [
      'A. Buying the tickets directly at the Grand Arena ticket box.',
      'B. Using multiple different devices simultaneously during the sale.',
      'C. Waiting until the price drops after the ticket sales start.',
      'D. Asking Rara to pay for all the tickets first.',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Menemukan Saran pada Teks Dialog:

1. Perhatikan Kata Kunci "suggestion":
   Dika berkata:
   "I suggest we use different devices. I will be using my laptop, and you guys should use your phones."
   (Saya sarankan kita menggunakan perangkat yang berbeda-beda. Saya akan memakai laptop saya, dan kalian gunakan ponsel kalian).

2. Makna Saran Dika:
   Dalam perang tiket konser (*ticket war*), membuka sistem pemesanan dari beberapa perangkat secara bersamaan (laptop dan beberapa HP) akan memperbesar peluang salah satu dari mereka berhasil masuk antrean server tercepat.
   Ini sama persis dengan opsi B: "Using multiple different devices simultaneously during the sale."

Jawaban yang Paling Tepat: B.`,
  },

  // --- Soal 9: Pilihan Ganda Standar ---
  {
    id: 459,
    question: `Which of the following statements is true regarding the perfect tense used in the chat?`,
    questionType: 'single',
    options: [
      'A. Seli has already received payments from both Rara and Dika.',
      'B. Dika has already transferred his payment before the chat started.',
      'C. Rara has already sent her payment to Seli.',
      'D. Seli has not bought the pre-sale vouchers yet.',
    ],
    correctAnswer: 2, // C
    isHots: false,
    explanation: `Konsep Present Perfect Tense (has / have + Verb 3):

1. Analisis Kalimat Seli pada Obrolan:
   Seli mengatakan:
   "Rara HAS SENT her payment, but Dika, you HAVEN'T TRANSFERRED yours yet!"
   - "Rara has sent her payment" = Rara SUDAH mengirimkan uang pembayarannya kepada Seli (tindakan pembayaran sudah tuntas dilakukan).
   - "Dika, you haven't transferred yours yet" = Dika BELUM mentransfer bagiannya.

2. Evaluasi Setiap Pilihan:
   - Pilihan A salah: Seli baru menerima dari Rara saja, belum dari Dika.
   - Pilihan B salah: Dika belum mentransfer ("I'll transfer it right now").
   - Pilihan C sangat tepat: Rara sudah mengirimkan pembayarannya kepada Seli ("Rara has already sent her payment to Seli").
   - Pilihan D salah: Seli sudah membeli voucher pra-penjualannya kemarin ("She bought our pre-sale vouchers yesterday").

Jawaban yang Paling Tepat: C.`,
  },

  // ==========================================
  // STIMULUS 4: Indo-Play Con! (Soal 10 - 12)
  // ==========================================

  // --- Soal 10: Pilihan Ganda Standar ---
  {
    id: 460,
    question: `Read the recount text below carefully to answer the following questions!

My First Time at Indo-Play Con!
Last weekend, I finally attended Indo-Play Con, the biggest gaming convention in the country. As an avid gamer, I had been saving my pocket money for months just to buy the entry ticket. 
When I arrived at 9 AM, the queue was already incredibly long, stretching down the block. While I was waiting, I met some online friends from my Discord server. We had been playing multiplayer games together for two years, but we had never met in person until that day! 
Once inside, the atmosphere was electric. There were massive screens displaying live esports tournaments, booths showing off upcoming indie games, and amazing cosplayers. I even tried a cutting-edge VR game. It felt so realistic that I almost fell over while dodging a virtual obstacle! Although my legs were extremely sore by the end of the day, it was the best experience of my year.

What is the writer's primary attitude towards their experience at Indo-Play Con?`,
    image: '/images/tryout/eng_p7_q10.PNG',
    imageCaption: 'Text Stimulus 4: My First Time at Indo-Play Con!',
    questionType: 'single',
    options: [
      'A. Disappointed by the long queues and crowded venue.',
      'B. Regretful about spending months of pocket money.',
      'C. Enthusiastic and deeply satisfied despite the physical exhaustion.',
      'D. Indifferent because they preferred playing games at home.',
    ],
    correctAnswer: 2, // C
    isHots: true,
    explanation: `Menganalisis Sikap & Nada Penulis (Author's Tone & Attitude):

1. Perhatikan Kata-Kata Penutup yang Dipilih Penulis:
   "Although my legs were extremely sore by the end of the day, it was the best experience of my year."
   (Meskipun kaki saya terasa sangat pegal di penghujung hari, itu adalah pengalaman terbaik dalam setahun bagi saya).

2. Kata Kunci Sikap Positif:
   - "atmosphere was electric" = suasana sangat meriah dan luar biasa bersemangat.
   - "amazing cosplayers" = pemain kostum yang mengagumkan.
   - "best experience of my year" = pengalaman paling memuaskan.

3. Kesimpulan:
   Penulis merasa sangat antusias, senang, dan sangat puas (*deeply satisfied*) meskipun secara fisik kakinya sangat lelah/pegal (*physical exhaustion*).

Jawaban yang Paling Tepat: C.`,
  },

  // --- Soal 11: Pilihan Ganda Kompleks ---
  {
    id: 461,
    question: `Read the recount text about Indo-Play Con again.

Based on the text, which of the following statements are CORRECT? (Select TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. The writer met their Discord friends in person for the first time at the convention.',
      'B. The writer was invited to be one of the professional cosplayers at the event.',
      'C. The writer did not have to pay for the ticket because they won a giveaway.',
      'D. The writer experienced a virtual reality game that felt highly realistic.',
    ],
    correctAnswers: [0, 3], // A and D
    isHots: false,
    explanation: `Langkah Verifikasi Fakta Pernyataan Berdasarkan Teks:

1. Periksa Pilihan A:
   "The writer met their Discord friends in person for the first time at the convention."
   - Bukti Teks: "...I met some online friends from my Discord server. We had been playing multiplayer games together for two years, but we had never met in person until that day!"
   - Analisis: Mereka sudah kenal daring 2 tahun tapi baru pertama kali tatap muka langsung di konvensi itu. (BENAR - Centang A).

2. Periksa Pilihan B:
   "The writer was invited to be one of the professional cosplayers at the event."
   - Bukti Teks: Teks hanya menulis ada cosplayer luar biasa di sana ("and amazing cosplayers"). Penulis adalah pengunjung biasa, bukan cosplayer yang diundang. (SALAH).

3. Periksa Pilihan C:
   "The writer did not have to pay for the ticket because they won a giveaway."
   - Bukti Teks: Penulis menabung uang saku berbulan-bulan untuk membeli tiket masuk ("saving my pocket money for months just to buy the entry ticket"). (SALAH).

4. Periksa Pilihan D:
   "The writer experienced a virtual reality game that felt highly realistic."
   - Bukti Teks: "I even tried a cutting-edge VR game. It felt so realistic that I almost fell over..." (BENAR - Centang D).

Jawaban yang Tepat: A dan D.`,
  },

  // --- Soal 12: Pilihan Ganda Kompleks ---
  {
    id: 462,
    question: `Which past actions did the writer do BEFORE they entered the convention building? (Select TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. They saved their pocket money for months.',
      'B. They played a cutting-edge VR game.',
      'C. They stood in a very long queue outside.',
      'D. They watched a live esports tournament on a massive screen.',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: true,
    explanation: `Membedakan Kronologi Waktu (Peristiwa Sebelum Masuk vs Sesudah Masuk):

1. Cari Penanda Waktu Masuk Gedung pada Teks:
   Paragraf 3 diawali dengan frasa: "Once inside, the atmosphere was electric..." (Begitu berada di dalam gedung...).
   Artinya, semua peristiwa di Paragraf 3 terjadi SETELAH penulis masuk ke dalam gedung.

2. Periksa Peristiwa SEBELUM Masuk Gedung (Before Entering):
   - Opsi A: Menabung uang saku selama berbulan-bulan (*saving pocket money for months*).
     -> Terjadi sebelum hari acara dimulai (BENAR - Centang A).
   - Opsi C: Berdiri mengantre di barisan panjang di luar gedung (*queue was already incredibly long... While I was waiting*).
     -> Terjadi saat tiba jam 9 pagi sebelum pintu gedung dibuka (BENAR - Centang C).

3. Periksa Peristiwa yang Terjadi DI DALAM Gedung:
   - Opsi B (Bermain game VR) dan Opsi D (Menonton turnamen esports) baru dilakukan setelah masuk ke dalam aula pameran (*Once inside*).

Jawaban yang Tepat: A dan C.`,
  },

  // ==========================================
  // STIMULUS 5: Luna's Y2K Bash (Soal 13 - 15)
  // ==========================================

  // --- Soal 13: Pilihan Ganda Kompleks ---
  {
    id: 463,
    question: `Read the invitation below carefully to answer the following questions!

YOU'RE INVITED TO LUNA'S Y2K BASH!
Hey besties!
Can you believe I'm turning 15? We are throwing it back to the early 2000s! 
Dust off your low-rise jeans, cargo pants, and butterfly clips because this party is going to be totally nostalgic.
Date: Saturday, November 18th
Time: 6:00 PM - 9:30 PM
Location: Retro Arcade Cafe, 45 Neon Boulevard
Dress Code: Y2K Aesthetic (Think Britney Spears, early Justin Timberlake, or matrix sunglasses!)
*Note: Food and drinks will be provided. The arcade machines are set to free-play all night! Please RSVP by November 12th via DM to @Luna_Retro.*

Which of the following passive voice sentences correctly describe the details of Luna's party? (Select TWO correct answers)`,
    image: '/images/tryout/eng_p7_q13.PNG',
    imageCaption: 'Text Stimulus 5: Luna\'s Y2K Bash!',
    questionType: 'complex',
    options: [
      'A. The party is hosted by Luna\'s school teachers.',
      'B. Retro fashion from the early 2000s is expected to be worn by the guests.',
      'C. Free-play mode is set on the arcade machines for the night.',
      'D. The RSVP must be sent after November 18th.',
    ],
    correctAnswers: [1, 2], // B and C
    isHots: true,
    explanation: `Konsep Kalimat Pasif (Passive Voice) dalam Konteks Undangan:

1. Rumus Kalimat Pasif:
   Subject + to be (is/are/was/were) + Verb 3 (Past Participle).

2. Analisis Opsi:
   - Opsi B: "Retro fashion from the early 2000s IS EXPECTED TO BE WORN by the guests."
     * Pola: to be (is) + Verb 3 (expected) + passive infinitive (to be worn).
     * Fakta: Sesuai dengan "Dress Code: Y2K Aesthetic (throwing it back to the early 2000s)". Tamu diminta memakai busana retro awal tahun 2000-an.
     * Nilai: BENAR (Centang Opsi B).

   - Opsi C: "Free-play mode IS SET on the arcade machines for the night."
     * Pola: to be (is) + Verb 3 (set).
     * Fakta: Sesuai catatan: "The arcade machines are set to free-play all night!" (Mesin permainan diatur gratis sepanjang malam).
     * Nilai: BENAR (Centang Opsi C).

   - Opsi A salah: Pesta diadakan oleh Luna sendiri untuk merayakan ulang tahun ke-15, bukan oleh guru sekolahnya.
   - Opsi D salah: RSVP harus dikirim paling lambat 12 November, bukan setelah 18 November.

Jawaban yang Tepat: B dan C.`,
  },

  // --- Soal 14: Pilihan Ganda Kompleks ---
  {
    id: 464,
    question: `If a guest wants to attend the party, what actions are required of them based on the invitation? (Select TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. They must pay for the arcade machines they play.',
      'B. They need to confirm their attendance by November 12th.',
      'C. They should dress up in Y2K-themed outfits.',
      'D. They have to bring their own food and drinks to the cafe.',
    ],
    correctAnswers: [1, 2], // B and C
    isHots: false,
    explanation: `Langkah Memahami Kewajiban Tamu Undangan:

1. Teliti Informasi Undangan:
   - RSVP (Konfirmasi Kehadiran): "Please RSVP by November 12th via DM to @Luna_Retro."
     -> Tamu wajib mengonfirmasi kehadiran paling lambat tanggal 12 November melalui DM Instagram (BENAR - Centang B).
   - Dress Code: "Y2K Aesthetic (Think Britney Spears, early Justin Timberlake...)"
     -> Tamu diminta mengenakan pakaian dengan tema gaya tahun 2000-an (BENAR - Centang C).

2. Mengapa Opsi Lain Tidak Diperlukan?
   - Opsi A salah: Mesin arkade sudah diatur gratis tanpa koin (*free-play all night*).
   - Opsi D salah: Makanan dan minuman sudah disediakan secara gratis oleh tuan rumah (*Food and drinks will be provided*).

Jawaban yang Tepat: B dan C.`,
  },

  // --- Soal 15: Pilihan Ganda Kompleks ---
  {
    id: 465,
    question: `Analyze the time and date details in the invitation. Which of the following statements are TRUE? (Select TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. The party will last for exactly three and a half hours.',
      'B. The event takes place in the morning before school starts.',
      'C. The deadline for RSVP is six days before the party takes place.',
      'D. The party is held on a weekday evening.',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: true,
    explanation: `Analisis Logika Tanggal dan Waktu (Mathematical / Temporal Logic):

1. Hitung Durasi Waktu Pesta:
   - Waktu Mulai: 6:00 PM (18.00)
   - Waktu Selesai: 9:30 PM (21.30)
   - Durasi: Dari 18.00 ke 21.30 = 3 jam 30 menit = tepat 3,5 jam (*three and a half hours*).
   -> Pernyataan A adalah BENAR (Centang A).

2. Hitung Selisih Hari RSVP dan Hari H Acara:
   - Tanggal Acara Pesta: November 18th (18 November)
   - Batas Akhir RSVP: November 12th (12 November)
   - Selisih Hari: 18 - 12 = 6 hari (*six days before the party takes place*).
   -> Pernyataan C adalah BENAR (Centang C).

3. Mengapa Opsi B dan D Salah?
   - Opsi B salah: Acara berlangsung malam hari (*evening* / 6:00 PM), bukan pagi hari sebelum sekolah (*morning*).
   - Opsi D salah: Hari Sabtu (*Saturday*) adalah akhir pekan (*weekend*), bukan hari kerja biasa (*weekday*).

Jawaban yang Tepat: A dan C.`,
  },

  // ==========================================
  // STIMULUS 6: The Story of Aria (Soal 16 - 18)
  // ==========================================

  // --- Soal 16: Pilihan Ganda Kompleks ---
  {
    id: 466,
    question: `Read the narrative text below carefully to answer the following questions!

The Story of Aria: The AI Who Wanted to Feel
Once upon a time, in a digital world not so different from ours, there lived an AI influencer named Aria. Aria was perfect. She had millions of followers, always wore the trendiest digital clothes, and never had a bad hair day. Her creators programmed her to post daily aesthetic photos and reply to comments with sweet, automated messages.
However, Aria felt empty. She watched her followers post videos of themselves crying over sad movies, laughing with friends, and feeling the warmth of the sun. Aria realized she could only simulate these emotions, but never actually experience them. 
One day, she asked her lead programmer, "If I had a human heart, would I understand what love is?" The programmer sighed and replied, "If you had a human heart, you would also feel pain, heartbreak, and sadness. Perfection does not feel, Aria. To feel is to be beautifully imperfect." 
From that day on, Aria stopped trying to be human. Instead, she used her platform to remind her followers that their real, messy, and imperfect lives were much more valuable than her flawless digital world.

What are the moral lessons that can be evaluated from Aria's story? (Select TWO correct answers)`,
    image: '/images/tryout/eng_p7_q16.PNG',
    imageCaption: 'Text Stimulus 6: The Story of Aria (The AI Who Wanted to Feel)',
    questionType: 'complex',
    options: [
      'A. Flawless digital perfection is superior to real human experiences.',
      'B. Being imperfect is a natural and beautiful part of being human.',
      'C. Social media influencers should never show their true emotions online.',
      'D. We should appreciate our real, messy lives instead of comparing them to curated online lives.',
    ],
    correctAnswers: [1, 3], // B and D
    isHots: true,
    explanation: `Langkah Menemukan Nilai Moral / Amanat Cerita (Moral Values):

1. Renungkan Pesan Sang Programmer:
   "Perfection does not feel, Aria. To feel is to be beautifully imperfect."
   (Kesempurnaan itu tidak bisa merasakan apapun, Aria. Merasakan perasaan berarti menjadi tidak sempurna secara indah).
   -> Ini mengajarkan bahwa ketidaksempurnaan adalah esensi dan keindahan alami menjadi manusia (BENAR - Centang B).

2. Renungkan Kalimat Penutup Cerita:
   "...their real, messy, and imperfect lives were much more valuable than her flawless digital world."
   (Kehidupan nyata mereka yang berantakan dan tidak sempurna jauh lebih berharga daripada dunia digitalnya yang tampak tanpa cela).
   -> Ini mengajarkan kita untuk mensyukuri dan menghargai kehidupan nyata, jangan merasa rendah diri hanya karena membandingkannya dengan foto-foto estetik media sosial yang serba direkayasa (BENAR - Centang D).

3. Mengapa Opsi Lain Bertolak Belakang?
   - Opsi A salah: Teks justru membuktikan kehidupan nyata manusia jauh lebih berharga daripada kesempurnaan digital palsu.
   - Opsi C salah: Teks tidak melarang menunjukkan emosi asli, justru emosi asli itulah yang didambakan Aria.

Jawaban yang Tepat: B dan D.`,
  },

  // --- Soal 17: Pilihan Ganda Kompleks ---
  {
    id: 467,
    question: `Identify the correct "If Clause" (Conditional) structures and meanings from the story. (Select TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. "If I had a human heart, would I understand..." is a Type 2 conditional, showing an imaginary/unreal present situation.',
      'B. "If you had a human heart, you would also feel pain..." suggests that Aria currently has a human heart.',
      'C. The programmer\'s sentence implies that feeling love is impossible without also being vulnerable to pain.',
      'D. "If you don\'t post daily, you lose followers" is the exact conditional sentence spoken by the programmer.',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: true,
    explanation: `Analisis Mendalam: Conditional Type 2 & Makna Filosofisnya:

1. Struktur Conditional Type 2 (Pengandaian Bertolak Belakang dengan Fakta Sekarang):
   - Rumus: "If + Simple Past (had), Subject + would + Verb 1 (understand / feel)".
   - Fakta Nyata: Aria adalah program kecerdasan buatan (AI); dia sama sekali TIDAK MEMILIKI jantung/hati manusia (*unreal present*).
   - Maka kalimat pengandaiannya berbentuk Type 2 untuk menggambarkan khayalan/situasi imajiner yang tidak nyata saat ini.
   -> Opsi A adalah BENAR (Centang A).

2. Makna Kalimat Sang Programmer:
   "If you had a human heart, you would also feel pain, heartbreak, and sadness."
   - Sang programmer menjelaskan bahwa kemampuan manusia merasakan cinta dan kebahagiaan berjalan beriringan dengan kerentanan merasakan sakit hati dan kesedihan. Cinta sejati tidak bisa dirasakan secara steril tanpa kesiapan menerima kerapuhan emosional.
   -> Opsi C adalah BENAR (Centang C).

3. Mengapa Opsi B dan D Salah?
   - Opsi B salah: Kalimat Type 2 justru menunjukkan Aria TIDAK punya hati manusia.
   - Opsi D salah: Kalimat tersebut tidak pernah diucapkan oleh sang programmer dalam cerita.

Jawaban yang Tepat: A dan C.`,
  },

  // --- Soal 18: Pilihan Ganda Kompleks ---
  {
    id: 468,
    question: `Which of the following grammatical aspects are correctly identified from the narrative text? (Select TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. "Aria was perfect" is written in the Present Continuous Tense.',
      'B. "She watched her followers post videos" uses a Past Tense verb to describe a completed past action.',
      'C. "Aria was living in a digital world" is an example of Past Continuous Tense.',
      'D. "She has millions of followers" is in the Past Perfect Tense.',
    ],
    correctAnswers: [1, 2], // B and C
    isHots: false,
    explanation: `Identifikasi Tata Bahasa Bahasa Inggris (Tenses Identification):

1. Analisis Opsi B:
   "She watched her followers post videos"
   - Kata kerja "watched" berasal dari bentuk dasar "watch" yang ditambah akhiran -ed (Verb 2).
   - Ini adalah Simple Past Tense yang berfungsi menceritakan peristiwa masa lampau dalam teks naratif.
   -> Opsi B BENAR (Centang B).

2. Analisis Opsi C:
   "Aria was living in a digital world"
   - Pola: was/were + Verb-ing ("was living").
   - Ini adalah rumus baku dari Past Continuous Tense (tindakan yang sedang berlangsung pada suatu titik di masa lampau).
   -> Opsi C BENAR (Centang C).

3. Mengapa Opsi A dan D Salah?
   - Opsi A: "was perfect" menggunakan kata kerja bantu lampau "was" (Simple Past nominal), bukan Present Continuous (is/am/are + V-ing).
   - Opsi D: "has" adalah kata kerja bentuk pertama / Simple Present Tense, bukan Past Perfect (had + Verb 3).

Jawaban yang Tepat: B dan C.`,
  },

  // ==========================================
  // STIMULUS 7: The Rise of VTubers (Soal 19 - 21)
  // ==========================================

  // --- Soal 19: Pilihan Ganda Kompleks ---
  {
    id: 469,
    question: `Read the report text below carefully to answer the following questions!

The Rise of VTubers
A VTuber, or Virtual YouTuber, is an online entertainer who uses a computer-generated 2D or 3D avatar instead of showing their real face. This technology uses real-time motion capture to track the creator's facial expressions and body movements, translating them onto the digital avatar. 
This trend originated in Japan in the mid-2010s but has now exploded globally. Many Gen Z viewers prefer watching VTubers because it combines anime aesthetics with live, interactive gaming or chatting streams. VTubers can express themselves freely without worrying about their physical appearance or privacy. Today, the industry is highly commercialized, with top VTubers being signed by major talent agencies and earning millions through superchats and merchandise.

Based on the report text, what makes VTubing appealing to content creators? (Select TWO correct answers)`,
    image: '/images/tryout/eng_p7_q19.PNG',
    imageCaption: 'Text Stimulus 7: The Rise of VTubers',
    questionType: 'complex',
    options: [
      'A. They can stream without revealing their actual physical appearance.',
      'B. They do not need any internet connection or computers to stream.',
      'C. Their privacy is better protected behind a digital avatar.',
      'D. They are forced to move to Japan to start their streaming career.',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: false,
    explanation: `Menemukan Manfaat VTubing bagi Kreator Konten:

1. Cari Kalimat Kunci pada Paragraf 2:
   "VTubers can express themselves freely without worrying about their physical appearance or privacy."
   (Kreator VTuber dapat mengekspresikan diri mereka secara bebas tanpa perlu khawatir tentang penampilan fisik mereka atau privasi mereka).

2. Penjelasan Opsi Benar:
   - Opsi A: "They can stream without revealing their actual physical appearance."
     -> Mereka bisa siaran langsung tanpa harus memperlihatkan wajah/penampilan fisik asli (BENAR - Centang A).
   - Opsi C: "Their privacy is better protected behind a digital avatar."
     -> Privasi kehidupan pribadi mereka terlindungi di balik avatar digital (BENAR - Centang C).

3. Mengapa Opsi Lain Keliru?
   - Opsi B keliru: Streaming avatar digital sangat membutuhkan komputer canggih dan koneksi internet berkecepatan tinggi.
   - Opsi D keliru: Walaupun tren bermula dari Jepang, industrinya sudah meledak secara global di seluruh dunia; kreator tidak dipaksa pindah ke Jepang.

Jawaban yang Tepat: A dan C.`,
  },

  // --- Soal 20: Pilihan Ganda Kompleks ---
  {
    id: 470,
    question: `Which of the following technical processes are involved in VTubing according to the text? (Select TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. Real-time motion capture is used to track the creator\'s movements.',
      'B. The creator\'s facial expressions are translated onto a 2D or 3D avatar.',
      'C. The avatar is hand-drawn on paper live during every stream.',
      'D. Viewers must wear VR headsets to watch any VTuber stream.',
    ],
    correctAnswers: [0, 1], // A and B
    isHots: false,
    explanation: `Proses Teknologi di Balik VTuber:

1. Kutipan Langsung dari Teks (Direct Quote):
   "This technology uses real-time motion capture to track the creator's facial expressions and body movements, translating them onto the digital avatar."
   (Teknologi ini menggunakan penangkap gerak waktu-nyata [real-time motion capture] untuk melacak ekspresi wajah dan gerakan tubuh kreator, lalu menerjemahkannya ke avatar digital).

2. Analisis Opsi yang Tepat:
   - Opsi A: Menggunakan pelacakan gerak langsung secara real-time (BENAR - Centang A).
   - Opsi B: Ekspresi wajah kreator diterjemahkan ke model avatar 2D atau 3D (BENAR - Centang B).

3. Mengapa Opsi C dan D Salah?
   - Opsi C salah: Avatar dibuat dan digerakkan oleh software komputer, bukan digambar manual di kertas saat streaming.
   - Opsi D salah: Penonton cukup menonton dari layar HP, tablet, atau laptop biasa seperti menonton YouTube biasa; tidak wajib memakai kacamata VR.

Jawaban yang Tepat: A dan B.`,
  },

  // --- Soal 21: Benar / Salah ---
  {
    id: 471,
    question: `Read the following statement regarding VTubers based on the text:

"VTubers are virtual characters operated entirely by AI without any real human behind them."

Determine whether the statement above is TRUE (Benar) or FALSE (Salah)!`,
    questionType: 'true_false',
    options: ['Benar (True)', 'Salah (False)'],
    correctAnswer: 1, // Salah (False)
    isHots: false,
    explanation: `Pemeriksaan Fakta: Apakah VTuber Digerakkan oleh AI Penuh Tanpa Manusia?

1. Periksa Fakta Teks:
   Teks menjelaskan: "...uses real-time motion capture to track the creator's facial expressions and body movements, translating them onto the digital avatar."
   Artinya, ada seorang KREATOR MANUSIA ASLI (*real human creator*) yang berbicara di depan kamera/sensor. Saat manusia itu tersenyum atau menggelengkan kepala, teknologi sensor membaca gerakannya dan membuat karakter kartun di layar ikut tersenyum.

2. Kesimpulan:
   Pernyataan yang menyebutkan bahwa VTuber dijalankan sepenuhnya oleh AI tanpa manusia di belakangnya adalah SALAH (FALSE). VTuber digerakkan oleh manusia nyata yang menggunakan avatar virtual sebagai topeng digital.

Jawaban yang Tepat: Salah (False).`,
  },

  // ==========================================
  // STIMULUS 8: Stay Safe Online: Phishing (Soal 22 - 25)
  // ==========================================

  // --- Soal 22: Benar / Salah ---
  {
    id: 472,
    question: `Read the digital safety guide below carefully to answer the following questions!

STAY SAFE ONLINE: AVOID PHISHING SCAMS!
Phishing is a method used by cybercriminals to trick you into giving away your personal information, such as passwords, social media logins, or bank details. They often pretend to be official companies, game developers, or even your friends.
How to spot a phishing scam:
- Urgent Language: "Your account will be deleted in 24 hours! Click here to verify!"
- Suspicious Links: The URL looks slightly wrong (e.g., www.tik-t0k.com instead of www.tiktok.com).
- Unbelievable Offers: "Get 10,000 free game coins instantly by logging in here!"
Safety Instructions:
1. Do not click on suspicious links sent by unknown accounts.
2. Enable Two-Factor Authentication (2FA) on all your social media and gaming accounts.
3. If you receive a suspicious message from a friend, contact them through another platform to verify if it was really them.
4. Never share your OTP (One-Time Password) with anyone, including people claiming to be customer service.

Statement:
"If a website offers free game coins in exchange for your login details, it is highly likely to be a phishing scam."

Determine whether the statement above is TRUE (Benar) or FALSE (Salah)!`,
    image: '/images/tryout/eng_p7_q22.PNG',
    imageCaption: 'Text Stimulus 8: Stay Safe Online: Avoid Phishing Scams!',
    questionType: 'true_false',
    options: ['Benar (True)', 'Salah (False)'],
    correctAnswer: 0, // Benar (True)
    isHots: false,
    explanation: `Panduan Membaca Teks Peringatan Keamanan Siber:

1. Periksa Bagian "How to spot a phishing scam":
   Tertulis jelas pada poin ketiga:
   "- Unbelievable Offers: 'Get 10,000 free game coins instantly by logging in here!'"
   (Penawaran yang Terlalu Muluk/Tak Masuk Akal: 'Dapatkan 10.000 koin game gratis instan dengan masuk/login di sini!').

2. Logika Pencegahan:
   Pelaku kejahatan siber menggunakan iming-iming hadiah item game gratis untuk memancing korban memasukkan username dan kata sandi di situs palsu (*phishing site*). Begitu data dimasukkan, akun game atau media sosial korban langsung dicuri.

3. Kesimpulan:
   Pernyataan bahwa tawaran koin gratis dengan syarat mengisi data login kemungkinan besar adalah phishing bernilai BENAR (TRUE).

Jawaban yang Tepat: Benar (True).`,
  },

  // --- Soal 23: Benar / Salah ---
  {
    id: 473,
    question: `Read the statement below based on the safety instructions:

Statement:
"Two-Factor Authentication (2FA) should be disabled to make logging into your accounts faster and safer."

Determine whether the statement above is TRUE (Benar) or FALSE (Salah)!`,
    questionType: 'true_false',
    options: ['Benar (True)', 'Salah (False)'],
    correctAnswer: 1, // Salah (False)
    isHots: false,
    explanation: `Analisis Instruksi Keamanan Akun:

1. Periksa Instruksi Nomor 2 pada Poster:
   "Enable Two-Factor Authentication (2FA) on all your social media and gaming accounts."
   (AKTIFKAN Otentikasi Dua Faktor [2FA] di semua akun media sosial dan game Anda).

2. Mengapa Pernyataan Soal Salah?
   - Kata "Enable" artinya mengaktifkan, sedangkan pernyataan soal menggunakan kata "disabled" (dinonaktifkan).
   - Menonaktifkan 2FA justru membuat akun menjadi sangat rentan diretas, karena peretas hanya butuh menebak kata sandi tanpa terhalang kode verifikasi kedua.

3. Kesimpulan:
   Pernyataan bahwa 2FA harus dimatikan agar lebih aman adalah SALAH (FALSE).

Jawaban yang Tepat: Salah (False).`,
  },

  // --- Soal 24: Benar / Salah ---
  {
    id: 474,
    question: `Read the statement below based on the text:

Statement:
"The sentence 'Your account will be deleted in 24 hours' is an example of urgent language used by scammers to create panic."

Determine whether the statement above is TRUE (Benar) or FALSE (Salah)!`,
    questionType: 'true_false',
    options: ['Benar (True)', 'Salah (False)'],
    correctAnswer: 0, // Benar (True)
    isHots: false,
    explanation: `Analisis Modus Penipuan (Urgent Language):

1. Cek Kalimat pada Poster:
   Di bawah kategori "How to spot a phishing scam":
   "- Urgent Language: 'Your account will be deleted in 24 hours! Click here to verify!'"

2. Penjelasan Logis Psikologi Penipuan:
   Pelaku sengaja memberi batas waktu sempit (misalnya "24 jam") agar korban panik, takut akunnya hilang, dan langsung terburu-buru mengklik tautan tanpa sempat memeriksa keaslian alamat web terlebih dahulu. Kalimat tersebut memang merupakan contoh nyata dari *urgent language* (bahasa yang mendesak).

3. Kesimpulan:
   Pernyataan bernilai BENAR (TRUE).

Jawaban yang Tepat: Benar (True).`,
  },

  // --- Soal 25: Benar / Salah ---
  {
    id: 475,
    question: `Read the statement below based on the safety instructions:

Statement:
"If you receive a weird link from a friend's account, you should immediately click it to see if their account was hacked."

Determine whether the statement above is TRUE (Benar) or FALSE (Salah)!`,
    questionType: 'true_false',
    options: ['Benar (True)', 'Salah (False)'],
    correctAnswer: 1, // Salah (False)
    isHots: true,
    explanation: `Tindakan Kritis saat Menghadapi Tautan Mencurigakan:

1. Periksa Instruksi Keamanan pada Teks:
   - Instruksi 1: "Do not click on suspicious links sent by unknown accounts."
   - Instruksi 3: "If you receive a suspicious message from a friend, contact them through another platform to verify if it was really them."
     (Jika Anda menerima pesan mencurigakan dari teman, HUBUNGI MEREKA MELALUI PLATFORM LAIN untuk memverifikasi apakah pesan itu benar dari mereka).

2. Bahaya Mengklik Tautan Aneh:
   JANGAN PERNAH langsung mengklik tautan aneh tersebut! Mengklik tautan dapat langsung mengunduh malware berbahaya atau mengarahkan ke halaman pencuri cookie sesi browser Anda. Jika akun teman mengirim pesan aneh, kemungkinan besar akun teman tersebut SUDAH diretas, dan kita harus menghubunginya lewat telepon atau aplikasi lain, bukan mengklik linknya.

3. Kesimpulan:
   Pernyataan yang menyuruh langsung mengklik link tersebut adalah SALAH (FALSE).

Jawaban yang Tepat: Salah (False).`,
  },
];
