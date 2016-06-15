var path = require('path')
var webpack = require('webpack')
var options = require('./webpack.base.config')

options.entry = './src/app.js'
options.output = {
  path: path.resolve(__dirname, './dist'),
  publicPath: '/dist/',
  filename: 'dist.js',
}
options.devServer = {
  historyApiFallback: true,
  noInfo: true
}
options.devtool = '#eval-source-map'

module.exports = options
