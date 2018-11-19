<template>
    <div id="sort">
        <div id="sort-nav">
            <ul>
                <li v-for="(i,index) in navList" :key="index" @click="screen(index)">
                    {{i.name}}
                </li>
            </ul>
        </div>
        <div id="sort-content">
            <div>
                <img class="ADimg" src="../../../assets/img/images/1.png" alt="">
            <ul>
                <router-link tag="li" to="/sortlist" v-for="(i,index) in list" :key="index">
                    <img :src="i.icon" alt="">
                    <p>{{i.name}}</p>
                </router-link>
            </ul>
            </div>
        </div>
    </div>
</template>

<script>
import "@/assets/other/css/sort.scss";
export default {
  data() {
    return {
      navList: [],
      list: [],
      listContent: []
    };
  },
  mounted() {
    this.axios
      .post(global.globalData.api + "shop/goods/category/all")
      .then(res => {
        this.listContent = res.data.data;
        this.list = this.listContent;
        this.navList = res.data.data.filter(i => {
          return i.level == 1;
        });
      });
  },
  methods: {
    screen(val) {
      if (val == 0) {
        this.list = this.listContent.filter(i => {
          return i.type == "jujia2";
        });
      } else if (val == 1) {
        this.list = this.listContent.filter(i => {
          return i.type == "peishi2";
        });
      } else if (val == 2) {
        this.list = this.listContent.filter(i => {
          return i.type == "fuzhuang";
        });
      } else if (val == 3) {
        this.list = this.listContent.filter(i => {
          return i.type == "dianqi2";
        });
      }
    }
  }
};
</script>

<style>
</style>
