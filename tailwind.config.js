import { _primary } from '#tailwind-config/theme/accentColor';
import Default from './layouts/default.vue';

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#9f7659',
        secondary: '#3f1c04',
        accent: '#fff5e9',
        'cafebrown': '#3f1c04',
      },
    },
  },
  plugins: [],
}
