<template>
    <div id="Bargaining-content">
        <router-link to="/cutprice" tag="h2">全民砍价 <small>></small></router-link>
        <ul>
            <router-link :to='{path:"/cutdetails",query:{id:i.id,kjid:idlist[index]}}' tag="li" v-for="(i,index) in detaillist" :key="index">
                <img :src="i.pic" alt="">
                <h3>{{i.name}}</h3>
                <p>{{i.characteristic}}</p>
                <ol>
                    <li><span>￥{{i.kanjiaPrice}}</span><p>低价</p></li>
                    <li><span>￥2{{i.originalPrice}}</span><p>原价</p></li>
                    <li><span>{{i.stores}}件</span><p>限量</p></li>
                </ol>
            </router-link>
        </ul>
    </div>
</template>

<script>
import "../../assets/other/css/Bargainingcontent.scss";
export default {
  data() {
    return {
      detaillist: [],
      idlist: []
    };
  },
  mounted() {
    this.axios.get("api/shop/goods/list").then(res => {
      this.detaillist = res.data.data.filter(i => {
        return i.kanjia == true;
      });
    });
    this.axios.get("api/shop/goods/kanjia/list").then(res => {
      this.idlist = res.data.data.result.reverse();
      this.idlist = this.idlist.map(i => {
        return i.id;
      });
      this.$store.commit("KJID", this.idlist);
    });
  }
};
</script>

<style>
</style>
