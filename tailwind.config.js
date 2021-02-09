module.exports = {
  important: true,
  purge: false,
  // purge: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      cinzel: ['Cinzel', 'sans-serif'],
    },
    extend: {
      colors: {
        black: {
          DEFAULT: '#231F20',
        },
        white: {
          DEFAULT: '#EAEAEA',
        },
        gold: {
          dark: '#8E793E',
          DEFAULT: '#AD974F',
        },
        blue: {
          dark: '#0B354D',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
