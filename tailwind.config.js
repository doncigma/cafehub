// import { _primary } from '#tailwind-config/theme/accentColor';
// import Default from './layouts/default.vue';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.config.{js,ts}',
    './app.vue',
  ],
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
        // prime(500): '#9f7659',
        // darker(950): '#3f1c04',
        // lighter(50): '#fff5e9',
      },
    },
  },
  plugins: [],
}
