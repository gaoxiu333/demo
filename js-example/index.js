/**
 * promise
 */

const fn = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("hello world");
  }, 1000);
});

fn.then(
  () => {
    console.log("success");
  },
  (err) => {
    // 没有第二个参数时，错误才会被catch到
    // 主动抛出错误，也可以被catch到
    console.log("error", err);
    throw "error";
  }
).catch((err) => {
  console.log("catch", err);
});

/**
 * Generator
 */

function* foo(x) {
  let y = 2 * (yield x + 1);
  let z = yield y + 3;
  return x + y + z;
}

let it = foo(5);
console.log(it.next());
console.log(it.next(12));
console.log(it.next(13));
console.log(42 - 27);


