var webpack = require('webpack');
var WebpackShellPlugin = require('webpack-shell-plugin');
var GasPlugin = require('gas-webpack-plugin');
var Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './dev/main.js',
  output: {
    path: __dirname + '/src',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: [
            'transform-es3-member-expression-literals',
            'transform-es3-property-literals'
          ]
        }
      }
    ]
  },
  plugins: [
    new GasPlugin(),
    new WebpackShellPlugin({
      onBuildEnd: ['gapps upload']
    }),
    new Dotenv()
  ],
  resolve: {
    extensions: ['.js']
  }
}
