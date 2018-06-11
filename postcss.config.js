module.exports = {
  plugins: {
    'postcss-import': {
      path: 'source/css/',
    },
    'postcss-preset-env': {
      browsers: [
        'last 2 versions',
        '> 1%',
      ],
    },
  },
};
