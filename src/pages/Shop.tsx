import React from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ui/ProductCard';
import { Reveal } from '../components/ui/Reveal';
export function Shop() {
  return (
    <main className="w-full bg-ivory">
      <section className="border-b border-charcoal/5 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-10">
          <Reveal>
            <span className="text-xs font-medium tracking-luxe text-gold-deep">
              THE COLLECTION
            </span>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-charcoal sm:text-5xl">
              Shop AYIRAA
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
              Clean, rice-powered skincare crafted in Sri Lanka. Every formula
              is gentle, effective and made to reveal your natural glow.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) =>
            <ProductCard key={product.id} product={product} index={i} />
            )}
          </div>
        </div>
      </section>
    </main>);

}