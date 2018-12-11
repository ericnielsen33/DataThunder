import router from "../../router";

const state = {
  token: window.localStorage.getItem("imgur_token") || null
};
const getters = {
  isLoggedIn: state => {
    return !!state.token;
  }
};
const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};
const actions = {
  logout: ({ commit }) => {
    commit("setToken", null);
    window.localStorage.removeItem("imgur_token");
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
