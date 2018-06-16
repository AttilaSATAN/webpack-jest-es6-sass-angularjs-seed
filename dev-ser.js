
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const path = require('path');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: {
    index:path.resolve(__dirname,'./')
  },
  quiet: false,
  noInfo: false,
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false,
  },
}).listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});