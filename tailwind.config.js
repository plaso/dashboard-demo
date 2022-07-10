const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        brand: '#0eb0a4'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
