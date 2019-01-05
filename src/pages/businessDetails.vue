<template>
  <div class="businessDetails">
    <headerNav></headerNav>
     <div class="main">
         <img class="businessBg" :src="imgUrl" alt="">
         <div class="businessText">

            <p class="tab"><router-link to='/'>首页/</router-link><router-link to='/business'>企业动态</router-link></p>
            <p class="title">
                {{businessData.title}}
            </p>
            <p class="time">
                {{businessData.time}}
            </p>
         </div>
         <div class="content">
            <div class="contentText" v-html="businessData.businessText">
            </div>
         </div>
     </div>
    <Footer></Footer>
  </div>
</template>
<script>
import headerNav from "../components/header.vue";
import Footer from "../components/footer.vue";
import dataService from "@/service/index";
export default {
  components: {
    headerNav,
    Footer
  },
  data() {
    return {
      imgUrl: "../../static/images/business.png",
      businessData:{
          title:'台湾同仁来我司考察',
          time:'2018-7-12',
          businessText:'<p>蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝,是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结,构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟,蚕结构蚕丝是熟蚕</p><p>蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝,是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结,构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟,蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟</p><p>蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝,是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结,构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟,蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟</p><img src="../../static/images/dynamics3.png"><img src="../../static/images/dynamics3.png"><img src="../../static/images/dynamics3.png"><p>蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝,是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结,构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟,蚕结构蚕丝是熟蚕</p><p>蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝,是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结,构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟,蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟</p><p>蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝,是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结,构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟,蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟</p>'
      }
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss">
.businessDetails {
  .main {
    width: 100%;
    margin-bottom: 100px;
    .businessBg {
      height: 320px;
      width: 100%;
      margin-bottom: 40px;
    }
    .businessText{
       width:1200px;
       margin: 0 auto;
        p{
        margin-left: 139px;
        }
    }
    .tab{
       margin-bottom: 20px;
       a{
           color: #5a5b59;
           font-size: 12px;
       }
    }
    .title{
        text-align: center;
        font-size: 22px;
        color: #333;
        margin-bottom: 7px;
        margin-right: 139px;
    }
    .time{
        text-align: center;
        font-size: 12px;
        color: #5a5b59;
        padding-bottom: 10px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 30px;
        margin-right: 139px;
    }
    .content {
      width: 1200px;
      margin: 0 auto;
      margin-bottom: 69px;
      padding: 0 139px;
      .contentText{
          margin: 0 31px;
          text-align: center;
          p{
              text-indent: 31px;
              font-size: 14px;
              color: #333;
              line-height: 24px;
              text-align: left;
          }
          img{
              width:281px;
              height: 182px;
              margin-right: 5px;
              margin: 30px 5px 30px 0;
          }
      } 
    }
  }
}
</style>

