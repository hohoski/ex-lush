<template>
  <div id="app">
    <default-layout>
      <div id="container">
        <router-view />
      </div>
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from "@/components/layouts/Default.vue"
import { mapMutations } from "vuex"
import axios from "axios"

export default {
  name: "App",
  components: {
    DefaultLayout
  },
  created() {
    axios.get("/list.json").then(result => {
      this.setBoardList(result.data)
    })
    axios.get("/menuProducts.json").then(result => {
      this.setProductMenus(result.data)
    })
  },
  methods: {
    ...mapMutations(["setProductMenus"]),
    ...mapMutations(["setBoardList"])
  }
}
</script>

<style lang="scss"></style>
