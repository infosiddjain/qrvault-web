import type { Metadata } from 'next';
import {
  IoFlashOutline,
  IoLockClosedOutline,
  IoPhonePortraitOutline,
} from 'react-icons/io5';
import PageHero from '@/components/PageHero';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'About',
  description:
    'Why we built QR Vault: a fast, private QR code app with built-in password protection, no accounts and no tracking. Everything stays on your device.',
  path: '/about-us',
});

const PILLARS = [
  { icon: IoFlashOutline, title: 'Fast', desc: 'A new code in seconds, with no sign-up standing in the way.' },
  { icon: IoLockClosedOutline, title: 'Private', desc: 'Password protection is built in for anything sensitive.' },
  { icon: IoPhonePortraitOutline, title: 'On-device', desc: 'Your data stays on your phone. We never see it.' },
];

export default function AboutUsPage() {
  return (
    <div>
      <PageHero
        eyebrow="About"
        title="Built for quiet confidence"
        subtitle="Why we made QR Vault, and the principles behind it."
      />

      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-6 text-base leading-relaxed text-soft md:text-lg">
          <p>
            QR Vault helps you create, organise and securely keep your QR codes
            in one place. Whether you&apos;re sharing contact details, Wi-Fi
            access or private notes, you can make a code in seconds and lock it
            with a password whenever it needs extra privacy.
          </p>
          <p>
            We built it around simplicity, speed and privacy. No accounts, no
            servers, no tracking. Everything stays on your device.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="panel p-6">
              <span className="icon-tile h-11 w-11">
                <Icon size={20} aria-hidden />
              </span>
              <p className="mt-5 text-base font-semibold text-text">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-soft">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
