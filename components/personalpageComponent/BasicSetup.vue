<template>
    <section class="basic-setup">
        <div class="title">基本设置</div>
        <el-row>
            <el-col :span="16">
                <el-form :label-position="'top'" label-width="80px" :model="formData" style="margin-top:20px;">
                    <el-form-item label="昵称">
                        <el-input v-model="formData.nice" placeholder="可以设置昵称噢"></el-input>
                    </el-form-item>
                    <el-form-item label="电话">
                        <el-input v-model="formData.phone" placeholder="有意请留下电话联系"></el-input>
                    </el-form-item>
                    <el-form-item label="简介">
                        <el-input type="textarea" v-model="formData.desc" :rows="5" placeholder="请留下你最美的芳言"></el-input>
                    </el-form-item>
                     <el-form-item>
                        <el-button type="primary" @click="submitForm()" size="small">保存</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="8" style="padding-left:10%;">
                <up-load :authorImg.sync='formData.authorImg'></up-load>
            </el-col>
        </el-row>
    </section>
</template>
<script>
import { mapGetters,mapMutations  } from 'vuex'
import { updateUserInfo,getUserInfo } from '~/api/users'
import  UpLoad  from '~/components/public/UpLoad'
export default {
    data(){
        return{
          formData:{}
        }
    },
    components:{
        UpLoad
    },
    methods:{
       ...mapMutations([
        'saveUserInfo'
       ]),
        async submitForm(){
            let userinfo = {...this.formData}
            delete userinfo.token; delete userinfo.email
            const res =  await updateUserInfo(userinfo)
            if(res.code === 0){
                const userRes = await getUserInfo({username:this.username})
                if(userRes.code===0){
                    this.saveUserInfo(userRes.data)
                }
                this.$message.success(res.msg)
            }else {
                this.$message.error(res.msg)
            }  
        }
    },
    computed:{
     ...mapGetters([
      'userinfo',
      'username'
     ])
    },
     mounted(){
        this.formData = {...this.userinfo}
    }
}
</script>
<style lang="less">
.basic-setup{
    flex: 1;
    height: 100%;
    margin-top: 5px;
    .title{
        color: rgba(0,0,0,.85);
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
    }
}
</style>