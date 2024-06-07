// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Ubuntu Sans Mono', 'sans-serif'],
      },
    },
  },
  plugins: [],
}