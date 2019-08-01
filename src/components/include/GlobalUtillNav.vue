<template>
  <ul class="utilNav">
    <li class="gSearch">
      <a href="#"
        ><img src="@/assets/images/ico/icon_search.png" alt="SEARCH"
      /></a>
    </li>
    <li class="gCart">
      <a href="#"><img src="@/assets/images/ico/icon_cart.png" alt="CART"/></a>
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
</template>

<script>
export default {
  name: "globalUtillNav"
}
</script>

<style lang="scss" scoped></style>
