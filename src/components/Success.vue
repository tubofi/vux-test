<template>
  <group >
    <div style="background-color: #fbf9fe">
      <x-header title="赛思少儿编程" :left-options="{backText:'返回首页', preventGoBack:true}" @on-click-back="backHome()"></x-header>

      <br><br><br><br>
      <flexbox>
        <flexbox-item span="20"></flexbox-item>
        <flexbox-item>
          <div align="center">
            <box >
              <icon type="success-circle" is-msg></icon>
            </box>
            <br>
            <span class="success">报名成功</span>
            <br><br><br>
            <div>
              <span>报名信息填报成功！稍后会有老师在48小时内联系您，请放心接听电话或者添加微信</span>
            </div>
            <br><br><br>
            <x-button type="primary" link="/home">返回首页</x-button>
          </div>
        </flexbox-item>
        <flexbox-item span="20"></flexbox-item>
      </flexbox>
    </div>
  </group>
</template>

<script>
  import {Group, Cell, XHeader, XButton, Box, Icon, Flexbox, FlexboxItem,} from "vux"
  export default {
    name: "success",
    components:{Group, Cell, XHeader, XButton, Box, Icon, Flexbox, FlexboxItem,},
    data(){
      return{}
    },
    methods: {
      backHome(){
        this.$router.push('/home');
      },
    },
  }
</script>

<style scoped>
  .success{
    font-size: 24px;
    font-weight: bold;
    /*color: #ff4f14;*/
  }
</style>
