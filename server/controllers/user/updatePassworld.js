// 更新用户信息
const User = require('../../dbs/models/users').Users

module.exports = async (ctx, next) => {
    const { username,newPassword,oldPassword } = ctx.request.body
    let doc = await User.findOne({ "username":username})

    if(doc.password === oldPassword){
        doc.password = newPassword
        try {
            await doc.save() // 更新mongo中对应用户名的token
            ctx.body = {
                code: 0,
                msg: '更新成功'
            } 
          } catch (err) {
            ctx.body = {
              code: -1,
              msg: '更新失败'
            }
         }
    }else {
        ctx.body = {
            code: -1,
            msg: '旧密码错误'
        } 
    }
}