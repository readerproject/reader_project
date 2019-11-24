<template>
  <div class="registerContainer">
    <!-- <div class="header">
      <img src="../../common/images/icon/back.png" alt="" @click="$router.back()">
      <span>注册</span>
    </div> -->
    <TitleBar title="注册"/>
    <div class="registerContent">
       <form>
          <div>
            <section class="login_message">
              <p>+86</p>
              <input 
                v-model="phone" 
                name="phone" 
                v-validate="'required|phone'" 
                type="tel" 
                maxlength="11" 
                placeholder="请输入手机号">
              <span style="color: red;" v-show="errors.has('phone')">{{errors.first('phone')}}</span>
              <button
                  @click.prevent="sendCode"
                  :disabled="!isRightPhoneNumber || !!countDown"
                  class="get_verification"
                  :class="isRightPhoneNumber?'right_phone_number':''"
              >{{countDown?`${countDown}s后可以再次获取`:'获取验证码'}}</button>
            </section>
            <section class="login_verification">
              <input 
                v-model="code" 
                v-validate="'required|code'" 
                name="code" 
                type="tel" 
                maxlength="8" 
                placeholder="请输入验证码">
              <span style="color: red;" v-show="errors.has('code')">{{errors.first('code')}}</span>
            </section>
             <button class="login_submit" @click.prevent="registerLogin">注册</button>
            <section class="login_hint">
              温馨提示：未注册长佩帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
        </form>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {Toast} from 'mint-ui'
  export default {
     data(){
      return {
        phone: "",
        code: "",
        countDown: 0, // 倒计时
      }
    },
    methods:{
     async sendCode(){
        let result = await this.$API.sendCode(this.phone)
        if(result.code === 0){
          Toast('短信发送成功')
        }else {
          Toast('短信发送失败')
        }
        // 设置倒计时的时长
        this.countDown = 10
        this.intervalId = window.setInterval(() => {
          this.countDown--
          this.countDown === 0 && clearInterval(this.intervalId)
        }, 1000)
      },
     async registerLogin(){
        let { phone ,code} = this
        let phones = ["phone", "code"];
        let success = await  this.$validator.validateAll(phones);
        if (success) {
           console.log("前端验证成功");
           //发起后端验证
           let result = await this.$API.loginWithPhone(phone,code)
           console.log(result)
           if (result.code===0) {
              console.log('登录成功！')
              this.$store.dispatch('getUserAction',{user:result.data}) 
              this.$router.replace('/original')
           } 
          
        }else{
          console.log("前端验证失败");
        }
      }
    },
    computed: {
      isRightPhoneNumber(){
        // 验证手机号是否满足要求
        return /^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
   .registerContainer
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
      .registerContent
        padding-top 40px
        >form
          >div
            input
              width 80%
              height 100%
              padding-left 10px
              box-sizing border-box
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
               background-color #ffff
            .login_message
              position relative
              height 48px
              font-size 14px
              background #fff
              border-bottom  1px solid #ddd
              margin 16px
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
              span 
                position absolute
                color #A6A6B6
                text-align center
                top 0
                left 0
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #26C2BF
                font-size 14px
                background transparent
                &.right_phone_number
                  color #26C2BF
            .login_verification
              position relative
              height 48px
              font-size 14px
              background #fff
              border-bottom  1px solid #ddd
              margin 16px
          .login_submit
            display block
            width 345px
            height 48px
            background #26C2BF
            color #fff
            text-align center
            font-size 18px
            line-height 48px
            border 0
            border-radius 10px
            margin 20px auto
          .login_hint
              margin 12px
              color #999
              font-size 12px
              line-height 20px
              >a
                color #02a774
            span 
                position absolute
                color #A6A6B6
                text-align center
                top 0
                left 0
        
  
</style>
