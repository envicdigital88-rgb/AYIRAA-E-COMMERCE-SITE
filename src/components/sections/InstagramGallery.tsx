import React from 'react';
import { motion } from 'framer-motion';
import { InstagramIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

const INSTAGRAM_URL = 'https://www.instagram.com/ayiraa.lk/';

const images = [
  "/image6.png",
  "/image7.png",
  "/image1.png",
  "/image4.png",
  "/image3.png",
  "/image2.png",
];





export function InstagramGallery() {
  return (
    <section className="w-full bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="@AYIRAA.LK"
          title="Join the AYIRAA community" />
        
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {images.map((src, i) =>
          <motion.a
            key={i}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{
              opacity: 0,
              scale: 0.92
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true,
              amount: 0.2
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.07
            }}
            className="group relative block aspect-square overflow-hidden rounded-2xl"
            aria-label="View on Instagram">
            
              <img
              src={src}
              alt="AYIRAA on Instagram"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy" />
            
              <div className="absolute inset-0 flex items-center justify-center bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/40">
                <InstagramIcon className="h-7 w-7 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </motion.a>
          )}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <InstagramIcon className="h-4 w-4" /> Follow @ayiraa.lk
            </Button>
          </a>
        </div>
      </div>
    </section>);

}