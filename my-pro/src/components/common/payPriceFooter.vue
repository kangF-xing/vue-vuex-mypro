<template>
    <div id="pay-price-footer" @click="zf">
        微信支付 ￥{{val}}
    </div>
</template>

<script>
export default {
  data() {
    return {
      val: ""
    };
  },
  mounted() {
    this.val = this.$route.query.zj;
  },
  methods: {
    zf() {
      window.location.href =
        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe93d3f996beab1eb&redirect_uri=http://www.wyunfei.com/index1.html&response_type=code&scope=snsapi_userinfo&state=" +
        this.val;
      console.lo(window.location.href);
    }
  }
};
</script>

<style>
</style>
