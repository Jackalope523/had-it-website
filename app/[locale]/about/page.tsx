import { useTranslations } from 'next-intl';

const BORDER = 'border-[3px] border-black';
const SHADOW = 'shadow-[5px_5px_0_0_#000] md:shadow-[6px_6px_0_0_#000]';

const STATS_KEYS = ['confidential', 'cost', 'replyTime', 'location'] as const;

export default function About() {
  const t = useTranslations('Home');

  return (
    <div className="flex-1 bg-[#f9f5f2] text-[#282924] font-sans">
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
    </div>
  );
}
