import React, { useState, useRef, useEffect } from 'react';
import { 
  LogOut, 
  LogIn, 
  HelpCircle, 
  ArrowLeft, 
  Settings, 
  RefreshCw, 
  Clock, 
  Sparkles, 
  AlertTriangle,
  MoreVertical,
  Compass,
  BookOpen
} from 'lucide-react';
import { UserProfile, LicenseSession } from '../types';
import { getRemainingActiveInfo } from '../services/authLicenseService';
import { LicenseInfoModal } from './LicenseInfoModal';

interface NavbarProps {
  userProfile: UserProfile;
  currentView: string;
  isLoggedIn?: boolean;
  licenseSession?: LicenseSession | null;
  onNavigateHome: () => void;
  onOpenLogin?: () => void;
  onOpenLogout: () => void;
  onOpenHelp: () => void;
  onOpenProfile?: () => void;
  onOpenSettings: () => void;
  onOpenAppUpdate?: () => void;
  onOpenSoalUpdate: () => void;
  onOpenRoadmap: () => void;
  onOpenUserGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  userProfile: _userProfile,
  currentView,
  isLoggedIn: _isLoggedIn = false,
  licenseSession = null,
  onNavigateHome,
  onOpenLogin,
  onOpenLogout,
  onOpenHelp,
  onOpenSettings,
  onOpenAppUpdate,
  onOpenSoalUpdate,
  onOpenRoadmap,
  onOpenUserGuide,
}) => {
  const [isLicenseModalOpen, setIsLicenseModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const licenseInfo = getRemainingActiveInfo(licenseSession);

  // Close dropdown menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <>
      <header 
        className="bg-[#7C3AED] border-b border-violet-800 sticky top-0 z-40 text-white shadow-md select-none transition-all"
        style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2">
          {/* Sisi Kiri: Logo + Judul / Native Back Button */}
          <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
            {currentView !== 'dashboard' ? (
              <button
                onClick={onNavigateHome}
                className="px-2.5 py-1.5 sm:px-3 sm:py-2 text-white hover:text-amber-200 bg-white/15 hover:bg-white/25 active:bg-white/35 rounded-xl transition flex items-center gap-1.5 text-xs font-black shrink-0 border border-white/20 shadow-xs cursor-pointer active:scale-95"
                title="Kembali ke Dashboard"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-xs">Beranda</span>
              </button>
            ) : null}

            <div 
              onClick={onNavigateHome} 
              className="flex items-center gap-2 sm:gap-2.5 cursor-pointer group min-w-0"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white p-0.5 rounded-xl shadow-sm border border-white group-hover:scale-105 transition transform shrink-0 flex items-center justify-center overflow-hidden">
                <img 
                  src="/logo_edufillah.svg" 
                  alt="EduFillah Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="min-w-0">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-white group-hover:text-amber-200 transition truncate block">
                  Edufillah Learning App
                </span>
                <span className="hidden sm:inline-block text-[9px] uppercase font-black tracking-wider text-violet-900 bg-amber-300 px-2.5 py-0.5 rounded-full shadow-xs">
                  Persiapan TKA SMP
                </span>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Masa Aktif (tepat disebelah kiri titik 3) & Titik 3 Dropdown */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Sisa Masa Aktif Feature - ditampilkan tepat di sebelah kiri titik 3 */}
            {licenseSession && (
              <button
                onClick={() => setIsLicenseModalOpen(true)}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition shadow-xs border cursor-pointer ${
                  licenseInfo.isLifetime
                    ? 'bg-gradient-to-r from-amber-300 to-yellow-400 hover:from-amber-200 hover:to-yellow-300 text-slate-950 border-amber-200 shadow-sm'
                    : licenseInfo.status === 'expired'
                    ? 'bg-rose-500 hover:bg-rose-600 text-white border-rose-400 shadow-sm font-black animate-pulse'
                    : licenseInfo.status === 'expiring_soon'
                    ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 border-amber-300 animate-pulse font-black'
                    : 'bg-emerald-500/25 hover:bg-emerald-500/35 text-white border-emerald-400/40'
                }`}
                title={`Status Lisensi: ${licenseInfo.detailLabel}. Klik untuk melihat rincian lisensi.`}
              >
                {licenseInfo.isLifetime ? (
                  <Sparkles className="w-3.5 h-3.5 text-amber-950 shrink-0" />
                ) : licenseInfo.status === 'expired' ? (
                  <AlertTriangle className="w-3.5 h-3.5 text-white shrink-0" />
                ) : licenseInfo.status === 'expiring_soon' ? (
                  <AlertTriangle className="w-3.5 h-3.5 text-slate-950 shrink-0" />
                ) : (
                  <Clock className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                )}
                <span className="hidden sm:inline">Masa Aktif:</span>
                <span className="font-extrabold">{licenseInfo.badgeLabel}</span>
              </button>
            )}

            {/* Tombol Masuk Cepat jika tamu belum login */}
            {!licenseSession && (
              <button
                onClick={onOpenLogin}
                className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-slate-950 rounded-xl text-xs font-black transition shadow-md border border-amber-200 cursor-pointer"
                title="Masuk dengan Email Pembelian"
              >
                <LogIn className="w-3.5 h-3.5 text-slate-950 shrink-0" />
                <span>Masuk Akun</span>
              </button>
            )}

            {/* Titik 3 Button (Menu Dropdown di sisi paling kanan) */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setIsMenuOpen(prev => !prev)}
                className={`p-2 sm:p-2.5 rounded-xl text-white transition border shadow-xs cursor-pointer flex items-center justify-center ${
                  isMenuOpen
                    ? 'bg-white/30 border-white/40 shadow-sm'
                    : 'bg-white/15 hover:bg-white/25 active:bg-white/35 border-white/20'
                }`}
                title="Menu Pengaturan & Opsi Lainnya"
                aria-label="Menu Opsi"
                aria-expanded={isMenuOpen}
              >
                <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>

              {/* Dropdown Menu Popup */}
              {isMenuOpen && (
                <div className="absolute right-0 top-full mt-2 min-w-[13.5rem] sm:min-w-[14.5rem] w-max max-w-[90vw] bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-200/90 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {/* User info if logged in */}
                  {licenseSession?.email && (
                    <div className="px-3.5 py-2 border-b border-slate-100 mb-1 bg-slate-50/70 rounded-t-xl">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">Akun Terdaftar</p>
                      <p className="text-xs font-black text-slate-800 truncate whitespace-nowrap max-w-[200px]" title={licenseSession.email}>
                        {licenseSession.email}
                      </p>
                    </div>
                  )}

                  {/* 1. Pengaturan */}
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      onOpenSettings();
                    }}
                    className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-left text-xs sm:text-sm font-bold text-slate-700 hover:bg-violet-50 hover:text-violet-900 transition-colors group cursor-pointer whitespace-nowrap"
                  >
                    <Settings className="w-4 h-4 text-violet-600 group-hover:scale-110 transition-transform shrink-0" />
                    <span className="whitespace-nowrap">Pengaturan</span>
                  </button>

                  {/* 2. Update App */}
                  {onOpenAppUpdate && (
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        onOpenAppUpdate();
                      }}
                      className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-left text-xs sm:text-sm font-bold text-slate-700 hover:bg-violet-50 hover:text-violet-900 transition-colors group cursor-pointer whitespace-nowrap"
                    >
                      <RefreshCw className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform shrink-0" />
                      <span className="whitespace-nowrap">Update App</span>
                    </button>
                  )}

                  {/* 3. Bantuan CS WA */}
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      onOpenHelp();
                    }}
                    className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-left text-xs sm:text-sm font-bold text-slate-700 hover:bg-violet-50 hover:text-violet-900 transition-colors group cursor-pointer whitespace-nowrap"
                  >
                    <HelpCircle className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform shrink-0" />
                    <span className="whitespace-nowrap">Bantuan CS WA</span>
                  </button>

                  {/* 4. Soal Update */}
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      onOpenSoalUpdate();
                    }}
                    className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-left text-xs sm:text-sm font-bold text-slate-700 hover:bg-violet-50 hover:text-violet-900 transition-colors group cursor-pointer whitespace-nowrap"
                  >
                    <Sparkles className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform shrink-0" />
                    <span className="whitespace-nowrap">Soal Update</span>
                  </button>

                  {/* 5. Roadmap Belajar */}
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      onOpenRoadmap();
                    }}
                    className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-left text-xs sm:text-sm font-bold text-slate-700 hover:bg-violet-50 hover:text-violet-900 transition-colors group cursor-pointer whitespace-nowrap"
                  >
                    <Compass className="w-4 h-4 text-sky-600 group-hover:scale-110 transition-transform shrink-0" />
                    <span className="whitespace-nowrap">Roadmap Belajar</span>
                  </button>

                  {/* 6. User Guide */}
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      onOpenUserGuide();
                    }}
                    className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-left text-xs sm:text-sm font-bold text-slate-700 hover:bg-violet-50 hover:text-violet-900 transition-colors group cursor-pointer whitespace-nowrap"
                  >
                    <BookOpen className="w-4 h-4 text-indigo-600 group-hover:scale-110 transition-transform shrink-0" />
                    <span className="whitespace-nowrap">User Guide</span>
                  </button>

                  <div className="border-t border-slate-100 my-1" />

                  {/* 7. Log Out / Masuk Akun */}
                  {licenseSession ? (
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        onOpenLogout();
                      }}
                      className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-left text-xs sm:text-sm font-bold text-rose-600 hover:bg-rose-50 hover:text-rose-700 transition-colors group cursor-pointer whitespace-nowrap"
                    >
                      <LogOut className="w-4 h-4 text-rose-600 group-hover:scale-110 transition-transform shrink-0" />
                      <span className="whitespace-nowrap">Log Out</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        onOpenLogin?.();
                      }}
                      className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-left text-xs sm:text-sm font-bold text-amber-600 hover:bg-amber-50 hover:text-amber-700 transition-colors group cursor-pointer whitespace-nowrap"
                    >
                      <LogIn className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform shrink-0" />
                      <span className="whitespace-nowrap">Masuk Akun</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Modal Rincian Sisa Masa Aktif & Lisensi */}
      <LicenseInfoModal
        isOpen={isLicenseModalOpen}
        onClose={() => setIsLicenseModalOpen(false)}
        licenseSession={licenseSession}
        onOpenLogout={onOpenLogout}
      />
    </>
  );
};
