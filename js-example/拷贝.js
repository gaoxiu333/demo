const shallowClone = (target) => {
  if (typeof target !== "object") return target;
  const cloneTarget = Array.isArray(target) ? [] : {};
  for (let key in target) {
    // 如果不考虑原型，可以这样
    if (target.hasOwnProperty(key)) {
      cloneTarget[key] = target[key];
    }
    // cloneTarget[key] = target[key];
  }
};

const deepClone = (target, hash = new WeakMap()) => {
  if (target.constructor === Date) return new Date(target);
  if (target.constructor === RegExp) return new RegExp(target);

  if (hash.has(target)) {
    return hash.get(target);
  }
  let allDesc = Object.getOwnPropertyDescriptors(target);
  const cloneObj = Object.create(Object.getPrototypeOf(target), allDesc);
  hash.set(target, cloneObj);
  for (let key of Reflect.ownKeys(target)) {
    cloneObj[key] =
      typeof target[key] === "object" && typeof target[key] !== null
        ? deepClone(target[key], hash)
        : target[key];
  }
  return cloneObj;
};

const obj = {
  a: 1,
  b: {},
  c: 2,
};

deepClone(obj);
