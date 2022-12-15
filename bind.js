Function.prototype.myBind = function (context) {
  let that = this;
  let argsBind = Array.prototype.slice.call(arguments, 1);
  function fBound() {
    let args = Array.prototype.slice.call(arguments);
    return that.apply(
      this instanceof fBound ? this : context,
      argsBind.concat(args)
    );
  }
  return fBound;
};

let obj = { name: "xiaoma" };

function getName(age, type) {
  console.log(this.name, age, type);
}
let a = getName.myBind(obj, 12);

a("gouzi");
