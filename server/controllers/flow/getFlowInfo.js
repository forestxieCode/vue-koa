
// 接口 - 保存流程图数据
const flowChart = require('../../dbs/models/flowChart').FlowChart

module.exports = async (ctx, next) => {
    const { username } = ctx.request.query
    try {
        let doc = await flowChart.findOne({ username }) 
        if(doc){
            ctx.body = {
                code: 0,
                data:doc
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
