<template>
    <div id="register">
        <label for="">手机号</label>
        <input type="text" placeholder="请输入手机号" v-model="usernameVal">
        <label for="">密码</label>
        <input type="password" placeholder="请输入密码" v-model="userpassVal">
        <div>
          <button @click="storage">登录</button>
        </div>
    </div>
</template>

<script>
import "../../../assets/other/css/register.scss";
export default {
  data() {
    return {
      list: [],
      usernameVal: "",
      userpassVal: "",
      code: "",
      VAL: ""
    };
  },
  mounted() {
    this.list = this.$route.query;
  },
  methods: {
    storage() {
      // 登录接口
      let query = new URLSearchParams();
      query.append("mobile", this.usernameVal);
      query.append("pwd", this.userpassVal);
      this.axios
        .post(
          global.globalData.api + "user/m/login/?deviceId=1231&deviceName=6165",
          query
        )
        .then(res => {
          console.log(res);
          localStorage.token = res.data.data.token;
          localStorage.uid = res.data.data.uid;
          this.VAL = localStorage.getItem("token");
          this.code = res.data.code;
          // 跳转路由
          if ((this.code == 0 && this.VAL != null) || "token" == undefined) {
            if (this.list.val == 1) {
              this.$router.push({
                path: "/cutdetails",
                query: {
                  id: this.list.id,
                  kjid: this.list.kjid
                }
              });
            } else if (this.list.val == 2) {
              this.$router.push({
                path: "/cupLump/",
                query: {
                  id: this.list.id,
                  kjid: this.list.kjid,
                  pic: this.list.pic,
                  kanjiaPrice: this.kanjiaPrice,
                  originalPrice: this.originalPrice,
                  name: this.name
                }
              });
            } else {
              this.$router.push({
                path: "/group/",
                query: {
                  id: this.list.id
                }
              });
            }
          } else {
            this.$router.push({
              path: "/register/",
              query: {
                id: this.list.id,
                kjid: this.list.kjid,
                val: this.list.val
              }
            });
            alert("请输入正确用户名");
          }
        });
    }
  }
};
</script>

<style>
</style>
