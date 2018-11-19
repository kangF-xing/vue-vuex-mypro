<template>
  <div id="app"> 
      <router-view/>
  </div>
</template>

<script>
import IScroll from "iscroll";
export default {
  name: "App",
  mounted() {
    if (
      localStorage.getItem("arr") == "" ||
      localStorage.getItem("arr") == null
    ) {
      let arr = [];
      localStorage.arr = JSON.stringify(arr);
    }
  }
};
</script>

<style>
</style>
