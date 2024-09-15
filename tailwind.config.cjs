const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,ts,md}',
    'app/src/app/pages/home/**/*.{html,ts,md}', // Adding the path to your page,
    '*'
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '0.9rem',
        sm: '0.95rem',
        base: '1rem',
        lg:  '1.075rem',
        xl:  '1.5rem',
        '2xl': '6rem',
        '3xl': '6rem',
        '4xl': '6rem',
        '5xl': '6rem',
        '6xl': '6rem',
        '7xl': '6rem',
        '8xl': '6rem',
        '9xl': '6rem',
      },
      colors: {
        primary: colors.pink,
        gray: colors.gray,
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), plugin(function ({addBase, theme}) {
    addBase({
      'a': {
        color: theme('colors.primary.500'),
        '&:hover': {
          color: theme('colors.primary.600'),
        },
        code: {color: theme('colors.primary.400')},
      },
      'h1, h2': {
        fontWeight: '700',
        letterSpacing: theme('letterSpacing.tight'),
      },
      'h1': {
        fontSize: '1.85rem',
        color: theme('colors.gray.900'),
      },
      'h2': {
        fontSize: '1.7rem',
        color: theme('colors.gray.900'),
      },
      'h3': {
        fontSize: '1.55rem',
        color: theme('colors.gray.900'),
        fontWeight: '600',
      },
      'p': {
        fontSize: theme('fontSize.base'),
        color: theme('colors.gray.600'),
      },
      'code': {
        color: theme('colors.indigo.500'),
      },
    });
  }),],
};
