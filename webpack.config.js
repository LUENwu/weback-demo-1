const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


 module.exports = {
  mode: 'development',
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
  // new MiniCssExtractPlugin({
  //   filename: 'index.[contenthash].css'
  // })
],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', "css-loader",{
          loader:'sass-loader',
          options:{implementation:require('dart-sass')},
        }],
      },
      {
        test: /\.less$/i,
        use: ['style-loader', "css-loader",'less-loader'],
      },
      {
        test: /\.styl$/i,
        use: ['style-loader', "css-loader",'stylus-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource'
      },

      // {
      //   test: /\.(png|jpg|gif)$/i,
      //   use: [{
      //     loader:'file-loader'
      //   }]
      // },
    //   {
    //     test: /\.html$/,
    //     // 处理html文件的img图片（负责引入img，从而能被url-loader处理）
    //     // webpack5中使用 html-withimg-loader代替
    //     loader: 'html-withimg-loader'
    // }
      // {
      //   test: /\.(png|jpg|gif)$/i,
      //   use:[{
      //     loader:'url-loader',
      //     options:{
      //       limit:9000,
      //       esModule:false
      //     }
      //   }],
      //   type:'javascript/auto'
      // },
    ],
  }  
}












  
