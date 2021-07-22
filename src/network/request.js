// 网络请求

// 1.导入axios实例
import axios from 'axios'

// 2.封装axios实例,config传进来的函数
export function request(config) {
  const instance = axios.create({
    baseURL:'http://106.54.54.237:8000/api/mn',
    timeout:5000
  })

  // 2.1请求拦截应用
  instance.interceptors.request.use(config => {
    // 请求成功拦截

    // 必须return config 出去
    return config
  },err => {
    // 请求失败拦截

  })

  // 2.2响应拦截应用
  instance.interceptors.response.use(res => {
    // 响应成功拦截
    return res.data
  }, err => {
    // 响应失败拦截
    console.log(err);
  })

  // 3.直接return请求结果，因为axios.create本身就时返回了一个Promise
  return instance(config)
}