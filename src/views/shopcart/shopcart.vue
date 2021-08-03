<template lang="">
  <div class="shop-cart">
    <nav-bar class="shop-cart-nav">
      <div slot='center'>购物车({{cartLength}})</div>
    </nav-bar>
    <Scroll class="content" ref="scroll">
      <CartList></CartList>
    </Scroll>
    <CartBottom class="cart-bottom"></CartBottom>

  </div>
</template>
<script>
  import NavBar from '@/components/common/navbar/NavBar.vue'
  import Scroll from '@/components/common/scroll/Scroll.vue'

  import CartList from "./childComps/CartList.vue"
  import CartBottom from './childComps/CartBottom.vue'
  import {mapGetters} from 'vuex' // 可以将方法解构

export default {
  name:'ShopCart',
  components:{
    NavBar,
    Scroll,

    CartList,
    CartBottom
  },
  activated() {
    // 由于添加商品前，购物车的滚动的高度是没有的，所以在每次进入购物车的时候，要刷新一次页面的高度
    this.$refs.scroll.refresh()
  },
  computed:{
    // 1.普通写法
    // cartLength(){
    //   return this.$store.state.cartlist.length
    // }

    // 2.利用mapGetters解构 ， 还可用 mapState , mapActions
    ...mapGetters(['cartLength'])
  }
}
</script>
<style lang="stylus" scoped>
  .shop-cart-nav{
    position: relative;
    background-color: var(--color-tint);
    color: #fff;
  }
  .content{
    width: 100%;
    position: absolute;
    top: 44px;
    bottom: 89px;
    /* height: 200px; */
    overflow: hidden;
  }
 
</style>