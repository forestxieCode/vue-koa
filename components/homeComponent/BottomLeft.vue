<template>
   <el-card class="bottom-left" shadow="never">
    <div slot="header" class="bottom-left-header">
      <span>线上热门搜索</span>
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
    <div class="bottom-left-contect">
        <el-row :gutter="40">
            <el-col :span="12">
                <div>
                    <span>运营活动效果</span>
                    <el-tooltip class="item" effect="dark" content="指标数名" placement="top">
                        <span class="iconfont icongantanhao"></span>
                    </el-tooltip>
                </div>
                <div style="margin-top:10px;">
                    <span class="index">12332</span>
                    <span>17.1 <span class="iconfont iconxiangshang" ></span></span>
                </div>
                <arealine style="height:46px;width:100%;"/>
            </el-col>
             <el-col :span="12">
                <div>
                    <span>人均搜索次数</span>
                    <el-tooltip class="item" effect="dark" content="指标数名" placement="top">
                        <span class="iconfont icongantanhao"></span>
                    </el-tooltip>
                </div>
                <div style="margin-top:10px;">
                    <span class="index">2.7</span>
                    <span>26.7 <span class="iconfont iconxiangshang" ></span></span>
                </div>
                <arealine style="height:46px;width:100%;"/>
            </el-col>
            <el-col :span="24" style="margin-top:20px;">
                 <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                    <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="地址">
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </div>
  </el-card>
</template>
<script>
import { arealine } from './homeEcharts'
export default {
    methods:{
        handleCommand(){}
    },
    data(){
        return{
            tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
            }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
            },
            {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
            },
            {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
            }]
         }
    },
    components:{
        arealine
    }
}
</script>
<style lang="less">
.bottom-left{
    height: 542px;
    .el-card__header{
      padding-top: 13px;
      padding-bottom: 13px;
    }
    .bottom-left-header{
        display: flex;
        justify-content: space-between;
        .dropdown-link{
            cursor: pointer;
            font-size: 20px;
            color: #ff7a45;
        }
    }
    .bottom-left-contect{
         color: rgba(0,0,0,.65);
        .index_num{
            margin-top: 30px;
        }
        .index{
            color: #000;
            margin-right: 15px;
            font-size: 20px;
            font-variant: tabular-nums;
        }
    }
}
</style>