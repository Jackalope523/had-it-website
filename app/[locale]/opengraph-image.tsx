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
  const t = await getTranslations({ locale, namespace: 'Meta' });

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
          justifyContent: 'space-between',
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div
            style={{
              fontSize: 140,
              fontWeight: 900,
              textTransform: 'uppercase',
              lineHeight: 0.9,
              letterSpacing: -3,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 18,
            }}>
            <span
              style={{
                background: '#ff5fa2',
                border: '6px solid #000',
                padding: '8px 24px',
                transform: 'rotate(-2deg)',
                display: 'flex',
              }}>
              {t('ogTitle')}
            </span>
          </div>
          <div
            style={{
              fontSize: 44,
              fontWeight: 600,
              maxWidth: 980,
              lineHeight: 1.15,
            }}>
            {t('ogTagline')}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 16,
            fontSize: 28,
            fontWeight: 900,
            textTransform: 'uppercase',
          }}>
          <div
            style={{
              background: '#22d3ee',
              border: '6px solid #000',
              padding: '8px 18px',
              display: 'flex',
            }}>
            chat
          </div>
          <div
            style={{
              background: '#fde047',
              border: '6px solid #000',
              padding: '8px 18px',
              display: 'flex',
            }}>
            text
          </div>
          <div
            style={{
              background: '#bef264',
              border: '6px solid #000',
              padding: '8px 18px',
              display: 'flex',
            }}>
            phone
          </div>
          <div
            style={{
              background: '#fff',
              border: '6px solid #000',
              padding: '8px 18px',
              display: 'flex',
            }}>
            email
          </div>
        </div>
      </div>
    ),
    size
  );
}
