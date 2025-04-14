/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'desktop': {'min': '1980px'},
      },
      colors: {
        'orange-500': '#FF6D00',
      },
      width: {
        '37': '37%',
      },
    },
  },
  plugins: [],
} 