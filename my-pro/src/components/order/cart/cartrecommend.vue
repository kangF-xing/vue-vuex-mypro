<template>
    <div id="cartrecommend">
        <h2>猜你喜欢</h2>
        <ul>
            <router-link tag="li" v-for="(i,index) in detaillist" :key="index" :to='{path:i.kanjia==true?"/cutdetails/":"/group/",query:{id:i.id}}'>
                <img :src="i.pic" alt="">
                <span>{{i.name}}</span>
                <p>￥{{i.kanjiaPrice||i.originalPrice}}</p>
            </router-link>
        </ul>
    </div>
</template>

<script>
import "../../../assets/other/css/cartrecommend.scss";
export default {
  data() {
    return {
      detaillist: []
    };
  },
  created() {
    this.axios.get(global.globalData.api + "shop/goods/list").then(res => {
      this.detaillist = res.data.data.filter(i => {
        return i.recommendStatusStr == "推荐";
      });
    });
  },
  methods: {}
};
</script>

<style>
</style>
