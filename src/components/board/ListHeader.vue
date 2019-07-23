<template>
  <div
    class="listHeader"
    v-bind:style="{
      backgroundImage: 'url(' + headerInfo.backgroundUrl + ')'
    }"
  >
    <div>
      <em>{{ headerInfo.title }} </em>
      <p v-html="headerInfo.subText"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["headerInfo"],
  name: "ListHeader"
}
</script>

<style lang="scss" scoped></style>
