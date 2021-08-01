<template lang="">
  <div class="btnbar">
    <div class="btnbar-left">
      <div class="btnbar-service">
        <div class="btnbar-service-img"></div>
        <p>客服</p>
      </div>
      <div class="btnbar-shop">
        <div class="btnbar-shop-img"></div>
        <p>商店</p>
      </div>
      <div class="btnbar-collect">
        <div class="btnbar-collect-img"></div>
        <p>收藏</p>
      </div>
    </div>
    <div class="btnbar-right">
      <div class="add-cart" @click="addToCart">加入购物车</div>
      <div class="purchase">购买</div>
    </div>
  </div>
</template>
<script>
export default {
  name:"DetailBtnBar",
  methods: {
    addToCart(){
      this.$emit('addToCart')
    }
  },
}
</script>
<style lang="stylus" scoped>
  .btnbar{
    background-color: #fff;
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 49px;
    display: flex;
  }
  .btnbar-left,.btnbar-right{
    flex: 1;
    display: flex;
    justify-content:space-around;
    text-align: center;
  }
  .btnbar-left{
    font-size: 13px;
  }
  .btnbar-right{
    line-height: 49px;
    font-size: 15px;
  }
  .btnbar-service-img,.btnbar-shop-img,.btnbar-collect-img{
    background-image: url('~assets/img/detail/detail_bottom.png');
    background-size: 100%;
    width: 22px;
    height: 22px;
    margin: 4px auto;
  }
  .btnbar-service-img{
    background-position: 0 -53px;
  }
  .btnbar-shop-img{
    background-position: 0 -97px;
  }
  .btnbar-collect-img{
    background-position: 0 1px;
  }
  .add-cart {
    background-color: #ffe817;
    color: #333;
    width: 100%;
  }
  .purchase{
    background-color: #f69;
    color: #fff;
    width: 100%;
  }
</style>