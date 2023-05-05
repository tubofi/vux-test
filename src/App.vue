//App是空的渲染容器，一个vue文件应该包含template、script、style三个部分
//可以把每个vue文件看作是一个容器，App就是最外层的那个，main.js控制其它vue容器按照设计的层级和规则来安置这些小容器，组成最终的页面
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
