<template>
  <div>
    <table class="table1" cellspacing="0" cellpadding="0" border="0">
      <tbody>
        <tr>
          <td valign="top" width="700">
            <table class="table1_1" cellspacing="0" cellpadding="0" border="0">
              <tbody>
                <tr>
                  <td class="td_01" colspan="4"></td>
                </tr>
                <tr>
                  <td class="td_02" width="40">
                    <img src="https://www.swpu.edu.cn/is/img/2.png" />
                  </td>
                  <td class="td_02" width="90">
                    <font color="#002e73" size="4">学院新闻</font>
                  </td>
                  <td class="td_02">
                    <font color="#a6937c">News</font>
                  </td>
                  <td class="td_02" align="right">
                    <!-- <a href style="color:#002e73;text-decoration:none">更多+</a> -->
                    <router-link
                      to="/AcademyState"
                      @click.native="find('collegenews')"
                      style="color:#002e73;text-decoration:none"
                    >更多+</router-link>
                  </td>
                </tr>
                <tr>
                  <td colspan="4">
                    <table cellspacing="0" cellpadding="0" border="0" style="padding-top: 10px">
                      <tbody>
                        <tr>
                          <td>
                            <div
                              align="left"
                              display="none"
                              style="overflow:hidden;text-overflow:ellipsis;height:0px;width:300px;padding-left:2px;padding-right:2px"
                            >
                              <a
                                target="_blank"
                                class="summarystyle251727"
                                id="u_u4_newssummary"
                                style="text-decoration: none"
                              ></a>
                            </div>
                            <table
                              cellspacing="0"
                              cellpadding="0"
                              border="0"
                              style="padding:0px;margin:0px;border:0px"
                            >
                              <tbody class="flashBoxu_u3_">
                                <tr>
                                  <td>
                                    <div style="overflow:hidden;height:170px;width:280px">
                                      <div
                                        id="u_u4_div"
                                        align="center"
                                        style="padding:0px;margin:0px; border:0px solid black;background-color:#000000; filter:progid:DXImageTransform.Microsoft.RevealTrans(duration=2.0,transition=23);height:220px;width:280px"
                                      >
                                        <div id="u_u4_imgdiv" style="padding:0px;border:0px;">
                                          <el-carousel :interval="5000" arrow="always">
                                            <el-carousel-item v-for="item in images" :key="item">
                                              <a
                                                id="u_u4_url"
                                                target="_blank"
                                                href="https://www.swpu.edu.cn/is/info/2268/1624.htm"
                                                style="text-decoration: none"
                                              >
                                                <img
                                                  id="u_u4_pic"
                                                  border="0"
                                                  width="280"
                                                  height="220"
                                                  :src="item"
                                                />

                                                <div
                                                  align="center"
                                                  style="overflow:hidden;text-overflow:ellipsis;height:25px;width:300px;"
                                                >
                                                  <a
                                                    style="text-decoration: none"
                                                    target="_blank"
                                                    class="titlestyle251727"
                                                    id="u_u4_newstitle"
                                                    href="https://www.swpu.edu.cn/is/info/2268/1898.htm"
                                                    title="学院召开2020年秋季学期教学工作大会"
                                                  >{{item}}</a>
                                                </div>
                                              </a>
                                            </el-carousel-item>
                                          </el-carousel>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td height="25px">
                                    <div
                                      align="center"
                                      style="overflow:hidden;text-overflow:ellipsis;height:25px;width:300px;"
                                    >
                                      <el-carousel :interval="5000" arrow="always">
                                        <el-carousel-item v-for="item in content" :key="item">
                                          <div
                                            align="center"
                                            style="overflow:hidden;text-overflow:ellipsis;height:25px;width:300px;"
                                          >
                                            <a
                                              style="text-decoration: none"
                                              target="_blank"
                                              class="titlestyle251727"
                                              href="https://www.swpu.edu.cn/is/info/2268/1898.htm"
                                              title="学院召开2020年秋季学期教学工作大会"
                                            >{{item}}</a>
                                          </div>
                                        </el-carousel-item>
                                      </el-carousel>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td valign="top" width="540">
                            <table
                              class="winstyle251729"
                              width="100%"
                              cellspacing="3"
                              cellpadding="0"
                            >
                              <tbody>
                                <tr v-for="item in FilteredItems" :key="item.messageid">
                                  <td align="center" valign="middle" width="10" nowrap>
                                    <span class="leaderfont251729">
                                      <img
                                        src="@/assets/belowpart/dian01.jpg"
                                        align="absmiddle"
                                        border="0"
                                      />
                                    </span>
                                  </td>
                                  <td valign="middle" align="left" class="titleborderstyle251729">
                                    <a
                                      style="text-decoration: none"
                                      href="https://www.swpu.edu.cn/is/info/2268/1916.htm"
                                      class="c251729"
                                      title="助力学生返校——学院学生在行动"
                                      target="_blank"
                                    >{{item.messagetitle}}</a>
                                  </td>
                                  <td
                                    valign="middle"
                                    align="right"
                                    class="timestyle251729"
                                    width="1%"
                                    nowrap
                                  >{{item.createdate}}</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>

          <td width="25"></td>
          <td valign="top">
            <table class="table1_1" cellspacing="0" cellpadding="0" border="0">
              <tbody>
                <tr>
                  <td class="td_01" colspan="4"></td>
                </tr>

                <tr>
                  <td class="td_02" width="40">
                    <img src="https://www.swpu.edu.cn/is/img/3.png" />
                  </td>
                  <td class="td_02" width="90">
                    <font color="#002e73" size="4">通知公告</font>
                  </td>
                  <td class="td_02">
                    <font color="#a6937c">Notice</font>
                  </td>
                  <td class="td_02" align="right">
                    <router-link
                      to="/AcademyState"
                      @click.native="find('announcement')"
                      style="color:#002e73;text-decoration:none"
                    >更多+</router-link>
                  </td>
                </tr>

                <tr v-for="item in FilteredItems" :key="item.messageid">
                  <td class="td_04" colspan="4" align="left">
                    <table class="winstyle251732" width="100%" cellspacing="3" cellpadding="0">
                      <tr>
                        <td align="center" valign="middle" width="10" nowrap>
                          <span class="leaderfont251732">
                            <img src="@/assets/belowpart/dian01.jpg" align="absmiddle" border="0" />
                          </span>
                        </td>
                        <td valign="middle" align="left" class="titleborderstyle251732">
                          <a
                            style="text-decoration:none"
                            href="http://edu.people.com.cn/n1/2020/0828/c367001-31841046.html"
                            class="c251732"
                            title="一图看懂秋冬季新冠肺炎疫情防控技术方案--高校篇"
                            target="_blank"
                          >
                            <span style="color:#f50505;">{{item.messagetitle}}</span>
                          </a>
                        </td>
                        <td
                          valign="middle"
                          align="right"
                          class="timestyle251732"
                          width="1%"
                          nowrap
                        >{{item.createdate}}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: "Saps",

  data() {
    return {
      images: [
        "https://www.swpu.edu.cn/is/images/19/07/19/4bletp4oo8/01.jpg",
        "https://www.swpu.edu.cn/is/images/19/07/19/4bletp4oo8/03.jpg",
        "https://www.swpu.edu.cn/is/images/19/07/19/4bletp4oo8/04.jpg",
        "https://www.swpu.edu.cn/is/images/19/07/19/4bletp4oo8/06.jpg",
      ],
      num: ["1", "2", "3", "4"],
      content: [
        "学院召开2020年秋季学期教学工作大会22",
        "学院召开2020年秋季学期教学工作大会11",
        "学院召开2020年秋季学期教学工作大会342",
        "学院召开2020年秋季学期教学工作大会2343",
        "学院召开2020年秋季学期教学工作大会23534",
      ],
      title: [],
    };
  },
  methods: {
    find(item) {
      this.bus.$emit("thetab", item);
    },
  },
  computed: {
    FilteredItems: function () {
      return this.title.slice(0, 5);
    },
  },
  created() {
    var vm = this;
    this.axios.post("/message/FirstPageResource").then((res) => {
      console.log(res.data);
      vm.title = res.data;
      console.log(vm.title);
    });
  },
};
</script>


<style>
.nav_menustyle_1_1 ul {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}

.nav_menustyle_1_1 li {
  float: left;
  text-align: center;
  position: relative;
}

.nav_menustyle_1_1 ul li ul li {
  float: none;
  z-index: 100;
}

.nav_menustyle_1_1 ul li ul li ul {
  left: 100%;
  top: 0px;
}

.nav_menustyle_1_1 table {
  position: absolute;
  left: 0px;
  border-collapse: collapse;
  border-spacing: 0;
  z-index: 100;
}
.nav_menustyle_1_1 table table {
  top: 0px;
}
.nav_menustyle_1_1 td {
  padding: 0;
}

.nav_menustyle_1_1 li ul,
.nav_menustyle_1_1 li:hover ul li ul,
.nav_menustyle_1_1 li:hover ul li:hover ul li ul,
.nav_menustyle_1_1 li:hover ul li:hover ul li:hover ul li ul,
.nav_menustyle_1_1 li:hover ul li:hover ul li:hover ul li:hover ul li ul {
  display: none;
}
.nav_menustyle_1_1 li a:hover ul li ul,
.nav_menustyle_1_1 li a:hover ul li a:hover ul li ul,
.nav_menustyle_1_1 li a:hover ul li a:hover ul li a:hover ul li ul,
.nav_menustyle_1_1
  li
  a:hover
  ul
  li
  a:hover
  ul
  li
  a:hover
  ul
  li
  a:hover
  ul
  li
  ul {
  visibility: hidden;
}
.nav_menustyle_1_1 li a:hover ul,
.nav_menustyle_1_1 li:hover ul,
.nav_menustyle_1_1 li:hover ul li:hover ul,
.nav_menustyle_1_1 li:hover ul li:hover ul li:hover ul,
.nav_menustyle_1_1 li:hover ul li:hover ul li:hover ul li:hover ul,
.nav_menustyle_1_1 li:hover ul li:hover ul li:hover ul li:hover ul li:hover ul {
  display: block;
  position: absolute;
}
.nav_menustyle_1_1 li a:hover ul li a:hover ul,
.nav_menustyle_1_1 li a:hover ul li a:hover ul li a:hover ul,
.nav_menustyle_1_1 li a:hover ul li a:hover ul li a:hover ul li a:hover ul,
.nav_menustyle_1_1
  li
  a:hover
  ul
  li
  a:hover
  ul
  li
  a:hover
  ul
  li
  a:hover
  ul
  li
  a:hover
  ul {
  visibility: visible;
}

.nav_menustyle_1_1 a {
  display: block;
  text-decoration: none;
  white-space: nowrap;
}

.nav_menustyle_1_1 a {
  width: 120px;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  color: #fff;
  background: #002e73;

  border-width: 0px 1px 1px 0px;
}

.nav_menustyle_1_1 a:hover {
  color: #002e73;
  background: #eeeeee;
}

.nav_menustyle_1_1 table {
  top: 26px;
}
.nav_menustyle_1_1 table table {
  left: 91px;
}

.nav_menustyle_1_1 ul li ul li a {
  font-weight: 400;
  font-size: 14px;
}

.nav_menustyle_1_1 ul li ul li a:hover {
  background: #eeeeee;
  color: #002e73;
}

/* .nav_menustyle_1_1 ul li ul li ul li a
  {}

  .nav_menustyle_1_1 ul li ul li ul li a:hover
  {} */

.titlestyle251727 {
  line-height: 220%;
  color: #222222;
  font-size: 9pt;
  font-weight: bold;
  text-decoration: none;
}
.summarystyle251727 {
  line-height: 150%;
  color: #222222;
  font-size: 9pt;
}

.titleborderstyle251729 {
  border-bottom: 1px dashed #bcbcbc;
}
.leaderfont251729 {
  font-size: 9pt;
  line-height: 150%;
}

.timestyle251729 {
  font-size: 10pt;
  border-bottom: #dedede 1px dashed;
  color: #222222;
  line-height: 200%;
}
.winstyle251729 {
  padding-left: 10px;
}
A.c251729 {
  font-size: 10pt;
  text-decoration: none;
  padding-left: 5px;
  line-height: 250%;
  color: #000000;
}
A.c251729:link {
  color: #222222;
}
A.c251729:visited {
  color: #222222;
}
A.c251729:active {
  color: #222222;
}
A.c251729:hover {
  color: #cc0000;
}

.titleborderstyle251732 {
  border-bottom: 1px dashed #bcbcbc;
}
.leaderfont251732 {
  font-size: 9pt;
  line-height: 150%;
  padding-right: 5px;
}

.timestyle251732 {
  font-size: 10pt;
  border-bottom: #dedede 1px dashed;
  color: #222222;
  line-height: 250%;
}
.winstyle251732 {
  padding-top: 10px;
}
A.c251732 {
  font-size: 10pt;
  text-decoration: none;
  line-height: 250%;
  color: #000000;
}
A.c251732:link {
  color: #222222;
}
A.c251732:visited {
  color: #222222;
}
A.c251732:active {
  color: #222222;
}
A.c251732:hover {
  color: #cc0000;
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

#top_nav li {
  float: right;
  padding-right: 20px;
  list-style: none;
}
#top_nav li a {
  color: #002e73;
  line-height: 32px;
}

.table1 {
  margin-top: 20px;
}
.table1_1 .td_01 {
  height: 2px;
  width: 800px;
  border-top: #002e73 3px solid;
  padding-bottom: 5px;
}
.td_02 {
  padding-bottom: 5px;
  border-bottom: #d4d4d4 1px solid;
}
.td_03 ul {
  margin: 0px;
  padding: 0px;
}
.td_03 ul li {
  margin: 0px;
  padding: 0px;
  list-style: none;
  line-height: 48px;
  border-bottom: #dcdcdc 1px dashed;
}
.td_03 ul li a {
  color: #74777b;
  margin: 0px;
}

.td_03 ul li .calander h5 {
  padding: 0;
  margin: 0;
  height: 24px;
  background: #fff;
  color: #002e73;
  font-family: arial;
  line-height: 24px;
}
.td_03 ul li .calander p {
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-family: arial;
  color: #fff;
}
.td_04 ul {
  margin: 0px;
  padding: 0px;
}
.td_04 ul li {
  margin: 0px;
  padding-top: 10px;
  list-style: none;
  height: 58px;
  width: 320px;
}
.td_04 ul li a {
  color: #74777b;
  margin: 0px;
}

.td_04 ul li .calander h5 {
  padding: 0;
  margin: 0;
  height: 24px;
  background: #fff;
  color: #002e73;
  font-family: arial;
  line-height: 24px;
}
.td_04 ul li .calander p {
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-family: arial;
  color: #fff;
}

.td_04 ul li .ca_content a {
  /*	display: block;*/
  padding-left: 8px;
}

.life ul li {
  list-style: none;
}

.footer02 p {
  padding-top: 10px;
  vertical-align: middle;
}

.footer03 p {
  padding-top: 10px;
  vertical-align: middle;
}

.nav_list ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.nav_list ul li {
  height: 40px;
  text-align: center;
  border-top: #fff 1px solid;
  border-bottom: #636363 1px solid;
}

.nav_list ul li ul {
  display: none;
}
.nav_list ul li ul li {
  border-left: 0;
  border-right: 0;
  background-color: #6196bb;
  border-color: #467ca2;
}

.nav_list ul li:first-child {
  border-top: none;
}

.nav_list ul li a {
  line-height: 40px;
  color: #080808;
}

.nav_list .button_check a {
  color: #002e73;
}

.tdtwo_head span {
  padding-left: 10px;
  position: relative;
  top: -5px;
}

.innercon p {
  padding-top: 12px;
  padding-left: 20px;
}

.zstable li {
  list-style: none;
  width: 110px;
  height: 30px;
  float: left;
}
.zstable li a:link {
  color: #222222;
}
.zstable li a:hover {
  color: #002e73;
}
.zyul li {
  list-style: none;
}
.zyul li a:link {
  color: #222222;
}
.zyul li a:hover {
  color: #002e73;
}

.jl p {
  text-align: center;
  height: 30px;
  width: 100px;
  background-color: #002e73;
  line-height: 30tpx;
  color: #fff;
  font-size: 16px;
}
</style>
