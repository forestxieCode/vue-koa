// FlowChart 模型
const mongoose = require('mongoose')

const Schema = mongoose.Schema
const FlowChartSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  flowInfo:{
    type: Object,
    required: true
  },
  lineList:{
    type: Array,
    required: true
  },
  nodeList:{
    type: Array,
    required: true
  }
})

module.exports = {
    FlowChart: mongoose.model('FlowChart', FlowChartSchema)
}