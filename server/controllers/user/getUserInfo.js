// 更新用户信息
const User = require('../../dbs/models/users').Users

module.exports = async (ctx, next) => {
    const { username } = ctx.request.query
    let doc = await User.findOne({ "username":username})

    if (!doc) { 
        ctx.body = {
          code: -1,
          msg: '没有查询到该用户'
        }
      } else {

        ctx.body = {
            code: 0,
            data: {
                authorImg:doc.authorImg||'',
                desc:doc.desc||'',
                email:doc.email,
                nice:doc.nice||'',
                phone:doc.phone||'',
                token:doc.token,
                username:doc.username, 
                job:doc.job || '',
                jobDescription:doc.jobDescription || '',
                tags:doc.tags || [],
                address:doc.address || '',
                team:doc.team || [],
                project:doc.project || [],
            }
         }
      }
}
