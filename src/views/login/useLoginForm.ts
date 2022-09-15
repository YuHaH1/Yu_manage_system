
import {reactive, ref} from "vue";
interface ILoginForm{
    username:'',
    password:'',
}
export default ()=>{
    const loginFormRef = ref(null)
    const loginForm = reactive<ILoginForm>({
        username:"",
        password:''
    })
    const rules:any = []
    const submitLoginForm = ()=>{

    }
    return {
        loginForm,
        loginFormRef,
        submitLoginForm,
        rules
    }
}