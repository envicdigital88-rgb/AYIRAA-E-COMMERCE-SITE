import React from 'react';
import { Link } from 'react-router-dom';
import {
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon } from
'lucide-react';
import { Logo } from '../ui/Logo';
const quickLinks = ['Home', 'Shop', 'About', 'Contact', 'Journal'];
const careLinks = [
'Delivery Information',
'Returns & Exchanges',
'FAQ',
'Track Your Order',
'Privacy Policy'];

export function Footer() {
  return (
    <footer className="w-full bg-charcoal text-ivory" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:pr-8">
            <Logo inverted />
            <p className="mt-6 text-sm leading-relaxed text-ivory/60">
              Rice-powered skincare, crafted in Sri Lanka. Clean, gentle rituals
              for your most radiant skin.
            </p>
            <div className="mt-6 flex gap-3">
              {[InstagramIcon, FacebookIcon, TwitterIcon].map((Icon, i) =>
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 transition-colors hover:border-gold hover:bg-gold hover:text-charcoal">
                
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold tracking-luxe text-gold-soft">
              QUICK LINKS
            </h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((l) =>
              <li key={l}>
                  <Link
                  to={l === 'Shop' ? '/shop' : '/'}
                  className="text-ivory/60 transition-colors hover:text-gold-soft">
                  
                    {l}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold tracking-luxe text-gold-soft">
              CUSTOMER CARE
            </h3>
            <ul className="space-y-3 text-sm">
              {careLinks.map((l) =>
              <li key={l}>
                  <a
                  href="#"
                  className="text-ivory/60 transition-colors hover:text-gold-soft">
                  
                    {l}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold tracking-luxe text-gold-soft">
              GET IN TOUCH
            </h3>
            <ul className="space-y-4 text-sm text-ivory/60">
              <li className="flex items-start gap-3">
                <MapPinIcon
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft"
                  strokeWidth={1.5} />
                
                <span>Colombo 05, Sri Lanka</span>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft"
                  strokeWidth={1.5} />
                
                <span>+94 77 123 4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MailIcon
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft"
                  strokeWidth={1.5} />
                
                <span>hello@ayiraa.lk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} AYIRAA.LK — The Divine Radiance. All
            rights reserved.
          </p>
          <p>Crafted with care in Sri Lanka.</p>
        </div>
      </div>
    </footer>);

}