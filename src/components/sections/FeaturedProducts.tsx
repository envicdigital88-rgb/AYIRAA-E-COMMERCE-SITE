import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import { ProductCard } from '../ui/ProductCard';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
export function FeaturedProducts() {
  return (
    <section className="w-full bg-ivory py-20 sm:py-28" id="shop">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="THE COLLECTION"
          title="Rituals for radiant skin"
          description="Three considered formulas, each powered by fermented rice and clean botanicals." />
        
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) =>
          <ProductCard key={product.id} product={product} index={i} />
          )}
        </div>
        <div className="mt-12 flex justify-center">
          <Link to="/shop">
            <Button variant="outline">View Full Collection</Button>
          </Link>
        </div>
      </div>
    </section>);

}