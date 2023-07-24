/* eslint-env node */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#141414',
        button: 'rgba(42,42,42,.6)',
        description: '#181818',
        borderbutton: 'hsla(0,0%,100%,.5)'
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}