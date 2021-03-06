import ajax from './ajax'

/* 发送短信验证码 */
export const sendCode = phone => ajax({
  url: '/sendcode',
  params: {
    phone
  }
})

/* 手机号验证码登陆 */
export const loginWithPhone = (phone, code) => ajax({
  url: '/login_sms',
  method: 'POST',
  data: {
    phone,
    code
  }
})

/* 自动登录 */
export const autoLogin = ()=>ajax({
  url:'/auto_login',
  headers:{
    hasToken:true
  }
})
/* 获取小说列表 */

export const getNovalList = ()=>ajax({
  url:'/noval_list',
})