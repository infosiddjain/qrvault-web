'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { IoMenu, IoClose, IoArrowForward } from 'react-icons/io5';
import Logo from './Logo';
import { NAV_LINKS } from './site';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-ink/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-page items-center justify-between px-6 py-4">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {NAV_LINKS.map(link => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  active ? 'text-gold' : 'text-soft hover:text-text'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link href="/our-apps" className="btn-gold !px-5 !py-2.5">
            Get the app
            <IoArrowForward aria-hidden />
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-text md:hidden"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <IoClose size={20} /> : <IoMenu size={20} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="flex flex-col gap-1 border-t border-line bg-ink px-6 py-4 md:hidden"
        >
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-xl px-4 py-3 text-sm font-medium ${
                pathname === link.href
                  ? 'bg-gold/10 text-gold'
                  : 'text-soft hover:bg-card hover:text-text'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/our-apps" className="btn-gold mt-3">
            Get the app
          </Link>
        </nav>
      )}
    </header>
  );
}
