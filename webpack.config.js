var path = require('path')
var webpack = require('webpack')
var options = require('./webpack.base.config')

options.entry = './src/main.js'
options.output = {
  path: path.resolve(__dirname, './build'),
  publicPath: '/build/',
  filename: 'vue-sweetalert.js',
  library: 'VueSweetAlert',
  libraryTarget: 'umd'
}

options.devtool = '#source-map'
options.plugins = (options.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin()
])

module.exports = options