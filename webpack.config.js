const path = require('path');


module.exports = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: 'babel-loader',
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
