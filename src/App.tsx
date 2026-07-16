import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
export function App() {
  return (
    <BrowserRouter>
      <CartProvider>
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
    </BrowserRouter>);

}