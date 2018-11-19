<template>
    <router-link to="" tag="div" id="cut-details-footer" @click.native="openFire">
            立即发起砍价，最低可砍到{{detailV.kanjiaPrice}}
    </router-link>
</template>

<script>
import "../../../assets/other/css/cutDetailsfooter.scss";
export default {
  data() {
    return {
      detailV: [],
      kjid: 0,
      code: "",
      id: "",
      localStorageVal: "",
      localStorageUid: ""
    };
  },
  mounted() {
    this.localStorageUid = localStorage.getItem("uid");
    this.localStorageVal = localStorage.getItem("token");
    this.kjid = this.$route.query.kjid;
    this.id = this.$route.query.id;
    this.axios
      .post(
        global.globalData.api + "shop/goods/detail?id=" + this.$route.query.id
      )
      .then(res => {
        this.detailV = res.data.data.basicInfo;
      });
  },
  methods: {
    openFire() {
      let params = new URLSearchParams();
      params.append("token", this.localStorageVal);
      params.append("kjid", this.kjid);
      this.axios
        .post(global.globalData.api + "shop/goods/kanjia/join/", params)
        .then(res => {
          if (
            res.data.code == 0 &&
            this.localStorageVal != null &&
            this.localStorageUid != null
          ) {
            this.$router.push({
              path: "/cupLump/",
              query: {
                pic: this.detailV.pic,
                originalPrice: this.detailV.originalPrice,
                name: this.detailV.name,
                kanjiaPrice: this.detailV.kanjiaPrice,
                kjid: this.kjid,
                id: this.id,
                characteristic: this.detailV.characteristic
              }
            });
          } else {
            this.$router.push({
              path: "/register/",
              query: {
                id: this.id,
                kjid: this.kjid,
                val: 1
              }
            });
          }
        });
    }
  }
};
</script>

<style>
</style>
