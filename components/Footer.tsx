import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const BORDER = 'border-[3px] border-black';

export default function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Nav');

  return (
    <footer className={`bg-black text-white ${BORDER} border-x-0 border-b-0`}>
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg md:text-2xl font-black tracking-tight uppercase w-fit">
            <span className={`inline-block h-5 w-5 md:h-6 md:w-6 bg-[#ff5fa2] ${BORDER}`} />
            {t('logo')}
          </Link>

          <nav className="flex flex-col gap-3 md:items-end text-sm md:text-base font-extrabold uppercase">
            <Link href="/about" className="w-fit hover:text-[#ff5fa2]">
              {tNav('about')}
            </Link>
            <Link href="/resources" className="w-fit hover:text-[#ff5fa2]">
              {tNav('resources')}
            </Link>
            <Link href="/#faq" className="w-fit hover:text-[#ff5fa2]">
              {tNav('faq')}
            </Link>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t-[3px] border-white flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs md:text-sm font-bold uppercase">
          <p>{t('copyright', { year: new Date().getFullYear() })}</p>
          <a
            href="/privacy-policy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-[#ff5fa2] w-fit">
            {t('privacyPolicy')}
          </a>
        </div>
      </div>
    </footer>
  );
}
