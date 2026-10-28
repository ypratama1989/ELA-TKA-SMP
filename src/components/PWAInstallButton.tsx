import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, Smartphone, CheckCircle2, X, Share2, PlusSquare } from 'lucide-react';
import { useModalBackHandler } from '../hooks/useModalBackHandler';

interface PWAInstallButtonProps {
  className?: string;
  compact?: boolean;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  className = '',
  compact = false,
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuideModal, setShowGuideModal] = useState(false);

  // Sync guide modal with mobile/tablet back button
  useModalBackHandler(showGuideModal, () => setShowGuideModal(false), 'pwaGuideModal');

  // If already installed and running standalone
  if (isInstalled) {
    return (
      <div
        id="pwa-installed-badge"
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold ${className}`}
        title="Aplikasi Edufillah terpasang mandiri & siap digunakan offline"
      >
        <CheckCircle2 className="w-3.5 h-3.5" />
        <span>{compact ? 'Offline Ready' : 'Aplikasi Mandiri Aktif'}</span>
      </div>
    );
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      await install();
    } else {
      setShowGuideModal(true);
    }
  };

  return (
    <>
      <button
        id="pwa-install-trigger-btn"
        onClick={handleInstallClick}
        className={`inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all shadow-md active:scale-95 ${
          compact
            ? 'px-3 py-1.5 text-xs bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-400/40 shadow-indigo-600/20'
            : 'px-4 py-2 text-xs sm:text-sm bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white border border-indigo-400/30 shadow-indigo-600/30'
        } ${className}`}
        title="Download / Pasang Edufillah sebagai aplikasi mandiri yang bisa diakses offline"
      >
        <Download className="w-4 h-4" />
        <span>{compact ? 'Download App' : 'Download Aplikasi (Offline)'}</span>
      </button>

      {/* Modal Panduan Instalasi PWA (untuk iOS Safari atau instruksi browser desktop/Android) */}
      {showGuideModal && (
        <div
          id="pwa-guide-modal-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setShowGuideModal(false)}
        >
          <div
            id="pwa-guide-modal-content"
            className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-2xl text-slate-100 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="pwa-guide-close-btn"
              onClick={() => setShowGuideModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-white">Pasang Aplikasi Edufillah</h3>
                <p className="text-xs text-slate-400">Bisa diakses offline tanpa kuota internet</p>
              </div>
            </div>

            {isIOS ? (
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                <div className="font-semibold text-amber-300">Cara Pasang di iPhone / iPad (Safari):</div>
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    Ketuk tombol <strong className="text-white inline-flex items-center gap-1 mx-1"><Share2 className="w-3.5 h-3.5" /> Bagikan (Share)</strong> pada bilah bawah browser Safari.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    Gulir menu ke bawah dan pilih <strong className="text-white inline-flex items-center gap-1 mx-1"><PlusSquare className="w-3.5 h-3.5" /> Tambah ke Layar Utama (Add to Home Screen)</strong>.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    Ketuk <strong>Tambah</strong> di pojok kanan atas. Ikon Edufillah akan muncul di layar utama dan siap dibuka secara offline.
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                <div className="font-semibold text-indigo-300">Cara Pasang di HP Android / Laptop:</div>
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong>Di Google Chrome / Edge Laptop:</strong> Klik ikon <strong className="text-white">Install / Pasang Aplikasi</strong> di sebelah kanan kolom alamat URL (address bar).
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong>Di Chrome Android:</strong> Ketuk tombol titik tiga (<strong className="text-white">⋮</strong>) di pojok kanan atas browser, lalu pilih <strong className="text-white">"Install aplikasi"</strong> atau <strong className="text-white">"Tambahkan ke Layar Utama"</strong>.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    Setelah terpasang, aplikasi akan berjalan mandiri (standalone) tanpa browser, dengan seluruh materi dan soal tersimpan di memori perangkat.
                  </div>
                </div>
              </div>
            )}

            <button
              id="pwa-guide-understood-btn"
              onClick={() => setShowGuideModal(false)}
              className="mt-5 w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm transition shadow-lg"
            >
              Saya Mengerti
            </button>
          </div>
        </div>
      )}
    </>
  );
};
