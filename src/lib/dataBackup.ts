import { UserProfile } from '../types';
import { updateActiveUserLocalStorage } from './firebase';

/**
 * Cadangkan seluruh data belajar ke berkas cadangan di perangkat
 */
export function exportBackupFile(profile: UserProfile): void {
  const cleanName = (profile.displayName || 'Siswa').replace(/[^a-zA-Z0-9_-]/g, '_');
  const now = new Date();
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const fileName = `Cadangan_Belajar_Edufillah_${cleanName}_${dateStr}.edufillah`;

  const backupPayload = {
    app: 'Edufillah Learning App',
    version: '2.6',
    format: 'edufillah-backup',
    exportedAt: now.toISOString(),
    profile: {
      uid: profile.uid,
      email: profile.email,
      displayName: profile.displayName,
      sessionId: profile.sessionId,
      createdAt: profile.createdAt,
      lastLoginAt: profile.lastLoginAt,
      preTkaScores: profile.preTkaScores || {},
      topicScores: profile.topicScores || {},
      tryOutHistory: profile.tryOutHistory || { math: {}, indo: {}, eng: {}, ipa: {} },
    },
  };

  const jsonStr = JSON.stringify(backupPayload, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Validasi dan parse berkas cadangan data belajar
 */
export function parseBackupFile(content: string): { success: boolean; profile?: UserProfile; error?: string } {
  try {
    const data = JSON.parse(content);
    let rawProfile: any = null;

    if (data && typeof data === 'object') {
      if (data.profile && typeof data.profile === 'object') {
        rawProfile = data.profile;
      } else if (data.uid || data.topicScores || data.tryOutHistory) {
        rawProfile = data;
      }
    }

    if (!rawProfile) {
      return {
        success: false,
        error: 'Format berkas tidak cocok. Pastikan memilih berkas cadangan data belajar Edufillah yang valid.',
      };
    }

    // Bangun struktur UserProfile yang dijamin valid
    const validatedProfile: UserProfile = {
      uid: typeof rawProfile.uid === 'string' && rawProfile.uid ? rawProfile.uid : `usr_local_${Date.now()}`,
      email: typeof rawProfile.email === 'string' ? rawProfile.email : 'siswa@edufillah.local',
      displayName: typeof rawProfile.displayName === 'string' ? rawProfile.displayName : '',
      sessionId: typeof rawProfile.sessionId === 'string' ? rawProfile.sessionId : '',
      createdAt: typeof rawProfile.createdAt === 'string' ? rawProfile.createdAt : new Date().toISOString(),
      lastLoginAt: new Date().toISOString(),
      preTkaScores: rawProfile.preTkaScores && typeof rawProfile.preTkaScores === 'object' ? rawProfile.preTkaScores : {},
      topicScores: rawProfile.topicScores && typeof rawProfile.topicScores === 'object' ? rawProfile.topicScores : {},
      tryOutHistory: rawProfile.tryOutHistory && typeof rawProfile.tryOutHistory === 'object' ? rawProfile.tryOutHistory : {
        math: {}, indo: {}, eng: {}, ipa: {},
      },
    };

    return {
      success: true,
      profile: validatedProfile,
    };
  } catch (err) {
    return {
      success: false,
      error: 'Berkas tidak dapat dibaca. Pastikan berkas tidak rusak dan berupa berkas cadangan belajar yang benar.',
    };
  }
}

/**
 * Terapkan berkas cadangan ke penyimpanan lokal perangkat
 */
export function applyRestoredProfile(profile: UserProfile): void {
  updateActiveUserLocalStorage(profile);
}

/**
 * Reset seluruh riwayat pengerjaan nilai untuk mulai dari awal
 */
export function resetUserProfileData(profile: UserProfile): UserProfile {
  const resetProfile: UserProfile = {
    ...profile,
    preTkaScores: {
      math: { score: 0, passed: false, updatedAt: '' },
      indo: { score: 0, passed: false, updatedAt: '' },
      eng: { score: 0, passed: false, updatedAt: '' },
      ipa: { score: 0, passed: false, updatedAt: '' },
    },
    topicScores: {},
    tryOutHistory: {
      math: {},
      indo: {},
      eng: {},
      ipa: {},
    },
  };
  updateActiveUserLocalStorage(resetProfile);
  return resetProfile;
}
