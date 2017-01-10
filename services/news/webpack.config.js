var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './get.js',
  target: 'node',
  externals: [nodeExternals()],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
