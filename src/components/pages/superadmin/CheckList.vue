<template>
  <div>
    <table>
      <thead>
      <th></th>
      <th>用户名</th>
      <th>密码</th>
      <th>操作</th>
      </thead>
      <tbody>
      <tr v-for="item in CheckData"
       v-if="item.adminPermissions==2"

      >
        <td>{{item.adminId}}</td>

        <td>{{item.loginName}}</td>
        <td>{{item.adminPassword}}</td>
        <td width="100px">

          <el-button

            type="primary"
            size="mini"
            @click="handleCheck(item)">审核
          </el-button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
  export default {
    name: "CheckList",
    beforeMount() {
      this.$http.post('http://kqb8nj.natappfree.cc/Admin/getAllAdmin').then(res => {
        console.log(res);
        this.CheckData = res.data
      })
    },
    data() {
      return {
        CheckData: [{
          adminId:'',
          loginName: '',
          adminPassword:'',
          adminPermissions:'2',

        },{

        }
        ]
      }
    },
    methods: {
      handleCheck(item) {
        this.$http.post('http://kqb8nj.natappfree.cc/Admin/modifyRight',item).then(res => {
          console.log(res);
          if(res.status == 200){
            this.$message.success(item.loginName+"已成功成为管理员");
          }
          this.CheckData.splice(item,1)

        })
      },

    },
  }

</script>

<style scoped>

  table {
    border: 1px solid #e9e9e9;
    border-collapse: collapse;
    border-spacing: 0;
  }

  th, td {
    padding:7px  108px;
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
