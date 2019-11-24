import axios from 'axios'
import qs from 'qs'
import router from '../router'

const instance = axios.create({
  baseURL:'/api'

})
instance.interceptors.request.use(config=>{
  // post请求默认的参数格式json对象形式，json对象形式 ---> urlencoding
  if(config.method.toUpperCase() === 'POST' && config.data instanceof Object){
    config.data = qs.stringify(config.data) // {a: xxx, b: yyy} ---> a=xxx&b=yyy
  }
  const token = localStorage.getItem('token_key');
  if (config.headers.hasToken) {
    if (token) {
      config.headers.authorization = token
    }else{
      throw new Error('没有token，请重新登录！')
    }
  }
  
  return config
})
instance.interceptors.response.use(
  response => response.data,
  error=>{
    if (!error.response) {//没有发送请求
      console.log(error.message)
      router.currentRoute.path === '/login' && router.replace('/login')
    }else{//发送了网络请求
      if (error.response.status === 401) {
        console.log('token失效，请重新登录')
        router.currentRoute.path === '/login' && router.replace('/login')
      }else if (error.response.status === 404) {
        console.log('请求资源不存在')
      }else{
        console.log('error', error.message)
      }

    }
    console.log('error', error.message)
  }
)

export default instance