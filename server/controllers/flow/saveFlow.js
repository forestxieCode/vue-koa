
// 接口 - 保存流程图数据
const flowChart = require('../../dbs/models/flowChart').FlowChart

module.exports = async (ctx, next) => {
    const { username,flowInfo,lineList,nodeList } = ctx.request.body
    try {
        let doc = await flowChart.findOne({ "username":username }) 
        if(doc){
            doc.flowInfo = flowInfo
            doc.lineList = lineList
            doc.nodeList = nodeList 
            await doc.save()
            ctx.body = {
                code: 0,
                msg: '更新成功'
            }
        } else {
            const FlowChart = await flowChart.create({
                "username":username,
                "flowInfo":flowInfo,
                "lineList":lineList,
                "nodeList":nodeList // 生成一个token 存入数据库
            })
            if(FlowChart){
                ctx.body = {
                    code: 0,
                    msg: '创建成功'
                }
            }else {
                ctx.body = {
                    code: -1,
                    msg: '创建失败'
                } 
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
