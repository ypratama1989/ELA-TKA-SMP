import { Question } from '../types';

/**
 * Bank Soal Try Out TKA SMP Resmi - Bahasa Inggris Paket 3 (eng_p3)
 * 25 Soal CBT Model Pilihan Ganda Kompleks (Pilih DUA Jawaban Benar)
 * Terverifikasi dengan Pembahasan Langkah Demi Langkah (Step-by-Step)
 */
export const TRYOUT_ENG_PAKET_3: Question[] = [
  // --- Konteks 1: Descriptive Text (Soal 1 & 2) ---
  {
    id: 351,
    question: `Read the text below to answer questions 1 and 2.

My Sphynx Cat, Cleo
I have a unique pet. It is a Sphynx cat, and I named her Cleo. Unlike most cats, Cleo does not have fur. Her skin is warm, soft, and slightly wrinkled, resembling the texture of a peach. She has large, pointed ears and big, round amber eyes that make her look very intelligent. Cleo is an indoor cat because her lack of fur makes her sensitive to extreme cold and direct sunlight. She is very affectionate and loves to snuggle under blankets with me when I sleep.

Based on the text, which of the following statements are correct? (Choose TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. Cleo has thick, soft fur that keeps her warm.',
      'B. Cleo has large ears and round amber eyes.',
      'C. Cleo cannot live outdoors due to her skin sensitivity.',
      'D. Cleo dislikes sleeping under blankets with her owner.',
    ],
    correctAnswers: [1, 2], // B and C
    isHots: false,
    explanation: `Langkah Pembuktian Informasi Teks (Step-by-Step):

1. Analisis Opsi A:
   "Cleo has thick, soft fur..." (Cleo punya bulu tebal dan lembut).
   Cek Teks: Tertulis jelas "Unlike most cats, Cleo does not have fur" (Cleo TIDAK punya bulu sama sekali). Maka Opsi A SALAH.

2. Analisis Opsi B:
   "Cleo has large ears and round amber eyes" (Cleo punya telinga besar dan mata bundar berwarna amber/kuning kecokelatan).
   Cek Teks: Tertulis kalimat "She has large, pointed ears and big, round amber eyes...". Ini persis sama dengan teks. Maka Opsi B BENAR.

3. Analisis Opsi C:
   "Cleo cannot live outdoors due to her skin sensitivity" (Cleo tidak bisa hidup di luar ruangan karena kulitnya sensitif).
   Cek Teks: Tertulis "Cleo is an indoor cat because her lack of fur makes her sensitive to extreme cold and direct sunlight." Tanpa bulu, ia rentan kedinginan dan kepanasan jika di luar rumah. Maka Opsi C BENAR.

4. Analisis Opsi D:
   "Cleo dislikes sleeping under blankets..." (Cleo tidak suka tidur di bawah selimut).
   Cek Teks: Di kalimat terakhir tertulis "loves to snuggle under blankets with me" (ia SANGAT SUKA meringkuk di bawah selimut). Maka Opsi D SALAH.

Jawaban yang Tepat: B dan C.`,
  },
  {
    id: 352,
    question: `Read the text below to answer questions 1 and 2.

My Sphynx Cat, Cleo
I have a unique pet. It is a Sphynx cat, and I named her Cleo. Unlike most cats, Cleo does not have fur. Her skin is warm, soft, and slightly wrinkled, resembling the texture of a peach. She has large, pointed ears and big, round amber eyes that make her look very intelligent. Cleo is an indoor cat because her lack of fur makes her sensitive to extreme cold and direct sunlight. She is very affectionate and loves to snuggle under blankets with me when I sleep.

Which words describe Cleo's physical appearance? (Choose TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. Wrinkled skin',
      'B. Fluffy tail',
      'C. Pointed ears',
      'D. Cold body',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: false,
    explanation: `Langkah Menemukan Ciri-Ciri Fisik (Physical Appearance):

1. Pengertian Ciri Fisik:
   Ciri fisik adalah apa yang terlihat nyata pada tubuh Cleo secara kasat mata.

2. Cek Kosakata Teks Satu per Satu:
   - "Her skin is warm, soft, and slightly wrinkled..." -> Kulitnya sedikit berkerut (Wrinkled skin). Maka Opsi A BENAR.
   - Cleo adalah kucing tanpa bulu (*does not have fur*), sehingga ia tidak mungkin punya ekor berbulu lebat (*Fluffy tail*). Maka Opsi B SALAH.
   - "She has large, pointed ears..." -> Telinganya runcing menjulang (*Pointed ears*). Maka Opsi C BENAR.
   - "Her skin is warm..." -> Kulit tubuhnya hangat, bukan dingin (*Cold body*). Maka Opsi D SALAH.

Jawaban yang Tepat: A dan C.`,
  },

  // --- Konteks 2: Procedure Text (Soal 3 & 4) ---
  {
    id: 353,
    question: `Read the text below to answer questions 3 and 4.

How to Make a Cup of Warm Lemon Tea
Ingredients:
* 1 bag of black tea
* 1 slice of fresh lemon
* 2 teaspoons of sugar (or honey)
* 150 ml of hot water

Steps:
1. First, put the tea bag into a cup.
2. Second, pour the hot water into the cup and let it steep for 2-3 minutes.
3. Next, remove the tea bag and add the sugar or honey. Stir well.
4. After that, squeeze the fresh lemon slice into the tea.
5. Finally, your warm lemon tea is ready to serve.

What are the ingredients needed to make the lemon tea? (Choose TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. Black tea bag',
      'B. Ice cubes',
      'C. Fresh lemon slice',
      'D. Milk powder',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: false,
    explanation: `Langkah Membaca Bahan (Ingredients):

1. Pahami Bagian "Ingredients":
   Bagian resep ini memuat daftar semua bahan mentah yang wajib disiapkan:
   * 1 bag of black tea (1 kantong teh hitam)
   * 1 slice of fresh lemon (1 irisan lemon segar)
   * 2 teaspoons of sugar or honey (2 sendok teh gula atau madu)
   * 150 ml of hot water (150 ml air panas)

2. Uji Setiap Pilihan:
   - Opsi A: "Black tea bag" -> Ada di daftar resep (BENAR).
   - Opsi B: "Ice cubes" (es batu) -> Tidak ada sama sekali karena ini teh hangat (*warm tea*) (SALAH).
   - Opsi C: "Fresh lemon slice" -> Ada di daftar resep (BENAR).
   - Opsi D: "Milk powder" (susu bubuk) -> Tidak disebutkan (SALAH).

Jawaban yang Tepat: A dan C.`,
  },
  {
    id: 354,
    question: `Read the text below to answer questions 3 and 4.

How to Make a Cup of Warm Lemon Tea
Ingredients:
* 1 bag of black tea
* 1 slice of fresh lemon
* 2 teaspoons of sugar (or honey)
* 150 ml of hot water

Steps:
1. First, put the tea bag into a cup.
2. Second, pour the hot water into the cup and let it steep for 2-3 minutes.
3. Next, remove the tea bag and add the sugar or honey. Stir well.
4. After that, squeeze the fresh lemon slice into the tea.
5. Finally, your warm lemon tea is ready to serve.

Based on the steps, what should you do after pouring the hot water? (Choose TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. Squeeze the lemon slice immediately.',
      'B. Let the tea steep for 2 to 3 minutes.',
      'C. Remove the tea bag before adding sugar.',
      'D. Serve the tea without stirring.',
    ],
    correctAnswers: [1, 2], // B and C
    isHots: false,
    explanation: `Langkah Mengurutkan Prosedur (Chronological Order):

1. Cari Kata Kunci "After pouring the hot water" (Setelah menuangkan air panas):
   Menuangkan air panas terjadi di Langkah 2: "Second, pour the hot water into the cup..."

2. Apa yang Terjadi Tepat Setelah Menuang Air Panas?
   - Di Langkah 2: "...and let it steep for 2-3 minutes" (diamkan terendam/terseduh selama 2-3 menit). Maka Opsi B BENAR.
   - Di Langkah 3: "Next, remove the tea bag and add the sugar or honey" (angkat kantong tehnya sebelum memasukkan gula). Maka Opsi C BENAR.

3. Mengapa Pilihan Lain Salah?
   - Opsi A salah karena memeras lemon (*squeeze the lemon*) baru dilakukan pada langkah ke-4, bukan langsung setelah menuang air panas.
   - Opsi D salah karena teks memerintahkan untuk diaduk rata (*stir well*), bukan disajikan tanpa diaduk.

Jawaban yang Tepat: B dan C.`,
  },

  // --- Konteks 3: Schedule (Soal 5) ---
  {
    id: 355,
    question: `Look at the schedule below!

English Club Weekly Schedule:
* Monday: 15.30 - 17.00 (Speaking Class)
* Wednesday: 15.30 - 17.00 (Writing & Grammar)
* Friday: 14.00 - 15.30 (Debate Practice)

Which statements correctly describe the schedule? (Choose TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. The Speaking Class is held on Monday afternoon.',
      'B. Writing & Grammar class starts at half past three on Wednesday.',
      'C. Debate Practice is held every Tuesday at 2 PM.',
      'D. All classes start at the exact same time every day.',
    ],
    correctAnswers: [0, 1], // A and B
    isHots: false,
    explanation: `Langkah Membaca Jadwal Mingguan (Weekly Schedule):

1. Analisis Opsi A:
   "The Speaking Class is held on Monday afternoon."
   Jadwal Speaking Class: Senin (Monday) pukul 15.30 - 17.00. Waktu pukul setengah empat sore jelas merupakan waktu sore hari (*afternoon*). Maka Opsi A BENAR.

2. Analisis Opsi B:
   "Writing & Grammar class starts at half past three on Wednesday."
   Jadwal Writing & Grammar: Rabu (Wednesday) pukul 15.30. Dalam bahasa Inggris, 15.30 diucapkan "half past three" (pukul 3 lebih 30 menit). Maka Opsi B BENAR.

3. Analisis Opsi C:
   "Debate Practice is held every Tuesday at 2 PM."
   Jadwal Debate Practice ada di hari Jumat (Friday), bukan hari Selasa (Tuesday). Maka Opsi C SALAH.

4. Analisis Opsi D:
   "All classes start at the exact same time every day."
   Senin & Rabu dimulai pukul 15.30, sedangkan Jumat dimulai pukul 14.00. Waktu mulainya tidak sama. Maka Opsi D SALAH.

Jawaban yang Tepat: A dan B.`,
  },

  // --- Konteks 4: Suggestion & Permission (Soal 6) ---
  {
    id: 356,
    question: `Read the dialogue below.

Rian: "I feel so tired and sleepy today, but I have to study for the exam tomorrow."
Santi: "I think you should take a short nap first. Don't force yourself."
Rian: "Can I sleep in your room? My room is being painted."
Santi: "Yes, of course you can. Just make sure to set your alarm."

Which sentences express suggestions or permissions? (Choose TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. "I feel so tired and sleepy today."',
      'B. "I think you should take a short nap first."',
      'C. "Yes, of course you can."',
      'D. "My room is being painted."',
    ],
    correctAnswers: [1, 2], // B and C
    isHots: false,
    explanation: `Konsep Ungkapan Saran (Suggestion) dan Izin (Permission):

1. Memberi Saran (Giving Suggestion):
   Ciri khas saran adalah penggunaan frasa "I think you should..." (Menurutku kamu sebaiknya...).
   Santi memberi saran kepada Rian agar tidur siang sebentar: "I think you should take a short nap first." Ini adalah ungkapan saran. Maka Opsi B BENAR.

2. Memberi Izin (Giving Permission):
   Ketika Rian meminta izin tidur di kamarnya ("Can I sleep in your room?"), Santi merespons dengan memberi izin: "Yes, of course you can" (Ya, tentu saja boleh). Ini adalah ungkapan memberi izin. Maka Opsi C BENAR.

3. Mengapa Opsi Lain Salah?
   - Opsi A hanya mengungkapkan perasaan lelah fisik (*stating a feeling/condition*).
   - Opsi D hanyalah pernyataan fakta bahwa kamarnya sedang dicat (*stating a fact/passive voice*).

Jawaban yang Tepat: B dan C.`,
  },

  // --- Konteks 5: Simple Present Tense (Soal 7) ---
  {
    id: 357,
    question: `Which of the following sentences correctly use the Simple Present Tense? (Choose TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. The sun rises in the east every morning.',
      'B. They goes to the library every Friday afternoon.',
      'C. My mother cooks delicious meals for our family.',
      'D. We are played football in the schoolyard yesterday.',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: false,
    explanation: `Aturan Dasar Simple Present Tense:

1. Rumus Utama:
   - Jika Subjek Tunggal (He, She, It, The sun, My mother) -> Kata kerja ditambah akhiran -s/-es (Verb 1 + s/es).
   - Jika Subjek Jamak (I, You, They, We) -> Kata kerja bentuk dasar tanpa akhiran (Bare Infinitive / Verb 1).

2. Uji Kalimat:
   - Kalimat A: "The sun rises in the east every morning."
     Subjek: "The sun" (tunggal) + kata kerja "rises" (ditambah -s). Ini fakta ilmiah abadi (*general truth*). Struktur tata bahasanya BENAR (Pilihan A).
   - Kalimat B: "They goes..."
     Subjek "They" (mereka = jamak) seharusnya memakai "go", bukan "goes". Kalimat B SALAH.
   - Kalimat C: "My mother cooks delicious meals for our family."
     Subjek: "My mother" (tunggal) + kata kerja "cooks" (ditambah -s). Ini rutinitas sehari-hari. Struktur tata bahasanya BENAR (Pilihan C).
   - Kalimat D: "We are played... yesterday."
     Ada kata lampau "yesterday" dan campuran to be "are played" yang rusak secara tata bahasa. Kalimat D SALAH.

Jawaban yang Tepat: A dan C.`,
  },

  // --- Konteks 6: Asking & Giving Direction (Soal 8) ---
  {
    id: 358,
    question: `Read the dialogue below.

Visitor: "Excuse me, could you tell me how to get to the nearest post office?"
Local Resident: "Sure. Go straight along this street until you see the T-junction. Then, turn left. The post office is on your right, next to the bank."

Which of the following directions are correct based on the dialogue? (Choose TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. The visitor must turn right at the T-junction.',
      'B. The visitor must turn left at the T-junction.',
      'C. The post office is located next to the bank.',
      'D. The post office is on the left side of the street.',
    ],
    correctAnswers: [1, 2], // B and C
    isHots: false,
    explanation: `Langkah Membaca Rute Petunjuk Arah:

1. Lacak Petunjuk Penduduk Lokal (Local Resident):
   - "Go straight along this street until you see the T-junction." (Jalan lurus sampai melihat pertigaan jalan).
   - "Then, turn left." (Kemudian belok kiri).
     -> Maka turis harus belok kiri di pertigaan (*turn left at the T-junction*). Opsi B BENAR, Opsi A SALAH.
   - "The post office is on your right, next to the bank." (Kantor pos ada di sebelah kananmu, di samping bank).
     -> Posisi kantor pos berdampingan dengan bank (*next to the bank*). Opsi C BENAR.
     -> Posisi kantor pos ada di sebelah kanan jalan (*on your right*), bukan di sebelah kiri (*left side*). Opsi D SALAH.

Jawaban yang Tepat: B dan C.`,
  },

  // --- Konteks 7: Simple Past Tense (Soal 9) ---
  {
    id: 359,
    question: `Which of the following sentences correctly use the Simple Past Tense? (Choose TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. She bought a new English dictionary last week.',
      'B. We write an interesting story in class yesterday.',
      'C. They visited their grandparents in Yogyakarta two days ago.',
      'D. He is sleeping when his father arrived home.',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: false,
    explanation: `Aturan Simple Past Tense (Waktu Lampau):

1. Rumus Baku:
   Subject + Verb 2 (Past Form) + Time Signal (Keterangan waktu lampau).

2. Cek Opsi Satu per Satu:
   - Kalimat A: "She bought a new English dictionary last week."
     Kata kerja "bought" adalah bentuk Verb 2 dari "buy". Penanda waktunya "last week" (minggu lalu). Kalimat ini BENAR.
   - Kalimat B: "We write... yesterday."
     Ada penanda waktu lampau "yesterday" (kemarin), tetapi kata kerjanya masih Verb 1 ("write"). Seharusnya memakai Verb 2 yaitu "wrote". Kalimat ini SALAH.
   - Kalimat C: "They visited their grandparents... two days ago."
     Kata kerja "visited" adalah bentuk Verb 2 dari "visit". Penanda waktunya "two days ago" (dua hari lalu). Kalimat ini BENAR.
   - Kalimat D: "He is sleeping when his father arrived home."
     Mencampur to be masa kini "is" dengan kata lampau "arrived". Seharusnya "was sleeping". Kalimat ini SALAH.

Jawaban yang Tepat: A dan C.`,
  },

  // --- Konteks 8: Recount Text (Soal 10 & 11) ---
  {
    id: 360,
    question: `Read the text below to answer questions 10 and 11.

My First Camping Experience
Last weekend, my school held a camping trip at Pine Hill. We arrived at the campsite on Saturday morning. First, we set up our tents under the guidance of our scout leader. It was difficult, but we managed to do it together. In the afternoon, we went hiking around the hill and enjoyed the beautiful scenery. At night, we made a campfire, sang songs, and ate roasted marshmallows. Although I felt exhausted, I was very happy because I learned a lot about teamwork.

What did the writer do on Saturday afternoon and night? (Choose TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. Set up the tents with the scout leader.',
      'B. Went hiking around the hill to enjoy the scenery.',
      'C. Made a campfire and sang songs.',
      'D. Arrived at Pine Hill on Sunday morning.',
    ],
    correctAnswers: [1, 2], // B and C
    isHots: false,
    explanation: `Langkah Membedakan Aktivitas Berdasarkan Waktu:

1. Cari Keterangan Waktu di Teks:
   - Sabtu Pagi (Saturday morning): Tiba di lokasi dan mendirikan tenda (*set up tents*). Opsi A dilakukan pagi hari, bukan siang/malam.
   - Sore Hari (In the afternoon): "we went hiking around the hill and enjoyed the beautiful scenery" (mendaki bukit dan menikmati pemandangan). Maka Opsi B BENAR.
   - Malam Hari (At night): "we made a campfire, sang songs, and ate roasted marshmallows" (membuat api unggun dan bernyanyi bersama). Maka Opsi C BENAR.
   - Opsi D salah karena mereka tiba hari Sabtu pagi, bukan Minggu pagi.

Jawaban yang Tepat: B dan C.`,
  },
  {
    id: 361,
    question: `Read the text below to answer questions 10 and 11.

My First Camping Experience
Last weekend, my school held a camping trip at Pine Hill. We arrived at the campsite on Saturday morning. First, we set up our tents under the guidance of our scout leader. It was difficult, but we managed to do it together. In the afternoon, we went hiking around the hill and enjoyed the beautiful scenery. At night, we made a campfire, sang songs, and ate roasted marshmallows. Although I felt exhausted, I was very happy because I learned a lot about teamwork.

Which statements are true about the writer's camping experience? (Choose TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. Setting up the tents was very easy for the writer.',
      'B. The writer felt tired but extremely happy.',
      'C. The camping trip took place at Pine Hill.',
      'D. The writer went camping alone without friends.',
    ],
    correctAnswers: [1, 2], // B and C
    isHots: false,
    explanation: `Langkah Verifikasi Fakta Pengalaman Penulis:

1. Analisis Opsi A:
   "Setting up the tents was very easy..." (Mendirikan tenda sangat mudah).
   Teks menulis: "It was difficult, but we managed to do it together" (Mendirikan tenda itu SULIT). Maka Opsi A SALAH.

2. Analisis Opsi B:
   "The writer felt tired but extremely happy" (Penulis merasa lelah namun sangat bahagia).
   Teks menulis: "Although I felt exhausted (sangat lelah), I was very happy...". Maknanya persis sama. Maka Opsi B BENAR.

3. Analisis Opsi C:
   "The camping trip took place at Pine Hill" (Perkemahan bertempat di Pine Hill).
   Teks menulis di kalimat pertama: "...held a camping trip at Pine Hill". Maka Opsi C BENAR.

4. Analisis Opsi D:
   "The writer went camping alone..." (Penulis berkemah sendirian).
   Teks menggunakan kata "my school", "we", dan teman-temannya. Ia tidak pergi sendirian. Maka Opsi D SALAH.

Jawaban yang Tepat: B dan C.`,
  },

  // --- Konteks 9: Narrative Text (Soal 12 & 13) ---
  {
    id: 362,
    question: `Read the text below to answer questions 12 and 13.

The Legend of the Crying Stone
Once upon a time, in a small village in Kalimantan, there lived a poor widow and her beautiful daughter. The daughter was very lazy and spoiled. She never helped her mother. One day, they went to the market. The daughter wore her best clothes, while her mother walked behind her carrying a basket. 

On the way, a villager asked the girl, "Who is the old woman behind you? Is she your mother?" The girl arrogantly replied, "No, she is my servant!" The mother's heart was broken. She prayed to God to punish her daughter. Suddenly, the girl's legs started turning into stone. She cried and begged for forgiveness, but it was too late. Her whole body eventually turned into stone, which continued to shed tears.

What are the characteristics of the daughter in the story? (Choose TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. Arrogant and spoiled',
      'B. Kind-hearted and helpful',
      'C. Lazy and ungrateful',
      'D. Humble and obedient',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: false,
    explanation: `Langkah Menemukan Karakter Tokoh (Character Traits):

1. Temukan Kata Sifat Tokoh Anak Perempuan di Teks:
   - Paragraf 1: "The daughter was very lazy (pemalas) and spoiled (manja). She never helped her mother."
   - Paragraf 2: "The girl arrogantly replied... (menjawab dengan sangat sombong/angkuh) 'No, she is my servant!' (Bukan, dia pembantuku!)"

2. Evaluasi Opsi Jawaban:
   - Opsi A: "Arrogant (sombong) and spoiled (manja)" -> Cocok persis dengan teks (BENAR).
   - Opsi B: "Kind-hearted (baik hati) and helpful (suka menolong)" -> Bertolak belakang (SALAH).
   - Opsi C: "Lazy (pemalas) and ungrateful (tidak tahu berterima kasih / durhaka)" -> Tepat menggambarkan anak yang tega menyebut ibu kandungnya sebagai pembantu (BENAR).
   - Opsi D: "Humble (rendah hati) and obedient (penurut)" -> Bertolak belakang (SALAH).

Jawaban yang Tepat: A dan C.`,
  },
  {
    id: 363,
    question: `Read the text below to answer questions 12 and 13.

The Legend of the Crying Stone
Once upon a time, in a small village in Kalimantan, there lived a poor widow and her beautiful daughter. The daughter was very lazy and spoiled. She never helped her mother. One day, they went to the market. The daughter wore her best clothes, while her mother walked behind her carrying a basket. 

On the way, a villager asked the girl, "Who is the old woman behind you? Is she your mother?" The girl arrogantly replied, "No, she is my servant!" The mother's heart was broken. She prayed to God to punish her daughter. Suddenly, the girl's legs started turning into stone. She cried and begged for forgiveness, but it was too late. Her whole body eventually turned into stone, which continued to shed tears.

What lessons can we learn from the story? (Choose TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. We must respect and love our parents.',
      'B. Being beautiful is the most important thing in life.',
      'C. Bad behavior towards parents will bring bad consequences.',
      'D. We should buy expensive clothes when going to the market.',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: false,
    explanation: `Langkah Menarik Pesan Moral (Moral Value):

1. Apa Inti Konflik dan Akhir Cerita?
   Anak perempuan memperlakukan ibunya yang miskin dengan kasar dan durhaka. Akibatnya, doa sang ibu terkabul dan anak tersebut dikutuk menjadi batu menangis selamanya.

2. Tarik Hikmah Kehidupan:
   - Hikmah 1: Kita wajib selalu menghormati dan menyayangi orang tua kita (*We must respect and love our parents*). Maka Opsi A BENAR.
   - Hikmah 2: Perilaku durhaka dan buruk kepada orang tua akan membawa malapetaka atau balasan yang sangat buruk (*Bad behavior towards parents will bring bad consequences*). Maka Opsi C BENAR.
   - Opsi B dan D adalah pesan yang salah dan tidak mendidik.

Jawaban yang Tepat: A dan C.`,
  },

  // --- Konteks 10: Determination (Soal 14) ---
  {
    id: 364,
    question: `Read the expressions below.
1. "I will definitely pass the English exam next week."
2. "I am determined to practice speaking English every day."
3. "Maybe I will go to the beach if I have time."
4. "I don't think I can finish this project today."

Which sentences express strong determination? (Choose TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. Sentence 1',
      'B. Sentence 2',
      'C. Sentence 3',
      'D. Sentence 4',
    ],
    correctAnswers: [0, 1], // A and B
    isHots: false,
    explanation: `Konsep Ungkapan Tekad Kuat (Expressing Strong Determination):

1. Apa itu "Determination"?
   Determination adalah niat yang mantap, tekad bulat tanpa ragu-ragu, dan keyakinan penuh untuk mencapai suatu target.

2. Bedah Kalimat 1 s.d. 4:
   - Kalimat 1: "I will definitely pass..." (Saya PASTI akan lulus ujian bahasa Inggris minggu depan). Kata "definitely" menunjukkan kepastian dan tekad bulat. (BENAR - Opsi A).
   - Kalimat 2: "I am determined to practice..." (Saya BERTEKAD bulat untuk berlatih bicara bahasa Inggris setiap hari). Frasa "am determined to" secara eksplisit menyatakan tekad kuat. (BENAR - Opsi B).
   - Kalimat 3: "Maybe I will go... if I have time." Kata "Maybe" (mungkin) dan "if" (jika) menunjukkan keragu-raguan, bukan tekad kuat. (SALAH).
   - Kalimat 4: "I don't think I can finish..." menunjukkan pesimisme atau rasa tidak mampu. (SALAH).

Jawaban yang Tepat: A dan B.`,
  },

  // --- Konteks 11: Invitation (Soal 15 & 16) ---
  {
    id: 365,
    question: `Read the text below to answer questions 15 and 16.

To: All Class IX Students
You are cordially invited to attend the Graduation Ceremony of SMP Harapan Bangsa.
* Date: Saturday, June 15th, 2024
* Time: 08.00 AM - 11.30 AM
* Venue: School Main Hall
* Dress Code: Traditional Indonesian Batik

Please RSVP to Mrs. Indah (0812-3456-789) by June 10th, 2024.

Based on the invitation, which statements are correct? (Choose TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. The event will be held in the afternoon.',
      'B. The dress code for the ceremony is traditional Batik.',
      'C. The graduation ceremony takes place on a Saturday.',
      'D. Students must RSVP after June 15th, 2024.',
    ],
    correctAnswers: [1, 2], // B and C
    isHots: false,
    explanation: `Langkah Menganalisis Rincian Surat Undangan:

1. Analisis Opsi A:
   Waktu acara: 08.00 AM - 11.30 AM. AM berarti pagi hari (*morning*), bukan siang/sore (*afternoon*). Maka Opsi A SALAH.

2. Analisis Opsi B:
   Pakaian resmi (*Dress Code*): "Traditional Indonesian Batik". Ini persis sama dengan pernyataan. Maka Opsi B BENAR.

3. Analisis Opsi C:
   Hari dan tanggal: "Saturday, June 15th, 2024". Acara memang jatuh pada hari Sabtu (*Saturday*). Maka Opsi C BENAR.

4. Analisis Opsi D:
   RSVP (konfirmasi kehadiran) wajib dilakukan paling lambat 10 Juni 2024 ("by June 10th"), bukan setelah 15 Juni. Maka Opsi D SALAH.

Jawaban yang Tepat: B dan C.`,
  },
  {
    id: 366,
    question: `Read the text below to answer questions 15 and 16.

To: All Class IX Students
You are cordially invited to attend the Graduation Ceremony of SMP Harapan Bangsa.
* Date: Saturday, June 15th, 2024
* Time: 08.00 AM - 11.30 AM
* Venue: School Main Hall
* Dress Code: Traditional Indonesian Batik

Please RSVP to Mrs. Indah (0812-3456-789) by June 10th, 2024.

Who is the invitation addressed to, and where will the event take place? (Choose TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. It is addressed to all Class IX students.',
      'B. It is addressed to Mrs. Indah.',
      'C. The venue is the School Main Hall.',
      'D. The venue is Mrs. Indah\'s house.',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: false,
    explanation: `Langkah Mencari Target Penerima dan Lokasi Acara:

1. Penerima Undangan (Addressee):
   Lihat baris paling atas teks: "To: All Class IX Students" (Kepada: Semua Siswa Kelas IX).
   Undangan ditujukan untuk seluruh murid kelas sembilan. Maka Opsi A BENAR, Opsi B SALAH (Ibu Indah adalah nomor kontak konfirmasi/RSVP).

2. Tempat/Lokasi Acara (Venue):
   Lihat rincian: "Venue: School Main Hall" (Aula Utama Sekolah).
   Maka Opsi C BENAR, Opsi D SALAH.

Jawaban yang Tepat: A dan C.`,
  },

  // --- Konteks 12: Greeting Card (Soal 17) ---
  {
    id: 367,
    question: `Read the greeting card below.

Dear Amanda,
Congratulations on winning the National English Storytelling Competition! Your hard work and dedication have finally paid off. We are incredibly proud of you!

Warm regards,
Your Classmates of Class IX-A

Which statements are true based on the card? (Choose TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. Amanda won a national storytelling competition.',
      'B. The card was sent by Amanda\'s teachers.',
      'C. Amanda\'s classmates feel very proud of her.',
      'D. Amanda failed her English competition.',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: false,
    explanation: `Langkah Memahami Isi Kartu Ucapan Selamat (Congratulation Card):

1. Analisis Opsi A:
   "Amanda won a national storytelling competition."
   Teks menulis: "Congratulations on winning the National English Storytelling Competition!" (Selamat atas kemenangan pada Lomba Bercerita Bahasa Inggris Tingkat Nasional). Maka Opsi A BENAR.

2. Analisis Opsi B:
   "The card was sent by Amanda's teachers."
   Lihat pengirim di bagian bawah kartu: "Your Classmates of Class IX-A" (Teman-teman sekelasmu di kelas IX-A). Pengirimnya adalah teman sekelas, bukan guru. Maka Opsi B SALAH.

3. Analisis Opsi C:
   "Amanda's classmates feel very proud of her."
   Teks menulis: "We are incredibly proud of you!" (Kami luar biasa bangga padamu!). Maka Opsi C BENAR.

4. Analisis Opsi D:
   Amanda menang juara (*won*), bukan gagal (*failed*). Maka Opsi D SALAH.

Jawaban yang Tepat: A dan C.`,
  },

  // --- Konteks 13: Notice (Soal 18) ---
  {
    id: 368,
    question: `Read the notice below.

NOTICE
LABORATORY RULES:
* NO FOOD OR DRINK ALLOWED INSIDE.
* WEAR SAFETY GOGGLES AT ALL TIMES.

What does the notice mean? (Choose TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. Students are permitted to eat snacks inside the laboratory.',
      'B. Students must not bring any food or beverages into the lab.',
      'C. Students are required to wear safety goggles in the lab.',
      'D. Safety goggles are optional for students.',
    ],
    correctAnswers: [1, 2], // B and C
    isHots: false,
    explanation: `Langkah Memahami Larangan dan Kewajiban pada Notice:

1. Aturan Pertama: "NO FOOD OR DRINK ALLOWED INSIDE"
   - Arti: Dilarang membawa makanan atau minuman ke dalam laboratorium.
   - Analisis Opsi B: "Students must not bring any food or beverages into the lab" (Murid tidak boleh membawa makanan atau minuman apa pun ke lab). Maknanya persis sama. Maka Opsi B BENAR.
   - Opsi A salah karena menyatakan murid boleh makan camilan.

2. Aturan Kedua: "WEAR SAFETY GOGGLES AT ALL TIMES"
   - Arti: Wajib memakai kacamata pelindung setiap saat sepanjang waktu.
   - Analisis Opsi C: "Students are required to wear safety goggles in the lab" (Murid diwajibkan memakai kacamata pengaman di lab). Maknanya persis sama. Maka Opsi C BENAR.
   - Opsi D salah karena mengatakan kacamata bersifat pilihan/opsional (*optional*).

Jawaban yang Tepat: B dan C.`,
  },

  // --- Konteks 14: Report Text (Soal 19 & 20) ---
  {
    id: 369,
    question: `Read the text below to answer questions 19 and 20.

Jellyfish
Jellyfish are not actually fish. They are invertebrates, which means they do not have a backbone. They live in the ocean and are found in all ocean waters, from the surface to the deep sea. 

Jellyfish have stomach-like cavities and tentacles. Their tentacles are covered with stinging cells called nematocysts. They use these stings to catch prey and defend themselves. Their bodies are made up of more than 90% water, making them look transparent.

What are the physical characteristics of jellyfish? (Choose TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. They have a strong backbone.',
      'B. Their bodies consist of more than 90% water.',
      'C. They have tentacles with stinging cells.',
      'D. They only live in shallow fresh water.',
    ],
    correctAnswers: [1, 2], // B and C
    isHots: false,
    explanation: `Langkah Mencari Ciri Fisik Ubur-Ubur (Jellyfish):

1. Cek Kalimat Teks:
   - Kalimat di paragraf 2: "Their bodies are made up of more than 90% water, making them look transparent." -> Tubuh mereka tersusun dari lebih dari 90% air (Opsi B BENAR).
   - Kalimat di paragraf 2: "Their tentacles are covered with stinging cells called nematocysts." -> Mereka punya tentakel dengan sel-sel penyengat (Opsi C BENAR).

2. Mengapa Opsi Lain Salah?
   - Opsi A salah karena ubur-ubur tidak punya tulang belakang sama sekali (*they do not have a backbone*).
   - Opsi D salah karena mereka hidup di air laut (*ocean*), bukan air tawar (*fresh water*), dan hidup dari permukaan sampai laut dalam.

Jawaban yang Tepat: B dan C.`,
  },
  {
    id: 370,
    question: `Read the text below to answer questions 19 and 20.

Jellyfish
Jellyfish are not actually fish. They are invertebrates, which means they do not have a backbone. They live in the ocean and are found in all ocean waters, from the surface to the deep sea. 

Jellyfish have stomach-like cavities and tentacles. Their tentacles are covered with stinging cells called nematocysts. They use these stings to catch prey and defend themselves. Their bodies are made up of more than 90% water, making them look transparent.

Based on the report text, why are jellyfish not considered real fish? (Choose TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. Because they do not have a backbone.',
      'B. Because they are invertebrates.',
      'C. Because they live in deep ocean waters.',
      'D. Because they have transparent bodies.',
    ],
    correctAnswers: [0, 1], // A and B
    isHots: false,
    explanation: `Langkah Menemukan Alasan Biologis Berdasarkan Teks:

1. Cari Kalimat: "Jellyfish are not actually fish" (Ubur-ubur sebenarnya bukan ikan):
   Teks langsung memberikan alasannya di kalimat berikutnya:
   "They are invertebrates, which means they do not have a backbone."
   (Mereka adalah hewan invertebrata, yang artinya mereka tidak memiliki tulang belakang).

2. Cocokkan dengan Opsi Jawaban:
   - Alasan 1: Karena tidak punya tulang belakang (*Because they do not have a backbone*). Maka Opsi A BENAR.
   - Alasan 2: Karena tergolong kelompok invertebrata (*Because they are invertebrates*). Maka Opsi B BENAR.
   - Opsi C dan D bukan alasan mengapa mereka tidak tergolong ikan sejati. Ikan asli adalah hewan bertulang belakang (vertebrata).

Jawaban yang Tepat: A dan B.`,
  },

  // --- Konteks 15: Passive Voice (Soal 21) ---
  {
    id: 371,
    question: `Which of the following sentences are written in the correct Passive Voice? (Choose TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. The classroom is cleaned by the students every afternoon.',
      'B. My mother is cooking some fried rice in the kitchen.',
      'C. The novel was written by Andrea Hirata.',
      'D. They have built a new bridge near my house.',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: false,
    explanation: `Konsep Kalimat Pasif (Passive Voice):

1. Rumus Kalimat Pasif:
   Subject (Objek yang dikenai aksi) + to be + Verb 3 (Past Participle) + by Agent.

2. Uji Setiap Kalimat:
   - Kalimat A: "The classroom is cleaned by the students every afternoon."
     Struktur: Subjek "The classroom" + to be "is" + Verb 3 "cleaned" + by Agent "by the students". Artinya: Ruang kelas dibersihkan oleh para murid. Ini kalimat pasif yang BENAR (Opsi A).
   - Kalimat B: "My mother is cooking..."
     Ada to be "is" bertemu Verb-ing "cooking". Ini adalah kalimat aktif Present Continuous (Ibu sedang memasak). Bukan kalimat pasif.
   - Kalimat C: "The novel was written by Andrea Hirata."
     Struktur: Subjek "The novel" + to be lampau "was" + Verb 3 "written" + by Agent "by Andrea Hirata". Artinya: Novel itu ditulis oleh Andrea Hirata. Ini kalimat pasif yang BENAR (Opsi C).
   - Kalimat D: "They have built a new bridge..."
     Ini adalah kalimat aktif Present Perfect (Mereka telah membangun jembatan). Bentuk pasifnya seharusnya: "A new bridge has been built by them".

Jawaban yang Tepat: A dan C.`,
  },

  // --- Konteks 16: Present Perfect Tense (Soal 22) ---
  {
    id: 372,
    question: `Which of the following sentences correctly use the Present Perfect Tense? (Choose TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. I have lived in this city since I was five years old.',
      'B. She has went to the market with her mother.',
      'C. They have already finished their science project.',
      'D. He has write three letters to his pen pal.',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: false,
    explanation: `Konsep Rumus Present Perfect Tense:

1. Rumus Baku:
   Subject + have/has + Verb 3 (Past Participle).
   - I/You/They/We -> memakai "have" + Verb 3.
   - He/She/It -> memakai "has" + Verb 3.

2. Uji Kalimat:
   - Kalimat A: "I have lived in this city since I was five years old."
     Subjek "I" + "have" + Verb 3 "lived". Penggunaan kata "since" (sejak) sangat tepat. Kalimat ini BENAR (Opsi A).
   - Kalimat B: "She has went..."
     Kata "went" adalah Verb 2. Bentuk Verb 3 dari "go" adalah "gone" (go - went - gone). Seharusnya "has gone". Kalimat ini SALAH.
   - Kalimat C: "They have already finished their science project."
     Subjek "They" + "have" + adverb "already" + Verb 3 "finished". Kalimat ini BENAR (Opsi C).
   - Kalimat D: "He has write..."
     Kata "write" masih Verb 1. Bentuk Verb 3 yang benar adalah "written" (write - wrote - written). Seharusnya "has written". Kalimat ini SALAH.

Jawaban yang Tepat: A dan C.`,
  },

  // --- Konteks 17: Conjunction (Soal 23) ---
  {
    id: 373,
    question: `Which sentences use the correct conjunctions to show purpose or contrast? (Choose TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. She studied hard so that she could pass the final exam.',
      'B. Although it was raining heavily, but they went to play football.',
      'C. He woke up early in order to catch the first train.',
      'D. I like coffee, because my sister prefers tea.',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: false,
    explanation: `Konsep Kata Penghubung Tujuan (Purpose) dan Pertentangan (Contrast):

1. Menunjukkan Tujuan (Showing Purpose):
   - Pola 1: "...so that + Subject + Modal (can/could) + Verb 1"
     Contoh di Opsi A: "She studied hard so that she could pass..." (Dia belajar giat AGAR dia bisa lulus...). Penggunaan "so that" di sini tepat dan BENAR.
   - Pola 2: "...in order to + Verb 1"
     Contoh di Opsi C: "He woke up early in order to catch the first train" (Dia bangun pagi-pagi UNTUK mengejar kereta pertama). Penggunaan "in order to" di sini tepat dan BENAR.

2. Mengapa Opsi Lain Salah?
   - Opsi B salah karena menggabungkan dua kata hubung sekaligus secara berlebihan (redundant): "Although... but...". Dalam kaidah bahasa Inggris resmi, jika sudah memakai "Although", tidak boleh lagi memakai "but" di kalimat yang sama.
   - Opsi D salah karena hubungan antara menyukai kopi dan saudara menyukai teh adalah pertentangan (*contrast*), bukan hubungan sebab-akibat (*because*). Seharusnya memakai "while", "whereas", atau "but".

Jawaban yang Tepat: A dan C.`,
  },

  // --- Konteks 18: Continuous Tenses (Soal 24) ---
  {
    id: 374,
    question: `Which of the following sentences correctly use the Continuous Tenses (Present or Past)? (Choose TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. We are studying English grammar at the moment.',
      'B. Yesterday at 7 PM, I am watching my favorite TV show.',
      'C. While my mother was washing the dishes, the phone rang.',
      'D. They was playing basketball when it started to rain.',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: false,
    explanation: `Konsep Rumus Continuous Tenses:

1. Present Continuous:
   Subject + is/am/are + Verb-ing (untuk kegiatan yang sedang berlangsung sekarang).
   - Kalimat A: "We are studying English grammar at the moment."
     Subjek "We" + to be "are" + Verb-ing "studying" + penanda waktu "at the moment" (saat ini). Tata bahasanya sempurna dan BENAR (Opsi A).

2. Past Continuous:
   Subject + was/were + Verb-ing (untuk kegiatan yang sedang berlangsung di masa lampau ketika ada kejadian lain memotong).
   - Kalimat C: "While my mother was washing the dishes, the phone rang."
     Ibu sedang mencuci piring (was washing) ketika telepon tiba-tiba berdering (rang - Verb 2). Kombinasi Past Continuous dan Simple Past ini BENAR (Opsi C).

3. Mengapa Opsi B dan D Salah?
   - Kalimat B salah karena keterangan waktunya adalah kemarin malam ("Yesterday at 7 PM"), tetapi memakai to be sekarang ("am watching"). Seharusnya "was watching".
   - Kalimat D salah karena subjek jamak "They" wajib berpasangan dengan "were", bukan "was" ("They were playing...").

Jawaban yang Tepat: A dan C.`,
  },

  // --- Konteks 19: Conditional Sentence (Soal 25) ---
  {
    id: 375,
    question: `Which of the following are correct Conditional Sentences (If Clause Type 1)? (Choose TWO correct answers)`,
    questionType: 'complex',
    options: [
      'A. If it rains tomorrow, we will cancel our picnic.',
      'B. If I have enough money, I would buy a new laptop.',
      'C. If you study hard, you will pass the English test easily.',
      'D. If she came early, she will meet the principal.',
    ],
    correctAnswers: [0, 2], // A and C
    isHots: false,
    explanation: `Konsep Rumus Conditional Sentence Type 1 (Pengandaian Nyata):

1. Rumus Wajib Type 1:
   If + Simple Present (Verb 1 / s / es), Subject + will + Bare Infinitive (Verb 1).

2. Uji Setiap Kalimat:
   - Kalimat A: "If it rains tomorrow, we will cancel our picnic."
     Klausa If: "it rains" (Simple Present) -> Klausa Hasil: "we will cancel" (will + Verb 1). Rumusnya tepat dan BENAR (Opsi A).
   - Kalimat B: "If I have enough money, I would buy..."
     Salah pasang! Menggabungkan "have" (Present) dengan "would" (Past). Seharusnya "will buy".
   - Kalimat C: "If you study hard, you will pass the English test easily."
     Klausa If: "you study" (Simple Present) -> Klausa Hasil: "you will pass" (will + Verb 1). Rumusnya tepat dan BENAR (Opsi C).
   - Kalimat D: "If she came early, she will meet..."
     Salah pasang! "Came" adalah Verb 2 (Past), tetapi pasangannya memakai "will" (Present). Seharusnya "If she comes... she will..." atau "If she came... she would...".

Jawaban yang Tepat: A dan C.`,
  },
];
