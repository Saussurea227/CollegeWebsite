<template>
  <div class="all" >
    <table>
      <thead>
      <th></th>
      <th>用户名</th>
      <th>密码</th>
      <th>操作</th>
      </thead>
      <tbody>
      <tr v-for="item in tableData"
      v-if="item.adminPermissions==2"
      >
        <td>{{item.adminId}}</td>
        <!-- <td v-for="value in item">{{value}}</td>-->
        <td>{{item.loginName}}</td>
        <td>{{item.adminPassword}}</td>
        <td width="100px">

          <el-button
            type="success"
            size="mini"
            @click="DropPerMiss(item)">移除管理员
          </el-button>
        </td>

        <!--<td>{{getFinalPrice(item.price)}}</td>-->

      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
  export default {
    name: "AdminList",
    data() {
      return {
        tableData: [
          {
            adminId:'1',
            loginName: '4574567',
            adminPassword: '45645',
            adminPermissions: 2
          }
        ]
      }

    },
    methods: {
      DropPerMiss(item) {
        this.$http.post('http://kqb8nj.natappfree.cc/Admin/modifyRight',item).then(res => {
          console.log(res);
          if(res.status == 200){
            this.$message.success(item.loginName+"已不是管理员");
          }
          this.tableData.splice(item,1)
        })
      }

    },
    created() {
      this.$http.post('http://kqb8nj.natappfree.cc/Admin/getAllAdmin').then(res => {
        console.log(res.data);
        this.tableData = res.data
      })

    }
  }
</script>

<style scoped>
  table {
    border: 1px solid #e9e9e9;
    border-collapse: collapse;
    border-spacing: 0;
  }

  th, td {
    padding:7px  100px;
    border: 1px solid #e9e9e9;

  }

  th {
    background-color: #f7f7f7;
    color: #5c6b77;
    font-weight: 600;
    padding:20px

  }
.all{
  margin-top: 0;
}


</style>
