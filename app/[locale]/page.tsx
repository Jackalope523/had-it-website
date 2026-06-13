import { useTranslations } from 'next-intl';

const BORDER = 'border-[3px] border-black';
const SHADOW = 'shadow-[5px_5px_0_0_#000] md:shadow-[6px_6px_0_0_#000]';
const SHADOW_LG = 'shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000]';
const PRESS =
  'transition-all active:translate-x-[3px] active:translate-y-[3px] active:shadow-[2px_2px_0_0_#000] md:hover:translate-x-[3px] md:hover:translate-y-[3px] md:hover:shadow-[3px_3px_0_0_#000]';

const DEFAULT_FEELING_COLOR = 'bg-white';

type Feeling = { key: string; color?: string };

const ACTIVE_CONCERN = 'disengagement';

const ROW1: readonly Feeling[] = [
  { key: 'stuck' },
  { key: 'hadEnough' },
  { key: 'stressed', color: 'bg-[#22d3ee]' },
  { key: 'nobodyListening' },
];

const ROW2: readonly Feeling[] = [
  { key: 'misunderstood' },
  { key: 'nothingLeft' },
  { key: 'lifeUnfair' },
  { key: 'stuck', color: 'bg-yellow-300' },
  { key: 'concernedForOthers' },
  { key: 'needHelp', color: 'bg-orange-300' },
];

const ROW3: readonly Feeling[] = [
  { key: 'worldUnjust' },
  { key: 'bullied' },
  { key: 'hated' },
  { key: 'excluded' },
  { key: 'trapped', color: 'bg-[#ff5fa2]' },
];

const WAY_CARDS = [
  { key: 'chat', href: '#how', color: 'bg-[#ff5fa2]' },
  { key: 'phone', href: 'tel:+15142684505', color: 'bg-lime-300' },
  { key: 'text', href: 'sms:+15142684505', color: 'bg-yellow-300' },
  { key: 'email', href: 'mailto:here@hadit.ca', color: 'bg-[#22d3ee]' },
];

const HESITATING_KEYS = [
  'notInCrisis',
  'anonymity',
  'justVent',
  'reallyFree',
] as const;

const STATS_KEYS = ['confidential', 'cost', 'replyTime', 'location'] as const;

const FAQ_KEYS = [
  'hours',
  'languages',
  'location',
  'afterReachOut',
  'callback',
] as const;

function MarqueeRow({
  items,
  reverse = false,
  textClass = 'text-3xl md:text-5xl',
}: {
  items: { label: string; color?: string }[];
  reverse?: boolean;
  textClass?: string;
}) {
  const extendedItems = [
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
  ];
  return (
    <div className="overflow-hidden">
      <div className={reverse ? 'marquee-track-reverse' : 'marquee-track'}>
        {extendedItems.map((item, i) => (
          <span
            key={i}
            className={`mx-2 my-1 inline-flex items-center ${
              item.color ?? DEFAULT_FEELING_COLOR
            } ${BORDER} px-4 py-2 font-black uppercase tracking-tight whitespace-nowrap ${textClass}`}>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const t = useTranslations('Home');
  const feelings1 = ROW1.map((f) => ({
    label: t(`concerns.${ACTIVE_CONCERN}.row1.${f.key}`),
    color: f.color,
  }));
  const feelings2 = ROW2.map((f) => ({
    label: t(`concerns.${ACTIVE_CONCERN}.row2.${f.key}`),
    color: f.color,
  }));
  const feelings3 = ROW3.map((f) => ({
    label: t(`concerns.${ACTIVE_CONCERN}.row3.${f.key}`),
    color: f.color,
  }));

  return (
    <div className="flex-1 bg-[#f9f5f2] text-[#282924] font-sans">
      <section className="relative overflow-hidden">
        <div className="mt-10 space-y-2 md:space-y-3">
          <MarqueeRow items={feelings1} />
          <MarqueeRow items={feelings2} />
          <MarqueeRow items={feelings3} />
        </div>

        <div className="mx-auto max-w-6xl px-4 md:px-6 my-10 text-center">
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
        </div>

        <div className="space-y-2 md:space-y-3">
          <MarqueeRow items={feelings1} reverse />
          <MarqueeRow items={feelings2} reverse />
          <MarqueeRow items={feelings3} reverse />
        </div>
      </section>

      <section
        id="how"
        className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
        <p
          className={`inline-block bg-[#22d3ee] ${BORDER} px-3 py-1 text-[11px] md:text-xs font-black uppercase`}>
          {t('ways.tag')}
        </p>
        <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95]">
          {t.rich('ways.heading', { br: () => <br /> })}
        </h2>
        <p className="mt-4 max-w-md text-base md:text-lg font-medium">
          {t('ways.subtitle')}
        </p>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {WAY_CARDS.map((card, i) => (
            <a
              key={card.key}
              href={card.href}
              className={`group relative flex flex-col ${
                card.color
              } ${BORDER} ${SHADOW_LG} ${PRESS} p-6 md:p-7 ${
                i % 2 === 0 ? 'md:-rotate-1' : 'md:rotate-1'
              }`}>
              <div
                className={`absolute -top-3 right-4 bg-black text-white ${BORDER} px-2 py-1 text-[10px] md:text-xs font-black uppercase`}>
                {t(`ways.${card.key}.tag`)}
              </div>
              <h3 className="mt-1 text-2xl md:text-3xl font-black uppercase tracking-tight">
                {t(`ways.${card.key}.title`)}
              </h3>
              <p className="mt-2 flex-1 font-medium leading-snug">
                {t(`ways.${card.key}.body`)}
              </p>
              <span
                className={`mt-5 inline-flex items-center justify-between bg-white ${BORDER} px-3 py-2 text-xs md:text-sm font-black uppercase`}>
                {t(`ways.${card.key}.cta`)}
                <span aria-hidden>→</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
          <p
            className={`inline-block bg-black text-white ${BORDER} px-3 py-1 text-[11px] md:text-xs font-black uppercase`}>
            {t('hesitating.tag')}
          </p>
          <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95]">
            {t('hesitating.heading')}
          </h2>

          <div className="mt-10 space-y-5">
            {HESITATING_KEYS.map((k) => (
              <div
                key={k}
                className={`bg-white ${BORDER} ${SHADOW} p-5 md:p-6 grid md:grid-cols-12 gap-4 md:gap-6`}>
                <div className="md:col-span-5">
                  <span
                    className={`inline-block bg-zinc-200 ${BORDER} px-2 py-1 text-[10px] font-black uppercase`}>
                    {t('hesitating.youLabel')}
                  </span>
                  <p className="mt-2 text-lg md:text-xl font-black uppercase tracking-tight leading-snug">
                    &ldquo;{t(`hesitating.${k}.you`)}&rdquo;
                  </p>
                </div>
                <div className="md:col-span-7 md:border-l-[3px] md:border-black md:pl-6">
                  <span
                    className={`inline-block bg-lime-300 ${BORDER} px-2 py-1 text-[10px] font-black uppercase`}>
                    {t('hesitating.usLabel')}
                  </span>
                  <p className="mt-2 font-medium leading-snug">
                    {t(`hesitating.${k}.us`)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="#how"
              className={`inline-block bg-black text-white px-6 py-4 font-black uppercase ${BORDER} ${SHADOW_LG} ${PRESS}`}>
              {t('hesitating.cta')}
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-7">
              <p
                className={`inline-block bg-black text-white ${BORDER} px-3 py-1 text-[11px] md:text-xs font-black uppercase`}>
                {t('about.tag')}
              </p>
              <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95]">
                {t.rich('about.heading', {
                  br: () => <br />,
                  em: (chunks) => (
                    <span
                      className={`inline-block bg-yellow-300 ${BORDER} px-2 -rotate-1`}>
                      {chunks}
                    </span>
                  ),
                })}
              </h2>
              <p className="mt-6 text-base md:text-lg font-medium leading-snug">
                {t('about.p1')}
              </p>
              <p className="mt-4 text-base md:text-lg font-medium leading-snug">
                {t('about.p2')}
              </p>
            </div>

            <div className="md:col-span-5 grid grid-cols-2 gap-4">
              {STATS_KEYS.map((k, i) => (
                <div
                  key={k}
                  className={`bg-white ${BORDER} ${SHADOW} p-4 md:p-5 ${
                    i % 2 === 0 ? 'md:-rotate-1' : 'md:rotate-1'
                  }`}>
                  <div className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                    {t(`about.stats.${k}.n`)}
                  </div>
                  <div className="mt-1 text-xs md:text-sm font-bold uppercase">
                    {t(`about.stats.${k}.l`)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
        <p
          className={`inline-block bg-[#22d3ee] ${BORDER} px-3 py-1 text-[11px] md:text-xs font-black uppercase`}>
          {t('options.tag')}
        </p>
        <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95]">
          {t.rich('options.heading', { br: () => <br /> })}
        </h2>
        <p className="mt-4 max-w-md text-base md:text-lg font-medium">
          {t('options.subtitle')}
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <a
            href="tel:811"
            className={`block bg-white ${BORDER} ${SHADOW_LG} ${PRESS} p-6 md:p-7`}>
            <div
              className={`inline-block bg-yellow-300 ${BORDER} px-2 py-1 text-[10px] font-black uppercase`}>
              {t('options.infoSocial.tag')}
            </div>
            <h3 className="mt-3 text-2xl md:text-3xl font-black uppercase tracking-tight">
              {t('options.infoSocial.title')}
            </h3>
            <p className="mt-2 font-medium">{t('options.infoSocial.body')}</p>
            <span
              className={`mt-5 inline-block bg-black text-white ${BORDER} px-3 py-2 text-xs md:text-sm font-black uppercase`}>
              {t('options.infoSocial.cta')}
            </span>
          </a>
          <a
            href="tel:18002632266"
            className={`block bg-white ${BORDER} ${SHADOW_LG} ${PRESS} p-6 md:p-7`}>
            <div
              className={`inline-block bg-[#ff5fa2] ${BORDER} px-2 py-1 text-[10px] font-black uppercase`}>
              {t('options.telJeunes.tag')}
            </div>
            <h3 className="mt-3 text-2xl md:text-3xl font-black uppercase tracking-tight">
              {t('options.telJeunes.title')}
            </h3>
            <p className="mt-2 font-medium">{t('options.telJeunes.body')}</p>
            <span
              className={`mt-5 inline-block bg-black text-white ${BORDER} px-3 py-2 text-xs md:text-sm font-black uppercase`}>
              {t('options.telJeunes.cta')}
            </span>
          </a>
        </div>
      </section>

      {/* 6. FAQ */}
      <section
        id="faq"
        className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24 scroll-mt-20">
        <p
          className={`inline-block bg-lime-300 ${BORDER} px-3 py-1 text-[11px] md:text-xs font-black uppercase`}>
          {t('faq.tag')}
        </p>
        <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95]">
          {t.rich('faq.heading', {
            br: () => <br />,
            em: (chunks) => (
              <span className={`inline-block bg-[#ff5fa2] ${BORDER} px-2`}>
                {chunks}
              </span>
            ),
          })}
        </h2>

        <div className="mt-10 space-y-4">
          {FAQ_KEYS.map((k) => (
            <details
              key={k}
              className={`group bg-white ${BORDER} ${SHADOW} ${PRESS}`}>
              <summary className="cursor-pointer list-none p-5 flex items-start justify-between gap-4">
                <span className="text-base md:text-lg font-black uppercase tracking-tight leading-snug">
                  {t(`faq.${k}.q`)}
                </span>
                <span
                  aria-hidden
                  className={`shrink-0 inline-flex h-8 w-8 items-center justify-center bg-yellow-300 ${BORDER} text-xl font-black transition-transform group-open:rotate-45`}>
                  +
                </span>
              </summary>
              <div
                className={`px-5 pb-5 border-t-[3px] border-black pt-4 font-medium leading-snug`}>
                {t(`faq.${k}.a`)}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
