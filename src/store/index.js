import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    openedCapModalId: undefined,
    capsData: []
  },

  getters: {},

  mutations: {
    toggleCapModal(store, id) {
      store.openedCapModalId = id === store.openedCapModalId ? undefined : id;
    },
    setCapsData(store, capsData) {
      store.capsData = capsData;
    }
  },

  actions: {
    fetchCaps(context) {
      fetch("http://localhost:3000/caps")
        .then((response) => response.json())
        .then((json) => {
          context.commit("setCapsData", json);
        });
    }
  }
});
