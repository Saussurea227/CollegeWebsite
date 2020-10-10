<template>
    <form-bar>
   <div class="login-container">
       <div class="bar" ><img src="@/assets/belowpart/logo.png" width="400">
       </div>
       <el-form

               :model="ruleForm"
               status-icon
               :rules="rules"
               ref="ruleForm" label-width="100px"
               class="demo-ruleForm">

           <el-form-item label="用户名" prop="loginName">
               <el-input v-model="ruleForm.loginName"></el-input>
           </el-form-item>

           <el-form-item label="密码" prop="adminPassword">
               <el-input type="password" v-model="ruleForm.adminPassword" autocomplete="off"></el-input>
           </el-form-item>

           <el-form-item label="确认密码" prop="checkPass">
               <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
           </el-form-item>

           <el-form-item class="btn">
               <el-button type="primary" @click="submitForm('ruleForm')" class="btn1">注册</el-button>
               <el-button @click="resetForm('ruleForm')">重置</el-button>
           </el-form-item>

       </el-form>
    </div>
    </form-bar>

</template>

<script>
    import FormBar from "../login/FormBar";
    export default {
        name: "Register",
        components:{
            FormBar
        },
        data(){
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.adminPassword) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    loginName:'',
                    adminPassword: '',
                    // checkPass: '',
                },

                rules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],

                }
            };
        },

        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$http.post('http://dxd.natapp1.cc/Admin/registerUser',  this.ruleForm).then(res => {
                            console.log(res.data);

                            if(res.status != 200)
                                return this.$message.error("注册失败！")
                            this.$message.success("注册成功");
                            this.$router.push({ path: '/Logging' })
                            });
                        }
                    else {
                        return this.$message.error(res.msg)
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }

</script>

<style scoped>
  .btn{
    margin-top: 50px;
    display: flex;
    justify-content: space-around;

  }
  .btn1 {

    margin-right: 90px;

  }
</style>
