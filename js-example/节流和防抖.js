// 节流，立即触发
import { timeFrom } from "../../../source-code/vite/packages/vite/src/node/utils";
// 因为定义的时间已经确定，执行时，delay应该已经触发
function throttle(fn, delay = 500) {
  let oldtime = Date.now();
  return function (...args) {
    let newtime = Date.now();
    if (newtime - oldtime >= delay) {
      fn.apply(null, args);
      oldtime = Date.now();
    }
  };
}
// 延迟写法
function throttleDelay(fn, delay = 500) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    }
  };
}
// TODO 结合两种写法后，延迟最后一次操作，确保最后一次操作会执行，感觉结合成防抖了

// 防抖
function debounce(fn, wait = 500, immediate = false) {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    if (timer) clearTimeout(timer);
    if (immediate) {
      const callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      if (callNow) {
        fn.apply(context, args);
      }
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, wait);
    }
  };
}
