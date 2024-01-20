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

// 继承
function Parent() {}
function Sub() {}
Sub.prototype = new Parent();
// 组合继承
function Parent(name) {
  this.name = name;
}
Parent.prototype.getName = function () {
  return this.name;
};
function Sub(name) {
  Parent.call(this, name); // 借用构造函数继承属性【属性】
}
Sub.prototype = new Parent(); // 原型链继承方法 【方法】

// 寄生式继承 - 克隆一个对象，然后增强，返回这个对象
// 原始对象
function OriginalObject() {
    this.value = 42;
    this.method = function() {
        console.log('Hello!');
    };
}

// 寄生式继承函数
function createEnhancedObject(original) {
    var clone = Object.create(original); // 创建一个原始对象的副本
    clone.newMethod = function() {       // 向副本添加新的方法
        console.log('New method');
    };
    return clone;                        // 返回这个已经被修改的新对象
}

// 寄生式组合继承
function Parent(name) {
  this.name = name;
}
Parent.prototype.getName = function () {
  return this.name;
}
function Sub(name) {
  Parent.call(this, name); // 借用构造函数继承属性 【属性】
}
Sub.prototype = Object.create(Parent.prototype); // 原型链继承方法 【方法】
// 或者 Sub.prototype = new Parent();
Sub.prototype.constructor = Sub; // 修复构造函数指向

