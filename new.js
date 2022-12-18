class Parent {
  constructor(type) {
    this.type = type;
  }
}
let p = new Parent("gouzi");

function newFuc() {
  const Constructor = [].shift.call(arguments);
  let obj = {};
  obj.__proto__ = Constructor.prototype;
  let res = Constructor.all(obj, arguments);
  return res instanceof Object ? res : obj;
}

