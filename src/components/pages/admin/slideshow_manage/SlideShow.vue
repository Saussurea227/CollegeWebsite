<template>
  <div class="app-container">
    <!-- 通知公告 -->
    <div align="right" style="margin-bottom: 10px">
      <!-- <el-button
        style="height: 24px; line-height: 1px"
        type="success"
        @click="addpicture"
        >添加</el-button
      > -->
      <el-button
        class="fileParent"
        type="success"
        icon="el-icon-plus"
        style="background: #273c48; height: 35px; line-height: 3px; margin: 5px"
        @change="addpht"
      >
        <!-- <input
          class="file"
          type="file"
          @change="uploadFile"
          multiple="multiple"
        />//上传框
        <img :src="tempImg" v-if="tempImg" alt /> -->

        <input class="file" type="file" @change="addpht()" ref="img" />
        <!-- //change监听表单完成文件选择 ref为了在js里找到DOM元素 -->
        <img :src="picSrc" v-if="picSrc" style="width: 200px; height: 200px" />
      </el-button>
    </div>
    <el-table :data="list" border fit highlight-current-row>
      <el-table-column align="center" label="序号" width="155">
        <template slot-scope="scope">
          <!-- /cuo {{scope.$index+1}} -->
          {{ scope.row.id  }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="类型" width="800">
        <template align="center" slot-scope="scope">
          <!-- {{  -->
          <img
            :src="'http://dxd.natapp1.cc' + scope.row.imgname"
            style="width: 600px; height: 260px"
          />
          <!-- //}} -->
        </template>
      </el-table-column>

      <el-table-column
        label="操作"
        align="center"
        width="300"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="scope">
          <!-- <el-button type="primary" size="mini" @click="editassay(scope.row.messageid)">编辑</el-button> -->
          <el-button
            size="mini"
            type="danger"
            @click="usepicture($event, scope.row.id)"
            ref="use"
            :id="scope.row.id"
            >使用</el-button
          >
          <el-button size="mini" type="danger" @click="delpicture(scope.row.id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
import bus from "@/components/bus/bus.js";

export default {
  name: "SlideShow",
  mounted() {
    this.fetchData();
    // Bus.$emit("message", this.list);
  },
  data() {
    return {
      list: [],
      picSrc: null,
      Slidelist: [],
      fasong: false,
    };
  },
  // beforeDestroy() {
  //   if (this.fasong) {
  //     // bus.$emit("addpict", this.Slidelist); //发送数组给轮播图
  //     // this.$message({
  //     //   message: "添加成功",
  //     //   type: "success",
  //     // });
  //   }
  // },
  methods: {
    async addpht() {
      var that = this;
      //注意这里要使用that保存this，不然下方调用f.onload的时候会出现问题
      console.log(this.$refs.img.files);

      var f = new FileReader();
      var fil = this.$refs.img.files[0];

      f.readAsDataURL(this.$refs.img.files[0]);
      f.onload = function (e) {
        that.picSrc = f.result;
      };

      let parame = new FormData(); // 创建form对象
      parame.append("file", fil);
      await that
        .axios({
          method: "POST",
          url: "/Img/uploadImg",
          data: parame,
        })
        .then((resp) => {
          // that.picSrc = resp.data;
          console.log(that.list[that.list.length - 1]);

          that.$notify({
            duration: 3000,
            title: "成功",
            message: "上传成功！",
            type: "success",
          });
        });
    },
    usepicture(e, Id) {
      var index = 0;
      var this_ = this;
      this.list.forEach((ele, i) => {
        if (this_.list[i].id == Id && this_.Slidelist.length <= 4) {
          var target = event.target;
          // target.attr("disabled", true);
          // this_.$refs.use.attr("disabled", true);
          // var using = this_.use;

          this_.Slidelist[index] = this_.list[i];
          target.innerText = "已添加";
          // console.log(this_.$refs.use[i].text);
          index++;
          // this_.use = this_.$refs.use[i].innerText;
          // this_.$refs.use.$el.innerText = using;
          // this_.$refs.use.setAttribute("disabled", selections.length == 0);

          bus.$emit("addpict", this_.Slidelist); //发送数组给轮播图
          this_.$message({
            message: "添加成功",
            type: "success",
          });
        } else if (this_.Slidelist.length > 4) {
          this_.$message({
            message: "最多只能加4条噢",
            type: "error",
          });
        }
      });
    },
    fetchData() {
      var vm = this;
      axios({
        methods: "GET",
        url: "/Img/getAllImg",
      }).then((resp) => {
        console.log(resp);
        var List = [];
        resp.data.forEach((element, index) => {
          //   if (resp.data[index].messagetype === vm.messagetype) {
          List[index] = resp.data[index];

          vm.list = List;
          //   }
        });
      });
    },

    //编辑文字
    editassay(id) {
      this.$router.push("/EditAssay/" + id);
    },
    // },
    //删除文章
    delpicture(id) {
      var vm = this;
      axios({
        methods: "GET",
        url: "/Img/deleteImg?Imgid=" + id,
      })
        .then(function (resp) {
          vm.list = resp.data;
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
<style scoped>
.fileParent {
  position: relative;
}
.fileParent img {
  position: absolute;
  width: 60px;
  height: 39px;
  left: 0;
  top: 0;
}
.file {
  position: absolute;
  left: 0;
  opacity: 0;
}
</style>
