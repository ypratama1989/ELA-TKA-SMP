import json
import os

topics_data = [
    {
        "index": 1,
        "title": "Perbandingan & Sifat-Sifat Bilangan",
        "category": "Bilangan - Bilangan Real",
        "kisi_kisi": "Memahami, mengaplikasikan, dan bernalar terkait perbandingan dan sifat-sifat bilangan (bulat, rasional, irasional, berpangkat, akar, notasi ilmiah).",
        "questions": [
            {
                "q": "Urutan bilangan dari yang memiliki nilai terkecil hingga terbesar untuk: 0,75; 2/3; 65%; dan 5/8 adalah ...",
                "options": [
                    "5/8 &lt; 65% &lt; 2/3 &lt; 0,75",
                    "5/8 &lt; 2/3 &lt; 65% &lt; 0,75",
                    "65% &lt; 5/8 &lt; 2/3 &lt; 0,75",
                    "2/3 &lt; 5/8 &lt; 65% &lt; 0,75"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 5/8 &lt; 65% &lt; 2/3 &lt; 0,75</b><br><br><b>Langkah Penyelesaian:</b><br>Untuk membandingkan beberapa bentuk bilangan, ubah semuanya ke bentuk desimal hingga 3 angka di belakang koma:<br>&bull; 0,75 = 0,750<br>&bull; 2/3 &approx; 0,667<br>&bull; 65% = 65/100 = 0,650<br>&bull; 5/8 = 0,625<br>Urutan dari terkecil: 0,625 (5/8) &lt; 0,650 (65%) &lt; 0,667 (2/3) &lt; 0,750 (0,75)."
            },
            {
                "q": "Bentuk notasi ilmiah (bentuk baku) dari bilangan 0,00000458 adalah ...",
                "options": [
                    "4,58 &times; 10⁻⁶",
                    "4,58 &times; 10⁻⁵",
                    "45,8 &times; 10⁻⁷",
                    "4,58 &times; 10⁶"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 4,58 &times; 10⁻⁶</b><br><br><b>Konsep Notasi Ilmiah:</b><br>Bentuk baku dinyatakan dengan <i>a &times; 10ⁿ</i> dengan syarat <b>1 &le; a &lt; 10</b> dan <i>n</i> merupakan bilangan bulat.<br>&bull; Geser tanda koma ke kanan melewati 6 angka nol dan angka 4: dari 0,00000458 menjadi 4,58.<br>&bull; Karena nilai aslinya sangat kecil (&lt; 1) dan tanda koma digeser ke kanan sebanyak 6 kali, maka pangkatnya adalah negatif 6 (10⁻⁶).<br>Jadi bentuk bakunya adalah <b>4,58 &times; 10⁻⁶</b>."
            },
            {
                "q": "Persamaan (15 &times; 28) + (15 &times; 12) = 15 &times; (28 + 12) = 15 &times; 40 = 600 merupakan penerapan dari sifat ...",
                "options": [
                    "Distributif perkalian terhadap penjumlahan",
                    "Komutatif perkalian",
                    "Asosiatif penjumlahan",
                    "Identitas perkalian"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: Distributif perkalian terhadap penjumlahan</b><br><br><b>Konsep Sifat Operasi:</b><br>&bull; <b>Sifat Distributif (Penyebaran):</b> a &times; (b + c) = (a &times; b) + (a &times; c). Sifat ini sangat mempermudah perhitungan karena 28 + 12 menghasilkan angka bulat 40.<br>&bull; Sifat Komutatif: pertukaran letak (a &times; b = b &times; a).<br>&bull; Sifat Asosiatif: pengelompokan kurung ((a + b) + c = a + (b + c)).<br>&bull; Sifat Identitas: perkalian dengan 1 menghasilkan bilangan itu sendiri."
            },
            {
                "q": "Hasil penyederhanaan dari bilangan berpangkat (2³ &times; 2⁵) &divide; 2⁴ adalah ...",
                "options": [
                    "16",
                    "32",
                    "8",
                    "64"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 16</b><br><br><b>Aturan Eksponen / Bilangan Berpangkat:</b><br>1. Perkalian basis sama: aᵐ &times; aⁿ = aᵐ⁺ⁿ &rarr; 2³ &times; 2⁵ = 2³⁺⁵ = 2⁸.<br>2. Pembagian basis sama: aᵐ &divide; aⁿ = aᵐ⁻ⁿ &rarr; 2⁸ &divide; 2⁴ = 2⁸⁻⁴ = 2⁴.<br>3. Hitung nilainya: 2⁴ = 2 &times; 2 &times; 2 &times; 2 = <b>16</b>."
            },
            {
                "q": "Manakah di antara bilangan-bilangan berikut yang merupakan kelompok bilangan rasional?",
                "options": [
                    "-5; 3/4; 0,333...; dan &radic;49",
                    "&radic;2; &radic;3; &radic;5; dan &pi;",
                    "&pi;; 0,101001000...; dan &radic;7",
                    "&radic;8; 3/7; 0,5; dan &radic;11"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: -5; 3/4; 0,333...; dan &radic;49</b><br><br><b>Konsep Bilangan Rasional vs Irasional:</b><br>&bull; <b>Bilangan Rasional</b> adalah bilangan yang dapat dinyatakan dalam bentuk pecahan biasa a/b dengan a, b bilangan bulat dan b &ne; 0.<br>&bull; -5 = -5/1 (rasional)<br>&bull; 3/4 (rasional)<br>&bull; 0,333... = 1/3 (desimal berulang, rasional)<br>&bull; &radic;49 = 7 = 7/1 (akar kuadrat bulat sempurna, rasional).<br>&bull; Sementara &radic;2, &radic;3, &pi; adalah bilangan irasional karena desimalnya tak berujung dan tak berpola."
            }
        ]
    },
    {
        "index": 2,
        "title": "Operasi Aritmetika pada Bilangan",
        "category": "Bilangan - Bilangan Real",
        "kisi_kisi": "Memahami dan mengaplikasikan operasi aritmetika campuran (KABATAKU), bentuk akar, serta masalah kontekstual pada bilangan bulat dan pecahan.",
        "questions": [
            {
                "q": "Hasil dari operasi hitung campuran: 24 &divide; (-3) + (-5) &times; (-4) - 12 adalah ...",
                "options": [
                    "0",
                    "4",
                    "8",
                    "-12"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 0</b><br><br><b>Langkah Penyelesaian (KABATAKU):</b><br>Dahulukan operasi pembagian dan perkalian sebelum penjumlahan dan pengurangan:<br>1. Pembagian: 24 &divide; (-3) = -8<br>2. Perkalian: (-5) &times; (-4) = +20 (negatif kali negatif = positif)<br>3. Gabungkan: (-8) + 20 - 12<br>4. -8 + 20 = 12<br>5. 12 - 12 = <b>0</b>."
            },
            {
                "q": "Hasil penyederhanaan dari operasi bentuk akar: &radic;75 - &radic;12 + &radic;27 adalah ...",
                "options": [
                    "6&radic;3",
                    "5&radic;3",
                    "4&radic;3",
                    "3&radic;3"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 6&radic;3</b><br><br><b>Langkah Penyelesaian:</b><br>Faktorkan bilangan di dalam akar menjadi perkalian bilangan kuadrat sempurna:<br>&bull; &radic;75 = &radic;(25 &times; 3) = 5&radic;3<br>&bull; &radic;12 = &radic;(4 &times; 3) = 2&radic;3<br>&bull; &radic;27 = &radic;(9 &times; 3) = 3&radic;3<br>Lakukan penjumlahan dan pengurangan suku sejenis:<br>5&radic;3 - 2&radic;3 + 3&radic;3 = (5 - 2 + 3)&radic;3 = <b>6&radic;3</b>."
            },
            {
                "q": "Hasil dari 2&frac12; + 1&frac14; &times; 4/5 adalah ...",
                "options": [
                    "3&frac12; (atau 7/2)",
                    "3 (atau 6/2)",
                    "4 (atau 8/2)",
                    "2&frac34; (atau 11/4)"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 3&frac12; (atau 7/2)</b><br><br><b>Langkah Penyelesaian:</b><br>1. Ubah pecahan campuran ke pecahan biasa:<br>&bull; 2&frac12; = 5/2<br>&bull; 1&frac14; = 5/4<br>2. Dahulukan perkalian: 5/4 &times; 4/5 = 20/20 = 1.<br>3. Jumlahkan: 5/2 + 1 = 5/2 + 2/2 = 7/2 = <b>3&frac12;</b> (atau 3,5)."
            },
            {
                "q": "Suhu di dalam ruang pendingin mula-mula adalah -4&deg;C. Ketika listrik padam, suhu naik sebesar 3&deg;C setiap 15 menit. Berapakah suhu di dalam ruangan tersebut setelah listrik padam selama 1 jam?",
                "options": [
                    "8&deg;C",
                    "12&deg;C",
                    "5&deg;C",
                    "-1&deg;C"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 8&deg;C</b><br><br><b>Langkah Penyelesaian:</b><br>1. Waktu padam = 1 jam = 60 menit.<br>2. Frekuensi kenaikan suhu = 60 menit &divide; 15 menit = 4 kali.<br>3. Total kenaikan suhu = 4 &times; 3&deg;C = 12&deg;C.<br>4. Suhu akhir = Suhu awal + kenaikan = -4&deg;C + 12&deg;C = <b>8&deg;C</b>."
            },
            {
                "q": "Dalam suatu kompetisi matematika dengan 50 butir soal, setiap jawaban benar diberi skor 4, jawaban salah diberi skor -2, dan tidak dijawab diberi skor -1. Ahmad menjawab 42 butir soal dan 35 di antaranya benar. Total skor yang diperoleh Ahmad adalah ...",
                "options": [
                    "118",
                    "126",
                    "112",
                    "105"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 118</b><br><br><b>Langkah Penyelesaian:</b><br>&bull; Soal benar = 35 &rarr; Skor: 35 &times; 4 = +140<br>&bull; Soal salah = 42 - 35 = 7 &rarr; Skor: 7 &times; (-2) = -14<br>&bull; Tidak dijawab = 50 - 42 = 8 &rarr; Skor: 8 &times; (-1) = -8<br>&bull; Total skor = 140 - 14 - 8 = 140 - 22 = <b>118</b>."
            }
        ]
    },
    {
        "index": 3,
        "title": "Estimasi / Perkiraan Hasil Perhitungan",
        "category": "Bilangan - Bilangan Real",
        "kisi_kisi": "Memahami dan mengaplikasikan estimasi atau perkiraan hasil perhitungan pada operasi hitung kontekstual dan desimal.",
        "questions": [
            {
                "q": "Estimasi terbaik untuk hasil perhitungan (19,8 &times; 4,1) &divide; 1,9 adalah ...",
                "options": [
                    "40",
                    "20",
                    "80",
                    "10"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 40</b><br><br><b>Langkah Penyelesaian (Taksiran Terbaik):</b><br>Bulatkan setiap bilangan ke bilangan bulat terdekat:<br>&bull; 19,8 dibulatkan menjadi 20 (karena desimalnya 0,8 &ge; 0,5)<br>&bull; 4,1 dibulatkan menjadi 4 (karena desimalnya 0,1 &lt; 0,5)<br>&bull; 1,9 dibulatkan menjadi 2 (karena desimalnya 0,9 &ge; 0,5)<br>Hitung estimasi: (20 &times; 4) &divide; 2 = 80 &divide; 2 = <b>40</b>."
            },
            {
                "q": "Seorang petani berhasil memanen 4.870 kg beras. Jika beras tersebut akan dimasukkan ke dalam karung berkapasitas 48 kg, taksiran terdekat banyak karung yang dibutuhkan adalah ...",
                "options": [
                    "100 karung",
                    "80 karung",
                    "120 karung",
                    "150 karung"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 100 karung</b><br><br><b>Langkah Penyelesaian:</b><br>&bull; Bulatkan hasil panen 4.870 kg ke ribuan atau ratusan terdekat yang kompatibel: &approx; 5.000 kg.<br>&bull; Bulatkan kapasitas karung 48 kg ke puluhan terdekat: &approx; 50 kg.<br>&bull; Taksiran jumlah karung = 5.000 &divide; 50 = <b>100 karung</b>."
            },
            {
                "q": "Taksiran hasil perkalian 49 &times; 21 ke puluhan terdekat adalah ...",
                "options": [
                    "1.000",
                    "800",
                    "1.200",
                    "900"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 1.000</b><br><br><b>Langkah Penyelesaian:</b><br>&bull; 49 dibulatkan ke puluhan terdekat menjadi 50.<br>&bull; 21 dibulatkan ke puluhan terdekat menjadi 20.<br>&bull; Hasil taksiran: 50 &times; 20 = <b>1.000</b>."
            },
            {
                "q": "Estimasi hasil pembagian 81,2 &divide; 8,9 dengan cara membulatkan masing-masing ke satuan terdekat adalah ...",
                "options": [
                    "9",
                    "8",
                    "10",
                    "7"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 9</b><br><br><b>Langkah Penyelesaian:</b><br>&bull; 81,2 dibulatkan ke satuan terdekat menjadi 81.<br>&bull; 8,9 dibulatkan ke satuan terdekat menjadi 9.<br>&bull; Estimasi: 81 &divide; 9 = <b>9</b>."
            },
            {
                "q": "Ibu membeli 3 barang di supermarket dengan harga Rp24.850, Rp49.200, dan Rp75.900. Taksiran total belanjaan Ibu jika masing-masing dibulatkan ke ribuan terdekat adalah ...",
                "options": [
                    "Rp150.000",
                    "Rp140.000",
                    "Rp160.000",
                    "Rp145.000"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: Rp150.000</b><br><br><b>Langkah Penyelesaian:</b><br>&bull; Rp24.850 dibulatkan ke ribuan terdekat menjadi Rp25.000<br>&bull; Rp49.200 dibulatkan ke ribuan terdekat menjadi Rp49.000<br>&bull; Rp75.900 dibulatkan ke ribuan terdekat menjadi Rp76.000<br>&bull; Total taksiran = Rp25.000 + Rp49.000 + Rp76.000 = <b>Rp150.000</b>."
            }
        ]
    },
    {
        "index": 4,
        "title": "Faktorisasi Prima Bilangan Asli",
        "category": "Bilangan - Bilangan Real",
        "kisi_kisi": "Memahami dan mengaplikasikan faktorisasi prima, KPK, dan FPB pada permasalahan matematika dan kontekstual.",
        "questions": [
            {
                "q": "Faktorisasi prima dari bilangan 360 dalam bentuk perpangkatan adalah ...",
                "options": [
                    "2³ &times; 3² &times; 5",
                    "2² &times; 3³ &times; 5",
                    "2⁴ &times; 3 &times; 5",
                    "2³ &times; 3 &times; 5²"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 2³ &times; 3² &times; 5</b><br><br><b>Langkah Pohon Faktor:</b><br>&bull; 360 &divide; 2 = 180<br>&bull; 180 &divide; 2 = 90<br>&bull; 90 &divide; 2 = 45<br>&bull; 45 &divide; 3 = 15<br>&bull; 15 &divide; 3 = 5 (bilangan prima)<br>Faktor prima: terdapat angka 2 sebanyak 3 buah, angka 3 sebanyak 2 buah, dan angka 5 sebanyak 1 buah.<br>Maka faktorisasi primanya adalah <b>2³ &times; 3² &times; 5</b>."
            },
            {
                "q": "KPK dan FPB dari bilangan 48 dan 72 berturut-turut adalah ...",
                "options": [
                    "144 dan 24",
                    "144 dan 12",
                    "288 dan 24",
                    "72 dan 24"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 144 dan 24</b><br><br><b>Langkah Penyelesaian:</b><br>&bull; 48 = 2⁴ &times; 3<br>&bull; 72 = 2³ &times; 3²<br><b>KPK:</b> Ambil semua faktor dengan pangkat terbesar &rarr; 2⁴ &times; 3² = 16 &times; 9 = <b>144</b>.<br><b>FPB:</b> Ambil faktor sekutu dengan pangkat terkecil &rarr; 2³ &times; 3 = 8 &times; 3 = <b>24</b>."
            },
            {
                "q": "Ibu memiliki 36 buah apel dan 48 buah jeruk yang akan dibagikan ke dalam kantong plastik dengan jumlah setiap jenis buah sama banyak di setiap kantong. Banyak kantong plastik paling banyak yang dapat dibuat Ibu adalah ...",
                "options": [
                    "12 kantong",
                    "6 kantong",
                    "8 kantong",
                    "24 kantong"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 12 kantong</b><br><br><b>Konsep Penerapan FPB:</b><br>Membagikan benda ke dalam kelompok dalam jumlah sama banyak mencari <b>FPB</b>.<br>&bull; 36 = 2² &times; 3²<br>&bull; 48 = 2⁴ &times; 3<br>&bull; FPB(36, 48) = 2² &times; 3 = 4 &times; 3 = <b>12 kantong</b>.<br>Setiap kantong akan berisi 3 apel (36 &divide; 12) dan 4 jeruk (48 &divide; 12)."
            },
            {
                "q": "Lampu A menyala setiap 6 detik sekali dan Lampu B menyala setiap 8 detik sekali. Jika kedua lampu menyala bersamaan pada pukul 08.00, pada detik ke berapa kedua lampu akan menyala bersamaan kembali untuk pertama kalinya?",
                "options": [
                    "24 detik",
                    "48 detik",
                    "14 detik",
                    "36 detik"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 24 detik</b><br><br><b>Konsep Penerapan KPK:</b><br>Peristiwa yang berulang secara berkala dan mencari waktu bersamaan berikutnya menggunakan <b>KPK</b>.<br>&bull; Kelipatan 6: 6, 12, 18, <b>24</b>, 30, ...<br>&bull; Kelipatan 8: 8, 16, <b>24</b>, 32, ...<br>KPK(6, 8) = <b>24 detik</b>."
            },
            {
                "q": "Banyaknya bilangan prima yang terletak di antara angka 20 dan 40 adalah ...",
                "options": [
                    "4 bilangan (23, 29, 31, 37)",
                    "3 bilangan (23, 29, 31)",
                    "5 bilangan (23, 29, 31, 37, 39)",
                    "2 bilangan (29, 31)"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 4 bilangan (23, 29, 31, 37)</b><br><br><b>Analisis Bilangan Prima:</b><br>Bilangan antara 20 dan 40 yang hanya habis dibagi 1 dan dirinya sendiri adalah:<br>&bull; 23 (prima)<br>&bull; 29 (prima)<br>&bull; 31 (prima)<br>&bull; 37 (prima)<br><i>Catatan: 21 (3&times;7), 25 (5&times;5), 27 (3&times;9), 33 (3&times;11), 35 (5&times;7), 39 (3&times;13) bukan prima.</i><br>Totalnya ada <b>4 bilangan</b>."
            }
        ]
    },
    {
        "index": 5,
        "title": "Rasio (Skala, Proporsi & Laju Perubahan)",
        "category": "Bilangan - Bilangan Real",
        "kisi_kisi": "Memahami dan mengaplikasikan konsep rasio, skala peta, laju perubahan kecepatan dan satuan debit.",
        "questions": [
            {
                "q": "Bentuk paling sederhana dari rasio waktu 45 menit terhadap 2 jam adalah ...",
                "options": [
                    "3 : 8",
                    "3 : 4",
                    "9 : 20",
                    "5 : 12"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 3 : 8</b><br><br><b>Langkah Penyelesaian:</b><br>1. Samakan satuannya ke menit: 2 jam = 2 &times; 60 = 120 menit.<br>2. Rasio: 45 : 120.<br>3. Sederhanakan dengan membagi kedua bilangan dengan FPB-nya (yaitu 15):<br>&bull; 45 &divide; 15 = 3<br>&bull; 120 &divide; 15 = 8<br>Rasio paling sederhana adalah <b>3 : 8</b>."
            },
            {
                "q": "Jarak kota A ke kota B pada peta berskala 1 : 1.500.000 adalah 4 cm. Jarak sebenarnya kedua kota tersebut adalah ...",
                "options": [
                    "60 km",
                    "6 km",
                    "600 km",
                    "45 km"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 60 km</b><br><br><b>Langkah Penyelesaian:</b><br>&bull; Jarak sebenarnya = Jarak pada peta &times; Skala<br>&bull; Jarak sebenarnya = 4 cm &times; 1.500.000 = 6.000.000 cm.<br>&bull; Konversi cm ke km (dibagi 100.000): 6.000.000 &divide; 100.000 = <b>60 km</b>."
            },
            {
                "q": "Jarak sebenarnya antara dua pulau adalah 180 km. Jika kedua pulau digambar pada peta dengan jarak 6 cm, skala peta tersebut adalah ...",
                "options": [
                    "1 : 3.000.000",
                    "1 : 300.000",
                    "1 : 30.000.000",
                    "1 : 1.800.000"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 1 : 3.000.000</b><br><br><b>Langkah Penyelesaian:</b><br>&bull; Jarak sebenarnya = 180 km = 180 &times; 100.000 = 18.000.000 cm.<br>&bull; Skala = Jarak pada peta : Jarak sebenarnya<br>&bull; Skala = 6 cm : 18.000.000 cm<br>&bull; Bagi kedua ruas dengan 6: 1 : <b>3.000.000</b>."
            },
            {
                "q": "Sebuah mobil melaju menempuh jarak 72 km dalam waktu 1 jam. Laju kecepatan rata-rata mobil tersebut jika dinyatakan dalam satuan meter per detik (m/s) adalah ...",
                "options": [
                    "20 m/s",
                    "25 m/s",
                    "15 m/s",
                    "30 m/s"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 20 m/s</b><br><br><b>Langkah Konversi Satuan:</b><br>&bull; 72 km = 72 &times; 1.000 m = 72.000 m.<br>&bull; 1 jam = 3.600 detik.<br>&bull; Kecepatan = 72.000 m &divide; 3.600 s = <b>20 m/s</b>.<br><i>Tips cepat: dari km/jam ke m/s cukup dibagi 3,6 (72 &divide; 3,6 = 20 m/s).</i>"
            },
            {
                "q": "Sebuah pipa air mampu mengalirkan 120 liter air dalam waktu 4 menit. Debit air yang mengalir pada pipa tersebut adalah ...",
                "options": [
                    "30 liter/menit (atau 0,5 liter/detik)",
                    "40 liter/menit",
                    "25 liter/menit",
                    "50 liter/menit"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 30 liter/menit (atau 0,5 liter/detik)</b><br><br><b>Langkah Penyelesaian:</b><br>&bull; Rumus Debit = Volume &divide; Waktu<br>&bull; Debit = 120 liter &divide; 4 menit = <b>30 liter/menit</b>.<br>&bull; Jika dikonversi ke liter/detik: 30 liter &divide; 60 detik = 0,5 liter/detik."
            }
        ]
    },
    {
        "index": 6,
        "title": "Perbandingan Senilai & Berbalik Nilai",
        "category": "Bilangan - Bilangan Real",
        "kisi_kisi": "Menyelesaikan masalah perbandingan senilai (harga/bensin) dan perbandingan berbalik nilai (pekerja/waktu proyek).",
        "questions": [
            {
                "q": "Harga 5 kg gula pasir adalah Rp75.000. Harga 8 kg gula pasir yang sama adalah ...",
                "options": [
                    "Rp120.000",
                    "Rp110.000",
                    "Rp125.000",
                    "Rp100.000"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: Rp120.000</b><br><br><b>Perbandingan Senilai:</b><br>&bull; Harga per kg = Rp75.000 &divide; 5 = Rp15.000.<br>&bull; Harga 8 kg = 8 &times; Rp15.000 = <b>Rp120.000</b>."
            },
            {
                "q": "Suatu pekerjaan pembangunan jembatan dapat diselesaikan oleh 12 pekerja dalam waktu 20 hari. Jika pekerjaan tersebut ditargetkan selesai dalam waktu 15 hari, banyak pekerja yang harus DITAMBAHKAN adalah ...",
                "options": [
                    "4 orang",
                    "16 orang",
                    "6 orang",
                    "8 orang"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 4 orang</b><br><br><b>Perbandingan Berbalik Nilai:</b><br>Jumlah pekerja dan waktu berbanding terbalik: <i>P₁ &times; W₁ = P₂ &times; W₂</i>.<br>&bull; 12 &times; 20 = P₂ &times; 15<br>&bull; 240 = 15 &times; P₂ &rarr; P₂ = 240 &divide; 15 = 16 pekerja.<br>&bull; Pekerja yang harus <b>ditambahkan</b> = 16 - 12 = <b>4 orang</b>."
            },
            {
                "q": "Di antara hubungan dua besaran berikut, manakah yang merupakan contoh perbandingan BERBALIK NILAI?",
                "options": [
                    "Kecepatan rata-rata kendaraan dengan waktu tempuh untuk jarak tetap",
                    "Jumlah liter bensin dengan jarak tempuh yang dapat dicapai",
                    "Banyak barang yang dibeli dengan total uang yang dibayarkan",
                    "Lama waktu bekerja dengan jumlah upah yang diterima"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: Kecepatan rata-rata kendaraan dengan waktu tempuh untuk jarak tetap</b><br><br><b>Konsep:</b><br>&bull; <b>Perbandingan Berbalik Nilai:</b> Jika besaran satu bertambah, besaran pasangannya justru berkurang (semakin ngebut/cepat mobil melaju, maka waktu tempuh perjalanan semakin sedikit/singkat).<br>&bull; Opsi lainnya adalah perbandingan senilai (semakin banyak bensin, semakin jauh jarak tempuh)."
            },
            {
                "q": "Persediaan pakan untuk 20 ekor sapi cukup untuk 18 hari. Jika peternak membeli lagi 4 ekor sapi, persediaan pakan tersebut akan habis dalam waktu ...",
                "options": [
                    "15 hari",
                    "16 hari",
                    "12 hari",
                    "14 hari"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 15 hari</b><br><br><b>Perbandingan Berbalik Nilai:</b><br>&bull; Sapi awal = 20 ekor, waktu = 18 hari.<br>&bull; Sapi sekarang = 20 + 4 = 24 ekor.<br>&bull; 20 &times; 18 = 24 &times; W₂<br>&bull; 360 = 24 &times; W₂ &rarr; W₂ = 360 &divide; 24 = <b>15 hari</b>."
            },
            {
                "q": "Sebuah mobil membutuhkan 6 liter bensin untuk menempuh jarak 72 km. Berapa liter bensin yang dibutuhkan untuk menempuh jarak 180 km?",
                "options": [
                    "15 liter",
                    "12 liter",
                    "18 liter",
                    "20 liter"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 15 liter</b><br><br><b>Perbandingan Senilai:</b><br>&bull; Konsumsi bensin = 72 km &divide; 6 liter = 12 km/liter.<br>&bull; Bensin untuk 180 km = 180 &divide; 12 = <b>15 liter</b>."
            }
        ]
    },
    {
        "index": 7,
        "title": "Persamaan Linear Satu Variabel (PLSV)",
        "category": "Aljabar - Persamaan & Pertidaksamaan Linier",
        "kisi_kisi": "Menyelesaikan persamaan linear satu variabel dan aplikasi pemecahan masalah kontekstual.",
        "questions": [
            {
                "q": "Nilai x yang memenuhi persamaan 3(x - 2) + 5 = 2(2x + 1) adalah ...",
                "options": [
                    "-3",
                    "3",
                    "-1",
                    "1"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: -3</b><br><br><b>Langkah Penyelesaian:</b><br>1. Buka kurung dengan sifat distributif: 3x - 6 + 5 = 4x + 2<br>2. Sederhanakan ruas kiri: 3x - 1 = 4x + 2<br>3. Pindahkan suku bervariabel ke ruas kiri: 3x - 4x = 2 + 1<br>4. -x = 3 &rarr; <b>x = -3</b>."
            },
            {
                "q": "Jika 2x - 7 = 3x + 1, maka nilai dari x + 5 adalah ...",
                "options": [
                    "-3",
                    "-8",
                    "5",
                    "8"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: -3</b><br><br><b>Langkah Penyelesaian:</b><br>1. 2x - 3x = 1 + 7<br>2. -x = 8 &rarr; x = -8.<br>3. Substitusi ke ekspresi x + 5 = -8 + 5 = <b>-3</b>."
            },
            {
                "q": "Penyelesaian dari persamaan pecahan (2x - 1)/3 = (x + 4)/2 adalah ...",
                "options": [
                    "14",
                    "12",
                    "10",
                    "8"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 14</b><br><br><b>Langkah Penyelesaian:</b><br>Kalikan silang kedua ruas:<br>2 &times; (2x - 1) = 3 &times; (x + 4)<br>4x - 2 = 3x + 12<br>4x - 3x = 12 + 2 &rarr; <b>x = 14</b>."
            },
            {
                "q": "Umur Ayah saat ini adalah 3 kali umur Budi. Lima tahun yang lalu, jumlah umur mereka adalah 50 tahun. Umur Budi saat ini adalah ...",
                "options": [
                    "15 tahun",
                    "12 tahun",
                    "18 tahun",
                    "20 tahun"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 15 tahun</b><br><br><b>Model Matematika:</b><br>Misal umur Budi saat ini = x, maka umur Ayah = 3x.<br>Lima tahun yang lalu: (x - 5) + (3x - 5) = 50<br>4x - 10 = 50 &rarr; 4x = 60 &rarr; <b>x = 15 tahun</b>."
            },
            {
                "q": "Sebuah persegi panjang mempunyai panjang (2x + 3) cm dan lebar (x + 1) cm. Jika keliling persegi panjang tersebut 38 cm, maka luas persegi panjang tersebut adalah ...",
                "options": [
                    "78 cm²",
                    "84 cm²",
                    "65 cm²",
                    "90 cm²"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 78 cm²</b><br><br><b>Langkah Penyelesaian:</b><br>1. Keliling = 2(p + l) &rarr; 2[(2x + 3) + (x + 1)] = 38<br>2. 2(3x + 4) = 38 &rarr; 3x + 4 = 19 &rarr; 3x = 15 &rarr; x = 5.<br>3. Panjang = 2(5) + 3 = 13 cm, Lebar = 5 + 1 = 6 cm.<br>4. Luas = 13 &times; 6 = <b>78 cm²</b>."
            }
        ]
    },
    {
        "index": 8,
        "title": "Pertidaksamaan Linear Satu Variabel (PtLSV)",
        "category": "Aljabar - Persamaan & Pertidaksamaan Linier",
        "kisi_kisi": "Menyelesaikan pertidaksamaan linear satu variabel dan memodelkan batasan kontekstual.",
        "questions": [
            {
                "q": "Himpunan penyelesaian dari 2x - 3 &le; 5x + 9 dengan x bilangan bulat adalah ...",
                "options": [
                    "{-4, -3, -2, -1, ...}",
                    "{-5, -6, -7, ...}",
                    "{... -6, -5, -4}",
                    "{-3, -2, -1, 0, ...}"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: {-4, -3, -2, -1, ...}</b><br><br><b>Langkah Penyelesaian:</b><br>2x - 5x &le; 9 + 3<br>-3x &le; 12<br><b>Ingat:</b> Jika kedua ruas dibagi bilangan negatif (-3), tanda pertidaksamaan WAJIB DIBALIK dari &le; menjadi &ge;.<br>x &ge; -4.<br>Himpunan penyelesaian: <b>{-4, -3, -2, -1, ...}</b>."
            },
            {
                "q": "Penyelesaian dari pertidaksamaan &frac12;(x - 4) &gt; &frac13;(x + 2) adalah ...",
                "options": [
                    "x &gt; 16",
                    "x &lt; 16",
                    "x &gt; 12",
                    "x &gt; 8"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: x &gt; 16</b><br><br><b>Langkah Penyelesaian:</b><br>Kalikan kedua ruas dengan KPK dari 2 dan 3 yaitu 6:<br>6 &times; &frac12;(x - 4) &gt; 6 &times; &frac13;(x + 2)<br>3(x - 4) &gt; 2(x + 2)<br>3x - 12 &gt; 2x + 4<br>3x - 2x &gt; 4 + 12 &rarr; <b>x &gt; 16</b>."
            },
            {
                "q": "Nilai x yang memenuhi pertidaksamaan -3x + 7 &gt; -8 adalah ...",
                "options": [
                    "x &lt; 5",
                    "x &gt; 5",
                    "x &lt; -5",
                    "x &gt; -5"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: x &lt; 5</b><br><br><b>Langkah Penyelesaian:</b><br>-3x &gt; -8 - 7<br>-3x &gt; -15<br>Bagi kedua ruas dengan -3 dan balik tandanya: <b>x &lt; 5</b>."
            },
            {
                "q": "Sebuah mobil lift pengangkut barang memiliki daya angkut maksimal 650 kg. Jika operator lift memiliki berat 70 kg dan setiap kotak barang yang akan diangkut memiliki berat 40 kg, maka banyaknya kotak maksimal (k) yang boleh diangkut sekaligus dalam satu kali perjalanan adalah ...",
                "options": [
                    "14 kotak",
                    "15 kotak",
                    "16 kotak",
                    "13 kotak"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 14 kotak</b><br><br><b>Model PtLSV:</b><br>Berat operator + (banyak kotak &times; berat kotak) &le; Daya angkut<br>70 + 40k &le; 650<br>40k &le; 580<br>k &le; 580 &divide; 40 &rarr; k &le; 14,5.<br>Karena banyak kotak harus bilangan bulat utuh, maka maksimal adalah <b>14 kotak</b>."
            },
            {
                "q": "Nilai ujian matematika siswa SMP dinyatakan lulus jika nilai rata-rata dari tiga kali ujian minimal 75. Nilai dua ujian pertama Doni adalah 72 dan 78. Nilai ujian ketiga (x) yang harus diperoleh Doni agar lulus adalah ...",
                "options": [
                    "x &ge; 75",
                    "x &ge; 70",
                    "x &ge; 80",
                    "x &gt; 75"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: x &ge; 75</b><br><br><b>Langkah Penyelesaian:</b><br>(72 + 78 + x) &divide; 3 &ge; 75<br>150 + x &ge; 225<br>x &ge; 225 - 150 &rarr; <b>x &ge; 75</b>."
            }
        ]
    },
    {
        "index": 9,
        "title": "Sistem Persamaan Linear Dua Variabel (SPLDV)",
        "category": "Aljabar - Persamaan & Pertidaksamaan Linier",
        "kisi_kisi": "Menyelesaikan SPLDV menggunakan eliminasi/substitusi dan pemecahan masalah kontekstual.",
        "questions": [
            {
                "q": "Harga 2 buku dan 3 pensil adalah Rp19.000. Harga 3 buku dan 1 pensil adalah Rp25.000. Harga 1 buku dan 1 pensil adalah ...",
                "options": [
                    "Rp10.000",
                    "Rp9.000",
                    "Rp11.000",
                    "Rp12.000"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: Rp10.000</b><br><br><b>Langkah Penyelesaian (Eliminasi):</b><br>Misal buku = x, pensil = y.<br>Persamaan 1: 2x + 3y = 19.000<br>Persamaan 2: 3x + y = 25.000 &rarr; kalikan 3: 9x + 3y = 75.000<br>Kurangkan Persamaan 2 baru dengan Persamaan 1:<br>(9x - 2x) = 75.000 - 19.000 &rarr; 7x = 56.000 &rarr; x = 8.000.<br>Substitusi x = 8.000 ke pers. 2: 3(8.000) + y = 25.000 &rarr; y = 1.000.<br>Harga 1 buku + 1 pensil = 8.000 + 1.000 = <b>Rp10.000</b>."
            },
            {
                "q": "Penyelesaian sistem persamaan x + y = 7 dan 2x - y = 8 adalah x₀ dan y₀. Nilai dari 2x₀ - 3y₀ adalah ...",
                "options": [
                    "4",
                    "7",
                    "10",
                    "2"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 4</b><br><br><b>Langkah Penyelesaian:</b><br>Jumlahkan kedua persamaan:<br>(x + y) + (2x - y) = 7 + 8<br>3x = 15 &rarr; x₀ = 5.<br>Substitusi x₀ = 5 ke x + y = 7: 5 + y = 7 &rarr; y₀ = 2.<br>Nilai 2x₀ - 3y₀ = 2(5) - 3(2) = 10 - 6 = <b>4</b>."
            },
            {
                "q": "Keliling sebuah kebun berbentuk persegi panjang adalah 48 meter. Jika panjangnya 6 meter lebih panjang dari lebarnya, maka luas kebun tersebut adalah ...",
                "options": [
                    "135 m²",
                    "144 m²",
                    "120 m²",
                    "150 m²"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 135 m²</b><br><br><b>SPLDV:</b><br>1. 2(p + l) = 48 &rarr; p + l = 24<br>2. p - l = 6<br>Jumlahkan: 2p = 30 &rarr; p = 15 meter.<br>Substitusi: 15 + l = 24 &rarr; l = 9 meter.<br>Luas = p &times; l = 15 &times; 9 = <b>135 m²</b>."
            },
            {
                "q": "Di sebuah tempat parkir terdapat 40 kendaraan yang terdiri dari sepeda motor dan mobil. Jika jumlah roda seluruhnya ada 110 roda, banyak mobil di tempat parkir tersebut adalah ...",
                "options": [
                    "15 mobil",
                    "25 mobil",
                    "20 mobil",
                    "10 mobil"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 15 mobil</b><br><br><b>Langkah Penyelesaian:</b><br>Misal motor = m, mobil = b.<br>&bull; m + b = 40 &rarr; 2m + 2b = 80<br>&bull; 2m + 4b = 110 (karena motor roda 2, mobil roda 4)<br>Kurangkan: 2b = 30 &rarr; <b>b = 15 mobil</b>.<br>(dan motor = 25 unit)."
            },
            {
                "q": "Metode penyelesaian SPLDV dengan cara menyatakan salah satu variabel dalam variabel lain kemudian memasukkannya ke persamaan lainnya disebut metode ...",
                "options": [
                    "Substitusi",
                    "Eliminasi",
                    "Grafik",
                    "Determinan"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: Substitusi</b><br><br><b>Konsep:</b><br>&bull; <b>Substitusi</b> artinya mengganti (mengubah satu variabel menjadi fungsi variabel lain lalu dimasukkan).<br>&bull; <b>Eliminasi</b> artinya melenyapkan / menghilangkan salah satu variabel dengan menyamakan koefisien."
            }
        ]
    },
    {
        "index": 10,
        "title": "Bentuk Aljabar & Sifat Operasinya",
        "category": "Aljabar - Bentuk Aljabar",
        "kisi_kisi": "Mengenal unsur-unsur aljabar, penyederhanaan suku sejenis, dan operasi perkalian bentuk aljabar.",
        "questions": [
            {
                "q": "Koefisien dari variabel x dan konstanta pada bentuk aljabar 3x² - 5x + 8 berturut-turut adalah ...",
                "options": [
                    "-5 dan 8",
                    "5 dan 8",
                    "3 dan 8",
                    "-5 dan 3"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: -5 dan 8</b><br><br><b>Unsur-Unsur Bentuk Aljabar:</b><br>&bull; Koefisien x² adalah 3<br>&bull; Koefisien x adalah <b>-5</b> (tanda negatif di depan angka ikut serta)<br>&bull; Konstanta (angka tanpa variabel) adalah <b>8</b>."
            },
            {
                "q": "Hasil penyederhanaan dari 5x - 3y + 7 - 2x + 8y - 12 adalah ...",
                "options": [
                    "3x + 5y - 5",
                    "3x - 5y - 5",
                    "7x + 5y + 5",
                    "3x + 5y + 5"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 3x + 5y - 5</b><br><br><b>Langkah Pengelompokan Suku Sejenis:</b><br>&bull; Suku x: 5x - 2x = 3x<br>&bull; Suku y: -3y + 8y = 5y<br>&bull; Konstanta: 7 - 12 = -5<br>Gabungkan: <b>3x + 5y - 5</b>."
            },
            {
                "q": "Hasil perkalian dari bentuk aljabar (2x - 3)(x + 4) adalah ...",
                "options": [
                    "2x² + 5x - 12",
                    "2x² - 5x - 12",
                    "2x² + 11x - 12",
                    "2x² + 5x + 12"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 2x² + 5x - 12</b><br><br><b>Langkah Perkalian Skema/Pelangi:</b><br>(2x - 3)(x + 4) = 2x(x) + 2x(4) - 3(x) - 3(4)<br>= 2x² + 8x - 3x - 12<br>= <b>2x² + 5x - 12</b>."
            },
            {
                "q": "Bentuk pemfaktoran dari selisih dua kuadrat 9x² - 25y² adalah ...",
                "options": [
                    "(3x - 5y)(3x + 5y)",
                    "(9x - 25y)(9x + 25y)",
                    "(3x - 5y)²",
                    "(3x + 5y)²"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: (3x - 5y)(3x + 5y)</b><br><br><b>Rumus Selisih Dua Kuadrat:</b><br>a² - b² = (a - b)(a + b)<br>Di sini a² = 9x² &rarr; a = 3x, dan b² = 25y² &rarr; b = 5y.<br>Maka pemfaktorannya adalah <b>(3x - 5y)(3x + 5y)</b>."
            },
            {
                "q": "Manakah pasangan suku di bawah ini yang merupakan pasangan suku SEJENIS?",
                "options": [
                    "4x²y dan -7x²y",
                    "3xy² dan 5x²y",
                    "2a dan 2b",
                    "5x² dan 5x³"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 4x²y dan -7x²y</b><br><br><b>Konsep Suku Sejenis:</b><br>Suku dikatakan sejenis jika memiliki <b>variabel yang sama persis beserta pangkat yang sama persis</b>.<br>&bull; 4x²y dan -7x²y keduanya bervariabel x²y (sejenis).<br>&bull; 3xy² dan 5x²y berbeda penempatan pangkatnya (tidak sejenis)."
            }
        ]
    },
    {
        "index": 11,
        "title": "Relasi dan Fungsi",
        "category": "Aljabar - Fungsi",
        "kisi_kisi": "Memahami konsep relasi, fungsi/pemetaan, domain, kodomain, range, serta nilai fungsi.",
        "questions": [
            {
                "q": "Sebuah fungsi ditentukan oleh rumus f(x) = 3x - 5. Nilai dari f(-2) adalah ...",
                "options": [
                    "-11",
                    "-1",
                    "1",
                    "11"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: -11</b><br><br><b>Langkah Penyelesaian:</b><br>Substitusi x = -2 ke dalam rumus fungsi:<br>f(-2) = 3(-2) - 5 = -6 - 5 = <b>-11</b>."
            },
            {
                "q": "Syarat utama suatu relasi dari himpunan A ke himpunan B disebut sebagai FUNGSI (pemetaan) adalah ...",
                "options": [
                    "Setiap anggota himpunan A dipasangkan dengan tepat satu anggota himpunan B",
                    "Setiap anggota himpunan B harus memiliki pasangan di himpunan A",
                    "Anggota himpunan A boleh memiliki lebih dari satu pasangan",
                    "Jumlah anggota himpunan A dan himpunan B harus sama banyak"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: Setiap anggota himpunan A dipasangkan dengan tepat satu anggota himpunan B</b><br><br><b>Definisi Fungsi:</b><br>Fungsi dari A ke B adalah relasi khusus di mana setiap elemen daerah asal (domain A) wajib memiliki pasangan, dan pasangannya di daerah kawan (kodomain B) harus tepat satu (tidak boleh mendua dan tidak boleh jomblo)."
            },
            {
                "q": "Diketahui fungsi f(x) = ax + b. Jika f(2) = 7 dan f(-1) = 1, maka rumus fungsi f(x) adalah ...",
                "options": [
                    "f(x) = 2x + 3",
                    "f(x) = 3x + 1",
                    "f(x) = 2x - 3",
                    "f(x) = x + 5"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: f(x) = 2x + 3</b><br><br><b>Langkah Penyelesaian:</b><br>1. f(2) = 2a + b = 7<br>2. f(-1) = -a + b = 1<br>Kurangkan: 2a - (-a) = 7 - 1 &rarr; 3a = 6 &rarr; a = 2.<br>Substitusi a = 2: 2(2) + b = 7 &rarr; 4 + b = 7 &rarr; b = 3.<br>Maka rumus fungsinya adalah <b>f(x) = 2x + 3</b>."
            },
            {
                "q": "Pada fungsi f: A &rarr; B, sebutan untuk himpunan semua nilai hasil pemetaan (daerah hasil) adalah ...",
                "options": [
                    "Range",
                    "Domain",
                    "Kodomain",
                    "Asimtot"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: Range</b><br><br><b>Istilah dalam Fungsi:</b><br>&bull; <b>Domain:</b> Daerah asal (seluruh anggota himpunan A).<br>&bull; <b>Kodomain:</b> Daerah kawan (seluruh anggota himpunan B).<br>&bull; <b>Range:</b> Daerah hasil (anggota B yang benar-benar mendapat pasangan dari A)."
            },
            {
                "q": "Suatu fungsi didefinisikan f(x) = 5 - 2x. Jika f(a) = -7, maka nilai a adalah ...",
                "options": [
                    "6",
                    "-6",
                    "1",
                    "9"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 6</b><br><br><b>Langkah Penyelesaian:</b><br>f(a) = 5 - 2a = -7<br>-2a = -7 - 5<br>-2a = -12 &rarr; <b>a = 6</b>."
            }
        ]
    },
    {
        "index": 12,
        "title": "Barisan Berhingga Bilangan",
        "category": "Aljabar - Barisan dan Deret",
        "kisi_kisi": "Menentukan pola bilangan, suku ke-n barisan aritmetika dan geometri.",
        "questions": [
            {
                "q": "Dua suku berikutnya dari barisan bilangan 3, 7, 11, 15, ... adalah ...",
                "options": [
                    "19 dan 23",
                    "18 dan 22",
                    "19 dan 24",
                    "17 dan 21"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 19 dan 23</b><br><br><b>Analisis Pola Bilangan:</b><br>&bull; Selisih antar suku (beda): 7 - 3 = 4; 11 - 7 = 4; 15 - 11 = 4.<br>&bull; Suku ke-5 = 15 + 4 = <b>19</b>.<br>&bull; Suku ke-6 = 19 + 4 = <b>23</b>."
            },
            {
                "q": "Rumus suku ke-n (Un) dari barisan bilangan aritmetika 5, 8, 11, 14, ... adalah ...",
                "options": [
                    "Un = 3n + 2",
                    "Un = 3n + 5",
                    "Un = 2n + 3",
                    "Un = 3n - 1"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: Un = 3n + 2</b><br><br><b>Rumus Barisan Aritmetika:</b><br>Un = a + (n - 1)b<br>&bull; Suku pertama (a) = 5<br>&bull; Beda (b) = 8 - 5 = 3<br>Un = 5 + (n - 1)3 = 5 + 3n - 3 = <b>3n + 2</b>."
            },
            {
                "q": "Suku ke-25 dari barisan aritmetika 2, 7, 12, 17, ... adalah ...",
                "options": [
                    "122",
                    "125",
                    "120",
                    "127"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 122</b><br><br><b>Langkah Penyelesaian:</b><br>&bull; a = 2, b = 5<br>&bull; U₂₅ = a + (25 - 1)b = 2 + 24(5) = 2 + 120 = <b>122</b>."
            },
            {
                "q": "Diberikan barisan bilangan Fibonacci: 1, 1, 2, 3, 5, 8, 13, x, y. Nilai x dan y berturut-turut adalah ...",
                "options": [
                    "21 dan 34",
                    "20 dan 33",
                    "21 dan 35",
                    "19 dan 32"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 21 dan 34</b><br><br><b>Pola Fibonacci:</b><br>Setiap suku diperoleh dari penjumlahan 2 suku sebelumnya:<br>&bull; x = 8 + 13 = <b>21</b><br>&bull; y = 13 + 21 = <b>34</b>."
            },
            {
                "q": "Suku ke-6 dari barisan geometri 3, 6, 12, 24, ... adalah ...",
                "options": [
                    "96",
                    "48",
                    "192",
                    "72"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 96</b><br><br><b>Barisan Geometri:</b><br>Rasio (r) = 6 &divide; 3 = 2.<br>&bull; U₁ = 3<br>&bull; U₂ = 6<br>&bull; U₃ = 12<br>&bull; U₄ = 24<br>&bull; U₅ = 24 &times; 2 = 48<br>&bull; U₆ = 48 &times; 2 = <b>96</b>."
            }
        ]
    },
    {
        "index": 13,
        "title": "Deret Berhingga Bilangan",
        "category": "Aljabar - Barisan dan Deret",
        "kisi_kisi": "Menghitung jumlah n suku pertama deret aritmetika dan aplikasi kontekstual.",
        "questions": [
            {
                "q": "Jumlah 20 suku pertama (S₂₀) dari deret aritmetika 3 + 7 + 11 + 15 + ... adalah ...",
                "options": [
                    "820",
                    "800",
                    "840",
                    "780"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 820</b><br><br><b>Rumus Deret Aritmetika:</b><br>Sn = n/2 &times; [2a + (n - 1)b]<br>&bull; a = 3, b = 4, n = 20<br>S₂₀ = (20/2) &times; [2(3) + (19 &times; 4)]<br>= 10 &times; [6 + 76] = 10 &times; 82 = <b>820</b>."
            },
            {
                "q": "Dalam gedung pertunjukan bioskop, baris paling depan terdapat 12 kursi. Baris di belakangnya selalu memuat 3 kursi lebih banyak dari baris di depannya. Jika dalam gedung terdapat 15 baris kursi, total seluruh kursi di bioskop tersebut adalah ...",
                "options": [
                    "495 kursi",
                    "480 kursi",
                    "510 kursi",
                    "450 kursi"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 495 kursi</b><br><br><b>Penerapan Deret Aritmetika:</b><br>&bull; a = 12 (baris pertama)<br>&bull; b = 3 (tambahan per baris)<br>&bull; n = 15 (jumlah baris)<br>S₁₅ = (15/2) &times; [2(12) + (14 &times; 3)]<br>= (15/2) &times; [24 + 42] = (15/2) &times; 66 = 15 &times; 33 = <b>495 kursi</b>."
            },
            {
                "q": "Jumlah bilangan bulat kelipatan 4 antara 10 dan 50 adalah ...",
                "options": [
                    "300",
                    "280",
                    "320",
                    "260"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 300</b><br><br><b>Langkah Penyelesaian:</b><br>&bull; Bilangan kelipatan 4 antara 10 dan 50: 12, 16, 20, ..., 48.<br>&bull; Suku pertama (a) = 12, beda (b) = 4, suku terakhir (Un) = 48.<br>&bull; Banyak suku (n): 48 = 12 + (n - 1)4 &rarr; 36 = 4(n - 1) &rarr; n - 1 = 9 &rarr; n = 10.<br>&bull; Sn = (n/2)(a + Un) = (10/2)(12 + 48) = 5 &times; 60 = <b>300</b>."
            },
            {
                "q": "Rian menabung di bank setiap bulan. Pada bulan pertama ia menabung Rp50.000, bulan kedua Rp60.000, bulan ketiga Rp70.000, dan seterusnya dengan penambahan tetap Rp10.000 setiap bulan. Jumlah uang yang ditabung Rian selama 1 tahun (12 bulan) adalah ...",
                "options": [
                    "Rp1.260.000",
                    "Rp1.200.000",
                    "Rp1.320.000",
                    "Rp1.150.000"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: Rp1.260.000</b><br><br><b>Langkah Penyelesaian:</b><br>&bull; a = 50.000, b = 10.000, n = 12 bulan.<br>&bull; S₁₂ = (12/2) &times; [2(50.000) + (11 &times; 10.000)]<br>= 6 &times; [100.000 + 110.000] = 6 &times; 210.000 = <b>Rp1.260.000</b>."
            },
            {
                "q": "Jika jumlah n suku pertama suatu deret dinyatakan dengan Sn = 2n² + 3n, maka suku ke-5 (U₅) deret tersebut adalah ...",
                "options": [
                    "21",
                    "25",
                    "19",
                    "65"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 21</b><br><br><b>Hubungan Sn dan Un:</b><br>Un = Sn - Sₙ₋₁<br>&bull; S₅ = 2(5)² + 3(5) = 2(25) + 15 = 50 + 15 = 65.<br>&bull; S₄ = 2(4)² + 3(4) = 2(16) + 12 = 32 + 12 = 44.<br>&bull; U₅ = S₅ - S₄ = 65 - 44 = <b>21</b>."
            }
        ]
    },
    {
        "index": 14,
        "title": "Hubungan Antar-Sudut & Garis",
        "category": "Geometri dan Pengukuran - Objek Geometri",
        "kisi_kisi": "Menentukan besar sudut berpenyiku, berpelurus, sehadap, berseberangan, dan bertolak belakang.",
        "questions": [
            {
                "q": "Dua sudut dikatakan saling berpenyiku (komplementer) jika jumlah besar kedua sudut tersebut adalah ...",
                "options": [
                    "90&deg;",
                    "180&deg;",
                    "360&deg;",
                    "45&deg;"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 90&deg;</b><br><br><b>Konsep Sudut:</b><br>&bull; <b>Sudut Berpenyiku (Komplementer):</b> Jumlah kedua sudut = 90&deg; (membentuk siku-siku).<br>&bull; <b>Sudut Berpelurus (Suplementer):</b> Jumlah kedua sudut = 180&deg; (membentuk garis lurus)."
            },
            {
                "q": "Besar sudut penyiku dari sudut yang berukuran 35&deg; adalah ...",
                "options": [
                    "55&deg;",
                    "145&deg;",
                    "65&deg;",
                    "45&deg;"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 55&deg;</b><br><br><b>Langkah Penyelesaian:</b><br>Sudut penyiku = 90&deg; - 35&deg; = <b>55&deg;</b>."
            },
            {
                "q": "Dua garis sejajar dipotong oleh sebuah garis transversal. Pasangan sudut berikut yang memiliki besar sudut SAMA adalah ...",
                "options": [
                    "Sudut sehadap dan sudut dalam berseberangan",
                    "Sudut dalam sepihak dan sudut luar sepihak",
                    "Sudut berpelurus",
                    "Sudut komplementer"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: Sudut sehadap dan sudut dalam berseberangan</b><br><br><b>Sifat Garis Sejajar Dipotong Transversal:</b><br>&bull; Pasangan sudut yang <b>sama besar</b>: Sudut sehadap, sudut dalam berseberangan, sudut luar berseberangan, dan sudut bertolak belakang.<br>&bull; Pasangan sudut yang <b>berjumlah 180&deg;</b>: Sudut dalam sepihak dan sudut luar sepihak."
            },
            {
                "q": "Besar sudut pelurus dari suatu sudut adalah 120&deg;. Berapakah besar sudut penyiku dari sudut tersebut?",
                "options": [
                    "30&deg;",
                    "60&deg;",
                    "45&deg;",
                    "15&deg;"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 30&deg;</b><br><br><b>Langkah Penyelesaian:</b><br>1. Sudut mula-mula = 180&deg; - 120&deg; = 60&deg;.<br>2. Sudut penyiku dari 60&deg; = 90&deg; - 60&deg; = <b>30&deg;</b>."
            },
            {
                "q": "Jumlah ketiga sudut dalam pada setiap bangun datar segitiga selalu bernilai ...",
                "options": [
                    "180&deg;",
                    "360&deg;",
                    "90&deg;",
                    "270&deg;"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 180&deg;</b><br><br><b>Teorema Sudut Segitiga:</b><br>Jumlah seluruh sudut dalam sembarang segitiga (segitiga lancip, siku-siku, maupun tumpul) adalah selalu tepat <b>180&deg;</b>."
            }
        ]
    },
    {
        "index": 15,
        "title": "Teorema Pythagoras",
        "category": "Geometri dan Pengukuran - Objek Geometri",
        "kisi_kisi": "Menerapkan rumus Pythagoras, mengenali tripel Pythagoras, dan menyelesaikan masalah kontekstual.",
        "questions": [
            {
                "q": "Di antara kelompok tiga bilangan berikut, manakah yang merupakan TRIPEL PYTHAGORAS?",
                "options": [
                    "5, 12, 13",
                    "6, 8, 12",
                    "7, 10, 15",
                    "4, 5, 6"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 5, 12, 13</b><br><br><b>Uji Teorema Pythagoras (a² + b² = c²):</b><br>&bull; 5² + 12² = 25 + 144 = 169<br>&bull; 13² = 169 (Sama &rarr; Tripel Pythagoras!).<br>Tripel dasar lainnya yang sering keluar di ujian: (3, 4, 5), (7, 24, 25), dan (8, 15, 17)."
            },
            {
                "q": "Sebuah segitiga siku-siku memiliki panjang sisi tegak 9 cm dan 12 cm. Panjang sisi miring (hipotenusa) segitiga tersebut adalah ...",
                "options": [
                    "15 cm",
                    "18 cm",
                    "21 cm",
                    "16 cm"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 15 cm</b><br><br><b>Rumus Hipotenusa:</b><br>c = &radic;(a² + b²) = &radic;(9² + 12²) = &radic;(81 + 144) = &radic;225 = <b>15 cm</b>.<br><i>(Kelipatan 3 dari tripel 3, 4, 5: 3&times;3=9, 4&times;3=12, 5&times;3=15).</i>"
            },
            {
                "q": "Sebuah tangga yang panjangnya 5 meter bersandar pada dinding tembok sebuah rumah. Jika jarak ujung bawah tangga ke dinding tembok adalah 3 meter, tinggi dinding tembok yang dicapai oleh ujung atas tangga adalah ...",
                "options": [
                    "4 meter",
                    "3,5 meter",
                    "4,5 meter",
                    "2 meter"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 4 meter</b><br><br><b>Aplikasi Teorema Pythagoras:</b><br>Tangga bertindak sebagai sisi miring (c = 5 m), jarak dasar ke tembok sebagai sisi alas (a = 3 m).<br>Tinggi dinding (t) = &radic;(5² - 3²) = &radic;(25 - 9) = &radic;16 = <b>4 meter</b>."
            },
            {
                "q": "Sebuah kapal berlayar dari pelabuhan ke arah utara sejauh 60 mil, kemudian berbelok ke arah timur sejauh 80 mil. Jarak terdekat kapal sekarang dari pelabuhan titik awal keberangkatan adalah ...",
                "options": [
                    "100 mil",
                    "140 mil",
                    "120 mil",
                    "90 mil"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 100 mil</b><br><br><b>Langkah Penyelesaian:</b><br>Arah utara dan timur saling tegak lurus (membentuk sudut 90&deg;).<br>Jarak terdekat = &radic;(60² + 80²) = &radic;(3.600 + 6.400) = &radic;10.000 = <b>100 mil</b>."
            },
            {
                "q": "Suatu segitiga memiliki panjang sisi 8 cm, 15 cm, dan 17 cm. Jenis segitiga tersebut adalah ...",
                "options": [
                    "Segitiga siku-siku",
                    "Segitiga lancip",
                    "Segitiga tumpul",
                    "Segitiga sembarang"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: Segitiga siku-siku</b><br><br><b>Aturan Jenis Segitiga:</b><br>Kuadrat sisi terpanjang: 17² = 289.<br>Jumlah kuadrat sisi lainnya: 8² + 15² = 64 + 225 = 289.<br>Karena 8² + 15² = 17² (c² = a² + b²), maka segitiga tersebut adalah <b>segitiga siku-siku</b>."
            }
        ]
    },
    {
        "index": 16,
        "title": "Kekongruenan dan Kesebangunan",
        "category": "Geometri dan Pengukuran - Objek Geometri",
        "kisi_kisi": "Memahami syarat kongruen dan sebangun serta menghitung panjang sisi yang bersesuaian.",
        "questions": [
            {
                "q": "Dua bangun datar dikatakan KONGRUEN (&cong;) apabila memenuhi syarat ...",
                "options": [
                    "Bentuk dan ukurannya sama persis (sisi bersesuaian sama panjang dan sudut bersesuaian sama besar)",
                    "Bentuknya sama tetapi ukurannya diperbesar",
                    "Hanya sudut-sudutnya yang sama besar",
                    "Luasnya sama meskipun bentuknya berbeda"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: Bentuk dan ukurannya sama persis (sisi bersesuaian sama panjang dan sudut bersesuaian sama besar)</b><br><br><b>Konsep Kekongruenan:</b><br>Dua bangun datar kongruen adalah kembar identik: jika ditumpuk, keduanya akan saling menutupi dengan sempurna."
            },
            {
                "q": "Sebuah tiang bendera yang tingginya 6 meter memiliki bayangan sepanjang 4 meter di atas tanah. Pada saat yang sama, sebuah pohon di sebelahnya memiliki bayangan sepanjang 10 meter. Tinggi pohon tersebut sebenarnya adalah ...",
                "options": [
                    "15 meter",
                    "12 meter",
                    "18 meter",
                    "14 meter"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 15 meter</b><br><br><b>Konsep Kesebangunan:</b><br>Perbandingan tinggi tiang/pohon sebanding dengan panjang bayangannya:<br>Tinggi Pohon / Tinggi Tiang = Bayangan Pohon / Bayangan Tiang<br>T / 6 = 10 / 4<br>T = (10 &times; 6) &divide; 4 = 60 &divide; 4 = <b>15 meter</b>."
            },
            {
                "q": "Di antara pasangan syarat berikut, manakah yang BUKAN merupakan syarat kekongruenan dua segitiga?",
                "options": [
                    "Sudut - Sudut - Sudut (Sd, Sd, Sd)",
                    "Sisi - Sisi - Sisi (S, S, S)",
                    "Sisi - Sudut - Sisi (S, Sd, S)",
                    "Sudut - Sisi - Sudut (Sd, S, Sd)"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: Sudut - Sudut - Sudut (Sd, Sd, Sd)</b><br><br><b>Penjelasan:</b><br>Jika ketiga sudutnya sama besar (Sd, Sd, Sd), kedua segitiga tersebut hanya dipastikan <b>sebangun</b>, belum tentu kongruen (ukurannya bisa saja segitiga kecil dan segitiga besar)."
            },
            {
                "q": "Dua persegi panjang sebangun. Persegi panjang pertama berukuran 12 cm &times; 8 cm. Jika persegi panjang kedua memiliki panjang 18 cm, maka lebar persegi panjang kedua adalah ...",
                "options": [
                    "12 cm",
                    "14 cm",
                    "10 cm",
                    "15 cm"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 12 cm</b><br><br><b>Perbandingan Sisi Sebangun:</b><br>Panjang₁ / Panjang₂ = Lebar₁ / Lebar₂<br>12 / 18 = 8 / Lebar₂<br>Lebar₂ = (18 &times; 8) &divide; 12 = 144 &divide; 12 = <b>12 cm</b>."
            },
            {
                "q": "Foto diletakkan pada selembar karton berukuran 40 cm &times; 60 cm. Di sebelah kiri, kanan, dan atas foto masih tersisa karton selebar 4 cm. Jika foto dan karton sebangun, lebar karton yang tersisa di bagian bawah foto adalah ...",
                "options": [
                    "8 cm",
                    "6 cm",
                    "10 cm",
                    "4 cm"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 8 cm</b><br><br><b>Langkah Penyelesaian:</b><br>&bull; Lebar karton = 40 cm, Tinggi karton = 60 cm.<br>&bull; Lebar foto = 40 - (4 + 4) = 32 cm.<br>&bull; Karena sebangun: Lebar foto / Lebar karton = Tinggi foto / Tinggi karton<br>32 / 40 = Tinggi foto / 60 &rarr; 4/5 = Tinggi foto / 60 &rarr; Tinggi foto = 48 cm.<br>&bull; Sisa karton bagian bawah = Tinggi karton - Tinggi foto - sisa atas = 60 - 48 - 4 = <b>8 cm</b>."
            }
        ]
    },
    {
        "index": 17,
        "title": "Jaring-Jaring Bangun Ruang",
        "category": "Geometri dan Pengukuran - Objek Geometri",
        "kisi_kisi": "Mengenali jaring-jaring kubus, balok, prisma, limas, tabung, dan kerucut.",
        "questions": [
            {
                "q": "Sebuah kubus memiliki 6 sisi persegi. Banyaknya ragam pola jaring-jaring kubus yang valid dan berbeda adalah ...",
                "options": [
                    "11 pola",
                    "8 pola",
                    "12 pola",
                    "6 pola"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 11 pola</b><br><br><b>Fakta Geometri:</b><br>Terdapat tepat <b>11 variasi pola jaring-jaring kubus</b> yang valid, yang dikelompokkan ke dalam pola 1-4-1 (6 macam), pola 2-3-1 (3 macam), pola 2-2-2 (1 macam), dan pola 3-3 (1 macam)."
            },
            {
                "q": "Jaring-jaring bangun ruang tabung terdiri atas gabungan dari bangun datar ...",
                "options": [
                    "Dua buah lingkaran identik dan satu buah persegi panjang",
                    "Dua buah segitiga dan satu buah persegi panjang",
                    "Satu buah lingkaran dan satu buah juring lingkaran",
                    "Tiga buah persegi panjang"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: Dua buah lingkaran identik dan satu buah persegi panjang</b><br><br><b>Komponen Tabung:</b><br>&bull; Alas dan tutup berbentuk 2 lingkaran kongruen.<br>&bull; Selimut tabung jika dibentangkan akan berbentuk persegi panjang dengan panjang = keliling lingkaran (2&pi;r) dan lebar = tinggi tabung (t)."
            },
            {
                "q": "Pada jaring-jaring kubus dengan pola deret 1-4-1 mendatar bernomor 1 sampai 6, jika sisi nomor 2 dijadikan sebagai alas kubus, maka sisi yang menjadi tutup (berhadapan) adalah sisi nomor ...",
                "options": [
                    "Nomor 4 (berselang 1 kotak pada lajur yang sama)",
                    "Nomor 3",
                    "Nomor 5",
                    "Nomor 6"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: Nomor 4 (berselang 1 kotak pada lajur yang sama)</b><br><br><b>Aturan Sisi Berhadapan Kubus:</b><br>Dua sisi kubus pada barisan lajur jaring-jaring yang lurus akan saling berhadapan jika <b>berselang tepat 1 kotak</b>. Jadi, sisi nomor 2 berhadapan dengan sisi nomor 4."
            },
            {
                "q": "Jaring-jaring bangun ruang kerucut terdiri atas ...",
                "options": [
                    "Satu lingkaran (sebagai alas) dan satu juring lingkaran (sebagai selimut)",
                    "Satu lingkaran dan satu segitiga siku-siku",
                    "Dua buah lingkaran dan satu juring lingkaran",
                    "Satu juring lingkaran dan satu persegi panjang"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: Satu lingkaran (sebagai alas) dan satu juring lingkaran (sebagai selimut)</b><br><br><b>Komponen Kerucut:</b><br>&bull; Alas kerucut berupa bidang lingkaran datar.<br>&bull; Selimut kerucut yang melengkung ketika dibuka membentang menjadi juring lingkaran (sektor lingkaran) dengan jari-jari sebesar garis pelukis (s)."
            },
            {
                "q": "Sebuah bangun ruang memiliki 5 sisi, 9 rusuk, dan 6 titik sudut. Jaring-jaring bangun ruang tersebut terdiri dari 2 segitiga dan 3 persegi panjang. Bangun ruang tersebut adalah ...",
                "options": [
                    "Prisma segitiga",
                    "Limas segitiga",
                    "Limas segi empat",
                    "Prisma segi empat"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: Prisma segitiga</b><br><br><b>Karakteristik Prisma Segitiga:</b><br>&bull; Memiliki 2 sisi alas-tutup berbentuk segitiga dan 3 sisi tegak berbentuk persegi panjang (total 5 sisi).<br>&bull; Rusuk = 3 &times; 3 = 9 rusuk.<br>&bull; Titik sudut = 2 &times; 3 = 6 titik sudut."
            }
        ]
    },
    {
        "index": 18,
        "title": "Transformasi Tunggal Geometri",
        "category": "Geometri dan Pengukuran - Transformasi Geometri",
        "kisi_kisi": "Menerapkan translasi, refleksi, rotasi, dan dilatasi pada bidang koordinat Cartesius.",
        "questions": [
            {
                "q": "Titik A(3, -5) ditranslasikan oleh T = (-2, 4). Koordinat bayangan titik A' adalah ...",
                "options": [
                    "(1, -1)",
                    "(5, -9)",
                    "(-1, 1)",
                    "(1, 9)"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: (1, -1)</b><br><br><b>Rumus Translasi (Pergeseran):</b><br>A'(x + a, y + b)<br>A'(3 + (-2), -5 + 4) = <b>(1, -1)</b>."
            },
            {
                "q": "Jika titik P(-4, 7) dicerminkan (refleksi) terhadap sumbu X, maka koordinat bayangan titik P' adalah ...",
                "options": [
                    "(-4, -7)",
                    "(4, 7)",
                    "(4, -7)",
                    "(-7, 4)"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: (-4, -7)</b><br><br><b>Refleksi terhadap Sumbu X:</b><br>Titik (x, y) &rarr; (x, -y). Nilai absis x tetap, sedangkan ordinat y dikalikan negatif.<br>Maka P' = <b>(-4, -7)</b>."
            },
            {
                "q": "Titik B(2, 6) dirotasikan sebesar 90&deg; berlawanan arah jarum jam dengan pusat rotasi di O(0,0). Koordinat bayangan titik B' adalah ...",
                "options": [
                    "(-6, 2)",
                    "(6, -2)",
                    "(-2, -6)",
                    "(6, 2)"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: (-6, 2)</b><br><br><b>Rumus Rotasi +90&deg; Pusat (0,0):</b><br>(x, y) &rarr; (-y, x)<br>Maka B(2, 6) &rarr; <b>(-6, 2)</b>."
            },
            {
                "q": "Titik C(-3, 5) didilatasikan dengan faktor skala k = -2 dan berpusat di titik O(0,0). Koordinat bayangan titik C' adalah ...",
                "options": [
                    "(6, -10)",
                    "(-6, 10)",
                    "(5, -7)",
                    "(6, 10)"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: (6, -10)</b><br><br><b>Rumus Dilatasi Pusat O(0,0):</b><br>C'(kx, ky)<br>C'(-2 &times; -3, -2 &times; 5) = <b>(6, -10)</b>."
            },
            {
                "q": "Bayangan titik Q(5, -2) jika dicerminkan terhadap garis y = x adalah ...",
                "options": [
                    "(-2, 5)",
                    "(2, -5)",
                    "(-5, 2)",
                    "(5, 2)"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: (-2, 5)</b><br><br><b>Refleksi terhadap Garis y = x:</b><br>(x, y) &rarr; (y, x). Nilai koordinat x dan y saling bertukar posisi.<br>Maka Q' = <b>(-2, 5)</b>."
            }
        ]
    },
    {
        "index": 19,
        "title": "Keliling dan Luas Bangun Datar",
        "category": "Geometri dan Pengukuran - Pengukuran",
        "kisi_kisi": "Menghitung keliling dan luas bangun datar (persegi, persegipanjang, segitiga, trapesium, lingkaran).",
        "questions": [
            {
                "q": "Sebuah taman berbentuk trapesium sama kaki memiliki panjang sisi-sisi sejajar 14 meter dan 26 meter, serta tinggi trapesium 8 meter. Luas taman tersebut adalah ...",
                "options": [
                    "160 m²",
                    "320 m²",
                    "180 m²",
                    "140 m²"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 160 m²</b><br><br><b>Rumus Luas Trapesium:</b><br>Luas = &frac12; &times; (a + b) &times; t<br>Luas = &frac12; &times; (14 + 26) &times; 8 = &frac12; &times; 40 &times; 8 = 20 &times; 8 = <b>160 m²</b>."
            },
            {
                "q": "Sebuah roda sepeda memiliki jari-jari 35 cm. Jika roda tersebut berputar sebanyak 200 kali di jalan lurus, jarak yang telah ditempuh sepeda adalah ... (&pi; = 22/7)",
                "options": [
                    "440 meter",
                    "220 meter",
                    "44 meter",
                    "880 meter"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 440 meter</b><br><br><b>Langkah Penyelesaian:</b><br>1. Keliling roda = 2 &times; &pi; &times; r = 2 &times; (22/7) &times; 35 cm = 220 cm.<br>2. Jarak total = Keliling &times; banyak putaran = 220 cm &times; 200 = 44.000 cm.<br>3. Konversi ke meter: 44.000 &divide; 100 = <b>440 meter</b>."
            },
            {
                "q": "Sebuah belah ketupat memiliki panjang diagonal masing-masing 16 cm dan 12 cm. Luas belah ketupat tersebut adalah ...",
                "options": [
                    "96 cm²",
                    "192 cm²",
                    "48 cm²",
                    "100 cm²"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 96 cm²</b><br><br><b>Rumus Luas Belah Ketupat:</b><br>Luas = &frac12; &times; d₁ &times; d₂<br>Luas = &frac12; &times; 16 &times; 12 = 8 &times; 12 = <b>96 cm²</b>."
            },
            {
                "q": "Kebun berbentuk persegi panjang berukuran panjang 20 meter dan lebar 15 meter. Di sekeliling kebun akan dipasang tiang lampu dengan jarak antartiang 5 meter. Banyak tiang lampu yang dibutuhkan adalah ...",
                "options": [
                    "14 tiang",
                    "12 tiang",
                    "16 tiang",
                    "10 tiang"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 14 tiang</b><br><br><b>Langkah Penyelesaian:</b><br>1. Keliling kebun = 2 &times; (p + l) = 2 &times; (20 + 15) = 2 &times; 35 = 70 meter.<br>2. Banyak tiang lampu = Keliling &divide; jarak antartiang = 70 &divide; 5 = <b>14 tiang</b>."
            },
            {
                "q": "Luas sebuah lingkaran yang memiliki panjang diameter 28 cm adalah ... (&pi; = 22/7)",
                "options": [
                    "616 cm²",
                    "154 cm²",
                    "1.232 cm²",
                    "88 cm²"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 616 cm²</b><br><br><b>Rumus Luas Lingkaran:</b><br>&bull; Diameter (d) = 28 cm &rarr; Jari-jari (r) = 14 cm.<br>&bull; Luas = &pi; &times; r² = (22/7) &times; 14 &times; 14 = 22 &times; 2 &times; 14 = <b>616 cm²</b>."
            }
        ]
    },
    {
        "index": 20,
        "title": "Volume Bangun Ruang",
        "category": "Geometri dan Pengukuran - Pengukuran",
        "kisi_kisi": "Menghitung volume bangun ruang sisi datar dan sisi lengkung (kubus, balok, prisma, tabung, kerucut, bola).",
        "questions": [
            {
                "q": "Sebuah tabung memiliki jari-jari alas 7 cm dan tinggi 20 cm. Volume tabung tersebut adalah ... (&pi; = 22/7)",
                "options": [
                    "3.080 cm³",
                    "1.540 cm³",
                    "6.160 cm³",
                    "880 cm³"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 3.080 cm³</b><br><br><b>Rumus Volume Tabung:</b><br>V = &pi; &times; r² &times; t<br>V = (22/7) &times; 7 &times; 7 &times; 20 = 154 &times; 20 = <b>3.080 cm³</b>."
            },
            {
                "q": "Jika sebuah tabung dan sebuah kerucut memiliki jari-jari alas dan tinggi yang sama persis, maka perbandingan volume kerucut terhadap volume tabung adalah ...",
                "options": [
                    "1 : 3",
                    "1 : 2",
                    "2 : 3",
                    "1 : 4"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 1 : 3</b><br><br><b>Perbandingan Rumus Volume:</b><br>&bull; Volume Kerucut = 1/3 &times; &pi; &times; r² &times; t<br>&bull; Volume Tabung = &pi; &times; r² &times; t<br>Maka Volume Kerucut : Volume Tabung = <b>1 : 3</b>."
            },
            {
                "q": "Sebuah balok berukuran panjang 15 cm, lebar 8 cm, dan tinggi 10 cm. Volume balok tersebut adalah ...",
                "options": [
                    "1.200 cm³",
                    "1.500 cm³",
                    "800 cm³",
                    "600 cm³"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 1.200 cm³</b><br><br><b>Rumus Volume Balok:</b><br>V = p &times; l &times; t = 15 &times; 8 &times; 10 = <b>1.200 cm³</b>."
            },
            {
                "q": "Sebuah bak penampungan air berbentuk kubus dengan panjang rusuk bagian dalam 80 cm. Jika bak tersebut terisi air penuh, volume air di dalam bak adalah ...",
                "options": [
                    "512 liter",
                    "51,2 liter",
                    "5.120 liter",
                    "256 liter"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 512 liter</b><br><br><b>Langkah Penyelesaian:</b><br>1. V = s³ = 80 cm &times; 80 cm &times; 80 cm = 512.000 cm³.<br>2. Ingat bahwa 1 liter = 1 dm³ = 1.000 cm³.<br>3. Volume dalam liter = 512.000 &divide; 1.000 = <b>512 liter</b>."
            },
            {
                "q": "Rumus untuk menghitung volume bola dengan jari-jari r adalah ...",
                "options": [
                    "4/3 &times; &pi; &times; r³",
                    "4 &times; &pi; &times; r²",
                    "2/3 &times; &pi; &times; r³",
                    "1/3 &times; &pi; &times; r³"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 4/3 &times; &pi; &times; r³</b><br><br><b>Rumus Bangun Ruang Bola:</b><br>&bull; Volume Bola = <b>4/3 &times; &pi; &times; r³</b>.<br>&bull; Luas Permukaan Bola = 4 &times; &pi; &times; r²."
            }
        ]
    },
    {
        "index": 21,
        "title": "Penyajian & Penginterpretasian Data",
        "category": "Data dan Peluang - Data",
        "kisi_kisi": "Membaca, menafsirkan, dan menganalisis penyajian data dalam bentuk diagram batang, garis, lingkaran, dan tabel.",
        "questions": [
            {
                "q": "Sebuah diagram lingkaran menyajikan mata pelajaran kegemaran 120 siswa. Sudut sektor IPA adalah 90&deg;, Matematika 120&deg;, Bahasa Inggris 60&deg;, dan sisanya Bahasa Indonesia. Banyaknya siswa yang gemar Bahasa Indonesia adalah ...",
                "options": [
                    "30 siswa",
                    "25 siswa",
                    "35 siswa",
                    "40 siswa"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 30 siswa</b><br><br><b>Langkah Penyelesaian:</b><br>1. Satu lingkaran penuh = 360&deg;.<br>2. Sudut Bahasa Indonesia = 360&deg; - (90&deg; + 120&deg; + 60&deg;) = 360&deg; - 270&deg; = 90&deg;.<br>3. Banyak siswa = (90&deg; / 360&deg;) &times; 120 orang = 1/4 &times; 120 = <b>30 siswa</b>."
            },
            {
                "q": "Bentuk diagram penyajian data yang paling tepat digunakan untuk menggambarkan perkembangan atau tren suatu data secara berkelanjutan dari waktu ke waktu (misalnya suhu badan pasien setiap jam) adalah ...",
                "options": [
                    "Diagram garis",
                    "Diagram lingkaran",
                    "Diagram batang",
                    "Piktogram"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: Diagram garis</b><br><br><b>Karakteristik Diagram:</b><br><b>Diagram Garis</b> sangat ideal untuk data berkala (time series) karena titik-titik data yang dihubungkan garis memperlihatkan kenaikan, penurunan, atau kestabilan data secara berurutan waktu."
            },
            {
                "q": "Perhatikan tabel frekuensi nilai matematika 20 siswa berikut:<br>&bull; Nilai 6 = 3 siswa<br>&bull; Nilai 7 = 6 siswa<br>&bull; Nilai 8 = 7 siswa<br>&bull; Nilai 9 = 4 siswa<br>Persentase siswa yang memperoleh nilai minimal 8 (nilai 8 atau lebih) adalah ...",
                "options": [
                    "55%",
                    "35%",
                    "50%",
                    "45%"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 55%</b><br><br><b>Langkah Penyelesaian:</b><br>&bull; Nilai minimal 8 adalah nilai 8 dan 9.<br>&bull; Jumlah siswa = 7 + 4 = 11 siswa.<br>&bull; Persentase = (11 / 20) &times; 100% = <b>55%</b>."
            },
            {
                "q": "Jika data disajikan dalam diagram lingkaran dengan persentase total 100%, maka 1% dari data setara dengan besar sudut pusat sebesar ...",
                "options": [
                    "3,6&deg;",
                    "1&deg;",
                    "36&deg;",
                    "0,36&deg;"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 3,6&deg;</b><br><br><b>Konversi Persen ke Derajat:</b><br>Satu lingkaran utuh = 360&deg; = 100%.<br>1% = 360&deg; &divide; 100 = <b>3,6&deg;</b>."
            },
            {
                "q": "Dalam diagram batang hasil panen padi desa Sukamaju selama 5 tahun tercatat berturut-turut: 40 ton, 50 ton, 45 ton, 60 ton, dan 75 ton. Kenaikan hasil panen tertinggi terjadi pada rentang tahun ...",
                "options": [
                    "Tahun ke-4 ke tahun ke-5 (naik 15 ton)",
                    "Tahun ke-1 ke tahun ke-2 (naik 10 ton)",
                    "Tahun ke-3 ke tahun ke-4 (naik 15 ton)",
                    "Tahun ke-2 ke tahun ke-3"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: Tahun ke-4 ke tahun ke-5 (naik 15 ton)</b><br><br><b>Analisis Selisih:</b><br>&bull; Th 1 ke 2: 50 - 40 = naik 10 ton<br>&bull; Th 2 ke 3: 45 - 50 = turun 5 ton<br>&bull; Th 3 ke 4: 60 - 45 = naik 15 ton<br>&bull; Th 4 ke 5: 75 - 60 = naik 15 ton (kenaikan tertinggi adalah 15 ton)."
            }
        ]
    },
    {
        "index": 22,
        "title": "Rerata, Median, Modus & Jangkauan",
        "category": "Data dan Peluang - Data",
        "kisi_kisi": "Menghitung mean, median, modus, dan jangkauan dari data tunggal.",
        "questions": [
            {
                "q": "Nilai rata-rata (mean) dari data ulangan matematika: 7, 8, 6, 9, 8, 7, 10, 9 adalah ...",
                "options": [
                    "8,0",
                    "7,8",
                    "8,2",
                    "8,5"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 8,0</b><br><br><b>Rumus Nilai Rata-rata (Mean):</b><br>Mean = Jumlah seluruh data &divide; Banyak data<br>Mean = (7 + 8 + 6 + 9 + 8 + 7 + 10 + 9) &divide; 8 = 64 &divide; 8 = <b>8,0</b>."
            },
            {
                "q": "Nilai median dari sekumpulan data: 8, 5, 7, 9, 6, 4, 8, 10, 7 adalah ...",
                "options": [
                    "7",
                    "7,5",
                    "8",
                    "6,5"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 7</b><br><br><b>Langkah Mencari Median (Nilai Tengah):</b><br>1. Urutkan data dari yang terkecil: 4, 5, 6, 7, <b>7</b>, 8, 8, 9, 10.<br>2. Banyak data (n) = 9 (ganjil).<br>3. Nilai tengah berada pada data ke-(9+1)/2 = data ke-5, yaitu <b>7</b>."
            },
            {
                "q": "Modus dari data: 6, 7, 8, 6, 9, 7, 8, 8, 10, 6, 8 adalah ...",
                "options": [
                    "8 (muncul 4 kali)",
                    "6 (muncul 3 kali)",
                    "7 (muncul 2 kali)",
                    "9"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 8 (muncul 4 kali)</b><br><br><b>Konsep Modus:</b><br>Modus adalah nilai yang memiliki frekuensi pemunculan paling banyak.<br>&bull; Angka 6 muncul 3 kali<br>&bull; Angka 7 muncul 2 kali<br>&bull; Angka 8 muncul 4 kali<br>&bull; Angka 9 dan 10 muncul 1 kali<br>Maka modusnya adalah <b>8</b>."
            },
            {
                "q": "Jangkauan (range) dari kumpulan data: 14, 28, 12, 35, 19, 42, 21 adalah ...",
                "options": [
                    "30",
                    "28",
                    "42",
                    "32"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 30</b><br><br><b>Rumus Jangkauan:</b><br>Jangkauan = Nilai Terbesar - Nilai Terkecil<br>&bull; Nilai terbesar = 42<br>&bull; Nilai terkecil = 12<br>Jangkauan = 42 - 12 = <b>30</b>."
            },
            {
                "q": "Nilai rata-rata ulangan matematika dari 19 siswa adalah 75. Jika seorang siswa baru yang memiliki nilai 95 digabungkan, nilai rata-rata kelas sekarang menjadi ...",
                "options": [
                    "76",
                    "77",
                    "75,5",
                    "78"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 76</b><br><br><b>Rata-rata Gabungan:</b><br>1. Total nilai awal = 19 &times; 75 = 1.425.<br>2. Tambah nilai siswa baru = 1.425 + 95 = 1.520.<br>3. Jumlah siswa sekarang = 19 + 1 = 20 siswa.<br>4. Rata-rata baru = 1.520 &divide; 20 = <b>76</b>."
            }
        ]
    },
    {
        "index": 23,
        "title": "Perbandingan Ukuran Pemusatan & Penyebaran",
        "category": "Data dan Peluang - Data",
        "kisi_kisi": "Menganalisis ukuran pemusatan (mean vs median pada outlier), kuartil, dan jangkauan interkuartil.",
        "questions": [
            {
                "q": "Dalam suatu kumpulan data yang memuat nilai ekstrem atau pencilan (angka yang sangat besar atau sangat kecil dibandingkan angka lainnya), ukuran pemusatan data yang paling tepat dan representatif digunakan adalah ...",
                "options": [
                    "Median (karena tidak terpengaruh oleh nilai ekstrem)",
                    "Mean (rata-rata hitung)",
                    "Jangkauan (range)",
                    "Modus"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: Median (karena tidak terpengaruh oleh nilai ekstrem)</b><br><br><b>Karakteristik Ukuran Pemusatan:</b><br>Nilai rata-rata (mean) sangat sensitif dan mudah terdistorsi oleh adanya nilai ekstrem (outlier). Sebaliknya, <b>Median</b> hanya membagi posisi urutan data menjadi dua bagian yang sama besar di tengah, sehingga tidak terpengaruh oleh seberapa ekstrem nilai terkecil atau terbesarnya."
            },
            {
                "q": "Diberikan data terurut: 3, 5, 6, 7, 8, 10, 11, 12, 14. Kuartil bawah (Q₁) dan Kuartil atas (Q₃) dari data tersebut berturut-turut adalah ...",
                "options": [
                    "5,5 dan 11,5",
                    "5 dan 12",
                    "6 dan 11",
                    "6 dan 12"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 5,5 dan 11,5</b><br><br><b>Langkah Menentukan Kuartil:</b><br>Banyak data n = 9.<br>&bull; Median (Q₂) = data ke-5 yaitu 8.<br>&bull; Belahan bawah (kiri Q₂): 3, 5, 6, 7 &rarr; Q₁ = (5 + 6)/2 = <b>5,5</b>.<br>&bull; Belahan atas (kanan Q₂): 10, 11, 12, 14 &rarr; Q₃ = (11 + 12)/2 = <b>11,5</b>."
            },
            {
                "q": "Jangkauan interkuartil (hamparan) didefinisikan sebagai selisih antara ...",
                "options": [
                    "Kuartil atas (Q₃) dan kuartil bawah (Q₁)",
                    "Nilai maksimum dan nilai minimum",
                    "Kuartil atas (Q₃) dan median (Q₂)",
                    "Rata-rata dan median"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: Kuartil atas (Q₃) dan kuartil bawah (Q₁)</b><br><br><b>Definisi:</b><br>Jangkauan Interkuartil (IQR / Hamparan) dirumuskan: <b>IQR = Q₃ - Q₁</b>.<br>Sedangkan Simpangan Kuartil (Qd) adalah setengah dari hamparan: Qd = &frac12;(Q₃ - Q₁)."
            },
            {
                "q": "Jika suatu kumpulan data memiliki kuartil bawah Q₁ = 14 dan kuartil atas Q₃ = 26, maka nilai simpangan kuartil (Qd) data tersebut adalah ...",
                "options": [
                    "6",
                    "12",
                    "20",
                    "8"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 6</b><br><br><b>Rumus Simpangan Kuartil:</b><br>Qd = &frac12; &times; (Q₃ - Q₁)<br>Qd = &frac12; &times; (26 - 14) = &frac12; &times; 12 = <b>6</b>."
            },
            {
                "q": "Jika setiap nilai dalam suatu kelompok data dikalikan dengan 2 kemudian ditambah 5, maka pernyataan yang BENAR mengenai perubahan ukuran statistika adalah ...",
                "options": [
                    "Nilai rata-rata berubah menjadi 2 kali rata-rata lama ditambah 5",
                    "Jangkauan berubah menjadi 2 kali jangkauan lama ditambah 5",
                    "Nilai rata-rata tetap tidak berubah",
                    "Simpangan kuartil bertambah 5"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: Nilai rata-rata berubah menjadi 2 kali rata-rata lama ditambah 5</b><br><br><b>Sifat Transformasi Data:</b><br>&bull; <b>Ukuran Pemusatan (Mean, Median, Modus)</b> terpengaruh oleh SEMUA operasi aritmetika (perkalian dan penambahan): Mean baru = 2 &times; (Mean lama) + 5.<br>&bull; <b>Ukuran Penyebaran (Jangkauan, Simpangan Kuartil)</b> HANYA terpengaruh perkalian, TIDAK terpengaruh penambahan (karena selisihnya tetap)."
            }
        ]
    },
    {
        "index": 24,
        "title": "Peluang & Frekuensi Relatif Kejadian Tunggal",
        "category": "Data dan Peluang - Peluang",
        "kisi_kisi": "Menentukan ruang sampel, peluang teoritik kejadian tunggal, frekuensi relatif, dan frekuensi harapan.",
        "questions": [
            {
                "q": "Dua keping uang koin logam dilempar bersamaan sebanyak satu kali. Peluang munculnya sekurang-kurangnya satu sisi Angka (A) adalah ...",
                "options": [
                    "3/4",
                    "1/2",
                    "1/4",
                    "2/3"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 3/4</b><br><br><b>Langkah Penyelesaian:</b><br>1. Ruang sampel pelemparan 2 koin: S = {AA, AG, GA, GG} &rarr; n(S) = 4.<br>2. Kejadian sekurang-kurangnya 1 Angka: E = {AA, AG, GA} &rarr; n(E) = 3.<br>3. Peluang P(E) = n(E) / n(S) = <b>3/4</b>."
            },
            {
                "q": "Sebuah dadu bermata 6 dilemparkan satu kali. Peluang munculnya mata dadu bilangan prima adalah ...",
                "options": [
                    "1/2",
                    "1/3",
                    "2/3",
                    "1/6"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 1/2</b><br><br><b>Langkah Penyelesaian:</b><br>&bull; Ruang sampel dadu: S = {1, 2, 3, 4, 5, 6} &rarr; n(S) = 6.<br>&bull; Mata dadu prima: E = {2, 3, 5} &rarr; n(E) = 3.<br>&bull; P(E) = 3/6 = <b>1/2</b>."
            },
            {
                "q": "Sebuah kantong berisi 6 kelereng merah, 8 kelereng kuning, dan 10 kelereng biru. Diambil satu kelereng secara acak. Peluang terambil kelereng berwarna kuning adalah ...",
                "options": [
                    "1/3",
                    "1/4",
                    "5/12",
                    "1/2"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 1/3</b><br><br><b>Langkah Penyelesaian:</b><br>&bull; Total kelereng n(S) = 6 + 8 + 10 = 24 kelereng.<br>&bull; Kelereng kuning n(K) = 8.<br>&bull; P(Kuning) = 8 / 24 = <b>1/3</b>."
            },
            {
                "q": "Sebuah dadu dilemparkan sebanyak 180 kali. Frekuensi harapan munculnya mata dadu kelipatan 3 adalah ...",
                "options": [
                    "60 kali",
                    "30 kali",
                    "90 kali",
                    "45 kali"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 60 kali</b><br><br><b>Rumus Frekuensi Harapan:</b><br>Fh = P(A) &times; N<br>&bull; Mata dadu kelipatan 3: {3, 6} &rarr; n(A) = 2, n(S) = 6 &rarr; P(A) = 2/6 = 1/3.<br>&bull; Percobaan N = 180 kali.<br>&bull; Fh = 1/3 &times; 180 = <b>60 kali</b>."
            },
            {
                "q": "Dalam suatu percobaan pelemparan koin sebanyak 50 kali, sisi Gambar muncul sebanyak 22 kali. Nilai frekuensi relatif munculnya sisi Gambar adalah ...",
                "options": [
                    "0,44 (atau 22/50)",
                    "0,50",
                    "0,22",
                    "0,56"
                ],
                "ans": 0,
                "exp": "<b>Jawaban Benar: 0,44 (atau 22/50)</b><br><br><b>Rumus Frekuensi Relatif:</b><br>Frekuensi Relatif = Banyaknya kejadian muncul &divide; Banyaknya total percobaan<br>Frekuensi Relatif = 22 &divide; 50 = 44/100 = <b>0,44</b>."
            }
        ]
    }
]

def generate_html(topic):
    idx = topic["index"]
    title = topic["title"]
    cat = topic["category"]
    kisi = topic["kisi_kisi"]
    questions_json = json.dumps(topic["questions"], ensure_ascii=False, indent=12)

    return f'''<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Topik {idx}: {title} - Edufillah</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        body {{ font-family: 'Inter', sans-serif; scroll-behavior: smooth; }}
        
        .radio-custom:checked + div {{
            border-color: #4f46e5;
            background-color: #eef2ff;
        }}
        .radio-custom:checked + div .dot {{
            background-color: #4f46e5;
            border-color: #4f46e5;
        }}
    </style>
</head>
<body class="bg-slate-50 min-h-screen flex flex-col text-slate-800">

    <header class="bg-white shadow-sm sticky top-0 z-50">
        <div class="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
            <button onclick="handleBack()" class="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors font-bold text-sm bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Kembali
            </button>
            <div class="text-center truncate px-2">
                <span class="text-[11px] font-extrabold text-indigo-600 uppercase tracking-wider block">Matematika • Topik {idx}</span>
                <h1 class="text-sm sm:text-base font-black text-slate-900 truncate">{title}</h1>
            </div>
            <div class="w-16 flex justify-end">
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">KKM 85</span>
            </div>
        </div>
    </header>

    <main class="flex-grow max-w-4xl w-full mx-auto px-4 py-6 sm:py-8">
        <div class="mb-6 bg-white p-5 sm:p-6 rounded-2xl shadow-xs border border-slate-200">
            <div class="flex items-center gap-2 mb-2">
                <span class="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 font-extrabold text-xs">
                    {cat}
                </span>
                <span class="text-xs text-slate-500 font-medium">• Latihan Mandiri 5 Butir Soal</span>
            </div>
            <h2 class="text-lg sm:text-xl font-black text-slate-900 mb-1">{title}</h2>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{kisi}</p>
        </div>

        <form id="quiz-form" onsubmit="event.preventDefault();">
            <div id="quiz-container" class="space-y-5">
                <!-- Pertanyaan akan di-render di sini oleh JavaScript -->
            </div>

            <div class="mt-8 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 text-center">
                <button id="btn-submit" type="button" class="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white text-base sm:text-lg font-black rounded-xl shadow-lg shadow-indigo-200 transition-all transform hover:scale-102 cursor-pointer">
                    Periksa Jawaban
                </button>

                <div id="score-container" class="hidden mt-2">
                    <h3 class="text-sm font-bold text-slate-500 mb-1 uppercase tracking-wider">Nilai Akhir Anda</h3>
                    <div class="text-5xl sm:text-6xl font-black text-indigo-700 mb-2" id="final-score">0</div>
                    <div id="score-message" class="text-sm sm:text-base font-bold mb-6"></div>
                    
                    <button id="btn-reset" type="button" class="w-full sm:w-auto px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-all cursor-pointer inline-flex items-center justify-center gap-2 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Ulangi Tes
                    </button>
                </div>
            </div>
        </form>
    </main>

    <footer class="bg-slate-900 text-slate-400 py-6 mt-8">
        <div class="text-center px-4">
            <p class="font-bold tracking-wide text-xs sm:text-sm">Edufillah Learning App • Topik {idx}: {title}</p>
        </div>
    </footer>

    <script>
        const quizData = {questions_json};

        const form = document.getElementById('quiz-form');
        const quizContainer = document.getElementById('quiz-container');
        const submitBtn = document.getElementById('btn-submit');
        const resetBtn = document.getElementById('btn-reset');
        const scoreContainer = document.getElementById('score-container');
        const finalScoreEl = document.getElementById('final-score');
        const scoreMessageEl = document.getElementById('score-message');

        function handleBack() {{
            if (window.parent && window.parent !== window) {{
                window.parent.postMessage({{ type: 'CLOSE_MODAL' }}, '*');
            }}
            try {{
                window.history.back();
            }} catch (e) {{}}
        }}

        function initQuiz() {{
            quizContainer.innerHTML = '';
            quizData.forEach((item, index) => {{
                const qDiv = document.createElement('div');
                qDiv.className = 'bg-white p-5 sm:p-7 rounded-2xl shadow-xs border border-slate-200 transition-all';
                qDiv.id = `question-box-${{index}}`;

                let optionsHTML = '';
                item.options.forEach((opt, optIndex) => {{
                    const letters = ['A', 'B', 'C', 'D'];
                    optionsHTML += `
                        <label class="relative flex items-center cursor-pointer group">
                            <input type="radio" name="q${{index}}" value="${{optIndex}}" class="radio-custom sr-only peer" />
                            <div class="w-full flex items-center p-3.5 sm:p-4 rounded-xl border-2 border-slate-100 hover:border-indigo-200 bg-slate-50 hover:bg-slate-100 transition-all peer-focus-visible:ring-2 ring-indigo-500">
                                <div class="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 rounded-full border-2 border-slate-300 mr-3 flex items-center justify-center bg-white transition-colors">
                                    <div class="dot w-2 h-2 rounded-full transition-colors"></div>
                                </div>
                                <span class="font-bold text-slate-500 mr-2.5 text-sm sm:text-base">${{letters[optIndex]}}.</span>
                                <span class="text-slate-800 font-medium text-sm sm:text-base">${{opt}}</span>
                            </div>
                        </label>
                    `;
                }});

                qDiv.innerHTML = `
                    <div class="flex items-start gap-3 sm:gap-4 mb-4">
                        <div class="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-black text-xs sm:text-sm">
                            ${{index + 1}}
                        </div>
                        <h3 class="text-base sm:text-lg font-bold text-slate-800 leading-snug">${{item.q}}</h3>
                    </div>
                    <div class="space-y-2.5 pl-0 sm:pl-11">
                        ${{optionsHTML}}
                    </div>
                    <div id="explanation-${{index}}" class="hidden mt-5 pl-0 sm:pl-11">
                        <div class="p-4 sm:p-5 rounded-xl text-xs sm:text-sm border-l-4"></div>
                    </div>
                `;
                quizContainer.appendChild(qDiv);
            }});
        }}

        submitBtn.addEventListener('click', () => {{
            let correctCount = 0;

            quizData.forEach((item, index) => {{
                const selectedOption = document.querySelector(`input[name="q${{index}}"]:checked`);
                const expDiv = document.getElementById(`explanation-${{index}}`);
                const expBox = expDiv.querySelector('div');
                const qBox = document.getElementById(`question-box-${{index}}`);
                const inputs = document.querySelectorAll(`input[name="q${{index}}"]`);

                inputs.forEach(input => input.disabled = true);

                let isCorrect = false;
                if (selectedOption && parseInt(selectedOption.value) === item.ans) {{
                    isCorrect = true;
                    correctCount++;
                }}

                expDiv.classList.remove('hidden');
                
                if (isCorrect) {{
                    expBox.className = 'p-4 sm:p-5 rounded-xl text-xs sm:text-sm border-l-4 bg-emerald-50 border-emerald-500 text-emerald-950 leading-relaxed';
                    expBox.innerHTML = `
                        <div class="flex items-center text-emerald-700 font-bold mb-2 text-sm sm:text-base">
                            <svg class="w-5 h-5 mr-1.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            Jawaban Benar!
                        </div>
                        ${{item.exp}}
                    `;
                    qBox.classList.add('border-emerald-300', 'bg-emerald-50/20');
                }} else {{
                    expBox.className = 'p-4 sm:p-5 rounded-xl text-xs sm:text-sm border-l-4 bg-rose-50 border-rose-500 text-rose-950 leading-relaxed';
                    let headerText = selectedOption ? 'Jawaban Kurang Tepat' : 'Belum Dijawab';
                    expBox.innerHTML = `
                        <div class="flex items-center text-rose-700 font-bold mb-2 text-sm sm:text-base">
                            <svg class="w-5 h-5 mr-1.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            ${{headerText}}
                        </div>
                        ${{item.exp}}
                    `;
                    qBox.classList.add('border-rose-300', 'bg-rose-50/20');
                }}
            }});

            const finalScore = Math.round((correctCount / quizData.length) * 100);
            finalScoreEl.textContent = finalScore;

            if (finalScore >= 85) {{
                scoreMessageEl.innerHTML = `<span class="text-emerald-600">Selamat! Anda LULUS KKM (&ge; 85) dengan skor ${{finalScore}}/100! 🌟</span><br><span class="text-xs text-slate-500 font-normal">Capaian topik ini otomatis tercatat di dashboard.</span>`;
            }} else {{
                scoreMessageEl.innerHTML = `<span class="text-rose-600">Skor Anda ${{finalScore}}/100 (Batas Tuntas KKM 85).</span><br><span class="text-xs text-slate-500 font-normal">Pelajari pembahasan di atas lalu ulangi kuis untuk menuntaskan topik ini.</span>`;
            }}

            submitBtn.classList.add('hidden');
            scoreContainer.classList.remove('hidden');

            // Send score to parent window
            if (window.parent) {{
                window.parent.postMessage({{ 
                    type: 'MATH_QUIZ_SUBMITTED', 
                    score: finalScore,
                    topicIndex: {idx}
                }}, '*');
            }}
            
            setTimeout(() => {{
                document.getElementById('score-container').scrollIntoView({{ behavior: 'smooth', block: 'center' }});
            }}, 200);
        }});

        resetBtn.addEventListener('click', () => {{
            form.reset();
            initQuiz();
            scoreContainer.classList.add('hidden');
            submitBtn.classList.remove('hidden');
            window.scrollTo({{ top: 0, behavior: 'smooth' }});
        }});

        document.addEventListener('DOMContentLoaded', initQuiz);
    </script>
</body>
</html>'''

out_dir = "public/matematika"
os.makedirs(out_dir, exist_ok=True)

for topic in topics_data:
    idx = topic["index"]
    filepath = os.path.join(out_dir, f"math_{idx}.html")
    html = generate_html(topic)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Generated {filepath}: {topic['title']} ({len(topic['questions'])} questions)")

print(f"SUCCESS: Generated all {len(topics_data)} topic HTML files!")
