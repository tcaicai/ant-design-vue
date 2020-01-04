<template>
  <div id="app">
    {{ count }}
    <br />
    {{ $store.getters.doubleCount }}
    <a-button @click="$store.commit('increment', 2)"> 按钮commit{{ count }}</a-button>
    <a-button @click="$store.dispatch('increment')"> 按钮dispatch{{ count }}</a-button>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
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
