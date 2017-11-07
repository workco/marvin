const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_DEVELOPMENT = NODE_ENV === 'development';
const IS_PRODUCTION = NODE_ENV === 'production';

const autoprefixerOptions = {
  browsers: [
    'last 3 version',
    'ie >= 10',
  ],
};

const sassLoaders = [
  {
    loader: 'css-loader',
    options: {
      sourceMap: IS_DEVELOPMENT,
      minimize: IS_PRODUCTION,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: IS_DEVELOPMENT,
      plugins: () => [
        autoprefixer(autoprefixerOptions),
      ],
    },
  },
  {
    loader: 'sass-loader',
    options: { sourceMap: IS_DEVELOPMENT },
  },
];


module.exports = {
  rules: {
    prod: {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        use: sassLoaders,
      }),
    },
    dev: {
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader',
        },
      ].concat(sassLoaders),
    },
  },
};
