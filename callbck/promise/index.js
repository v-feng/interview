let arr = ["name", "age"];
let faim = ["xioama", 18];

let obj = arr.reduce((current, next, index) => {
  //   console.log(current, next, index);

  current[next] = faim[index];
  return current;
}, {});
console.log(obj);
