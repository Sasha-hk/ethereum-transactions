/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    titles: {
      weight: '700',
      h1: '2.5rem',
      h2: '2.1rem',
      h3: '1.6rem',
      h4: '1.2rem',
      h5: '1rem',
    },
    screens: {
      '2xl': { max: '9999px' },
      // => @media (max-width: 9999px) { ... }

      xl: { max: '1200px' },
      // => @media (max-width: 1200px) { ... }

      lg: { max: '1024px' },
      // => @media (max-width: 1024px) { ... }

      md: { max: '768px' },
      // => @media (max-width: 768px) { ... }

      sm: { max: '480px' },
      // => @media (max-width: 480px) { ... }
    },
    extend: {
      fontFamily: {
        base: [
          'Montserrat',
          'sans-serif',
        ],
      },
      colors: {
        text: {
          DEFAULT: '#1A1A1A',
          revert: '#ffffff',
        },
        primary: {
          DEFAULT: '#3A80BA',
          900: '#1C3B55',
        },
      },
    },
  },
  plugins: [],
};
