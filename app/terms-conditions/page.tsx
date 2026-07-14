import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Terms & conditions — QR Vault',
};

const SECTIONS = [
  {
    title: '1. Acceptance of terms',
    body: 'By using this app, you agree to be bound by these terms and conditions. If you do not agree, please discontinue use of the app.',
  },
  {
    title: '2. Use of the app',
    body: 'You may use this app to create, view, and manage QR barcodes for personal or business purposes, provided such use is lawful.',
  },
  {
    title: '3. User responsibility',
    body: 'You are solely responsible for the content you encode into barcodes and for any password you set. We are not responsible for lost passwords or data loss due to device issues, app deletion, or storage clearing.',
  },
  {
    title: '4. Prohibited use',
    body: 'You agree not to use this app to store or distribute illegal, harmful, or infringing content.',
  },
  {
    title: '5. Limitation of liability',
    body: 'This app is provided "as is" without warranties of any kind. We are not liable for any damages arising from the use or inability to use the app.',
  },
  {
    title: '6. Changes to the service',
    body: 'We reserve the right to modify or discontinue the app, in whole or in part, at any time without prior notice.',
  },
  {
    title: '7. Governing law',
    body: 'These terms are governed by applicable local laws in your jurisdiction of residence.',
  },
];

export default function TermsConditionsPage() {
  return (
    <div>
      <PageHero title="Terms & conditions" subtitle="Please read carefully" />

      <div className="mx-auto max-w-3xl px-6 py-14">
        <div className="space-y-4">
          {SECTIONS.map(section => (
            <div
              key={section.title}
              className="rounded-2xl border border-border bg-white p-6"
            >
              <h2 className="text-sm font-bold text-dark">{section.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
