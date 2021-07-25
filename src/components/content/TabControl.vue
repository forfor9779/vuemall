<template lang="">
    <ul class="tab-control">
      <li class="tab-control-item" v-for="(item,index) in titles" @click="clickTab(index)" >
        <span class="tab-control-text" :class="{tactive:index === currentIndex}">{{item}}</span>
      </li>
    </ul>
</template>
<script>
export default {
  name:'TabControl',
  data() {
    return {
      isActive:false,
      currentIndex:0
    }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    clickTab(index){
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  },
}
</script>
<style lang="stylus">
  .tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: white;
 
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-text{
    padding: 5px;
 
  }
  .tactive{
    border-bottom:1px solid var(--color-tint) ;
  }
</style>