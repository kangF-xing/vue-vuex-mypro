// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import "./assets/App.scss";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./config/Api/glboal.js";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import store from "./store/store";
import axios from "axios";
import VueScroller from "vue-scroller";
// 引入上拉加载
import infiniteScroll from "vue-infinite-scroll";

Vue.config.productionTip = false;
Vue.use(infiniteScroll);

//把 `axios` 加到 `Vue` 的原型中
Vue.prototype.axios = axios;

Vue.use(VueAwesomeSwiper /* { default global options } */);

Vue.use(ElementUI);
Vue.use(VueScroller);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  axios,
  components: { App },
  template: "<App/>"
});
