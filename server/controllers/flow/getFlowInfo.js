
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
        }else {
          ctx.body = {
            code: -1,
            msg: '对不起查询不到你的流程图，请你绘制一张吧'
          }
        }
      } catch (err) {
        ctx.body = {
          code: -1,
          msg: '对不起查询不到你的流程图，请你绘制一张吧',
          result: err
        }
    }
}
