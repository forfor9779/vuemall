<!-- 主入口轮播图组件 -->
<template lang="">
    <Swiper>
      <SwiperItem class="swiper-item" v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad">
        </a>
      </SwiperItem>
    </Swiper>
</template>
<script>
  import {Swiper,SwiperItem} from '@/components/common/swiper/index.js'
export default {
  name:'HomeSwiper',
  data() {
    return {
      isLoad:false
    }
  },

  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    imgLoad(){
      // 判断是否发送过事件，不需要重复发送
      if(!this.isLoad){
        this.$emit('swiperImgLoad')

        this.isLoad=true
      }

    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>
<style lang="stylus">
  
</style>