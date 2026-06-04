'use client';

import { useTranslations } from 'next-intl';
import { setConsentCookie, declineConsentCookie } from '@/lib/actions/consent';

export default function CookieBanner() {
  const t = useTranslations('CookieConsent');

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t('title')}
      className="fixed inset-x-0 bottom-0 z-50 bg-[#ffe600] border-t-[3px] border-black">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-4 md:py-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <p className="text-sm md:text-base font-medium text-black flex-1">
          {t('message')}{' '}
          <a
            href="/privacy-policy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 font-bold">
            {t('learnMore')}
          </a>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={() => declineConsentCookie()}
            className="px-4 py-2 border-[3px] border-black bg-white text-black text-sm font-extrabold uppercase hover:bg-black hover:text-white">
            {t('reject')}
          </button>
          <button
            type="button"
            onClick={() => setConsentCookie()}
            className="px-4 py-2 border-[3px] border-black bg-black text-white text-sm font-extrabold uppercase hover:bg-[#ff5fa2] hover:text-black">
            {t('accept')}
          </button>
        </div>
      </div>
    </div>
  );
}
