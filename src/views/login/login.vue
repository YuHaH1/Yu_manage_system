<template>
  <!-- component -->

  <div class="relative min-h-screen flex ">
    <div
        class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
      <div
          class="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
          :style="{backgroundImage:' url('+bgUrl+')'}">
        <div class="absolute  opacity-75 inset-0 z-0"></div>
        <div class="w-full  max-w-md z-10">
          <div class="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6"></div>
          <div class="sm:text-sm xl:text-md text-gray-200 font-normal"></div>
        </div>
        <!---remove custom style-->
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div
          class="  md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
        <div class="max-w-md w-full space-y-8">
          <div class="text-center">
            <h2 class="mt-6 text-3xl font-bold text-gray-900">
              Welcom Back!
            </h2>
            <p class="mt-2 text-sm text-gray-500">Please sign in to your account</p>
          </div>

          <div class="flex items-center justify-center space-x-2">
            <span class="h-px w-16 bg-gray-200"></span>
            <span class="text-gray-300 font-normal">or continue with</span>
            <span class="h-px w-16 bg-gray-200"></span>
          </div>
          <!--          登录表单-->
          <login-form :form="loginForm" :rules="rules"/>
        </div>
      </div>
    </div>
  </div>

</template>


<script lang='ts'>
// 2022/9/15
export default {
  name: "login"
}
</script>


<script setup lang='ts'>
import LoginForm from "./loginForm.vue";
import bgUrl from '../../assets/images/login/login-logo.jpg'
import useLoginForm from "./useLoginForm";
const {
  loginForm,
  rules
} = useLoginForm()

</script>


<style lang='scss' scoped>

</style>
