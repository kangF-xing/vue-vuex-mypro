<template>
    <div id="Hitscontent">
        <h2>人气推荐 <small>></small></h2>
        <ul id="Hitscontent-ul">
            <router-link @click.native="VAid(i.id)"  :to='{path:i.kanjia==true?"/cutdetails/":"/group/",query:{id:i.id}}' tag="li" v-for="(i,index) in detaillist" :key="index">
                <img :src="i.pic" alt="">
                <h3>{{i.name}}</h3>
                <h4>{{i.characteristic}}</h4>
                <p>￥{{i.originalPrice}}</p>
            </router-link>
        </ul>
    </div>
</template>

<script>
import "../../assets/other/css/moodscontnet.scss";
export default {
  data() {
    return {
      detaillist: []
    };
  },
  mounted() {
    this.axios.get(global.globalData.api + "shop/goods/list").then(res => {
      this.detaillist = res.data.data.filter(i => {
        return i.recommendStatusStr == "推荐";
      });
    });
  },
  methods: {
    VAid(val) {
      localStorage.vaid = val;
    }
  }
};
</script>

<style>
</style>