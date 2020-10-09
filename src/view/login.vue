<template>
  <div>
    <div class="cont">
      <i>myblog</i>
      <div style="margin-top: 20px;">
        <el-input v-model="name" placeholder="请输入账号"></el-input>
      </div>
      <div style="margin-top: 20px;">
        <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
      </div>
      <div style="margin-top:45px;">
        <el-button type="primary" @click="login" plain>立即登录</el-button>
        <el-button type="primary" @click="register" plain>立即注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";
export default {
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    
    login() {
      var that = this;
      var data = {
        name: this.name,
        password: this.password
      };
      // axios.defaults.withCredentials = true; // 允许携带cookie
      // axios.defaults.headers.common['token'] ='123456789';
      this.$axios.post("?method=login", Qs.stringify(data)).then(res => {
        console.log(res);
        that.$message(res.msg);
        if (res.code == 1) {
          // this.$cookie.setCookie("id", res.data.id, 4);
         
          this.$store.commit('CHANGEUSERINFO',res.data)
           this.$router.push("/");
        }
      });
    },
    register() {
      var that = this;
      var data = {
        name: this.name,
        password: this.password
      };
      this.$axios.post("?method=register", Qs.stringify(data)).then(res => {
        console.log(res);
        that.$message(res.msg);
      });
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.cont {
  width: 400px;
  padding: 60px 50px;
  margin: 200px auto 0px;
  background: #a49dc5;
  border-radius: 6px;
  i {
    color: #ffffff;
    font-size: 20px;
  }
}
</style>