<template>
  <div class="histogram" ref="histogram" ></div>
</template>
<script>
import echarts from 'echarts'
export default {
  props:{
    value:{
      type:Array,
      default:()=>[32,32,12,42,32,12,41,23,23,21,23,21]
    },
    name:{
      type:Array,
      default:()=> ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    },
    isShowAxis:{
      type:Boolean,
      default:false
    },
    color:{
      type:Array,
      default:()=>['#1890ff','#1890ff']
    }
  },
  methods:{
    async initMychart(){
      const mychart = echarts.init(this.$refs.histogram)
      const self = this

      const option = {
          color:self.color[0],
          title: {
               text: '销售业绩排行',
               //标题样式
               textStyle: {
                   fontWeight: 'normal',
                   color: '#000',
                   fontSize:14
               },
               show:self.isShowAxis
           },
          xAxis: [
            {
              type: 'category',
              data: self.name,
              axisTick: {
                show: false
              },
              axisLine: {
                   lineStyle: {
                       color: '#666'
                   }
               },
              show:self.isShowAxis
            }
          ],
          yAxis: [{
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: '#012564'
              }
            },
            splitLine :{    //网格线
                lineStyle:{
                    type:'dashed'    //设置网格线类型 dotted：虚线   solid:实线
                },
                show:true //隐藏或显示
            },
            show:self.isShowAxis
          }],
          grid: {
            top: '16%',
            left: 3 + '%',
            right: '4%',
            bottom: '15%'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          series: [{
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
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
.histogram{
  height: 100%;
  width: 100%;
  flex: 1;
  // flex: 1;
}
</style>
