import React, { useState, useRef } from 'react';
import { 
  Settings, 
  X, 
  Download, 
  Upload, 
  HardDrive, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  User, 
  FileText, 
  RotateCcw, 
  Sparkles,
  Info,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { UserProfile } from '../types';
import { 
  exportBackupFile, 
  parseBackupFile, 
  applyRestoredProfile, 
  resetUserProfileData 
} from '../lib/dataBackup';
import { updateUserDisplayName } from '../lib/firebase';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  userProfile: UserProfile;
  onProfileUpdated: (updatedProfile: UserProfile) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  userProfile,
  onProfileUpdated,
}) => {
  const [displayNameInput, setDisplayNameInput] = useState(userProfile.displayName || '');
  const [isSavingName, setIsSavingName] = useState(false);
  const [nameSaveSuccess, setNameSaveSuccess] = useState(false);

  // Backup & Restore states
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [restoreError, setRestoreError] = useState<string | null>(null);
  const [restoreSuccess, setRestoreSuccess] = useState(false);
  const [pendingRestoredProfile, setPendingRestoredProfile] = useState<UserProfile | null>(null);

  // Reset state
  const [isConfirmingReset, setIsConfirmingReset] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  // Calculate stats for current profile
  const topicScoresList = Object.values(userProfile.topicScores || {}) as Array<{
    lastScore: number;
    bestScore?: number;
    status: 'Passed' | 'Failed';
    updatedAt: string;
  }>;
  const topicCount = topicScoresList.length;
  const passedTopicCount = topicScoresList.filter(
    (t) => (t.bestScore ?? t.lastScore) >= 85 || t.status === 'Passed'
  ).length;

  let totalTryOutAttempts = 0;
  const tryOutHistory = userProfile.tryOutHistory || { math: {}, indo: {}, eng: {}, ipa: {} };
  Object.values(tryOutHistory).forEach((subjectPackets) => {
    Object.values(subjectPackets).forEach((attempts) => {
      totalTryOutAttempts += attempts.length;
    });
  });

  // Handle Save Name
  const handleSaveName = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!displayNameInput.trim()) return;

    setIsSavingName(true);
    await updateUserDisplayName(userProfile.uid, displayNameInput.trim());
    const updated: UserProfile = {
      ...userProfile,
      displayName: displayNameInput.trim(),
    };
    onProfileUpdated(updated);
    setIsSavingName(false);
    setNameSaveSuccess(true);
    setTimeout(() => setNameSaveSuccess(false), 2500);
  };

  // Handle Download Backup
  const handleDownloadBackup = () => {
    exportBackupFile(userProfile);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  // Handle File Selected for Restore
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRestoreError(null);
    setRestoreSuccess(false);
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (!content) {
        setRestoreError('Berkas kosong atau tidak dapat dibaca.');
        return;
      }

      const result = parseBackupFile(content);
      if (!result.success || !result.profile) {
        setRestoreError(result.error || 'Format berkas tidak sesuai.');
        return;
      }

      // Staged for preview & confirmation
      setPendingRestoredProfile(result.profile);
    };

    reader.onerror = () => {
      setRestoreError('Terjadi kendala saat membaca berkas.');
    };

    reader.readAsText(file);
    // reset input so same file can be reselected if needed
    e.target.value = '';
  };

  // Confirm Apply Restore
  const handleConfirmRestore = () => {
    if (!pendingRestoredProfile) return;

    applyRestoredProfile(pendingRestoredProfile);
    onProfileUpdated(pendingRestoredProfile);
    setPendingRestoredProfile(null);
    setRestoreSuccess(true);
    setTimeout(() => setRestoreSuccess(false), 3500);
  };

  // Handle Reset Data
  const handleResetData = () => {
    const freshProfile = resetUserProfileData(userProfile);
    onProfileUpdated(freshProfile);
    setIsConfirmingReset(false);
    setResetSuccess(true);
    setTimeout(() => setResetSuccess(false), 3500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-3xl max-w-2xl w-full p-5 sm:p-7 shadow-2xl border border-slate-200 text-slate-800 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition"
          title="Tutup Pengaturan"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5 sm:mb-6 pr-8">
          <div className="w-11 h-11 rounded-2xl bg-violet-100 text-violet-700 flex items-center justify-center font-bold shrink-0 border border-violet-200">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
              Pengaturan &amp; Data Belajar
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Kelola profil, penyimpanan lokal, dan cadangan data persiapan TKA
            </p>
          </div>
        </div>

        <div className="space-y-5 max-h-[75vh] overflow-y-auto pr-1">
          {/* 1. Status Penyimpanan Lokal Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50/50 border border-violet-200/80">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2 text-violet-900 font-black text-sm">
                <ShieldCheck className="w-5 h-5 text-violet-600 shrink-0" />
                <span>Penyimpanan Lokal Aktif (Offline-Ready)</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black border border-emerald-300 shrink-0">
                Tersimpan di Perangkat
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Seluruh riwayat nilai kuis topik, try out CBT, dan tes diagnostik disimpan langsung di memori perangkat ini. Aplikasi berjalan cepat dan dapat digunakan kapan pun secara mandiri tanpa ketergantungan koneksi server.
            </p>

            {/* Quick Summary Counts */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3.5 pt-3 border-t border-violet-200/60 text-xs">
              <div className="bg-white/80 p-2 rounded-xl border border-violet-100">
                <span className="text-[10px] text-slate-500 block font-semibold">Kuis Topik</span>
                <strong className="text-slate-900 font-black">{passedTopicCount} Tuntas</strong>
                <span className="text-[10px] text-slate-400 block">dari {topicCount} dikerjakan</span>
              </div>
              <div className="bg-white/80 p-2 rounded-xl border border-violet-100">
                <span className="text-[10px] text-slate-500 block font-semibold">Try Out CBT</span>
                <strong className="text-slate-900 font-black">{totalTryOutAttempts} Percobaan</strong>
                <span className="text-[10px] text-slate-400 block">48 paket simulasi</span>
              </div>
              <div className="bg-white/80 p-2 rounded-xl border border-violet-100 col-span-2 sm:col-span-1">
                <span className="text-[10px] text-slate-500 block font-semibold">Akun Belajar</span>
                <strong className="text-violet-700 font-black truncate block">
                  {userProfile.displayName || 'Siswa'}
                </strong>
                <span className="text-[10px] text-slate-400 block truncate">{userProfile.email}</span>
              </div>
            </div>
          </div>

          {/* 2. Fitur Cadangkan & Pulihkan Data Belajar */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-slate-200 shadow-xs">
            <div className="mb-3">
              <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-violet-600" />
                Pindahkan &amp; Amankan Data Belajar
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Gunakan fitur ini untuk memindahkan progres belajar ke HP atau Laptop lain, atau mengamankan nilai sebelum membersihkan riwayat peramban.
              </p>
            </div>

            {/* Success Toast for Download */}
            {downloadSuccess && (
              <div className="mb-3 p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Berkas cadangan data belajar berhasil diunduh ke perangkat Anda! Simpan berkas ini di tempat yang aman.</span>
              </div>
            )}

            {/* Success Toast for Restore */}
            {restoreSuccess && (
              <div className="mb-3 p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Data belajar berhasil dipulihkan! Seluruh nilai dan riwayat belajar kamu kini telah diperbarui.</span>
              </div>
            )}

            {/* Error Message for Restore */}
            {restoreError && (
              <div className="mb-3 p-3 rounded-xl bg-rose-50 border border-rose-300 text-rose-800 text-xs font-bold flex items-center gap-2 animate-in fade-in">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{restoreError}</span>
              </div>
            )}

            {/* Pending Restore Confirmation Box */}
            {pendingRestoredProfile && (
              <div className="mb-4 p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 text-slate-800 animate-in zoom-in-95 duration-150">
                <div className="flex items-center gap-2 text-amber-900 font-black text-xs sm:text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Konfirmasi Pemulihan Data Belajar</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  Ditemukan berkas cadangan dengan rincian berikut. Menerapkan berkas ini akan memperbarui data nilai di perangkat ini:
                </p>

                <div className="mt-2.5 p-2.5 rounded-xl bg-white border border-amber-200 text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Nama Siswa:</span>
                    <strong className="text-slate-900">{pendingRestoredProfile.displayName || 'Siswa'}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Kuis Topik Tersimpan:</span>
                    <strong className="text-slate-900">{Object.keys(pendingRestoredProfile.topicScores || {}).length} topik</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Waktu Cadangan Dibuat:</span>
                    <strong className="text-slate-900">
                      {pendingRestoredProfile.lastLoginAt 
                        ? new Date(pendingRestoredProfile.lastLoginAt).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })
                        : 'Tersedia'}
                    </strong>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2 justify-end">
                  <button
                    type="button"
                    onClick={() => setPendingRestoredProfile(null)}
                    className="px-3 py-1.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition"
                  >
                    Batal
                  </button>
                  <button
                    type="button"
                    onClick={handleConfirmRestore}
                    className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black transition shadow-xs flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Ya, Terapkan &amp; Pulihkan Data</span>
                  </button>
                </div>
              </div>
            )}

            {/* Action Buttons: Cadangkan & Pulihkan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              {/* Tombol 1: Cadangkan Data Belajar */}
              <button
                type="button"
                onClick={handleDownloadBackup}
                className="p-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-bold transition flex flex-col justify-between text-left shadow-sm group border-2 border-emerald-500"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center font-bold">
                    <Download className="w-4 h-4 text-white group-hover:translate-y-0.5 transition" />
                  </div>
                  <span className="text-[10px] uppercase font-black tracking-wider bg-white/20 px-2 py-0.5 rounded-md">
                    Unduh
                  </span>
                </div>
                <div className="mt-3">
                  <h4 className="text-sm font-black text-white leading-tight">
                    Cadangkan Data Belajar
                  </h4>
                  <p className="text-[11px] text-emerald-100 font-medium mt-1 leading-snug">
                    Simpan berkas seluruh nilai &amp; progres belajar ke perangkat ini
                  </p>
                </div>
              </button>

              {/* Tombol 2: Pulihkan Data Belajar */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="p-3.5 rounded-2xl bg-violet-600 hover:bg-violet-700 active:scale-98 text-white font-bold transition flex flex-col justify-between text-left shadow-sm group border-2 border-violet-500"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center font-bold">
                    <Upload className="w-4 h-4 text-white group-hover:-translate-y-0.5 transition" />
                  </div>
                  <span className="text-[10px] uppercase font-black tracking-wider bg-white/20 px-2 py-0.5 rounded-md">
                    Unggah
                  </span>
                </div>
                <div className="mt-3">
                  <h4 className="text-sm font-black text-white leading-tight">
                    Pulihkan Data Belajar
                  </h4>
                  <p className="text-[11px] text-violet-100 font-medium mt-1 leading-snug">
                    Pilih berkas cadangan untuk memuat progres dari perangkat lain
                  </p>
                </div>
              </button>

              {/* Hidden File Input */}
              <input
                ref={fileInputRef}
                type="file"
                accept=".edufillah,.json,.txt,application/json"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* 3. Ubah Nama Sapaan Siswa */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200">
            <h3 className="text-sm font-black text-slate-900 flex items-center gap-2 mb-1">
              <User className="w-4 h-4 text-violet-600" />
              Nama Panggilan Siswa
            </h3>
            <p className="text-xs text-slate-500 mb-3">
              Nama ini digunakan untuk sapaan belajar dan tercantum pada sertifikat lencana TKA.
            </p>

            <form onSubmit={handleSaveName} className="flex gap-2">
              <input
                type="text"
                value={displayNameInput}
                onChange={(e) => setDisplayNameInput(e.target.value)}
                placeholder="Masukkan nama panggilan..."
                className="flex-1 px-3.5 py-2 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                maxLength={35}
              />
              <button
                type="submit"
                disabled={isSavingName || !displayNameInput.trim()}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 text-white text-xs font-black rounded-xl transition shrink-0"
              >
                {isSavingName ? 'Menyimpan...' : 'Simpan Nama'}
              </button>
            </form>

            {nameSaveSuccess && (
              <p className="text-xs font-bold text-emerald-600 mt-2 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Nama panggilan berhasil diperbarui!
              </p>
            )}
          </div>

          {/* 4. Mulai Ulang / Reset Nilai (Pilihan Opsional) */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h4 className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                  <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                  Mulai Ulang Progres Belajar
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Kosongkan seluruh nilai kuis &amp; try out jika ingin mengulang latihan dari awal.
                </p>
              </div>

              {!isConfirmingReset ? (
                <button
                  type="button"
                  onClick={() => setIsConfirmingReset(true)}
                  className="px-3 py-1.5 rounded-xl border border-rose-300 hover:bg-rose-50 text-rose-600 font-bold text-xs transition shrink-0"
                >
                  Reset Nilai
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsConfirmingReset(false)}
                    className="px-2.5 py-1 text-xs text-slate-600 font-semibold"
                  >
                    Batal
                  </button>
                  <button
                    type="button"
                    onClick={handleResetData}
                    className="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs transition shadow-xs"
                  >
                    Ya, Reset
                  </button>
                </div>
              )}
            </div>

            {resetSuccess && (
              <p className="text-xs font-bold text-emerald-600 mt-2 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Nilai dan progres belajar berhasil direset ke awal.
              </p>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span>Edufillah Learning App &bull; Data Lokal</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition text-xs"
          >
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
};
