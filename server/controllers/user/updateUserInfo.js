// 更新用户信息
const User = require('../../dbs/models/users').Users

module.exports = async (ctx, next) => {
    const { username,phone,nice,desc,authorImg } = ctx.request.body

    let doc = await User.findOne({ "username":username})
    doc.phone = phone
    doc.nice = nice
    doc.desc = desc
    doc.authorImg = authorImg

    try {
        await doc.save() // 更新mongo中对应用户名的token
        ctx.body = {
          code: 0,
          msg: '更新'+username+'信息成功'
        }
      } catch (err) {
        ctx.body = {
          code: -1,
          msg: '更新失败'
        }
     }
}