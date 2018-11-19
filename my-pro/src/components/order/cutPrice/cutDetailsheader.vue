<template>
    <div id="cut-details">
        <swiper :options="swiperOption" v-if="picsList.length>0">
        <!-- slides -->
        <swiper-slide v-for="(i,index) in picsList" :key="index" >
            <router-link to="/group">
            <img :src="i.pic" alt="">
            </router-link>
        </swiper-slide>   
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
        <div class="cut-details">
            <h3>{{detailV.name}}</h3>
            <span>{{detailV.characteristic}}</span>
            <div>
                <h2><small>低价</small>￥{{detailV.kanjiaPrice}}</h2>
                <span>原价￥{{detailV.originalPrice}}</span>
                <p>库存{{detailV.stores}}</p>
            </div>
        </div>
        <div class="bgcolor"></div>
    </div>
</template>

<script>
import "../../../assets/other/css/cutdetailsheader.scss";
export default {
  data() {
    return {
      picsList: [],
      detailV: [],
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      }
    };
  },
  mounted() {
    this.axios
      .post(
        global.globalData.api + "shop/goods/detail?id=" + this.$route.query.id
      )
      .then(res => {
        this.picsList = res.data.data.pics;
        this.detailV = res.data.data.basicInfo;
      });
  }
};
</script>

<style>
</style>
