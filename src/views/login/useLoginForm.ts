
import {reactive, ref} from "vue";
import {ILoginForm} from "../../types/api.type";

export default ()=>{

    const loginForm = reactive<ILoginForm>({
        username:"",
        password:''
    })
    const rules:any = []

    return {
        loginForm,
        rules
    }
}