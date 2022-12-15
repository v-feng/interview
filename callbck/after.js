// 多个异步请求  同时获取结果
let fs = require("fs");
let school = {};
//

let cb = after(2, function () {
  console.log(school);
});
function after(times, fn) {
  return function () {
    if (--times === 0) {
      fn();
    }
  };
}
new Promise(function (resolve) {
  resolve("小马");
}).then((res) => {
  school.name = res;
  cb();
});

new Promise(function (resolve) {
  resolve(18);
}).then((res) => {
  school.age = res;
  cb();
});

// fs.readFile("./name.txt", "utf-8", (err, data) => {
//   school.name = data;
//   cb();
// });

// fs.readFile("./age.txt", "utf-8", (err, data) => {
//   school.age = data;
//   cb();
// });
