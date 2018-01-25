'use strict';

//webpack's main purpose is to handle all the extra script tags and concats it all into single file. called bundle. also does that with SCSS into the head

const HtmlPlugin = require('html-webpack-plugin');//with html
const ExtractPlugin = require('extract-text-webpack-plugin');//with css

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  devServer: { //gives us the ability to hook into stuff in dev server
    historyApiFallback: true //history shit
  },
  entry: `${__dirname}/src/main.js`,//where webpack reads app
  output: { //drop our final build into this directory
    filename: 'bundle-[hash].js',
    path: `${__dirname}/build`,
    publicPath: '/'
  },
  plugins: [
    new HtmlPlugin({ template: `${__dirname}/src/index.html`}),
    new ExtractPlugin('bundle-[hash].css')
  ],
  module: { //holds all the loaders as part of our app
    rules: [
      {
        test: /\.js$/, //look for this (regex)
        exclude: /node_modules/, //cept this
        loader: 'babel-loader' //do this
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  }
}
