<template>
  <div class="main">
    <Head></Head>
    <div class="showAssay" v-show="showAssay">
      <ShowAssay
        :Messagetype="assay.messagetype"
        :MyTitle="assay.messagetitle"
        :Autor="assay.author"
        :Data="assay.createdate"
        :ModelHtml="assay.messagecontent"
        :Html="assay.messagecontent"
        :Count="assay.clickrate"
      ></ShowAssay>
    </div>
    <div
      class="showAssay"
      style="margin-left: 660px; margin-top: 70px; color: red"
      v-show="!showAssay"
    >
      不存在这个新闻!
    </div>

    <div class="foreach">
      <div id="div_vote_id" v-show="showAssay">
        <p align="right">
          上一条：
          <a href="#" @click="goLast" v-show="showlast">123</a>
          下一条：
          <a href="#" @click="goNext" v-show="shownext">456</a>
        </p>
      </div>
      <p align="right">
        【
        <router-link to="/AcademyState">关闭</router-link>】
      </p>
    </div>
    <div id="footer">
      <br />
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import ShowAssay from "@/components/pages/admin/assay_manage/common/ShowAssay";
import Head from "@/components/pages/homepage/common/Head";
import Footer from "@/components/pages/homepage/common/Footer";
import axios from "axios";

export default {
  name: "MainContent",
  data() {
    return {
      showlast: true,
      shownext: true,
      showAssay: true,
      assay: [],
    };
  },
  components: {
    ShowAssay,
    Head,
    Footer,
  },
  mounted() {
    console.log("我是mounted");
    this.fetchDataById();
  },
  methods: {
    goLast() {
      let vm = this;
      axios({
        method: "POST",
        url: "/message/lastMessage",
        data: {
          messagetype: vm.assay.messagetype,
          messageid: vm.assay.messageid,
        },
      }).then((res) => {
        console.log(res);
        if (res.data.code == 200 && res.data.data) {
          vm.assay = res.data.data;
        } else {
          vm.showAssay = false;
          vm.$message.error("已无数据");
          vm.showlast = false;
        }
      });
    },
    goNext() {
      let vm = this;
      axios({
        method: "post",
        url: "/message/nextMessage",
        headers: { "Content-Type": "multipart/form-data" },
        data: {
          messagetype: vm.assay.messagetype,
          messageid: vm.assay.messageid,
        },
      }).then((res) => {
        console.log(res);
        if (res.data.code == 200 && res.data.data) {
          vm.assay = res.data.data;
        } else {
          vm.showAssay = false;
          vm.$message.error("查找失败");
          vm.shownext = false;
        }
      });
    },
    fetchDataById() {
      var id = this.$route.params.messageid;
      var vm = this;
      axios({
        methods: "GET",
        url: "message/getMessage?messageid=" + id,
      }).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          vm.assay = res.data.data;
        } else {
          vm.showAssay = false;
          vm.$message.error("查找失败");
        }
      });
      //   请求上一条
      //  axios({
      //     methods: "GET",
      //     url: "message/getMessage?messageid=" + id-1,
      //   }).then((res) => {
      //     console.log(res);
      //     if (res.data.code == 200) {
      //       vm.assay = res.data.data;
      //     } else {
      //       vm.$message.error("查找失败");
      //     }
      //   });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  margin-top: -14px;
}
.showAssay {
  width: 80%;
  margin: 0 auto;
  position: relative;
}
#footer {
  /* position: relative; */
  /* width: 100%;
  bottom: 0px;
  left: 0px; */
  position: fixed;

  left: 0px;

  bottom: 0px;

  width: 100%;

  z-index: 9999;
}
#div_vote_id {
  margin-top: 30px;
  margin-bottom: 10px;
}

#div_vote_id + p {
  margin-right: 10px;
}
.foreach {
  width: 90%;
  display: block;
  margin-bottom: 200px;
}
</style>
