import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function BrandStory() {
  return (
    <section className="relative w-full overflow-hidden bg-ivory" id="story">

      {/* ── MOBILE LAYOUT (hidden on lg+) ── */}
      <div className="lg:hidden flex flex-col">
        {/* Text block */}
        <div className="px-6 pt-20 pb-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-semibold tracking-luxe text-gold-deep">
              OUR STORY
            </span>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-charcoal">
              Born from rice.
              <span className="block italic text-gold-deep">
                Made for radiance.
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal/80">
              <p>
                For generations, rice water has been a treasured beauty secret
                across Asia. AYIRAA honours this heritage — transforming fermented
                rice into gentle, effective skincare for modern rituals.
              </p>
              <p>
                Every formula is sulfate-free, paraben-free and cruelty-free.
                Thoughtfully crafted in Sri Lanka, made to reveal your skin's
                natural, healthy glow.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 items-center">
              <Button variant="dark">Read Our Story</Button>
              <div className="text-xs tracking-wider text-charcoal/60">
                <span className="font-semibold text-charcoal">Est. 2024</span> · Colombo, Sri Lanka
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image block — clearly visible below the text on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="w-full h-72 sm:h-96 overflow-hidden"
        >
          <img
            src="/image4.png"
            alt="AYIRAA brand story"
            className="h-full w-full object-cover object-center"
          />
          {/* Soft top-fade so it blends with the ivory section above */}
          <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-ivory to-transparent pointer-events-none" />
        </motion.div>
      </div>

      {/* ── DESKTOP LAYOUT (hidden below lg) — original full-bleed background ── */}
      <div className="hidden lg:block relative py-32">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/image4.png"
            alt="AYIRAA brand story background"
            className="h-full w-full object-cover object-center"
          />
          {/* Horizontal gradient: solid ivory left → transparent right */}
          <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/95 via-ivory/40 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 xl:col-span-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-xs font-semibold tracking-luxe text-gold-deep">
                  OUR STORY
                </span>
                <h2 className="mt-4 font-serif text-3xl leading-tight text-charcoal sm:text-4xl lg:text-[2.75rem]">
                  Born from rice.
                  <span className="block italic text-gold-deep">
                    Made for radiance.
                  </span>
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal/80">
                  <p>
                    For generations, rice water has been a treasured beauty secret
                    across Asia. AYIRAA honours this heritage — transforming fermented
                    rice into gentle, effective skincare for modern rituals.
                  </p>
                  <p>
                    Every formula is sulfate-free, paraben-free and cruelty-free.
                    Thoughtfully crafted in Sri Lanka, made to reveal your skin's
                    natural, healthy glow.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-6 items-center">
                  <Button variant="dark">Read Our Story</Button>
                  <div className="text-xs tracking-wider text-charcoal/60">
                    <span className="font-semibold text-charcoal">Est. 2024</span> · Colombo, Sri Lanka
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Right spacer so the product shows through the gradient */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />
          </div>
        </div>
      </div>

    </section>
  );
}