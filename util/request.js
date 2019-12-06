/**
 * 封装Axios
 * 处理请求、响应错误信息
 */
import { Message } from 'element-ui'  //引用饿了么UI消息组件
import axios from 'axios' //引用axios

// create an axios instance
const service = axios.create({
  baseURL: '/api/', // 所有异步请求都加上/api,nginx转发到后端Springboot
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // config.headers['-Token'] = getToken()
    config.headers.Authorization = sessionStorage.getItem('token')
    
    return config
  },
 
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data //res is my own data
    if (res.code === 0) {
    // do somethings when response success
    //   Message({
    //     message: res.message || '操作成功',
    //     type: 'success',
    //     duration: 1 * 1000
    //   })
      return res
    } else {
      // if the custom code is not 200000, it is judged as an error.
      
      
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 2 * 1000
      })
      return Promise.reject(new Error(res.msg || 'Error'))
    }
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    if(error.message === 'Request failed with status code 401'){
      window.location.href="/"
    }
  
    return Promise.reject(error)
  }
)

export default service //导出封装后的axios