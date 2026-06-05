import { ImageResponse } from 'next/og';
import { getTranslations } from 'next-intl/server';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'We Hear You';

async function loadGoogleFont(family: string, weight: number) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family.replace(
      / /g,
      '+',
    )}:wght@${weight}&display=swap`,
    { headers: { 'User-Agent': 'Mozilla/5.0' } },
  ).then((r) => r.text());
  const url = css.match(/src: url\((.+?)\) format/)?.[1];
  if (!url) throw new Error(`Font ${family} ${weight} not found`);
  return fetch(url).then((r) => r.arrayBuffer());
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tHero = await getTranslations({ locale, namespace: 'Home.hero' });
  const tNav = await getTranslations({ locale, namespace: 'Nav' });
  const workSansBlack = await loadGoogleFont('Work Sans', 900);

  return new ImageResponse(
    (
      <div
        tw="w-full h-full flex flex-col p-[72px] text-[#282924]"
        style={{ background: '#f9f5f2', fontFamily: 'Work Sans' }}>
        <div tw="flex items-center text-4xl font-black uppercase tracking-tight">
          <div
            tw="w-11 h-11 mr-4"
            style={{ background: '#ff5fa2', border: '6px solid #000' }}
          />
          {tNav('logo')}
        </div>

        <div
          tw="flex flex-1 flex-wrap items-center text-[140px] font-black uppercase leading-[0.9]"
          style={{ letterSpacing: -3 }}>
          <span tw="flex mr-4">{tHero('titleLead')}</span>
          <span
            tw="flex px-3"
            style={{
              background: '#ff5fa2',
              border: '6px solid #000',
              transform: 'rotate(-1deg)',
            }}>
            {tHero('titleEmphasis')}
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Work Sans',
          data: workSansBlack,
          style: 'normal',
          weight: 900,
        },
      ],
    },
  );
}

