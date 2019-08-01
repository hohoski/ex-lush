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
            placeholder="이미지 URL을 입력하세요"
            value="https://miro.medium.com/max/1200/1*vFC8tDUGLlXIiqT7ymf3xg.png"
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
        @click.prevent="$router.go(-1)"
        class="btn btnTypeA"
        style="width:200px;"
        >취소</a
      >
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"
export default {
  name: "Form",
  data() {
    const seq =
      this.$route.params.seq !== undefined ? this.$route.params.seq : null
    return {
      idx: "",
      title: "",
      img: "",
      seq: seq
    }
  },
  computed: {
    ...mapState(["boardList"])
  },
  mounted() {
    this.boardList.forEach((element, idx) => {
      if (element.seq === this.seq) {
        this.title = element.title
        this.img = element.img
        this.idx = idx
      }
    })
  },
  methods: {
    ...mapMutations(["addBoardList"]),
    ...mapMutations(["modifyBoardList"]),
    complete() {
      let seqNum = 0
      if (this.seq != null) {
        seqNum = this.seq
        this.modifyBoardList({
          seq: seqNum,
          title: this.title,
          img: this.img
        })
      } else {
        seqNum = Number(this.boardList[0].seq) + 1
        this.addBoardList({ seq: seqNum, title: this.title, img: this.img })
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
