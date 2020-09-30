<template>
    <div>
        我是主页面
        <div @click="tologin">去登录页</div>
        <div @click="towe">去欢迎页</div>
    </div>
</template>

<script>
    export default {
        methods:{
            tologin(){
                this.$router.push('/login')
            },
            towe(){
                this.$router.push('/we')
            }
        },
        created(){

        }
    }
</script>

<style lang="scss" scoped>

</style>