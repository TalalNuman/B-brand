module.exports = {
  purge: ['./src/App.js', './public/index.html'],  
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#EDD2F3',
      'secondary': '#FFFCDC',
      'charlie': '#84DFFF',
      'delta': '#516BEB',
     })
    ,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
