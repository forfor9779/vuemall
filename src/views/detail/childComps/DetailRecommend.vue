<template lang="">
  <div class="DetailRecommend">
    <GoodsList :goods="goods"></GoodsList>
  </div>
</template>
<script>
  import GoodsList from '@/components/content/goods/GoodsList.vue'
export default {
  name:"DetailRecommend",
  data() {
    return {
      goods:[]
    }
  },
  props:{
    recommends:{
      type: Array,
      default(){
        return []
      }
    }
  },
 created() {
  console.log(this.recommends);
 },
  mounted() {
    
  },
  components:{
    GoodsList
  }
}
</script>
<style lang="">
  
</style>