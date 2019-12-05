import request from '~/util/request'

export const test = () => request.get('/json')

//发送验证码
export const sendVerify = (data) => request.post('/verify',data)

//注册用户
export const register = (data) => request.post('/register',data)

// 用户登入
export const login = (data) => request.post('/login',data)

// 更新用户信息
export const updateUserInfo = (data) => request.post('/update-user-info',data)

// 得到用户信息
export const getUserInfo = (data) => request.get('/get-user-info',{params:data})



