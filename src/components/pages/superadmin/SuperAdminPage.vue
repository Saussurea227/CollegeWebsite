<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu

        >

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>学院动态
            </template>
            <el-menu-item-group :default-active="1 - 1">
              <!-- <template slot="title">分组一</template> -->
              <el-menu-item index="1-1">
                <!-- v-if="$route.meta.keepAlive" -->
                <router-link to="/SuperAdminPage/CollegeNews/学院新闻">学院新闻</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <!-- <keep-alive> -->
                <!-- v-if="$route.meta.keepAlive" -->
                <router-link to="/SuperAdminPage/Announcement/通知公告">通知公告</router-link>
                <!-- </keep-alive> -->
              </el-menu-item>
              <!-- <el-menu-item index="1-3"><router-link to="/PresenceOfStudent/1">學子風采</router-link></el-menu-item> -->
              <el-menu-item index="1-3">
                <!-- <ke -->
                <!-- v-if="$route.meta.keepAlive" -->
                <router-link
                  :to="{
                    name: '/SuperAdminPage/PresenceOfStudent',
                    params: { messagetype: '学子风采' },
                  }"
                >学子风采</router-link
                >
                <!-- </keep-alive> -->
              </el-menu-item>
              <el-menu-item index="1-4">
                <!-- <keep-alive> -->
                <!-- v-if="$route.meta.keepAlive" -->
                <router-link to="/SuperAdminPage/AducationOfTeaching/教育教学"
                >教育教学</router-link
                >
                <!-- </keep-alive> -->
              </el-menu-item>
              <el-menu-item index="1-5">
                <!-- <keep-alive> -->
                <router-link to="/SuperAdminPage/CollectStudent/招生就业"
                >招生就业</router-link
                >
                <!-- </keep-alive> -->
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>


          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>轮播图状态
            </template>
            <el-menu-item-group>
              <!-- <template slot="title">分组一</template> -->
              <el-menu-item index="2-1">
                <!-- <keep-alive> -->
                <router-link to="/SuperAdminPage/SlideShowadmin0">图片处理</router-link>
                <!-- </keep-alive> -->
              </el-menu-item>
              <!-- <el-menu-item index="2-2">选项2</el-menu-item> -->
            </el-menu-item-group>
            <!-- <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>-->
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>管理员审核
            </template>
            <el-menu-item-group :default-active="3 - 1">
              <!-- <template slot="title">分组一</template> -->
              <el-menu-item index="3-1">
                <!-- <keep-alive> -->
                <router-link to="/SuperAdminPage/CheckList">用户处理</router-link>
                <!-- </keep-alive> -->
              </el-menu-item>

              <el-menu-item index="3-2">
                <!-- <keep-alive> -->
                <router-link to="/SuperAdminPage/AdminList">取消管理员</router-link>
                <!-- </keep-alive> -->
              </el-menu-item>
              <!-- <el-menu-item index="2-2">选项2</el-menu-item> -->
            </el-menu-item-group>
            <!-- <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>-->
          </el-submenu>


          <!-- <el-submenu index="3">
              <template slot="title"><i class="el-icon-setting"></i>學子風采</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
          <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
          </el-submenu>-->
        </el-menu
                 >
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>

              <el-dropdown-item>
                <router-link to="/Home">主页</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/Logout">退出</router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>我是超级管理员</span>
        </el-header>

        <el-main>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
          <!-- <el-table :data="tableData">
        <el-table-column prop="uid" label="用戶ID" width="140">
        </el-table-column>
        <el-table-column prop="uname" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="age" label="年齡">
        </el-table-column>
          </el-table>-->
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>

  export default {
    name: "SuperAdminPage",

    data () {
      return {
        activeIndex: "['1-1']",
        activeName: "collegeNews",
        tableData: [
          {
            uid: "1001",
            uname: "小王",
            age: "20",
          },
        ],
      };
    },

    methods: {
      // logout:function(){
      //   //回到登陆页面
      //   this.$router.push("/Logout")
      // }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header {
    background-color: rgba(0, 139, 139, 0.6);
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: rgb(211, 35, 35);
  }

  a {
    text-decoration: none;
    color: #000;
  }

  .router-link-active {
    text-decoration: none;
    font-size: 15px;
    font-weight: bold;
    color: #008b8b;
  }
</style>
