// import { _primary } from '#tailwind-config/theme/accentColor';
// import Default from './layouts/default.vue';

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        coffee: {
          '50': '#f6f4f0',
          '100': '#e9e2d8',
          '200': '#d6c5b2',
          '300': '#bea286',
          '400': '#aa8465',
          '500': '#9f7659',
          '600': '#855d49',
          '700': '#6b483d',
          '800': '#5b3f38',
          '900': '#503733',
          '950': '#2d1d1b',
        },
        coffeewarm: {
          '50': '#f9f4ed',
          '100': '#f0e4d1',
          '200': '#e2c9a6',
          '300': '#d2a572',
          '400': '#c3874c',
          '500': '#af703c',
          '600': '#9b5933',
          '700': '#7c432c',
          '800': '#69382a',
          '900': '#5a3129',
          '950': '#341814',
        },
        mocha: '#9f7659',
        caramel: '#80512f',
        darkcaramel: '#3f1c04',
        cream: '#e5d0c2',
      },
    },
  },
  plugins: [],
}
