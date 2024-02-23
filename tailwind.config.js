/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'kaisei': ['Kaisei Tokumin'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }

    },
  },
  plugins: [],
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.svelte'],

}

