import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function BrandStory() {
  return (
    <section className="relative w-full overflow-hidden py-24 md:py-32" id="story">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/image4.png"
          alt="AYIRAA brand story background"
          className="h-full w-full object-cover object-center"
        />
        {/* Soft overlay to blend it slightly */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Brand Story Card (Left 7 columns on large screens) */}
          <div className="lg:col-span-7 xl:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-ivory/90 backdrop-blur-md p-8 sm:p-12 md:p-16 rounded-[32px] border border-white/30 shadow-lift"
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
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
                <p>
                  For generations, rice water has been a treasured beauty secret
                  across Asia. AYIRAA honours this heritage — transforming fermented
                  rice into gentle, effective skincare for modern rituals.
                </p>
                <p>
                  Every formula is sulfate-free, paraben-free and cruelty-free.
                  Thoughtfully crafted in Sri Lanka, made to reveal your skin’s
                  natural, healthy glow.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <Button variant="dark">Read Our Story</Button>
                <div className="text-xs tracking-wider text-charcoal/60">
                  <span className="font-semibold text-charcoal">Est. 2024</span> · Colombo, Sri Lanka
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right spacer to let the background product show through on large screens */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />
        </div>
      </div>
    </section>
  );
}