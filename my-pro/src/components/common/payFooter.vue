<template>
    <div id="pay-footer">
        <p v-show="!trueorfalse">合计：￥{{cartoriginalPrice}}</p>
        <p v-show="trueorfalse">合计：￥{{list.originalPrice*num}}</p>
        <router-link  v-show="trueorfalse" @click.native="GenerateDorders" to="" tag="span">
            提交订单
        </router-link>
        <router-link v-show="!trueorfalse"  @click.native="GenerateDorders" to="" tag="span">
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
    if (this.list.name == "" || this.list.name == undefined) {
      this.listcart = JSON.parse(localStorage.getItem("arr"));
      this.listcart.map(i => {
        this.cartoriginalPrice += i.originalPrice * i.num;
        this.trueorfalse = false;
      });
    } else {
    }
  },
  methods: {
    GenerateDorders() {
      let query = new URLSearchParams();
      if (this.trueorfalse == true) {
        let arr = [
          {
            goodsId: this.list.id,
            number: 1,
            logisticsType: 0,
            propertyChildIds: localStorage.getItem("goodsID")
          }
        ];
        query.append("token", localStorage.getItem("token"));
        query.append("expireMinutes", 0);
        query.append("goodsJsonStr", JSON.stringify(arr));
        this.axios
          .post(global.globalData.api + "order/create/", query)
          .then(res => {
            console.log(res);
            if (res.data.code == 0) {
              this.$router.push({
                path: "/payprice/",
                query: {
                  zj: this.list.originalPrice * this.list.num,
                  ddid: res.data.data.id,
                  orderNumber: res.data.data.orderNumber,
                  list: this.list
                }
              });
            }
          });
      } else if (this.trueorfalse == false) {
        let query = new URLSearchParams();
        let arrOne = [
          {
            goodsId: this.listcart[0].id,
            number: this.listcart[0].num,
            logisticsType: 0,
            propertyChildIds: this.listcart[0].skuPrice
          },
          {
            goodsId: this.listcart[1].id,
            number: this.listcart[1].num,
            logisticsType: 0,
            propertyChildIds: this.listcart[1].skuPrice
          }
        ];
        query.append("token", localStorage.getItem("token"));
        query.append("expireMinutes", 0);
        query.append("goodsJsonStr", JSON.stringify(arrOne));
        this.axios
          .post(global.globalData.api + "order/create/", query)
          .then(res => {
            console.log(res);
            if (res.data.code == 0) {
              this.$router.push({
                path: "/payprice/",
                query: {
                  zj: this.cartoriginalPrice,
                  ddid: res.data.data.id,
                  orderNumber: res.data.data.orderNumber,
                  list: this.list
                }
              });
            }
          });
      } else {
        this.$router.push({
          path: "/payorder/",
          query: {
            characteristic: this.list.characteristic,
            id: this.list.id,
            imgurl: this.list.imgurl,
            name: this.list.name,
            num: this.list.num,
            originalPrice: this.list.originalPrice,
            servename: this.list.servename,
            sizename: this.list.sizename
          }
        });
      }
    }
  }
};
</script>

<style>
</style>