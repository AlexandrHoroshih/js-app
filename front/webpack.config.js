const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');

const config = require('../app-config');

module.exports = {
  entry: './pages/_entry.tsx',
  context: __dirname,
  mode: config.env,
  module: {
    rules: [
      {
        test: [/\.ts$/, /\.tsx/],
        include: __dirname,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: ['@babel/preset-env', 'linaria/babel'],
              plugins: ['effector/babel-plugin'],
            },
          },
          {
            loader: require.resolve('linaria/loader'),
            options: {
              sourceMap: config.env !== 'production',
            },
          },
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: ['@babel/preset-typescript', '@babel/preset-react'],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: false,
              importLoaders: 1,
            },
          },
          require.resolve('postcss-loader'),
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './.build'),
    host: '0.0.0.0',
    historyApiFallback: true,
    writeToDisk: true,
  },
  stats: { children: false },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './.build'),
    publicPath: '/',
  },
  node: {
    module: 'empty',
    dgram: 'empty',
    dns: 'mock',
    fs: 'empty',
    http2: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css',
    }),
    new EnvironmentPlugin(config),
  ],
};
