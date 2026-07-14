import Link from 'next/link';

const FEATURES = [
  {
    title: 'Create instantly',
    desc: 'Generate a QR code from custom fields in seconds.',
  },
  {
    title: 'Public or private',
    desc: 'Lock any barcode with a password, or keep it open.',
  },
  {
    title: 'Stored on-device',
    desc: 'Your data stays local — nothing is sent to a server.',
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-primaryLight px-4 py-1.5 text-xs font-semibold text-primary">
            Simple. Private. Fast.
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-dark md:text-5xl">
            Create and protect your QR codes
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            QR Vault helps you generate QR codes for anything — contact info,
            Wi-Fi credentials, notes — and lock the private ones with a
            password only you know.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/our-apps"
              className="rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-[1.02]"
            >
              Get the app
            </Link>
            <Link
              href="/about-us"
              className="rounded-xl border border-border bg-white px-7 py-3.5 text-sm font-bold text-dark transition-colors hover:bg-bg"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {FEATURES.map(feature => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-bg p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primaryLight text-primary font-bold">
                  ✓
                </div>
                <h3 className="text-base font-bold text-dark">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-dark md:text-3xl">
          Ready to try it?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted">
          Download QR Vault today and start creating your first barcode in
          under a minute.
        </p>
        <Link
          href="/our-apps"
          className="mt-7 inline-block rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/30"
        >
          View our apps
        </Link>
      </section>
    </div>
  );
}
