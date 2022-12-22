/* 
    1.初始化参数 1.合并参数,从配置文件 和shell语句中读取读取参数，并获取最终参数
    2.开始编译，从上一步拿到的参数初始化compiler对象
    加载所有配的插件，执行对象的run方法 开始编译
    确定入口，根据配置中的entry找到所有入口文件
    3.编译阶段，
    
*/

/* 
插件   核心库  tapable
*/

// class Compiler {
//   constructor(options) {
//     this.options = options;
//   }
// }

// let options = require("./webpack.config.js");
// let compiler = new Compiler(options);
// let { SyncHook } = require("tapable");

// let hook = new SyncHook();

// hook.tap("some app", () => {
//   console.log("ss");
// });
// hook.call();

//entry 入口
// output 出口
// module
// loader
// plugin
// chunk

// 构建流程
/* 
  1.初始化参数 ： 从配置文件读取和shell语句中读取合同参数，得到最终参数
  2.开始编译 ：从上一步得到的参数开始 初始化编译对象，执行对象的run 方法。加载所有的配置差插件，执行编译
  3.确定入口，根据配置中的entry 确定入口
  4.编译模块： 从入口文件出发，调用所用配置的loader对模块进行翻译，在找到模块依赖的模块，地柜本步骤，直到所有入口文件都经过本步骤处理
  5.完成模块编译： 在经过模块免疫后，会的得到所得翻译结果最终内容，以及他们的依赖关系。
  6.输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的chunk,再把每个chunk 转化成一个单独的文件加入到输出列表
  7.输出完成：确定好输入内容，
*/

/* 
   1.定义一个compiler类
   2.解析入口文件，获取 ast
   3.找出所有的依赖模块
   4.ast 装花城code
*/

/* 
  1.html-webpack-plugin
  2.clean-webpack-plugin
  3.contentBase
  4.mini-css-extract-plugin //
  5.optimize-css-assets-webpack-plugin   //压缩 css  欧普特麦子
  6.terser-webpack-plugin //压缩js
  7.purgecss-webpack-plugin //去除无用 css
*/
/* 
  css-loader
  style-loader
  postcss-loader
  less-loader
  file-loader
  url-loader
  img-loader
  babel-loader
  cache-loader // 缓存其他daloader

*/

/* 
  sourceMap
  devtool: 'sourceMap'

  eval： 生成代码通过 eval 执行，无法定位到错误代码，职能定位到错误文件，不会生成sourceMAP文件， 打包速度快
  source-map: 会生成对应的sourecemap文件，打包速度慢，能够定位错误代码所在的行列信息
  eval-source-map,包含dataUrl形式的sourceMao文件能够定位错误代码所在的行列信息 打包慢
  eval-cheap-source-map
  eval-cheap-module-source- 生成
*/

/* 

webpack 的指纹策略
  hash：
  chunkhash:文件改动只会影响到祺chunk所涉的文件
  contenthash:每个文件都有函数，

*/

/* 

  speed-measure-webpack-plugin 构建费时分析分析



babel 开启缓存

  resolve: {
  alias: {}
  extendtions: {}
  modules: {}
  '~' : resolve('src')
  
  }


*/
// 防抖 节流

// [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9];

let n = 19;
leixicalOrder(n);
console.log(leixicalOrder(n));
