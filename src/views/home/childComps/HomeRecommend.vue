<template lang="">
  <div class="recomd">
    <div v-for="item in recommends" class="recomd-item">
      <a :href="item.link">
        <img :src="item.image" alt="" class="recomd-img">
        <div class="recomd-text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name:'HomeRecommend',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style lang="stylus">
  .recomd{
    text-align: center;
    display: flex;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .recomd-item{
    flex: 1;
  }
  .recomd-img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
  .recomd-text{
    font-size: 12px;
  }
</style>