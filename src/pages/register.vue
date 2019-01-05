<template>
  <div class="register">
      <header-nav></header-nav>
            <div class="registerMain">
        <img src="../assets/images/login_bg.png" alt="">
        <div class="registerContent">
            <div class="registerForm">
                <div class="registerModule">
                    <img src="../assets/images/logo.png" alt="">
                    <div class="user formUserPass">
                        <el-input v-model="tel"  @change="getTel"  placeholder="手机号"></el-input>
                    </div>
                    <div class="authCode formUserPass">
                        <input type="text"  v-model="authCode" placeholder="验证码">
                        <button v-text="authCodeInfo" :disabled='disableds' @click="getAuthCode"></button>
                    </div>
                    <div class="pass formUserPass ">
                        <input type="password" v-model="password" placeholder="密码">
                    </div>
                    <div class="pass formUserPass verify">
                        <input type="password" @blur="getPassword" v-model="verifyPassword" placeholder="确认密码">
                    </div>
                    <p class="err">
                        <img src="../assets/images/icon_err.png" alt="">
                        <b>{{errInfo}}</b>
                    </p>
                    <div class="checkboxDiv">
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox1" value="option1"> 同意
                        </label>
                        <router-link to='/forgotPass' class="forgotPass">《某某协议》</router-link>
                    </div>
                    <button class="resetBtn" @click="submit" :disabled='submitDisabled'>注册</button>
                    <router-link to='/login' class="registerInfo">已有账号? 请登录</router-link>
                </div>
            </div>
        </div>
      </div>
      <Footer></Footer>
  </div>
</template>
<script>
import headerNav from "../components/header.vue";
import Footer from "../components/footer.vue";
export default {
  components: {
      headerNav,
      Footer
  },
  data () {
      return {
          authCodeInfo:'发送验证码',
          disableds:false,
          submitDisabled:true,
          tel:'',
          telOk:false,
          authCode:"",
          authCodeOk:false,
          password:'',
          passWordOk:false,
          verifyPassword:'',
          verifyPasswordOk:false,
          errInfo:'此账户名称，已被注册'
      }
  },
  watch:{
      tel(val,oldVal){
          console.log(val,oldVal)
      },
  },
  mounted () {
     
  },
  methods:{
    //  点击获取验证码和验证码有效倒计时
      getAuthCode(){
          console.log('点击获取验证码')
          this.authCodeInfo = '60s'
          this.disableds = true;
      },
    //  用户输入的电话号码是否合法
      getTel(){
          console.log(this.tel)
      },
    //  校验两次验证码是否相同
      getPassword(){
          console.log(this.password,this.verifyPassword)
          if(this.password !== this.getPassword){
              console.log('两次输入的密码不正确')
              this.errInfo = '密码输入不一致';
          }
      },
      submit(){
          console.log('提交数据')
          
      }
  }
}
</script>
<style lang="scss">
.register{
    position: relative;
    display: flex;
    height: 100%;
    flex-direction: column;
    a:hover{
         text-decoration: none;
    }
    .header{
        position: relative;
        margin-bottom: 30px;
    }
     .registerMain{
        height: 100%;
        width: 100%;
        display: flex;
        position: relative;
        img{
            width: 100%;
            height: 100%;
        }
        .registerContent{
            width:1200px;
            height: 100%;
            margin: 0 auto;
            position: absolute;
            left: 50%;
            margin-left: -600px;
            .registerForm{
                position: absolute;
                top:110px;
                left:640px;
                height:572px;
                width: 514px;
                background: rgba(0,0,0,0.3);
                z-index: 10;
                .registerModule{
                    margin: 50px 92px;
                    width: 330px;
                    text-align: center;
                    img{
                        width:130px;
                        height: 35px;
                        margin-bottom: 30px;
                    }
                    input:focus{
                        outline:none;
                    }
                    .formUserPass{
                        input{
                            padding-left: 15px;
                            width: 330px;
                            height: 45px;
                            color: #A1A1A1;
                            font-size: 14px;
                            border-radius: 5px;
                            border-radius: 5px;
                            border: none;
                        }
                        height: 45px;
                        line-height: 45px;
                        margin-bottom: 20px;
                        input{
                            float: left;
                        }
                    }
                    .pass{
                        margin-bottom: 20px;
                    }
                    .verify{
                        margin-bottom: 8px;
                    }
                    .err{
                        width: 330px;
                        overflow: hidden;
                        margin-bottom: 12px;
                        img{
                            width:14px;
                            height: 14px;
                            margin-right: 5px;
                            float: left;
                            margin-bottom: 0px;
                        }
                        b{
                            float: left;
                            color:#DF2F2F;
                            font-size: 12px;
                        }
                    }
                    .checkboxDiv{
                        color: #E9E8E8;
                        font-size: 14px;
                        margin-bottom: 25px;
                        text-align: left;
                        input{
                            width:14px;
                            height: 14px;
                        }
                        .forgotPass{
                            color: #E9E8E8;
                        }
                        .forgotPass:hover{
                            text-decoration: none;
                        }
                    }
                    .resetBtn{
                        background: #bca070;
                        color: #fff;
                        font-size: 18px;
                        height: 45px;
                        margin-bottom: 25px;
                        width: 330px;
                        border:none;
                        border-radius: 5px;
                    }
                    .resetBtn:focus{
                        outline: none;
                    }
                    .registerInfo{
                        color: #fff;
                        font-size: 14px;
                    }
                    .authCode{
                        height: 45px;
                        border: none;
                        input{
                            width:200px;
                            margin-right: 10px;
                        }
                        button{
                            width:120px;
                            height: 45px;
                            border-width:0;
                            color: #bca070;
                            font-size: 14px;
                            border-radius: 5px;
                            background: #fff;
                        }
                        button:focus{
                            outline: none;
                        }
                    }
                }
            }
        }
    }
}
</style>

