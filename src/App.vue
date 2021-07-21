<template>
  <div id="app">
    <div id="nav">
      <main-tabbar/>
    </div>
    <router-view/>
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
