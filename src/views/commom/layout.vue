<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <YuMenu/>
      </el-aside>
      <el-container class="content">
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>


<script setup lang='ts'>



</script>

<script lang='ts'>
//2022/9/16
export default {
  name: "layout"
}
</script>


<style lang='scss' scoped>
.common-layout {
  .content {
    width: 100vw;
    height: 100vh;
  }
}
</style>
