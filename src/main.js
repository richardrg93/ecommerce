import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrapdistcss\bootstrap.css";

import "bootstrapdistjs\bootstrap.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
