const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');

const config = require('../app-config');

module.exports = {
  entry: './pages/_entry.tsx',
  mode: config.env,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: ['next/babel', 'linaria/babel'],
              plugins: ['effector/babel-plugin'],
            },
          },
          {
            loader: require.resolve('ts-loader'),
            options: {
              transpileOnly: true,
              configFile: path.resolve(__dirname, './tsconfig.json'),
            },
          },
          {
            loader: require.resolve('linaria/loader'),
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
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
              hmr: config.env !== 'production',
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
  },
  stats: { children: false },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './.build'),
    publicPath: '/',
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
