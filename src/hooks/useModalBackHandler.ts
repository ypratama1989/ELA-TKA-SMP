// src/hooks/useModalBackHandler.ts
import { useEffect, useRef } from 'react';
import { registerModalBack } from '../services/backNavigation';

/**
 * Hook untuk menyinkronkan modal/dialog dengan tombol Back HP/Tablet.
 * Ketika modal dibuka, entry browser history ditambahkan.
 * Ketika pengguna menekan tombol Back di HP/tablet, modal akan tertutup terlebih dahulu,
 * bukan keluar dari aplikasi.
 * Jika modal ditutup melalui tombol 'X' atau 'Tutup' di layar, history otomatis disinkronkan.
 */
export function useModalBackHandler(
  isOpen: boolean,
  onClose: () => void,
  modalId: string
) {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!isOpen) return;

    const cleanup = registerModalBack(modalId, () => {
      onCloseRef.current();
    });

    return () => {
      cleanup();
    };
  }, [isOpen, modalId]);
}
