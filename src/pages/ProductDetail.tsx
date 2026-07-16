import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MinusIcon,
  PlusIcon,
  CheckIcon,
  ChevronLeftIcon,
  TruckIcon,
  LeafIcon,
  ShieldCheckIcon } from
'lucide-react';
import { getProduct, products, formatLKR } from '../data/products';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ui/ProductCard';
export function ProductDetail() {
  const { id } = useParams<{
    id: string;
  }>();
  const product = id ? getProduct(id) : undefined;
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  if (!product) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="font-serif text-3xl text-charcoal">Product not found</h1>
        <Link to="/shop">
          <Button variant="outline">Back to Shop</Button>
        </Link>
      </main>);

  }
  const related = products.filter((p) => p.id !== product.id);
  return (
    <main className="w-full bg-ivory">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-charcoal">
          
          <ChevronLeftIcon className="h-4 w-4" /> Back to Shop
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="overflow-hidden rounded-[32px] bg-white shadow-soft">
            
            <img
              src={product.image}
              alt={product.name}
              className="aspect-[4/5] w-full object-cover" />
            
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.7,
              delay: 0.1
            }}>
            
            <p className="text-xs font-medium tracking-luxe text-gold-deep">
              {product.tagline}
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-charcoal">
              {product.name}
            </h1>
            <p className="mt-4 font-serif text-2xl text-charcoal">
              {formatLKR(product.price)}
            </p>
            <p className="mt-1 text-sm text-muted">{product.size}</p>

            <p className="mt-6 text-base leading-relaxed text-muted">
              {product.description}
            </p>

            <div className="mt-7">
              <p className="text-xs font-semibold tracking-luxe text-charcoal">
                KEY INGREDIENTS
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.ingredients.map((ing) =>
                <span
                  key={ing}
                  className="rounded-full border border-charcoal/10 bg-white px-3 py-1 text-xs text-charcoal">
                  
                    {ing}
                  </span>
                )}
              </div>
            </div>

            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {product.benefits.map((b) =>
              <li
                key={b}
                className="flex items-center gap-2 text-sm text-charcoal">
                
                  <CheckIcon className="h-4 w-4 text-sage" /> {b}
                </li>
              )}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center rounded-full border border-charcoal/15 bg-white">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="flex h-12 w-12 items-center justify-center text-charcoal hover:text-gold-deep"
                  aria-label="Decrease quantity">
                  
                  <MinusIcon className="h-4 w-4" />
                </button>
                <span className="w-8 text-center font-medium">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="flex h-12 w-12 items-center justify-center text-charcoal hover:text-gold-deep"
                  aria-label="Increase quantity">
                  
                  <PlusIcon className="h-4 w-4" />
                </button>
              </div>
              <Button
                onClick={() => addItem(product, qty)}
                className="flex-1 sm:flex-none">
                
                Add to Bag — {formatLKR(product.price * qty)}
              </Button>
            </div>

            <div className="mt-8 grid gap-3 border-t border-charcoal/10 pt-6 text-sm text-muted">
              <p className="flex items-center gap-3">
                <TruckIcon className="h-4 w-4 text-gold-deep" /> Island-wide
                delivery in 1–2 business days
              </p>
              <p className="flex items-center gap-3">
                <LeafIcon className="h-4 w-4 text-gold-deep" /> Sulfate, paraben
                &amp; cruelty free
              </p>
              <p className="flex items-center gap-3">
                <ShieldCheckIcon className="h-4 w-4 text-gold-deep" /> Secure,
                encrypted checkout
              </p>
            </div>
          </motion.div>
        </div>

        <section className="mt-20 sm:mt-28">
          <h2 className="text-center font-serif text-3xl text-charcoal">
            You may also love
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {related.map((p, i) =>
            <ProductCard key={p.id} product={p} index={i} />
            )}
          </div>
        </section>
      </div>
    </main>);

}