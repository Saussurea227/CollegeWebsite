<template>
  <div>
    <button @click="clickme">去吧！皮卡丘</button>
  </div>
</template>

<script>
export default {
  name: "FirstPage",
  methods: {
    clickme: function () {
      // this.$router.push("/AdminPage");
      this.$router.push("/SuperAdminPage"); //上传图片
      // this.$router.push("/AcademyState");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  color: red;
}
</style>
