<template lang="">
  <div id="nav-home">
    <NavBar>
      <div slot="center">购物街</div>
    </NavBar>
  </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import {getHomeMultidata} from '@/network/home'

export default {
  name:'Home',
  components:{
    NavBar
  },
  // 网络请求过来的数据，在其函数结束时，会被回收，所以需要一个data来接受数据
  data() {
    return {
      banners: [],
        recommends: []
    }
  },
  // 页面开始创建的时候就向服务器请求数据
  created(){
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>
<style lang="stylus">
  #nav-home{
    background-color: var(--color-tint);
    color: white;
  }
</style>