import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  Play, 
  Award, 
  RotateCcw, 
  Sparkles, 
  ArrowRight,
  ArrowLeft, 
  FileSpreadsheet, 
  Video, 
  ExternalLink, 
  X, 
  Tv, 
  PlayCircle,
  Network,
  FileText,
  Download,
  Loader2,
  Clock,
  AlertCircle,
  Lock,
  HardDrive
} from 'lucide-react';
import { UserProfile, SubjectId, QuizConfig, TopicInfo } from '../types';
import { TOPICS_BY_SUBJECT, SUBJECT_NAMES, getTryOutQuestions } from '../data/quizData';
import { IPA_MIND_MAP_LINKS } from '../data/mindMapData';
import { IpaTopicQuizModal } from './IpaTopicQuizModal';
import { MathTopicQuizModal } from './MathTopicQuizModal';
import { EngTopicQuizModal } from './EngTopicQuizModal';
import { IndoTopicQuizModal } from './IndoTopicQuizModal';
import { SubjectMaterialPdfModal } from './SubjectMaterialPdfModal';
import { 
  getMaterialInfoFromStorage, 
  downloadMaterialWithProgress, 
  saveMaterialToStorage, 
  formatFileSize, 
  StoredMaterialInfo, 
  SUBJECT_MATERIAL_METADATA 
} from '../lib/materialStorage';
import { useModalBackHandler } from '../hooks/useModalBackHandler';

interface VideoMaterial {
  id: string;
  title: string;
  channel: string;
  duration: string;
  description: string;
  url: string;
}

function getYouTubeEmbedInfo(url: string): { videoId: string; embedUrl: string; thumbnailUrl: string } | null {
  if (!url) return null;
  const regExp = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/;
  const match = url.match(regExp);
  if (match && match[1]) {
    const videoId = match[1];
    return {
      videoId,
      embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`,
      thumbnailUrl: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    };
  }
  return null;
}

const VIDEO_MATERIALS_DATA: Record<SubjectId, VideoMaterial[]> = {
  math: [
    {
      id: 'v-math-1',
      title: '1. Perbandingan dan sifat-sifat bilangan',
      channel: 'Materi Matematika SMP',
      duration: 'Video Edukasi',
      description: 'Konsep dasar perbandingan nilai, sifat-sifat operasi bilangan, dan aplikasinya dalam soal cerita.',
      url: 'https://youtu.be/qC4xTBotMnE?si=Zinog56-_gyN12NH',
    },
    {
      id: 'v-math-2',
      title: '2. Operasi aritmetika pada bilangan',
      channel: 'Materi Matematika SMP',
      duration: 'Video Edukasi',
      description: 'Aturan operasi hitung bilangan bulat, pecahan, desimal, serta hierarki hitung campuran.',
      url: 'https://youtu.be/uV8A3EGuGWM?si=Zn1q5Uoi1FCyM7oE',
    },
    {
      id: 'v-math-3',
      title: '3. Estimasi/ perkiraan hasil perhitungan',
      channel: 'Materi Matematika SMP',
      duration: 'Video Edukasi',
      description: 'Strategi penaksiran, pembulatan angka, dan estimasi hasil perhitungan secara cepat dan akurat.',
      url: 'https://youtu.be/kaTU-GGW-7Y?si=hTr68nzWlRagUFGo',
    },
    {
      id: 'v-math-4',
      title: '4. Faktorisasi prima bilangan asli',
      channel: 'Materi Matematika SMP',
      duration: 'Video Edukasi',
      description: 'Pohon faktor, bilangan prima, faktorisasi prima, serta penentuan FPB dan KPK.',
      url: 'https://youtu.be/vH2Cr3-XuFM?si=NCdqt9THmR11U1Hk',
    },
    {
      id: 'v-math-5',
      title: '5. Rasio (skala, proporsi, dan laju perubahan)',
      channel: 'Materi Matematika SMP',
      duration: 'Video Edukasi',
      description: 'Perbandingan rasio, skala denah/peta, proporsi nilai, dan laju perubahan besaran.',
      url: 'https://youtu.be/iA9rR487ONQ?si=5R99MJ1YhXCzZ5qP',
    },
    {
      id: 'v-math-6',
      title: '6. Perbandingan senilai dan berbalik nilai',
      channel: 'Materi Matematika SMP',
      duration: 'Video Edukasi',
      description: 'Analisis dan trik penyelesaian soal cerita perbandingan senilai vs perbandingan berbalik nilai.',
      url: 'https://youtu.be/KVP8xG8hpC0?si=AT1ZVwIckC5Nfgyy',
    },
    {
      id: 'v-math-7',
      title: '7. Persamaan linear satu variabel',
      channel: 'Materi Matematika SMP',
      duration: 'Video Edukasi',
      description: 'Konsep persamaan linear satu variabel (PLSV), teknik pindah ruas, dan pemodelan aljabar.',
      url: 'https://youtu.be/7veosRwnWVg?si=LrOD3awzVjqSy87g',
    },
    {
      id: 'v-math-8',
      title: '8. Pertidaksamaan linear satu variabel',
      channel: 'Materi Matematika SMP',
      duration: 'Video Edukasi',
      description: 'Aturan pembalikan tanda pertidaksamaan (PtLSV), himpunan penyelesaian, dan garis bilangan.',
      url: 'https://youtu.be/qpbkYNMbEA8?si=DokI4jOyX4HrZb1A',
    },
    {
      id: 'v-math-9',
      title: '9. Sistem persamaan linear dua variabel',
      channel: 'Materi Matematika SMP',
      duration: 'Video Edukasi',
      description: 'Penyelesaian SPLDV menggunakan metode eliminasi, substitusi, dan grafik untuk soal kontekstual.',
      url: 'https://youtu.be/QNigb4Art5Y?si=rvtkxydFF5Cq5Nkd',
    },
    {
      id: 'v-math-10',
      title: '10. Bentuk aljabar dan sifat-sifat operasinya (komutatif, asosiatif, dan distributif)',
      channel: 'Materi Matematika SMP',
      duration: 'Video Edukasi',
      description: 'Penyederhanaan suku sejenis, operasi aljabar, dan sifat komutatif, asosiatif, distributif.',
      url: 'https://youtu.be/PfSAn1CjXlk?si=qp3U95WsmKp0MV5q',
    },
    {
      id: 'v-math-11',
      title: '11. Relasi dan fungsi (domain, kodomain, range), serta penyajiannya',
      channel: 'Materi Matematika SMP',
      duration: 'Video Edukasi',
      description: 'Pengenalan relasi, fungsi f(x), diagram panah, pasangan berurutan, domain, kodomain, dan range.',
      url: 'https://youtu.be/sYk-FTqrOnk?si=0hIud68LAlxlJ833',
    },
    {
      id: 'v-math-12',
      title: '12. Barisan berhingga bilangan',
      channel: 'Materi Matematika SMP',
      duration: 'Video Edukasi',
      description: 'Pola bilangan, barisan aritmetika, barisan geometri, dan rumus menentukan suku ke-n (Un).',
      url: 'https://youtu.be/tSYXsH0tL-4?si=uxgq42Z7e5--_7uB',
    },
    {
      id: 'v-math-13',
      title: '13. Deret berhingga bilangan',
      channel: 'Materi Matematika SMP',
      duration: 'Video Edukasi',
      description: 'Konsep dan perhitungan jumlah n suku pertama (Sn) deret aritmetika dan geometri berhingga.',
      url: 'https://youtu.be/cdgxGE3xxEU?si=I7-0k6X3gXR25P_K',
    },
    {
      id: 'v-math-14',
      title: '14. Hubungan antar-sudut yang terbentuk oleh dua garis yang berpotongan, dan oleh dua garis sejajar yang dipotong suatu garis transversal (termasuk penentuan besar sudut dalam segitiga)',
      channel: 'Materi Matematika SMP',
      duration: 'Video Edukasi',
      description: 'Sudut sehadap, berseberangan, sepihak, bertolak belakang, serta sudut interior/eksterior segitiga.',
      url: 'https://youtu.be/uu96vz4mwfA?si=k-Eioxlw48gQEz1w',
    },
    {
      id: 'v-math-15',
      title: '15. Teorema Pythagoras',
      channel: 'Materi Matematika SMP',
      duration: 'Video Edukasi',
      description: 'Prinsip kuadrat sisi miring segitiga siku-siku, tripel Pythagoras populer, dan penerapannya.',
      url: 'https://youtu.be/JJaptwjRbxc?si=pklXYsXpUmKt1MC3',
    },
    {
      id: 'v-math-16',
      title: '16. Kekongruenan dan kesebangunan bangun datar',
      channel: 'Materi Matematika SMP',
      duration: 'Video Edukasi',
      description: 'Syarat dua bangun datar kongruen dan sebangun, perbandingan sisi bersesuaian, dan perbandingan luas.',
      url: 'https://youtu.be/1bqemOyRYwQ?si=sAcwYdbIzaiLkTdH',
    },
    {
      id: 'v-math-17',
      title: '17. Jaring-jaring bangun ruang (prisma, tabung, limas dan kerucut)',
      channel: 'Materi Matematika SMP',
      duration: 'Video Edukasi',
      description: 'Pola bukaan jaring-jaring bangun ruang prisma, tabung, limas, dan kerucut pada bidang datar.',
      url: 'https://youtu.be/LjCCyNRb7ZM?si=EwnxpQ4nNYcvicvB',
    },
    {
      id: 'v-math-18',
      title: '18. Transformasi tunggal (refleksi, translasi, rotasi, dan dilatasi) terhadap titik, garis, dan bangun datar pada bidang',
      channel: 'Materi Matematika SMP',
      duration: 'Video Edukasi',
      description: 'Transformasi geometri: rumus translasi (pergeseran), refleksi (pencerminan), rotasi, dan dilatasi.',
      url: 'https://youtu.be/4ojT0jS_pR8?si=GCkZobXtSJAxlifs',
    },
    {
      id: 'v-math-19',
      title: '19. Keliling dan luas bangun datar (daerah segi banyak dan daerah lingkaran, serta daerah gabungannya)',
      channel: 'Materi Matematika SMP',
      duration: 'Video Edukasi',
      description: 'Perhitungan keliling dan luas segi empat, segitiga, lingkaran, serta daerah bidang gabungan.',
      url: 'https://youtu.be/0Z2f5yppJbo?si=DCJtiW3TTKNQtOUv',
    },
    {
      id: 'v-math-20',
      title: '20. Volume bangun ruang (prisma, limas, dan bola)',
      channel: 'Materi Matematika SMP',
      duration: 'Video Edukasi',
      description: 'Rumus dan aplikasi volume bangun ruang prisma tegak, limas segi-n, tabung, kerucut, dan bola.',
      url: 'https://youtu.be/q50HvRP1n4E?si=vgeDGacT5nnAn9ce',
    },
    {
      id: 'v-math-21',
      title: '21. Perumusan pertanyaan untuk mendapatkan data, serta penyajian, dan peginterpretasian data',
      channel: 'Materi Matematika SMP',
      duration: 'Video Edukasi',
      description: 'Teknik pengumpulan data, membaca tabel frekuensi, diagram batang, garis, dan diagram lingkaran.',
      url: 'https://youtu.be/RbWBiYt3Ppw?si=xa84gckjxtBSDkMO',
    },
    {
      id: 'v-math-22',
      title: '22. Terkait penentuan dan penaksiran rerata (mean), median, modus, dan jangkauan (range) dari data',
      channel: 'Materi Matematika SMP',
      duration: 'Video Edukasi',
      description: 'Ukuran pemusatan dan penyebaran data: rumus mean, median, modus, dan range data tunggal & kelompok.',
      url: 'https://youtu.be/APDjLfxq6vY?si=JBtCdAAYWDz6yQCa',
    },
    {
      id: 'v-math-23',
      title: '23. Perbandingan ukuran pemusatan dan ukuran penyebaran beberapa kelompok data',
      channel: 'Materi Matematika SMP',
      duration: 'Video Edukasi',
      description: 'Analisis perbandingan mean gabungan, kuartil, dan jangkauan antarkuartil antarkelompok data.',
      url: 'https://youtu.be/EojQKb4uFA0?si=q6gPR4QurBD7lzbp',
    },
    {
      id: 'v-math-24',
      title: '24. Peluang dan frekuensi relatif dari kejadian tunggal',
      channel: 'Materi Matematika SMP',
      duration: 'Video Edukasi',
      description: 'Titik sampel, ruang sampel n(S), peluang teoretik kejadian tunggal, dan frekuensi harapan/relatif.',
      url: 'https://youtu.be/TYV87PhZyUM?si=MeEQ0ydFWzCAAvEi',
    },
  ],
  indo: [
    {
      id: 'v-indo-1',
      title: '1. Mengidentifikasi penggunaan istilah dalam berbagai bidang',
      channel: 'Materi Bahasa Indonesia SMP',
      duration: 'Video Edukasi',
      description: 'Memahami makna istilah teknis, serapan, dan kosakata khusus di berbagai bidang keilmuan.',
      url: 'https://youtu.be/b6QKzJ1XZVU?si=YPM5sKNpMaT8bxT8',
    },
    {
      id: 'v-indo-2',
      title: '2. Mengidentifikasi objek dan/atau latar berdasarkan kosakata yang digunakan dalam teks fiksi atau nonfiksi',
      channel: 'Materi Bahasa Indonesia SMP',
      duration: 'Video Edukasi',
      description: 'Menemukan objek deskripsi dan latar (tempat, waktu, suasana) melalui pilihan kata dalam teks.',
      url: 'https://youtu.be/2yBXMng8qr8?si=ue-BhNp8b4Kj9ViX',
    },
    {
      id: 'v-indo-3',
      title: '3. Mengidentifikasi informasi penting yang tersurat dalam teks',
      channel: 'Materi Bahasa Indonesia SMP',
      duration: 'Video Edukasi',
      description: 'Teknik menemukan fakta langsung (tersurat) menggunakan kaidah rumus pertanyaan adiksimba (5W+1H).',
      url: 'https://youtu.be/6ZTXTKgsIdc?si=JMYtGw_L4MxsfRAG',
    },
    {
      id: 'v-indo-4',
      title: '4. Menyusun kerangka atau bagan berdasarkan bagian-bagian penting dalam teks',
      channel: 'Materi Bahasa Indonesia SMP',
      duration: 'Video Edukasi',
      description: 'Langkah memetakan struktur teks, alur peristiwa, dan bagan hierarki isi bacaan secara sistematis.',
      url: 'https://youtu.be/Ul16RLbJOu8?si=ND6AQ1xzEwr8crQK',
    },
    {
      id: 'v-indo-5',
      title: '5. Menyimpulkan ide pokok, gagasan pendukung, tokoh, peristiwa, latar, dan/atau nilai-nilai dalam dan/atau antarteks',
      channel: 'Materi Bahasa Indonesia SMP',
      duration: 'Video Edukasi',
      description: 'Strategi menyimpulkan gagasan utama, perwatakan tokoh, latar suasana, dan pesan moral antarteks.',
      url: 'https://youtu.be/9DFSqtnjjGI?si=gdzmFALjjHbqFM0P',
    },
    {
      id: 'v-indo-6',
      title: '6. Menjelaskan kelogisan hubungan antarperistiwa, antargagasan, dan/atau antarinformasi dalam dan/atau antarteks',
      channel: 'Materi Bahasa Indonesia SMP',
      duration: 'Video Edukasi',
      description: 'Analisis sebab-akibat, keterkaitan logis antargagasan, dan koherensi antarkalimat dalam bacaan.',
      url: 'https://youtu.be/3ybAaDAgi4g?si=1EMN4CiBroVF6_e2',
    },
    {
      id: 'v-indo-7',
      title: '7. Memprediksi peristiwa dalam teks',
      channel: 'Materi Bahasa Indonesia SMP',
      duration: 'Video Edukasi',
      description: 'Teknik memperkirakan kelanjutan cerita atau konsekuensi peristiwa berdasarkan petunjuk dalam teks.',
      url: 'https://youtu.be/im_YvgQTREI?si=ybLIjsgn7arndYRn',
    },
    {
      id: 'v-indo-8',
      title: '8. Menjelaskan bahasa kias dan citraan yang digunakan dalam teks fiksi',
      channel: 'Materi Bahasa Indonesia SMP',
      duration: 'Video Edukasi',
      description: 'Membedakan majas (personifikasi, metafora, hiperbola) dan citraan panca indra dalam karya sastra.',
      url: 'https://youtu.be/pMYATrs8Fq0?si=WXM0a6PQqnIXTCql',
    },
    {
      id: 'v-indo-9',
      title: '9. Menilai relevansi peristiwa dalam teks dengan kehidupan sehari-hari',
      channel: 'Materi Bahasa Indonesia SMP',
      duration: 'Video Edukasi',
      description: 'Mengaitkan konflik, sikap tokoh, dan kejadian dalam bacaan dengan realitas sosial sehari-hari.',
      url: 'https://youtu.be/0TJZDpTu4Xc?si=m-CQNLJ0TJ7JhbGA',
    },
    {
      id: 'v-indo-10',
      title: '10. Menilai kesesuaian dan/atau keakuratan unsur, kebahasaan, atau isi berdasarkan perbandingan informasi dalam dan/atau antarteks',
      channel: 'Materi Bahasa Indonesia SMP',
      duration: 'Video Edukasi',
      description: 'Evaluasi komparatif akurasi data, keberpihakan isi teks, dan kesesuaian kaidah kebahasaan.',
      url: 'https://youtu.be/2rT9wmHmRME?si=0JJZCvysLToLlIUh',
    },
    {
      id: 'v-indo-11',
      title: '11. Menyimpulkan respons emosional terhadap unsur teks fiksi',
      channel: 'Materi Bahasa Indonesia SMP',
      duration: 'Video Edukasi',
      description: 'Menganalisis suasana emosional (haru, tegang, gembira, simpati) yang ditimbulkan oleh unsur fiksi.',
      url: 'https://youtu.be/Sm6iqXcKyVU?si=XOY55Qv0Kw5KJ2Zl',
    },
  ],
  eng: [
    {
      id: 'v-eng-1',
      title: '1. Descriptive text',
      channel: 'English SMP Learning',
      duration: 'Video Edukasi',
      description: 'Identification, description characteristics, adjective order, and simple present tense in descriptive texts.',
      url: 'https://youtu.be/Fdl8WLeTy3o?si=9VBbHgV9_QlDaTJB',
    },
    {
      id: 'v-eng-2',
      title: '2. Procedure text',
      channel: 'English SMP Learning',
      duration: 'Video Edukasi',
      description: 'Goal, materials, step-by-step instructions, imperative verbs, and adverbial sequence connectives.',
      url: 'https://youtu.be/IuNUsIyvUrk?si=jpGDr5DoipPiAkmh',
    },
    {
      id: 'v-eng-3',
      title: '3. Date & time',
      channel: 'English SMP Learning',
      duration: 'Video Edukasi',
      description: 'Telling time, days of the week, months, ordinal numbers for dates, and time prepositions (at, on, in).',
      url: 'https://youtu.be/Gf-d_E9o53U?si=grzvm3rVdt6-LXAd',
    },
    {
      id: 'v-eng-4',
      title: '4. Suggestion, instruction, order, and permission',
      channel: 'English SMP Learning',
      duration: 'Video Edukasi',
      description: 'Expressions of giving suggestions (should), giving orders/instructions (imperatives), and asking permission (may/can).',
      url: 'https://youtu.be/xDuCl-QFV6k?si=JB97V4pQOae8VbID',
    },
    {
      id: 'v-eng-5',
      title: '5. Present tenses',
      channel: 'English SMP Learning',
      duration: 'Video Edukasi',
      description: 'Simple present tense rules (verb-1, s/es, do/does) for general truths, routines, and daily habits.',
      url: 'https://youtu.be/ooy433T1qnQ?si=dpQL6ySHZbrIHfbP',
    },
    {
      id: 'v-eng-6',
      title: '6. Asking for & giving direction',
      channel: 'English SMP Learning',
      duration: 'Video Edukasi',
      description: 'Useful phrases to ask and show directions, map reading, turn left/right, go straight, and prepositions of place.',
      url: 'https://youtu.be/h4-u1CkooOQ?si=Y9sd_nHzjq81INtn',
    },
    {
      id: 'v-eng-7',
      title: '7. Past tenses',
      channel: 'English SMP Learning',
      duration: 'Video Edukasi',
      description: 'Simple past tense: regular/irregular verbs (V2), did/didn\'t, was/were, and past time signals.',
      url: 'https://youtu.be/p1ascl6STRY?si=DHIUCaUvNsRT3Wgh',
    },
    {
      id: 'v-eng-8',
      title: '8. Recount text',
      channel: 'English SMP Learning',
      duration: 'Video Edukasi',
      description: 'Orientation, events, reorientation, retelling personal experiences, biographical texts, and historical events.',
      url: 'https://youtu.be/aNy0a_OM3JQ?si=qGiA8eV4nOpIEOsk',
    },
    {
      id: 'v-eng-9',
      title: '9. Narrative text',
      channel: 'English SMP Learning',
      duration: 'Video Edukasi',
      description: 'Orientation, complication, resolution, coda, moral values in fables, folktales, legends, and fairy tales.',
      url: 'https://youtu.be/GRQm4x6GtAo?si=_WEoCe816ItPcsWn',
    },
    {
      id: 'v-eng-10',
      title: '10. Determiners',
      channel: 'English SMP Learning',
      duration: 'Video Edukasi',
      description: 'Articles (a, an, the), quantifiers (many, much, few, little, some, any), and demonstratives (this, that, these, those).',
      url: 'https://youtu.be/o-LbqRag28c?si=xFcH1kaz08uTBbWg',
    },
    {
      id: 'v-eng-11a',
      title: '11. Invitation Card',
      channel: 'English SMP Learning',
      duration: 'Video Edukasi',
      description: 'Formal & informal invitation cards, event details (date, time, venue, RSVP), and purpose of invitation.',
      url: 'https://youtu.be/vv9v7LAiZOA?si=9t_6P8uETsain6vP',
    },
    {
      id: 'v-eng-11b',
      title: '11. Greeting Card',
      channel: 'English SMP Learning',
      duration: 'Video Edukasi',
      description: 'Types of greeting cards (birthday, congratulations, sympathy, get well soon), addressee, content, and sender.',
      url: 'https://youtu.be/Y4d14CgpGPE?si=Zu61MnwUuGOFFmen',
    },
    {
      id: 'v-eng-12',
      title: '12. Short functional text',
      channel: 'English SMP Learning',
      duration: 'Video Edukasi',
      description: 'Notices, announcements, messages, shopping lists, caution & warning signs in public areas.',
      url: 'https://youtu.be/GWPyOKMEqDI?si=cQwo-K7feN-mzwOC',
    },
    {
      id: 'v-eng-13',
      title: '13. Report text',
      channel: 'English SMP Learning',
      duration: 'Video Edukasi',
      description: 'General classification and descriptions of natural phenomena, animals, plants, and scientific facts.',
      url: 'https://youtu.be/-gBZCCOac8w?si=nE6nmavlWT3dpylb',
    },
    {
      id: 'v-eng-14',
      title: '14. Passive voice',
      channel: 'English SMP Learning',
      duration: 'Video Edukasi',
      description: 'Transforming active to passive voice across present, past, and modal structures (Subject + to be + Verb 3).',
      url: 'https://youtu.be/8GmiWT9Dl5o?si=V2p3NjTqhxZq5mtg',
    },
    {
      id: 'v-eng-15',
      title: '15. Perfect tenses',
      channel: 'English SMP Learning',
      duration: 'Video Edukasi',
      description: 'Present perfect tense (have/has + Verb 3), time markers (since, for, already, yet, just), and past connections.',
      url: 'https://youtu.be/4Ebit5dTE3Q?si=zbbJodcCyUBrPGo8',
    },
    {
      id: 'v-eng-16',
      title: '16. Conjunction',
      channel: 'English SMP Learning',
      duration: 'Video Edukasi',
      description: 'Coordinating conjunctions (FANBOYS), subordinating conjunctions (because, although, if, when), and correlatives.',
      url: 'https://youtu.be/Z-V7UCSCUvk?si=11Rtxbr6t3IdbwJX',
    },
    {
      id: 'v-eng-17',
      title: '17. Continuous tenses',
      channel: 'English SMP Learning',
      duration: 'Video Edukasi',
      description: 'Present continuous (am/is/are + V-ing) & past continuous (was/were + V-ing) for ongoing actions.',
      url: 'https://youtu.be/UgVFyalw3nc?si=OUag21l7Gjx7bwFC',
    },
    {
      id: 'v-eng-18',
      title: '18. If clause',
      channel: 'English SMP Learning',
      duration: 'Video Edukasi',
      description: 'Conditional sentences: Zero conditional (general facts) and First conditional (probable future events).',
      url: 'https://youtu.be/DS7fZ5c6JTM?si=7JLZmFCXw6cX9kvj',
    },
  ],
  ipa: [
    {
      id: 'v-ipa-1',
      title: '1. Zat dan perubahannya',
      channel: 'Materi IPA SMP',
      duration: 'Video Edukasi',
      description: 'Wujud zat padat/cair/gas, massa jenis zat, perubahan fisika vs perubahan kimia, dan pemisahan campuran.',
      url: 'https://youtu.be/XiVCpXYwnKM?si=KabnRmLT4HAEAKl6',
    },
    {
      id: 'v-ipa-2',
      title: '2. Suhu, kalor dan pemuaian',
      channel: 'Materi IPA SMP',
      duration: 'Video Edukasi',
      description: 'Konversi skala termometer, rumus kalor Q = m.c.ΔT, kalor lebur/uap, perpindahan kalor, dan koefisien muai panjang.',
      url: 'https://youtu.be/JHcNJ94kFPg?si=zsyv0onWqaJOZ4qG',
    },
    {
      id: 'v-ipa-3',
      title: '3. Gerak dan gaya',
      channel: 'Materi IPA SMP',
      duration: 'Video Edukasi',
      description: 'GLB, GLBB, Hukum I, II, III Newton, konsep gaya gesek, gaya berat, dan resultan gaya.',
      url: 'https://youtu.be/Ys0qe5PXFx4?si=VKsYJEMaGXABU984',
    },
    {
      id: 'v-ipa-4',
      title: '4. Klasifikasi makhluk hidup',
      channel: 'Materi IPA SMP',
      duration: 'Video Edukasi',
      description: 'Ciri-ciri makhluk hidup, sistem 5 kingdom, kunci determinasi (dikotomi), dan tata nama ilmiah binomial.',
      url: 'https://youtu.be/hccBXdq0JIs?si=C4_orJ9YJyblBo_m',
    },
    {
      id: 'v-ipa-5',
      title: '5. Ekologi',
      channel: 'Materi IPA SMP',
      duration: 'Video Edukasi',
      description: 'Komponen biotik/abiotik, rantai & jaring-jaring makanan, piramida ekologi, simbiosis, dan siklus biogeokimia.',
      url: 'https://youtu.be/GQGRXwXZAYg?si=HBdi_Itqf9CNPDmG',
    },
    {
      id: 'v-ipa-6',
      title: '6. Bumi dan tata surya',
      channel: 'Materi IPA SMP',
      duration: 'Video Edukasi',
      description: 'Rotasi & revolusi bumi, gerhana matahari & bulan, fase bulan, karakteristik planet, dan benda langit lainnya.',
      url: 'https://youtu.be/Nryl82-9GQs?si=yniASb40g6rDekkJ',
    },
    {
      id: 'v-ipa-7',
      title: '7. Sel',
      channel: 'Materi IPA SMP',
      duration: 'Video Edukasi',
      description: 'Struktur sel prokariotik & eukariotik, fungsi organel (nukleus, mitokondria, ribosom), dan perbedaan sel hewan vs tumbuhan.',
      url: 'https://youtu.be/-1iU8EKV6iY?si=MsB8PABu20Eu9_1m',
    },
    {
      id: 'v-ipa-8',
      title: '8. Tekanan Zat',
      channel: 'Materi IPA SMP',
      duration: 'Video Edukasi',
      description: 'Tekanan zat padat, tekanan hidrostatis zat cair (P = ρ.g.h), Hukum Pascal, Hukum Archimedes, dan tekanan gas/udara.',
      url: 'https://youtu.be/0im6g1Xw3l4?si=kul4UltNUHlCyRwV',
    },
    {
      id: 'v-ipa-9',
      title: '9. Sistem pencernaan manusia',
      channel: 'Materi IPA SMP',
      duration: 'Video Edukasi',
      description: 'Organ saluran pencernaan, pencernaan mekanik vs kimiawi, fungsi enzim-enzim pencernaan, dan gangguan kesehatan.',
      url: 'https://youtu.be/DAWpt-uAYXY?si=-slA2mpYzW__x_e7',
    },
    {
      id: 'v-ipa-10',
      title: '10. Usaha, energi dan pesawat sederhana',
      channel: 'Materi IPA SMP',
      duration: 'Video Edukasi',
      description: 'Rumus usaha W = F.s, energi kinetik & potensial, tuas/pengungkit, katrol, bidang miring, dan keuntungan mekanik.',
      url: 'https://youtu.be/92f3PBYRE10?si=BkmkEfW9rPYKEtT0',
    },
    {
      id: 'v-ipa-11',
      title: '11. Getaran, gelombang dan cahaya',
      channel: 'Materi IPA SMP',
      duration: 'Video Edukasi',
      description: 'Frekuensi & periode getaran, gelombang transversal/longitudinal, sifat cahaya, pembentukan bayangan cermin & lensa.',
      url: 'https://youtu.be/-4xhr6CwG28?si=6J6XLsOdVV3hMXJf',
    },
    {
      id: 'v-ipa-12',
      title: '12. Unsur, senyawa, campuran',
      channel: 'Materi IPA SMP',
      duration: 'Video Edukasi',
      description: 'Tabel periodik unsur, molekul unsur & senyawa, campuran homogen (larutan) vs heterogen (suspensi & koloid), asam-basa.',
      url: 'https://youtu.be/uRfUhWusfHA?si=_yIAniRiammkeloR',
    },
    {
      id: 'v-ipa-13',
      title: '13. Struktur bumi',
      channel: 'Materi IPA SMP',
      duration: 'Video Edukasi',
      description: 'Lapisan litosfer, astenosfer, inti bumi, lempeng tektonik, gempa bumi (seisme), gunung berapi, dan hidrosfer/atmosfer.',
      url: 'https://youtu.be/pgQwz1Aynkc?si=feVflVZHaZqZkBXs',
    },
    {
      id: 'v-ipa-14',
      title: '14. Reproduksi manusia',
      channel: 'Materi IPA SMP',
      duration: 'Video Edukasi',
      description: 'Organ reproduksi pria & wanita, proses pembelahan sel (mitosis & meiosis), spermatogenesis, oogenesis, dan siklus menstruasi.',
      url: 'https://youtu.be/gwbiLIAry2A?si=u0oUWO1or7buX2JF',
    },
    {
      id: 'v-ipa-15',
      title: '15. Pewarisan sifat & bioteknologi',
      channel: 'Materi IPA SMP',
      duration: 'Video Edukasi',
      description: 'Hukum Mendel (monohibrid & dihibrid), genotipe & fenotipe, DNA/RNA, serta produk bioteknologi konvensional & modern.',
      url: 'https://youtu.be/5rIkbvyuJbQ?si=2v6bWDD-N5ZhWGTN',
    },
    {
      id: 'v-ipa-16',
      title: '16. Listrik statis',
      channel: 'Materi IPA SMP',
      duration: 'Video Edukasi',
      description: 'Muatan listrik, Hukum Coulomb F = k.q1.q2/r^2, medan listrik, potensial listrik, elektroskop, dan kelistrikan pada sel saraf.',
      url: 'https://youtu.be/H65ZcxYMSzg?si=wVJIfTS8PJJVe9Hx',
    },
    {
      id: 'v-ipa-17',
      title: '17. Listrik dinamis',
      channel: 'Materi IPA SMP',
      duration: 'Video Edukasi',
      description: 'Kuat arus listrik, Hukum Ohm (V = I.R), Hukum I Kirchhoff, rangkaian seri & paralel hambatan, daya dan energi listrik.',
      url: 'https://youtu.be/V-nF0cqmjgk?si=3qNBSrwJOmqodK-a',
    },
    {
      id: 'v-ipa-18',
      title: '18. Magnet',
      channel: 'Materi IPA SMP',
      duration: 'Video Edukasi',
      description: 'Sifat kutub magnet, cara membuat magnet (gosokan, induksi, elektromagnetik), medan magnet, gaya Lorentz, dan induksi elektromagnetik.',
      url: 'https://youtu.be/1Xi6FvrhcRg?si=dn-qKBv46IhaT6e3',
    },
  ],
};

interface SubjectDetailViewProps {
  subjectId: SubjectId;
  userProfile: UserProfile;
  isLoggedIn?: boolean;
  onRequireLogin?: (featureName: string) => void;
  onStartQuiz: (config: QuizConfig) => void;
  onRefreshProfile?: () => void;
  onBack: () => void;
}

export const SubjectDetailView: React.FC<SubjectDetailViewProps> = ({
  subjectId,
  userProfile,
  isLoggedIn = false,
  onRequireLogin,
  onStartQuiz,
  onRefreshProfile,
  onBack,
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<VideoMaterial | null>(null);
  const [activeIpaTopic, setActiveIpaTopic] = useState<{ topic: TopicInfo; index: number } | null>(null);
  const [activeMathTopic, setActiveMathTopic] = useState<{ topic: TopicInfo; index: number } | null>(null);
  const [activeEngTopic, setActiveEngTopic] = useState<{ topic: TopicInfo; index: number } | null>(null);
  const [activeIndoTopic, setActiveIndoTopic] = useState<{ topic: TopicInfo; index: number } | null>(null);

  // Material PDF Storage state
  const [storedMaterialInfo, setStoredMaterialInfo] = useState<StoredMaterialInfo | null>(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isDownloadingMaterial, setIsDownloadingMaterial] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState({ percent: 0, loadedBytes: 0, totalBytes: 0 });
  const [downloadError, setDownloadError] = useState<string | null>(null);

  // Notice modal state for empty Try Out packets (e.g. Paket 9-12)
  const [emptyPaketNotice, setEmptyPaketNotice] = useState<number | null>(null);

  // Sync sub-modals with mobile/tablet back button
  useModalBackHandler(!!activeVideo, () => setActiveVideo(null), 'subjectActiveVideoModal');
  useModalBackHandler(isVideoModalOpen, () => {
    setActiveVideo(null);
    setIsVideoModalOpen(false);
  }, 'subjectVideoModal');
  useModalBackHandler(isPdfModalOpen, () => setIsPdfModalOpen(false), 'subjectPdfModal');
  useModalBackHandler(!!activeIpaTopic, () => setActiveIpaTopic(null), 'activeIpaTopicModal');
  useModalBackHandler(!!activeMathTopic, () => setActiveMathTopic(null), 'activeMathTopicModal');
  useModalBackHandler(!!activeEngTopic, () => setActiveEngTopic(null), 'activeEngTopicModal');
  useModalBackHandler(!!activeIndoTopic, () => setActiveIndoTopic(null), 'activeIndoTopicModal');
  useModalBackHandler(!!emptyPaketNotice, () => setEmptyPaketNotice(null), 'emptyPaketNoticeModal');

  // Load material info from local storage when subject changes
  useEffect(() => {
    let isMounted = true;
    getMaterialInfoFromStorage(subjectId).then((info) => {
      if (isMounted) {
        setStoredMaterialInfo(info);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [subjectId]);

  const handleDownloadMaterial = async () => {
    setIsDownloadingMaterial(true);
    setDownloadError(null);
    setDownloadProgress({ percent: 0, loadedBytes: 0, totalBytes: 0 });
    try {
      const meta = SUBJECT_MATERIAL_METADATA[subjectId];
      const blob = await downloadMaterialWithProgress(subjectId, (percent, loadedBytes, totalBytes) => {
        setDownloadProgress({ percent, loadedBytes, totalBytes });
      });
      await saveMaterialToStorage({
        subjectId,
        fileName: meta.fileName,
        size: blob.size,
        downloadedAt: new Date().toISOString(),
        blob,
      });
      const updatedInfo = await getMaterialInfoFromStorage(subjectId);
      setStoredMaterialInfo(updatedInfo);
    } catch (err: any) {
      console.error('Download material error:', err);
      setDownloadError(err?.message || 'Gagal mengunduh materi. Periksa koneksi.');
    } finally {
      setIsDownloadingMaterial(false);
    }
  };

  const topics = TOPICS_BY_SUBJECT[subjectId] || [];
  const subjectName = SUBJECT_NAMES[subjectId];
  const videoList = VIDEO_MATERIALS_DATA[subjectId] || [];

  const topicScores = userProfile.topicScores || {};
  const tryOutHistory = userProfile.tryOutHistory || { math: {}, indo: {}, eng: {}, ipa: {} };
  const subjectTryOuts = tryOutHistory[subjectId] || {};

  const handleStartTopic = (topic: typeof topics[0], topicIndex: number) => {
    if (!isLoggedIn) {
      onRequireLogin?.(`Kuis Topik: ${topic.title}`);
      return;
    }
    const idMatch = topic.id.match(/\d+/);
    const resolvedIndex = idMatch ? parseInt(idMatch[0], 10) : (topicIndex + 1);

    if (subjectId === 'math') {
      setActiveMathTopic({ topic, index: resolvedIndex });
    } else if (subjectId === 'ipa') {
      setActiveIpaTopic({ topic, index: resolvedIndex });
    } else if (subjectId === 'eng') {
      setActiveEngTopic({ topic, index: resolvedIndex });
    } else if (subjectId === 'indo' && resolvedIndex <= 11) {
      setActiveIndoTopic({ topic, index: resolvedIndex });
    } else {
      onStartQuiz({
        type: 'topic',
        title: `Kuis Topik: ${topic.title}`,
        subjectId: subjectId,
        topicId: topic.id,
        passThreshold: 85, // Min 85 to pass topic
        questions: topic.questions,
      });
    }
  };

  const handleStartTryOut = (paketId: number) => {
    // Mode tamu: HANYA Paket 8 yang terbuka!
    if (!isLoggedIn && paketId !== 8) {
      onRequireLogin?.(`Try Out ${subjectName} Paket ${paketId}`);
      return;
    }
    const questions = getTryOutQuestions(subjectId, paketId);
    if (!questions || questions.length === 0) {
      setEmptyPaketNotice(paketId);
      return;
    }
    onStartQuiz({
      type: 'tryout',
      title: `Try Out ${subjectName} - Paket ${paketId}`,
      subjectId: subjectId,
      paketId: paketId,
      durationMinutes: 75,
      passThreshold: 85,
      questions: questions,
      isGuestAllowed: paketId === 8,
    });
  };

  return (
    <div className="space-y-6 sm:space-y-8 pb-12 font-sans">
      {/* Banner Mode Tamu / Pratinjau */}
      {!isLoggedIn && (
        <div className="bg-amber-500/15 border border-amber-500/30 rounded-2xl p-3.5 sm:p-4 text-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md backdrop-blur-xs">
          <div className="flex items-start gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 shrink-0 mt-0.5 sm:mt-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-amber-100">
                Mode Pratinjau (Tamu): Try Out Paket 8 Terbuka Bebas
              </p>
              <p className="text-[11px] sm:text-xs text-amber-300/80 mt-0.5 leading-relaxed">
                Di laman mata pelajaran {subjectName}, kamu dapat mencoba simulasi CBT <strong>Try Out Paket 8</strong> secara gratis. Fitur materi video, unduh PDF, kuis kisi-kisi topik, dan Try Out paket lainnya terkunci dan terbuka setelah masuk akun.
              </p>
            </div>
          </div>
          {onRequireLogin && (
            <button
              onClick={() => onRequireLogin(`Akses Lengkap Mapel ${subjectName}`)}
              className="px-3.5 py-1.5 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 text-slate-950 font-black rounded-xl text-xs transition shrink-0 cursor-pointer shadow-sm self-end sm:self-center"
            >
              Masuk Akun
            </button>
          )}
        </div>
      )}

      {/* Subject Header */}
      <div className="bg-[#382B6D] rounded-3xl p-5 sm:p-8 text-white shadow-xl relative overflow-hidden border-2 border-[#5B4AA8]">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4A3B8C] text-white text-[11px] sm:text-xs font-black border border-[#6B56C4] self-start shadow-xs mb-2">
              <BookOpen className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>Kisi-Kisi TKA SMP</span>
            </div>

            <h1 className="text-xl sm:text-3xl font-black tracking-tight text-white">
              Mata Pelajaran {subjectName}
            </h1>
            <p className="text-white/85 text-xs sm:text-sm mt-1.5 max-w-2xl leading-relaxed font-medium">
              Selesaikan kuis interaktif per topik (Batas tuntas skor &ge; 85, di bawah itu belum tuntas). Setelah tuntas topik, uji kesiapanmu di Paket Try Out 1 s.d. 12.
            </p>
          </div>

          {/* Action Buttons: Video Materi & Download / Buka Materi PDF */}
          <div className="flex flex-col gap-2 w-full sm:w-60 shrink-0">
            {/* Tombol Video Materi */}
            <button
              onClick={() => {
                if (!isLoggedIn) {
                  onRequireLogin?.(`Video Materi ${subjectName}`);
                  return;
                }
                setIsVideoModalOpen(true);
              }}
              className={`w-full px-4 py-2.5 ${
                !isLoggedIn
                  ? 'bg-[#4A3B8C] hover:bg-[#5B4AA8] text-white/90 border border-[#6B56C4]'
                  : 'bg-[#F97316] hover:bg-[#EA580C] active:bg-[#C2410C] text-white border border-white/20'
              } font-black rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition cursor-pointer`}
            >
              {!isLoggedIn ? (
                <>
                  <Lock className="w-4 h-4 text-amber-300" />
                  <span>Video Materi {subjectName}</span>
                  <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-200 border border-amber-300/30">
                    Terkunci
                  </span>
                </>
              ) : (
                <>
                  <Video className="w-4 h-4 text-white animate-pulse" />
                  <span>Video Materi {subjectName}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-90" />
                </>
              )}
            </button>

            {/* Tombol Download Materi / Buka Materi PDF (di bawah tombol Video Materi) */}
            {!isLoggedIn ? (
              <button
                onClick={() => onRequireLogin?.(`Download Materi PDF ${subjectName}`)}
                className="w-full px-4 py-2.5 bg-[#4A3B8C] hover:bg-[#5B4AA8] text-white/90 font-black rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition border border-[#6B56C4] cursor-pointer"
                title={`Materi PDF ${subjectName} terkunci (mode tamu)`}
              >
                <Lock className="w-4 h-4 text-amber-300" />
                <span>Download Materi PDF</span>
                <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-200 border border-amber-300/30">
                  Terkunci
                </span>
              </button>
            ) : storedMaterialInfo ? (
              <button
                onClick={() => setIsPdfModalOpen(true)}
                className="w-full px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-black rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition border border-emerald-400/50 cursor-pointer"
                title={`Buka materi PDF ${subjectName} (tersimpan offline)`}
              >
                <FileText className="w-4 h-4 text-emerald-200" />
                <span>Buka Materi PDF</span>
                <span className="px-1.5 py-0.5 rounded-md bg-white/20 text-[10px] font-bold text-white border border-white/30">
                  Tersimpan Offline
                </span>
              </button>
            ) : isDownloadingMaterial ? (
              <div className="w-full px-3 py-2 bg-indigo-950/90 text-white rounded-xl text-xs font-bold border border-indigo-400/40 shadow-md">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="flex items-center gap-1.5 text-[11px] text-cyan-200">
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Menyimpan offline...</span>
                  </span>
                  <span className="text-[11px] font-black text-cyan-300">{downloadProgress.percent}%</span>
                </div>
                <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cyan-400 transition-all duration-150 rounded-full"
                    style={{ width: `${Math.max(downloadProgress.percent, 5)}%` }}
                  />
                </div>
                {downloadProgress.totalBytes > 0 && (
                  <span className="text-[10px] text-slate-300 block text-right mt-1">
                    {formatFileSize(downloadProgress.loadedBytes)} / {formatFileSize(downloadProgress.totalBytes)}
                  </span>
                )}
              </div>
            ) : (
              <div className="w-full flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setIsPdfModalOpen(true)}
                    className="px-3 py-2.5 bg-[#0D9488] hover:bg-[#0F766E] active:bg-[#115E59] text-white font-black rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md transition border border-teal-300/30 cursor-pointer"
                    title={`Baca modul materi PDF ${subjectName}`}
                  >
                    <FileText className="w-3.5 h-3.5 text-teal-200" />
                    <span>Buka Materi</span>
                  </button>

                  <a
                    href={SUBJECT_MATERIAL_METADATA[subjectId]?.driveUrl}
                    target="_blank"
                    rel="noreferrer"
                    download={SUBJECT_MATERIAL_METADATA[subjectId]?.fileName}
                    className="px-3 py-2.5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-black rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md transition border border-indigo-400/40 cursor-pointer"
                    title={`Download langsung berkas PDF ${subjectName} ke HP / Laptop`}
                  >
                    <Download className="w-3.5 h-3.5 text-indigo-200" />
                    <span>Download</span>
                    <span className="px-1 py-0.2 rounded bg-white/20 text-[9px] font-bold">
                      {SUBJECT_MATERIAL_METADATA[subjectId]?.fileSizeStr || 'PDF'}
                    </span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleDownloadMaterial}
                  className="text-[11px] text-cyan-300 hover:text-cyan-200 hover:underline flex items-center justify-center gap-1 py-1 font-semibold transition"
                >
                  <HardDrive className="w-3 h-3 text-cyan-400" />
                  <span>Simpan ke Memori Browser untuk Offline</span>
                </button>
              </div>
            )}

            {/* Error Message if download fails */}
            {downloadError && (
              <div className="text-[11px] text-rose-200 bg-rose-950/90 p-3 rounded-2xl border border-rose-500/50 flex flex-col gap-2 shadow-lg">
                <span className="font-semibold">{downloadError}</span>
                <a
                  href={SUBJECT_MATERIAL_METADATA[subjectId]?.driveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow transition"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Unduh Langsung dari Google Drive</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Topics Section */}
      <section>
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#06B6D4]" />
            Topik Kisi-Kisi TKA
          </h2>
          <span className="text-[11px] sm:text-xs text-white font-black px-2.5 py-1 rounded-full bg-[#F97316] border border-white/20 shadow-xs">
            Batas Tuntas: &ge; 85
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {topics.map((topic, topicIdx) => {
            const scoreData = topicScores[topic.id];
            // Tampilkan skor tertinggi bukan skor terbaru
            const highestScore = scoreData ? (scoreData.bestScore ?? scoreData.lastScore) : undefined;
            const status = scoreData?.status;
            // Batas tuntas topik adalah 85. Di bawah itu dianggap belum tuntas.
            const isPassed = (highestScore !== undefined && highestScore >= 85) || (status === 'Passed');

            // Color-coding rotation: Bright Turquoise, Warm Orange, Lime Green, Lavender
            const colorAccents = [
              { border: 'hover:border-[#06B6D4]', badge: 'bg-[#06B6D4] text-white', btn: 'bg-[#06B6D4] hover:bg-[#0891B2]' },
              { border: 'hover:border-[#F97316]', badge: 'bg-[#F97316] text-white', btn: 'bg-[#F97316] hover:bg-[#EA580C]' },
              { border: 'hover:border-[#10B981]', badge: 'bg-[#10B981] text-white', btn: 'bg-[#10B981] hover:bg-[#059669]' },
              { border: 'hover:border-[#8B5CF6]', badge: 'bg-[#8B5CF6] text-white', btn: 'bg-[#8B5CF6] hover:bg-[#7C3AED]' },
            ];
            const currentAccent = colorAccents[topicIdx % 4];

            return (
              <div
                key={topic.id}
                className={`bg-[#382B6D] rounded-3xl p-4 sm:p-5 shadow-lg border-2 border-[#5B4AA8] ${currentAccent.border} transition flex flex-col justify-between text-white`}
              >
                <div>
                  {topic.category && (
                    <div className="mb-2">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${currentAccent.badge} shadow-xs`}>
                        {topic.category}
                      </span>
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-2 mb-1.5 sm:mb-2">
                    <h3 className="text-sm sm:text-base font-black text-white leading-snug">{topic.title}</h3>
                    <span className="text-[9px] sm:text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-[#4A3B8C] text-white border border-[#6B56C4] flex-shrink-0">
                      KKM 85
                    </span>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed mb-3 font-medium">{topic.description}</p>

                  {topic.limitation && topic.limitation !== '-' && (
                    <div className="mb-3.5 bg-[#2E235C] p-2.5 rounded-2xl border border-[#52419B] text-[11px] text-white/90">
                      <strong className="text-[#F97316] font-black">Batasan:</strong> {topic.limitation}
                    </div>
                  )}
                </div>

                {/* Score & Status Indicator Footer */}
                <div className="pt-3 border-t border-[#5B4AA8]/50 flex items-center justify-between gap-2">
                  <div className="text-xs">
                    <div className="text-white/70 font-medium text-[11px] sm:text-xs">
                      Skor Tertinggi:{' '}
                      <strong className={highestScore !== undefined ? (highestScore >= 85 ? 'text-[#10B981]' : 'text-[#EF4444]') : 'text-white'}>
                        {highestScore !== undefined ? `${highestScore}/100` : '-'}
                      </strong>
                    </div>
                    <div className="mt-0.5 flex items-center gap-1">
                      <span className="text-white/70 font-medium text-[11px]">Status:</span>
                      {highestScore === undefined ? (
                        <span className="text-[10px] sm:text-[11px] text-white/50 font-bold">Belum Mulai</span>
                      ) : isPassed ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 font-black text-[10px] sm:text-[11px]">
                          <CheckCircle2 className="w-3 h-3" /> Tuntas
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#EF4444]/20 text-rose-300 border border-[#EF4444]/40 font-black text-[10px] sm:text-[11px]">
                          <XCircle className="w-3 h-3" /> Belum Tuntas
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {subjectId === 'ipa' && IPA_MIND_MAP_LINKS[topicIdx + 1] && (
                      <a
                        href={IPA_MIND_MAP_LINKS[topicIdx + 1]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 bg-[#4A3B8C] hover:bg-[#5B4AA8] text-white border border-[#6B56C4] font-black rounded-xl text-xs flex items-center gap-1.5 shadow-xs transition"
                        title={`Buka Peta Konsep ${topic.title} di Google Notebook (Tab Baru)`}
                      >
                        <Network className="w-3.5 h-3.5 text-[#06B6D4]" />
                        <span className="hidden xs:inline">Peta Konsep</span>
                        <span className="xs:hidden">Peta</span>
                        <ExternalLink className="w-3 h-3 text-[#06B6D4] ml-0.5" />
                      </a>
                    )}

                    <button
                      onClick={() => handleStartTopic(topic, topicIdx)}
                      className={`px-3.5 py-2 sm:px-4 sm:py-2 ${
                        !isLoggedIn
                          ? 'bg-[#4A3B8C] hover:bg-[#5B4AA8] text-white/90 border border-[#6B56C4]'
                          : `${currentAccent.btn} text-white`
                      } font-black rounded-xl text-xs flex items-center gap-1.5 shadow-md transition cursor-pointer`}
                    >
                      {!isLoggedIn ? (
                        <>
                          <Lock className="w-3.5 h-3.5 text-amber-300" /> Terkunci
                        </>
                      ) : highestScore !== undefined ? (
                        <>
                          <RotateCcw className="w-3.5 h-3.5" /> Ulang
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" /> Kerjakan
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Try Out Packages Section */}
      <section className="bg-[#382B6D] rounded-3xl p-5 sm:p-8 text-white shadow-xl border-2 border-[#5B4AA8]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-[#5B4AA8]/50">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#F97316]" />
                Paket Try Out CBT ({subjectName})
              </h2>
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#F97316] text-white border border-white/20">
                KKM &ge; 85
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-white/80 mt-1 font-medium">
              Simulasi ujian standar CBT TKA SMP 2026. {!isLoggedIn ? 'Pada mode tamu, Paket 8 dapat dikerjakan secara bebas sebagai simulasi penuh.' : 'Batas tuntas kelulusan skor ≥ 85 (di bawah 85 dianggap belum tuntas).'}
            </p>
          </div>
          <span className="text-[10px] sm:text-xs font-black px-3 py-1 bg-[#4A3B8C] text-white rounded-full border border-[#6B56C4] self-start sm:self-auto shadow-xs">
            12 Paket CBT
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((paketId) => {
            const isAvailable = paketId <= 8; // Paket 9-12 kosong (belum tersedia)
            const isGuestAllowed = paketId === 8;
            const isLockedForGuest = !isLoggedIn && !isGuestAllowed;
            const historyList = subjectTryOuts[paketId] || [];
            // Skor Tertinggi bukan skor terbaru
            const highestScore = historyList.length > 0 ? Math.max(...historyList.map(h => h.score)) : null;
            const isPassed = highestScore !== null ? highestScore >= 85 : false;
            const lastAttempt = historyList.length > 0 ? historyList[historyList.length - 1] : null;

            // Palette rotation for the 12 packets
            const packetPalette = [
              { border: 'hover:border-[#06B6D4]', badge: 'bg-[#06B6D4]', btn: 'bg-[#06B6D4] hover:bg-[#0891B2]' },
              { border: 'hover:border-[#F97316]', badge: 'bg-[#F97316]', btn: 'bg-[#F97316] hover:bg-[#EA580C]' },
              { border: 'hover:border-[#10B981]', badge: 'bg-[#10B981]', btn: 'bg-[#10B981] hover:bg-[#059669]' },
              { border: 'hover:border-[#8B5CF6]', badge: 'bg-[#8B5CF6]', btn: 'bg-[#8B5CF6] hover:bg-[#7C3AED]' },
            ];
            const pStyle = packetPalette[(paketId - 1) % 4];

            return (
              <div
                key={paketId}
                className={`rounded-2xl p-3.5 sm:p-4 border-2 ${
                  isLockedForGuest
                    ? 'border-[#4A3B8C]/60 bg-[#251D48] opacity-85'
                    : !isLoggedIn && isGuestAllowed
                    ? 'border-emerald-400/80 bg-[#1D353F] shadow-lg ring-1 ring-emerald-400/30'
                    : isAvailable 
                    ? `bg-[#2E235C] border-[#52419B] ${pStyle.border} shadow-md` 
                    : 'border-dashed border-amber-500/40 hover:border-amber-400/80 bg-[#291F54]'
                } flex flex-col justify-between transition group min-h-[160px]`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className={`text-[11px] sm:text-xs font-black text-white ${
                        isLockedForGuest
                          ? 'bg-slate-700'
                          : !isLoggedIn && isGuestAllowed
                          ? 'bg-emerald-600'
                          : isAvailable 
                          ? pStyle.badge 
                          : 'bg-amber-600'
                      } px-2.5 py-0.5 rounded-full border border-white/20 shadow-xs`}>
                        Paket {paketId}
                      </span>
                      {!isLoggedIn && isGuestAllowed && (
                        <span className="text-[9px] font-black px-1.5 py-0.2 rounded-md bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                          Bebas
                        </span>
                      )}
                      {!isAvailable && (
                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-md bg-amber-400/20 text-amber-300 border border-amber-400/30">
                          Kosong
                        </span>
                      )}
                    </div>
                    {isLockedForGuest ? (
                      <Lock className="w-3.5 h-3.5 text-amber-400/90" />
                    ) : isAvailable ? (
                      <FileSpreadsheet className="w-3.5 h-3.5 text-white/60 group-hover:text-white transition" />
                    ) : (
                      <Clock className="w-3.5 h-3.5 text-amber-400/80 group-hover:text-amber-300 transition" />
                    )}
                  </div>
                  <h4 className="text-xs sm:text-sm font-black text-white mb-1">Try Out {paketId}</h4>
                  
                  {isLockedForGuest ? (
                    <div className="text-[11px] text-amber-200/90 mt-1 space-y-1 bg-amber-500/10 border border-amber-500/20 rounded-xl p-2">
                      <div className="flex items-center gap-1 text-[11px] font-bold text-amber-300">
                        <Lock className="w-3 h-3 text-amber-400 shrink-0" />
                        <span>Terkunci</span>
                      </div>
                      <p className="text-[9px] text-white/60 leading-tight">
                        Masuk akun untuk mengerjakan paket ini.
                      </p>
                    </div>
                  ) : isAvailable ? (
                    highestScore !== null ? (
                      <div className="text-[11px] sm:text-xs text-white/90 mt-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-white/70 text-[11px]">Skor Tertinggi:</span>
                          <strong className={isPassed ? 'text-[#10B981]' : 'text-rose-400 font-black'}>
                            {highestScore}/100
                          </strong>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/70 text-[10px]">Status:</span>
                          <span className={`text-[10px] font-black px-1.5 py-0.2 rounded border ${
                            isPassed 
                              ? 'bg-[#10B981]/20 text-[#10B981] border-[#10B981]/40' 
                              : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                          }`}>
                            {isPassed ? 'Tuntas' : 'Belum Tuntas'}
                          </span>
                        </div>
                        <div className="text-[9px] sm:text-[10px] text-white/50 line-clamp-1">
                          {historyList.length}x Dikerjakan {lastAttempt ? `• Terakhir: ${lastAttempt.date}` : ''}
                        </div>
                      </div>
                    ) : (
                      <p className="text-[10px] sm:text-[11px] text-white/50 mt-1 font-medium">Belum dikerjakan</p>
                    )
                  ) : (
                    <div className="text-[11px] text-amber-200/90 mt-1 space-y-1 bg-amber-500/10 border border-amber-500/20 rounded-xl p-2">
                      <div className="flex items-center gap-1 text-[11px] font-bold text-amber-300">
                        <AlertCircle className="w-3 h-3 text-amber-400 shrink-0" />
                        <span>Soal belum tersedia</span>
                      </div>
                      <p className="text-[9px] text-white/60 leading-tight">
                        Akan diisi di kemudian hari.
                      </p>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleStartTryOut(paketId)}
                  className={`mt-3 w-full py-2 px-3 ${
                    isLockedForGuest
                      ? 'bg-[#4A3B8C] hover:bg-[#5B4AA8] text-white/90 border border-[#6B56C4] font-black shadow-xs'
                      : !isLoggedIn && isGuestAllowed
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white font-black shadow-md'
                      : isAvailable 
                      ? `${pStyle.btn} text-white font-black shadow-md` 
                      : 'bg-amber-500/20 hover:bg-amber-500/30 active:bg-amber-500/40 text-amber-200 hover:text-white border border-amber-400/40 font-bold'
                  } rounded-xl text-xs flex items-center justify-center gap-1 transition cursor-pointer`}
                >
                  {isLockedForGuest ? (
                    <>
                      <Lock className="w-3.5 h-3.5 text-amber-300" />
                      <span>Buka Paket {paketId}</span>
                    </>
                  ) : isAvailable ? (
                    <>
                      <span>{highestScore !== null ? 'Ulangi Tes' : 'Mulai Tes'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                      <span>Buka Paket {paketId}</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Video Material Modal (Embedded Player & In-App Viewer) */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
          onClick={() => {
            setActiveVideo(null);
            setIsVideoModalOpen(false);
          }}
        >
          <div 
            className={`bg-white border border-slate-200 rounded-2xl sm:rounded-3xl w-full p-4 sm:p-6 shadow-2xl relative space-y-4 overflow-hidden max-h-[94vh] flex flex-col transition-all duration-300 ${
              activeVideo ? 'max-w-4xl' : 'max-w-2xl'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {activeVideo ? (
              /* ================= EMBEDDED VIDEO PLAYER VIEW ================= */
              <>
                {/* Embedded Header */}
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100 flex-shrink-0">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 pr-2">
                    <button
                      onClick={() => setActiveVideo(null)}
                      className="p-1.5 sm:p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition flex items-center gap-1.5 text-xs font-bold shrink-0"
                      title="Kembali ke Daftar Video"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span className="hidden sm:inline">Daftar Video</span>
                    </button>
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-black text-slate-900 truncate">
                        {activeVideo.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-500 truncate">
                        {activeVideo.channel} • {activeVideo.duration}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setActiveVideo(null);
                      setIsVideoModalOpen(false);
                    }}
                    className="p-1.5 sm:p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Embedded Player & Content */}
                <div className="overflow-y-auto space-y-4 pr-1 flex-1">
                  {/* Embedded 16:9 YouTube Player */}
                  {(() => {
                    const embedInfo = getYouTubeEmbedInfo(activeVideo.url);
                    return (
                      <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-lg border border-slate-900">
                        {embedInfo ? (
                          <iframe
                            src={embedInfo.embedUrl}
                            title={activeVideo.title}
                            className="w-full h-full border-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-white p-4 text-center">
                            <p className="text-sm mb-3">Video tidak dapat dimuat secara langsung di frame ini.</p>
                            <a
                              href={activeVideo.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-rose-600 rounded-xl text-xs font-bold flex items-center gap-1.5"
                            >
                              <span>Buka di YouTube</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        )}
                      </div>
                    );
                  })()}

                  {/* Video Metadata Card */}
                  <div className="p-3.5 sm:p-4 bg-slate-50 rounded-2xl border border-slate-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-800 px-2.5 py-0.5 rounded-full border border-rose-200">
                          {activeVideo.duration}
                        </span>
                        <span className="text-xs font-semibold text-slate-600">
                          {activeVideo.channel}
                        </span>
                      </div>
                      <a
                        href={activeVideo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-semibold text-slate-500 hover:text-rose-600 flex items-center gap-1 transition"
                        title="Buka di tab baru jika diperlukan"
                      >
                        <span>Buka di YouTube</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <h4 className="text-sm sm:text-base font-black text-slate-900">
                      {activeVideo.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {activeVideo.description}
                    </p>
                  </div>

                  {/* Other Videos in this Subject (Playlist) */}
                  {videoList.length > 1 && (
                    <div className="pt-2">
                      <div className="flex items-center justify-between mb-2.5">
                        <h5 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                          <Tv className="w-3.5 h-3.5 text-rose-600" />
                          Video Lainnya ({videoList.length} video)
                        </h5>
                        <span className="text-[11px] text-slate-500 font-medium">Klik untuk langsung memutar</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {videoList.map((v, i) => {
                          const isPlaying = v.id === activeVideo.id;
                          const vEmbed = getYouTubeEmbedInfo(v.url);
                          return (
                            <button
                              key={v.id}
                              onClick={() => setActiveVideo(v)}
                              className={`p-2.5 rounded-2xl border text-left flex items-center gap-3 transition ${
                                isPlaying
                                  ? 'bg-rose-50 border-rose-400 ring-2 ring-rose-400/20 shadow-xs'
                                  : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              <div className="w-16 h-12 rounded-xl overflow-hidden bg-slate-800 shrink-0 relative flex items-center justify-center">
                                {vEmbed && (
                                  <img
                                    src={vEmbed.thumbnailUrl}
                                    alt={v.title}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                  />
                                )}
                                <div className={`absolute inset-0 flex items-center justify-center ${isPlaying ? 'bg-rose-600/50' : 'bg-black/35'}`}>
                                  <Play className={`w-4 h-4 fill-current ${isPlaying ? 'text-white scale-110' : 'text-white'}`} />
                                </div>
                              </div>
                              <div className="min-w-0 flex-1">
                                <span className="text-[10px] font-bold text-slate-500 block truncate">
                                  Video {i + 1} • {v.duration}
                                </span>
                                <p className={`text-xs font-bold truncate ${isPlaying ? 'text-rose-700' : 'text-slate-800'}`}>
                                  {v.title}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Embedded Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 flex-shrink-0">
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 font-bold transition"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Kembali ke Daftar Video</span>
                  </button>
                  <button
                    onClick={() => {
                      setActiveVideo(null);
                      setIsVideoModalOpen(false);
                    }}
                    className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition border border-slate-200"
                  >
                    Tutup
                  </button>
                </div>
              </>
            ) : (
              /* ================= VIDEO LIST VIEW ================= */
              <>
                {/* Modal Header */}
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100 flex-shrink-0">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-rose-50 text-rose-600 rounded-xl border border-rose-200">
                      <Video className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                        Video Materi {subjectName}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                        Kumpulan tautan video penjelasan &amp; pembahasan TKA SMP (Diputar langsung di aplikasi)
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsVideoModalOpen(false)}
                    className="p-1.5 sm:p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Video List */}
                <div className="overflow-y-auto space-y-3 pr-1 flex-1">
                  {videoList.length > 0 ? (
                    videoList.map((video, idx) => {
                      const vEmbed = getYouTubeEmbedInfo(video.url);
                      return (
                        <div
                          key={video.id}
                          className="p-3 sm:p-4 bg-slate-50 border border-slate-200/90 hover:border-rose-300 hover:bg-white rounded-2xl transition flex flex-col sm:flex-row sm:items-center justify-between gap-3 group shadow-xs cursor-pointer"
                          onClick={() => setActiveVideo(video)}
                        >
                          {/* Thumbnail */}
                          <div className="w-full sm:w-32 h-24 sm:h-20 rounded-xl overflow-hidden bg-slate-800 shrink-0 relative flex items-center justify-center">
                            {vEmbed && (
                              <img
                                src={vEmbed.thumbnailUrl}
                                alt={video.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                referrerPolicy="no-referrer"
                              />
                            )}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 flex items-center justify-center transition">
                              <div className="w-9 h-9 rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-rose-600 transition">
                                <Play className="w-4 h-4 fill-current ml-0.5" />
                              </div>
                            </div>
                            <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/70 text-[9px] text-white font-bold">
                              {video.duration}
                            </span>
                          </div>

                          {/* Info */}
                          <div className="space-y-1 flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-rose-50 text-rose-700 px-2 py-0.5 rounded-full border border-rose-200">
                                Video {idx + 1}
                              </span>
                              <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium truncate">
                                {video.channel}
                              </span>
                            </div>
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-rose-600 transition line-clamp-2">
                              {video.title}
                            </h4>
                            <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed line-clamp-2">
                              {video.description}
                            </p>
                          </div>

                          {/* Button */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveVideo(video);
                            }}
                            className="w-full sm:w-auto px-4 py-2 bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition shadow-xs flex-shrink-0 self-stretch sm:self-center"
                          >
                            <PlayCircle className="w-4 h-4 fill-current" />
                            <span>Tonton Video</span>
                          </button>
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-center py-8 text-slate-500 text-xs">
                      Belum ada link video tersedia untuk mata pelajaran ini.
                    </div>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 flex-shrink-0">
                  <span className="flex items-center gap-1 text-slate-500 text-[11px]">
                    <Tv className="w-3.5 h-3.5 text-rose-600" /> Putar langsung dalam aplikasi
                  </span>
                  <button
                    onClick={() => setIsVideoModalOpen(false)}
                    className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition border border-slate-200"
                  >
                    Tutup
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Active IPA Topic Interactive HTML Quiz Modal */}
      {activeIpaTopic && (
        <IpaTopicQuizModal
          uid={userProfile.uid}
          topic={activeIpaTopic.topic}
          topicIndex={activeIpaTopic.index}
          lastScore={topicScores[activeIpaTopic.topic.id]?.bestScore ?? topicScores[activeIpaTopic.topic.id]?.lastScore}
          initialStatus={topicScores[activeIpaTopic.topic.id]?.status}
          onClose={() => setActiveIpaTopic(null)}
          onQuizCompleted={() => {
            if (onRefreshProfile) {
              onRefreshProfile();
            }
          }}
        />
      )}

      {/* Active Matematika Topic Interactive HTML Quiz Modal */}
      {activeMathTopic && (
        <MathTopicQuizModal
          uid={userProfile.uid}
          topic={activeMathTopic.topic}
          topicIndex={activeMathTopic.index}
          lastScore={topicScores[activeMathTopic.topic.id]?.bestScore ?? topicScores[activeMathTopic.topic.id]?.lastScore}
          initialStatus={topicScores[activeMathTopic.topic.id]?.status}
          onClose={() => setActiveMathTopic(null)}
          onQuizCompleted={() => {
            if (onRefreshProfile) {
              onRefreshProfile();
            }
          }}
        />
      )}

      {/* Active Bahasa Inggris Topic Interactive HTML Quiz Modal */}
      {activeEngTopic && (
        <EngTopicQuizModal
          uid={userProfile.uid}
          topic={activeEngTopic.topic}
          topicIndex={activeEngTopic.index}
          lastScore={topicScores[activeEngTopic.topic.id]?.bestScore ?? topicScores[activeEngTopic.topic.id]?.lastScore}
          initialStatus={topicScores[activeEngTopic.topic.id]?.status}
          onClose={() => setActiveEngTopic(null)}
          onQuizCompleted={() => {
            if (onRefreshProfile) {
              onRefreshProfile();
            }
          }}
        />
      )}

      {/* Active Bahasa Indonesia Topic Interactive HTML Quiz Modal */}
      {activeIndoTopic && (
        <IndoTopicQuizModal
          uid={userProfile.uid}
          topic={activeIndoTopic.topic}
          topicIndex={activeIndoTopic.index}
          lastScore={topicScores[activeIndoTopic.topic.id]?.bestScore ?? topicScores[activeIndoTopic.topic.id]?.lastScore}
          initialStatus={topicScores[activeIndoTopic.topic.id]?.status}
          onClose={() => setActiveIndoTopic(null)}
          onQuizCompleted={() => {
            if (onRefreshProfile) {
              onRefreshProfile();
            }
          }}
        />
      )}

      {/* Subject Material PDF Viewer Modal */}
      <SubjectMaterialPdfModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        subjectId={subjectId}
        subjectName={subjectName}
        onMaterialDeleted={() => {
          setStoredMaterialInfo(null);
        }}
        onRedownloadRequest={() => {
          handleDownloadMaterial();
        }}
      />

      {/* Modal Notifikasi: Soal Belum Tersedia */}
      {emptyPaketNotice !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 animate-in fade-in duration-150"
          onClick={() => setEmptyPaketNotice(null)}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-[#2E235C] border-2 border-amber-500/60 text-white rounded-3xl p-6 sm:p-7 max-w-sm w-full shadow-2xl text-center space-y-4 animate-in zoom-in-95 duration-200 relative"
          >
            <button
              onClick={() => setEmptyPaketNotice(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition"
              title="Tutup"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 mx-auto flex items-center justify-center shadow-lg shadow-amber-500/10">
              <Clock className="w-7 h-7 animate-pulse" />
            </div>

            <div>
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 inline-block mb-2">
                Try Out {subjectName} &bull; Paket {emptyPaketNotice}
              </span>
              <h3 className="text-lg font-black text-white">
                Soal Belum Tersedia
              </h3>
              <p className="text-xs text-white/80 mt-2 leading-relaxed font-medium">
                Paket Try Out <strong>Paket {emptyPaketNotice}</strong> saat ini masih dalam proses penyusunan dan akan diisi di kemudian hari.
              </p>
            </div>

            <div className="p-3 bg-amber-950/40 border border-amber-500/30 rounded-2xl text-left text-[11px] text-amber-200/90 font-medium">
              💡 <strong>Rekomendasi Belajar:</strong> Silakan tuntaskan Paket 1 s.d. 8 yang sudah siap diuji dengan standar CBT TKA SMP 2026.
            </div>

            <button
              onClick={() => setEmptyPaketNotice(null)}
              className="w-full py-2.5 px-4 rounded-xl bg-violet-600 hover:bg-violet-500 active:scale-98 text-white text-xs font-black transition shadow-md shadow-violet-900/40"
            >
              Oke, Mengerti
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
