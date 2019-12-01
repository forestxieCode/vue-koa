<template>
  <el-card class="top-card" shadow="never">
    <div slot="header" class="title">
      <span>访问量</span>
      <el-tooltip class="item" effect="dark" content="指标数名" placement="top">
        <span class="iconfont icongantanhao"></span>
      </el-tooltip>
    </div>
    <div class="top-card-body">
      <div class="totle">8,855</div>
      <div class="chart-card-content">
          <arealine/>
        </div>
      <el-divider></el-divider>
      <div class="top-card-body-bottom">日日访问量1,234</div>
    </div>
  </el-card>
</template>

<script>
  import { arealine } from './homeEcharts'
  export default {
    data(){
      return {
      }
    },
    components:{
      arealine
    }
  }
</script>

<style lang="less">
@import url('./style/common.less');
</style>
