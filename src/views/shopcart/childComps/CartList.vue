<template lang="">
  <div class="cartlist">
    <CartListItem v-for="(item,index) in cartList" :item=item :key="index"></CartListItem>
  </div>
</template>
<script>
import {mapGetters} from 'vuex' 
import CartListItem from './CartListItem.vue'

export default {
  name:"CartList",
  components:{
    CartListItem
  },
  computed:{
    ...mapGetters(["cartList"])
  }
}
</script>
<style lang="stylus" scoped>
  
</style>