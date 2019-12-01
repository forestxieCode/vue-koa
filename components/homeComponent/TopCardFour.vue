<template>
  <el-card class="top-card" shadow="never">
    <div slot="header" class="title">
      <span>运营活动效果</span>
      <el-tooltip class="item" effect="dark" content="指标数名" placement="top">
        <span class="iconfont icongantanhao"></span>
      </el-tooltip>
    </div>
    <div class="top-card-body">
      <div class="totle">78%</div>
      <div class="chart-card-content">
          <progressBar/>
        </div>
      <el-divider></el-divider>
      <div class="top-card-body-bottom">
            <div class="content-fix">
            <div>
              <span>同周比</span>
              <span> 12% </span>
              <span class="iconfont iconxiangshang" style="color:red;"></span>
            </div>
            <div>
              <span>日月比</span>
              <span> 11% </span>
              <span class="iconfont iconxiangxia" style="color:green;"></span>
            </div>
          </div>
      </div>
    </div>
  </el-card>
</template>

<script>
  import { progressBar } from './homeEcharts'
  export default {
    data(){
      return {
      }
    },
    components:{
      progressBar
    }
  }
</script>

<style lang="less">
@import url('./style/common.less');
</style>
