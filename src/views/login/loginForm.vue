<template>
  <el-form
      ref="loginFormRef"
      :model="loginForm"
      status-icon
      :rules="rules"
      class="demo-ruleForm"
  >
    <el-form-item label="账号" prop="username" >
      <el-input

          clearable
          placeholder="请输入用户名"
          v-model="loginForm.username"
          type="text"
          autocomplete="off"
      />
    </el-form-item>
    <el-form-item label="密码" prop="password" >
      <el-input  clearable v-model="loginForm.password" placeholder="请输入密码" type="password" autocomplete="off"/>
    </el-form-item>


    <el-form-item>
      <div class="flex items-center my-2">
        <input id="remember_me" name="remember_me" type="checkbox" v-model="isRememberMe" @change="isRememberHandle"
               class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded">
        <label for="remember_me" class="ml-2 block text-sm text-gray-900">
          下次自动登录
        </label>
      </div>
      <el-button style="width: 100%" type="primary" @click="submitLoginForm()"
                 class=" w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
      >登录
      </el-button>

    </el-form-item>
  </el-form>
</template>

<script setup lang='ts'>
import {reactive,  ref,onMounted} from "vue";
import {FormInstance} from "element-plus";
import { ILoginForm } from "../../types/api.type";
import useUserStore from "../../store/user";
import {useRouter} from "vue-router";

const userStore = useUserStore()
const router = useRouter()
const loginFormRef= ref<FormInstance>()


const props = defineProps({
  form:{
    type:Object,
    default:{}
  },
  rules:{
    type:Array,
    default:[]
  }
})

const isRememberMe = ref(false)
const loginForm = reactive<ILoginForm>(props.form as ILoginForm)
onMounted(()=>{
  if(userStore.loginForm.password){
    const decodeLoginForm = userStore.decode()
    loginForm.username = decodeLoginForm!.username
    loginForm.password = decodeLoginForm!.password
  }
  if(userStore.token){
    isRememberMe.value = true
  }
})
const submitLoginForm = ()=>{
  loginFormRef.value!.validate(async(v:boolean)=>{
    if(!v)return
      await userStore.login(loginForm,isRememberMe.value)
      router.push('dashboard')
  })
}


</script>

<script lang='ts'>
//2022/9/15
export default {
  name: "loginForm"
}
</script>


<style lang='scss' scoped>
.loginForm {

}
</style>
