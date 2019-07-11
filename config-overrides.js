const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = function override (config, env) {
  // ----- Hot module reload
  config = rewireReactHotLoader(config, env);

  // Adding alias for hot loader's react dom
  // https://github.com/hot-loader/react-dom#webpack
  config.resolve.alias['react-dom'] = '@hot-loader/react-dom';

  return config;
}
