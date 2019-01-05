<template>
  <div class="header"> 
      <div class="headContent">
        <div class="headerLeft">
        <img src="../assets/images/logo.png" alt="">
        <ul class="nav">
            <li class="navLi">
                <router-link to='/'>首页</router-link>
            </li>
            <li class="navLi" @click="colorSilk">
            关于七彩蚕
            </li>
            <li class="navLi">
                <router-link to='/goodsList'>在线商城</router-link>
            </li>
            <li class="navLi">
                <router-link to='/business'>企业动态</router-link>
            </li>
            <li class="navLi">
                <router-link to='/about'>联系我们</router-link>
            </li>
        </ul>
        </div>
        <div class="headerRight">
            <b>
                Hi！欢迎来到七彩蚕丝
            </b>
            <router-link v-show="!afterLogin" to='/login'>登录/</router-link><router-link  v-show="!afterLogin" to='/register'>注册</router-link>
            <router-link  v-show="afterLogin" to='/myCenter'>个人中心</router-link>
            <span class="loginOut" @click="loginOut"  v-show="afterLogin">退出</span>
            <router-link to='/shoppingCart' class="shoppingCart"><img src="../assets/images/cart.png" alt="">0</router-link>
            <!-- <router-link to='/info' class="news"><img src="../assets/images/news.png" alt=""></router-link> -->
        </div>
      </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      pathName: "",
      afterLogin: true
    };
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      if (!to.name) {
        this.$router.replace({ name: "home" });
        return;
      }
      this.pathName = to.name;
      next();
    });
  },
  methods: {
    colorSilk() {
      console.log(this.pathName);
      if (this.pathName === " ") {
        $("body,html").animate({ scrollTop: 950 }, 1000);
      } else {
        this.$router.replace({ name: "index" });
        $("body,html").animate({ scrollTop: 950 }, 1000);
      }
    },
    loginOut(){
        console.log('退出登录')
    }
  }
};
</script>
<style lang="scss">
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 90px;
  line-height: 90px;
  z-index: 40;
  background: #fff;
  .headContent {
    width: 1200px;
    margin: 0 auto;
    .headerLeft {
      display: flex;
      align-items: center;
      float: left;
      color: #333;
      margin-top: 27.5px;
      img {
        float: left;
        height: 35px;
        width: 130px;
        vertical-align: middle;
        margin-right: 230px;
      }
      .nav {
        float: left;
        list-style: none;
        height: 35px;
        line-height: 55px;
        li {
          float: left;
          padding: 0 19px;
          text-align: center;
          font-size: 16px;
          cursor: pointer;
          a {
            padding: 0;
            color: #333;
          }
          a:focus {
            background: #fff;
            border: none;
          }
          a:hover {
            background: #fff;
            border: none;
          }
        }
      }
    }
    .headerRight {
      float: right;
      line-height: 44px;
      font-size: 14px;
      color: #333;
      opacity: 0.86;
      .loginOut{
          cursor: pointer;
      }
      b {
        font-weight: normal;
        margin-right: 20px;
        opacity: 0.86;
      }
      a {
        color: #333;
        opacity: 0.86;
        display: inline-block;
        cursor: pointer;
        text-decoration: none;
      }
      .shoppingCart {
        margin-left: 12px;
        img {
          width: 16px;
          height: 16px;
          margin-right: 3px;
          margin-top: -2px;
        }
      }
      .news {
        margin-left: 5px;
        img {
          width: 19px;
          height: 16px;
        }
      }
    }
  }
}
</style>

