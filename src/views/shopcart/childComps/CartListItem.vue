<template lang="">
  <div class="cart-list-item">  
    <div  class="check">
      <!-- 选择按钮 -->
      <CheckButton :isChecked="item.isChecked" @click.native="checkClick"></CheckButton>
    </div> 
     <div class="cart-list-img">
      <img :src="item.image" alt="">
    </div>
   <div class="cart-list-mes">
      <div class="cart-list-title">{{item.title}}</div>
      <div class="cart-list-desc">{{item.desc}}</div>
      <div class="cart-list-bottom">
        <div class="cart-price">￥{{item.price}}</div>
        <div class="cart-counter">x{{item.count}}</div>
      </div>
    </div> 
  </div>

</template>
<script>
  import CheckButton from './CheckButton.vue'
export default {
  name:'CartListItem',
  components:{
    CheckButton
  },
  props:{
    item:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    checkClick(){
      this.item.isChecked = ! this.item.isChecked
    }
  },
}
</script>
<style lang="stylus" scoped>
  .check{
    /* width: 20px; */
    /* height: 20px; */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cart-list-item{
  width: 100%;
  display: flex;
  padding: 10px 5px;
  border-bottom: 1px solid #ccc;
  }
  .cart-list-img{
    padding: 0 5px;
  }
  .cart-list-img img {
    width: 80px;
    height: 100%;
    border-radius: 5px;
} 

  .cart-list-mes{
    position: relative;
    margin: 0 10px; 
    overflow: hidden;


  }
   .cart-list-mes div{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; 
  }
  .cart-list-title{
    font-size: 17px;
    color: #333;

  }
  .cart-list-desc{
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  } 
  .cart-list-bottom{
    display: flex;
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    font-size: 17px;
    left: 0px;
    right: 10px;
    justify-content:space-between;
  }
  .cart-price{
    color: orangered;
  }

  
</style>