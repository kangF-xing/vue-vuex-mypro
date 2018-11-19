<template>
    <div id="My-Order">
        <div id="My-Order-header">
            <span @click="go">＜</span>
            <p>订单列表</p>
        </div>
        <ul>
            <router-link to="/myorder/" tag="li" @click.native="Addclass(1)" :class="{OrderAddclass:OrderAddclass==1}">
                待付款
            </router-link>
            <router-link to="/MyOrderdropShipping" @click.native="Addclass(2)" tag="li" :class="{OrderAddclass:OrderAddclass==2}">
                待发货
            </router-link>
            <router-link to="/MyOrderDropCollect" @click.native="Addclass(3)" tag="li" :class="{OrderAddclass:OrderAddclass==3}">
                待收货
            </router-link>
            <router-link to="/MyOrderDropAppraise" @click.native="Addclass(4)" tag="li" :class="{OrderAddclass:OrderAddclass==4}">
                待评价
            </router-link>
            <router-link to="/MyOrderOffTheStocks" @click.native="Addclass(5)" tag="li" :class="{OrderAddclass:OrderAddclass==5}">
                已完成
            </router-link>
        </ul>
    <router-view></router-view>
    </div>
</template>

<script>
import "../../../assets/other/css/MyOrder.scss";
export default {
  data() {
    return {
      OrderAddclass: 5
    };
  },
  methods: {
    Addclass(val) {
      this.OrderAddclass = val;
    },
    go() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.OrderAddclass = this.$route.query.index;
  }
};
</script>

<style>
</style>
