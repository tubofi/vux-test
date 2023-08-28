<template>
  <group>
    <x-input :required=true ref="refName" title="姓名" v-model="formData.name" placeholder="请输入姓名"></x-input>
    <selector title="性别" v-model="formData.sex" :options=sexOptions placeholder="请选择性别"></selector>
    <selector title="年龄" v-model="formData.age" :options=ageOptions placeholder="请选择年龄"></selector>
    <x-input :required=true ref="refPhone" title="电话" v-model="formData.phone" placeholder="请输入手机号" is-type="china-mobile"></x-input>
    <flexbox>
      <flexbox-item>
        <x-input title="" placeholder="请输入验证码" v-model="formData.code" ></x-input>
      </flexbox-item>
      <flexbox-item>
        <x-button title="发送" text="点击发送"></x-button>
      </flexbox-item>
    </flexbox>
    <x-address title="地区" placeholder="请选择地址" :list="ChinaAddressV4Data" :hide-district=true></x-address>
    <x-button @click.native="submitForm()">提交</x-button>
  </group>
</template>

<script>
    import { Group, Cell, Selector, XInput, Flexbox, FlexboxItem, XButton, XAddress, ChinaAddressV4Data, CheckIcon,} from 'vux'
    export default {
      name: "try",
      components: {
        Group,
        Cell,
        Selector,
        XInput,
        Flexbox,
        FlexboxItem,
        XButton,
        XAddress,
        ChinaAddressV4Data,
        CheckIcon,
      },
      data(){
        return {
          sexOptions: ["男", "女"],
          ageOptions:[6,7,8,9,10,11,12,13,14,15,16],
          ChinaAddressV4Data:ChinaAddressV4Data,
          formData: {
            name: "",
            sex: "",
            age: "",
            phone:"",
            code:"",
            region:"",
          },
          rules:{
            name: [
              { required: true, message: '请输入姓名' },
            ],
          },
        }
      },
      methods:{
        submitForm() {
          if (this.$refs.refPhone.valid) {
            console.log("通过验证")
            console.log(this.formData.name)
          } else {
            console.log(this.$refs.refPhone.msg)
          }
        },
      },
    }
</script>

<style scoped>

</style>
