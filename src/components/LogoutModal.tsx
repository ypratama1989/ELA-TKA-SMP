import React, { useState } from 'react';
import { LogOut, AlertTriangle, X } from 'lucide-react';

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmLogout: () => Promise<void>;
}

export const LogoutModal: React.FC<LogoutModalProps> = ({ isOpen, onClose, onConfirmLogout }) => {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await onConfirmLogout();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-800 relative text-slate-100">
        <button
          onClick={onClose}
          disabled={loading}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
          <AlertTriangle className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-bold text-white mb-2">Konfirmasi Log Out</h3>
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          Apakah kamu yakin ingin keluar? Kamu harus log out agar bisa login di perangkat lain.
        </p>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            disabled={loading}
            className="flex-1 py-2.5 px-4 rounded-xl border border-slate-800 bg-slate-950 text-slate-300 font-medium hover:bg-slate-800 transition text-sm disabled:opacity-50"
          >
            Batal
          </button>
          <button
            onClick={handleConfirm}
            disabled={loading}
            className="flex-1 py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-medium shadow-sm transition text-sm flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <span>Mengeluarkan...</span>
            ) : (
              <>
                <LogOut className="w-4 h-4" />
                <span>Ya, Log Out</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
