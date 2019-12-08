// users模型
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone:{
    type: String
  },
  //职业
  job:{
    type: String
  },
  // 职业描述
  jobDescription:{
    type: String
  },
  // 个人标签
  tags:{
    type:Array
  },
  // 居住地址
  address:{
    type: String
  },
  //个人项目
  project:{
    type:Array
  },
  // 团队
  team:{
    type: Array
  },
  nice:{
    type: String,
  },
  //个人简介
  desc:{
    type: String,
  },
  //头像
  authorImg:{
    type: String,
  },
  token: {
    type: String,
    required: true
  }
})

module.exports = {
  Users: mongoose.model('User', UserSchema)
}