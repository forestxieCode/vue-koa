<template>
    <section class="personal-dynamics">
        <div class="title">个人留言</div>
    
        <el-form :label-position="'top'" label-width="80px" :model="formData" style="margin-top:20px;">
                <el-form-item label="发表留言">
                        <el-input type="textarea" v-model="formData.message" :rows="6" placeholder="你的每一句话都是我继续前进的动力"></el-input>
                </el-form-item>
                <el-form-item>
                        <el-button type="primary" @click="submitForm" size="small">发布</el-button>
                </el-form-item>
        </el-form>
        <div class="title">留言列表</div>
        <div v-for="(item,index) in dynamicArr" :key="index" class="dynamic-item">
            <div class="info">
                <div class="left">
                     <img :src="`${$config.fileApi}${item.authorImg}`"/>
                    <div>
                        <span>{{item.message}}</span>
                        <span>{{item.update_time}}</span>
                    </div>
                </div>
                <el-button type="text" @click="deleteMessage(item.update_time)">删除</el-button>
            </div>
            <el-divider></el-divider>
        </div>
    </section>
</template>
<script>
import { mapGetters,mapMutations  } from 'vuex'
  const sortKey = (array, key) =>{
        return array.sort(function(a, b) {
          var x = a[key];
          var y = b[key];
          return x > y ? -1 : x < y ? 1 : 0;
        });
  }
export default {
    data(){
        return{
           formData:{},
           dynamicArr:[] 
        }
    },
    computed:{
     ...mapGetters([
      'userinfo'
     ])
    },
    methods:{
        async submitForm(){
          this.formData.username = this.userinfo.username
          const res =  await this.$axios.post('/api/post-message',this.formData)
          if(res.code === 0){
              this.$message.success(res.msg)
              this.formData.message = ''
              this.getMessageList()
          }else {
              this.$message.error(res.msg)
          }
        },
        async getMessageList(){
            const data =  await this.$axios.get('/api/get-message-list',{params:{username:this.userinfo.username}})
            this.dynamicArr = data.data
            sortKey(this.dynamicArr,'update_time')
        },
        deleteMessage(update_time){
          this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(async  () => {
                const res =  await this.$axios.get('/api/delete-message',{params:{update_time}})
                if(res.code === 0){
                    this.$message({
                        type: 'success',
                        message: res.msg
                    });
                }else {
                    this.$message({
                        type: 'error',
                        message: res.msg
                    });
                }
                this.getMessageList()
            }).catch(() => {
                this.$message({
                        type: 'info',
                        message: '已取消删除'
                });          
            });
        }
    },
    mounted(){
        this.getMessageList()
    }
}
</script>
<style lang="less">
.personal-dynamics{
     margin-top: 5px;
    .el-divider--horizontal{
           margin: 9px 0;
    }
    .title{
        color: rgba(0,0,0,.85);
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
    }
    .dynamic-item{
        margin-top: 20px;
    .info{
      display: flex;
      justify-content: space-between;
      .left{
        display: flex;
        img{
            width: 32px;
            height: 32px;
            border-radius: 50%;
            vertical-align: top;
        }
        div{
            margin-left: 20px;
            display: flex;
            flex-direction: column;
            & span:last-child{
            margin-top: 5px;
            font-size: 14px;
            color: rgba(0,0,0,.25);
            }
        }
      }
    }
  }
}
</style>