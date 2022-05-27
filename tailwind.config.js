module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#F0D9E7',
        'secondary': '#FF94CC',
        'primary-buttons': '#A239EA',
        'secondary-buttons': '#5C33F6'
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, 350px)'
      }
    },
  },
  plugins: [],
}
