<template>
  <div class="app-container">
    <!-- 学院新闻 -->
    <div align="right" style="margin-bottom:10px;">
      <el-button style="height:24px;line-height:1px;" type="success" :@click="Addassay">添加</el-button>
    </div>
    <el-table :data="list" border fit highlight-current-row>
      <el-table-column align="center" label="序号" width="55">
        <template>
          <!-- slot-scope="scope" -->
          <!-- {{scope.$index+1}} -->
          {{ID}}
        </template>
      </el-table-column>
      <el-table-column align="center" label="标题" width="400">
        <template align="center">
          <!-- slot-scope="scope" -->
          {{Title}}
        </template>
      </el-table-column>
      <el-table-column align="center" label="作者">
        <template>
          <!-- slot-scope="scope" -->
          {{Autor}}
        </template>
      </el-table-column>

      <el-table-column label="编辑" align="center">
        <template>
          <!-- slot-scope="scope" -->
          {{Edit}}
        </template>
      </el-table-column>
      <el-table-column label="日期" align="center">
        <template>
          <!-- slot-scope="scope" -->
          {{Data}}
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center" width="300" class-name="small-padding fixed-width">
        <template>
          <!-- slot-scope="scope" -->
          <el-button type="primary" size="mini" :@click="Editassay">编辑</el-button>
          <!-- <el-button size="mini" type="success">
               文章修改
          </el-button>-->
          <el-button size="mini" type="danger" :@click="Delassay">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "AssayList",

  props: [
    "Addassay",
    "ID",
    "Title",
    "Autor",
    "Edit",
    "Data",
    "Editassay",
    "Delassay",
  ],
  data() {
    return {
      list: [
        {
          id: 4,
          title: "luoxiaoran",
          autor: "geg",
          edit: "xiao",
          data: "2020-07-06",
        },
      ],
    };
  },
  methods: {
    // fetchData(){
    //     var vm=this;
    //     this.axios({
    //         methods:'GET',
    //         url:''
    //     }).then(function(resp){
    //         vm.list=resp.data.
    //     })
    // }
    created() {
      //   this.fetchData()
    },
    //编辑文字
    editassay(id) {
      this.$router.push("/EditAssay/" + id);
    },
    // },
    //删除文章
    delassay(id) {
      var vm = this;
      this.axios({
        methods: "GET",
        url: "",
      })
        .then(function (resp) {
          vm.list = resp.data;
          if (resp.data == "success") {
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
      this.$router.push("/AddAssay");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
