<template>
<div class="sign">
  <div class="main">
    <div class="title">
      <a class="active" href="/">登录</a>
      <span>·</span>
      <a href="/register">注册</a>
    </div>

    <div class="sign-up-container">
      <el-form ref="userForm" :model="user">

        <el-form-item class="input-prepend restyle" prop="phone" :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]">
          <div >
            <el-input type="text" placeholder="用户名" v-model="user.phone"/>
            <i class="iconfont icon-user" />
          </div>
        </el-form-item>
    
        <br>

        <el-form-item class="input-prepend" prop="password" :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
          <div>
            <el-input type="password" placeholder="密码" v-model="user.password"/>
            <i class="iconfont icon-password"/>
          </div>
        </el-form-item>

        <div class="btn">
          <input type="button" class="sign-in-button" value="登录" @click="submitLogin()">
        </div>
      </el-form>
      <!-- 更多登录方式 -->
      <div class="more-sign">
        <h6>社交帐号登录</h6>
        <ul>
          <li><a id="weixin" class="weixin" target="_blank" href="http://qy.free.idcfengye.com/api/ucenter/weixinLogin/login"><i class="iconfont icon-weixin"/></a></li>
          <li><a id="qq" class="qq" target="_blank" href="#"><i class="iconfont icon-qq"/></a></li>
        </ul>
      </div>
    </div>

  </div>
</div>
</template>

<script>
  import '~/assets/css/sign.css'
  import '~/assets/css/iconfont.css'
  import cookie from 'js-cookie'
  import loginApi from '@/api/login.js'

  export default {
    layout:'sign',
    data () {
      return {
        user:{
          phone:'',
          password:''
        },
        loginInfo:{}
      }
    },
    create(){
    },

    methods: {
      submitLogin(){
        // 1.调用接口获取token字符串
        loginApi.doLogin(this.user).then(response => {
          //2.将token放入cookie中  cookie名称，值，作用范围
          cookie.set('user_token',response.data.data)
          //3.判断cookie中是否有token，有就放到header中 在request.js中
          // loginApi.getUserInfo().then(response => {
          //   this.loginInfo = response.data.data
          //   console.log(this.loginInfo)
          //   //4.把信息放入cookie中
          //    cookie.set("user_info", JSON.stringify(this.loginInfo), {domain: 'localhost',});
          // })
          //5.跳转页面
          // this.$router.push({path: '/'})


          //以下为适应接口
          if(response.data.code==1){
            this.$router.push({path: '/'})
          }else{
            alert("登录失败！")
          }
        })
      },
    }
  }
</script>
<style>
   .el-form-item__error{
    z-index: 9999999;
  }
</style>