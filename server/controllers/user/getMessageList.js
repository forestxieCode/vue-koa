
// 接口 - 发布留言
const MessageList = require('../../dbs/models/messageList').MessageList

module.exports = async (ctx, next) => {
    const { username } = ctx.request.query
    let obj = {}
    if(username){
      obj.username = username
    }
    try {
        let doc = await MessageList.find(obj) 
        ctx.body = {
          code: 0,
          msg: '',
          data:doc
        }
      } catch (err) {
        ctx.body = {
          code: -1,
          msg: '获取失败',
          result: err
        }
    }
}
