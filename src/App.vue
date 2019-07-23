<template>
  <div id="app">
    <my-header />
    <div id="container">
      <router-view />
    </div>
    <my-footer />
  </div>
</template>

<script>
import MyHeader from "@/components/include/Header.vue"
import MyFooter from "@/components/include/Footer.vue"

export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter
  },
  created() {}
}
</script>

<style lang="scss">
@import url("./assets/css/default.scss");
@import url("./assets/css/fonts.scss");
@import url("./assets/css/common.scss");
@import url("./assets/css/layout.scss");
@import url("./assets/css/content.scss");
</style>
