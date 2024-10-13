const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,ts,md}',
    'app/src/app/pages/home/**/*.{html,ts,md}',
    '*'
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '1.05rem',
        sm: '1.15rem',
        base: '1.2rem',
        lg:  '1.3rem',
        xl:  '1.6rem',
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
        primary: {
          '50':  '#f3f1fe',
          '100': '#e4e1fd',
          '200': '#c8c3fb',
          '300': '#ada5f9',
          '400': '#9087f6',
          '500': '#7b68ee',
          '600': '#6c5bd4',
          '700': '#5a4eb8',
          '800': '#493e99',
          '900': '#372f75',
          '950': '#211a46'
        },
        gray: colors.gray,
        pink: {
          '500': '#ff117a',
        }
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
      'h1': {// todo
        fontSize: '1.7rem',
        color: theme('colors.gray.900'),
      },
      'h2': {
        fontSize: '1.8rem',
        color: theme('colors.gray.900'),
      },
      'h3': {
        fontSize: '1.55rem',
        color: theme('colors.gray.900'),
        fontWeight: '600',
      },
      'p': {
        fontSize: theme('fontSize.lg'),
        color: theme('colors.gray.900'),
      },
    });
  }),],
};
