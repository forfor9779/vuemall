<template>
  <div id="app">
    <router-view/>
    
    <main-tabbar/>
  </div>
</template>
<script>
  import MainTabbar from '@/components/content/MainTabbar.vue'
  export default{
    components:{
      MainTabbar
    }
 
  }
</script>

<style lang="stylus">
  @import './assets/css/base.css'
</style>
