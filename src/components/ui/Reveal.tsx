import React from 'react';
import { motion } from 'framer-motion';
type Direction = 'up' | 'left' | 'right' | 'scale' | 'fade';
interface RevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'span';
}
const offsets: Record<
  Direction,
  {
    opacity: number;
    x?: number;
    y?: number;
    scale?: number;
  }> =
{
  up: {
    opacity: 0,
    y: 32
  },
  left: {
    opacity: 0,
    x: -40
  },
  right: {
    opacity: 0,
    x: 40
  },
  scale: {
    opacity: 0,
    scale: 0.94
  },
  fade: {
    opacity: 0
  }
};
export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  as = 'div'
}: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      initial={offsets[direction]}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1
      }}
      viewport={{
        once: true,
        amount: 0.25
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}>
      
      {children}
    </MotionTag>);

}