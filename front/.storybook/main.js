module.exports = {
    stories: ['../**/*.stories.[tj]sx'],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('babel-loader'),
                    options: {
                        presets: [['react-app', { flow: false, typescript: true }]],
                    },
                },
                {
                    loader: require.resolve('react-docgen-typescript-loader'),
                },
                {
                    loader: 'linaria/loader',
                },
            ]
          });
        
          config.resolve.extensions.push('.ts', '.tsx');

          return config;
    },
    addons: [
        '@storybook/addon-viewport/register',
        '@storybook/addon-knobs/register',
        '@storybook/addon-actions/register'
    ],
};