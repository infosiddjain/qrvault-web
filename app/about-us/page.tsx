import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'About us — QR Vault',
};

const STATS = [
  { title: 'Fast', desc: 'Generate a code in seconds' },
  { title: 'Private', desc: 'Password protection built in' },
  { title: 'Local', desc: 'Your data stays on your device' },
];

export default function AboutUsPage() {
  return (
    <div>
      <PageHero title="About us" subtitle="Who we are and why we built this" />

      <div className="mx-auto max-w-3xl px-6 py-14">
        <p className="text-sm leading-relaxed text-muted md:text-base">
          QR Vault helps you create, organize, and securely store your QR
          codes in one simple place. Whether you&apos;re sharing contact
          details, Wi-Fi credentials, or private notes, you can generate a
          code in seconds and keep it protected with a password whenever you
          need extra privacy.
        </p>
        <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">
          We built this app with a focus on simplicity, speed, and privacy —
          no accounts required, no data sent anywhere it doesn&apos;t need to
          go. Everything stays on your device.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {STATS.map(stat => (
            <div
              key={stat.title}
              className="rounded-2xl border border-border bg-white p-5 text-center"
            >
              <p className="text-base font-bold text-dark">{stat.title}</p>
              <p className="mt-1 text-xs text-muted">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
