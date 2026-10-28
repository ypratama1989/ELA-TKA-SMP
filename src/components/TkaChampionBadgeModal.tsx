import React from 'react';
import { 
  X, 
  Award, 
  Trophy, 
  Crown, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Lock, 
  Star,
  ChevronRight
} from 'lucide-react';
import { UserProfile } from '../types';

export interface BadgeTier {
  id: string;
  name: string;
  level: number;
  minPercent: number;
  maxPercent: number;
  icon: string;
  color: string;
  bgGradient: string;
  borderColor: string;
  badgeTag: string;
  description: string;
  perks: string[];
}

export const BADGE_TIERS: BadgeTier[] = [
  {
    id: 'tier_1',
    name: 'TKA Cadet Starter',
    level: 1,
    minPercent: 0,
    maxPercent: 24,
    icon: 'Shield',
    color: 'text-slate-400',
    bgGradient: 'from-slate-700 to-slate-800',
    borderColor: 'border-slate-600',
    badgeTag: 'Lencana Fondasi',
    description: 'Langkah awal perjuangan TKA SMP. Mulai eksplorasi materi dan uji diagnostik.',
    perks: [
      'Akses ke seluruh latihan materi 4 mapel',
      'Pengerjaan Diagnostic Test komprehensif',
      'Pencatatan statistik belajar awal'
    ]
  },
  {
    id: 'tier_2',
    name: 'TKA Bronze Explorer',
    level: 2,
    minPercent: 25,
    maxPercent: 49,
    icon: 'Bronze',
    color: 'text-amber-500',
    bgGradient: 'from-amber-800/80 to-amber-950',
    borderColor: 'border-amber-600/60',
    badgeTag: 'Lencana Perunggu',
    description: 'Konsistensi mulai terbangun! Menyelesaikan lebih dari 25% capaian topik dan paket awal.',
    perks: [
      'Menyelesaikan minimal 15 topik kuis kelulusan',
      'Mencapai nilai passing grade di kuis topik',
      'Mengikuti minimal 3 sesi try out berkala'
    ]
  },
  {
    id: 'tier_3',
    name: 'TKA Silver Achiever',
    level: 3,
    minPercent: 50,
    maxPercent: 74,
    icon: 'Silver',
    color: 'text-slate-200',
    bgGradient: 'from-slate-500 to-slate-700',
    borderColor: 'border-slate-300/60',
    badgeTag: 'Lencana Perak',
    description: 'Pencapaian luar biasa! Menguasai lebih dari setengah kisi-kisi dan materi standar TKA.',
    perks: [
      'Menyelesaikan minimal 35 topik kuis materi',
      'Rata-rata skor try out mencapai rentang 75 - 84',
      'Analisis diagnostik menunjukkan penguasaan fondasi kuat'
    ]
  },
  {
    id: 'tier_4',
    name: 'TKA Gold Master',
    level: 4,
    minPercent: 75,
    maxPercent: 89,
    icon: 'Gold',
    color: 'text-yellow-400',
    bgGradient: 'from-yellow-600 to-amber-700',
    borderColor: 'border-yellow-400/80',
    badgeTag: 'Lencana Emas',
    description: 'Performa elit! Kesiapan tinggi menghadapi ujian dengan skor stabil di atas passing grade (≥85).',
    perks: [
      'Menuntaskan minimal 55 topik kisi-kisi TKA',
      'Skor Try Out konsisten lulus (≥85)',
      'Penguasaan soal tipe HOTS dan penalaran mendalam'
    ]
  },
  {
    id: 'tier_5',
    name: 'TKA Grand Champion',
    level: 5,
    minPercent: 90,
    maxPercent: 100,
    icon: 'Crown',
    color: 'text-emerald-300',
    bgGradient: 'from-emerald-600 via-teal-600 to-indigo-700',
    borderColor: 'border-emerald-400',
    badgeTag: 'Lencana Kehormatan',
    description: 'Juara sejati! Kesiapan 100% matang dan siap menjadi lulusan terbaik di Tes Kemampuan Akademik.',
    perks: [
      'Penguasaan penuh 71 topik di 4 mata pelajaran',
      'Predikat PASSED di seluruh paket Try Out CBT',
      'Gelar kehormatan tertinggi Edufillah TKA Champion'
    ]
  }
];

export function calculateBadgeTier(overallPercent: number): BadgeTier {
  if (overallPercent >= 90) return BADGE_TIERS[4];
  if (overallPercent >= 75) return BADGE_TIERS[3];
  if (overallPercent >= 50) return BADGE_TIERS[2];
  if (overallPercent >= 25) return BADGE_TIERS[1];
  return BADGE_TIERS[0];
}

interface TkaChampionBadgeModalProps {
  isOpen: boolean;
  onClose: () => void;
  overallPercent: number;
  userProfile: UserProfile;
}

export const TkaChampionBadgeModal: React.FC<TkaChampionBadgeModalProps> = ({
  isOpen,
  onClose,
  overallPercent,
  userProfile
}) => {
  if (!isOpen) return null;

  const currentTier = calculateBadgeTier(overallPercent);
  const nextTier = BADGE_TIERS.find(t => t.level === currentTier.level + 1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Header with Close */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <Trophy className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-black text-white">
              Sistem Penghargaan TKA Champion
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current Active Badge Spotlight */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className={`p-6 rounded-2xl bg-gradient-to-br ${currentTier.bgGradient} border ${currentTier.borderColor} shadow-xl relative overflow-hidden text-white`}>
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-radial from-white/10 to-transparent pointer-events-none" />
            
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl shrink-0">
                {currentTier.level === 5 ? (
                  <Crown className="w-12 h-12 text-yellow-300 animate-bounce" />
                ) : currentTier.level === 4 ? (
                  <Star className="w-12 h-12 text-yellow-300" />
                ) : currentTier.level === 3 ? (
                  <Award className="w-12 h-12 text-slate-200" />
                ) : currentTier.level === 2 ? (
                  <Trophy className="w-12 h-12 text-amber-300" />
                ) : (
                  <ShieldCheck className="w-12 h-12 text-slate-300" />
                )}
              </div>

              <div className="flex-1">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/30 border border-white/20 text-[11px] font-bold text-white mb-2">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>Level {currentTier.level} &bull; {currentTier.badgeTag}</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                  {currentTier.name}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-200 mt-1 leading-relaxed">
                  {currentTier.description}
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <div className="flex-1 bg-black/40 rounded-full h-2.5 overflow-hidden border border-white/10">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 transition-all duration-500 rounded-full"
                      style={{ width: `${overallPercent}%` }}
                    />
                  </div>
                  <span className="text-xs font-black text-white shrink-0">
                    {overallPercent}% Kesiapan
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Next Level Target */}
          {nextTier && (
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20 shrink-0">
                  <ChevronRight className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Target Lencana Selanjutnya:</div>
                  <div className="text-sm font-bold text-white">{nextTier.name} (Kesiapan {nextTier.minPercent}%)</div>
                </div>
              </div>
              <div className="text-xs font-extrabold text-indigo-400 bg-indigo-500/10 px-3 py-1.5 rounded-xl border border-indigo-500/20">
                +{nextTier.minPercent - overallPercent}% Lagi
              </div>
            </div>
          )}

          {/* All Tiers List */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Tingkatan Lencana TKA SMP
            </h4>

            <div className="space-y-2.5">
              {BADGE_TIERS.map((tier) => {
                const isUnlocked = overallPercent >= tier.minPercent;
                const isCurrent = currentTier.id === tier.id;

                return (
                  <div 
                    key={tier.id}
                    className={`p-3.5 sm:p-4 rounded-2xl border transition flex items-center justify-between gap-3 ${
                      isCurrent 
                        ? 'bg-slate-800/90 border-indigo-500/60 ring-1 ring-indigo-500/30' 
                        : isUnlocked 
                        ? 'bg-slate-950/80 border-slate-800' 
                        : 'bg-slate-950/40 border-slate-800/50 opacity-60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm border ${
                        isUnlocked 
                          ? 'bg-gradient-to-br ' + tier.bgGradient + ' text-white border-white/20' 
                          : 'bg-slate-900 text-slate-600 border-slate-800'
                      }`}>
                        {isUnlocked ? (
                          <span>L{tier.level}</span>
                        ) : (
                          <Lock className="w-4 h-4 text-slate-600" />
                        )}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-bold text-slate-100">
                            {tier.name}
                          </span>
                          {isCurrent && (
                            <span className="text-[10px] font-extrabold px-2 py-0.5 bg-indigo-500/20 text-indigo-300 rounded-md border border-indigo-500/40">
                              Lencana Aktif
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400">
                          Syarat Kesiapan: {tier.minPercent}% - {tier.maxPercent}%
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      {isUnlocked ? (
                        <div className="inline-flex items-center gap-1 text-emerald-400 text-xs font-bold">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="hidden sm:inline">Terbuka</span>
                        </div>
                      ) : (
                        <span className="text-xs text-slate-500 font-medium">Terkunci</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition shadow-md shadow-indigo-600/30"
          >
            Mengerti &amp; Lanjutkan Latihan
          </button>
        </div>

      </div>
    </div>
  );
};
