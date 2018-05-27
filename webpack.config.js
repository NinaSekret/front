const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'packages'),
  entry: [
    './mdl/material.js',
    'react-hot-loader/patch',
    './mdl/material.css',
    './core/styles.css',
    './core/init.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['env', 'react'] },
        },
      },
      {
        test: /\.(sass|scss|css)$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: { sourceMap: true, minimize: false },
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: true },
            },
          ],
        }),
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      path.join(__dirname, 'packages'),
      'node_modules'
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './core/index.html',
      hash: true,
      minify: {
        // removeAttributeQuotes: true,
        collapseWhitespace: false,
        html5: true,
        removeComments: false,
        removeEmptyAttributes: true,
      },
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true,
    }),
  ],
  devServer: {
    contentBase: './dist  ',
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    proxy: { '/api': 'http://localhost:3000' },
  },
};