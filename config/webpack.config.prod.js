"use strict";

const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.config.common.js");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const WebpackPwaManifest = require('webpack-pwa-manifest');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',

  output:
      {path: path.resolve(__dirname, '../dist/'), filename: '[name]-[hash].js'},

  plugins: [
    new CleanWebpackPlugin(),
    new ManifestPlugin(),
    new WebpackPwaManifest({
      name: 'Todo App',
      short_name: 'Todo App',
      theme_color: '#5a5ee7',
      background_color: '#ffffff',
      display: 'standalone',
      ios: true,
      Scope: '/',
      start_url: '/',
      icons: [{
        src: path.resolve('src/assets/icon.png'),
        sizes: [96, 128, 144, 160],
        ios: true
      }]
    }),
    new CopyPlugin(["src/serviceWorker.js"]),
  ],

  module: {
    rules: [{
      test: /\.(jpg|png|gif|woff|woff2|eot|ttf|svg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[path][name]-[hash].[ext]',
          outputPath: '/',
          publicPath: '../dist'
        }
      }]
    }]
  }
});
