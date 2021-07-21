<template lang="">
  <div id="nav-home">
    <NavBar>
      <div slot="center">购物街</div>
    </NavBar>
  </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar.vue'

export default {
  name:'Home',
  components:{
    NavBar
  }
}
</script>
<style lang="stylus">
  #nav-home{
    background-color: var(--color-tint);
    color: white;
  }
</style>