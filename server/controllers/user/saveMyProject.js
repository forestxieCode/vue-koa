// 更新用户信息
const User = require('../../dbs/models/users').Users

module.exports = async (ctx, next) => {
    const { username,project } = ctx.request.body

    console.log(username,project)
    let doc = await User.findOne({ "username":username})
    doc.project = project
    

    try {
        await doc.save() 
        ctx.body = {
          code: 0,
          msg: '保存成功'
        }
      } catch (err) {
        ctx.body = {
          code: -1,
          msg: '更新失败'
        }
     }
}