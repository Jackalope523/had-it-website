import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import { GoogleTagManager } from '@next/third-parties/google';

const workSans = Work_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'We Hear You',
  description:
    'Quebec-based psychosocial support. Free, confidential, non-judgmental listening by chat, text, email, or phone.',
};

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
    <html lang="en" className={`${workSans.variable} h-full antialiased`}>
      {accepted ? <GoogleTagManager gtmId="GTM-TT9958HQ" /> : null}

      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
          {!accepted ? <CookieBanner /> : null}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

