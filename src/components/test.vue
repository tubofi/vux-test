<template>

</template>

<script>
  //import vux插件
  import {
    Group,
    XInput,
    XButton,
    Toast
  } from 'vux'
  export default {
    components: {
      Group,
      XInput,
      XButton
    },
    data () {
      return {
//定义表单元素对象
        formData: {
          username: '',
          password: ''
        },
//定义表单验证规则
        rules: {
//定义“用户名”验证规则
          username: [
            { required: true, message: '请输入用户名' },
            { pattern: /^[a-zA-Z0-9_-]{4,16}$/, message: '用户名为4-16位字母数字组合' }
          ],
//定义“密码”验证规则
          password: [
            { required: true, message: '请输入密码' },
            { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/, message: '密码为8-16位，必须包含大小写字母和数字' }
          ]
        }
      }
    },
    methods: {
//定义表单提交事件
      submitForm () {
//验证表单是否通过
        this.$refs.ruleForm.validate((valid) =>{
          if (valid) {
            Toast('表单验证成功')
          } else {
            Toast('表单验证失败')
            return false
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
