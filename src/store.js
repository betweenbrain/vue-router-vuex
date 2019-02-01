import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    routing: false,
  },
  mutations: {
    isRouting(state) {
      state.routing = !state.routing;
    },
  },
  actions: {},
});
