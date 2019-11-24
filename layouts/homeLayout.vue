<template>
  <el-container class="home">
    <el-aside :style="`width:${isCollapse?'80':'256'}px;`" >
      <Aside :isCollapse="isCollapse"/>
    </el-aside>
    <el-container>
      <el-header class="header" style="height:64px;">
        <div :class="{'collect':true,'el-icon-s-fold':!isCollapse,'el-icon-s-unfold':isCollapse}" @click="isCollapse=!isCollapse"></div>
        <div class="userinfo">
          <el-badge :value="200" :max="99" class="notice">
            <span class="el-icon-bell"></span>
          </el-badge>
          <el-popover
            ref="popover"
            placement="bottom-start"
            width="100"
            popper-class="popover-menu"
            trigger="hover">
              <div class="item" @click="$router.push('/')">
                <span class="el-icon-switch-button"></span> 退出登入
              </div>
            <div class="info" slot="reference">
              <img src="~/assets/img/avtor.jpg" alt="" class="avtoer"> 欢迎 {{username}}
            </div>
          </el-popover>

        </div>
      </el-header>
     <header class="header-top" >
       <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>仪表盘</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="page-header-heading-title">工作台</div>
        <!-- 工作台 -->
      <workplaceHeadTop></workplaceHeadTop>

      </header>
      <el-main> <nuxt :isCollapse="isCollapse"/></el-main>
      <el-footer class="footer" style="height:30px;">版权 @ 归 www.forestxie.com 所有</el-footer>
    </el-container>
</el-container>
</template>
<script>
import { mapGetters  } from 'vuex'
import workplaceHeadTop from '~/components/workplaceComponent/HeadTop'
import Aside from '~/components/aside'
export default {
  data(){
    return {
      isCollapse:false
    }
  },
  components:{
    Aside,
    workplaceHeadTop
  },
  computed:{
     ...mapGetters([
      'username'
     ])
  }
}
</script>
<style lang="less">
.home{
  height: 100vh;
  .header{
    padding: 0 12px 0 0;
    background: #fff;
    -webkit-box-shadow: 0 1px 4px rgba(0,21,41,.08);
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    position: relative;
    display: flex;
    height: 100%;
    .collect{
      font-size: 30px;
      height: 64px;
      line-height: 64px;
      padding: 0 24px;
      cursor: pointer;
    }
    .userinfo{
      margin-left: auto;
      display: flex;
      .notice{
          margin-top: 20px;
          margin-right: 30px;
          font-size: 20px;
      }
      .info{
        line-height: 64px;
        height: 54px;
        cursor: pointer;
        .avtoer{
          width: 25px;
          height: 25px;
          border-radius: 50%;
          vertical-align: middle;
        }
       }
      }
  }
  .page-header-heading-title{
    float: left;
    width: 100%;
    display: block;
    margin-bottom: 0;
    margin-top: 10px;
    padding-right: 12px;
    color: rgba(0,0,0,.85);
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
  }
  .header-top{
      background: #fff;
      padding: 16px 32px 0;
      border-bottom: 1px solid #e8e8e8;
  }
  .el-main{
    padding: 0px;
  }
  .footer{
    height:30px;
    line-height:30px;
    background: #f0f2f5;
    text-align:center;
    font-size:14px;
    color:#666;
  }
}
.popover-menu{
  padding: 6px 0 6px 0px;
  .item{
    padding: 10px;
    cursor: pointer;
    span{
      font-size: 20px;
      vertical-align: top;
      margin-right: 8px;
    }
    &:hover{
      background-color: rgb(247, 218, 168);;
      color: rgb(240, 139, 8);
    }
  }
}
</style>
