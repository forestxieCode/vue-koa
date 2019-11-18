<template>
  <el-container class="home">
    <el-aside :style="`width:${isCollapse?'64':'200'}px;`" ><Aside :isCollapse="isCollapse"/></el-aside>
    <el-container>
      <el-header class="header" style="height:64px;">
        <div :class="{'collect':true,'el-icon-s-fold':!isCollapse,'el-icon-s-unfold':isCollapse}" @click="isCollapse=!isCollapse"></div>

      </el-header>
      <el-main> <nuxt /></el-main>
      <el-footer> footer</el-footer>
    </el-container>
</el-container>
</template>
<script>
import Aside from '~/components/aside'
export default {
  data(){
    return {
      isCollapse:false
    }
  },
  components:{
    Aside
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
  }
  .collect{
    font-size: 30px;
    height: 64px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
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
