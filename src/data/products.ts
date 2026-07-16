export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  size: string;
  image: string;
  description: string;
  ingredients: string[];
  benefits: string[];
  bestSeller?: boolean;
}

// Prices in LKR (Sri Lankan Rupees)
export const products: Product[] = [
{
  id: 'rice-glow-serum',
  name: 'Rice Glow Serum',
  tagline: 'Illuminating Daily Treatment',
  price: 1890,
  size: '20ml',
  image: "/image1.png",

  description:
  'A luminous golden serum handcrafted with Nature\'s Purity. Rich in rice bran actives and niacinamide that visibly brightens, evens tone and restores a healthy, dewy glow with daily use.',
  ingredients: [
  'Rice Bran Actives',
  'Niacinamide 5%',
  'Squalane',
  'Rose Extract',
  'Vitamin B5'],

  benefits: [
  'Brightens tone',
  'Evens texture',
  'Restores glow',
  'Antioxidant rich'],

  bestSeller: true
},
{
  id: 'rosemary-root-serum',
  name: 'Rosemary Root Serum',
  tagline: 'Nourish • Strengthen • Grow',
  price: 2290,
  size: '50ml',
  image: "/image2.png",

  description:
  'A lightweight, fast-absorbing hair serum infused with pure rosemary extract to nourish scalp, strengthen roots, and stimulate healthy hair growth. Suitable for all hair types.',
  ingredients: [
  'Rosemary Leaf Extract',
  'Castor Oil',
  'Biotin',
  'Panthenol',
  'Vitamin E'],

  benefits: [
  'Nourishes scalp',
  'Strengthens roots',
  'Stimulates growth',
  'For all hair types'],

  bestSeller: false
},
{
  id: 'rice-glow-cleanser',
  name: 'Rice Glow Cleanser',
  tagline: 'Gentle Daily Facial Cleanser',
  price: 2490,
  size: '100ml',
  image: "/image3.png",

  description:
  'A featherlight, sulfate-free cleanser infused with fermented rice extract. Suitable for all skin types, it melts away impurities while preserving your skin\'s natural moisture barrier — leaving skin soft, fresh and luminous.',
  ingredients: [
  'Fermented Rice Water',
  'Rice Bran Oil',
  'Glycerin',
  'Aloe Vera',
  'Vitamin E'],

  benefits: [
  'Gently cleanses',
  'Hydrates & soothes',
  'Rice extract glow',
  'Sulfate & paraben free'],

  bestSeller: true
}];


export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatLKR(amount: number): string {
  return 'Rs. ' + amount.toLocaleString('en-LK');
}

export const DELIVERY_FEE = 450;