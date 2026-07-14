import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Our apps — QR Vault',
};

const APPS = [
  {
    name: 'QR Vault',
    desc: 'Create and password-protect your QR codes',
    url: 'https://play.google.com/store',
    primary: true,
  },
  {
    name: 'Notes Vault',
    desc: 'Private, encrypted note-taking',
    url: 'https://play.google.com/store',
  },
  {
    name: 'Habit Loop',
    desc: 'Simple daily habit tracker',
    url: 'https://play.google.com/store',
  },
  {
    name: 'Expense Snap',
    desc: 'Track expenses in seconds',
    url: 'https://play.google.com/store',
  },
];

export default function OurAppsPage() {
  return (
    <div>
      <PageHero title="Our apps" subtitle="More apps you might like" />

      <div className="mx-auto max-w-3xl px-6 py-14">
        <div className="space-y-4">
          {APPS.map(app => (
            <a
              key={app.name}
              href={app.url}
              className={`flex items-center justify-between rounded-2xl border p-5 transition-colors ${
                app.primary
                  ? 'border-primary bg-primaryLight'
                  : 'border-border bg-white hover:border-primary'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white font-bold">
                  {app.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-dark">{app.name}</p>
                  <p className="mt-0.5 text-xs text-muted">{app.desc}</p>
                </div>
              </div>
              <span className="rounded-full bg-white px-4 py-1.5 text-xs font-bold text-primary shadow-sm">
                Get
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
