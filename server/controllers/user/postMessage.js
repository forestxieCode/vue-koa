
// 接口 - 发布留言
const MessageList = require('../../dbs/models/messageList').MessageList
const User = require('../../dbs/models/users').Users

module.exports = async (ctx, next) => {
    const { username,message} = ctx.request.body
    try {
        let doc = await User.findOne({ "username":username }) 
        const newMessage = await MessageList.create({
            username,
            message,
            authorImg:doc.authorImg
        })

        if (newMessage) {
            ctx.body = {
              code: 0,
              msg: '发布成功',
            }
         } else {
            ctx.body = {
              code: -1,
              msg: '发布失败'
            }
         }
      } catch (err) {
        ctx.body = {
          code: -1,
          msg: '操作失败',
          result: err
        }
    }
}
