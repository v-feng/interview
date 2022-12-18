let PENGDING = "PENGDING";
let RESOLVED = "RESOLVED";
let REJECTED = "REJECTED";
function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new Error("qusiba"));
  }
  let called;
  if (
    (typeof x === "object" && typeof x !== "null") ||
    typeof x === "function"
  ) {
    try {
      let then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          (e) => {
            if (called) return;
            called = true;
            reject(e);
          }
        );
      } else {
        resolve(x);
      }
    } catch (error) {
      if (called) return;
      called = true;
      reject(error);
    }
  } else {
    resolve(x);
  }
}
class Promise1 {
  constructor(executor) {
    this.status = PENGDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFufilledCallbacks = [];
    this.onRejectedCallbacks = [];
    let reject = (reason) => {
      if (this.status === PENGDING) {
        this.reason = reason;
        this.status = REJECTED;
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };
    let resolve = (value) => {
      if (this.status === PENGDING) {
        this.value = value;
        this.status = RESOLVED;
        this.onFufilledCallbacks.forEach((fn) => fn());
      }
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then(onFufilled, onRejected) {
    onFufilled = typeof onFufilled ? onFufilled : (v) => v;
    onRejected = typeof onRejected
      ? onRejected
      : (err) => {
          throw Error(err);
        };
    let promise2 = new Promise1((resolve, reject) => {
      if (this.status === RESOLVED) {
        setTimeout(() => {
          try {
            let x = onFufilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 1000);
      }
      if (this.status === PENGDING) {
        this.onFufilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFufilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, timeout);
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 1000);
        });
      }
    });
    return promise2;
  }
}

let p1 = new Promise1((resolve, reject) => {
  resolve("1000");
});
p1.then((res) => {
  return new Promise1((resolve, reject) => {
    reject("你错了没");
  });
}).then(
  (data) => {
    console.log(data);
  },
  (e) => {
    console.log(e);
  }
);

Promise.prototype.all = function (arr) {
  let index = 0;
  return new Promise((resolve, reject) => {
    for (let index = 0; index < arr.length; index++) {
      ++index;
      Promise.resolve(arr[i]).then(
        () => {
          if (index === arr.length) {
            resolve(arr);
          }
        },
        (err) => {
          reject(err);
        }
      );
    }
  });
};

Promise.prototype.race = function (arr) {
  return new Promise((resolve, reject) => {
    for (let index = 0; index < arr.length; index++) {
      Promise.resolve(arr[i]).then(resolve, reject);
    }
  });
};



