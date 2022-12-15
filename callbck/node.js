/* 
    1.创建服务
    Express 是目前最流行的 NodeJS Web 框架
    为不同 URL 路径中使用不同 HTTP 动词的请求（路由）编写处理程序。
   集成了“视图”渲染引擎，以便通过将数据插入模板来生成响应。
    设置常见 web 应用设置，比如用于连接的端口，以及渲染响应模板的位置。
    在请求处理管道的任何位置添加额外的请求处理“中间件”。
    引入 express ,
    let app = express()
    启动服务 app.listen()
    
    
    2.跑通路由

    3.设置模版引擎
      指定模板存放根目录
      指定html类型的模版使用ejs方法来渲染
*/

// Express 是最受欢迎的、基于 MVC 的 Node.js 框架。它有许多与 Nodejs 同步的库和组件，以创建漂亮而强大的动态 Web 应用程序。Express 提供了所有 HTTP 实用方法、函数和中间件，可帮助开发人员编写健壮的 API。它适用于单页应用、多页应用、混合应用开发。
// 使用 Express.js 可以更快地开发 Web 应用程序，因为它具有几乎现成的 API 生成基础。由于其强大的路由、模板、安全功能和错误处理规定，可以将其用于任何企业级或基于浏览器的应用程序。
// Express.js 的特点如下：

// 可以构建单页和多页 Web 应用程序；
// 遵循 MVC 架构，使应用程序的实现变得容易；
// 它支持 14+ 引擎模板和 HTTP 方法；
// 高性能，使用异步编程相互独立地执行多个操作；
// 超高的测试覆盖率有助于构建具有最大可测试性的应用程序；
// 能够编写强大的 API 并注入重载包以帮助扩展框架的功能；
// 更好的内容协商，通过向 URL 提供 HTTP 标头来帮助客户端和服务器之间更好地通信，从而为用户/客户端获取准确的信息。

// BFF作用
// BFF（Backends For Frontends），就是服务于前端的后端，经过几个项目的洗礼，我对它也有了一些见解，我认为它主要有以下作用：

// 接口聚合和透传：和上文所讲的一致，聚合多个接口，方便前端调用
// 接口数据格式化：前端页面只负责 UI 渲染和交互，不处理复杂的数据关系，前端的代码可读性和可维护性会得到改善
// 减少人员协调成本：后端微服务和大前端bff落地并且完善后，后期部分需求只需要前端人员开发即可

// 适用场景
// BFF虽然比较流行，但不能为了流行而使用，要满足一定的场景并且基建很完善的情况下才使用，否则只会增加项目维护成本和风险，收益却非常小，我认为的适用场景如下：

// 后端有稳定的领域服务，需要聚合层
// 需求变化频繁，接口经常需要变动：后端有一套稳定的领域服务为多个项目服务，变动的话成本较高，而bff层针对单一的项目，在bff层变动可以实现最小成本的改动。
// 有完善的基建：日志，链路，服务器监控，性能监控等（必备条件）

// 下载客户端
// 在官网购买隧道，该隧道作为打通你本地的通道，记录下来隧道ID
// 设置http授权信息（可选）
// 使用命令行启动客户端，输入对应指令和隧道ID，返回启动成功的页面
// 开启本地对应映射端口的Http服务（任一语言实现即可）
// 使用客户端给出的域名进行访问观看
// 缺点：经常抽风，服务不稳定，不推荐

//  BFF Backend For Frontend (前端的后端) 是一个编排器层  当他包阔聚合 计算 某些数据组合时，不是一个简单的网关api,
// 每个服务端有不同的需求，微服务很难在一个api 里直返需要的数据
// 微服务