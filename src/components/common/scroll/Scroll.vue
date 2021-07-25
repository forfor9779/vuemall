<template lang="">
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot> 
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
export default {
  name:'Scroll',
  data() {
    return {
      scroll:null,
    }
  },
  props:{
    probeType: {
      type:Number,
      default: 0
    },
    pullUpLoad:{
      type:Boolean,
      default :false
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      // 让原来的click可以点击
      click:true,
      // 获取实时的位置 0，1为不获取，2获取手指滚动的位置，3只要滚动就会获取
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    // 侦测实时滚动位置
    this.scroll.on('scroll',position => {
      this.$emit('scrollPosition',position)
    })

    // 上拉加载更多
    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    backTop(x,y,time){
      // 去往某个位置
      this.scroll.scrollTo(x,y,time)
    },
    finishUpLoad(){
      this.scroll.finishPullUp()
    }
  },
}
</script>
<style lang="stylus" scoped>
 
</style>