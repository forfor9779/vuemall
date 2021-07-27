<template>
  <div id="app">
    <keep-alive exclude='Detail'>
      <router-view/>
    </keep-alive>   
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
