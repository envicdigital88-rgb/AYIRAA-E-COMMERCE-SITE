import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src="/image8.png"
          alt="AYIRAA skincare products on a stone pedestal with golden rice terraces"
          className="h-full w-full object-cover object-center"
        />
        {/* Left-to-right dark gradient so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/50 to-transparent" />
        {/* Bottom vignette for smooth transition to next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ivory/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 py-24 sm:px-10 lg:min-h-[90vh]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-lg"
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-medium tracking-luxe text-gold"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.6)' }}
          >
            <span className="h-px w-8 bg-gold" /> FROM NATURE, FOR YOUR RADIANCE
          </span>

          <h1
            className="mt-6 font-serif text-4xl leading-[1.08] text-ivory sm:text-5xl lg:text-6xl"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.95), 0 4px 40px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.9)' }}
          >
            Glow Naturally.
            <span className="block italic text-gold">
              Confidence starts
            </span>
            with healthy skin.
          </h1>

          <p
            className="mt-6 max-w-md text-base leading-relaxed text-ivory/80"
            style={{ textShadow: '0 1px 12px rgba(0,0,0,0.95), 0 2px 20px rgba(0,0,0,0.7)' }}
          >
            Rice-powered rituals, gently crafted in Sri Lanka. Clean,
            sulfate-free formulas that reveal your skin's most radiant, healthy
            glow.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link to="/shop">
              <Button variant="primary">
                Shop Collection <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/#story">
              <Button variant="ghost" className="border-ivory/50 text-ivory hover:bg-ivory/10 hover:text-ivory">
                Learn More
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-8">
            {[
              { k: '100%', v: 'Natural Actives' },
              { k: 'Cruelty', v: 'Free & Vegan' },
              { k: '1–2 Days', v: 'Island-wide' },
            ].map((s) => (
              <div key={s.v} style={{ textShadow: '0 1px 10px rgba(0,0,0,0.95), 0 2px 16px rgba(0,0,0,0.7)' }}>
                <p className="font-serif text-2xl text-ivory">{s.k}</p>
                <p className="text-xs tracking-wide text-ivory/60">{s.v}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}