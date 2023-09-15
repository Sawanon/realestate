/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F6F6F7',
        'onprimary': '#162124',
        'secondary': '#093642',
      },
      fontFamily: {
        'body': 'Montserrat'
      }
    },
  },
  plugins: [],
}

