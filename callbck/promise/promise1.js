let PENGDING = "PENGDING";
let RESOLVED = "RESOLVED";
let REJECTED = "REJECTED";
function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new Error("!!!!!!!!"));
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
class Promise {
  constructor(executor) {
    this.value = undefined;
    this.reason = undefined;
    this.status = PENGDING;
    this.onFufilledCallbacks = [];
    this.onRejectedCallbacks = [];
    let resolve = (value) => {
      if (this.status === PENGDING) {
        this.value = value;
        this.status = RESOLVED;
        this.onFufilledCallbacks.forEach((fn) => fn());
      }
    };
    let reject = (reason) => {
      if (this.status === PENGDING) {
        this.reason = reason;
        this.status = RESOLVED;
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then(onFufilled, onRejected) {
    onFufilled =
      typeof onFufilled === "function"
        ? onFufilled
        : (v) => {
            v;
          };
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (err) => {
            throw Error(err);
          };
    let promise2 = new Promise((resolve, reject) => {
      if (this.status === RESOLVED) {
        setTimeout(() => {
          try {
            let x = onFufilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, timeout);
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, timeout);
      }
      if (this.status === PENGDING) {
        this.onFufilledCallbacks.push(function () {
          setTimeout(() => {
            try {
              let x = onFufilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {}
            reject(error);
          });
        });
        this.onRejectedCallbacks.push(function () {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, timeout);
        });
      }
    });
    return promise2;
  }
}
