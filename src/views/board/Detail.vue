<template>
  <div id="boardDetail">
    <div class="detailArea">
      <h2>채러티 팟</h2>
      <!-- viewCont -->
      <div class="viewCont">
        <div class="viewTit">
          <span>2019.06.18 15:55:32</span>54. 세이브제주바다
        </div>
        <div class="cont">
          <img
            src="http://www.lush.co.kr/data/editor/board/CHARITYPOT/charity_pot_bn_54_162807.jpg"
            title="charity_pot_bn_54_162807.jpg"
            class="js-smart-img"
            style="max-width: 100%;"
          />
          <p>세이브제주바다</p>
          <p>
            제주도 정화 작업과 일회용 플라스틱 쓰레기를 줄이기 위해 활동하는
            100% 자원봉사자로 구성된 환경 봉사단체입니다.
          </p>
        </div>
        <div class="relatedProductArea">
          <p class="tit">Related Product</p>
          <div class="relatedProduct">
            <a href=""
              ><img
                src="http://www.lush.co.kr/data/goods/17/08/18/249/249_main_062.jpg"
                alt=""
            /></a>
            <div class="relatedProductTxt">
              채러티 팟 45g/240g<span class="price">￦10,000</span>
            </div>
          </div>
        </div>
        <div class="btnArea">
          <a href="#" @click.prevent="goList()">목록</a>
        </div>
      </div>
      <!-- //viewCont -->
    </div>

    <!-- 댓글 -->
    <div class="commentArea contBody">
      <div class="commentTit">
        <span class="tit">댓글(<span class="num">0</span>)</span>
        <!--  댓글이 있을경우 노출 -->
        <div class="commentCont">
          <ul>
            <li class="reple">
              <!-- 대댓글일 경우 class='reple" 추가 -->
              <strong
                ><img
                  src="http://www.lush.co.kr/data/skin/front/howling/img/icon/comment-reply.png"
                  alt="수정"
                />서보람</strong
              >
              <div>
                안녕하세요 안녕하세요안녕하세요안녕하세요 안녕하세요<span
                  class="date"
                  >2019-07-11 14:40:40</span
                >
              </div>
              <div class="commentBtn">
                <a href=""
                  ><img
                    src="http://www.lush.co.kr/data/skin/front/howling/img/btn/comment-modify.png"
                    alt="수정"
                /></a>
                <a href=""
                  ><img
                    src="http://www.lush.co.kr/data/skin/front/howling/img/btn/comment-del.png"
                    alt="삭제"
                /></a>
              </div>
            </li>
            <!-- 대댓글일 경우 -->
            <li>
              <strong>서보람</strong>
              <div>
                안녕하세요 안녕하세요안녕하세요안녕하세요 안녕하세요<span
                  class="date"
                  >2019-07-11 14:40:40</span
                >
              </div>
              <div class="commentBtn">
                <a href=""
                  ><img
                    src="http://www.lush.co.kr/data/skin/front/howling/img/btn/comment-reply.png"
                    alt="댓글"
                /></a>
                <a href=""
                  ><img
                    src="http://www.lush.co.kr/data/skin/front/howling/img/btn/comment-modify.png"
                    alt="수정"
                /></a>
                <a href=""
                  ><img
                    src="http://www.lush.co.kr/data/skin/front/howling/img/btn/comment-del.png"
                    alt="삭제"
                /></a>
              </div>
            </li>
          </ul>
        </div>
        <!--  //댓글이 있을경우 노출 -->
      </div>

      <div class="commentTxtArea">
        <input type="checkbox" id="secret" /><label for="secret"
          >비밀댓글</label
        >
        <textarea></textarea>
        <a href="" class="btnOk">확인</a>
      </div>
    </div>
    <!-- //댓글 -->
    <div class="detailList contBody">
      <h3>다른 채러피 팟 보기</h3>
      <div class="noticeArea">
        <table class="listTypeA">
          <colgroup>
            <col style="width:60px" />
            <col />
            <col style="width:100px" />
            <col style="width:60px" />
          </colgroup>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>날짜</th>
              <th>조회</th>
            </tr>
          </thead>
          <tbody>
            <tr class="notice-item">
              <td><span class="noticeTit">공지</span></td>
              <td class="al">
                <a href="javascript:btnView('CHARITYPOT',2 , 'y')" class="c-red"
                  ><b>채러티 팟 펀딩 가이드 (신청서 다운로드)</b></a
                >
              </td>
              <td>
                2019.03.04
              </td>
              <td>
                859
              </td>
            </tr>
            <tr class="notice-item">
              <td><span class="noticeTit">공지</span></td>
              <td class="al">
                <a href="javascript:btnView('CHARITYPOT',1 , 'y')" class="c-red"
                  ><b>채러티 팟이란?</b></a
                >
              </td>
              <td>
                2019.02.25
              </td>
              <td>
                1907
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //noticeArea -->
      <div class="listTypeB">
        <ul>
          <li>
            <a href="#">
              <span class="thum"
                ><img
                  src="http://lush.co.kr/data/editor/board/CHARITYPOT/charity_pot_bn_59_164606.jpg"
                  alt=""
              /></span>
              <strong class="txtArea">55.월드키즈센터</strong>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="thum"
                ><img
                  src="http://lush.co.kr/data/editor/board/CHARITYPOT/charity_pot_bn_59_164606.jpg"
                  alt=""
              /></span>
              <strong class="txtArea">55.월드키즈센터</strong>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="thum"
                ><img
                  src="http://lush.co.kr/data/editor/board/CHARITYPOT/charity_pot_bn_59_164606.jpg"
                  alt=""
              /></span>
              <strong class="txtArea">55.월드키즈센터</strong>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="thum"
                ><img
                  src="http://lush.co.kr/data/editor/board/CHARITYPOT/charity_pot_bn_59_164606.jpg"
                  alt=""
              /></span>
              <strong class="txtArea">55.월드키즈센터</strong>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="thum"
                ><img
                  src="http://lush.co.kr/data/editor/board/CHARITYPOT/charity_pot_bn_59_164606.jpg"
                  alt=""
              /></span>
              <strong class="txtArea">55.월드키즈센터</strong>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="thum"
                ><img
                  src="http://lush.co.kr/data/editor/board/CHARITYPOT/charity_pot_bn_59_164606.jpg"
                  alt=""
              /></span>
              <strong class="txtArea">55.월드키즈센터</strong>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- //contBody -->
    <div class="paging">
      <b>1</b>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  methods: {
    goList() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped></style>
