<template>
  <el-card class="top-card" shadow="never">
    <div slot="header" class="title">
      <span>总销售额</span>
      <el-tooltip class="item" effect="dark" content="指标数名" placement="top">
        <span class="iconfont icongantanhao"></span>
      </el-tooltip>
    </div>
    <div class="top-card-body">
        <div class="totle">￥126,560</div>
        <div class="chart-card-content">
          <div class="content-fix">
            <div>
              <span>周同比</span>
              <span> 12% </span>
              <span class="iconfont iconxiangshang" style="color:red;"></span>
            </div>
            <div>
              <span>日同比</span>
              <span> 11% </span>
              <span class="iconfont iconxiangxia" style="color:green;"></span>
            </div>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="top-card-body-bottom">日均销售额￥ 234.56</div>
    </div>
  </el-card>
</template>

<script>
    export default {

    }
</script>

<style lang="less">
@import url('./style/common.less');
</style>
