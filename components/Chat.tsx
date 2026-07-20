'use client';

import { EventHandlerPayload, LiveChatWidget } from '@livechat/widget-react';
import { useSearchParams } from 'next/navigation';
import { CONCERN_CODES } from '@/lib/concerns';

export default function Chat() {
  const searchParams = useSearchParams()

  const code = searchParams.get('c');
  const concern = code ? CONCERN_CODES[code] : undefined;
  const customerName = concern ? `Had It (${concern})` : 'Had It';

  function handleNewEvent(event: EventHandlerPayload<'onNewEvent'>) {
    console.log('LiveChatWidget.onNewEvent', event)
  }

  return   <LiveChatWidget
      license="19845957"
      customerName={customerName}
      visibility='minimized'
      onNewEvent={handleNewEvent}
    />;
}
