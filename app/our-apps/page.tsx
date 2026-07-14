import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Our apps — QR Vault",
};

const APPS = [
  {
    id: "1",
    name: "Silent Reminder",
    desc: "Silent reminders with vibration alerts",
    icon: "notifications-outline",
    url: "https://play.google.com/store/apps/details?id=com.silentreminder",
    primary: false,
  },
  {
    id: "2",
    name: "Pickup VibeLines",
    desc: "Fun and clever pickup lines",
    icon: "chatbubble-ellipses-outline",
    url: "https://play.google.com/store/apps/details?id=com.pickupline",
  },
  {
    id: "3",
    name: "Hot Job",
    desc: "Find jobs that match you",
    icon: "briefcase-outline",
    url: "https://play.google.com/store/apps/details?id=com.hotjob",
  },
  {
    id: "4",
    name: "Dil Ki Bhakti",
    desc: "Spiritual blog & devotional content",
    icon: "flower-outline",
    url: "https://play.google.com/store/apps/details?id=com.dilkibhaktiapp",
  },
  {
    id: "5",
    name: "CpuKit",
    desc: "Android device info & diagnostics",
    icon: "hardware-chip-outline",
    url: "https://play.google.com/store/apps/details?id=com.cpukit",
  },
  {
    id: "6",
    name: "Calculator Zip",
    desc: "Fast, simple everyday calculator",
    icon: "calculator-outline",
    url: "https://play.google.com/store/apps/details?id=com.calculatorzip",
  },
  {
    id: "7",
    name: "Math Adventure",
    desc: "Fun math learning game for kids",
    icon: "school-outline",
    url: "https://play.google.com/store/apps/details?id=com.mathadvancer",
  },
];

export default function OurAppsPage() {
  return (
    <div>
      <PageHero title="Our apps" subtitle="More apps you might like" />

      <div className="mx-auto max-w-3xl px-6 py-14">
        <div className="space-y-4">
          {APPS.map((app) => (
            <a
              key={app.name}
              href={app.url}
              className={`flex items-center justify-between rounded-2xl border p-5 transition-colors ${
                app.primary
                  ? "border-primary bg-primaryLight"
                  : "border-border bg-white hover:border-primary"
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
