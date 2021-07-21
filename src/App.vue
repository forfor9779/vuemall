<template>
  <div id="app">
    <div id="nav">
      <main-tabbar/>
    </div>
    <router-view/>
  </div>
</template>
<script>
  import mainTabbar from '@/components/content/mainTabbar.vue'
  export default{
    components:{
      mainTabbar
    }
 
  }
</script>

<style lang="stylus">
  @import './assets/css/base.css'
</style>
