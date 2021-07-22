<template lang="">
  <div id="nav-home">
    <NavBar class="nav-bar">
      <div slot="center">购物街</div>
    </NavBar>
    <HomeSwiper :banners=banners></HomeSwiper>
    <HomeRecommend :recommends=recommends></HomeRecommend>
  </div>
</template>
<script>
// 导入顶部导航组件
import NavBar from '@/components/common/navbar/NavBar.vue'
// 导入轮播图组件
import HomeSwiper from '@/views/home/childComps/HomeSwiper.vue'
// 导入推荐列表组件
import HomeRecommend from './childComps/HomeRecommend.vue'

import {getHomeMultidata} from '@/network/home'

export default {
  name:'Home',
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommend
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
  .nav-bar{
    background-color: var(--color-tint);
    color: white;
  }
</style>