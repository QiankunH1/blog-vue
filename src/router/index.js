import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/view/login'
import index from '@/view/index'
import home from '@/view/home/home'
import articlelist from '@/view/article/articlelist'
import addarticle from '@/view/article/addarticle'
import chatroom from '@/view/chat/chatroom'
import ai from '@/view/chat/ai'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)


export default new Router({
  
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      redirect:'/index/home',
      children:[
        {
          path:'home',
          name:'home',
          meta:{index:1},
          component:home
        },
        {
          path:'articlelist',
          name:'articlelist',
          meta:{index:1},
          component:articlelist
        },
        {
          path:'addarticle',
          name:'addarticle',
          meta:{index:1},
          component:addarticle
        },
        {
          path:'chatroom',
          name:'chatroom',
          meta:{index:1},
          component:chatroom
        },
        {
          path:'ai',
          name:'ai',
          meta:{index:1},
          component:ai
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/we',
      name: 'we',
      component: HelloWorld
    }
  ]
})
