const withCSS = require('@zeit/next-css');
const config = require('../app-config');

module.exports = withCSS({
  env: config,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.tsx$/,
      use: [
        {
          loader: 'linaria/loader',
        },
      ],
    });

    return config;
  },
});
