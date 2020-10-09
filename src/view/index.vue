<template>
    <div>
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>
// import Header from '@/components/Header'
import Header from '../components/Header'
    export default {
        components:{
            Header
        },
        methods:{
           
        },
        created(){

        }
    }
</script>

<style lang="scss" scoped>

</style>