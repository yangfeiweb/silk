import Vue from "vue";
import Router from "vue-router";
// 登录
import login from "@/pages/login.vue";
// 注册
import register from "@/pages/register.vue";
// 首页
import index from "@/pages/index.vue";
// 商品详情页
import goodsDetails from "@/pages/goodsDetails";
// 商品列表
import goodsList from "@/pages/goodsList";
// 订单详情
import orderDetails from "@/pages/orderDetails";
// 确认订单
import orderQuery from "@/pages/orderQuery";
// 付款
import payment from "@/pages/payment";
// 购物车
import shoppingCart from "@/pages/shoppingCart";
// 联系我们
import about from "@/pages/about";
// 企业动态列表页
import business from "@/pages/business";
// 企业动态详情页
import businessDetails from '@/pages/businessDetails'
// 我的消息
import info from "@/pages/info";
// 个人中心
import myCenter from "@/pages/myCenter"
// 更改手机号
import changeTel from "@/pages/changeTel"
import telChangePass from "@/pages/telChangePass"
import passChangePass from "@/pages/passChangePass"
Vue.use(Router);

export default new Router({
    routes: [{
        path: "/",
        name: "index",
        component: index,
        meta: {
            title: "商城主页"
        }
    }, {
        path: '/register',
        name: 'register',
        component: register,
        meta: {
            title: '注册'
        }
    }, {
        path: "/login",
        name: "login",
        component: login,
        meta: {
            title: "登录"
        }
    }, {
        path: '/goodsDetails',
        name: 'goodsDetails',
        component: goodsDetails,
        meta: {
            title: '商品详情页'
        }
    }, {
        path: '/goodsList',
        name: 'goodsList',
        component: goodsList,
        meta: {
            title: '商品列表'
        }
    }, {
        path: '/orderDetails',
        name: 'orderDetails',
        component: orderDetails,
        meta: {
            title: '订单详情页'
        }
    }, {
        path: "/orderQuery",
        name: 'orderQuery',
        component: orderQuery,
        meta: {
            title: '订单查询页'
        }
    }, {
        path: '/payment',
        name: 'payment',
        component: payment,
        meta: {
            title: '支付'
        }
    }, {
        path: '/shoppingCart',
        name: 'shoppingCart',
        component: shoppingCart,
        meta: {
            title: '购物车'
        }
    }, {
        path: '/telChangePass',
        name: 'telChangePass',
        component: telChangePass,
        meta: {
            title: '验证码修改密码'
        }
    }, {
        path: '/passChangePass',
        name: 'passChangePass',
        component: passChangePass,
        meta: {
            title: '旧密码修改密码'
        }
    }, {
        path: '/about',
        name: 'about',
        component: about,
        meta: {
            title: '联系我们'
        }
    }, {
        path: '/business',
        name: 'business',
        component: business,
        meta: {
            title: '企业动态列表'
        }
    }, {
        path: '/businessDetails',
        name: 'businessDetails',
        component: businessDetails,
        meta: {
            title: '企业动态详情页'
        }
    }, {
        path: '/info',
        name: 'info',
        component: info,
        meta: {
            title: '我的消息'
        }

    }, {
        path: '/myCenter',
        name: 'myCenter',
        component: myCenter,
        meta: {
            title: '个人中心'
        }

    }, {
        path: '/changeTel',
        name: 'changeTel',
        component: changeTel,
        meta: {
            title: '更改手机号'
        }

    }]
});