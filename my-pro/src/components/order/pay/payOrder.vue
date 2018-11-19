<template>
    <div id="pay-order">
        <div id="pay-order-header">
            <span @click="go">＜</span>
            <p>确认订单</p>
        </div>
        <router-link :to="{path:'/myaddress/',query:{val:listone}}" tag="div" id="pay-address">
            <h3>⚢</h3>
            <div>
                <p>{{list.linkMan}} {{list.mobile}}</p>
                <h4>{{list.address}}</h4>
            </div>
            <h5>></h5>
        </router-link>
        <img src="../../../assets/img/images/border.png" alt="">
        <div id="bgcolor"></div>
    </div>
</template>

<script>
import "../../../assets/other/css/payorder.scss";
export default {
  data() {
    return {
      list: [],
      listone: []
    };
  },
  computed: {},
  mounted() {
    this.listone = this.$route.query;
    this.axios
      .post(
        global.globalData.api +
          "user/shipping-address/default/?token=" +
          localStorage.token
      )
      .then(res => {
        this.list = res.data.data;
      });
  },
  methods: {
    go() {
      if (this.listone.val == 1) {
        this.$router.push({
          path: "/cart"
        });
      } else {
        this.$router.push({
          path: "/group/",
          query: {
            id: this.listone.id
          }
        });
      }
    }
  }
};
</script>

<style>
</style>
