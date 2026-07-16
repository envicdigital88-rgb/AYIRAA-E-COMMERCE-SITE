import React from 'react';
import { Reveal } from './Reveal';
interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  inverted?: boolean;
}
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  inverted = false
}: SectionHeadingProps) {
  return (
    <Reveal
      className={
      align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'
      }>
      
      {eyebrow &&
      <span
        className={`inline-flex items-center gap-2 text-xs font-medium tracking-luxe ${inverted ? 'text-gold-soft' : 'text-gold-deep'}`}>
        
          {align === 'center' && <span className="h-px w-6 bg-gold" />}
          {eyebrow}
          {align === 'center' && <span className="h-px w-6 bg-gold" />}
        </span>
      }
      <h2
        className={`mt-4 font-serif text-3xl leading-tight sm:text-4xl ${inverted ? 'text-ivory' : 'text-charcoal'}`}>
        
        {title}
      </h2>
      {description &&
      <p
        className={`mt-4 text-base leading-relaxed ${inverted ? 'text-ivory/60' : 'text-muted'}`}>
        
          {description}
        </p>
      }
    </Reveal>);

}