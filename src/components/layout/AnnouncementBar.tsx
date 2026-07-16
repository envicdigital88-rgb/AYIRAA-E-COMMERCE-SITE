import React, { Fragment } from 'react';
import { TruckIcon } from 'lucide-react';
const messages = [
'Island-wide Delivery',
'Delivery Fee Rs. 450',
'Estimated Delivery 1–2 Days'];

export function AnnouncementBar() {
  return (
    <div className="h-10 w-full bg-gold text-charcoal">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-center gap-3 px-4 text-[11px] font-medium tracking-[0.12em] sm:gap-6 sm:text-xs">
        <TruckIcon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        {messages.map((m, i) =>
        <Fragment key={m}>
            <span className={i === 2 ? 'hidden sm:inline' : ''}>{m}</span>
            {i < messages.length - 1 &&
          <span
            className={`text-charcoal/40 ${i === 1 ? 'hidden sm:inline' : ''}`}
            aria-hidden>
            
                |
              </span>
          }
          </Fragment>
        )}
      </div>
    </div>);

}