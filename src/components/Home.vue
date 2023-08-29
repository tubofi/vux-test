<template>
  <group>
    <x-header title="赛思少儿编程" :left-options="{showBack:false}"></x-header>
    <x-button link="/sign">点击报名</x-button>
  </group>
</template>

<script>
  import {Group, Cell, XHeader, XButton} from "vux"
  export default {
    name: "home",
    components:{Group, Cell, XHeader, XButton},
    data(){
      return{}
    },
  }
</script>

<style scoped>

</style>
