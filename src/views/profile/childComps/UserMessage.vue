<template lang="">
  <div class="user-message">
    <div class="top">
      <div class="money">
        <div class="money-figure"><span>0.00</span>元</div>
        <div class="my-money">我的余额</div>
      </div>
      <div class="discount">
        <div class="discount-figure"><span>0</span>个</div>
        <div class="my-discount">我的优惠</div>
      </div>
      <div class="integral">
        <div class="integral-figure"><span>0</span>分</div>
        <div class="my-integral">我的积分</div>
      </div>
    </div>
    <div class="center">
      <div class="mes">
        <img src="~assets/img/profile/message.svg" alt="">
        <span>我的消息</span>
      </div>
      <div class="pointer">
        <img src="~assets/img/profile/pointer.svg" alt="">
        <span>积分商城</span>
      </div>
      <div class="vip">
        <img src="~assets/img/profile/vip.svg" alt="">
        <span>会员卡</span>
      </div>
    </div>
    <div class="bottom">
      <div class="cart">
        <img src="~assets/img/profile/cart.svg" alt="">
        <span>我的购物车</span>
      </div>
      <div class="shop">
        <img src="~assets/img/profile/shopping.svg" alt="">
        <span>下载购物APP</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"UserMessage"
}
</script>
<style lang="stylus" scoped>
  .top{
    height: 80px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    font-size: 14px;
  }
  .my-money,.my-discount,.my-integral{
    margin-top: 5px;
  }
  .top span{
    font-size: 22px;
    font-weight: 600;
    color: rgb(249,126,73);
  }
  .center{
    border-top: 10px solid rgb(238, 238, 238);
    border-bottom: 10px solid rgb(238, 238, 238);
    
  }
  .center img , .bottom img{
    width: 20px;
    position: relative;
    top: 6px;
    margin: 0 10px;
  }
  .center span , .bottom span{
    line-height: 30px;
  }
  .bottom{
    height: 100px;
  }
</style>