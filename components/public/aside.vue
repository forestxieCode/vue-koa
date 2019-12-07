<template>
  <section class="aside">
    <section class="logo" >
      <h1><span class="el-icon-medal"></span> <span v-if="!isCollapse">Forest Xie</span></h1>
    </section>
    <el-menu default-active="/home" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :collapse-transition="false"  background-color="#001529"  text-color="hsla(0,0%,100%,.65)" active-text-color="#f5222d">
      <el-submenu v-for="item in menus" :index="item.path" :key="item.path">
        <template slot="title">
          <i :class="item.iconClass"></i>
          <span slot="title">{{item.name}}</span>
        </template>
        <el-menu-item v-for="itemChilde in item.childe" :key="itemChilde.path" :index="itemChilde.path" @click="routerClik(itemChilde.path)">{{itemChilde.name}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </section>
</template>
<script>
  export default {
    asyncData(){

    },
    data(){
      return {
        menus:[
          {
            name:'仪表盘',
            iconClass:'el-icon-stopwatch',
            path:'/workplace',
            childe:[
              {
                name:'工作台',
                path:'/workplace',
              },
              {
                name:'主页',
                path:'/home',
              }
            ]
          },
          {
            name:'图形编辑器',
            iconClass:'el-icon-brush',
            path:'/graphiceditor',
            childe:[
              {
                name:'流程图编辑器',
                path:'/graphiceditor',
              }
            ]
          },
          {
            name:'个人页',
            iconClass:'el-icon-user',
            path:'/personalpage',
            childe:[
               {
                name:'个人中心',
                path:'/personalpage/personalCenter',
              },
              {
                name:'个人设置',
                path:'/personalpage/personalsetting',
              }
            ]
          },
          {
            name:'权限管理',
            iconClass:'el-icon-lock',
            path:'/permission',
            childe:[
              {
                name:'角色权限',
                path:'/permission',
              }
            ]
          }
        ]
      }
    },
    props: ['isCollapse'],
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      routerClik(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="less">
  @height:45px;

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
      background: #000c17;
      color: hsla(0,0%,100%,.65);
      background: #001529!important;
      -webkit-box-shadow: 0 2px 8px rgba(0,0,0,.45) inset;
      box-shadow: inset 0 2px 8px rgba(0,0,0,.45);
      .el-submenu__title{
        padding-left: 26px!important;
        height: @height;
        line-height: @height;
      }
      .el-menu-item{
        background: transparent!important;
        color: hsla(0,0%,100%,.65)t!important;
        height: @height;
        line-height: @height;
        padding-left: 46px!important;
      }
      .el-submenu.is-active .el-submenu__title i{
        color: #1890ff;
      }
      .el-submenu.is-opened .el-submenu__title i{
        color: #909399;
      }
      .el-menu-item.is-active{
        background-color: #1890ff!important;
        color: #fff!important;
      }
      .el-menu-item:focus, .el-menu-item:hover{
        color: #fff!important;
      }
    }
  }
  .el-menu--collapse{
    width: 80px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 256px;
    min-height: 100%;
  }
  .el-menu--vertical{
    .el-menu--popup{
      min-width: 150px;
      border-radius: 5px;
      .el-menu-item{
        height: @height;
        line-height: @height;
      }
      .el-menu-item.is-active{
        background-color: #1890ff!important;
        color: #fff!important;
      }
      .el-menu-item:focus, .el-menu-item:hover{
        color: #fff!important;
      }
    }
  }
</style>
