Array.prototype.slice.call;
Array.form;

// 转化类数组;

function deepClone(obj, hash = new WeakMap()) {
  if (typeof obj == null) return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (typeof obj !== "object") return obj;
  if (hash.get(obj)) return hash.get(obj);
  let newObj = new obj.constructor();
  hash.set(obj, newObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key], hash);
    }
  }
  return newObj;
}

let data = [
  { name: "老哥", id: 567, age: 3 },
  { name: "suizi" },
  { hu: "liuzhe" },
];
let a = deepClone(data);
console.log(a);
