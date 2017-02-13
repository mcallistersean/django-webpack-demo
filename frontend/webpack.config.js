/**
 * Created by sean on 13/02/17.
 */
var webpack = require('webpack');
var path = require('path');
var BundleTracker = require('webpack-bundle-tracker');

var output_path = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './app/index.js',
  output: {
        filename: 'bundle.js',
        path: output_path,
        // the public path must reflect
        // STATIC_URL
        // of preferably:
        // STATIC_URL + a prefix used in STATICFILES_DIRS
        // https://docs.djangoproject.com/en/1.10/ref/settings/#std:setting-STATICFILES_DIRS
        publicPath: '/static/webpack/'
  },
  module: {
      rules: [
          {
              test: /\.css$/,
              use: [
                  'style-loader',
                  'css-loader'
              ]
          },
          {
              test: /\.(jpg|jpeg|svg)$/,
              loader: 'file-loader'
          }
      ]
  },
  plugins: [
      new BundleTracker({
        filename: './webpack-stats.json',
        path: output_path
      })
  ]
};
