import { LicenseSession, UserProfile } from '../types';
import { createDefaultProfile, getActiveProfileFromLocalStorage, updateActiveUserLocalStorage } from '../lib/firebase';

export const GAS_AUTH_URL = 'https://script.google.com/macros/s/AKfycbzKXR4gUxo26sD5iV-uDKc9hwc1dTFLTrQGHBWifS1IITd111Nztu0cXSidr7JhPL_O/exec';
export const LYNKID_PRODUCT_URL = 'http://lynk.id/edufillah/4vzk0o106j2m';

const DEVICE_UUID_KEY = 'edufillah_tka_smp_device_uuid';
const LICENSE_SESSION_KEY = 'edufillah_tka_smp_license_session';

export interface AuthLoginResponse {
  success: boolean;
  status: 'success' | 'not_registered' | 'expired' | 'device_locked' | 'error';
  message: string;
  data?: LicenseSession;
}

/**
 * Mendapatkan atau membuat Device UUID unik untuk perangkat ini (disimpan di LocalStorage)
 */
export function getOrCreateDeviceUuid(): string {
  try {
    let uuid = localStorage.getItem(DEVICE_UUID_KEY);
    if (!uuid || uuid.trim() === '') {
      // Buat UUID acak sederhana yang tahan sesi
      const randomPart = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
      uuid = `dev_${Date.now()}_${randomPart}`;
      localStorage.setItem(DEVICE_UUID_KEY, uuid);
    }
    return uuid;
  } catch (e) {
    return `dev_fallback_${Date.now()}`;
  }
}

/**
 * Membaca sesi lisensi yang tersimpan di LocalStorage
 */
export function getLocalLicenseSession(): LicenseSession | null {
  try {
    const raw = localStorage.getItem(LICENSE_SESSION_KEY);
    if (!raw) return null;
    const session = JSON.parse(raw) as LicenseSession;
    if (!session || !session.isLoggedIn) return null;

    // Normalisasi dan perbaiki anomali tanggal otomatis (misal tahun 2001 menjadi tahun aktif)
    const parsed = parseSubscriptionExpiryDate(session.expiryDate, session.subscriptionType);
    if (!parsed.isLifetime && session.expiryDate !== parsed.normalizedDateStr) {
      session.expiryDate = parsed.normalizedDateStr;
      saveLocalLicenseSession(session);
    }

    return session;
  } catch (e) {
    return null;
  }
}

/**
 * Menyimpan sesi lisensi ke LocalStorage
 */
export function saveLocalLicenseSession(session: LicenseSession): void {
  try {
    localStorage.setItem(LICENSE_SESSION_KEY, JSON.stringify(session));
  } catch (e) {
    console.error('Failed to save license session to localStorage', e);
  }
}

/**
 * Menghapus sesi lisensi dari LocalStorage (Logout lokal)
 */
export function clearLocalLicenseSession(): void {
  try {
    localStorage.removeItem(LICENSE_SESSION_KEY);
  } catch (e) {
    console.error('Failed to clear license session', e);
  }
}

export interface ParsedSubscriptionExpiry {
  isLifetime: boolean;
  date: Date;
  normalizedDateStr: string; // Format YYYY-MM-DD atau 9999-12-31
}

/**
 * Melakukan parsing tanggal kadaluwarsa yang sangat tangguh untuk semua subscription type
 * Mendukung format database: YYYY-MM-DD, DD-MM-YYYY, DD/MM/YYYY, DD-MM-YY, text, dan kalkulasi dinamis tipe paket
 */
export function parseSubscriptionExpiryDate(
  rawExpiry?: string | null,
  rawSubType?: string | null,
  referenceDate: Date = new Date()
): ParsedSubscriptionExpiry {
  const s = (rawExpiry || '').trim();
  const sub = (rawSubType || '').toLowerCase().trim();

  // 1. Cek apakah tipe lisensi adalah Lifetime / Selamanya
  if (
    sub.includes('lifetime') || 
    sub.includes('selamanya') || 
    sub.includes('permanen') ||
    sub.includes('permanent') ||
    sub.includes('unlimited') ||
    sub.includes('seumur_hidup') ||
    s.startsWith('9999') || 
    s.startsWith('2099') ||
    s.toLowerCase().includes('lifetime') ||
    s.toLowerCase().includes('selamanya')
  ) {
    return {
      isLifetime: true,
      date: new Date(9999, 11, 31, 23, 59, 59),
      normalizedDateStr: '9999-12-31',
    };
  }

  let d: Date | null = null;
  const currentYear = referenceDate.getFullYear();

  // 2. Pattern: YYYY-MM-DD atau YYYY/MM/DD atau YYYY.MM.DD (ISO format)
  const ymdMatch = s.match(/^(\d{4})[-/. ](\d{1,2})[-/. ](\d{1,2})/);
  if (ymdMatch) {
    let year = parseInt(ymdMatch[1], 10);
    const month = parseInt(ymdMatch[2], 10) - 1;
    const day = parseInt(ymdMatch[3], 10);

    // Deteksi anomali tahun 2001 atau < 2024 (misal dari input/parsing '01' atau kesalahan format tahun)
    if (year === 2001 || year < 2024) {
      year = currentYear;
    }
    d = new Date(year, month, day, 23, 59, 59);
  }

  // 3. Pattern: DD-MM-YYYY atau DD/MM/YYYY atau DD.MM.YYYY
  if (!d) {
    const dmyMatch = s.match(/^(\d{1,2})[-/. ](\d{1,2})[-/. ](\d{4})/);
    if (dmyMatch) {
      const day = parseInt(dmyMatch[1], 10);
      const month = parseInt(dmyMatch[2], 10) - 1;
      let year = parseInt(dmyMatch[3], 10);
      if (year === 2001 || year < 2024) {
        year = currentYear;
      }
      d = new Date(year, month, day, 23, 59, 59);
    }
  }

  // 4. Pattern: DD-MM-YY atau DD/MM/YY (2-digit year misal 10-10-26 atau 10-10-01)
  if (!d) {
    const dmy2Match = s.match(/^(\d{1,2})[-/. ](\d{1,2})[-/. ](\d{2})$/);
    if (dmy2Match) {
      const day = parseInt(dmy2Match[1], 10);
      const month = parseInt(dmy2Match[2], 10) - 1;
      const yy = parseInt(dmy2Match[3], 10);
      let year = 2000 + yy;
      if (year === 2001 || year < 2024) {
        year = currentYear;
      }
      d = new Date(year, month, day, 23, 59, 59);
    }
  }

  // 5. Generic Date Parsing jika ada string tanggal lain
  if (!d && s) {
    const testD = new Date(s);
    if (!isNaN(testD.getTime())) {
      let year = testD.getFullYear();
      if (year === 2001 || year < 2024) {
        year = currentYear;
        testD.setFullYear(year);
      }
      testD.setHours(23, 59, 59, 999);
      d = testD;
    }
  }

  // 6. Hitung berdasarkan Subscription Type jika tanggal kosong atau tidak terdeteksi
  if (!d) {
    const now = new Date(referenceDate);
    if (
      sub.includes('1_year') || 
      sub.includes('1_tahun') || 
      sub.includes('12_month') ||
      sub.includes('12_bulan') ||
      sub.includes('yearly') || 
      sub.includes('tahunan') || 
      sub.includes('365')
    ) {
      d = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate(), 23, 59, 59);
    } else if (
      sub.includes('6_month') || 
      sub.includes('6_bulan') || 
      sub.includes('semester') || 
      sub.includes('180')
    ) {
      d = new Date(now.getFullYear(), now.getMonth() + 6, now.getDate(), 23, 59, 59);
    } else if (
      sub.includes('3_month') || 
      sub.includes('3_bulan') || 
      sub.includes('triwulan') || 
      sub.includes('90')
    ) {
      d = new Date(now.getFullYear(), now.getMonth() + 3, now.getDate(), 23, 59, 59);
    } else {
      // Default paket bulanan / 1 bulan (30 hari)
      d = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate(), 23, 59, 59);
    }
  }

  const normalizedStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

  return {
    isLifetime: false,
    date: d,
    normalizedDateStr: normalizedStr,
  };
}

export interface LicenseRemainingInfo {
  isLoggedIn: boolean;
  isLifetime: boolean;
  daysRemaining: number;
  expiryDateFormatted: string;
  badgeLabel: string;
  detailLabel: string;
  status: 'active' | 'expiring_soon' | 'expired' | 'lifetime' | 'guest';
}

/**
 * Menghitung sisa masa aktif lisensi untuk ditampilkan di header dan modal aplikasi
 */
export function getRemainingActiveInfo(session: LicenseSession | null): LicenseRemainingInfo {
  if (!session || !session.isLoggedIn) {
    return {
      isLoggedIn: false,
      isLifetime: false,
      daysRemaining: 0,
      expiryDateFormatted: '-',
      badgeLabel: 'Mode Tamu',
      detailLabel: 'Akses Terbatas',
      status: 'guest'
    };
  }

  const parsed = parseSubscriptionExpiryDate(session.expiryDate, session.subscriptionType);

  if (parsed.isLifetime) {
    return {
      isLoggedIn: true,
      isLifetime: true,
      daysRemaining: 99999,
      expiryDateFormatted: 'Selamanya',
      badgeLabel: 'Lifetime',
      detailLabel: 'Masa Aktif: Selamanya (Permanen)',
      status: 'lifetime'
    };
  }

  const now = new Date();
  const diffMs = parsed.date.getTime() - now.getTime();
  const daysRemaining = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));

  const formattedDate = parsed.date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  if (diffMs <= 0) {
    return {
      isLoggedIn: true,
      isLifetime: false,
      daysRemaining: 0,
      expiryDateFormatted: formattedDate,
      badgeLabel: 'Kedaluwarsa',
      detailLabel: `Habis pada ${formattedDate}`,
      status: 'expired'
    };
  }

  if (daysRemaining <= 7) {
    return {
      isLoggedIn: true,
      isLifetime: false,
      daysRemaining,
      expiryDateFormatted: formattedDate,
      badgeLabel: `${daysRemaining} Hari Lagi`,
      detailLabel: `Sisa ${daysRemaining} hari (s.d. ${formattedDate})`,
      status: 'expiring_soon'
    };
  }

  return {
    isLoggedIn: true,
    isLifetime: false,
    daysRemaining,
    expiryDateFormatted: formattedDate,
    badgeLabel: `${daysRemaining} Hari`,
    detailLabel: `Sisa ${daysRemaining} hari (s.d. ${formattedDate})`,
    status: 'active'
  };
}

/**
 * Memeriksa apakah pengguna saat ini memiliki lisensi aktif yang belum kadaluwarsa
 * Menjamin 100% sinkronisasi antara logika pembatasan fitur dan tampilan status
 */
export function isLicenseActive(): boolean {
  const session = getLocalLicenseSession();
  if (!session || !session.isLoggedIn) return false;

  const info = getRemainingActiveInfo(session);
  return info.status === 'active' || info.status === 'expiring_soon' || info.status === 'lifetime';
}

/**
 * Mendapatkan profil pengguna aktif. Jika mode tamu, sediakan profil tamu.
 */
export function getActiveOrGuestProfile(): UserProfile {
  const session = getLocalLicenseSession();
  const email = (session && session.isLoggedIn && session.email) ? session.email : 'tamu@edufillah.id';
  const uid = (session && session.isLoggedIn && session.email) 
    ? `user_${encodeURIComponent(session.email).replace(/[^a-zA-Z0-9]/g, '_')}`
    : 'guest_tka_smp';

  const existingProfile = getActiveProfileFromLocalStorage(uid);
  if (existingProfile) {
    return existingProfile;
  }

  const defaultProfile = createDefaultProfile(uid, email);
  if (!session || !session.isLoggedIn) {
    defaultProfile.displayName = 'Sobat EduFillah (Tamu)';
  } else {
    // Ambil nama dari prefix email
    const prefix = email.split('@')[0];
    defaultProfile.displayName = prefix ? prefix.charAt(0).toUpperCase() + prefix.slice(1) : 'Siswa TKA SMP';
  }
  updateActiveUserLocalStorage(defaultProfile);
  return defaultProfile;
}

/**
 * Melakukan proses login dengan email saja ke Google Apps Script
 */
export async function loginWithEmail(inputEmail: string): Promise<AuthLoginResponse> {
  const email = inputEmail.trim().toLowerCase();
  if (!email || !email.includes('@')) {
    return {
      success: false,
      status: 'error',
      message: 'Format alamat email tidak valid.',
    };
  }

  const deviceUuid = getOrCreateDeviceUuid();

  try {
    const queryParams = new URLSearchParams({
      action: 'tka_smp_login',
      email: email,
      device_uuid: deviceUuid,
    });

    const url = `${GAS_AUTH_URL}?${queryParams.toString()}`;

    // Menggunakan fetch GET dengan redirect follow (standar Google Apps Script Web App)
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Server merespons status ${response.status}`);
    }

    const resJson = await response.json();

    if (resJson.status === 'success') {
      const data = resJson.data || {};
      
      // Ambil tanggal kadaluwarsa dari berbagai kemungkinan nama kolom database Google Sheets
      const rawExpiry = 
        data.expire || 
        data.expiry_date || 
        data.expiryDate || 
        data.expired || 
        data.expired_date || 
        data.expire_date || 
        data.tgl_kadaluarsa || 
        data.expires_at || 
        data.expired_at || 
        '';

      const subType = 
        data.subscription_type || 
        data.subscription || 
        data.subscriptionType || 
        data.paket || 
        data.tipe_paket || 
        '1_month';

      const parsed = parseSubscriptionExpiryDate(rawExpiry, subType);
      const normalizedExpiry = parsed.isLifetime ? '9999-12-31' : parsed.normalizedDateStr;

      const newSession: LicenseSession = {
        isLoggedIn: true,
        email: email,
        product: data.product || 'ELA TKA SMP',
        subscriptionType: subType,
        expiryDate: normalizedExpiry,
        deviceUuid: deviceUuid,
        token: data.token || '',
        lastCheckedAt: new Date().toISOString(),
      };

      saveLocalLicenseSession(newSession);

      // Siapkan/update profil lokal pengguna
      const uid = `user_${encodeURIComponent(email).replace(/[^a-zA-Z0-9]/g, '_')}`;
      let profile = getActiveProfileFromLocalStorage(uid);
      if (!profile) {
        profile = createDefaultProfile(uid, email);
        const prefix = email.split('@')[0];
        profile.displayName = prefix ? prefix.charAt(0).toUpperCase() + prefix.slice(1) : 'Siswa TKA SMP';
      }
      profile.lastLoginAt = new Date().toISOString();
      updateActiveUserLocalStorage(profile);

      return {
        success: true,
        status: 'success',
        message: resJson.message || 'Login berhasil! Akses penuh telah dibuka.',
        data: newSession,
      };
    }

    if (resJson.status === 'not_registered') {
      return {
        success: false,
        status: 'not_registered',
        message: resJson.message || 'Email ini belum terdaftar memiliki lisensi paket ELA TKA SMP.',
      };
    }

    if (resJson.status === 'expired') {
      return {
        success: false,
        status: 'expired',
        message: resJson.message || 'Masa aktif paket Anda telah habis. Silakan perpanjang paket.',
      };
    }

    if (resJson.status === 'device_locked') {
      return {
        success: false,
        status: 'device_locked',
        message: resJson.message || 'Akun ini sedang aktif di perangkat lain. Silakan logout dari perangkat lama terlebih dahulu.',
      };
    }

    return {
      success: false,
      status: 'error',
      message: resJson.message || 'Terjadi kesalahan saat memverifikasi akun.',
    };
  } catch (err: any) {
    console.error('Error logging in via GAS:', err);
    return {
      success: false,
      status: 'error',
      message: 'Gagal terhubung ke server lisensi. Pastikan koneksi internet Anda stabil.',
    };
  }
}

/**
 * Melakukan Logout resmi dan melepaskan kuncian Device UUID di Google Apps Script (Tab ke-3)
 */
export async function logoutLicense(): Promise<{ success: boolean; message: string }> {
  const session = getLocalLicenseSession();
  const deviceUuid = getOrCreateDeviceUuid();

  if (session && session.email) {
    try {
      const queryParams = new URLSearchParams({
        action: 'tka_smp_logout',
        email: session.email,
        device_uuid: deviceUuid,
      });

      // Panggil logout ke GAS agar active_device_uuid di Spreadsheet dikosongkan
      await fetch(`${GAS_AUTH_URL}?${queryParams.toString()}`, {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
      });
    } catch (e) {
      console.warn('Logout request to GAS encountered an error (proceeding with local clear):', e);
    }
  }

  // Bersihkan sesi lokal
  clearLocalLicenseSession();

  return {
    success: true,
    message: 'Berhasil logout. Akun Anda kini siap digunakan di perangkat lain.',
  };
}

/**
 * Memeriksa status sesi secara background ke Google Apps Script (Heartbeat)
 */
export async function verifyCurrentSession(): Promise<{ isValid: boolean; reason?: string }> {
  const session = getLocalLicenseSession();
  if (!session || !session.isLoggedIn || !session.email) {
    return { isValid: false, reason: 'no_session' };
  }

  // Jika offline, percayai sesi lokal dulu selama belum expired
  if (!navigator.onLine) {
    return { isValid: isLicenseActive() };
  }

  try {
    const deviceUuid = getOrCreateDeviceUuid();
    const queryParams = new URLSearchParams({
      action: 'tka_smp_check',
      email: session.email,
      device_uuid: deviceUuid,
    });

    const response = await fetch(`${GAS_AUTH_URL}?${queryParams.toString()}`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    });

    if (!response.ok) return { isValid: true }; // Jangan putus jika server sementara sibuk

    const resJson = await response.json();

    if (resJson.status === 'success') {
      const data = resJson.data || {};
      const rawExpiry = 
        data.expire || 
        data.expiry_date || 
        data.expiryDate || 
        data.expired || 
        data.expired_date || 
        data.expire_date || 
        data.tgl_kadaluarsa || 
        data.expires_at || 
        data.expired_at || 
        '';

      const subType = 
        data.subscription_type || 
        data.subscription || 
        data.subscriptionType || 
        session.subscriptionType || 
        '1_month';

      if (rawExpiry || data.subscription_type) {
        const parsed = parseSubscriptionExpiryDate(rawExpiry || session.expiryDate, subType);
        session.expiryDate = parsed.isLifetime ? '9999-12-31' : parsed.normalizedDateStr;
        session.subscriptionType = subType;
      }
      session.lastCheckedAt = new Date().toISOString();
      saveLocalLicenseSession(session);
      return { isValid: true };
    }

    if (resJson.status === 'device_locked' || resJson.status === 'expired' || resJson.status === 'not_registered') {
      clearLocalLicenseSession();
      return { isValid: false, reason: resJson.status };
    }

    return { isValid: true };
  } catch (e) {
    // Toleran terhadap network blip
    return { isValid: true };
  }
}
