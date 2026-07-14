import Link from 'next/link';

const FOOTER_LINKS = [
  { href: '/about-us', label: 'About us' },
  { href: '/our-apps', label: 'Our apps' },
  { href: '/contact-us', label: 'Contact us' },
  { href: '/privacy-policy', label: 'Privacy policy' },
  { href: '/terms-conditions', label: 'Terms & conditions' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white font-bold">
                Q
              </div>
              <span className="text-lg font-bold text-dark">QR Vault</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Create, organize, and password-protect your QR codes — all in
              one simple, private app.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-2 sm:grid-cols-3">
            {FOOTER_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted">
          © {new Date().getFullYear()} QR Vault. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
