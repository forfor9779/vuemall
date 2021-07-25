<template lang="">
  <div>
     <div id="tabbar">
       <slot></slot>
     </div>
  </div>
</template>
<script>

export default {
  name:"Tabbar",

}
</script>
<style lang="stylus">
  #tabbar{
    height: 49px;
    align-items: center;
    display: flex;
    justify-content:space-around;
    position: fixed;
     /* display：flex和position:absolute/flexd 一起使用会出问题 */
    /* 方案一：width: 100%; */
    /* 方案二： */
    right: 0;
    left: 0;
    bottom: 0px;
    background-color: #f6f6f6;
    box-shadow: 0 -1px 1px rgba(100,100,100,.2);
  }
</style>