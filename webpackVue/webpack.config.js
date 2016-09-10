var path = require('path');
// NodeJS中的Path对象，用于处理目录的对象，提高开发效率。
var webpack = require('webpack');
// 模块导入
module.exports = {
    // 入口文件地址，不需要写完，会自动查找
    entry: './src/main',
    // 输出
    output: {
        path: path.join(__dirname, './dist'),
        // 文件地址，使用绝对路径形式
        filename: '[name].js',
        //[name]这里是webpack提供的根据路口文件自动生成的名字
        publicPath: '/dist/'
        // 公共文件生成的地址
    },

  
     module: {
    // avoid webpack trying to shim process
    noParse: /es6-promise\.js$/,
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel'
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
    // 开启source-map，webpack有多种source-map，在官网文档可以查到   build 模式一定要把这个去掉 不然超大
    //devtool: 'eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.devtool = '#source-map'
}