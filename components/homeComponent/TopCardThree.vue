<template>
  <el-card class="top-card" shadow="never">
    <div slot="header" class="title">
      <span>支付笔数</span>
      <el-tooltip class="item" effect="dark" content="指标数名" placement="top">
        <span class="iconfont icongantanhao"></span>
      </el-tooltip>
    </div>
    <div class="top-card-body">
      <div class="totle">6,560</div>
      <div class="chart-card-content">
          <histogram/>
        </div>
      <el-divider></el-divider>
      <div class="top-card-body-bottom">转化率 60%</div>
    </div>
  </el-card>
</template>

<script>
  import { histogram } from './homeEcharts'
  export default {
    data(){
      return {
      }
    },
    components:{
      histogram
    }
  }
</script>

<style lang="less">
@import url('./style/common.less');
</style>
