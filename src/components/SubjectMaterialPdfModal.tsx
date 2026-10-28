import React, { useEffect, useState } from 'react';
import { 
  X, 
  FileText, 
  Download, 
  ExternalLink, 
  Trash2, 
  AlertTriangle,
  HardDrive,
  RefreshCw,
  Smartphone
} from 'lucide-react';
import { SubjectId } from '../types';
import { 
  getMaterialFromStorage, 
  deleteMaterialFromStorage, 
  formatFileSize, 
  StoredMaterialRecord,
  SUBJECT_MATERIAL_METADATA 
} from '../lib/materialStorage';
import { PdfCanvasViewer } from './PdfCanvasViewer';

interface SubjectMaterialPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  subjectId: SubjectId;
  subjectName: string;
  onMaterialDeleted: () => void;
  onRedownloadRequest: () => void;
}

export const SubjectMaterialPdfModal: React.FC<SubjectMaterialPdfModalProps> = ({
  isOpen,
  onClose,
  subjectId,
  subjectName,
  onMaterialDeleted,
  onRedownloadRequest,
}) => {
  const [record, setRecord] = useState<StoredMaterialRecord | null>(null);
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    let currentUrl: string | null = null;

    if (isOpen) {
      setIsLoading(true);
      setShowDeleteConfirm(false);
      getMaterialFromStorage(subjectId)
        .then((rec) => {
          if (rec && rec.blob) {
            setRecord(rec);
            const url = URL.createObjectURL(rec.blob);
            currentUrl = url;
            setBlobUrl(url);
          } else {
            setRecord(null);
            setBlobUrl(null);
          }
        })
        .catch((err) => {
          console.error('Gagal memuat materi:', err);
          setRecord(null);
          setBlobUrl(null);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    return () => {
      if (currentUrl) {
        URL.revokeObjectURL(currentUrl);
      }
    };
  }, [isOpen, subjectId]);

  if (!isOpen) return null;

  const meta = SUBJECT_MATERIAL_METADATA[subjectId];

  // Handler simpan ke file lokal pengguna
  const handleSaveToDevice = () => {
    if (record && blobUrl) {
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = record.fileName || `Materi_${subjectName}_TKA_SMP.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else if (meta?.driveUrl) {
      window.open(meta.driveUrl, '_blank');
    }
  };

  // Handler buka di tab baru / fullscreen
  const handleOpenInNewTab = () => {
    if (blobUrl) {
      window.open(blobUrl, '_blank');
    } else if (meta?.previewUrl) {
      window.open(meta.previewUrl, '_blank');
    } else if (meta?.driveUrl) {
      window.open(meta.driveUrl, '_blank');
    }
  };

  // Handler hapus dari penyimpanan lokal
  const handleDeleteMaterial = async () => {
    setIsDeleting(true);
    try {
      await deleteMaterialFromStorage(subjectId);
      onMaterialDeleted();
      onClose();
    } catch (e) {
      console.error('Gagal menghapus:', e);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-3xl max-w-5xl w-full flex flex-col shadow-2xl border border-slate-200 text-slate-800 my-auto max-h-[95vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-4 sm:px-6 py-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0 border border-emerald-200">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                  Materi PDF {subjectName}
                </h2>
                {record?.blob ? (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black border border-emerald-300">
                    Tersimpan Offline
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-black border border-blue-300">
                    Baca Online (Google Drive)
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5 flex items-center gap-2">
                <HardDrive className="w-3.5 h-3.5 text-slate-400" />
                <span>Ukuran: {record ? formatFileSize(record.size) : meta?.fileSizeStr || 'PDF'}</span>
                {record?.downloadedAt && (
                  <span>
                    &bull; Diunduh:{' '}
                    {new Date(record.downloadedAt).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-end">
            {/* Tombol Simpan ke Perangkat / Download */}
            <a
              href={meta?.driveUrl}
              target="_blank"
              rel="noreferrer"
              download={meta?.fileName}
              className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 text-xs font-bold transition flex items-center gap-1.5 border border-slate-200 cursor-pointer"
              title="Unduh salinan berkas PDF ke perangkat"
            >
              <Download className="w-3.5 h-3.5 text-slate-600" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            {/* Tombol Buka di Tab Baru */}
            <button
              type="button"
              onClick={handleOpenInNewTab}
              className="px-3 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-700 active:scale-95 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs cursor-pointer"
              title="Buka PDF di tab baru peramban"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Buka di Tab Baru</span>
            </button>

            {/* Tombol Hapus (jika ada file lokal) */}
            {record?.blob && (
              !showDeleteConfirm ? (
                <button
                  type="button"
                  onClick={() => setShowDeleteConfirm(true)}
                  className="p-2 rounded-xl hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition cursor-pointer"
                  title="Hapus dari memori perangkat"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              ) : (
                <div className="flex items-center gap-1.5 bg-rose-50 px-2 py-1 rounded-xl border border-rose-200 text-xs">
                  <span className="text-[11px] text-rose-700 font-bold">Hapus?</span>
                  <button
                    type="button"
                    onClick={handleDeleteMaterial}
                    disabled={isDeleting}
                    className="px-2 py-0.5 rounded-lg bg-rose-600 text-white text-[11px] font-bold hover:bg-rose-700 transition"
                  >
                    {isDeleting ? '...' : 'Ya'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowDeleteConfirm(false)}
                    className="text-slate-500 hover:text-slate-700 text-[11px] font-medium"
                  >
                    Batal
                  </button>
                </div>
              )
            )}

            {/* Tombol Tutup (X) */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition ml-1 cursor-pointer"
              title="Tutup Pratinjau"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content: PDF Viewer */}
        <div className="flex-1 p-2 sm:p-4 bg-slate-950/90 overflow-hidden flex flex-col items-center justify-center min-h-[60vh]">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center p-8 text-center bg-slate-900 rounded-2xl border border-slate-800">
              <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mb-3"></div>
              <p className="text-sm font-bold text-white">Membuka materi modul PDF...</p>
              <p className="text-xs text-slate-400 mt-1">Menyiapkan tampilan pembaca</p>
            </div>
          ) : record?.blob ? (
            <div className="w-full h-full flex flex-col flex-1">
              <PdfCanvasViewer 
                blob={record.blob} 
                fileName={record.fileName}
                onOpenInNewTab={handleOpenInNewTab}
              />
            </div>
          ) : (
            <div className="w-full h-full flex flex-col flex-1 min-h-[65vh] sm:min-h-[70vh]">
              <iframe
                src={meta?.previewUrl}
                title={`Materi PDF ${subjectName}`}
                className="w-full flex-1 rounded-2xl border border-slate-800 bg-white min-h-[65vh] sm:min-h-[70vh]"
                allow="autoplay"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
