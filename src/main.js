import Vue from "vue";
import App from "./App.vue";
import store from "./store/index.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import VModal from "vue-js-modal";

Vue.config.productionTip = false;

Vue.use(VModal);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
