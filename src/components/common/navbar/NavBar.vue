<template lang="">
    <div class="nav-bar">
      <div class="nav-left"><slot name="left"></slot></div>
      <div class="nav-center"><slot name="center"></slot></div>
      <div class="nav-right"><slot name="right"></slot></div>
    </div>
</template>
<script>
export default {
  name:'NavBar'
}
</script>
<style lang="stylus">
  .nav-bar{
    display: flex;
    text-align: center;
    width: 100%;
    line-height: 44px;
    box-shadow: 0px 1px 1px rgba(100, 100, 100, .1);
    /* 原生中，滚动时让NavBar位置固定，但是在better-scroll中不需要固定，因为滚动不包含该组件 */
    /* position: fixed;
    top: 0px;
    z-index: 999; */
  }
  .nav-left,.nav-right{
    /* width: 60px; */
    flex: 1;
  }
  .nav-center{
    flex: 4;
  }
</style>