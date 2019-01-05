<template>
  <div class="orderDetails">
       <headerNav></headerNav>
        <el-dialog
            title=""
            :before-close="modificationSiteClose"
            :visible.sync="modificationSiteDialog"
            width="775px"
            top='250px'
            class="modificationSiteDialog"
            center>
            <div class="modificationSiteDialogDiv">
                <p class="site">
                    <b class="lf">
                        确认收货地址
                    </b>
                    <b class="lr" @click="editSite">
                        新增收货地址
                    </b>
                </p>
                <ul class="siteUl">
                    <li class="siteLi" v-for="(item,index) in siteDataList" :key='index'>
                        <div class="siteText">
                            <p class="nameTel">
                                <b class="name">
                                    {{item.name}}
                                </b>
                                <b class="tel">
                                     {{item.tel}}
                                </b>
                            </p>
                            <p class="siteRegionP">
                                <b class="siteRegion">
                                    {{item.sheng}}
                                </b>
                                <b class="siteRegion">
                                    {{item.qu}}
                                </b>
                                <b class="siteRegion">
                                    {{item.detailsSite}}
                                </b>
                            </p>
                        </div>
                        <div class="siteBtn">
                            <el-button @click="getDefaultSite" :class="item.active===true?'defaultSiteClass active':'defaultSiteClass'" :data-a='index'>
                                {{item.active===true? '默认地址':'设置为默认'}}
                            </el-button>
                            <el-button @click="editSite" :data-a='index' class="editSite active">编辑</el-button>
                        </div>
                    </li>
                </ul>
                <el-pagination
                background
                layout="prev, pager, next"
                :total="totalPageNum">
                </el-pagination>
            </div>
        </el-dialog>
        <el-dialog
            title=""
            :before-close="compileClose"
            :visible.sync="compileDialog"
            width="504px"
            top='306px'
            class="compileDialog"
            center>
            <div class="compileDiv">
                <p class="site">
                    <b class="lf">
                        收货人信息
                    </b>
                </p>
                <el-form label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="78px" class="demo-ruleForm">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="电话" prop="tel">
                        <el-input v-model="ruleForm.tel"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="所在地区" prop="region" class="region">
                        <el-select v-model="ruleForm.prov" placeholder="请选择省">
                            <el-option
                            v-for="item in optionProv"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="ruleForm.city" placeholder="请选择市">
                            <el-option
                            v-for="item in optionCity"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select class="county" v-model="ruleForm.county" placeholder="请选择县">
                            <el-option
                            v-for="item in optionCounty"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item> -->
                    <el-form-item label="所在地区" prop="region">
                        <el-cascader
                        :options="options"
                        change-on-select
                        ></el-cascader>
                    </el-form-item>
                    <el-form-item label="详细地址" prop="siteDetails">
                        <el-input v-model="ruleForm.siteDetails"></el-input>
                    </el-form-item>
                    <el-form-item class="btnDialog">
                        <el-button  @click="resetForm('ruleForm')">取消</el-button>
                        <el-button @click="submitForm('ruleForm')">确定</el-button>
                    </el-form-item>
                </el-form> 
            </div>
        </el-dialog>
       <div class="main">
            <p class="
                site">
                <b>
                    确认收货地址
                </b>
            </p>
            <p class="siteInfo">
                <b class="siteB">
                    寄送至
                </b>
                <b class="siteName siteB">
                    {{siteData.name}}
                </b>
                <b class="siteTel siteB">
                    {{siteData.tel}}
                </b>
                <b class="siteRegion">
                    {{siteData.sheng}}
                </b>
                 <b class="siteRegion">
                    {{siteData.qu}}
                </b>
                 <b class="siteRegion">
                    {{siteData.detailsSite}}
                 </b>
                 <el-button class="modificationSite" @click="modificationSite">新增或者编辑收货地址</el-button>
            </p>
            <p class="
                site orderInfo">
                <b>
                    确认订单信息
                </b>
            </p>
            <p class="payWay">
                支付方式
            </p>
            <p class="payBtn">
                <el-button @click="getPay" :class="'modificationSite '+ alipa">支付宝</el-button>
                <el-button @click="getPay" :class="'modificationSite '+ weChat">微信</el-button>
            </p>
            <p class="productList">
                产品清单
            </p>
            <ul class="productListUl">
                <li class="productListLi" v-for="(item,index) in productList" :key="index">
                    <div class="fl productDiv">
                        <i class="name">{{item.name}}</i>
                        <img class="img" :src="item.imgUrl" alt="">
                    </div>
                    <div class="fl productInfo productDiv">
                       <div class="info">￥{{item.nameInfo}}</div>
                       <div class="classDiv">
                            <p class="color">
                                颜色分类&nbsp;&nbsp;&nbsp;{{ item.color }}
                            </p><br>
                            <p class="color size">
                                尺码:&nbsp; {{item.size }}
                            </p>
                       </div>
                        <p class="price">
                            {{item.price}}
                        </p>
                        <el-input-number @change="getNum"  size="mini" v-model="item.num">{{item.num}}</el-input-number>
                        <p class="sub">
                           ￥ {{parseFloat(item.num)*item.price}}
                        </p>    
                    </div>
                </li>
            </ul>
            <p class="invoice">
                发票
            </p>
            <el-radio-group v-model="invoice" fill='#333'>
                <el-radio :label="1">不开发票</el-radio>
                <el-radio :label="2">个人发票</el-radio>
                <el-radio :label="3">企业发票</el-radio>
            </el-radio-group>
            <div class="submitOrder">
                <el-button class="submitOrderBtn" @click="submitOrder">提交订单</el-button>
                <p class="subTotal">
                    <b>
                        合计:
                    </b>
                    <span class="sub">{{subPrice}}</span>
                </p>
                <p class="orderProductNum">
                    <b>共</b>
                    <span class="num">{{subNum}}</span>
                    <b>件商品</b>
                </p>
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
      productNum: 1,
      invoice: 1,
      subNum: 0,
      subPrice: 0,
      alipa: "active",
      weChat: "",
      modificationSiteDialog: false,
      compileDialog: false,
      defaultSite: "",
      totalPageNum: 100,
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航"
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航"
                }
              ]
            }
          ]
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局"
                },
                {
                  value: "color",
                  label: "Color 色彩"
                },
                {
                  value: "typography",
                  label: "Typography 字体"
                },
                {
                  value: "icon",
                  label: "Icon 图标"
                },
                {
                  value: "button",
                  label: "Button 按钮"
                }
              ]
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框"
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框"
                },
                {
                  value: "input",
                  label: "Input 输入框"
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器"
                },
                {
                  value: "select",
                  label: "Select 选择器"
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器"
                },
                {
                  value: "switch",
                  label: "Switch 开关"
                },
                {
                  value: "slider",
                  label: "Slider 滑块"
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器"
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器"
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器"
                },
                {
                  value: "upload",
                  label: "Upload 上传"
                },
                {
                  value: "rate",
                  label: "Rate 评分"
                },
                {
                  value: "form",
                  label: "Form 表单"
                }
              ]
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格"
                },
                {
                  value: "tag",
                  label: "Tag 标签"
                },
                {
                  value: "progress",
                  label: "Progress 进度条"
                },
                {
                  value: "tree",
                  label: "Tree 树形控件"
                },
                {
                  value: "pagination",
                  label: "Pagination 分页"
                },
                {
                  value: "badge",
                  label: "Badge 标记"
                }
              ]
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告"
                },
                {
                  value: "loading",
                  label: "Loading 加载"
                },
                {
                  value: "message",
                  label: "Message 消息提示"
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框"
                },
                {
                  value: "notification",
                  label: "Notification 通知"
                }
              ]
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单"
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页"
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑"
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单"
                },
                {
                  value: "steps",
                  label: "Steps 步骤条"
                }
              ]
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框"
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示"
                },
                {
                  value: "popover",
                  label: "Popover 弹出框"
                },
                {
                  value: "card",
                  label: "Card 卡片"
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯"
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板"
                }
              ]
            }
          ]
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components"
            },
            {
              value: "sketch",
              label: "Sketch Templates"
            },
            {
              value: "jiaohu",
              label: "组件交互文档"
            }
          ]
        }
      ],
    //   optionProv: [
    //     {
    //       value: "河南",
    //       label: "henan"
    //     }
    //   ],
    //   optionCity: [
    //     {
    //       value: "郑州市",
    //       label: "zhengzhou"
    //     }
    //   ],
    //   optionCounty: [
    //     {
    //       value: "金水区",
    //       label: "jinshui"
    //     }
    //   ],
      ruleForm: {
        name: "",
        tel: "",
        region: "",
        siteDetails: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入收件人姓名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        tel: [
          { required: true, message: "请输入收件人电话", trigger: "blur" },
          { min: 11, max: 11, message: "输入电话号码有误", trigger: "blur" }
        ],
        region: [
          {
            required: true,
            message: "请选择省市区",
            trigger: "change"
          }
        ],
        siteDetails: [
          {
            required: true,
            message: "请输入详细地址",
            trigger: "blur"
          }
        ]
      },
      siteData: {
        name: "蚕丝",
        tel: "15638521345",
        sheng: "河南省",
        shi: "郑州市",
        qu: "金水区",
        detailsSite: "中州大道国基路21世纪社区湖左岸65栋13801室"
      },
      productList: [
        {
          name: "蚕丝被",
          imgUrl: "../../static/images/1.png",
          nameInfo: "精品蚕丝枕巾三件套",
          color: "紫色",
          size: "S",
          price: "366.00",
          num: 1,
          sub: "366.00"
        },
        {
          name: "蚕丝被1",
          imgUrl: "../../static/images/1.png",
          nameInfo: "精品蚕丝枕巾三件套",
          color: "紫色",
          size: "S",
          price: "366.00",
          num: 1,
          sub: "366.00"
        }
      ],
      siteDataList: [
        {
          id: "1",
          name: "李庆克",
          tel: "15638521345",
          sheng: "河南省",
          shi: "郑州市",
          qu: "金水区",
          detailsSite: "中州大道国基路21世纪社区湖左岸65栋13801室",
          active: true
        },
        {
          id: "2",
          name: "李庆科",
          tel: "15638521345",
          sheng: "河南省",
          shi: "郑州市",
          qu: "金水区",
          detailsSite: "中州大道国基路21世纪社区湖左岸65栋13801室",
          active: false
        },
        {
          id: "3",
          name: "李庆克",
          tel: "15638521345",
          sheng: "河南省",
          shi: "郑州市",
          qu: "金水区",
          detailsSite: "中州大道国基路21世纪社区湖左岸65栋13801室",
          active: false
        },
        {
          id: "4",
          name: "李庆科",
          tel: "15638521345",
          sheng: "河南省",
          shi: "郑州市",
          qu: "金水区",
          detailsSite: "中州大道国基路21世纪社区湖左岸65栋13801室",
          active: false
        }
      ]
    };
  },
  mounted() {
    let h = this.productList.length;
    for (let i = 0; i < h; i++) {
      this.subNum += this.productList[i].num;
      this.subPrice +=
        this.productList[i].num * parseFloat(this.productList[i].price);
    }
  },
  methods: {
    getNum(e) {
      // 用户对商品的数量进行改变执行
      let h = this.productList.length;
      this.subNum = 0;
      this.subPrice = 0;
      for (let i = 0; i < h; i++) {
        this.subNum += this.productList[i].num;
        this.subPrice +=
          this.productList[i].num * parseFloat(this.productList[i].price);
      }
    },
    submitOrder() {
      console.log("提交订单");
    },
    getPay(e) {
      console.log(e.toElement.innerText);
      let i = e.toElement.innerText;
      if (i === "支付宝") {
        this.alipa = "active";
        this.weChat = "";
      } else {
        this.weChat = "active";
        this.alipa = "";
      }
    },
    modificationSite() {
      console.log("用户修改或编辑地址");
      this.modificationSiteDialog = true;
    },
    modificationSiteClose() {
      this.modificationSiteDialog = false;
    },
    getDefaultSite(e) {
      let h = this.siteDataList.length;
      for (let i = 0; i < h; i++) {
        this.siteDataList[i].active = false;
      }
      let text = e.srcElement.innerText;
      let a;
      console.log(text);
      if (text === "默认地址" || text === "设置为默认") {
        a = e.target.parentNode.getAttribute("data-a");
      } else {
        a = e.target.getAttribute("data-a");
      }
      this.siteDataList[a].active = true;
    },
    compileClose() {
      this.compileDialog = false;
    },
    editSite() {
      console.log("编辑地址");
      this.compileDialog = true;
      this.modificationSiteDialog = false;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.compileDialog = false;
    }
  }
};
</script>
<style lang="scss">
.orderDetails {
  .el-button {
    border-radius: 3px;
  }
  .el-button:active {
    border-color: #dfdfdf;
  }
  .el-button:focus,
  .el-button:hover {
    border-color: #dfdfdf;
  }
  .modificationSiteDialog {
    .el-dialog--center {
      height: 475px;
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
        padding-top: 25px;
        padding: 25px 40px 0 40px;
        .modificationSiteDialogDiv {
          .site {
            color: #b4976b;
            font-size: 14px;
            border-bottom: 1px solid #ccc;
            position: relative;
            height: 31px;
            b {
              position: absolute;
              top: 0px;
              display: inline-block;
              width: 135px;
              padding-left: 13px;
              border-bottom: 1px solid #b4976b;
              padding-bottom: 6px;
            }
            .lf {
              left: 0px;
            }
            .lr {
              top: 0px;
              right: 0px;
              font-size: 12px;
              border-bottom: none;
              text-align: right;
              padding-right: 15px;
              cursor: pointer;
            }
          }
          .siteUl {
            margin-bottom: 20px;
            .siteLi {
              height: 60px;
              border-bottom: 1px solid #eaeaea;
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding-left: 13px;
              .siteText {
                float: left;
                font-size: 12px;
                color: #333;
                b {
                  font-weight: normal;
                }
                .nameTel {
                  font-weight: normal;
                  line-height: 16px;
                }
                .siteRegionP {
                  font-weight: normal;
                  line-height: 20px;
                }
              }
              .siteBtn {
                float: right;
                padding-right: 20px;
                .el-button {
                  width: 80px;
                  height: 25px;
                  line-height: 25px;
                  padding: 0;
                  span {
                    font-size: 12px;
                    color: #fff;
                    display: inline-block;
                    width: 80px;
                    height: 25px;
                  }
                }
                .defaultSiteClass {
                  background: #f6f6f6;
                  span {
                    color: #666;
                  }
                }
                .active {
                  background: #b2976a;
                  span {
                    color: #fff;
                  }
                }
                .el-button + .el-button {
                  margin-left: 18px;
                }
              }
            }
          }
        }
        .el-pagination {
          text-align: center;
        }
        .el-pagination.is-background .el-pager li:not(.disabled).active {
          background-color: #bca070;
          color: #fff;
        }
        .el-pagination.is-background .btn-next,
        .el-pagination.is-background .btn-prev,
        .el-pagination.is-background .el-pager li {
          width: 20px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #ddd;
          font-size: 12px;
          min-width: 20px;
        }
        .el-pagination.is-background .el-pager li:not(.disabled):hover {
          color: #757373;
        }
        .el-pagination.is-background .el-pager li.active:hover {
          color: #fff;
        }
      }
    }
  }
  .compileDialog {
    .el-dialog--center {
      height: 357px;
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
        padding-top: 25px;
        padding: 25px 40px 0 40px;
        .compileDiv {
          .site {
            color: #b4976b;
            font-size: 14px;
            border-bottom: 1px solid #ccc;
            position: relative;
            height: 31px;
            margin-bottom: 15px;
            b {
              position: absolute;
              top: 0px;
              display: inline-block;
              width: 95px;
              padding-left: 13px;
              border-bottom: 1px solid #b4976b;
              padding-bottom: 6px;
              left: 0px;
            }
          }
          .el-form {
            padding-left: 13px;
            .el-form-item {
              margin-bottom: 15px;
              .el-form-item__label {
                line-height: 25px;
                padding: 0;
              }
              .el-form-item__content {
                line-height: 25px;
                .el-input {
                  width: 310px;
                  .el-input__inner {
                    line-height: 25px;
                    height: 25px;
                    padding: 0 5px;
                  }
                }
                .el-cascader{
                    line-height: 25px;
                    .el-input__prefix, .el-input__suffix{
                        top:-7px;
                    }
                }
                .el-form-item__error {
                  padding-top: 0px;
                }
              }
            }
            .btnDialog {
              .el-form-item__content {
                margin-left: 72px !important;
                .el-button {
                  padding: 0;
                  height: 35px;
                  width: 120px;
                  color: #fff;
                  background: #b2976a;
                }
              }
            }
            .region {
              .el-select {
                width: 94px;
                margin-right: 6px;
                .el-input--suffix {
                  width: 94px;
                }
              }
              .county {
                margin-right: 0px;
                .el-input--suffix {
                  width: 122px;
                }
              }
            }
          }
        }
      }
    }
  }
  .main {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    margin-top: 130px;
    margin-bottom: 100px;
    .fl {
      float: left;
    }
    .site {
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
        width: 135px;
        padding-left: 13px;
        border-bottom: 2px solid #b4976b;
        padding-bottom: 13px;
      }
    }
    .orderInfo {
      margin-top: 100px;
    }
    .siteInfo {
      border-bottom: 2px solid #ccc;
      height: 95px;
      line-height: 95px;
      font-size: 14px;
      color: #333;
      padding-left: 13px;
      position: relative;
      b {
        font-weight: normal;
      }
      .siteB {
        color: #b4976b;
        margin-right: 30px;
      }
      .siteName,
      .siteTel {
        color: #333;
      }
      .siteRegion {
        margin-right: 7px;
      }
      .modificationSite {
        width: 168px;
        height: 35px;
        background: #b2976a;
        font-size: 14px;
        color: #fff;
        float: right;
        margin-top: 30px;
      }
      .el-button {
        border: none;
        padding: 0;
      }
    }
    .payWay,
    .productList,
    .invoice {
      margin-top: 30px;
      height: 36px;
      line-height: 36px;
      background: #dfdfdf;
      padding-left: 13px;
      margin-bottom: 30px;
    }
    .invoice {
      margin-top: 0px;
    }
    .payBtn {
      margin-bottom: 30px;
      .modificationSite {
        width: 120px;
        height: 35px;
        line-height: 35px;
        font-size: 14px;
        padding: 0;
        background: #f6f6f6;
        color: #666;
      }
      .active {
        background: #b2976a;
        color: #fff;
      }
    }
    .productList {
      margin-bottom: 0px;
    }
    .productListUl {
      .productListLi {
        height: 133px;
        padding-left: 13px;
        border-top: 1px solid #ccc;
        padding-top: 20px;
        i {
          font-style: normal;
          font-size: 12px;
          display: inline-block;
        }
        .productDiv {
          .name {
            width: 58px;
            color: #b2976a;
          }
          .img {
            width: 90px;
            height: 83px;
            margin-right: 12px;
            vertical-align: top;
          }
        }
        .productInfo {
          display: flex;
          align-items: flex-start;
          font-size: 12px;
          padding-top: 12px;
          .info {
            color: #333;
            width: 143px;
            display: inline-block;
          }
          .classDiv {
            display: inline-block;
            width: 120px;
            .color {
              color: #8a8a8a;
              display: inline-block;
            }
          }
          .price {
            display: inline-block;
            width: 80px;
          }
          .el-input-number--mini {
            width: 77px;
            margin-right: 30px;
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
          .sub {
            color: #b2976a;
          }
        }
      }
    }
    .el-radio-group {
      padding-left: 13px;
      padding-bottom: 30px;
      width: 1187px;
      border-bottom: 1px solid #ccc;
      .el-radio__input.is-checked + .el-radio__label {
        color: #333;
      }
      .el-radio__label {
        font-size: 12px;
      }
      .el-radio__input.is-checked .el-radio__inner {
        border-color: #dcdfe6;
        background: #666;
      }
      .el-radio__inner:hover {
        border-color: #dcdfe6;
      }
    }
    .submitOrder {
      height: 110px;
      width: 1200px;
      line-height: 110px;
      border-bottom: 2px solid #ccc;
      float: right;
      color: #333;
      .orderProductNum {
        float: right;
        font-size: 12px;
        margin-right: 30px;
        .num {
          color: #b2976a;
          font-size: 20px;
        }
      }
      .subTotal {
        float: right;
        font-size: 12px;
        .sub {
          color: #b2976a;
          font-size: 20px;
          margin-left: 15px;
          margin-right: 20px;
        }
      }
      .submitOrderBtn {
        float: right;
        width: 120px;
        height: 50px;
        margin-top: 30px;
        color: #fff;
        font-size: 20px;
        background: #b4976b;
      }
      .el-button:active {
        border-color: #dfdfdf;
      }
      .el-button:focus,
      .el-button:hover {
        border-color: #dfdfdf;
      }
    }
  }
}
</style>

