const IS_PRODUCTION = process.env.NODE_ENV === 'production';

if (IS_PRODUCTION) {
  module.exports = null;
} else {
  module.exports = require('./logger-exports').default; // eslint-disable-line global-require
}
