<template>
  <div id="header">
    <div class="contBody">
      <h1>
        <router-link to="/"
          ><img src="@/assets/images/common/logo.png" alt="LUSH"
        /></router-link>
      </h1>
      <global-utill-nav />
    </div>
    <div id="gnb">
      <ul>
        <li>
          <a href="#">PRODUCTS</a>
          <div class="subGnb proSubGnb">
            <ul>
              <li
                v-for="proMenuDepth1 in getProductMenus"
                :key="proMenuDepth1.name"
              >
                <strong
                  ><a :href="proMenuDepth1.link">{{
                    proMenuDepth1.name
                  }}</a></strong
                >
                <ul class="subDept2">
                  <li
                    v-for="proMenuDepth2 in proMenuDepth1.subMenus"
                    :key="proMenuDepth2.index"
                  >
                    <a :href="proMenuDepth2.link">{{ proMenuDepth2.name }}</a>
                    <ul>
                      <li
                        v-for="proMenuDepth3 in proMenuDepth2.menuLists"
                        :key="proMenuDepth3.index"
                      >
                        <a :href="proMenuDepth3.link">{{
                          proMenuDepth3.name
                        }}</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">BRAND</a>
          <div class="subGnb">
            <ul class="subDept2">
              <li>
                <a href="#">러쉬</a>
                <ul>
                  <li><a href="#">ABOUT LUSH</a></li>
                </ul>
              </li>
              <li><a href="#" @click.prevent="goList('0')">채러티 팟</a></li>
              <li><a href="#" @click.prevent="goList('1')">원재료</a></li>
              <li><a href="#" @click.prevent="goList('2')">아티클</a></li>
              <li><a href="#" @click.prevent="goList('3')">젤러쉬 </a></li>
            </ul>
          </div>
        </li>
        <li><a href="#">SHOPS</a></li>
        <li><a href="#">SPA</a></li>
        <li><a href="#">EVENT</a></li>
      </ul>
    </div>

    <div class="pop_w" style="display:none;">
      <a href="#;" class="pop_close"><span>닫기</span></a>
      <!-- 검색 폼 -->
      <div class="search_con">
        <div class="search">
          <form
            name="frmSearchTop"
            id="frmSearchTop"
            action="../goods/goods_search.php"
            method="get"
            novalidate="novalidate"
          >
            <fieldset>
              <legend>검색폼</legend>
              <div class="txtinput">
                <div class="inp_wrap">
                  <input
                    type="text"
                    id="search-form"
                    name="keyword"
                    class="text search_input"
                    title="<여름 필수템>을 검색해보세요"
                    placeholder="<여름 필수템>을 검색해보세요"
                    autocomplete="off"
                  />
                  <input
                    type="image"
                    class="image search_btn"
                    id="btnSearchTop"
                    title="검색"
                    value="검색"
                    src="/data/skin/front/howling/img/header/btn_topsearch_search.png"
                    alt="검색"
                  />
                </div>
                <div id="n2tab01">
                  <ul class="tit_tab">
                    <li>
                      <a href="javascript:tab2_view(1)" class="selected"
                        >인기검색어</a
                      >
                    </li>
                    <li><a href="javascript:tab2_view(2)">최근검색어</a></li>
                  </ul>
                  <!-- 인기검색어 -->
                  <div class="related-searches keyword_list">
                    <ul>
                      <li>
                        <a
                          href="../goods/goods_search.php?keyword=%EB%8D%94%ED%8B%B0"
                          >#더티</a
                        >
                      </li>
                      <li>
                        <a
                          href="../goods/goods_search.php?keyword=%EB%AF%BC%ED%8B%B0"
                          >#민티</a
                        >
                      </li>
                      <li>
                        <a
                          href="../goods/goods_search.php?keyword=%EC%9E%85%EC%9A%95%EC%A0%9C"
                          >#입욕제</a
                        >
                      </li>
                      <li>
                        <a
                          href="../goods/goods_search.php?keyword=%ED%96%A5%EC%88%98"
                          >#향수</a
                        >
                      </li>
                      <li>
                        <a
                          href="../goods/goods_search.php?keyword=%EC%85%80%EB%9F%AC%EB%B8%8C%EB%A0%88%EC%9D%B4%EC%85%98"
                          >#셀러브레이션</a
                        >
                      </li>
                    </ul>
                  </div>

                  <!-- //인기검색어 -->
                </div>
                <div id="n2tab02" style="display:none;">
                  <ul class="tit_tab">
                    <li><a href="javascript:tab2_view(1)">인기검색어</a></li>
                    <li>
                      <a href="javascript:tab2_view(2)" class="selected"
                        >최근검색어</a
                      >
                    </li>
                  </ul>
                  <!-- 최근검색어 -->
                  <input type="hidden" name="recentCount" value="10" />
                  <div class="recent-area keyword_list">
                    <ul class="recent-list">
                      <!-- <li class="li-tit">최근검색어</li> -->
                      <li>
                        <span style="width: 100px;"
                          ><a
                            href="../goods/goods_search.php?keyword=%EB%8D%94%ED%8B%B0"
                            >더티</a
                          ></span
                        >
                        <!-- <small>2019.07.02</small>
                                            <button type="button" class="dlt_bn js-recent-keyword-delete" data-recent-keyword="더티">X</button> -->
                      </li>
                      <!-- <li class="li-tit hand js-recent-all-delete">전체삭제</li> -->
                    </ul>
                  </div>
                  <!-- //최근검색어 -->
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
      <!-- 검색 폼 -->
    </div>
    <!-- //pop_w -->
  </div>
  <!-- //header -->
</template>

<script>
import $ from "jquery"
import { mapGetters } from "vuex"
import GlobalUtillNav from "@/components/include/GlobalUtillNav"

export default {
  name: "Header",
  components: {
    GlobalUtillNav
  },
  computed: {
    //...mapState(["productMenus"])
    ...mapGetters(["getProductMenus"])
  },
  mounted() {
    $("#gnb > ul > li > a").on("mouseenter", function() {
      if ($(this).siblings(".subGnb").length > 0) {
        $("#gnb > ul > li.on").removeClass("on")
        $(this)
          .parent()
          .addClass("on")
      }
    })
    $("#gnb").on("mouseleave", function() {
      $("#gnb > ul > li.on").removeClass("on")
    })
  },
  methods: {
    goList(num) {
      this.$router.push({
        name: "list",
        params: {
          contentId: num
        }
      })
      $("#gnb > ul > li.on").removeClass("on")
    }
  }
}
</script>

<style lang="scss" scoped></style>
