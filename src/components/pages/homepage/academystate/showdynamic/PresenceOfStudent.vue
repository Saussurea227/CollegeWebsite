<template>
  <div>
    <table cellspacing="0" cellpadding="0" border="0">
      <tbody>
        <tr>
          <td class="tdtwo_head fl">
            <img src="https://www.swpu.edu.cn/is/img/bar.jpg" />
            <span>{{TitleA}}</span>
          </td>
        </tr>
        <tr></tr>
        <tr>
          <td class="innercon">
            <table width="100%" class="winstyle251748">
              <tbody>
                <!-- 第一个 -->
                <tr
                  :id="'line251748_'+item.id"
                  height="20"
                  v-for="(item,index) in Titles"
                  :key="item.messageid"
                >
                  {{ catchline(index+1)}}
                  <td width="1" nowrap>
                    <span class="leaderfont251748">·</span>
                  </td>
                  <td width="100%" style="font-size:9pt">
                    <router-link
                      class="c251748"
                      :to="'/MainContent/'+item.messageid"
                      target="_blank"
                      :title="item.messagetitle"
                    >
                      <!-- <span style="color:#fa0202;">{{item.newsname}}</span> -->
                      <span style="color:#000000;">{{item.messagetitle}}</span>
                    </router-link>
                  </td>

                  <td width="1%" nowrap>
                    <span class="timestyle251748">{{item.createdate}}&nbsp;</span>
                  </td>
                  <td width="1%" nowrap></td>
                </tr>

                <tr height="1" id="duannum251748_4" v-show="this.showline">
                  <td colspan="3" align="center">
                    <hr
                      style="border-style:dashed;border-color:#999999;width:99%;height:1px;border-width:1px 0px 0px 0px;visibility:inherit"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr height="1" id="duannum251748_4" v-show="this.showbottom">
          <td colspan="3" align="center">
            <hr
              style="border-style:dashed;border-color:#999999;width:99%;height:1px;border-width:1px 0px 0px 0px;visibility:inherit"
            />
          </td>
        </tr>
        <tr>
          <td colspan="3" align="center" v-show="this.showbottom">
            <div class="block">
              <el-pagination
                 @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="pageSizes"
                :page-size="PageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="totalCount"
              ></el-pagination>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="3" align="center" v-show="this.showmessage">
            <div class="block">暂无数据</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PresenceOfStudent",
  props: ["TitleA"],
  mounted() {
      this.fetchData(this.PageSize, this.currentPage);
    // this.bus.$on("message", function (val) {
    //   //监听first组件的txt事件   通过管理员端传过来
    //   console.log(val);
    //   console.log("监听first组件的txt事件");
    // });
  },
  methods: {
      fetchData(n1, n2) {
      console.log(n2 + "   n2");
      var vm = this;
      axios({
        methods: "get",
        url: "message/getAllNews", //+ vm.TitleA,
        params: {
          messagetype: vm.TitleA,
          page: n2, //currentPage页码
        },
        // emulateJSON: true,
      }).then(function (resp) {
        console.log(resp);
        if (resp.data.length != 0) {
          vm.Titles = resp.data;
          vm.totalCount = resp.data[1].total;
        } else {
          vm.showbottom = false;
          vm.showmessage = true;
        }
      });
    },
      handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      // 改变每页显示的条数
      this.PageSize = val;
      // 点击每页显示的条数时，显示第一页
      this.fetchData(val, 1);
      // 注意：在改变每页显示的条数时，要将页码显示到第一页
      this.currentPage = 1;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      // 切换页码时，要获取每页显示的条数 val * this.pageSize
      this.fetchData(this.PageSize, val);
    },
    navtitle() {
      this.$emit("navtitle", Title);
    },
    catchline(index) {
      if (index % 5 == 0) {
        this.showline = true;
      }
    },
  },
  watch: {
    TitleA: function () {
      this.$emit("navtitle", Title);
    },
  },

  data() {
    return {
      //总数据
      tableData: [],
      //默认显示页数
      currentPage: 1,
      totalCount: 30,
      // 个数选择器（可修改）
      pageSizes: [3, 6, 9, 12],
      // 默认每页显示的条数（可修改）
      PageSize: 10,
      showmessage: false,
      showbottom: true,
      showline: false,
      // currentPage1: 5,
      // currentPage2: 5,
      // currentPage3: 5,
      // currentPage4: 4,
      index: 0,
      Titles: [
        // {
        //   id: 0,
        //   newsname: "【喜报】我院学子在全国大学生服务外包创新创业大赛上获国奖",
        //   Data: "2020/08/25",
        // },
        // {
        //   id: 1,
        //   newsname: "【喜报】我院学子在全国大学生服务外包创新创业大赛上获国奖",
        //   Data: "2020/08/25",
        // },
        // {
        //   id: 2,
        //   newsname: "【喜报】我院学子在全国大学生服务外包创新创业大赛上获国奖",
        //   Data: "2020/08/25",
        // },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.tdtwo_head {
  margin-top: 12px;
  margin-left: 20px;
  width: 860px;
  height: 35px;
  border-bottom: #002e73 1px solid;
}
.fl {
  float: left;
}
.tdtwo_head span {
  padding-left: 10px;
  position: relative;
  top: -5px;
}
.innercon {
  padding-top: 12px;
  padding-left: 20px;
}
td {
  display: table-cell;
  vertical-align: inherit;
}
table {
  display: table;
  border-collapse: separate;
  box-sizing: border-box;
  border-spacing: 2px;
  border-color: grey;
}
.winstyle251748 {
  padding-left: 20px;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
.leaderfont251748 {
  line-height: 150%;
  color: #222222;
  font-size: 9pt;
}
A.c251748 {
  font-size: 10pt;
  text-decoration: none;
  line-height: 250%;
}
.timestyle251748 {
  font-size: 9pt;
  text-decoration: none;
  line-height: 250%;
}
hr {
  display: block;
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  overflow: hidden;
  border-style: inset;
  border-width: 1px;
}
</style>
