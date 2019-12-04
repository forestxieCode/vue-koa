// 接口 - 注册

const Redis = require('koa-redis') // key-value存储系统, 存储用户名，验证每个用户名对应的验证码是否正确

const User = require('../../dbs/models/users').Users

// 创建和验证token,
const createToken = require('../../token/createToken.js') // 创建token

// 获取redis的客户端
const Store = new Redis().client

module.exports = async (ctx, next) => {
    const { username, password, email, code } = ctx.request.body

    // 验证验证码
    if (code) {
      const saveCode = await Store.hget(`nodemail:${username}`, 'code') // 拿到已存储的真实的验证码
      const saveExpire = await Store.hget(`nodemail:${username}`, 'expire') // 过期时间
  
      console.log(ctx.request.body)
      console.log('redis中保存的验证码：', saveCode)
      console.log('当前时间:', new Date().getTime())
      console.log('过期时间：', saveExpire)
  
      // 用户提交的验证码是否等于已存的验证码
      if (code.toLowerCase() === saveCode.toLowerCase()) {
        if (new Date().getTime() - saveExpire > 0) {
          ctx.body = {
            code: -1,
            msg: '验证码已过期，请重新申请'
          }
          return
        }
      } else {
        ctx.body = {
          code: -1,
          msg: '请填写正确的验证码'
        }
        return
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '请填写验证码'
      }
      return
    }
  
    // 用户名是否已经被注册
    const user = await User.find({ username })
    if (user.length) {
      ctx.body = {
        code: -1,
        msg: '该用户名已被注册'
      }
      return
    }
    // 如果用户名未被注册，则写入数据库
    const newUser = await User.create({
      username,
      password,
      email,
      token: createToken(this.username) // 生成一个token 存入数据库
    })
  
    // 如果用户名被成功写入数据库，则返回注册成功
    if (newUser) {
      ctx.body = {
        code: 0,
        msg: '注册成功',
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '注册失败'
      }
    }
}
