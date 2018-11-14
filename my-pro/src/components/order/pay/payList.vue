<template>
    <div id="pay-list">
        <h2>商品列表</h2>
        <ul>
            <li v-show="!trueorfalse" v-for="(i,index) in listcart" :key="index">
                <img :src="i.imgurl" alt="" >
                <p>{{i.name}}
                    <span>￥{{i.originalPrice}}</span>
                </p>
                <p class="fu">{{i.characteristic}}</p>
                <h4>选择版本:{{l.sizename}}  
                    选择服务:{{i.servename}}</h4>
                <h5>x {{i.num}}</h5>
            </li>
            <li v-show="trueorfalse">
                <img :src="list.imgurl" alt="" >
                <p>{{list.name}}
                    <span>￥{{list.originalPrice}}</span>
                </p>
                <p class="fu">{{list.characteristic}}</p>
                <h4>选择版本:{{list.sizename}}  
                    选择服务:{{list.servename}}</h4>
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
                <li v-show="!trueorfalse">商品金额<span>￥{{cartoriginalPrice}}</span></li>
                <li v-show="trueorfalse">商品金额<span>￥{{list.originalPrice}}</span></li>
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
      listcart:[],
      searchBarFixed: false,
      cartoriginalPrice:0,
      trueorfalse:true,
    };
  },
  computed: {
    num() {
      return this.$store.state.buynum;
    }
  },
  mounted() {
      this.list = this.$route.query;
      if(this.list==''||this.list==undefined){
        this.listcart=JSON.parse(localStorage.getItem("arr"))
           this.listcart.map(i=>{
            this.cartoriginalPrice+=i.originalPrice*i.num
            this.trueorfalse=false
        })
      }else{
          console.log(this.list)
      }
     //this.$refs.myproOL.
  },
  methods: {}
};
</script>

<style>
</style>