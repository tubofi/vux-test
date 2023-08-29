<template>

    <group >
      <div style="background-color: #fbf9fe">
      <x-header title="赛思少儿编程"></x-header>
      <br>
      <divider>填写以下信息</divider>
      <flexbox>
        <flexbox-item span="50"></flexbox-item>

        <flexbox orient="vertical" :gutter="12">
          <flexbox-item>
            <x-input :required=true ref="refName" title="姓名" v-model="formData.name" placeholder="请输入姓名  " is-type="china-name" @on-change="keyActive()"></x-input>
          </flexbox-item>

          <flexbox-item>
            <x-input :required=true ref="refPhone" title="电话" v-model="formData.phone" placeholder="请输入手机号  " is-type="china-mobile" @on-change="keyActive()" ></x-input>
            <x-input placeholder="输入验证码" class="weui-vcode">
              <x-button slot="right" type="primary" mini>发送验证码</x-button>
            </x-input>
          </flexbox-item>
        </flexbox>
        <flexbox-item span="50"></flexbox-item>
      </flexbox>

      <br>
      <divider>选择以下信息</divider>
      <flexbox>
        <flexbox-item span="50"></flexbox-item>

        <flexbox orient="vertical" :gutter="12">
          <flexbox-item>
            <selector title="课程" v-model="formData.course" :options=courseOptions placeholder="请选择课程" direction="rtl"></selector>
          </flexbox-item>

          <flexbox-item>
            <selector title="性别" v-model="formData.sex" :options=sexOptions placeholder="请选择性别" direction="rtl"></selector>
          </flexbox-item>

          <flexbox-item>
            <selector title="年龄" v-model="formData.age" :options=ageOptions placeholder="请选择年龄" direction="rtl"></selector>
          </flexbox-item>

          <flexbox-item>
            <x-address title="地区" placeholder="请选择地址" :list="ChinaAddressV4Data" :hide-district=true @on-shadow-change="onShadowChange"></x-address>
          </flexbox-item>

          <flexbox-item align='center'>
            <div style="width: 80%;" >
              <x-button ref="refSubmit" @click.native="submitForm()" :disabled=disabledVar type="primary">提交</x-button>
            </div>
          </flexbox-item>

          <br>
          <span class="footer">*注意: 正确填写报名信息后才可以提交</span>
        </flexbox>

        <flexbox-item span="50"></flexbox-item>
      </flexbox>
      </div>
    </group>

</template>

<script>
    import { Group, Cell, Selector, XInput, Flexbox, FlexboxItem, XButton, XAddress, ChinaAddressV4Data, CheckIcon,} from 'vux'
    import {XHeader, Card, Divider, Grid, GridItem, } from "vux"
    export default {
      name: "try",
      components: {
        Group, Cell, Selector, XInput, Flexbox, FlexboxItem, XButton, XAddress, ChinaAddressV4Data, CheckIcon,
        XHeader, Card, Divider, Grid, GridItem
      },
      data(){
        return {
          sexOptions: ["男", "女"],
          ageOptions:[6,7,8,9,10,11,12,13,14,15,16],
          courseOptions:["scratch", "python", "c++"],
          ChinaAddressV4Data:ChinaAddressV4Data,
          disabledVar: true,
          Address:[],
          formData: {
            name: "12",
            sex: "",
            age: "",
            phone:"19934255119",
            //code:"",
            region:"",
            course:"",
          },
        }
      },
      methods:{
        submitForm() {
          let that = this;
          if (that.$refs.refPhone.valid && that.$refs.refName.valid){
            //console.log(this.formData);
            //this.$router.push('/success');
            this.$http.get('/api/sign').then(({data}) => {
              console.log(data)
            })
          }
        },
        keyActive(){
          this.disabledVar = !(this.$refs.refName.valid && this.$refs.refPhone.valid);
        },
        onShadowChange(ids,names){
          console.log(ids,names);
          this.formData.region= names[0] + "-" + names[1];
        },
      },
    }
</script>

<style scoped lang="less">
  .footer{
    font-size: 15px;
    color: #ff4f14;
  }

</style>
