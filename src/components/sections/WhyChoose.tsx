import React from 'react';
import {
  LeafIcon,
  SparklesIcon,
  TruckIcon,
  ShieldCheckIcon } from
'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
const features = [
{
  icon: LeafIcon,
  title: 'Natural Ingredients',
  text: 'Fermented rice and clean botanicals — nothing harsh, ever.'
},
{
  icon: SparklesIcon,
  title: 'Premium Quality',
  text: 'Thoughtfully formulated in small batches for real results.'
},
{
  icon: TruckIcon,
  title: 'Island-wide Delivery',
  text: 'Delivered to your door in 1–2 business days.'
},
{
  icon: ShieldCheckIcon,
  title: 'Secure Payments',
  text: 'Shop with confidence — safe, encrypted checkout.'
}];

export function WhyChoose() {
  return (
    <section className="w-full bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading eyebrow="WHY AYIRAA" title="The AYIRAA promise" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) =>
          <Reveal key={f.title} delay={i * 0.1}>
              <div className="group h-full rounded-card border border-charcoal/5 bg-white p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lift">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 text-gold-deep transition-colors duration-300 group-hover:bg-gold group-hover:text-charcoal">
                  <f.icon className="h-6 w-6" strokeWidth={1.4} />
                </div>
                <h3 className="mt-6 font-serif text-lg text-charcoal">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {f.text}
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}