
// 接口 - 发布留言
const MessageList = require('../../dbs/models/messageList').MessageList

module.exports = async (ctx, next) => {
    const { update_time } = ctx.request.query
    try {
        await MessageList.findOneAndRemove({ update_time }) 
        ctx.body = {
            code: 0,
            msg: '删除成功',
          }
      } catch (err) {
        ctx.body = {
          code: -1,
          msg: '删除失败',
          result: err
        }
    }
}
