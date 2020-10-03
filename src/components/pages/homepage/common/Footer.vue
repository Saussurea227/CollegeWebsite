<template>
  <footer>
    <!-- 底部 -->
    <div class="footer02">
      <div class="container">
        <div id="address">
          <p>
            <!-- 版权内容请在本组件"内容配置-版权"处填写 -->
          </p>
          <p style="text-align: center">
            西南石油大学信息学院&nbsp;&nbsp;地址：四川省南充市顺庆区油院路二段1号西南石油大学南充校区
            <br />电话：0817-2641226&nbsp;&nbsp;邮编：637001&nbsp;&nbsp;版权
            @Copy
            <br />
          </p>
          <p></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import "@/components/pages/homepage/common/css/footer.css";

export default {
  name: "Footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
}
.footer02 {
  width: 100%;
  text-align: center;
  color: #fff;
  height: 120px;
  background: #132a67;
  display: block;
}
</style>
