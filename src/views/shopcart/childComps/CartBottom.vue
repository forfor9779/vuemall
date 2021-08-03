<template lang="">
  <div class="cart-bottom">
    <div class="check-all">
      <CheckButton class="check-button" :isChecked=isCheckAll @click.native="CheckedAllClick"></CheckButton>
      <div class="all-pick">全选</div>
    </div>
    <div class="total-price">合计:￥{{totalPrice}}</div>
    <div class="calculate" @click="clickCalc">结算({{calculate}})</div>
    <Toase v-show="isShowMessage" :message="message"></Toase>
  </div>
</template>
<script>
  import CheckButton from './CheckButton.vue'
  import Toase from '@/components/common/toase/Toase.vue'

  import {mapGetters} from 'vuex' // 可以将方法解构

export default {
  name:'CartBottom',
  data() {
    return {
      isShowMessage:false,
      message:""
    }
  },
  components:{
    CheckButton,
    Toase,

  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice(){
      return this.cartList.filter(item => { //判断是否选择
        return item.isChecked}).reduce((prev,item) => {
        return prev + item.price*item.count 
      },0).toFixed(2)
    },
    calculate(){
      return this.cartList.filter(item => {
        return item.isChecked
      }).reduce((prev,item) => {
        return prev + item.count
      },0)
    },
    isCheckAll(){
      if(!this.cartList.length ) return false
      // 方法一，找出数组里没有被选中的数量，只要有一个，就让值为false
      // return !(this.cartList.filter(item => {return !item.isChecked}).length)

      // 方法二：find()只找到一个就不找了，性能比方法一更高
      // return !(this.cartList.find(item =>  !item.isChecked))

      // 方法三：every() 只要有一个不满足就为false // some()只要有一个满足，就为true
      return (this.cartList.every(item => item.isChecked))
    },
    
  },
  methods: {
      CheckedAllClick(){
        if(this.isCheckAll){
          this.cartList.forEach(item => item.isChecked = false);
        }else{
          this.cartList.forEach(item => item.isChecked = true)
        }
      },
      clickCalc(){
        if(!this.isCheckAll){
          this.message = "请选择购买的商品"
          this.isShowMessage = true
          setTimeout(() => {
            this.message = ""
            this.isShowMessage = false
          }, 2000);
        }
      }
    },
}
</script>
<style lang="stylus" scoped>
  .cart-bottom{
    position: absolute;
    bottom:49px;
    width: 100%;
    height: 40px;
    display: flex;
    font-size: 16px;
    background-color: #eee;
  }
  .check-all{
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .all-pick{
    margin-left: 10px;
  }
  .total-price{
    flex: 3;
    line-height: 40px;
    text-align: center;
  }
  .calculate{
    flex: 1;
    background-color: var(--color-tint);
    color: #fff;
    line-height: 40px;
    text-align: center;
  }
</style>