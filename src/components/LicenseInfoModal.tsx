import React from 'react';
import { 
  X, 
  ShieldCheck, 
  Calendar, 
  Clock, 
  Sparkles, 
  Smartphone, 
  Mail, 
  ExternalLink, 
  AlertTriangle,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { LicenseSession } from '../types';
import { getRemainingActiveInfo, LYNKID_PRODUCT_URL } from '../services/authLicenseService';

interface LicenseInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  licenseSession: LicenseSession | null;
  onOpenLogout?: () => void;
}

export const LicenseInfoModal: React.FC<LicenseInfoModalProps> = ({
  isOpen,
  onClose,
  licenseSession,
  onOpenLogout,
}) => {
  if (!isOpen) return null;

  const info = getRemainingActiveInfo(licenseSession);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner">
              {info.isLifetime ? (
                <Sparkles className="w-5 h-5 text-amber-300" />
              ) : (
                <Clock className="w-5 h-5 text-emerald-300" />
              )}
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-2">
                Status Lisensi &amp; Masa Aktif
              </h3>
              <p className="text-xs text-violet-200">
                Edufillah Learning App - TKA SMP
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-white/75 hover:text-white hover:bg-white/15 transition"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          
          {/* Main Status Hero Card */}
          <div className={`p-4 rounded-2xl border ${
            info.isLifetime 
              ? 'bg-amber-50/80 border-amber-200 text-amber-950'
              : info.status === 'expiring_soon'
              ? 'bg-amber-50 border-amber-300 text-amber-950'
              : info.status === 'expired'
              ? 'bg-rose-50 border-rose-200 text-rose-950'
              : 'bg-emerald-50/90 border-emerald-200 text-emerald-950'
          }`}>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                {info.isLifetime ? (
                  <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-900 flex items-center justify-center font-black shadow-xs">
                    ⭐
                  </div>
                ) : (
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-xs ${
                    info.status === 'expiring_soon' ? 'bg-amber-500' : 'bg-emerald-500'
                  }`}>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                )}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider opacity-75">
                    Sisa Masa Aktif
                  </div>
                  <div className="text-lg sm:text-xl font-black">
                    {info.isLifetime ? 'Akses Selamanya (Lifetime)' : `${info.daysRemaining} Hari Lagi`}
                  </div>
                </div>
              </div>

              <div className={`px-3 py-1 rounded-full text-xs font-black shadow-xs ${
                info.isLifetime 
                  ? 'bg-amber-300 text-slate-950 border border-amber-400' 
                  : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
              }`}>
                {info.badgeLabel}
              </div>
            </div>

            <p className="mt-2 text-xs opacity-90">
              {info.detailLabel}
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {/* Email */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl">
              <div className="flex items-center gap-1.5 text-slate-500 font-semibold mb-1">
                <Mail className="w-3.5 h-3.5 text-violet-600" />
                <span>Email Terdaftar</span>
              </div>
              <div className="font-bold text-slate-800 break-all">
                {licenseSession?.email || '-'}
              </div>
            </div>

            {/* Tanggal Kadaluwarsa */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl">
              <div className="flex items-center gap-1.5 text-slate-500 font-semibold mb-1">
                <Calendar className="w-3.5 h-3.5 text-violet-600" />
                <span>Berakhir Pada</span>
              </div>
              <div className="font-bold text-slate-800">
                {info.expiryDateFormatted}
              </div>
            </div>

            {/* Paket / Produk */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl">
              <div className="flex items-center gap-1.5 text-slate-500 font-semibold mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-violet-600" />
                <span>Produk / Paket</span>
              </div>
              <div className="font-bold text-slate-800">
                {licenseSession?.product || 'ELA TKA SMP'}
              </div>
            </div>

            {/* Single Device Lock */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl">
              <div className="flex items-center gap-1.5 text-slate-500 font-semibold mb-1">
                <Smartphone className="w-3.5 h-3.5 text-violet-600" />
                <span>Perangkat Terhubung</span>
              </div>
              <div className="font-bold text-emerald-700 flex items-center gap-1">
                <Lock className="w-3 h-3 text-emerald-600" />
                <span>1 Perangkat (Terkunci)</span>
              </div>
            </div>
          </div>

          {/* Info Perpanjangan Lynk.id */}
          <div className="p-3.5 rounded-2xl bg-violet-50 border border-violet-200 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
            <div className="text-xs text-violet-900 leading-relaxed">
              Ingin memperpanjang langganan atau upgrade ke paket lifetime? Silakan beli atau perpanjang melalui halaman resmi Lynk.id Edufillah.
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <a
            href={LYNKID_PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-4 py-2.5 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-slate-950 rounded-xl text-xs font-black transition flex items-center justify-center gap-1.5 shadow-sm border border-amber-300"
          >
            <span>Perpanjang di Lynk.id</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
          </a>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            {onOpenLogout && (
              <button
                onClick={() => {
                  onClose();
                  onOpenLogout();
                }}
                className="px-3 py-2 text-rose-600 hover:bg-rose-50 rounded-xl text-xs font-bold transition border border-rose-200"
              >
                Log Out
              </button>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold transition"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
