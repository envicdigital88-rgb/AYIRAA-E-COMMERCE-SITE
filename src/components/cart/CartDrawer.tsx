import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  XIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  TrashIcon } from
'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatLKR, DELIVERY_FEE } from '../../data/products';
import { Button } from '../ui/Button';
export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    subtotal,
    updateQuantity,
    removeItem,
    count
  } = useCart();
  return (
    <AnimatePresence>
      {isOpen &&
      <>
          <motion.div
          className="fixed inset-0 z-50 bg-charcoal/40 backdrop-blur-sm"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          onClick={closeCart} />
        
          <motion.aside
          className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-ivory shadow-lift"
          initial={{
            x: '100%'
          }}
          animate={{
            x: 0
          }}
          exit={{
            x: '100%'
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 34
          }}
          role="dialog"
          aria-label="Shopping cart">
          
            <div className="flex items-center justify-between border-b border-charcoal/10 px-6 py-5">
              <h2 className="font-serif text-xl text-charcoal">
                Your Bag <span className="text-muted text-base">({count})</span>
              </h2>
              <button
              onClick={closeCart}
              aria-label="Close cart"
              className="text-charcoal hover:text-gold-deep">
              
                <XIcon className="h-5 w-5" />
              </button>
            </div>

            {items.length === 0 ?
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
                <ShoppingBagIcon
              className="h-10 w-10 text-sage"
              strokeWidth={1.2} />
            
                <p className="font-serif text-xl text-charcoal">
                  Your bag is empty
                </p>
                <p className="text-sm text-muted">
                  Discover our rice-powered rituals.
                </p>
                <Link to="/shop" onClick={closeCart}>
                  <Button variant="outline" className="mt-2">
                    Explore the Collection
                  </Button>
                </Link>
              </div> :

          <>
                <ul className="flex-1 divide-y divide-charcoal/5 overflow-y-auto px-6">
                  {items.map((item) =>
              <li key={item.product.id} className="flex gap-4 py-5">
                      <div className="h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-white">
                        <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-full w-full object-cover" />
                  
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-serif text-base text-charcoal">
                              {item.product.name}
                            </h3>
                            <p className="text-xs text-muted">
                              {item.product.size}
                            </p>
                          </div>
                          <button
                      onClick={() => removeItem(item.product.id)}
                      aria-label={`Remove ${item.product.name}`}
                      className="text-muted transition-colors hover:text-charcoal">
                      
                            <TrashIcon className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="mt-auto flex items-center justify-between pt-3">
                          <div className="flex items-center rounded-full border border-charcoal/15">
                            <button
                        onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.quantity - 1
                        )
                        }
                        className="flex h-8 w-8 items-center justify-center text-charcoal hover:text-gold-deep"
                        aria-label="Decrease quantity">
                        
                              <MinusIcon className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-6 text-center text-sm">
                              {item.quantity}
                            </span>
                            <button
                        onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.quantity + 1
                        )
                        }
                        className="flex h-8 w-8 items-center justify-center text-charcoal hover:text-gold-deep"
                        aria-label="Increase quantity">
                        
                              <PlusIcon className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <span className="font-medium text-charcoal">
                            {formatLKR(item.product.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </li>
              )}
                </ul>

                <div className="border-t border-charcoal/10 px-6 py-5">
                  <div className="mb-1 flex justify-between text-sm text-muted">
                    <span>Subtotal</span>
                    <span>{formatLKR(subtotal)}</span>
                  </div>
                  <div className="mb-3 flex justify-between text-sm text-muted">
                    <span>Delivery</span>
                    <span>{formatLKR(DELIVERY_FEE)}</span>
                  </div>
                  <div className="mb-5 flex justify-between border-t border-charcoal/10 pt-3 font-serif text-lg text-charcoal">
                    <span>Total</span>
                    <span>{formatLKR(subtotal + DELIVERY_FEE)}</span>
                  </div>
                  <Link to="/checkout" onClick={closeCart}>
                    <Button fullWidth>Proceed to Checkout</Button>
                  </Link>
                  <button
                onClick={closeCart}
                className="mt-3 w-full text-center text-xs tracking-wide text-muted underline underline-offset-4 hover:text-charcoal">
                
                    Continue shopping
                  </button>
                </div>
              </>
          }
          </motion.aside>
        </>
      }
    </AnimatePresence>);

}