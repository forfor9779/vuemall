import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false  // 阻止Vue生成生产提示
// 解决移动端300ms的延迟
FastClick.attach(document.body)
Vue.use(VueLazyLoad)

Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
