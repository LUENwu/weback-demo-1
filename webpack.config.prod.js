const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

 module.exports = {
  mode: 'production',
  entry:'./src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
    title: 'My App',
    template: 'src/assets/test.html'
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
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader",
        {
          loader:'sass-loader',
          options:{implementation:require('dart-sass')},
        }],
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader",'less-loader'],
      },
      {
        test: /\.styl$/i,
        use: ['style-loader', "css-loader",'stylus-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource'
      }
    ],
  },
  
}

















  
