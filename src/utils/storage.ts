import exp from "constants";

type TDate = 'h' | 'w' | 'd' | 'm' | 's'
type TExpire = `${number}${TDate}`;
export interface IStorage {
    value: any,
    key: string,
    expire?: TExpire
}
class Storage{
    constructor() {
    }
    getLocal(key:string):any{
        const nowTime = new Date().getTime()
        let localRes = localStorage.getItem(key)
        if(localRes){
            localRes = JSON.parse(localRes)

            // @ts-ignore
            if(localRes?.expire){
                // @ts-ignore
                if(localRes?.expire>nowTime){
                    return localRes
                }else{
                    this.removeLocal(key)
                    localRes = null
                }

            }
            return localRes
        }
        return localRes

    }
    setLocal(key:string,value:any,expire:TExpire|undefined=undefined):void{
        let expireTime = this.processExpire(expire)

        expire
        &&localStorage.setItem(key,JSON.stringify({value:value,expire:expireTime}))
        expire
        ??localStorage.setItem(key,value)
    }
    removeLocal(key:string){
        localStorage.removeItem(key)
    }
    processExpire(expire: TExpire|undefined) {
        if(!expire)return expire
        const time = expire.match(/\d/)![0]
            let timerArr = expire.split(/\d/)
        let timerUnit = timerArr[timerArr.length-1]

        let expireTime:any = expire
        switch (timerUnit) {
            case 's':
                expireTime = Number(time) * 1000
                break
            case 'm':
                expireTime = Number(time) * 1000 * 60
                break
            case 'h':
                expireTime = Number(time) * 1000 * 60 * 60
                break
            case 'd':
                expireTime = Number(time) * 1000 * 60 * 60 * 24
                break
            case 'w':
                expireTime = Number(time) * 1000 * 60 * 60 * 24 * 7
                break

        }

        return new Date().getTime() + expireTime
    }
}



export default function useStorage(){
    return new Storage()
}