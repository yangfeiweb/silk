import VueResource from "vue-resource";
import Vue from "vue";
// import router from "@/router/index";
// import utility from "./utility";
// import MD5 from "md5";
// import { Message } from "element-ui";
Vue.use(VueResource);
export default function(url = '', params = {}, type = 'GET') {
    let promise
    if (type.toUpperCase() === 'GET') {
        promise = Vue.http.get(url, { params: params })
    } else if (type.toUpperCase() === 'DELETE') {
        promise = Vue.http.delete(url, { params: params })
    } else if (type.toUpperCase() === 'POST') {
        promise = Vue.http.post(url, params, { emulateJSON: true })
    }
    return promise
}
// export default function(
//     url = "",
//     params = {},
//     type = "GET",
//     skipSignFields = []
// ) {
//     let result = setRequest(url, params, type, skipSignFields);
//     result.then(
//         res => {
//             let resultData = res.data;
//             let code = resultData.code;
//             if (code === 401) {
//                 localStorage.removeItem("studentNo");
//                 Message({
//                     message: "登陆已过期，请重新登录！",
//                     type: "warning"
//                 });
//                 router.push({ name: "login" });
//             } else if (code === 402) {
//                 localStorage.removeItem("studentNo");
//                 Message({
//                     message: "账号在其他地方登陆，请重新登陆！",
//                     type: "warning"
//                 });
//                 router.push({ name: "login" });
//             } else if (code === 403) {
//                 localStorage.removeItem("studentNo");
//                 Message({
//                     message: "请求失败，请重试！",
//                     type: "warning"
//                 });
//             }
//         },
//         err => {
//             console.log("-----err", err);
//         }
//     );
//     return result;
// }

// function setRequest(url, params = {}, type, skipSignFields) {
//   let token = localStorage.getItem("token");
//   if (token) {
//     params["token"] = token;
//   }
//   params["version"] = "1.0.0";
//   let formData = new FormData();
//   for (let key in params) {
//     formData.append(key, params[key]);
//   }
//   params["ts"] = utility.getTs();
//   let signParams = {};
//   if (skipSignFields.length) {
//     for (let key in params) {
//       if (
//         skipSignFields.findIndex(item => {
//           return item === key;
//         }) === -1
//       ) {
//         signParams[key] = params[key];
//       }
//     }
//   } else {
//     signParams = params;
//   }
//   let sign = getRequestSign(signParams);
//   params["sign"] = sign;
//   let result;
//   if (type.toUpperCase() === "GET") {
//     result = Vue.http.get(url, { params: params, timeout: 60000 });
//   } else if (type.toUpperCase() === "POST") {
//     result = Vue.http.post(url, params, {
//       emulateJSON: true,
//       timeout: 60000
//     });
//   }
//   return result;
// }

// export function getRequestSign(params) {
//     if (!params) {
//         params = {};
//     }
//     let paramArr = [];
//     for (let key in params) {
//         let val = params[key];
//         if (val !== undefined && val !== null && val !== "") {
//             paramArr.push(`${key}=${val}`);
//         }
//     }
//     paramArr.sort();

//     let key = "3be04a611e5deb0b67d30864e7eb0378";

//     let paramStr = paramArr.join("&") + `&key=${key}`;
//     return MD5(paramStr).toString();
// }