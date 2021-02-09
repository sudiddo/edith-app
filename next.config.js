// // next.config.js
// const path = require('path');
// const withImages = require('next-images');
// module.exports = withImages({
//   exclude: path.resolve(__dirname, 'src/assets/icons'),
//   webpack(config, options) {
//     return config;
//   },
// });

const withImages = require('next-images');
module.exports = withImages();
