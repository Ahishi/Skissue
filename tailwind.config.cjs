/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte}"],
  theme: {
    colors: {
      background: {
        lighter: '#404040',
        DEFAULT: '#262626',
        darker: '#1e1e1e',
      },
      'text': '#a4a4a4',
      'white': '#FFFFFF',
      'black': '#000000',
      'primary': {
        200: '#932657',
        300: '#a72b63',
        variant: '#a72b63',
        400: '#bb306f',
        500: '#CC397B',
        DEFAULT: '#CC397B',
        600: '#d14d89',
        700: '#d66296',
        800: '#dc76a4'
      },
    },
    extend: {},
  },
  plugins: [],
}
