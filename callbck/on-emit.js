// on emit
// on将一些函数维护数组中
// emit 就是将数组中函数依次执行
let school = {};
let event = {
  arr: [],
  on(fn) {
    this.arr.push(fn);
  },
  emit(type) {
    this.arr.forEach((fn) => fn(type));
  },
};
new Promise(function (resolve) {
  resolve("小马");
}).then((res) => {
  school.name = res;
  event.emit("6");
});

new Promise(function (resolve) {
  resolve(18);
}).then((res) => {
  school.age = res;
  event.emit("好");
});

event.on(function (p) {
  console.log("读取哟个", p);
});
event.on(function () {
  if (Object.keys(school).length === 2) {
    console.log(school);
  }
});
