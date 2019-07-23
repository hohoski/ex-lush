<template>
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
</template>

<script>
export default {
  name: "Notice"
}
</script>

<style lang="scss" scoped></style>
