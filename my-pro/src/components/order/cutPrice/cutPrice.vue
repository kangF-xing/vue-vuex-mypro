<template>
    <div id="cut-Price">
        <div id="cut-header">
            <span>＜</span>
            <p>砍价列表</p>
        </div>
        <ul id="cut-list">
            <router-link :to='{path:"/cutdetails/",query:{id:i.id,kjid:KJID[index]}}' tag="li" v-for="(i,index) in Pricelist" :key="index">
                <img :src="i.pic" alt="">
                <h3>{{i.name}}</h3>
                <h4>{{i.characteristic}}</h4>
                <ul>
                    <li class="floor-price">
                        <span>￥{{i.kanjiaPrice}}</span>
                        <p>最低价</p>
                    </li>
                    <li>
                        <span>￥{{i.originalPrice}}</span>
                        <p>原价</p>
                    </li>
                    <li>
                        <span>{{i.stores}}</span>
                        <p>限量</p>
                    </li>
                </ul>
            </router-link>
        </ul>
    </div>
</template>

<script>
import "../../../assets/other/css/cutprice.scss";
export default {
  data() {
    return {
      Pricelist: []
    };
  },
  computed: {
    KJID() {
      return this.$store.state.KJID;
    }
  },
  mounted() {
    this.axios.get("api/shop/goods/list").then(res => {
      this.Pricelist = res.data.data.filter(i => {
        return i.kanjia == true;
      });
    });
  }
};
</script>

<style>
</style>
