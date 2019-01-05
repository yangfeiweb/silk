<template>
  <div class="business">
    <headerNav></headerNav>
     <div class="main">
         <img class="businessBg" :src="imgUrl" alt="">
         <div class="content">
             <ul class="contentUl">
                 <li class="contentli" v-for="(item,index) in businessList" :key="index">
                     <div class="time">
                       <p class="day">{{item.time.substring(8)}}</p>
                       <p class="year">
                         {{item.time.substring(0,7)}}
                        </p>  
                     </div>
                     <div class="textContent">
                         <div class="textDiv">
                            <p class="title">
                                {{item.title}}
                            </p>
                            <p class="text"  @click="getbusinessDetails">
                                {{item.text.substring(0,90)+'......'}}
                            </p>

                         </div>
                         <img :src="item.imgUrl" alt="">
                     </div>
                 </li>
             </ul>
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
  data() {
    return {
      imgUrl: "../../static/images/business.png",
      businessList: [
        {
          time: "2018-06-12",
          title: "七彩蚕丝工厂引进新设备",
          text:
            "蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝,是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结,构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟,蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结,构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕,丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构.",
             imgUrl: "../../static/images/dynamics3.png",
        },
        {
          time: "2018-06-12",
          title: "七彩蚕丝工厂引进新设备",
          text:
           "蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝,是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结,构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟,蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结,构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕,丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构.",
             imgUrl: "../../static/images/dynamics3.png",
        },
        {
          time: "2018-06-12",
          title: "七彩蚕丝工厂引进新设备",
          text:
            "蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝,是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结,构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟,蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结,构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕,丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构蚕丝是熟蚕结构.",
              imgUrl: "../../static/images/dynamics3.png",
        }
      ]
    };
  },
  mounted() {},
  methods: {
      getbusinessDetails(){
          console.log('进入详情页')
          this.$router.push('/businessDetails')
      }
  }
};
</script>
<style lang="scss">
.business {
  .main {
    width: 100%;
    .businessBg {
      height: 320px;
      width: 100%;
      margin-bottom: 35px;
    }
    .content {
      width: 978px;
      height: 500px;
      margin: 0 auto;
      margin-bottom: 69px;
      border-left: 1px solid #e1e1e1;
      border-right: 1px solid #e1e1e1;
      padding: 0 100px;
      .contentUl {
        width: 778px;
        list-style: none;
        margin: 0;
        .contentli {
          height: 164px;
          display: flex;
          align-items: center;
          .time {
            color: #b4976b;
            font-size: 30px;
            float: left;
            height: 74px;
            border-right: 2px solid #e1e1e1;
            padding-top: 14px;
            margin-right: 20px;
            .day {
              line-height: 30px;
            }
            .year {
              font-size: 10px;
              padding-right: 18px;
            }
          }
          .textContent {
            float: left;
            width: 682px;
            display: flex;
            align-items: center;
            .textDiv{
                width:462px;
                float: left;
                .title {
                    color: #040203;
                    font-size: 16px;
                    margin-bottom: 11px;
                }
                .text{
                    font-size: 12px;
                    cursor: pointer;
                }
            }
            img{
                margin-left: 30px;
                height: 127px;
                width:190px;
                float: left;
            }
          }
        }
      }
    }
  }
}
</style>

