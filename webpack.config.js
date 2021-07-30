const HtmlWebpackPlugin = require('html-webpack-plugin')
const ErrorWebpackPlugin = require('error-overlay-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, 'build'),
    hot: true,
  },
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'build.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new ErrorWebpackPlugin(),
  ],
}