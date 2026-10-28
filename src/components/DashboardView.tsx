import React, { useState, useMemo } from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend, 
  Filler 
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { 
  BookOpen, 
  Calculator, 
  BookMarked, 
  Languages, 
  Atom, 
  Award, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  ArrowRight,
  Filter,
  BrainCircuit,
  Compass,
  Trophy,
  Download,
  FileSpreadsheet,
  Play,
  AlertCircle,
  BarChart2,
  Search,
  ExternalLink,
  Crown,
  History,
  Lightbulb,
  Check,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  Lock,
  LogIn
} from 'lucide-react';
import { UserProfile, SubjectId, QuizConfig, LicenseSession } from '../types';
import { SUBJECT_NAMES, TOPICS_BY_SUBJECT } from '../data/quizData';
import { TkaChampionBadgeModal, calculateBadgeTier } from './TkaChampionBadgeModal';
import { FieldReportModal } from './FieldReportModal';
import { useModalBackHandler } from '../hooks/useModalBackHandler';
import { getRemainingActiveInfo, getLocalLicenseSession, LYNKID_PRODUCT_URL } from '../services/authLicenseService';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface DashboardViewProps {
  userProfile: UserProfile;
  isLoggedIn?: boolean;
  licenseSession?: LicenseSession | null;
  onNavigate: (view: string, subjectId?: SubjectId) => void;
  onStartQuiz?: (config: QuizConfig) => void;
  onOpenSettings?: () => void;
  onRequireLogin?: (featureName?: string) => void;
  onOpenSoalTka?: () => void;
}

interface UnifiedHistoryItem {
  id: string;
  type: 'tryout' | 'topic' | 'diagnostic';
  title: string;
  subjectId: SubjectId;
  subjectName: string;
  score: number;
  maxScore: number;
  passed: boolean;
  date: string;
  timestamp: number;
  details?: string;
}

interface StudyRecommendation {
  id: string;
  type: 'remedial' | 'next_topic' | 'tryout_challenge';
  subjectId: SubjectId;
  subjectName: string;
  title: string;
  category: string;
  priority: 'Tinggi' | 'Sedang' | 'Rekomendasi';
  reason: string;
  currentScore?: number;
  actionText: string;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ 
  userProfile, 
  isLoggedIn = false,
  licenseSession,
  onNavigate, 
  onStartQuiz: _onStartQuiz,
  onOpenSettings: _onOpenSettings,
  onRequireLogin,
  onOpenSoalTka,
}) => {
  const licenseInfo = useMemo(() => {
    return getRemainingActiveInfo(licenseSession || getLocalLicenseSession());
  }, [licenseSession, isLoggedIn]);

  const handleProtectedAction = (action: () => void, featureName: string) => {
    if (!isLoggedIn && onRequireLogin) {
      onRequireLogin(featureName);
      return;
    }
    action();
  };

  // Modal states
  const [isBadgeModalOpen, setIsBadgeModalOpen] = useState(false);
  const [isFieldReportModalOpen, setIsFieldReportModalOpen] = useState(false);

  // Sync modal states with mobile/tablet back button
  useModalBackHandler(isBadgeModalOpen, () => setIsBadgeModalOpen(false), 'badgeModal');
  useModalBackHandler(isFieldReportModalOpen, () => setIsFieldReportModalOpen(false), 'fieldReportModal');

  // Filter states for Chart
  const [selectedSubject, setSelectedSubject] = useState<SubjectId>('math');
  const [selectedPaket, setSelectedPaket] = useState<number | 'all'>('all');
  const [chartType, setChartType] = useState<'bar' | 'line'>('bar');

  // Filter states for Unified History
  const [historyTypeFilter, setHistoryTypeFilter] = useState<'all' | 'tryout' | 'topic' | 'diagnostic'>('all');
  const [historySubjectFilter, setHistorySubjectFilter] = useState<'all' | SubjectId>('all');
  const [historyLimit, setHistoryLimit] = useState<number>(8);

  // Filter states for Recommendations
  const [recFilter, setRecFilter] = useState<'all' | 'remedial' | 'next_topic' | 'tryout_challenge'>('all');

  // Show / Hide Section States (Daftar Topik, Grafik Perkembangan, Riwayat Pengerjaan)
  const [showRecommendations, setShowRecommendations] = useState<boolean>(true);
  const [showChart, setShowChart] = useState<boolean>(true);
  const [showHistory, setShowHistory] = useState<boolean>(true);

  const subjectsList: SubjectId[] = ['math', 'indo', 'eng', 'ipa'];

  // =========================================================================
  // 1. HITUNG PROGRESS BELAJAR PER MAPEL & KESELURUHAN
  // =========================================================================
  const subjectProgressStats = useMemo(() => {
    return subjectsList.map((subId) => {
      const allTopics = TOPICS_BY_SUBJECT[subId] || [];
      const totalTopics = allTopics.length;

      // Topik yang lulus (status === 'Passed' atau score >= 85)
      const passedTopics = allTopics.filter((t) => {
        const scoreInfo = userProfile.topicScores?.[t.id];
        return scoreInfo && (scoreInfo.status === 'Passed' || scoreInfo.lastScore >= 85);
      }).length;

      const attemptedTopics = allTopics.filter((t) => {
        return Boolean(userProfile.topicScores?.[t.id]);
      }).length;

      // Riwayat Try Out
      const subTryOuts = userProfile.tryOutHistory?.[subId] || {};
      let totalTryOutSessions = 0;
      const completedPaketsSet = new Set<number>();
      const tuntasPaketsSet = new Set<number>();
      const tryOutScores: number[] = [];

      for (let p = 1; p <= 12; p++) {
        const list = subTryOuts[p] as Array<{ score: number; date: string; timestamp: number }> | undefined;
        if (list && list.length > 0) {
          completedPaketsSet.add(p);
          totalTryOutSessions += list.length;
          list.forEach((item) => tryOutScores.push(item.score));
          // Batas tuntas Try Out adalah skor >= 85
          const highestScore = Math.max(...list.map((item) => item.score));
          if (highestScore >= 85) {
            tuntasPaketsSet.add(p);
          }
        }
      }

      const uniquePaketsCompleted = completedPaketsSet.size; // total paket yang pernah dikerjakan
      const tuntasPaketsCount = tuntasPaketsSet.size; // total paket yang tuntas (skor >= 85)
      const avgTryOutScore = tryOutScores.length > 0 
        ? Math.round(tryOutScores.reduce((a, b) => a + b, 0) / tryOutScores.length) 
        : 0;

      // Bobot ketuntasan: 70% topik tuntas (>=85), 30% try out tuntas (>=85 per 12 paket)
      const topicRatio = totalTopics > 0 ? passedTopics / totalTopics : 0;
      const tryOutRatio = tuntasPaketsCount / 12;
      const percent = Math.min(100, Math.round((topicRatio * 0.7 + tryOutRatio * 0.3) * 100));

      return {
        subjectId: subId,
        name: SUBJECT_NAMES[subId],
        totalTopics,
        passedTopics,
        attemptedTopics,
        uniquePaketsCompleted,
        tuntasPaketsCount,
        totalTryOutSessions,
        avgTryOutScore,
        percent,
      };
    });
  }, [userProfile]);

  // Persentase Kesiapan Keseluruhan (Overall Readiness)
  const overallPercent = useMemo(() => {
    const totalPassedTopics = subjectProgressStats.reduce((sum, s) => sum + s.passedTopics, 0);
    const totalAllTopics = subjectProgressStats.reduce((sum, s) => sum + s.totalTopics, 0); // 71 topik
    const totalPaketsTuntas = subjectProgressStats.reduce((sum, s) => sum + s.tuntasPaketsCount, 0); // out of 48 (4 mapel x 12 paket)
    
    // Formula komprehensif ketuntasan (skor >= 85)
    const topicsProgress = totalAllTopics > 0 ? (totalPassedTopics / totalAllTopics) * 0.7 : 0;
    const tryoutsProgress = (totalPaketsTuntas / 48) * 0.3;
    return Math.min(100, Math.round((topicsProgress + tryoutsProgress) * 100));
  }, [subjectProgressStats]);

  const totalPassedTopicsCount = useMemo(() => {
    return subjectProgressStats.reduce((sum, s) => sum + s.passedTopics, 0);
  }, [subjectProgressStats]);

  const totalTryOutPacketsTuntasCount = useMemo(() => {
    return subjectProgressStats.reduce((sum, s) => sum + s.tuntasPaketsCount, 0);
  }, [subjectProgressStats]);

  const totalTryOutPacketsCompletedCount = useMemo(() => {
    return subjectProgressStats.reduce((sum, s) => sum + s.uniquePaketsCompleted, 0);
  }, [subjectProgressStats]);

  // TKA Champion Badge saat ini
  const currentBadgeTier = useMemo(() => {
    return calculateBadgeTier(overallPercent);
  }, [overallPercent]);

  // =========================================================================
  // 2. GENERASI REKOMENDASI BELAJAR PINTAR
  // =========================================================================
  const recommendations = useMemo(() => {
    const recs: StudyRecommendation[] = [];

    // Prioritas 1: Topik dan Try Out yang belum tuntas (Remidi / skor < 85)
    subjectsList.forEach((subId) => {
      const topics = TOPICS_BY_SUBJECT[subId] || [];
      topics.forEach((t) => {
        const scoreData = userProfile.topicScores?.[t.id];
        if (scoreData && (scoreData.status === 'Failed' || scoreData.lastScore < 85)) {
          recs.push({
            id: `rem_${t.id}`,
            type: 'remedial',
            subjectId: subId,
            subjectName: SUBJECT_NAMES[subId],
            title: t.title,
            category: t.category || 'Materi Inti',
            priority: 'Tinggi',
            reason: `Skor terakhir ${scoreData.lastScore}/100 belum mencapai batas tuntas (≥85). Perlu penguatan pemahaman konsep.`,
            currentScore: scoreData.lastScore,
            actionText: 'Remidi & Kerjakan Ulang',
          });
        }
      });

      // Try Out remidi (sudah diambil tapi skor tertinggi < 85)
      const subTryOuts = userProfile.tryOutHistory?.[subId] || {};
      for (let p = 1; p <= 12; p++) {
        const list = (subTryOuts[p] as Array<{ score: number }> | undefined) || [];
        if (list.length > 0) {
          const maxScore = Math.max(...list.map((i) => i.score));
          if (maxScore < 85) {
            recs.push({
              id: `rem_to_${subId}_${p}`,
              type: 'remedial',
              subjectId: subId,
              subjectName: SUBJECT_NAMES[subId],
              title: `Try Out Paket ${p} ${SUBJECT_NAMES[subId]}`,
              category: 'Simulasi CBT Standar TKA',
              priority: 'Tinggi',
              reason: `Skor terbaik ${maxScore}/100 belum tuntas (KKM ≥85). Ulangi simulasi CBT ini.`,
              currentScore: maxScore,
              actionText: `Remidi Try Out Paket ${p}`,
            });
          }
        }
      }
    });

    // Prioritas 2: Topik belum dikerjakan dari mapel dengan progress terendah
    const sortedSubjects = [...subjectProgressStats].sort((a, b) => a.percent - b.percent);
    sortedSubjects.forEach((subStat) => {
      const topics = TOPICS_BY_SUBJECT[subStat.subjectId] || [];
      const unattempted = topics.filter((t) => !userProfile.topicScores?.[t.id]);
      
      // Ambil hingga 2 topik pertama yang belum dikerjakan per mapel
      unattempted.slice(0, 2).forEach((t) => {
        recs.push({
          id: `next_${t.id}`,
          type: 'next_topic',
          subjectId: subStat.subjectId,
          subjectName: subStat.name,
          title: t.title,
          category: t.category || 'Materi Pokok',
          priority: recs.length < 3 ? 'Tinggi' : 'Sedang',
          reason: `Materi pokok kisi-kisi TKA ${subStat.name} belum pernah diuji.`,
          actionText: 'Pelajari Materi & Mulai Kuis',
        });
      });
    });

    // Prioritas 3: Tantangan Paket Try Out CBT Berikutnya
    subjectsList.forEach((subId) => {
      const subTryOuts = userProfile.tryOutHistory?.[subId] || {};
      for (let p = 1; p <= 12; p++) {
        const list = subTryOuts[p] || [];
        if (list.length === 0) {
          recs.push({
            id: `to_${subId}_${p}`,
            type: 'tryout_challenge',
            subjectId: subId,
            subjectName: SUBJECT_NAMES[subId],
            title: `Simulasi Try Out Paket ${p} ${SUBJECT_NAMES[subId]}`,
            category: 'Simulasi CBT Standar TKA',
            priority: 'Rekomendasi',
            reason: `Latih manajemen waktu dan pemecahan soal komposit di Paket ${p}.`,
            actionText: `Buka Try Out Paket ${p}`,
          });
          break; // ambil paket pertama yang belum dikerjakan untuk mapel ini
        }
      }
    });

    return recs;
  }, [userProfile, subjectProgressStats]);

  const filteredRecommendations = useMemo(() => {
    if (recFilter === 'all') return recommendations.slice(0, 6);
    return recommendations.filter((r) => r.type === recFilter).slice(0, 6);
  }, [recommendations, recFilter]);

  // =========================================================================
  // 3. GENERASI RINCIAN RIWAYAT PENGERJAAN LENGKAP
  // =========================================================================
  const unifiedHistory = useMemo(() => {
    const list: UnifiedHistoryItem[] = [];

    // A. Masukkan Try Out History
    const tryOuts = userProfile.tryOutHistory || { math: {}, indo: {}, eng: {}, ipa: {} };
    subjectsList.forEach((subId) => {
      const subjectMap = tryOuts[subId] || {};
      for (let pktNum = 1; pktNum <= 12; pktNum++) {
        const attemptsList = subjectMap[pktNum] as Array<{ score: number; date: string; timestamp: number }> | undefined;
        if (attemptsList && attemptsList.length > 0) {
          attemptsList.forEach((att, idx) => {
            list.push({
              id: `to_${subId}_${pktNum}_${att.timestamp || idx}`,
              type: 'tryout',
              title: `Try Out Paket ${pktNum} - ${SUBJECT_NAMES[subId]}`,
              subjectId: subId,
              subjectName: SUBJECT_NAMES[subId],
              score: att.score,
              maxScore: 100,
              passed: att.score >= 85,
              date: att.date || 'Baru Saja',
              timestamp: att.timestamp || Date.now() - idx * 60000,
              details: `Simulasi CBT Paket ${pktNum}`,
            });
          });
        }
      }
    });

    // B. Masukkan Topic Scores
    const topicScores = userProfile.topicScores || {};
    subjectsList.forEach((subId) => {
      const topics = TOPICS_BY_SUBJECT[subId] || [];
      topics.forEach((t) => {
        const scoreData = topicScores[t.id];
        if (scoreData) {
          const ts = scoreData.updatedAt ? new Date(scoreData.updatedAt).getTime() : Date.now();
          list.push({
            id: `topic_${t.id}`,
            type: 'topic',
            title: `Kuis: ${t.title}`,
            subjectId: subId,
            subjectName: SUBJECT_NAMES[subId],
            score: scoreData.lastScore,
            maxScore: 100,
            passed: scoreData.status === 'Passed' || scoreData.lastScore >= 85,
            date: scoreData.updatedAt ? new Date(scoreData.updatedAt).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            }) : 'Selesai',
            timestamp: ts,
            details: `Kategori: ${t.category || 'Materi Inti'}`,
          });
        }
      });
    });

    // C. Masukkan Pre-TKA / Diagnostic Scores (mengikuti aturan kronologis yang sama dengan latihan lain)
    const preTka = userProfile.preTkaScores || {};
    Object.entries(preTka).forEach(([catId, rawData]) => {
      const data = rawData as { score: number; bestScore?: number; lastScore?: number; passed: boolean; updatedAt: string };
      // Hanya masukkan ke riwayat pengerjaan jika sudah pernah dikerjakan
      if (!data || (!data.updatedAt && data.lastScore === undefined && data.score === 0)) {
        return;
      }

      // Deteksi subjectId dari catId
      let sId: SubjectId = 'math';
      if (catId.startsWith('indo')) sId = 'indo';
      else if (catId.startsWith('eng')) sId = 'eng';
      else if (catId.startsWith('ipa')) sId = 'ipa';

      // Gunakan timestamp pengerjaan sebenarnya agar saat ada latihan baru, diagnostic turun ke bawah
      const ts = data.updatedAt ? new Date(data.updatedAt).getTime() : 0;
      const displayScore = data.lastScore ?? data.score ?? 0;

      list.push({
        id: `diag_${catId}_${ts}`,
        type: 'diagnostic',
        title: `Diagnostic Test Fondasi (${catId.toUpperCase()})`,
        subjectId: sId,
        subjectName: SUBJECT_NAMES[sId],
        score: displayScore,
        maxScore: 100,
        passed: data.passed || displayScore >= 85,
        date: data.updatedAt ? new Date(data.updatedAt).toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }) : 'Selesai',
        timestamp: ts,
        details: 'Evaluasi Diagnostik Fondasi Konsep',
      });
    });

    // Urutkan menurun secara tegas dari yang paling baru dikerjakan
    return list.sort((a, b) => b.timestamp - a.timestamp);
  }, [userProfile]);

  // Filter history
  const filteredHistory = useMemo(() => {
    return unifiedHistory.filter((item) => {
      const matchType = historyTypeFilter === 'all' || item.type === historyTypeFilter;
      const matchSubject = historySubjectFilter === 'all' || item.subjectId === historySubjectFilter;
      return matchType && matchSubject;
    });
  }, [unifiedHistory, historyTypeFilter, historySubjectFilter]);

  // =========================================================================
  // 4. DATA GRAFIK TRY OUT (DIBUAT PROPORSIONAL & TIDAK TERLALU LEBAR)
  // =========================================================================
  const tryOutHistory = userProfile.tryOutHistory || { math: {}, indo: {}, eng: {}, ipa: {} };
  const subjectHistory = tryOutHistory[selectedSubject] || {};

  let attempts: Array<{ score: number; date: string; paketId: number }> = [];

  if (selectedPaket === 'all') {
    Object.keys(subjectHistory).forEach((pktKey) => {
      const pktId = Number(pktKey);
      const list = subjectHistory[pktId] || [];
      list.forEach((entry) => {
        attempts.push({
          score: entry.score,
          date: `${entry.date || ''} (P${pktId})`,
          paketId: pktId,
        });
      });
    });
    // Batasi maksimum 6 data percobaan terakhir agar grafik tidak padat dan tetap ringkas
    attempts = attempts.slice(-6);
  } else {
    const list = subjectHistory[selectedPaket] || [];
    attempts = list.map((entry) => ({
      score: entry.score,
      date: entry.date || 'Sesi',
      paketId: selectedPaket,
    })).slice(-6);
  }

  const scoresList = attempts.map((a) => a.score);
  const highestScore = scoresList.length > 0 ? Math.max(...scoresList) : 0;
  const avgScore = scoresList.length > 0 ? Math.round(scoresList.reduce((a, b) => a + b, 0) / scoresList.length) : 0;
  const totalTaken = scoresList.length;
  const lastScore = scoresList.length > 0 ? scoresList[scoresList.length - 1] : 0;
  const isLastPassed = lastScore >= 85;

  const chartLabels = attempts.length > 0 
    ? attempts.map((a, i) => a.date || `P${a.paketId || i + 1}`)
    : ['P1', 'P2', 'P3', 'P4', 'P5'];

  const chartValues = attempts.length > 0 ? attempts.map((a) => a.score) : [0, 0, 0, 0, 0];

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: `Skor ${SUBJECT_NAMES[selectedSubject]}`,
        data: chartValues,
        backgroundColor: chartValues.map((v) => (v >= 85 ? '#7C3AED' : '#F59E0B')), // Vibrant Purple if passed, Golden Yellow if remedial
        borderColor: chartValues.map((v) => (v >= 85 ? '#6D28D9' : '#D97706')),
        borderWidth: 2,
        borderRadius: 8,
        barPercentage: 0.55,
        categoryPercentage: 0.7,
        tension: 0.3,
        fill: chartType === 'line',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        max: 100,
        grid: { color: '#E2E8F0' },
        ticks: { stepSize: 25, font: { size: 10 }, color: '#64748B' },
      },
      x: {
        grid: { display: false },
        ticks: { font: { size: 10 }, color: '#64748B', maxRotation: 25, minRotation: 0 },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context: any) => `Skor: ${context.parsed.y} / 100 (${context.parsed.y >= 85 ? 'LULUS' : 'REMIDI'})`,
        },
      },
    },
  };

  return (
    <div className="space-y-7 sm:space-y-9 pb-16 font-sans">
      
      {/* ===================================================================
          0. GUEST MODE NOTICE BANNER (JIKA BELUM LOGIN)
      =================================================================== */}
      {!isLoggedIn && (
        <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-[#2E235C] via-[#382B6D] to-[#1F1742] border-2 border-[#5B4AA8] text-white shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fade-in">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shrink-0 shadow-md border-2 border-amber-300">
              <Sparkles className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] uppercase font-black tracking-wider px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 shadow-xs">
                  Mode Tamu (Pratinjau)
                </span>
                <h4 className="font-black text-sm sm:text-base text-white">
                  Fitur Pratinjau Bebas Dibuka
                </h4>
              </div>
              <p className="text-xs text-white/80 mt-1 leading-relaxed">
                Kamu dapat mencoba langsung: <strong>1) Soal TKA 2026 (CBT)</strong>, <strong>2) Try Out Paket 8 pada tiap mapel</strong>, dan <strong>3) Diagnostic Test Bahasa Indonesia</strong>. Fitur lainnya terkunci dan dapat diakses setelah masuk akun.
              </p>
            </div>
          </div>
          <button
            onClick={() => onRequireLogin?.('Akses Penuh Aplikasi')}
            className="shrink-0 w-full sm:w-auto px-4 py-2.5 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 active:from-amber-500 text-slate-950 font-black rounded-xl text-xs sm:text-sm shadow-md transition transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <LogIn className="w-4 h-4 text-slate-950" />
            <span>Masuk Akun Sekarang</span>
          </button>
        </div>
      )}

      {/* ===================================================================
          0.1 EXPIRY REMINDER BANNER (Masa Aktif <= 7 Hari / Expired)
      =================================================================== */}
      {isLoggedIn && !licenseInfo.isLifetime && (licenseInfo.daysRemaining <= 7 || licenseInfo.status === 'expiring_soon' || licenseInfo.status === 'expired') && (
        <div className={`p-4 sm:p-5 rounded-3xl border-2 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fade-in ${
          licenseInfo.status === 'expired' 
            ? 'bg-rose-50 border-rose-300 text-slate-900' 
            : 'bg-gradient-to-r from-amber-50 via-orange-50 to-amber-100/90 border-amber-300 text-slate-900'
        }`}>
          <div className="flex items-start sm:items-center gap-3.5">
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-black shrink-0 shadow-md border-2 ${
              licenseInfo.status === 'expired'
                ? 'bg-rose-500 text-white border-rose-400'
                : 'bg-amber-400 text-slate-950 border-amber-300'
            }`}>
              {licenseInfo.status === 'expired' ? (
                <AlertCircle className="w-5 h-5 text-white" />
              ) : (
                <Clock className="w-5 h-5 text-slate-950" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-[10px] uppercase font-black tracking-wider px-2.5 py-0.5 rounded-full shadow-xs ${
                  licenseInfo.status === 'expired'
                    ? 'bg-rose-500 text-white'
                    : 'bg-amber-400 text-slate-950'
                }`}>
                  {licenseInfo.status === 'expired' ? 'Lisensi Kedaluwarsa' : `Sisa ${licenseInfo.daysRemaining} Hari Lagi`}
                </span>
                <h4 className="font-black text-sm sm:text-base text-slate-900">
                  {licenseInfo.status === 'expired' 
                    ? 'Masa Aktif Lisensi Telah Habis' 
                    : 'Peringatan Masa Aktif Lisensi (Segera Perpanjang)'}
                </h4>
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed max-w-2xl font-medium">
                {licenseInfo.status === 'expired' ? (
                  <>Masa aktif paket Anda telah habis pada <strong>{licenseInfo.expiryDateFormatted}</strong>. Segera perpanjang lisensi Anda agar seluruh modul materi, kuis topik, video, dan try out CBT dapat dibuka kembali.</>
                ) : (
                  <>Masa aktif lisensi paket Anda tersisa <strong>{licenseInfo.daysRemaining} hari lagi</strong> (berakhir pada <strong>{licenseInfo.expiryDateFormatted}</strong>). Segera perpanjang paket agar persiapan ujian TKA SMP tetap lancar tanpa jeda.</>
                )}
              </p>
            </div>
          </div>
          <a
            href={LYNKID_PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-full sm:w-auto px-4 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 active:from-amber-700 text-white font-black rounded-xl text-xs sm:text-sm shadow-md transition transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Perpanjang di Lynk.id</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}

      {/* ===================================================================
          1. WELCOME BANNER & ACTION HEADER (UNDUH MATERI & BADGE CHAMPION)
      =================================================================== */}
      <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 rounded-3xl p-4 sm:p-8 text-white shadow-xl relative overflow-hidden border border-violet-500">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-300 text-slate-900 text-[10px] sm:text-xs font-black shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900 animate-pulse" />
                <span>Persiapan TKA SMP Terpadu</span>
              </div>

              {/* Mobile-only compact logo */}
              <div className="sm:hidden w-8 h-8 rounded-xl bg-white p-0.5 shadow-sm border border-white shrink-0 overflow-hidden">
                <img 
                  src="/logo_edufillah.svg" 
                  alt="EduFillah Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <h1 className="text-xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white drop-shadow-xs">
              Edufillah Learning App
            </h1>

            <p className="text-white/90 text-xs sm:text-sm md:text-base mt-1.5 sm:mt-2 leading-relaxed font-medium">
              Halo, <span className="text-slate-900 font-black bg-amber-300 px-2 py-0.5 rounded-lg">{userProfile.displayName || 'Siswa Berprestasi'}</span>! Selamat datang di dashboard analitik Tes Kemampuan Akademik (TKA) SMP. Pantau perkembangan belajarmu secara real-time.
            </p>

            {/* Quick Action Buttons on Banner */}
            <div className="mt-3.5 sm:mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3">
              {/* Tombol TKA Champion Badge */}
              <button
                onClick={() => setIsBadgeModalOpen(true)}
                className="w-full sm:w-auto px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-900 text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition border-2 border-amber-300 active:scale-95 shadow-md cursor-pointer"
              >
                <Trophy className="w-4 h-4 text-slate-900 shrink-0" />
                <span>Lencana: {currentBadgeTier.name}</span>
              </button>
            </div>
          </div>

          {/* Logo Brand on Right (Tablet & Desktop) */}
          <div className="hidden sm:flex shrink-0 justify-center md:justify-end">
            <div className="bg-white p-1 sm:p-2 rounded-3xl border-2 border-white shadow-2xl flex items-center justify-center w-32 h-32 sm:w-44 sm:h-44 aspect-square overflow-hidden">
              <img 
                src="/logo_edufillah.svg" 
                alt="EduFillah Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================================
          2. RINGKASAN PROGRESS BELAJAR: KESELURUHAN & TKA CHAMPION BADGE
      =================================================================== */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Overall Readiness Card (7 cols) */}
        <div className="lg:col-span-7 bg-white border-2 border-slate-200 rounded-3xl p-5 sm:p-7 shadow-sm flex flex-col justify-between text-slate-800">
          <div>
            <div className="flex items-center justify-between gap-3 mb-4">
              <div>
                <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-violet-600" />
                  Kesiapan Keseluruhan TKA SMP
                </h2>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  Akumulasi capaian 71 topik materi dan 48 paket try out CBT
                </p>
              </div>

              <div className="text-right">
                <span className="text-2xl sm:text-3xl font-black text-violet-600">
                  {overallPercent}%
                </span>
                <div className="text-[10px] text-slate-400 font-bold">Index Kesiapan</div>
              </div>
            </div>

            {/* Visual Progress Bar */}
            <div className="w-full bg-slate-100 rounded-full h-3.5 p-0.5 border border-slate-200 overflow-hidden mb-5">
              <div 
                className="h-full bg-violet-600 rounded-full transition-all duration-700 shadow-xs"
                style={{ width: `${Math.max(5, overallPercent)}%` }}
              />
            </div>

            {/* Quick Metrics Breakdown - Pastel Accent Blocks */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-sky-50 p-3 rounded-2xl border-2 border-sky-200 text-center shadow-xs">
                <div className="text-slate-500 text-[11px] font-bold">Topik Tuntas</div>
                <div className="text-base sm:text-lg font-black text-sky-800 mt-0.5">
                  {totalPassedTopicsCount} <span className="text-[11px] text-slate-400 font-normal">/ 71</span>
                </div>
              </div>

              <div className="bg-amber-50 p-3 rounded-2xl border-2 border-amber-200 text-center shadow-xs">
                <div className="text-slate-500 text-[11px] font-bold">Try Out (≥85)</div>
                <div className="text-base sm:text-lg font-black text-amber-800 mt-0.5">
                  {totalTryOutPacketsTuntasCount} <span className="text-[11px] text-slate-400 font-normal">/ 48</span>
                </div>
              </div>

              <div className="bg-orange-50 p-3 rounded-2xl border-2 border-orange-200 text-center shadow-xs">
                <div className="text-slate-500 text-[11px] font-bold">Status Kesiapan</div>
                <div className="text-xs sm:text-sm font-black text-orange-800 mt-1 truncate">
                  {overallPercent >= 85 ? 'Siap Ujian' : overallPercent >= 50 ? 'Berkembang' : 'Pemula'}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Batas Tuntas (KKM): &ge; 85 &bull; Di bawah 85: Belum Tuntas</span>
            <button
              onClick={() => setIsBadgeModalOpen(true)}
              className="text-violet-600 hover:text-violet-800 font-bold inline-flex items-center gap-1 transition"
            >
              Lihat Kriteria <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
            </button>
          </div>
        </div>

        {/* Kolom Akses Menu Persiapan TKA (5 cols) - Flashcard, Diagnostic Test, Download Materi, Soal TKA 2026 */}
        <div className="lg:col-span-5 bg-white border-2 border-slate-200 rounded-3xl p-5 sm:p-7 shadow-sm flex flex-col justify-between text-slate-800">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Menu Persiapan TKA
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  Akses instan 4 instrumen latihan &amp; materi
                </p>
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-violet-100 text-violet-700 shadow-xs">
                Pintasan Cepat
              </span>
            </div>

            {/* 4 Cards Grid (2x2) Pastel Accent Blocks */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {/* 1. Flashcard (Oranye Hangat) */}
              <div
                onClick={() => handleProtectedAction(() => onNavigate('flashcard'), 'Flashcard TKA')}
                className="group cursor-pointer p-3 sm:p-3.5 rounded-2xl bg-orange-50 hover:bg-orange-100/80 border-2 border-orange-200 text-slate-800 transition transform active:scale-98 flex flex-col justify-between min-h-[105px] sm:min-h-[115px] shadow-xs relative"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xl bg-orange-200 text-orange-800 flex items-center justify-center font-black">
                    <BrainCircuit className="w-4 h-4" />
                  </div>
                  {!isLoggedIn ? (
                    <span className="flex items-center gap-1 text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-amber-200 text-amber-900 shadow-2xs">
                      <Lock className="w-2.5 h-2.5" /> Kunci
                    </span>
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 text-orange-600 group-hover:translate-x-0.5 transition" />
                  )}
                </div>
                <div className="mt-2.5">
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 transition leading-snug">
                    Flashcard
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-1 font-medium">
                    Hafalan 4 Mapel
                  </p>
                </div>
              </div>

              {/* 2. Diagnostic Test (Biru Muda Terang) */}
              <div
                onClick={() => onNavigate('diagnostic')}
                className="group cursor-pointer p-3 sm:p-3.5 rounded-2xl bg-sky-50 hover:bg-sky-100/80 border-2 border-sky-200 text-slate-800 transition transform active:scale-98 flex flex-col justify-between min-h-[105px] sm:min-h-[115px] shadow-xs relative"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xl bg-sky-200 text-sky-800 flex items-center justify-center font-black">
                    <Compass className="w-4 h-4" />
                  </div>
                  {!isLoggedIn ? (
                    <span className="flex items-center gap-1 text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-emerald-200 text-emerald-900 shadow-2xs">
                      <Sparkles className="w-2.5 h-2.5" /> Free B. Indo
                    </span>
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 text-sky-600 group-hover:translate-x-0.5 transition" />
                  )}
                </div>
                <div className="mt-2.5">
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 transition leading-snug">
                    Diagnostic Test
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-1 font-medium">
                    {!isLoggedIn ? 'B. Indonesia Terbuka' : 'Uji Fondasi Awal'}
                  </p>
                </div>
              </div>

              {/* 3. Download Soal Field Report (Kuning Keemasan) - Terkunci untuk Tamu */}
              <div
                onClick={() => handleProtectedAction(() => setIsFieldReportModalOpen(true), 'Download Soal Field Report')}
                className="group cursor-pointer p-3 sm:p-3.5 rounded-2xl bg-amber-50 hover:bg-amber-100/80 border-2 border-amber-200 text-slate-800 transition transform active:scale-98 flex flex-col justify-between min-h-[105px] sm:min-h-[115px] shadow-xs relative"
                title="Buka Koleksi Folder Google Drive Soal Field Report (FR)"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xl bg-amber-200 text-amber-800 flex items-center justify-center font-black">
                    <Download className="w-4 h-4" />
                  </div>
                  {!isLoggedIn ? (
                    <span className="flex items-center gap-1 text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-amber-200 text-amber-900 shadow-2xs">
                      <Lock className="w-2.5 h-2.5" /> Kunci
                    </span>
                  ) : (
                    <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-amber-200 text-amber-800">
                      Folder FR
                    </span>
                  )}
                </div>
                <div className="mt-2.5">
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 transition leading-snug">
                    Download Soal Field Report
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-1 font-medium">
                    5 folder observasi lapangan
                  </p>
                </div>
              </div>

              {/* 4. Soal TKA 2026 (Ungu Terang Pastel) - Free CBT */}
              <div
                onClick={() => onOpenSoalTka?.()}
                className="group cursor-pointer p-3 sm:p-3.5 rounded-2xl bg-violet-50 hover:bg-violet-100/80 border-2 border-violet-200 text-slate-800 transition transform active:scale-98 flex flex-col justify-between min-h-[105px] sm:min-h-[115px] shadow-xs relative"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xl bg-violet-200 text-violet-800 flex items-center justify-center font-black">
                    <FileSpreadsheet className="w-4 h-4" />
                  </div>
                  {!isLoggedIn ? (
                    <span className="flex items-center gap-1 text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-emerald-200 text-emerald-900 shadow-2xs">
                      <Sparkles className="w-2.5 h-2.5" /> Free CBT
                    </span>
                  ) : (
                    <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-violet-200 text-violet-800">
                      Asli TKA
                    </span>
                  )}
                </div>
                <div className="mt-2.5">
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 transition leading-snug flex items-center gap-1">
                    <span>Soal TKA 2026</span>
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-1 font-medium">
                    B. Indonesia &amp; Matematika
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>Standar Kisi-Kisi Terpadu</span>
            <span className="text-violet-600 font-black">TKA SMP 2026</span>
          </div>
        </div>

      </section>

      {/* ===================================================================
          3. PROGRESS BELAJAR UNTUK MASING-MASING MAPEL (4 KARTU AKSEN PASTEL)
      =================================================================== */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base sm:text-xl font-black text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-violet-600" />
              Progress Belajar per Mata Pelajaran
            </h2>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">
              Rincian penyelesaian kuis topik dan simulasi try out untuk 4 mapel TKA
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {subjectProgressStats.map((item) => {
            const isMath = item.subjectId === 'math';
            const isIndo = item.subjectId === 'indo';
            const isEng = item.subjectId === 'eng';

            // Distinct pastel colors per subject:
            // Math: Kuning Keemasan pastel
            // Indo: Oranye Hangat pastel
            // Eng: Biru Muda Terang pastel
            // IPA: Ungu Terang pastel
            const cardBg = isMath
              ? 'bg-amber-50 hover:bg-amber-100/70 border-2 border-amber-200 text-slate-800'
              : isIndo
              ? 'bg-orange-50 hover:bg-orange-100/70 border-2 border-orange-200 text-slate-800'
              : isEng
              ? 'bg-sky-50 hover:bg-sky-100/70 border-2 border-sky-200 text-slate-800'
              : 'bg-violet-50 hover:bg-violet-100/70 border-2 border-violet-200 text-slate-800';

            const badgeBg = isMath
              ? 'bg-amber-200 text-amber-900'
              : isIndo
              ? 'bg-orange-200 text-orange-900'
              : isEng
              ? 'bg-sky-200 text-sky-900'
              : 'bg-violet-200 text-violet-900';

            const percentColor = isMath
              ? 'text-amber-800'
              : isIndo
              ? 'text-orange-800'
              : isEng
              ? 'text-sky-800'
              : 'text-violet-800';

            const barColor = isMath
              ? 'bg-amber-500'
              : isIndo
              ? 'bg-orange-500'
              : isEng
              ? 'bg-sky-500'
              : 'bg-violet-600';

            return (
              <div
                key={item.subjectId}
                onClick={() => onNavigate('subject', item.subjectId)}
                className={`group cursor-pointer ${cardBg} p-3 sm:p-5 rounded-2xl sm:rounded-3xl transition shadow-sm hover:shadow-md flex flex-col justify-between transform active:scale-98 relative`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl flex items-center justify-center font-black shrink-0 ${badgeBg}`}>
                      {isMath && <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />}
                      {isIndo && <BookMarked className="w-4 h-4 sm:w-5 sm:h-5" />}
                      {isEng && <Languages className="w-4 h-4 sm:w-5 sm:h-5" />}
                      {item.subjectId === 'ipa' && <Atom className="w-4 h-4 sm:w-5 sm:h-5" />}
                    </div>

                    <div className="text-right flex flex-col items-end">
                      {!isLoggedIn && (
                        <span className="mb-0.5 sm:mb-1 flex items-center gap-1 text-[8px] sm:text-[9px] font-black uppercase px-1 py-0.5 sm:px-1.5 rounded bg-emerald-200 text-emerald-900 shadow-2xs">
                          <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5" /> Free TO 8
                        </span>
                      )}
                      <span className={`text-xl sm:text-2xl font-black ${percentColor}`}>
                        {item.percent}%
                      </span>
                      <div className="text-[9px] sm:text-[10px] text-slate-400 font-bold">Tuntas</div>
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-lg font-black text-slate-900 truncate">
                    {item.name}
                  </h3>

                  {/* Progress Bar */}
                  <div className="w-full bg-white rounded-full h-1.5 sm:h-2.5 my-2 sm:my-3 overflow-hidden border border-slate-200">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${barColor}`}
                      style={{ width: `${Math.max(4, item.percent)}%` }}
                    />
                  </div>

                  {/* Sub Details */}
                  <div className="space-y-1 sm:space-y-1.5 text-[11px] sm:text-xs text-slate-600">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Topik Tuntas:</span>
                      <span className="font-black text-slate-900">{item.passedTopics} / {item.totalTopics}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Try Out Tuntas:</span>
                      <span className="font-black text-slate-900">{item.tuntasPaketsCount} / 12 Paket</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] sm:text-xs font-black text-slate-900">
                  <span>Buka Modul</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition text-slate-700" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===================================================================
          4. DAFTAR TOPIK / REKOMENDASI BELAJAR (SMART STUDY RECOMMENDATIONS)
      =================================================================== */}
      <section className="bg-white rounded-3xl p-4 sm:p-7 shadow-sm border-2 border-slate-200 text-slate-800 transition-all">
        <div className={`flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 ${showRecommendations ? 'mb-4 sm:mb-5 pb-3 sm:pb-4 border-b border-slate-100' : ''}`}>
          <div className="flex items-center justify-between w-full md:w-auto">
            <div>
              <h2 className="text-base sm:text-xl font-black text-slate-900 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-500" />
                Daftar Topik &amp; Rekomendasi Belajar
              </h2>
              <p className="text-xs text-slate-500 mt-0.5 font-medium">
                Rekomendasi topik remedial, materi berikutnya, dan simulasi try out prioritas
              </p>
            </div>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setShowRecommendations(prev => !prev)}
              className="md:hidden px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition active:scale-95 flex items-center gap-1 text-[11px] font-black shrink-0 border border-slate-200"
              title={showRecommendations ? 'Sembunyikan Section' : 'Tampilkan Section'}
            >
              {showRecommendations ? <EyeOff className="w-3.5 h-3.5 text-slate-500" /> : <Eye className="w-3.5 h-3.5 text-violet-600" />}
              <span>{showRecommendations ? 'Tutup' : 'Buka'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showRecommendations ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto flex-wrap">
            {/* Desktop / Tablet Toggle Button */}
            <button
              onClick={() => setShowRecommendations(prev => !prev)}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer active:scale-95 border border-slate-200 shadow-2xs"
              title={showRecommendations ? 'Sembunyikan Section Rekomendasi' : 'Tampilkan Section Rekomendasi'}
            >
              {showRecommendations ? (
                <>
                  <EyeOff className="w-3.5 h-3.5 text-slate-500" />
                  <span>Sembunyikan</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5 text-violet-600" />
                  <span>Tampilkan ({recommendations.length} Rekomendasi)</span>
                </>
              )}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showRecommendations ? 'rotate-180' : ''}`} />
            </button>

            {/* Filter Tabs for Recommendations (only when expanded) */}
            {showRecommendations && (
              <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                <button
                  onClick={() => setRecFilter('all')}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-black transition ${
                    recFilter === 'all'
                      ? 'bg-violet-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  Semua ({recommendations.length})
                </button>
                <button
                  onClick={() => setRecFilter('remedial')}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-black transition ${
                    recFilter === 'remedial'
                      ? 'bg-orange-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  Perlu Remidi ({recommendations.filter(r => r.type === 'remedial').length})
                </button>
                <button
                  onClick={() => setRecFilter('next_topic')}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-black transition ${
                    recFilter === 'next_topic'
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  Topik Baru
                </button>
                <button
                  onClick={() => setRecFilter('tryout_challenge')}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-black transition ${
                    recFilter === 'tryout_challenge'
                      ? 'bg-violet-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  Tantangan Try Out
                </button>
              </div>
            )}
          </div>
        </div>

        {/* List of Recommendations (only when expanded) */}
        {showRecommendations && (
          filteredRecommendations.length === 0 ? (
            <div className="text-center py-8 bg-slate-50 rounded-2xl border border-slate-200">
              <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
              <div className="text-sm font-black text-slate-900">Semua Topik Terpenuhi dengan Baik!</div>
              <p className="text-xs text-slate-500 mt-1">
                Tidak ada topik mendesak untuk filter ini. Lanjutkan ke paket Try Out berikutnya!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredRecommendations.map((rec) => {
                const isRemedial = rec.type === 'remedial';
                const isTryout = rec.type === 'tryout_challenge';

                const cardBg = isRemedial
                  ? 'bg-orange-50 border-2 border-orange-200 text-slate-800'
                  : isTryout
                  ? 'bg-violet-50 border-2 border-violet-200 text-slate-800'
                  : 'bg-sky-50 border-2 border-sky-200 text-slate-800';

                const badgeBg = isRemedial
                  ? 'bg-orange-200 text-orange-900'
                  : isTryout
                  ? 'bg-violet-200 text-violet-900'
                  : 'bg-sky-200 text-sky-900';

                const buttonBg = isRemedial
                  ? 'bg-orange-600 hover:bg-orange-700 text-white'
                  : isTryout
                  ? 'bg-violet-600 hover:bg-violet-700 text-white'
                  : 'bg-sky-600 hover:bg-sky-700 text-white';

                return (
                  <div
                    key={rec.id}
                    className={`p-4 sm:p-5 rounded-2xl ${cardBg} transition flex flex-col justify-between shadow-xs`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${badgeBg}`}>
                          {isRemedial ? 'Perlu Remidi' : isTryout ? 'Try Out CBT' : 'Topik Rekomendasi'}
                        </span>

                        <span className="text-[11px] font-bold text-slate-500">
                          {rec.subjectName}
                        </span>
                      </div>

                      <h4 className="text-sm font-black text-slate-900 leading-snug">
                        {rec.title}
                      </h4>

                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-medium">
                        {rec.reason}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between">
                      {rec.currentScore !== undefined ? (
                        <span className="text-xs font-black text-slate-900">
                          Skor: {rec.currentScore}/100
                        </span>
                      ) : (
                        <span className="text-xs text-slate-400 font-bold">
                          Belum Diuji
                        </span>
                      )}

                      <button
                        onClick={() => onNavigate('subject', rec.subjectId)}
                        className={`px-3 py-1.5 rounded-xl ${buttonBg} text-xs font-black flex items-center gap-1 transition shadow-xs cursor-pointer`}
                      >
                        <span>{rec.actionText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )
        )}
      </section>

      {/* ===================================================================
          5. GRAFIK PERKEMBANGAN TRY OUT (DIBUAT PROPORSIONAL & TIDAK LEBAR)
      =================================================================== */}
      <section className="bg-white rounded-3xl p-4 sm:p-7 shadow-sm border-2 border-slate-200 text-slate-800 transition-all">
        <div className={`flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 ${showChart ? 'mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-slate-100' : ''}`}>
          <div className="flex items-center justify-between w-full md:w-auto">
            <div>
              <h2 className="text-base sm:text-xl font-black text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-violet-600" />
                Grafik Perkembangan Try Out
              </h2>
              <p className="text-xs text-slate-500 mt-0.5 font-medium">
                Visualisasi tren nilai Try Out terakhir secara proporsional dan terfokus
              </p>
            </div>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setShowChart(prev => !prev)}
              className="md:hidden px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition active:scale-95 flex items-center gap-1 text-[11px] font-black shrink-0 border border-slate-200"
              title={showChart ? 'Sembunyikan Grafik' : 'Tampilkan Grafik'}
            >
              {showChart ? <EyeOff className="w-3.5 h-3.5 text-slate-500" /> : <Eye className="w-3.5 h-3.5 text-violet-600" />}
              <span>{showChart ? 'Tutup' : 'Buka'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showChart ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto flex-wrap">
            {/* Desktop / Tablet Toggle Button */}
            <button
              onClick={() => setShowChart(prev => !prev)}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer active:scale-95 border border-slate-200 shadow-2xs"
              title={showChart ? 'Sembunyikan Grafik' : 'Tampilkan Grafik'}
            >
              {showChart ? (
                <>
                  <EyeOff className="w-3.5 h-3.5 text-slate-500" />
                  <span>Sembunyikan</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5 text-violet-600" />
                  <span>Tampilkan Grafik</span>
                </>
              )}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showChart ? 'rotate-180' : ''}`} />
            </button>

            {/* Filter Dropdowns (only when showChart is true) */}
            {showChart && (
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {/* Subject Dropdown */}
                <div className="flex items-center gap-1.5 bg-slate-100 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-slate-200 text-[11px] sm:text-xs font-bold text-slate-800">
                  <Filter className="w-3.5 h-3.5 text-violet-600 shrink-0" />
                  <select
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value as SubjectId)}
                    className="bg-transparent font-black text-slate-800 focus:outline-none cursor-pointer text-[11px] sm:text-xs"
                  >
                    <option value="math" className="bg-white text-slate-800">Matematika</option>
                    <option value="indo" className="bg-white text-slate-800">Bahasa Indonesia</option>
                    <option value="eng" className="bg-white text-slate-800">Bahasa Inggris</option>
                    <option value="ipa" className="bg-white text-slate-800">IPA</option>
                  </select>
                </div>

                {/* Paket Dropdown */}
                <div className="flex items-center gap-1.5 bg-slate-100 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-slate-200 text-[11px] sm:text-xs font-bold text-slate-800">
                  <span className="text-slate-500 font-normal">Paket:</span>
                  <select
                    value={selectedPaket}
                    onChange={(e) => setSelectedPaket(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                    className="bg-transparent font-black text-slate-800 focus:outline-none cursor-pointer text-[11px] sm:text-xs"
                  >
                    <option value="all" className="bg-white text-slate-800">Semua Paket</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((p) => (
                      <option key={p} value={p} className="bg-white text-slate-800">
                        Paket {p} {p >= 9 ? '(Kosong)' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Toggle Bar / Line */}
                <div className="bg-slate-100 p-0.5 sm:p-1 rounded-xl flex items-center text-[11px] sm:text-xs font-bold text-slate-800 border border-slate-200">
                  <button
                    onClick={() => setChartType('bar')}
                    className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg transition text-[11px] sm:text-xs ${
                      chartType === 'bar' ? 'bg-violet-600 text-white font-black shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Bar
                  </button>
                  <button
                    onClick={() => setChartType('line')}
                    className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg transition text-[11px] sm:text-xs ${
                      chartType === 'line' ? 'bg-violet-600 text-white font-black shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Line
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 2-Column Balanced Layout (only when showChart is true) */}
        {showChart && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Kolom Kiri: Ringkasan Metrik Try Out (5 cols) - Pastel Accent Blocks */}
            <div className="lg:col-span-5 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                {/* Nilai Tertinggi (Kuning Keemasan) */}
                <div className="bg-amber-50 p-4 rounded-2xl border-2 border-amber-200 text-slate-800 shadow-xs">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold mb-1">
                    <Award className="w-4 h-4 text-amber-600" /> Nilai Tertinggi
                  </div>
                  <div className="text-2xl font-black text-amber-800">
                    {highestScore} <span className="text-xs text-slate-400 font-normal">/ 100</span>
                  </div>
                </div>

                {/* Rata-Rata (Biru Muda Terang) */}
                <div className="bg-sky-50 p-4 rounded-2xl border-2 border-sky-200 text-slate-800 shadow-xs">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold mb-1">
                    <TrendingUp className="w-4 h-4 text-sky-600" /> Rata-Rata
                  </div>
                  <div className="text-2xl font-black text-sky-800">
                    {avgScore} <span className="text-xs text-slate-400 font-normal">/ 100</span>
                  </div>
                </div>

                {/* Sesi Dikerjakan (Oranye Hangat) */}
                <div className="bg-orange-50 p-4 rounded-2xl border-2 border-orange-200 text-slate-800 shadow-xs">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold mb-1">
                    <Clock className="w-4 h-4 text-orange-600" /> Sesi Dikerjakan
                  </div>
                  <div className="text-2xl font-black text-orange-800">
                    {totalTaken} <span className="text-xs text-slate-400 font-normal">Sesi</span>
                  </div>
                </div>

                {/* Hasil Terakhir (Ungu Terang Pastel) */}
                <div className="bg-violet-50 p-4 rounded-2xl border-2 border-violet-200 text-slate-800 shadow-xs">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold mb-1">
                    <CheckCircle2 className="w-4 h-4 text-violet-600" /> Hasil Terakhir
                  </div>
                  <div>
                    {totalTaken === 0 ? (
                      <span className="text-xs font-bold text-slate-400">Belum Ada</span>
                    ) : isLastPassed ? (
                      <span className="inline-block text-xs font-black px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-lg">
                        LULUS (&ge;85)
                      </span>
                    ) : (
                      <span className="inline-block text-xs font-black px-2 py-0.5 bg-rose-100 text-rose-800 rounded-lg">
                        REMIDI (&lt;85)
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                <span>Paket Terpilih: <strong className="text-slate-900">{selectedPaket === 'all' ? 'Semua Paket (1 s.d 12)' : `Paket ${selectedPaket}`}</strong></span>
                <span className="text-[11px] text-violet-700 font-black">{SUBJECT_NAMES[selectedSubject]}</span>
              </div>
            </div>

            {/* Kolom Kanan: Canvas Grafik Compact & Tidak Melebar (7 cols) */}
            <div className="lg:col-span-7 bg-slate-50 p-4 sm:p-5 rounded-2xl border-2 border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black text-slate-900">
                  Visualisasi Nilai Try Out
                </span>
                <span className="text-[11px] text-slate-500 font-bold">
                  Batas Kelulusan: Skor 85
                </span>
              </div>

              {/* Container grafik dibatasi max-w-lg agar tidak melar */}
              <div className="h-60 sm:h-64 w-full max-w-lg mx-auto">
                {chartType === 'bar' ? (
                  <Bar data={chartData} options={chartOptions as any} />
                ) : (
                  <Line data={chartData} options={chartOptions as any} />
                )}
              </div>
            </div>

          </div>
        )}
      </section>

      {/* ===================================================================
          6. RINCIAN RIWAYAT PENGERJAAN (DETAILED HISTORY LOG)
      =================================================================== */}
      <section className="bg-white rounded-3xl p-4 sm:p-7 shadow-sm border-2 border-slate-200 text-slate-800 transition-all">
        <div className={`flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 ${showHistory ? 'mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-slate-100' : ''}`}>
          <div className="flex items-center justify-between w-full md:w-auto">
            <div>
              <h2 className="text-base sm:text-xl font-black text-slate-900 flex items-center gap-2">
                <History className="w-5 h-5 text-violet-600" />
                Rincian Riwayat Pengerjaan
              </h2>
              <p className="text-xs text-slate-500 mt-0.5 font-medium">
                Catatan lengkap aktivitas Try Out CBT, Kuis Topik, dan Diagnostic Test
              </p>
            </div>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setShowHistory(prev => !prev)}
              className="md:hidden px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition active:scale-95 flex items-center gap-1 text-[11px] font-black shrink-0 border border-slate-200"
              title={showHistory ? 'Sembunyikan Riwayat' : 'Tampilkan Riwayat'}
            >
              {showHistory ? <EyeOff className="w-3.5 h-3.5 text-slate-500" /> : <Eye className="w-3.5 h-3.5 text-violet-600" />}
              <span>{showHistory ? 'Tutup' : 'Buka'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showHistory ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto flex-wrap">
            {/* Desktop / Tablet Toggle Button */}
            <button
              onClick={() => setShowHistory(prev => !prev)}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer active:scale-95 border border-slate-200 shadow-2xs"
              title={showHistory ? 'Sembunyikan Riwayat' : 'Tampilkan Riwayat'}
            >
              {showHistory ? (
                <>
                  <EyeOff className="w-3.5 h-3.5 text-slate-500" />
                  <span>Sembunyikan</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5 text-violet-600" />
                  <span>Tampilkan Riwayat ({filteredHistory.length})</span>
                </>
              )}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showHistory ? 'rotate-180' : ''}`} />
            </button>

            {/* Filters for History (only when showHistory is true) */}
            {showHistory && (
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {/* Filter Jenis */}
                <div className="flex items-center gap-1 bg-slate-100 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-xl border border-slate-200 text-[11px] sm:text-xs font-bold text-slate-800">
                  <span className="text-slate-500 font-normal">Tipe:</span>
                  <select
                    value={historyTypeFilter}
                    onChange={(e) => setHistoryTypeFilter(e.target.value as any)}
                    className="bg-transparent font-black text-slate-800 focus:outline-none cursor-pointer text-[11px] sm:text-xs"
                  >
                    <option value="all" className="bg-white text-slate-800">Semua Tipe</option>
                    <option value="tryout" className="bg-white text-slate-800">Try Out CBT</option>
                    <option value="topic" className="bg-white text-slate-800">Kuis Topik</option>
                    <option value="diagnostic" className="bg-white text-slate-800">Diagnostic</option>
                  </select>
                </div>

                {/* Filter Mapel */}
                <div className="flex items-center gap-1 bg-slate-100 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-xl border border-slate-200 text-[11px] sm:text-xs font-bold text-slate-800">
                  <span className="text-slate-500 font-normal">Mapel:</span>
                  <select
                    value={historySubjectFilter}
                    onChange={(e) => setHistorySubjectFilter(e.target.value as any)}
                    className="bg-transparent font-black text-slate-800 focus:outline-none cursor-pointer text-[11px] sm:text-xs"
                  >
                    <option value="all" className="bg-white text-slate-800">Semua Mapel</option>
                    <option value="math" className="bg-white text-slate-800">Matematika</option>
                    <option value="indo" className="bg-white text-slate-800">B. Indonesia</option>
                    <option value="eng" className="bg-white text-slate-800">B. Inggris</option>
                    <option value="ipa" className="bg-white text-slate-800">IPA</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* History List Table / Cards (only when showHistory is true) */}
        {showHistory && (
          filteredHistory.length === 0 ? (
            <div className="text-center py-10 bg-slate-50 rounded-2xl border border-slate-200">
              <History className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <div className="text-sm font-black text-slate-900">Belum Ada Riwayat Pengerjaan</div>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Mulai kerjakan Kuis Topik atau Try Out untuk melihat rekam jejak capaian nilai dan evaluasimu di sini.
              </p>
            </div>
          ) : (
            <div className="space-y-2.5">
              {filteredHistory.slice(0, historyLimit).map((item) => {
                const isPassed = item.passed;
                const isTryout = item.type === 'tryout';
                const isTopic = item.type === 'topic';

                const mapelBg = item.subjectId === 'math'
                  ? 'bg-amber-200 text-amber-900'
                  : item.subjectId === 'indo'
                  ? 'bg-orange-200 text-orange-900'
                  : item.subjectId === 'eng'
                  ? 'bg-sky-200 text-sky-900'
                  : 'bg-violet-200 text-violet-900';

                return (
                  <div
                    key={item.id}
                    className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border-2 border-slate-200 hover:border-violet-300 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-slate-800"
                  >
                    <div className="flex items-start sm:items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-xs font-black shadow-xs ${mapelBg}`}>
                        {item.subjectId === 'math' && <Calculator className="w-4 h-4" />}
                        {item.subjectId === 'indo' && <BookMarked className="w-4 h-4" />}
                        {item.subjectId === 'eng' && <Languages className="w-4 h-4" />}
                        {item.subjectId === 'ipa' && <Atom className="w-4 h-4" />}
                      </div>

                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-sm font-black text-slate-900">
                            {item.title}
                          </h4>
                          <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${
                            isTryout
                              ? 'bg-violet-100 text-violet-800'
                              : isTopic
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-sky-100 text-sky-800'
                          }`}>
                            {isTryout ? 'Try Out' : isTopic ? 'Kuis Topik' : 'Diagnostic'}
                          </span>
                        </div>

                        <div className="text-xs text-slate-500 mt-1 flex items-center gap-3 flex-wrap">
                          <span className="font-bold text-slate-700">{item.subjectName}</span>
                          <span>&bull;</span>
                          <span className="flex items-center gap-1 text-slate-400">
                            <Clock className="w-3 h-3 text-slate-400" />
                            {item.date}
                          </span>
                          {item.details && (
                            <>
                              <span>&bull;</span>
                              <span className="text-slate-600">{item.details}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200">
                      <div className="text-right">
                        <div className="text-base sm:text-lg font-black text-slate-900">
                          {item.score} <span className="text-xs text-slate-400 font-normal">/ {item.maxScore}</span>
                        </div>
                        <div className="text-[10px] text-slate-400">Skor Ujian</div>
                      </div>

                      <div>
                        {isPassed ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-black px-2.5 py-1 bg-emerald-600 text-white rounded-xl shadow-xs">
                            <Check className="w-3 h-3" /> LULUS
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-black px-2.5 py-1 bg-rose-500 text-white rounded-xl shadow-xs">
                            <AlertCircle className="w-3 h-3" /> REMIDI
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* View More / Less Toggle */}
              {filteredHistory.length > 8 && (
                <div className="text-center pt-3">
                  {historyLimit < filteredHistory.length ? (
                    <button
                      onClick={() => setHistoryLimit(prev => prev + 10)}
                      className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-black text-slate-700 border border-slate-200 transition cursor-pointer"
                    >
                      Tampilkan Lebih Banyak ({filteredHistory.length - historyLimit} tersisa)
                    </button>
                  ) : (
                    <button
                      onClick={() => setHistoryLimit(8)}
                      className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-black text-slate-700 border border-slate-200 transition cursor-pointer"
                    >
                      Tampilkan Lebih Ringkas
                    </button>
                  )}
                </div>
              )}
            </div>
          )
        )}
      </section>

      {/* ===================================================================
          MODALS
      =================================================================== */}
      <TkaChampionBadgeModal
        isOpen={isBadgeModalOpen}
        onClose={() => setIsBadgeModalOpen(false)}
        overallPercent={overallPercent}
        userProfile={userProfile}
      />

      <FieldReportModal
        isOpen={isFieldReportModalOpen && isLoggedIn}
        onClose={() => setIsFieldReportModalOpen(false)}
      />

    </div>
  );
};
