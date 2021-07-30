<template lang="">
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div>
      <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
      <ul class="info-img">
        <li class="info-img-item" v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" >
          <img :src="item" alt="" @load="infoImgLoad">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:"DetailGoodsInfo",
  data() {
    return {
      counter:0,
      imagesLength:0
    }
  },
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    infoImgLoad(){
        // 判断, 所有的图片都加载完了, 那么进行一次回调就可以了.
      this.counter++
      if(this.counter === this.imagesLength){
        this.$emit('infoImgLoad')
      }
    }
  },
  watch: {
    detailInfo(){
      this.imagesLength = this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>
<style lang="stylus" scoped>
  .goods-info{
    margin: 30px 0px;
    /* border-bottom: 5px solid #f2f5f8; */

  }
  .info-desc{
    margin: 0px 20px;
    font-size: 14px;
  }

  .info-desc .start,.info-desc .end{
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    margin: 15px 0px;
    position: relative;
  }
  .info-desc .end{
    float: right;
  }
  .info-desc .start::before, .info-desc .end::after{
    position: absolute;
    content: '';
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0px;
  }
  .info-desc .end::after {
    right: 0;
  }
  .info-key{
    margin: 10px 0 10px 15px;
    font-size: 15px;
    color: #333;
    font-weight:500;
  }

  .info-img img{
    width: 100%;
    height: 100%;
  }
</style>