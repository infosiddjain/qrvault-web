import type { Metadata } from 'next';
import {
  IoMailOutline,
  IoGlobeOutline,
  IoArrowForward,
  IoTimeOutline,
} from 'react-icons/io5';
import PageHero from '@/components/PageHero';
import { pageMetadata } from '@/lib/seo';
import ContactForm from '@/components/ContactForm';
import { SUPPORT_EMAIL } from '@/components/site';

export const metadata: Metadata = pageMetadata({
  title: 'Contact',
  description:
    'Get in touch with the QR Vault team. Ask a question, report a bug or suggest a feature by email or through our contact form.',
  path: '/contact-us',
});

const CONTACT_OPTIONS = [
  {
    icon: IoMailOutline,
    label: 'Email support',
    value: SUPPORT_EMAIL,
    href: `mailto:${SUPPORT_EMAIL}`,
    external: false,
  },
  {
    icon: IoGlobeOutline,
    label: 'Website',
    value: 'qrvault-web.vercel.app',
    href: 'https://qrvault-web.vercel.app/',
    external: true,
  },
];

export default function ContactUsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you"
        subtitle="Have a question, found a bug or want to suggest a feature? Reach out any time."
      />

      <div className="mx-auto max-w-page px-6 py-16">
        <div className="grid gap-8 md:grid-cols-[1fr_1.3fr]">
          <div className="space-y-3">
            {CONTACT_OPTIONS.map(({ icon: Icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="panel group flex items-center gap-4 p-5 transition-colors hover:border-gold/40 hover:bg-raised"
              >
                <span className="icon-tile h-11 w-11 shrink-0">
                  <Icon size={20} aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-text">{label}</span>
                  <span className="mt-0.5 block truncate text-sm text-soft">{value}</span>
                </span>
                <IoArrowForward
                  className="text-muted transition group-hover:translate-x-0.5 group-hover:text-gold"
                  aria-hidden
                />
              </a>
            ))}

            <div className="flex items-start gap-3 rounded-2xl border border-dashed border-line p-5 text-sm text-soft">
              <IoTimeOutline className="mt-0.5 shrink-0 text-gold" size={18} aria-hidden />
              We usually reply within two business days.
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
