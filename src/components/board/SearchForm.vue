<template>
  <div class="searchFormTypeA">
    <select name="searchField" style="width:100px;">
      <option value="subject">제목</option>
      <option value="contents">내용</option>
      <option value="writerNm">작성자</option>
    </select>
    <input
      type="text"
      class="text"
      name="searchWord"
      value=""
      style="width:320px;"
    />
    <a href="#">검색</a>
  </div>
  <!-- //searchFormTypeA -->
</template>

<script>
export default {
  name: "SearchFormTypeA"
}
</script>

<style lang="scss" scoped></style>
