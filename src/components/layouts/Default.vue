<template>
  <div id="wrapper">
    <my-header />
    <slot />
    <my-footer />
  </div>
  <!-- //wrapper -->
</template>

<script>
import MyHeader from "@/components/include/Header.vue"
import MyFooter from "@/components/include/Footer.vue"
export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>
