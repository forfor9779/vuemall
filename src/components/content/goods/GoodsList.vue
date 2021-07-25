<!-- 商品列表 -->
<template lang="">
  <div class="goods-list-item">
    <GoodsListItem  v-for="item in goods" :goodsItem="item"></GoodsListItem>
  </div>
</template>
<script>
  import GoodsListItem from './GoodsListItem'
export default {
  name:"GoodsList",
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListItem
  }
}
</script>
<style lang="stylus" scoped>
  .goods-list-item{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
  }
</style>