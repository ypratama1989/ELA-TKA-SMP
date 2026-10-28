import { Question } from '../types';

/**
 * Bank Soal Try Out TKA SMP Resmi - IPA Paket 6 (ipa_p6)
 * 25 Soal CBT Komprehensif Berdasarkan Kisi-Kisi Resmi:
 * - Soal 1-8: Pilihan Ganda Standar (Single Choice)
 * - Soal 9-18: Pilihan Ganda Kompleks (Multi-Select)
 * - Soal 19-25: Benar / Salah (True / False)
 * Dilengkapi Evaluasi Kunci Jawaban & Pembahasan Mendalam (Step-by-Step Ramah Siswa)
 */
export const TRYOUT_IPA_PAKET_6: Question[] = [
  // ==========================================
  // BAGIAN I: PILIHAN GANDA STANDAR (SOAL 1 - 8)
  // ==========================================

  // --- Soal 1: Mekanisme Pemuaian Bimetal pada Setrika ---
  {
    id: 601,
    question: `**Stimulus 1: Teknologi Bimetal dan Perubahan Zat**
Setrika listrik otomatis memanfaatkan prinsip pemuaian zat padat untuk mengatur suhu secara konstan. Komponen utamanya adalah bimetal, yaitu dua keping logam dengan koefisien muai panjang berbeda (α_A > α_B) yang dikeling menjadi satu. Ketika setrika mencapai suhu maksimum yang diinginkan, bimetal akan melengkung dan memutuskan aliran listrik (sakelar terbuka).

Berdasarkan Stimulus 1, jika keping bimetal terdiri dari logam A (koefisien muai 2,4 × 10⁻⁵/°C) dan logam B (koefisien muai 1,2 × 10⁻⁵/°C), pernyataan yang paling tepat mengenai mekanisme kerja bimetal saat setrika menjadi sangat panas adalah....`,
    image: '/images/tryout/ipa_p6_q1.PNG',
    imageCaption: 'Stimulus 1: Teknologi Bimetal dan Perubahan Zat',
    questionType: 'single',
    options: [
      'Bimetal melengkung ke arah logam A karena logam A memuai lebih panjang daripada logam B.',
      'Bimetal melengkung ke arah logam B karena logam A memuai lebih panjang daripada logam B.',
      'Bimetal tetap lurus namun ukurannya bertambah panjang secara signifikan sehingga menekan sakelar.',
      'Bimetal melengkung ke arah logam B karena logam B menyusut saat dipanaskan.',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Konsep Kerja Bimetal Step-by-Step:

1. Analogi Sederhana:
   Bayangkan dua orang pelari bergandengan tangan erat. Pelari A melangkah panjang dan cepat (memuai banyak), sedangkan Pelari B melangkah pendek dan lambat (memuai sedikit). Karena tangan mereka terkunci menyatu, langkah panjang Pelari A akan mendorong putar tubuh mereka berbelok ke arah Pelari B!

2. Mengapa Logam Melengkung?
   - Logam A koefisien muainya lebih besar (2,4 × 10⁻⁵/°C).
   - Logam B koefisien muainya lebih kecil (1,2 × 10⁻⁵/°C).
   Saat setrika dipanaskan hingga suhu tinggi, logam A akan memanjang lebih banyak daripada logam B. Karena kedua kepingan direkatkan menyatu, keping A yang lebih panjang akan "mendorong" keping B, sehingga bimetal melengkung ke arah logam B (ke arah logam yang koefisien muainya lebih kecil).

3. Fungsi Pemutus Arus:
   Lengkungan ke arah logam B ini menyebabkan ujung bimetal terangkat dan membuka kontak sakelar listrik, sehingga aliran listrik padam dan suhu setrika tidak menjadi terlalu panas.

Jawaban yang paling tepat adalah Opsi B.`,
  },

  // --- Soal 2: Kalor Peleburan Es ---
  {
    id: 602,
    question: `Sebuah eksperimen dilakukan dengan memanaskan 500 gram es bersuhu -10°C hingga seluruhnya melebur menjadi air bersuhu 0°C. Jika kalor jenis es adalah 2.100 J/kg°C dan kalor lebur es adalah 336.000 J/kg, total kalor yang dibutuhkan dalam proses tersebut adalah....`,
    questionType: 'single',
    options: [
      '10.500 Joule',
      '168.000 Joule',
      '178.500 Joule',
      '189.000 Joule',
    ],
    correctAnswer: 2, // C (178.500 Joule)
    isHots: false,
    explanation: `Langkah Perhitungan Kalor Melebur Es Step-by-Step:

Langkah 1: Catat Data yang Diketahui & Samakan Satuan
- Massa es (m) = 500 gram = 0,5 kg (bagi 1.000 untuk mengubah gram ke kg)
- Suhu awal es (T₁) = -10°C
- Suhu lebur es (T₂) = 0°C
- Kenaikan suhu (ΔT) = 0 - (-10) = 10°C
- Kalor jenis es (c_es) = 2.100 J/kg°C
- Kalor lebur es (L) = 336.000 J/kg

Langkah 2: Menghitung Kalor Tahap 1 (Menaikkan Suhu Es dari -10°C ke 0°C)
Rumus: Q₁ = m × c_es × ΔT
Q₁ = 0,5 kg × 2.100 J/kg°C × 10°C
Q₁ = 10.500 Joule

Langkah 3: Menghitung Kalor Tahap 2 (Meleburkan Es Menjadi Air pada Suhu 0°C)
Pada tahap ini suhu tidak naik (tetap 0°C), kalor murni dipakai untuk mengubah wujud padat ke cair:
Rumus: Q₂ = m × L
Q₂ = 0,5 kg × 336.000 J/kg
Q₂ = 168.000 Joule

Langkah 4: Menghitung Kalor Total yang Dibutuhkan (Q_total)
Q_total = Q₁ + Q₂
Q_total = 10.500 Joule + 168.000 Joule = 178.500 Joule.

Jawaban yang paling tepat adalah Opsi C (178.500 Joule).`,
  },

  // --- Soal 3: Perubahan Kimia vs Fisika ---
  {
    id: 603,
    question: `Perhatikan fenomena perubahan zat berikut:
1) Lilin yang menyala meleleh di sekitar sumbunya.
2) Sumbu lilin yang terbakar menjadi arang.
3) Air laut menguap membentuk kristal garam pada proses penjemuran.
4) Besi pagar yang berkarat akibat terkena air hujan dan udara.

Perubahan kimia ditunjukkan oleh nomor....`,
    questionType: 'single',
    options: [
      '1) dan 2)',
      '1) dan 3)',
      '2) dan 4)',
      '3) dan 4)',
    ],
    correctAnswer: 2, // C (2 dan 4)
    isHots: false,
    explanation: `Membedakan Perubahan Fisika vs Perubahan Kimia Step-by-Step:

1. Kunci Rahasia Perbedaan:
   - Perubahan Fisika: Hanya bentuk, ukuran, atau wujudnya yang berubah. TIDAK terbentuk zat baru dan bisa kembali ke bentuk semula.
   - Perubahan Kimia: Terjadi reaksi yang menghasilkan ZAT BARU dengan sifat berbeda, serta tidak dapat kembali ke wujud semula secara sederhana.

2. Analisis Keempat Fenomena:
   - 1) Lilin meleleh: Parafin padat berubah menjadi parafin cair karena panas. Saat dingin, cairan tersebut memadat kembali menjadi lilin padat. Tidak ada zat baru (Perubahan Fisika).
   - 2) Sumbu lilin terbakar menjadi arang: Terjadi reaksi pembakaran antara benang dengan oksigen yang menghasilkan arang hitam (karbon) serta gas asap CO₂. Arang tidak bisa diubah kembali menjadi sumbu (Perubahan Kimia).
   - 3) Air laut menguap menjadi garam: Air menguap ke udara karena panas matahari dan menyisakan butiran kristal garam dapur (NaCl). Garamnya tetap garam, hanya terpisah dari pelarutnya (Perubahan Fisika).
   - 4) Besi pagar berkarat: Besi murni (Fe) bereaksi dengan air dan oksigen menghasilkan karat besi (Fe₂O₃·xH₂O) yang rapuh dan berwarna cokelat kemerahan. Ini zat baru (Perubahan Kimia).

3. Kesimpulan:
   Perubahan kimia ditunjukkan oleh nomor 2) dan 4).

Jawaban yang paling tepat adalah Opsi C.`,
  },

  // --- Soal 4: Pesawat Sederhana (Bidang Miring) ---
  {
    id: 604,
    question: `**Stimulus 2: Mekanika dan Pesawat Sederhana**
Seorang pekerja pelabuhan memindahkan sebuah peti seberat 1.200 N ke dalam bak truk setinggi 1,5 meter menggunakan papan miring sepanjang 3 meter. Penggunaan bidang miring ini bertujuan untuk memperkecil gaya kuasa yang diperlukan pekerja tersebut.

Berdasarkan Stimulus 2, besar gaya minimal yang harus diberikan oleh pekerja untuk mendorong peti tersebut ke atas bak truk dan keuntungan mekanis bidang miring tersebut adalah....`,
    image: '/images/tryout/ipa_p6_q4.PNG',
    imageCaption: 'Stimulus 2: Mekanika dan Pesawat Sederhana',
    questionType: 'single',
    options: [
      '600 N dan 2',
      '600 N dan 0,5',
      '2.400 N dan 2',
      '2.400 N dan 0,5',
    ],
    correctAnswer: 0, // A (600 N dan 2)
    isHots: false,
    explanation: `Perhitungan Bidang Miring Step-by-Step:

1. Catat Angka yang Diketahui:
   - Berat peti (W) = 1.200 N
   - Ketinggian bak truk (h) = 1,5 meter
   - Panjang lintasan papan miring (s) = 3 meter

2. Menghitung Keuntungan Mekanis (KM):
   Keuntungan mekanis menunjukkan berapa kali lipat tenaga kita diringankan oleh alat tersebut:
   Rumus: KM = s / h
   KM = 3 meter / 1,5 meter = 2.
   (Artinya tenaga yang kita butuhkan menjadi 2 kali lebih ringan!)

3. Menghitung Gaya Dorong Kuasa (F):
   Rumus: F = W / KM
   F = 1.200 N / 2 = 600 Newton.
   (Atau memakai rumus keseimbangan: W × h = F × s ➜ 1.200 × 1,5 = F × 3 ➜ 1.800 = 3F ➜ F = 600 N).

4. Kesimpulan:
   Gaya minimal yang diperlukan pekerja adalah 600 N dengan keuntungan mekanis bernilai 2.

Jawaban yang paling tepat adalah Opsi A.`,
  },

  // --- Soal 5: Energi Kinetik Jatuh Bebas ---
  {
    id: 605,
    question: `Sebuah benda bermassa 4 kg dijatuhkan bebas dari ketinggian 10 meter di atas tanah (g = 10 m/s²). Energi kinetik benda saat berada pada ketinggian 4 meter dari atas tanah adalah....`,
    questionType: 'single',
    options: [
      '160 Joule',
      '240 Joule',
      '400 Joule',
      '560 Joule',
    ],
    correctAnswer: 1, // B (240 Joule)
    isHots: false,
    explanation: `Konsep Kekekalan Energi Mekanik Step-by-Step:

1. Prinsip Utama:
   Energi Mekanik total (EM) tidak pernah hilang. Saat benda jatuh, Energi Potensial (ketinggian) akan berubah menjadi Energi Kinetik (kecepatan gerak).

2. Posisi Puncak (Ketinggian h₁ = 10 meter):
   Saat mula-mula dijatuhkan bebas, benda belum bergerak (kecepatan awal v₁ = 0), sehingga energi kinetiknya nol (EK₁ = 0).
   Seluruh energi benda berupa Energi Potensial:
   EM = EP₁ = m × g × h₁
   EM = 4 kg × 10 m/s² × 10 m = 400 Joule.
   (Energi total 400 Joule ini nilainya selalu KEKAL di setiap titik jatuh).

3. Posisi Saat Ketinggian h₂ = 4 meter:
   Hitung Energi Potensial yang masih tersisa:
   EP₂ = m × g × h₂
   EP₂ = 4 kg × 10 m/s² × 4 m = 160 Joule.

4. Hitung Energi Kinetik pada Ketinggian 4 meter (EK₂):
   EM = EP₂ + EK₂
   400 Joule = 160 Joule + EK₂
   EK₂ = 400 Joule - 160 Joule = 240 Joule!

5. Cara Cepat (Jalan Pintas):
   Energi kinetik yang terbentuk sama dengan energi potensial yang "hilang" karena turun setinggi Δh = 10 m - 4 m = 6 meter:
   EK₂ = m × g × Δh = 4 × 10 × 6 = 240 Joule.

Jawaban yang paling tepat adalah Opsi B (240 Joule).`,
  },

  // --- Soal 6: Hukum II Newton dengan Gaya Gesek ---
  {
    id: 606,
    question: `Mobil mainan bermassa 2 kg ditarik dengan gaya mendatar sebesar 10 N di atas lantai kasar yang memberikan gaya gesek sebesar 2 N. Percepatan yang dialami mobil mainan tersebut adalah....`,
    questionType: 'single',
    options: [
      '2 m/s²',
      '4 m/s²',
      '5 m/s²',
      '6 m/s²',
    ],
    correctAnswer: 1, // B (4 m/s²)
    isHots: false,
    explanation: `Perhitungan Gerak Mobil Mainan Step-by-Step:

1. Identifikasi Arah Gaya yang Bekerja:
   - Gaya tarik orang (F) = 10 N (menarik ke depan).
   - Gaya gesek lantai (f_gesek) = 2 N (selalu berlawanan arah, menghambat ke belakang).
   - Massa mobil mainan (m) = 2 kg.

2. Hitung Gaya Bersih / Resultan Gaya (ΣF):
   Gaya penarik dikurangi gaya penghambat gesekan:
   ΣF = F_tarik - f_gesek
   ΣF = 10 N - 2 N = 8 Newton.

3. Hitung Percepatan (a) Berdasarkan Hukum II Newton:
   Rumus: a = ΣF / m
   a = 8 N / 2 kg = 4 m/s².

4. Artinya:
   Mobil mainan melaju makin cepat dengan pertambahan laju 4 meter per detik pada setiap detiknya.

Jawaban yang paling tepat adalah Opsi B (4 m/s²).`,
  },

  // --- Soal 7: Dinamika Rantai Makanan Sawah ---
  {
    id: 607,
    question: `**Stimulus 3: Ekosistem Sawah dan Keseimbangan Lingkungan**
Di sebuah ekosistem sawah, terdapat jaring-jaring makanan yang melibatkan padi, belalang, katak, ular, burung elang, dan dekomposer. Penggunaan pestisida kimia secara berlebihan oleh petani setempat untuk membasmi belalang ternyata berdampak buruk pada populasi organisme lain.

Berdasarkan Stimulus 3, jika populasi katak mengalami penurunan drastis akibat keracunan pestisida, dampak langsung yang akan terjadi pada ekosistem tersebut adalah....`,
    image: '/images/tryout/ipa_p6_q7.PNG',
    imageCaption: 'Stimulus 3: Ekosistem Sawah dan Keseimbangan Lingkungan',
    questionType: 'single',
    options: [
      'Populasi ular akan meningkat pesat karena kehilangan predatornya.',
      'Populasi belalang akan meningkat pesat karena predator alaminya berkurang.',
      'Produksi padi akan meningkat karena jumlah hama belalang menurun.',
      'Populasi burung elang akan segera punah karena tidak ada makanan sama sekali.',
    ],
    correctAnswer: 1, // B
    isHots: false,
    explanation: `Analisis Jaring-Jaring Makanan Sawah Step-by-Step:

1. Susun Urutan Rantai Makanan:
   Padi (Produsen) ➜ Belalang (Konsumen I) ➜ Katak (Konsumen II) ➜ Ular (Konsumen III) ➜ Burung Elang (Konsumen Puncak).

2. Apa Peran Katak?
   Katak adalah pemangsa (predator) alami dari belalang. Tugas katak di sawah adalah mengendalikan populasi belalang agar tidak membludak.

3. Apa Akibatnya Jika Katak Turun Drastis?
   - Karena katak mati keracunan pestisida, tidak ada lagi yang memburu belalang.
   - Tanpa adanya pemangsa alami, belalang akan leluasa bertelur dan populasinya melonjak pesat (meningkat drastis).
   - Ledakan hama belalang ini selanjutnya akan merusak tanaman padi milik petani.

4. Mengapa Pilihan Lain Salah?
   - Opsi A salah: Ular memakan katak; jika makanan ular (katak) berkurang, populasi ular akan ikut turun, bukan naik.
   - Opsi C salah: Produksi padi justru akan anjlok karena diserang oleh kawanan belalang yang melimpah.
   - Opsi D salah: Elang tidak langsung punah karena elang juga memakan tikus sawah, ayam, atau hewan lainnya.

Jawaban yang paling tepat adalah Opsi B.`,
  },

  // --- Soal 8: Biomagnifikasi Racun pada Rantai Makanan ---
  {
    id: 608,
    question: `Berdasarkan konsep biomagnifikasi pada Stimulus 3, organisme yang akan memiliki konsentrasi akumulasi pestisida tertinggi di dalam tubuhnya adalah....`,
    questionType: 'single',
    options: [
      'Padi',
      'Belalang',
      'Katak',
      'Burung Elang',
    ],
    correctAnswer: 3, // D (Burung Elang)
    isHots: false,
    explanation: `Konsep Biomagnifikasi (Pemekatan Hayati) Step-by-Step:

1. Apa itu Biomagnifikasi?
   Biomagnifikasi adalah peristiwa melipatgandanya kadar zat racun kimia (seperti residu pestisida atau logam berat) pada tubuh makhluk hidup seiring dengan semakin tingginya tingkatan trofik dalam rantai makanan. Racun ini tidak bisa diurai atau dibuang oleh tubuh sehingga tersimpan di jaringan lemak.

2. Mengapa Burung Elang Menampung Racun Paling Banyak?
   - Rumpun padi menyerap sedikit racun pestisida dari tanah.
   - Satu ekor belalang memakan banyak tanaman padi (racun mulai terkumpul).
   - Satu ekor katak memakan puluhan ekor belalang (racun berlipat ganda di tubuh katak).
   - Satu ekor ular memakan puluhan ekor katak (racun semakin pekat di tubuh ular).
   - Burung Elang berada di PUNCAK rantai makanan. Sepanjang hidupnya, elang memakan banyak ular beracun, sehingga seluruh timbunan racun dari trofik di bawahnya terkonsentrasi paling tinggi di dalam tubuh burung elang!

3. Kesimpulan:
   Konsentrasi akumulasi pestisida tertinggi selalu ditemukan pada konsumen puncak (tingkatan trofik tertinggi), yaitu Burung Elang.

Jawaban yang paling tepat adalah Opsi D.`,
  },

  // ==========================================
  // BAGIAN II: PILIHAN GANDA KOMPLEKS (SOAL 9 - 18)
  // ==========================================

  // --- Soal 9: Analisis Aliran Energi Ekosistem Sawah ---
  {
    id: 609,
    question: `Berdasarkan analisis jaring-jaring makanan dan aliran energi pada ekosistem sawah (Stimulus 3), tentukan pernyataan-pernyataan berikut yang benar! (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Padi berperan sebagai produsen yang mengubah energi cahaya menjadi energi kimia melalui fotosintesis di organel kloroplas.',
      'Energi kimia mengalir dari padi ke belalang dengan efisiensi transfer energi sebesar 100%.',
      'Jika ular diburu hingga punah, populasi katak akan meningkat sementara populasi elang akan menurun.',
      'Bakteri pembusuk (dekomposer) berperan mengembalikan unsur hara organik ke tanah agar dapat digunakan kembali oleh padi.',
    ],
    correctAnswers: [0, 2, 3], // Pernyataan 1, 3, dan 4
    isHots: false,
    explanation: `Analisis Pernyataan Aliran Energi Ekosistem Step-by-Step:

1. Pernyataan 1 [BENAR]:
   Padi adalah tanaman hijau autotrof (produsen). Daun padi memiliki kloroplas yang menangkap energi foton cahaya matahari dan meramunya bersama air dan CO₂ menjadi glukosa/energi kimia.

2. Pernyataan 2 [SALAH]:
   Efisiensi transfer energi antar-tingkatan trofik rata-rata hanya sekitar 10% (Hukum 10% Lindeman). Sebagian besar energi (~90%) terbuang ke alam sebagai panas tubuh, keringat, ekskresi kotoran, dan energi untuk bernapas/bergerak. Tidak pernah efisiensinya mencapai 100%!

3. Pernyataan 3 [BENAR]:
   Ular memangsa katak dan dimangsa burung elang. Jika ular diburu habis, pemangsa katak berkurang sehingga katak melonjak naik, sedangkan sumber makanan elang berkurang sehingga populasi elang akan menurun.

4. Pernyataan 4 [BENAR]:
   Dekomposer (bakteri dan jamur tanah) bertugas mengurai bangkai makhluk hidup dan dedaunan busuk menjadi mineral anorganik sederhana penyubur tanah yang diserap kembali oleh akar padi.

Jawaban yang benar adalah Pernyataan 1, 3, dan 4.`,
  },

  // --- Soal 10: Tekanan Hidrostatis Penyelam ---
  {
    id: 610,
    question: `**Stimulus 4: Tekanan Zat dan Sistem Organ Manusia**
Seorang penyelam tradisional menyelam di laut hingga kedalaman 20 meter di bawah permukaan air laut (massa jenis air laut = 1.030 kg/m³, g = 10 m/s²).

Berdasarkan Stimulus 4, pilihlah pernyataan-pernyataan yang benar mengenai tekanan hidrostatis dan dampaknya pada penyelam! (Pilihlah dua atau lebih jawaban yang benar!)`,
    image: '/images/tryout/ipa_p6_q10.PNG',
    imageCaption: 'Stimulus 4: Tekanan Zat dan Sistem Organ Manusia',
    questionType: 'complex',
    options: [
      'Tekanan hidrostatis yang dialami penyelam pada kedalaman 20 m adalah sebesar 206.000 Pa.',
      'Semakin dalam penyelam menyelam, tekanan hidrostatis yang dialami tubuhnya akan semakin kecil.',
      'Tekanan hidrostatis berbanding lurus dengan massa jenis zat cair dan kedalaman dari permukaan air.',
      'Tekanan udara di dalam paru-paru penyelam harus menyesuaikan diri agar tidak kolaps akibat tekanan air dari luar.',
    ],
    correctAnswers: [0, 2, 3], // Pernyataan 1, 3, dan 4
    isHots: false,
    explanation: `Analisis Tekanan Hidrostatis Penyelam Step-by-Step:

1. Pernyataan 1 [BENAR]:
   Hitung tekanan hidrostatis (P_h):
   Rumus: P_h = ρ × g × h
   P_h = 1.030 kg/m³ × 10 m/s² × 20 meter = 206.000 Pascal (Pa).

2. Pernyataan 2 [SALAH]:
   Semakin dalam menyelam (nilai h makin besar), jumlah tumpukan air di atas tubuh penyelam makin berat, sehingga tekanan hidrostatis justru SEMAKIN BESAR, bukan semakin kecil.

3. Pernyataan 3 [BENAR]:
   Berdasarkan rumus P_h = ρ × g × h, tekanan berbanding lurus dengan massa jenis cairan (ρ) dan kedalaman (h). Jika menyelam di cairan yang lebih kental/berat jenisnya tinggi, tekanannya akan semakin berlipat ganda.

4. Pernyataan 4 [BENAR]:
   Tekanan air dari luar meremas rongga dada. Jika tekanan udara di dalam paru-paru tidak seimbang dengan tekanan air luar, paru-paru dapat mengalami penyusutan berbahaya atau kolaps (cedera barotrauma).

Jawaban yang benar adalah Pernyataan 1, 3, dan 4.`,
  },

  // --- Soal 11: Fungsi HCl dan Enzim Lambung ---
  {
    id: 611,
    question: `Di dalam sistem pencernaan manusia, lambung menghasilkan asam klorida (HCl). Manakah fungsi dari HCl dan proses pencernaan yang terjadi di lambung berikut yang benar? (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Membunuh kuman atau bakteri yang masuk bersama makanan.',
      'Mengubah protein menjadi pepton dengan bantuan enzim pepsin.',
      'Mengemulsikan lemak menjadi asam lemak dan gliserol.',
      'Mengaktifkan pepsinogen menjadi pepsin.',
    ],
    correctAnswers: [0, 1, 3], // Pernyataan 1, 2, dan 4
    isHots: false,
    explanation: `Proses Pencernaan di Dalam Lambung Step-by-Step:

1. Peran Asam Klorida (HCl / Asam Lambung):
   - Bersifat sangat asam (pH 1-2) sehingga efektif membunuh mikroba, kuman, dan bakteri patogen yang tertelan bersama makanan (Pernyataan 1 BENAR).
   - Berfungsi sebagai aktivator yang mengubah cairan proenzim pepsinogen yang belum aktif menjadi enzim pepsin aktif (Pernyataan 4 BENAR).

2. Peran Enzim Pepsin:
   - Memecah molekul protein yang berantai panjang menjadi molekul yang lebih pendek yaitu pepton (Pernyataan 2 BENAR).

3. Mengapa Pernyataan 3 Salah?
   - Mengemulsikan lemak adalah tugas dari CAIRAN EMPEDU yang dihasilkan hati dan disalurkan ke usus dua belas jari (duodenum), bukan tugas asam lambung. Pemecahan lemak menjadi asam lemak dan gliserol dilakukan oleh enzim lipase di usus halus.

Jawaban yang benar adalah Pernyataan 1, 2, dan 4.`,
  },

  // --- Soal 12: Faktor Medis Penyakit Maag / Gastritis ---
  {
    id: 612,
    question: `Penyakit maag atau gastritis terjadi karena adanya peradangan pada dinding lambung. Pilihlah faktor-faktor berikut yang secara medis dapat memicu atau memperparah kondisi ini! (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Produksi asam lambung (HCl) yang berlebihan akibat stres atau pola makan tidak teratur.',
      'Infeksi bakteri Helicobacter pylori pada lapisan mukosa lambung.',
      'Terlalu banyak mengonsumsi makanan yang berserat tinggi seperti sayuran hijau.',
      'Konsumsi obat-obatan antiinflamasi nonsteroid (OAINS) dalam jangka panjang tanpa resep dokter.',
    ],
    correctAnswers: [0, 1, 3], // Pernyataan 1, 2, dan 4
    isHots: false,
    explanation: `Faktor Pemicu Gastritis (Maag) Step-by-Step:

1. Mengapa Dinding Lambung Meradang?
   Dinding lambung memiliki lapisan pelindung lendir (mukosa) agar tidak terluka oleh asam kuat HCl. Maag terjadi jika produksi asam melonjak atau lapisan pelindungnya rusak.

2. Analisis Faktor Pemicu:
   - Pola makan tidak teratur & stres: Saat jam makan terlewat tetapi lambung kosong, asam lambung tetap diproduksi dan mengikis dinding lambung kosong. Stres juga merangsang saraf memicu produksi HCl berlebih (Pernyataan 1 BENAR).
   - Bakteri Helicobacter pylori: Bakteri khusus ini dapat menembus dan merusak lapisan lendir mukosa, menyebabkan luka koreng di dinding lambung (Pernyataan 2 BENAR).
   - Obat OAINS (seperti aspirin, ibuprofen): Jika diminum terus-menerus tanpa resep, obat ini menghambat zat prostaglandin yang bertugas memelihara lapisan mukosa lambung (Pernyataan 4 BENAR).
   - Sayuran berserat: Serat justru sangat bagus untuk memelihara kesehatan saluran cerna dan bukan penyebab terjadinya radang maag (Pernyataan 3 SALAH).

Jawaban yang benar adalah Pernyataan 1, 2, dan 4.`,
  },

  // --- Soal 13: Cacat Mata Miopi (Rabun Jauh) ---
  {
    id: 613,
    question: `**Stimulus 5: Getaran, Gelombang, dan Optika**
Seorang siswa SMP kesulitan membaca tulisan di papan tulis yang berjarak 4 meter darinya. Setelah diperiksa oleh dokter spesialis mata, ia didiagnosis menderita miopi (rabun jauh) dan disarankan menggunakan kacamata berlensa cekung (divergen).

Berdasarkan Stimulus 5, pilihlah analisis yang benar mengenai kondisi mata siswa tersebut dan solusinya! (Pilihlah dua atau lebih jawaban yang benar!)`,
    image: '/images/tryout/ipa_p6_q13.PNG',
    imageCaption: 'Stimulus 5: Getaran, Gelombang, dan Optika',
    questionType: 'complex',
    options: [
      'Bayangan benda yang jauh pada mata miopi sebelum dikoreksi jatuh di depan retina.',
      'Lensa cekung bersifat mengumpulkan cahaya (konvergen) sehingga bayangan bergeser ke belakang.',
      'Kacamata berlensa cekung membantu memfokuskan bayangan tepat pada bintik kuning (retina).',
      'Penderita miopi memiliki titik jauh (punctum remotum) yang berjarak terbatas atau lebih dekat (bukan lagi tak terhingga).',
    ],
    correctAnswers: [0, 2, 3], // Pernyataan 1, 3, dan 4
    isHots: false,
    explanation: `Memahami Mata Miopi (Rabun Jauh) Step-by-Step:

1. Mengapa Mata Miopi Kabur Melihat Jauh?
   Bola mata penderita miopi terlalu lonjong ke belakang atau lensa matanya mencembung terlalu tebal. Akibatnya, sinar dari papan tulis dibiaskan terlalu kuat sehingga bayangan jatuh DI DEPAN RETINA sebelum sampai ke bintik kuning retina (Pernyataan 1 BENAR).

2. Karakteristik Lensa Cekung:
   Lensa cekung (lensa kacamata minus/negatif) memiliki sifat MENYEBARKAN CAHAYA (divergen), BUKAN mengumpulkan cahaya (konvergen). Berkas cahaya disebarkan sedikit sebelum masuk ke mata, sehingga bayangan dapat digeser mundur tepat jatuh di bintik kuning retina (Pernyataan 3 BENAR, Pernyataan 2 SALAH).

3. Jarak Pandang Titik Jauh (Punctum Remotum / PR):
   Mata normal mampu melihat benda sangat jauh (tak terhingga / ∞) tanpa berakomodasi. Namun penderita miopi titik jauhnya terbatas pada jarak tertentu (misalnya hanya jelas maksimal sampai jarak 2 atau 3 meter saja) (Pernyataan 4 BENAR).

Jawaban yang benar adalah Pernyataan 1, 3, dan 4.`,
  },

  // --- Soal 14: Karakteristik Gelombang Transversal Tali ---
  {
    id: 614,
    question: `Sebuah gelombang transversal merambat pada seutas tali. Dalam waktu 4 sekon, terbentuk 8 bukit dan 8 lembah gelombang yang menempuh jarak total 16 meter. Pilihlah pernyataan yang benar mengenai parameter gelombang tersebut! (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Frekuensi gelombang tersebut adalah 2 Hz.',
      'Panjang gelombang (λ) tersebut adalah 4 meter.',
      'Cepat rambat gelombang tersebut adalah 4 m/s.',
      'Periode gelombang tersebut adalah 0,5 sekon.',
    ],
    correctAnswers: [0, 2, 3], // Pernyataan 1, 3, dan 4
    isHots: false,
    explanation: `Perhitungan Gelombang Tali Step-by-Step:

1. Hitung Jumlah Gelombang (n):
   Ingat konsep dasar: 1 gelombang penuh = 1 bukit + 1 lembah.
   Jika ada 8 bukit dan 8 lembah, maka jumlah gelombang: n = 8 gelombang.

2. Hitung Frekuensi (f):
   Frekuensi adalah banyaknya gelombang dalam satu sekon.
   Rumus: f = n / t
   f = 8 gelombang / 4 sekon = 2 Hz (Pernyataan 1 BENAR).

3. Hitung Periode (T):
   Periode adalah waktu untuk menempuh satu gelombang penuh.
   Rumus: T = 1 / f = 1 / 2 = 0,5 sekon (Pernyataan 4 BENAR).

4. Hitung Panjang Gelombang (λ):
   Panjang gelombang adalah panjang untuk satu gelombang penuh.
   Jarak total (s) = 16 meter untuk 8 gelombang.
   Rumus: λ = s / n
   λ = 16 meter / 8 = 2 meter.
   (Pernyataan 2 SALAH karena tertulis 4 meter).

5. Hitung Cepat Rambat Gelombang (v):
   Rumus: v = λ × f
   v = 2 meter × 2 Hz = 4 m/s (Pernyataan 3 BENAR).

Jawaban yang benar adalah Pernyataan 1, 3, dan 4.`,
  },

  // --- Soal 15: Pembiasan Cahaya dari Udara ke Air ---
  {
    id: 615,
    question: `Ketika seberkas cahaya merambat dari medium udara masuk ke dalam medium air, terjadi fenomena pembiasan. Manakah pernyataan berikut yang benar mengenai fenomena tersebut? (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Cahaya dibiaskan mendekati garis normal karena kerapatan optik air lebih besar daripada udara.',
      'Kecepatan rambat cahaya di dalam air lebih kecil dibandingkan di udara.',
      'Frekuensi cahaya berubah saat berpindah dari udara ke air.',
      'Panjang gelombang cahaya memendek saat memasuki air.',
    ],
    correctAnswers: [0, 1, 3], // Pernyataan 1, 2, dan 4
    isHots: false,
    explanation: `Hukum Pembiasan Cahaya (Snellius) Step-by-Step:

1. Pembelokan Mendekati Garis Normal:
   Kerapatan optik air lebih besar daripada udara (indeks bias n_air = 1,33 > n_udara = 1). Ketika cahaya melintas dari medium kurang rapat (udara) menuju medium lebih rapat (air), jalannya sinar cahaya akan "tertekan" membelok MENDEKATI GARIS NORMAL (Pernyataan 1 BENAR).

2. Kecepatan Rambat Cahaya Melambat:
   Partikel molekul air tersusun jauh lebih padat daripada molekul udara. Cahaya yang melintas di air mengalami hambatan sehingga kecepatannya berkurang (dari ~300.000 km/s di udara menjadi ~225.000 km/s di air) (Pernyataan 2 BENAR).

3. Frekuensi Cahaya Bersifat KEKAL:
   Warna atau frekuensi gelombang cahaya ditentukan oleh sumber cahaya aslinya dan TIDAK AKAN PERNAH BERUBAH meskipun melewati berbagai medium yang berbeda (Pernyataan 3 SALAH).

4. Panjang Gelombang Memendek:
   Sesuai persamaan dasar gelombang: v = λ × f.
   Karena frekuensi (f) bernilai tetap dan kecepatannya (v) melambat di dalam air, maka panjang gelombangnya (λ) harus ikut memendek (Pernyataan 4 BENAR).

Jawaban yang benar adalah Pernyataan 1, 2, dan 4.`,
  },

  // --- Soal 16: Distilasi Bertingkat Minyak Bumi ---
  {
    id: 616,
    question: `**Stimulus 6: Kimia Industri dan Struktur Bumi**
Minyak bumi mentah (crude oil) merupakan campuran kompleks dari berbagai senyawa hidrokarbon. Untuk memanfaatkannya, minyak bumi harus dipisahkan menjadi fraksi-fraksinya melalui proses distilasi bertingkat (fraksionasi) di menara distilasi berdasarkan perbedaan titik didihnya.

Berdasarkan Stimulus 6, tentukan pernyataan yang benar mengenai proses pemisahan fraksi minyak bumi! (Pilihlah dua atau lebih jawaban yang benar!)`,
    image: '/images/tryout/ipa_p6_q16.PNG',
    imageCaption: 'Stimulus 6: Kimia Industri dan Struktur Bumi',
    questionType: 'complex',
    options: [
      'Fraksi dengan titik didih paling rendah (seperti gas LPG) akan keluar dari bagian paling atas menara distilasi.',
      'Aspal memiliki titik didih paling tinggi sehingga mengendap di bagian paling bawah menara.',
      'Distilasi bertingkat merupakan metode pemisahan campuran berdasarkan perbedaan kelarutan zat.',
      'Bensin (premium/pertalite) memiliki rantai karbon yang lebih panjang dan titik didih lebih tinggi daripada solar.',
    ],
    correctAnswers: [0, 1], // Pernyataan 1 dan 2
    isHots: false,
    explanation: `Prinsip Pemisahan Minyak Bumi di Menara Fraksionasi Step-by-Step:

1. Cara Kerja Menara Distilasi:
   Minyak mentah dipanaskan di dasar tungku hingga menguap. Uap panas naik ke atas menara yang semakin ke atas suhunya semakin dingin. Senyawa yang titik didihnya tinggi akan mengembun lebih cepat di bagian bawah, sedangkan senyawa yang titik didihnya rendah terus terbang naik ke puncak menara.

2. Urutan Fraksi dari Atas ke Bawah:
   - Paling Atas (Puncak): Gas LPG (C₁-C₄), rantai paling pendek, titik didih sangat rendah (< 20°C) sehingga tetap berupa gas di suhu ruang (Pernyataan 1 BENAR).
   - Tengah Atas: Bensin / Petrol (C₅-C₁₂), titik didih berkisar 30°C - 180°C.
   - Tengah Bawah: Solar / Diesel (C₁₅-C₂₀), titik didih berkisar 250°C - 350°C. Bensin memiliki rantai lebih pendek dan titik didih lebih rendah dibanding solar (Pernyataan 4 SALAH).
   - Paling Bawah (Dasar): Residu aspal / bitumen (C₇₀+), rantai hidrokarbon terpanjang dengan titik didih tertinggi (> 500°C), tidak menguap dan mengendap di dasar menara (Pernyataan 2 BENAR).

3. Mengapa Pernyataan 3 Salah?
   Distilasi bertingkat didasarkan pada PERBEDAAN TITIK DIDIH komponen senyawa, bukan perbedaan kelarutan zat.

Jawaban yang benar adalah Pernyataan 1 dan 2.`,
  },

  // --- Soal 17: Karakteristik dan Dinamika Litosfer ---
  {
    id: 617,
    question: `Litosfer bumi terdiri dari kerak bumi dan bagian atas mantel yang bersifat kaku. Pilihlah pernyataan yang benar mengenai karakteristik dan dinamika litosfer! (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Kerak samudra memiliki massa jenis yang lebih besar dibandingkan kerak benua.',
      'Arus konveksi yang menggerakkan lempeng tektonik berada di lapisan astenosfer.',
      'Pertemuan dua lempeng yang saling menjauh disebut batas konvergen.',
      'Sesar San Andreas merupakan contoh batas lempeng transform (sesar mendatar).',
    ],
    correctAnswers: [0, 1, 3], // Pernyataan 1, 2, dan 4
    isHots: false,
    explanation: `Karakteristik dan Dinamika Litosfer Step-by-Step:

1. Pernyataan 1 [BENAR]:
   Kerak samudra tersusun oleh batuan basaltik gelap yang padat kaya unsur silikon dan magnesium (SIMA) dengan massa jenis ~3,0 g/cm³. Sedangkan kerak benua didominasi batuan granit (SIAL) dengan massa jenis lebih ringan yaitu ~2,7 g/cm³. Saat bertabrakan, kerak samudra yang lebih berat selalu menunjam ke bawah kerak benua.

2. Pernyataan 2 [BENAR]:
   Lempeng tektonik padat terapung di atas lapisan astenosfer (bagian mantel atas yang bersifat plastis/semi-cair kental). Perbedaan suhu memicu arus konveksi panas magma di astenosfer yang menyeret lempeng bergerak perlahan.

3. Pernyataan 3 [SALAH]:
   - Pertemuan lempeng yang SALING MENDEKAT / bertumbukan disebut BATAS KONVERGEN.
   - Pertemuan lempeng yang SALING MENJAUH disebut BATAS DIVERGEN (contoh: punggung tengah Samudra Atlantik).

4. Pernyataan 4 [BENAR]:
   Sesar San Andreas di California adalah contoh patahan transform (batas sesar mendatar), di mana Lempeng Pasifik dan Lempeng Amerika Utara bergesekan menyamping secara horizontal.

Jawaban yang benar adalah Pernyataan 1, 2, dan 4.`,
  },

  // --- Soal 18: Mitigasi Bencana Gempa Bumi di Gedung Bertingkat ---
  {
    id: 618,
    question: `Gempa bumi tektonik sering terjadi di wilayah Indonesia karena terletak di pertemuan tiga lempeng aktif. Upaya mitigasi bencana gempa bumi yang tepat saat berada di dalam gedung bertingkat adalah.... (Pilihlah dua atau lebih jawaban yang benar!)`,
    questionType: 'complex',
    options: [
      'Segera berlari menuju lift untuk turun ke lantai dasar secepat mungkin.',
      'Berlindung di bawah meja yang kokoh untuk menghindari reruntuhan material.',
      'Jika memungkinkan, segera menuju ke area terbuka yang jauh dari bangunan dan tiang listrik.',
      'Berdiri di dekat jendela kaca besar untuk melihat situasi di luar gedung.',
    ],
    correctAnswers: [1, 2], // Pernyataan 2 dan 3
    isHots: false,
    explanation: `Prosedur Mitigasi dan Penyelamatan Diri saat Gempa Bumi Step-by-Step:

1. Langkah Tepat Menyelamatkan Diri:
   - Melindungi Diri dengan Prinsip Drop, Cover, Hold on: Segera merunduk dan berlindung di bawah kolong meja kokoh sambil memegangi kaki meja untuk melindungi kepala dan leher dari reruntuhan plafon atau lampu jatuh (Pernyataan 2 BENAR).
   - Menuju Tempat Terbuka: Bila telah memungkinkan dan guncangan reda, lakukan evakuasi melalui tangga darurat menuju ke lapangan terbuka luas yang jauh dari bahaya kaca jatuh, baliho roboh, atau kabel listrik putus (Pernyataan 3 BENAR).

2. Kesalahan Fatal yang Harus Dihindari:
   - Jangan Menggunakan Lift: Jalur listrik gedung sangat rawan padam mendadak saat gempa atau rel lift bergeser, sehingga penumpang akan terjebak maut di dalam sangkar lift (Pernyataan 1 SALAH).
   - Jauhi Dinding Kaca dan Jendela: Kaca gedung sangat mudah pecah meledak berkeping-keping akibat gelombang getaran gempa dan serpihannya dapat melukai tubuh (Pernyataan 4 SALAH).

Jawaban yang benar adalah Pernyataan 2 dan 3.`,
  },

  // ==========================================
  // BAGIAN III: BENAR / SALAH (SOAL 19 - 25)
  // ==========================================

  // --- Soal 19: Persilangan Intermediet F2 Rasio Fenotipe ---
  {
    id: 619,
    question: `**Stimulus 7: Pewarisan Sifat dan Bioteknologi**
Tanaman bunga pukul empat (Mirabilis jalapa) berbunga merah (MM) disilangkan dengan tanaman berbunga putih (mm). Sifat warna merah bersifat intermediet terhadap putih, sehingga keturunan F1 seluruhnya berbunga merah muda (Mm).

Pernyataan:
Pada persilangan sesama F1 (Mm × Mm), rasio fenotipe keturunan F2 yang diperoleh adalah 1 Merah : 2 Merah Muda : 1 Putih.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    image: '/images/tryout/ipa_p6_q19.PNG',
    imageCaption: 'Stimulus 7: Pewarisan Sifat dan Bioteknologi',
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Persilangan Sifat Intermediet Step-by-Step:

1. Apa itu Intermediet?
   Intermediet (kodominan) adalah pewarisan sifat di mana kedua alel sama kuat sehingga tidak saling menutupi. Warna merah (M) bercampur dengan putih (m) memunculkan warna perantara yaitu merah muda (Mm).

2. Persilangan Sesama F1:
   Parental: Mm (Merah Muda) × Mm (Merah Muda)
   Gamet: M dan m dari masing-masing induk.

3. Kotak Punnett Generasi F2:
   - M × M ➜ MM = Berbunga Merah (1 bagian / 25%)
   - M × m ➜ Mm = Berbunga Merah Muda (2 bagian / 50%)
   - m × m ➜ mm = Berbunga Putih (1 bagian / 25%)

4. Rasio Fenotipe F2:
   1 Merah : 2 Merah Muda : 1 Putih.

Kesimpulan: Pernyataan pada soal sepenuhnya BENAR. Jawaban yang tepat adalah BENAR.`,
  },

  // --- Soal 20: Peluang Bunga Merah Homozigot F2 ---
  {
    id: 620,
    question: `Berdasarkan Stimulus 7, tentukan apakah pernyataan berikut BENAR atau SALAH!

Pernyataan:
Persentase peluang diperolehnya tanaman berbunga merah homozigot (MM) pada generasi F2 adalah sebesar 50%.`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 1, // SALAH
    isHots: false,
    explanation: `Perhitungan Peluang Genotipe Generasi F2 Step-by-Step:

1. Distribusi Genotipe F2 dari Persilangan Mm × Mm:
   - MM (Merah homozigot) = 1 dari 4 kemungkinan = 1/4 × 100% = 25%.
   - Mm (Merah muda heterozigot) = 2 dari 4 kemungkinan = 2/4 × 100% = 50%.
   - mm (Putih homozigot) = 1 dari 4 kemungkinan = 1/4 × 100% = 25%.

2. Analisis Pernyataan Soal:
   Pernyataan pada soal menyatakan peluang tanaman merah homozigot (MM) adalah 50%.
   Padahal, peluang MM yang sebenarnya adalah hanya 25%! Angka 50% adalah peluang untuk tanaman merah muda heterozigot (Mm).

Kesimpulan: Pernyataan tersebut SALAH. Jawaban yang tepat adalah SALAH.`,
  },

  // --- Soal 21: Tanaman Transgenik dan Dampak Gene Flow ---
  {
    id: 621,
    question: `Berdasarkan Stimulus 7, tentukan apakah pernyataan berikut BENAR atau SALAH!

Pernyataan:
Penyisipan gen asing (transgen) pada tanaman transgenik bertujuan untuk meningkatkan resistensi terhadap hama, namun berpotensi mengganggu keseimbangan ekosistem jika terjadi penyerbukan silang dengan kerabat liarnya (gene flow).`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Konsep Bioteknologi Modern dan Rekayasa Genetika Step-by-Step:

1. Apa Tujuan Dibuatnya Tanaman Transgenik?
   Ilmuwan bioteknologi menyisipkan gen unggul (misalnya gen Bt dari bakteri tanah ke tanaman jagung atau kedelai) agar tanaman mampu menghasilkan racun alami bagi ulat penggerek, sehingga tanaman tahan hama tanpa harus disemprot pestisida kimiawi secara berlebihan.

2. Apa Risiko Ekologis Gene Flow (Aliran Gen)?
   Serbuk sari tanaman transgenik dapat terbang tertiup angin atau dibawa serangga penyerbuk ke ladang liar di sekitarnya. Jika serbuk sari ini membuahi tumbuhan gulma liar yang masih satu famili, gulma liar tersebut bisa ikut mewarisi gen kebal hama dan kebal herbisida. Akibatnya muncullah "superweeds" (gulma super) yang tidak bisa dibasmi dan merusak tatanan keanekaragaman hayati ekosistem.

Kesimpulan: Pernyataan pada soal 100% tepat secara ilmiah. Jawaban yang tepat adalah BENAR.`,
  },

  // --- Soal 22: Hambatan Luar Rangkaian Campuran ---
  {
    id: 622,
    question: `**Stimulus 8: Kelistrikan dalam Kehidupan**
Sebuah rangkaian listrik campuran terdiri dari tiga buah hambatan masing-masing R₁ = 4 Ω, R₂ = 6 Ω, dan R₃ = 6 Ω. Hambatan R₂ dan R₃ dirangkai secara paralel, kemudian dirangkai seri dengan R₁. Rangkaian tersebut dihubungkan dengan sumber tegangan baterai sebesar 14 Volt yang memiliki hambatan dalam r = 1 Ω.

Pernyataan:
Hambatan pengganti total (hambatan luar) dari kombinasi ketiga resistor tersebut adalah 7 Ω.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    image: '/images/tryout/ipa_p6_q22.PNG',
    imageCaption: 'Stimulus 8: Kelistrikan dalam Kehidupan',
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Perhitungan Hambatan Luar Pengganti Step-by-Step:

Langkah 1: Hitung Hambatan Pengganti Paralel (Rp) untuk R₂ dan R₃
Rumus rangkaian paralel:
1/Rp = 1/R₂ + 1/R₃
1/Rp = 1/6 + 1/6 = 2/6
Rp = 6 / 2 = 3 Ω.

Langkah 2: Gabungkan Seri dengan R₁ untuk Mendapat Hambatan Luar Total (R_luar)
Karena cabang paralel tersambung seri dengan R₁:
R_luar = R₁ + Rp
R_luar = 4 Ω + 3 Ω = 7 Ω.

Kesimpulan:
Nilai hambatan luar pengganti rangkaian memang bernilai tepat 7 Ω.
Jawaban yang tepat adalah BENAR.`,
  },

  // --- Soal 23: Kuat Arus Utama Rangkaian Tertutup ---
  {
    id: 623,
    question: `Berdasarkan Stimulus 8, tentukan apakah pernyataan berikut BENAR atau SALAH!

Pernyataan:
Kuat arus utama yang mengalir keluar dari sumber tegangan baterai adalah sebesar 2 Ampere.`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 1, // SALAH
    isHots: false,
    explanation: `Perhitungan Arus Utama Rangkaian Tertutup Step-by-Step:

1. Kumpulkan Komponen Rangkaian:
   - GGL sumber tegangan baterai (E) = 14 Volt
   - Hambatan luar (R_luar) = 7 Ω (hasil dari Soal 22)
   - Hambatan dalam baterai (r) = 1 Ω

2. Hitung Hambatan Total Keseluruhan (R_total):
   R_total = R_luar + r
   R_total = 7 Ω + 1 Ω = 8 Ω.

3. Hitung Kuat Arus Utama (I) dengan Hukum Ohm Rangkaian Tertutup:
   Rumus: I = E / (R_luar + r)
   I = 14 Volt / 8 Ω = 1,75 Ampere.

4. Analisis Pernyataan Soal:
   Pernyataan pada soal menyatakan arus utama bernilai 2 Ampere, padahal perhitungan fisis yang sebenarnya adalah 1,75 Ampere.

Kesimpulan: Pernyataan tersebut SALAH. Jawaban yang tepat adalah SALAH.`,
  },

  // --- Soal 24: Tegangan Jepit Baterai ---
  {
    id: 624,
    question: `Berdasarkan Stimulus 8, tentukan apakah pernyataan berikut BENAR atau SALAH!

Pernyataan:
Tegangan jepit pada ujung-ujung rangkaian luar saat arus mengalir adalah sebesar 12,25 Volt.`,
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 0, // BENAR
    isHots: false,
    explanation: `Perhitungan Tegangan Jepit Baterai Step-by-Step:

1. Apa itu Tegangan Jepit (V_j)?
   Tegangan jepit adalah beda potensial nyata yang diterima oleh rangkaian komponen di luar baterai ketika arus sedang mengalir. Nilainya sedikit lebih kecil dari GGL baterai karena sebagian tegangan terpakai untuk melewati hambatan dalam baterai itu sendiri.

2. Cara 1: Menggunakan Hukum Ohm pada Hambatan Luar
   Rumus: V_j = I × R_luar
   - Arus yang mengalir (I) = 1,75 Ampere
   - Hambatan luar (R_luar) = 7 Ω
   V_j = 1,75 A × 7 Ω = 12,25 Volt!

3. Cara 2: GGL Dikurangi Penurunan Tegangan Dalam
   Rumus: V_j = E - (I × r)
   V_j = 14 V - (1,75 A × 1 Ω)
   V_j = 14 V - 1,75 V = 12,25 Volt!

Kesimpulan:
Tegangan jepit pada ujung rangkaian luar memang tepat sebesar 12,25 Volt.
Jawaban yang tepat adalah BENAR.`,
  },

  // --- Soal 25: Karakteristik dan Lokasi Aurora ---
  {
    id: 625,
    question: `**Stimulus 9: Kemagnetan dan Fenomena Antariksa**
Bumi bertindak sebagai magnet raksasa dengan medan magnet bumi (magnetosfer) yang melindungi bumi dari radiasi kosmik dan angin matahari. Ketika partikel bermuatan dari angin matahari berinteraksi dengan medan magnet bumi dan menembus atmosfer di daerah kutub, terbentuklah fenomena cahaya indah yang dikenal sebagai aurora.

Pernyataan:
Fenomena aurora lebih sering terlihat di daerah khatulistiwa (ekuator) karena kekuatan medan magnet bumi paling kuat berada di wilayah tersebut.

Tentukan apakah pernyataan di atas BENAR atau SALAH!`,
    image: '/images/tryout/ipa_p6_q25.PNG',
    imageCaption: 'Stimulus 9: Kemagnetan dan Fenomena Antariksa',
    questionType: 'true_false',
    options: ['BENAR', 'SALAH'],
    correctAnswer: 1, // SALAH
    isHots: false,
    explanation: `Konsep Medan Magnet Bumi dan Fenomena Aurora Step-by-Step:

1. Di Mana Aurora Terjadi?
   Aurora (seperti Aurora Borealis di belahan bumi utara dan Aurora Australis di selatan) HANYA dapat disaksikan di wilayah sekitar KUTUB BUMI (seperti Alaska, Norwegia, Finlandia, Antarktika), BUKAN di daerah khatulistiwa (seperti Indonesia).

2. Mengapa Aurora Hanya Muncul di Kutub?
   Garis-garis gaya medan magnet bumi keluar dan masuk secara vertikal tegak lurus di bagian KUTUB bumi. Ketika partikel angin matahari menghantam bumi, medan magnet mengalirkan dan memusatkan partikel-partikel bermuatan tersebut ke arah kutub.

3. Pendaran Cahaya Atmosfer:
   Di atmosfer wilayah kutub, partikel matahari bertabrakan dengan atom gas oksigen dan nitrogen, menghasilkan eksitasi atom yang memancarkan pendaran cahaya warna-warni memukau di langit malam. Di daerah khatulistiwa, medan magnet membentang sejajar horizontal sehingga partikel matahari terhalau dan tidak bisa menembus masuk.

Kesimpulan: Pernyataan bahwa aurora lebih sering terlihat di daerah khatulistiwa adalah SALAH. Jawaban yang tepat adalah SALAH.`,
  },
];
