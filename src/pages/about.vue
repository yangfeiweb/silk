<template>
  <div class="about">
    <headerNav></headerNav>
     <div class="main">
               <div class="contactUsContent">
                    <div class="contactBgLeft">
                        <img src="../../static/images/aboutDetails.png" alt="">
                    </div>
                    <div class="contactBgRight">
                        <div class="textContent">
                                <div class="rowRight">
                                    <p class="tel">
                                        <img src="../assets/images/icon_tel.png" alt="">
                                        <b>电话:0371 - 60996858</b>
                                    </p>
                                    <p class="site">
                                        <img src="../assets/images/icon_site.png" alt="">
                                        <b>地址:郑州市金水区21世纪社区65号楼138单元13801室</b>
                                    </p>
                                    <p class="eail">
                                        <img src="../assets/images/icon_eail.png" alt="">
                                        <b>邮箱:zzkunlin@foxmail.com</b>
                                    </p>
                                    <p class="wechat">
                                        <img src="../assets/images/icon_wechat.png" alt="">
                                        <b>kunlin666888</b>
                                    </p>
                                </div>
                                <div class="rowLeft">
                                    <p class="contactName">
                                        品牌理念
                                    </p>
                                    <p class="contactText">
                                        七彩蚕丝倾力缔造优雅与实用并存的真丝织物，将延续世代匠心独运的工艺
                                        化作对细节的严苛标准，在每一件织物中投入心力，展现品牌对不凡生活品
                                        质的不变追求。数十年来。
                                    </p>
                                    <p class="contactText">
                                        数十年来，精心织造而成的上乘真丝织物，被源源不断地送往世界各地的时
                                        尚及家居精品店，奠定了品牌无可争议的尊宠地位。
                                    </p>
                                    <p class="contactText">
                                    被源源不断地送往世界各地的时尚及家居精品店，奠定了品牌无可争议的尊
                                        宠地位。
                                    </p>
                                </div>
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
import dataService from "@/service/index";
export default {
  components: {
    headerNav,
    Footer
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss">
.about {
  .main {
    margin-top: 90px;
    height: 940px;
    .contactUsContent {
      height: 940px;
      width: 100%;
      .contactBgLeft {
        float: left;
        height: 100%;
        width: 50%;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          z-index: -1;
        }
      }
      .contactBgRight {
        float: left;
        height: 100%;
        width: 50%;
        background: #f6f6f6;
      }
      .textContent {
        width: 530px;
        margin-left:70px;
        position: relative;
        .rowLeft {
          color: #333;
          padding-right: 64px;
          .contactName {
            margin-top: 88px;
            font-size: 26px;
            margin-bottom: 32px;
          }
          .contactText {
            font-size: 16px;
            line-height: 30px;
            margin-bottom: 12px;
          }
        }
        .rowRight {
          margin-top:100px;
          margin-bottom: 70px;
          b {
            font-weight: normal;
            font-size: 18px;
            color: #b2976a;
            margin-left: 10px;
          }
          img {
            height: 26px;
          }
          p {
            margin-bottom: 25px;
          }
          .tel {
            img {
              width: 23px;
            }
          }
          .site {
            img {
              width: 22px;
            }
          }
          .eail {
            img {
              width: 35px;
            }
          }
          .wechat {
            img {
              width: 32px;
            }
          }
        }
      }
    }
  }
}
</style>

