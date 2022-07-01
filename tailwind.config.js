/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'base': '#06102d',
      'text': '#ffffff',
      'head': '#3ab7bf',
      'green': '#339966',
      'red': '#cc0000',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
