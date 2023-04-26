/**
 * traverse 
 * 遍历
 * 递归遍历对象，调用所有转换后的getter，以便对象内的每个嵌套属性，都被收集为深层依赖项
 */

const seenObjects = new Set()

export function traverse(val){
    _traverse(val,seenObjects)
    seenObjects.clear()
}

/**
 * 
 * 深度遍历
 * 主要是对引用类型进行遍历（数组和对象）
 * vNode元素、和冻结对象不再进行遍历
 * 思路：还是以递归的方式，所以有终止条件
 */
function _traverse(val,seen){
    //终止条件
    const isA = Array.isArray(val)
    if(!isA && !isObject(val) || Object.isFrozen(val)) return
    if(isA){
        let i = val.length
        while(i--) _traverse(val,seen)
    }else{
        const keys = Object.keys(val)
        let i = keys
        while(i--) _traverse(val[keys[i]],seen)
    }
    
}

function isObject(val){
    return val instanceof Object
}
/**
 * 用到的js api
 * isFrozen: 对象是否被冻结
 */