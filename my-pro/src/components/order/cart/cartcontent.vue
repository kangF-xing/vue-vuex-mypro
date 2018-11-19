<template>
    <div id="cartcontent">
        <p v-show="redactorbuy" id="redact" @click="redact">编辑</p>
        <p v-show="!redactorbuy" id="redact" @click="achieve">完成</p>
        <h2>购物车</h2>
        <div v-show="!buyshow" id="bg">
            <span class="iconfont icon-tuanduicankaoxian-"></span>
            <p>去添加点什么吧</p>
        </div>
        <ul>
            <router-link to="" tag="li" v-for="(i,index) in Addcart||list" :key="index">
                <div id="cartdetails" @click="Addclass(i,index)">
                <h3 :class="{back:i.trueorfalse==true}">✔</h3>
                <img :src="i.imgurl" alt="">
                <div>
                    <p>{{i.name}}</p>
                    <span>
                        选择版本   {{i.sizename}}
                        选择服务   {{i.servename}}
                    </span>
                    <p>￥{{i.num*i.originalPrice}}</p>
                </div>  
                </div>  
            <ol>
                <li @click="minus(i,index)">-</li>
                <li>{{i.num}}</li>
                <li @click="add(i,index)">+</li>
            </ol>
            </router-link>
        </ul>
        <div id="bgr">

        </div>
        <div id="place-an-order" v-if="Allchecked">
            <h3 :class="{zxback:color==1}" @click="checkAll" >✔</h3><span>全选</span>
            <p :class="{red:trueorfalsprice==false}">合计<span>{{"￥"+total}}</span></p>
            <router-link tag="div" :to="{path:trueorfals==false?'/cart':'/payorder/',query:{val:1,}}"
             :class="{dise:trueorfals==false}" v-show="redactorbuy">
                下单
            </router-link>
            <router-link tag="div" @click.native="remove" v-show="!redactorbuy" to="" :class="{diseTow:abc==1}">
                删除
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      buyshow: false,
      color: -1,
      trueorfals: true,
      trueorfalsprice: true,
      abc: 1,
      total: 0,
      redactorbuy: true,
      Allchecked: true
    };
  },
  computed: {
    Addcart() {
      return this.$store.state.AdDcart;
    },
    num() {
      return this.$store.state.buynum;
    }
  },
  mounted() {
    this.list = JSON.parse(localStorage.getItem("arr"));
    if (this.list == "" || this.list == null) {
      this.Allchecked = false;
    } else {
      this.Allchecked = true;
    }
    this.list.map(i => {
      if (i.trueorfalse == false) {
        this.total += i.num * i.originalPrice;
      }
    });
    this.list.some(i => {
      if (i.trueorfalse === true) this.color = 1;
    });
    if (this.color == -1) {
      this.list.map(i => {
        i.trueorfalse = false;
      });
      this.trueorfals = true;
      this.trueorfalsprice = true;
    } else {
      this.list.map(i => {
        i.trueorfalse = true;
      });
      this.trueorfals = false;
      this.trueorfalsprice = false;
    }
    if (this.list == "" || this.list == undefined) {
      this.buyshow = false;
    } else {
      this.buyshow = true;
    }
  },
  methods: {
    // 加数量
    add(item, index) {
      this.list[index].num++;
      let numb = 0;
      this.list.map(i => {
        if (i.trueorfalse == false) {
          this.color = -1;
          numb += i.num * i.originalPrice;
        }
        this.total = numb;
      });
      localStorage.arr = JSON.stringify(this.list);
    },
    //  减数量
    minus(item, index) {
      this.list[index].num--;
      if (this.list[index].num <= 1) {
        this.list[index].num = 1;
      }
      let numb = 0;
      this.list.map(i => {
        if (i.trueorfalse == false) {
          this.color = -1;
          numb += i.num * i.originalPrice;
        }
        this.total = numb;
      });
      localStorage.arr = JSON.stringify(this.list);
    },
    //  点击单个选中未选中
    Addclass(item, index) {
      let numb = 0;
      this.list[index].trueorfalse = !this.list[index].trueorfalse;
      if (item.trueorfalse == false) {
        this.total = this.total + item.originalPrice * item.num;
      } else {
        this.total = this.total - item.originalPrice * item.num;
        if (this.total <= 0) {
          this.total = 0;
        }
      }
      if (this.total == 0) {
        this.trueorfals = false;
        this.trueorfalsprice = false;
      } else {
        this.trueorfals = true;
        this.redactorbuy == true
          ? (this.trueorfalsprice = true)
          : (this.trueorfalsprice = false);
      }
      this.list.map(i => {
        if (i.trueorfalse == false) {
          this.color = -1;
          numb += i.num * i.originalPrice;
        }
      });
      this.total = numb;
      this.list.some(i => {
        if (i.trueorfalse === true) {
          this.color = 1;
          this.abc = 2;
        } else {
        }
      });
      this.list.every(i => {
        if (i.trueorfalse == true) {
          this.abc = 1;
        }
      });
      localStorage.arr = JSON.stringify(this.list);
    },
    //  点击全选
    checkAll() {
      this.color == -1 ? (this.color = 1) : (this.color = -1);
      let numb = 0;
      if (this.color == -1) {
        this.list.map(i => {
          i.trueorfalse = false;
          this.abc = 2;
          numb += i.num * i.originalPrice;
        });
        this.total = numb;
        this.trueorfalsprice = true;
        this.trueorfals = true;
        this.redactorbuy == true
          ? (this.trueorfalsprice = true)
          : (this.trueorfalsprice = false);
      } else {
        this.list.map(i => {
          i.trueorfalse = true;
        });
        this.abc = 1;
        this.trueorfals = false;
        this.trueorfalsprice = true;
        if (this.redactorbuy == false || this.redactorbuy == true)
          this.trueorfalsprice = false;
      }
      localStorage.arr = JSON.stringify(this.list);
    },
    // 点击编辑
    redact() {
      this.redactorbuy = false;
      this.trueorfals = false;
      this.trueorfalsprice = false;
      this.list.map(i => {
        i.trueorfalse = true;
      });
      this.list.some(i => {
        if (i.trueorfalse == true) this.color = 1;
      });
    },
    // 点击完成
    achieve() {
      this.redactorbuy = true;
      this.trueorfals = true;
      this.trueorfalsprice = true;
      let numb = 0;
      this.list.map(i => {
        i.trueorfalse = false;
        numb += i.num * i.originalPrice;
      });
      this.total = numb;
      this.list.some(i => {
        if (i.trueorfalse == false) this.color = -1;
      });
    },
    // 点击删除
    remove() {
      this.list = this.list.filter(i => {
        return i.trueorfalse == true;
      });
      localStorage.arr = JSON.stringify(this.list);
      this.redactorbuy = true;

      this.list = JSON.parse(localStorage.getItem("arr"));
    }
  }
};
</script>

<style>
</style>