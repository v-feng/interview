Function.prototype.myApply = function (context, args) {
  console.log(args);
  context = context ? Object(context) : window;
  const symbolKey = Symbol();
  context[symbolKey] = this;
  const res = context[symbolKey](...args);
  delete context[symbolKey];
  return res;
};
let obj = { name: "xiaoma" };

function getName(age, type) {
  console.log(this.name, age, type);
}
getName.myApply(obj, [18, "gouzi"]);
