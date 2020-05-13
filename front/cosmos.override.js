module.exports = (config) => {
  config.module.rules.push({
    test: /\.tsx$/,
    use: [
      {
        loader: 'linaria/loader',
      },
    ],
  });

  return config;
};
