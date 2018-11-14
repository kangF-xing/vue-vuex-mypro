<template>
    <router-link :to="code==0&&localStorageVal!=null&&localStorageUid!=null?{path:'/cupLump/',query:{
        pic:detailV.pic,
        originalPrice:detailV.originalPrice,
        name:detailV.name,
        kanjiaPrice:detailV.kanjiaPrice,
        kjid:kjid,
        characteristic:detailV.characteristic,
        }}:{path:'/register/',query:{id:id,kjid:kjid,val:1}}" tag="div" id="cut-details-footer" @click.native="openFire">
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
      .post("/api/shop/goods/detail?id=" + this.$route.query.id)
      .then(res => {
        this.detailV = res.data.data.basicInfo;
      });
  },
  methods: {
    openFire() {
      let params = new URLSearchParams();
      params.append("token", this.localStorageVal);
      params.append("kjid", this.kjid);
      this.axios.post("/api/shop/goods/kanjia/join/", params).then(res => {
        this.code = res.data.code;
      });
    }
  }
};
</script>

<style>
</style>
