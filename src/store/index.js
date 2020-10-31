import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lessons: [],
    selectedLesson: null
  },
  mutations: {
    setLessons(state, lessons) {
      state.lessons = lessons;
    }
  },
  actions: {
    getLessons({ commit }) {
      commit("setLessons", []);
    }
  },
  modules: {}
});
