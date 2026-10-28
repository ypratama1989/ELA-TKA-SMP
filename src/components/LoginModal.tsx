import React, { useState } from 'react';
import { 
  Lock, 
  Mail, 
  ExternalLink, 
  AlertCircle, 
  CheckCircle2, 
  Smartphone, 
  ShoppingBag, 
  X,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { loginWithEmail, LYNKID_PRODUCT_URL } from '../services/authLicenseService';
import { LicenseSession } from '../types';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (session: LicenseSession) => void;
  featureName?: string | null;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  featureName,
}) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusState, setStatusState] = useState<'idle' | 'success' | 'not_registered' | 'expired' | 'device_locked' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatusState('error');
      setFeedbackMessage('Harap masukkan alamat email Anda.');
      return;
    }

    setLoading(true);
    setStatusState('idle');
    setFeedbackMessage('');

    try {
      const result = await loginWithEmail(email);

      if (result.success && result.data) {
        setStatusState('success');
        setFeedbackMessage('Login berhasil! Akses penuh sedang dibuka...');
        setTimeout(() => {
          onLoginSuccess(result.data!);
          onClose();
        }, 1200);
      } else {
        setStatusState(result.status);
        setFeedbackMessage(result.message);
      }
    } catch (err: any) {
      setStatusState('error');
      setFeedbackMessage('Gagal menghubungi server. Periksa koneksi internet Anda.');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenLynkId = () => {
    window.open(LYNKID_PRODUCT_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in font-sans">
      <div className="bg-[#2E235C] rounded-3xl max-w-md w-full p-5 sm:p-7 shadow-2xl border-2 border-[#5B4AA8] relative text-white overflow-hidden">
        {/* Decorative ambient background */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-[#06B6D4]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-44 h-44 bg-[#F97316]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          disabled={loading}
          className="absolute top-4 right-4 p-2 text-white/60 hover:text-white rounded-full hover:bg-white/10 transition z-10"
          title="Tutup Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon & Title */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center shadow-md font-black shrink-0 border-2 border-amber-300">
            <Lock className="w-6 h-6 text-slate-900" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 bg-amber-400/20 px-2.5 py-0.5 rounded-full border border-amber-400/30">
              Akses Lisensi EduFillah
            </span>
            <h3 className="text-lg sm:text-xl font-black text-white tracking-tight mt-0.5">
              Silakan Log In untuk Membuka Menu Ini
            </h3>
          </div>
        </div>

        {/* Feature context highlight */}
        {featureName ? (
          <div className="bg-[#382B6D] p-3 rounded-xl border border-[#52419B] text-xs text-white/90 mb-4 leading-relaxed">
            Menu <span className="font-black text-[#06B6D4]">{featureName}</span> memerlukan lisensi aktif paket <span className="font-bold text-amber-300">ELA TKA SMP</span>. Masukkan email saat Anda bertransaksi di Lynk.id.
          </div>
        ) : (
          <p className="text-xs text-white/80 mb-4 leading-relaxed">
            Masukkan alamat email yang Anda gunakan saat melakukan pembelian paket <span className="font-bold text-amber-300">ELA TKA SMP</span> di Lynk.id.
          </p>
        )}

        {/* Status Alerts */}
        {statusState === 'success' && (
          <div className="mb-4 p-3.5 rounded-xl bg-emerald-500/20 border-2 border-emerald-500 text-white text-xs flex items-center gap-2.5 animate-fade-in font-bold">
            <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
            <span>{feedbackMessage}</span>
          </div>
        )}

        {statusState === 'not_registered' && (
          <div className="mb-4 p-3.5 rounded-xl bg-amber-500/20 border-2 border-amber-400 text-amber-100 text-xs space-y-2 animate-fade-in">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
              <p className="font-semibold leading-relaxed">{feedbackMessage}</p>
            </div>
            <div className="pt-1">
              <button
                type="button"
                onClick={handleOpenLynkId}
                className="w-full py-2 px-3 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-black rounded-lg text-xs flex items-center justify-center gap-1.5 shadow-sm transition"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Beli Lisensi ELA TKA SMP di Lynk.id</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </button>
            </div>
          </div>
        )}

        {statusState === 'expired' && (
          <div className="mb-4 p-3.5 rounded-xl bg-rose-500/20 border-2 border-rose-400 text-rose-100 text-xs space-y-2 animate-fade-in">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
              <p className="font-semibold leading-relaxed">{feedbackMessage}</p>
            </div>
            <div className="pt-1">
              <button
                type="button"
                onClick={handleOpenLynkId}
                className="w-full py-2 px-3 bg-[#F97316] hover:bg-orange-500 active:bg-orange-700 text-white font-black rounded-lg text-xs flex items-center justify-center gap-1.5 shadow-sm transition"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Perpanjang Paket di Lynk.id</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </button>
            </div>
          </div>
        )}

        {statusState === 'device_locked' && (
          <div className="mb-4 p-3.5 rounded-xl bg-violet-900/60 border-2 border-violet-400 text-violet-100 text-xs space-y-2 animate-fade-in">
            <div className="flex items-start gap-2.5">
              <Smartphone className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
              <div>
                <p className="font-black text-amber-200 mb-1">Perangkat Lain Masih Aktif</p>
                <p className="leading-relaxed text-white/90">{feedbackMessage}</p>
              </div>
            </div>
          </div>
        )}

        {statusState === 'error' && (
          <div className="mb-4 p-3.5 rounded-xl bg-rose-500/20 border-2 border-rose-500 text-rose-100 text-xs flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
            <p className="font-semibold">{feedbackMessage}</p>
          </div>
        )}

        {/* Form Login Email */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-[11px] font-black uppercase tracking-wider text-white/90 mb-1.5">
              Alamat Email Pembelian Lynk.id
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/50">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (statusState !== 'idle') setStatusState('idle');
                }}
                placeholder="contoh: nama.kamu@gmail.com"
                disabled={loading}
                autoFocus
                className="w-full pl-10 pr-4 py-3 bg-[#1F1742] border-2 border-[#52419B] focus:border-[#06B6D4] rounded-xl text-white placeholder-white/40 text-sm focus:outline-none transition font-semibold"
                required
              />
            </div>
            <p className="text-[10px] text-white/60 mt-1">
              *Hanya memerlukan email tanpa password. 1 akun terikat pada 1 perangkat.
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-gradient-to-r from-[#06B6D4] to-cyan-500 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-black rounded-xl text-sm shadow-lg hover:shadow-cyan-500/25 active:scale-98 transition flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                <span>Memeriksa Database Lisensi...</span>
              </>
            ) : (
              <>
                <span>Masuk Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* LynkID Buy Option */}
        <div className="mt-4 pt-3.5 border-t border-[#52419B] flex items-center justify-between text-xs">
          <span className="text-white/70">Belum memiliki paket?</span>
          <button
            type="button"
            onClick={handleOpenLynkId}
            className="text-amber-300 hover:text-amber-200 font-bold flex items-center gap-1 hover:underline"
          >
            <span>Beli di Lynk.id</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>

        {/* Feature checklist */}
        <div className="mt-3.5 bg-[#1F1742]/80 p-2.5 rounded-xl border border-[#52419B]/60 grid grid-cols-2 gap-1.5 text-[10px] text-white/75 font-semibold">
          <div className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
            <span className="truncate">100 Flashcard 4 Mapel</span>
          </div>
          <div className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#06B6D4] shrink-0" />
            <span className="truncate">Diagnostic Test Lengkap</span>
          </div>
          <div className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="truncate">Try Out CBT Berstandar</span>
          </div>
          <div className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-violet-400 shrink-0" />
            <span className="truncate">Bank Soal Asli TKA</span>
          </div>
        </div>
      </div>
    </div>
  );
};
