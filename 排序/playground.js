// 节流 - n 秒内只执行一次
// 防抖 - n 秒内如果再次触发，重新计时。

function throttle(fn, delay) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      setTimeout(() => {
        clearTimeout(timer);
        fn.apply(null, args);
      }, delay);
    }
  };
}

// 节流，立即执行

function throttleIm(fn, delay, immediate) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      if (immediate) {
        fn.apply(null, args);
        timer = setTimeout(() => {
          clearTimeout(timer);
        }, delay);
      } else {
        timer = setTimeout(() => {
          fn.apply(null, args);
          clearTimeout(timer);
        }, delay);
      }
    }
  };
}

// 防抖
function thround(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimout(() => {
      fn.apply(null, args);
      clearTimeout(timer);
    }, delay);
  };
}
