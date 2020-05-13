import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},

  getters: {},

  mutations: {},

  actions: {
    fetchUsers({ commit }, { self })  {         
      Vue.http.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        commit("FETCH_USERS", response.body);
        self.filterUsers(); 
      })
      .catch((error) => {
        console.log(error.statusText);
      });
    }
  }
});

// App.vue
// import store from "../store/store"

// export default {
//   name: 'users',
//   created() {
//     this.$store.dispatch("fetchUsers", { self: this })       
//   },
//   methods:{
//     filterUsers() {
//       //do something with users
//        console.log("Users--->",this.$store.state.users)       
//     }
//   }
// }


// ---------------------

// ES6
// #####
//User.vue
// created() {
//   this.$store.dispatch("fetchUser").then(() => {
//     console.log("This would be printed after dispatch!!")
//    })
// }

// //store.js
// actions: {
//     fetchUser({ commit }) {
//         return new Promise((resolve, reject) => {
//             Vue.http.get("https://jsonplaceholder.typicode.com/users")
//             .then((response) => {
//                 commit("FETCH_USERS", response.body);
//                 resolve();
//             })
//             .catch((error) => {
//                 console.log(error.statusText);
//             });
//         });
//     }
// }