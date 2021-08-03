<template lang="">
  <div class="user-info">
    <div class="user-img">
      <img src="~assets/img/profile/avatar.svg" alt="">
    </div> 
    <div class="load-info">
      <div class="user-login">登录/注册</div>
      <div class="user-mobile">
        <img src="~assets/img/profile/mobile.svg" alt="">
        <span>暂无绑定的手机号</span>
      </div>
    </div>
    <div class="load-more">
      <img src="~assets/img/profile/more.svg" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name:"UserInfo"
}
</script>
<style lang="stylus" scoped>
  .user-info{
    background-color: var(--color-tint);
    display: flex;
    justify-content:space-between;
    padding: 0 10px;
    height: 60px;
  }
  .user-img img{
    width: 55px;
    height: 55px;
  }
  .load-info{
    color: #fff;
    margin-left: -120px;

  }
  .user-mobile img{
    width: 20px;
    height: 100%;
    position: relative;
    top: 5px;
    left: -5px;
  }
  .user-mobile{
    font-size: 12px;
  }
  .load-more{
    line-height: 60px;
  }
</style>