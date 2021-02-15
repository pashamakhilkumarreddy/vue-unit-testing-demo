const path = require('path');
const { merge } = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.config');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', 
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', 
          'css-loader', 
          'sass-loader'
        ], // turn sass into css, css into commonjs, inject styles into DOM
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
  ],
});
