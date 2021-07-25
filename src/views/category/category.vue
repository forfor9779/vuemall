<template lang="">
  <div class="wrapper">
    <ul class="content">
      <li>测试列表1</li>
      <li>测试列表2</li>
      <li>测试列表3</li>
      <li>测试列表4</li>
      <li>测试列表5</li>
      <li>测试列表6</li>
      <li>测试列表7</li>
      <li>测试列表8</li>
      <li>测试列表9</li>
      <li>测试列表10</li>
      <li>测试列表11</li>
      <li>测试列表12</li>
      <li>测试列表13</li>
      <li>测试列表14</li>
      <li>测试列表15</li>
      <li>测试列表16</li>
      <li>测试列表17</li>
      <li>测试列表18</li>
      <li>测试列表19</li>
      <li>测试列表20</li>
      <li>测试列表21</li>
      <li>测试列表22</li>
      <li>测试列表23</li>
      <li>测试列表24</li>
      <li>测试列表25</li>
      <li>测试列表26</li>
      <li>测试列表27</li>
      <li>测试列表28</li>
      <li>测试列表29</li>
      <li>测试列表30</li>
      <li>测试列表31</li>
      <li>测试列表32</li>
      <li>测试列表33</li>
      <li>测试列表34</li>
      <li>测试列表35</li>
      <li>测试列表36</li>
      <li>测试列表37</li>
      <li>测试列表38</li>
      <li>测试列表39</li>
      <li>测试列表40</li>
      <li>测试列表41</li>
      <li>测试列表42</li>
      <li>测试列表43</li>
      <li>测试列表44</li>
      <li>测试列表45</li>
      <li>测试列表46</li>
      <li>测试列表47</li>
      <li>测试列表48</li>
      <li>测试列表49</li>
      <li>测试列表50</li>
      <li>测试列表51</li>
      <li>测试列表52</li>
      <li>测试列表53</li>
      <li>测试列表54</li>
      <li>测试列表55</li>
      <li>测试列表56</li>
      <li>测试列表57</li>
      <li>测试列表58</li>
      <li>测试列表59</li>
      <li>测试列表60</li>
      <li>测试列表61</li>
      <li>测试列表62</li>
      <li>测试列表63</li>
      <li>测试列表64</li>
      <li>测试列表65</li>
      <li>测试列表66</li>
      <li>测试列表67</li>
      <li>测试列表68</li>
      <li>测试列表69</li>
      <li>测试列表70</li>
      <li>测试列表71</li>
      <li>测试列表72</li>
      <li>测试列表73</li>
      <li>测试列表74</li>
      <li>测试列表75</li>
      <li>测试列表76</li>
      <li>测试列表77</li>
      <li>测试列表78</li>
      <li>测试列表79</li>
      <li>测试列表80</li>
      <li>测试列表81</li>
      <li>测试列表82</li>
      <li>测试列表83</li>
      <li>测试列表84</li>
      <li>测试列表85</li>
      <li>测试列表86</li>
      <li>测试列表87</li>
      <li>测试列表88</li>
      <li>测试列表89</li>
      <li>测试列表90</li>
      <li>测试列表91</li>
      <li>测试列表92</li>
      <li>测试列表93</li>
      <li>测试列表94</li>
      <li>测试列表95</li>
      <li>测试列表96</li>
      <li>测试列表97</li>
      <li>测试列表98</li>
      <li>测试列表99</li>
      <li>测试列表100</li>
    </ul>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'

export default {
  name:'Cayegory',
  data() {
    return {
      scroll:null
    }
  },
  mounted() {
    this.scroll = new BScroll('.wrapper', {
      // 侦测实时位置1不侦测，2侦测手指位置，3侦测任何滚动 
      // probeType: 3,

      // 上拉加载更多
      // pullUpLoad: true,
      // wheel: true,
      // scrollbar: true,
    })
    // bs.on('scroll', position => {
    //   console.log(position);
    // })

    // this.scroll.on('pullingUp',() => {
    //   console.log('加载更多');
    //   this.scroll.finishPullUp()
    // })
  },
  methods: {
  
  },
}
</script>
<style lang="stylus" scoped>
  .wrapper{
    height: 200px;
    background-color: lightblue;
    overflow: hidden;
  }
</style>