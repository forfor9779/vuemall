import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'


Vue.use(Vuex)

const state = {
  cartlist:[]
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,

  // mutations: {
    /* mutations的目的是修改state的状态，
      方法尽量单一，devtools才能更好地查看state的变化 */
    // addCart(state,payload){
    //   const oldProduct = null
      // 方法一
      // for(let item of state.cartlist){
      //   // 1.查找原数组中是否有该商品,如果有，将该商品取出来
      //   if(item.iid == payload.iid){
      //     // 这里是对象，使用指针修改其中一个会对另外一个产生影响
      //     oldProduct = item
      //   }
      //   // 2.判断原数组里是否有这个商品，如果没有，将商品添加进数组，并设置count属性为1
      //   if(!oldProduct){
      //     payload.count = 1
      //     state.cartlist.push(payload)
      //   }else{
      //     // 如果有这个商品，则将属性count+1
      //     oldProduct.count += 1 
      //   }
      // }

      // 方法二
      // let index = state.cartList.indexOf(payload)
      // if(index == -1) {
      //   let oldProduct = state.cartList[index]  取到原数组中对应的元素
      //   oldProduct.count += 1
      // }else{
      //   payload.count = 1
      //   state.cartList.push(payload)
      // }

      // 方法三
      // find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
    //   let oldProduct = state.cartlist.find(function (item) {
    //     return item.iid === payload.iid
    //   })
    //   if(!oldProduct){
    //     payload.count = 1
    //     state.cartlist.push(payload)
    //   }else{
    //     oldProduct.count += 1
    //   }
    // }

  //   addProduct(state,payload){
  //     state.cartlist.push(payload)
  //   },

  //   addCount(state,payload){
  //     payload.count += 1
  //   }
  // },
  // actions: {
  //   // 当一些复杂的操作比如判断之类的也要放进Actions里
  //   addCart(context,payload){
  //     let oldProduct = null
  //     oldProduct = context.state.cartlist.find(item => item.iid === payload.iid)
  //     if(!oldProduct){
  //       payload.count = 1
  //     // 将添加商品的情况分发到另一个特定的方法中，使得mutations中的方法只对应一种改变
  //       context.commit("addProduct",payload)
  //     }else{
  //       // 将数量加1的情况分发到一个特定的方法中
  //       context.commit('addCount',oldProduct)
  //       // oldProduct.count += 1
  //     }
  //   }
  // },

  modules: {
  }
})
