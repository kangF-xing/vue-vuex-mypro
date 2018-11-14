<template>
    <div id="Slideshow" >
  <swiper :options="swiperOption" v-if="list.length>0">
    <!-- slides -->
    <swiper-slide v-for="(i,index) in list" :key="index">
        <router-link to="/group">
        <img :src="i.picUrl" alt="">
        </router-link>
    </swiper-slide>   
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
  </div>
</template>

<script>
import "../../assets/other/css/slideshow.scss"
export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
            loop:true,
            pagination: {
            el: '.swiper-pagination',
            },
            autoplay:{
            delay:2500,
            disableOnInteraction: false,
            },
        },
          list:[],
      }
    },
    computed: {
     
    },
    mounted() {
      this.axios.get("api/banner/list").then(res=>{
          this.list=res.data.data
      })
    }
  }
</script>

<style>

</style>
