module.exports = {
  plugins: {
    'postcss-import': {
      path: 'source/css/',
    },
    'postcss-cssnext': {
      browsers: [
        'last 2 versions',
        '> 1%',
      ],
    },
  },
};
