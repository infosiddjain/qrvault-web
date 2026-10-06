import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/components/site';

const ROUTES: { path: string; priority: number; changeFrequency: 'monthly' | 'yearly' }[] = [
  { path: '/', priority: 1, changeFrequency: 'monthly' },
  { path: '/about-us', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/our-apps', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact-us', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms-conditions', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
