import { request } from './request'

// home页面会有很多请求，所以每一个请求都需要封装成一个函数
export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}