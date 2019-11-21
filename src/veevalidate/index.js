import Vue from 'vue'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)
VeeValidate.Validator.extend('phone', {
  validate: value => {
    return /^1\d{10}$/.test(value)
  },
  getMessage: field => field + '必须是11位手机号码'
})


VeeValidate.Validator.extend('code', {
  validate: value => {
    return /^\d{4,6}$/.test(value)
  },
  getMessage: field => field + '必须是4-6位的数字'
})

VeeValidate.Validator.extend('email', {
  validate: value => {
    return  /^\w+@[a-z0-9]+\.[a-z]+$/i.test(value)
  },
  getMessage: field => field + '必须是adc123@qq.com形式'
})

VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    phone: '手机号',
    pwd:'密码',
    email:'邮箱'
    
  }
})