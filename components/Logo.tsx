import Link from 'next/link';
import { IoQrCode } from 'react-icons/io5';

export default function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="QR Vault home">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold text-onGold transition group-hover:bg-goldLight">
        <IoQrCode size={18} aria-hidden />
      </span>
      <span className="font-display text-xl font-semibold tracking-tight text-text">
        QR Vault
      </span>
    </Link>
  );
}
