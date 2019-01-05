<template>
  <div class="goodsDetails">
    <headerNav></headerNav>
    <el-dialog
        title=""
        :before-close="handleClose"
        :visible.sync="addCartDialog"
        width="426px"
        top='364px'
        center>
        <p class="cartText"><img src="../assets/images/cartOk.png" alt=""> <b class="cartTextB">成功加入购物车</b></p>
        <p class="cartBtn"  @click="settle">
                去购物车结算
        </p>
    </el-dialog>
    <div class="main">
        <div class="imgDetails">
            <div class="imgDetailsLeft">
                <img class="bigImg" :src="bigImgUrl" alt="">
                <ul>
                    <li class="smallImg"  v-for="(item,index) in detailsData.smallImg" :key="index" @click="getBigImg">
                        <img :src="item" :class="index==0?'small active':'small'"  alt=""  :data-i='index'>
                    </li>
                </ul>
            </div>
            <div class="imgDetailsRight">
                <p class="productName">{{detailsData.productName}}</p>
                <p class="price">
                    <b class="priceB"> <i>￥</i>{{detailsData.price}}</b>
                    <b class="sales">
                        <i>月销量</i>{{detailsData.sales}}
                    </b>
                </p>
                <p class="colorClass">
                    <i>颜色分类</i>
                    <ul>
                        <li v-for="(item,index) in detailsData.colorClass" :key="index" :class="index === 0?'colorName active':'colorName'" @click="getcolor" :data-i='index'>{{item}}</li>
                    </ul>
                </p>
                <p class="sizeClass">
                    <i>尺寸</i>
                    <ul>
                        <li v-for="(item,index) in detailsData.sizeClass"  :key="index" :class="index === 0?'sizeName active':'sizeName'" @click="getSize" :data-i='index'>{{item}}</li>
                    </ul>
                </p>
                <p class="selectNum">
                    <i class="selectNumi">数量</i>
                    <el-input-number @change="numChange" :min="1" :max="repertory"  size="mini" v-model="num"></el-input-number>
                </p>
                <p class="cartBtn" @click="addCart">
                    <img src="../assets/images/icon_cart.png" alt="">
                    <b>
                        加入购物车
                    </b>
                </p>
            </div>
        </div>
        <div class="productDetails">
            <p class="title">
                商品详情
            </p>
            <div class="introduce">
                <p class="brandName">
                    <b class="color6">
                        品牌名称:
                    </b>
                    <b class="color0">
                        GUOSl
                    </b>
                    <b class="color6">
                        /七彩国丝
                    </b>
                </p>
                <p class="parameter">
                    产品参数
                </p>
                <ul class="parameterUl">
                   <li class="parameterLi">
                       产品等级：{{parameter.grade}}
                    </li> 
                    <li class="parameterLi">
                       制造工艺：{{parameter.craft}}
                    </li>
                    <li class="parameterLi">
                       功能：{{parameter.funct}}
                    </li>
                    <li class="parameterLi">
                       品牌：{{parameter.brand}}
                    </li>
                    <li class="parameterLi">
                       填充物净重(不含布套)：{{parameter.grade}}
                    </li>
                    <li class="parameterLi">
                       尺寸：{{parameter.size}}
                    </li>
                    <li class="parameterLi">
                       蚕丝种类：{{parameter.kind}}
                    </li>
                    <li class="parameterLi">
                       被套面料：{{parameter.lining}}
                    </li>
                    <li class="parameterLi">
                       蚕丝长度：{{parameter.length}}
                    </li>
                    <li class="parameterLi">
                       被子种类：{{parameter.quiltKind}}
                    </li>
                    <li class="parameterLi">
                       颜色分类：{{parameter.colorClass}}
                    </li>
                    <li class="parameterLi">
                       适用季节：{{parameter.season}}
                    </li>
                </ul>
            </div>
            <div class="showDetails">
                <img class="showDetailsLogo" src="../assets/images/logo.png" alt="">
                <p class="showDetailsTitle">
                    {{showDetailsData.showDetailsTitle}}
                </p>
                <p class="showDetailsTitleEng">
                    {{showDetailsData.showDetailsTitleEng}}
                </p>
                <img class="detailsImg1" :src="showDetailsData.showDetailsImgArrr[0]" alt=""><img class="detailsImg2" :src="showDetailsData.showDetailsImgArrr[1]" alt="">
                <p class="showDetailsTitle">
                    {{showDetailsData.showDetailsText}}
                </p>
                <p class="showDetailsTitleEng">
                    {{showDetailsData.showDetailsTextEng}}
                </p>
                <p class="text">
                    {{showDetailsData.text1}}
                </p>
                <p class="text">
                    {{showDetailsData.text2}}
                </p>
                <p class="text textmargin">
                    {{showDetailsData.text3}}
                </p>
                 <img class="detailsImg3" :src="showDetailsData.showDetailsImgArrr[2]" alt="">
                 <img class="showDetailsLogo2" src="../assets/images/logo.png" alt="">
                  <p class="showDetailsTitle">
                    {{showDetailsData.showDetailsTitle}}
                </p>
                <p class="showDetailsTitleEng">
                    {{showDetailsData.showDetailsTitleEng}}
                </p>
                <img class="detailsImg4"  :src="showDetailsData.showDetailsImgArrr[3]" alt=""><img class="detailsImg5"  :src="showDetailsData.showDetailsImgArrr[4]" alt="">
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
      cartData: {
        color: "",
        size: "",
        num: 1
      },
      detailsData: {
        bigImg: [
          "../../static/images/detailsShow1.png",
          "../../static/images/detailsShow3.png",
          "../../static/images/detailsShow4.png",
          "../../static/images/detailsShow5.png",
          "../../static/images/detailsShow6.png"
        ],
        smallImg: [
          "../../static/images/detailsShow2.png",
          "../../static/images/detailsShow3.png",
          "../../static/images/detailsShow4.png",
          "../../static/images/detailsShow5.png",
          "../../static/images/detailsShow6.png"
        ],
        productName: "七彩国丝 纯色美式蚕丝全套家被子加厚保暖单双人被子被芯",
        price: "3999.00",
        colorClass: ["蚕丝被春夏款", "蚕丝被秋冬款"],
        sizeClass: ["150*210cm", "180*210cm", "200*210cm"],
        sales: "100"
      },
      bigImgUrl: "",
      num: 1,
      repertory: 100,
      parameter: {
        grade: "合格品",
        craft: "其他",
        funct: "蓄热保暖",
        brand: "GUOSI/七彩国丝",
        fill: "0.5kg",
        size: "150X210cm 200X230cm 220X240cm",
        kind: "柞蚕丝",
        lining: "其他",
        length: "中长丝绵",
        quiltKind: "蚕丝被",
        colorClass: "玫瑰金 香槟金 白色",
        season: "空调被/夏凉被"
      },
      showDetailsData: {
        showDetailsTitle: "柞蚕丝蚕丝夏凉被",
        showDetailsTitleEng: "TUSSAH SILK SILK SUMMER COOL QUILT",
        showDetailsImgArrr: [
          "../../static/images/details1.png",
          "../../static/images/details2.png",
          "../../static/images/details3.png",
          "../../static/images/details4.png",
          "../../static/images/details5.png"
        ],
        showDetailsText: "魅力轻奢家",
        showDetailsTextEng: "CHARM LIGHT LUXURY HOM",
        text1: "选用柞蚕丝提花面料，清爽帖肤，柔软舒适，丝滑触感",
        text2: "精选优质柞蚕丝，轻柔贴身、防风透气、除湿安神、防螨止痒",
        text3: "身体和灵魂，总要有一个在路上破茧重生 方显华贵",
        text4: "细节不止于此",
        text4Eng: "THE DETAILS GO BEYOND THAT"
      },
      addCartDialog: false,
      colorClassName: "colorName",
      colorClassNameActive: "colorName active"
    };
  },
  mounted() {
    this.bigImgUrl = this.detailsData.bigImg[0];
    // dataService.article().then(
    //   res => {
    //     console.log("res", res);
    //     let result = res.body.code;
    //     this.cartData.color = result.color;
    //     this.cartData.size = result.size;
    //     this.cartData.num = 1;
    //   },
    //   err => {}
    // );
  },
  methods: {
    //   购买数量的变化
    numChange() {
      console.log(this.num);
      this.cartData.num = this.num;
    },
    // 添加购物车
    addCart() {
    //   dataService.addCart().then(
    //     res => {
    //       console.log("res", res);
    //       let result = res.body.code;
    //       this.cartData.color = result.color;
    //       this.cartData.size = result.size;
    //       this.cartData.num = 1;
    //     },
    //     err => {}
    //   );
      this.addCartDialog = true;
    },
    // 点击购物弹框关闭
    handleClose() {
      console.log("关闭弹框");
      this.addCartDialog = false;
    },
    // 点击去购物车结算
    settle() {
      console.log("结算");
      this.$router.push("/shoppingCart");
    },
    //用户选择颜色分类
    getcolor(e) {
      let i = e.target.getAttribute("data-i");
      $(".colorName").removeClass("active");
      $(".colorName")
        .eq(i)
        .addClass("active");
      this.cartData.color = this.detailsData.colorClass[i];
    },
    // 用户选择大小分类
    getSize(e) {
      let i = e.target.getAttribute("data-i");
      $(".sizeName").removeClass("active");
      $(".sizeName")
        .eq(i)
        .addClass("active");
      this.cartData.color = this.detailsData.sizeClass[i];
    },
    // 点击小图片更改大图片
    getBigImg(e) {
      let i = e.target.getAttribute("data-i");
      console.log(i);
      console.log(this.detailsData.bigImg[i]);
      this.bigImgUrl = this.detailsData.bigImg[i];
      $(".small").removeClass("active");
      $(".small")
        .eq(i)
        .addClass("active");
    }
  }
};
</script>
<style lang="scss">
.goodsDetails {
  .cartBtn {
    width: 180px;
    height: 40px;
    margin-left: 150.5px;
    background: #333;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    img {
      height: 16px;
      width: 18px;
      margin-top: -3px;
    }
    b {
      color: #fff;
      font-weight: normal;
      font-size: 14px;
    }
  }
  .el-dialog--center {
    height: 250px;
    .el-dialog__header {
      .el-dialog__headerbtn {
        font-size: 24px;
        top: 10px;
        right: 13px;
        color: #333;
      }
      .el-dialog__headerbtn:focus .el-dialog__close,
      .el-dialog__headerbtn:hover .el-dialog__close {
        color: #333;
      }
    }
    .el-dialog__body {
      padding-top: 30px;
      padding-left: 80px;
      .cartBtn {
        margin-left: 45px;
        color: #fff;
      }
      .cartText {
        height: 50px;
        line-height: 50px;
        margin-bottom: 40px;
        img {
          width: 50px;
          height: 50px;
          margin-right: 13px;
          margin-top: -8px;
        }
        .cartTextB {
          color: #333;
          font-size: 24px;
          font-weight: normal;
        }
      }
    }
  }
  .main {
    width: 1056px;
    margin: 0 auto;
    margin-top: 130px;
    margin-bottom: 100px;
    .imgDetails {
      overflow: hidden;
      margin-bottom: 70px;
    }
    .imgDetailsLeft {
      overflow: hidden;
      float: left;
      .bigImg {
        width: 515px;
        height: 486px;
        display: block;
      }
      ul {
        list-style: none;
        margin-left: 33px;
        margin-top: 25px;
        li {
          float: left;
          list-style: none;
          width: 74px;
          height: 69px;
          margin-right: 20px;
          img {
            width: 100%;
            height: 100%;
            cursor: pointer;
          }
          img.active {
            border: 1px solid #000;
          }
        }
      }
    }
    .imgDetailsRight {
      display: inline-block;
      margin-top: 55px;
      margin-left: 60px;
      width: 481px;
      .productName {
        color: #040203;
        font-size: 18px;
        margin-bottom: 25px;
      }
      i {
        font-size: 12px;
        font-style: normal;
        color: #8a8a8a;
      }
      .price {
        line-height: 30px;
        margin-bottom: 45px;
        b {
          font-weight: normal;
        }
        .priceB {
          color: #000;
          font-size: 21px;
          i {
            font-style: normal;
            font-size: 14px;
          }
        }
        .sales {
          font-size: 12px;
          float: right;
          color: #000;
          i {
            margin-right: 30px;
          }
        }
      }
      .colorClass {
        display: flex;
        align-items: center;
        margin-bottom: 35px;
        i {
          margin-right: 30px;
          display: inline-block;
          padding-bottom: 7px;
        }
        ul {
          display: inline-block;
          margin: 0;
          .colorName {
            float: left;
            margin-right: 25px;
            font-size: 12px;
            padding-bottom: 7px;
            cursor: pointer;
            color: #8a8a8a;
          }
          li.active {
            border-bottom: 1px solid #000;
            color: #000;
          }
        }
      }
      .sizeClass {
        display: flex;
        align-items: center;
        margin-bottom: 35px;
        i {
          margin-right: 50px;
          display: inline-block;
          padding-bottom: 7px;
        }
        ul {
          display: inline-block;
          margin: 0;
          .sizeName {
            float: left;
            margin-right: 25px;
            font-size: 12px;
            padding-bottom: 7px;
            cursor: pointer;
          }
          li.active {
            border-bottom: 1px solid #000;
            color: #000;
          }
        }
      }
      .selectNum {
        margin-bottom: 65px;
        .selectNumi {
          margin-right: 50px;
        }
        .el-input-number {
          width: 80px;
          .el-input__inner {
            border: none;
          }
          .el-input-number__decrease {
            border-right: none;
            border: 1px solid #8a8a8a;
            border-radius: 0;
          }
          .el-input-number__decrease.is-disabled,
          .el-input-number__increase.is-disabled {
            color: #8a8a8a;
            width: 18px;
            height: 14px;
            line-height: 14px;
          }
          .el-input-number__decrease,
          .el-input-number__increase {
            background: #fff;
            margin-top: 7px;
          }
          .el-input-number__increase {
            border-left: none;
            border: 1px solid #8a8a8a;
            border-radius: 0;
          }
          .el-input-number__decrease,
          .el-input-number__increase {
            height: 14px;
            line-height: 14px;
            width: 18px;
          }
        }
      }
    }
    .productDetails {
      border: 1px solid #dfdfdf;
      .title {
        border-bottom: 1px solid #dfdfdf;
        height: 50px;
        line-height: 50px;
        font-size: 12px;
        color: #000;
        text-align: center;
      }
      .introduce {
        border-bottom: 1px solid #dfdfdf;
        color: #666;
        font-size: 14px;
        padding-left: 28px;
        padding-top: 25px;
        .brandName {
          margin-bottom: 30px;
          b {
            font-weight: normal;
          }
          .color0 {
            color: #000;
          }
        }
        .parameter {
          font-weight: bold;
          color: #999;
          margin-bottom: 20px;
        }
        .parameterUl {
          overflow: hidden;
          margin-bottom: 7px;
          .parameterLi {
            float: left;
            width: 300px;
            color: #666;
            font-size: 14px;
            margin-bottom: 15px;
          }
        }
      }
      .showDetails {
        margin-top: 50px;
        text-align: center;
        .showDetailsLogo {
          width: 131px;
          height: 36px;
          margin-bottom: 23px;
        }
        .showDetailsTitle {
          font-size: 30px;
          color: #888;
          margin-bottom: 15px;
        }
        .showDetailsTitleEng {
          font-size: 14px;
          color: #888;
          margin-bottom: 25px;
        }
        img {
          width: 993px;
        }
        .detailsImg1,
        .detailsImg3 {
          height: 833px;
        }
        .detailsImg2 {
          height: 834px;
          margin-bottom: 45px;
        }
        .text {
          color: #888;
          font-size: 20px;
          line-height: 36px;
        }
        .textmargin {
          margin-bottom: 45px;
        }
        .detailsImg3 {
          margin-bottom: 50px;
        }
        .showDetailsLogo2 {
          height: 35px;
          width: 130px;
          margin-bottom: 25px;
        }
        .detailsImg4 {
          height: 2772px;
        }
        .detailsImg5 {
          height: 921px;
        }
      }
    }
  }
}
</style>

