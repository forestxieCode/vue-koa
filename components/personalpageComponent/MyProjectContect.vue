<template>
  <section>
       <el-card class="my-selef-info-card" shadow="never">
            <div slot="header" class="my-el-card__header">
                <el-button class="button" type="primary" size="small" :disabled="activeName !== 'first'" @click="clickHandle">新增</el-button>
            </div>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="我的项目" name="first">
                    <my-project-card  @eidtHadlePro="eidtHadlePro"/>
                </el-tab-pane>
                <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            </el-tabs>
       </el-card>

       <el-dialog :title="title +'项目'" :visible.sync="addProjectVisible" width="35%">
              <el-form label-width="80px" :model="fromProject" ref="fromEmail">
                <el-row :gutter="20">
                    <el-col :span="18">
                        <el-form-item label="项目名称">
                            <el-input v-model="fromProject.projectName" placeholder="请输入项目名称"></el-input>
                        </el-form-item>

                         <el-form-item label="项目地址">
                            <el-input v-model="fromProject.projectUrl" placeholder="请输入项目地址"></el-input>
                        </el-form-item>

                        <el-form-item label="项目时间">
                            <el-date-picker
                              style="width:100%;"
                              v-model="fromProject.time"
                              type="monthrange"
                              range-separator="至"
                              start-placeholder="开始月份"
                              end-placeholder="结束月份">
                            </el-date-picker>
                        </el-form-item>

                        <el-form-item label="项目描述">
                            <el-input type="textarea" v-model="fromProject.projectDesc" :rows="3" placeholder="请输入项目描述"></el-input>
                        </el-form-item>
                    </el-col>
                  
                    <el-col :span="6">
                        <up-load :authorImg.sync='fromProject.projectImg'></up-load>
                    </el-col>
                </el-row>
            </el-form>

             <div slot="footer">
                 <el-button @click="addProjectVisible = false" class="my-btn my-btn-default" >取消</el-button>
                 <el-button @click="addProject" class="my-btn my-btn-primary">保存</el-button>
             </div>
       </el-dialog>
  </section>
 
</template>
<script>
import { mapGetters,mapMutations  } from 'vuex'
import MyProjectCard from './MyProjectCard'

import  UpLoad  from '~/components/public/UpLoad'
const initfromProject = ()=>{
  return {
    projectName:'',
    projectUrl:'',
    projectDesc:'',
    projectImg:'',
    time:''
  }
} 
export default {
    data() {
      return {
        activeName: 'first',
        fromProject:initfromProject(),
        addProjectVisible:false,
        temData:[],
        title:'新增'
      };
    },
    components:{
        MyProjectCard,
        UpLoad
    },
    computed:{
     ...mapGetters([
      'userinfo',
      'username'
     ])
    },
  
    methods: {
      eidtHadlePro(pro){
        this.addProjectVisible = true
        this.fromProject = pro
        this.title = '编辑'
     },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      ...mapMutations([
        'saveUserInfo'
      ]),
     async addProject(){
        const res =  await this.$axios.post('/api/save-my-project',{project:this.fromProject,username:this.userinfo.username})
        const userRes = await this.$axios.get('/api/get-user-info',{params:{username:this.username}})
        if(userRes.code===0){
            this.saveUserInfo(userRes.data)
        }
        this.addProjectVisible = false
        this.$message.success(res.msg) 
      },
      clickHandle(){
        this.addProjectVisible = true
        this.title = '新增'
        this.fromProject = initfromProject()
      }
    },
    mounted(){
      this.temData = [...this.userinfo.project]
    }
}
</script>
<style lang="less">
.my-selef-info-card{
  .el-card__header{
    border-bottom: none;
    padding: 0;
  }
  .my-el-card__header{
    border: none;
    display: flex;
    justify-content: flex-end;
  }
}
</style>