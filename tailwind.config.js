/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      green: '#07AF60',
      red: '#db2777'
    },
    extend: {}
  },
  plugins: [require('flowbite/plugin')]
}
