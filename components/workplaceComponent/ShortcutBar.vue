<template>
  <el-card class="shortcut-bar" shadow="never">
    <div slot="header" class="clearfix">
      <span class="title">快速开始 / 便捷导航</span>
    </div>
    <div class="shortbar-wrapp">
      <nuxt-link v-for="(item,index) in arrList" :key="index" :to="item.path">{{item.name}}</nuxt-link>
      <el-button size="mini">添加</el-button>
    </div>
  </el-card>
</template>
<script>
  const arrList = [
    {
      path:'/home',
      name:'操作一'
    },
   {
     path:'/home',
       name:'操作二'
   },
    {
      path:'/home',
      name:'操作三'
    },
    {
      path:'/home',
      name:'操作四'
    },
    {
      path:'/home',
      name:'操作五'
    }
  ]
  export default {
    data(){
      return {
        arrList:arrList
      }
    }
  }
</script>
<style lang="less">
.shortcut-bar{
  box-shadow:none;
  border-radius: 0;
  .title{
    font-size: 16px;
  }
  .el-card__body{
    padding: 20px 20px 15px 20px;
  }
  .shortbar-wrapp{
    display: flex;
    flex-wrap: wrap;
    a{
      width: 25%;
      margin-bottom: 9px;
      &:hover{
        color: #1890ff;
      }
    }
  }
}
</style>
