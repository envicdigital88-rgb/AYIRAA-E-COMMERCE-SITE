import React from 'react';
import { Hero } from '../components/sections/Hero';
import { FeaturedProducts } from '../components/sections/FeaturedProducts';
import { BrandStory } from '../components/sections/BrandStory';
import { WhyChoose } from '../components/sections/WhyChoose';
import { Benefits } from '../components/sections/Benefits';
import { Testimonials } from '../components/sections/Testimonials';
import { PaymentMethods } from '../components/sections/PaymentMethods';
import { DeliveryInfo } from '../components/sections/DeliveryInfo';
import { InstagramGallery } from '../components/sections/InstagramGallery';
import { Newsletter } from '../components/sections/Newsletter';
export function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <BrandStory />
      <WhyChoose />
      <Benefits />
      <Testimonials />
      <PaymentMethods />
      <DeliveryInfo />
      <InstagramGallery />
      <Newsletter />
    </main>);

}