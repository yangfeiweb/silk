<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      if (!to.name) {
        this.$router.replace({ name: "home" });
        return;
      }
      console.log("---------to...", to);
      next();
    });
  },
  destroyed() {
    localStorage.removeItem("studentNo");
    localStorage.removeItem("token");
    localStorage.removeItem('learnType')
  },
  methods: {}
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  /* height: 100%; */
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
ul,li{
    list-style:none;
}
/* 定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸 */
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  background-color: #f5f5f5;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #868181;
}
#app {
  height: 100%;
}
p{
    margin: 0;
}
</style>
