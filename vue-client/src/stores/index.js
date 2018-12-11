import Vue from "vue";
import Vuex from "vuex";
import UI from "./modules/ui";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    UI
  }
});