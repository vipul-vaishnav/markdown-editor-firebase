/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        default: ['DM Sans', 'sans-serif'],
        markdown: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        back: '#121212',
        primary: '#212529',
        secondary: '#12b886',
        tertiary: '#343a40',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
