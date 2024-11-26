/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'highlight': '#E3B577',
        'secondary': '#1B1A1A',
        'primary': '#331A15',
      },
      backgroundImage :{
        'bannerBg' : "URL('/src/assets/more/6.jpeg')",
        'cardBg' : "URL('/src/assets/more/1.png')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
