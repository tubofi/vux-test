<template>
  <group>
    <x-header title="赛思少儿编程" :left-options="{showBack:false}"></x-header>

    <div>
      <img width="100%" src="../assets/saisi.png">
    </div>
    <x-button link="/sign" type="primary">点击报名</x-button>
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
