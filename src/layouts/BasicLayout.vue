<template>
  <div>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider :trigger="null" collapsible v-model="collapsed">
        <div class="logo" />
        <Left></Left>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="header-icon"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="collapsed = !collapsed"
          ></a-icon>
          <Header></Header>
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <Footer></Footer>
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <SettingDrawer />
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import Left from "./Left";
import SettingDrawer from "../components/SettingDrawer";
export default {
  name: "BasicLayout.vue",
  data() {
    return {
      collapsed: false
    };
  },
  components: {
    Header,
    Footer,
    Left,
    SettingDrawer
  }
};
</script>

<style scoped>
.header-icon {
  padding: 0 20px;
  line-height: 64px;
  font-size: 20px;
}
.header-icon:hover {
  background: #eeeeee;
}
</style>
