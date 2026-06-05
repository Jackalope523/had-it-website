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
        style={{
          width: '100%',
          height: '100%',
          background: '#f9f5f2',
          color: '#282924',
          display: 'flex',
          flexDirection: 'column',
          padding: 72,
          fontFamily: 'sans-serif',
        }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            fontSize: 36,
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: -1,
          }}>
          <div
            style={{
              width: 44,
              height: 44,
              background: '#ff5fa2',
              border: '6px solid #000',
            }}
          />
          we hear you
        </div>

        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            fontSize: 140,
            fontWeight: 900,
            textTransform: 'uppercase',
            lineHeight: 0.9,
            letterSpacing: -3,
            flexWrap: 'wrap',
            gap: 18,
          }}>
          <span style={{ display: 'flex' }}>{tHero('titleLead')}</span>
          <span
            style={{
              background: '#ff5fa2',
              border: '6px solid #000',
              padding: '8px 24px',
              display: 'flex',
            }}>
            {tHero('titleEmphasis')}
          </span>
        </div>
      </div>
    ),
    size
  );
}
