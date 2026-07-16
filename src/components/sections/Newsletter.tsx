import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3500);
  };
  return (
    <section className="w-full bg-white py-20 sm:py-28">
      <Reveal className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <span className="text-xs font-medium tracking-luxe text-gold-deep">
          STAY RADIANT
        </span>
        <h2 className="mt-4 font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
          Join our community
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Be the first to know about new launches, rituals and members-only
          offers. A little glow, straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="h-12 flex-1 rounded-xl border border-charcoal/15 bg-ivory px-5 text-sm text-charcoal outline-none transition-colors placeholder:text-muted focus:border-gold" />
          
          <Button type="submit">Subscribe</Button>
        </form>

        <AnimatePresence>
          {submitted &&
          <motion.p
            initial={{
              opacity: 0,
              y: 8
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0
            }}
            className="mt-4 inline-flex items-center gap-2 text-sm text-sage">
            
              <CheckIcon className="h-4 w-4" /> Thank you — welcome to AYIRAA.
            </motion.p>
          }
        </AnimatePresence>
      </Reveal>
    </section>);

}