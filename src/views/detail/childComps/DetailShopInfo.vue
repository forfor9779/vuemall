<template lang="">
  <div class="shop-info">
    <div class="shop-top">
      <div class="shop-top-img">
        <img :src="shop.logo" alt="">
      </div> 
      <div class="shop-top-title">{{shop.name}}</div>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{shop.sells}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="goods-all">
          <div class="goods-count">{{shop.goodsCount}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>      
      </div>
      <div class="shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score">{{item.score}}</td>
            <td class="better"><span :class="{higher:item.isBetter,lower:!(item.isBetter)}">{{item.isBetter ? '高' : '低'}}</span></td>
          </tr>
          
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>
<script>
export default {
  name:"DetailShopInfo",
  data() {
    return {
    }
  },
  props:{
    shop:{
      type:Object,
      default(){
        return {}
      }
    } 
  }
}
</script>
<style lang="stylus" scoped>
  .shop-info{
    padding: 15px 0px;
    border-top: 5px solid #f2f5f8;
    border-bottom: 5px solid #f2f5f8;
  }
  .shop-top{
    margin:20px 0;
    display: flex;
    align-items: center;
  }
  .shop-top-img img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
  }
  .shop-top-title{
    font-size: 16px;
    margin-left: 10px; ;
  }
  .shop-middle{
    display: flex;
    align-items: center;
  }
  .shop-middle-left,.shop-middle-right{
    flex: 1;
  }
  .shop-middle-left{
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    color: #333;
    border-right: 1px solid rgba(0,0,0,.1);
  }
  .sells-count, .goods-count {
    font-size: 18px;
  }
  .sells-text, .goods-text {
    margin-top: 10px;
    font-size: 14px;
  }
  .shop-middle-right{
    margin-left: 30px;
    font-size: 14px;
    color: #333;
  }
  .shop-middle-right table td {
    padding: 5px
  }
  .higher{
    background-color: #f13e3a;
  }
  .lower{
    background-color: #5ea732;
  }
  .shop-bottom{
    margin-top: 20px;
    text-align: center;
  }
  .enter-shop{
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
</style>