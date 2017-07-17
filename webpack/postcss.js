const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  rules: {
    prod: {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'postcss-loader',
        ],
      }),
    },
    dev: {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'style-loader',
          options: { sourceMap: true },
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            sourceMap: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: { sourceMap: true },
        },
      ],
    },
  },
};
