import {App} from "vue";
import pinia from './pinia/index'
import router from '../router/index'
import tailwindcss from './tailwind/index.css'
const plugins = [pinia,router]


export default (app:App)=>{
    plugins.forEach(v=>{
        app.use(v)
    })
}