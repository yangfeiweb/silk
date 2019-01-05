<template>
  <div class="login">
      <header-nav></header-nav>
      <div class="loginMain">
        <img src="../assets/images/login_bg.png" alt="">
        <div class="loginContent">
            <div class="loginForm">
                <div class="formModule">
                    <img src="../assets/images/logo.png" alt="">
                    <div class="user formUserPass">
                        <b><img src="../assets/images/icon_user.png" alt=""></b>
                        <input type="text" placeholder="手机号/用户名/邮箱">
                    </div>
                    <div class="pass formUserPass">
                        <b><img src="../assets/images/icon_pass.png" alt=""></b>
                        <input type="password" placeholder="密码">
                    </div>
                    <p class="err">
                        <img src="../assets/images/icon_err.png" alt="">
                        <b>用户名或密码错误</b>
                    </p>
                    <div class="checkboxDiv">
                        <label class="checkbox-inline">
                            <input type="checkbox" id="inlineCheckbox1" value="option1"> 记住密码
                        </label>
                        <router-link to='/forgotPass' class="forgotPass">忘记密码? </router-link>
                    </div>
                    <button class="resetBtn">登录</button>
                    <router-link to='/register' class="registerInfo">还未注册? 立即注册</router-link>
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
      }
  },
  mounted () {
     
  },
  methods:{
   
  }
}
</script>
<style lang="scss">
.login{
    position: relative;
    display: flex;
    height: 100%;
    flex-direction: column;
    a:hover{
         text-decoration: none;
    }
    .header{
        position: relative;
        margin-bottom: 27.5px;
    }
    .loginMain{
        height: 100%;
        width: 100%;
        display: flex;
        position: relative;
        img{
            width: 100%;
            height: 100%;
        }
        .loginContent{
            width:1200px;
            height: 100%;
            margin: 0 auto;
            position: absolute;
            left: 50%;
            margin-left: -600px;
            .loginForm{
                position: absolute;
                top:110px;
                left:640px;
                height:436px;
                width: 514px;
                background: rgba(0,0,0,0.3);
                z-index: 10;
                .formModule{
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
                            width: 284px;
                            height: 45px;
                            color: #A1A1A1;
                            font-size: 14px;
                            border-top-right-radius: 5px;
                            border-bottom-right-radius: 5px;
                            border: none;
                        }
                        height: 45px;
                        line-height: 45px;
                        margin-bottom: 20px;
                        b{
                            display: inline-block;
                            width:46px;
                            height: 45px;
                            float: left;
                            background: #353739;
                            line-height: 45px;
                            border-top-left-radius: 5px;
                            border-bottom-left-radius: 5px;
                            img{
                                height: 25px;
                                width: 25px;
                                margin-top: 10px;
                            }
                        }
                        input{
                            float: left;
                        }
                    }
                    .pass{
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
                        display: flex;
                        justify-content: space-between;
                        color: #E9E8E8;
                        font-size: 14px;
                        margin-bottom: 25px;
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
                }
            }
        }
    }

}
</style>

