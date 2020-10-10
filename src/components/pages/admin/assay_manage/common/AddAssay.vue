<template>
  <div>
    <!-- {{this.$route.params.messagetype}} -->
    <el-row>
      <el-form>
        <el-form-item label="文章标题">
          <el-col :span="6">
            <el-input v-model="model.messagetitle"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="文章作者">
          <el-col :span="6">
            <el-input v-model="model.author" />
          </el-col>
        </el-form-item>
        <div style="color:red;font-size:10px;margin:10px;">※ 多个空格使用：& nbsp ;</div>
        <el-form-item>
          <el-col>
            <!-- <mavon-editor v-model="model.content"></mavon-editor>-->
            <mavon-editor ref="md" @imgAdd="$imgAdd" @change="change" style="min-height: 500px" />
          </el-col>
        </el-form-item>

        <el-form-item align="center">
          
          <el-col>
            <el-button type="primary" size="small" @click="submit">发表</el-button>
          </el-col>
        </el-form-item>
      </el-form>
    </el-row>

    <div
      style="background-clip: padding-box;
width:150px;
text-align:center;

background-color:orange;
color:white;
font-size:40px;
font-weight:500;
border: 10px solid rgba(255, 255, 255, .9);"
    >预览</div>

    <!-- 预览地区 -->
    <div>
      <ShowAssay
        :Messagetype="this.$route.params.messagetype"
        :MyTitle="model.messagetitle"
        :Autor="model.author"
        :Data="model.createdate"
        :ModelHtml="model.messagecontent"
        :Html="model.messagecontent"
      ></ShowAssay>
      <!-- :Data="model.data" -->
      <!-- :ModelHtml="model.html" -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mavonEditor } from "mavon-editor";
import ShowAssay from "@/components/pages/admin/assay_manage/common/ShowAssay";

export default {
  name: "AddAssay",
  data() {
    return {
      model: {
        // data: "",
        author: "",
        messagetitle: "标题",
        // content: ' 为了提高信息学院全体学生审美素养，丰富疫情期间同学们的生活，5月23日至28日，信息学院开展了“美育云端课堂”学习活动。本次活动由信息学院学生会组织拓展部牵头，',
        messagetype: this.$route.params.messagetype,

        messagecontent: "", //html
      },
    };
  },

  components: {
    mavonEditor,
    ShowAssay,
  },
  created() {
    //   htmlcontent=  this.$refs.md.d_render
  },
  methods: {
    submit() {
      axios({
        url: "/message/insertMessage",
        method: "post",
        data: this.model,
      }).then((res) => {
        console.log(res);

        if (res.status === 200) {
          this.$message.success("发布成功");
          // this.$router.push("/CollegeNews/" + this.model.messagetype);
          this.$router.go(-1);
        } else {
          this.$message.success("发布失败");
          // this.$router.push("/CollegeNews/" + this.model.messagetype);
          this.$router.go(-1);
        }
      });
      // // axios
      //   .post("http://q6v5va.natappfree.cc/message/insertMessage", this.model)
      //   .then((res) => {
      //     console.log("submit :" + res);
      // if (res.data.Code === 200) {

      // this.$message.success("发布成功");
      // this.$router.push("/CollegeNews");
      // } else {
      // this.$message.success("发布失败");
      // }
      // });
    },
    // 将图片上传到服务器，返回地址替换到md中
    $imgAdd(pos, $file) {
      var formdata = new FormData();
      formdata.append("file", $file);
      axios({
        url: "/message/uploadImg",
        method: "post",
        data: formdata,
      }).then((res) => {
        console.log(res);
        this.$refs.md.$img2Url(pos, axios.defaults.baseURL + res.data.data);
      });
    },
    change(value, render) {
      // render 为 markdown 解析后的结果
      //   this.model.html = render;
      this.model.messagecontent = render;
    },
    // ToText(HTML) {
    //   var input = HTML;
    //   return input
    //     .replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi, "")
    //     .replace(/<[^>]+?>/g, "")
    //     .replace(/\s+/g, " ")
    //     .replace(/ /g, " ")
    //     .replace(/>/g, " ");
    // },
  },
};
</script>





<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-family: 黑体;
  font-size: 15pt;
  margin: 0;
}
.miaoshu {
  white-space: pre-wrap;
}
.showassay >>> p {
  text-indent: 2em;
  width: 80%;
  margin: 0 auto;
}
.showassay >>> img {
  display: block;
  width: 45%;
  height: 100%;

  background-clip: border-box;
  line-height: 150%;

  text-align: center;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 10px;
}
</style>
