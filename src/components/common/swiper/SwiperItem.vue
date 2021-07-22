<!-- 轮播图里的列表组件 -->
<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: "SwiperItem"
	}
</script>

<style >
  .slide {
    width: 100%;
    flex-shrink: 0;
  }

  .slide img {
    width: 100%;
    height: 100%;
  }
</style>
