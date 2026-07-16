import React from 'react';
interface LogoProps {
  className?: string;
  tagline?: boolean;
  inverted?: boolean;
}
export function Logo({
  className = '',
  tagline = true,
  inverted = false
}: LogoProps) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src="/logo.png"
        alt="AYIRAA – The Divine Radiance"
        className={`h-10 w-auto object-contain transition-all ${inverted ? 'brightness-[5] saturate-0' : ''}`}
      />
    </span>
  );
}