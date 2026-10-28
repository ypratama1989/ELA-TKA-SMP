import React, { useState } from 'react';
import { LogIn, HelpCircle, ShieldAlert, Sparkles, Key, Mail, BookOpen, CheckCircle2 } from 'lucide-react';
import { directLoginWithoutAuth } from '../lib/firebase';
import { UserProfile } from '../types';
import { PWAInstallButton } from './PWAInstallButton';

interface LoginPageProps {
  onLoginSuccess: (profile: UserProfile) => void;
  onOpenHelp: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess, onOpenHelp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg('Harap isi Email (Username) dan Transaction ID (Password).');
      return;
    }

    setLoading(true);
    setErrorMsg(null);

    try {
      // Direct login without Firebase Auth requirement
      const profile = await directLoginWithoutAuth(email, password);
      onLoginSuccess(profile);
    } catch (err: any) {
      setErrorMsg(err.message || 'Gagal melakukan login. Silakan periksa kembali data Anda.');
    } finally {
      setLoading(false);
    }
  };

  const fillDemoAccount = () => {
    setEmail('siswa.smp@edufillah.id');
    setPassword('TX-998231');
    setErrorMsg(null);
  };

  return (
    <div className="min-h-screen bg-[#4A3B8C] flex items-center justify-center p-3 sm:p-6 relative overflow-hidden font-sans">
      {/* Background Aesthetic Elements */}
      <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#06B6D4]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#F97316]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full z-10 py-6">
        {/* Header Branding */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center p-1.5 sm:p-2 bg-white rounded-3xl shadow-2xl border-2 border-white/20 mb-3 max-w-[180px] sm:max-w-[200px]">
            <img 
              src="/logo_edufillah.svg" 
              alt="EduFillah Logo" 
              className="w-full h-auto object-contain max-h-28 sm:max-h-32"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Edufillah Learning App</h1>
          <p className="text-[#06B6D4] font-bold text-xs sm:text-sm mt-1">Persiapan TKA SMP</p>
        </div>

        {/* Login Card */}
        <div className="bg-[#382B6D] rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl border-2 border-[#5B4AA8]">
          <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#5B4AA8]/50">
            <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
              <LogIn className="w-4 h-4 sm:w-5 sm:h-5 text-[#06B6D4]" /> Masuk Akun
            </h2>
            <span className="text-[10px] sm:text-xs font-black px-2.5 py-1 bg-[#10B981] text-white rounded-full flex items-center gap-1 shadow-xs">
              <CheckCircle2 className="w-3 h-3 text-white" /> Akses Langsung
            </span>
          </div>

          {errorMsg && (
            <div className="mb-5 p-3.5 rounded-xl bg-rose-500/20 border-2 border-rose-500/40 text-white text-xs sm:text-sm flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 sm:w-5 sm:h-5 text-rose-300 shrink-0 mt-0.5" />
              <div className="leading-relaxed font-bold">{errorMsg}</div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
            <div>
              <label className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-white mb-1.5">
                Email / Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/60">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contoh: siswa@edufillah.id"
                  className="w-full pl-10 pr-4 py-3 bg-[#2E235C] border-2 border-[#52419B] focus:border-[#06B6D4] rounded-xl text-white placeholder-white/50 text-base sm:text-sm focus:outline-none transition font-semibold"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-white mb-1.5">
                Transaction ID (Password)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/60">
                  <Key className="w-4 h-4" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan Transaction ID Anda"
                  className="w-full pl-10 pr-4 py-3 bg-[#2E235C] border-2 border-[#52419B] focus:border-[#06B6D4] rounded-xl text-white placeholder-white/50 text-base sm:text-sm focus:outline-none transition font-semibold"
                  required
                />
              </div>
              <p className="text-[10px] sm:text-[11px] text-white/70 mt-1">
                Data akun otomatis terintegrasi dari webhook pendaftaran Edufillah.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 bg-[#06B6D4] hover:bg-[#0891B2] active:bg-[#0E7490] text-white font-black rounded-xl shadow-lg flex items-center justify-center gap-2 transition disabled:opacity-50 disabled:cursor-not-allowed mt-2 min-h-[48px]"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Memverifikasi...</span>
                </div>
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  <span>Masuk ke Latihan</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Helper Button */}
          <div className="mt-4 pt-3.5 border-t border-[#5B4AA8]/50 flex items-center justify-between">
            <button
              type="button"
              onClick={fillDemoAccount}
              className="text-xs text-[#06B6D4] hover:text-cyan-200 flex items-center gap-1 font-black transition py-1"
            >
              <Sparkles className="w-3.5 h-3.5" /> Akun Demo
            </button>

            <button
              type="button"
              onClick={onOpenHelp}
              className="text-xs text-white/80 hover:text-white flex items-center gap-1 font-bold transition py-1"
            >
              <HelpCircle className="w-3.5 h-3.5" /> Bantuan CS
            </button>
          </div>
        </div>

        {/* PWA Standalone Install Card / Button */}
        <div className="mt-4 flex flex-col items-center justify-center gap-1.5 text-center">
          <PWAInstallButton />
          <p className="text-[11px] text-white/80">
            Dapat dipasang di HP / Laptop &amp; diakses tanpa internet (Offline).
          </p>
        </div>

        <p className="text-center text-[11px] text-white/60 mt-4 font-semibold">
          &copy; {new Date().getFullYear()} Edufillah Learning App &bull; Persiapan TKA SMP
        </p>
      </div>
    </div>
  );
};
