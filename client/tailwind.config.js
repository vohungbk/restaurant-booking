module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './container/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        golden: '#DCCA87',
        black: '#0C0C0C',
        gray: '#545454',
        crimson: '#F5EFDB',
        grey: '#AAAAAA',
        white: '#FFFFFF',
      },
      fontFamily: {
        base: 'Cormorant Upright, serif',
        sans: 'Open Sans, sans-serif',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
