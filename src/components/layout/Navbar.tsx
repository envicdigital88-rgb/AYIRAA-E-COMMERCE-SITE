import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SearchIcon,
  UserIcon,
  ShoppingBagIcon,
  MenuIcon,
  XIcon } from
'lucide-react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { useCart } from '../../context/CartContext';
const links = [
{
  label: 'Home',
  to: '/'
},
{
  label: 'Shop',
  to: '/shop'
},
{
  label: 'About',
  to: '/#story'
},
{
  label: 'Contact',
  to: '/#contact'
}];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);
  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${scrolled ? 'bg-ivory/90 shadow-soft backdrop-blur-md' : 'bg-ivory/70 backdrop-blur-sm'}`}>
      
      <nav className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Left: mobile menu + desktop links */}
        <div className="flex flex-1 items-center gap-8">
          <button
            className="lg:hidden text-charcoal"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu">
            
            <MenuIcon className="h-6 w-6" />
          </button>
          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((l) =>
            <li key={l.label}>
                <Link
                to={l.to}
                className="group relative text-sm font-medium tracking-wide text-charcoal transition-colors hover:text-gold-deep">
                
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Center: logo — absolutely centered so it's always in the middle regardless of left/right widths */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 shrink-0" aria-label="AYIRAA home">
          <Logo />
        </Link>

        {/* Right: actions */}
        <div className="flex flex-1 items-center justify-end gap-4 sm:gap-5">
          <button
            className="hidden text-charcoal transition-colors hover:text-gold-deep sm:block"
            aria-label="Search">
            
            <SearchIcon className="h-5 w-5" />
          </button>
          <button
            className="hidden text-charcoal transition-colors hover:text-gold-deep sm:block"
            aria-label="Account">
            
            <UserIcon className="h-5 w-5" />
          </button>
          <button
            className="relative text-charcoal transition-colors hover:text-gold-deep"
            onClick={openCart}
            aria-label={`Cart, ${count} items`}>
            
            <ShoppingBagIcon className="h-5 w-5" />
            <AnimatePresence>
              {count > 0 &&
              <motion.span
                key={count}
                initial={{
                  scale: 0
                }}
                animate={{
                  scale: 1
                }}
                exit={{
                  scale: 0
                }}
                className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-charcoal px-1 text-[10px] font-semibold text-white">
                
                  {count}
                </motion.span>
              }
            </AnimatePresence>
          </button>
          <div className="hidden md:block">
            <Link to="/shop">
              <Button className="h-10 px-6 text-xs">Shop Now</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen &&
        <>
            <motion.div
            className="fixed inset-0 z-40 bg-charcoal/30 backdrop-blur-sm lg:hidden"
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            onClick={() => setMobileOpen(false)} />
          
            <motion.div
            className="fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-ivory p-6 shadow-lift lg:hidden"
            initial={{
              x: '-100%'
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: '-100%'
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 32
            }}>
            
              <div className="mb-10 flex items-center justify-between">
                <Logo tagline={false} />
                <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu">
                
                  <XIcon className="h-6 w-6 text-charcoal" />
                </button>
              </div>
              <ul className="flex flex-col gap-6">
                {links.map((l) =>
              <li key={l.label}>
                    <Link
                  to={l.to}
                  className="font-serif text-2xl text-charcoal">
                  
                      {l.label}
                    </Link>
                  </li>
              )}
              </ul>
              <div className="mt-auto">
                <Link to="/shop">
                  <Button fullWidth>Shop Now</Button>
                </Link>
              </div>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </header>);

}