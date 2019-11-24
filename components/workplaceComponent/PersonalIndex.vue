<template>
  <el-card class="personal-index" shadow="never">
    <div slot="header" class="clearfix">
      <span>个人指数</span>
    </div>
    <div class="personal-index-contect">
        <div ref="personalEchart" style="width:100%;height: 360px;"></div>
        <div class="personalEchartInfo">
          <div class="item">
            <div>技能总数</div>
            <div>6</div>
          </div>
          <div class="item">
            <div>擅长</div>
            <div>4</div>
          </div>
          <div class="item">
            <div>综合</div>
            <div>良好</div>
          </div>
        </div>
    </div>
  </el-card>
</template>
<script>

  var itemArr = [75, 80, 60, 70, 80, 80];   //数据数组

  var n1 = [75, '', '', '', '', '']
  var n2 = ['', 80, '', '', '', '']
  var n3 = ['', '', 60, '', '', '']
  var n4 = ['', '', '', 70, '', '']
  var n5 = ['', '', '', '', 80, '']
  var n6 = ['', '', '', '', '', 80]
  var n7 = ['', '', '', '', '', '']
  var labelArr = ['Nodejs', 'Vue', 'React', 'javascript', 'html', 'Css'] //显示图例用
  const option = {
    legend: {
      orient: 'vertical',
      left: '400px',
      bottom: '450',
      icon: 'circle',
      data: labelArr,
      textStyle: {
        color: '#000000'
      }
    },
    radar: [
      {
        splitLine: {
          lineStyle: {
            color: '#000'
          }
        }
      },
      {
        indicator: [  //绘制总的图形
          {text: 'Nodejs', max: 100},
          {text: 'Vue', max: 100},
          {text: 'React', max: 100},
          {text: 'javascript', max: 100},
          {text: 'html', max: 100},
          {text: 'Css', max: 100},
        ],
        nameGap: 6,
        center: ['50%', '50%'],
        radius: 105,
        name: {
          textStyle: {
            color: '#000',
            fontSize: 14,
            fontWeight: 400,
          }
        },
        splitArea: {
          areaStyle: {
            color: ['none', 'none', 'none','none', 'none'],
          }
        },
        axisLine: {
          lineStyle: {
            color: '#cde6f5'
          },
        },
        splitLine: {
          lineStyle: {
            color: '#cde6f5' //网格的颜色
          },
        }
      }
    ],
    series: [
      {
        type: 'radar', //绘制总的图形不设置拐点
        radarIndex: 1,
        data: [
          {
            value: itemArr ,
            symbolSize: 7,
            lineStyle: {
              width: 2,
              color: '#29B8FF'
            },
            areaStyle: {
              normal: {
                opacity: 0.75,
                color: '#f8f7f7'
              }
            }
          }
        ],
        itemStyle: {
          normal: {
            borderWidth: 0,
            color: '#000',
            // show:false
          }
        },
        silent: true,
        z: 1 //图层是一层一层叠加，所以这个也是一级一级递增
      },
      {
        type: 'radar', //绘制第一个点
        radarIndex: 1,
        name: labelArr[0],
        silent: true,
        z: 2, //图层是一层一层叠加，所以这个也是一级一级递增
        data: [
          {
            value: n1,
            symbolSize: 7,
          }
        ],
        itemStyle: {
          normal: {
            borderWidth: 2,
            color: '#A66CFE'
          }
        },
        lineStyle: {
          width: 0,
          labelLine: {
            show: false   //隐藏标示线
          }
        }
      },
      {
        type: 'radar',
        radarIndex: 1, //绘制第二个点
        name: labelArr[1],
        silent: true,
        z: 3, //图层是一层一层叠加，所以这个也是一级一级递增
        data: [
          {
            value: n2,
            symbolSize: 7,
          }
        ],
        itemStyle: {
          normal: {
            borderWidth: 2,
            color: '#FFA662'
          }
        },
        lineStyle: {
          width: 0,
          labelLine: {
            show: false   //隐藏标示线
          }
        },

      },
      {
        type: 'radar', //绘制第三个点
        radarIndex: 1,
        name: labelArr[2],
        silent: true,
        z: 4, //图层是一层一层叠加，所以这个也是一级一级递增
        data: [
          {
            value: n3,
            symbolSize: 7,
          }
        ],
        itemStyle: {
          normal: {
            borderWidth: 2,
            color: '#5AA4FB'
          }
        },
        lineStyle: {
          width: 0,
          labelLine: {
            show: false   //隐藏标示线
          }
        },

      },
      {
        type: 'radar', //绘制第四个点
        radarIndex: 1,
        name: labelArr[3],
        silent: true,
        z: 5, //图层是一层一层叠加，所以这个也是一级一级递增
        data: [
          {
            value: n4,
            symbolSize: 7,
          }
        ],
        itemStyle: {
          normal: {
            borderWidth: 2,
            color: '#FF858B'
          }
        },
        lineStyle: {
          width: 0,
          labelLine: {
            show: false   //隐藏标示线
          }
        },

      },
      {
        type: 'radar', //绘制第五个点
        radarIndex: 1,
        name: labelArr[4],
        silent: true,
        z: 6, //图层是一层一层叠加，所以这个也是一级一级递增
        data: [
          {
            value: n5,
            symbolSize: 7,
          }
        ],
        itemStyle: {
          normal: {
            borderWidth: 2,
            color: '#7AF16F'
          }
        },
        lineStyle: {
          width: 0,
          labelLine: {
            show: false   //隐藏标示线
          }
        },

      },
      {
        type: 'radar', //绘制第六个点
        radarIndex: 1,
        name: labelArr[5],
        silent: true,
        z: 7, //图层是一层一层叠加，所以这个也是一级一级递增
        data: [
          {
            value: n6,
            symbolSize:7,
          }
        ],
        itemStyle: {
          normal: {
            borderWidth: 2,
            color: '#33A7BF'
          }
        },
        lineStyle: {
          width: 0,
          labelLine: {
            show: false   //隐藏标示线
          }
        },

      },
      {
        type: 'radar', //这个图层是为了盖住圆心，如果去掉，圆心的颜色为最后一个图层的颜色（不信就自己试试）
        radarIndex: 1,
        name: '',
        silent: true,
        z: 8, //图层是一层一层叠加，所以这个也是一级一级递增
        data: [
          {
            value: n7,
            symbolSize: 7,
          }
        ],
        itemStyle: {
          normal: {
            borderWidth: 2,
            color: '#f8f7f7'
          }
        },
        lineStyle: {
          width: 0,
          labelLine: {
            show: false   //隐藏标示线
          }
        },

      },
    ]
  }


  export default{
    data(){
      return {
        myChart:null
      }
    },
    props:['isCollapse'],
    mounted(){
      // 绑定监听事件
      console.log(this.FatchisCollapse)
      this.echartInit()
      window.addEventListener('resize', this.resizeHandler)
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.resizeHandler)
        // 销毁 Echarts 实例
      this.myChart.dispose()
      this.myChart = null
    },
    methods:{
      echartInit(){
        this.myChart = this.$echarts.init(this.$refs.personalEchart)
        this.myChart.setOption(option)
      },
      resizeHandler() {
        this.myChart.resize()
      }
    }
  }
</script>
<style lang="less">
  .personal-index{
    .personalEchartInfo{
      display: flex;
      justify-content: space-around;
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
