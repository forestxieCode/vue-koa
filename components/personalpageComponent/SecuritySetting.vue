<template>
    <section class="security-setting">
        <div class="title">安全设置</div>
        <div class="security-setting-list">
              <div class="list-item">
                  <div class="left">
                      <span>账户密码</span>
                      <span>当前密码强度：：良好</span>
                  </div>
                  <div>
                      <el-button type="text" @click="eidtPassdialogVisible = true">修改</el-button>
                  </div>
              </div>
              <el-divider></el-divider>
               <div class="list-item">
                  <div class="left">
                      <span>当前邮箱</span>
                      <span>已绑定邮箱:{{userinfo.email}}</span>
                  </div>
                  <div>
                      <el-button type="text" @click="eidtEmaildialogVisible = true" :disabled="true">修改</el-button>
                  </div>
              </div>
              <el-divider></el-divider>
               <div class="list-item">
                  <div class="left">
                      <span>当前手机号码</span>
                      <span>已绑定手机号:{{userinfo.phone || '暂无'}}</span>
                  </div>
                  <div>
                      <el-button type="text" :disabled="true">修改</el-button>
                  </div>
              </div>
              <el-divider></el-divider>
          </div>
        <el-dialog title="修改用户密码" :visible.sync="eidtPassdialogVisible"  width="30%">
           <el-form label-width="80px" :model="formPassData" :rules="formPassRules" ref="formPass">
                <el-row>
                    <el-col :span="24">
                      <el-form-item label="旧密码" >
                        <el-input v-model="formPassData.oldPassword" type="password" placeholder="请输入当前用户的密码"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="24">
                      <el-form-item label="新密码" prop="newPassword">
                        <el-input v-model="formPassData.newPassword" type="password" placeholder="请输入新密码"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="24">
                      <el-form-item label="确认密码" prop="rePassword">
                            <el-input v-model="formPassData.rePassword" type="password" placeholder="请确认密码"></el-input>
                      </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div slot="footer">
                  <el-button @click="eidtPassdialogVisible = false" class="my-btn my-btn-default" >取消</el-button>
                  <el-button @click="submitPass('formPass')" class="my-btn my-btn-primary">修改</el-button>
            </div>
         </el-dialog>
         <el-dialog title="修改用户邮箱" :visible.sync="eidtEmaildialogVisible" width="30%">
              <el-form label-width="80px" :model="fromEmailData" :rules="fromEmailRules" ref="fromEmail">
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="旧邮箱">
                            <el-input v-model="userinfo.email" placeholder="请输入当前用户的密码" disabled>
                                <template slot="append"><el-button @click="submitEmail">发送验证码</el-button></template>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="新邮箱" prop="newEmail">
                            <el-input v-model="fromEmailData.newEmail" placeholder="请输入新邮箱"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="验证码">
                            <el-input v-model="fromEmailData.code" placeholder="请输入验证码"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>

             <div slot="footer">
                 <el-button @click="eidtEmaildialogVisible = false" class="my-btn my-btn-default" >取消</el-button>
                 <el-button @click="submitEmail('fromEmail')" class="my-btn my-btn-primary">修改</el-button>
              </div>
         </el-dialog>
    </section>
</template>
<script>
import { mapGetters,mapMutations  } from 'vuex'
import { updatePassworld } from '~/api/users'
export default {
    data(){
       const validaterePass= (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.formPassData.newPassword) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };

        const validateEmail= (rule, value, callback) => {
            var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
            if (value === '') {
                callback(new Error('请输入新邮箱'));
            } else if (!reg.test(value)) {
                callback(new Error('邮箱格式不对'));
            } else{
                callback();
            }
        };

        const validatePass= (rule, value, callback) => {
            var reg = /^(\w){6,20}$/; ;
            if (value === '') {
                callback(new Error('请新密码'));
            } else if (!reg.test(value)) {
                callback(new Error('请输入数字英文混合的密码'));
            } else{
                callback();
            }
        };
        return {
           eidtPassdialogVisible:false,
           eidtEmaildialogVisible:false,
           formPassData:{
               oldPassword:'',
               newPassword:'',
               rePassword:''
           },
           fromEmailData:{
               email:'',
               newEmail:'',
               code:''
           },
           formPassRules:{
            newPassword:[
                { validator: validatePass, trigger: 'blur' }
            ],
            rePassword:[
                { validator: validaterePass, trigger: 'blur' }
            ] 
           },
           fromEmailRules:{
               newEmail:[
                { validator: validateEmail, trigger: 'blur' }
               ]
           },
        }
    },
    computed:{
     ...mapGetters([
      'userinfo'
     ])
    },
    methods:{
        submitPass(formName){
            this.$refs[formName].validate(async (valid) => {
                if (!valid) return
                    const {newPassword,oldPassword} = this.formPassData
                    let res = await updatePassworld({username:this.userinfo.username,newPassword,oldPassword})
                    if(res.code===0){
                        this.$message.success(res.msg)
                        this.eidtPassdialogVisible = false
                    }else {
                        this.$message.error(res.msg)
                    }
            });
        },
        submitEmail(formName){
            this.$refs[formName].validate(async (valid) => {
                if (!valid) return
                    
            });
        }
    }
}
</script>
<style lang="less">
.security-setting{
    margin-top: 5px;
    flex: 1;
    height: 100%;
    .title{
        color: rgba(0,0,0,.85);
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
    }
    .security-setting-list{
        margin-top: 20px;
       .list-item{
           .left{
               display: flex;
               flex-direction: column;
               & span:first-child{
                   color: rgba(0,0,0,.65);
                   font-size: 14px;
                   margin-bottom: 6px;
                   line-height: 22px;
               }
               & span:nth-child(2){
                   color: rgba(0,0,0,.45);
                   font-size: 14px;
                   line-height: 22px;
               }
              
           }
           padding: 6px 6px 6px 0px;
            align-items: center;
           display: flex;
           justify-content: space-between;
       } 
       .el-divider--horizontal{
           margin: 5px 0;
       }
    }
}
</style>