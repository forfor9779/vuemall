<template lang="">
  <div class="check-button" :class="{checked:isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>
<script>
export default {
  name:'CheckButton',
  props:{
    isChecked:{
      type:Boolean,
      default(){
        return flase
      } 
    }
  }
}
</script>
<style lang="stylus" scoped>
  .check-button img{
    width: 15px;
    height: 15px; 
  }
  .check-button{
    width: 15px;
    height: 15px;
    border: 2px solid #aaa;
    border-radius: 50%;
  }
  .checked{
    background-color: var(--color-tint);
    border-color: var(--color-tint);
  }
</style>