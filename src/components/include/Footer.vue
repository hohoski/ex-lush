<template>
  <div id="footer">
    <div class="contBody">
      <div class="subwrapL">
        <div class="flogo">
          <a href="#"
            ><img src="/assets/images/common/f_logo.png" alt="LUSH"
          /></a>
        </div>
        <dl>
          <dt>고객센터</dt>
          <dd>Tel : 1644-2357</dd>
          <dd>Fax : 02-795-7516</dd>
          <dd>월~금 10:00 ~ 17:00 <br />(점심시간 12:00 ~ 13:00)</dd>
          <dd class="mail">
            문의메일 :<br />
            <a href="mailto:webmaster@lush.co.kr" target="_blank"
              >webmaster@lush.co.kr</a
            >
          </dd>
        </dl>
      </div>
      <div class="subwrapR">
        <div class="subinfo">
          <ul class="foot_menu">
            <li><a href="#">스카우트</a></li>
            <li><a href="#">회사소개</a></li>
            <li class="f_bd"><a href="#">개인정보처리방침</a></li>
            <li><a href="#">이용약관</a></li>
            <li><a href="#">대량문의</a></li>
            <li><a href="#">고객센터</a></li>
          </ul>

          <!-- 구독 신청 start -->
          <div class="newsletter">
            <form
              name="lushnews"
              id="lushnews"
              action="../main/news_ps.php"
              method="post"
              target="ifrmProcess"
              novalidate="novalidate"
            >
              <input type="hidden" name="mode" value="receivenews" />
              <dl>
                <dt>최신 LUSH 뉴스를 받아 보세요!</dt>
                <dd>
                  <input
                    type="text"
                    name="receiveNewsEmail"
                    id="receiveNewsEmail"
                    placeholder="이메일 주소를 입력해 주세요."
                    maxlength="25/"
                  />
                  <a href="#">구독하기</a>
                </dd>
              </dl>
            </form>
          </div>
          <!-- 구독 신청 end -->

          <div class="copyright">
            <address>
              서울특별시 서초구 서운로 138 (서초동아타워) 6층 | 사이트 운영자 :
              러쉬코리아 | 대표이사 : 우미령
            </address>
            사업자 등록번호 : 201-81-77964
            <a onclick="popup_bizInfo('2018177964');" alt="사업자정보확인"
              >사업자정보확인</a
            >
            | 통신판매업 신고번호 : 2012-서울서초-0647 | 개인정보보호책임자 :
            우승용
            <div class="copy">
              Copyright © LUSHKOREA co., Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>
