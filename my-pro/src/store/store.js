import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
let store = new Vuex.Store({
  state: {
    buynum: 1,
    buyshow: false,
    parshow: false,
    kJid: "",
    KJID: []
  },
  mutations: {
    buynum(state, val) {
      state.buynum = val;
    },
    minus(state) {
      state.buynum--;
      if (state.buynum <= 1) {
        state.buynum = 1;
      }
    },
    add(state) {
      state.buynum++;
    },
    comeOut(state) {
      state.buyshow = true;
      state.parshow = true;
    },
    comeout(state) {
      state.buyshow = true;
    },
    shut(state) {
      state.buyshow = false;
      state.parshow = false;
    },
    kjid(state, val) {
      state.kJid = val;
    },
    KJID(state, val) {
      state.KJID = val;
    }
  }
});

export default store;
