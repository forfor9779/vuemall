<template lang="">
  <div class="comment-info" v-if="Object.keys(commentInfo.length !== 0)">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多</div>
    </div>
    <div class="info-user" v-if="commentInfo.user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p class="info-content">{{commentInfo.content}}</p>
      <div class="info-other">
        <!-- 过滤器语法 | 前面的内容即下面的过滤器函数中的value值-->
        <span class="info-data">{{commentInfo.created | showDate}}</span>
        <span class="info-style">{{commentInfo.style}}</span>
      </div>
      <div class="user-imgs" >
        <img v-for="(item,index) in commentInfo.images" :key="index" :src="item" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  // 导入时间格式化工具
import {formatDate} from 'common/utils'

export default {
  name:"DetailCommentInfo",
  components:{
    formatDate
  },
  props:{
    commentInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    showDate(value){
      const date = new Date(value * 1000)
      return formatDate(date,"yyyy-MM-dd hh:mm:ss")
    }
  },
  // computed: {
  //   date () {
  //   //   1. 将时间戳转化为Date对象
  //   const date = new Date(this.commentInfo.created * 1000)
  //   return formatDate(date,'yyyy-MM-dd')
  //   }
  // }
}
</script>
<style lang="stylus" scoped>
  .comment-info{    
    border-bottom: 5px solid #f2f5f8;
    border-top: 5px solid #f2f5f8;
    padding: 0 15px;
  }
  .info-header{
    line-height: 50px;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  .info-user{
    margin: 10px 0px;
  }

  .info-user img{
    width: 42px;
    height: 42px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .info-user span{
    margin-left: 10px;
    font-weight: 600;
  }
  .info-content{
    font-size: 14px;
    color: #777;
    line-height: 1.5;
  }
  .info-other{
    font-size: 12px;
    color: #999; 
    margin: 10px 0;
  }
  .user-imgs img{
    width: 70px;
    height: 70px;
  }
</style>