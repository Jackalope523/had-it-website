import Link from 'next/link';

// Neo-brutalist primitives
const BORDER = 'border-[3px] border-black';
const SHADOW = 'shadow-[5px_5px_0_0_#000] md:shadow-[6px_6px_0_0_#000]';
const SHADOW_LG = 'shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000]';
const PRESS =
  'transition-all active:translate-x-[3px] active:translate-y-[3px] active:shadow-[2px_2px_0_0_#000] md:hover:translate-x-[3px] md:hover:translate-y-[3px] md:hover:shadow-[3px_3px_0_0_#000]';

const feelings1 = [
  'Feeling stuck?',
  'Feeling angry?',
  'Had enough?',
  'Stressed?',
  'Nobody listening?',
];
const feelings2 = [
  'Feel misunderstood?',
  'Nothing left to lose?',
  'Life not fair?',
  'Feeling stuck?',
  'Concerned for family or friends?',
];

const FEELING_COLORS = [
  'bg-[#ff5fa2]',
  'bg-yellow-300',
  'bg-[#22d3ee]',
  'bg-lime-300',
  'bg-white',
  'bg-orange-300',
];

function MarqueeRow({
  items,
  reverse = false,
  fast = false,
  textClass = 'text-3xl md:text-5xl',
}: {
  items: string[];
  reverse?: boolean;
  fast?: boolean;
  textClass?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className={`${reverse ? 'marquee-track-reverse' : 'marquee-track'} ${
          fast ? 'marquee-fast' : ''
        }`}>
        {doubled.map((t, i) => (
          <span
            key={i}
            className={`mx-2 my-1 inline-flex items-center ${
              FEELING_COLORS[i % FEELING_COLORS.length]
            } ${BORDER} px-4 py-2 font-black uppercase tracking-tight whitespace-nowrap ${textClass}`}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex-1 bg-[#fff8e7] text-black font-sans">
      {/* <div className={`bg-yellow-300 ${BORDER} border-x-0 border-t-0`}>
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-3 flex flex-col gap-2 text-xs md:text-sm">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 font-black uppercase tracking-tight">
            <span>
              <span className="opacity-70">Email:</span>{' '}
              <a
                href="mailto:here@hadit.ca"
                className="hover:underline underline-offset-4 decoration-2">
                here@hadit.ca
              </a>
            </span>
            <span
              aria-hidden
              className="hidden sm:inline h-3 w-px bg-black/40"
            />
            <span>
              <span className="opacity-70">SMS:</span>{' '}
              <a
                href="sms:+15142684505"
                className="hover:underline underline-offset-4 decoration-2">
                514-268-4505
              </a>
            </span>
            <span
              aria-hidden
              className="hidden sm:inline h-3 w-px bg-black/40"
            />
            <span>
              <span className="opacity-70">Chat:</span>{' '}
              <a
                href="#how"
                className="hover:underline underline-offset-4 decoration-2">
                Let&rsquo;s chat
              </a>
            </span>
          </div>
          <p className="font-medium leading-snug">
            <span className="font-black uppercase">Not ready to talk?</span>{' '}
            That&apos;s fine — bookmark this page and save{' '}
            <a
              href="tel:+15142684505"
              className="font-black hover:underline underline-offset-4 decoration-2">
              514-268-4505
            </a>{' '}
            so you can reach out when you&apos;re ready.
          </p>
        </div>
      </div> */}

      <header className={`bg-[#fff8e7]`}>
        <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg md:text-2xl font-black tracking-tight uppercase">
            <span
              className={`inline-block h-5 w-5 md:h-6 md:w-6 bg-[#ff5fa2] ${BORDER}`}
            />
            we hear you
          </Link>
          <a
            href="#how"
            className={`bg-black text-white px-4 py-2 font-black uppercase text-xs md:text-sm ${BORDER} ${SHADOW} ${PRESS}`}>
            Reach out
          </a>
        </nav>
      </header>

      {/* 1. HERO + FEELINGS */}
      <section className="relative overflow-hidden pt-10 md:pt-16 pb-6">
        <div className="mt-10 space-y-2 md:space-y-3">
          <MarqueeRow items={feelings1} />
        </div>

        <div className="mx-auto max-w-6xl px-4 md:px-6 my-10 text-center">
          <span
            className={`inline-flex items-center gap-2 bg-[#22d3ee] ${BORDER} px-3 py-1 text-[11px] md:text-xs font-black uppercase`}>
            <span className="h-2 w-2 bg-black" />
            Free / confidential / Quebec
          </span>
          <h1 className="mt-5 text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight leading-[0.9]">
            We&apos;re here to{' '}
            <span
              className={`inline-block bg-[#ff5fa2] ${BORDER} px-2 -rotate-1 mt-2`}>
              listen.
            </span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-base md:text-xl leading-snug font-medium">
            Whatever you&apos;re carrying — drop it here. No script, no
            judgment, no records shared anywhere else.
          </p>
        </div>

        <div className="space-y-2 md:space-y-3">
          <MarqueeRow items={feelings2} reverse />
        </div>
      </section>

      {/* 2. WAYS TO REACH OUT */}
      <section
        id="how"
        className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
        <p
          className={`inline-block bg-[#22d3ee] ${BORDER} px-3 py-1 text-[11px] md:text-xs font-black uppercase`}>
          Ways to reach us
        </p>
        <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95]">
          Pick whatever
          <br />
          feels easiest.
        </h2>
        <p className="mt-4 max-w-md text-base md:text-lg font-medium">
          You can reach out to us for confidential support.
        </p>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              tag: 'Right now',
              title: 'Live chat',
              body: 'Tap the chat. Talk to a real person, anonymously.',
              cta: 'Start chatting',
              href: '#how',
              color: 'bg-[#ff5fa2]',
            },
            {
              tag: '8am – midnight',
              title: 'Phone',
              body: "Hear a voice on the other end. Sometimes that's what helps most.",
              cta: '514-268-4505',
              href: 'tel:+15142684505',
              color: 'bg-lime-300',
            },
            {
              tag: 'Reply ≤24h',
              title: 'Text',
              body: "Message us when you're ready. We'll meet you there.",
              cta: 'Text 514-268-4505',
              href: 'sms:+15142684505',
              color: 'bg-yellow-300',
            },
            {
              tag: 'Reply ≤24h',
              title: 'Email',
              body: 'Write as little or as much as you want. No subject required.',
              cta: 'here@hadit.ca',
              href: 'mailto:here@hadit.ca',
              color: 'bg-[#22d3ee]',
            },
          ].map((card, i) => (
            <a
              key={card.title}
              href={card.href}
              className={`group relative flex flex-col ${
                card.color
              } ${BORDER} ${SHADOW_LG} ${PRESS} p-6 md:p-7 ${
                i % 2 === 0 ? 'md:-rotate-1' : 'md:rotate-1'
              }`}>
              <div
                className={`absolute -top-3 right-4 bg-black text-white ${BORDER} px-2 py-1 text-[10px] md:text-xs font-black uppercase`}>
                {card.tag}
              </div>
              <h3 className="mt-1 text-2xl md:text-3xl font-black uppercase tracking-tight">
                {card.title}
              </h3>
              <p className="mt-2 flex-1 font-medium leading-snug">
                {card.body}
              </p>
              <span
                className={`mt-5 inline-flex items-center justify-between bg-white ${BORDER} px-3 py-2 text-xs md:text-sm font-black uppercase`}>
                {card.cta}
                <span aria-hidden>→</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* 3. OBJECTION HANDLING */}
      <section className={`bg-[#ff5fa2] ${BORDER} border-x-0`}>
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
          <p
            className={`inline-block bg-black text-white ${BORDER} px-3 py-1 text-[11px] md:text-xs font-black uppercase`}>
            Reasons you&apos;re not reaching out
          </p>
          <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95]">
            Hesitating to contact us?
          </h2>

          <div className="mt-10 space-y-5">
            {[
              {
                you: "I'm not in crisis. I shouldn't take up space.",
                us: "You don't need to be in crisis. If something's sitting heavy, that's enough.",
              },
              {
                you: "I don't want my name on anything.",
                us: "You don't have to give one. Chat, text, and email are anonymous by default.",
              },
              {
                you: 'What if you tell my family / partner / boss?',
                us: "We don't. The only exception is immediate risk to life — and we'll walk you through what happens.",
              },
              {
                you: "I don't even know what to say.",
                us: 'Start with one word. "Hi." "Tired." "Stuck." We\'ll take it from there.',
              },
              {
                you: 'I just want to vent, not get advice.',
                us: "Then vent. We're trained to listen, not to fix.",
              },
              {
                you: 'Is it really free?',
                us: 'Yes. No fees, no insurance, no follow-up marketing. Ever.',
              },
            ].map((o, i) => (
              <div
                key={i}
                className={`bg-white ${BORDER} ${SHADOW} p-5 md:p-6 grid md:grid-cols-12 gap-4 md:gap-6`}>
                <div className="md:col-span-5">
                  <span
                    className={`inline-block bg-zinc-200 ${BORDER} px-2 py-1 text-[10px] font-black uppercase`}>
                    You
                  </span>
                  <p className="mt-2 text-lg md:text-xl font-black uppercase tracking-tight leading-snug">
                    &ldquo;{o.you}&rdquo;
                  </p>
                </div>
                <div className="md:col-span-7 md:border-l-[3px] md:border-black md:pl-6">
                  <span
                    className={`inline-block bg-lime-300 ${BORDER} px-2 py-1 text-[10px] font-black uppercase`}>
                    Us
                  </span>
                  <p className="mt-2 font-medium leading-snug">{o.us}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="#how"
              className={`inline-block bg-black text-white px-6 py-4 font-black uppercase ${BORDER} ${SHADOW_LG} ${PRESS}`}>
              Ok. I&apos;ll try →
            </a>
          </div>
        </div>
      </section>

      {/* 4. OTHER OPTIONS */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
        <p
          className={`inline-block bg-[#22d3ee] ${BORDER} px-3 py-1 text-[11px] md:text-xs font-black uppercase`}>
          Not the right fit?
        </p>
        <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95]">
          There are other
          <br />
          options.
        </h2>
        <p className="mt-4 max-w-md text-base md:text-lg font-medium">
          We&apos;d rather you reach someone than wait. Both of these are free,
          confidential, and staffed by professionals.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <a
            href="tel:811"
            className={`block bg-white ${BORDER} ${SHADOW_LG} ${PRESS} p-6 md:p-7`}>
            <div
              className={`inline-block bg-yellow-300 ${BORDER} px-2 py-1 text-[10px] font-black uppercase`}>
              24 / 7
            </div>
            <h3 className="mt-3 text-2xl md:text-3xl font-black uppercase tracking-tight">
              811 — Info-Social
            </h3>
            <p className="mt-2 font-medium">
              Quebec&apos;s psychosocial helpline. Dial 811, choose option 2.
              Available 24 hours a day.
            </p>
            <span
              className={`mt-5 inline-block bg-black text-white ${BORDER} px-3 py-2 text-xs md:text-sm font-black uppercase`}>
              Call 811 →
            </span>
          </a>
          <a
            href="tel:18002632266"
            className={`block bg-white ${BORDER} ${SHADOW_LG} ${PRESS} p-6 md:p-7`}>
            <div
              className={`inline-block bg-[#ff5fa2] ${BORDER} px-2 py-1 text-[10px] font-black uppercase`}>
              Ages 5 – 20
            </div>
            <h3 className="mt-3 text-2xl md:text-3xl font-black uppercase tracking-tight">
              Tel-jeunes
            </h3>
            <p className="mt-2 font-medium">
              Free, confidential support for young people. Phone, text, and
              chat.
            </p>
            <span
              className={`mt-5 inline-block bg-black text-white ${BORDER} px-3 py-2 text-xs md:text-sm font-black uppercase`}>
              1-800-263-2266 →
            </span>
          </a>
        </div>
      </section>

      {/* 5. ABOUT US */}
      <section className={`bg-[#22d3ee] ${BORDER} border-x-0`}>
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-7">
              <p
                className={`inline-block bg-black text-white ${BORDER} px-3 py-1 text-[11px] md:text-xs font-black uppercase`}>
                Who we are
              </p>
              <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95]">
                People who&apos;ll
                <br />
                <span
                  className={`inline-block bg-yellow-300 ${BORDER} px-2 -rotate-1`}>
                  actually listen.
                </span>
              </h2>
              <p className="mt-6 text-base md:text-lg font-medium leading-snug">
                We&apos;re a Quebec-based team of trained psychosocial
                responders. We started because too many people fall through the
                cracks of formal mental health services — and a real
                conversation with a real person, early enough, can change the
                path.
              </p>
              <p className="mt-4 text-base md:text-lg font-medium leading-snug">
                We&apos;re not therapists. We&apos;re not a hotline. We&apos;re
                the part where someone listens, takes you seriously, and helps
                you figure out what — if anything — to do next.
              </p>
            </div>

            <div className="md:col-span-5 grid grid-cols-2 gap-4">
              {[
                { n: '100%', l: 'Confidential' },
                { n: '0$', l: 'Cost to you' },
                { n: '24h', l: 'Email / text reply' },
                { n: 'QC', l: 'Based in Quebec' },
              ].map((s, i) => (
                <div
                  key={s.l}
                  className={`bg-white ${BORDER} ${SHADOW} p-4 md:p-5 ${
                    i % 2 === 0 ? 'md:-rotate-1' : 'md:rotate-1'
                  }`}>
                  <div className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                    {s.n}
                  </div>
                  <div className="mt-1 text-xs md:text-sm font-bold uppercase">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
        <p
          className={`inline-block bg-lime-300 ${BORDER} px-3 py-1 text-[11px] md:text-xs font-black uppercase`}>
          FAQ
        </p>
        <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95]">
          Do you have more
          <br />
          <span className={`inline-block bg-[#ff5fa2] ${BORDER} px-2`}>
            questions?
          </span>{' '}
        </h2>

        <div className="mt-10 space-y-4">
          {[
            {
              q: 'What hours are you open?',
              a: 'Phone: 8 a.m. to midnight, every day. Email and text are monitored 24 hours and we reply within a day. Live chat is open whenever a responder is online — usually during phone hours.',
            },
            {
              q: 'What languages do you speak?',
              a: 'We respond in English and French. Let us know which you prefer when you reach out — or just write in whichever feels easier.',
            },
            {
              q: 'Do I have to live in Quebec?',
              a: "No. We're based in Quebec but we won't turn you away if you're elsewhere. We may suggest a service closer to you if it's a better fit.",
            },
            {
              q: 'What happens after I reach out?',
              a: "A trained responder reads or answers your message and replies. There's no intake form, no diagnosis, no referral pipeline. You decide what happens next.",
            },
            {
              q: "Will you call me back if I don't answer?",
              a: "Only if you explicitly asked us to. Otherwise we wait for you to come back when you're ready.",
            },
            {
              q: 'Are you a replacement for therapy or a crisis line?',
              a: "No. We're a place to be heard. If you're in immediate danger, please call 911. For ongoing care, 811 (option 2) can connect you with longer-term services.",
            },
            {
              q: 'How is this funded?',
              a: "We operate as a not-for-profit service. There's no cost to you and no third party gets your information.",
            },
          ].map((item, i) => (
            <details
              key={i}
              className={`group bg-white ${BORDER} ${SHADOW} ${PRESS}`}>
              <summary className="cursor-pointer list-none p-5 flex items-start justify-between gap-4">
                <span className="text-base md:text-lg font-black uppercase tracking-tight leading-snug">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className={`shrink-0 inline-flex h-8 w-8 items-center justify-center bg-yellow-300 ${BORDER} text-xl font-black transition-transform group-open:rotate-45`}>
                  +
                </span>
              </summary>
              <div
                className={`px-5 pb-5 border-t-[3px] border-black pt-4 font-medium leading-snug`}>
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={`bg-black text-white ${BORDER} border-x-0 border-b-0`}>
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-8 flex flex-col gap-3 text-xs md:text-sm font-bold uppercase">
          <div className="flex items-center gap-2">
            <span className={`inline-block h-5 w-5 bg-[#ff5fa2] ${BORDER}`} />
            we hear you
          </div>
          <p>
            Free / confidential / non-judgmental. A service of hadit.ca, Quebec.
          </p>
          <p>© {new Date().getFullYear()} hadit.ca</p>
        </div>
      </footer>
    </div>
  );
}

