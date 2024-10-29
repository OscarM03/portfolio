/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-gray': '#F5F5FC',
        'hero-bg': '#E6E6FA',
        'secondary': '#fd6909',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      screens: {
        'custom-950': '950px',
      },
    },
  },
  plugins: [],
}

