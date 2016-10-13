var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    './source/main.jsx'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: './',
    filename: './bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './',
    hot: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: [__dirname + '/source'],
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  }
};
