<template>
    <div id="pay-list">
        <h2>商品列表</h2>
        <ul>
            <li>
                <img :src="list.imgurl" alt="">
                <p>{{list.name}}<span>￥{{list.originalPrice}}</span></p>
                <p class="fu">{{list.characteristic}}</p>
                <h4>选择版本:{{list.sizename}}  选择服务:{{list.servename}}</h4>
                <h5>x {{num}}</h5>
            </li>
        </ul>
        <div id="bgcolor"></div>
        <ol>
            <li>配送方式 <span>包邮</span></li>
            <li>备注 <input type="text" placeholder="如需备注请输入"></li>
        </ol>
        <div id="bgcolor"></div>
        <div id="pay-list-onSale">
            <p>选择使用优惠卷</p>
            <div>
                <ol ref="myproOL">
                <li>不使用优惠卷</li>
                <li>32元优惠卷</li>
                <li>16元优惠卷</li>
            </ol>
            </div>
        </div>
        <div id="bgcolor"></div>
        <div id="pay-list-close">
            <ol>
                <li>商品金额<span>￥{{list.originalPrice}}</span></li>
                <li>优惠卷<span>-￥0</span></li>
            </ol>
        </div>
         </div>

</template>

<script>
export default {
  data() {
    return {
      list: [],
      searchBarFixed: false
    };
  },
  computed: {
    num() {
      return this.$store.state.buynum;
    }
  },
  mounted() {
      
    this.list = this.$route.query; //this.$refs.myproOL.
    console.log(this.list)
  },
  methods: {}
};
</script>

<style>
</style>