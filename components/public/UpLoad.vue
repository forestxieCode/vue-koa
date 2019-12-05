<template>
    <section>
      <el-upload
         class="avatar-uploader"
         :show-file-list="false"
         :headers="myToken"
         with-credentials
         name="file"
         action="/api/upload" 
         :on-error="uploadError"
         :on-success="handleAvatarSuccess"
         :before-upload="beforeAvatarUpload"
         nctype="multipart/form-data">
            <img  v-if="imgUrl" :src="`${$config.fileApi}${imgUrl}`" alt="" class="avatar" >
            <img  v-else src="../../assets/img/default_aveter.jpg" class="default_aveter" > 
            <!-- <i  class="el-icon-plus avatar-uploader-icon" style="position: absolute;top: 0px;opacity: 0;"></i> -->
    </el-upload>  
    </section>
</template>

<script>
var token =  localStorage.getItem('token') 
export default {
    data(){
       return {
           imgUrl:'',
           myToken: { Authorization: token }
       } 
    },
    props:{
        authorImg:{
            type:String
        }
    },
    mounted(){
        this.imgUrl = this.authorImg
    },
    watch:{
        authorImg:function(newVal,oldVal){
            this.imgUrl = newVal
        }
    },
    methods:{
      uploadError() {
          this.$message.error('上传失败，请重新上传')
      },
      beforeAvatarUpload(file) {
          const fileType = ['image/gif','image/jpeg','image/jpg','image/png','image/svg']
          const isLt2M = file.size / 1024 / 1024 < 2;

          if (fileType.indexOf(file.type)===-1) {
            this.$message.error('上传格式错误!')
            return false
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!')
            return false
          }   
      },
     handleAvatarSuccess(res, file) {
         this.imgUrl = res.filename
         this.$emit('update:authorImg',res.filename)
     },
    },
}
</script>
<style lang="less">
.avatar-uploader{
    position: relative;
    .avatar{
        position:absolute;
        border-radius: 50%; 
        width:90px;
        height:90px;
    }
    .default_aveter{
        width:90px;
        height:90px;
        position: absolute;
        border-radius: 50%;
    }
}

</style>