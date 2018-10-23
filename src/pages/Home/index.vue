<template>
  <div>
    <Banner/>
    <GoodsList/>
    <GoodsShow/>
    <ListScroll/>



  </div>
</template>
<script>
  import Banner from './Banner'
  import GoodsList from './GoodsList'
  import GoodsShow from './GoodsShow'
  import ListScroll from './ListScroll'
  export default {
    components:{
      Banner,
      GoodsList,
      GoodsShow,
      ListScroll
    }
  }
</script>
<style>

</style>
