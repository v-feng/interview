/* 
    高阶函数
*/

// 函数的参数势函数
// 函数返回一个函数
// 应用场景

// 业务代码

function say(args) {
  console.log("say", a, b);
}

Function.prototype.before = function (callback) {
  return (...args) => {
    callback();
    this(...args);
  };
};
let beforeSay = say.before(function () {
  console.log("laji");
});
beforeSay();
