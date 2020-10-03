<template>
  <div>
    <div>
      <div class="container">
        <table cellspacing="0" cellpadding="0" border="0" style="padding-bottom: 20px">
          <tbody>
            <tr>
              <td rowspan="6">
                <!-- <router-link @click.native="login"> -->
                <img
                  @click="login"
                  src="https://www.swpu.edu.cn/is/img/kslj.png"
                  style="border:1px solid #cccccc;cursor: pointer;"
                />
                <!-- </router-link> -->
              </td>
            </tr>
            <tr>
              <td width="60"></td>
              <td>
                <a href="https://www.swpu.edu.cn/is/kbhksxx/bjkb.htm" target="_blank">
                  <img border="0" src="https://www.swpu.edu.cn/is/img/kstd_02.jpg" />
                </a>
              </td>
              <td width="60"></td>
              <td>
                <a href="https://www.swpu.edu.cn/is/kbhksxx/jskb.htm" target="_blank">
                  <img border="0" src="https://www.swpu.edu.cn/is/img/kstd_04.jpg" />
                </a>
              </td>
              <td width="60"></td>
              <td>
                <a href="https://www.swpu.edu.cn/is/kbhksxx/ksxx.htm" target="_blank">
                  <img border="0" src="https://www.swpu.edu.cn/is/img/kstd_06.jpg" />
                </a>
              </td>
            </tr>
            <tr>
              <td width="60"></td>
              <td>
                <a
                  href="https://www.swpu.edu.cn/jiaoxueziyuan/index.jsp?urltype=tree.TreeTempUrl&amp;wbtreeid=1387"
                  target="_blank"
                >
                  <img border="0" src="https://www.swpu.edu.cn/is/img/kstd_12.jpg" />
                </a>
              </td>
              <td width="60"></td>
              <td>
                <a
                  href="https://www.swpu.edu.cn/jiaoxueziyuan/index.jsp?urltype=tree.TreeTempUrl&wbtreeid=1387"
                  target="_blank"
                >
                  <img border="0" src="https://www.swpu.edu.cn/is/img/kstd_13.jpg" />
                </a>
              </td>
              <td width="60"></td>
              <td>
                <a href="https://www.swpu.edu.cn/nc/qtlm/xxgk.htm" target="_blank">
                  <img border="0" src="https://www.swpu.edu.cn/is/img/kstd_14.jpg" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import "@/components/pages/homepage/common/css/footer.css";
export default {
  name: "secondFooter",
  methods: {
    login() {
      this.$router.push("/Logging");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
