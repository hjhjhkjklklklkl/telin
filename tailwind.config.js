/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'artifika' : ['Artifika', 'serif'],
        'monstasorrat' : ['Montserrat', 'sans-serif']
      },
      colors: {
        'primary' : "#FFC8B9",
        'baseprimary' : '#FFFDF0EC',
        'light0' : '#FFEBD9'
      }
    },
  },
  plugins: [],
}
