<template>
  <div class="progress" ref="progress"></div>
</template>
<script>
import echarts from 'echarts'
export default {
  props:{
    value:{
      type:Array,
      default:()=>[120]
    },
    name:{
      type:Array,
      default:()=> ['全年目标']
    },
    total:{
        type:Number,
        default:200
    },
    color:{
      type:Array,
      default:()=>['#1890ff','#1890ff']
    }
  },
  methods:{
    async initMychart(){
      const mychart = echarts.init(this.$refs.progress)
      const self = this

      const option = {
            grid: {
                top: '0',
                left: '0',
                right: '0%',
                bottom: '0',
                containLabel: true
            },
            yAxis: [{
                type: 'category',
                data: self.name,
                inverse: true,
                axisTick: {
                 show: false
                },
                axisLabel: {
                margin: 20,
                 show: false
                },
                axisLine: {
                 show: false
                }
            }],
            xAxis: [{
                type: 'value',
                axisLabel: {
                 show: false
                },
                axisLine: {
                 show: false
                },
                splitLine: {
                 show: false
                }
            }],
            series: [{
                type: 'bar',
                barWidth: 14,
                data: self.value,
                itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: self.color[0] // 0% 处的颜色
                    }, {
                    offset: 1,
                    color: self.color[1] // 100% 处的颜色
                    }], false)
                }
                }
            }, {
                type: "bar",
                barWidth: 14,
                xAxisIndex: 0,
                barGap: "-100%",
                data: [self.total],
                itemStyle: {
                normal: {
                    color: "#ccc",
                }
                },
                zlevel: -1
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
.progress{
  width: 100%;
  height: 100%;
  flex: 1;
  z-index: 99;
}
</style>
