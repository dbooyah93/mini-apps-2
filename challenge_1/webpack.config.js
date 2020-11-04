const path = require('path');

module.exports = {
  entry: path.resolve(`${__dirname}/client/src/app.jsx`),
  output: {
    filename: 'bundle.js',
    path: path.resolve(`${__dirname}/client/dist`),
  },
  module: {
    rules: [
      {
        exclude: /(node_modules|bower_components)/,
        test:/\.(js|jsx)?$/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}