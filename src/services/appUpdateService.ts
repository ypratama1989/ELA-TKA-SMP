/**
 * Service untuk menangani pembaruan aplikasi PWA & Web Cache
 * Menjamin pembaruan aplikasi berjalan mulus tanpa menghapus data lokal siswa.
 */

export const APP_VERSION = '2.5.0';
export const APP_BUILD_DATE = 'September 2026';
export const UPDATE_AVAILABLE_EVENT = 'edufillah:update-available';

export interface UpdateStatus {
  isChecking: boolean;
  hasUpdate: boolean;
  isUpdating: boolean;
  message: string;
}

/**
 * Memicu event custom bahwa pembaruan tersedia
 */
export function triggerUpdateAvailableEvent(): void {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(UPDATE_AVAILABLE_EVENT));
  }
}

/**
 * Memeriksa pembaruan Service Worker atau aset aplikasi
 */
export async function checkForAppUpdates(): Promise<{ hasUpdate: boolean; message: string }> {
  try {
    if ('serviceWorker' in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      if (registrations.length > 0) {
        for (const reg of registrations) {
          await reg.update();
          if (reg.waiting) {
            triggerUpdateAvailableEvent();
            return {
              hasUpdate: true,
              message: 'Versi baru aplikasi sudah siap diterapkan.',
            };
          }
        }
      }
    }

    // Cek ketersediaan koneksi internet
    if (!navigator.onLine) {
      return {
        hasUpdate: false,
        message: 'Perangkat sedang offline. Sambungkan internet untuk memeriksa pembaruan.',
      };
    }

    return {
      hasUpdate: true,
      message: 'Aplikasi siap disegarkan ke kode & bank soal terbaru.',
    };
  } catch (err: any) {
    console.warn('Check update error:', err);
    return {
      hasUpdate: true,
      message: 'Pembaruan aplikasi dapat dilakukan sekarang.',
    };
  }
}

/**
 * Memasang pendengar event otomatis (Service Worker & Broadcast) saat ada update baru
 * Mengembalikan fungsi unsubscribe untuk cleanup
 */
export function subscribeToAppUpdates(onUpdateReady: () => void): () => void {
  if (typeof window === 'undefined') return () => {};

  // 1. Dengar Custom Event internal
  const handleCustomEvent = () => onUpdateReady();
  window.addEventListener(UPDATE_AVAILABLE_EVENT, handleCustomEvent);

  let checkInterval: any = null;

  // 2. Dengar siklus hidup Service Worker jika didukung
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistration().then((reg) => {
      if (!reg) return;

      // Jika sudah ada worker yang waiting
      if (reg.waiting) {
        onUpdateReady();
      }

      // Jika ada worker baru yang sedang diunduh/diinstal
      reg.addEventListener('updatefound', () => {
        const installingWorker = reg.installing;
        if (installingWorker) {
          installingWorker.addEventListener('statechange', () => {
            if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
              onUpdateReady();
            }
          });
        }
      });
    }).catch((e) => console.debug('SW registration inspect note:', e));

    // Cek secara berkala setiap 20 menit saat aplikasi aktif
    checkInterval = setInterval(() => {
      if (navigator.onLine) {
        navigator.serviceWorker.getRegistration().then((reg) => {
          if (reg) {
            reg.update().catch(() => {});
          }
        }).catch(() => {});
      }
    }, 20 * 60 * 1000);
  }

  return () => {
    window.removeEventListener(UPDATE_AVAILABLE_EVENT, handleCustomEvent);
    if (checkInterval) clearInterval(checkInterval);
  };
}

/**
 * Menerapkan pembaruan aplikasi:
 * 1. Menghapus cache aset statis lama (Cache Storage)
 * 2. Mengaktifkan service worker baru jika ada
 * 3. Memuat ulang (reload) halaman secara bersih
 * CATATAN: LocalStorage dan IndexedDB TIDAK dihapus, sehingga data belajar tetap utuh!
 */
export async function applyAppUpdate(): Promise<void> {
  try {
    // 1. Bersihkan Cache Storage browser
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map((name) => {
          console.debug('Clearing outdated app cache:', name);
          return caches.delete(name);
        })
      );
    }

    // 2. Beri tahu service worker baru untuk skip waiting
    if ('serviceWorker' in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      for (const reg of registrations) {
        if (reg.waiting) {
          reg.waiting.postMessage({ type: 'SKIP_WAITING' });
        }
      }
    }
  } catch (e) {
    console.error('Error during app update cleanup:', e);
  } finally {
    // 3. Reload aplikasi dengan timestamp cache-buster
    const url = new URL(window.location.href);
    url.searchParams.set('_v', Date.now().toString());
    window.location.href = url.toString();
  }
}
