module.exports = {
  plugins: [
    require('postcss-cssnext')({
      browsers: [
        'last 2 Firefox versions',
        'last 2 Chrome versions',
        'last 2 Edge versions',
        'last 2 Safari versions',
      ],
      features: {
        customProperties: false,
      },
    }),
  ],
};
