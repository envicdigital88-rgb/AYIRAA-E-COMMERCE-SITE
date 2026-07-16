import React from 'react';
import { motion } from 'framer-motion';
type Variant = 'primary' | 'outline' | 'ghost' | 'dark';
interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  'aria-label'?: string;
}
const base =
'inline-flex items-center justify-center gap-2 rounded-xl h-12 px-8 text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:opacity-50 disabled:cursor-not-allowed';
const variants: Record<Variant, string> = {
  primary:
  'bg-gold text-charcoal shadow-gold hover:bg-gold-deep hover:text-white',
  dark: 'bg-charcoal text-white shadow-soft hover:bg-black',
  outline:
  'border border-charcoal/20 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-white',
  ghost: 'text-charcoal hover:text-gold-deep'
};
export function Button({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  className = '',
  disabled,
  fullWidth,
  'aria-label': ariaLabel
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      whileHover={
      disabled ?
      undefined :
      {
        scale: 1.03
      }
      }
      whileTap={
      disabled ?
      undefined :
      {
        scale: 0.98
      }
      }
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 22
      }}
      className={`${base} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}>
      
      {children}
    </motion.button>);

}