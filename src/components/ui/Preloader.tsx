import React from 'react';
import { motion } from 'framer-motion';

const petalsData = [
  { tx: '90px', ty: '-30px', rot: '360deg', delay: '0s', size: '14px' },
  { tx: '60px', ty: '70px', rot: '280deg', delay: '0.4s', size: '18px' },
  { tx: '-40px', ty: '80px', rot: '420deg', delay: '0.8s', size: '12px' },
  { tx: '-80px', ty: '-20px', rot: '180deg', delay: '1.2s', size: '16px' },
  { tx: '-30px', ty: '-90px', rot: '320deg', delay: '0.2s', size: '15px' },
  { tx: '70px', ty: '-70px', rot: '240deg', delay: '0.6s', size: '13px' },
  { tx: '20px', ty: '90px', rot: '390deg', delay: '1.0s', size: '17px' },
  { tx: '-90px', ty: '50px', rot: '290deg', delay: '1.4s', size: '14px' },
];

export function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ivory"
    >
      {/* Inline styles for custom blowing animation */}
      <style>{`
        @keyframes petalBlow {
          0% {
            transform: translate(0, 0) scale(0) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 0.85;
          }
          100% {
            transform: translate(var(--tx), var(--ty)) scale(1.1) rotate(var(--rot));
            opacity: 0;
          }
        }
        @keyframes pulseLogo {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 4px 12px rgba(216, 180, 106, 0.15));
          }
          50% {
            transform: scale(1.03);
            filter: drop-shadow(0 6px 20px rgba(216, 180, 106, 0.3));
          }
        }
        @keyframes flowerRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <div className="relative flex items-center justify-center">
        {/* Glowing Background Ring */}
        <div className="absolute w-44 h-44 rounded-full border border-gold-soft/30 animate-[flowerRotate_20s_linear_infinite]" />
        
        {/* Outer dotted track */}
        <div className="absolute w-48 h-48 rounded-full border border-dashed border-gold-deep/20 animate-[flowerRotate_45s_linear_infinite_reverse]" />

        {/* Radial Blowing Flower Petals */}
        {petalsData.map((p, idx) => (
          <div
            key={idx}
            className="absolute"
            style={{
              width: p.size,
              height: `calc(${p.size} * 1.3)`,
              borderRadius: '60% 40% 60% 40% / 55% 55% 45% 45%',
              background: 'radial-gradient(ellipse at 35% 30%, #ffd6e0, #ff85a1)',
              /* Pass target positions as CSS variables */
              '--tx': p.tx,
              '--ty': p.ty,
              '--rot': p.rot,
              animation: `petalBlow 2.4s ${p.delay} infinite ease-out`,
              boxShadow: '0 1px 3px rgba(180,60,80,0.15)',
              transformOrigin: 'center center',
            } as React.CSSProperties}
          />
        ))}

        {/* Center Logo */}
        <div 
          className="relative z-10 w-32 h-32 flex items-center justify-center animate-[pulseLogo_3s_ease-in-out_infinite]"
        >
          <img
            src="/logo.png"
            alt="AYIRAA Logo Loader"
            className="w-28 h-auto object-contain"
          />
        </div>
      </div>

      {/* Loading Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-8 text-center"
      >
        <span className="text-[10px] tracking-[0.4em] text-gold-deep font-semibold uppercase block">
          THE DIVINE RADIANCE
        </span>
        <span className="text-xs text-charcoal/40 font-medium tracking-wide mt-2 block">
          Preparing your ritual...
        </span>
      </motion.div>
    </motion.div>
  );
}
