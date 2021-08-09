<template lang="">
  <div class="category">
    <NavBar class="cate-navbar">
      <div slot="center">商品列表</div>
    </NavBar>
    <div class="content">
      <div class="category-menu">
        <CategoryMenu :categories="categories" class="menu"></CategoryMenu>
      </div>
      <div class="category-content"></div>
    </div>
    <Scroll>
      
    </Scroll>
   
  </div>
</template>
<script>
  // import BScroll from 'better-scroll'
  import NavBar from '@/components/common/navbar/NavBar.vue'
  import Scroll from '@/components/common/scroll/Scroll.vue'

  import CategoryMenu from './childComps/CategoryMenu.vue'


  import { getCategory } from '@/network/category.js'
export default {
  name:'Cayegory',
  components:{
    NavBar,
    Scroll,

    CategoryMenu,
  },
  data() {
    return {
      categories :[]
    }
  },
  methods: {
    gCategory(){
      getCategory().then(res => {
        console.log(res);
        this.categories = res.data.category.list
      })
    }
  },
  created() {
    this.gCategory()
  },
  mounted() {
    
    // getCategory().then(res => {
    //   console.log(res);
    // })
  },
}
</script>
<style lang="stylus" scoped>
  .cate-navbar{
    background-color: var(--color-tint);
    color: #fff;
  }
  .content{
    position: absolute;
    width: 100%;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
</style>