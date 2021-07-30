<!-- 商品详情页面 -->
<template lang="">
  <div id="detail">
    <DetailNavBar class="nav-bar"></DetailNavBar>
    <Scroll class="content" ref="scroll">
      <DetailSwiper :swiperImg="swiperImg"></DetailSwiper>
      <DetailBaseInfo :goods=goods class="baseinfo"></DetailBaseInfo>
      <DetailShopInfo :shop=shop class="shopinfo"></DetailShopInfo>
      <DetailGoodsInfo :detailInfo="detailInfo" @infoImgLoad="infoImgLoad"></DetailGoodsInfo>
      <DetailParamsInfo :paramsInfo="paramsInfo"></DetailParamsInfo>
      <DetailCommentInfo :commentInfo="commentInfo"></DetailCommentInfo>
      <GoodsList :goods="recommends" class="goodsList"></GoodsList>
    </Scroll>
  </div>
</template>
<script>
  import DetailNavBar from "./childComps/DetailNavBar.vue"
  import DetailSwiper from "./childComps/DetailSwiper.vue"
  import DetailBaseInfo from "./childComps/DetailBaseInfo.vue"
  import DetailShopInfo from "./childComps/DetailShopInfo.vue"
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue"
  import DetailParamsInfo from "./childComps/DetailParamsInfo.vue"
  import DetailCommentInfo from "./childComps/DetailCommentInfo.vue"


  import GoodsList from '@/components/content/goods/GoodsList'
  import Scroll from '@/components/common/scroll/Scroll'

  import { itemListenerMixin } from "common/mixin.js"

  import {getDetail,Goods,Shop,GoodsParam,getRecommend} from '@/network/detail.js'
export default {
  name:'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,

    Scroll
  },
  mixins:[itemListenerMixin],
  data() {
    return {
      iid:null,
      swiperImg:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramsInfo:{},
      commentInfo:{},
      recommends:[]
    }
  },
  created(){
    // 保存传入的iid
    this.iid = this.$route.params.iid
    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      console.log(res);
      const data = res.result
      // 获取轮播图片
      this.swiperImg = data.itemInfo.topImages
      // 获取商品信息对象
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      // 获取店铺信息的对象
      this.shop = new Shop(data.shopInfo)

      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo;

     // 5.获取参数的信息
      this.paramsInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

     // 6.获取评论的信息
    //  有些商品可能没有评论，所以需要进行判断
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0]
      }      
    })
    // 获取推荐信息
    getRecommend().then( res => {
      this.recommends = res.data.list
    })
  },
  methods: {
    infoImgLoad(){
      this.$refs.scroll.refresh()
    }
  },
  destroyed () {
    // 离开组件时取消图片加载监听事件
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },
}
</script>
<style lang="stylus" scoped>
  #detail{
    position: relative;
    z-index: 9;
    height: 100vh;
    background-color: #fff;
  }
  /* .nav-bar{
    position: relative;
    z-index: 9;
    background-color: white;
  } */
  .content{
    width: 100%;
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
  }
  .goodsList{
    width: 100%
  }
</style>