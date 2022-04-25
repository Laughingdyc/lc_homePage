<template>
  <div class="login">
    <div class="login_wrapper">
      <el-form
        label-position="right"
        label-width="100px"
        :model="formLabelAlign"
        style="max-width: 460px"
      >
        <el-form-item label="学号">
          <el-input v-model="formData.student_id" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formData.password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'
  import { login } from '@/api/login'
  const formData = reactive({
    student_id: '',
    password: '',
  })
  const onSubmit = () => {
    login( formData )
  }
</script>

<style lang="less" scoped>
  .login {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(90deg, #c6e2ff, #ecf5ff, #c6e2ff);

    .login_wrapper{
      width: 500px;
      position: relative;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>