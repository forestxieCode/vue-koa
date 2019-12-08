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

// 更新用户密码
export const updatePassworld = (data) => request.post('/update-passworld',data)

// 发布留言
export const postMessage = (data) => request.post('/post-message',data)

// 得到留言 列表
export const getMessageList = (data) => request.get('/get-message-list',{params:data})

// 删除留言
export const deleteMessage = (data) => request.get('/delete-message',{params:data})

// 保存自己的项目
export const saveMyProject = (data) => request.post('/save-my-project',data)




