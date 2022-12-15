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

class Compiler {
  constructor(options) {
    this.options = options;
  }
}

let options = require("./webpack.config.js");
let compiler = new Compiler(options);
let { SyncHook } = require("tapable");

let hook = new SyncHook();

hook.tap("some app", () => {
  console.log("ss");
});
hook.call();
