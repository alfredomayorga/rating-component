/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      orange: "#FC7614",
      'dark-blue': '#262E38',
      'light-grey': "#969FAD",
      'medium-grey': '#7C8798',
      white: '#ffffff',
      'very-dark-blue': "#131518"
    },
    extend: {},
  },
  plugins: [],
}
