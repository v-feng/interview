Function.prototype.myCall = function (context) {
  context = context ? Object(context) : window;
  context.func = this;
  let args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push("arguments[" + i + "]");
  }
  let res = eval("context.func(" + args + ")");
  delete context.func;
  return res;
};
let obj = { name: "xiaoma" };

function getName(age, type) {
  console.log(this.name, age, type);
}
getName.myCall(obj, 18, "lazi");

Function.prototype.call2 = function (context, ...args) {
  context = Object(context) || window;
  const synbolKey = new Symbol();
  context[synbolKey] = this;
  let res = context[synbolKey](...args);
  delete context[synbolKey];
  return res;
};
