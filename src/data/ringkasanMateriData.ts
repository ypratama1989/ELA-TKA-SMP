import { SubjectId } from '../types';

export interface SubjectSummary {
  subjectId: SubjectId;
  subjectName: string;
  icon: string;
  badge: string;
  color: string;
  totalTopics: number;
  sections: Array<{
    title: string;
    description: string;
    keyPoints: string[];
    formulasOrRules?: string[];
  }>;
}

export const RINGKASAN_MATERI_DATA: Record<SubjectId, SubjectSummary> = {
  math: {
    subjectId: 'math',
    subjectName: 'Matematika',
    icon: 'Calculator',
    badge: '24 Topik Inti TKA',
    color: 'from-blue-600 to-indigo-700',
    totalTopics: 24,
    sections: [
      {
        title: '1. Bilangan Real, Operasi & Perbandingan',
        description: 'Fondasi aritmetika, sifat operasi (komutatif, asosiatif, distributif), perbandingan senilai vs berbalik nilai.',
        keyPoints: [
          'Hierarki KABATAKU: Kurung () → Kali/Bagi (kiri ke kanan) → Tambah/Kurang.',
          'Perbandingan Senilai: Jika x naik, y ikut naik (x1 / y1 = x2 / y2). Contoh: bensin & jarak tempuh.',
          'Perbandingan Berbalik Nilai: Jika x naik, y justru turun (x1 × y1 = x2 × y2). Contoh: jumlah pekerja & waktu selesai.',
          'Faktorisasi Prima, FPB (faktor persekutuan terbesar) & KPK (kelipatan persekutuan terkecil).',
        ],
        formulasOrRules: [
          'Perbandingan Senilai: a1/b1 = a2/b2 → a2 = (a1 × b2) / b1',
          'Perbandingan Berbalik Nilai: a1 × b1 = a2 × b2 → a2 = (a1 × b1) / b2',
          'Skala Denah/Peta: Skala = Jarak pada Peta (JP) / Jarak Sebenarnya (JS)',
        ],
      },
      {
        title: '2. Aljabar, Persamaan & Sistem Linear (PLSV & SPLDV)',
        description: 'Operasi bentuk aljabar, pemfaktoran, persamaan linear satu variabel dan dua variabel kontekstual.',
        keyPoints: [
          'Suku sejenis memiliki variabel dan eksponen yang identik; hanya suku sejenis yang dapat dijumlahkan/dikurangkan.',
          'PLSV: Pindah ruas mengubah tanda (+ menjadi -, × menjadi ÷). Jika kedua ruas dikali/dibagi bilangan negatif pada pertidaksamaan, tanda dibalik (misal: > menjadi <).',
          'SPLDV dapat diselesaikan dengan 3 metode: Eliminasi, Substitusi, atau Gabungan (Campuran).',
        ],
        formulasOrRules: [
          'Bentuk Kuadrat: (a + b)² = a² + 2ab + b²',
          'Selisih Kuadrat: a² - b² = (a + b)(a - b)',
          'SPLDV Standar: a1·x + b1·y = c1 dan a2·x + b2·y = c2',
        ],
      },
      {
        title: '3. Relasi, Fungsi & Barisan Deret',
        description: 'Notasi f(x), domain, kodomain, range, barisan aritmetika dan geometri berhingga.',
        keyPoints: [
          'Fungsi adalah relasi khusus di mana setiap anggota domain tepat memiliki satu pasangan di kodomain.',
          'Barisan Aritmetika memiliki selisih tetap (beda = b = Un - Un-1).',
          'Barisan Geometri memiliki rasio tetap (rasio = r = Un / Un-1).',
        ],
        formulasOrRules: [
          'Fungsi Linear: f(x) = ax + b',
          'Barisan Aritmetika: Un = a + (n - 1)b',
          'Jumlah Deret Aritmetika: Sn = n/2 · (2a + (n - 1)b) = n/2 · (a + Un)',
          'Barisan Geometri: Un = a · r^(n - 1)',
          'Jumlah Deret Geometri: Sn = a(r^n - 1) / (r - 1) untuk r > 1',
        ],
      },
      {
        title: '4. Geometri Sudut, Pythagoras & Bangun Datar',
        description: 'Hubungan dua garis sejajar, Teorema Pythagoras segitiga siku-siku, keliling & luas bangun datar.',
        keyPoints: [
          'Dua garis sejajar dipotong garis transversal: Sudut sehadap (sama), sudut berseberangan (sama), sudut sepihak (jumlahnya 180°).',
          'Teorema Pythagoras: Sisi miring (hipotenusa) c² = a² + b².',
          'Tripel Pythagoras Populer: (3, 4, 5), (5, 12, 13), (7, 24, 25), (8, 15, 17), (9, 40, 41) beserta kelipatannya.',
          'Kekongruenan (bentuk & ukuran sama persis) vs Kesebangunan (sudut sama, rasio sisi-sisi sebanding).',
        ],
        formulasOrRules: [
          'Pythagoras: c = √(a² + b²), a = √(c² - b²)',
          'Luas Segitiga: L = ½ × alas × tinggi',
          'Luas & Keliling Lingkaran: L = π·r² | K = 2·π·r = π·d',
          'Luas Trapesium: L = ½ × (jumlah sisi sejajar) × tinggi',
        ],
      },
      {
        title: '5. Bangun Ruang Sisi Datar & Sisi Lengkung',
        description: 'Jaring-jaring, luas permukaan, dan volume kubus, balok, prisma, limas, tabung, kerucut, bola.',
        keyPoints: [
          'Volume Prisma secara umum = Luas Alas × Tinggi Prisma.',
          'Volume Limas secara umum = ⅓ × Luas Alas × Tinggi Limas.',
          'Luas permukaan gabungan: Hati-hati jangan menghitung luas bidang yang berhimpit!',
        ],
        formulasOrRules: [
          'Tabung: Volume = π·r²·t | Luas Selimut = 2·π·r·t | Luas Permukaan = 2·π·r·(r + t)',
          'Kerucut: Volume = ⅓·π·r²·t | Garis Pelukis s = √(r² + t²) | Luas Selimut = π·r·s',
          'Bola: Volume = 4/3·π·r³ | Luas Permukaan = 4·π·r²',
        ],
      },
      {
        title: '6. Statistika & Teori Peluang Kejadian',
        description: 'Mean (rata-rata), median (nilai tengah), modus (paling sering muncul), dan peluang kejadian tunggal.',
        keyPoints: [
          'Mean Gabungan: X_gab = (n1·X1 + n2·X2) / (n1 + n2).',
          'Median: Urutkan data terlebih dahulu dari terkecil ke terbesar.',
          'Peluang suatu kejadian P(A) berkisar antara 0 (mustahil) sampai 1 (pasti).',
        ],
        formulasOrRules: [
          'Rerata (Mean): x̄ = Σx / n',
          'Peluang Teoretik: P(A) = n(A) / n(S)',
          'Frekuensi Harapan: Fh(A) = P(A) × N (jumlah percobaan)',
        ],
      },
    ],
  },

  indo: {
    subjectId: 'indo',
    subjectName: 'Bahasa Indonesia',
    icon: 'BookMarked',
    badge: '11 Topik Inti TKA',
    color: 'from-emerald-600 to-teal-700',
    totalTopics: 11,
    sections: [
      {
        title: '1. Pemaknaan Istilah & Kosakata Kontekstual',
        description: 'Menemukan arti kata teknis, kata serapan, makna leksikal vs gramatikal dalam teks fiksi dan nonfiksi.',
        keyPoints: [
          'Istilah teknis dipahami dari konteks bidang keilmuannya (misal: "stigma" di bidang sosial, "fotosintesis" di biologi).',
          'Gunakan petunjuk kalimat pendamping (kata transisi, definisi sinonim, atau contoh konkret yang dipaparkan penulis).',
        ],
        formulasOrRules: [
          'Rumus Pemaknaan: Cermati kata sebelum dan sesudah (konteks kalimat) + padanan kata baku KBBI.',
        ],
      },
      {
        title: '2. Gagasan Utama, Ide Pokok & Struktur Paragraf',
        description: 'Menentukan kalimat utama, gagasan pendukung, dan jenis paragraf (deduktif, induktif, campuran).',
        keyPoints: [
          'Deduktif: Kalimat utama di AWAL paragraf, diikuti kalimat penjelas (pola umum → khusus).',
          'Induktif: Kalimat utama di AKHIR paragraf, diawali rincian bukti/fakta (pola khusus → simpulan umum).',
          'Campuran: Kalimat utama di AWAL & ditegaskan kembali di AKHIR paragraf.',
          'Ide pokok adalah inti sari kalimat utama yang dirumuskan secara padat dan mewakili seluruh paragraf.',
        ],
      },
      {
        title: '3. Informasi Tersurat vs Tersirat (5W+1H / ADIKSIMBA)',
        description: 'Menggali fakta langsung dan menyimpulkan pesan implisit dari isi teks.',
        keyPoints: [
          'ADIKSIMBA: Apa (peristiwa), Di mana (tempat), Kapan (waktu), Siapa (tokoh), Mengapa (alasan/sebab), Bagaimana (proses/akibat).',
          'Tersurat: Fakta tertulis jelas di lembar bacaan.',
          'Tersirat: Memerlukan simpulan logis berdasarkan bukti-bukti yang tertera.',
        ],
      },
      {
        title: '4. Majas, Citraan & Nilai Kehidupan Karya Fiksi',
        description: 'Gaya bahasa kiasan, citraan indrawi, perwatakan tokoh, latar suasana, dan respons emosional pembaca.',
        keyPoints: [
          'Personifikasi: Menggambarkan benda mati bersikap seperti manusia (contoh: "Angin berbisik lembut").',
          'Metafora: Perbandingan langsung tanpa kata pembanding (contoh: "Ia adalah tulang punggung keluarga").',
          'Hiperbola: Ungkapan berlebihan yang melampaui kenyataan (contoh: "Air matanya membanjiri seisi ruangan").',
          'Citraan: Penglihatan (visual), Pendengaran (auditori), Perabaan (taktil), Penciuman, Pencecapan/Perasa.',
          'Nilai Moral (budi pekerti), Nilai Sosial (tolong menolong), Nilai Agama/Religius, Nilai Budaya.',
        ],
      },
      {
        title: '5. Evaluasi Teks & Kelogisan Antar-Informasi',
        description: 'Memprediksi kelanjutan peristiwa, menilai relevansi dengan kehidupan nyata, dan membandingkan akurasi dua teks.',
        keyPoints: [
          'Prediksi peristiwa: Berpijak pada hukum sebab-akibat (kausalitas) yang ada di dalam teks.',
          'Relevansi teks: Menemukan kesamaan pola perilaku tokoh atau dampak sosial yang dialami di era sekarang.',
          'Perbandingan Teks: Bedah persamaan tema, perbedaan sudut pandang penulis, dan ketepatan bukti data yang disajikan.',
        ],
      },
    ],
  },

  eng: {
    subjectId: 'eng',
    subjectName: 'Bahasa Inggris',
    icon: 'Languages',
    badge: '18 Topik Inti TKA',
    color: 'from-amber-600 to-orange-700',
    totalTopics: 18,
    sections: [
      {
        title: '1. Text Genres (Genres & Social Functions)',
        description: 'Mastering the generic structures, purpose, and language features of standard texts.',
        keyPoints: [
          'Descriptive Text: To describe a particular person, place, or thing. (Identification → Description). Simple Present Tense.',
          'Procedure Text: To show how something is done through a sequence of steps. (Goal → Materials → Steps). Imperative sentences.',
          'Recount Text: To retell past events/experiences. (Orientation → Events → Re-orientation). Simple Past Tense.',
          'Narrative Text: To entertain/amuse and teach moral lessons. (Orientation → Complication → Resolution → Coda). Past Tense.',
          'Report Text: To present factual information about natural/social phenomena in general. (General Classification → Description).',
        ],
      },
      {
        title: '2. Essential Tenses & Time Signals',
        description: 'Understanding grammar rules for Simple Present, Past, Continuous, and Perfect Tenses.',
        keyPoints: [
          'Simple Present (Routines & Facts): S + V1(s/es) | S + do/does not + V1 | Time signals: always, usually, every day.',
          'Simple Past (Completed Past Actions): S + V2 | S + did not + V1 | Time signals: yesterday, last week, 2 days ago.',
          'Present Continuous (Happening Now): S + am/is/are + V-ing | Time signals: now, at the moment, right now.',
          'Present Perfect (Past Action Connected to Present): S + have/has + V3 | Time signals: since, for, already, yet.',
        ],
        formulasOrRules: [
          'Active: Subject + Verb + Object',
          'Passive Voice: Object + Be (am/is/are/was/were/been) + Verb 3 (Past Participle) + by Subject',
          'Conditional Type 1: If + Simple Present (S + V1), Simple Future (S + will + V1)',
        ],
      },
      {
        title: '3. Short Functional Texts & Expressions',
        description: 'Notices, announcements, invitations, greeting cards, giving directions, suggestion & permission.',
        keyPoints: [
          'Notice & Caution: Pay attention to words like "Beware", "No Entry", "Keep Off", "Danger".',
          'Invitation Card: Identify RSVP (please reply), event, host, date, time, and location.',
          'Greeting Card: Distinguish the occasion (Birthday, Congratulations, Sympathy/Condolence, Get Well Soon).',
          'Modal Expressions: Should (suggestion/advice), May/Can (permission), Must (obligation).',
          'Conjunctions: Addition (and, moreover), Contrast (but, however, although), Cause-Effect (because, so, therefore).',
        ],
      },
    ],
  },

  ipa: {
    subjectId: 'ipa',
    subjectName: 'IPA Terpadu',
    icon: 'Atom',
    badge: '18 Topik Inti TKA',
    color: 'from-purple-600 to-indigo-800',
    totalTopics: 18,
    sections: [
      {
        title: '1. Zat, Wujud, Unsur & Perubahan Materi',
        description: 'Massa jenis, sifat fisika vs kimia, pemisahan campuran, konsep unsur, senyawa, dan asam-basa.',
        keyPoints: [
          'Perubahan Fisika: Tidak menghasilkan zat baru, hanya perubahan wujud/bentuk (contoh: es mencair, gula larut, beras ditumbuk).',
          'Perubahan Kimia: Menghasilkan zat baru melalui reaksi kimia (contoh: besi berkarat, kayu terbakar, susu basi).',
          'Pemisahan Campuran: Filtrasi (penyaringan), Destilasi (perbedaan titik didih), Kristalisasi, Kromatografi.',
          'Asam (pH < 7, lakmus biru jadi merah) vs Basa (pH > 7, lakmus merah jadi biru).',
        ],
        formulasOrRules: [
          'Massa Jenis: ρ = m / V (kg/m³ atau g/cm³)',
          'Konversi Suhu: C : R : (F - 32) : (K - 273) = 5 : 4 : 9 : 5',
        ],
      },
      {
        title: '2. Mekanika: Gerak, Gaya, Energi & Pesawat Sederhana',
        description: 'Hukum Newton, GLB & GLBB, rumus kalor, usaha, energi, dan keuntungan mekanik pesawat sederhana.',
        keyPoints: [
          'Hukum I Newton (Inersia): ΣF = 0 (benda diam tetap diam, benda bergerak tetap bergerak lurus beraturan).',
          'Hukum II Newton: a = ΣF / m → F = m · a.',
          'Hukum III Newton: F_aksi = - F_reaksi (sama besar, berlawanan arah, bekerja pada dua benda berbeda).',
          'Pesawat Sederhana: Tuas (W · lb = F · lk), Katrol Tetap (KM = 1), Katrol Bergerak (KM = 2), Bidang Miring (KM = s / h).',
        ],
        formulasOrRules: [
          'Kalor Perubahan Suhu: Q = m · c · ΔT',
          'Kalor Perubahan Wujud: Q = m · L (lebur) | Q = m · U (uap)',
          'Usaha & Daya: W = F · s | P = W / t',
          'Energi: Ek = ½ · m · v² | Ep = m · g · h',
          'Tekanan Zat Padat & Cair: P = F / A | P_hidrostatis = ρ · g · h',
          'Hukum Pascal: F1 / A1 = F2 / A2',
        ],
      },
      {
        title: '3. Kelistrikan, Kemagnetan & Gelombang',
        description: 'Listrik statis (Hukum Coulomb), listrik dinamis (Hukum Ohm & Kirchhoff), sifat magnet, dan optik.',
        keyPoints: [
          'Hukum Coulomb: Gaya tarik/tolak sebanding perkalian muatan dan berbanding terbalik kuadrat jarak (r²).',
          'Hukum Ohm: Arus mengalir sebanding beda potensial dan berbanding terbalik dengan hambatan (V = I · R).',
          'Rangkaian Hambatan: Seri (R_total = R1 + R2), Paralel (1/R_total = 1/R1 + 1/R2).',
          'Kutub magnet sejenis tolak-menolak, berlawanan jenis tarik-menarik. Cara membuat magnet: Gosokan, Induksi, Elektromagnet.',
        ],
        formulasOrRules: [
          'Hukum Coulomb: F = k · (q1 · q2) / r²',
          'Hukum Ohm: V = I · R | Daya Listrik P = V · I = I²·R = V²/R',
          'Gelombang: v = λ · f = λ / T',
          'Cermin & Lensa: 1/f = 1/s + 1/s\' | Perbesaran M = |s\' / s| = |h\' / h|',
        ],
      },
      {
        title: '4. Biologi: Sel, Sistem Organ Manusia & Pewarisan Sifat',
        description: 'Organel sel, sistem pencernaan, reproduksi, ekologi lingkungan, hukum genetika Mendel.',
        keyPoints: [
          'Sel: Mitokondria (respirasi sel/penghasil energi ATP), Ribosom (sintesis protein), Kloroplas (fotosintesis tumbuhan).',
          'Pencernaan Manusia: Mulut (enzim Ptialin/Amilase) → Lambung (HCl, Pepsin, Renin) → Usus Halus (Amilase, Lipase, Tripsin).',
          'Ekologi: Produsen (autotrof) → Konsumen I (herbivora) → Konsumen II/III (karnivora) → Pengurai (dekomposer).',
          'Pewarisan Sifat Mendel: Monohibrid dominan penuh menghasilkan perbandingan fenotipe F2 = 3 : 1.',
        ],
      },
    ],
  },
};

export function generateAllSubjectsTextSummary(): string {
  let doc = `========================================================================\n`;
  doc += `              EDULFILLAH LEARNING APP - PREPARASI TKA SMP\n`;
  doc += `              BUKU SAKU RINGKASAN MATERI DAN RUMUS LENGKAP\n`;
  doc += `========================================================================\n\n`;
  doc += `Dokumen ini disusun khusus sebagai panduan belajar cepat dan komprehensif\n`;
  doc += `mencakup 4 mata pelajaran: Matematika, Bahasa Indonesia, Bahasa Inggris, dan IPA Terpadu.\n\n`;

  const subjects: SubjectId[] = ['math', 'indo', 'eng', 'ipa'];

  subjects.forEach((subKey) => {
    const summary = RINGKASAN_MATERI_DATA[subKey];
    doc += `\n########################################################################\n`;
    doc += `MATA PELAJARAN: ${summary.subjectName.toUpperCase()} (${summary.badge})\n`;
    doc += `########################################################################\n\n`;

    summary.sections.forEach((sec, idx) => {
      doc += `------------------------------------------------------------------------\n`;
      doc += `[BAGIAN ${idx + 1}] ${sec.title.toUpperCase()}\n`;
      doc += `Deskripsi: ${sec.description}\n`;
      doc += `------------------------------------------------------------------------\n`;
      doc += `Poin-Poin Kunci & Konsep Utama:\n`;
      sec.keyPoints.forEach((kp) => {
        doc += `  * ${kp}\n`;
      });

      if (sec.formulasOrRules && sec.formulasOrRules.length > 0) {
        doc += `\nRumus / Aturan Kunci:\n`;
        sec.formulasOrRules.forEach((f) => {
          doc += `  [!] ${f}\n`;
        });
      }
      doc += `\n`;
    });
  });

  doc += `\n========================================================================\n`;
  doc += `Selamat Belajar dan Semoga Meraih Hasil Maksimal di TKA SMP!\n`;
  doc += `Edufillah Platform - Hak Cipta Terpelihara\n`;
  doc += `========================================================================\n`;
  return doc;
}

export function downloadTextFile(filename: string, content: string) {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
