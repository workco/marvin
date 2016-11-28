const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
  module.exports = null;
} else {
  module.exports = require('./redux-dev-tools-exports').default; // eslint-disable-line global-require
}
