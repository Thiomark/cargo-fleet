module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        spacing: {
            128: '32rem',
        },
    },
    fontFamily: {
      'body': ['Poppins', 'Roboto', 'sans-serif']
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}