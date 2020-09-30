import axios from 'axios'
// const baseURL = process.env.BASE_URL
const baseURL = 'http://localhost:80/'
// import {Message} from 'element-ui'
import router from '../router/index'
// import store from '../../vuex/store'
const instace = axios.create({
    baseURL,
    timeout:100000
})
class xhr {
     static get(url,data, methods='get', config){
         return new Promise((resolve,rejects)=>{
             instace[methods](url,{params:data},config).then(res=>{
                 resolve(res.data)
             }).catch(err=>{
                 rejects(err)
             })
         })
     }
     static post(url,data,methods='post',config){
         return new Promise((resolve,rejects)=>{
             instace[methods](url,data,config).then(res=>{
                 resolve(res.data)
             }).catch(err=>{
                 rejects(err)
             })
         })
     }
}

export default xhr