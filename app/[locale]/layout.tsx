import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { cookies, headers } from 'next/headers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import { GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';
import { LiveChatWidget } from '@livechat/widget-react';
import Chat from '@/components/Chat';

const workSans = Work_Sans({
  subsets: ['latin'],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta' });
  const title = t('title');
  const description = t('description');
  const ogTitle = t('ogTitle');
  const requestHeaders = await headers();
  const host = requestHeaders.get('host');
  const siteUrl = `https://${host}`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    openGraph: {
      type: 'website',
      url: '/',
      siteName: title,
      title: ogTitle,
      description,
      locale: locale === 'fr' ? 'fr_CA' : 'en_CA',
      images: [
        {
          url: '/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: ['/twitter-image.png'],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const consent = (await cookies()).get('cookie-consent')?.value;
  const accepted = consent === 'accepted';

  return (
    <html lang={locale} className={workSans.className}>
      {accepted ? <GoogleTagManager gtmId="GTM-TT9958HQ" /> : null}
      {/* <Script
        id="tawk-to"
        strategy="lazyOnload"
        src="https://embed.tawk.to/65e1f52f8d261e1b5f674f64/1hntabgim"
      /> */}

      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
          {/* <Chat /> */}
          {!accepted ? <CookieBanner /> : null}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
