<template>
  <section class="aside">
    <section class="logo" >
      <h1><span class="el-icon-medal"></span> <span v-if="!isCollapse">Forest Xie</span></h1>
    </section>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :collapse-transition="false"  background-color="#001529"  text-color="hsla(0,0%,100%,.65)" active-text-color="#f5222d">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </section>
</template>
<script>
  export default {
    asyncData(){

    },
    props: ['isCollapse'],
    watch:{
      isCollapse:function(newVal,oldVal){
        console.log(newVal)
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="less">
  .aside{
    height: calc(100vh - 64px);
    .logo{
      position: relative;
      height: 64px;
      padding-left: 24px;
      overflow: hidden;
      line-height: 64px;
      background: #002140;
      // -webkit-transition: all .3s;
      // transition: all 400ms;

      h1{
        color: #fff;
        font-size: 25px;
        margin: 0 0 0 0px;
        font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
        font-weight: 600;
        vertical-align: middle;
      }
    }
    .el-menu{
      border-right:none;
      height: 100%;
      overflow: hidden;
    }
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100%;
  }
</style>
