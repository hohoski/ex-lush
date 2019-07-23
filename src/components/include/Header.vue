<template>
  <div id="header">
    <div class="contBody">
      <h1>
        <router-link to="/"
          ><img src="@/assets/images/common/logo.png" alt="LUSH"
        /></router-link>
      </h1>
      <ul class="utilNav">
        <li class="gSearch">
          <a href="#"
            ><img src="@/assets/images/ico/icon_search.png" alt="SEARCH"
          /></a>
        </li>
        <li class="gCart">
          <a href="#"
            ><img src="@/assets/images/ico/icon_cart.png" alt="CART"
          /></a>
          <span>0</span>
        </li>
        <li class="gMypage">
          <a href="#"
            ><img src="@/assets/images/ico/icon_mypage.png" alt="MYPAGE"
          /></a>
          <div class="pop_mypage">
            <ul>
              <li><a href="#">로그인</a></li>
              <li><a href="#">회원가입</a></li>
              <li><a href="#">스카우트</a></li>
              <li><a href="#">고객센터</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

    <div id="gnb">
      <ul>
        <li>
          <a href="#">PRODUCTS</a>
          <div class="subGnb proSubGnb">
            <ul>
              <li>
                <strong><a href="#">러쉬</a></strong>
                <ul class="subDept2">
                  <li>
                    <a href="#">베스트</a>
                    <ul>
                      <li><a href="#">주간 베스트</a></li>
                      <li><a href="#">별 다섯개 후기</a></li>
                      <li><a href="#">기프트 베스트</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">배쓰</a>
                    <ul>
                      <li><a href="#">배쓰 밤</a></li>
                      <li><a href="#">버블 바</a></li>
                      <li><a href="#">배쓰 오일</a></li>
                      <li><a href="#">펀</a></li>
                      <li><a href="#">젤리 밤</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">샤워</a>
                    <ul>
                      <li><a href="#">솝</a></li>
                      <li><a href="#">샤워 젤 &amp; 젤리</a></li>
                      <li><a href="#">보디 컨디셔너</a></li>
                      <li><a href="#">샤워 밤</a></li>
                      <li><a href="#">스크럽 &amp; 버터</a></li>
                      <li><a href="#">펀</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">보디</a>
                    <ul>
                      <li><a href="#">클렌저</a></li>
                      <li><a href="#">핸드 앤 풋</a></li>
                      <li><a href="#">로션</a></li>
                      <li><a href="#">마사지 바</a></li>
                      <li><a href="#">더스팅 파우더</a></li>
                      <li><a href="#">쉐이빙 크림</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">페이스</a>
                    <ul>
                      <li><a href="#">클렌저</a></li>
                      <li><a href="#">페이스 마스크</a></li>
                      <li><a href="#">젤리 마스크</a></li>
                      <li><a href="#">토너</a></li>
                      <li><a href="#">모이스춰라이저</a></li>
                      <li><a href="#">프라이머</a></li>
                      <li><a href="#">립</a></li>
                      <li><a href="#">쉐이빙 크림</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">헤어</a>
                    <ul>
                      <li><a href="#">샴푸 바</a></li>
                      <li><a href="#">샴푸</a></li>
                      <li><a href="#">드라이 샴푸</a></li>
                      <li><a href="#">컨디셔너</a></li>
                      <li><a href="#">트리트먼트</a></li>
                      <li><a href="#">스타일링</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">메이크업</a>
                    <ul>
                      <li><a href="#">파운데이션</a></li>
                      <li><a href="#">블러쉬</a></li>
                      <li><a href="#">아이즈</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">퍼퓸</a>
                    <ul>
                      <li><a href="#">보디 스프레이</a></li>
                      <li><a href="#">블랙 라벨</a></li>
                      <li><a href="#">화이트 리퀴드</a></li>
                      <li><a href="#">화이트 솔리드</a></li>
                      <li><a href="#">워시 카드</a></li>
                      <li><a href="#">퍼퓸 낫랩</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">기프트</a>
                    <ul>
                      <li><a href="#">1-3만원대</a></li>
                      <li><a href="#">4-6만원대</a></li>
                      <li><a href="#">7만원 이상</a></li>
                      <li><a href="#">낫랩</a></li>
                      <li><a href="#">스웨그</a></li>
                      <li><a href="#">악세서리</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">프로모션</a>
                    <ul>
                      <li><a href="#">셀러브레이션</a></li>
                      <li><a href="#">국내제조</a></li>
                      <li><a href="#">온라인 전용</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong><a href="#">LUSH SPA</a></strong>
                <ul class="subDept2">
                  <li>
                    <a href="#">SPA</a>
                    <ul>
                      <li><a href="#">TREATMENTS</a></li>
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
export default {
  name: "Header",
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
