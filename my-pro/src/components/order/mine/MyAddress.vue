<template>
    <div id="my-address">
        <div id="my-address-header">
            <span @click="go">＜</span>
            <p>我的地址</p>
        </div>
        <div id="my-address-content" :class="{backgroun:back==true}">
            <router-link :to="val==''||val==undefined?{path:'/mine'}:{path:'/payorder/',query:{
                id:val.id,
                characteristic:val.characteristic,
                sizename:val.sizename,
                name:val.name,
                imgurl:val.imgurl,
                originalPrice:val.originalPrice,
                servename:val.servename,
            }}" tag="div" @click.native="defaultAdd(index)" id="my-address-list" v-for="(i,index) in list" :key="index">
            <h3><span :class="{spanshow:shownum==index}">✓</span></h3>
            <div>
                <p>{{i.linkMan}} {{i.mobile}}</p>
                <h4>{{i.address}}</h4>
            </div>
            <router-link tag="h5" :to="{path:'/myaddressvalue',query:{val:i}}">✍</router-link>
        </router-link>
        </div>
    </div>
</template>

<script>
import "../../../assets/other/css/MyAddress.scss";
export default {
  data() {
    return {
      list: [],
      back: false,
      shownum: 0,
      val: []
    };
  },
  mounted() {
    this.val = this.$route.query.val;
    this.axios
      .post(
        global.globalData.api +
          "user/shipping-address/list/?token=" +
          localStorage.token
      )
      .then(res => {
        this.list = res.data.data;
      });
    if (this.list.length > 0) this.back = true;
    this.list = this.list.reverse();
  },
  methods: {
    defaultAdd(val) {
      this.shownum = val;
      this.axios
        .post(
          global.globalData.api +
            "user/shipping-address/default/?token=" +
            localStorage.token
        )
        .then(res => {});
    },
    go() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
</style>