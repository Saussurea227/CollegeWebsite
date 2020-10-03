<template>
  <div class="left">
    <!-- <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
    <el-radio-button label="top">top</el-radio-button>
    <el-radio-button label="right">right</el-radio-button>
    <el-radio-button label="bottom">bottom</el-radio-button>
    <el-radio-button label="left">left</el-radio-button>
    </el-radio-group>-->
    <table
      id="table_list"
      height="600"
      cellspacing="0"
      cellpadding="0"
      border="0"
      style="padding-bottom: 20px"
    >
      <tbody>
        <tr>
          <td id="td01" colspan="2">
            <table class="winstyle251830" cellspacing="0" cellpadding="0">
              <tbody>
                <tr>
                  <td nowrap>
                    当前位置：
                    <router-link to="/Home">
                      <span class="fontstyle251830">本网首页</span>
                    </router-link>
                    <span class="splitflagstyle251830">&gt;&gt;</span>
                    <router-link to="/Home">
                      <span class="fontstyle251830">学院动态</span>
                    </router-link>
                    <span class="splitflagstyle251830">&gt;&gt;</span>
                    <a href="#">
                      <span class="fontstyle251830">{{ this.navtitleA }}</span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>

        <tr>
          <td class="table_list_tdone" valign="top">
            <!-- <div class="nav_list">  -->

            <el-tabs v-model="activeName" :tab-position="tabPosition">
              <el-tab-pane label="学院动态">
                <!-- <CollegeNewsMore :TitleA="'学院新闻'" @navtitle="navtitle"></CollegeNewsMore> -->
              </el-tab-pane>

              <el-tab-pane label="学院新闻" name="collegenews">
                <keep-alive>
                  <CollegeNewsMore
                    :TitleA="'学院新闻'"
                    @navtitle="navtitle"
                  ></CollegeNewsMore>
                </keep-alive>
              </el-tab-pane>

              <el-tab-pane label="通知公告" name="announcement">
                <keep-alive>
                  <AnnouncementMore
                    :TitleA="'通知公告'"
                    @navtitle="navtitle"
                  ></AnnouncementMore>
                </keep-alive>
              </el-tab-pane>
              <el-tab-pane label="教育教学" name="aducationofteaching">
                <keep-alive>
                  <AducationOfTeachingMore
                    :TitleA="'教育教学'"
                    @navtitle="navtitle"
                  ></AducationOfTeachingMore>
                </keep-alive>
              </el-tab-pane>
              <el-tab-pane label="学子风采" name="presencepofstudent">
                <keep-alive>
                  <PresenceOfStudentMore
                    :TitleA="'学子风采'"
                    @navtitle="navtitle"
                  ></PresenceOfStudentMore>
                </keep-alive>
              </el-tab-pane>
              <el-tab-pane label="招生就业" name="collectstudent">
                <keep-alive>
                  <CollectStudentMore
                    :TitleA="'招生就业'"
                    @navtitle="navtitle"
                  ></CollectStudentMore>
                </keep-alive>
              </el-tab-pane>
            </el-tabs>

            <!-- </div> -->
          </td>
        </tr>
      </tbody>
    </table>
    <keep-alive>
      <Footer></Footer>
    </keep-alive>
  </div>
</template>

<script>
import PresenceOfStudentMore from "@/components/pages/homepage/academystate/showdynamic/PresenceOfStudent";
import CollegeNewsMore from "@/components/pages/homepage/academystate/showdynamic/CollegeNews";
import CollectStudentMore from "@/components/pages/homepage/academystate/showdynamic/CollectStudent";
import AnnouncementMore from "@/components/pages/homepage/academystate/showdynamic/Announcement";
import AducationOfTeachingMore from "@/components/pages/homepage/academystate/showdynamic/AducationOfTeaching";
import Footer from "@/components/pages/homepage/common/Footer";

export default {
  components: {
    PresenceOfStudentMore,
    CollegeNewsMore,
    CollectStudentMore,
    AnnouncementMore,
    AducationOfTeachingMore,
    Footer,
  },
  mounted() {
    var vm = this;
    this.bus.$on("thetab", (val) => {
      vm.activeName = val;
    });
  },
  data() {
    return {
      //默认第一个选项卡
      activeName: "collegenews",

      tabPosition: "left",
      navtitleA: "学院新闻",
    };
  },

  methods: {
    navtitle(navtitle) {
      //   this.navtitle = navtitle;
      this.navtitleA = navtitle;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 0;
}
tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
.left >>> td {
  display: table-cell;
  vertical-align: inherit;
}
.left >>> .el-tabs__nav-wrap {
  width: 220px;
  /* height: 800px; */
  height: 800px;
  background-color: #d4d4d4;
}
/* 
.nav_list_head  */
.left >>> .is-active {
  border-left: #d58512 5px solid;
  color: #002e73;
}
.left >>> #tab-0 {
  height: 50px;
  background-color: #002e73;
  color: white;
  text-align: center;
  line-height: 50px;
  font-size: 18.72px;
  font-weight: bold;
}
.left >>> .el-tabs__active-bar {
  background-color: transparent;
}
.left >>> .el-tabs {
  width: 1100px;
}
.left >>> #table_list {
  width: 1100px;
  margin: 0 auto;
  min-height: 600px;
  padding-bottom: 20px;
}
* {
  margin: 0;
}
.left >>> .el-tabs__nav {
  margin: -5px;
  padding: 0;
  list-style: none;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}
.left >>> .is-left {
  margin: 0px;
}
.left >>> .el-tabs__item {
  line-height: 40px;

  height: 40px;
  text-align: center;
  border-top: #fff 1px solid;
  border-bottom: #636363 1px solid;
  display: list-item;
}
#table_list #td01 {
  height: 40px;
  color: #fff;
  text-align: left;
}
.winstyle251830 {
  font-size: 10pt;
  font-family: 微软雅黑;
  color: rgb(99, 99, 99);
}
.splitflagstyle251830 {
  color: #222222;
}
body a {
  text-decoration: none;
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
}
.fontstyle251830 {
  font-size: 9pt;
  color: #222222;
  text-decoration: none;
}
</style>
