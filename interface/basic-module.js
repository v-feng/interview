/* 
    1.介绍一下js的数据类型有哪些，值是如何存储的
    答： 8种 undefined null string number blooean symbol bigint 
    原始数据类型大小固定、体积小，频繁被使用，放在栈中（其实不对）
    引用类型：分别存储 在栈种 和  （占用空间大，体积不固定）在栈中存储引用地址指针，指向堆中该实体的
    原始数据类型、引用类型
*/

/* 
    2.js数据类型判断
    typeof 原始类型 除了 null 都能可以正确判断
           引用类型   除了 函数 都是  Object

   instanceof 
   constuctor
    oBject.protype.toString.call()
*/

/* 
3.CDN 原理
CDN的全称是Content Delivery Network，
即内容分发网络。CDN的基本原理是广泛采用各种缓存服务器，
将这些缓存服务器分布到用户访问相对集中的地区或网络中，在用户访问网站时，
利用全局负载技术将用户的访问指向距离最近的工作正常的缓存服务器上，由缓存服务器直接响应

4.DNS 解析
浏览器缓存：浏览器会按照一定的频率缓存 DNS 记录。
操作系统缓存：如果浏览器缓存中找不到需要的 DNS 记录，那就去操作系统中找。
路由缓存：路由器也有 DNS 缓存。
ISP 的 DNS 服务器：ISP 是互联网服务提供商(Internet Service Provider)的简称，ISP 有专门的 DNS 服务器应对 DNS 查询请求。
根服务器：ISP 的 DNS 服务器还找不到的话，
它就会向根服务器发出请求，进行递归查询（DNS 服务器先问根域名服务器.com 域名服务器的 IP 地址，
然后再问.baidu 域名服务器，依次类推）
*/

/* 
    Vue 的性能优化
    对象层级不要过深，否则性能就会差
不需要响应式的数据不要放到 data 中（可以用 Object.freeze() 冻结数据）
v-if 和 v-show 区分使用场景
computed 和 watch 区分使用场景
v-for 遍历必须加 key，key 最好是 id 值，且避免同时使用 v-if
大数据列表和表格性能优化-虚拟列表/虚拟表格
防止内部泄漏，组件销毁后把全局变量和事件销毁
图片懒加载
路由懒加载
第三方插件的按需引入
适当采用 keep-alive 缓存组件
防抖、节流运用
服务端渲染 SSR or 预渲染


*/
/* 
自定义指令吗 原理是什么
原理
1.在生成 ast 语法树时，遇到指令会给当前元素添加 directives 属性
2.通过 genDirectives 生成指令代码
3.在 patch 前将指令的钩子提取到 cbs 中,在 patch 过程中调用对应的钩子
4.当执行指令对应钩子函数时，调用对应指令定义的方法

作者：前端鲨鱼哥
链接：https://juejin.cn/post/6961222829979697165
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
let n = 13;
function basiclei(n) {
  let number = 1;
  let ret = [];
  for (let index = 0; index < n; index++) {
    ret.push(number);
    if (number * 10 < n) {
      number *= 10;
    } else {
      while (number % 10 === 9 || number + 1 > n) {
        number = Math.floor(number / 10);
      }
      number++;
    }
  }
  return ret;
}
console.log(basiclei(n));
