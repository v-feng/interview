// function isType(type) {
//   return function (value) {
//     return Object.prototype.toString.call(value) === `[object ${type}]`;
//   };
// }
function isType(type, value) {
  return Object.prototype.toString.call(value) === `[object ${type}]`;
}
const currying = (fn, arr = []) => {
  let len = fn.length;
  return function (...args) {
    let newArgs = [...arr, ...args];
    if (newArgs.length < len) {
      return currying(fn, newArgs);
    } else {
      return fn(...newArgs);
    }
  };
};
let isArray = currying(isType)("Array");
console.log(isArray([]));

