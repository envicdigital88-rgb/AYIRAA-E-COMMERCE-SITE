import React from 'react';
import { StarIcon } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
const testimonials = [
{
  quote:
  'My skin has never felt this soft. The Rice Glow Cleanser is now the first step in every morning — gentle, luxurious and it smells divine.',
  name: 'Nethmi Perera',
  location: 'Colombo'
},
{
  quote:
  'I have sensitive skin and finally found something that doesn’t irritate. The glow after two weeks is unreal. Truly a premium product.',
  name: 'Aisha Rahman',
  location: 'Kandy'
},
{
  quote:
  'Beautiful packaging, fast island-wide delivery and results I can see. AYIRAA feels like a five-star spa ritual at home.',
  name: 'Dilani Fernando',
  location: 'Galle'
}];

export function Testimonials() {
  return (
    <section className="w-full bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="LOVED BY MANY"
          title="Radiance, in their words" />
        
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) =>
          <Reveal key={t.name} delay={i * 0.12}>
              <figure className="flex h-full flex-col rounded-card bg-white p-8 shadow-soft transition-shadow duration-300 hover:shadow-lift">
                <div className="flex gap-1 text-gold">
                  {Array.from({
                  length: 5
                }).map((_, s) =>
                <StarIcon
                  key={s}
                  className="h-4 w-4 fill-gold"
                  strokeWidth={0} />

                )}
                </div>
                <blockquote className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-charcoal">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-charcoal/5 pt-5">
                  <p className="font-semibold text-charcoal">{t.name}</p>
                  <p className="text-sm text-muted">{t.location}</p>
                </figcaption>
              </figure>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}