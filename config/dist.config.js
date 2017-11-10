const path = require('path');
const webpack = require('webpack');
const packageName = require('../package.json').name;

module.exports = {

  entry: {
    index: './src/index.jsx',
  },

  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].js',
    library: packageName,
    libraryTarget: 'umd',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          }
        ]
      }
    ]
  },

  resolve: {
    modules: [
      "node_modules",
      "../src",
    ],
    extensions: ['.js', '.jsx'],
  },

  externals: ["react"],
};