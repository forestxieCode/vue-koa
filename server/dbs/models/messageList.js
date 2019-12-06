// MessageList 模型
const mongoose = require('mongoose')
const moment = require('moment')

const Schema = mongoose.Schema
const MessageListSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  message:{
    type: String,
    required: true
  },
  authorImg:{
    type: String,
  },
  update_time:{
    type:String,
    default:moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
  },
})

module.exports = {
  MessageList: mongoose.model('MessageList', MessageListSchema)
}