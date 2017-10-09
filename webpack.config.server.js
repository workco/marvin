const fs = require('fs');

const { paths } = require('./webpack/config');
const { rules } = require('./webpack/config');
const { plugins } = require('./webpack/config');
const { resolve } = require('./webpack/config');
const { IS_PRODUCTION } = require('./webpack/config');

// Webpack config
const config = {
  target: 'node',
  watch: !IS_PRODUCTION,
  devtool: IS_PRODUCTION ? false : 'source-map',
  context: paths.javascript,
  entry: [
    './server.js',
  ],
  output: {
    path: paths.build,
    publicPath: '/',
    filename: 'server.js',
  },
  module: {
    rules,
  },
  resolve,
  plugins,
  // Fix for node modules
  externals: fs.readdirSync('node_modules').reduce((accumulator, module) => {
    const newAccumulator = accumulator;
    if (module !== '.bin') {
      newAccumulator[module] = `commonjs ${ module }`;
    }

    return newAccumulator;
  }, {}),
};

module.exports = config;
