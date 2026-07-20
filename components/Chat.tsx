'use client';

import { EventHandlerPayload, LiveChatWidget } from '@livechat/widget-react';
import { useSearchParams } from 'next/navigation';

export default function Chat() {
  const searchParams = useSearchParams()

  function handleNewEvent(event: EventHandlerPayload<'onNewEvent'>) {
    console.log('LiveChatWidget.onNewEvent', event)
  }

  return   <LiveChatWidget
      license="19845957"
      customerName="Had It"
      visibility='minimized'
      onNewEvent={handleNewEvent}
    />;
}
