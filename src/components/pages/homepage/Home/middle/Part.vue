<template>
  <div id="part">
    <part-item>
      <TR>
        <TD valign="top">
          <TABLE cellspacing="0" cellpadding="0" border="0">
            <TR>
              <TD height="40" style="border-bottom: #e5e5e5 1px solid">
                <img src="@/assets/belowpart/bar.jpg" />
              </TD>
              <TD style="border-bottom: #e5e5e5 1px solid">
                <FONT color="#002e73" size="4">教育教学</FONT>
              </TD>
              <TD align="right" style="border-bottom: #e5e5e5 1px solid">
                <!-- <A href="/AcademyState" style="color: #002e73">更多+</A> -->
                <router-link
                  to="/AcademyState"
                  @click.native="find('aducationofteaching')"
                  style="color: #002e73;text-decoration:none"
                >更多+</router-link>
              </TD>
            </TR>
            <TR>
              <TD class="td_03" width="400" colspan="3">
                <table class="winstyle251735" width="100%" cellspacing="3" cellpadding="0">
                  <tr v-for="item in FilteredItems" :key="item.messageid">
                    <td align="center" valign="middle" width="10" nowrap>
                      <span class="leaderfont251735">
                        <img src="@/assets/belowpart/dian01.jpg" align="absmiddle" border="0" />
                      </span>
                    </td>

                    <td valign="middle" align="left" class="titleborderstyle251735">
                      <a
                        href="info/2270/1471.htm"
                        class="c251735"
                        :title="item"
                        target="_blank"
                      >{{item.messagetitle}}</a>
                    </td>

                    <td
                      valign="middle"
                      align="right"
                      class="timestyle251735"
                      width="1%"
                      nowrap
                    >{{item.createdate}}</td>
                  </tr>
                </table>
              </TD>
            </TR>
          </TABLE>
        </TD>
        <TD width="20"></TD>

        <TD valign="top">
          <TABLE cellspacing="0" cellpadding="0" border="0">
            <TR>
              <TD height="40" style="border-bottom: #e5e5e5 1px solid">
                <img src="@/assets/belowpart/bar.jpg" />
              </TD>
              <TD style="border-bottom: #e5e5e5 1px solid">
                <FONT color="#002e73" size="4">学子风采</FONT>
              </TD>
              <TD align="right" style="border-bottom: #e5e5e5 1px solid">
                <router-link
                  to="/AcademyState"
                  @click.native="find('presencepofstudent')"
                  style="color: #002e73;text-decoration:none"
                >更多+</router-link>
              </TD>
            </TR>
            <TR>
              <TD class="td_03" width="400" colspan="3">
                <table class="winstyle251735" width="100%" cellspacing="3" cellpadding="0">
                  <tr v-for="item in FilteredItems" :key="item.messageid">
                    <td align="center" valign="middle" width="10" nowrap>
                      <span class="leaderfont251735">
                        <img src="@/assets/belowpart/dian01.jpg" align="absmiddle" border="0" />
                      </span>
                    </td>

                    <td valign="middle" align="left" class="titleborderstyle251735">
                      <a
                        href="info/2270/1471.htm"
                        class="c251735"
                        :title="item"
                        target="_blank"
                      >{{item.messagetitle}}</a>
                    </td>

                    <td
                      valign="middle"
                      align="right"
                      class="timestyle251735"
                      width="1%"
                      nowrap
                    >{{item.createdate}}</td>
                  </tr>
                </table>
              </TD>
            </TR>
          </TABLE>
        </TD>
        <TD width="20"></TD>

        <TD valign="top">
          <TABLE cellspacing="0" cellpadding="0" border="0">
            <TBODY>
              <TR>
                <TD height="40" style="border-bottom: #e5e5e5 1px solid">
                  <img src="@/assets/belowpart/bar.jpg" />
                </TD>
                <TD style="border-bottom: #e5e5e5 1px solid">
                  <FONT color="#002e73" size="4">招生就业</FONT>
                </TD>
                <TD align="right" style="border-bottom: #e5e5e5 1px solid">
                  <!-- <A href="xydt/zsjy.htm" style="color: #002e73">更多+</A> -->
                  <router-link
                    to="/AcademyState"
                    @click.native="find('collectstudent')"
                    style="color: #002e73;text-decoration:none"
                  >更多+</router-link>
                </TD>
              </TR>
              <TR>
                <TD class="td_03" width="400" colspan="3">
                  <table class="winstyle251929" width="100%" cellspacing="3" cellpadding="0">
                    <tr v-for="item in FilteredItems" :key="item.messageid">
                      <td align="center" valign="middle" width="10" nowrap>
                        <span class="leaderfont251929">
                          <img src="@/assets/belowpart/dian01.jpg" align="absmiddle" border="0" />
                        </span>
                      </td>

                      <td valign="middle" align="left" class="titleborderstyle251929">
                        <a
                          href="info/2272/1728.htm"
                          class="c251929"
                          title="信息学院毕业生就业指导手册"
                          target="_blank"
                        >
                          <span style="color:#f50519;">{{item.messagetitle}}</span>
                        </a>
                      </td>

                      <td
                        valign="middle"
                        align="right"
                        class="timestyle251929"
                        width="1%"
                        nowrap
                      >{{item.createdate}}</td>
                    </tr>
                  </table>
                </TD>
              </TR>
            </TBODY>
          </TABLE>
        </TD>
      </TR>
    </part-item>
  </div>
</template>

<script>
import PartItem from "./PartItem";
export default {
  name: "Part",
  components: {
    PartItem,
  },
  data() {
    return {
      title: [],
      isShow: true,
    };
  },

  computed: {
    FilteredItems: function () {
      return this.title.slice(0, 5);
    },
  },
  methods: {
    find(item) {
     this.bus.$emit('thetab',item);
    },
  },
  created() {
    var vm = this;
    this.axios.post("/message/FirstPageResource").then((res) => {
      console.log(res.data);
      vm.title = res.data;
    //   console.log(vm.title);
    });
  },
};
</script>

<style scoped>
.titleborderstyle251735 {
  border-bottom: 1px dashed #bcbcbc;
}
.leaderfont251735 {
  font-size: 9pt;
  line-height: 150%;
}

.timestyle251735 {
  font-size: 10pt;
  border-bottom: #dedede 1px dashed;
  color: #222222;
  line-height: 250%;
}
.winstyle251735 {
  padding-top: 10px;
}
A.c251735 {
  font-size: 10pt;
  text-decoration: none;
  line-height: 250%;
  color: #000000;
}
A.c251735:link {
  color: #222222;
}
A.c251735:visited {
  color: #222222;
}
A.c251735:active {
  color: #222222;
}
A.c251735:hover {
  color: #cc0000;
}

.titleborderstyle251738 {
  border-bottom: 1px dashed #bcbcbc;
}
.leaderfont251738 {
  font-size: 9pt;
  line-height: 150%;
}

.timestyle251738 {
  font-size: 10pt;
  border-bottom: #dedede 1px dashed;
  color: #222222;
  line-height: 250%;
}
.winstyle251738 {
  padding-top: 10px;
}
A.c251738 {
  font-size: 10pt;
  text-decoration: none;
  line-height: 250%;
  color: #000000;
}
A.c251738:link {
  color: #222222;
}
A.c251738:visited {
  color: #222222;
}
A.c251738:active {
  color: #222222;
}
A.c251738:hover {
  color: #cc0000;
}

.titleborderstyle251929 {
  border-bottom: 1px dashed #bcbcbc;
}
.leaderfont251929 {
  font-size: 9pt;
  line-height: 150%;
}

.timestyle251929 {
  font-size: 10pt;
  border-bottom: #dedede 1px dashed;
  color: #222222;
  line-height: 250%;
}
.winstyle251929 {
  padding-top: 10px;
}
A.c251929 {
  font-size: 10pt;
  text-decoration: none;
  line-height: 250%;
  color: #000000;
}
A.c251929:link {
  color: #222222;
}
A.c251929:visited {
  color: #222222;
}
A.c251929:active {
  color: #222222;
}
A.c251929:hover {
  color: #cc0000;
}
</style>