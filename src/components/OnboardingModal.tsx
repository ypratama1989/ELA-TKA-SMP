import React, { useState } from 'react';
import { User, Sparkles, ArrowRight } from 'lucide-react';
import { updateUserDisplayName } from '../lib/firebase';

interface OnboardingModalProps {
  uid: string;
  initialName?: string;
  isOpen: boolean;
  onSaveName: (name: string) => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  uid,
  initialName = '',
  isOpen,
  onSaveName,
}) => {
  const [nameInput, setNameInput] = useState(initialName);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim()) {
      setErrorMsg('Nama Panggilan tidak boleh kosong.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      await updateUserDisplayName(uid, nameInput.trim());
      onSaveName(nameInput.trim());
    } catch (err: any) {
      setErrorMsg(err.message || 'Gagal menyimpan nama. Coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-800 relative text-slate-100">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-emerald-500 flex items-center justify-center text-white mb-4 shadow-lg shadow-indigo-500/20">
          <Sparkles className="w-6 h-6" />
        </div>

        <h2 className="text-2xl font-extrabold text-white tracking-tight">Selamat Datang!</h2>
        <p className="text-slate-400 text-sm mt-1 mb-6 leading-relaxed">
          Sebelum memulai latihan soal TKA SMP, masukkan Nama Panggilan Anda agar pengalaman belajar lebih personal.
        </p>

        {errorMsg && (
          <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-medium">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Nama Panggilan
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="contoh: Budi, Sarah, Faiz..."
                className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                autoFocus
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold rounded-xl shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 transition disabled:opacity-50"
          >
            {loading ? (
              <span>Menyimpan...</span>
            ) : (
              <>
                <span>Mulai Belajar</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
