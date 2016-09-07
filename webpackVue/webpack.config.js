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

    // 加载器
    // module: {
    //     // 加载器
    //     loaders: [
    //     // 解析.vue文件
    //         { test: /\.vue$/, loader: 'vue' },
    //     // 转化ES6的语法
    //         { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
    //     // 编译css并自动添加css前缀
    //      //   { test: /\.css$/, loader: 'style!css!autoprefixer'},
    //     //.scss 文件想要编译，scss就需要这些东西！来编译处理
    //     //install css-loader style-loader sass-loader node-sass --save-dev
    //       //  { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
    //     // 图片转化，小于8K自动转化为base64的编码
    //      //   { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
    //     //html模板编译？
    //       //  { test: /\.(html|tpl)$/, loader: 'html-loader' },
    //     ]
    // },
    // // .vue的配置。需要单独出来配置，其实没什么必要--因为我删了也没保错，不过这里就留这把，因为官网文档里是可以有单独的配置的。
    // vue: {
    //     loaders: {
    //         css: 'style!css!autoprefixer',
    //     }
    // },
    // // 转化成es5的语法
    // babel: {
    //     presets: ['es2015'],
    //     plugins: ['transform-runtime']
    // },
    // resolve: {
    //     // require时省略的扩展名，如：require('module') 不需要module.js
    //     extensions: ['', '.js', '.vue'],
    //     // 别名，可以直接使用别名来代表设定的路径以及其他
    //     alias: {
    //         filter: path.join(__dirname, './src/filters'),
    //         components: path.join(__dirname, './src/components')
    //     }
    // },
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
  }
    // 开启source-map，webpack有多种source-map，在官网文档可以查到
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