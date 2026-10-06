import type { Metadata } from 'next';
import { SITE_NAME } from '@/components/site';

// Per-page metadata with canonical URL and matching Open Graph / Twitter tags.
// Setting openGraph on a page drops the root's file-based image, so it is listed here explicitly.
const SHARE_IMAGE = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'QR Vault: create and password-protect your QR codes',
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [SHARE_IMAGE],
    },
  };
}
