<!-- 商品详情页面 -->
<template lang="">
  <div id="detail">
    <DetailNavBar class="nav-bar" @detailTabClick="detailTabClick" ref="navbar"></DetailNavBar>
    <Scroll class="content" ref="scroll" @scrollPosition='scrollPosition' :probe-type='3'>
      <DetailSwiper :swiperImg="swiperImg"></DetailSwiper>
      <DetailBaseInfo :goods=goods class="baseinfo"></DetailBaseInfo>
      <DetailShopInfo :shop=shop class="shopinfo"></DetailShopInfo>
      <DetailGoodsInfo :detailInfo="detailInfo" @infoImgLoad="infoImgLoad"></DetailGoodsInfo>
      <DetailParamsInfo :paramsInfo="paramsInfo" ref="params"></DetailParamsInfo>
      <DetailCommentInfo :commentInfo="commentInfo" ref="comment"></DetailCommentInfo>
      <GoodsList :goods="recommends" class="goodsList" ref="recommend"></GoodsList>
    </Scroll>
    <BackTop class="back-top" @click.native="backtop" v-show="isshowBackTop"></BackTop>
    <DetailBtnBar @addToCart='addToCart'></DetailBtnBar>
    <Toase v-show="isShowMessage" :message="message"></Toase>
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
  import DetailBtnBar from "./childComps/DetailBtnBar.vue"


  import GoodsList from '@/components/content/goods/GoodsList'
  import Scroll from '@/components/common/scroll/Scroll'
  import Toase from '@/components/common/toase/Toase.vue'

  // import BackTop from '@/components/content/backtop/BackTop.vue' 封装进mixin

  import {itemListenerMixin,backTopMixin} from 'common/mixin.js'

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
    DetailBtnBar,
    GoodsList,
    // BackTop,

    Scroll,
    Toase,

  },
  mixins:[itemListenerMixin,backTopMixin],
  data() {
    return {
      iid:null,
      swiperImg:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramsInfo:{},
      commentInfo:{},
      recommends:[],
      themeTopYs:[],
      currentIndex:0,
      message:'',
      isShowMessage:false
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

    // this.$nextTick(() => { // 下一帧，此函数会等到组件dom渲染完后再调用，但组件中的图片并不一定加载完全
    //   this.topYs = []  // 得到的offsetTop值不准确，大多数都是因为图片未加载的问题
    //   this.topYs.push(0)
    //   this.topYs.push(this.$refs.params.$el.offsetTop)
    //   this.topYs.push(this.$refs.comment.$el.offsetTop)
    //   this.topYs.push(this.$refs.recommend.$el.offsetTop)
    // })
  },
  methods: {
    infoImgLoad(){
      this.$refs.scroll.refresh()

      // 当子组件的图片加载完成以后，获取每个子组件的offsetTop
      // 商品的offsetTop是0
      // 我们已经给goodlistitem做过防抖，所以不用考虑调用了很多次的问题
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      // 在数组末尾增加一个无限大的值，为了之后对数组做遍历
      this.themeTopYs.push(Number.MAX_VALUE)

    },

    // 点击navbar的某个主题，就是滚动到那个位置
    detailTabClick(index){
      this.$refs.scroll.backTop(0,-this.themeTopYs[index],1000)
    },

    // 获取滚动的位置，滚动到某个位置时，上面对应的标题就会变色
    scrollPosition(position){
      // position>= themeTopYs[0] && < themeTopYs[1]  currentIndex= 0
      // position>=themeTopYs[1] && < themeTopYs[2]  currentIndex= 1
      // position>= themeTopYs[2] && < themeTopYs[3]  currentIndex=2
      // position>= themeTopYs[3] && < themeTopYs[4]  currentIndex=3
      const scrollY = -position.y
      const length = this.themeTopYs
      // for in 里的i是字符串类型
      // 如果数组只有4个数，是无法遍历到下标为4的
      // 1.普通方法：
      // for(let i in length){
      //   if(this.currentIndex !== i && (i < length.length-1 && scrollY >= length[i*1] && scrollY < length[i*1+1]) 
      //       || i == length.length-1 && scrollY >= length[i*1]){
      //     this.currentIndex = i*1
      //     this.$refs.navbar.currentIndex = this.currentIndex
      //   }
      // }

      // 2.hack方法，在数组后面加一个无限大的值，并且遍历时只遍历到 i<length-1
      for(let i=0 ; i<length.length-1 ; i++){
        if (this.currentIndex !== i && (i < length.length-1 && scrollY >= length[i] && scrollY < length[i+1]) ) {
          this.currentIndex = i
          this.$refs.navbar.currentIndex = this.currentIndex
        }
      }

      // 回到顶部
      this.isshowBack(position)
    },
  
    // 加入到购物车
    addToCart(){
      const product = {}
      product.image = this.swiperImg[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      // // iidy一定要传，因为id是商品的唯一标识
      product.iid = this.iid 

      // commit是将product提交到store中mutations里的方法addCart
      // this.$store.commit('addCart',product)
      this.$store.dispatch('addCart',product)  // dispatch是提交到actions里去，再由actions分发commit到mutations里不同的方法中去

      // 如果添加购物车成功,则输出模态框（用promise监视是否成功添加）
      .then(res => {
         this.message = res
         this.isShowMessage = true
         setTimeout(() => {
           this.message = ""
           this.isShowMessage = false
         }, 2000);
      })
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