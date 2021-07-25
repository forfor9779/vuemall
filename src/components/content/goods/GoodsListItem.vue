<!-- 商品信息 -->
<template lang="">
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="">
    <div class="goods-mes">
      <p class="goods-info">{{goodsItem.title}}</p>
      <span class="goods-price">{{goodsItem.price}}</span>
      <span class="goods-collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name:'GoodsListItem',
  props:{
    goodsItem:{
      type:Object,
      default(){
        return []
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .goods-item{
    width: 48%;
  }
  .goods-item img{
    width: 100%;
    height: 85%;
    border-radius: 5px;
    margin-bottom: 2px;
  }
  .goods-mes{
    font-size: 12px;
    text-align: center;
  
  }
  .goods-info{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .goods-price{
    color: var(--color-high-text);
    /* position: absolute; */
  }
 
  .goods-collect::before{
    content:'';
    display: inline-block;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") no-repeat;
    background-size: cover;
    background-position: 0 1px;
    margin-left:5px;
}
</style>