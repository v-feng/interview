// css隔离
//bem 约定

// 动态样式表
// css module
// shadow Dom
// css in js

// attachShadow

// js沙箱  proxy

// 快照沙箱

class SnapshotSandbox {
  constructor() {
    this.proxy = window;
    this.modifyPropsMap = {};
    this.active();
  }
  active() {
    this.windowPrpsMap = {};
    for (let props in window) {
      if (window.hasOwnProperty(props)) {
        this.windowPrpsMap[props] = window[props];
      }
    }
    Object.keys(this.modifyPropsMap).forEach((p) => {
      window[p] = this.modifyPropsMap[p];
    });
  }
  inactive() {
    for (let props in window) {
      if (window.hasOwnProperty(props)) {
        if (window[props] !== this.windowPrpsMap[props]) {
          this.modifyPropsMap = window[props];
          window[props] = this.windowPrpsMap[props];
        }
      }
    }
  }
}

let sandbox = new SnapshotSandbox()
    
    ((window) => {
  window.a = 1;
  window.b = 2;
  sandbox.inactive();
  console.log(a, b);
  sandbox.active();
  console.log(a, b);
})(sandbox.proxy);

// proxy
