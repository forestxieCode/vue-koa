<template>
  <div class="circular" ref="circular"></div>
</template>
<script>
import echarts from 'echarts'
export default {
  props:{
    value:{
      type:Array,
      default:()=>[{
            value: 110,
            name: '部署成功数',
            itemStyle: {
                normal:{ color: '#4ecb73'}
            }
        }, {
            value: 222,
            name: '检测失败数',
            itemStyle: {
                 normal:{ color: '#f2637b'}
               

            }
        }, {
            value: 113,
            name: '匹配失败数',
            itemStyle: {
                 normal:{ color: '#975fe5'}
               
            }
        }, {
            value: 122,
            name: '部署失败数',
            itemStyle: {
                normal:{ color: '#3aa1ff'}
               

            }
        }, {
            value: 132,
            name: '核查失败数',
            itemStyle: {
                normal:{ color: '#fbd437'}
               

                    }
                }]
    },
    name:{
      type:Array,
      default:()=> []
    },
    color:{
      type:Array,
      default:()=>['#1890ff','#1890ff']
    }
  },
  methods:{
    async initMychart(){
      const mychart = echarts.init(this.$refs.circular)
      const self = this

      const option = {
                legend:{
                    position:'bottom',
                    y:'bottom',
                    padding: 0,
                },
                tooltip: {
                    show: true,
                    trigger: 'item',
                    formatter: "{b}：{c}个<br/>占比：({d}%)"
                },
                   // 位置
                grid: {
                  top: '0',
                  left: 0 + '%',
                  right: '0',
                  bottom: '0'
                },
                series: [{
                    itemStyle: { //图形样式
                        normal: {
                            borderColor: '#ffffff',
                            borderWidth: 4,
                        },
                    },
                    type: 'pie',
                    stillShowZeroSum: true,
                    radius: ['60%', '90%'],
                    label: {
                        normal: {
                            position: 'inner',
                            show:false,
                            textStyle: {
                                color: '#fff',
                                fontSize: 12
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:self.value
                }]
        };
        mychart.setOption(option,true)  
    }
  },
  mounted(){
    this.initMychart()
  }
}
</script>
<style lang="less">
.circular{
  width: 100%;
  height: 100%;
  flex: 1;
  z-index: 99;
}
</style>
