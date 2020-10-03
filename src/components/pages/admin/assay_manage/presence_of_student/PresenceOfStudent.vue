<template>
  <div class="app-container">
    <!-- 通知公告 -->
    <div align="right" style="margin-bottom: 10px">
      <el-button
        style="height: 24px; line-height: 1px"
        type="success"
        @click="addassay"
        >添加</el-button
      >
    </div>
    <el-table :data="list" border fit highlight-current-row>
      <el-table-column align="center" label="序号" width="55">
        <template slot-scope="scope">
          <!-- /cuo {{scope.$index+1}} -->
          {{ scope.row.messageid }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="类型" width="100">
        <template slot-scope="scope" align="center">{{
          scope.row.messagetype
        }}</template>
      </el-table-column>
      <el-table-column align="center" label="标题" width="300">
        <template slot-scope="scope" align="center">{{
          scope.row.messagetitle
        }}</template>
      </el-table-column>

      <el-table-column align="center" label="作者" width="100">
        <template slot-scope="scope">{{ scope.row.author }}</template>
      </el-table-column>

      <!-- <el-table-column label="编辑" align="center" >
        <template slot-scope="scope">
            {{scope.row.edit}}
        </template>
      </el-table-column>-->
      <el-table-column label="日期" align="center">
        <template slot-scope="scope">{{ scope.row.createdate }}</template>
      </el-table-column>

      <el-table-column
        label="操作"
        align="center"
        width="300"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="mini"
            @click="editassay(scope.row.messageid)"
            >编辑</el-button
          >

          <el-button
            size="mini"
            type="danger"
            @click="delassay(scope.row.messageid)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- :ID="scope.row.id"  -->
    <!-- <AssayList  :Addassay="addassay" :ID="list.id" :Title="list.title" 
:Autor="list.autor" :Edit="list.edit" :Data="list.data"
 :Editassay="editassay(id)"
 :Delassay="delassay(id)"
    ></AssayList>-->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PresenceOfStudent",
  data() {
    return {
      messagetype: this.$route.params.messagetype,
      list: [],
    };
  },
  mounted() {
    // console.log("我是mounted");
    this.fetchData();
  },
  methods: {
    fetchData() {
      var vm = this;
      axios({
        methods: "GET",
        url: "/message/getNews?messagetype=" + this.messagetype,
      }).then(function (resp) {
        // for (let i = 0; i < resp.data.length; i++) {
        //   if (resp.data[i].messagetype === "学院新闻") {
        //     // vm.list = resp.data[i];
        //     vm.list = resp.data[i];
        //   }
        // }
        // console.log(resp);
        var List = [];
        resp.data.forEach((element, index) => {
          List[index] = resp.data[index];
          vm.list = List;
        });
      });
    },
    //编辑文字
    editassay(id) {
      this.$router.push("/EditAssay/" + id);
    },
    // },
    //删除文章
    delassay(id) {
      var vm = this;
      axios({
        methods: "GET",
        url: "/message/deleteMessages?messageid=" + id,
      })
        .then(function (resp) {
          // console.log(resp);
          // vm.list = resp.data;
          if (resp.data.msg == "删除成功") {
            vm.$message({
              message: "删除成功",
              type: "success",
            });

            //更新列表
            vm.fetchData();
          }
        })
        .catch(function (error) {
          vm.$message.error("删除失败");
        });
    },
    addassay() {
      this.$router.push({
        name: "AddAssay",
        params: {
          messagetype: this.messagetype,
        },
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
