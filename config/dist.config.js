const path = require('path');
const webpack = require('webpack');

module.exports = {

  entry: {
    index: './src/index.jsx',
  },

  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].js',
    library: 'react-component-test',
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

  externals: [
    "react", "react-dom"
  ],
};