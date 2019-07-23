<template>
  <div id="boardList">
    <list-header :headerInfo="headerInfo" />
    <div class="contBody">
      <search-form />
      <notice-list />

      <div class="listTypeB">
        <ul>
          <li v-for="item in listItems" :key="item.seq">
            <a href="#" @click.prevent="goDetail(item.seq)">
              <span class="thum"><img :src="item.img" :alt="item.title"/></span>
              <strong class="txtArea">{{ item.title }}</strong>
            </a>
          </li>
        </ul>
      </div>
      <paging />
      <div class="btnArea ar">
        <router-link to="/board/form" class="btn btnTypeA" style="width:200px;"
          >글쓰기</router-link
        >
      </div>
    </div>
    <!-- //contBody -->
  </div>
</template>

<script>
import axios from "axios"
import ListHeader from "@/components/board/ListHeader.vue"
import SearchForm from "@/components/board/SearchForm.vue"
import NoticeList from "@/components/board/Notice.vue"
import Paging from "@/components/board/Paging.vue"
export default {
  name: "List",
  data() {
    return {
      headerInfo: "",
      listItems: []
    }
  },
  components: {
    ListHeader,
    SearchForm,
    NoticeList,
    Paging
  },
  computed: {
    contentId() {
      return this.$route.params.contentId
    }
  },
  watch: {
    contentId() {
      this.getHeaderInfo()
    }
  },
  mounted() {
    axios.get("/list.json").then(result => {
      this.listItems = result.data
    })
    this.getHeaderInfo()
  },
  methods: {
    getHeaderInfo() {
      axios.get("/listHeader.json").then(result => {
        this.headerInfo = result.data[this.contentId]
      })
    },
    goDetail(seq) {
      this.$router.push({
        name: "detail",
        params: {
          seq: seq
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
