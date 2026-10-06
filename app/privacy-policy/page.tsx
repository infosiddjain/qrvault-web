import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import { pageMetadata } from '@/lib/seo';
import LegalContent from '@/components/LegalContent';

export const metadata: Metadata = pageMetadata({
  title: 'Privacy policy',
  description:
    'QR Vault privacy policy: no account needed, no personal data collected. Your QR codes and passwords are stored only on your device.',
  path: '/privacy-policy',
});

const SECTIONS = [
  {
    title: 'Data we collect',
    body: 'We do not require an account or collect personal information to use this app. Barcode content you create, including any titles, field values, and passwords you set, is stored only on your device.',
  },
  {
    title: 'How your data is used',
    body: 'All barcode data stays local to your device storage and is never transmitted to our servers or shared with third parties.',
  },
  {
    title: 'Password protection',
    body: 'Passwords you set for private barcodes are stored locally on your device to restrict access to that barcode within the app. Please choose a password you will remember, as it cannot be recovered by us.',
  },
  {
    title: 'Third-party services',
    body: 'This app does not integrate third-party analytics or advertising SDKs that collect personal data.',
  },
  {
    title: 'Data deletion',
    body: 'You can delete any barcode at any time from the home screen or the barcode detail view. Deleting the app will remove all locally stored data.',
  },
  {
    title: 'Changes to this policy',
    body: 'We may update this privacy policy from time to time. Continued use of the app after changes constitutes acceptance of the updated policy.',
  },
  {
    title: 'Contact',
    body: 'If you have questions about this privacy policy, please reach out via the Contact page.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHero eyebrow="Legal" title="Privacy policy" subtitle="Last updated July 2026" />
      <LegalContent sections={SECTIONS} />
    </div>
  );
}
