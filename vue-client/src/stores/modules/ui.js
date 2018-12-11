const state = {
  leftDrawer: false,
  rightDrawer: false
};
const getters = {
  isLeftOpen: state => {
    return !!state.leftDrawer;
  }
};
const mutations = {
  changeLeftDrawer: state => {
    state.leftDrawer = !state.leftDrawer;
  },
  changeRightDrawer: state => {
    state.rightDrawer = !state.rightDrawer;
  }
};
const actions = {
  changeLeftDrawer: ({ commit }) => {
    console.log("left");
    commit("changeLeftDrawer");
  },
  changeRightDrawer: ({ commit }) => {
    console.log("right");
    commit("changeRightDrawer");
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
