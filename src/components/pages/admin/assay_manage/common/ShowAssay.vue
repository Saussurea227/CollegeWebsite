<template>
  <div>
    <div id="td01" style="padding-bottom: 10px; padding-top: 10px">
      <table class="winstyle251796" cellspacing="0" cellpadding="0">
        <tbody>
          <tr>
            <td nowrap>
              当前位置：
              <a href="#">
                <span class="fontstyle251796">本网首页</span>
              </a>
              <span class="splitflagstyle251796">&gt;&gt;</span>
              <router-link to="/AcademyState">
                <span class="fontstyle251796">学院动态</span>
              </router-link>
              <span class="splitflagstyle251796">&gt;&gt;</span>
              <router-link to="/AcademyState">
                <span class="fontstyle251796">{{ Messagetype }}</span>
              </router-link>
              <span class="splitflagstyle251796">&gt;&gt;</span>
              <span class="fontstyle251796">正文</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      style="
        box-shadow: 6px 8px 5px rgba(255, 255, 255, 0.9);
        border: 10px solid rgba(255, 255, 255, 0.5);
      "
    >
      <h3 align="center">{{ MyTitle }}</h3>
      <div
        align="center"
        style="font-size: 13px; color: #636363; padding-top: 10px"
      >
        {{ Data }}&nbsp;&nbsp;&nbsp;&nbsp;作者：{{
          Autor
        }}&nbsp;&nbsp;&nbsp;&nbsp; 点击:[
        <!-- 点击：[
        <script>_showDynClicks("wbnews", 1632700148, 1473)</script>-->
        <span id="dynclicks_wbnews_1473_274" name="dynclicks_wbnews_1473_274">{{
          Count
        }}</span
        >]
      </div>
      <hr />
      <!-- color: rgb(0, 0, 0);
    margin:0px 30px;
    padding-bottom: 20px;  padding-left: 20px; padding-right: 20px
     line-height: 110%; font-family: 宋体,SimSun;
      font-size: 16px; font-weight: normal;
      font: 400 14px/2em 微软雅黑,宋体,sans-serif;-->
      <div
        :v-html="ModelHtml"
        class="showassay"
        style="
          background: none;
          font: 400 14px/2em 微软雅黑, 宋体, sans-serif;
          margin: 0px;
          padding: 0px;
          outline: 0px;
          border: 0px;
          border-image: none;
          text-align: left;
          color: rgb(41, 41, 41);
          text-transform: none;
          text-indent: 2em;
          letter-spacing: normal;
          text-decoration: none;
          word-spacing: 0px;
          vertical-align: top;
          white-space: normal;
          orphans: 2;
          font-size-adjust: none;
          font-stretch: normal;
          -webkit-text-stroke-width: 0px;
        "
      >
        <!-- <div>{{Html}}</div> -->
        <div v-html="Html" style="white-space: pre-wrap"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowAssay",
  props: [
    "MyTitle",
    "ModelHtml",
    "Html",
    "Messagetype",
    "Autor",
    "Data",
    "Count",
  ],
  //"Data",
  data() {
    return {};
  },

  // mounted() {
  //   this.Html = this.Html.replace(/\s+/g, "&nbsp;");
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-family: 黑体;
  font-size: 15pt;
  margin: 0;
}
.miaoshu {
  white-space: pre-wrap;
}
.showassay >>> p {
  text-indent: 2em;
  width: 80%;
  margin: 0 auto;
}
.showassay >>> img {
  display: block;
  width: 45%;
  height: 100%;

  background-clip: border-box;
  line-height: 150%;

  text-align: center;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 10px;
}
a {
  text-decoration: none;
  color: #000;
}
</style>
