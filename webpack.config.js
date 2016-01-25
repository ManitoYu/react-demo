var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://192.168.162.128:3000',
    'webpack/hot/dev-server',
    './src/app'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/assets/',
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include: path.join(__dirname, 'src') },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader', include: path.join(__dirname, 'src') }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
