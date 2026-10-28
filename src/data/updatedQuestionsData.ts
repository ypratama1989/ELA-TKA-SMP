import { SubjectId, Question } from '../types';

export interface UpdatedQuestionPackage {
  id: string;
  title: string;
  badge: string;
  subjectId: SubjectId | 'all';
  subjectName: string;
  releaseDate: string;
  description: string;
  durationMinutes: number;
  difficulty: 'Mudah' | 'Sedang' | 'HOTS / Menantang';
  questions: Question[];
}

/**
 * =========================================================================
 * PANDUAN PENGISIAN / PENAMBAHAN SOAL UPDATE TERBARU:
 * =========================================================================
 * Laman ini dikosongkan sementara sesuai permintaan.
 * Untuk menambahkan kumpulan soal baru di kemudian hari, Anda cukup
 * memasukkan objek paket soal ke dalam array `UPDATED_QUESTION_PACKAGES`
 * di bawah ini.
 *
 * Contoh struktur objek paket soal:
 * {
 *   id: 'update-pkt-1',
 *   title: 'Paket Update 1: Prediksi Kisi-Kisi TKA 2026',
 *   badge: 'Baru 2026',
 *   subjectId: 'math', // 'math' | 'indo' | 'eng' | 'ipa' | 'all'
 *   subjectName: 'Matematika',
 *   releaseDate: 'September 2026',
 *   description: 'Kumpulan soal prediksi penalaran dan pemecahan masalah kisi-kisi terbaru.',
 *   durationMinutes: 40,
 *   difficulty: 'HOTS / Menantang',
 *   questions: [
 *     {
 *       id: 1,
 *       question: 'Tuliskan teks soal pertanyaan di sini...',
 *       options: [
 *         'A. Pilihan jawaban A',
 *         'B. Pilihan jawaban B',
 *         'C. Pilihan jawaban C',
 *         'D. Pilihan jawaban D'
 *       ],
 *       correctAnswer: 0, // 0 untuk A, 1 untuk B, 2 untuk C, 3 untuk D
 *       explanation: 'Tuliskan kunci dan pembahasan langkah demi langkah di sini.'
 *     }
 *   ]
 * }
 * =========================================================================
 */

export const UPDATED_QUESTION_PACKAGES: UpdatedQuestionPackage[] = [];
