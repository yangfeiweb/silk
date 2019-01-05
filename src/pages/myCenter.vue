<template>
  <div class="myCenter">
    <headerNav></headerNav>
    <el-dialog
        title=""
        :visible.sync="changePass"
        width="504px"
        top='306px'
        class="compileDialog changePass"
        center>
        <div class="compileDiv">
            <el-button  @click="changePassword">短信验证码修改</el-button>
            <el-button @click="changePassword">旧密码修改</el-button>
        </div>
    </el-dialog>
    <el-dialog
        title=""
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
        <div class="navMenu">
            <el-tabs @tab-click='getTab' tab-position="left">
                <el-tab-pane label="个人信息">
                    <div class="myInfo">
                        <p class="tel">
                            已绑定的手机号码&nbsp;&nbsp;&nbsp;&nbsp;{{myInfoData.tel}}
                        </p>
                        <p class="myInfoBtn">
                            <el-button @click="modificationTel" class="modificationTel">更改绑定手机号</el-button>
                            <el-button @click="modificationlogin" class="modificationTel">修改登录密码</el-button>
                        </p>
                <div class="siteDiv">
                <p class="site">
                    <b>
                        确认收货地址
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
            </div>
            </div>
            </el-tab-pane>
            <el-tab-pane label="我的订单">
                <div class="myOrder">
                    <el-input class="search" v-model="searchVal"  suffix-icon="el-icon-search"  @change="search"  placeholder="请输入关键词"></el-input>
                    <p class="productList">
                        <b class="orderInfo"> 订单信息</b>
                        <b class="Receiving"> 收货人</b>
                        <b class="orderMoney"> 订单金额</b>
                        <b class="orderState"> 订单状态</b>
                        <b class="handle"> 操作</b>
                    </p>
                    <ul class="productListUl">
                        <li class="productListLi" v-for="(item,index) in orderList" :key="index">
                            <p class="timeNumber">
                                <b class="orderTime">
                                    {{item.time}}
                                </b>
                                <b class="orderNumber">
                                    订单编号: {{item.orderNumber}}
                                </b>
                            </p>
                            <ul class="orderDetails">
                                <li class="orderDetailsLi"  v-for="(items,indexs) in item.orderdata" :key="indexs">
                                    <img class="img" :src="items.imgUrl" alt="">
                                    <div class="classDiv">
                                        <p class="info">{{items.nameInfo}}</p>
                                        <p class="color">
                                            颜色分类&nbsp;&nbsp;&nbsp;{{ items.color }}
                                        </p>
                                        <p class="color size">
                                            尺码:&nbsp; {{items.size }}
                                        </p>
                                    </div>
                                    <div class="numDiv">
                                        <p class="productNum">
                                            ×{{items.num}}
                                        </p>
                                    </div>
                                    <div class="showDiv">

                                        <p class="name">{{items.name}} 
                                        </p>
                                        <p class="sub">
                                        ￥ {{parseFloat(items.num)*items.price}}
                                        </p>    
                                        <p class="state">
                                            {{items.state}}
                                        </p>
                                        <p class="handlep">
                                           <b @click="handleCancel" v-show="items.state==='已发货'?false:true">取消订单</b>
                                            <b @click="handleConfirm" v-show="items.state==='已发货'?true:false">确认收货</b>
                                            <b @click="handleRefund" v-show="items.state==='已发货'?true:false">申请退款</b>
                                            <b @click="handleDetele" v-show="items.state==='未完成'?true:false">删除</b>
                                             <b @click="handleDetele" v-show="items.state==='已完成'?true:false">删除</b>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="totalPageNum">
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="我的收藏">
                <div class="myCollect">
                    <div class="collectHead">
                        <b>商品分类:</b>
                        <ul class="myInfoBtnUl" >
                            <li class="myInfoBtnLi" v-for="(item,index) in productClassList" :key="index">
                            <el-button @click="productClassTab" :class="productClassBtnActive===index?'productClassBtn active':'productClassBtn'" :data-i='index'>{{item.name}}({{item.num}})</el-button>
                            </li>
                        </ul>
                    </div>
                    <div class="managementDiv">
                        <el-input class="search" v-model="searchCollectVal"  suffix-icon="el-icon-search"  @change="searchCollect"  placeholder="请输入关键词"></el-input>
                        <div class="managementRight">
                            <el-button v-show="batchManagementBtn" class="managementBtn" @click="check">全选</el-button>
                            <el-button v-show="batchManagementBtn" class="managementBtn" @click="addCart">加入购物车</el-button>
                            <el-button v-show="batchManagementBtn" class="managementBtn" @click="cancelCollect">取消收藏</el-button>
                            <b class="batchManagement" @click="getBatchManagement">
                                批量管理
                            </b>
                        </div>
                    </div>
                    <div class="productShow">
                        <ul class="productShowUl">
                            <li class="productShowLi" v-for="(item,index) in productDetails" :key="index">
                                <input type="checkbox" @click="checkboxOnclick" name="productCheckbox" :value="item.id" v-model="checkArr" class="productCheckbox" :id="'product'+index" :data-a='item.id'>
                                <label :for="'product'+index"> </label>
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
                        :total="totalPageNumCollect">
                    </el-pagination>
                </div>
            </el-tab-pane>
            </el-tabs>
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
      changePass: false,
      myInfoData: {
        tel: "15638521342"
      },
      productClassBtnActive: 0,
      compileDialog: false,
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
        },
        {
          id: "5",
          name: "李庆科",
          tel: "15638521345",
          sheng: "河南省",
          shi: "郑州市",
          qu: "金水区",
          detailsSite: "中州大道国基路21世纪社区湖左岸65栋13801室",
          active: false
        },
        {
          id: "6",
          name: "李庆克",
          tel: "15638521345",
          sheng: "河南省",
          shi: "郑州市",
          qu: "金水区",
          detailsSite: "中州大道国基路21世纪社区湖左岸65栋13801室",
          active: false
        },
        {
          id: "7",
          name: "李庆科",
          tel: "15638521345",
          sheng: "河南省",
          shi: "郑州市",
          qu: "金水区",
          detailsSite: "中州大道国基路21世纪社区湖左岸65栋13801室",
          active: false
        }
      ],
      orderList: [
        {
          orderNumber: "123123123123213",
          time: "2018-06-12",
          orderdata: [
            {
              name: "蚕丝被",
              imgUrl: "../../static/images/1.png",
              nameInfo: "精品蚕丝枕巾三件套",
              color: "紫色",
              size: "S",
              price: "366.00",
              num: 1,
              sub: "366.00",
              state: "已发货"
            },
            {
              name: "蚕丝被",
              imgUrl: "../../static/images/1.png",
              nameInfo: "精品蚕丝枕巾三件套",
              color: "紫色",
              size: "S",
              price: "366.00",
              num: 1,
              sub: "366.00",
              state: "等待发货"
            }
          ]
        },
        {
          orderNumber: "123123123123213",
          time: "2018-06-13",
          orderdata: [
            {
              name: "蚕丝被",
              imgUrl: "../../static/images/1.png",
              nameInfo: "精品蚕丝枕巾三件套",
              color: "紫色",
              size: "S",
              price: "366.00",
              num: 1,
              sub: "366.00",
              state: "等待发货"
            },
            {
              name: "蚕丝被",
              imgUrl: "../../static/images/1.png",
              nameInfo: "精品蚕丝枕巾三件套",
              color: "紫色",
              size: "S",
              price: "366.00",
              num: 1,
              sub: "366.00",
              state: "未完成"
            }
          ]
        }
      ],
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
      searchVal: "",
      totalPageNum: 100,
      totalPageNumCollect: 100,
      productClassList: [
        {
          name: "睡衣",
          num: 2
        },
        {
          name: "蚕丝被",
          num: 2
        }
      ],
      searchCollectVal: "",
      batchManagementBtn: false,
      productDetails: [
        {
          id: "1",
          imgUrl: "../../static/images/1.png",
          productName: "精品蚕丝枕头三件套",
          price: "666"
        },
        {
          id: "2",
          imgUrl: "../../static/images/2.png",
          productName: "精品蚕丝枕头三件套",
          price: "666"
        },
        {
          id: "3",
          imgUrl: "../../static/images/3.png",
          productName: "精品蚕丝枕头三件套",
          price: "666"
        },
        {
          id: "4",
          imgUrl: "../../static/images/4.png",
          productName: "精品蚕丝枕头三件套",
          price: "666"
        },
        {
          id: "5",
          imgUrl: "../../static/images/5.png",
          productName: "精品蚕丝枕头三件套",
          price: "666"
        },
        {
          id: "6",
          imgUrl: "../../static/images/6.png",
          productName: "精品蚕丝枕头三件套",
          price: "666"
        },
        {
          id: "7",
          imgUrl: "../../static/images/7.png",
          productName: "精品蚕丝枕头三件套",
          price: "666"
        },
        {
          id: "8",
          imgUrl: "../../static/images/8.png",
          productName: "精品蚕丝枕头三件套",
          price: "666"
        },
        {
          id: "9",
          imgUrl: "../../static/images/1.png",
          productName: "精品蚕丝枕头三件套",
          price: "666"
        },
        {
          id: "10",
          imgUrl: "../../static/images/2.png",
          productName: "精品蚕丝枕头三件套",
          price: "666"
        },
        {
          id: "11",
          imgUrl: "../../static/images/3.png",
          productName: "精品蚕丝枕头三件套",
          price: "666"
        },
        {
          id: "12",
          imgUrl: "../../static/images/4.png",
          productName: "精品蚕丝枕头三件套",
          price: "666"
        },
        {
          id: "13",
          imgUrl: "../../static/images/5.png",
          productName: "精品蚕丝枕头三件套",
          price: "666"
        },
        {
          id: "14",
          imgUrl: "../../static/images/6.png",
          productName: "精品蚕丝枕头三件套",
          price: "666"
        },
        {
          id: "15",
          imgUrl: "../../static/images/7.png",
          productName: "精品蚕丝枕头三件套",
          price: "666"
        },
        {
          id: "16",
          imgUrl: "../../static/images/8.png",
          productName: "精品蚕丝枕头三件套",
          price: "666"
        }
      ],
      checkState: false,
      checkArr: []
    };
  },
  mounted() {},
  methods: {
    getTab(e) {
      console.log("你好");
      console.log(e.index);
    },
    modificationTel() {
      console.log("修改绑定手机号");
      this.$router.push("/changeTel");
    },
    modificationlogin() {
      console.log("修改登录密码");
      this.changePass = true;
    },
    changePassword(e) {
      console.log(e.target.innerText);
      let text = e.target.innerText;
      if (text === "短信验证码修改") {
      } else {
      }
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
    },
    search() {
      console.log("请输入搜索的关键词");
    },
    handleCancel() {
      console.log("取消订单");
    },
    handleConfirm() {
      console.log("确认收货");
    },
    handleRefund() {
      console.log("申请退款");
    },
    handleDetele() {
      console.log("删除");
    },
    productClassTab(e) {
      let a = e.target.parentNode.getAttribute("data-i");
      console.log(a);
      this.productClassBtnActive = parseFloat(a);
    },
    searchCollect() {
      console.log("收藏搜索");
    },
    getBatchManagement() {
      console.log("点击批量管理");
      if (this.batchManagementBtn === false) {
        this.batchManagementBtn = true;
      } else {
        this.batchManagementBtn = false;
      }
    },
    check() {
      console.log("全选");
      this.checkState = !this.checkState;
      let h = this.productDetails.length;
      console.log(this.productDetails.length);
      if (this.checkState === false) {
        this.checkArr = [];
      } else {
        this.checkArr = [];
        for (let i = 0; i < h; i++) {
          this.checkArr.push(this.productDetails[i].id);
        }
      }
    },
    addCart() {
      console.log("加入购物车");
    },
    cancelCollect() {
      console.log("取消收藏");
    },
    // 全选获取用户选择了哪些商品进行管理
    checkboxOnclick(e) {
      let z = e.target.getAttribute("data-a");
      console.log(z);
      let h = this.checkArr.length;
      let a = null;
      if (h > 0) {
        for (let i = 0; i < h; i++) {
          if (this.checkArr[i] === z) {
            a = i;
          }
        }
        if (a === null) {
          this.checkArr.push(z);
        } else {
          this.checkArr.splice(a, 1);
        }
      } else {
        this.checkArr.push(z);
      }
      console.log(this.checkArr);
    }
  }
};
</script>
<style lang="scss">
.myCenter {
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
                .el-cascader {
                  line-height: 25px;
                  .el-input__prefix,
                  .el-input__suffix {
                    top: -7px;
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
  .changePass {
    .el-dialog--center {
      height: 143px;
      .el-button {
        padding: 0;
        height: 35px;
        width: 140px;
        color: #fff;
        background: #b2976a;
      }
      .el-dialog__body {
        .compileDiv {
          text-align: center;
          .el-button + .el-button {
            margin-left: 18px;
          }
        }
      }
    }
  }
  .main {
    width: 1200px;
    margin: 0 auto;
    margin-top: 130px;
    margin-bottom: 100px;
    min-height: 824px;
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
    .navMenu {
      .el-tabs--left {
        .el-tabs__header {
          display: inline-block;
          padding: 20px 40px 0 120px;
          height: 100%;
        }
        .el-tabs--left .el-tabs__header.is-left {
          margin-right: 0px;
        }
        .el-tabs__item {
          font-size: 18px;
          color: #333;
          margin-bottom: 15px;
          height: auto;
          line-height: 20px;
          padding: 0;
        }
        .el-tabs__nav-wrap::after {
          height: 0;
          width: 0px;
        }
        .el-tabs__active-bar {
          background-color: transparent;
        }
        .el-tabs__item.is-active {
          font-weight: bold;
          color: #b2976a;
        }
        .el-tabs__content {
          border-left: 2px solid #ccc;
          padding: 0 100px;
          padding-bottom: 40px;
          min-height: 824px;
          .myInfo {
            padding-top: 20px;
            .tel {
              color: #777;
              font-size: 14px;
              margin-bottom: 15px;
            }
            .myInfoBtn {
              margin-bottom: 100px;
              .modificationTel {
                width: 140px;
                height: 35px;
                line-height: 35px;
                font-size: 14px;
                padding: 0;
                background: #b2976a;
                color: #fff;
              }
              .el-button + .el-button {
                margin-left: 38px;
              }
            }
            .siteDiv {
              .site {
                color: #b4976b;
                font-size: 14px;
                border-bottom: 1px solid #ccc;
                position: relative;
                height: 28px;
                b {
                  position: absolute;
                  top: 0px;
                  display: inline-block;
                  width: 135px;
                  padding-left: 13px;
                  border-bottom: 1px solid #b4976b;
                  padding-bottom: 7px;
                  left: 0px;
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
          }
          .myOrder {
            padding-top: 20px;
            .search {
              width: 100%;
              margin-top: 20px;
              .el-input__inner {
                float: right;
                border-radius: 13px;
                width: 270px;
                line-height: 25px;
                height: 25px;
                font-size: 12px;
                padding-left: 20px;
              }
              .el-input__suffix {
                top: -7px;
                right: 10px;
                color: #7a7a7a;
              }
            }
            .productList {
              height: 36px;
              line-height: 36px;
              background: #e1e1e1;
              padding-left: 13px;
              margin-top: 37px;
              b {
                display: inline-block;
                font-weight: normal;
              }
              .orderInfo {
                width: 380px;
              }
              .Receiving {
                width: 68px;
              }
              .orderMoney {
                width: 80px;
              }
              .orderState {
                width: 80px;
              }
              .handle {
              }
            }
            .productListUl {
              margin-bottom: 40px;
              .productListLi {
                padding-left: 13px;
                border-bottom: 1px solid #ccc;
                padding-top: 20px;
                padding-bottom: 30px;
                .timeNumber {
                  font-size: 12px;
                  color: #333;
                  margin-bottom: 10px;
                  .orderTime {
                    display: inline-block;
                    margin-right: 25px;
                  }
                }
                i {
                  font-style: normal;
                  font-size: 12px;
                  display: inline-block;
                }
                .orderDetails {
                  .orderDetailsLi {
                    margin-bottom: 10px;
                    height: 84px;
                    .img {
                      width: 90px;
                      height: 83px;
                      margin-right: 12px;
                      vertical-align: top;
                      float: left;
                    }
                    .classDiv {
                      display: inline-block;
                      float: left;
                      width: 160px;
                      font-size: 12px;
                      padding-top: 12px;
                      margin-right: 50px;
                      .info {
                        display: block;
                        color: #333;
                        margin-bottom: 14px;
                      }
                      .color {
                        color: #8a8a8a;
                        display: inline-block;
                      }
                      .size {
                        margin-left: 20px;
                      }
                    }
                    .numDiv {
                      height: 84px;
                      display: flex;
                      width: 72px;
                      padding-top: 12px;
                      align-items: flex-start;
                      float: left;
                    }
                    .showDiv {
                      height: 84px;
                      display: flex;
                      padding-top: 12px;
                      align-items: flex-start;
                      width: 360px;
                      float: left;
                      .name {
                        width: 71px;
                      }
                      .sub {
                        width: 86px;
                        color: #b2976a;
                      }
                      .state {
                        width: 83px;
                      }
                      .handlep {
                        b {
                          font-weight: normal;
                          cursor: pointer;
                          display: block;
                        }
                        b:hover {
                          text-decoration: underline;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          .myCollect {
            padding-top: 20px;
            color: #333;
            .collectHead {
              display: flex;
              align-items: center;
              b {
                font-weight: normal;
                font-size: 16px;
                margin-right: 5px;
              }
              .myInfoBtnUl {
                display: inline-block;
                margin-bottom: 0px;
                .myInfoBtnLi {
                  float: left;
                  margin-right: 18px;
                  .productClassBtn {
                    width: 80px;
                    height: 25px;
                    background: #f6f6f6;
                    font-size: 12px;
                    color: #666;
                    span {
                      display: inline-block;
                      height: 25px;
                      width: 80px;
                      line-height: 25px;
                    }
                  }
                  .el-button {
                    padding: 0;
                  }
                  button.active {
                    background: #b2976a;
                    color: #fff;
                    border: none;
                  }
                }
              }
            }
            .managementDiv {
              margin: 15px 0 38px;
              .search {
                width: 270px;
                .el-input__inner {
                  float: left;
                  border-radius: 13px;
                  width: 270px;
                  line-height: 25px;
                  height: 25px;
                  font-size: 12px;
                  padding-left: 20px;
                }
                .el-input__suffix {
                  top: -7px;
                  right: 10px;
                  color: #7a7a7a;
                }
              }
              .managementRight {
                float: right;
                font-size: 12px;
                height: 25px;
                line-height: 25px;
                b {
                  font-weight: normal;
                }
                .batchManagement {
                  color: #b2976a;
                  margin-left: 5px;
                  cursor: pointer;
                }
                .managementBtn {
                  width: 70px;
                  height: 25px;
                  background: #b2976a;
                  font-size: 10px;
                  color: #fff;
                  span {
                    display: inline-block;
                    height: 25px;
                    width: 70px;
                    line-height: 25px;
                  }
                }
                .el-button {
                  padding: 0;
                  border: none;
                }
              }
            }
            .productShow {
              overflow: hidden;
              .productShowUl {
                overflow: hidden;
                width: 768px;
                .productShowLi {
                  list-style: none;
                  float: left;
                  margin-right: 20px;
                  margin-bottom: 20px;
                  position: relative;
                  height: 323px;
                  width: 236px;
                  input {
                    position: absolute;
                    top: 0;
                    left: 0px;
                    width: 13px;
                    height: 13px;
                    opacity: 0;
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
                  .imgDiv {
                    position: absolute;
                    left: 20px;
                    top: 0px;
                    width: 219px;
                    height: 323px;
                    cursor: pointer;
                    .productImg {
                      width: 219px;
                      height: 201px;
                    }
                    .logoPosition {
                      position: absolute;
                      top: 10px;
                      left: 15px;
                      .productLogo {
                        height: 19px;
                        width: 68px;
                      }
                      b {
                        color: #000;
                        font-size: 12px;
                        font-weight: normal;
                      }
                    }
                    p {
                      text-align: center;
                      width: 219px;
                    }
                    .productName {
                      font-size: 12px;
                      color: #333;
                      margin-top: 13px;
                      margin-bottom: 8px;
                    }
                    .productPrice {
                      font-size: 16px;
                      color: #333;
                      margin-bottom: 15px;
                      b {
                        font-size: 12px;
                        font-weight: normal;
                      }
                    }
                    .cartBtn {
                      height: 27px;
                      width: 148px;
                      background: #333;
                      line-height: 27px;
                      text-align: center;
                      margin-left: 35.5px;
                      cursor: pointer;
                      img {
                        height: 16px;
                        width: 18px;
                      }
                      b {
                        color: #fff;
                        font-weight: normal;
                        font-size: 12px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

