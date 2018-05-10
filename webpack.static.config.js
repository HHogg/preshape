const { resolve } = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './site/static.js',
  ],
  output: {
    filename: 'assets/preshape.[hash].min.js',
    path: resolve(__dirname, 'public'),
    publicPath: '/',
    libraryTarget: 'umd',
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      include: [/site/, /src/],
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader', 'postcss-loader'],
      }),
    }, {
      test: /\.ejs$/,
      use: ['ejs-loader'],
    }, {
      test: /\.md$/,
      use: ['raw-loader'],
    }],
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new ExtractTextPlugin({
      allChunks: true,
      filename: 'assets/preshape.[hash].min.css',
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new UglifyJSPlugin({
      uglifyOptions: {
        ecma: 6,
      },
    }),
    new StaticSiteGeneratorPlugin({
      paths: ['/'],
      crawl: true,
    }),
    new CopyWebpackPlugin([{
      from: './site/assets',
      to: './assets',
    }]),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
  ],
  resolve: {
    alias: {
      preshape: resolve(__dirname, './src/index.js'),
    },
  },
};
