<template>
  <form-bar>
    <div class="login-container">
      <div class="bar">
        <img src="@/assets/belowpart/logo.png" width="400" />后台系统登录
      </div>
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="10px"
        class="login-form"
      >
        <el-form-item label-width="0px" prop="loginName">
          <el-input
            prefix-icon="el-icon-user"
            type="text"
            v-model="ruleForm.loginName"
            autocomplete="off"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>

        <el-form-item label-width="0px" prop="adminPassword">
          <el-input
            prefix-icon="el-icon-key"
            type="password"
            v-model="ruleForm.adminPassword"
            autocomplete="off"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>

        <el-form-item label-width="0px" class="btn">
          <el-button class="btn1" type="primary" @click="login">登录</el-button>
          <el-button class="btn2" type="info" @click="resetLoginForm"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </form-bar>
</template>

<script>
import FormBar from "./FormBar";
export default {
  name: "Logging",
  components: { FormBar },
  data() {
    return {
      // noticeMessage:'',
      ruleForm: {
        loginName: "admin",
        adminPassword: "123456",
      },
      rules: {
        loginName: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 3,
            max: 20,
            message: "长度在 3 到 20 个字符",
            trigger: "blur",
          },
        ],
        adminPassword: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 3,
            max: 20,
            message: "长度在 3 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // submitForm() {
    //     this.$refs.ruleForm.validate(valid => {
    //         if (valid) {
    //             this.$store.dispatch('Login', this.ruleForm).then(() => {
    //                 this.$router.push({ path: '/' })
    //             })
    //
    //         } else {
    //             console.log('error submit!!')
    //             return false
    //         }
    //     })
    // },
    //重置
    resetLoginForm() {
      this.$refs.ruleForm.resetFields();
    },
    login() {
      this.$refs.ruleForm.validate((valid) => {
        if (!valid) return;
        // this.$http.post('login',this.ruleForm);
        this.$http
          .post("http://dxd.natapp1.cc/Admin/login", this.ruleForm)
          .then((res) => {
            // this.ruleForm = res;
            console.log(res);
            console.log(this.ruleForm);
            //弹窗消息
            // this.noticeMessage = res;
            if (res.status != 200) return this.$message.error("登录失败！");
            this.$message.success("登录成功");
            // window.sessionStorage.setItem('token',res.data.token);
            this.$router.push({ path: "/CollegeNews/学院新闻" });
          });
      });
    },
  },
};
</script>

<style scoped>
.login-container {
  margin-top: 90px;
}
.bar {
  font-size: 17px;
  font-family: "宋体";
  color: #1d4b8f;
  font-weight: bold;
}

.btn1 {
  display: flex;
  justify-content: flex-end;
  margin: 5px 150px;
}
.btn2 {
  display: flex;
  justify-content: flex-end;
  margin: 30px 90px;
}

.login-form {
  width: 100%;
  padding: 40px 20px;
  box-sizing: border-box;
}
</style>
