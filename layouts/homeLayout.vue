<template>
  <el-container class="home">
    <el-aside :style="`width:${isCollapse?'80':'256'}px;`" >
      <Aside :isCollapse="isCollapse"/>
    </el-aside>
    <el-container>
      <el-header class="header" style="height:64px;">
        <div :class="{'collect':true,'el-icon-s-fold':!isCollapse,'el-icon-s-unfold':isCollapse}" @click="CollapseHandle"></div>
        <div class="userinfo">
          <el-badge :value="200" :max="99" class="notice">
            <span class="el-icon-bell"></span>
          </el-badge>
          <el-dropdown class="lange" @command="handleCommand">
            <span class="el-dropdown-link">
              <i class="el-icon-setting el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="zh-CN">中文</el-dropdown-item>
              <el-dropdown-item command="en-US">English</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
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
              <img :src="userinfo.authorImg?`${$config.fileApi}${userinfo.authorImg}`:`${$config.fileApi}/uploads/default_aveter.jpg`" alt="" class="avtoer"> {{$t('global.welcome')}} {{username}}
            </div>
          </el-popover>
        </div>
      </el-header>
     <header class="header-top" v-if="isShowHeader">
       <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>工作台</el-breadcrumb-item>
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
import { mapGetters,mapMutations  } from 'vuex'
import workplaceHeadTop from '~/components/workplaceComponent/HeadTop'
import Aside from '~/components/public/aside'
const hiddenObj = {
  '/home':true,
  '/graphiceditor':true,
  '/permission':true,
  '/personalpage/personalsetting':true,
  '/personalpage/personalCenter':true
}
export default {
  loading:false,
  data(){
    return {
      isCollapse:false
    }
  },
  components:{
    Aside,
    workplaceHeadTop
  },
  methods:{
    ...mapMutations([
      'setIsCollapse'
    ]),
    CollapseHandle(){
      this.isCollapse = !this.isCollapse
      this.setIsCollapse(this.isCollapse)
    },
    handleCommand(LangName){
      this.$router.push(`/${LangName}/workplace`)
    }
  },
  computed:{
     ...mapGetters([
      'username',
      'userinfo'
     ]),
    isShowHeader(){
       if(hiddenObj[this.$route.fullPath]) return false
       return true
    }
  },
}
</script>
<style lang="less">
@import url('../assets/css/common.less');
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
      .lange{
         margin-top: 20px;
        margin-right: 30px;
        font-size: 18px;
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
