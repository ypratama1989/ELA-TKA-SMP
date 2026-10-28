import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Loader2, 
  AlertCircle,
  ExternalLink,
  Smartphone
} from 'lucide-react';

// Atur worker pdfjs dengan fallback yang andal
const pdfjs = (pdfjsLib as any).default || pdfjsLib;
if (typeof window !== 'undefined') {
  try {
    pdfjs.GlobalWorkerOptions.workerSrc = `${window.location.origin}/pdf.worker.min.js`;
  } catch {
    pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  }
}

interface PdfCanvasViewerProps {
  blob: Blob;
  fileName?: string;
  onOpenInNewTab?: () => void;
}

export const PdfCanvasViewer: React.FC<PdfCanvasViewerProps> = ({
  blob,
  fileName,
  onOpenInNewTab,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [pageInput, setPageInput] = useState<string>('1');
  const [zoomLevel, setZoomLevel] = useState<number>(1.0); // 1.0 = fit to width
  const [isFitWidth, setIsFitWidth] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRendering, setIsRendering] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const currentRenderTaskRef = useRef<any>(null);
  const touchStartXRef = useRef<number | null>(null);
  const renderTimeoutRef = useRef<any>(null);

  // 1. Muat PDF Document dari Blob
  useEffect(() => {
    let isCancelled = false;
    setIsLoading(true);
    setErrorMessage(null);
    setPdfDoc(null);
    setCurrentPage(1);
    setPageInput('1');

    const loadDoc = async () => {
      try {
        const arrayBuffer = await blob.arrayBuffer();
        if (isCancelled) return;

        const loadingTask = pdfjs.getDocument({
          data: arrayBuffer,
          cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/',
          cMapPacked: true,
        });

        const doc = await loadingTask.promise;
        if (isCancelled) return;

        setPdfDoc(doc);
        setTotalPages(doc.numPages);
        setIsLoading(false);
      } catch (err: any) {
        console.error('Gagal memuat dokumen PDF:', err);
        if (!isCancelled) {
          setErrorMessage(err?.message || 'Gagal membaca berkas PDF.');
          setIsLoading(false);
        }
      }
    };

    loadDoc();

    return () => {
      isCancelled = true;
      if (currentRenderTaskRef.current) {
        try {
          currentRenderTaskRef.current.cancel();
        } catch (_) {}
      }
      if (renderTimeoutRef.current) {
        clearTimeout(renderTimeoutRef.current);
      }
    };
  }, [blob]);

  // 2. Render Halaman ke Canvas
  const renderCurrentPage = useCallback(async () => {
    if (!pdfDoc) return;

    // Jika canvas belum ter-mount di DOM, coba lagi sedikit kemudian (aman untuk lifecycle Android)
    if (!canvasRef.current || !containerRef.current) {
      if (renderTimeoutRef.current) clearTimeout(renderTimeoutRef.current);
      renderTimeoutRef.current = setTimeout(() => {
        renderCurrentPage();
      }, 60);
      return;
    }

    try {
      setIsRendering(true);

      // Batalkan render yang sedang berjalan jika user klik cepat
      if (currentRenderTaskRef.current) {
        try {
          currentRenderTaskRef.current.cancel();
        } catch (_) {}
      }

      const page = await pdfDoc.getPage(currentPage);
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const clientWidth = containerRef.current?.clientWidth || 360;
      const containerWidth = Math.max(clientWidth - 24, 280); // padding allowance
      const unscaledViewport = page.getViewport({ scale: 1.0 });

      let calculatedScale: number;
      if (isFitWidth) {
        // Hitung scale agar pas dengan lebar layar HP/Container Android
        calculatedScale = containerWidth / unscaledViewport.width;
      } else {
        calculatedScale = zoomLevel;
      }

      // Resolusi device pixel ratio untuk ketajaman di layar Retina/Android FHD (dibatasi 2x agar hemat memori Android)
      const dpr = Math.min(window.devicePixelRatio || 1, 2.0);
      const viewport = page.getViewport({ scale: calculatedScale * dpr });

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      // Atur display size melalui CSS agar pas di layar
      canvas.style.width = `${viewport.width / dpr}px`;
      canvas.style.height = `${viewport.height / dpr}px`;

      const renderContext = {
        canvasContext: ctx,
        viewport: viewport,
      };

      const renderTask = page.render(renderContext);
      currentRenderTaskRef.current = renderTask;

      await renderTask.promise;
      setIsRendering(false);
      currentRenderTaskRef.current = null;
    } catch (err: any) {
      if (err?.name !== 'RenderingCancelledException') {
        console.error('Error rendering page:', err);
      }
      setIsRendering(false);
    }
  }, [pdfDoc, currentPage, isFitWidth, zoomLevel]);

  // 3. Trigger render saat halaman, zoom, atau pdfDoc berganti
  useEffect(() => {
    if (pdfDoc && !isLoading) {
      // Delay kecil untuk memastikan modal transition di Android sudah selesai
      const t = setTimeout(() => {
        renderCurrentPage();
      }, 50);
      return () => clearTimeout(t);
    }
  }, [pdfDoc, isLoading, currentPage, isFitWidth, zoomLevel, renderCurrentPage]);

  // 4. Handle resize menggunakan ResizeObserver agar responsif di HP Android
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver(() => {
      if (isFitWidth && pdfDoc && !isLoading) {
        renderCurrentPage();
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isFitWidth, pdfDoc, isLoading, renderCurrentPage]);

  // Navigasi Halaman
  const handlePrevPage = () => {
    if (currentPage > 1) {
      const nextP = currentPage - 1;
      setCurrentPage(nextP);
      setPageInput(nextP.toString());
      containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const nextP = currentPage + 1;
      setCurrentPage(nextP);
      setPageInput(nextP.toString());
      containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleJumpPage = (e: React.FormEvent) => {
    e.preventDefault();
    const pageNum = parseInt(pageInput, 10);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
      containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setPageInput(currentPage.toString());
    }
  };

  // Zoom Controls
  const handleZoomIn = () => {
    setIsFitWidth(false);
    setZoomLevel((prev) => Math.min(prev + 0.25, 3.0));
  };

  const handleZoomOut = () => {
    setIsFitWidth(false);
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleResetFitWidth = () => {
    setIsFitWidth(true);
    setZoomLevel(1.0);
  };

  // Touch Swipe Gesture untuk Android (Ganti halaman dengan usapan jari)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartXRef.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const diffX = endX - touchStartXRef.current;
    const minSwipeDistance = 50; // pixel threshold

    if (diffX < -minSwipeDistance) {
      // Usap ke kiri => halaman berikutnya
      handleNextPage();
    } else if (diffX > minSwipeDistance) {
      // Usap ke kanan => halaman sebelumnya
      handlePrevPage();
    }
    touchStartXRef.current = null;
  };

  return (
    <div className="flex flex-col w-full h-full bg-slate-900 rounded-2xl overflow-hidden shadow-inner select-none">
      {/* Top Floating Control Bar */}
      <div className="bg-slate-800/95 border-b border-slate-700/80 px-2 sm:px-4 py-2 flex items-center justify-between gap-2 text-white text-xs z-10">
        {/* Left: Navigasi Halaman */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={handlePrevPage}
            disabled={currentPage <= 1 || isLoading}
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-slate-700/80 hover:bg-slate-600 active:bg-slate-500 disabled:opacity-30 disabled:pointer-events-none transition text-white"
            title="Halaman Sebelumnya"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Form nomor halaman */}
          <form onSubmit={handleJumpPage} className="flex items-center gap-1">
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={pageInput}
              onChange={(e) => setPageInput(e.target.value)}
              onBlur={() => setPageInput(currentPage.toString())}
              disabled={isLoading || totalPages === 0}
              className="w-10 sm:w-12 h-8 text-center bg-slate-950/70 border border-slate-600 rounded-lg text-white font-bold text-xs focus:outline-hidden focus:border-cyan-400"
            />
            <span className="text-slate-400 font-medium text-[11px] sm:text-xs whitespace-nowrap">
              / {totalPages || '...'}
            </span>
          </form>

          <button
            type="button"
            onClick={handleNextPage}
            disabled={currentPage >= totalPages || isLoading}
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-slate-700/80 hover:bg-slate-600 active:bg-slate-500 disabled:opacity-30 disabled:pointer-events-none transition text-white"
            title="Halaman Selanjutnya"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right: Zoom & Layout Controls */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          <button
            type="button"
            onClick={handleZoomOut}
            disabled={isLoading}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-700/80 hover:bg-slate-600 active:bg-slate-500 disabled:opacity-30 text-white transition"
            title="Perkecil (-)"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleResetFitWidth}
            disabled={isLoading}
            className={`px-2.5 h-8 flex items-center justify-center gap-1 rounded-lg text-[11px] font-bold transition ${
              isFitWidth 
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' 
                : 'bg-slate-700/80 hover:bg-slate-600 text-slate-300'
            }`}
            title="Sesuaikan Lebar Layar HP"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Pas Layar</span>
          </button>

          <button
            type="button"
            onClick={handleZoomIn}
            disabled={isLoading}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-700/80 hover:bg-slate-600 active:bg-slate-500 disabled:opacity-30 text-white transition"
            title="Perbesar (+)"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Canvas Scroll Area */}
      <div 
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="flex-1 w-full overflow-auto p-2 sm:p-4 flex flex-col items-center justify-start min-h-[55vh] max-h-[72vh] relative touch-pan-y"
      >
        {/* Loading Overlay */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center my-auto p-8 text-center">
            <Loader2 className="w-10 h-10 text-cyan-400 animate-spin mb-3" />
            <p className="text-sm font-bold text-white">Membuka Materi Modul...</p>
            <p className="text-xs text-slate-400 mt-1">Menyiapkan halaman untuk layar HP Android</p>
          </div>
        )}

        {/* Error State */}
        {errorMessage && !isLoading && (
          <div className="flex flex-col items-center justify-center my-auto p-6 max-w-sm text-center bg-slate-800 rounded-2xl border border-rose-500/40">
            <AlertCircle className="w-10 h-10 text-rose-400 mb-2" />
            <p className="text-sm font-bold text-white">Tidak dapat menampilkan halaman</p>
            <p className="text-xs text-slate-300 mt-1 mb-4">{errorMessage}</p>
            {onOpenInNewTab && (
              <button
                type="button"
                onClick={onOpenInNewTab}
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold rounded-xl shadow-xs flex items-center gap-1.5 mx-auto"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Buka di Tab Baru / Layar Penuh</span>
              </button>
            )}
          </div>
        )}

        {/* Canvas Container: Selalu ada di DOM agar ref terikat sempurna */}
        <div className={`relative flex flex-col items-center my-auto ${isLoading || errorMessage ? 'hidden' : 'block'}`}>
          {/* Canvas tempat rendering halaman PDF */}
          <canvas 
            ref={canvasRef} 
            className="bg-white rounded-xl shadow-2xl transition-opacity duration-150 border border-slate-700 max-w-full"
          />

          {/* Indikator rendering kecil saat ganti halaman */}
          {isRendering && (
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold flex items-center gap-1.5 shadow-md">
              <Loader2 className="w-3 h-3 animate-spin text-cyan-400" />
              <span>Memuat...</span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Footer: Slider / Quick Navigation & Mobile Hint */}
      {totalPages > 0 && !isLoading && (
        <div className="bg-slate-800/90 border-t border-slate-700/80 px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-300 text-[11px]">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">Geser Hal:</span>
            <input
              type="range"
              min="1"
              max={totalPages}
              value={currentPage}
              onChange={(e) => {
                const p = parseInt(e.target.value, 10);
                setCurrentPage(p);
                setPageInput(p.toString());
              }}
              className="w-full sm:w-48 h-1.5 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-[10px] text-center sm:text-right">
            <Smartphone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>Usap layar ke kiri/kanan untuk ganti lembar halaman</span>
          </div>
        </div>
      )}
    </div>
  );
};
