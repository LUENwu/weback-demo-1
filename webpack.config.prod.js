const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

 module.exports = {
  mode: 'production',
  entry:'./src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
    title: 'My App',
    template: 'assets/test.html'
  }),
  new MiniCssExtractPlugin({
    filename: 'index.[contenthash].css'
  })
],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
}










  
