<template>
  <div class="formWrap">
    <div class="section">
      <ul class="formArea">
        <li>
          <label>제목</label>
          <input v-model="title" type="text" placeholder="내용을 입력하세요" />
        </li>
        <li>
          <label>이미지</label>
          <input
            v-model="img"
            type="text"
            placeholder="이미지 경로를 입력하세요"
            value="https://t1.daumcdn.net/cfile/tistory/9983F6355C28DD7516"
          />
        </li>
      </ul>
    </div>
    <div class="btnArea">
      <a
        href="#"
        @click.prevent="complete()"
        class="btn btnTypeA"
        style="width:200px;"
        >완료</a
      >
      <a
        href="#"
        @click.prevent="complete()"
        class="btn btnTypeA"
        style="width:200px;"
        >취소</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      title: "",
      img: ""
    }
  },
  methods: {
    complete() {
      console.log("abc")
    }
  }
}
</script>

<style lang="scss" scoped></style>
