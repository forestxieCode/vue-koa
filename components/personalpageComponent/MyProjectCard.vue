<template>
    <section class="my-project-card" shadow="never">
     <el-row :gutter="20">
         <el-col :span="12" v-for="(item,index) in projectArr" :key="index" style="margin-top:15px;"> 
         <el-card :body-style="{ padding: '0px' }"  >
                <div class="image-box">
                    <img src="../../assets/img/myproject/01.png" class="image">
                </div>
                <div style="padding: 14px;">
                    <span>{{item.projectName}}</span>
                    <div class="bottom clearfix">
                    <time class="time">{{ item.time | formDateTime }}</time>
                    <el-button type="text" class="button" @click="openWeb(item.projectUrl)">访问</el-button>
                    <el-button type="text" class="button" @click="eidthPro(item)">编辑</el-button>
                    </div>
                </div>
        </el-card>
         </el-col>
     </el-row>
    </section> 

</template>
<script>
import { mapGetters,mapMutations  } from 'vuex'
const moment = require('moment')
export default {
    data(){
        return {
            projectArr:[],
        }
    },
    props:['eidtHadlePro'],
    filters:{
        formDateTime(time){
             return moment(new Date(time[0])).format('YYYY-MM-DD') +'-' +moment(new Date(time[1])).format('YYYY-MM-DD')
        }
    },
    computed:{
     ...mapGetters([
      'userinfo'
     ])
    },
    mounted(){
        this.projectArr = this.userinfo.project
    },

    methods:{
        eidthPro(item){
            this.$emit('eidtHadlePro',item)
        },
        openWeb(url){
            window.open(url)
        }
    }
}
</script>
<style lang="less">
.my-project-card{
    // padding: 24px;
    zoom: 1;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    .time {
        font-size: 13px;
        color: #999;
    }
    
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
        & ~{
            margin-left: 20px;
        }
    }
    .el-col:nth-child(4n){
        margin-top: 20px;
    }

    .image-box{
        width: 100%;
        height: 320x;
    }
    .image {
        height: 100%;
        width: 100%;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    
    .clearfix:after {
        clear: both
    }
}

</style>