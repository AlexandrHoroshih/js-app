const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack: config => {
    config.module.rules.push({
      test: /\.tsx$/,
      use: [
        {
            loader: require.resolve('babel-loader'),
            options: {
                presets: [['react-app', { flow: false, typescript: true }]],
            }
        },
        {
            loader: 'linaria/loader',
        },
    ],
    })

    return config
  },
});
