/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pepperGray: '#222626',
        pepperLightGray: '#303A3A',
        pepperWhite: '#DEFFFF',
        btnActive: '#314B4C',
        btnNormal: '#303A3A'
      },
    },
  },
  plugins: [],
}

