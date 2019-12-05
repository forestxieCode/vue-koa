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

module.exports = router
