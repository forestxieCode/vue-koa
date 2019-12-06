
import request from '~/util/request'

// 保存流程图信息
export const saveFlow = (data) => request.post('/save-flow',data)


// 得到流程图信息
export const getFlowInfo = (data) => request.get('/get-flow-info',{params:data})
