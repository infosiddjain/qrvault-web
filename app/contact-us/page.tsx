import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';

const CONTACT_OPTIONS = [
  { label: 'Email us', value: 'support@qrvault.app', href: 'mailto:support@qrvault.app' },
  { label: 'Website', value: 'www.qrvault.app', href: 'https://www.qrvault.app' },
  { label: 'Twitter', value: '@qrvaultapp', href: 'https://twitter.com/qrvaultapp' },
];

export default function ContactUsPage() {
  return (
    <div>
      <PageHero
        title="Contact us"
        subtitle="Have a question, found a bug, or want to suggest a feature? We'd love to hear from you."
      />

      <div className="mx-auto max-w-4xl px-6 py-14">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            {CONTACT_OPTIONS.map(option => (
              <a
                key={option.label}
                href={option.href}
                className="flex items-center justify-between rounded-2xl border border-border bg-white p-5 transition-colors hover:border-primary"
              >
                <div>
                  <p className="text-sm font-bold text-dark">{option.label}</p>
                  <p className="mt-1 text-xs text-muted">{option.value}</p>
                </div>
                <span className="text-muted">→</span>
              </a>
            ))}
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
