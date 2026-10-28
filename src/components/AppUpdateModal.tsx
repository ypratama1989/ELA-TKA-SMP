import React, { useState, useEffect } from 'react';
import { 
  X, 
  RefreshCw, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Smartphone, 
  HardDrive,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { APP_VERSION, APP_BUILD_DATE, checkForAppUpdates, applyAppUpdate } from '../services/appUpdateService';

interface AppUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppUpdateModal: React.FC<AppUpdateModalProps> = ({ isOpen, onClose }) => {
  const [isChecking, setIsChecking] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string>('Memeriksa ketersediaan versi terbaru...');
  const [readyToUpdate, setReadyToUpdate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsChecking(true);
      setReadyToUpdate(false);
      checkForAppUpdates()
        .then((res) => {
          setStatusMessage(res.message);
          setReadyToUpdate(res.hasUpdate);
        })
        .finally(() => {
          setIsChecking(false);
        });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleExecuteUpdate = async () => {
    setIsUpdating(true);
    setStatusMessage('Memperbarui aplikasi dan menyinkronkan data...');
    // Beri sedikit jeda visual agar pengguna melihat transisi halus
    setTimeout(async () => {
      await applyAppUpdate();
    }, 600);
  };

  const handleManualCheck = async () => {
    setIsChecking(true);
    const res = await checkForAppUpdates();
    setStatusMessage(res.message);
    setReadyToUpdate(res.hasUpdate);
    setIsChecking(false);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-3xl max-w-lg w-full flex flex-col shadow-2xl border border-slate-200 text-slate-800 my-auto overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-gradient-to-r from-violet-600 via-indigo-700 to-purple-800 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 text-amber-300 flex items-center justify-center font-bold shrink-0 border border-white/30 shadow-inner">
              <RefreshCw className={`w-5 h-5 ${isChecking || isUpdating ? 'animate-spin' : ''}`} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                Pembaruan Aplikasi
              </h3>
              <p className="text-xs text-violet-200 font-medium">
                Edufillah TKA SMP &bull; Versi {APP_VERSION}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={isUpdating}
            className="p-1.5 text-white/80 hover:text-white hover:bg-white/20 rounded-xl transition disabled:opacity-50"
            title="Tutup Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 space-y-4">
          {/* Version Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                Status Rilis
              </span>
              <span className="text-sm font-black text-slate-800 flex items-center gap-1.5 mt-0.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Versi {APP_VERSION} ({APP_BUILD_DATE})
              </span>
            </div>

            <button
              type="button"
              onClick={handleManualCheck}
              disabled={isChecking || isUpdating}
              className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-xl border border-slate-300 transition shadow-xs disabled:opacity-50 flex items-center gap-1.5"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-slate-500 ${isChecking ? 'animate-spin' : ''}`} />
              <span>{isChecking ? 'Mengecek...' : 'Cek Ulang'}</span>
            </button>
          </div>

          {/* Status Alert */}
          <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-start gap-3 text-xs text-indigo-950">
            <Zap className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <p className="font-bold text-indigo-900">Keterangan Pembaruan:</p>
              <p className="text-indigo-800 mt-0.5">{statusMessage}</p>
            </div>
          </div>

          {/* Data Security Guarantee Card */}
          <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex items-start gap-3 text-xs text-emerald-900">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <span className="font-bold block text-emerald-950 mb-0.5">
                Data Belajar Dijamin 100% Aman
              </span>
              <p className="text-emerald-800">
                Pembaruan ini hanya memperbarui kode tampilan, soal-soal terbaru, dan performa aplikasi. 
                <strong> Nilai kuis, nama siswa, pencapaian lencana, riwayat Try Out, serta modul PDF yang sudah diunduh TIDAK akan terhapus.</strong>
              </p>
            </div>
          </div>

          {/* Highlights of update */}
          <div className="space-y-1.5 pt-1 text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Memuat modul bank soal terbaru &amp; kisi-kisi edisi 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Peningkatan kecepatan pembaca modul PDF di HP Android</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Pembersihan memori cache aset tanpa mengganggu sesi belajar</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={onClose}
            disabled={isUpdating}
            className="px-4 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 active:bg-slate-400 text-slate-700 text-xs font-bold transition disabled:opacity-50"
          >
            Tutup
          </button>

          <button
            type="button"
            onClick={handleExecuteUpdate}
            disabled={isUpdating}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 active:scale-95 text-white text-xs font-black shadow-md transition flex items-center gap-2 border border-violet-400/40 disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 text-amber-300 ${isUpdating ? 'animate-spin' : ''}`} />
            <span>{isUpdating ? 'Sedang Memperbarui...' : 'Perbarui Aplikasi Sekarang'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
