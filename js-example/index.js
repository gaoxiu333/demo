console.log("==============start==========================");

// 数据结构 set

// set 是一个集合，允许存储唯一值，是无序的

// 1. 去重

const array = [1, 1, 2, 2, 3, 3, 4, 5, 6];
const uniqueValues = [...new Set(array)];
console.log("uniqueValues", uniqueValues);

// 2. 成员检查
const mySet = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log("mySet.has(10)", mySet.has(10));
console.log("mySet.has(11)", mySet.has(11));

// 3. 交集、并集、差集
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);

// 交集
const intersection = new Set([...set1].filter((x) => set2.has(x)));
console.log("intersection", intersection);

// 并集
const union = new Set([...set1, ...set2]);
console.log("union", union);

// 差集
const difference = new Set([...set1].filter((x) => !set2.has(x)));
console.log("dirrerence", difference);

// 事件监听器的管理(避免重复的事件监听)
const eventListeners = new Set();

function addEventListeners() {
  for (let i = 0; i < 10; i++) {
    const listener = () => console.log(i);
    eventListeners.add(listener);
  }
}

function removeEventListeners(listener) {
  eventListeners.delete(listener);
  // eventListeners.clear()
}
function triggerEvent() {
  eventListeners.forEach((listener) => listener());
}
const ev = () => {
  console.log("ev");
};
eventListeners.add(ev);
eventListeners.add(ev);
eventListeners.add(ev);
eventListeners.add(ev);
eventListeners.add(ev);
eventListeners.add(ev);
eventListeners.add(ev);
eventListeners.add(ev); // 只会被添加一次
addEventListeners();
triggerEvent();
console.log("==============end============================");

// 缓存数据
const cache = new Set();
function fetchDate(value) {
  if (!cache.has(value)) {
    cache.add(value);
  }
}
const myMap = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
]);

myMap.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});
console.log(myMap)

//  WeakSet的使用： WeakSet 是 Set 的变体，它只能包含对象引用，并且不接受原始类型的值，并且不会阻止垃圾回收。这对于存储对象的弱引用是有用的。
