"use client";

import { EventHandlerPayload, LiveChatWidget } from "@livechat/widget-react";
import { useSearchParams } from "next/navigation";
import { CONCERN_CODES } from "@/lib/concerns";

export default function Chat() {
  function getLanguageLabel() {
    if (typeof window === "undefined") return "EN";

    const hostname = window.location.hostname.replace(/^www\./, "");

    if (hostname === "ras-le-bol.ca") {
      return "FR";
    }

    return "EN";
  }

  const searchParams = useSearchParams();

  const code = searchParams.get("c");
  const concern = code ? CONCERN_CODES[code] : undefined;
  const language = getLanguageLabel();
  const customerName = concern
    ? `Had It (${concern}) [${language}]`
    : `Had It [${language}]`;

  function handleNewEvent(event: EventHandlerPayload<"onNewEvent">) {
    console.log("LiveChatWidget.onNewEvent", event);
  }

  return (
    <LiveChatWidget
      license="19845957"
      customerName={customerName}
      visibility="minimized"
      onNewEvent={handleNewEvent}
    />
  );
}
