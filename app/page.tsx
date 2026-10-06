import Link from 'next/link';
import type { IconType } from 'react-icons';
import {
  IoArrowForward,
  IoFlashOutline,
  IoLockClosedOutline,
  IoPhonePortraitOutline,
  IoShareSocialOutline,
  IoSearchOutline,
  IoLayersOutline,
  IoCreateOutline,
  IoShieldCheckmarkOutline,
  IoQrCodeOutline,
  IoLockClosed,
  IoGlobeOutline,
  IoCheckmarkCircle,
} from 'react-icons/io5';
import QrPattern from '@/components/QrPattern';

const FEATURES: { icon: IconType; title: string; desc: string }[] = [
  { icon: IoFlashOutline, title: 'Create in seconds', desc: 'Combine names, phone numbers, links, Wi-Fi and notes into a single code.' },
  { icon: IoLockClosedOutline, title: 'Password protection', desc: 'Lock sensitive codes so only you can open them inside the app.' },
  { icon: IoPhonePortraitOutline, title: 'Stored on-device', desc: 'Nothing is uploaded. Your vault lives only on your phone.' },
  { icon: IoShareSocialOutline, title: 'Share as an image', desc: 'Send any public code as a crisp, high-resolution PNG.' },
  { icon: IoSearchOutline, title: 'Find it fast', desc: 'Search by title and filter by public or private in a tap.' },
  { icon: IoLayersOutline, title: 'Smart encoding', desc: 'Single links, phones and emails open directly in any camera app.' },
];

const STEPS = [
  { icon: IoCreateOutline, title: 'Add your details', desc: 'Pick field types and fill them in. Give your code a title.' },
  { icon: IoShieldCheckmarkOutline, title: 'Choose visibility', desc: 'Keep it public, or lock it with a password of your choice.' },
  { icon: IoQrCodeOutline, title: 'Scan or share', desc: 'Open it from your vault any time, or share it as an image.' },
];

function PhoneMockup() {
  const rows = [
    { title: 'Business card', meta: '3 fields', locked: false },
    { title: 'Home Wi-Fi', meta: 'Locked', locked: true },
    { title: 'Portfolio', meta: '1 field', locked: false },
  ];
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <div aria-hidden className="absolute -inset-10 rounded-full bg-gold/15 blur-3xl" />
      <div className="relative rounded-[2.6rem] border border-lineStrong bg-surface p-3 shadow-card">
        <div className="rounded-[2rem] border border-line bg-ink px-5 pb-6 pt-8">
          <p className="eyebrow">Your vault</p>
          <p className="mt-1 text-2xl font-bold tracking-tight text-text">My Codes</p>

          <div className="mt-5 rounded-2xl border border-gold/30 p-2">
            <div className="rounded-xl bg-white p-2">
              <QrPattern className="h-auto w-full" />
            </div>
          </div>

          <div className="mt-5 space-y-2.5">
            {rows.map(r => (
              <div key={r.title} className="flex items-center gap-3 rounded-xl border border-line bg-card p-2.5">
                <span className="icon-tile h-9 w-9">
                  {r.locked ? <IoLockClosed size={15} /> : <IoQrCodeOutline size={15} />}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-semibold text-text">{r.title}</p>
                  <p className="text-[11px] text-muted">{r.meta}</p>
                </div>
                {r.locked ? (
                  <IoLockClosedOutline className="text-muted" size={14} />
                ) : (
                  <IoGlobeOutline className="text-muted" size={14} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,176,106,0.12),transparent_60%)]" />
        <div className="relative mx-auto grid max-w-page items-center gap-16 px-6 pb-24 pt-16 md:grid-cols-[1.15fr_1fr] md:pt-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium text-gold">
              <IoShieldCheckmarkOutline aria-hidden />
              Private by design
            </span>
            <h1 className="mt-7 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-text md:text-6xl">
              Your QR codes,
              <br />
              <span className="italic text-gold">beautifully</span> kept.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-soft md:text-lg">
              Create QR codes for contact details, Wi-Fi, links and notes. Lock the
              private ones with a password. Everything stays on your device.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/our-apps" className="btn-gold">
                Get the app
                <IoArrowForward aria-hidden />
              </Link>
              <Link href="/about-us" className="btn-outline">
                Learn more
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-soft">
              {['No account needed', 'Works offline', 'Free to use'].map(t => (
                <li key={t} className="inline-flex items-center gap-2">
                  <IoCheckmarkCircle className="text-gold" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <PhoneMockup />
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-line bg-surface py-24">
        <div className="mx-auto max-w-page px-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Features</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-text md:text-4xl">
              Everything you need, nothing you don&apos;t.
            </h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card p-7 transition-colors hover:bg-raised">
                <span className="icon-tile h-11 w-11">
                  <Icon size={20} aria-hidden />
                </span>
                <h3 className="mt-5 text-base font-semibold text-text">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-soft">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-page px-6 py-24">
        <div className="text-center">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-text md:text-4xl">
            Three steps. Under a minute.
          </h2>
        </div>
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <li key={title} className="panel relative p-7">
              <span className="absolute right-6 top-6 font-display text-3xl text-lineStrong">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="icon-tile h-11 w-11">
                <Icon size={20} aria-hidden />
              </span>
              <h3 className="mt-5 text-base font-semibold text-text">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-soft">{desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-page overflow-hidden rounded-3xl border border-gold/30 bg-card px-8 py-16 text-center md:px-16">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,176,106,0.14),transparent_65%)]" />
          <div className="relative">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-text md:text-4xl">
              Ready to open your vault?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-soft md:text-base">
              Download QR Vault and create your first code in under a minute.
            </p>
            <Link href="/our-apps" className="btn-gold mt-8">
              View our apps
              <IoArrowForward aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
