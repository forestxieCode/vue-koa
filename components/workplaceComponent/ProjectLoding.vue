<template>
  <el-card class="box-card-project" shadow="never">
    <div slot="header" class="clearfix">
      <span>进行中的项目</span>
      <el-button style="float: right; padding: 3px 0" type="text" >全部项目</el-button>
    </div>
    <div v-for="(item,index) in ProectList" :key="index" class="box-card-project-item item">
      <div class="cardTitle">
        <img :src="item.url" class="avatar" >
        <a href="/">{{item.name}}</a>
      </div>
      <div class="description">
        {{item.description}}
      </div>
      <div class="projectItemContent">
        <a href="/">{{item.gropName}}</a>
        <span >{{item.minus}}</span>
      </div>
    </div>
  </el-card>
</template>
<script>
 const data=[
    {
        url:'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
        name:'Alipay',
        description:'那是一种内在的东西，他们到达不了，也无法触及的',
        gropName:'科学搬砖组',
        minus:'14分钟前'
    },
   {
     url:'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
     name:'Alipay',
     description:'那是一种内在的东西，他们到达不了，也无法触及的',
     gropName:'科学搬砖组',
     minus:'14分钟前'
   },    {
     url:'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
     name:'Alipay',
     description:'那是一种内在的东西，他们到达不了，也无法触及的',
     gropName:'科学搬砖组',
     minus:'14分钟前'
   },    {
     url:'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
     name:'Alipay',
     description:'那是一种内在的东西，他们到达不了，也无法触及的',
     gropName:'科学搬砖组',
     minus:'14分钟前'
   },    {
     url:'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
     name:'Alipay',
     description:'那是一种内在的东西，他们到达不了，也无法触及的',
     gropName:'科学搬砖组',
     minus:'14分钟前'
   },    {
     url:'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
     name:'Alipay',
     description:'那是一种内在的东西，他们到达不了，也无法触及的',
     gropName:'科学搬砖组',
     minus:'14分钟前'
   }
  ]
export default {
  data(){
    return {
      ProectList:data
    }
  }
}
</script>
<style lang="less">
  .box-card-project{
    border:none;
    min-height: 48px;
    margin-bottom: -1px;
    // padding: 0 24px;
    font-weight: 500;
    font-size: 16px;
    background: 0 0;
    border-radius: 0;
    background-color: #fff;
    zoom: 1;
    overflow: visible;
    .el-card__body{
      padding: 0;
      box-sizing: border-box;
      border-left: 1px solid #e8e8e8;
      border-right: 1px solid #e8e8e8;
      display: flex;
      flex-wrap:wrap;

      .box-card-project-item{
        padding: 24px;
        width: 33.33%;
        padding: 24px;
        margin: 0;
        transition: all .3s;
        z-index: 4;
        &{
          border-right: 1px solid #e8e8e8;
          border-bottom: 1px solid #e8e8e8;
        }
        &:nth-child(3n){
          border-right: none;
        }
        &:hover{
          z-index: 6;
          box-shadow: 0 2px 8px rgba(0,0,0,.15);
        }
        .cardTitle{
          .avatar{
            width: 24px;
            height: 24px;
            border-radius: 50%;
          }
          a{
            display: inline-block;
            height: 24px;
            margin-left: 12px;
            color: rgba(0,0,0,.85);
            font-size: 14px;
            line-height: 24px;
            vertical-align: top;
          }
        }
        .description{
          height: 44px;
          overflow: hidden;
          line-height: 22px;
          font-size: 14px;
          color: rgba(0,0,0,.45);
        }
        .projectItemContent{
          display: flex;
          margin-top: 8px;
          font-size: 14px;
          justify-content: space-between;
          & a{
            display: inline-block;
            flex: 1 1;
            color: rgba(0,0,0,.45);
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            word-break: break-all;
          }
          & a:hover{
            color: #1890ff;
          }
          & span{
            color: rgba(0,0,0,.25);
          }
        }
      }

    }
  }
</style>
