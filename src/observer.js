import Dep from './dep'

const def = (obj,key,val,enumerable)=>{
    Object.defineProperty(obj,key,{
        value:val,
        enumerable:!!enumerable,
        writable:true,
        configurable:true
    })
}
/**
 * observer类会通过递归的方式把一个对象的所有属性转化为可观测对象；监听的同时进行依赖的收集
 * 
 * 因为依赖的Object.definepropety，数组不能使用  definepropety;所以区分数组和对象。
 */
export class Observer{
    constructor(value){
        this.value = value
        def(value,'__ob__',this)
        if(Array.isArray(value)){
            // if('__proto__' in {}){
            //     protoAugment(value,arrayMethods)
            // }{
            //     copyAugment(valuem,arrayMethods,arrayKeys)
            // }
            // this.observeArray(value)
        }else{
            this.walk(value)
        }
    }
    walk(obj){
        const keys = Object.keys(obj)
        for(let i=0;i<keys.length;i++){
            defineReactive(obj,keys[i])
        }
    }
    observeArray(items){
        for(let i=0,l=items.length;i<l;i++){
            observer(item[i])
        }
    }
    
}
/**
 * 使一个对象转换为可观测对象
 * @param {*} obj 要转换的对象
 * @param {*} key 对象的key
 * @param {*} val 对象某个key的val
 */
function defineReactive(obj,key,val){
    // 如果只传了 obj和key，自己拿val
    if(arguments.length === 2){
        val = obj[key]
    }
    // 如果val是一个对象，同样适用obvers类，将这个对象响应式
    if(typeof val === 'object'){
        new Observer(val)
    }
    // 下面正文
    const dep = new Dep() // 为每一个对象实例化一个依赖管理器
    Object.defineProperty(obj,key,{
        enumerable:true,
        configurable:true,
        get(){
            console.log(`${key}属性被读取`)
            dep.depend()
            return val
        },
        set (newVal){
            if(newVal === val) return
            console.log(`${key}属性被设置`)
            val = newVal
            dep.notify()
        }
    })
}
/**
 * Observer 类会递归遍历所有属性
 * 核心方法使用的是Object.defineProperty
 * 因为数组不支持此方法，所以数组使用改写数组原型上面的方法来劫持数据。
 */
