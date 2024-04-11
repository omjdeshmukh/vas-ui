/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grad1: '#692CD4',
        grad2: '#E11286',
        'side-bg': '#EBEDF0',
        'light-violet':'#F9F5FF'
      },
      fontFamily: {
        jakarta: ['"Jakarta Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


