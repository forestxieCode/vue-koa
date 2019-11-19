<template>
  <section class="workplace">
    <header class="workplace-header">
      <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>仪表盘</el-breadcrumb-item>
      </el-breadcrumb>
      <el-row style="height:88px;">
        <el-col :span="5">
          <img src="~/assets/img/avtor.jpg" alt="" style="height:60px;width:60px;">
        </el-col>
        
      </el-row>
    </header>
  </section>
</template>
<script>
export default {
  layout:'homeLayout'
}
</script>
<style lang="less">
.workplace{
  .workplace-header{
    background: #fff;
    padding: 16px 32px 0;
    border-bottom: 1px solid #e8e8e8;
  }  
}
</style>