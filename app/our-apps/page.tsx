import type { Metadata } from 'next';
import type { IconType } from 'react-icons';
import {
  IoNotificationsOutline,
  IoChatbubbleEllipsesOutline,
  IoBriefcaseOutline,
  IoFlowerOutline,
  IoHardwareChipOutline,
  IoCalculatorOutline,
  IoSchoolOutline,
  IoLogoGooglePlaystore,
} from 'react-icons/io5';
import PageHero from '@/components/PageHero';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Our apps',
  description:
    'Discover more Android apps from the team behind QR Vault, including Silent Reminder, CpuKit, Calculator Zip and Math Adventure, all on Google Play.',
  path: '/our-apps',
});

const APPS: { name: string; desc: string; icon: IconType; url: string }[] = [
  { name: 'Silent Reminder', desc: 'Silent reminders with vibration alerts', icon: IoNotificationsOutline, url: 'https://play.google.com/store/apps/details?id=com.silentreminder' },
  { name: 'Pickup VibeLines', desc: 'Fun and clever pickup lines', icon: IoChatbubbleEllipsesOutline, url: 'https://play.google.com/store/apps/details?id=com.pickupline' },
  { name: 'Hot Job', desc: 'Find jobs that match you', icon: IoBriefcaseOutline, url: 'https://play.google.com/store/apps/details?id=com.hotjob' },
  { name: 'Dil Ki Bhakti', desc: 'Spiritual blog and devotional content', icon: IoFlowerOutline, url: 'https://play.google.com/store/apps/details?id=com.dilkibhaktiapp' },
  { name: 'CpuKit', desc: 'Android device info and diagnostics', icon: IoHardwareChipOutline, url: 'https://play.google.com/store/apps/details?id=com.cpukit' },
  { name: 'Calculator Zip', desc: 'Fast, simple everyday calculator', icon: IoCalculatorOutline, url: 'https://play.google.com/store/apps/details?id=com.calculatorzip' },
  { name: 'Math Adventure', desc: 'Fun math learning game for kids', icon: IoSchoolOutline, url: 'https://play.google.com/store/apps/details?id=com.mathadvancer' },
];

export default function OurAppsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Our apps"
        title="Thoughtfully made"
        subtitle="More apps from the team behind QR Vault, all on Google Play."
      />

      <div className="mx-auto max-w-page px-6 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {APPS.map(({ name, desc, icon: Icon, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="panel group flex flex-col p-6 transition-colors hover:border-gold/40 hover:bg-raised"
            >
              <span className="icon-tile h-12 w-12">
                <Icon size={22} aria-hidden />
              </span>
              <p className="mt-5 text-base font-semibold text-text">{name}</p>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-soft">{desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold">
                <IoLogoGooglePlaystore aria-hidden />
                Get it on Google Play
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
