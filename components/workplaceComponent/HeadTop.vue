<template>
   <el-row class="workplace-head-top">
      <el-col :span="10" class="header-left">
        <div>
          <img :src="userinfo.authorImg?`${$config.fileApi}${userinfo.authorImg}`:`${$config.fileApi}/uploads/default_aveter.jpg`" alt="" >
        </div>
        <div class="header-left-info">
            <div>{{getTimeText}}，{{username}}，要不要来一把LoL！</div>
            <div>{{userinfo.nice?userinfo.nice:'暂无,快去设置下' }} | {{userinfo.desc?userinfo.desc:'暂无，快去设置下'}}</div>
        </div>
      </el-col>
        <el-col :span="14">
           <div class="header-right">
             <div class="item">
               <div>项目数量</div>
               <div>{{userinfo.project.length}}</div>
             </div>
             <div class="item">
               <div>团队内排名</div>
               <div>{{userinfo.project.length}} / 100</div>
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
      'username',
      'userinfo'
     ]),
     getTimeText(){
        let timeNow = new Date();
       // 获取当前小时
       let hours = timeNow.getHours();
       let text = '';
       if (hours >= 0 && hours <= 10) {
           text = this.$t('workplace.morning');
       } else if (hours > 10 && hours <= 14) {
           text = this.$t('workplace.noon');
       } else if (hours > 14 && hours <= 18) {
           text = this.$t('workplace.afternoon');
       } else if (hours > 18 && hours <= 24) {
           text = this.$t('workplace.evening');
       }
        return text
     }
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
