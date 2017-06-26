var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    //publicPath: '/',
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }, {
        test: /\.(png|jpg)$/,
        use: 'file-loader?name=images/[name].[ext]'
      }],
    noParse: [new RegExp('node_modules/localforage/dist/localforage.js')]
  },
  resolve: {
    alias: {
      "react": "preact-compat",
      "react-dom": "preact-compat"
    }
  },
  devServer: {
    contentBase: __dirname + './dist',
    compress: true,
    historyApiFallback: true,
    port: 9000,
    stats: 'errors-only',
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'VBTL Webshop!',
      minify: {
        collapseWhitespace: true
      },
      template: './src/index.ejs',
    }),
    new ExtractTextPlugin('styles.css')
  ]
}
