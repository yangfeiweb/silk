import _ from "lodash";
import auth from "./pageUrl/auth";

export let apiRoot = "http://192.168.0.104/shop/api/";
// if (process.env.NODE_ENV === "development") {
//   apiRoot = "/api";
// }
export default _.merge(
    auth(apiRoot)
);