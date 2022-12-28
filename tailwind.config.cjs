/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      backgroundImage:{
        icons: 'url(./src/assets/doodleitems.svg)',
      },
      textColor:{
        gold:{
          100:'#BF7506',
        }
      },
      borderColor:{
        gold:{
          100:'#BF7506',
          200:'#DD9C3C'
        }
      }
    },
  },
  plugins: [],
}
