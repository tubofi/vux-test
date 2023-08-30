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
            <x-input :required=true ref="refCode" v-model="formData.code" placeholder="输入验证码" is-type="china-name" @on-change="keyActive()">
              <x-button slot="right" type="primary" mini :disabled="checkCode.disabled" @click.native="getCode">{{checkCode.text}}</x-button>
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
            <selector title="课程" v-model="formData.courseType" :options=courseTypeOptions placeholder="请选择课程" direction="rtl"></selector>
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
      <toast v-model="show1" type="warn">{{"提交不成功"}}</toast>
      <toast v-model="show2" type="cancel">{{'无需重复提交'}}</toast>
      <toast v-model="show3" type="warn">{{"手机号不正确"}}</toast>
    </group>


</template>

<script>
    import { Group, Cell, Selector, XInput, Flexbox, FlexboxItem, XButton, XAddress, ChinaAddressV4Data, CheckIcon,} from 'vux'
    import {XHeader, Card, Divider, Grid, GridItem, Toast} from "vux"
    import success from "./Success.vue";
    export default {
      name: "try",
      components: {
        Group, Cell, Selector, XInput, Flexbox, FlexboxItem, XButton, XAddress, ChinaAddressV4Data, CheckIcon,
        XHeader, Card, Divider, Grid, GridItem,Toast,
      },
      data(){
        return {
          sexOptions: ["男", "女"],
          ageOptions:[6,7,8,9,10,11,12,13,14,15,16],
          courseTypeOptions:["scratch", "python", "c++"],
          ChinaAddressV4Data:ChinaAddressV4Data,
          disabledVar: true,
          Address:[],
          show1: false,
          show2: false,
          show3: false,
          formData: {
            name: "",
            sex: "",
            age: null,
            phone:"",
            code:"",
            region:"",
            courseType:"",
          },
          checkCode: {
            text: "获取验证码",
            TIME: 60,
            counter: 0,
            disabled: false
          }
        }
      },
      methods:{
        submitForm() {
          let that = this;
          if (that.$refs.refPhone.valid && that.$refs.refName.valid && that.$refs.refCode.valid){
            this.$http.post('/api/sign', that.formData).then(({data}) => {
              //console.log(data)
              if (data.status === "success") {
                that.$router.push('/success');
              } else {
                if (data.status === "exist") {
                  that.show2 = true
                }
                if (data.status === "failed") {
                  that.show1 = true
                }
              }
            })
          }
        },

        keyActive(){
          this.disabledVar = !(this.$refs.refName.valid && this.$refs.refPhone.valid && this.$refs.refCode.valid);
        },

        onShadowChange(ids,names){
          console.log(ids,names);
          this.formData.region= names[0] + "-" + names[1];
        },

        //获取验证码按钮
        getCode() {
          if (this.$refs.refPhone.valid) {
            this.checkCode.counter = this.checkCode.TIME;
            this.checkCode.text = this.checkCode.counter + "秒后重发";
            this.checkCode.disabled = true;
            this.countDown();
            this.$http.post('/api/code', {"phone": this.formData.phone}).then(({data}) => {
              console.log(data)
            })
          } else {
            this.show3 = true
          }
        },
        //倒计时
        countDown() {
          //console.log(this.checkCode.text);
          var _this = this;
          if (this.checkCode.counter === 0) {
            this.checkCode.text = "获取验证码";
            this.checkCode.disabled = false;
            return false;
          }
          let time = setTimeout(function() {
            _this.checkCode.counter--;
            _this.checkCode.text = _this.checkCode.counter + "秒后重发";
            _this.countDown();
          }, 1000);
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
