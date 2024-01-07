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

function deepCopy(obj, hash = new WeakMap()) {
  if (obj === null) return null;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (typeof obj !== "object") return obj;
  if (hash.has(obj)) return hash.get(obj);
  let cloneObj = new obj.constructor();
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnproperty(key)) {
      cloneObj[key] = deepCopy(obj[key], hash);
    }
  }
  return cloneOjb;
}

function shallowClone(target) {
  if (typeof target !== "object") return target;
  if (target === null) return null;
  const clone = Array.isArray(target) ? [] : {};
  const keys = Object.keys(target);
  for (let key in keys) {
    clone[key] = target[key];
  }
  return clone;
}

function deepClone(target, hash = new WeakMap()) {
  if (target === null) return null;
  if (typeof target !== "object") return target;
  if (target instanceof Date) return new Date(target);
  if (target instanceof RegExp) return new RegExp(target);
  if (hash(target)) return hash.get(target);
  const clone = new target.constructor();
  hash.set(target, clone);
  for (let key in target) {
    if (target.hasOwnproperty(key)) {
      clone[key] = target(key);
    }
  }
  return clone;
}

////////////////////////////////

const shallowClone = (obj) => Object.assign({}, obj);

const deepClone = (obj) => {
  if (obj === null) return null;
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach((key) => {
    clone[key] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
  });
  if (Array.isArray(obj)) {
    clone.length = obj.length;
    return Array.from(clone);
  }
  return clone;
};
