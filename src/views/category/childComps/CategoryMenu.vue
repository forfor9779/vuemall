<template lang="">
  <div>
    <Scroll class="catefory-menu">
      <ul class="content"> 
        <li v-for="(item,index) in categories" 
            :key="index"
            class="title"
            :class="{active:index == currentIndex}"
            @click="clickItem(index)">
            {{item.title}}
        </li>
      </ul>
    </Scroll>
  </div>
</template>
<script>
  import Scroll from '@/components/common/scroll/Scroll.vue'

export default {
  name:'CategoryMenu',
  components:{
    Scroll
  },
  data() {
    return {
      currentIndex:0
    }
  },
  props:{
    categories:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    clickItem(index){
      this.currentIndex = index;
    }
  },
}
</script>
<style lang="stylus" scoped>
  .catefory-menu{
    position: absolute;
    width: 100px;
    top: 0px;
    bottom: 0px;
    overflow: hidden;
    z-index: 999;
  }
  .title{
    line-height: 45px;
    font-size: 14px;
    background: #f6f6f6;
    text-align: center;
  }
  .active {
    background-color: #fff;
    color: var(--color-high-text);
    border-left: 3px solid var(--color-high-text);
    font-weight: 700;
}
</style>