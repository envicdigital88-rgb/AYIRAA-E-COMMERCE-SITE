import React from 'react';
import { motion } from 'framer-motion';
import { DropletIcon, HeartIcon, SunIcon, FlowerIcon } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
const benefits = [
{
  icon: DropletIcon,
  title: 'Gentle Formula',
  text: 'Sulfate & paraben free, kind to the most sensitive skin.'
},
{
  icon: SunIcon,
  title: 'Healthy Skin',
  text: 'Rice actives visibly brighten and even your natural tone.'
},
{
  icon: HeartIcon,
  title: 'Daily Care',
  text: 'Lightweight rituals that fit effortlessly into your day.'
},
{
  icon: FlowerIcon,
  title: 'Premium Ingredients',
  text: 'Fermented rice, sage and botanical extracts you can trust.'
}];

export function Benefits() {
  return (
    <section className="w-full bg-sage/15 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal direction="left">
          <span className="text-xs font-medium tracking-luxe text-gold-deep">
            PRODUCT BENEFITS
          </span>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
            Skincare that loves your skin back
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            Each AYIRAA formula is designed around a single belief — that
            gentle, natural care delivers the most radiant results.
          </p>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.7
            }}
            className="mt-8 overflow-hidden rounded-[28px] shadow-soft">
            
            <img
              src="/image5.png"
              alt="AYIRAA Rice Glow Cleanser bottle"
              className="aspect-[4/3] w-full object-cover" />
            
          </motion.div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {benefits.map((b, i) =>
          <Reveal key={b.title} direction="right" delay={i * 0.1}>
              <div className="h-full rounded-card bg-white p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ivory text-gold-deep">
                  <b.icon className="h-6 w-6" strokeWidth={1.4} />
                </div>
                <h3 className="mt-5 font-serif text-lg text-charcoal">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {b.text}
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}