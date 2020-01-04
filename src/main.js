import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import { Button } from "ant-design-vue";

Vue.use(Vuex);
Vue.config.productionTip = false;

Vue.use(Button);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state, n) {
      state.count += n;
    }
  },
  actions: {
    increment({ state }) {
      setTimeout(() => {
        state.count++;
      }, 3000);
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  }
});
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
