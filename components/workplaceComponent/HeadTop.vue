<template>
   <el-row class="workplace-head-top">
      <el-col :span="10" class="header-left">
        <div>
          <img src="~/assets/img/avtor.jpg" alt="" >
        </div>
        <div class="header-left-info">
            <div>早安，{{username}}，祝你开心每一天！</div>
            <div>交互专家 |蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</div>
        </div>
      </el-col>
        <el-col :span="14">
           <div class="header-right">
             <div class="item">
               <div>项目数量</div>
               <div>56</div>
             </div>
             <div class="item">
               <div>团队内排名</div>
               <div>8/ 24</div>
             </div>
             <div class="item">
               <div>项目访问</div>
               <div>2,223</div>
             </div>
           </div>
       </el-col>
    </el-row>
</template>
<script>
import { mapGetters  } from 'vuex'
export default {
    computed:{
     ...mapGetters([
      'username'
     ])
  }
}
</script>
<style lang="less">
 .workplace-head-top{
    .header-left{
        margin-top: 10px;
        display: flex;
        img{
          height: 72px;
          width: 72px;
          border-radius: 50%;
        }
        .header-left-info{
          position: relative;
          top: 4px;
          flex: 1 1 auto;
          margin-left: 24px;
          color: rgba(0,0,0,.45);
          line-height: 22px;
          & div:first-child{
            margin-bottom: 12px;
            color: rgba(0,0,0,.85);
            font-weight: 500;
            font-size: 20px;
            line-height: 28px;
          }
        }
    }
    .header-right{
      display: flex;
      justify-content: flex-end;
      .item{
        position: relative;
        padding: 0 25px;
        div:first-child{
          margin-bottom: 4px;
          color: rgba(0,0,0,.45);
          font-size: 14px;
        }
        div:last-child{
          text-align: center;
          color: rgba(0,0,0,.85);
          font-size: 24px;
        }
        &::before{
         content: '';
         right: 0;
         top: 0px;
         height: 100%;
         width: 1px;
         position: absolute;
         height: 100%;
         background-color: #e8e8e8;
        }
        &:last-child::before{
          content: '';
          width: 0px;
          background-color:transparent;
        }
      }
    }
  }
</style>
