import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function BrandStory() {
  return (
    <section className="relative w-full overflow-hidden py-24 md:py-32 bg-ivory" id="story">
      {/* Background image with fading gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/image4.png"
          alt="AYIRAA brand story background"
          className="h-full w-full object-cover object-right lg:object-center"
        />
        {/* 
          Gradient overlays:
          - Mobile: vertical gradient from solid ivory at the top (under text) to transparent at the bottom (showing the product)
          - Desktop (lg): horizontal gradient from solid ivory on the left (hiding the image's embedded text) to transparent on the right (showing the product)
        */}
        <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory/95 via-ivory/80 to-transparent lg:bg-gradient-to-r lg:from-ivory lg:via-ivory/95 lg:via-ivory/40 lg:to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Content area: sits directly on the page, blending seamlessly */}
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
                  Thoughtfully crafted in Sri Lanka, made to reveal your skin’s
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
          
          {/* Right spacer to allow the background image's product bottle to show through */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 animate-pulse-slow" />
        </div>
      </div>
    </section>
  );
}