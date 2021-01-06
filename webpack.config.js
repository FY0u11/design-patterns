require('dotenv').config()

module.exports = {
  mode: process.env.MODE,
  output: {
    filename: 'bundle.js'
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }

    ]
  },
  resolve: {
    extensions: ['.js', '.ts']
  }
}
