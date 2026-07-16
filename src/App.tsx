import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { CartProvider } from './context/CartContext';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Checkout } from './pages/Checkout';
import { RosePetals } from './components/ui/RosePetals';
import { Preloader } from './components/ui/Preloader';

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Disable body scroll when loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  useEffect(() => {
    // Keep loader active for 2.2 seconds to allow the flower blowing animation to be enjoyed, then fade out
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <CartProvider>
        {/* Fullscreen premium preloader */}
        <AnimatePresence mode="wait">
          {loading && <Preloader key="loader" />}
        </AnimatePresence>

        <div className="flex min-h-screen w-full flex-col bg-ivory">
          <ScrollToTop />
          <AnnouncementBar />
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
          <Footer />
          <CartDrawer />
          <RosePetals />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}