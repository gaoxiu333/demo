/**
 * 观察者解析表达式，收集依赖项
 * 在表达式值更改时触发回调
 * 用于$watch() api和指令
 */

export default class Watcher{
    constructor(vm,expOrFn,cb){
        this.vm = vm
        this.cd = cd
        this.getter = parsePath(expOrFn)
        this.value = this.get()
    }
    get (){
        window.target = this
        const vm = this.fm
        let value = this.getter.call(vm,vm)
        window.target = undefined
        return value
    }
    update(){
        const  oldValue  = this.value
        this.value = this.get()
        this.cd.call(this.vm,this.value,oldValue)
    }
    
}
const baiRE =/[^\w.&]/
export function parsePath(path){
    if(baiRE.test(path)){
        return
    }
    const segments = path.split('.')
    return function(obj){
        for(let i = 0;i<segments.length;i++){
            if(!obj) return
            obj = obj[segments[i]]
        }
        return obj
    }
}