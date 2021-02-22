module.exports = {
  important: true,
  purge: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
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
          solid: '#FFF',
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
