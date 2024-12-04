/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Tangerine:'rgb(255, 119, 41)',
        Gray:'rgb(122, 122, 122)',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

