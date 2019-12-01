<template>
  <div class="arealine" ref="arealine"></div>
</template>
<script>
import echarts from 'echarts'
export default {
  props:{
    value:{
      type:Array,
      default:()=>[200,50,300,150,250]
    },
    name:{
      type:Array,
      default:()=> ['2019-12-1','2019-12-2','2019-12-3','2019-12-4','2019-12-5']
    },
    color:{
      type:Array,
      default:()=>['#1890ff','#1890ff']
    }
  },
  methods:{
    async initMychart(){
      const mychart = echarts.init(this.$refs.arealine)
      const self = this

      const option = {
          color:self.color[0],
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: self.name,
              show:false,
          },
          yAxis: {
              type: 'value',
              show:false,
          },
          // 位置
          grid: {
            top: '0',
            left: 0 + '%',
            right: '0',
            bottom: '0'
          },
          tooltip: {
              trigger: 'axis',
              formatter: function (params) {
                  return params[0].name + ' ' + params[0].value +'人'
              },
              axisPointer: {
                  animation: false
              }
          },
          series: [{
              name:'折现图',
              showSymbol: false,
              hoverAnimation: false,
              data: self.value,
              type: 'line',
              smooth: true,
              itemStyle : {  
                normal : {  
                 lineStyle:{  
                    // color:'#1890ff',   
                  }
                }
              },
              areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: self.color[0]
                      }, {
                          offset: 1,
                          color: self.color[1]
                  }])
              },
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
.arealine{
  width: 100%;
  height: 100%;
  flex: 1;
  z-index: 99;
}
</style>
