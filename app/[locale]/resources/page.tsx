import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const BORDER = 'border-[3px] border-black';
const SHADOW = 'shadow-[5px_5px_0_0_#000] md:shadow-[6px_6px_0_0_#000]';
const SHADOW_LG = 'shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000]';
const PRESS =
  'transition-all active:translate-x-[3px] active:translate-y-[3px] active:shadow-[2px_2px_0_0_#000] md:hover:translate-x-[3px] md:hover:translate-y-[3px] md:hover:shadow-[3px_3px_0_0_#000]';

const FOOD_KEYS = [
  'cantineStJacques',
  'moissonQuebec',
  'moissonOutaouais',
  'moissonEstrie',
] as const;

const HOUSING_KEYS = [
  'dansLaRue',
  'villeQuebec',
  'gatineauHousing',
  'omhSherbrooke',
] as const;

const LISTENING_KEYS = [
  'telAideMontreal',
  'telAideQuebec',
  'centreAide247',
  'secoursAmitieEstrie',
] as const;

const TAG_COLORS = [
  'bg-yellow-300',
  'bg-[#ff5fa2]',
  'bg-lime-300',
  'bg-[#22d3ee]',
];

type Section = 'food' | 'housing' | 'listening';

function ResourceSection({
  section,
  itemKeys,
  tagColor,
}: {
  section: Section;
  itemKeys: readonly string[];
  tagColor: string;
}) {
  const t = useTranslations('Resources');
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-20">
      <p
        className={`inline-block ${tagColor} ${BORDER} px-3 py-1 text-[11px] md:text-xs font-black uppercase`}>
        {t(`${section}.tag`)}
      </p>
      <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95]">
        {t(`${section}.headingLine1`)}
        <br />
        {t(`${section}.headingLine2`)}
      </h2>
      <p className="mt-4 max-w-md text-base md:text-lg font-medium">
        {t(`${section}.subtitle`)}
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {itemKeys.map((key, i) => (
          <a
            key={key}
            href={t(`${section}.items.${key}.href`)}
            target="_blank"
            rel="noopener noreferrer"
            className={`block bg-white ${BORDER} ${SHADOW_LG} ${PRESS} p-6 md:p-7`}>
            <div
              className={`inline-block ${
                TAG_COLORS[i % TAG_COLORS.length]
              } ${BORDER} px-2 py-1 text-[10px] font-black uppercase`}>
              {t(`${section}.items.${key}.city`)}
            </div>
            <h3 className="mt-3 text-2xl md:text-3xl font-black uppercase tracking-tight">
              {t(`${section}.items.${key}.title`)}
            </h3>
            <p className="mt-2 font-medium">
              {t(`${section}.items.${key}.body`)}
            </p>
            <span
              className={`mt-5 inline-block bg-black text-white ${BORDER} px-3 py-2 text-xs md:text-sm font-black uppercase`}>
              {t(`${section}.visitCta`)}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function Resources() {
  const t = useTranslations('Resources');
  const locale = useLocale();
  const otherLocale = locale === 'en' ? 'fr' : 'en';
  const otherLocaleLabel = otherLocale === 'fr' ? 'Français' : 'English';

  return (
    <div className="flex-1 bg-[#f9f5f2] text-[#282924] font-sans">
      <header className="bg-[#f9f5f2]">
        <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg md:text-2xl font-black tracking-tight uppercase">
            <span
              className={`inline-block h-5 w-5 md:h-6 md:w-6 bg-[#ff5fa2] ${BORDER}`}
            />
            {t('nav.logo')}
          </Link>
          <Link
            href="/"
            className="font-extrabold inline-block cursor-pointer transition-transform duration-150 hover:scale-110 active:scale-110">
            {t('nav.home')}
          </Link>
          <p className="font-extrabold inline-block cursor-pointer transition-transform duration-150 hover:scale-110 active:scale-110">
            {t('nav.about')}
          </p>
          <Link
            href="/resources"
            className="font-extrabold inline-block cursor-pointer transition-transform duration-150 hover:scale-110 active:scale-110">
            {t('nav.resources')}
          </Link>
          <p className="font-extrabold inline-block cursor-pointer transition-transform duration-150 hover:scale-110 active:scale-110">
            {t('nav.faq')}
          </p>
          <Link
            href="/resources"
            locale={otherLocale}
            className={`bg-black text-white px-4 py-2 font-black uppercase text-xs md:text-sm ${BORDER} ${SHADOW} ${PRESS}`}>
            {otherLocaleLabel}
          </Link>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-20 text-center">
        <span
          className={`inline-flex items-center gap-2 bg-[#22d3ee] ${BORDER} px-3 py-1 text-[11px] md:text-xs font-black uppercase`}>
          <span className="h-2 w-2 bg-black" />
          {t('hero.badge')}
        </span>
        <h1 className="mt-5 text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight leading-[0.9]">
          {t('hero.titleLead')}{' '}
          <span
            className={`inline-block bg-[#ff5fa2] ${BORDER} px-2 -rotate-1 mt-2`}>
            {t('hero.titleEmphasis')}
          </span>
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-base md:text-xl leading-snug font-medium">
          {t('hero.subtitle')}
        </p>
      </section>

      <ResourceSection
        section="food"
        itemKeys={FOOD_KEYS}
        tagColor="bg-yellow-300"
      />

      <ResourceSection
        section="housing"
        itemKeys={HOUSING_KEYS}
        tagColor="bg-lime-300"
      />

      <ResourceSection
        section="listening"
        itemKeys={LISTENING_KEYS}
        tagColor="bg-[#ff5fa2]"
      />

      <footer className={`bg-black text-white ${BORDER} border-x-0 border-b-0`}>
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-8 flex flex-col gap-3 text-xs md:text-sm font-bold uppercase">
          <div className="flex items-center gap-2">
            <span className={`inline-block h-5 w-5 bg-[#ff5fa2] ${BORDER}`} />
            {t('footer.logo')}
          </div>
          <p>{t('footer.description')}</p>
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </footer>
    </div>
  );
}
