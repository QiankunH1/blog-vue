<template>
  <div class="tab_wrap">
    <el-menu
     
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
       @select="handleSelect"
    >
      <el-menu-item index="/index/home">首页</el-menu-item>
      <el-menu-item index="/index/articlelist">博文</el-menu-item>
      <el-menu-item index="/index/addarticle">写博文</el-menu-item>
      <el-menu-item index="/index/chatroom">聊天室</el-menu-item>
      <el-menu-item index="/index/ai">智能AI</el-menu-item>
    </el-menu>
    <div class="info" v-if="$store.state.userinfo">
        <span >{{$store.state.userinfo.name}}</span>
        <span @click="outlogin">退出</span>
    </div>
    <div class="info" v-else>
        <span @click.native="tologin">去登陆</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    
    };
   },
   methods: {
       tologin(){
           this.$router.push('/login')
       },
       outlogin(){
            this.$store.commit("CHANGEUSERINFO", null);
            this.$message('退出登录成功');
       },
        handleSelect(key, keyPath) {
            this.$router.push(key)
      }
   },
 
};
</script>

<style lang="scss" scoped>
.el-menu-demo{
    width: 800px;
    margin: 0 auto;
}
.el-menu-item{
    font-size: 16px;
}
.el-menu.el-menu--horizontal{
    border-bottom: none;
}
.tab_wrap{
        background-color: rgb(84, 92, 100);
        // background-color: rgb(20, 16, 16);
        position: relative;
        font-size: 16px;
        box-shadow: 0 3px 4px rgba(52, 145, 231, 0.6);
}
.info{
    color: #ffffff;
    position: absolute;
    right: 20px;
    top: 0px;
    height: 60px;
    line-height: 60px;
    span{
        margin: 0 10px;
    }
    span:hover{
        color:rgb(255, 208, 75);
        cursor: pointer;
    }
}
</style>