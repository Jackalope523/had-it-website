import { ImageResponse } from 'next/og';
import { getTranslations } from 'next-intl/server';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'We Hear You';

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tHero = await getTranslations({ locale, namespace: 'Home.hero' });

  return new ImageResponse(
    (
      <div
        tw="w-full h-full flex flex-col p-[72px] text-[#282924]"
        style={{ background: '#f9f5f2', fontFamily: 'sans-serif' }}>
        <div tw="flex items-center text-4xl font-black uppercase tracking-tight">
          <div
            tw="w-11 h-11 mr-4"
            style={{ background: '#ff5fa2', border: '6px solid #000' }}
          />
          we hear you
        </div>

        <div
          tw="flex flex-1 flex-wrap items-center text-[140px] font-black uppercase leading-[0.9]"
          style={{ letterSpacing: -3 }}>
          <span tw="flex mr-5">{tHero('titleLead')}</span>
          <span
            tw="flex px-6 py-2"
            style={{ background: '#ff5fa2', border: '6px solid #000' }}>
            {tHero('titleEmphasis')}
          </span>
        </div>
      </div>
    ),
    size
  );
}
