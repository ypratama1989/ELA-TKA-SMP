import { SubjectId } from '../types';

export interface StoredMaterialInfo {
  subjectId: SubjectId;
  fileName: string;
  size: number;
  downloadedAt: string;
}

export interface StoredMaterialRecord extends StoredMaterialInfo {
  blob: Blob;
}

export const SUBJECT_MATERIAL_METADATA: Record<SubjectId, { title: string; fileName: string; driveUrl: string; previewUrl: string; fileSizeStr: string }> = {
  indo: {
    title: 'Materi Bahasa Indonesia TKA SMP',
    fileName: 'Materi_Bahasa_Indonesia_TKA_SMP.pdf',
    driveUrl: 'https://drive.google.com/uc?export=download&id=1MjdIFrwXseegRdX-UTc_Ds_LlYLJjfPC',
    previewUrl: 'https://drive.google.com/file/d/1MjdIFrwXseegRdX-UTc_Ds_LlYLJjfPC/preview',
    fileSizeStr: '4.8 MB',
  },
  math: {
    title: 'Materi Matematika TKA SMP',
    fileName: 'Materi_Matematika_TKA_SMP.pdf',
    driveUrl: 'https://drive.google.com/uc?export=download&id=17UiylmoHIrbGTgGqThzWR0bsgl-rGgKa',
    previewUrl: 'https://drive.google.com/file/d/17UiylmoHIrbGTgGqThzWR0bsgl-rGgKa/preview',
    fileSizeStr: '22.7 MB',
  },
  eng: {
    title: 'Materi Bahasa Inggris TKA SMP',
    fileName: 'Materi_Bahasa_Inggris_TKA_SMP.pdf',
    driveUrl: 'https://drive.google.com/uc?export=download&id=1rrwQEA_Sncvxv6u2SKDdVLX3hNC1umCk',
    previewUrl: 'https://drive.google.com/file/d/1rrwQEA_Sncvxv6u2SKDdVLX3hNC1umCk/preview',
    fileSizeStr: '3.5 MB',
  },
  ipa: {
    title: 'Materi IPA TKA SMP',
    fileName: 'Materi_IPA_TKA_SMP.pdf',
    driveUrl: 'https://drive.google.com/uc?export=download&id=1pZlszRCyORwNKtt6G4wWUzVGXx1jVtkK',
    previewUrl: 'https://drive.google.com/file/d/1pZlszRCyORwNKtt6G4wWUzVGXx1jVtkK/preview',
    fileSizeStr: '4.5 MB',
  },
};

const DB_NAME = 'edufillah_subject_materials_db';
const STORE_NAME = 'pdf_materials';
const DB_VERSION = 2;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB tidak didukung oleh browser ini.'));
      return;
    }
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (event) => {
      const db = request.result;
      if (event.oldVersion < 2 && db.objectStoreNames.contains(STORE_NAME)) {
        // Hapus store lama agar materi math & indo yang sebelumnya tertukar diperbarui
        db.deleteObjectStore(STORE_NAME);
      }
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'subjectId' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error('Gagal membuka basis data lokal.'));
  });
}

/**
 * Simpan berkas PDF materi ke IndexedDB lokal browser
 */
export async function saveMaterialToStorage(record: StoredMaterialRecord): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const putRequest = store.put(record);
    putRequest.onsuccess = () => resolve();
    putRequest.onerror = () => reject(putRequest.error);
  });
}

/**
 * Ambil berkas Blob materi dari IndexedDB lokal browser
 */
export async function getMaterialFromStorage(subjectId: SubjectId): Promise<StoredMaterialRecord | null> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const getRequest = store.get(subjectId);
      getRequest.onsuccess = () => resolve(getRequest.result || null);
      getRequest.onerror = () => reject(getRequest.error);
    });
  } catch (e) {
    console.warn('Gagal membaca materi dari IndexedDB:', e);
    return null;
  }
}

/**
 * Periksa apakah materi sudah pernah diunduh dan tersimpan di memori perangkat
 */
export async function getMaterialInfoFromStorage(subjectId: SubjectId): Promise<StoredMaterialInfo | null> {
  const record = await getMaterialFromStorage(subjectId);
  if (!record || !record.blob) return null;
  return {
    subjectId: record.subjectId,
    fileName: record.fileName,
    size: record.size || record.blob.size,
    downloadedAt: record.downloadedAt,
  };
}

/**
 * Hapus berkas materi dari memori lokal (untuk menghemat memori perangkat jika diinginkan)
 */
export async function deleteMaterialFromStorage(subjectId: SubjectId): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const deleteRequest = store.delete(subjectId);
      deleteRequest.onsuccess = () => resolve();
      deleteRequest.onerror = () => reject(deleteRequest.error);
    });
  } catch (e) {
    console.warn('Gagal menghapus materi dari IndexedDB:', e);
  }
}

/**
 * Format ukuran berkas bytes ke KB / MB yang ramah dibaca
 */
export function formatFileSize(bytes: number): string {
  if (!bytes || bytes <= 0) return '0 B';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/**
 * Mengunduh berkas materi melalui streaming proxy dengan pemantauan progres byte
 */
export async function downloadMaterialWithProgress(
  subjectId: SubjectId,
  onProgress: (percent: number, loadedBytes: number, totalBytes: number) => void
): Promise<Blob> {
  const meta = SUBJECT_MATERIAL_METADATA[subjectId];
  if (!meta) {
    throw new Error('Mata pelajaran tidak valid.');
  }

  // Coba streaming dari endpoint server proxy
  const apiUrl = `/api/materials/download/${subjectId}`;
  let response: Response;
  try {
    response = await fetch(apiUrl);
  } catch (err: any) {
    // Jika fetch proxy gagal karena masalah jaringan, coba langsung ke URL Drive
    try {
      response = await fetch(meta.driveUrl);
    } catch {
      throw new Error(`Gagal menghubungi server unduhan. Silakan gunakan tautan unduh langsung.`);
    }
  }

  // Jika status bukan 200 (misal 500, 502, 404), coba direct fallback
  if (!response.ok) {
    try {
      const fallbackRes = await fetch(meta.driveUrl);
      if (fallbackRes.ok) {
        response = fallbackRes;
      }
    } catch {
      // Abaikan fallback error dan gunakan error status asli
    }
  }

  if (!response.ok) {
    throw new Error(`Gagal mengunduh materi (Kode: ${response.status}). Periksa koneksi internet.`);
  }

  const contentLengthHeader = response.headers.get('content-length');
  const totalBytes = contentLengthHeader ? parseInt(contentLengthHeader, 10) : 0;

  if (!response.body) {
    const blob = await response.blob();
    onProgress(100, blob.size, blob.size);
    return blob;
  }

  const reader = response.body.getReader();
  const chunks: Uint8Array[] = [];
  let loadedBytes = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (value) {
      chunks.push(value);
      loadedBytes += value.length;
      const percent = totalBytes > 0 ? Math.min(Math.round((loadedBytes / totalBytes) * 100), 99) : 0;
      onProgress(percent, loadedBytes, totalBytes);
    }
  }

  const completeBlob = new Blob(chunks, { type: 'application/pdf' });
  onProgress(100, completeBlob.size, completeBlob.size);
  return completeBlob;
}
