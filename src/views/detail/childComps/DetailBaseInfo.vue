<template lang="">
  <div class="goods-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-others">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name:'DetailBaseInfo',
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .goods-info{
    margin: 10px 8px;
    color: #999;
  }
  .info-title{
    font-size: 16px;
    color: #222;
  }
  .info-price{
    margin-top: 10px;
  }
  .new-price{
    font-size: 20px;
    color: var(--color-high-text);
  }
  .old-price{
    font-size: 14px;
    margin-left: 5px;
    text-decoration:line-through;
  }
  .discount{
    font-size: 14px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px ;
    border: 4px solid var(--color-high-text);
    margin-left: 5px;
    position: relative;
    top: -8px;
  }
  .info-others{
    margin-top: 20px;
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .info-service {
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    margin: 15px 0px;
    color: rgb(78, 78, 78);

  }
  .info-service img{
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }
</style>