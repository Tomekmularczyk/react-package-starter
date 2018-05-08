const path = require('path')
const packageName = require('./package.json').name

const baseConfig = (mode, outputFileName) => ({
  mode,
  entry: {
    index: './src/index.jsx'
  },
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: outputFileName,
    library: packageName,
    libraryTarget: 'umd',
    globalObject: 'this', // https://github.com/webpack/webpack/issues/6642
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: false
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },

  // externals: /^(react|styled-jsx)$/i
  // externals: {
  //   react: 'react',
  //   'styled-jsx': 'styled-jsx'
  // }
  externals : {
    react: 'react'
  }
})

module.exports = [
  baseConfig('development', 'dev.js'),
  baseConfig('production', 'prod.js')
]