<template>
  <div class="login">
    <div class="loginForm">
      <el-form
          ref="loginFormRef"
          :model="loginForm"
          status-icon
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="username">
          <el-input
              v-model="loginForm.username"
              type="text"
              autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" type="password" autocomplete="off"/>
        </el-form-item>


        <el-form-item>
          <el-button type="primary" @click="submitLoginForm()"
          >
          </el-button
          >
          <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
      </el-form>
      <div class="logo"></div>
    </div>
  </div>
</template>


<script lang='ts'>
//2022/9/15
export default {
  name: "login"
}
</script>


<script setup lang='ts'>
import useLoginForm from "./useLoginForm";

const {
  loginForm,
  loginFormRef,
  submitLoginForm,
  rules
} = useLoginForm()


</script>


<style lang='scss' scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .loginForm{
    display: flex;




  }
}
</style>
