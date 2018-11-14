<template>
    <div id="group-show">
        <div id="group-show-content" v-for="(i,index) in detailList" :key="index">
        <div id="group-show-details">
            <img :src="transfer.pic" alt="">
            <h3>{{i.name}}</h3>
            <p>￥{{transfer.originalPrice}}</p>
            <span @click="shut">×</span>
        </div>
        <div class="group-show-select-1">
            <h3>选择版本</h3>
            <ul>
                <li class="show-li-1" v-for="(item,index) in i.childsCurGoods" :key="index" @click="ADDstyle(index,item)" :class="{showLiQH:addCLass==index}">
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
            <router-link v-show="!parshow" @click.native="K" :to="sizename!==''||servename!==''?{path:usertoken==''||usertoken==undefined?'/register/':'/payorder/',query:{
                id:vaid,
                characteristic:transfer.characteristic,
                sizename:sizename,
                name:transfer.name,
                imgurl:transfer.pic,
                originalPrice:transfer.originalPrice,
                servename:servename,
                }}:{path:'/group/GroupShow',query:{id:vaid}}">
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
      transfer: [],
      addCLass: -1,
      addCLAss: -1,
      sizename: "",
      servename: "",
      vaid: "",
      usertoken:"",
      arrayObject:[],
    };
  },
  computed: {
    buynum() {
      return this.$store.state.buynum;
    },
    parshow(){
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
    ADDstyle(val, i) {
      this.addCLass = val;
      this.sizename = i.name;
      // this.axios.post("api/shop/goods/price/").then((res)=>{

      // })  
    },
    AdDstyle(val, i) {
      this.addCLAss = val;
      this.servename = i.name;
    },
    K() {
      if (this.sizename == "" || this.servename == "")alert("请选择尺码" || "请选择服务");
    },
    //加入购物车
    Addcart(){
      this.$store.commit("shut")
      if (this.sizename == "" || this.servename == "")alert("请选择尺码" || "请选择服务");
      var arra={
        sizename:this.sizename,
        servename:this.servename,
        imgurl:this.transfer.pic,
        characteristic:this.transfer.characteristic,
        name:this.transfer.name,
        originalPrice:this.transfer.originalPrice,
        num:this.buynum,
        trueorfalse:false,
        }
        
      //读取 //重新转换为对象
    var str=JSON.parse(localStorage.getItem("arr"));
      str.push(arra)
      localStorage.arr=JSON.stringify(str);
      this.$store.commit("buynum",1)
      this.$store.commit("ADDcart",str)

    // 定义数组传入本地存储
  
// localStorage.setItem("arr", JSON.stringify(arr))
// var arr = JSON.parse(localStorage.getItem("arr"))
// arr.push(this.vaid)
// localStorage.setItem("arr", JSON.stringify(arr))

    },
  },
  mounted() {
    this.vaid = this.$route.query.id
    this.usertoken = localStorage.token
    this.axios
      .get(
         "/api/shop/goods/detail/?id=" + this.$route.query.id
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