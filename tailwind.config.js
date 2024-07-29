/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('./src/assets/hero-img.jpg')"
      },
      colors: {
        'custom-orange-start': '#ef5c39',
        'custom-orange-end': '#faa23f',
      }
    },
  },
  plugins: [],
}