<template>
  <el-container class="login">
   <section class="login_container">
     <header>用户登入</header>
     <el-form :model="login_form" status-icon :rules="login_rules" ref="login_form" label-width="0" class="login_Form" >
        <el-form-item prop="username">
          <el-input type="username" v-model="login_form.username" auto-complete="off" placeholder="默认账号forest/或自己新注册" prefix-icon="el-icon-user" clearable></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" @keyup.enter.native="loginHnadle('login_form')" v-model="login_form.password" auto-complete="off"  placeholder="默认密码admin12/或自己新注册"  prefix-icon="el-icon-lock" clearable></el-input>
        </el-form-item>

         <div class="ContantSpanBetween">
          <el-checkbox v-model="isAutoLoign">自动登入</el-checkbox>
          <nuxt-link to="/">忘记密码</nuxt-link>
        </div>
        <el-form-item >
          <el-button type="primary" @click="loginHnadle('login_form')" style="width:100%;">登 入</el-button>
        </el-form-item>

        <div class="ContantSpanBetween">
          <span>其他方式登入</span>
          <nuxt-link to="/register">注册账号</nuxt-link>
        </div>

      </el-form>
   </section>
 </el-container>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  // loading: false,
  asyncData (){

  },
  data(){
    return {
      login_form:{
        username:'',
        password:''
      },
      login_rules:{
        username:[
          { required: true, message: '请输入账号邮箱', trigger: 'blur' }
        ],
        password:[
          { required: true, message: '请输入账号密码', trigger: 'blur' }
        ]
      },
      isAutoLoign:false
    }
  },
  mounted(){
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('username')
  },
  methods:{
     ...mapMutations([
        'saveUserInfo'
    ]),
     loginHnadle(formName){
       this.$refs[formName].validate(async (valid) => {
         if (!valid) return
         this.$nuxt.$loading.start()
         let res = await this.$axios.post('/api/login',this.login_form)
         if(res.code===0){
           this.$nuxt.$loading.finish()
           let info = {...res};delete info.code;delete info.msg
           this.saveUserInfo(info)
           this.$message.success(res.msg)
           this.$router.push('\home')
         }
      });
    }
  }
}
</script>

<style lang="less">
.login{
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: url('../assets/img/bg.jpg') no-repeat;
  .login_container{
    width: 368px;
    header{
      font-size: 33px;
      color: #fff;
      font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
      font-weight: 600;
      position: relative;
      top: 2px;
      text-align: center;
    }

    .login_Form{
      margin-top: 30px;
    }

    .ContantSpanBetween{
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      font-size: 14px;
      color: #fff;
      a{
        text-decoration: none;
        color: #1890ff;
      }
      .el-checkbox{
        color: #fff;
      }
      &:last-child{
        margin-bottom: 0px;
      }
    }
  }
}
</style>
