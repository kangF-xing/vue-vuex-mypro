<template>
    <div id="group-show">
        <div id="group-show-content" >
        <div id="group-show-details">
            <img :src="transfer.pic" alt="">
            <h3>{{transfer.name}}</h3>
            <p>￥{{transfer.originalPrice}}</p>
            <span @click="shut">×</span>
        </div>
        <div class="group-show-select-1">
            <h3>选择版本</h3>
            <ul>
                <li class="show-li-1" v-for="(item,index) in detailList" :key="index" @click="ADDstyle(index,item)" :class="{showLiQH:addCLass==item.id}">
                    {{item.name}}
                </li>
            </ul>
        </div>
        <div class="group-show-select-1" v-if="sku">
            <h3>选择颜色</h3>
            <ul>
                <li class="show-li-1" v-for="(i,index) in detailListone" :key="index" @click="ADdstyle(index,i)" :class="{showLiQH:addClass==i.id}">
                    {{i.name}}
                </li>
            </ul>
        </div>
        <div class="group-show-select-1">
            <h3>选择服务</h3>
            <ul>
                <li class="show-li-1" @click="AdDstyle(501,'不要服务')" :class="{showLiqH:addCLAss==501}">不要服务</li>
                <li class="show-li-1" @click="AdDstyle(502,'部署上线一条龙')" :class="{showLiqH:addCLAss==502}">部署上线一条龙</li>
            </ul>
        </div>
        <div id="group-show-count">
            <h2>购买数量</h2>
            <ul>
                <li @click="minus">-</li>
                <li>{{buynum}}</li>
                <li @click="add">+</li>
            </ul>
        </div>
        <div class="buy">
            <router-link v-show="!parshow" @click.native="K" to="">
                立即购买
            </router-link>
            <router-link v-show="parshow" :to="{path:'/group/',query:{id:vaid}}" @click.native="Addcart">
              加入购物车
            </router-link>
        </div>
        </div>
    </div>
</template>

<script>
import "../../assets/other/css/groupShow.scss";
export default {
  data() {
    return {
      detailList: {},
      detailListone: {},
      transfer: [],
      List: [],
      addCLass: -1,
      addClass: -1,
      addCLAss: -1,
      sizename: "",
      servename: "",
      vaid: "",
      usertoken: "",
      arrayObject: [],
      sku: false,
      skuPrice: ""
    };
  },
  computed: {
    buynum() {
      return this.$store.state.buynum;
    },
    parshow() {
      return this.$store.state.parshow;
    }
  },
  methods: {
    minus() {
      this.$store.commit("minus");
    },
    add() {
      this.$store.commit("add");
    },
    shut() {
      this.$store.commit("shut");
    },
    // 选择颜色
    ADdstyle(val, i) {
      this.addClass = i.id;
    },
    // 选择规格
    ADDstyle(val, i) {
      this.addCLass = i.id;
      this.sizename = i.name;
      let query = new URLSearchParams();
      var str = "";
      str = this.List.id;
      this.skuPrice = str + ":" + i.id;
      query.append("goodsId", this.vaid);
      query.append("propertyChildIds", this.skuPrice);
      localStorage.setItem("goodsID", this.skuPrice);
      this.axios
        .post(global.globalData.api + "shop/goods/price/", query)
        .then(res => {
          this.transfer.originalPrice = res.data.data.originalPrice;
        });
    },
    AdDstyle(val, i) {
      this.addCLAss = val;
      this.servename = i;
    },
    K() {
      this.$store.commit("buynum", 1);
      if (this.sizename == "" || this.servename == "") {
        alert("请选择尺码" || "请选择服务");
        this.$router.push({
          path: "/group/GroupShow/",
          query: {
            id: this.vaid
          }
        });
      } else {
        if (this.usertoken == "" || this.usertoken == undefined) {
          this.$router.push({
            path: "/register/",
            query: {
              id: this.vaid
            }
          });
        } else {
          this.$router.push({
            path: "/payorder/",
            query: {
              id: this.vaid,
              characteristic: this.transfer.characteristic,
              sizename: this.sizename,
              name: this.transfer.name,
              num: this.buynum,
              imgurl: this.transfer.pic,
              originalPrice: this.transfer.originalPrice,
              servename: this.servename
            }
          });
        }
      }
    },
    //加入购物车
    Addcart() {
      this.$store.commit("shut");
      if (this.sizename == "" || this.servename == "")
        alert("请选择尺码" || "请选择服务");
      var arra = {
        id: this.vaid,
        sizename: this.sizename,
        servename: this.servename,
        imgurl: this.transfer.pic,
        characteristic: this.transfer.characteristic,
        name: this.transfer.name,
        skuPrice: this.skuPrice,
        originalPrice: this.transfer.originalPrice,
        num: this.buynum,
        trueorfalse: false
      };

      //读取 //重新转换为对象
      var str = JSON.parse(localStorage.getItem("arr"));
      str.push(arra);
      localStorage.arr = JSON.stringify(str);
      this.$store.commit("buynum", 1);
    }
  },
  created() {
    this.vaid = this.$route.query.id;
    if (this.vaid == "" || this.vaid == undefined) {
      this.$router.push({
        query: {
          id: localStorage.getItem("vaid")
        }
      });
    }
    this.usertoken = localStorage.token;
    this.axios
      .get(
        global.globalData.api +
          "shop/goods/detail/?id=" +
          localStorage.getItem("vaid")
      )
      .then(res => {
        this.List = res.data.data.properties[0];
        this.transfer = res.data.data.basicInfo;
        this.detailList = res.data.data.properties[0].childsCurGoods;
        this.detailListone = res.data.data.properties[1].childsCurGoods;
        if (this.detailListone) {
          this.sku = true;
        }
      });
  }
};
</script>

<style>
</style>