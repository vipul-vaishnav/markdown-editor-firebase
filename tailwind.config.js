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
      },
    },
  },
  plugins: [],
};
