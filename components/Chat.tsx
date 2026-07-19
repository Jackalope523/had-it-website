'use client';

import { EventHandlerPayload, LiveChatWidget } from '@livechat/widget-react';

export default function CookieBanner() {

  function handleNewEvent(event: EventHandlerPayload<'onNewEvent'>) {
    console.log('LiveChatWidget.onNewEvent', event)
  }

  return   <LiveChatWidget
      license="19845957"
      onNewEvent={handleNewEvent}
    />;
}
