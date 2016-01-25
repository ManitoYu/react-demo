var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config');

var server = new WebpackDevServer(webpack(config), {

  proxy: {
    'api': 'http://192.168.162.128:8000'
  },

  publicPath: config.output.publicPath,
  hot: true

});

server.listen(3000, '192.168.162.128');
