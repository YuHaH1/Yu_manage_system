import { defineStore } from "pinia";
import userApi from '../api/userApi'
import {ILoginForm} from "../types/api.type";
import {useRouter} from "vue-router";
import {Base64} from "js-base64";
export default defineStore('userStore',{
    state(){
        return{
            token:'',
            loginForm:{
                username:'',
                password:''
            }as ILoginForm
        }
    },
    persist:{
        paths:['token','loginForm']
    },
    actions:{
        async login(loginForm:ILoginForm,isRemember:boolean){
            if(isRemember){
                this.loginForm.username = loginForm.username
                this.loginForm.password = Base64.encode(loginForm.password)
            }else{
                this.loginForm.username = ''
                this.loginForm.password = ''
            }
            loginForm.password = Base64.encode(loginForm.password)
            const res = await userApi.loginApi(loginForm)
            this.$state.token = res.data.token
        },
        loginOut(){
            const router = useRouter()
            this.$reset()
            router.push('/login')
        },
        decode(){
            if(this.loginForm.password){
                return {
                    username:this.loginForm.username,
                    password:Base64.decode(this.loginForm.password)
                }
            }
            return null
        },
    }

})