const path = require( 'path' ) ;
module.exports = {
  entry: path.resolve(`${__dirname}/client/app.jsx`),
  output: {
    path: path.resolve(`${__dirname}/public`),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /\.(js|jsx)?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      }
    ]
  }
}