class Child {
  constructor(name) {
    this.name = name;
    this.state = "学习";
    this.observers = [];
  }
  setState(newState) {
    this.state = newState;
    this.observers.forEach((i) => i.update(this));
  }
  collect(o) {
    this.observers.push(o);
  }
}

class Observe {
  constructor(name) {
    this.name = name;
  }
  update(child) {
    console.log(`通知${this.name}${child.name}${child.state}`);
  }
}

let father = new Observe("爸爸");
let mother = new Observe("妈妈");
let child = new Child("小马");
child.collect(mother);
child.collect(father);
child.setState("逃课le");
