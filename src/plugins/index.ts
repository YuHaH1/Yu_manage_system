import {App} from "vue";
import pinia from './pinia/index'
import router from '../router/index'
const plugins = [pinia,router]


export default (app:App)=>{
    plugins.forEach(v=>{
        app.use(v)
    })
}