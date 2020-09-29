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
import Qs from 'qs'
export default {
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    login() {
      var that=this
       var data = {
        name: this.name,
        password: this.password
      };
      axios.post("http://localhost/?method=login",Qs.stringify(data),{headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
    }},).then(res => {
        console.log(res);
         that.$message(res.data.msg);
      });
    },
    register() {
      var data = {
        name: this.name,
        password: this.password
      };
      axios.post("http://localhost/?method=register",Qs.stringify(data),{headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
    }},).then(res => {
        console.log(res);
      });
    }
  }
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