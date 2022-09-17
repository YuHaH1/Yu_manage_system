import {App} from "vue";

export default (app:App)=>{
    const components = import.meta.glob('./**/*.vue',{eager:true})
    Object.values(components).forEach((v:any)=>{
        app.component(v.name,v.default)

    })
}