<template>
    <div id="pay-footer">
        <p v-show="!trueorfalse">合计：￥{{cartoriginalPrice}}</p>
        <p v-show="trueorfalse">合计：￥{{list.originalPrice*num}}</p>
        <router-link v-show="trueorfalse" :to="{path:'/payprice/',query:{zj:list.originalPrice*num}}" tag="span">
            提交订单
        </router-link>
        <router-link v-show="!trueorfalse" :to="{path:'/payprice/',query:{zj:cartoriginalPrice}}" tag="span">
            提交订单
        </router-link>
    </div>
</template>

<script>
import "../../assets/other/css/payFooter.scss";
export default {
  data() {
    return {
      list: [],
      listcart: [],
      cartoriginalPrice: 0,
      trueorfalse: true
    };
  },
  computed: {
    num() {
      return this.$store.state.buynum;
    }
  },
  created() {
    this.list = this.$route.query;
    if (this.list == "" || this.list == undefined) {
      this.listcart = JSON.parse(localStorage.getItem("arr"));
      this.listcart.map(i => {
        this.cartoriginalPrice += i.originalPrice * i.num;
        this.trueorfalse = false;
      });
    } else {
      console.log(this.list);
    }
  }
};
</script>

<style>
</style>
