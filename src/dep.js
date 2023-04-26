// 依赖管理器
// 通常是在gtter中收集依赖，在setter中通知依赖更新。
/**
 * dep 是一个可观察对象，可以有多个指令订阅它
 */
export default class Dep{
    constructor(){
        this.subs = []
    }
    addSub(sub){
        this.subs.push(sub)
    }
    removeSub(sub){
        remove(this.subs,sub)
    }
    depend(){
        if(window.target){
            this.addSub(window.target)
        }
    }
    notify(){
        const subs = this.subs.slice()
        for(let i=0,l=subs.length;i<l;i++){
            subs[i].update()
        }
    }
}
export function remove(arr,item){
    if(arr.length){
        const index = arr.indexOf(item)
        if(index>-1){
            return arr.splice(index,1)
        }
    }
}