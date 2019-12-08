<template>
    <section class="basic-setup">
        <div class="title">基本设置</div>
        <el-row>
            <el-col :span="16">
                <el-form :label-position="'left'" label-width="80px" :model="formData" style="margin-top:20px;">
                    <el-row :gutter="20">
                        <el-col :span="24">
                            <el-form-item label="昵称">
                                <el-input v-model="formData.nice" placeholder="可以设置昵称噢"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="电话">
                                <el-input v-model="formData.phone" placeholder="有意请留下电话联系"></el-input>
                            </el-form-item>
                        </el-col>
                         <el-col :span="12">
                            <el-form-item label="职业">
                                <el-input v-model="formData.job" placeholder="请输入你的职业"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="职业描述">
                                <el-input v-model="formData.jobDescription" placeholder="请输入你的职业描述"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="居住地址">
                                <el-input v-model="formData.address" placeholder="请输入你的居住地址"></el-input>
                            </el-form-item>
                        </el-col>
                         <el-col :span="24">
                            <el-form-item label="个人标签">
                                          <el-tag
                                            :key="tag"
                                            v-for="tag in formData.tags"
                                            closable
                                            type="info"
                                            :size="mini"
                                            :disable-transitions="false"
                                            @close="handleClose(tag)">
                                            {{tag}}
                                        </el-tag>
                                        <el-input
                                            class="input-new-tag"
                                            v-if="inputVisible"
                                            v-model="inputValue"
                                            ref="saveTagInput"
                                            size="small"
                                            @keyup.enter.native="handleInputConfirm"
                                            @blur="handleInputConfirm"
                                            >
                                        </el-input>
                                        <el-button v-else class="button-new-tag" size="small" @click="showInput">新增</el-button>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="个人团队">
                                          <el-tag
                                            :key="tag.teamName"
                                            v-for="tag in formData.team"
                                            closable
                                            type="info"
                                             :size="mini"
                                            :disable-transitions="false"
                                            @close="handleCloseTeam(tag.teamName)">
                                            {{tag.teamName}}
                                        </el-tag>
                                        <el-button class="button-new-tag" size="small" @click="addteamHadle">新增</el-button>
                            </el-form-item>
                        </el-col>
                         <el-col :span="24">
                            <el-form-item label="简介">
                                <el-input type="textarea" v-model="formData.desc" :rows="5" placeholder="请留下你最美的芳言"></el-input>
                            </el-form-item>
                        </el-col>
                         <el-col :span="24">
                            <el-form-item>
                                <el-button type="primary" @click="submitForm()" size="small">保存</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </el-col>
            <el-col :span="8" style="padding-left:10%;">
                <up-load :authorImg.sync='formData.authorImg'></up-load>
            </el-col>
        </el-row>
         <el-dialog title="添加个人团队" :visible.sync="addTeamVisible" width="30%">
              <el-form label-width="80px" :model="fromtem" ref="fromEmail">
                <el-row :gutter="20">
                    <el-col :span="18">

                        <el-form-item label="团队名称">
                            <el-input v-model="fromtem.teamName" placeholder="请输入团队名称"></el-input>
                        </el-form-item>

                        <el-form-item label="团队描述">
                            <el-input type="textarea" v-model="fromtem.teamdesc" :rows="3" placeholder="请输入团队描述"></el-input>
                        </el-form-item>
                    </el-col>
                  
                    <el-col :span="6">
                        <up-load :authorImg.sync='fromtem.teamImg'></up-load>
                    </el-col>
                </el-row>
            </el-form>

             <div slot="footer">
                 <el-button @click="addTeamVisible = false" class="my-btn my-btn-default" >取消</el-button>
                 <el-button @click="addTeam()" class="my-btn my-btn-primary">添加</el-button>
              </div>
         </el-dialog>
    </section>
</template>
<script>
import { mapGetters,mapMutations  } from 'vuex'
import { updateUserInfo,getUserInfo } from '~/api/users'
import  UpLoad  from '~/components/public/UpLoad'
const initfrom = ()=> { return {teamName:'',teamImg:'',teamdesc:''}}

export default {
    data(){
        return{
          formData:{
              tags:[]
          },
          inputVisible: false,
          inputValue: '',
          addTeamVisible:false,
          fromtem:{}
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
        },
      handleClose(tag) {
        this.formData.tags.splice(this.formData.tags.indexOf(tag), 1);
      },
      addteamHadle(){
          this.addTeamVisible  = true
          this.fromtem = initfrom()
      },
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      handleCloseTeam(tag){
          this.formData.team.splice(this.formData.team.findIndex(item=>item.teamName ===tag ), 1);
      },
      addTeam(){
          if(this.formData.team.find(item=>item.teamName === this.fromtem.teamName)){
              this.$message.error('存在相同名字的团队名，请重新输入')
              return 
          }
          this.addTeamVisible  = false
          this.formData.team.push(this.fromtem)
      },
      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.formData.tags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
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
    margin-top: 5px;
    .el-tag + .el-tag {
        margin-left: 10px;
    }
    .button-new-tag {
        margin-left: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
    }
    .title{
        color: rgba(0,0,0,.85);
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
    }
}
</style>