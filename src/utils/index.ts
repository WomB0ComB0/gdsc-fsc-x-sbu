import type { Metadata, Viewport } from 'next';

export async function constructMetadata({
  image = '/assets/images/logo.png',
  icons = '/assets/svgs/logo.svg',
  description = "FileSync is a versatile file synchronization service designed to seamlessly harmonize digital content across multiple devices and platforms. Whether you're collaborating with colleagues, sharing files with clients, or keeping your personal data organized, FileSync ensures that your documents, images, and other media remain up-to-date and accessible wherever you go. With robust encryption and real-time syncing capabilities, FileSync prioritizes security and efficiency, enabling users to effortlessly manage their files while maintaining control over their digital ecosystem. Experience seamless file management with FileSync – your go-to solution for staying connected and productive in today's dynamic digital landscape.",
  title = 'FileSync',
  noIndex = false,
}: MetadataProps = {}): Promise<Metadata> {
  return {
    title: {
      default: title,
      template: `${title} - %s`,
    },
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
      creator: '@OdnisMike',
    },
    icons: [
      {
        url: icons,
        href: icons,
      },
    ],
    manifest: '/pwa/manifest.json',
    metadataBase: new URL('https://mikeodnis.com/'),
    other: {
      currentYear: new Date().getFullYear(),
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

export async function constructViewport(): Promise<Viewport> {
  return {
    width: 'device-width',
    height: 'device-height',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 1,
    themeColor: '#F1F8FF',
  };
}
