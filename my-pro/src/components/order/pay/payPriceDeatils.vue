<template>
    <div id="pay-price-deatils">
        <div id="pay-price-deatils-header">
            <span @click="go">＜</span>
            <p>确认订单</p>
        </div>
        <div id="pay-price-deatils-allprice">
            <p class="iconfont icon-jinqian"></p>
            <ul>
                <li>商品总额：<span>￥{{val.zj}}</span></li>
                <li class="OrderID">订单号：<span>{{val.orderNumber}}</span></li>
            </ul>
        </div>
        <div id="bgcolor"></div>
        <div id="pay-price-deatils-allprice">
            <p class="iconfont icon-dizhi dizhi"></p>
            <ul>
                <li>{{list.linkMan}} {{list.mobile}}</li>
                <li class="OrderID">{{list.address}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import "../../../assets/other/css/paypricedeatils.scss";
export default {
  data() {
    return {
      list: [],
      val: []
    };
  },
  methods: {
    go() {
      this.$router.push({
        path: "/payorder/",
        query: {
          characteristic: this.val.list.characteristic,
          id: this.val.list.id,
          imgurl: this.val.list.imgurl,
          name: this.val.list.name,
          num: this.val.list.num,
          originalPrice: this.val.list.originalPrice,
          servename: this.val.list.servename,
          sizename: this.val.list.sizename
        }
      });
    }
  },
  mounted() {
    this.val = this.$route.query;
    console.log(this.val);
    this.axios
      .post(
        global.globalData.api +
          "user/shipping-address/default/?token=" +
          localStorage.token
      )
      .then(res => {
        this.list = res.data.data;
      });
  }
};
</script>

<style>
</style>