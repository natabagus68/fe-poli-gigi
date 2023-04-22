/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        jura: ['jura', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive']
      }
    },
  },
  plugins: [],
}

