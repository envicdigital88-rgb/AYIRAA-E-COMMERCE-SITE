import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

const steps = [
  {
    num: '01',
    title: 'Purify',
    subtitle: 'Rice Glow Cleanser',
    desc: 'Begin with a gentle massage using our fermented rice cleanser. It lifts impurities, balances oil, and preps your canvas without stripping natural moisture.',
  },
  {
    num: '02',
    title: 'Restore',
    subtitle: 'Toner & Balance',
    desc: 'Apply a balancing mist to hydrate, refine pores, and restore your skin’s natural pH level, leaving it fresh and ready for deep nourishment.',
  },
  {
    num: '03',
    title: 'Nourish',
    subtitle: 'Rice Glow Serum',
    desc: 'Finish by patting a few drops of our golden, nutrient-rich active serum. Instantly locks in moisture and reveals a divine, radiant glow.',
  }
];

export function SkincareRitual() {
  return (
    <section className="relative w-full overflow-hidden py-24 md:py-32 bg-white" id="ritual">
      {/* Background image with fading gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/image9.png"
          alt="AYIRAA daily ritual background"
          className="h-full w-full object-cover object-right lg:object-center"
        />
        {/* 
          Gradient overlays:
          - Mobile: vertical gradient from solid white at the top (under text) to transparent at the bottom (showing the product & application)
          - Desktop (lg): horizontal gradient from solid white on the left (creating space for text) to transparent on the right (showing the visual)
        */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 via-white/80 to-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/95 lg:via-white/40 lg:to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Left Column: Text & Steps sitting directly on the faded background */}
          <div className="lg:col-span-7 xl:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-xs font-semibold tracking-luxe text-gold-deep uppercase">
                The Daily Ritual
              </span>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-charcoal sm:text-4xl lg:text-[2.75rem]">
                Three steps to <br />
                <span className="italic text-gold-deep">Divine Radiance</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                Skincare is more than a routine—it is a moment of care. Follow our signature rice-powered ritual morning and night for healthy, glowing skin.
              </p>
              
              {/* Step list */}
              <div className="mt-10 space-y-8">
                {steps.map((step, idx) => (
                  <div
                    key={step.num}
                    className="flex gap-6 items-start"
                  >
                    <span className="font-serif text-3xl italic text-gold-deep/40 font-medium leading-none">
                      {step.num}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg text-charcoal leading-none">
                        {step.title}
                        <span className="ml-2 text-xs tracking-wider text-muted font-sans font-medium uppercase">
                          · {step.subtitle}
                        </span>
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-6 items-center">
                <Link to="/shop">
                  <Button variant="dark">Explore the Collection</Button>
                </Link>
                <div className="text-xs tracking-wider text-charcoal/60">
                  <span className="font-semibold text-charcoal">Featured</span> · Rice Glow Cleanser
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column: Spacer to let the background image (the woman using the cleanser) show through */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />
          
        </div>
      </div>
    </section>
  );
}
