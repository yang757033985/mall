<template>
  <div id="home">
    <Navbar class="home-nav"><div slot="center">购物街</div></Navbar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <recommend-view :recommends="recommends"/>
    <recommend-view :recommends="recommends"/>
    <recommend-view :recommends="recommends"/>
    <recommend-view :recommends="recommends"/>
    <recommend-view :recommends="recommends"/>
    <recommend-view :recommends="recommends"/>
    <recommend-view :recommends="recommends"/>
    <recommend-view :recommends="recommends"/>
    <recommend-view :recommends="recommends"/>
    <recommend-view :recommends="recommends"/>
    <recommend-view :recommends="recommends"/>
    <recommend-view :recommends="recommends"/>
    <recommend-view :recommends="recommends"/>
    <recommend-view :recommends="recommends"/>
    <recommend-view :recommends="recommends"/>
    <recommend-view :recommends="recommends"/>
    <recommend-view :recommends="recommends"/>
    <recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
import Navbar from "components/common/navbar/Navbar";
import HomeSwiper from "./childcomps/HomeSwiper";
import RecommendView from "./childcomps/RecommendView";
import {getHomeMultidata} from "network/home";

export default {
  name: 'Home',
  components: {
    Navbar,
    HomeSwiper,
    RecommendView,
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      // console.log(res);
      //取出数据装入变量
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>

<style>
  #home {
    height: 100vh;
    overflow: scroll;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;
  }
</style>
