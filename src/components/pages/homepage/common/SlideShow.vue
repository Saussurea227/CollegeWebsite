<template>
  <div>
    <div class="flashBoxu_u3_">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in images" :key="item">
          <!-- <h3>{{ item }}</h3> -->

          <h3>
            <img
              :src="item"
              border="0"
              width="1100"
              height="260"
              align="center"
            />
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div v-for="item in num" :key="item"></div>
  </div>
</template>

<script>
import bus from "@/components/bus/bus.js";
var images = [
  "https://www.swpu.edu.cn/is/images/19/07/19/4bletp4oo8/01.jpg",
  "https://www.swpu.edu.cn/is/images/19/07/19/4bletp4oo8/03.jpg",
  "https://www.swpu.edu.cn/is/images/19/07/19/4bletp4oo8/04.jpg",
  "https://www.swpu.edu.cn/is/images/19/07/19/4bletp4oo8/06.jpg",
];
export default {
  name: "SlideShow",
  data() {
    return {
      //监听ima若发生改变重新渲染
      images: images,
      num: ["1", "2", "3", "4"],
      iindex: 0,
      address: [],
    };
  },
  methods: {
    getimage(imgesList) {
      // var this_ = this;

      if (this.iindex < 4) {
        console.log("我是主页面轮播");
        console.log("imgesList");

        this.address = "http://dxd.natapp1.cc" + imgesList[0].imgname;

        this.images[this.iindex] = this.address;

        this.iindex++;
      } else {
        this.$message({
          message: "已满4条",
          type: "error",
        });
      }
    },
  },
  created() {},
  mounted() {
    console.log("我是mounted");
    var this_ = this;

    // var address = [];
    bus.$on("addpict", function (imgesList) {
      this_.getimage(imgesList);
    });
    console.log(images);
  },
  // destroyed() {
  //   bus.$off("addpict");
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-carousel__item h3 {
  /* color: #475669; */
  font-size: 18px;
  /* opacity: 0.75; */
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  /* background-color: #99a9bf; */
  background-color: white;
}

/* .el-carousel__item:nth-child(2n+1) {
    /* background-color: #d3dce6; */
/* background-color:RED;
  } */

.flashBoxu_u3_ {
  width: 1100px;

  margin: 0 auto;
}
.flashBoxu_u3_ >>> .el-carousel__indicators {
  position: absolute;
  margin: 0px;
  bottom: 9px;
  right: 10px;
}

.flashBoxu_u3_ >>> .el-carousel__button {
  display: block;
  float: left;
  width: 12px;
  height: 12px;
  line-height: 12px;
  margin-right: 3px;
  border: 0px solid #999;
  background: #f0f0f0;
  text-align: center;
  cursor: pointer;
}
.flashBoxu_u3_ >>> .el-carousel__indicators--horizontal {
  left: 90%;
}
.flashBoxu_u3_ >>> .el-carousel__arrow {
  display: none;
}
</style>
