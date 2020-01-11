<template>
  <div id="app">
    <div id="nav">
      <router-link to="/dashboard/analysis">分析页</router-link> |
      <router-link to="/form">表格</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
</script>

<style lang="less"></style>
