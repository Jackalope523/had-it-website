'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

const COOKIE_NAME = 'cookie-consent';
const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

async function setConsent(value: 'accepted' | 'declined') {
  const store = await cookies();
  store.set(COOKIE_NAME, value, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: ONE_YEAR_SECONDS,
  });
  revalidatePath('/', 'layout');
}

export async function setConsentCookie() {
  await setConsent('accepted');
}

export async function declineConsentCookie() {
  await setConsent('declined');
}
