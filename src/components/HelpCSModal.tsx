import React from 'react';
import { MessageCircle, X, ExternalLink, HelpCircle, ShieldCheck } from 'lucide-react';

interface HelpCSModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpCSModal: React.FC<HelpCSModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const waLink = 'https://wa.me/+6283169509332';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-800 relative text-slate-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Pusat Bantuan Edufillah</h3>
            <p className="text-xs text-slate-400">Layanan Pelanggan &amp; Kendala Akses</p>
          </div>
        </div>

        <p className="text-sm text-slate-300 mb-5 leading-relaxed">
          Mengalami kendala saat login, lupa Transaction ID, atau kendala perangkat? Tim CS Edufillah siap membantu Anda secara langsung via WhatsApp.
        </p>

        <div className="bg-slate-950 rounded-xl p-3.5 mb-5 border border-slate-800 text-xs text-slate-400 space-y-2">
          <div className="flex items-center gap-2 font-medium text-slate-200">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Jam Pelayanan CS
          </div>
          <p className="text-slate-300 font-semibold">Hanya Hari Kerja: 10.00 - 17.00 WIB</p>
          <p className="text-[11px] text-slate-500">(Sabtu, Minggu &amp; Libur Nasional Tutup)</p>
          <div className="pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
            <span className="text-slate-400">WhatsApp Resmi:</span>
            <span className="text-emerald-400 font-mono font-bold">+62 831-6950-9332</span>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 px-4 rounded-xl border border-slate-800 bg-slate-950 text-slate-300 font-medium hover:bg-slate-800 transition text-sm"
          >
            Tutup
          </button>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-500 shadow-sm transition text-sm"
          >
            <MessageCircle className="w-4 h-4" /> Hubungi CS
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      </div>
    </div>
  );
};
