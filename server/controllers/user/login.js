// 接口 - 登录

const User = require('../../dbs/models/users').Users
const createToken = require('../../token/createToken.js') // 创建token

module.exports = async (ctx, next) => {
    const { username, password } = ctx.request.body
    console.log(12,username,password)
  
    let doc = await User.findOne({ "username":username })
    if (!doc) { 
      ctx.body = {
        code: -1,
        msg: '用户名不存在'
      }
    } else if (doc.password !== password) {
      ctx.body = {
        code: -1,
        msg: '密码错误'
      }
    } else if (doc.password === password) {
      console.log('密码正确')
      let token = createToken(username) // 生成token 

      console.log('token',token)
      doc.token = token // 更新mongo中对应用户名的token
      try {
        await doc.save() // 更新mongo中对应用户名的token
        ctx.body = {
          code: 0,
          msg: '登录成功',
          username,
          token,
          email:doc.email || '',
          phone:doc.phone || '',
          nice:doc.nice || '',
          desc:doc.desc || '',
          authorImg:doc.authorImg || '',
          job:doc.job || '',
          jobDescription:doc.jobDescription || '',
          tags:doc.tags || [],
          address:doc.address || '',
          team:doc.team || [],
          project:doc.project || []
        }
      } catch (err) {
        ctx.body = {
          code: -1,
          msg: '登录失败，请重新登录'
        }
      }
    }
}
