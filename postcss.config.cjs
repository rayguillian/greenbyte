module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nesting'), // This enables CSS nesting
    require('tailwindcss'),
    require('autoprefixer'),
  ]
};
