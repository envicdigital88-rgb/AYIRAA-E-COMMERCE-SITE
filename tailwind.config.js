/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF8F5',
        gold: {
          DEFAULT: '#D8B46A',
          soft: '#E4C888',
          deep: '#B7943F',
        },
        sage: {
          DEFAULT: '#AAB79C',
          light: '#C4CEB9',
        },
        charcoal: '#2D2D2D',
        muted: '#777777',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '20px',
        xl2: '24px',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(45,45,45,0.12)',
        lift: '0 24px 60px -18px rgba(45,45,45,0.20)',
        gold: '0 12px 40px -12px rgba(216,180,106,0.35)',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [],
}
