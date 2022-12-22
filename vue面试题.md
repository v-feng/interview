### JavaScript 中的错误有哪几种类型?

Error （基本错误类型）
typeError （类型错误）
EvalError （会在使用 eval()函数发生异常时抛出）
RangeError （数值超出范围时）
ReferenceError （变量找不到）
SyntaxError
TypeError
URIError

### 如何将一个 prop 限制在一个类型的列表中?

这个验证函数接受一个 prop，如果 prop 有效或无效，则返回 true 或 false。当单单传入的 true 或 false 来控制某些条件不能满足需求时，通常使用这种办法来做。按钮类型或警告类型是常见的用法，颜色也是一个很好的用途
是用 props: {
type: '类型'，
default: 默认值
validator
}

### Vue 组件中写 name 选项中有哪些好处?

- 可以通过名字找到对应的组件(递归组件：组件自身调用自
- 可以通过 name 属性实现缓存功能(keep-alive)
- 通过 name 识别组件
- 使用 vue-devtools 调试工具里显示的组件名称是由 vue 中组件 name 决定的

### Vue data 中某一个属性的值发生改变后，视图会立即同步执行重新渲染吗?

不会
应为 vue 是异步更新
Vue 的响应式数据并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新。Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更

如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环 tick 中，Vue 刷新队列并执行实际(已去重的)工作

### Vue 初始化过程中(new Vue(options))都做了什么?

- 处理组件配置项：初始化根组件时进行了选项合并操作，将全局配置合并到根组件的局部配置上；初始化每个子组件时做了一些性能优化，将组件配置对象上的一些深层次属性放到 vm.$options 选项中，以提高代码的执行效率；
- 初始化组件实例的关系，比如 parent、children、root、refs 等
- 处理自定义事件
- 调用 beforeCreate 钩子函数
- 初始化组件的 inject 配置项，得到 ret[key]=val 形式的配置对象，然后对该配置对象进行响应式处理，并代理每个 key 到 vm 实例上
- 数据响应式，处理 props、methods、data、computed、watch 等选项
- 解析组件配置项上的 provide 对象，将其挂载到 vm.\_provied 属性上
- 调用 created 钩子函数
- 如果发现配置项上有 el 选项，则自动调用$mount方法，也就是说有了el选项，就不需要手动调用$mount 方法，反之，没有提供 el 选项则必需调用$mount
- 接下来则进入挂载阶段

### Vue 可以定义函数式组件么?

可以

- 函数式组件：没有状态(data)、没有生命周期，只接受传递的 props，常用于纯 UI 组件
- 通过 Vue.component 构建组件时，添加 functional:true;需要通过调用 render 函数来渲染，常用包裹组件或者构建高阶组件
- 对于单文件组件，在 template 上添加 functional <template functional>

### 如何用 webpack 来优化前端性能?

用 webpack 优化前端性能是指优化 webpack 的输出结果，让打包的最终结果在浏览器运行快速高效

- 压缩代码：删除多余的代码、注释、简化代码的写法等等方式。可以利用 webpack 的 UglifyJsPlugin 和 ParallelUglifyPlugin 来压缩 JS 文件，利用 cssnano 来压缩 css
- Tree Shaking：将代码中永远不会用到的代码删除。可以通过在启动 webpack 时追加参数 --optimize-minimize 来实现
- Code Spliting：将代码按路由维度或者组件分块(chunk)。这样做到按需加载，同时可以充分利用浏览器缓存
- 提取公共第三方库：SplitChunksPlugin 插件来进行公共模块抽取，利用浏览器缓存可以长期缓存这些无需频繁变动的公共代码
- clean-webpack-plugin

### webpack、rollup、parcel 优劣是什么?

- webpack 适用于大型复杂的前端站点构建：webpack 有强大的 loader 和插件生态，打包后的文件实际上就是一个立即执行函数，这个立即执行函数接受一个参数，这个参数是模块对象，键为各个模块的路径，值为模块内容。立即执行函数内部则处理模块之间的引用，执行模块等，这种情况更适合文件依赖复杂的应用开发

- rollup 适用于基础库的打包，如 vue、d3 等：rollup 就是将各个模块打包进一个文件中，并且通过 Tree-shaking 来删除无用的代码，可以最大程度上降低代码体积，但是 rollup 没有 webpack 如此多的高级功能，比如代码分割、按需加载等，其更聚焦于库的打包，因此更适合库的开发

- parcel 适用于简单的实验性项目：他可以满足低门槛的快速看到效果，但是生态差、报错信息不够全面都是其硬伤，除了一些玩具项目或者实验项目之外不建议使用

### 字典序排数

` 
function leixicalOrder() {
  let arr = [];
  let number = 1;
  for (let index = 0; index < n; index++) {
    arr.push(number);
    if (number * 10 <= n) {
      number *= 10;
    } else {
      while (number % 10 === 9 || number + 1 > n) {
        number = Math.floor(number / 10);
      }
      number++;
    }
  }
  return arr;
}`
