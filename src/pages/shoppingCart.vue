<template>
  <div class="shoppingCart">
      <headerNav></headerNav>
      <div class="main">
          <p class="
          prodcutNum">
          <b>
            全部商品 <i>{{productNum}}</i>
          </b>
          </p>
          <div class="cartDetails">
              <div class="tableHeader">
                <p class="el-checkbox" @click="checkAll"><input :checked='checkedAll' type="checkbox" name="productCheckAll"><label for="productCheckAll"></label> <span>全选</span></p>
                <b class="productInfo">商品信息</b>
                <b class="productPrice">单价</b>
                <b class="productNum">数量</b>
                <b class="productSub">小计</b>
                <b class="productHandle">操作</b>
              </div>
              <ul class="cartDetailsUl">
                  <li class="cartDetailsLi" v-for="(item,index) in cartDataList" :key="index">
                    <p class="tableTitle">{{item.title}}</p>
                    <el-table
                            ref="multipleTable"
                            :data="item.details"
                            tooltip-effect="dark"
                            :show-header='false'
                            style="width: 100%">
                            <el-table-column
                            width="30">
                            <template slot-scope="scope" >
                                <p class="el-checkbox" >
                                    <input type="checkbox" 
                                    @click="checkboxOnclick" name="productCheckbox" class="productCheckbox" :id="'product'+scope.row.id" :value="scope.row.id" v-model="checkAllArr" :data-a='scope.row.id'>
                                    <label :for="'productCheckbox'+scope.row.id"></label>
                                </p>
                            </template>
                            </el-table-column>
                            <el-table-column
                            width='110'
                            label='全选'
                            >
                            <template slot-scope="scope">
                                <img :src="scope.row.imgUrl" alt=''>
                            </template>
                            </el-table-column>
                            <el-table-column
                            label="商品信息"
                            width="500">
                            <template slot-scope="scope">
                                <b class="name"> {{ scope.row.name }}</b>
                                <div class="specification">
                                    <p class="color">
                                        颜色分类&nbsp;&nbsp;&nbsp;{{ scope.row.color }}
                                    </p>
                                    <p class="color">
                                        尺码:&nbsp; {{ scope.row.size }}
                                    </p>
                                </div>
                            </template>
                            </el-table-column>
                            <el-table-column
                            prop="price"
                            label="单价"
                            width="125">
                            </el-table-column>
                            <el-table-column
                            prop="num"
                            label="数量"
                            width="125"
                            show-overflow-tooltip>
                            <template slot-scope="scope">
                                <el-input-number size="mini" v-model="scope.row.num"></el-input-number>
                            </template>
                            </el-table-column>
                            <el-table-column
                            prop="subtotal"
                            label="小计"
                            width="163">
                               <template slot-scope="scope">
                                    {{parseFloat(scope.row.num)*scope.row.price}}
                                 </template>
                            </el-table-column>
                            <el-table-column
                            prop="address"
                            label="操作"
                            show-overflow-tooltip>
                                <template slot-scope="scope">
                                    <el-button @click="deleteRow(scope.row)" type="text" size="small">删除</el-button>
                                    <br>
                                    <el-button @click="addCollect(scope.row)" type="text" size="small">移入我的收藏夹</el-button>
                                </template>
                            </el-table-column>
                    </el-table>
                  </li>
              </ul>
          </div>
      </div>
      <Footer></Footer>
      <img class="goTop" @click="goTop" src="../assets/images/icon_top.png" alt="">
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
      productNum: 0,
      backgroundColor: "#000000",
      checkedAll: false,
      isIndeterminate: true,
      cartDataList: [
        {
          title: "蚕丝被",
          details: [
            {
              id: 1,
              imgUrl: "../../static/images/1.png",
              name: "精品蚕丝枕巾三件套",
              color: "紫色",
              size: "68cm*80cm",
              subtotal: "366.00",
              num: 3,
              price: "366.00"
            },
            {
              id: 2,
              imgUrl: "../../static/images/1.png",
              name: "精品蚕丝枕巾三件套",
              color: "紫色",
              size: "68cm*80cm",
              subtotal: "366.00",
              num: 3,
              price: "366.00"
            },
            {
              id: 3,
              imgUrl: "../../static/images/1.png",
              name: "精品蚕丝枕巾三件套",
              color: "紫色",
              size: "68cm*80cm",
              subtotal: "366.00",
              num: 3,
              price: "366.00"
            },
            {
              id: 4,
              imgUrl: "../../static/images/1.png",
              name: "精品蚕丝枕巾三件套",
              color: "紫色",
              size: "68cm*80cm",
              subtotal: "366.00",
              num: 3,
              price: "366.00"
            },
            {
              id: 5,
              imgUrl: "../../static/images/1.png",
              name: "精品蚕丝枕巾三件套",
              color: "紫色",
              size: "68cm*80cm",
              subtotal: "366.00",
              num: 3,
              price: "366.00"
            },
            {
              id: 6,
              imgUrl: "../../static/images/1.png",
              name: "精品蚕丝枕巾三件套",
              color: "紫色",
              size: "68cm*80cm",
              subtotal: "366.00",
              num: 3,
              price: "366.00"
            }
          ]
        },
        {
          title: "睡衣",
          details: [
            {
              id: 7,
              imgUrl: "../../static/images/1.png",
              name: "精品蚕丝枕巾三件套",
              color: "紫色",
              size: "68cm*80cm",
              subtotal: "366.00",
              num: 3,
              price: "366.00"
            },
            {
              id: 8,
              imgUrl: "../../static/images/1.png",
              name: "精品蚕丝枕巾三件套",
              color: "紫色",
              size: "68cm*80cm",
              subtotal: "366.00",
              num: 3,
              price: "366.00"
            },
            {
              id: 9,
              imgUrl: "../../static/images/1.png",
              name: "精品蚕丝枕巾三件套",
              color: "紫色",
              size: "68cm*80cm",
              subtotal: "366.00",
              num: 3,
              price: "366.00"
            },
            {
              id: 10,
              imgUrl: "../../static/images/1.png",
              name: "精品蚕丝枕巾三件套",
              color: "紫色",
              size: "68cm*80cm",
              subtotal: "366.00",
              num: 3,
              price: "366.00"
            },
            {
              id: 11,
              imgUrl: "../../static/images/1.png",
              name: "精品蚕丝枕巾三件套",
              color: "紫色",
              size: "68cm*80cm",
              subtotal: "366.00",
              num: 3,
              price: "366.00"
            },
            {
              id: 12,
              imgUrl: "../../static/images/1.png",
              name: "精品蚕丝枕巾三件套",
              color: "紫色",
              size: "68cm*80cm",
              subtotal: "366.00",
              num: 3,
              price: "366.00"
            }
          ]
        }
      ],
      checkAllArr: [],
      checkAllArrLength: null
    };
  },
  mounted() {
    let Arr = [];
    let h = this.cartDataList.length;
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < this.cartDataList[i].details.length; j++) {
        Arr.push(this.cartDataList[i].details[j].id);
      }
    }
    this.checkAllArrLength = Arr.length;
    console.log(this.checkAllArrLength);
  },
  methods: {
    deleteRow(row) {
      console.log(row);
    },
    addCollect(row) {
      console.log(row);
    },
    goTop() {
      $("body,html").animate({ scrollTop: 0 }, 1000);
    },
    checkAll() {
      console.log("点击全选");
      this.checkedAll = !this.checkedAll;
      let h = this.cartDataList.length;
      console.log(this.cartDataList.length);
      if (this.checkedAll === false) {
        this.checkAllArr = [];
      } else {
        this.checkAllArr = [];
        for (let i = 0; i < h; i++) {
          console.log(this.cartDataList[i]);
          for (let j = 0; j < this.cartDataList[i].details.length; j++) {
            console.log(this.cartDataList[i].details[j]);
            this.checkAllArr.push(this.cartDataList[i].details[j].id);
          }
        }
      }
      console.log(this.checkAllArr);
    },
    checkboxOnclick(e) {
      console.log("点击选择");
      let z = e.target.getAttribute("data-a");
      z = parseFloat(z);
      console.log(z);
      let h = this.checkAllArr.length;
      let a = null;
      if (h > 0) {
        for (let i = 0; i < h; i++) {
          if (this.checkAllArr[i] === z) {
            a = i;
            console.log("重复index", a);
          }
        }
        if (a === null) {
          this.checkAllArr.push(z);
          debugger;
        } else {
          this.checkAllArr.splice(a, 1);
          console.log(this.checkAllArr);
          debugger;
        }
      } else {
        this.checkAllArr.push(z);
      }
      console.log(this.checkAllArr);
      if (this.checkAllArrLength === this.checkAllArr.length) {
        this.checkedAll = true;
      } else {
        this.checkedAll = false;
      }
    }
  }
};
</script>
<style lang="scss">
.shoppingCart {
  .goTop {
    position: fixed;
    right: 20px;
    bottom: 150px;
    cursor: pointer;
  }
  .main {
    width: 1200px;
    margin: 0 auto;
    margin-top: 130px;
    margin-bottom: 100px;
    .el-checkbox {
      input {
        position: absolute;
        top: 0;
        left: 0px;
        width: 13px;
        height: 13px;
        opacity: 0;
        z-index: 200;
      }
      label::before {
        content: "";
        position: absolute;
        left: 0px;
        top: 0;
        width: 13px;
        height: 13px;
        border: 1px solid #333;
        cursor: pointer;
      }
      label::after {
        cursor: pointer;
        content: "";
        position: absolute;
        left: 3px;
        top: -2px;
        width: 7px;
        height: 12px;
        border: 0;
        border-right: 1px solid transparent;
        border-bottom: 1px solid transparent;
        background: transparent;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
      }
      input[type="checkbox"]:checked + label::before {
        background: transparent;
        border-color: #333;
      }
      input[type="checkbox"]:checked + label::after {
        background: transparent;
        border-right: 1px solid #333;
        border-bottom: 1px solid #333;
      }
      input[type="checkbox"]:checked ~ .imgDiv {
        background: #f5f5f5;
      }
    }
    .prodcutNum {
      color: #b4976b;
      font-size: 18px;
      border-bottom: 2px solid #ccc;
      position: relative;
      height: 40px;
      b {
        position: absolute;
        top: 0px;
        left: 0px;
        display: inline-block;
        padding-left: 13px;
        font-weight: normal;
        border-bottom: 2px solid #b4976b;
        padding-bottom: 13px;
        i {
          font-style: normal;
          padding-left: 10px;
        }
      }
    }
    .cartDetails {
      font-size: 12px;
      .tableHeader {
        padding-left: 13px;
        height: 55px;
        padding-top: 20px;
        .el-checkbox {
          width: 135px;
        }
        p {
          padding-left: 15px;
          line-height: 13px;
        }
        input[type="checkbox"],
        input[type="radio"] {
          margin: 0;
          margin-top: -2px;
        }
        b {
          display: inline-block;
          font-weight: normal;
          font-size: 12px;
          color: #333;
        }
        .productInfo {
          width: 495px;
        }
        .productPrice {
          width: 120px;
        }
        .productNum {
          width: 120px;
        }
        .productSub {
          width: 163px;
        }
        .productHandle {
        }
      }
      .cartDetailsUl {
        .cartDetailsLi {
          .tableTitle {
            height: 36px;
            width: 100%;
            line-height: 36px;
            background-color: #dfdfdf;
            padding-left: 13px;
          }
        }
      }
      .el-checkbox__input.is-checked .el-checkbox__inner,
      .el-checkbox__input.is-indeterminate .el-checkbox__inner {
        //   background: #fff;
        border-color: #dcdfe6;
      }
      .el-table thead {
        color: #333;
      }
      .el-table__row {
        td:nth-child(3) {
          .color {
            color: #8a8a8a;
          }
        }
        td:nth-child(6) {
          color: #b4976b;
        }
        td:nth-child(7) {
          .el-button--text {
            color: #333;
          }
        }
      }
      .el-checkbox__inner {
        height: 13px;
        width: 13px;
      }
      .el-table--enable-row-hover .el-table__body tr:hover > td {
        background-color: #f5f5f5;
      }
      img {
        height: 83px;
        width: 90px;
      }
      .name {
        color: #333;
        margin-right: 60px;
        width: 195px;
        display: inline-block;
        vertical-align: top;
      }
      .specification {
        display: inline-block;
      }
      .el-input-number--mini {
        width: 77px;
        .el-input-number__decrease,
        .el-input-number__increase {
          width: 15px;
          background: transparent;
        }
        .el-input-number__decrease {
          border-right: none;
        }
        .el-input__inner {
          border: none;
          padding: 0;
          width: 39px;
          margin-left: 18px;
          border: 1px solid #b8b7bd;
          border-radius: 0px;
        }
        .el-input-number__increase {
          border-left: none;
        }
        .el-input-number__decrease:hover:not(.is-disabled)
          ~ .el-input
          .el-input__inner:not(.is-disabled),
        .el-input-number__increase:hover:not(.is-disabled)
          ~ .el-input
          .el-input__inner:not(.is-disabled) {
          border-color: #b8b7bd;
        }

        .el-input-number__decrease:hover,
        .el-input-number__increase:hover {
          color: #333;
        }
      }
    }
  }
}
</style>

