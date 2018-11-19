<template>
    <div id="storeUpHeader">
        <div id="integral">
            <p>您的可以积分</p>
            <h3>20</h3>
        </div>
        <div id="AddValue">
            <ul class="AddValue">
                <li v-for="(i,index) in score" :key="index">+{{i.score}}</li>
            </ul>
            <ul class="dot">
                <li><p></p></li>
                <li><p></p></li>
                <li><p></p></li>
                <li><p></p></li>
                <li><p></p></li>
                <li><p></p></li>
                <li><p></p></li>
            </ul>
            <ol>
                <li v-for="(i,index) in continuous" :key="index">{{i.continuous}}天</li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      continuous: [],
      score: []
    };
  },
  created() {
    this.axios
      .post(
        global.globalData.api +
          "score/logs/?token=" +
          localStorage.getItem("token")
      )
      .then(res => {
        this.score = res.data.data.result;
      });
    this.axios
      .post(
        global.globalData.api +
          "score/sign/logs/?token=" +
          localStorage.getItem("token")
      )
      .then(res => {
        this.continuous = res.data.data.result;
      });
  }
};
</script>

<style>
</style>
