<template>
  <div id="app">
    <router-view/>
    <v-navber/>
  </div>
</template>

<script>
//js
import base from "./assets/js/base.js";
//模块
import navber from "./components/navber/navber";
export default {
  name: 'App',
  components: {
    'v-navber':navber,
  }
}
</script>
<style>
@import "./assets/css/bootstrap.min.css";
@import "./assets/css/base.css";
@import "./assets/css/swiper.min.css";
</style>
