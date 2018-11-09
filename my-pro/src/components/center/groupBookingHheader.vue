<template>
    <div id="groupBookingHeader">
         <swiper :options="swiperOption" ref="mySwiper" v-if="picList.length>0">
    <!-- slides -->
    <swiper-slide v-for="(i,index) in picList" :key="index">
        <img :src="i.pic" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
    </div>
</template>

<script>
import '../../assets/other/css/groupBookingHeader.scss'
export default {
    data() {
      return {
        picList:[],
        swiperOption: {
          loop:true,
            pagination: {
            el: '.swiper-pagination',
            },
            autoplay:{
            delay:2500,
            disableOnInteraction: false,
            }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      this.axios.get(global.globalData.api+"shop/goods/detail/?id="+this.$route.query.id).then(res=>{
        this.picList=res.data.data.pics
      })
    },
}
</script>

<style>

</style>
