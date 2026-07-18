import { Metadata } from 'next';

export function constructMetadata({
  title = 'Modern Next.js Frontend Template',
  description = 'A production-ready, batteries-included Next.js frontend template designed to save developers time with pre-configured tools.',
  image = '/logo/logo.png',
  icons = '/favicon.ico',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@frontend-template',
    },
    icons,
    metadataBase: new URL('https://frontend-template.example.com'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
