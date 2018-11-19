<template>
    <div id="storeUpcontent">
        <button @click="signIn">签到</button>
        <ul>
            <li v-for="(i,index) in list" :key="index">
                {{i.codeStr}} <span>{{i.score}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import "../../../assets/other/css/storeUpcontent.scss";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.axios.post(global.globalData.api + "score/send/rule").then(res => {
      this.list = res.data.data;
    });
  },
  methods: {
    signIn() {
      this.axios
        .post(
          global.globalData.api +
            "score/sign/?token=" +
            localStorage.getItem("token")
        )
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>

<style>
</style>
