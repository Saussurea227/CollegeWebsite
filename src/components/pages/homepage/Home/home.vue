<template>
  <div>
    <keep-alive>
      <Head></Head>
    </keep-alive>

    <SlideShow></SlideShow>
    <Saps></Saps>
    <Part></Part>
    <keep-alive>
      <secondFoot></secondFoot>
    </keep-alive>
    <keep-alive>
      <Footer></Footer>
    </keep-alive>
  </div>
</template>

<script>
import Head from "@/components/pages/homepage/common/Head";
import SlideShow from "@/components/pages/homepage/common/SlideShow";
import Saps from "./middle2/text_swpu";
import Part from "./middle/Part";
import secondFoot from "@/components/pages/homepage/common/secondFooter";
import Footer from "@/components/pages/homepage/common/Footer";
export default {
  name: "home",
  components: {
    Head,
    SlideShow,
    Saps,
    Part,
    secondFoot,
    Footer,
  },
};
</script>

<style scoped>
</style>