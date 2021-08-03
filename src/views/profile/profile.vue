<template lang="">
  <div>
    <NavBar class="profile-navbar">
      <div slot="center">我的档案</div>
    </NavBar>
    <UserInfo></UserInfo>
    <UserMessage></UserMessage>
  </div>
</template>
<script>
  import NavBar from '@/components/common/navbar/NavBar.vue'
  
  import UserInfo from "./childComps/UserInfo.vue"
  import UserMessage from "./childComps/UserMessage.vue"
export default {
  name:'Profile',
  components:{
    NavBar,
    UserInfo,
    UserMessage
  }
}
</script>
<style lang="stylus" scoped>
  .profile-navbar{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>