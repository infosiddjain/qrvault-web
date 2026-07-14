import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Privacy policy — QR Vault',
};

const SECTIONS = [
  {
    title: '1. Data we collect',
    body: 'We do not require an account or collect personal information to use this app. Barcode content you create, including any titles, field values, and passwords you set, is stored only on your device.',
  },
  {
    title: '2. How your data is used',
    body: 'All barcode data stays local to your device storage and is never transmitted to our servers or shared with third parties.',
  },
  {
    title: '3. Password protection',
    body: 'Passwords you set for private barcodes are stored locally on your device to restrict access to that barcode within the app. Please choose a password you will remember, as it cannot be recovered by us.',
  },
  {
    title: '4. Third-party services',
    body: 'This app does not integrate third-party analytics or advertising SDKs that collect personal data.',
  },
  {
    title: '5. Data deletion',
    body: 'You can delete any barcode at any time from the home screen or the barcode detail view. Deleting the app will remove all locally stored data.',
  },
  {
    title: '6. Changes to this policy',
    body: 'We may update this privacy policy from time to time. Continued use of the app after changes constitutes acceptance of the updated policy.',
  },
  {
    title: '7. Contact',
    body: 'If you have questions about this privacy policy, please reach out via the Contact us page.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHero title="Privacy policy" subtitle="Last updated: July 2026" />

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
