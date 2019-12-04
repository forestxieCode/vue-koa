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
    methods:{
      uploadError() {
          this.$message.error('上传失败，请重新上传')
        },
     
      beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpeg';
          const isLt2M = file.size / 1024 / 1024 < 2;
          if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!')
            return
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!')
            return
          }   
      },
     handleAvatarSuccess(res, file) {
         this.imgUrl = res.filename
         console.log(res.filename)
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
        width:70px;
        height:70px;
    }
    .default_aveter{
        position: absolute;
        border-radius: 50%;
    }
}

</style>