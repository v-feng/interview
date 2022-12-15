//  事件流
//  事件
// 时间监听函数

// 事件捕获阶段
// 目标阶段
// 冒泡

// 节流

function throttle(fn, interval) {
  let last = 0;
  return function () {
    let context = this;
    let args = arguments;
    let now = +new Date();
    if (now - last >= interval) {
      now = last;
      fn.apply(context, args);
    }
  };
}

// 防抖

function debounce(fn, delay) {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

setTimeout(() => {
  Promise.resolve().then(function () {
    console.log("promise1");
  });
}, 0);
setTimeout(() => {
  console.log("/");
});
