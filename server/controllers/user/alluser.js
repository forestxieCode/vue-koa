
// 接口 - 获取所有用户 
const User = require('../../dbs/models/users').Users

module.exports = async (ctx, next) => {
    try {
        let result = []
        let doc = await User.find({}) 
        doc.map((val, index) => {
          result.push({
            email: val.email,
            username: val.username,
          })
        }) 
        ctx.body = {
          code: 0,
          msg: '查找成功',
          result
        }
      } catch (err) {
        ctx.body = {
          code: -1,
          msg: '查找失败',
          result: err
        }
      }
}
