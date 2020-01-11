<template>
  <div>
    <Header></Header>
    <Left></Left>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import Left from "./Left";
export default {
  name: "BasicLayout.vue",
  components: {
    Header,
    Footer,
    Left
  }
};
</script>

<style scoped></style>
