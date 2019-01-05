<template>
  <div class="index">
      <headerNav></headerNav>
      <div class="main">
          <div class="swiper-container mainSwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in carouselList" :key="index">
                    <img :src="item.imgUrl" alt="">
                    <div class="carText">
                        <p class="location carTitle">{{item.carTitle}}</p>
                        <p class="location carState">{{item.carState}}</p>
                        <p class="location carTitleEng" v-html="item.carTitleEng"></p>
                        <p class="location carBuy" @click="getProductDetails">立即购买<b class="icon_shopping"></b></p>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next swiper-button-white"></div>
            <div class="swiper-button-prev swiper-button-white"></div>
          </div>
          <div class="colorSilk">
              <div class="colorSilkText column">
                  <p class="colorSilkEng columnEng">
                      Colorful Silkworms
                  </p>
                  <p class="colorSilkZh columnZh">
                      关于七彩蚕
                  </p>
                  <img class="iconState" src="../assets/images/icon_state.png" alt="">
                  <ul class="colorSilkStateUl">
                      <li class="colorSilkStateLi" v-for="(item,index) in colorSilkState" :key="index">
                          <ul class="colorSilkLiCentent">
                              <li v-for="(items,indexs) in item" :key="indexs">
                                  <p>{{items}}</p>
                              </li>
                          </ul>
                      </li>
                  </ul>
              </div>
              <div class="colorSilkMain">
                <div class="row">
                    <div class="col-xs-12 col-md-7 rowImg">
                        <div class="rowImgBg">
                            <img src="../../static/images/colorSilk1.png" alt="">
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-5 rowText">
                        <p class="colorSilkMainTitle">
                            柞蚕基地—南召
                        </p>
                        <p class="colorSilkMainText">
                            南召柞蚕业兴于汉，宏于明，盛于清，距今已有2000年的
                            历史。西汉末年境内有野蚕成茧，东汉光武开始人工放养。
                            明嘉靖年间，"山丝产额甲于各县"，满城梭子声，南召店、
                            (旧县城)"日进斗金".
                        </p>
                        <p class="colorSilkMainText">
                            清代，南召柞蚕业进一步兴旺发达，民众以"养蚕为业，植
                            柞为本"。
                        </p>

                    </div>
                </div>
                 <div class="row">
                    <div class="col-xs-12 col-md-5 rowText">
                        <p class="colorSilkMainTitle">
                            柞蚕基地—南召
                        </p>
                        <p class="colorSilkMainText">
                            南召柞蚕业兴于汉，宏于明，盛于清，距今已有2000年的
                            历史。西汉末年境内有野蚕成茧，东汉光武开始人工放养。
                            明嘉靖年间，"山丝产额甲于各县"，满城梭子声，南召店、
                            (旧县城)"日进斗金".
                        </p>
                        <p class="colorSilkMainText">
                            清代，南召柞蚕业进一步兴旺发达，民众以"养蚕为业，植
                            柞为本"。
                        </p>

                    </div>
                    <div class="col-xs-12 col-md-7 rowImg">
                        <div class="rowImgBg">
                            <img src="../../static/images/colorSilk1.png" alt="">
                        </div>
                    </div>
                </div>
              </div>

          </div>
          <div class="productMain">
               <div class="productMainText column">
                  <p class="productMainEng columnEng">
                      product classification
                  </p>
                  <p class="productMainZh columnZh">
                      产品分类
                  </p>
                  <img class="iconState" src="../assets/images/icon_state.png" alt="">
               </div>
               <div class="productMainContent">
                    <div class="row">
                        <div class="col-xs-12 col-md-6 productRowLeft">
                            <div class="rowImgBg">
                                <img src="../../static/images/product1.png" alt="">
                                <div class="productText">
                                    <p class="productName">
                                        精品蚕丝内衣
                                    </p>
                                    <p class="productNameEng">
                                        Fine silk underwear
                                    </p>
                                    <p class="productBuy" @click="getProductDetails">立即购买<b class="icon_shopping"></b>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-6 productRowRight">
                            <div class="productRowRTop">
                                <img src="../../static/images/product2.png" alt="">
                                <div class="productText">
                                    <p class="productName">
                                        精品蚕丝内衣
                                    </p>
                                    <p class="productNameEng">
                                        Fine silk underwear
                                    </p>
                                    <p class="productBuy">立即购买<b class="icon_shopping"></b>
                                    </p>
                                </div>
                            </div>
                            <div class="productRowRBottom">
                                <img src="../../static/images/product3.png" alt="">
                                <div class="productText">
                                    <p class="productName">
                                        精品蚕丝内衣
                                    </p>
                                    <p class="productNameEng">
                                        Fine silk underwear
                                    </p>
                                    <p class="productBuy">立即购买<b class="icon_shopping"></b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="productMove iconDetails">
                        <p>
                            更多
                            <img src="../assets/images/move.png" alt="">
                        </p>
                    </div>
               </div>
          </div>
          <div class="hotProductMain">
               <div class="hotproductMainText column">
                  <p class="hotproductMainEng columnEng">
                      Hot selling products
                  </p>
                  <p class="hotproductMainZh columnZh">
                      热销产品
                  </p>
                  <img class="iconState" src="../assets/images/icon_state.png" alt="">
               </div>
               <div class="hotProductContent">
                     <div class="swiper-container hotProductContentSwiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(item,index) in hotProductList" :key='index' @click="getProductDetails">
                                <img :src="item.imgUrl" alt="">
                                <p class="hotProductName">{{item.hotProductName}}</p>
                                <p class="hotProductPrice">￥{{item.hotProductPrice}}</p>
                            </div>
                        </div>
                        <div class="hotProductContentSwiperNext swiper-button-next swiper-button-white"></div>
                        <div class="hotProductContentSwiperPrev swiper-button-prev swiper-button-white"></div>
                    </div>
                     <div class="productMove iconDetails">
                        <p>
                            更多
                            <img src="../assets/images/move.png" alt="">
                        </p>
                    </div>
               </div>
          </div>
          <div class="dynamicsMain">
               <div class="dynamicsMainText column">
                  <p class="dynamicsMainEng columnEng">
                      Enterprise dynamics
                  </p>
                  <p class="dynamicsMainZh columnZh">
                      企业动态
                  </p>
                  <img class="iconState" src="../assets/images/icon_state.png" alt="">
               </div>
               <div class="dynamicsContent">
                   <ul class="row">
                        <li class="col-xs-12 col-md-4  dynamicsContentOne rowDiv" v-for="(item,index) in dynamicsList" :key="index" @click="getDynamicsDetails">
                            <img :src="item.imgUrl" alt="">
                            <div class="dynamicsContentText">
                                <p class="dynamicsName">
                                    {{item.dynamicsName}}
                                </p>
                                <p class="dynamicsText">
                                {{item.dynamicsText}}
                                </p>
                                <p class="dynamicsState">
                                    <b class="time">{{item.time}}</b>
                                    <img class="locationIcon" src="../assets/images/icon_location.png" alt="">
                                    <b class="location"> {{item.location}}</b>
                                    <img class="lookIcon" src="../assets/images/lookIcon.png" alt="">
                                    <b class="lookNum">  {{item.lookNum}}</b>
                                </p>
                            </div>
                        </li>
                   </ul>
                     <div class="productMove iconDetails" @click="getDynamics">
                        <p>
                            更多
                            <img src="../assets/images/move.png" alt="">
                        </p>
                    </div>
               </div>
          </div>
          <div class="contactUsMain">
               <div class="contactUsMainText column">
                  <p class="contactUsMainEng columnEng">
                      Contact us
                  </p>
                  <p class="contactUsMainZh columnZh">
                      联系我们
                  </p>
                  <img class="iconState" src="../assets/images/icon_state.png" alt="">
               </div>
               <div class="contactUsContent">
                    <div class="contactBgLeft">
                        <div class="contactBgLeftBg"></div>
                        <img src="../../static/images/contact.png" alt="">
                    </div>
                    <div class="contactBgRight">
                    </div>
                    <div class="row">
                            <div class="col-xs-12 col-md-6 rowLeft">
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
                                <div class="iconDetails contactDetails">
                                    <p @click="getAbout">
                                        详情
                                        <img src="../assets/images/moveB.png" alt="">
                                    </p>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6 rowRight">
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
                    </div>
               </div>
          </div>
      </div>
      <Footer></Footer>
       <img class="goTop" @click="goTop" src="../assets/images/icon_top.png" alt="">
  </div>
</template>
<script>
import Swiper from "swiper/dist/js/swiper.min.js";
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
      carouselList: [
        {
          imgUrl: "../../static/images/main.png",
          carTitle: "七彩蚕丝 —— 不止于暖",
          carState: "100%柞蚕丝 | 源自黄金产蚕地带",
          carTitleEng:
            "Coloured silk-not just warm <br/> 100 % tussah silk | from gold Silkworm producing area"
        },
        {
          imgUrl: "../../static/images/main.png",
          carTitle: "七彩蚕丝 —— 不止于暖",
          carState: "100%柞蚕丝 | 源自黄金产蚕地带",
          carTitleEng:
            "Coloured silk-not just warm <br/> 100 % tussah silk | from gold Silkworm producing area"
        },
        {
          imgUrl: "../../static/images/main.png",
          carTitle: "七彩蚕丝 —— 不止于暖",
          carState: "100%柞蚕丝 | 源自黄金产蚕地带",
          carTitleEng:
            "Coloured silk-not just warm <br/> 100 % tussah silk | from gold Silkworm producing area"
        }
      ],
      colorSilkState: [
        ["蚕丝义理苦追寻", "方寸那容外物侵"],
        [
          "伯乐未逢无识价",
          "子期不遇少知音",
          "泉源有本渊渊静",
          "学海无涯步步深"
        ],
        ["仰望泰山高北斗", "何时许我一登临"],
        ["春蚕不应老", "昼夜常怀丝", "何惜微躯尽", "缠绵自有时"]
      ],
      hotProductList: [
        {
          imgUrl: "../../static/images/hot1.png",
          hotProductName: "儿童新款蚕丝睡衣",
          hotProductPrice: "1200"
        },
        {
          imgUrl: "../../static/images/hot2.png",
          hotProductName: "儿童新款蚕丝睡衣",
          hotProductPrice: "1200"
        },
        {
          imgUrl: "../../static/images/hot3.png",
          hotProductName: "儿童新款蚕丝睡衣",
          hotProductPrice: "1200"
        },
        {
          imgUrl: "../../static/images/hot4.png",
          hotProductName: "儿童新款蚕丝睡衣",
          hotProductPrice: "1200"
        },
        {
          imgUrl: "../../static/images/hot1.png",
          hotProductName: "儿童新款蚕丝睡衣",
          hotProductPrice: "1200"
        },
        {
          imgUrl: "../../static/images/hot2.png",
          hotProductName: "儿童新款蚕丝睡衣",
          hotProductPrice: "1200"
        },
        {
          imgUrl: "../../static/images/hot3.png",
          hotProductName: "儿童新款蚕丝睡衣",
          hotProductPrice: "1200"
        },
        {
          imgUrl: "../../static/images/hot4.png",
          hotProductName: "儿童新款蚕丝睡衣",
          hotProductPrice: "1200"
        }
      ],
      dynamicsList: [
        {
          imgUrl: "../../static/images/dynamics1.png",
          dynamicsName: "七彩柞蚕丝工厂引进新设备",
          dynamicsText:
            " 蚕丝是熟蚕结茧时所分泌丝液凝固而成的连续长纤维，的连续长纤是一种蚕丝是熟茧......",
          time: "2018-6-12",
          location: "南阳市南召",
          lookNum: "1200"
        },
        {
          imgUrl: "../../static/images/dynamics2.png",
          dynamicsName: "七彩柞蚕丝工厂引进新设备",
          dynamicsText:
            " 蚕丝是熟蚕结茧时所分泌丝液凝固而成的连续长纤维，的连续长纤是一种蚕丝是熟茧......",
          time: "2018-6-12",
          location: "南阳市南召",
          lookNum: "1200"
        },
        {
          imgUrl: "../../static/images/dynamics3.png",
          dynamicsName: "七彩柞蚕丝工厂引进新设备",
          dynamicsText:
            " 蚕丝是熟蚕结茧时所分泌丝液凝固而成的连续长纤维，的连续长纤是一种蚕丝是熟茧......",
          time: "2018-6-12",
          location: "南阳市南召",
          lookNum: "1200"
        }
      ]
    };
  },
  mounted() {
    var mySwiper = new Swiper(".mainSwiper", {
      autoplay: 10000,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        slideChangeTransitionStart: function() {
          let i = this.activeIndex - 1;
          console.log(i);
          $(".carTitle")
            .eq(i)
            .addClass("animated fadeInRight");
        },
        slideChangeTransitionEnd: function() {
          let i = this.activeIndex;
          $(".carTitle")
            .eq(i)
            .removeClass("animated fadeInRight");
        }
      }
    });
    var swiper = new Swiper(".hotProductContentSwiper", {
      slidesPerView: 4,
      spaceBetween: 25,
      width: 1163,
      navigation: {
        nextEl: ".hotProductContentSwiperNext",
        prevEl: ".hotProductContentSwiperPrev"
      }
    });
  },
  methods: {
    getAbout() {
      console.log("前往联系我们详情页");
      this.$router.push("/about")
    //   dataService.article().then(
    //     res => {
    //       console.log("res", res);
    //       let result = res.body.code;
    //     },
    //     err => {}
    //   );
    },
    goTop() {
      $("body,html").animate({ scrollTop: 0 }, 1000);
    },
    getDynamicsDetails(){
        console.log('点击进入企业动态详情页')
        this.$router.push('/businessDetails')
    },
    getDynamics(){
        console.log('点击进入企业动态列表页')
        this.$router.push('/business')
    },
    getProductDetails(){
        console.log('进入产品详情页')
        this.$router.push('/goodsDetails')
    }
  }
};
</script>
<style lang="scss">
.index {
  height: 100%;
  .goTop {
    position: fixed;
    right: 20px;
    bottom: 150px;
    cursor: pointer;
  }
  .main {
    margin-top: 90px;
    //模块的标题
    .column {
      text-align: center;
      p {
        text-align: center;
      }
      .columnEng {
        color: #040203;
        font-size: 16px;
      }
      .columnZh {
        color: #040203;
        font-size: 36px;
      }
      .iconState {
        margin-top: 20px;
        margin-bottom: 40px;
      }
    }
    // 详情,更多
    .iconDetails {
      margin-top: 50px;
      text-align: center;
      position: relative;
      p {
        position: absolute;
        left: -90px;
        margin-left: 50%;
        border: 1px solid #a1a1a1;
        font-size: 16px;
        color: #777;
        width: 180px;
        height: 46px;
        line-height: 46px;
        cursor: pointer;
        img {
          width: 23px;
          height: 16px;
          margin-left: 8px;
          margin-top: -3px;
        }
      }
    }
    // 轮播图
    .mainSwiper {
      overflow: hidden;
      .swiper-wrapper {
        height: 894px;
        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #fff;
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          .carText {
            width: 1200px;
            margin: 0 auto;
            position: absolute;
            padding-left: 176px;
            height: 100%;
            text-align: center;
            .location {
              position: absolute;
            }
            .carTitle {
              color: #373636;
              font-size: 46px;
              top: 96px;
            }
            .carState {
              top: 164px;
              font-size: 34px;
              color: #77777a;
            }
            .carTitleEng {
              top: 253px;
              font-size: 16px;
              text-align: left;
            }
            .carBuy {
              top: 323px;
              font-size: 26px;
              color: #4b4849;
              cursor: pointer;
              .icon_shopping {
                display: inline-block;
                width: 0px;
                height: 0px;
                border-top: 8px solid transparent;
                border-left: 12px solid #bca070;
                border-bottom: 8px solid transparent;
                margin-left: 18px;
              }
            }
          }
        }
      }
      .swiper-pagination-bullets {
        bottom: 20px;
      }
      .swiper-pagination-bullet {
        background: #ebecec;
        opacity: 1;
        width: 18px;
        height: 18px;
        margin: 0 18.5px;
      }
      .swiper-pagination-bullet-active {
        background: #bca070;
      }
      .swiper-button-next.swiper-button-white,
      .swiper-container-rtl .swiper-button-prev.swiper-button-white {
        background-image: url(../assets/images/iconNext.png);
      }
      .swiper-button-next,
      .swiper-button-prev {
        width: 97px;
        height: 28px;
        background-size: 97px 28px;
      }
      .swiper-button-next,
      .swiper-container-rtl .swiper-button-prev {
        right: 50px;
      }
      .swiper-button-prev.swiper-button-white,
      .swiper-container-rtl .swiper-button-next.swiper-button-white {
        background-image: url(../assets/images/iconPrev.png);
      }
      .swiper-button-prev,
      .swiper-container-rtl .swiper-button-next {
        left: 50px;
      }
    }
    // 关于七彩蚕
    .colorSilk {
      width: 1200px;
      margin: 0 auto;
      margin-top: 100px;
      margin-bottom: 100px;
      .colorSilkText {
        margin-bottom: 62px;
        ul,
        li {
          list-style: none;
        }
        .colorSilkStateLi {
          margin-bottom: 8px;
          .colorSilkLiCentent {
            li {
              display: inline-block;
              margin-right: 20px;
              font-size: 16px;
              color: #040203;
            }
          }
        }
      }
      .colorSilkMain {
        .row {
          margin-bottom: 70px;
          .rowImg {
            .rowImgBg {
              background: #f6f6f6;
              width: 546px;
              height: 618px;
              img {
                width: 637px;
                height: 507px;
                margin-left: 80px;
                margin-top: 55.5px;
              }
            }
          }
          .rowText {
            padding-left: 50px;
            margin-top: 135.5px;
            .colorSilkMainTitle {
              color: #040203;
              font-size: 26px;
              margin-bottom: 10px;
            }
            .colorSilkMainText {
              font-size: 14px;
              color: #333;
              line-height: 20px;
              margin-bottom: 8px;
            }
          }
        }
      }
    }
    // 产品分类
    .productMain {
      width: 1200px;
      margin: 0 auto;
      margin-bottom: 100px;
      .productMainContent {
        .row {
          margin: 0;
          .productRowLeft {
            padding-left: 20px;
            padding-right: 0px;
            .rowImgBg {
              position: relative;
              .productText {
                position: absolute;
                top: 82px;
                left: 68px;
                .productName {
                  font-size: 22px;
                  color: #333;
                  margin-bottom: 3px;
                }
                .productNameEng {
                  font-size: 16px;
                  color: #333;
                  margin-bottom: 28px;
                }
                .productBuy {
                  font-size: 16px;
                  color: #4b4849;
                  cursor: pointer;
                  .icon_shopping {
                    display: inline-block;
                    width: 0px;
                    height: 0px;
                    border-top: 5px solid transparent;
                    border-left: 8px solid #bca070;
                    border-bottom: 5px solid transparent;
                    margin-left: 10px;
                  }
                }
              }
            }
          }
          .productRowRight {
            margin-top: 23px;
            padding-left: 12.5px;
            padding-right: 0px;
            .productRowRTop {
              position: relative;
              .productText {
                position: absolute;
                top: 82px;
                left: 68px;
                .productName {
                  font-size: 22px;
                  color: #333;
                  margin-bottom: 3px;
                }
                .productNameEng {
                  font-size: 16px;
                  color: #333;
                  margin-bottom: 28px;
                }
                .productBuy {
                  font-size: 16px;
                  color: #4b4849;
                  cursor: pointer;
                  .icon_shopping {
                    display: inline-block;
                    width: 0px;
                    height: 0px;
                    border-top: 5px solid transparent;
                    border-left: 8px solid #bca070;
                    border-bottom: 5px solid transparent;
                    margin-left: 10px;
                  }
                }
              }
            }
            .productRowRBottom {
              margin-top: 23px;
              position: relative;
              .productText {
                position: absolute;
                top: 82px;
                left: 270px;
                .productName {
                  font-size: 22px;
                  color: #333;
                  margin-bottom: 3px;
                }
                .productNameEng {
                  font-size: 16px;
                  color: #333;
                  margin-bottom: 28px;
                }
                .productBuy {
                  font-size: 16px;
                  color: #4b4849;
                  cursor: pointer;
                  .icon_shopping {
                    display: inline-block;
                    width: 0px;
                    height: 0px;
                    border-top: 5px solid transparent;
                    border-left: 8px solid #bca070;
                    border-bottom: 5px solid transparent;
                    margin-left: 10px;
                  }
                }
              }
            }
          }
        }
        .productMove {
          margin-top: 50px;
        }
      }
    }
    // 热销产品
    .hotProductMain {
      padding-top: 100px;
      width: 1200px;
      margin: 0 auto;
      margin-bottom: 200px;
      .hotProductContent {
        .swiper-container {
          width: 100%;
          height: 100%;
          .swiper-wrapper {
            width: 1163px;
            margin: 0 auto;
            .swiper-slide {
              text-align: center;
              font-size: 18px;
              background: #fff;
              margin-right: 25px !important;
              cursor: pointer;
              /* Center slide text vertically */
              display: -webkit-box;
              display: -ms-flexbox;
              display: -webkit-flex;
              display: flex;
              -webkit-box-pack: center;
              -ms-flex-pack: center;
              -webkit-justify-content: center;
              justify-content: center;
              width: 272px !important;
              height: 415px !important;
              position: relative;
              img {
                height: 344px;
                width: 100%;
              }
              p {
                position: absolute;
                bottom: 0px;
                left: 0px;
                text-align: center;
                width: 100%;
              }
              .hotProductName {
                bottom: 33px;
                font-size: 16px;
              }
              .hotProductPrice {
                font-size: 20px;
                color: #333;
              }
            }
          }
          .swiper-button-next.swiper-button-white,
          .swiper-container-rtl .swiper-button-prev.swiper-button-white {
            background-image: url(../assets/images/newsRight.png);
          }
          .swiper-button-next,
          .swiper-button-prev {
            width: 36px;
            height: 36px;
            background-size: 36px 36px;
            top: 40%;
          }
          .swiper-button-next,
          .swiper-container-rtl .swiper-button-prev {
            right: 0px;
          }
          .swiper-button-prev.swiper-button-white,
          .swiper-container-rtl .swiper-button-next.swiper-button-white {
            background-image: url(../assets/images/newsLeft.png);
          }
          .swiper-button-prev,
          .swiper-container-rtl .swiper-button-next {
            left: 0px;
          }
        }
      }
    }
    // 企业动态
    .dynamicsMain {
      margin-bottom: 200px;
      .dynamicsContent {
        .row {
          width: 1200px;
          margin: 0 auto;
          list-style: none;
          .rowDiv {
            padding: 0;
            img {
              width: 382px;
              height: 248px;
            }
            .dynamicsContentText {
              margin-top: 30px;
              padding-right: 20px;
              .dynamicsName {
                font-size: 18px;
                color: #040203;
              }
              .dynamicsText {
                font-size: 14px;
                line-height: 24px;
                color: #777;
                margin-bottom: 12px;
              }
              .dynamicsState {
                font-size: 14px;
                color: #a1a1a1;
                b {
                  font-weight: normal;
                }
                img {
                  margin-left: 15px;
                  margin-top: -2px;
                }
                .locationIcon {
                  height: 16px;
                  width: 12px;
                }
                .lookIcon {
                  height: 15px;
                  width: 24px;
                }
              }
            }
          }
        }
      }
    }
    // 联系我们
    .contactUsMain {
      margin-bottom: 100px;
      .contactUsContent {
        height: 532px;
        width: 100%;
        .contactBgLeft {
          float: left;
          height: 532px;
          width: 50%;
          position: relative;
          .contactBgLeftBg {
            position: absolute;
            width: 100%;
            height: 100%;
            background: #000;
            opacity: 0.66;
          }
          img {
            width: 100%;
            height: 100%;
            z-index: -1;
          }
        }
        .contactBgRight {
          float: left;
          height: 532px;
          width: 50%;
          background: #f6f6f6;
        }
        .row {
          width: 1200px;
          height: 532px;
          margin: 0 auto;
          position: relative;
          .rowLeft {
            position: absolute;
            color: #fff;
            padding-right: 64px;
            .contactName {
              margin-top: 88px;
              font-size: 26px;
              margin-bottom: 30px;
            }
            .contactText {
              font-size: 14px;
              line-height: 20px;
              margin-bottom: 8px;
            }
            .contactDetails {
              margin-top: 75px;
              color: #fff;
              text-align: center;
              p {
                left: 0;
                margin-left: 0;
                color: #fff;
                border-color: #fff;
                width: 110px;
                height: 30px;
                line-height: 30px;
                font-size: 14px;
                img {
                  width: 16px;
                  height: 12px;
                  margin-left: 6px;
                }
              }
            }
          }
          .rowRight {
            position: absolute;
            left: 665px;
            top: 155px;
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
}
</style>

