import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BanknoteIcon,
  CreditCardIcon,
  LandmarkIcon,
  WalletIcon,
  CheckCircle2Icon,
  ChevronLeftIcon,
  ShoppingBagIcon } from
'lucide-react';
import { useCart } from '../context/CartContext';
import { formatLKR, DELIVERY_FEE } from '../data/products';
import { Button } from '../components/ui/Button';
const paymentOptions = [
{
  id: 'cod',
  label: 'Cash on Delivery',
  icon: BanknoteIcon,
  note: 'Pay when your order arrives'
},
{
  id: 'card',
  label: 'Visa / Mastercard',
  icon: CreditCardIcon,
  note: 'Secure card payment'
},
{
  id: 'bank',
  label: 'Bank Transfer',
  icon: LandmarkIcon,
  note: 'Direct bank deposit'
},
{
  id: 'koko',
  label: 'Koko / Mintpay',
  icon: WalletIcon,
  note: 'Buy now, pay later'
}];

interface FormState {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
}
export function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [payment, setPayment] = useState('cod');
  const [placed, setPlaced] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: ''
  });
  const total = subtotal + DELIVERY_FEE;
  const update =
  (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) =>
  setForm((f) => ({
    ...f,
    [key]: e.target.value
  }));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPlaced(true);
    clearCart();
    window.scrollTo({
      top: 0
    });
  };
  if (placed) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-4 py-16 text-center">
        <motion.div
          initial={{
            scale: 0
          }}
          animate={{
            scale: 1
          }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 18
          }}>
          
          <CheckCircle2Icon className="h-16 w-16 text-sage" strokeWidth={1.3} />
        </motion.div>
        <h1 className="mt-6 font-serif text-4xl text-charcoal">
          Thank you, {form.name || 'friend'}.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Your AYIRAA order has been placed. A confirmation will arrive shortly,
          and your radiant ritual is on its way — island-wide delivery in 1–2
          business days.
        </p>
        <div className="mt-8">
          <Link to="/shop">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </main>);

  }
  if (items.length === 0) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center gap-5 px-4 text-center">
        <ShoppingBagIcon className="h-12 w-12 text-sage" strokeWidth={1.2} />
        <h1 className="font-serif text-3xl text-charcoal">Your bag is empty</h1>
        <p className="text-muted">
          Add a ritual to your bag before checking out.
        </p>
        <Link to="/shop">
          <Button variant="outline">Explore the Collection</Button>
        </Link>
      </main>);

  }
  const inputClass =
  'h-12 w-full rounded-xl border border-charcoal/15 bg-white px-4 text-sm text-charcoal outline-none transition-colors placeholder:text-muted focus:border-gold';
  return (
    <main className="w-full bg-ivory">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-10">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-charcoal">
          
          <ChevronLeftIcon className="h-4 w-4" /> Continue shopping
        </Link>
        <h1 className="mt-6 font-serif text-4xl text-charcoal">Checkout</h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-10">
            <section>
              <h2 className="font-serif text-xl text-charcoal">
                Delivery details
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-xs font-medium tracking-wide text-charcoal">
                    Full name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={update('name')}
                    className={inputClass}
                    placeholder="Your name" />
                  
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium tracking-wide text-charcoal">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    className={inputClass}
                    placeholder="you@email.com" />
                  
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium tracking-wide text-charcoal">
                    Phone
                  </label>
                  <input
                    required
                    value={form.phone}
                    onChange={update('phone')}
                    className={inputClass}
                    placeholder="+94 74 263 3838" />
                  
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-xs font-medium tracking-wide text-charcoal">
                    Address
                  </label>
                  <input
                    required
                    value={form.address}
                    onChange={update('address')}
                    className={inputClass}
                    placeholder="Street address" />
                  
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-xs font-medium tracking-wide text-charcoal">
                    City
                  </label>
                  <input
                    required
                    value={form.city}
                    onChange={update('city')}
                    className={inputClass}
                    placeholder="City" />
                  
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-xl text-charcoal">
                Payment method
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {paymentOptions.map((opt) => {
                  const active = payment === opt.id;
                  return (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => setPayment(opt.id)}
                      className={`flex items-center gap-4 rounded-card border p-4 text-left transition-all duration-300 ${active ? 'border-gold bg-gold/10 shadow-gold' : 'border-charcoal/10 bg-white hover:border-charcoal/25'}`}>
                      
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-full ${active ? 'bg-gold text-charcoal' : 'bg-ivory text-charcoal'}`}>
                        
                        <opt.icon className="h-5 w-5" strokeWidth={1.4} />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-charcoal">
                          {opt.label}
                        </span>
                        <span className="block text-xs text-muted">
                          {opt.note}
                        </span>
                      </span>
                    </button>);

                })}
              </div>

              <AnimatePresence mode="wait">
                {payment === 'card' &&
                <motion.div
                  key="card-fields"
                  initial={{
                    opacity: 0,
                    height: 0
                  }}
                  animate={{
                    opacity: 1,
                    height: 'auto'
                  }}
                  exit={{
                    opacity: 0,
                    height: 0
                  }}
                  className="overflow-hidden">
                  
                    <div className="mt-4 grid gap-4 rounded-card border border-charcoal/10 bg-white p-5 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label className="mb-1.5 block text-xs font-medium text-charcoal">
                          Card number
                        </label>
                        <input
                        className={inputClass}
                        placeholder="1234 5678 9012 3456"
                        inputMode="numeric" />
                      
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-charcoal">
                          Expiry
                        </label>
                        <input className={inputClass} placeholder="MM / YY" />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-charcoal">
                          CVC
                        </label>
                        <input
                        className={inputClass}
                        placeholder="123"
                        inputMode="numeric" />
                      
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-muted">
                      Demo only — no real payment is processed.
                    </p>
                  </motion.div>
                }
              </AnimatePresence>
            </section>

            <Button type="submit" fullWidth>
              Place Order — {formatLKR(total)}
            </Button>
          </form>

          {/* Summary */}
          <aside className="h-fit rounded-card bg-white p-6 shadow-soft lg:sticky lg:top-28">
            <h2 className="font-serif text-xl text-charcoal">Order summary</h2>
            <ul className="mt-5 divide-y divide-charcoal/5">
              {items.map((item) =>
              <li key={item.product.id} className="flex gap-4 py-4">
                  <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-lg bg-ivory">
                    <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-full w-full object-cover" />
                  
                    <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-charcoal text-[10px] text-white">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <span className="font-serif text-sm text-charcoal">
                      {item.product.name}
                    </span>
                    <span className="text-xs text-muted">
                      {item.product.size}
                    </span>
                    <span className="mt-auto text-sm text-charcoal">
                      {formatLKR(item.product.price * item.quantity)}
                    </span>
                  </div>
                </li>
              )}
            </ul>
            <div className="mt-4 space-y-2 border-t border-charcoal/10 pt-4 text-sm">
              <div className="flex justify-between text-muted">
                <span>Subtotal</span>
                <span>{formatLKR(subtotal)}</span>
              </div>
              <div className="flex justify-between text-muted">
                <span>Delivery</span>
                <span>{formatLKR(DELIVERY_FEE)}</span>
              </div>
              <div className="flex justify-between border-t border-charcoal/10 pt-3 font-serif text-lg text-charcoal">
                <span>Total</span>
                <span>{formatLKR(total)}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>);

}