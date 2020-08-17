import Vue from "vue";
import App from "./App.vue";
import store from "./store/index.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import VModal from "vue-js-modal";
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false;

Vue.use(VModal);
Vue.use(VueLazyload, {
  preload: 1.5,
  attempt: 1
});

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
