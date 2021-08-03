<template lang="">
  <div class="toase">
    <p>{{message}}</p>
  </div>
</template>
<script>
export default {
  name:'Toase',
  props:{
    message:String
  }
}
</script>
<style lang="stylus" scoped>
  .toase{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0, 0, 0, .7);
    color: #fff;
    padding: 8px 10px;
    border-radius: 8px;
  }
</style>