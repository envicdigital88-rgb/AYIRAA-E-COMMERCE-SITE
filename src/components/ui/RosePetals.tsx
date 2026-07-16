import React from 'react';

// Golden-ratio distribution for even horizontal spread, no Math.random() so values
// are stable across renders and SSR.
const PETALS = Array.from({ length: 20 }, (_, i) => {
  const left    = parseFloat(((i * 137.508) % 100).toFixed(2)); // golden angle spread
  const width   = 10 + Math.round((i * 4.13)  % 14);            // 10–24 px
  const height  = Math.round(width * (1.3 + (i * 0.04) % 0.5)); // natural petal ratio
  const dur     = parseFloat((9 + (i * 2.37) % 9).toFixed(1));  // 9–18 s
  const delay   = parseFloat((-((i * 3.13) % 20)).toFixed(1));  // negative = already airborne
  const swayPx  = Math.round(45 + (i * 11.3) % 75);             // 45–120 px side-sway
  const opacity = parseFloat((0.55 + (i * 0.022) % 0.35).toFixed(2));
  const rotEnd  = 300 + Math.round((i * 41) % 220);              // total spin degrees

  // Soft pink palette — four alternating shades
  const palettes = [
    { from: '#ffd6e0', to: '#ffb3c6' },
    { from: '#ffb3c6', to: '#ff85a1' },
    { from: '#ffc2ce', to: '#ff6b95' },
    { from: '#ffe4ea', to: '#ffb3c6' },
  ];
  const { from, to } = palettes[i % 4];

  return { id: i, left, width, height, dur, delay, swayPx, opacity, rotEnd, from, to };
});

export function RosePetals() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 45 }}  /* above content, below modals/cart */
    >
      {PETALS.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            top: 0,
            left: `${p.left}%`,
            width:  p.width,
            height: p.height,
            /* CSS custom props consumed by the keyframe */
            '--sway-x':        `${p.swayPx}px`,
            '--petal-opacity': p.opacity,
            '--petal-rot-end': `${p.rotEnd}deg`,
            animation: `petalFall ${p.dur}s ${p.delay}s linear infinite`,
            /* Organic petal silhouette */
            borderRadius: '60% 40% 60% 40% / 55% 55% 45% 45%',
            background:   `radial-gradient(ellipse at 35% 30%, ${p.from}, ${p.to})`,
            transform:    'rotate(45deg)',
            filter:       'drop-shadow(0 1px 2px rgba(180,60,80,0.18))',
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
