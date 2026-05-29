'use client';

import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';

const BORDER = 'border-[3px] border-black';
const SHADOW = 'shadow-[5px_5px_0_0_#000] md:shadow-[6px_6px_0_0_#000]';
const SHADOW_LG = 'shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000]';
const PRESS =
  'transition-all active:translate-x-[3px] active:translate-y-[3px] active:shadow-[2px_2px_0_0_#000] md:hover:translate-x-[3px] md:hover:translate-y-[3px] md:hover:shadow-[3px_3px_0_0_#000]';
const LINK =
  'font-extrabold inline-block cursor-pointer transition-transform duration-150 hover:scale-110 active:scale-110';

export default function Header() {
  const t = useTranslations('Nav');
  const locale = useLocale();
  const pathname = usePathname();
  const otherLocale = locale === 'en' ? 'fr' : 'en';
  const otherLocaleLabel = otherLocale === 'fr' ? 'Français' : 'English';

  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 md:static z-50 bg-[#f9f5f2]">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg md:text-2xl font-black tracking-tight uppercase">
          <span
            className={`inline-block h-5 w-5 md:h-6 md:w-6 bg-[#ff5fa2] ${BORDER}`}
          />
          {t('logo')}
        </Link>

        <div className="hidden md:flex">
          <Link href="/#about" className={LINK}>
            {t('about')}
          </Link>
        </div>
        <div className="hidden md:flex">
          <Link href="/resources" className={LINK}>
            {t('resources')}
          </Link>
        </div>
        <div className="hidden md:flex">
          <Link href="/#faq" className={LINK}>
            {t('faq')}
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={pathname}
            locale={otherLocale}
            className={`bg-black text-white px-4 py-2 font-black uppercase text-xs md:text-sm ${BORDER} ${SHADOW} ${PRESS}`}>
            {otherLocaleLabel}
          </Link>

          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
            className={`md:hidden relative z-50 bg-black text-white px-3 py-2 ${BORDER} ${SHADOW} ${PRESS} flex flex-col gap-[3px] items-center justify-center`}>
            <span className="block h-0.75 w-5 bg-white" />
            <span className="block h-0.75 w-5 bg-white" />
            <span className="block h-0.75 w-5 bg-white" />
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={close}
          aria-hidden
        />
      )}

      {open && (
        <div
          id="mobile-menu"
          className={`md:hidden absolute right-4 top-full mt-3 z-40 w-56 bg-white ${BORDER} ${SHADOW_LG} -rotate-1 p-5`}>
          <ul className="flex flex-col gap-4 text-lg font-black uppercase tracking-tight">
            <li>
              <Link href="/#about" onClick={close} className={LINK}>
                {t('about')}
              </Link>
            </li>
            <li>
              <Link href="/resources" onClick={close} className={LINK}>
                {t('resources')}
              </Link>
            </li>
            <li>
              <Link href="/#faq" onClick={close} className={LINK}>
                {t('faq')}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

