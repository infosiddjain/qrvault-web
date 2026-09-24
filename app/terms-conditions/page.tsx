import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import LegalContent from '@/components/LegalContent';

export const metadata: Metadata = {
  title: 'Terms & conditions | QR Vault',
};

const SECTIONS = [
  {
    title: 'Acceptance of terms',
    body: 'By using this app, you agree to be bound by these terms and conditions. If you do not agree, please discontinue use of the app.',
  },
  {
    title: 'Use of the app',
    body: 'You may use this app to create, view, and manage QR barcodes for personal or business purposes, provided such use is lawful.',
  },
  {
    title: 'User responsibility',
    body: 'You are solely responsible for the content you encode into barcodes and for any password you set. We are not responsible for lost passwords or data loss due to device issues, app deletion, or storage clearing.',
  },
  {
    title: 'Prohibited use',
    body: 'You agree not to use this app to store or distribute illegal, harmful, or infringing content.',
  },
  {
    title: 'Limitation of liability',
    body: 'This app is provided "as is" without warranties of any kind. We are not liable for any damages arising from the use or inability to use the app.',
  },
  {
    title: 'Changes to the service',
    body: 'We reserve the right to modify or discontinue the app, in whole or in part, at any time without prior notice.',
  },
  {
    title: 'Governing law',
    body: 'These terms are governed by applicable local laws in your jurisdiction of residence.',
  },
];

export default function TermsConditionsPage() {
  return (
    <div>
      <PageHero eyebrow="Legal" title="Terms & conditions" subtitle="Please read these terms carefully before using QR Vault." />
      <LegalContent sections={SECTIONS} />
    </div>
  );
}
