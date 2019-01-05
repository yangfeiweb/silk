<template>
  <div class="goodsList">
      <headerNav></headerNav>
      <div class="main">
          <div class="swiper-container mainSwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in carouselList" :key="index">
                    <img :src="item.imgUrl" alt="">
                    <div class="carText">
                        <p class="location carTitle">{{item.carTitle}}</p>
                        <p class="location carState">{{item.carState}}</p>
                        <p class="location carPrice"><b>￥</b>{{item.price}}</p>
                        <p class="location carBuy">立即购买<b class="icon_shopping"></b></p>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next swiper-button-white"></div>
            <div class="swiper-button-prev swiper-button-white"></div>
          </div>
          <div class="goodsListContent">
              <div class="goodsListHeader">
                  <b class="goodsTitle">全部商品</b>
                  <div class="goodsListHeaderRight">
                      <el-input class="search" v-model="searchVal"  suffix-icon="el-icon-search"  @change="search"  placeholder="请输入关键词"></el-input>
                         <i class="selectName">
                            产品分类
                        </i>
                        <el-select class="productCategory" v-model="productCategory" clearable placeholder="全部产品">
                            <el-option
                            v-for="item in productCategoryList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <i class="selectName">
                            排序
                        </i>
                        <el-select v-model="sort" class="sort" @change="sortVal" clearable placeholder="排序条件">
                            <el-option
                            v-for="item in sortList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                  </div>
              </div>
              <div class="goodsListShow">
                  <ul class="goodsListShowUl">
                      <li class="goodsListShowLi" @click="getProductDetails" v-for="(item,index) in productDetails" :key="index">
                          <div class="imgDiv">
                                <img class="productImg" :src="item.imgUrl" alt="">   
                                <div class="logoPosition">
                                    <img class="productLogo" src="../assets/images/logo1.png" alt=""><br/> 
                                    <b>
                                        七彩国丝
                                    </b>
                                </div>
                                <p class="productName">{{item.productName}}</p>
                                <p class="productPrice"> <b>￥</b>{{item.price}}</p>
                                <p class="cartBtn" @click="addCart">
                                    <img src="../assets/images/icon_cart.png" alt="">
                                    <b>
                                        加入购物车
                                    </b>
                                </p>
                          </div>
                      </li> 
                  </ul>
              </div>
                <el-pagination
                background
                layout="prev, pager, next"
                :total="totalNum">
                </el-pagination>
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
          imgUrl: "../../static/images/main1.png",
          carTitle: "丝滑欧式奢华高端蚕丝被",
          carState: "懂生活，就与生活和解",
          price: "6666"
        },
        {
          imgUrl: "../../static/images/main1.png",
          carTitle: "丝滑欧式奢华高端蚕丝被",
          carState: "懂生活，就与生活和解",
          price: "6666"
        },
        {
          imgUrl: "../../static/images/main1.png",
          carTitle: "丝滑欧式奢华高端蚕丝被",
          carState: "懂生活，就与生活和解",
          price: "6666"
        }
      ],
      //   关键词
      searchVal: "",
      sort:'',
      productCategory:"",
      sortList: [{
          value: '选项1',
          label: '价钱升序'
        }, {
          value: '选项2',
          label: '销量'
        }, {
          value: '选项3',
          label: '价钱降序'
        }, {
          value: '选项4',
          label: '好评率'
        }],
        productCategoryList:[
           {
          value: '选项1',
          label: '蚕丝被'
        }, {
          value: '选项2',
          label: '眼罩'
        }, {
          value: '选项3',
          label: '女士睡衣'
        }, {
          value: '选项4',
          label: '男士睡衣'
        } 
        ],
        productDetails:[
            {
                imgUrl:'../../static/images/1.png',
                productName:'精品蚕丝枕头三件套',
                price:'666',
            },
            {
                imgUrl:'../../static/images/2.png',
                productName:'精品蚕丝枕头三件套',
                price:'666',
            },
            {
                imgUrl:'../../static/images/3.png',
                productName:'精品蚕丝枕头三件套',
                price:'666',
            },
            {
                imgUrl:'../../static/images/4.png',
                productName:'精品蚕丝枕头三件套',
                price:'666',
            },
            {
                imgUrl:'../../static/images/5.png',
                productName:'精品蚕丝枕头三件套',
                price:'666',
            },
            {
                imgUrl:'../../static/images/6.png',
                productName:'精品蚕丝枕头三件套',
                price:'666',
            },
            {
                imgUrl:'../../static/images/7.png',
                productName:'精品蚕丝枕头三件套',
                price:'666',
            },
            {
                imgUrl:'../../static/images/8.png',
                productName:'精品蚕丝枕头三件套',
                price:'666',
            }, {
                imgUrl:'../../static/images/1.png',
                productName:'精品蚕丝枕头三件套',
                price:'666',
            },
            {
                imgUrl:'../../static/images/2.png',
                productName:'精品蚕丝枕头三件套',
                price:'666',
            },
            {
                imgUrl:'../../static/images/3.png',
                productName:'精品蚕丝枕头三件套',
                price:'666',
            },
            {
                imgUrl:'../../static/images/4.png',
                productName:'精品蚕丝枕头三件套',
                price:'666',
            },
            {
                imgUrl:'../../static/images/5.png',
                productName:'精品蚕丝枕头三件套',
                price:'666',
            },
            {
                imgUrl:'../../static/images/6.png',
                productName:'精品蚕丝枕头三件套',
                price:'666',
            },
            {
                imgUrl:'../../static/images/7.png',
                productName:'精品蚕丝枕头三件套',
                price:'666',
            },
            {
                imgUrl:'../../static/images/8.png',
                productName:'精品蚕丝枕头三件套',
                price:'666',
            }
        ],
        totalNum:100,
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
  },
  methods: {
    search() {
      console.log("输入关键词");
      console.log(this.searchVal);
    },
    sortVal(){
        console.log('排序')
        console.log('当前值',this.sort)
    },
    goTop(){
         $('body,html').animate({ scrollTop: 0 }, 1000);
    },
    getProductDetails(){
        this.$router.push('/goodsDetails')
    },
    addCart(){
        console.log('加入购物车')
    }
  }
};
</script>
<style lang="scss">
.goodsList {
    position: relative;
    .goTop{
        position: fixed;
        right: 20px;
        bottom: 150px;
        cursor: pointer;
    }
  .main {
    margin-top: 90px;
    margin-bottom: 108px;
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
              font-size: 44px;
              top: 96px;
            }
            .carState {
              top: 164px;
              font-size: 32px;
              color: #77777a;
            }
            .carPrice {
              top: 253px;
              font-size: 34px;
              color: #040203;
              text-align: left;
              b {
                font-size: 18px;
                font-weight: normal;
              }
            }
            .carBuy {
              top: 300px;
              font-size: 24px;
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
    .goodsListContent {
      width: 1225px;
      margin: 0 auto;
      margin-top: 100px;
      .goodsListHeader {
        .goodsTitle {
          color: #373636;
          font-size: 24px;
          font-weight: normal;
        }
        .goodsListHeaderRight {
          float: right;
          .el-input__inner{
              color: #ccc;
              border:1px solid #ddd;
              height: 35px;
              line-height: 35px;
          }
          .selectName{
              color: #333;
              font-size: 16px;
              font-style: normal;
              margin-right: 10px;
          }
          .el-input{
              width: auto;
          }
          .search{
              margin-right: 30px;
              .el-input__inner{
                border-radius:18px; 
                width:320px;
              }
              .el-input__suffix{
                  top:-3px;
                  right: 20px;
                  color: #7A7A7A;
              }
          }
          .productCategory{
              .el-input--suffix {
                  padding-right: 5px;
                .el-input__inner{
                    color: #666;
                    height: 28px;
                    width: 147px;
                    line-height: 28px;
                }
              }
          }
          .sort{
               .el-input--suffix {
                  padding-right: 5px;
                .el-input__inner{
                    color: #666;
                    height: 28px;
                    width: 147px;
                    line-height: 28px;
                }
              }
          }
          .el-select .el-input.is-focus .el-input__inner{
              border-color: #ddd; 
          }
          .el-select .el-input__inner:focus{
              border-color: #ddd;
          }
          .productCategory{
              margin-right: 30px;
          }
        }
      }
      .goodsListShow{
          margin-top:70px;
          overflow: hidden;
          .goodsListShowUl{
              list-style: none;
              .goodsListShowLi{
                  list-style:none;
                  float: left;
                  margin-right: 25px;
                  margin-bottom: 20px;
                  .imgDiv:hover{
                      box-shadow: 0px 0px 21px rgba(117,115,115,0.35);
                  }
                  .imgDiv{
                      position: relative;
                      width:281px;
                      height: 418px;
                      cursor: pointer;
                      .productImg{
                          width: 281px;
                          height: 260px;

                      }
                      .logoPosition{
                          position: absolute;
                          top:18px;
                          left:25px;
                            .productLogo{
                                height:19px;
                                width:68px;
                            }
                            b{
                                color: #000;
                                font-size: 12px;
                                font-weight: normal;
                            }
                      }
                      p{
                          text-align: center;
                          width:281px;
                      }
                      .productName{
                          font-size: 14px;
                          color: #333;
                          margin-top:18px;

                      }
                      .productPrice{
                          font-size: 14px;
                          color: #333;
                          margin-bottom: 15px;
                          b{
                              font-size: 12px;
                              font-weight: normal;
                          }
                      }
                      .cartBtn{
                          height: 35px;
                          width:190px;
                          background: #333;
                          line-height: 35px;
                          text-align: center;
                          margin-left: 45.5px;
                          cursor: pointer;
                          img{
                              height: 16px;
                              width: 18px;
                          }
                          b{
                              color: #fff;
                              font-weight: normal;
                              font-size: 12px;
                          }
                      }
                  }
              }
          }
      }
        .el-pagination{
            text-align: center;
        }
        .el-pagination.is-background .el-pager li:not(.disabled).active{
            background-color: #bca070;
            color:#fff;
        }
        .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
            width:30px;
            height: 30px;
            border: 1px solid #DDD;
            font-size: 14px;
        }
        .el-pagination.is-background .el-pager li:not(.disabled):hover{
            color: #757373;
        }
        .el-pagination.is-background .el-pager li.active:hover{
            color: #fff;
        }
    }
  }
}
</style>

