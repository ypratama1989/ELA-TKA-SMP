import { UserProfile, SubjectId } from '../types';

// Local session storage keys
const SESSION_KEY = 'ela_tka_session_id';
const ACTIVE_USER_KEY = 'ela_tka_active_user';

/**
 * Get or create unique local device session ID
 */
export function getLocalSessionId(): string {
  let sessionId = localStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = 'device_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
    localStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
}

/**
 * Creates a unique deterministic UID from email input
 */
export function createLocalUid(email: string): string {
  const cleanEmail = email.trim().toLowerCase();
  let hash = 0;
  for (let i = 0; i < cleanEmail.length; i++) {
    hash = (hash << 5) - hash + cleanEmail.charCodeAt(i);
    hash |= 0;
  }
  return 'usr_' + Math.abs(hash).toString(36) + '_' + cleanEmail.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 15);
}

/**
 * Helper to update local active user storage
 */
export function updateActiveUserLocalStorage(updatedProfile: UserProfile): void {
  try {
    localStorage.setItem(`ela_tka_profile_${updatedProfile.uid}`, JSON.stringify(updatedProfile));
    localStorage.setItem(ACTIVE_USER_KEY, JSON.stringify(updatedProfile));
  } catch (e) {
    console.warn('Failed to update localStorage:', e);
  }
}

/**
 * Get saved profile from localStorage
 */
export function getActiveProfileFromLocalStorage(uid?: string): UserProfile | null {
  try {
    if (uid) {
      const rawSpecific = localStorage.getItem(`ela_tka_profile_${uid}`);
      if (rawSpecific) return JSON.parse(rawSpecific);
    }
    const rawActive = localStorage.getItem(ACTIVE_USER_KEY);
    return rawActive ? JSON.parse(rawActive) : null;
  } catch (e) {
    return null;
  }
}

/**
 * Creates a default profile template
 */
export function createDefaultProfile(uid: string, email: string): UserProfile {
  return {
    uid,
    email,
    displayName: '',
    sessionId: getLocalSessionId(),
    lastLoginAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
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
}

/**
 * Direct login function - allows logging in with any email & password instantly via LocalStorage
 */
export async function directLoginWithoutAuth(emailInput: string, passwordInput: string): Promise<UserProfile> {
  const email = emailInput.trim().toLowerCase();
  if (!email || !passwordInput.trim()) {
    throw new Error('Harap isi Email/Username dan Password.');
  }

  const uid = createLocalUid(email);
  const currentLocalSession = getLocalSessionId();

  const defaultProfile = createDefaultProfile(uid, email);
  const existingLocal = getActiveProfileFromLocalStorage(uid);
  const profile: UserProfile = existingLocal ? { ...defaultProfile, ...existingLocal } : defaultProfile;

  profile.sessionId = currentLocalSession;
  profile.lastLoginAt = new Date().toISOString();

  updateActiveUserLocalStorage(profile);
  return profile;
}

/**
 * Gets or creates user profile from LocalStorage
 */
export async function getOrCreateUserProfile(userOrUid: any): Promise<UserProfile> {
  const uid = typeof userOrUid === 'string' ? userOrUid : (userOrUid?.uid || 'guest');
  const email = typeof userOrUid === 'string' ? `${uid}@edufillah.local` : (userOrUid?.email || 'siswa@edufillah.id');

  const existing = getActiveProfileFromLocalStorage(uid);
  if (existing) {
    return existing;
  }

  const newProfile = createDefaultProfile(uid, email);
  updateActiveUserLocalStorage(newProfile);
  return newProfile;
}

/**
 * Validate and activate session (Local)
 */
export async function validateAndActivateSession(user: any): Promise<{ profile: UserProfile; error?: string }> {
  const profile = await getOrCreateUserProfile(user);
  return { profile };
}

/**
 * Authenticate user (Local fallback)
 */
export async function authenticateUser(emailInput: string, passwordInput: string): Promise<any> {
  const profile = await directLoginWithoutAuth(emailInput, passwordInput);
  return {
    uid: profile.uid,
    email: profile.email,
  };
}

/**
 * Saves user display name
 */
export async function updateUserDisplayName(uid: string, displayName: string): Promise<void> {
  const cleanName = displayName.trim();
  const localProfile = getActiveProfileFromLocalStorage(uid);
  if (localProfile) {
    localProfile.displayName = cleanName;
    updateActiveUserLocalStorage(localProfile);
  }
}

/**
 * Saves Pre-TKA Worksheet quiz result to LocalStorage
 */
export async function recordPreTkaScore(
  uid: string, 
  categoryId: string, 
  score: number, 
  passed: boolean
): Promise<void> {
  const localProfile = getActiveProfileFromLocalStorage(uid);
  if (localProfile) {
    const currentPreTka = localProfile.preTkaScores || {};
    const existing = currentPreTka[categoryId];
    const prevBest = existing ? (existing.bestScore ?? existing.score ?? 0) : 0;
    const bestScore = Math.max(prevBest, score);
    const hasPassed = (existing?.passed) || passed || bestScore >= 85;

    localProfile.preTkaScores = {
      ...currentPreTka,
      [categoryId]: {
        score: bestScore,
        bestScore,
        lastScore: score,
        passed: hasPassed,
        updatedAt: new Date().toISOString(),
      },
    };
    updateActiveUserLocalStorage(localProfile);
  }
}

/**
 * Saves Kisi-Kisi Topic quiz result, retaining the highest score (bestScore) and passed status in LocalStorage
 */
export async function recordTopicScore(
  uid: string, 
  topicId: string, 
  score: number, 
  passed: boolean
): Promise<void> {
  const localProfile = getActiveProfileFromLocalStorage(uid);
  if (localProfile) {
    const currentTopicScores = localProfile.topicScores || {};
    const existing = currentTopicScores[topicId];
    const prevBest = existing ? (existing.bestScore ?? existing.lastScore ?? 0) : 0;
    const bestScore = Math.max(prevBest, score);
    const hasPassed = (existing?.status === 'Passed') || passed || bestScore >= 85;

    localProfile.topicScores = {
      ...currentTopicScores,
      [topicId]: {
        lastScore: score,
        bestScore,
        status: hasPassed ? 'Passed' : 'Failed',
        updatedAt: new Date().toISOString(),
      },
    };
    updateActiveUserLocalStorage(localProfile);
  }
}

/**
 * Saves Try Out score (storing attempt history with precise timestamps for charts and history log) in LocalStorage
 */
export async function recordTryOutScore(
  uid: string, 
  subjectId: SubjectId, 
  paketId: number, 
  score: number
): Promise<void> {
  const now = Date.now();
  const isoDate = new Date().toISOString();
  const formattedDate = new Date().toLocaleDateString('id-ID', { 
    day: '2-digit', 
    month: 'short',
    year: 'numeric'
  });

  const newEntry = {
    score,
    date: formattedDate,
    timestamp: now,
    updatedAt: isoDate,
  };

  const localProfile = getActiveProfileFromLocalStorage(uid);
  if (localProfile) {
    const history = localProfile.tryOutHistory || { math: {}, indo: {}, eng: {}, ipa: {} };
    const subjectHistory = history[subjectId] || {};
    const packetList = subjectHistory[paketId] || [];
    const updatedPacketList = [...packetList, newEntry].slice(-15);

    localProfile.tryOutHistory = {
      ...history,
      [subjectId]: {
        ...subjectHistory,
        [paketId]: updatedPacketList,
      },
    };
    updateActiveUserLocalStorage(localProfile);
  }
}

/**
 * Clears active session ID locally and logs out
 */
export async function logoutAndClearSession(uid?: string): Promise<void> {
  localStorage.removeItem(SESSION_KEY);
  localStorage.removeItem(ACTIVE_USER_KEY);
}

// Backward-compatibility stubs so no other component throws
export const auth = { currentUser: null };
export const db = {};
