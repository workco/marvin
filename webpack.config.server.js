const fs = require('fs');

const {
  paths,
  rules,
  plugins,
  resolve,
  IS_PRODUCTION,
  stats,
} = require('./webpack/config');

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
  stats,
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
