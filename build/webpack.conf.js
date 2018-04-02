const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
console.log('=============== ' + process.env.NODE_ENV + ' ===============');

// todo fuck
const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV !== 'production'
});

module.exports = {
  devtool: 'source-map',
  entry: {
    app: resolve('src/index.js')
  },
  output: {
    filename: '[name].[hash].js', // [name] 代表 entry对应的名字; [hash] 代表整个本次构建的hash
    path: resolve('dist'),
    publicPath: '/' // 静态资源文件引用时的路径（加在引用静态资源前面的）
  },
  resolve: {
    extensions: ['.html', '.js', '.jsx'],
    alias: {
      'src': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [resolve('src'), resolve('test')],
        use: {
          loader: 'eslint-loader'
        },
        enforce: 'pre'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: { minimize: true }
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
        // todo 没有 extract 出去
        // use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        // todo extractTextPlugin
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: 'style-loader' // creates style nodes from JS strings
          }, {
            loader: 'css-loader' // translates CSS into CommonJS
          }, {
            loader: 'sass-loader' // compiles Sass to CSS
          }],
          // use style-loader in development
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?.+)?$/,
        loader: 'file-loader?name=[hash:12].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      inject: true
    }),
    extractSass,
    // new MiniCssExtractPlugin({
    //   filename: '[name].css',
    //   chunkFilename: '[id].css'
    // })
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
