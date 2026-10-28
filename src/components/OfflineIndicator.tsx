import React from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { WifiOff } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div
      id="pwa-offline-indicator"
      className="fixed bottom-4 left-4 z-50 flex items-center gap-2.5 rounded-xl bg-amber-500/95 backdrop-blur-md px-3.5 py-2 text-xs font-semibold text-slate-950 shadow-2xl border border-amber-400/40 animate-pulse"
    >
      <WifiOff className="w-4 h-4 text-slate-950 flex-shrink-0" />
      <span>Mode Offline Aktif — Bank soal dan riwayat dapat diakses tanpa internet.</span>
    </div>
  );
};
