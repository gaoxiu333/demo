import { version } from '../package.json'
// import Watcher from './watcher'
import { observer,Observer } from './observer'
/**
 * 源码思路：
 * 首先是劫持数据绑定setter/getter
 * 然后进行依赖收集
 * 最后通过watcher管理依赖（依赖管理器？），如果数据变动，通知依赖数据有变化，如果有新的依赖，加入依赖管理器里边。
 */

const obj1 = {a:'test'}
const test = new Observer(obj1)
console.log(test)
obj1.a 
obj1.a =2 
console.log(obj1)