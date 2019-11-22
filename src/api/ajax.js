import axios from 'axios'
import qs from 'qs'

const instance = axios.create({
  baseURL:'/api'

})
instance.interceptors.request.use(config=>{
  // post请求默认的参数格式json对象形式，json对象形式 ---> urlencoding
  if(config.method.toUpperCase() === 'POST' && config.data instanceof Object){
    config.data = qs.stringify(config.data) // {a: xxx, b: yyy} ---> a=xxx&b=yyy
  }
  return config
})
instance.interceptors.response.use(
  response => response.data,
  error=>{
    console.log('error',error.message)
    return new Promise(() => {}) 
  }

)

export default instance