<template>
  <el-container class="register">
   <section class="register_container">
     <header>注册新账号</header>
     <el-form :model="register_form" status-icon :rules="register_rules" ref="register_form" label-width="0" class="register_Form">
        <el-form-item prop="username">
          <el-input type="text" v-model="register_form.username" auto-complete="off" placeholder="请输入注册账号" clearable :disabled="isGeting"></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input type="email" v-model="register_form.email" auto-complete="off" placeholder="请输入注册邮箱" clearable :disabled="isGeting"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="register_form.password" auto-complete="off"  placeholder="请输入注册密码" clearable></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input type="password" v-model="register_form.repassword" auto-complete="off"  placeholder="请确认注册密码" clearable></el-input>
        </el-form-item>

        <el-form-item prop="code" >
           <div class="ContantSpanBetween">
            <el-input type="code" v-model="register_form.code" auto-complete="off"  placeholder="请输入验证码" style="width:60%;"></el-input>
            <el-button type="primary" @click="getVerifyCode" style="width:36%;" :loading="isLoading" :disabled="isDisabled">{{getCode}}</el-button>
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
export default {
  layout:"default",
  data(){
    const validaterePass= (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.register_form.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };

    const validateEmail= (rule, value, callback) => {
      var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (value === '') {
        callback(new Error('请输入邮箱'));
      } else if (!reg.test(value)) {
        callback(new Error('邮箱格式不对'));
      } else{
        callback();
      }
    };

     const validatePass= (rule, value, callback) => {
      var reg = /^(\w){6,20}$/; ;
      if (value === '') {
        callback(new Error('请注册密码'));
      } else if (!reg.test(value)) {
        callback(new Error('请输入数字英文混合的密码'));
      } else{
        callback();
      }
    };

    return {
      count:300,
      getCode:'获取验证码',
      isGeting:false,
      register_form:{
        email:'',
        username:'',
        password:'',
        repassword:'',
        code:''
      },
      register_rules:{
        username:[
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        email:[
          { validator: validateEmail, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        repassword: [
          { validator: validaterePass, trigger: 'blur' }
        ],
      },
      isLoading:false
    }
  },
  computed:{
    isDisabled(){
      var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if(this.register_form.username!==''&&this.register_form.email!==''&&reg.test(this.register_form.email)){
        return false
      }else {
        return true
      }
    }
  },
  methods:{
    register(formName){
      this.$refs[formName].validate((valid) => {
         let request = {...this.register_form}
         delete request.repassword
         if (!valid) return
         this.$axios.post('/api/register',request).then(res=>{
            if(res.code===0){
              this.$message.success(res.msg)
              setTimeout(()=>{
                 this.$router.push('/')
              },200)
            }
          })
      });
    },
    getVerifyCode(){
      if(!this.isGeting){
        this.sendCode()
      }
      var countDown = setInterval(()=>{
        if(this.count < 1){
          this.isGeting = false
          this.isLoading = false;
          this.getCode = '获取验证码';
          this.count = 6;
          clearInterval(countDown);
        }else{
          this.isGeting = true
          this.isLoading = true;
          this.getCode = this.count-- + 's后重发';
        }
      },1000);
    },
    sendCode(){
      this.isLoading = true
      this.$axios.post('/api/verify',{username:this.register_form.username,email:this.register_form.email}).then(res=>{
        if(res.code===0){
          this.$message.success(res.msg)
        }else {
          this.$message.success('验证码发送失败，请重新发送')
        }
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
  background: url('../assets/img/bg.jpg') no-repeat;
  // background: url(../assets/img/bg.jpg) no-repeat center center;
  .register_container{
    width: 368px;
    header{
      font-size: 33px;
      color: #fff;
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