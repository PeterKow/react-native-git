'use strict';

var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var config = {

  debug: true,

  devtool: 'source-map',

  entry: {
    'index.ios': ['./app/index.ios.js'],
    //'index.android': ['./index.android.js'],
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },

  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'app'),
        //path.resolve(__dirname, 'node_modules/react-native/Libraries/react-native'),
        //path.resolve(__dirname, 'node_modules/react-native-navbar'),
      ],
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'stage-0','react'],
      },
    }]
  },

  plugins: [],

};

module.exports = config;