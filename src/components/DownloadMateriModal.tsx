import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Calculator, 
  BookMarked, 
  Languages, 
  Atom, 
  Layers, 
  FileText,
  CheckCircle2,
  Bookmark
} from 'lucide-react';
import { SubjectId } from '../types';
import { RINGKASAN_MATERI_DATA, generateAllSubjectsTextSummary, downloadTextFile } from '../data/ringkasanMateriData';

interface DownloadMateriModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadMateriModal: React.FC<DownloadMateriModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<SubjectId | 'all'>('all');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleDownloadAll = () => {
    const text = generateAllSubjectsTextSummary();
    downloadTextFile('Ringkasan_Materi_Lengkap_TKA_SMP_Edufillah.txt', text);
  };

  const handleDownloadSingle = (subjectId: SubjectId) => {
    const summary = RINGKASAN_MATERI_DATA[subjectId];
    let doc = `========================================================================\n`;
    doc += `      EDULFILLAH LEARNING APP - RINGKASAN ${summary.subjectName.toUpperCase()}\n`;
    doc += `========================================================================\n\n`;
    
    summary.sections.forEach((sec, idx) => {
      doc += `[BAGIAN ${idx + 1}] ${sec.title}\n`;
      doc += `Deskripsi: ${sec.description}\n`;
      doc += `Poin-poin:\n`;
      sec.keyPoints.forEach((kp) => {
        doc += `  * ${kp}\n`;
      });
      if (sec.formulasOrRules) {
        doc += `Rumus/Kaidah:\n`;
        sec.formulasOrRules.forEach((f) => {
          doc += `  [!] ${f}\n`;
        });
      }
      doc += `\n`;
    });
    downloadTextFile(`Ringkasan_${summary.subjectName}_TKA_SMP.txt`, doc);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = generateAllSubjectsTextSummary();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const subjects: SubjectId[] = ['math', 'indo', 'eng', 'ipa'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20 shadow-inner">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                Ringkasan &amp; Rumus Kunci Materi TKA SMP
              </h2>
              <p className="text-xs text-slate-400">
                Panduan komprehensif 4 mapel siap unduh, cetak, atau simpan ke PDF
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
            aria-label="Tutup Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector & Action Buttons */}
        <div className="px-5 sm:px-8 py-3 bg-slate-950/40 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Semua Mapel (Lengkap)</span>
            </button>

            <button
              onClick={() => setActiveTab('math')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                activeTab === 'math'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Matematika</span>
            </button>

            <button
              onClick={() => setActiveTab('indo')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                activeTab === 'indo'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookMarked className="w-3.5 h-3.5" />
              <span>B. Indonesia</span>
            </button>

            <button
              onClick={() => setActiveTab('eng')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                activeTab === 'eng'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Languages className="w-3.5 h-3.5" />
              <span>B. Inggris</span>
            </button>

            <button
              onClick={() => setActiveTab('ipa')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                activeTab === 'ipa'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Atom className="w-3.5 h-3.5" />
              <span>IPA Terpadu</span>
            </button>
          </div>

          {/* Action Download Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition border border-slate-700"
              title="Cetak atau Simpan sebagai PDF"
            >
              <Printer className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden sm:inline">Cetak / PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition border border-slate-700"
            >
              <Bookmark className="w-3.5 h-3.5 text-emerald-400" />
              <span>{copied ? 'Tersalin!' : 'Salin Teks'}</span>
            </button>

            <button
              onClick={() => {
                if (activeTab === 'all') {
                  handleDownloadAll();
                } else {
                  handleDownloadSingle(activeTab);
                }
              }}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold flex items-center gap-1.5 transition shadow-md shadow-emerald-600/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh File (.txt)</span>
            </button>
          </div>
        </div>

        {/* Modal Body: Printable / Scrollable Summary Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-8 print:bg-white print:text-black print:p-0">
          {(activeTab === 'all' ? subjects : [activeTab]).map((subKey) => {
            const summary = RINGKASAN_MATERI_DATA[subKey];
            return (
              <div 
                key={subKey} 
                className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-5 sm:p-6 relative overflow-hidden"
              >
                {/* Header Banner for Subject */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${summary.color} text-white shadow-md`}>
                      {subKey === 'math' && <Calculator className="w-5 h-5" />}
                      {subKey === 'indo' && <BookMarked className="w-5 h-5" />}
                      {subKey === 'eng' && <Languages className="w-5 h-5" />}
                      {subKey === 'ipa' && <Atom className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-xl font-black text-white">
                        {summary.subjectName}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {summary.badge} &bull; Kisi-kisi Resmi Standar TKA SMP
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDownloadSingle(subKey)}
                    className="self-start sm:self-auto px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition"
                  >
                    <Download className="w-3 h-3 text-slate-400" />
                    <span>Unduh Khusus {summary.subjectName}</span>
                  </button>
                </div>

                {/* Subject Sections */}
                <div className="space-y-6">
                  {summary.sections.map((sec, idx) => (
                    <div key={idx} className="bg-slate-900/90 rounded-xl p-4 sm:p-5 border border-slate-800/80">
                      <h4 className="text-sm sm:text-base font-bold text-slate-100 mb-1 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-slate-800 text-indigo-400 text-xs flex items-center justify-center font-bold">
                          {idx + 1}
                        </span>
                        {sec.title}
                      </h4>
                      <p className="text-xs text-slate-400 mb-3 ml-7">
                        {sec.description}
                      </p>

                      {/* Key Points */}
                      <div className="ml-7 space-y-2 mb-3">
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          Poin Kunci &amp; Konsep Esensial:
                        </div>
                        {sec.keyPoints.map((kp, kIdx) => (
                          <div key={kIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{kp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Formulas or Rules */}
                      {sec.formulasOrRules && sec.formulasOrRules.length > 0 && (
                        <div className="ml-7 mt-3 p-3 bg-slate-950 rounded-xl border border-indigo-500/20">
                          <div className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider mb-1.5">
                            Kaidah &amp; Rumus Praktis:
                          </div>
                          <div className="space-y-1">
                            {sec.formulasOrRules.map((formula, fIdx) => (
                              <div key={fIdx} className="font-mono text-xs text-indigo-200 bg-indigo-950/40 px-2 py-1 rounded border border-indigo-900/50">
                                {formula}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-5 sm:px-8 py-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            Edufillah Platform &bull; Materi siap pakai untuk persiapan Tes Kemampuan Akademik (TKA) SMP
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
