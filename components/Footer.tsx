import { useTranslations } from 'next-intl';

const BORDER = 'border-[3px] border-black';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className={`bg-black text-white ${BORDER} border-x-0 border-b-0`}>
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-8 flex flex-col gap-3 text-xs md:text-sm font-bold uppercase">
        <div className="flex items-center gap-2">
          <span className={`inline-block h-5 w-5 bg-[#ff5fa2] ${BORDER}`} />
          {t('logo')}
        </div>
        <p>{t('description')}</p>
        <p>{t('copyright', { year: new Date().getFullYear() })}</p>
        <a
          href="/privacy-policy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-[#ff5fa2] w-fit">
          {t('privacyPolicy')}
        </a>
      </div>
    </footer>
  );
}
