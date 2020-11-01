import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const URL = "https://5daca7380af117001417072a.mockapi.io";

export default new Vuex.Store({
  state: {
    courses: [],
    lessons: [],
    loading: false,
    selectedCourseId: null
  },
  mutations: {
    setCourses(state, courses) {
      state.courses = courses;
    },

    setLessons(state, lessons) {
      state.lessons = lessons;
    },

    setLessonId(state, lessonId) {
      state.selectedCourseId = lessonId;
    },

    setLoading(state, loading) {
      state.loading = loading;
    }
  },
  actions: {
    async getCourses({ commit }) {
      const request = await axios.get(`${URL}/api/v1/courses`);
      commit("setCourses", request.data);
    },

    async getLessons({ commit }) {
      const request = await axios.get(`${URL}/api/v1/lessons`);
      commit("setLessons", request.data);
    }
  },
  getters: {
    courses: state => {
      return state.courses;
    },

    selectedLessonsByCourseId: state => {
      return state.lessons.filter(el => el.courseId === state.selectedCourseId);
    },

    loading: state => {
      return state.loading;
    }
  },

  modules: {}
});
