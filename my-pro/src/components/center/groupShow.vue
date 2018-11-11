<template>
    <div id="group-show">
        <div id="group-show-content" v-for="(i,index) in detailList" :key="index">
        <div id="group-show-details">
            <img src="../../assets/img/images/20181105135749_08.jpg" alt="">
            <h3>{{i.name}}</h3>
            <p>￥{{transfer.originalPrice}}</p>
            <span @click="shut">×</span>
        </div>
        <div class="group-show-select-1">
            <h3>选择版本</h3>
            <ul>
                <li class="show-li-1" v-for="(item,index) in i.childsCurGoods" :key="index" @click="ADDstyle(index,item.name)" :class="{showLiQH:addCLass==index}">
                    {{item.name}}
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
            <router-link @click.native="K" :to="sizename!==''||servename!==''?{path:usertoken==''||usertoken==undefined?'/register/':'/payorder/',query:{
                id:vaid,
                characteristic:transfer.characteristic,
                sizename:sizename,
                name:transfer.name,
                imgurl:transfer.pic,
                originalPrice:transfer.originalPrice,
                servename:servename,
                }}:{path:'/group/',query:{id:vaid}}">
                立即购买
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
      transfer: [],
      addCLass: -1,
      addCLAss: -1,
      sizename: "",
      servename: "",
      vaid: "",
      usertoken:"",
      aaa:"",
    };
  },
  computed: {
    buynum() {
      return this.$store.state.buynum;
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
    ADDstyle(val, name) {
      this.addCLass = val;
      this.sizename = name;
    },
    AdDstyle(val, name) {
      this.addCLAss = val;
      this.servename = name;
    },
    K() {
      if (this.sizename == "" || this.servename == "")
        alert("请选择尺码" || "请选择服务");
    }
  },
  mounted() {
    this.vaid = this.$route.query.id
    this.usertoken = localStorage.token
    this.axios
      .get(
        global.globalData.api + "shop/goods/detail/?id=" + this.$route.query.id
      )
      .then(res => {
        this.detailList = res.data.data.properties;
        this.transfer = res.data.data.basicInfo;
      });
  }
};
</script>

<style>
</style>