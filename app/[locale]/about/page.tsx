import { useTranslations } from 'next-intl';

const BORDER = 'border-[3px] border-black';

const TAG_COLORS = [
  'bg-yellow-300',
  'bg-[#ff5fa2]',
  'bg-lime-300',
  'bg-[#22d3ee]',
];

type AboutSection = { tag: string; title: string; body: string };

export default function About() {
  const t = useTranslations('About');
  const sections = t.raw('sections') as AboutSection[];

  return (
    <div className="flex-1 bg-[#f9f5f2] text-[#282924]">
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-20 text-center">
        <span
          className={`inline-flex items-center gap-2 bg-[#22d3ee] ${BORDER} px-3 py-1 text-[11px] md:text-xs font-black uppercase`}>
          <span className="h-2 w-2 bg-black" />
          {t('badge')}
        </span>
        <h1 className="mt-5 text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight leading-[0.9]">
          {t('title')}
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-base md:text-xl leading-snug font-medium">
          {t('subtitle')}
        </p>
      </section>

      <div className="mx-auto max-w-6xl px-4 md:px-6 pb-16 md:pb-24 space-y-12 md:space-y-16">
        {sections.map((s, i) => (
          <section key={i}>
            <p
              className={`inline-block ${
                TAG_COLORS[i % TAG_COLORS.length]
              } ${BORDER} px-3 py-1 text-[11px] md:text-xs font-black uppercase`}>
              {s.tag}
            </p>
            <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95]">
              {s.title}
            </h2>
            <p className="mt-4 text-base md:text-lg font-medium leading-snug">
              {s.body}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}

