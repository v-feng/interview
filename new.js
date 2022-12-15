class Parent {
  constructor(type) {
    this.type = type;
  }
}
let p = new Parent("gouzi");

function newFuc() {
  const Constructor = [].shift.call(arguments);
}
