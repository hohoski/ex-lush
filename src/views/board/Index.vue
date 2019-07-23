<template>
  <div>
    <ul class="tabArea contBody">
      <li><a href="#" @click.prevent="goList('0')">채러티 팟</a></li>
      <li><a href="#" @click.prevent="goList('1')">원재료</a></li>
      <li><a href="#" @click.prevent="goList('2')">아티클</a></li>
      <li><a href="#" @click.prevent="goList('3')">젤러쉬 </a></li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Board",
  methods: {
    goList(num) {
      this.$router.push({
        name: "list",
        params: {
          contentId: num
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tabArea:after {
  content: "";
  clear: both;
  display: block;
}
.tabArea li {
  display: table;
  height: 60px;
  width: 25%;
  float: left;
  position: relative;
  box-sizing: border-box;
  text-align: center;
}
.tabArea li a {
  display: table-cell;
  color: #a1a1a1;
  font-weight: 400;
  vertical-align: middle;
  line-height: 19px;
}
.tabArea li.on:before {
  content: "";
  position: absolute;
  left: 5%;
  bottom: 0;
  display: block;
  width: 90%;
  height: 5px;
  background: #5c5c5c;
}
.tabArea li.on a {
  color: #333;
  font-weight: 500;
}
</style>
