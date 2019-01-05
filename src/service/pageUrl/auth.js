export default function(apiRoot) {
    return {
        ARTICLECAT: apiRoot + "article/articlecat", // 首页导航
        NAV: apiRoot + 'nav/ad', //轮播
        ARTICLE: apiRoot + 'article/article', //关于我们企业动态关于七彩蚕
        GOODSLIST: apiRoot + 'goods/goodslist', //商品列表
        GOODSCATE: apiRoot + 'goods/goodscate', //商品分类
        GOODSINFO: apiRoot + 'goods/goodsinfo', //商品详情
        SENDCODE: apiRoot + 'send_validate_code', //注册手机验证
        USERMSG: apiRoot + 'user/reg', //注册手机
        LOGIN: apiRoot + 'user/do_login', //登录
        LOGOUT: apiRoot + 'user/logout', //退出登录

    };
}