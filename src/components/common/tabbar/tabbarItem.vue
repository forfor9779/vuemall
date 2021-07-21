<template lang="">
  <div>
    <div class="tabbar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-img"></slot></div>
      <div v-else><slot name="item-img-active"></slot></div>
      <div :class='{active:isActive}'><slot name="item-text"></slot></div>
    </div>
  </div>
</template>
<script>
export default {
  name:"TabbarItem",
  data() {
    return {
  
    }
  },
  props:{
    path:String
  },
  computed:{
    isActive(){
      return this.$route.path == this.path
    }
  },
  methods: {
    itemClick(){
      this.$router.push(this.path)
    }
  },
}
</script>
<style lang="stylus">
  .tabbar-item{
    text-align: center;
  }
  img{
    width: 26px;
    height: 26px;

  }
  .item-text{
    font-size: 14px;
  }
  .active{
    color: rgb(255,87,119);
  }
</style>