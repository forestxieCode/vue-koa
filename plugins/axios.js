import { Message } from 'element-ui' 
export default function({ $axios, redirect }) {
    $axios.onResponse(response=>{
        const res = response.data //res is my own data
        if (res.code === 0) {
            return res
        } else if(response.config.url!=='/api/api/upload') {
            Message({
                message: res.msg || 'Error',
                type: 'error',
                duration: 2 * 1000
            })
        }
    })
    $axios.onRequest(req=>{
        req.headers.Authorization = sessionStorage.getItem('token')
    })
    $axios.onError(error=>{
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        if(error.message === 'Request failed with status code 401'){
            redirect('/')
        }
        return Promise.reject(error)
    })
}