<template lang="">
  <div>
    <NavBar>
      <div slot="left" class="back" @click="backCilck">
        <img src="~/assets/img/common/back.svg" alt="">
      </div>
      <div slot="center">
        <ul class="item-list">
          <li class="item" v-for="(item,index) in detailItem" :class="{active:index === currentIndex}" @click="clickItem(index)">{{item}}</li>
        </ul>
      </div>
    </NavBar>
  </div>
</template>
<script>
  
  import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
  name:'DetailNavBar',
  data() {
    return {
      detailItem:['商品','参数','评论','推荐'],
      isActive:false,
      currentIndex:0
    }
  },
  components:{
    NavBar
  },
  methods: {
    clickItem(index){
      this.currentIndex = index
      this.$emit('detailTabClick',index)
    },
    // 后退一页
    backCilck(){
      this.$router.back()
    }
  },
}
</script>
<style lang="stylus" scoped>
  .back img{
    transform: translateY(30%);
  }
  .item-list{
    display: flex;
    font-size: 13px;
  }
  .item{
    flex: 1;
  }

  .active{
    color: var(--color-high-text);
  }
</style>