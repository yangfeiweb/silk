<template>
  <div class="changeTel">
    <headerNav></headerNav>
    <div class="main">
        <div class="mainCentent">
            <p class="prompt">
                <img src="../assets/images/icon_prompt.png" alt="">
                <span>
                    我们不会泄露你的手机信息
                </span>
            </p>
            <div class="formData">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="telRuleForm">
                    <el-form-item label="手机号" prop="tel">
                        <el-input type="text" v-model="ruleForm.tel" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="authCode" class="codeForm">
                        <el-input type="text" v-model="ruleForm.authCode" auto-complete="off"></el-input>
                        <el-button class="authCode" :disabled='codeDisabled' @click="getAuthCode">{{authCodeText}}</el-button>
                    </el-form-item>
                    <el-form-item  class="resetBtn">
                        <el-button :disabled='submitDisabled' @click="submitForm('ruleForm')">提交</el-button>
                    </el-form-item>
                </el-form>
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
    var validateTel = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(parseInt(value))) {
          callback(new Error("请输入数字值"));
        } else {
          if (value.length !== 11) {
            callback(new Error("请输入11位的电话号码"));
          }
          if (value.split("")[0] !== "1") {
            console.log("第一位不是1");
            console.log(value.split("")[0]);
            callback(new Error("请输入正确的电话号码"));
          } else {
            callback();
            this.codeDisabled = false;
            this.submitDisabled = false;
          }
        }
      }, 1000);
    };
    var validateAuthCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入验证码"));
      }
      setTimeout(() => {
        if (!Number.isInteger(parseInt(value))) {
          callback(new Error("请输入数字值"));
        } else {
          callback();
        }
      }, 1000);
    };
    return {
      ruleForm: {
        tel: "",
        authCode: ""
      },
      rules: {
        tel: [{ validator: validateTel, trigger: "blur" }],
        authCode: [{ validator: validateAuthCode, trigger: "blur" }]
      },
      codeDisabled: true,
      submitDisabled: true,
      authCodeText: "发送验证码"
    };
  },
  mounted() {},
  methods: {
    getAuthCode() {
      console.log("发送验证码");
      this.authCodeText = "(60s)";
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
    }
  }
};
</script>
<style lang="scss">
.changeTel {
  .footer {
    position: fixed;
    bottom: 0px;
    width: 100%;
  }
  .main {
    width: 1200px;
    margin: 0 auto;
    margin-top: 190px;
    .mainCentent {
      margin-left: 272px;
      .prompt {
        font-size: 14px;
        color: #6c6c6c;
        margin-bottom: 70px;
        img {
          width: 18px;
          height: 18px;
        }
      }
      .formData {
        .telRuleForm {
          .el-input.is-active .el-input__inner,
          .el-input__inner:focus {
            border-color: #666666;
          }
          .el-form-item.is-error .el-input__inner,
          .el-form-item.is-error .el-input__inner:focus,
          .el-form-item.is-error .el-textarea__inner,
          .el-form-item.is-error .el-textarea__inner:focus,
          .el-message-box__input input.invalid,
          .el-message-box__input input.invalid:focus {
            border-color: #f56c6c;
          }
          .el-form-item {
            margin-bottom: 35px;
            .el-form-item__label {
              color: #6c6c6c;
              font-size: 16px;
              font-weight: normal;
            }
            .el-input {
              width: 330px;
              .el-input__inner {
                height: 45px;
                line-height: 45px;
              }
            }
          }
        }
        .codeForm {
          .el-form-item__content {
            width: 330px !important;
            .el-input {
              width: 200px;
              .el-input__inner {
                width: 200px;
              }
            }
          }
          .el-button {
            line-height: 0px;
            width: 120px;
            height: 44px;
            color: #bca070;
            font-size: 16px;
          }
          .el-button.is-disabled,
          .el-button.is-disabled:focus,
          .el-button.is-disabled:hover {
            color: #d8bf8e;
            border-color: #c0c4cc;
          }
          .el-button:focus,
          .el-button:hover {
            border-color: #666;
            background-color: #fff;
          }
        }
        .resetBtn {
          .el-button {
            background: #bca070;
            color: #fff;
            font-size: 18px;
            height: 45px;
            margin-bottom: 25px;
            width: 330px;
            border: none;
            border-radius: 5px;
          }
          .el-button.is-disabled,
          .el-button.is-disabled:focus,
          .el-button.is-disabled:hover {
            background: #d8bf8e;
          }
        }
        .resetBtn:focus {
          outline: none;
        }
      }
    }
  }
}
</style>

