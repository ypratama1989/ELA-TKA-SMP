import React, { useState } from 'react';
import { RefreshCw, Sparkles, X, ArrowRight } from 'lucide-react';
import { applyAppUpdate } from '../services/appUpdateService';

interface FloatingUpdateBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FloatingUpdateBar: React.FC<FloatingUpdateBarProps> = ({
  isOpen,
  onClose,
}) => {
  const [isApplying, setIsApplying] = useState(false);

  if (!isOpen) return null;

  const handleUpdate = async () => {
    try {
      setIsApplying(true);
      await applyAppUpdate();
    } catch (err) {
      console.error('Failed to apply update:', err);
      setIsApplying(false);
    }
  };

  return (
    <aside 
      aria-label="Notifikasi Pembaruan Aplikasi"
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-lg animate-in fade-in slide-in-from-bottom-5 duration-300 pointer-events-auto"
    >
      <div className="bg-slate-900/95 text-white p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl shadow-2xl border border-violet-500/50 backdrop-blur-md flex items-center justify-between gap-3">
        {/* Left Icon & Text */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-violet-600/30 text-amber-300 flex items-center justify-center shrink-0 border border-violet-400/40">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-black text-white truncate">
              Pembaruan Tersedia
            </p>
            <p className="text-[11px] sm:text-xs text-slate-300 truncate">
              Versi terbaru tersedia. Klik untuk muat ulang
            </p>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleUpdate}
            disabled={isApplying}
            className="px-3.5 sm:px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 active:scale-95 text-slate-950 text-xs sm:text-sm font-black rounded-xl shadow-md transition flex items-center gap-1.5 cursor-pointer disabled:opacity-75"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isApplying ? 'animate-spin' : ''}`} />
            <span>{isApplying ? 'Memuat...' : 'Muat Ulang'}</span>
          </button>
          
          <button
            onClick={onClose}
            aria-label="Tutup notifikasi pembaruan"
            className="w-8 h-8 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
