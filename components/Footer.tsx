import Link from 'next/link';
import { IoMailOutline, IoShieldCheckmarkOutline } from 'react-icons/io5';
import Logo from './Logo';
import { NAV_LINKS, LEGAL_LINKS, SUPPORT_EMAIL } from './site';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-page px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-soft">
              Create, organise and password-protect your QR codes in one quiet,
              private app.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-xs text-muted">
              <IoShieldCheckmarkOutline className="text-gold" aria-hidden />
              No accounts. No tracking. On-device only.
            </p>
          </div>

          <div>
            <p className="eyebrow !text-muted">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-soft transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow !text-muted">Legal & support</p>
            <ul className="mt-4 space-y-2.5">
              {LEGAL_LINKS.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-soft transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="inline-flex items-center gap-2 text-sm text-soft transition-colors hover:text-gold"
                >
                  <IoMailOutline aria-hidden />
                  Email support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <span>&copy; {new Date().getFullYear()} QR Vault. All rights reserved.</span>
          <span>Crafted for privacy.</span>
        </div>
      </div>
    </footer>
  );
}
