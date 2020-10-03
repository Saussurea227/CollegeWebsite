<template>
  <div>
    <el-form ref="form" label-width="120px">
      <!-- <el-form ref="form" :model="form" label-width="120px"> -->
      <el-form-item label="标题" prop="messagetitle">
        <el-input v-model="assay.messagetitle" />
      </el-form-item>
      <el-form-item label="作者" prop="author">
        <el-input v-model="assay.author" />
      </el-form-item>
      <!-- <el-form-item label="编辑" prop="edit">
      <el-input v-model="assay.edit"/>
      </el-form-item>-->

      <!-- <el-form-item label="时间"  prop="data">
      <el-input v-model="assay.data"/>
      </el-form-item>-->

      <!-- <el-form-item label="文章" prop="content">
      <el-input v-model="assay.content" type="textarea"/>
      </el-form-item>-->
      <el-form-item>
        <el-col>
          <mavon-editor v-model="assay.messagecontent" ref="edit"></mavon-editor>
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit()">编辑</el-button>
        <!-- <el-button type="primary" @click="onSubmit(form)">编辑</el-button> -->
        <!-- <el-button @click="onCancel">Cancel</el-button> -->
      </el-form-item>
    </el-form>
    <!-- 预览地区 -->
    <div>
      <ShowAssay
        :Messagetype="assay.messagetype"
        :MyTitle="assay.messagetitle"
        :Autor="assay.author"
        :Data="assay.createdate"
        :ModelHtml="assay.messagecontent"
        :Html="assay.messagecontent"
      ></ShowAssay>
      <!-- :Data="model.data" -->
      <!-- :ModelHtml="model.html" -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ShowAssay from "@/components/pages/admin/assay_manage/common/ShowAssay";
// import { mavonEditor } from "mavon-editor";
export default {
  name: "EditAssay",
  data() {
    return {
      // content: "",
      assay: [],
    };
  },

  components: {
    ShowAssay,
  },
  mounted() {
    this.fetchDataById();
  },
  methods: {
    fetchDataById() {
      var id = this.$route.params.id;
      var vm = this;
      axios({
        methods: "GET",
        url: "message/getMessage?messageid=" + id,
      }).then(function (resp) {
        // vm.product =resp.data
        console.log(resp);
        if (resp.data.code == 200) {
          vm.assay = resp.data.data;
        } else {
          vm.$message.error("查找失败");
        }
      });
    },
    // change(value, render) {
    //   // render 为 markdown 解析后的结果
    //   //   this.model.html = render;

    //   this.model.messagecontent = render;
    // },

    // 点击编辑按钮，获取所有数据传送给后端接口，实现修改的效果
    // onSubmit(formName) {
    onSubmit() {
      // this.$refs[formName].validate((valid) => {//???
      console.log(this.assay);
      var vm = this;
      // if (valid) {
      axios({
        url: "/message/updateMessage",
        method: "post",
        data: vm.assay,
        // messageid: vm.assay.messageid,
        // messagetitle: vm.assay.messagetitle,
        // autor: vm.assay.autor,
        // messagecontent: vm.assay.messagecontent,
        //   Message: vm.assay,
        // },
      }).then((resp) => {
        console.log(resp);
        //如果成功返回得是成功
        if (resp.data.msg == "修改成功") {
          vm.$message.success("编辑成功");
          //返回管理员首页
          this.$router.go(-1);
        } else {
          vm.$message.error("编辑失败");
        }
      });
      // } else {
      //  this.$message.error('失败');
      // return false;
      // }
      //});
    },
    // ToText2(HTML) {
    //   var input = HTML;
    //   return input
    //     .replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi, "")
    //     .replace(/<[^>]+?>/g, " ")
    //     .replace(/\s+/g, "  ")
    //     .replace(/ /g, "  ")
    //     .replace(/>/g, "  ");
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.line {
  text-align: center;
}
</style>
