const {multipleBoxShadow} = require('./src/utils/postcss/functions.cjs');

module.exports = {
  plugins: [
    require('postcss-functions')({
      functions: {multipleBoxShadow},
    }),
    require('postcss-nested'),
    require('autoprefixer'),
    require('cssnano'),
  ],
};
