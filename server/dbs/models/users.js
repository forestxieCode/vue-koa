// users模型，包括四个字段
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
    type: String,
  },
  nice:{
    type: String,
  },
  desc:{
    type: String,
  },
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