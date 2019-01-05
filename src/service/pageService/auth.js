import reqUrl from "../urlConfig";
import fetch from "@/utility/http";
// 首页导航
let articlecat = () =>
    fetch(
        reqUrl.ARTICLECAT, {},
        "GET"
    );
//  首页轮播 
let nav = (num) => fetch(reqUrl.NAV, {
    num: num
}, 'GET');
// 关于我们,企业动态,关于七彩蚕
let article = (num, catid) => fetch(reqUrl.ARTICLE, {
    num: num,
    catid: catid
}, 'GET');
// 商品列表
let goodslist = (page, num, Keywords, catid, sort) => fetch(reqUrl.GOODSLIST, {
    page: page,
    num: num,
    Keywords: Keywords,
    catid: catid,
    sort: sort
}, 'GET');
// 商品分类
let goodscate = () => fetch(reqUrl.GOODSCATE, {}, 'GET');
// 商品详情
let goodsinfo = (goodsid) => fetch(reqUrl.GOODSINFO, {
    goodsid: goodsid
}, 'GET');
// 注册手机验证
let sendCode = (scene, mobile) => fetch(reqUrl.SENDCODE, {
    scene: scene,
    mobile: mobile,
    session_id: session_id
}, 'GET');
// 手机注册
let userMsg = (scene, mobile, session_id, code, password, password2) => fetch(reqUrl.USERMSG, {
    scene: scene,
    mobile: mobile,
    session_id: session_id,
    code: code,
    password: password,
    password2: password2
}, 'GET');
// 登录
let login = (username, password) => fetch(reqUrl.LOGIN, {
    username: username,
    password: password
}, 'GET');
// 退出
let logout = () => fetch(reqUrl.LOGOUT, {}, 'GET');
export default { articlecat, nav, article, goodslist, goodscate, goodsinfo, sendCode, userMsg, login, logout };