class Child {
  constructor(name) {
    this.name = name;
    this.state = "学习中";
    this.subs = [];
  }
  addInfo(o) {
    this.subs.push(o);
  }
  setState(newState) {
    this.state = newState;
    this.subs.forEach((info) => info.update(this));
  }
}

class Observe {
  constructor(name) {
    this.name = name;
  }
  update(child) {
    console.log(`通知${this.name} ${child.name} ${child.state}`);
  }
}

let child = new Child("小马");
let mother = new Observe("妈咪");
let father = new Observe("爸爸");
child.addInfo(mother);
child.addInfo(father);
child.setState("逃课");
