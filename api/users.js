import request from '~/util/request'

export const test = () => request.get('/json')

//发送验证码
export const sendVerify = (data) => request.post('/verify',data)

//注册用户
export const register = (data) => request.post('/register',data)

// 用户登入
export const login = (data) => request.post('/login',data)




