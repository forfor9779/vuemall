import {debounce} from './utils'
// 导入回到顶部组件
import BackTop from '@/components/content/backtop/BackTop.vue'

export const itemListenerMixin ={
  mounted () {
    const refresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => { refresh() }
    this.$bus.$on('itemImgLoad', this.itemImgListener)
  }
}

// 回到顶部
export const backTopMixin = {
  data() {
    return {
      isshowBackTop: false,
    }
  },
  // 注册组件
  components: {
    BackTop
  },
  methods: {
    // 回到顶部
    backtop(){
      this.$refs.scroll.backTop(0,0,300)
    },
    // 1.判断BackTop是否显示
    isshowBack(position){
      this.isshowBackTop = -(position.y) > 1000
    },
  },
}