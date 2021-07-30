import {debounce} from './utils'

export const itemListenerMixin ={
  mounted () {
    const refresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => { refresh() }
    this.$bus.$on('itemImageLoad', this.itemImgListener)
    console.log('I am in mixins');
  }
}