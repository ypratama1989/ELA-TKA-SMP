// src/services/backNavigation.ts
/**
 * Back Navigation & History Service
 * Menangani tombol back fisik / gesture / browser pada HP dan Tablet
 * agar aplikasi kembali ke halaman/tampilan/modal sebelumnya dan tidak langsung keluar dari aplikasi.
 */

export type BackHandler = () => void;

interface ModalEntry {
  id: string;
  onClose: BackHandler;
}

// Stack modal aktif
const modalStack: ModalEntry[] = [];

// Flag & counter untuk mengabaikan popstate yang dipicu oleh penutupan modal secara terprogram (UI click)
let programmaticBackCount = 0;

// Timestamp tombol back ditekan terakhir pada halaman utama (dashboard)
let lastBackPressOnDashboard = 0;
const DOUBLE_BACK_EXIT_THRESHOLD_MS = 2500;

/**
 * Mendaftarkan modal ke stack back-navigation dan menambahkan entry ke browser history.
 * Mengembalikan fungsi cleanup untuk dipanggil saat modal ditutup melalui UI.
 */
export function registerModalBack(id: string, onClose: BackHandler): () => void {
  try {
    const currentHash = window.location.hash || '#modal';
    window.history.pushState(
      { type: 'modal', modalId: id, timestamp: Date.now() },
      '',
      currentHash
    );
  } catch (err) {
    console.debug('History pushState error:', err);
  }

  const entry: ModalEntry = { id, onClose };
  modalStack.push(entry);

  let isCleanedUp = false;

  return () => {
    if (isCleanedUp) return;
    isCleanedUp = true;

    const idx = modalStack.findIndex((item) => item === entry);
    if (idx !== -1) {
      modalStack.splice(idx, 1);
      // Ditutup melalui tombol UI (X / backdrop / selesai), sinkronkan browser history
      programmaticBackCount++;
      try {
        window.history.back();
      } catch (err) {
        console.debug('History back error:', err);
      }
    }
  };
}

/**
 * Menutup modal paling atas jika ada modal yang aktif.
 * Mengembalikan true jika ada modal yang ditutup, false jika tidak ada modal terbuka.
 */
export function popTopModal(): boolean {
  if (modalStack.length > 0) {
    const top = modalStack.pop();
    if (top) {
      try {
        top.onClose();
      } catch (err) {
        console.error('Error saat menutup modal via back button:', err);
      }
      return true;
    }
  }
  return false;
}

/**
 * Memeriksa apakah ada modal yang sedang aktif/terbuka.
 */
export function hasOpenModals(): boolean {
  return modalStack.length > 0;
}

/**
 * Memeriksa dan mengonsumsi event popstate terprogram dari penutupan via UI.
 */
export function checkAndConsumeProgrammaticBack(): boolean {
  if (programmaticBackCount > 0) {
    programmaticBackCount--;
    return true;
  }
  return false;
}

/**
 * Menangani back press saat berada di root dashboard.
 * Menampilkan peringatan double-press back sebelum keluar aplikasi di HP/tablet.
 * Mengembalikan true jika diizinkan keluar, atau false jika dicegah dan diberi peringatan.
 */
export function handleDashboardExitAttempt(onShowToast: (msg: string) => void): boolean {
  const now = Date.now();
  if (now - lastBackPressOnDashboard < DOUBLE_BACK_EXIT_THRESHOLD_MS) {
    // Pengguna menekan back dua kali berturut-turut, izinkan keluar aplikasi
    lastBackPressOnDashboard = 0;
    return true;
  }

  // Back pertama kali: tahan aplikasi dan tampilkan pesan toast
  lastBackPressOnDashboard = now;
  onShowToast('Tekan tombol kembali sekali lagi untuk keluar dari Edufillah');

  // Push guard state kembali agar aplikasi tidak langsung tertutup
  try {
    window.history.pushState(
      { type: 'view', view: 'dashboard', isGuard: true, timestamp: now },
      '',
      window.location.pathname + '#dashboard'
    );
  } catch (err) {
    console.debug('Guard pushState error:', err);
  }

  return false;
}
