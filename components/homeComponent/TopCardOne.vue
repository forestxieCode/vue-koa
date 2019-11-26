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
  .top-card{
    .el-card__header{
      padding: 10px 20px 5px;
      border-bottom: none;
      color: rgba(0,0,0,.45);
      font-size: 14px;
      line-height: 22px;
      .title{
        display: flex;
        justify-content: space-between;
      }
    }
    .el-card__body{
      padding: 13px;
      padding-top: 0px;
      .totle{
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        white-space: nowrap;
        color: #000;
        margin-bottom: 0;
        font-size: 30px;
        line-height: 38px;
      }
      .chart-card-content{
        margin-bottom: 12px;
        position: relative;
        height: 46px;
        width: 100%;
        .content-fix{
          position: absolute;
          left: 0;
          display: flex;
          bottom: 0;
          font-size: 14px;
          width: 100%;
          & div:last-child{
            margin-left: 20px;
          }
        }
      }
    }
    .el-divider--horizontal{
      margin: 10px 0;
    }
    .top-card-body-bottom{
      color: rgba(0,0,0,.65);
      font-size: 14px;
      font-variant: tabular-nums;
      line-height: 1.5;
      list-style: none;
    }
  }
</style>
