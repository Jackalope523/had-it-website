# HAD IT / RAS-LE-BOL — Bilingual Psychosocial Support Website

A production website for a Quebec-based support service offering free, confidential,
non-judgmental listening by chat, text, email, or phone. The same codebase powers two
fully-branded, single-language domains:

| Domain | Language | Brand |
|--------|----------|-------|
| **www.hadit.ca** | English | HAD IT |
| **www.ras-le-bol.ca** | French | RAS-LE-BOL |

---

## Why this project is worth a look

This is a live public service with real constraints: two audiences,
two languages, two domains, privacy/consent law, SEO and social-sharing requirements, and
outreach campaigns that need to meet the target audience where they are at.

## Tech stack

- **Next.js 16** — App Router, React Server Components, Server Actions
- **React 19** · **TypeScript** (strict)
- **Tailwind CSS v4** — custom "neo-brutalist" design system built from utility primitives
- **next-intl v4** — internationalization + domain-based routing
- **Vercel** — hosting & edge middleware
- Integrations: **LiveChat** (real-time support), **Google Tag Manager** (consent-gated)

## Engineering highlights

**🌐 Dual-domain, dual-brand internationalization**
One deployment serves English on `hadit.ca` and French on `ras-le-bol.ca`. Locale is resolved
from the incoming domain via `next-intl` routing + middleware — no `/en` or `/fr` URL prefixes,
each language gets clean, native-feeling URLs. Adding a language or region is an easy config change.

**📝 Strict content/presentation separation**
Every string lives in fully-mirrored `messages/en.json` / `messages/fr.json` (~400 keys each).
Components are pure presentation that read from translation namespaces so copywriters and
translators can work without touching JSX, and the two languages can never drift structurally.

**🎯 Campaign-targeted landing variants ("concern codes")**
A short numeric URL code (`?c=…`) swaps the hero content to match a specific outreach campaign
(e.g. different lived-experience messaging per audience), with graceful fallback to the default
when a code is missing or invalid. Personalization handled entirely in a Server Component from
`searchParams` so no client-side flicker, no extra bundle.

**🔒 Privacy-first analytics & consent**
Google Tag Manager is *never loaded* until the visitor explicitly accepts. Consent is stored in
a secure, `httpOnly`, `SameSite` cookie set through a **Server Action**, with both accept and
decline persisted. Privacy policy surfaced in-banner and in the footer.

**🔍 SEO & social sharing**
Per-locale `generateMetadata` produces localized titles, descriptions, canonical URLs, and
Open Graph / Twitter cards (`fr_CA` / `en_CA`), so links shared from either brand preview
correctly.

**♿ Accessibility & polish**
Semantic landmarks, ARIA-labelled dialog and mobile menu, keyboard support (Escape to close),
and `prefers-reduced-motion` handling that disables the animated marquees for motion-sensitive
users.

**📞 Multi-channel contact**
First-class `tel:` / `sms:` / `mailto:` entry points plus an embedded live-chat widget, so a
visitor in distress can reach out through whichever channel they're comfortable with.

## What this demonstrates

- Shipping and maintaining a **real, user-facing product**.
- **Modern React/Next.js** (Server Components, Server Actions, App Router) used deliberately.
- **Internationalization at production scale**, including the harder domain-routing case.
- Sound judgment on **privacy, consent, SEO, and accessibility** — the parts that don't show
  up in a screenshot but matter in production.
- A clean, **content-driven architecture** that non-engineers can safely contribute to.

## Running locally

```bash
npm install
npm run dev        # http://localhost:3000
