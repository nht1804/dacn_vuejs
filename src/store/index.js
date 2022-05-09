import Vuex from "vuex";
import axios from "axios";

const cookie = Object.fromEntries(
  document.cookie
    .split("; ")
    .map((v) => v.split(/=(.*)/s).map(decodeURIComponent))
);

export default new Vuex.Store({
  state: {
    userName: null,
    roleLevel: null,
  },
  getters: {},
  actions: {
    test({ commit }){
      commit('authJwt')
    }
  },
  mutations: {
    authJwt(state) {
      axios
        .get(`http://localhost:8080/api/Login/Check/${cookie.token}`)
        .then((res) => {
          state.userName = null;
          state.roleLevel = null;
          let data = res.data;
          if (data.status === "SUCCESS") {
            state.userName = data.data.userName;
            state.roleLevel = data.data.role.roleLevel;
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
});
