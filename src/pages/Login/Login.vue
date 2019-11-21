<template>
  <div class="LoginContainer">
    <div class="header">
       <img src="../../common/images/icon/back.png" alt="" @click="$router.back()">
       <span>登录</span>
    </div>
    <div class="logo">
       <img  src="../../common/images/icon/logo/login.png" alt="">
    </div>
    <div class="login_content">
      <form>
       <section class="login_message" v-if="isPhoneLogin">
          <p>+86</p>
          <input
            v-model="name"
            name="username"
            v-validate="'required'"
            type="phone"
            maxlength="11"
            placeholder="请输入手机号"
          />
          <span
            style="color: red;"
            v-show="errors.has('username')"
          >{{errors.first('username')}}</span>
        </section>
        <section class="login_email" v-if="!isPhoneLogin">
         <i class="iconfont icon-youxiang"></i>
          <input
            v-model="email"
            name="email"
            v-validate="'required'"
            type="email"
            placeholder="请输入邮箱"
          />
          <span
            style="color: red;"
            v-show="errors.has('email')"
          >{{errors.first('email')}}</span>
        </section>
        <section class="login_verification">
          <i class="iconfont icon-mima"></i>
          <input
            v-model="pwd"
            name="pwd"
            v-validate="'required'"
            type="text"
            maxlength="8"
            placeholder="密码"
          />
          <span style="color: red;" v-show="errors.has('pwd')">{{errors.first('pwd')}}</span>
        </section>
        <button class="login_submit" @click.prevent="login">登录</button>
    </form>
        <button class="register" @click="toRegister">立即注册</button>
        <div class="userbox">
          <span @click="emailLogin">{{isPhoneLogin?'使用手机登录':'使用邮箱登录'}}</span>
          <p >|</p>
          <span>忘记密码</span>
        </div>
  </div>
   
    
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        isPhoneLogin:true,
        name: "",
        pwd: "",
        phone: "",
        email: ""
      }
    },
    methods:{
      login(){

      },
      toRegister(){
       this.$router.push('/register')
      },
      emailLogin(){
        this.isPhoneLogin = !this.isPhoneLogin
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
   .LoginContainer
      .header
        width 100%
        height 34px
        position relative
        text-align center
        line-height 20px
        img
         width 22px
         height 20px
         position absolute
         top 8px
         left 16px
        span 
         color #333333
         font-size 15px
         position relative
         top 6px
      .logo
        width 100%
        height 129px
        text-align center
        margin-top 22px
        img
          width 152px
          height 126px    
      .login_content
        margin 30px 15px
        >form
            input
              width 80%
              height 100%
              padding 0 15px
              box-sizing border-box
              border-radius 25px
              outline 0
              font 400 14px Arial
              background-color #F5F5F5
              margin-left 60px    
              &:focus
                background-color #ffff
                border 0   
            .login_message
              width 100%
              height 100%
              position relative
              margin-top 20px
              height 42px
              font-size 14px
              background-color #F5F5F5
              border-radius 25px 
              border 1px solid #ddd
              p 
                width 20%
                height 100%
                color #26C2BF
                font-size 17px
                position absolute
                left 20px
                line-height 42px
              input 
                float right 
            .login_email
                width 100%
                height 100%
                position relative
                margin-top 20px
                height 42px
                font-size 14px
                background-color #F5F5F5
                border-radius 25px 
                border 1px solid #ddd
                i 
                  width 20%
                  height 100%
                  font-size 17px
                  position absolute
                  left 20px
                  line-height 42px
                input 
                  float right 
            .login_verification
                width 100%
                height 100%
                position relative
                margin-top 20px
                height 42px
                font-size 14px
                background-color #F5F5F5
                border-radius 25px 
                border 1px solid #ddd
                i
                 font-size 20px
                 position absolute
                 left 20px
                 height 42px
                 line-height 42px  
                input 
                 float right
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            background #26C2BF
            color #fff
            text-align center
            font-size 18px
            line-height 42px
            border 0
            border-radius 25px
        .register
            display block
            width 100%
            height 42px
            margin-top 30px
            text-align center
            font-size 18px
            line-height 42px
            background-color #ffff
            border 1px solid #26C2BF
            color #26C2BF
            border-radius 25px
        .userbox
           width 100%
           height 20px
           margin-top 30px
           display flex
           span 
             width 40%
             color #A6A6B6
             text-align center
           p
             width 20%
             color #A6A6B6
             text-align center
</style>
