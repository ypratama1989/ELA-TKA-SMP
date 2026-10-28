export type SubjectId = 'math' | 'indo' | 'eng' | 'ipa';

export interface LicenseSession {
  isLoggedIn: boolean;
  email: string;
  product?: string;
  subscriptionType?: '1_month' | '3_months' | '6_months' | '12_months' | 'lifetime' | string;
  startDate?: string;
  expiryDate?: string;
  deviceUuid: string;
  token?: string;
  lastCheckedAt?: string;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  sessionId: string;
  lastLoginAt: string;
  createdAt: string;
  preTkaScores: Record<string, { score: number; bestScore?: number; lastScore?: number; passed: boolean; updatedAt: string }>;
  topicScores: Record<string, { lastScore: number; bestScore?: number; status: 'Passed' | 'Failed'; updatedAt: string }>;
  tryOutHistory: Record<SubjectId, Record<number, Array<{ score: number; date: string; timestamp: number; updatedAt?: string }>>>;
}

export interface Question {
  id: number;
  question: string;
  image?: string; // URL, path to SVG/PNG, or inline SVG string
  images?: string[]; // Multiple images support (e.g. Stimulus with 2 or more illustrations)
  imageCaption?: string;
  isHots?: boolean;
  questionType?: 'single' | 'complex' | 'true_false';
  options: string[];
  correctAnswer?: number; // 0-based index for single answer
  correctAnswers?: number[]; // 0-based indices for multiple answers (Pilihan Ganda Kompleks)
  explanation: string;
}

export interface DiagnosticCategory {
  id: string;
  subjectId: SubjectId;
  title: string;
  shortTitle: string;
  description: string;
  badge: string;
  topics?: Array<{ title: string; desc: string }>;
  questions: Question[];
}

export interface PreTkaCategory {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  badge: string;
  topics: Array<{ title: string; desc: string }>;
  questions: Question[];
}

export interface TopicInfo {
  id: string;
  subjectId: SubjectId;
  title: string;
  description: string;
  category?: string;
  limitation?: string;
  passThreshold: number; // 85 for topics
  questions: Question[];
}

export interface TryOutPacket {
  id: number; // 1 to 8
  title: string;
  subjectId: SubjectId;
  durationMinutes: number;
  questions: Question[];
}

export interface QuizConfig {
  type: 'pre_tka' | 'diagnostic' | 'topic' | 'tryout';
  title: string;
  subjectId: SubjectId;
  preTkaCategoryId?: string;
  diagnosticCategoryId?: string;
  topicId?: string;
  paketId?: number;
  durationMinutes?: number;
  passThreshold: number;
  questions: Question[];
  isGuestAllowed?: boolean;
}
