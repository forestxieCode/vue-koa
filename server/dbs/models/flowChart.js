// FlowChart 模型
const mongoose = require('mongoose')

const Schema = mongoose.Schema
const FlowChartSchema = new Schema({
  // 用户名
  username: {
    type: String,
    required: true
  },
   // 流程图信息
  flowInfo:{
    type: Array,
    required: true
  },
  //线
  lineList:{
    type: Array,
    required: true
  },
  // 各个节点
  nodeList:{
    type: Array,
    required: true
  }
})

module.exports = {
    FlowChart: mongoose.model('FlowChart', FlowChartSchema)
}