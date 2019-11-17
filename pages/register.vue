<template>
  <el-container class="register">
   <section class="register_container">
     <header>注册新账号</header>
     <el-form :model="register_form" status-icon :rules="register_rules" ref="register_form" label-width="0" class="register_Form">
        <el-form-item prop="username">
          <el-input type="text" v-model="register_form.username" auto-complete="off" placeholder="请输入注册账号" ></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input type="email" v-model="register_form.email" auto-complete="off" placeholder="请输入注册邮箱" ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="register_form.password" auto-complete="off"  placeholder="请输入注册密码"></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input type="password" v-model="register_form.repassword" auto-complete="off"  placeholder="请确认注册密码"></el-input>
        </el-form-item>

        <el-form-item prop="code" >
           <div class="ContantSpanBetween">
            <el-input type="code" v-model="register_form.code" auto-complete="off"  placeholder="请输入验证码" style="width:68%;"></el-input>
            <el-button type="primary" @click="sendCode" style="width:30%;" :loading="isLoading">获取验证码</el-button>
           </div>
        </el-form-item>

        <el-form-item >
           <div class="ContantSpanBetween">
              <el-button type="primary" @click="register('register_form')" style="width:50%;">注册</el-button>
              <nuxt-link to="/">使用已有账号登入</nuxt-link>
           </div>
        </el-form-item>
      </el-form>
   </section>
 </el-container>
</template>

<script>
import axios from 'axios'
export default {
  layout:"default",
  data(){
    return {
      register_form:{
        email:'',
        username:'',
        password:'',
        repassword:'',
        code:''
      },
      register_rules:{

      },
      isLoading:false
    }
  },
  methods:{
    register(formName){
      this.$refs[formName].validate((valid) => {
        delete this.register_form.repassword
         if (!valid) return false
          axios.post('/api/register',this.register_form).then(res=>{
            console.log(res)
          })
      });
    },
    sendCode(){
      this.isLoading = true
      axios.post('/api/verify',{username:this.register_form.username,email:this.register_form.email}).then(res=>{
        console.log(res)
      })
    }
  }
}
</script>
<style lang="less">
.register{
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  .register_container{
    width: 368px;
    header{
      font-size: 33px;
      color: rgba(0,0,0,.85);
      font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
      font-weight: 600;
      position: relative;
      top: 2px;
      text-align: left;
    }

    .register_Form{
      margin-top: 30px;
    }
   .ContantSpanBetween{
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      a{
        text-decoration: none;
        color: #1890ff;
      }
    }
  }
}
</style>