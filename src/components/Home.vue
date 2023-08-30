<template>
  <group>
    <x-header title="赛思少儿编程" :left-options="{showBack:false}"></x-header>

    <div>
      <img width="100%" src="../assets/saisi.png">
    </div>
    <x-button link="/sign" type="primary" style="font-size: 20px" :gradients="['#2471ff', '#9733ff']">👉点击报名👈</x-button>
    <br><br><br><br><br>
  </group>
</template>

<script>
  import {Group, Cell, XHeader, XButton, XImg} from "vux"
  export default {
    name: "home",
    components:{Group, Cell, XHeader, XButton, XImg},
    data(){
      return{}
    },
  }
</script>

<style scoped>

</style>
