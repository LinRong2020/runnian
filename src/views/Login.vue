<template>
  <div class="login">
    <h1>登录</h1>
    <div class="login-form">
      <van-field v-model="uid" label="账 户" label-width="50px" />
      <van-field v-model="psw" label="密 码" label-width="50px" />
      <div class="btn">
        <van-button type="primary" plain @click="login">登 录</van-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Login',
  data() {
    return {
      uid: '',
      psw: '',
    };
  },
  methods: {
    async login() {
      console.log(`login uid = ${this.uid} psw = ${this.psw}`);
      sessionStorage.setItem('uid', this.uid);
      console.log('state');
      this.$router.push('/home');
    },
  },
});
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;

  h1 {
    padding-top: 100px;
  }

  .login-form {
    width: 300px;
    height: 180px;
    background-color: #aaaaaa77;
    padding: 5px;
    margin: 100px auto;

    .btn {
      margin-top: 20px;
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
