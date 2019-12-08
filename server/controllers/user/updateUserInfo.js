// 更新用户信息
const User = require('../../dbs/models/users').Users

module.exports = async (ctx, next) => {
    const { username,phone,nice,desc,authorImg,job,jobDescription,tags,address,team } = ctx.request.body

    let doc = await User.findOne({ "username":username})
    doc.phone = phone
    doc.nice = nice
    doc.desc = desc
    doc.authorImg = authorImg
    doc.job = job
    doc.jobDescription = jobDescription
    doc.tags = tags
    doc.address = address
    doc.team = team

    try {
        await doc.save() 
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