<template lang="">
  <div id="nav-home">
    <NavBar class="nav-bar">
      <div slot="center">购物街</div>
    </NavBar>
    <Scroll 
      class="content" 
      ref="scroll" 
      @scrollPosition ="contentPosition" 
      :probe-type='3'
      @pullingUp="LoadMore"
      :pull-up-load="true">
      <HomeSwiper :banners=banners></HomeSwiper>
      <HomeRecommend :recommends=recommends></HomeRecommend>
      <WeekPopular></WeekPopular>
      <TabControl :titles="['流行', '新款', '精选']" class="tabcontrol" @tabClick="tClick"></TabControl>
      <GoodsList :goods="goods[currentTab].list"></GoodsList>
    </Scroll>
    <BackTop class="back-top" @click.native="backtop" v-show="isshowBackTop"></BackTop>
  </div>
</template>
<script>

// 导入轮播图组件
import HomeSwiper from './childComps/HomeSwiper.vue'
// 导入推荐列表组件
import HomeRecommend from './childComps/HomeRecommend.vue'
// 导入下面一个推荐列表组件
import WeekPopular from './childComps/WeekPopular.vue'

// 导入顶部导航组件
import NavBar from '@/components/common/navbar/NavBar.vue'
// 导入子导航组件
import TabControl from '@/components/content/TabControl.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'
// 导入滚动样式
import Scroll from '@/components/common/scroll/Scroll.vue'
// 导入回到顶部组件
import BackTop from '@/components/content/backtop/BackTop.vue'

import {getHomeMultidata,getGoods} from '@/network/home'

export default {
  name:'Home',
  components:{
    HomeSwiper,
    HomeRecommend,
    WeekPopular,

    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  // 网络请求过来的数据，在其函数结束时，会被回收，所以需要一个data来接受数据
  data() {
    return {
      banners: [],
      recommends: [],
      goods:{
        // page请求页码，list请求过来的数据
        'pop':{page:0, list:[]},
        'new':{page:0,  list:[]},
        'sell':{page:0, list:[]}
      },
      currentTab:'pop',
      isshowBackTop: false
    }
  },
  // 页面开始创建的时候就向服务器请求数据
  created(){
    // 必须要加this，因为调用的请求方法封装到了methods里
    this.gHomeMultidata()

    this.gGoods('pop')
    this.gGoods('new')
    this.gGoods('sell')
  },
  methods: {
    /*
      事件监听相关的方法
    */
    tClick(index){
      switch (index) {
        case 0:
          this.currentTab = 'pop'
          break;
        case 1:
          this.currentTab = 'new'
          break;
        case 2:
          this.currentTab = 'sell'
          break;
      } 

    },

    // 回到顶部
    backtop(){
      this.$refs.scroll.backTop(0,0,300)
    },

    // 侦测实时位置，隐藏回到顶部
    contentPosition(position){
      this.isshowBackTop = -(position.y) > 1000
    },

    // 上拉加载更多
    LoadMore(){
 
      this.gGoods(this.currentTab)
      this.$refs.scroll.finishUpLoad()
    },

    /*
      网络请求方法
    */
    // 请求数据的具体代码封装到方法里
    gHomeMultidata(){
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    // 请求商品数据
    gGoods(type){
      // 请求第一页的数据
      const page = this.goods[type].page + 1;
      getGoods(type,1).then(res => {
        this.goods[type].list.push(...res.data.list);
        // 请求完当前页面的数据，让page+1
        this.goods[type].page += 1;

        this.$refs.scroll.scroll.refresh()
      })
    }
  }
    
}
</script>
<style lang="stylus" scoped>
  .nav-bar{
    /* position: relative; */
    background-color: var(--color-tint);
    color: white;
  }
  .content{
    width: 100%;
    position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: hidden; 
  }
  .tabcontrol{
    position: sticky;
    top: 44px;
  }

</style>