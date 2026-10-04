'use client';

import { useEffect } from 'react';
import { IoCheckmarkCircle, IoAlertCircle, IoClose } from 'react-icons/io5';

export type ToastState = { type: 'success' | 'error'; message: string } | null;

export default function Toast({
  toast,
  onClose,
}: {
  toast: ToastState;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(onClose, 5000);
    return () => clearTimeout(id);
  }, [toast, onClose]);

  if (!toast) return null;
  const success = toast.type === 'success';
  const Icon = success ? IoCheckmarkCircle : IoAlertCircle;

  return (
    <div
      role={success ? 'status' : 'alert'}
      className="fixed bottom-6 left-4 right-4 z-[70] mx-auto flex max-w-sm items-start gap-3 rounded-xl border border-lineStrong bg-raised p-4 text-sm text-text shadow-card sm:left-auto sm:right-6 sm:mx-0"
    >
      <Icon
        size={20}
        className={`mt-0.5 shrink-0 ${success ? 'text-gold' : 'text-danger'}`}
        aria-hidden
      />
      <p className="flex-1">{toast.message}</p>
      <button
        type="button"
        onClick={onClose}
        aria-label="Dismiss"
        className="shrink-0 text-muted transition hover:text-text"
      >
        <IoClose size={18} />
      </button>
    </div>
  );
}
