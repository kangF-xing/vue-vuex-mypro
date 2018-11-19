<template>
    <div id="Giftcertificate">
        <h3 @click="go">＜</h3>
        <div id="bgimg">
            <img src="../../../assets/img/images/timg.jpg" alt="">
        </div>
        <div id="input-box">
            <input type="text" placeholder="请输入礼券码"> <button>兑换</button>
        </div>
        <ul>
          <li v-for="(i,index) in list" :key="index" @click="roll(i.id)">{{i.name}}</li>
        </ul>
        <div id="Giftimg">
            <img src="../../../assets/img/images/lj1.png" alt="">
             <img src="../../../assets/img/images/lj2.png" alt="">
        </div>
    </div>
</template>

<script>
import "../../../assets/other/css/Giftcertificate.scss";
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.axios.get(global.globalData.api + "discounts/coupons").then(res => {
      console.log(res);
      this.list = res.data.data;
    });
  },
  methods: {
    go() {
      this.$router.go(-1);
    },
    roll(val) {
      let query = new URLSearchParams();
      query.append("token", localStorage.getItem("token"));
      query.append("id", val);
      this.axios
        .post(global.globalData.api + "discounts/fetch/", query)
        .then(res => {
          console.log(res);
          if (res.data.code == 0) {
            alert("哇塞!" + res.data.data.money + "钱");
          }
        });
    }
  }
};
</script>

<style>
</style>
