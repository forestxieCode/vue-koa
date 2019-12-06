const Router = require('koa-router')

const upload = require('../utils/storage')
const checkToken = require('../token/checkToken.js') // 验证token

const controllers = require('../controllers')

// 创建路由对象
const router = new Router({
  prefix: '/api' // 接口的统一前缀
})


// 发送验证码 的接口
router.post('/verify', controllers.user.verify)

// 接口 - 注册
router.post('/register', controllers.user.register)

// 接口 - 登录
router.post('/login', controllers.user.login)

// 接口 - 获取所有用户 需要验证 token
router.post('/alluser',checkToken, controllers.user.alluser)

// 接口 - 删除用户 需要验证 token
router.post('/deluser',checkToken, controllers.user.deluser)

// 上传图片 需要验证 token
router.post('/upload',upload.single('file'),controllers.upload)

// 更新用户信息 需要验证 token
router.post('/update-user-info',checkToken,controllers.user.updateUserInfo)

// 获取用户信息 需要验证 token
router.get('/get-user-info',checkToken,controllers.user.getUserInfo)

//更新用户 密码 需要验证 token
router.post('/update-passworld',checkToken,controllers.user.updatePassworld)

//发布留言 需要验证 token
router.post('/post-message',checkToken,controllers.user.postMessage)

// 获取留言列表 
router.get('/get-message-list',checkToken,controllers.user.getMessageList)

// 删除留言
router.get('/delete-message',checkToken,controllers.user.deleteMessage)

//保存 更新流程图信息 需要验证 token
router.post('/save-flow',checkToken,controllers.flow.saveFlow)

//获取流程图的信息
router.get('/get-flow-info',checkToken,controllers.flow.getFlowInfo)


module.exports = router
