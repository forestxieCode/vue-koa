<template>
 <el-card class="bottom-right" shadow="never">
    <div slot="header" class="bottom-right-header">
      <span>销售额类占比</span>
      <div>
          <el-radio-group v-model="radio3" size="small">
                <el-radio-button label="全部渠道"></el-radio-button>
                <el-radio-button label="线上"></el-radio-button>
                <el-radio-button label="门店"></el-radio-button>
          </el-radio-group>
          <el-dropdown @command="handleCommand">
            <span class="dropdown-link">
                ...
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">任务一</el-dropdown-item>
                <el-dropdown-item command="b">任务二</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
   </div>
    <div class="bottom-right-contect">
        <circular/>
    </div>
 </el-card>   
</template>
<script>
import { circular } from './homeEcharts'
export default {
    data(){
      return {
        radio3:'全部渠道'
      }
    },
    methods:{
      handleCommand(){}
    },
    components:{
      circular
    }
}
</script>
<style lang="less">
.bottom-right{
    height: 542px;
    .el-card__header{
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .bottom-right-header{
      display: flex;
      justify-content: space-between;
        .dropdown-link{
            cursor: pointer;
            font-size: 20px;
            color: #ff7a45;
        }
    }
    .el-card__body{
      flex: 1;
      height: 90%;
    }
    .bottom-right-contect{
      flex: 1;
      height: 95%;
    }
}
</style>