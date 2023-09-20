<template>
  <group>
    <x-header title="赛思少儿编程" :left-options="{showBack:false}"></x-header>
    <br>
    <div>
      <img width="100%" src="../assets/header.png">
    </div>
    <div style="width: 90%;margin: 0 auto;">
      <flexbox orient="vertical" :gutter="12">
        <flexbox-item>1. 点击下方按钮填报学生信息（赛思少儿编程确保您的信息不会被泄露）</flexbox-item>
        <flexbox-item><x-button link="/sign" type="primary" style="font-size: 20px">👉点击报名👈</x-button></flexbox-item>
        <flexbox-item>2. 等待老师主动联系您确认学习相关事宜</flexbox-item>
        <flexbox-item>3. 将指定文案连续在朋友圈转发三天</flexbox-item>
        <flexbox-item>4. 参加scratch线上学习，三个月内免费</flexbox-item>
        <flexbox-item>5. 试学后继续参加学习的同学按月缴费</flexbox-item>
        <flexbox-item>
          <img width="100%" src="../assets/present.png">
        </flexbox-item>
      </flexbox>
    </div>
  </group>
</template>

<script>
  import {Group, Cell, XHeader, XButton, XImg, Divider, Flexbox, FlexboxItem} from "vux"
  export default {
    name: "home",
    components:{Group, Cell, XHeader, XButton, XImg, Divider, Flexbox, FlexboxItem},
    data(){
      return{}
    },
  }
</script>

<style lang="less">
.btn_wrap {
  padding: 0 1rem;
  margin-top: 0rem;
}
</style>
