import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { Product, formatLKR } from '../../data/products';
import { useCart } from '../../context/CartContext';
export function ProductCard({
  product,
  index = 0



}: {product: Product;index?: number;}) {
  const { addItem } = useCart();
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 32
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        amount: 0.2
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{
        y: -8
      }}
      className="group flex flex-col overflow-hidden rounded-card bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift">
      
      <Link
        to={`/product/${product.id}`}
        className="relative block overflow-hidden bg-ivory">
        
        {product.bestSeller &&
        <span className="absolute left-4 top-4 z-10 rounded-full bg-gold px-3 py-1 text-[10px] font-semibold tracking-[0.14em] text-charcoal">
            BESTSELLER
          </span>
        }
        <img
          src={product.image}
          alt={product.name}
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy" />
        
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] uppercase tracking-luxe text-sage">
          {product.tagline}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 className="mt-2 font-serif text-xl text-charcoal transition-colors group-hover:text-gold-deep">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-muted">{product.size}</p>
        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="font-serif text-lg text-charcoal">
            {formatLKR(product.price)}
          </span>
          <motion.button
            whileTap={{
              scale: 0.9
            }}
            onClick={() => addItem(product)}
            aria-label={`Add ${product.name} to bag`}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-charcoal text-white transition-colors duration-300 hover:bg-gold hover:text-charcoal">
            
            <PlusIcon className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </motion.article>);

}