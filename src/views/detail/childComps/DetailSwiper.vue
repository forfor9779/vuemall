<!-- 详情页面轮播图 -->
<template lang="">
  <Swiper class="detail-swiper">
    <SwiperItem v-for="item in swiperImg">
      <a href="">
        <img :src="item" alt="">
      </a>
    </SwiperItem>
  </Swiper>
</template>
<script>
  import {Swiper,SwiperItem} from '@/components/common/swiper/index.js'
export default {
  name:'DetailSwiper',
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    swiperImg:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .detail-swiper{
    height: 300px;
    overflow: hidden;
  }
</style>