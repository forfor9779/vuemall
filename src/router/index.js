import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件 懒加载
const home = () => import('@/views/home/Home.vue')
const category = () => import('@/views/category/Category.vue')
const shopcart = () => import('@/views/shopcart/ShopCart.vue')
const profile = () => import('@/views/profile/Profile.vue')

// 1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 3.配置路由和组件之间的映射关系
const routes = [
  // 设置用户进入该网站时默认为主页
  {
    path:'/',
    // redirect 重定向
    redirect:'/home'
  },
  {
    path:'/home',
    component:home
  },
  {
    path:'/category',
    component:category
  },
  {
    path:'/shopcart',
    component:shopcart
  },
  {
    path:'/profile',
    component:profile
  }
]

// 2.创建VueRouter对象
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 4.导出router
export default router
