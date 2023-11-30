/**
 * 缓存数据
 */

const cache = new Map();
function fetchData(key) {
  if (cache.has(key)) {
    return cache.get(key);
  }
  const data = {}; // 一些数据
  cache.set(key, data);
  return data;
}

// 
