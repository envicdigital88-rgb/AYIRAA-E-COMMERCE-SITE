import React from 'react';
import {
  BanknoteIcon,
  CreditCardIcon,
  LandmarkIcon,
  WalletIcon } from
'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
const methods = [
{
  icon: BanknoteIcon,
  label: 'Cash on Delivery'
},
{
  icon: CreditCardIcon,
  label: 'Visa'
},
{
  icon: CreditCardIcon,
  label: 'Mastercard'
},
{
  icon: LandmarkIcon,
  label: 'Bank Transfer'
},
{
  icon: WalletIcon,
  label: 'Koko'
},
{
  icon: WalletIcon,
  label: 'Mintpay'
}];

export function PaymentMethods() {
  return (
    <section className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading eyebrow="EASY & SECURE" title="Pay your way" />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {methods.map((m, i) =>
          <Reveal key={m.label} delay={i * 0.06} direction="scale">
              <div className="flex h-full flex-col items-center justify-center gap-3 rounded-card border border-charcoal/5 bg-ivory p-6 text-center shadow-soft transition-transform duration-300 hover:-translate-y-1">
                <m.icon className="h-7 w-7 text-charcoal" strokeWidth={1.3} />
                <span className="text-sm font-medium text-charcoal">
                  {m.label}
                </span>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}