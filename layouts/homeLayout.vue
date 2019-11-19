<template>
  <el-container class="home">
    <el-aside :style="`width:${isCollapse?'64':'200'}px;`" >
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
      <el-main> <nuxt /></el-main>
      <el-footer class="footer" style="height:30px;">版权 @ 归 www.forestxie.com 所有</el-footer>
    </el-container>
</el-container>
</template>
<script>
import { mapGetters  } from 'vuex'
import Aside from '~/components/aside'
export default {
  data(){
    return {
      isCollapse:false
    }
  },
  components:{
    Aside
  },
  computed:{
     ...mapGetters([
      'username'
     ])
  }
}
</script>
<style lang="less">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
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

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

</style>
