/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'color-calculator-bg': '#e3e2f7',
        'color-lighter': '#c7cded',
        'color-light': '#acbcf6',
        'color-medium': '#6276e3',
        'color-dark': '#3c51c6',
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin")]
};