function throttle(fn, dealy) {
  let oldTime = new Date().getTime();
  return function (args) {
    let context = this;
    let nowTime = new Date().getTime();
    if (nowTime - dealy > oldTime) {
      oldTime = nowTime;
      fn.apply(context, args);
    }
  };
}

// 防抖

function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(null, args);
      }, delay);
    }
  };
}
