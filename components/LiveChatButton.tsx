'use client';

import { useTranslations } from "next-intl";

export default function LiveChatButton() {
    const t =  useTranslations('Home');
    
  return     <button
          key={'chat'}
              onClick={() => {window.LiveChatWidget?.call('maximize')}}
              className={`group relative flex flex-col bg-[#ff5fa2] border-[3px] border-black shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] transition-all active:translate-x-[3px] active:translate-y-[3px] active:shadow-[2px_2px_0_0_#000] md:hover:translate-x-[3px] md:hover:translate-y-[3px] md:hover:shadow-[3px_3px_0_0_#000] p-6 md:p-7 md:-rotate-1`}>
              <div
                className={`absolute -top-3 right-4 bg-black text-white border-[3px] border-black px-2 py-1 text-[10px] md:text-xs font-black uppercase`}>
                {t(`ways.chat.tag`)}
              </div>
              <h3 className="mt-1 text-2xl md:text-3xl font-black uppercase tracking-tight">
                {t(`ways.chat.title`)}
              </h3>
              <p className="mt-2 flex-1 font-medium leading-snug">
                {t(`ways.chat.body`)}
              </p>
              <span
                className={`mt-5 inline-flex items-center justify-between bg-white border-[3px] border-black px-3 py-2 text-md md:text-md font-black uppercase`}>
                {t(`ways.chat.cta`)}
                <span aria-hidden>→</span>
              </span>
          </button>;
}
