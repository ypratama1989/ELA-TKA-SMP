import React, { useState } from 'react';
import { 
  X, 
  Folder, 
  ExternalLink, 
  Copy, 
  Check, 
  Download, 
  FolderOpen,
  Sparkles,
  Info
} from 'lucide-react';

interface FieldReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FieldReportItem {
  id: number;
  title: string;
  code: string;
  description: string;
  url: string;
  badge: string;
}

export const FIELD_REPORT_LINKS: FieldReportItem[] = [
  {
    id: 1,
    title: 'Folder Field Report 1',
    code: 'FR-01',
    description: 'Arsip kumpulan berkas soal observasi lapangan dan catatan uji peserta',
    url: 'https://drive.google.com/drive/folders/1IgGtuJ9rhlCqpUkuQxDpzgDdbSiFCqPy',
    badge: 'Folder 1'
  },
  {
    id: 2,
    title: 'Folder Field Report 2',
    code: 'FR-02',
    description: 'Arsip kumpulan berkas soal observasi lapangan dan catatan uji peserta',
    url: 'https://drive.google.com/drive/folders/1Hx3b9_QdDSO0SrzatfHK8kFko8O6Pif3',
    badge: 'Folder 2'
  },
  {
    id: 3,
    title: 'Folder Field Report 3',
    code: 'FR-03',
    description: 'Arsip kumpulan berkas soal observasi lapangan dan catatan uji peserta',
    url: 'https://drive.google.com/drive/folders/19-2eXMqMb7BDI9zS24Gou3PEe6TSWU8W',
    badge: 'Folder 3'
  },
  {
    id: 4,
    title: 'Folder Field Report 4',
    code: 'FR-04',
    description: 'Arsip kumpulan berkas soal observasi lapangan dan catatan uji peserta',
    url: 'https://drive.google.com/drive/folders/17ex9WDEYzIjKB-wg86boRBZD3VG6vWp1',
    badge: 'Folder 4'
  },
  {
    id: 5,
    title: 'Folder Field Report 5',
    code: 'FR-05',
    description: 'Arsip kumpulan berkas soal observasi lapangan dan catatan uji peserta',
    url: 'https://drive.google.com/drive/folders/1S6ZpaZRBg_5tToX0CeSNbaAF2PLMhDNV',
    badge: 'Folder 5'
  }
];

export const FieldReportModal: React.FC<FieldReportModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleCopy = (id: number, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const handleOpenAll = () => {
    FIELD_REPORT_LINKS.forEach(item => {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 sm:px-6 py-4 sm:py-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-amber-500/10 dark:bg-amber-500/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-500/20 shrink-0">
              <FolderOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                  Soal Field Report (FR)
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                  5 Folder Google Drive
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Koleksi berkas soal & arsip observasi lapangan langsung dari peserta
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice Banner */}
        <div className="px-5 sm:px-6 py-3 bg-amber-50 dark:bg-amber-950/30 border-b border-amber-100 dark:border-amber-900/40 flex items-start gap-2.5 text-xs text-amber-900 dark:text-amber-200">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="flex-1 leading-relaxed">
            Klik tombol <strong>Buka Google Drive</strong> pada masing-masing folder di bawah ini untuk mengunduh dokumen soal secara langsung.
          </div>
          <button
            onClick={handleOpenAll}
            className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 dark:text-amber-300 hover:underline shrink-0 cursor-pointer"
            title="Buka semua tautan folder di tab baru"
          >
            <ExternalLink className="w-3 h-3" />
            Buka Semua Tab
          </button>
        </div>

        {/* List of Folders */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3">
          {FIELD_REPORT_LINKS.map((item) => {
            const isCopied = copiedId === item.id;
            return (
              <div
                key={item.id}
                className="group p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-amber-400 dark:hover:border-amber-500/60 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3.5"
              >
                <div className="flex items-start gap-3.5 flex-1 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    <Folder className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {item.code}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  {/* Copy Link Button */}
                  <button
                    onClick={() => handleCopy(item.id, item.url)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition cursor-pointer"
                    title="Salin tautan Google Drive"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Salin Link</span>
                      </>
                    )}
                  </button>

                  {/* Open Link Button */}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-white shadow-xs transition active:scale-95 cursor-pointer"
                  >
                    <span>Buka Google Drive</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-5 sm:px-6 py-3.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Total 5 folder Google Drive aktif</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
