const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEFAULT_PORT = 4000;

module.exports = {
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${process.env.PORT || DEFAULT_PORT}`,
    'webpack/hot/only-dev-server',
    './site/index.js',
  ],
  output:  {
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      include: [/site/, /src/],
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    }, {
      test: /\.md$/,
      use: ['raw-loader'],
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './site/index.ejs',
    }),
  ],
  resolve: {
    alias: {
      preshape: resolve(__dirname, './src/index.js'),
    },
  },
  devtool: 'source-map',
  devServer: {
    contentBase: resolve(__dirname, 'site'),
    historyApiFallback: true,
    hot: true,
    host: 'localhost',
    port: process.env.PORT || DEFAULT_PORT,
  },
};
