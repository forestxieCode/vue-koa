<template>
     <el-card class="home-tab" shadow="never">
         <div slot="header" class="home-warp">
            <div class="nav">
                <span @click="activeName='first'" :class="{'active':activeName==='first'}">销售额</span>
                <span @click="activeName='scond'" :class="{'active':activeName==='scond'}">访问量</span>
            </div>
            <div class="right">
                <ul><li>今日</li><li>本周</li><li>本月</li><li>本年</li></ul>
                 <el-date-picker
                    size="small"
                    v-model="timeStr"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>
            </div>
         </div>
             <transition
                enter-active-class="animated bounceInLeft"
                tag="div"
               >
     
                <el-row style="height:332px;" v-if="activeName==='first'" :key="1"> 
                        <el-col :span="15">
                            <histogram :isShowAxis="true"/>
                        </el-col>
                        <el-col :span="9">
                            <dl class="store">
                                <dt>门店排行</dt>
                                <dd>
                                    <span><span class="num active">1</span> 长沙臭豆腐 </span>
                                    <span>123,423 </span>   
                                </dd>
                                <dd>
                                    <span><span class="num active">2</span> 长沙臭豆腐 </span>
                                    <span>123,423 </span>   
                                </dd>
                                <dd>
                                    <span><span class="num active">3</span> 长沙臭豆腐 </span>
                                    <span>123,423 </span>   
                                </dd>
                                <dd>
                                    <span><span class="num ">4</span> 长沙臭豆腐 </span>
                                    <span>123,423 </span>   
                                </dd>
                                <dd>
                                    <span><span class="num ">5</span> 长沙臭豆腐 </span>
                                    <span>123,423 </span>   
                                </dd>
                                <dd>
                                    <span><span class="num ">6</span> 长沙臭豆腐 </span>
                                    <span>123,423 </span>   
                                </dd>
                                <dd>
                                    <span><span class="num ">7</span> 长沙臭豆腐 </span>
                                    <span>123,423 </span>   
                                </dd>
                            </dl>
                        </el-col>
                </el-row>
         
        
                <el-row style="height:332px;" v-if="activeName==='scond'" :key="2"> 
                        <el-col :span="15">
                            <histogram :isShowAxis="true"/>
                        </el-col>
                        <el-col :span="9">
                            <dl class="store">
                                <dt>门店排行</dt>
                                <dd>
                                    <span><span class="num active">1</span> 长沙臭豆腐 </span>
                                    <span>123,423 </span>   
                                </dd>
                                <dd>
                                    <span><span class="num active">2</span> 长沙臭豆腐 </span>
                                    <span>123,423 </span>   
                                </dd>
                                <dd>
                                    <span><span class="num active">3</span> 长沙臭豆腐 </span>
                                    <span>123,423 </span>   
                                </dd>
                                <dd>
                                    <span><span class="num ">4</span> 长沙臭豆腐 </span>
                                    <span>123,423 </span>   
                                </dd>
                                <dd>
                                    <span><span class="num ">5</span> 长沙臭豆腐 </span>
                                    <span>123,423 </span>   
                                </dd>
                                <dd>
                                    <span><span class="num ">6</span> 长沙臭豆腐 </span>
                                    <span>123,423 </span>   
                                </dd>
                                <dd>
                                    <span><span class="num ">7</span> 长沙臭豆腐 </span>
                                    <span>123,423 </span>   
                                </dd>
                            </dl>
                        </el-col>
                </el-row>
                
         </transition>
     </el-card>
</template>
<script>
import { histogram } from './homeEcharts'
export default {
    data(){
        return {
          activeName:'first',
          timeStr:''
        }
    },
    components:{
        histogram
    },
    methods:{
        handleClick(){
            
        },
        beforeEnter(){

        },
        enter(el, done){
            let delayNum = '.'+el.dataset.index * 100 + 's'
            el.style.animationDelay = delayNum
        }
    }
}
</script>
<style lang="less">
.home-tab{
    .el-col{
        height: 100%;
    }
    .el-card__header{
      padding-top: 13px;
      padding-bottom: 13px;
    }
    .home-warp{
        width: 100%;
        display: flex;
        .nav{
            font-size: 16px;
            color: rgba(0,0,0,.65);
            span{
                cursor: pointer;
                line-height: 32px;
                position: relative;
                margin-left: 30px;
               
                &:first-child{
                    margin-left: 0px;
                }
            }
            span.active{
                color: #fa541c;
                width:0;
            }
            span::after{
                content: '';
                width: 100%;
                transform:scale(0);
                height: 2px;
                position: absolute;
                bottom: -22px;
                left: 0;
                background-color: #fa541c;
                transition:all .2s ease-in;
                
            }
            span.active::after{
                transform-origin:center;
                transform:scale(1);
            }
            span:hover {
                color: #fa541c;
            }
        }
        .right{
            display: flex;
            margin-left: auto;
            line-height: 32px;
            ul{
                margin-right: 30px;
                display: flex;
            }
            li{
                font-size: 14px;
                color: #ff7a45;
                margin-left: 14px;
                list-style: none;
            }
            li:first-child{
                margin-left: 0;
            }
        }
    }
    .store{
        dt{
            font-size: 14px;
        }
        dd{
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            .num{
                background-color: #f5f5f5;
                border-radius: 20px;
                display: inline-block;
                font-size: 12px;
                font-weight: 600;
                margin-right: 24px;
                height: 20px;
                line-height: 20px;
                width: 20px;
                text-align: center;
            }
            .active{
                background-color: #314659;
                color: #fff;
            }
        }
    }
}
</style>