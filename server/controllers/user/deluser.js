// 接口 - 删除用户
const User = require('../../dbs/models/users').Users

module.exports = async (ctx, next) => {
    const { username } = ctx.request.body

    try {
      await User.findOneAndRemove({username: username})
      ctx.body = {
        code: 0,
        msg: '删除成功',
      }
    } catch (err) {
      ctx.body = {
        code: -1,
        msg: '删除失败',
      }
    }
}
