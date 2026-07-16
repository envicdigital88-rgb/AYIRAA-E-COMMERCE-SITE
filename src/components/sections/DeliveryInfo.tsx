import React from 'react';
import { Link } from 'react-router-dom';
import { TruckIcon, WalletIcon, ClockIcon } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
const items = [
{
  icon: TruckIcon,
  title: 'Island-wide Delivery',
  text: 'We deliver to every corner of Sri Lanka.'
},
{
  icon: WalletIcon,
  title: 'Rs. 450 Delivery Fee',
  text: 'A flat, transparent rate — no surprises.'
},
{
  icon: ClockIcon,
  title: '1–2 Business Days',
  text: 'Fast dispatch so your ritual begins sooner.'
}];

export function DeliveryInfo() {
  return (
    <section className="w-full bg-charcoal py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="left">
            <span className="text-xs font-medium tracking-luxe text-gold-soft">
              DELIVERY INFORMATION
            </span>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-ivory sm:text-4xl">
              Radiance, delivered to your door
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/60">
              Fast, reliable island-wide delivery on every order. Wherever you
              are in Sri Lanka, your AYIRAA ritual is only a couple of days
              away.
            </p>
            <div className="mt-8">
              <Link to="/shop">
                <Button variant="primary">Shop Now</Button>
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {items.map((it, i) =>
            <Reveal key={it.title} direction="right" delay={i * 0.1}>
                <div className="flex items-start gap-5 rounded-card border border-ivory/10 bg-ivory/5 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-charcoal">
                    <it.icon className="h-6 w-6" strokeWidth={1.4} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-ivory">
                      {it.title}
                    </h3>
                    <p className="mt-1 text-sm text-ivory/55">{it.text}</p>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>);

}