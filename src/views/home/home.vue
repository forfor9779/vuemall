<template lang="">
  <div id="nav-home">
    <NavBar class="nav-bar"><div slot="center">购物街</div></NavBar>
    <TabControl :titles="['流行', '新款', '精选']" 
                class="tabcontrol" 
                @tabClick="tClick"
                ref="tabcontrol1"
                v-show="isfixed"> 
    </TabControl>
    <Scroll class="content" 
            ref="scroll" 
            @scrollPosition ="contentPosition" 
            :probe-type='3'
            @pullingUp="LoadMore"
            :pull-up-load="true">
      <HomeSwiper :banners=banners @swiperImgLoad="swiperImgLoad"></HomeSwiper>
      <HomeRecommend :recommends=recommends></HomeRecommend>
      <WeekPopular></WeekPopular>
      <TabControl 
                  :titles="['流行', '新款', '精选']" 
                  class="tabcontrol" 
                  @tabClick="tClick"
                  ref="tabcontrol2">
      </TabControl>
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
// 导入防抖函数
import {debounce} from "common/utils";
// 导入混入
import {itemListenerMixin} from 'common/mixin.js'


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
    BackTop,
    debounce
  },
  mixins:[itemListenerMixin],
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
      isshowBackTop: false,
      tabControlTop:0,
      isfixed:false,
      saveY:0
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
  // 进去home时，让页面去往上次存储的位置
  activated() {
    this.$refs.scroll.backTop(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  // 离开home时，组件处于不活跃状态，获取scroll滚动的位置
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
  },
  mounted() {
     /*
          图片滚动的问题：
          Better-Scroll在决定有多少区域可以滚动时,是根据scrollerHeight属性决定
            scrollerHeight属性是根据放Better-Scroll的content中的子组件的高度决定

          但是我们的首页中,刚开始在计算scrollerHeight属性时,是没有将图片计算在内的。
            所以,计算出来的高度是错误的

          后来图片加载进来之后有了新的高度,但是scrollerHeight属性并没有进行更新.
            所以滚动出现了问题

          解决：
            监听每一张图片是否加载完成，只要有一张图片加载完成就执行一次refresh()

            怎么监听图片加载完成：
            原生： img.onload =function(){}
              在vue中 @load可以监听
        */

        // refs不可以放在created里，因为在这个组件创建完成时，它的子组件还没有创建好，这时候可能会报错
        // 对于refresh非常频繁的问题, 进行防抖操作
        // 使用混入，减少重复代码
        // const refresh =debounce(this.$refs.scroll.refresh, 50)
        // this.$bus.$on('itemImgLoad', () =>{
        //   refresh()
        // })
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

      this.$refs.tabcontrol2.currentIndex = index
      this.$refs.tabcontrol1.currentIndex = index

    },

    // 回到顶部
    backtop(){
      this.$refs.scroll.backTop(0,0,300)
    },

    // 侦测实时位置，隐藏回到顶部
    contentPosition(position){
        // 1.判断BackTop是否显示
      this.isshowBackTop = -(position.y) > 1000
        // 2.决定tabControl是否吸顶(position: fixed)
      this.isfixed = -(position.y) > this.tabControlTop
    },

    // 上拉加载更多
    LoadMore(){
 
      this.gGoods(this.currentTab)
      this.$refs.scroll.finishUpLoad()
    },

    // 轮播图加载完成获取tabcontrol的高度 
    swiperImgLoad(){
      this.tabControlTop = this.$refs.tabcontrol2.$el.offsetTop
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
      })
    }
  }
    
}
</script>
<style lang="stylus" scoped>
  .nav-home{
    position: relative;
  }
  .nav-bar{
    position: relative;
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
    /* position: sticky; */
    /* top: 44px; */
    position: relative; 
   z-index: 99;
  }
 

</style>