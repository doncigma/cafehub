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
          '50': '#f9f6ed',
          '100': '#efe7d2',
          '200': '#e1cfa7',
          '300': '#d0af74',
          '400': '#c1944e',
          '500': '#b28040',
          '600': '#996635', // caramel browns ^
          '700': '#7f4f2f', // deeper browns v
          '800': '#67402c',
          '900': '#59372a',
          '950': '#3f1c04',
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
